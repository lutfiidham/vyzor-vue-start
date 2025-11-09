<?php

namespace Database\Seeders;

use App\Models\SystemSetting;
use Illuminate\Database\Seeder;

class SystemSettingsSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            ['key' => 'app_name', 'value' => 'Vyzor Application', 'type' => 'string', 'group' => 'general', 'description' => 'Application name', 'is_public' => true],
            ['key' => 'app_description', 'value' => 'Modern Laravel + Vue.js Application', 'type' => 'string', 'group' => 'general', 'description' => 'Application description', 'is_public' => true],
            ['key' => 'app_logo', 'value' => '/images/logo.png', 'type' => 'string', 'group' => 'general', 'description' => 'Application logo URL', 'is_public' => true],
            ['key' => 'admin_email', 'value' => 'admin@vyzor.test', 'type' => 'string', 'group' => 'general', 'description' => 'Administrator email', 'is_public' => false],
            ['key' => 'timezone', 'value' => 'UTC', 'type' => 'string', 'group' => 'general', 'description' => 'Default timezone', 'is_public' => true],
            ['key' => 'date_format', 'value' => 'Y-m-d', 'type' => 'string', 'group' => 'general', 'description' => 'Date format', 'is_public' => true],
            ['key' => 'time_format', 'value' => 'H:i:s', 'type' => 'string', 'group' => 'general', 'description' => 'Time format', 'is_public' => true],
            
            ['key' => 'enable_registration', 'value' => '1', 'type' => 'boolean', 'group' => 'authentication', 'description' => 'Allow new user registration', 'is_public' => true],
            ['key' => 'require_email_verification', 'value' => '1', 'type' => 'boolean', 'group' => 'authentication', 'description' => 'Require email verification', 'is_public' => true],
            ['key' => 'enable_2fa', 'value' => '1', 'type' => 'boolean', 'group' => 'authentication', 'description' => 'Enable two-factor authentication', 'is_public' => true],
            ['key' => 'max_login_attempts', 'value' => '5', 'type' => 'integer', 'group' => 'security', 'description' => 'Maximum login attempts before lockout', 'is_public' => false],
            ['key' => 'lockout_duration', 'value' => '30', 'type' => 'integer', 'group' => 'security', 'description' => 'Account lockout duration in minutes', 'is_public' => false],
            
            ['key' => 'mail_driver', 'value' => 'smtp', 'type' => 'string', 'group' => 'mail', 'description' => 'Mail driver', 'is_public' => false],
            ['key' => 'mail_from_address', 'value' => 'noreply@vyzor.test', 'type' => 'string', 'group' => 'mail', 'description' => 'Mail from address', 'is_public' => false],
            ['key' => 'mail_from_name', 'value' => 'Vyzor', 'type' => 'string', 'group' => 'mail', 'description' => 'Mail from name', 'is_public' => false],
            
            ['key' => 'max_upload_size', 'value' => '10240', 'type' => 'integer', 'group' => 'files', 'description' => 'Maximum upload size in KB', 'is_public' => true],
            ['key' => 'allowed_file_types', 'value' => 'jpg,jpeg,png,gif,pdf,doc,docx,xls,xlsx,zip', 'type' => 'string', 'group' => 'files', 'description' => 'Allowed file types', 'is_public' => true],
            
            ['key' => 'maintenance_mode', 'value' => '0', 'type' => 'boolean', 'group' => 'system', 'description' => 'Enable maintenance mode', 'is_public' => true],
            ['key' => 'api_rate_limit', 'value' => '60', 'type' => 'integer', 'group' => 'api', 'description' => 'API rate limit per minute', 'is_public' => false],
        ];

        foreach ($settings as $setting) {
            SystemSetting::create($setting);
        }
    }
}
