<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Define permissions by module
        $permissions = [
            // User Management
            'users.view',
            'users.create',
            'users.edit',
            'users.delete',
            
            // Role Management
            'roles.view',
            'roles.create',
            'roles.edit',
            'roles.delete',
            
            // Content Management
            'posts.view',
            'posts.create',
            'posts.edit',
            'posts.delete',
            'posts.publish',
            
            // Settings
            'settings.view',
            'settings.edit',
            
            // Reports
            'reports.view',
            'reports.export',
            
            // Activity Logs
            'activity-logs.view',
            'activity-logs.export',
        ];

        // Create permissions
        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission, 'guard_name' => 'web']);
        }

        // Create roles and assign permissions
        $adminRole = Role::firstOrCreate([
            'name' => 'admin',
            'guard_name' => 'web',
        ]);
        $adminRole->update(['description' => 'Full system access with all permissions']);
        $adminRole->givePermissionTo(Permission::all());

        $managerRole = Role::firstOrCreate([
            'name' => 'manager',
            'guard_name' => 'web',
        ]);
        $managerRole->update(['description' => 'Can manage content and view reports']);
        $managerRole->givePermissionTo([
            'users.view',
            'posts.view', 'posts.create', 'posts.edit', 'posts.publish',
            'reports.view', 'reports.export',
            'activity-logs.view',
        ]);

        $editorRole = Role::firstOrCreate([
            'name' => 'editor',
            'guard_name' => 'web',
        ]);
        $editorRole->update(['description' => 'Can create and edit content']);
        $editorRole->givePermissionTo([
            'posts.view', 'posts.create', 'posts.edit',
        ]);

        $userRole = Role::firstOrCreate([
            'name' => 'user',
            'guard_name' => 'web',
        ]);
        $userRole->update(['description' => 'Basic user with limited access']);
        $userRole->givePermissionTo([
            'posts.view',
        ]);

        $this->command->info('Permissions and roles seeded successfully!');
    }
}
