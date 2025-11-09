# Dokumentasi Komponen Vyzor Vue

## Daftar Isi

1. [Komponen Base](#komponen-base)
2. [Komponen UI](#komponen-ui)
3. [Komponen Google Maps](#komponen-google-maps)
4. [Komponen Layout](#komponen-layout)
5. [Komponen UI Tambahan](#komponen-ui-tambahan)
6. [Stores](#stores)

---

## Komponen Base

### BaseImg

**Lokasi:** `resources/js/components/Baseimage/BaseImg.vue`

**Fungsi:** Komponen untuk menampilkan gambar dengan dukungan path relatif dan absolut.

**Props:**

- `src` (String, default: '') - Path gambar
- `alt` (String, default: '') - Teks alternatif gambar
- `class` (String, default: '') - Class CSS tambahan
- `id` (String, default: '') - ID elemen
- `height` (String|Number, default: null) - Tinggi gambar
- `width` (String|Number, default: null) - Lebar gambar
- `style` (String, default: '') - Style inline

**Cara Penggunaan:**

```vue
<template>
  <!-- Gambar dengan path relatif -->
  <BaseImg src="/images/logo.png" alt="Logo" width="100" height="50" />

  <!-- Gambar dengan path absolut -->
  <BaseImg src="https://example.com/image.jpg" alt="External Image" />
</template>
```

---

### BaseVideo

**Lokasi:** `resources/js/components/BaseVideo/BaseVideo.vue`

**Fungsi:** Komponen untuk menampilkan video dengan dukungan path relatif dan absolut.

**Props:**

- `src` (String, default: '') - Path video
- `alt` (String, default: '') - Teks alternatif video
- `class` (String, default: '') - Class CSS tambahan
- `id` (String, default: '') - ID elemen
- `height` (String|Number, default: null) - Tinggi video
- `width` (String|Number, default: null) - Lebar video
- `style` (String, default: '') - Style inline

**Cara Penggunaan:**

```vue
<template>
  <!-- Video dengan path relatif -->
  <BaseVideo src="/videos/intro.mp4" alt="Intro Video" width="400" height="300" />

  <!-- Video dengan path absolut -->
  <BaseVideo src="https://example.com/video.mp4" alt="External Video" />
</template>
```

---

## Komponen UI

### BackToTop

**Lokasi:** `resources/js/components/backtotop/backtotop.vue`

**Fungsi:** Tombol untuk kembali ke atas halaman yang muncul saat scroll.

**Props:** Tidak ada props yang tersedia.

**Cara Penggunaan:**

```vue
<template>
  <BackToTop />
</template>

<script setup>
import BackToTop from '@/components/backtotop/backtotop.vue'
</script>
```

---

### CustomSwitcher

**Lokasi:** `resources/js/components/customswitcher/customswitcher.vue`

**Fungsi:** Panel pengaturan tema yang memungkinkan pengguna mengubah mode terang/gelap, arah teks (LTR/RTL), dan warna primer tema.

**Props:** Tidak ada props yang tersedia.

**Fungsi Utama:**

- Mengubah tema antara light dan dark mode
- Mengubah arah teks (LTR/RTL)
- Mengubah warna primer tema
- Reset pengaturan ke default

**Cara Penggunaan:**

```vue
<template>
  <CustomSwitcher />
</template>

<script setup>
import CustomSwitcher from '@/components/customswitcher/customswitcher.vue'
</script>
```

---

### Footer

**Lokasi:** `resources/js/components/footer/footer.vue`

**Fungsi:** Komponen footer dengan informasi hak cipta.

**Props:** Tidak ada props yang tersedia.

**Cara Penggunaan:**

```vue
<template>
  <Footer />
</template>

<script setup>
import Footer from '@/components/footer/footer.vue'
</script>
```

---

### NotFound

**Lokasi:** `resources/js/components/NotFound/NotFound.vue`

**Fungsi:** Halaman error 404 dengan desain menarik.

**Props:** Tidak ada props yang tersedia.

**Cara Penggunaan:**

```vue
<template>
  <NotFound />
</template>

<script setup>
import NotFound from '@/components/NotFound/NotFound.vue'
</script>
```

---

### PageHeader

**Lokasi:** `resources/js/components/pageheader/pageheader.vue`

**Fungsi:** Header halaman dengan breadcrumb dan judul halaman.

**Props:**

- `propData` (Object) - Data untuk header halaman:
  - `activepage` (String) - Judul halaman aktif
  - `title` (String) - Judul utama
  - `subtitle` (String, opsional) - Subjudul
  - `currentpage` (String) - Nama halaman saat ini

**Cara Penggunaan:**

```vue
<template>
  <PageHeader :propData="headerData" />
</template>

<script setup>
import PageHeader from '@/components/pageheader/pageheader.vue'

const headerData = {
  activepage: 'Dashboard',
  title: 'Home',
  subtitle: 'Components',
  currentpage: 'Dashboard',
}
</script>
```

---

## Komponen Google Maps

### CustomControl

**Lokasi:** `resources/js/components/google-maps/customControl.vue`

**Fungsi:** Peta Google dengan kontrol kustom di bagian bawah tengah.

**Props:** Tidak ada props yang tersedia.

**Cara Penggunaan:**

```vue
<template>
  <CustomControl />
</template>

<script setup>
import CustomControl from '@/components/google-maps/customControl.vue'
</script>
```

---

### CustomMarker

**Lokasi:** `resources/js/components/google-maps/custommarker.vue`

**Fungsi:** Peta Google dengan marker kustom yang berisi gambar dan teks.

**Props:** Tidak ada props yang tersedia.

**Cara Penggunaan:**

```vue
<template>
  <CustomMarker />
</template>

<script setup>
import CustomMarker from '@/components/google-maps/custommarker.vue'
</script>
```

---

### GoogleCircle

**Lokasi:** `resources/js/components/google-maps/googleCircle.vue`

**Fungsi:** Peta Google dengan lingkaran-lingkaran yang merepresentasikan populasi kota.

**Props:** Tidak ada props yang tersedia.

**Cara Penggunaan:**

```vue
<template>
  <GoogleCircle />
</template>

<script setup>
import GoogleCircle from '@/components/google-maps/googleCircle.vue'
</script>
```

---

### GoogleMarker

**Lokasi:** `resources/js/components/google-maps/googleMarker.vue`

**Fungsi:** Peta Google dengan marker sederhana.

**Props:** Tidak ada props yang tersedia.

**Cara Penggunaan:**

```vue
<template>
  <GoogleMarker />
</template>

<script setup>
import GoogleMarker from '@/components/google-maps/googleMarker.vue'
</script>
```

---

### GooglePolygon

**Lokasi:** `resources/js/components/google-maps/googlePolygon.vue`

**Fungsi:** Peta Google dengan polygon (segitiga Bermuda).

**Props:** Tidak ada props yang tersedia.

**Cara Penggunaan:**

```vue
<template>
  <GooglePolygon />
</template>

<script setup>
import GooglePolygon from '@/components/google-maps/googlePolygon.vue'
</script>
```

---

### GooglePolyline

**Lokasi:** `resources/js/components/google-maps/googlePolyline.vue`

**Fungsi:** Peta Google dengan polyline (garis penerbangan).

**Props:** Tidak ada props yang tersedia.

**Cara Penggunaan:**

```vue
<template>
  <GooglePolyline />
</template>

<script setup>
import GooglePolyline from '@/components/google-maps/googlePolyline.vue'
</script>
```

---

### GoogleRectangle

**Lokasi:** `resources/js/components/google-maps/googleRectangle.vue`

**Fungsi:** Peta Google dengan rectangle.

**Props:** Tidak ada props yang tersedia.

**Cara Penggunaan:**

```vue
<template>
  <GoogleRectangle />
</template>

<script setup>
import GoogleRectangle from '@/components/google-maps/googleRectangle.vue'
</script>
```

---

### MarkerCluster

**Lokasi:** `resources/js/components/google-maps/markerCluster.vue`

**Fungsi:** Peta Google dengan clustering marker untuk lokasi yang berdekatan.

**Props:** Tidak ada props yang tersedia.

**Cara Penggunaan:**

```vue
<template>
  <MarkerCluster />
</template>

<script setup>
import MarkerCluster from '@/components/google-maps/markerCluster.vue'
</script>
```

---

## Komponen Layout

### Header

**Lokasi:** `resources/js/components/header/header.vue`

**Fungsi:** Header aplikasi dengan navigasi, pencarian, notifikasi, dan pengaturan pengguna.

**Props:** Tidak ada props yang tersedia.

**Fitur:**

- Logo aplikasi
- Toggle menu
- Pencarian dengan autocomplete
- Pemilihan bahasa
- Mode terang/gelap
- Keranjang belanja
- Notifikasi
- Mode fullscreen
- Profil pengguna
- Pengaturan tema

**Cara Penggunaan:**

```vue
<template>
  <Header />
</template>

<script setup>
import Header from '@/components/header/header.vue'
</script>
```

---

### Sidebar

**Lokasi:** `resources/js/components/sidebar/sidebar.vue`

**Fungsi:** Sidebar navigasi dengan menu multi-level dan berbagai gaya tampilan.

**Props:** Tidak ada props yang tersedia.

**Fitur:**

- Menu multi-level dengan RecursiveMenu
- Berbagai gaya menu (default, closed, icon text, dll)
- Scroll untuk menu yang panjang
- Navigasi arrow untuk menu horizontal
- Theme settings di bagian bawah (untuk double menu)
- Profile settings dan logout

**Cara Penggunaan:**

```vue
<template>
  <Sidebar />
</template>

<script setup>
import Sidebar from '@/components/sidebar/sidebar.vue'
</script>
```

---

### Switcher

**Lokasi:** `resources/js/components/switcher/switcher.vue`

**Fungsi:** Panel pengaturan tema lengkap dengan berbagai opsi kustomisasi.

**Props:** Tidak ada props yang tersedia.

**Fitur:**

- Theme Color Mode (Light/Dark)
- Directions (LTR/RTL)
- Navigation Styles (Vertical/Horizontal)
- Menu Styles (Click/Hover)
- Layout Styles (Default/Closed/Icon Text/Icon Overlay/Detached/Double Menu)
- Page Styles (Regular/Classic/Modern/Flat)
- Layout Width Styles (Default/Full Width/Boxed)
- Menu Positions (Fixed/Scrollable)
- Header Positions (Fixed/Scrollable)
- Menu Colors (Light/Dark/Color/Gradient/Transparent)
- Header Colors (Light/Dark/Color/Gradient/Transparent)
- Theme Primary Color
- Theme Background Color
- Background Image untuk menu
- Reset semua pengaturan

**Cara Penggunaan:**

```vue
<template>
  <Switcher />
</template>

<script setup>
import Switcher from '@/components/switcher/switcher.vue'
</script>
```

