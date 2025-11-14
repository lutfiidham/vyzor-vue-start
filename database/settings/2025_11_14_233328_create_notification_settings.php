<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

return new class extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('notifications.notify_user_registration', true);
        $this->migrator->add('notifications.notify_password_reset', true);
        $this->migrator->add('notifications.notify_login', false);
        $this->migrator->add('notifications.notify_suspicious_activity', true);
        $this->migrator->add('notifications.notify_maintenance', true);
        $this->migrator->add('notifications.notify_updates', true);
    }
};
