# Timezone Implementation Guide

## ✅ What Has Been Implemented

Aplikasi sekarang menggunakan **timezone dan date format dinamis** dari database settings. Semua tanggal dan waktu di aplikasi akan otomatis menggunakan timezone yang dikonfigurasi.

## 🎯 Features

### 1. Dynamic Timezone from Settings

Timezone diambil dari `GeneralSettings` dan diterapkan secara global:

```php
// Current timezone
$timezone = app(\App\Settings\GeneralSettings::class)->timezone;
// Default: "Asia/Jakarta"
```

### 2. Automatic Timezone Application

- ✅ PHP timezone otomatis di-set saat boot
- ✅ Laravel config timezone otomatis di-update
- ✅ Semua Carbon instances menggunakan timezone aplikasi
- ✅ Timezone shared ke semua Vue components

### 3. Date Formatting Helper

Helper class `DateTimeHelper` untuk formatting tanggal konsisten:

```php
use App\Helpers\DateTimeHelper;

// Format tanggal
DateTimeHelper::formatDate('2025-11-14');
// Output: "14/11/2025" (sesuai date_format setting)

// Format datetime
DateTimeHelper::formatDateTime('2025-11-14 12:00:00');
// Output: "14/11/2025 12:00:00"

// Relative time
DateTimeHelper::diffForHumans('2025-11-14 12:00:00');
// Output: "2 hours ago"

// Get current time
DateTimeHelper::now();
// Returns: Carbon instance dengan timezone aplikasi
```

### 4. Blade Directives

Custom Blade directives untuk formatting tanggal:

```blade
{{-- Format datetime --}}
@datetime($user->created_at)
// Output: "14/11/2025 12:00:00"

{{-- Format date only --}}
@date($user->created_at)
// Output: "14/11/2025"

{{-- Relative time --}}
@diffHumans($user->created_at)
// Output: "2 hours ago"
```

### 5. Vue Composable

Composable `useDateTime` untuk formatting di Vue components:

```vue
<script setup>
import { useDateTime } from '@/composables/useDateTime'

const { formatDate, formatDateTime, diffForHumans, timezone } = useDateTime()
</script>

<template>
  <div>
    <!-- Display timezone -->
    <p>Timezone: {{ timezone }}</p>
    
    <!-- Format date -->
    <p>Created: {{ formatDate(user.created_at) }}</p>
    
    <!-- Format datetime -->
    <p>Updated: {{ formatDateTime(user.updated_at) }}</p>
    
    <!-- Relative time -->
    <p>{{ diffForHumans(user.created_at) }}</p>
  </div>
</template>
```

## 📂 Files Created/Modified

### Created Files:
1. ✅ `app/Helpers/DateTimeHelper.php` - PHP helper untuk date formatting
2. ✅ `resources/js/composables/useDateTime.js` - Vue composable untuk date formatting

### Modified Files:
1. ✅ `app/Providers/AppServiceProvider.php`
   - Set timezone dari settings saat boot
   - Register Blade directives

2. ✅ `app/Http/Middleware/HandleInertiaRequests.php`
   - Share timezone dan date_format ke frontend

3. ✅ `resources/js/Pages/Dashboard.vue`
   - Contoh penggunaan timezone

## 🚀 Usage Examples

### Example 1: Laravel Controller

```php
use App\Helpers\DateTimeHelper;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all()->map(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'created_at' => DateTimeHelper::formatDateTime($user->created_at),
                'created_ago' => DateTimeHelper::diffForHumans($user->created_at),
            ];
        });

        return Inertia::render('Users/Index', [
            'users' => $users
        ]);
    }
}
```

### Example 2: Blade Template

```blade
<div class="user-info">
    <h3>{{ $user->name }}</h3>
    <p>Registered: @datetime($user->created_at)</p>
    <p>Last login: @diffHumans($user->last_login_at)</p>
    <p>Birthday: @date($user->birthday)</p>
</div>
```

### Example 3: Vue Component

```vue
<script setup>
import { useDateTime } from '@/composables/useDateTime'

const props = defineProps({
  users: Array
})

const { formatDateTime, diffForHumans } = useDateTime()
</script>

<template>
  <div>
    <table>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ formatDateTime(user.created_at) }}</td>
        <td>{{ diffForHumans(user.created_at) }}</td>
      </tr>
    </table>
  </div>
</template>
```

### Example 4: API Response

```php
use App\Helpers\DateTimeHelper;

class ApiController extends Controller
{
    public function show($id)
    {
        $user = User::findOrFail($id);

        return response()->json([
            'id' => $user->id,
            'name' => $user->name,
            'created_at' => DateTimeHelper::formatDateTime($user->created_at),
            'timezone' => DateTimeHelper::getTimezone(),
        ]);
    }
}
```

## ⚙️ Configuration

### Available Settings

Timezone dan date format dapat diubah di Settings:

