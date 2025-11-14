# Migration ke Spatie Laravel Settings

Dokumen ini menjelaskan migrasi dari sistem settings custom ke `spatie/laravel-settings`.

## Perubahan yang Dilakukan

### 1. Package Installation
- Installed `spatie/laravel-settings` versi 3.5.0

### 2. Struktur Settings Classes
Settings dibagi menjadi beberapa kelas berdasarkan kategori:

- `App\Settings\GeneralSettings` - Pengaturan umum aplikasi
- `App\Settings\EmailSettings` - Konfigurasi email
- `App\Settings\SecuritySettings` - Pengaturan keamanan
- `App\Settings\NotificationSettings` - Pengaturan notifikasi
- `App\Settings\MaintenanceSettings` - Mode maintenance

### 3. Database Changes
- Tabel `system_settings` lama telah dihapus
- Tabel `settings` baru dibuat dengan struktur:
  - `id`, `group`, `name`, `locked`, `payload`, `created_at`, `updated_at`

### 4. File yang Dihapus
- `app/Models/SystemSetting.php`
- `database/seeders/SystemSettingsSeeder.php`
- `database/migrations/2025_11_09_090023_create_system_settings_table.php`

### 5. File yang Dibuat
- `app/Settings/GeneralSettings.php`
- `app/Settings/EmailSettings.php` (with nullable `mail_username` and `mail_password`)
- `app/Settings/SecuritySettings.php`
- `app/Settings/NotificationSettings.php`
- `app/Settings/MaintenanceSettings.php` (with nullable `maintenance_end`)
- `database/settings/2025_11_14_233325_create_general_settings.php`
- `database/settings/2025_11_14_233326_create_email_settings.php`
- `database/settings/2025_11_14_233327_create_security_settings.php`
- `database/settings/2025_11_14_233328_create_notification_settings.php`
- `database/settings/2025_11_14_233329_create_maintenance_settings.php`

### 6. Controller Updates
`SystemSettingController` telah diperbarui untuk menggunakan dependency injection Spatie Settings classes.

## Cara Penggunaan

### Mengakses Settings
```php
use App\Settings\GeneralSettings;

// Via dependency injection
public function index(GeneralSettings $settings)
{
    echo $settings->app_name;
}

// Via app helper
$settings = app(GeneralSettings::class);
echo $settings->app_name;
```

### Update Settings
```php
use App\Settings\GeneralSettings;

$settings = app(GeneralSettings::class);
$settings->app_name = 'New Name';
$settings->save();
```

### Membuat Settings Baru
1. Buat class settings:
```php
<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class MySettings extends Settings
{
    public string $my_property;
    public ?string $nullable_property; // Use ? for nullable properties

    public static function group(): string
    {
        return 'my_group';
    }
}
```

**Note:** Gunakan nullable types (`?string`, `?int`, dll) untuk properties yang mungkin null.

2. Buat migration:
```bash
php artisan make:settings-migration CreateMySettings
```

3. Edit migration file:
```php
public function up(): void
{
    $this->migrator->add('my_group.my_property', 'default value');
}
```

4. Jalankan migration:
```bash
php artisan migrate
```

## Keuntungan Menggunakan Spatie Laravel Settings

1. **Type Safety** - Settings di-type dengan PHP types
2. **Caching** - Otomatis caching untuk performa
3. **Migration System** - Versioning untuk settings
4. **Encrypted Settings** - Support untuk encrypt sensitive data
5. **Multiple Groups** - Organisasi settings yang lebih baik
6. **Testing Friendly** - Mudah untuk di-test

## Breaking Changes

Jika ada kode yang menggunakan `SystemSetting::where('key', $key)->first()`, harus diubah menjadi:
```php
// Dari:
$value = SystemSetting::where('key', 'app_name')->first()->value;

// Menjadi:
$value = app(GeneralSettings::class)->app_name;
```

## Resources

- [Spatie Laravel Settings Documentation](https://github.com/spatie/laravel-settings)
- [Spatie Settings v3 Documentation](https://spatie.be/docs/laravel-settings/v3/introduction)
