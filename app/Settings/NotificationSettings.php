<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class NotificationSettings extends Settings
{
    public bool $notify_user_registration;
    public bool $notify_password_reset;
    public bool $notify_login;
    public bool $notify_suspicious_activity;
    public bool $notify_maintenance;
    public bool $notify_updates;

    public static function group(): string
    {
        return 'notifications';
    }
}
