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
            
            'settings.view',
            'settings.edit',
            
            'activity-logs.view',
            'activity-logs.delete',
            
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
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        $adminRole = Role::create(['name' => 'admin']);
        $managerRole = Role::create(['name' => 'manager']);
        $userRole = Role::create(['name' => 'user']);

        $adminRole->givePermissionTo(Permission::all());

        $managerRole->givePermissionTo([
            'users.view',
            'users.create',
            'users.edit',
            'dashboard.view',
            'files.view',
            'files.upload',
            'files.download',
            'notifications.view',
            'notifications.create',
            'reports.view',
        ]);

        $userRole->givePermissionTo([
            'dashboard.view',
            'files.view',
            'files.upload',
            'files.download',
            'notifications.view',
        ]);
    }
}
