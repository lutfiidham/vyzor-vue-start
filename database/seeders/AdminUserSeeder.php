<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        $superAdmin = User::firstOrCreate(
            ['email' => 'superadmin@vyzor.test'],
            [
                'name' => 'Super Admin',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'is_active' => true,
                'timezone' => 'UTC',
                'locale' => 'en',
            ]
        );
        $superAdmin->assignRole('Super Admin');

        $admin = User::firstOrCreate(
            ['email' => 'admin@vyzor.test'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'is_active' => true,
                'timezone' => 'UTC',
                'locale' => 'en',
            ]
        );
        $admin->assignRole('Admin');

        $manager = User::firstOrCreate(
            ['email' => 'manager@vyzor.test'],
            [
                'name' => 'Manager User',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'is_active' => true,
                'timezone' => 'UTC',
                'locale' => 'en',
            ]
        );
        $manager->assignRole('Manager');

        $user = User::firstOrCreate(
            ['email' => 'user@vyzor.test'],
            [
                'name' => 'Regular User',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'is_active' => true,
                'timezone' => 'UTC',
                'locale' => 'en',
            ]
        );
        $user->assignRole('User');

        $this->command->info('✅ Users seeded successfully!');
        $this->command->info('👤 Super Admin: superadmin@vyzor.test / password');
        $this->command->info('👤 Admin: admin@vyzor.test / password');
        $this->command->info('👤 Manager: manager@vyzor.test / password');
        $this->command->info('👤 User: user@vyzor.test / password');
    }
}
