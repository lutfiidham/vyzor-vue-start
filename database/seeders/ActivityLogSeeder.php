<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Activitylog\Models\Activity;
use App\Models\User;

class ActivityLogSeeder extends Seeder
{
    public function run()
    {
        $users = User::all();
        
        if ($users->isEmpty()) {
            $this->command->warn('No users found. Please seed users first.');
            return;
        }

        $actions = ['created', 'updated', 'deleted', 'login', 'logout'];
        $subjectTypes = ['App\Models\User', 'App\Models\Role', 'App\Models\Permission'];
        
        foreach ($users as $user) {
            // Create some activity logs for each user
            for ($i = 0; $i < 5; $i++) {
                $action = $actions[array_rand($actions)];
                
                activity()
                    ->causedBy($user)
                    ->performedOn($user)
                    ->withProperties([
                        'attributes' => [
                            'name' => $user->name,
                            'email' => $user->email,
                        ],
                        'ip' => '127.0.0.1',
                        'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                    ])
                    ->log($action);
            }
        }

        $this->command->info('Activity logs seeded successfully!');
    }
}
