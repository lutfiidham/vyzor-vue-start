<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:permissions,name|regex:/^[a-z0-9\-_.]+$/',
        ], [
            'name.regex' => 'Permission name must be lowercase and can only contain letters, numbers, dots, dashes and underscores (e.g., users.view)',
        ]);

        $permission = Permission::create([
            'name' => $validated['name'],
            'guard_name' => 'web',
        ]);

        return back()->with([
            'success' => 'Permission created successfully',
            'permission' => [
                'id' => $permission->id,
                'name' => $permission->name,
            ]
        ]);
    }

    public function bulkStore(Request $request)
    {
        $validated = $request->validate([
            'module' => 'required|string|max:255|regex:/^[a-z0-9\-_]+$/',
            'actions' => 'required|array|min:1',
            'actions.*' => 'required|string|in:view,create,edit,delete',
        ], [
            'module.regex' => 'Module name must be lowercase and can only contain letters, numbers, dashes and underscores',
            'actions.required' => 'Please select at least one action',
        ]);

        $created = [];
        $createdPermissions = [];
        $skipped = [];

        foreach ($validated['actions'] as $action) {
            $permissionName = $validated['module'] . '.' . $action;
            
            // Check if permission already exists
            if (Permission::where('name', $permissionName)->exists()) {
                $skipped[] = $permissionName;
                continue;
            }

            $permission = Permission::create([
                'name' => $permissionName,
                'guard_name' => 'web',
            ]);

            $created[] = $permissionName;
            $createdPermissions[] = [
                'id' => $permission->id,
                'name' => $permission->name,
            ];
        }

        $message = '';
        if (count($created) > 0) {
            $message .= 'Created ' . count($created) . ' permission(s): ' . implode(', ', $created);
        }
        if (count($skipped) > 0) {
            $message .= (count($created) > 0 ? '. ' : '') . 'Skipped ' . count($skipped) . ' existing permission(s): ' . implode(', ', $skipped);
        }

        return back()->with([
            'success' => $message,
            'permissions' => $createdPermissions,
        ]);
    }

    public function update(Request $request, Permission $permission)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:permissions,name,' . $permission->id . '|regex:/^[a-z0-9\-_.]+$/',
        ], [
            'name.regex' => 'Permission name must be lowercase and can only contain letters, numbers, dots, dashes and underscores (e.g., users.view)',
        ]);

        $permission->update([
            'name' => $validated['name'],
        ]);

        return back()->with([
            'success' => 'Permission updated successfully',
            'permission' => [
                'id' => $permission->id,
                'name' => $permission->name,
            ]
        ]);
    }

    public function destroy(Permission $permission)
    {
        if ($permission->roles()->count() > 0) {
            return back()->with('error', 'Cannot delete permission that is assigned to roles');
        }

        $permissionId = $permission->id;
        $permission->delete();

        return back()->with([
            'success' => 'Permission deleted successfully',
            'deletedId' => $permissionId,
        ]);
    }
}
