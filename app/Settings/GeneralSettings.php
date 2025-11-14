<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class GeneralSettings extends Settings
{
    public string $app_name;
    public string $app_url;
    public string $admin_email;
    public string $timezone;
    public string $date_format;
    public string $app_description;

    public static function group(): string
    {
        return 'general';
    }
}
