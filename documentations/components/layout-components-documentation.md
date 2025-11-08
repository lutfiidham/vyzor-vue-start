# Dokumentasi Layout Components Vyzor Vue

## Daftar Isi

1. [MainDashboard Layout](#maindashboard-layout)
2. [LandingPage Layout](#landingpage-layout)
3. [ErrorPagesInfo Layout](#errorpagesinfo-layout)
4. [AuthLayout](#authlayout)

---

## MainDashboard Layout

**Lokasi:** `resources/js/layouts/maindashboard.vue`

**Fungsi:** Layout utama untuk halaman dashboard dengan header, sidebar, dan konten utama.

**Props:**

- `showHeader` (Boolean, default: true) - Menampilkan atau menyembunyikan header
- `showSidebar` (Boolean, default: true) - Menampilkan atau menyembunyikan sidebar
- `sidebarCollapsed` (Boolean, default: false) - Status sidebar collapse
- `layoutClass` (String) - Class CSS tambahan untuk layout
- `contentClass` (String) - Class CSS untuk area konten

**Fitur:**

- Header dengan navigasi dan user menu
- Sidebar dengan menu multi-level
- Konten area dengan responsive design
- Theme switcher integration
- Breadcrumb support
- Footer dengan copyright info

**Cara Penggunaan:**

```vue
<template>
  <MainDashboard
    :showHeader="true"
    :showSidebar="true"
    :sidebarCollapsed="false"
    layoutClass="dashboard-layout"
    contentClass="main-content"
  >
    <router-view />
  </MainDashboard>
</template>

<script setup>
import MainDashboard from '@/layouts/maindashboard.vue'
</script>
```

---

## LandingPage Layout

**Lokasi:** `resources/js/layouts/landingpage.vue`

**Fungsi:** Layout khusus untuk halaman landing/marketing dengan desain yang bersih dan modern.

**Props:**

- `showNavbar` (Boolean, default: true) - Menampilkan atau menyembunyikan navbar
- `showFooter` (Boolean, default: true) - Menampilkan atau menyembunyikan footer
- `navbarFixed` (Boolean, default: true) - Navbar fixed atau static
- `transparentNavbar` (Boolean, default: false) - Navbar transparan
- `layoutClass` (String) - Class CSS tambahan untuk layout

**Fitur:**

- Navbar dengan navigation menu
- Hero section support
- Feature sections
- Testimonials area
- Contact section
- Footer dengan links dan social media
- Smooth scroll behavior
- Mobile responsive

**Cara Penggunaan:**

```vue
<template>
  <LandingPage
    :showNavbar="true"
    :showFooter="true"
    :navbarFixed="true"
    :transparentNavbar="false"
    layoutClass="landing-layout"
  >
    <router-view />
  </LandingPage>
</template>

<script setup>
import LandingPage from '@/layouts/landingpage.vue'
</script>
```

---

## ErrorPagesInfo Layout

**Lokasi:** `resources/js/layouts/errorpagesinfo.vue`

**Fungsi:** Layout khusus untuk halaman error (404, 500, maintenance) dengan desain yang user-friendly.

**Props:**

- `errorType` (String, default: '404') - Tipe error (404/500/503/maintenance)
- `showNavbar` (Boolean, default: false) - Menampilkan atau menyembunyikan navbar
- `showFooter` (Boolean, default: true) - Menampilkan atau menyembunyikan footer
- `layoutClass` (String) - Class CSS tambahan untuk layout
- `backgroundStyle` (String) - Style background untuk error page

**Fitur:**

- Clean error message display
- Custom error illustrations
- Return to home button
- Search functionality (optional)
- Contact support links
- Animated background effects
- Mobile responsive design

**Cara Penggunaan:**

```vue
<template>
  <ErrorPagesInfo
    errorType="404"
    :showNavbar="false"
    :showFooter="true"
    layoutClass="error-layout"
    backgroundStyle="gradient-bg"
  >
    <router-view />
  </ErrorPagesInfo>
</template>

<script setup>
import ErrorPagesInfo from '@/layouts/errorpagesinfo.vue'
</script>
```

---

## AuthLayout

**Lokasi:** `resources/js/layouts/authlayout.vue`

**Fungsi:** Layout khusus untuk halaman autentikasi (login, register, forgot password) dengan desain yang fokus dan clean.

**Props:**

- `authType` (String, default: 'login') - Tipe halaman auth (login/register/forgot/reset)
- `showLogo` (Boolean, default: true) - Menampilkan atau menyembunyikan logo
- `bgImage` (String) - Background image URL
- `layoutClass` (String) - Class CSS tambahan untuk layout
- `cardClass` (String) - Class CSS untuk auth card
- `showSocialAuth` (Boolean, default: false) - Menampilkan social auth buttons

**Fitur:**

- Centered auth card
- Logo branding
- Social media authentication
- Form validation support
- Remember me checkbox
- Terms and conditions links
- Password strength indicator
- Background image or gradient
- Mobile responsive

**Cara Penggunaan:**

```vue
<template>
  <AuthLayout
    authType="login"
    :showLogo="true"
    bgImage="/images/auth-bg.jpg"
    layoutClass="auth-layout"
    cardClass="auth-card"
    :showSocialAuth="true"
  >
    <router-view />
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/authlayout.vue'
</script>
```

---

## Panduan Penggunaan Layout

### Memilih Layout yang Tepat

1. **MainDashboard**: Gunakan untuk halaman dashboard, admin panel, dan halaman yang membutuhkan navigasi lengkap
2. **LandingPage**: Gunakan untuk halaman marketing, sales page, dan halaman publik
3. **ErrorPagesInfo**: Gunakan untuk semua halaman error dan maintenance
4. **AuthLayout**: Gunakan untuk halaman login, register, dan halaman autentikasi lainnya

### Customization

Semua layout mendukung:
- Custom CSS classes
- Dynamic props untuk mengontrol tampilan
- Responsive design
- Theme integration
- Router view integration

### Best Practices

1. Gunakan layout yang sesuai dengan kebutuhan halaman
2. Manfaatkan props untuk konfigurasi dinamis
3. Pastikan mobile responsiveness
4. Integrasikan dengan theme system yang ada
5. Test pada berbagai ukuran layar
