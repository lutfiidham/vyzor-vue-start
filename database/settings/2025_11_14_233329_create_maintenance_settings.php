<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

return new class extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('maintenance.maintenance_mode', false);
        $this->migrator->add('maintenance.maintenance_message', 'We are currently performing scheduled maintenance. We will be back shortly.');
        $this->migrator->add('maintenance.maintenance_end', null);
    }
};
