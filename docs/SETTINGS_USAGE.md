# Penggunaan Spatie Laravel Settings

Aplikasi ini telah dikonfigurasi untuk menggunakan **Spatie Laravel Settings** untuk mengelola pengaturan aplikasi secara dinamis.

## Fitur yang Sudah Diimplementasikan

### 1. Settings Classes

Settings classes tersimpan di `app/Settings/`:
- `GeneralSettings.php` - Pengaturan umum aplikasi (nama, URL, email, timezone, dll)
- `EmailSettings.php` - Konfigurasi email
- `SecuritySettings.php` - Pengaturan keamanan
- `NotificationSettings.php` - Pengaturan notifikasi
- `MaintenanceSettings.php` - Mode maintenance

### 2. Integrasi dengan Title Halaman

**Backend Integration (Laravel):**

File: `app/Http/Middleware/HandleInertiaRequests.php`

```php
public function share(Request $request): array
{
    return [
        ...parent::share($request),
        'auth' => [
            'user' => $request->user(),
        ],
        'settings' => [
            'app_name' => app(GeneralSettings::class)->app_name,
            'app_description' => app(GeneralSettings::class)->app_description,
        ],
    ];
}
```

**Frontend Integration (Vue.js):**

File: `resources/js/app.js`

```javascript
createInertiaApp({
  title: (title) => {
    const appName = window._appName || 'Vyzor'
    return title ? `${title} - ${appName}` : appName
  },
  setup({ el, App, props, plugin }) {
    // Store app name globally for title callback
    window._appName = props.initialPage.props.settings?.app_name || 'Vyzor'
    
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(plugins)
      .mount(el)
  },
})
```

**Blade Template:**

File: `resources/views/app.blade.php`

```blade
<title inertia>{{ app(\App\Settings\GeneralSettings::class)->app_name }}</title>
<meta name="description" content="{{ app(\App\Settings\GeneralSettings::class)->app_description }}" />
```

### 3. Menggunakan Settings di Vue Component

**Akses settings via $page.props:**

```vue
<script setup>
import { usePage } from '@inertiajs/vue3'

const page = usePage()
const appName = page.props.settings.app_name
const appDescription = page.props.settings.app_description
</script>

<template>
  <div>
    <h1>Selamat datang di {{ appName }}</h1>
    <p>{{ appDescription }}</p>
  </div>
</template>
```

**Mengatur title halaman:**

```vue
<template>
  <Head title="Dashboard" />
  <!-- Title akan menjadi: "Dashboard - [App Name dari Settings]" -->
</template>
```

## Mengelola Settings

### Via Tinker

```bash
php artisan tinker
```

```php
// Membaca setting
$settings = app(\App\Settings\GeneralSettings::class);
echo $settings->app_name;

// Mengubah setting
$settings->app_name = 'My Awesome App';
$settings->save();
```

### Via Controller

```php
use App\Settings\GeneralSettings;

public function update(Request $request, GeneralSettings $settings)
{
    $validated = $request->validate([
        'app_name' => 'required|string|max:255',
        'app_description' => 'required|string',
    ]);
    
    $settings->app_name = $validated['app_name'];
    $settings->app_description = $validated['app_description'];
    $settings->save();
    
    return back()->with('success', 'Settings updated successfully');
}
```

## Database

Settings disimpan di tabel `settings` dengan struktur:
- `group` - Group name (contoh: 'general', 'email')
- `name` - Setting name (contoh: 'app_name')
- `locked` - Boolean untuk lock setting
- `payload` - JSON value

## Migration

Settings migrations tersimpan di `database/settings/`:

Untuk membuat migration baru:
```bash
php artisan make:settings-migration CreateMySettings
```

## Cache

Settings dapat di-cache untuk performa. Konfigurasi di `config/settings.php`:

```php
'cache' => [
    'enabled' => env('SETTINGS_CACHE_ENABLED', false),
    'store' => null,
    'prefix' => null,
    'ttl' => null,
],
```

Untuk production, set `SETTINGS_CACHE_ENABLED=true` di `.env`

## Tips

1. **Auto Discovery**: Settings classes di `app/Settings` akan otomatis terdaftar
2. **Type Safety**: Gunakan type hints untuk property di settings class
3. **Validation**: Tambahkan validation di controller sebelum save
4. **Caching**: Aktifkan cache di production untuk performa optimal
5. **Global Access**: Settings tersedia di semua Inertia pages via shared props

## Referensi

- [Spatie Laravel Settings Documentation](https://github.com/spatie/laravel-settings)
- [Inertia.js Shared Data](https://inertiajs.com/shared-data)
