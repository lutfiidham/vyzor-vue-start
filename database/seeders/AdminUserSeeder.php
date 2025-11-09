<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::create([
            'name' => 'Admin User',
            'email' => 'admin@vyzor.test',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
            'is_active' => true,
            'timezone' => 'UTC',
            'locale' => 'en',
        ]);
        $admin->assignRole('admin');

        $manager = User::create([
            'name' => 'Manager User',
            'email' => 'manager@vyzor.test',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
            'is_active' => true,
            'timezone' => 'UTC',
            'locale' => 'en',
        ]);
        $manager->assignRole('manager');

        $user = User::create([
            'name' => 'Regular User',
            'email' => 'user@vyzor.test',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
            'is_active' => true,
            'timezone' => 'UTC',
            'locale' => 'en',
        ]);
        $user->assignRole('user');
    }
}
