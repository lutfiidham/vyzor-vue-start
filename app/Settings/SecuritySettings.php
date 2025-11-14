<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class SecuritySettings extends Settings
{
    public bool $two_factor_enabled;
    public int $session_lifetime;
    public int $login_attempts;
    public int $lockout_duration;
    public int $password_min_length;
    public bool $password_complexity;

    public static function group(): string
    {
        return 'security';
    }
}
