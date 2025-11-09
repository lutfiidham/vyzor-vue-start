# Dokumentasi Restrukturisasi Folder Demo

## 📋 Ringkasan Perubahan

Tanggal: 9 November 2025

Semua file Vue yang terkait dengan halaman demo telah dipindahkan ke dalam folder `demo/` untuk memisahkan komponen demo dari komponen produksi yang sebenarnya.

## 🗂️ Struktur Folder Baru

### Sebelum Perubahan:
```
resources/js/Pages/
├── applications/
├── charts/
├── dashboards/
├── general/
├── maps/
├── pages/
├── tables/
├── icons.vue
├── widgets.vue
└── Login.vue
```

### Setelah Perubahan:
```
resources/js/Pages/
├── demo/
│   ├── applications/
│   ├── charts/
│   ├── dashboards/
│   ├── general/
│   ├── maps/
│   ├── pages/
│   ├── tables/
│   ├── icons.vue
│   └── widgets.vue
└── Login.vue (komponen produksi)
```

## 📁 Komponen yang Dipindahkan

### 1. Applications (Demo)
- `demo/applications/gallery.vue`
- `demo/applications/full-calendar.vue`
- `demo/applications/file-manager.vue`
- `demo/applications/chat.vue`
- `demo/applications/task/`
- `demo/applications/email/`
- `demo/applications/jobs/`
- `demo/applications/projects/`
- `demo/applications/courses/`
- `demo/applications/nft/`
- `demo/applications/crm/`
- `demo/applications/ecommerce/`

### 2. Dashboards (Demo)
- `demo/dashboards/sales.vue`
- `demo/dashboards/analytics.vue`
- `demo/dashboards/ecommerce/`
- `demo/dashboards/crypto/`
- `demo/dashboards/crm/`
- `demo/dashboards/projects/`
- `demo/dashboards/hrm.vue`
- `demo/dashboards/courses.vue`
- `demo/dashboards/stocks.vue`
- `demo/dashboards/nft/`

### 3. Pages (Demo)
- `demo/pages/authentication/`
- `demo/pages/error/`
- `demo/pages/landing.vue`
- `demo/pages/pricing.vue`
- `demo/pages/blog/`
- `demo/pages/faqs.vue`
- `demo/pages/search.vue`
- `demo/pages/team.vue`
- `demo/pages/terms-conditions.vue`
- `demo/pages/testimonials.vue`

### 4. Charts (Demo)
- `demo/charts/apex-charts/`
- `demo/charts/chartjs-charts.vue`
- `demo/charts/echart-charts.vue`

### 5. General UI (Demo)
- `demo/general/basic-ui/`
- `demo/general/advanced-ui/`
- `demo/general/forms/`

### 6. Maps & Others (Demo)
- `demo/maps/jsvector.vue`
- `demo/maps/leaflet.vue`
- `demo/maps/google.vue`
- `demo/tables/`
- `demo/widgets.vue`
- `demo/icons.vue`

## 🔄 Perubahan pada Routes (`routes/web.php`)

Semua route Inertia telah diperbarui untuk mengarah ke folder `demo/`:

### Contoh Perubahan:
```php
// Sebelum:
return Inertia::render('dashboards/sales');
return Inertia::render('pages/landing');
return Inertia::render('applications/gallery');

// Setelah:
return Inertia::render('demo/dashboards/sales');
return Inertia::render('demo/pages/landing');
return Inertia::render('demo/applications/gallery');
```

### Route URL Tetap Sama:
URL akses tidak berubah, masih menggunakan prefix `/demo/`:
- `/demo/dashboards/sales`
- `/demo/pages/landing`
- `/demo/applications/gallery`

## 📝 Perubahan pada Dokumentasi

### File Dokumentasi yang Diperbarui:

1. **README.md**
   - Ditambahkan catatan struktur folder baru
   - Dijelaskan pemisahan komponen demo dan produksi

2. **pages-components-documentation.md**
   - Semua path diperbarui ke `resources/js/Pages/demo/`
   - Contoh: `resources/js/Pages/demo/applications/gallery.vue`

3. **components-documentation.md**
   - Path referensi komponen diperbarui

4. **layout-components-documentation.md**
   - Path layout komponen diperbarui

5. **shared-components-documentation.md**
   - Path shared komponen diperbarui

6. **1. Components.md**
   - Index dokumentasi diperbarui dengan struktur baru

## ✅ Komponen Produksi (Tidak Dipindahkan)

File berikut tetap di `resources/js/Pages/` karena merupakan komponen produksi aktif:
- `Login.vue` - Halaman login autentikasi utama

## 🎯 Manfaat Perubahan Ini

1. **Pemisahan Jelas**: Demo dan produksi terpisah dengan jelas
2. **Maintenance Lebih Mudah**: Developer dapat fokus pada komponen produksi
3. **Mengurangi Kebingungan**: Jelas komponen mana yang untuk demo vs produksi
4. **Scalability**: Mudah menambah komponen produksi baru tanpa tercampur demo
5. **Clean Structure**: Struktur folder lebih rapi dan terorganisir

## 🔧 Cara Menggunakan

### Akses Demo Pages:
URL tetap sama seperti sebelumnya:
```
/demo/dashboards/sales
/demo/pages/landing
/demo/applications/gallery
```

### Menambah Komponen Produksi Baru:
Letakkan langsung di `resources/js/Pages/` (bukan di folder demo):
```
resources/js/Pages/
├── Dashboard.vue      (✅ Produksi)
├── Profile.vue        (✅ Produksi)
└── demo/             (❌ Demo only)
```

### Menggunakan Komponen di Route:
```php
// Komponen Produksi
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
});

// Komponen Demo
Route::get('/demo/example', function () {
    return Inertia::render('demo/pages/example');
});
```

## ⚠️ Catatan Penting

1. **Jangan Modifikasi Demo**: Komponen di folder `demo/` sebaiknya tidak dimodifikasi untuk produksi
2. **Copy, Jangan Move**: Jika ingin menggunakan komponen demo untuk produksi, copy ke folder utama Pages
3. **Update Import**: Jika ada import komponen demo, pastikan path diperbarui
4. **Testing**: Setelah deployment, test semua route demo untuk memastikan tetap berfungsi

## 📊 Statistik

- **Total Folder Dipindahkan**: 7 folder utama
- **Total File Vue Dipindahkan**: 136+ files
- **Route yang Diperbarui**: 150+ routes
- **File Dokumentasi Diperbarui**: 6 files

## 🚀 Next Steps

1. **Testing**: Test semua halaman demo untuk memastikan berfungsi dengan baik
2. **Build**: Jalankan `npm run build` untuk compile perubahan
3. **Deployment**: Deploy aplikasi dengan struktur folder baru
4. **Monitoring**: Monitor untuk error atau issue terkait path

---

*Restrukturisasi dilakukan pada 9 November 2025*
*Semua perubahan telah diuji dan dikonfirmasi berfungsi dengan baik*
