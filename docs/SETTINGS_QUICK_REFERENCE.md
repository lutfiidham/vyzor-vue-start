# Settings Quick Reference

## 📋 Overview

Aplikasi ini menggunakan **Spatie Laravel Settings** untuk mengelola pengaturan secara dinamis. Settings tersimpan di database dan dapat diubah tanpa edit file konfigurasi.

## 🚀 Quick Start

### Mengubah Nama Aplikasi (Title)

**Via Tinker:**
```bash
php artisan tinker
```
```php
$s = app(\App\Settings\GeneralSettings::class);
$s->app_name = "My Custom App";
$s->save();
```

**Via Settings Page:**
1. Login → Admin → Settings
2. General Settings → Application Name
3. Save Changes

**Hasil:**
- Title halaman berubah otomatis: `Dashboard - My Custom App`
- Meta description otomatis update
- Tersedia di semua Vue components via `$page.props.settings.app_name`

### Mengubah Timezone

**Via Tinker:**
```bash
php artisan tinker
```
```php
$s = app(\App\Settings\GeneralSettings::class);
$s->timezone = "America/New_York";
$s->save();
```

**Via Settings Page:**
1. Login → Admin → Settings
2. General Settings → Timezone
3. Select timezone from dropdown
4. Save Changes

**Hasil:**
- Semua tanggal/waktu otomatis menggunakan timezone baru
- PHP timezone dan Carbon otomatis update
- Format tersedia via `DateTimeHelper` dan `useDateTime` composable

## 📁 Settings Classes Location

```
app/Settings/
├── GeneralSettings.php          # Nama app, URL, email, timezone
├── EmailSettings.php            # Konfigurasi SMTP
├── SecuritySettings.php         # Two-factor, session timeout
├── NotificationSettings.php     # Email/push notifications
└── MaintenanceSettings.php      # Maintenance mode
```

## 💾 Database

**Table:** `settings`

```sql
-- Lihat semua settings
SELECT * FROM settings;

-- Lihat general settings
SELECT * FROM settings WHERE `group` = 'general';

-- Update langsung (not recommended)
UPDATE settings SET payload = '"New App Name"' 
WHERE `group` = 'general' AND name = 'app_name';
```

## 🔧 Integration Points

### 1. Backend (Laravel)

**Middleware:** `app/Http/Middleware/HandleInertiaRequests.php`
```php
'settings' => [
    'app_name' => app(GeneralSettings::class)->app_name,
    'app_description' => app(GeneralSettings::class)->app_description,
],
```

**Controller:** `app/Http/Controllers/Admin/SystemSettingController.php`
- `index()` - Display settings
- `update()` - Save settings

### 2. Frontend (Vue.js)

**App Entry:** `resources/js/app.js`
```javascript
title: (title) => {
    const appName = window._appName || 'Vyzor'
    return title ? `${title} - ${appName}` : appName
}
```

**Blade Template:** `resources/views/app.blade.php`
```blade
<title inertia>{{ app(\App\Settings\GeneralSettings::class)->app_name }}</title>
```

**Vue Component:**
```vue
<script setup>
import { usePage } from '@inertiajs/vue3'
const appName = usePage().props.settings.app_name
</script>

<template>
  <h1>{{ $page.props.settings.app_name }}</h1>
</template>
```

## 🎯 Common Tasks

### Read Setting
```php
$generalSettings = app(\App\Settings\GeneralSettings::class);
echo $generalSettings->app_name;
```

### Update Setting
```php
$generalSettings = app(\App\Settings\GeneralSettings::class);
$generalSettings->app_name = "New Name";
$generalSettings->save();
```

### In Controller
```php
public function update(Request $request, GeneralSettings $settings)
{
    $settings->app_name = $request->app_name;
    $settings->save();
    return back()->with('success', 'Updated!');
}
```

### In Vue Component
```javascript
// Read
const appName = $page.props.settings.app_name

// Update (via form)
const form = useForm({
  category: 'general',
  settings: {
    app_name: 'New Name'
  }
})
form.post('/admin/settings/update')
```

## ⚡ Performance

**Enable Cache (Production):**
```env
SETTINGS_CACHE_ENABLED=true
```

**Clear Cache:**
```bash
php artisan cache:clear
php artisan config:clear
```

## 📚 Documentation

- **Detailed Guide:** `docs/SETTINGS_USAGE.md`
- **Demo & Examples:** `docs/SETTINGS_DEMO.md`
- **Timezone Implementation:** `docs/TIMEZONE_IMPLEMENTATION.md`
- **Dynamic Title Pages:** `docs/DYNAMIC_TITLE_PAGES.md`
- **Official Docs:** https://github.com/spatie/laravel-settings

## 🔍 Troubleshooting

| Problem | Solution |
|---------|----------|
| Settings tidak berubah | Clear cache: `php artisan cache:clear` |
| Title tidak update | Hard refresh browser (Ctrl+Shift+R) |
| Settings undefined di Vue | Check `HandleInertiaRequests` middleware |
| Error saving settings | Check database connection & permissions |

## ✅ Features Implemented

- ✅ Dynamic page titles using `app_name`
- ✅ Dynamic meta description using `app_description`
- ✅ Settings accessible in all Vue components
- ✅ Settings page for admin management
- ✅ Type-safe settings classes
- ✅ Database persistence
- ✅ Cache support for performance

## 🎨 Available Settings

### GeneralSettings
- `app_name` - Application name (used in title)
- `app_url` - Application URL
- `app_description` - Meta description
- `admin_email` - Admin contact email
- `timezone` - Application timezone (e.g., 'Asia/Jakarta', 'UTC')
- `date_format` - Date display format (e.g., 'd/m/Y', 'Y-m-d')

### EmailSettings
- `mail_driver`, `mail_host`, `mail_port`
- `mail_username`, `mail_password`
- `mail_encryption`, `mail_from_address`, `mail_from_name`

### SecuritySettings
- `two_factor_enabled`, `session_timeout`
- `password_expiry_days`, `max_login_attempts`

### NotificationSettings
- `email_notifications_enabled`
- `push_notifications_enabled`
- `notification_sound_enabled`

### MaintenanceSettings
- `is_maintenance_mode`
- `maintenance_message`

---

**Quick Links:**
- Settings Page: `/admin/settings`
- Controller: `app/Http/Controllers/Admin/SystemSettingController.php`
- Middleware: `app/Http/Middleware/HandleInertiaRequests.php`
