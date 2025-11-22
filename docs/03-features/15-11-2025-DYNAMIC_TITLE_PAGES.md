# Dynamic Title Implementation in Vue Pages

## ✅ Overview

Halaman-halaman Vue di aplikasi ini sekarang menggunakan **dynamic title** dari settings database. Title akan otomatis menggunakan format: `{Page Title} - {App Name from Settings}`

## 🎯 How It Works

### Global Title Formatter

File `resources/js/app.js` sudah dikonfigurasi dengan title formatter:

```javascript
createInertiaApp({
  title: (title) => {
    const appName = window._appName || 'Vyzor'
    return title ? `${title} - ${appName}` : appName
  },
  setup({ el, App, props, plugin }) {
    window._appName = props.initialPage.props.settings?.app_name || 'Vyzor'
    // ...
  },
})
```

### Page Title Usage

Di setiap Vue page component, cukup gunakan:

```vue
<template>
  <Head title="Page Title" />
  <!-- Page content -->
</template>
```

**Hasil di browser:**
- Jika `app_name` setting = "Starter App"
- Title akan menjadi: **"Page Title - Starter App"**

## 📝 Examples

### Example 1: Login Page

```vue
<!-- resources/js/Pages/Login.vue -->
<template>
  <Head title="Login" />
  <!-- Login form -->
</template>
```

**Browser title:** `Login - Starter App`

### Example 2: Dashboard Page

```vue
<!-- resources/js/Pages/Dashboard.vue -->
<template>
  <Head title="Dashboard" />
  <!-- Dashboard content -->
</template>
```

**Browser title:** `Dashboard - Starter App`

### Example 3: Users Page

```vue
<!-- resources/js/Pages/Admin/Users/Index.vue -->
<template>
  <Head title="Users" />
  <!-- Users list -->
</template>
```

**Browser title:** `Users - Starter App`

## 🔄 Migration Guide

### Before (Hardcoded)

```vue
<template>
  <Head title="Login | Vyzor - Laravel & Vue" />
</template>
```

### After (Dynamic)

```vue
<template>
  <Head title="Login" />
</template>
```

**Changes needed:**
1. Keep only the page title part
2. Remove the `|` separator and app name
3. The formatter will automatically add: ` - {App Name}`

## 📂 Pages Already Updated

✅ `resources/js/Pages/Login.vue`
✅ `resources/js/Pages/Dashboard.vue`

## 🛠️ Updating Other Pages

### Manual Update

Edit Vue file dan ubah:
```vue
<Head title="Page Name | Old App Name" />
```

Menjadi:
```vue
<Head title="Page Name" />
```

### Bulk Update (Optional)

Jika ingin update banyak file sekaligus, buat script PowerShell:

```powershell
Get-ChildItem -Path "resources\js\Pages" -Recurse -Filter "*.vue" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    # Update pattern sesuai kebutuhan
    if ($content -match '<Head title="([^|]+)\s*\|[^"]*"') {
        $pageTitle = $matches[1].Trim()
        $newContent = $content -replace '<Head title="[^|]+\s*\|[^"]*"', "<Head title=`"$pageTitle`""
        Set-Content -Path $_.FullName -Value $newContent -NoNewline
    }
}
```

⚠️ **Warning:** Backup files sebelum menjalankan bulk update!

## ✨ Benefits

1. ✅ **Consistency** - Semua title menggunakan format yang sama
2. ✅ **Dynamic** - App name berubah otomatis dari settings
3. ✅ **Simpler Code** - Tidak perlu hardcode app name di setiap file
4. ✅ **Easy Maintenance** - Update app name di satu tempat, berlaku untuk semua halaman
5. ✅ **SEO Friendly** - Title tetap SEO-friendly dengan format standar

## 🧪 Testing

### Test Dynamic Title

1. **Check current title:**
   ```bash
   php artisan tinker
   echo app(\App\Settings\GeneralSettings::class)->app_name;
   # Output: Starter App
   ```

2. **Open browser:**
   - Navigate to `/login`
   - Check browser tab title: "Login - Starter App" ✅

3. **Change app name:**
   ```php
   $s = app(\App\Settings\GeneralSettings::class);
   $s->app_name = "My Custom App";
   $s->save();
   ```

4. **Refresh browser:**
   - Title should now be: "Login - My Custom App" ✅

## 💡 Tips

1. **Keep page titles short** - Only use the specific page name
2. **Use descriptive titles** - Help users understand the page purpose
3. **Follow naming convention** - Use Title Case for consistency
4. **Test after changes** - Always verify in browser

## 🔍 Troubleshooting

**Title tidak berubah setelah update settings?**
- Hard refresh browser (Ctrl+Shift+R)
- Clear browser cache
- Check console for errors

**Title masih hardcoded?**
- Verify page uses `<Head title="Page Name" />` format
- Check tidak ada custom title di layout
- Verify `app.js` title formatter sudah benar

**Title menampilkan undefined?**
- Check `HandleInertiaRequests` middleware share settings
- Verify settings migration sudah run
- Check `app_name` ada di database

---

**Last Updated:** 2025-11-15  
**Status:** ✅ Implemented & Tested
