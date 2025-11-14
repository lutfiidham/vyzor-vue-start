<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

return new class extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('email.mail_driver', config('mail.default', 'smtp'));
        $this->migrator->add('email.mail_host', config('mail.mailers.smtp.host', 'smtp.mailtrap.io'));
        $this->migrator->add('email.mail_port', config('mail.mailers.smtp.port', 587));
        $this->migrator->add('email.mail_encryption', config('mail.mailers.smtp.encryption', 'tls'));
        $this->migrator->add('email.mail_username', config('mail.mailers.smtp.username'));
        $this->migrator->add('email.mail_password', config('mail.mailers.smtp.password'));
        $this->migrator->add('email.mail_from_address', config('mail.from.address', 'noreply@vyzor.test'));
        $this->migrator->add('email.mail_from_name', config('mail.from.name', 'Vyzor'));
    }
};
