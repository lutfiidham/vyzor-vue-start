# Dokumentasi Komponen Shared dan UI Vyzor Vue

## Daftar Isi

1. [Komponen Shared (@spk)](#komponen-shared-spk)
2. [Komponen UI](#komponen-ui)
3. [Stores](#stores)

---

## Komponen Shared (@spk)

### SimpleCard

**Lokasi:** `resources/js/shared/@spk/simple-card.vue`

**Fungsi:** Komponen card yang dapat dikustomisasi dengan header, body, dan footer.

**Props:**

- `customCardClass` (String) - Class CSS tambahan untuk card
- `cardHeaderClass` (String) - Class CSS tambahan untuk header
- `showCardHeader` (Boolean, default: true) - Menampilkan atau menyembunyikan header
- `title` (String) - Judul card
- `cardClassBody` (String) - Class CSS tambahan untuk body
- `showCardFooter` (Boolean, default: false) - Menampilkan atau menyembunyikan footer
- `cardFooterClass` (String) - Class CSS tambahan untuk footer
- `cardFooter2` (Boolean, default: false) - Menampilkan footer kedua
- `cardBodyId` (String) - ID untuk body card

**Slots:**

- `default` - Konten utama card
- `showheader` - Konten tambahan di header
- `cardBodyUpperContent` - Konten di atas body
- `cardBodyDown` - Konten di bawah body
- `cardFooter` - Konten footer
- `cardFooter2` - Konten footer kedua

**Cara Penggunaan:**

```vue
<template>
  <SimpleCard title="Card Title" customCardClass="custom-class" showCardFooter>
    <p>Card content goes here</p>
    <template #cardFooter>
      <button class="btn btn-primary">Action</button>
    </template>
  </SimpleCard>
</template>

<script setup>
import SimpleCard from '@/shared/@spk/simple-card.vue'
</script>
```

---

### SwiperjsCards

**Lokasi:** `resources/js/shared/@spk/swiperjs-cards.vue`

**Fungsi:** Komponen carousel menggunakan Swiper.js dengan berbagai modul.

**Props:**

- `swiperItems` (Array) - Array item untuk carousel
- `swiperClass` (String) - Class CSS tambahan untuk swiper
- `swiperSildeClass` (String) - Class CSS tambahan untuk slide

**Slots:**

- `default` - Konten untuk setiap slide, dengan props `{ card, index }`

**Cara Penggunaan:**

```vue
<template>
  <SwiperjsCards :swiperItems="items" swiperClass="my-swiper" swiperSildeClass="my-slide">
    <template #default="{ card, index }">
      <div class="card">
        <img :src="card.image" :alt="card.title" />
        <h3>{{ card.title }}</h3>
      </div>
    </template>
  </SwiperjsCards>
</template>

<script setup>
import SwiperjsCards from '@/shared/@spk/swiperjs-cards.vue'

const items = [
  { image: '/images/slide1.jpg', title: 'Slide 1' },
  { image: '/images/slide2.jpg', title: 'Slide 2' },
  // ...
]
</script>
```

---

### SpkEmployeeCard

**Lokasi:** `resources/js/shared/@spk/reusable-widgets/spk-employeecard.vue`

**Fungsi:** Card widget untuk menampilkan informasi karyawan.

**Props:**

- `widget` (Object) - Data widget dengan properti:
  - `cardColor` (String) - Warna card
  - `divClass` (String) - Class CSS untuk div
  - `color` (String) - Warna utama
  - `iconClass` (String) - Class CSS untuk ikon
  - `title` (String) - Judul
  - `value` (String) - Nilai
  - `valueClass` (String) - Class CSS untuk nilai
  - `badge` (Boolean) - Menampilkan badge
  - `badgeText` (String) - Teks badge
  - `endText` (String) - Class CSS untuk teks akhir
  - `crmbadge` (Boolean) - Menampilkan badge CRM
  - `crmiconColor` (String) - Warna ikon CRM
  - `crmicon` (String) - Arah ikon CRM
  - `crmpercentChange` (String) - Persentase perubahan CRM
  - `percentageColorClass` (String) - Class CSS untuk persentase
  - `percentChange` (String) - Nilai perubahan persentase

**Cara Penggunaan:**

```vue
<template>
  <SpkEmployeeCard :widget="employeeData" />
</template>

<script setup>
import SpkEmployeeCard from '@/shared/@spk/reusable-widgets/spk-employeecard.vue'

const employeeData = {
  cardColor: 'bg-primary',
  divClass: 'flex-wrap',
  color: 'primary',
  iconClass: 'ti ti-user',
  title: 'Total Employees',
  value: '1,234',
  valueClass: 'text-primary',
  badge: true,
  badgeText: '+12%',
  endText: 'text-end',
  crmbadge: true,
  crmiconColor: 'success',
  crmicon: 'up',
  crmpercentChange: '12%',
  percentageColorClass: 'text-success',
  percentChange: '12% from last month',
}
</script>
```

---

### SpkProductsCard

**Lokasi:** `resources/js/shared/@spk/reusable-widgets/spk-productscard.vue`

**Fungsi:** Card widget untuk menampilkan informasi produk.

**Props:**

- `products` (Object) - Data produk dengan properti:
  - `color` (String) - Warna utama
  - `svgIcon` (String) - SVG ikon
  - `title` (String) - Judul
  - `value` (String) - Nilai
  - `percentage` (String) - Persentase
  - `percentageColor` (String) - Warna persentase

**Cara Penggunaan:**

```vue
<template>
  <SpkProductsCard :products="productData" />
</template>

<script setup>
import SpkProductsCard from '@/shared/@spk/reusable-widgets/spk-productscard.vue'

const productData = {
  color: 'primary',
  svgIcon: '<i class="ti ti-package"></i>',
  title: 'Total Products',
  value: '456',
  percentage: '+8%',
  percentageColor: 'success',
}
</script>
```

---

### SpkSalesCard

**Lokasi:** `resources/js/shared/@spk/reusable-widgets/spk-salescard.vue`

**Fungsi:** Card widget untuk menampilkan informasi penjualan dengan chart.

**Props:**

- `sales` (Object) - Data penjualan dengan properti:
  - `color` (String) - Warna utama
  - `svgIcon` (String) - SVG ikon
  - `title` (String) - Judul
  - `value` (String) - Nilai
  - `inc` (String) - Keterangan tambahan
  - `id` (String) - ID untuk chart
  - `height` (Number) - Tinggi chart
  - `width` (Number) - Lebar chart
  - `type` (String) - Tipe chart
  - `chartOptions` (Object) - Opsi chart
  - `chartSeries` (Array) - Data series chart

**Cara Penggunaan:**

```vue
<template>
  <SpkSalesCard :sales="salesData" />
</template>

<script setup>
import SpkSalesCard from '@/shared/@spk/reusable-widgets/spk-salescard.vue'

const salesData = {
  color: 'primary',
  svgIcon: '<i class="ti ti-chart-line"></i>',
  title: 'Total Sales',
  value: '$12,345',
  inc: 'This month',
  id: 'sales-chart',
  height: 60,
  width: 100,
  type: 'line',
  chartOptions: {
    // Chart options
  },
  chartSeries: [
    // Chart series data
  ],
}
</script>
```

---

### ParticlesJs

**Lokasi:** `resources/js/shared/@spk/reuseble-plugin/particles-js.vue`

**Fungsi:** Komponen untuk menampilkan efek partikel menggunakan vue-particles.

**Props:** Tidak ada props yang tersedia.

**Cara Penggunaan:**

```vue
<template>
  <ParticlesJs />
</template>

<script setup>
import ParticlesJs from '@/shared/@spk/reuseble-plugin/particles-js.vue'
</script>
```

---

### TableComponent

**Lokasi:** `resources/js/shared/@spk/table-reuseble/table-component.vue`

**Fungsi:** Komponen tabel yang dapat dikustomisasi dengan checkbox dan header dinamis.

**Props:**

- `headers` (Array) - Array header dengan properti:
  - `text` (String) - Teks header
  - `thClass` (String) - Class CSS untuk header
- `rows` (Array) - Array baris dengan properti:
  - `id` (String|Number) - ID baris
  - `trClass` (String) - Class CSS untuk baris
  - `tdClass` (String) - Class CSS untuk sel
  - `checked` (Boolean) - Status checkbox
- `tableClass` (String) - Class CSS untuk tabel
- `theadClass` (String) - Class CSS untuk thead
- `thClass` (String) - Class CSS untuk th
- `tbodyClass` (String) - Class CSS untuk tbody
- `trClass` (String|Object) - Class CSS untuk tr
- `tableReponsiveClass` (String) - Class CSS untuk responsive wrapper
- `showCheckbox` (Boolean) - Menampilkan checkbox
- `Customcheckclass` (String) - Class CSS untuk checkbox header
- `TdClass` (String) - Class CSS untuk td

**Slots:**

- `cell` - Konten sel dengan props `{ row, index }`

**Cara Penggunaan:**

```vue
<template>
  <TableComponent :headers="headers" :rows="rows" showCheckbox tableClass="table-striped">
    <template #cell="{ row, index }">
      <td>{{ row.name }}</td>
      <td>{{ row.email }}</td>
      <td>{{ row.role }}</td>
    </template>
  </TableComponent>
</template>

<script setup>
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'

const headers = [
  { text: 'Name', thClass: 'text-primary' },
  { text: 'Email', thClass: 'text-primary' },
  { text: 'Role', thClass: 'text-primary' },
]

const rows = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  // ...
]
</script>
```

---

### ChartCards

**Lokasi:** `resources/js/shared/@spk/chart-cards.vue`

**Fungsi:** Card dengan chart menggunakan ApexCharts.

**Props:**

- `customCardClass` (String) - Class CSS tambahan untuk card
- `cardHeaderClass` (String) - Class CSS tambahan untuk header
- `cardBodyClass` (String) - Class CSS tambahan untuk body
- `cardFooterClass` (String) - Class CSS tambahan untuk footer
- `chartId` (String) - ID untuk chart
- `title` (String) - Judul card
- `showCardFooter` (Boolean, default: false) - Menampilkan footer
- `showGitImg` (Boolean, default: false) - Menampilkan gambar GitHub
- `btnGroup` (Boolean, default: false) - Menampilkan grup tombol
- `card` (Object) - Data chart dengan properti:
  - `height` (Number) - Tinggi chart
  - `type` (String) - Tipe chart
  - `chart` (Object) - Konfigurasi chart:
    - `options` (Object) - Opsi chart utama
    - `series` (Array) - Data series utama
    - `secondaryOptions` (Object) - Opsi chart sekunder
    - `secondarySeries` (Array) - Data series sekunder
    - `tertiaryOptions` (Object) - Opsi chart tersier
    - `tertiarySeries` (Array) - Data series tersier

**Slots:**

- `default` - Konten utama card
- `showData` - Konten data tambahan
- `cardHeader` - Konten header tambahan
- `ChartCards` - Konten chart tambahan
- `cardFooter` - Konten footer

**Cara Penggunaan:**

```vue
<template>
  <ChartCards title="Sales Chart" :card="chartData" chartId="sales-chart" btnGroup>
    <template #cardFooter>
      <div class="d-flex justify-content-between">
        <span>Total Sales: $12,345</span>
        <span>Growth: +12%</span>
      </div>
    </template>
  </ChartCards>
</template>

<script setup>
import ChartCards from '@/shared/@spk/chart-cards.vue'

const chartData = {
  height: 300,
  type: 'line',
  chart: {
    options: {
      // Chart options
    },
    series: [
      // Chart series data
    ],
  },
}
</script>
```

---

### ChartjsCards

**Lokasi:** `resources/js/shared/@spk/charts/chartjs-cards.vue`

**Fungsi:** Card dengan chart menggunakan Chart.js.

**Props:**

- `customCardClass` (String) - Class CSS tambahan untuk card
- `cardHeaderClass` (String) - Class CSS tambahan untuk header
- `title` (String) - Judul card
- `cardBodyClass` (String) - Class CSS tambahan untuk body
- `type` (Object) - Komponen chart
- `data` (Object|Array) - Data chart

**Cara Penggunaan:**

```vue
<template>
  <ChartjsCards title="Revenue Chart" :type="LineChart" :data="chartData" />
</template>

<script setup>
import ChartjsCards from '@/shared/@spk/charts/chartjs-cards.vue'
import LineChart from '@/components/charts/LineChart.vue'

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Revenue',
      data: [12000, 19000, 15000, 25000, 22000],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
}
</script>
```

---

### SpkPosSwiperCard

**Lokasi:** `resources/js/shared/@spk/dashboards/spk-posSwiperCard.vue`

**Fungsi:** Card untuk sistem POS dengan informasi order.

**Props:**

- `card` (Object) - Data card dengan properti:
  - `color` (String) - Warna card
  - `id` (String) - ID order
  - `title` (String) - Judul
  - `items` (String) - Jumlah item
  - `time` (String) - Waktu
  - `badge` (String) - Teks badge

**Cara Penggunaan:**

```vue
<template>
  <SpkPosSwiperCard :card="orderData" />
</template>

<script setup>
import SpkPosSwiperCard from '@/shared/@spk/dashboards/spk-posSwiperCard.vue'

const orderData = {
  color: 'primary',
  id: '12345',
  title: 'Customer Order',
  items: '5 items',
  time: '10:30 AM',
  badge: 'New',
}
</script>
```

---

## Komponen UI

### ChatGalleryList

**Lokasi:** `resources/UI/chatGalleryList.vue`

**Fungsi:** Galeri gambar untuk chat dengan PhotoSwipe.

**Props:** Tidak ada props yang tersedia.

**Cara Penggunaan:**

```vue
<template>
  <ChatGalleryList />
</template>

<script setup>
import ChatGalleryList from '@/UI/chatGalleryList.vue'
</script>
```

---

### DescriptionGallery

**Lokasi:** `resources/UI/descriptionGallery.vue`

**Fungsi:** Galeri gambar dengan deskripsi menggunakan lightGallery.

**Props:** Tidak ada props yang tersedia.

**Cara Penggunaan:**

```vue
<template>
  <DescriptionGallery />
</template>

<script setup>
import DescriptionGallery from '@/UI/descriptionGallery.vue'
</script>
```

---

### GalleryList

**Lokasi:** `resources/UI/galleryList.vue`

**Fungsi:** Daftar galeri gambar dengan PhotoSwipe.

**Props:** Tidak ada props yang tersedia.

**Cara Penggunaan:**

```vue
<template>
  <GalleryList />
</template>

<script setup>
import GalleryList from '@/UI/galleryList.vue'
</script>
```

---

### PasswordInput

**Lokasi:** `resources/UI/passwordInput.vue`

**Fungsi:** Input password dengan tombol untuk menampilkan/menyembunyikan password.

**Props:**

- `initialValue` (String) - Nilai awal
- `name` (String) - Nama input
- `id` (String) - ID input
- `placeholder` (String) - Placeholder
- `required` (Boolean) - Input wajib diisi

**Emits:**

- `input` - Event saat nilai berubah

**Cara Penggunaan:**

```vue
<template>
  <PasswordInput
    id="password"
    name="password"
    placeholder="Enter your password"
    required
    @input="handlePasswordInput"
  />
</template>

<script setup>
import PasswordInput from '@/UI/passwordInput.vue'

const handlePasswordInput = (value) => {
  console.log('Password:', value)
}
</script>
```

---

### ProfileGallery

**Lokasi:** `resources/UI/profileGallery.vue`

**Fungsi:** Galeri gambar profil dengan PhotoSwipe.

**Props:** Tidak ada props yang tersedia.

**Cara Penggunaan:**

```vue
<template>
  <ProfileGallery />
</template>

<script setup>
import ProfileGallery from '@/UI/profileGallery.vue'
</script>
```

---

### Quantity

**Lokasi:** `resources/UI/quantity.vue`

**Fungsi:** Input kuantitas dengan tombol tambah/kurang.

**Props:**

- `decClass` (String) - Class CSS untuk tombol kurang
- `inputClass` (String) - Class CSS untuk input
- `incClass` (String) - Class CSS untuk tombol tambah
- `initialValue` (Number) - Nilai awal
- `name` (String) - Nama input
- `placeholder` (String) - Placeholder

**Emits:**

- `input` - Event saat nilai berubah

**Cara Penggunaan:**

```vue
<template>
  <Quantity
    decClass="btn btn-outline-secondary"
    inputClass="form-control"
    incClass="btn btn-outline-secondary"
    :initialValue="1"
    name="quantity"
    placeholder="Quantity"
    @input="handleQuantityChange"
  />
</template>

<script setup>
import Quantity from '@/UI/quantity.vue'

const handleQuantityChange = (value) => {
  console.log('Quantity:', value)
}
</script>
```

---

### RecursiveMenu

**Lokasi:** `resources/UI/recursiveMenu.vue`

**Fungsi:** Menu rekursif untuk navigasi multi-level.

**Props:**

- `menuData` (Object) - Data menu
- `toggleSubmenu` (Function) - Fungsi untuk toggle submenu
- `HoverToggleInnerMenuFn` (Function) - Fungsi untuk toggle menu saat hover
- `level` (Number) - Level menu

**Cara Penggunaan:**

```vue
<template>
  <RecursiveMenu
    :menuData="menuItem"
    :toggleSubmenu="toggleSubmenu"
    :HoverToggleInnerMenuFn="HoverToggleInnerMenuFn"
    :level="1"
  />
</template>

<script setup>
import RecursiveMenu from '@/UI/recursiveMenu.vue'

const menuItem = {
  title: 'Dashboard',
  icon: '<i class="ti ti-home"></i>',
  type: 'sub',
  active: false,
  selected: false,
  children: [
    {
      title: 'Analytics',
      type: 'link',
      path: '/dashboard/analytics',
      selected: false,
    },
    // ...
  ],
}

const toggleSubmenu = (event, item) => {
  // Toggle submenu logic
}

const HoverToggleInnerMenuFn = (event, item) => {
  // Hover toggle logic
}
</script>
```

---

### SearchGallery

**Lokasi:** `resources/UI/SearchGallery.vue`

**Fungsi:** Galeri gambar dengan informasi pencarian menggunakan PhotoSwipe.

**Props:** Tidak ada props yang tersedia.

**Cara Penggunaan:**

```vue
<template>
  <SearchGallery />
</template>

<script setup>
import SearchGallery from '@/UI/SearchGallery.vue'
</script>
```

---

### ShowcodeCard

**Lokasi:** `resources/UI/showcodeCard.vue`

**Fungsi:** Card dengan tombol untuk menampilkan/menyembunyikan kode.

**Props:**

- `title` (String) - Judul card
- `code` (Object) - Data kode dengan properti:
  - `script` (String) - Kode script
  - `data` (String) - Data kode
- `customCardClass` (String) - Class CSS tambahan untuk card
- `customCardHeaderClass` (String) - Class CSS tambahan untuk header
- `customCardBodyClass` (String) - Class CSS tambahan untuk body
- `customCardFooterClass` (String) - Class CSS tambahan untuk footer

**Cara Penggunaan:**

```vue
<template>
  <ShowcodeCard title="Button Example" :code="codeData" customCardClass="example-card">
    <button class="btn btn-primary">Click me</button>
  </ShowcodeCard>
</template>

<script setup>
import ShowcodeCard from '@/UI/showcodeCard.vue'

const codeData = {
  script: `<button class="btn btn-primary">Click me</button>`,
  data: `const buttonData = {
  text: 'Click me',
  class: 'btn btn-primary'
}`,
}
</script>
```

---

### ToggleSwitch

**Lokasi:** `resources/UI/toggleSwitch.vue`

**Fungsi:** Toggle switch untuk mengubah status on/off.

**Props:**

- `customClass` (String) - Class CSS tambahan
- `isOn` (Boolean) - Status awal
- `title` (String) - Judul
- `mainClass` (String) - Class CSS utama

**Cara Penggunaan:**

```vue
<template>
  <ToggleSwitch
    customClass="custom-toggle"
    :isOn="true"
    title="Enable notifications"
    mainClass="form-check form-switch"
  />
</template>

<script setup>
import ToggleSwitch from '@/UI/toggleSwitch.vue'
</script>
```

---

## Stores

### Auth Store

**Lokasi:** `resources/stores/auth.js`

**Fungsi:** Store untuk mengelola autentikasi pengguna.

**State:**

- `authenticated` (Boolean) - Status autentikasi
- `loading` (Boolean) - Status loading

**Actions:**

- `authenticateUser({ username, password })` - Autentikasi pengguna
- `logUserOut()` - Logout pengguna
- `generateToken(user)` - Generate token untuk pengguna
- `checkAuthOnStartup()` - Cek status autentikasi saat aplikasi dimulai

**Cara Penggunaan:**

```javascript
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

// Login
const result = await authStore.authenticateUser({
  username: 'user@example.com',
  password: 'password',
})

// Logout
authStore.logUserOut()

// Check auth status
authStore.checkAuthOnStartup()
```

---

### Switcher Store

**Lokasi:** `resources/stores/switcher.js`

**Fungsi:** Store untuk mengelola pengaturan tema dan tampilan aplikasi.

**State:**

- `colortheme` (String) - Mode tema (light/dark)
- `direction` (String) - Arah teks (ltr/rtl)
- `navigationStyles` (String) - Gaya navigasi (vertical/horizontal)
- `menuStyles` (String) - Gaya menu (menu-click/menu-hover/icon-click/icon-hover)
- `layoutStyles` (String) - Gaya layout (double-menu/detached/icon-overlay/icontext-menu/closed-menu/default-menu)
- `pageStyles` (String) - Gaya halaman (regular/classic/modern/flat)
- `widthStyles` (String) - Lebar layout (fullwidth/boxed)
- `menuPosition` (String) - Posisi menu (fixed/scrollable)
- `headerPosition` (String) - Posisi header (fixed/scrollable)
- `menuColor` (String) - Warna menu (light/dark/color/gradient/transparent)
- `headerColor` (String) - Warna header (light/dark/color/gradient/transparent)
- `themePrimary` (String) - Warna primer tema
- `themeBackground` (String) - Warna background tema
- `backgroundImage` (String) - Gambar background

**Actions:**

- `colorthemeFn(value)` - Mengubah mode tema
- `directionFn(value)` - Mengubah arah teks
- `navigationStylesFn(value)` - Mengubah gaya navigasi
- `layoutStylesFn(value)` - Mengubah gaya layout
- `menuStylesFn(value)` - Mengubah gaya menu
- `pageStylesFn(value)` - Mengubah gaya halaman
- `widthStylesFn(value)` - Mengubah lebar layout
- `menuPositionFn(value)` - Mengubah posisi menu
- `headerPositionFn(value)` - Mengubah posisi header
- `menuColorFn(value)` - Mengubah warna menu
- `headerColorFn(value)` - Mengubah warna header
- `themePrimaryFn(value)` - Mengubah warna primer tema
- `themeBackgroundFn(val1, val2)` - Mengubah warna background tema
- `backgroundImageFn(value)` - Mengubah gambar background
- `reset()` - Reset semua pengaturan
- `retrieveFromLocalStorage()` - Mengambil pengaturan dari localStorage
- `custompageLocalStorage()` - Mengambil pengaturan kustom dari localStorage
- `custompageReset()` - Reset pengaturan kustom
- `themePrimaryStorage()` - Menyimpan warna primer tema ke localStorage
- `themeBackgroundStorage()` - Menyimpan warna background tema ke localStorage

**Cara Penggunaan:**

```javascript
import { switcherStore } from '@/stores/switcher'

const switcher = switcherStore()

// Change theme
switcher.colorthemeFn('dark')

// Change layout
switcher.layoutStylesFn('double-menu')

// Change primary color
switcher.themePrimaryFn('58, 88, 146')

// Reset all settings
switcher.reset()

// Retrieve from localStorage
switcher.retrieveFromLocalStorage()
```
