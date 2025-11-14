<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class MaintenanceSettings extends Settings
{
    public bool $maintenance_mode;
    public string $maintenance_message;
    public ?string $maintenance_end;

    public static function group(): string
    {
        return 'maintenance';
    }
}
