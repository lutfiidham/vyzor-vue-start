<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

return new class extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('general.app_name', config('app.name', 'Vyzor Application'));
        $this->migrator->add('general.app_url', config('app.url', 'http://localhost'));
        $this->migrator->add('general.admin_email', config('mail.from.address', 'admin@vyzor.test'));
        $this->migrator->add('general.timezone', config('app.timezone', 'UTC'));
        $this->migrator->add('general.date_format', 'Y-m-d');
        $this->migrator->add('general.app_description', 'Modern Laravel + Vue.js Application');
        $this->migrator->add('general.app_keywords', 'Modern Laravel + Vue.js Application');
        $this->migrator->add('general.show_demo_menu', true);
    }
};
