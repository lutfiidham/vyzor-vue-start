<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run(): void
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = [
            'users.view',
            'users.create',
            'users.edit',
            'users.delete',
            'users.export',
            'users.import',
            
            'roles.view',
            'roles.create',
            'roles.edit',
            'roles.delete',
            
            'permissions.view',
            'permissions.assign',
            
            'menus.view',
            'menus.create',
            'menus.edit',
            'menus.delete',
            
            'settings.view',
            'settings.edit',
            
            'activity-logs.view',
            'activity-logs.delete',
            'activity-logs.export',
            
            'files.view',
            'files.upload',
            'files.download',
            'files.delete',
            
            'notifications.view',
            'notifications.create',
            'notifications.delete',
            
            'api-keys.view',
            'api-keys.create',
            'api-keys.delete',
            
            'dashboard.view',
            'reports.view',
            'reports.export',
            
            'system.maintenance',
            'system.backup',
            'system.restore',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission, 'guard_name' => 'web']);
        }

        // Super Admin - Full system access
        $superAdminRole = Role::firstOrCreate(['name' => 'Super Admin', 'guard_name' => 'web']);
        $superAdminRole->givePermissionTo(Permission::all());

        // Admin - Almost full access except system critical operations
        $adminRole = Role::firstOrCreate(['name' => 'Admin', 'guard_name' => 'web']);
        $adminRole->givePermissionTo([
            'users.view', 'users.create', 'users.edit', 'users.delete', 'users.export',
            'roles.view', 'roles.create', 'roles.edit', 'roles.delete',
            'permissions.view', 'permissions.assign',
            'menus.view', 'menus.create', 'menus.edit', 'menus.delete',
            'settings.view', 'settings.edit',
            'activity-logs.view', 'activity-logs.export',
            'files.view', 'files.upload', 'files.download', 'files.delete',
            'notifications.view', 'notifications.create', 'notifications.delete',
            'api-keys.view', 'api-keys.create', 'api-keys.delete',
            'dashboard.view',
            'reports.view', 'reports.export',
        ]);

        // Manager - Can manage users and view reports
        $managerRole = Role::firstOrCreate(['name' => 'Manager', 'guard_name' => 'web']);
        $managerRole->givePermissionTo([
            'users.view', 'users.create', 'users.edit',
            'roles.view',
            'dashboard.view',
            'files.view', 'files.upload', 'files.download',
            'notifications.view', 'notifications.create',
            'reports.view', 'reports.export',
            'activity-logs.view',
        ]);

        // User - Basic access
        $userRole = Role::firstOrCreate(['name' => 'User', 'guard_name' => 'web']);
        $userRole->givePermissionTo([
            'dashboard.view',
            'files.view', 'files.upload', 'files.download',
            'notifications.view',
        ]);

        $this->command->info('✅ Roles and Permissions seeded successfully!');
        $this->command->info('📊 Created 4 roles: Super Admin, Admin, Manager, User');
        $this->command->info('📊 Created ' . count($permissions) . ' permissions');
    }
}
