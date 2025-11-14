<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

return new class extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('security.two_factor_enabled', false);
        $this->migrator->add('security.session_lifetime', config('session.lifetime', 120));
        $this->migrator->add('security.login_attempts', 5);
        $this->migrator->add('security.lockout_duration', 15);
        $this->migrator->add('security.password_min_length', 8);
        $this->migrator->add('security.password_complexity', false);
    }
};
