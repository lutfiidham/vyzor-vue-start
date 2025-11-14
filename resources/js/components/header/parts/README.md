# Header Modular Components

Komponen-komponen header yang telah dimodularisasi untuk meningkatkan maintainability dan reusability.

## Struktur Folder

```
parts/
├── LanguageSwitcher.vue    # Komponen untuk pergantian bahasa
├── DarkModeToggle.vue      # Komponen untuk toggle tema gelap/terang
├── CartButton.vue          # Komponen untuk keranjang belanja
├── NotificationButton.vue  # Komponen untuk notifikasi
├── FullscreenToggle.vue    # Komponen untuk mode layar penuh
├── ProfileDropdown.vue     # Komponen untuk dropdown profil pengguna
├── index.js               # File export untuk semua komponen
└── README.md              # Dokumentasi ini
```

## Komponen

### LanguageSwitcher
- **Props:** Tidak ada
- **Events:** `@language-changed`
- **Fungsi:** Menampilkan dropdown untuk memilih bahasa

### DarkModeToggle
- **Props:** Tidak ada
- **Events:** `@theme-changed`
- **Fungsi:** Toggle antara tema gelap dan terang

### CartButton
- **Props:**
  - `baseUrl` (String): URL base untuk link
- **Events:** `@cart-updated`
- **Fungsi:** Menampilkan keranjang belanja dengan dropdown item-item

### NotificationButton
- **Props:**
  - `baseUrl` (String): URL base untuk link
- **Events:** `@notifications-updated`
- **Fungsi:** Menampilkan notifikasi dengan dropdown

### FullscreenToggle
- **Props:** Tidak ada
- **Events:** `@fullscreen-changed`
- **Fungsi:** Toggle mode layar penuh

### ProfileDropdown
- **Props:** Tidak ada (mengambil data dari usePage)
- **Events:** Tidak ada
- **Fungsi:** Menampilkan dropdown profil pengguna dengan menu-menu

## Cara Penggunaan

```vue
<template>
  <header>
    <!-- Komponen header lainnya -->

    <!-- Gunakan komponen modular -->
    <LanguageSwitcher @language-changed="handleLanguageChanged" />
    <DarkModeToggle @theme-changed="handleThemeChanged" />
    <CartButton :base-url="baseUrl" @cart-updated="handleCartUpdated" />
    <NotificationButton :base-url="baseUrl" @notifications-updated="handleNotificationsUpdated" />
    <FullscreenToggle @fullscreen-changed="handleFullscreenChanged" />
    <ProfileDropdown />

    <!-- Komponen header lainnya -->
  </header>
</template>

<script setup>
import {
  LanguageSwitcher,
  DarkModeToggle,
  CartButton,
  NotificationButton,
  FullscreenToggle,
  ProfileDropdown,
} from './parts/index.js'

// Event handlers
const handleLanguageChanged = (lang) => {
  console.log('Language changed:', lang)
}

const handleThemeChanged = (theme) => {
  console.log('Theme changed:', theme)
}

const handleCartUpdated = (cartItems) => {
  console.log('Cart updated:', cartItems)
}

const handleNotificationsUpdated = (notifications) => {
  console.log('Notifications updated:', notifications)
}

const handleFullscreenChanged = (isFullscreen) => {
  console.log('Fullscreen changed:', isFullscreen)
}
</script>
```

## Keuntungan

1. **Maintainability:** Setiap komponen memiliki fungsionalitas spesifik yang mudah dikelola
2. **Reusability:** Komponen dapat digunakan kembali di tempat lain
3. **Testing:** Lebih mudah untuk melakukan unit testing pada setiap komponen
4. **Performance:** Loading yang lebih efisien dengan lazy loading jika dibutuhkan
5. **Code Organization:** Struktur kode yang lebih rapi dan terorganisir

## Dependencies

Semua komponen menggunakan:
- Vue 3 Composition API
- Inertia.js (untuk Link component)
- Vue3 Perfect Scrollbar (untuk Cart dan Notification)
- Data dari `@/shared/data/header.js`
- BaseImg component dari `../../Baseimage/BaseImg.vue`