```php
// Via Tinker
$settings = app(\App\Settings\GeneralSettings::class);
$settings->timezone = 'America/New_York';
$settings->date_format = 'm/d/Y';
$settings->save();
```

### Supported Date Formats

- `Y-m-d` → 2025-11-14
- `d/m/Y` → 14/11/2025
- `m/d/Y` → 11/14/2025
- `d-m-Y` → 14-11-2025

### Common Timezones

- `UTC` - Coordinated Universal Time
- `Asia/Jakarta` - Indonesia (WIB)
- `America/New_York` - US Eastern Time
- `Europe/London` - UK Time
- `Asia/Tokyo` - Japan Time
- `Australia/Sydney` - Australian Time

## 🔍 How It Works

### Flow Diagram

```
Database (settings table)
    ↓
GeneralSettings::class (timezone, date_format)
    ↓
AppServiceProvider::boot()
    ├─ config(['app.timezone' => $timezone])
    └─ date_default_timezone_set($timezone)
    ↓
Application uses timezone globally
    ├─ PHP date functions
    ├─ Carbon instances
    ├─ DateTimeHelper methods
    └─ Vue components (via Inertia props)
```

### Code Flow

1. **Boot Time:**
   ```php
   // AppServiceProvider.php
   $timezone = app(GeneralSettings::class)->timezone;
   config(['app.timezone' => $timezone]);
   date_default_timezone_set($timezone);
   ```

2. **Backend Usage:**
   ```php
   // Automatic for all Carbon instances
   Carbon::now(); // Uses app timezone
   
   // Or explicit
   DateTimeHelper::now(); // Uses app timezone
   ```

3. **Frontend Usage:**
   ```javascript
   // Shared via Inertia
   const timezone = $page.props.settings.timezone
   const dateFormat = $page.props.settings.date_format
   ```

## 📊 Settings in Database

```sql
-- View timezone settings
SELECT * FROM settings WHERE `group` = 'general' AND name IN ('timezone', 'date_format');

-- Result:
-- group='general', name='timezone', payload='"Asia/Jakarta"'
-- group='general', name='date_format', payload='"d/m/Y"'
```

## 🎨 Benefits

1. ✅ **Consistent Formatting** - Semua tanggal formatted sama di seluruh aplikasi
2. ✅ **User-Friendly** - Tampilkan waktu sesuai timezone user
3. ✅ **Easy Configuration** - Ubah timezone tanpa edit code
4. ✅ **Global Access** - Timezone tersedia di backend dan frontend
5. ✅ **Type-Safe** - Helper methods dengan type hints

## 🧪 Testing

### Test Timezone Setting

```bash
php artisan tinker
```

```php
// Check current timezone
echo DateTimeHelper::getTimezone();

// Check current time
echo DateTimeHelper::now()->format('Y-m-d H:i:s');

// Change timezone
$s = app(\App\Settings\GeneralSettings::class);
$s->timezone = 'America/New_York';
$s->save();

// Restart application and check again
```

### Test Date Formatting

```php
$date = '2025-11-14 12:00:00';

echo DateTimeHelper::formatDate($date);
// Output: 14/11/2025

echo DateTimeHelper::formatDateTime($date);
// Output: 14/11/2025 12:00:00

echo DateTimeHelper::diffForHumans($date);
// Output: 2 hours ago
```

## 📚 API Reference

### DateTimeHelper Methods

| Method | Parameters | Return | Description |
|--------|-----------|--------|-------------|
| `formatDate($date, $format = null)` | date, format | string | Format date only |
| `formatDateTime($date, $format = null)` | date, format | string | Format date and time |
| `diffForHumans($date)` | date | string | Relative time (e.g., "2 hours ago") |
| `now()` | - | Carbon | Current datetime in app timezone |
| `toAppTimezone($date)` | date | Carbon | Convert to app timezone |
| `getTimezone()` | - | string | Get app timezone |
| `getDateFormat()` | - | string | Get app date format |

### Vue Composable Methods

| Method | Parameters | Return | Description |
|--------|-----------|--------|-------------|
| `formatDate(date, format)` | date, format | string | Format date |
| `formatDateTime(date, format)` | date, format | string | Format datetime |
| `diffForHumans(date)` | date | string | Relative time |
| `now()` | - | string | Current datetime |

## 💡 Tips

1. **Always use helpers** untuk consistency
2. **Store UTC in database** - Convert on display
3. **Use diffForHumans** untuk user-friendly display
4. **Cache timezone** jika aplikasi high-traffic
5. **Test different timezones** sebelum deploy

## 🐛 Troubleshooting

**Timezone tidak berubah?**
```bash
php artisan config:clear
php artisan cache:clear
# Restart web server
```

**Date format salah?**
- Check `date_format` setting di database
- Verify format string valid

**Time offset salah?**
- Check timezone name benar
- Verify server timezone configuration

---

**Implementation Date:** 2025-11-14  
**Status:** ✅ Complete & Tested
