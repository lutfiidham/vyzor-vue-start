<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $menus = Menu::with(['parent', 'children', 'roles'])
            ->when($request->search, function ($query, $search) {
                $query->where('title', 'like', "%{$search}%");
            })
            ->when($request->status, function ($query, $status) {
                $query->where('is_active', $status === 'active');
            })
            ->when($request->type, function ($query, $type) {
                $query->where('type', $type);
            })
            ->orderBy('order')
            ->get();

        // Transform for tree structure
        $menuTree = $this->buildMenuTree($menus);

        $roles = Role::all()->map(function ($role) {
            return [
                'id' => $role->id,
                'name' => $role->name,
            ];
        });

        $parentMenus = Menu::whereNull('parent_id')
            ->active()
            ->ordered()
            ->get(['id', 'title']);

        return Inertia::render('Admin/Menus/Index', [
            'menus' => $menuTree,
            'roles' => $roles,
            'parentMenus' => $parentMenus,
            'filters' => [
                'search' => $request->search,
                'status' => $request->status,
                'type' => $request->type,
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $parentMenus = Menu::whereNull('parent_id')
            ->active()
            ->ordered()
            ->get(['id', 'title']);

        $roles = Role::all()->map(function ($role) {
            return [
                'id' => $role->id,
                'name' => $role->name,
            ];
        });

        return Inertia::render('Admin/Menus/Create', [
            'parentMenus' => $parentMenus,
            'roles' => $roles,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:100',
            'parent_id' => 'nullable|exists:menus,id',
            'icon' => 'nullable|string|max:1000',
            'path' => 'required_if:type,link|nullable|string|max:255',
            'type' => ['required', Rule::in(['menutitle', 'link', 'sub'])],
            'badge_text' => 'nullable|string|max:50',
            'badge_color' => 'nullable|string|max:50',
            'order' => 'nullable|integer|min:0',
            'is_active' => 'boolean',
            'target' => 'nullable|in:_self,_blank',
            'description' => 'nullable|string',
            'role_ids' => 'required|array|min:1',
            'role_ids.*' => 'exists:roles,id',
        ], [
            'role_ids.required' => 'At least one role must be selected',
            'path.required_if' => 'Path is required when type is link',
        ]);

        try {
            DB::beginTransaction();

            $menu = Menu::create([
                'parent_id' => $validated['parent_id'],
                'title' => $validated['title'],
                'icon' => $validated['icon'],
                'path' => $validated['path'] ?? null,
                'type' => $validated['type'],
                'badge_text' => $validated['badge_text'] ?? null,
                'badge_color' => $validated['badge_color'] ?? null,
                'order' => $validated['order'] ?? 0,
                'is_active' => $validated['is_active'] ?? true,
                'target' => $validated['target'] ?? '_self',
                'description' => $validated['description'] ?? null,
            ]);

            $menu->roles()->attach($validated['role_ids']);

            $this->clearMenuCache();

            DB::commit();

            return redirect()->route('admin.menus.index');
        } catch (\Exception $e) {
            DB::rollBack();
            
            return back()->withErrors([
                'error' => 'Failed to create menu: ' . $e->getMessage()
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu)
    {
        $menu->load(['roles', 'parent', 'children']);

        $parentMenus = Menu::whereNull('parent_id')
            ->where('id', '!=', $menu->id)
            ->active()
            ->ordered()
            ->get(['id', 'title']);

        $roles = Role::all()->map(function ($role) {
            return [
                'id' => $role->id,
                'name' => $role->name,
            ];
        });

        $menuData = [
            'id' => $menu->id,
            'title' => $menu->title,
            'parent_id' => $menu->parent_id,
            'icon' => $menu->icon,
            'path' => $menu->path,
            'type' => $menu->type,
            'badge_text' => $menu->badge_text,
            'badge_color' => $menu->badge_color,
            'order' => $menu->order,
            'is_active' => $menu->is_active,
            'target' => $menu->target,
            'description' => $menu->description,
            'role_ids' => $menu->roles->pluck('id'),
            'children_count' => $menu->children()->count(),
        ];

        return Inertia::render('Admin/Menus/Edit', [
            'menu' => $menuData,
            'parentMenus' => $parentMenus,
            'roles' => $roles,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Menu $menu)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:100',
            'parent_id' => 'nullable|exists:menus,id|not_in:' . $menu->id,
            'icon' => 'nullable|string|max:1000',
            'path' => 'required_if:type,link|nullable|string|max:255',
            'type' => ['required', Rule::in(['menutitle', 'link', 'sub'])],
            'badge_text' => 'nullable|string|max:50',
            'badge_color' => 'nullable|string|max:50',
            'order' => 'nullable|integer|min:0',
            'is_active' => 'boolean',
            'target' => 'nullable|in:_self,_blank',
            'description' => 'nullable|string',
            'role_ids' => 'required|array|min:1',
            'role_ids.*' => 'exists:roles,id',
        ], [
            'role_ids.required' => 'At least one role must be selected',
            'path.required_if' => 'Path is required when type is link',
            'parent_id.not_in' => 'Menu cannot be its own parent',
        ]);

        try {
            DB::beginTransaction();

            $menu->update([
                'parent_id' => $validated['parent_id'],
                'title' => $validated['title'],
                'icon' => $validated['icon'],
                'path' => $validated['path'] ?? null,
                'type' => $validated['type'],
                'badge_text' => $validated['badge_text'] ?? null,
                'badge_color' => $validated['badge_color'] ?? null,
                'order' => $validated['order'] ?? 0,
                'is_active' => $validated['is_active'] ?? true,
                'target' => $validated['target'] ?? '_self',
                'description' => $validated['description'] ?? null,
            ]);

            $menu->roles()->sync($validated['role_ids']);

            $this->clearMenuCache();

            DB::commit();

            return redirect()->route('admin.menus.index');
        } catch (\Exception $e) {
            DB::rollBack();
            
            return back()->withErrors([
                'error' => 'Failed to update menu: ' . $e->getMessage()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu)
    {
        try {
            DB::beginTransaction();

            $childrenCount = $menu->children()->count();
            if ($childrenCount > 0) {
                return redirect()->back()
                    ->with('error', "Cannot delete menu. It has {$childrenCount} child menus.");
            }

            $menu->roles()->detach();
            $menu->delete();

            $this->clearMenuCache();

            DB::commit();

            return redirect()->route('admin.menus.index')
                ->with('success', 'Menu deleted successfully');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()
                ->with('error', 'Failed to delete menu: ' . $e->getMessage());
        }
    }

    /**
     * Reorder menu items
     */
    public function reorder(Request $request)
    {
        $validated = $request->validate([
            'menus' => 'required|array',
            'menus.*.id' => 'required|exists:menus,id',
            'menus.*.order' => 'required|integer|min:0',
            'menus.*.parent_id' => 'nullable|exists:menus,id',
        ]);

        try {
            DB::beginTransaction();

            foreach ($validated['menus'] as $menuData) {
                Menu::where('id', $menuData['id'])
                    ->update([
                        'order' => $menuData['order'],
                        'parent_id' => $menuData['parent_id'],
                    ]);
            }

            $this->clearMenuCache();

            DB::commit();

            return redirect()->back()
                ->with('success', 'Menu order updated successfully');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()
                ->with('error', 'Failed to reorder menu: ' . $e->getMessage());
        }
    }

    /**
     * Toggle menu active status
     */
    public function toggle(Menu $menu)
    {
        try {
            $menu->update(['is_active' => !$menu->is_active]);
            $this->clearMenuCache();

            return redirect()->back()
                ->with('success', 'Menu status updated successfully');
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'Failed to update menu status: ' . $e->getMessage());
        }
    }

    /**
     * Build tree structure from flat menu list
     */
    private function buildMenuTree($menus, $parentId = null): array
    {
        $tree = [];

        foreach ($menus as $menu) {
            if ($menu->parent_id == $parentId) {
                $menuData = [
                    'id' => $menu->id,
                    'parent_id' => $menu->parent_id,
                    'title' => $menu->title,
                    'icon' => $menu->icon,
                    'path' => $menu->path,
                    'type' => $menu->type,
                    'badge_text' => $menu->badge_text,
                    'badge_color' => $menu->badge_color,
                    'order' => $menu->order,
                    'is_active' => $menu->is_active,
                    'target' => $menu->target,
                    'description' => $menu->description,
                    'parent_title' => $menu->parent?->title,
                    'children_count' => $menu->children->count(),
                    'roles' => $menu->roles->map(function ($role) {
                        return [
                            'id' => $role->id,
                            'name' => $role->name,
                        ];
                    }),
                    'children' => $this->buildMenuTree($menus, $menu->id),
                ];

                $tree[] = $menuData;
            }
        }

        return $tree;
    }

    /**
     * Clear menu cache
     */
    private function clearMenuCache(): void
    {
        Cache::forget('user_menus_*');
    }
}