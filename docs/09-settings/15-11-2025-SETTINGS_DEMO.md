# Demo: Menggunakan Spatie Laravel Settings

## Quick Demo - Mengubah Nama Aplikasi

### 1. Via Tinker (Command Line)

```bash
php artisan tinker
```

Kemudian jalankan:

```php
// Lihat nama aplikasi saat ini
$settings = app(\App\Settings\GeneralSettings::class);
echo $settings->app_name;  // Output: My Starter

// Ubah nama aplikasi
$settings->app_name = "My Awesome App";
$settings->save();

// Verifikasi perubahan
echo $settings->app_name;  // Output: My Awesome App

exit
```

### 2. Via Settings Page

1. Login ke aplikasi
2. Navigasi ke **Admin > Settings** atau akses `/admin/settings`
3. Pada tab **General Settings**, ubah field "Application Name"
4. Klik tombol **Save Changes**
5. Refresh halaman dan lihat perubahan di title browser

### 3. Via API/Controller

Buat route dan controller untuk mengupdate settings:

**Route:**
```php
// routes/web.php
Route::post('/admin/settings/update', [SystemSettingController::class, 'update'])
    ->middleware(['auth'])
    ->name('admin.settings.update');
```

**Controller sudah tersedia:**
`app/Http/Controllers/Admin/SystemSettingController.php`

**Request Example:**
```javascript
// Via Inertia Form
const form = useForm({
  category: 'general',
  settings: {
    app_name: 'New App Name',
    app_description: 'New Description',
  }
})

form.post('/admin/settings/update')
```

## Hasil Implementasi

### ✅ Title Halaman Dinamis

Setelah mengubah `app_name` di settings, title di semua halaman akan berubah otomatis:

**Sebelum:**
- Dashboard → "Dashboard - Vyzor"
- Users → "Users - Vyzor"

**Setelah (mengubah app_name menjadi "My Awesome App"):**
- Dashboard → "Dashboard - My Awesome App"
- Users → "Users - My Awesome App"

### ✅ Meta Description Dinamis

Tag meta description di `<head>` juga otomatis menggunakan `app_description` dari settings:

```html
<meta name="description" content="Modern Laravel + Vue.js Application" />
```

### ✅ Akses Settings di Vue Component

Settings tersedia di semua komponen Vue via `$page.props.settings`:

```vue
<script setup>
import { usePage } from '@inertiajs/vue3'

const page = usePage()
console.log(page.props.settings.app_name)        // "My Awesome App"
console.log(page.props.settings.app_description) // "Modern Laravel + Vue.js Application"
</script>

<template>
  <div>
    <h1>Welcome to {{ $page.props.settings.app_name }}</h1>
  </div>
</template>
```

## Testing Checklist

- [x] Settings disimpan di database (tabel `settings`)
- [x] Settings dapat diubah via tinker
- [x] Settings dapat diubah via Settings Page
- [x] Title halaman berubah sesuai `app_name`
- [x] Meta description berubah sesuai `app_description`
- [x] Settings accessible di semua Vue components
- [x] Perubahan settings langsung terlihat tanpa restart server

## Contoh Settings Lainnya

### Email Settings

```php
$emailSettings = app(\App\Settings\EmailSettings::class);
$emailSettings->mail_driver = 'smtp';
$emailSettings->mail_host = 'smtp.gmail.com';
$emailSettings->mail_port = 587;
$emailSettings->save();
```

### Security Settings

```php
$securitySettings = app(\App\Settings\SecuritySettings::class);
$securitySettings->two_factor_enabled = true;
$securitySettings->session_timeout = 30;
$securitySettings->save();
```

### Maintenance Mode

```php
$maintenanceSettings = app(\App\Settings\MaintenanceSettings::class);
$maintenanceSettings->is_maintenance_mode = true;
$maintenanceSettings->save();
```

## Database Structure

Settings disimpan di tabel `settings`:

```
+--------+------------+--------+---------------------------------+
| group  | name       | locked | payload                         |
+--------+------------+--------+---------------------------------+
| general| app_name   | 0      | "My Starter"                   |
| general| app_url    | 0      | "http://localhost"             |
| general| admin_email| 0      | "admin@vyzor.test"             |
+--------+------------+--------+---------------------------------+
```

Query database:
```sql
SELECT * FROM settings WHERE `group` = 'general';
```

## Tips Pro

1. **Cache Settings di Production:**
   ```bash
   # .env
   SETTINGS_CACHE_ENABLED=true
   ```

2. **Clear Settings Cache:**
   ```bash
   php artisan cache:clear
   ```

3. **Lock Critical Settings:**
   ```php
   // Di migration
   $this->migrator->add('general.app_name', 'My App', true); // locked
   ```

4. **Validate Before Save:**
   ```php
   $validated = $request->validate([
       'app_name' => 'required|string|max:255',
   ]);
   
   $settings->app_name = $validated['app_name'];
   $settings->save();
   ```

## Troubleshooting

**Settings tidak berubah?**
- Clear cache: `php artisan cache:clear`
- Clear settings cache: `php artisan config:clear`
- Rebuild frontend: `npm run build`

**Settings tidak tersedia di Vue?**
- Check `HandleInertiaRequests.php` middleware
- Verify settings di database: `SELECT * FROM settings`
- Check console untuk errors

**Title tidak berubah?**
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Check `window._appName` di browser console
