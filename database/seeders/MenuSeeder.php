<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get roles or create if not exists
        $superAdminRole = Role::firstOrCreate(['name' => 'admin']);
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $managerRole = Role::firstOrCreate(['name' => 'manager']);
        $userRole = Role::firstOrCreate(['name' => 'user']);

        // Clear existing menus and role relationships
        DB::table('menu_role')->truncate();
        Menu::query()->delete();

        $baseUrl = '/';

        // Define menus based on nav.js structure (excluding demo pages)
        $menus = [
            // MAIN
            [
                'title' => 'MAIN',
                'type' => 'menutitle',
                'order' => 1,
                'is_active' => true,
                'roles' => [$adminRole->id, $managerRole->id],
            ],
            [
                'title' => 'Dashboard',
                'icon' => '<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Z" opacity="0.2"/><rect x="24" y="56" width="208" height="144" rx="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="136" y="88" width="64" height="80" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="56" y="88" width="64" height="32" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="56" y="136" width="64" height="32" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
                'path' => $baseUrl . 'dashboard',
                'type' => 'link',
                'order' => 2,
                'is_active' => true,
                'roles' => [$adminRole->id, $managerRole->id, $userRole->id],
            ],

            // ADMINISTRATION
            [
                'title' => 'ADMINISTRATION',
                'type' => 'menutitle',
                'order' => 10,
                'is_active' => true,
                'roles' => [$adminRole->id, $managerRole->id],
            ],
            [
                'title' => 'User Management',
                'icon' => '<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="96" r="64" opacity="0.2"/><circle cx="128" cy="96" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M31,216a112,112,0,0,1,194,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
                'path' => $baseUrl . 'admin/users',
                'type' => 'link',
                'order' => 11,
                'is_active' => true,
                'roles' => [$adminRole->id, $managerRole->id],
            ],
            [
                'title' => 'Roles & Permissions',
                'icon' => '<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M48,80V48a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8V80Z" opacity="0.2"/><rect x="32" y="80" width="192" height="128" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M208,80V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="140" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
                'path' => $baseUrl . 'admin/roles',
                'type' => 'link',
                'order' => 12,
                'is_active' => true,
                'roles' => [$adminRole->id],
            ],
            [
                'title' => 'Menu Management',
                'icon' => '<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="40" y1="128" x2="216" y2="128" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="64" x2="216" y2="64" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="192" x2="216" y2="192" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
                'path' => $baseUrl . 'admin/menus',
                'type' => 'link',
                'order' => 13,
                'is_active' => true,
                'roles' => [$adminRole->id],
            ],
            [
                'title' => 'Activity Logs',
                'icon' => '<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="224 128 224 56 152 56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M188.4,192a88,88,0,1,1,1.83-126.23L224,99.7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
                'path' => $baseUrl . 'admin/activity-logs',
                'type' => 'link',
                'order' => 14,
                'is_active' => true,
                'roles' => [$adminRole->id, $managerRole->id],
            ],
            [
                'title' => 'System Settings',
                'icon' => '<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="40" opacity="0.2"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M130.05,206.11c-1.34,0-2.69,0-4,0L94,224a104.61,104.61,0,0,1-34.11-19.2l-.12-36c-.71-1.12-1.38-2.25-2-3.41L25.9,147.24a99.15,99.15,0,0,1,0-38.46l31.84-18.1c.65-1.15,1.32-2.29,2-3.41l.16-36A104.58,104.58,0,0,1,94,32l32,17.89c1.34,0,2.69-.05,4-.05s2.69,0,4,0L166,32a104.61,104.61,0,0,1,34.11,19.2l.12,36c.71,1.12,1.38,2.25,2,3.41l31.85,18.14a99.15,99.15,0,0,1,0,38.46l-31.84,18.1c-.65,1.15-1.32,2.29-2,3.41l-.16,36A104.58,104.58,0,0,1,166,224l-32-17.89C132.74,206.06,131.39,206.11,130.05,206.11Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
                'path' => $baseUrl . 'admin/settings',
                'type' => 'link',
                'order' => 15,
                'is_active' => true,
                'roles' => [$adminRole->id, $managerRole->id],
            ],

            // ACCOUNT
            [
                'title' => 'ACCOUNT',
                'type' => 'menutitle',
                'order' => 20,
                'is_active' => true,
                'roles' => [$adminRole->id, $managerRole->id, $userRole->id],
            ],
            [
                'title' => 'My Profile',
                'icon' => '<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="120" r="40" opacity="0.2"/><circle cx="128" cy="120" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M63.8,199.37a72,72,0,0,1,128.4,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
                'path' => $baseUrl . 'profile',
                'type' => 'link',
                'order' => 21,
                'is_active' => true,
                'roles' => [$adminRole->id, $managerRole->id, $userRole->id],
            ],
        ];

        // Create menus and assign roles
        $createdMenus = [];
        foreach ($menus as $menuData) {
            $roles = $menuData['roles'];
            unset($menuData['roles']);

            $menu = Menu::create($menuData);
            $menu->roles()->attach($roles);

            $createdMenus[$menu->title] = $menu;
        }

        $this->command->info('✅ Menus seeded successfully!');
        $this->command->info("📊 Created " . count($menus) . " menus");
        $this->command->info("👥 Assigned roles: Super Admin, Admin, User");
    }
}