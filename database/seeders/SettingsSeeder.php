<?php

namespace Database\Seeders;

use App\Settings\GeneralSettings;
use App\Settings\EmailSettings;
use App\Settings\SecuritySettings;
use App\Settings\NotificationSettings;
use App\Settings\MaintenanceSettings;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    public function run(): void
    {
        // General Settings
        $generalSettings = app(GeneralSettings::class);
        $generalSettings->app_name = config('app.name', 'Vyzor Application');
        $generalSettings->app_url = config('app.url', 'http://localhost');
        $generalSettings->admin_email = 'admin@vyzor.test';
        $generalSettings->timezone = config('app.timezone', 'UTC');
        $generalSettings->date_format = 'Y-m-d';
        $generalSettings->app_description = 'Modern Laravel + Vue.js Application with Advanced Features';
        $generalSettings->show_demo_menu = true;
        $generalSettings->save();

        // Email Settings
        $emailSettings = app(EmailSettings::class);
        $emailSettings->mail_driver = config('mail.default', 'smtp');
        $emailSettings->mail_host = config('mail.mailers.smtp.host', 'smtp.mailtrap.io');
        $emailSettings->mail_port = config('mail.mailers.smtp.port', 587);
        $emailSettings->mail_encryption = config('mail.mailers.smtp.encryption', 'tls');
        $emailSettings->mail_username = config('mail.mailers.smtp.username', '');
        $emailSettings->mail_password = config('mail.mailers.smtp.password', '');
        $emailSettings->mail_from_address = 'noreply@vyzor.test';
        $emailSettings->mail_from_name = config('app.name', 'Vyzor');
        $emailSettings->save();

        // Security Settings
        $securitySettings = app(SecuritySettings::class);
        $securitySettings->two_factor_enabled = false;
        $securitySettings->session_lifetime = config('session.lifetime', 120);
        $securitySettings->login_attempts = 5;
        $securitySettings->lockout_duration = 15;
        $securitySettings->password_min_length = 8;
        $securitySettings->password_complexity = true;
        $securitySettings->save();

        // Notification Settings
        $notificationSettings = app(NotificationSettings::class);
        $notificationSettings->notify_user_registration = true;
        $notificationSettings->notify_password_reset = true;
        $notificationSettings->notify_login = false;
        $notificationSettings->notify_suspicious_activity = true;
        $notificationSettings->notify_maintenance = true;
        $notificationSettings->notify_updates = true;
        $notificationSettings->save();

        // Maintenance Settings
        $maintenanceSettings = app(MaintenanceSettings::class);
        $maintenanceSettings->maintenance_mode = false;
        $maintenanceSettings->maintenance_message = 'We are currently performing scheduled maintenance. We will be back shortly.';
        $maintenanceSettings->maintenance_end = null;
        $maintenanceSettings->save();

        $this->command->info('✅ Settings seeded successfully!');
    }
}
