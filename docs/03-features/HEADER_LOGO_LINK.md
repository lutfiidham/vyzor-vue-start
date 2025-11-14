# Header Logo Link Configuration

## Perubahan Logo Link

Logo brand di header kini memiliki behavior yang dinamis berdasarkan context halaman.

### Behavior:

#### 1. **Di Halaman Demo** (`/demo/*`)
```
Klik logo → Redirect ke: /demo/dashboards/sales/
```
**Contoh:**
- Di halaman: `/demo/charts/apex-charts/area-chart`
- Klik logo → Ke: `/demo/dashboards/sales/`

#### 2. **Di Halaman Dashboard Utama** (Non-demo)
```
Klik logo → Redirect ke: /dashboard
```
**Contoh:**
- Di halaman: `/profile`
- Klik logo → Ke: `/dashboard`

- Di halaman: `/admin/users`
- Klik logo → Ke: `/dashboard`

---

### Implementasi:

#### **File:** `resources/js/components/header/header.vue`

```vue
<script setup>
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'

const router = usePage()
const baseUrl = __BASE_PATH__

// Computed logo link
const logoLink = computed(() => {
  const currentPath = router.url
  return currentPath.startsWith('/demo') 
    ? `${baseUrl}/demo/dashboards/sales/` 
    : '/dashboard'
})
</script>

<template>
  <Link :href="logoLink" class="header-logo">
    <!-- Logo images -->
  </Link>
</template>
```

---

### Cara Kerja:

1. **Check Current Path**
   - Menggunakan `router.url` dari Inertia.js
   - Mendapatkan current URL path

2. **Conditional Logic**
   ```javascript
   currentPath.startsWith('/demo') 
     ? `${baseUrl}/demo/dashboards/sales/`  // Demo pages
     : '/dashboard'                          // Main dashboard
   ```

3. **Dynamic Binding**
   - Logo link di-bind ke computed property `logoLink`
   - Otomatis update sesuai context halaman

---

### Testing:

#### Test 1: Di Dashboard Utama
```
1. Login ke aplikasi
2. Buka: http://vyzor-vue-start.test/dashboard
3. Klik logo brand di header
4. Expected: Tetap di /dashboard ✅
```

#### Test 2: Di Profile Page
```
1. Buka: http://vyzor-vue-start.test/profile
2. Klik logo brand
3. Expected: Redirect ke /dashboard ✅
```

#### Test 3: Di Admin Page
```
1. Buka: http://vyzor-vue-start.test/admin/users
2. Klik logo brand
3. Expected: Redirect ke /dashboard ✅
```

#### Test 4: Di Demo Page
```
1. Buka: http://vyzor-vue-start.test/demo/charts/apex-charts/area-chart
2. Klik logo brand
3. Expected: Redirect ke /demo/dashboards/sales/ ✅
```

---

### Keuntungan:

✅ **Context-aware**: Logo link sesuai dengan context halaman  
✅ **User-friendly**: User tidak bingung kemana akan redirect  
✅ **Clean separation**: Demo pages tetap di ecosystem demo  
✅ **Consistent UX**: Dashboard pages redirect ke home dashboard  

---

### Customization:

Jika ingin mengubah default dashboard untuk demo atau main:

```javascript
const logoLink = computed(() => {
  const currentPath = router.url
  
  if (currentPath.startsWith('/demo')) {
    return `${baseUrl}/demo/dashboards/analytics/`  // Ubah demo default
  }
  
  if (currentPath.startsWith('/admin')) {
    return '/admin/dashboard'  // Admin punya dashboard sendiri
  }
  
  return '/dashboard'  // Default fallback
})
```

---

### Notes:

- Logo link menggunakan Inertia.js `<Link>` component untuk smooth navigation
- Tidak ada full page reload saat klik logo
- Support multiple logo variants (desktop, mobile, dark mode)
