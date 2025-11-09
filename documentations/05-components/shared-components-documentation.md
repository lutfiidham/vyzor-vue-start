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

---

## Komponen Aplikasi Tambahan

### SpkKanbanCard

**Lokasi:** `resources/js/shared/@spk/applications/task/spk-kanbancard.vue`

**Fungsi:** Card kanban untuk aplikasi task management dengan drag and drop.

**Props:**

- `card` (Object) - Data card dengan properti:
  - `id` (String|Number) - ID card
  - `title` (String) - Judul task
  - `description` (String) - Deskripsi task
  - `priority` (String) - Prioritas (high/medium/low)
  - `assignee` (String) - Penanggung jawab
  - `dueDate` (String) - Tanggal deadline
  - `tags` (Array) - Array tag/label
  - `color` (String) - Warna card

**Cara Penggunaan:**

```vue
<template>
  <SpkKanbanCard :card="taskData" />
</template>

<script setup>
import SpkKanbanCard from '@/shared/@spk/applications/task/spk-kanbancard.vue'

const taskData = {
  id: 1,
  title: 'Design Dashboard',
  description: 'Create responsive dashboard layout',
  priority: 'high',
  assignee: 'John Doe',
  dueDate: '2024-01-15',
  tags: ['design', 'frontend'],
  color: 'bg-primary',
}
</script>
```

---

## Komponen Dashboard Projects

### SpkProjectDashboard

**Lokasi:** `resources/js/shared/@spk/dashboards/projects/spk-project-dashboard.vue`

**Fungsi:** Card dashboard untuk menampilkan informasi project.

**Props:**

- `project` (Object) - Data project dengan properti:
  - `id` (String|Number) - ID project
  - `name` (String) - Nama project
  - `description` (String) - Deskripsi project
  - `progress` (Number) - Progress percentage (0-100)
  - `status` (String) - Status project
  - `startDate` (String) - Tanggal mulai
  - `endDate` (String) - Tanggal selesai
  - `team` (Array) - Array team members
  - `budget` (String) - Budget project
  - `priority` (String) - Prioritas project

**Cara Penggunaan:**

```vue
<template>
  <SpkProjectDashboard :project="projectData" />
</template>

<script setup>
import SpkProjectDashboard from '@/shared/@spk/dashboards/projects/spk-project-dashboard.vue'

const projectData = {
  id: 1,
  name: 'E-commerce Platform',
  description: 'Develop modern e-commerce platform',
  progress: 75,
  status: 'In Progress',
  startDate: '2024-01-01',
  endDate: '2024-03-31',
  team: ['John', 'Jane', 'Bob'],
  budget: '$50,000',
  priority: 'High',
}
</script>
```

---

## Komponen Dashboard NFT

### SpkNftReusebleCard

**Lokasi:** `resources/js/shared/@spk/dashboards/nft/spk-nft-reusebleCard.vue`

**Fungsi:** Card reusable untuk dashboard NFT dengan informasi koleksi.

**Props:**

- `nft` (Object) - Data NFT dengan properti:
  - `id` (String|Number) - ID NFT
  - `name` (String) - Nama NFT
  - `image` (String) - URL gambar NFT
  - `price` (String) - Harga NFT
  - `owner` (String) - Pemilik NFT
  - `category` (String) - Kategori NFT
  - `rarity` (String) - Kelangkaan NFT
  - `likes` (Number) - Jumlah like
  - `views` (Number) - Jumlah view

**Cara Penggunaan:**

```vue
<template>
  <SpkNftReusebleCard :nft="nftData" />
</template>

<script setup>
import SpkNftReusebleCard from '@/shared/@spk/dashboards/nft/spk-nft-reusebleCard.vue'

const nftData = {
  id: 1,
  name: 'Cosmic Ape #123',
  image: '/images/nft/ape.jpg',
  price: '2.5 ETH',
  owner: '0x1234...5678',
  category: 'Art',
  rarity: 'Legendary',
  likes: 245,
  views: 1250,
}
</script>
```

---

### SpkNftSwiperCard

**Lokasi:** `resources/js/shared/@spk/dashboards/nft/spk-nft-swipercard.vue`

**Fungsi:** Card swiper untuk menampilkan koleksi NFT dalam carousel.

**Props:**

- `nftItems` (Array) - Array data NFT
- `swiperClass` (String) - Class CSS tambahan untuk swiper
- `slideClass` (String) - Class CSS tambahan untuk slide

**Cara Penggunaan:**

```vue
<template>
  <SpkNftSwiperCard :nftItems="nftCollection" swiperClass="nft-swiper" slideClass="nft-slide" />
</template>

<script setup>
import SpkNftSwiperCard from '@/shared/@spk/dashboards/nft/spk-nft-swipercard.vue'

const nftCollection = [
  {
    id: 1,
    name: 'Digital Art #1',
    image: '/images/nft/art1.jpg',
    price: '1.2 ETH',
    owner: 'Artist Name',
  },
  // ... more NFT items
]
</script>
```

---

## Komponen Dashboard CRM

### SpkDealsCard

**Lokasi:** `resources/js/shared/@spk/dashboards/crm/spk-deals-card.vue`

**Fungsi:** Card untuk menampilkan informasi deals dalam CRM.

**Props:**

- `deal` (Object) - Data deal dengan properti:
  - `id` (String|Number) - ID deal
  - `title` (String) - Judul deal
  - `client` (String) - Nama client
  - `value` (String) - Nilai deal
  - `stage` (String) - Tahapan deal
  - `probability` (Number) - Probabilitas closing (0-100)
  - `expectedCloseDate` (String) - Tanggal closing yang diharapkan
  - `assignedTo` (String) - Sales person
  - `status` (String) - Status deal

**Cara Penggunaan:**

```vue
<template>
  <SpkDealsCard :deal="dealData" />
</template>

<script setup>
import SpkDealsCard from '@/shared/@spk/dashboards/crm/spk-deals-card.vue'

const dealData = {
  id: 1,
  title: 'Enterprise Software License',
  client: 'Tech Corp Inc.',
  value: '$150,000',
  stage: 'Negotiation',
  probability: 75,
  expectedCloseDate: '2024-02-15',
  assignedTo: 'John Smith',
  status: 'Active',
}
</script>
```

---

### SpkReusableCrmCard

**Lokasi:** `resources/js/shared/@spk/dashboards/crm/spk-reusable-crmCard.vue`

**Fungsi:** Card reusable untuk dashboard CRM dengan metrik performa.

**Props:**

- `crmData` (Object) - Data CRM dengan properti:
  - `title` (String) - Judul card
  - `value` (String) - Nilai utama
  - `change` (String) - Perubahan nilai
  - `changeType` (String) - Tipe perubahan (increase/decrease)
  - `icon` (String) - Icon class
  - `color` (String) - Warna tema
  - `chart` (Object) - Data chart opsional

**Cara Penggunaan:**

```vue
<template>
  <SpkReusableCrmCard :crmData="crmMetrics" />
</template>

<script setup>
import SpkReusableCrmCard from '@/shared/@spk/dashboards/crm/spk-reusable-crmCard.vue'

const crmMetrics = {
  title: 'Total Leads',
  value: '1,245',
  change: '+12.5%',
  changeType: 'increase',
  icon: 'ti ti-users',
  color: 'primary',
  chart: {
    // Optional chart data
  },
}
</script>
```

---

## Komponen Dashboard Crypto

### SpkReusableCryptoCard

**Lokasi:** `resources/js/shared/@spk/dashboards/crypto/spk-reusable-cryptoCard.vue`

**Fungsi:** Card reusable untuk menampilkan informasi cryptocurrency.

**Props:**

- `crypto` (Object) - Data crypto dengan properti:
  - `symbol` (String) - Symbol cryptocurrency
  - `name` (String) - Nama cryptocurrency
  - `price` (String) - Harga saat ini
  - `change24h` (String) - Perubahan 24 jam
  - `change7d` (String) - Perubahan 7 hari
  - `marketCap` (String) - Market cap
  - `volume24h` (String) - Volume 24 jam
  - `icon` (String) - Icon cryptocurrency
  - `sparkline` (Array) - Data sparkline chart

**Cara Penggunaan:**

```vue
<template>
  <SpkReusableCryptoCard :crypto="bitcoinData" />
</template>

<script setup>
import SpkReusableCryptoCard from '@/shared/@spk/dashboards/crypto/spk-reusable-cryptoCard.vue'

const bitcoinData = {
  symbol: 'BTC',
  name: 'Bitcoin',
  price: '$45,234.56',
  change24h: '+2.45%',
  change7d: '+8.12%',
  marketCap: '$882.3B',
  volume24h: '$28.5B',
  icon: 'ti ti-currency-bitcoin',
  sparkline: [42000, 43500, 44200, 43800, 44500, 45234],
}
</script>
```

---

### SpkReusableExchangeCard

**Lokasi:** `resources/js/shared/@spk/dashboards/crypto/spk-reusable-exchangeCard.vue`

**Fungsi:** Card untuk menampilkan informasi exchange cryptocurrency.

**Props:**

- `exchange` (Object) - Data exchange dengan properti:
  - `name` (String) - Nama exchange
  - `volume24h` (String) - Volume 24 jam
  - `pairs` (Number) - Jumlah trading pairs
  - `coins` (Number) - Jumlah coins
  - `score` (Number) - Trust score
  - `yearEstablished` (Number) - Tahun berdiri
  - `country` (String) - Negara
  - `url` (String) - Website URL

**Cara Penggunaan:**

```vue
<template>
  <SpkReusableExchangeCard :exchange="exchangeData" />
</template>

<script setup>
import SpkReusableExchangeCard from '@/shared/@spk/dashboards/crypto/spk-reusable-exchangeCard.vue'

const exchangeData = {
  name: 'Binance',
  volume24h: '$28.5B',
  pairs: 1854,
  coins: 368,
  score: 10,
  yearEstablished: 2017,
  country: 'Cayman Islands',
  url: 'https://binance.com',
}
</script>
```

---

### SpkReusableMarketCapCard

**Lokasi:** `resources/js/shared/@spk/dashboards/crypto/spk-reusable-marketCapCard.vue`

**Fungsi:** Card untuk menampilkan data market cap cryptocurrency.

**Props:**

- `marketData` (Object) - Data market dengan properti:
  - `totalMarketCap` (String) - Total market cap
  - `marketCapChange` (String) - Perubahan market cap
  - `totalVolume24h` (String) - Total volume 24 jam
  - `btcDominance` (String) - Bitcoin dominance
  - `ethDominance` (String) - Ethereum dominance
  - `activeCryptos` (Number) - Jumlah crypto aktif
  - `marketCapChart` (Array) - Data chart market cap

**Cara Penggunaan:**

```vue
<template>
  <SpkReusableMarketCapCard :marketData="marketStats" />
</template>

<script setup>
import SpkReusableMarketCapCard from '@/shared/@spk/dashboards/crypto/spk-reusable-marketCapCard.vue'

const marketStats = {
  totalMarketCap: '$1.75T',
  marketCapChange: '+2.34%',
  totalVolume24h: '$89.2B',
  btcDominance: '48.5%',
  ethDominance: '18.2%',
  activeCryptos: 9827,
  marketCapChart: [1.72, 1.73, 1.74, 1.71, 1.75],
}
</script>
```

---

### SpkReusableWalletAddressCard

**Lokasi:** `resources/js/shared/@spk/dashboards/crypto/spk-reusable-walletAddressCard.vue`

**Fungsi:** Card untuk menampilkan informasi alamat wallet cryptocurrency.

**Props:**

- `wallet` (Object) - Data wallet dengan properti:
  - `address` (String) - Alamat wallet
  - `balance` (String) - Saldo wallet
  - `value` (String) - Nilai dalam USD
  - `transactions` (Number) - Jumlah transaksi
  - `tokens` (Array) - Array token yang dimiliki
  - `qrCode` (String) - QR code data
  - `network` (String) - Jaringan blockchain

**Cara Penggunaan:**

```vue
<template>
  <SpkReusableWalletAddressCard :wallet="walletData" />
</template>

<script setup>
import SpkReusableWalletAddressCard from '@/shared/@spk/dashboards/crypto/spk-reusable-walletAddressCard.vue'

const walletData = {
  address: '0x1234...5678',
  balance: '2.456 ETH',
  value: '$11,234.56',
  transactions: 156,
  tokens: [
    { symbol: 'ETH', balance: '2.456', value: '$11,234' },
    { symbol: 'USDC', balance: '5,000', value: '$5,000' },
  ],
  qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANS...',
  network: 'Ethereum',
}
</script>
```

---

### SpkReusableWalletCard

**Lokasi:** `resources/js/shared/@spk/dashboards/crypto/spk-reusable-walletCard.vue`

**Fungsi:** Card untuk menampilkan informasi wallet cryptocurrency utama.

**Props:**

- `wallet` (Object) - Data wallet dengan properti:
  - `name` (String) - Nama wallet
  - `type` (String) - Tipe wallet (hardware/software)
  - `totalValue` (String) - Total nilai portfolio
  - `change24h` (String) - Perubahan 24 jam
  - `assets` (Array) - Array aset crypto
  - `lastActivity` (String) - Aktivitas terakhir
  - `securityLevel` (String) - Level keamanan

**Cara Penggunaan:**

```vue
<template>
  <SpkReusableWalletCard :wallet="portfolioData" />
</template>

<script setup>
import SpkReusableWalletCard from '@/shared/@spk/dashboards/crypto/spk-reusable-walletCard.vue'

const portfolioData = {
  name: 'Main Portfolio',
  type: 'Software',
  totalValue: '$45,678.90',
  change24h: '+3.45%',
  assets: [
    { symbol: 'BTC', amount: '0.5', value: '$22,500' },
    { symbol: 'ETH', amount: '8.2', value: '$15,678' },
    { symbol: 'SOL', amount: '150', value: '$7,500' },
  ],
  lastActivity: '2 hours ago',
  securityLevel: 'High',
}
</script>
```

---

## Komponen Dashboard Jobs

### SpkReusebleJobs

**Lokasi:** `resources/js/shared/@spk/dashboards/jobs/dashboard/spk-reuseble-jobs.vue`

**Fungsi:** Card reusable untuk dashboard jobs dengan informasi lowongan kerja.

**Props:**

- `job` (Object) - Data job dengan properti:
  - `id` (String|Number) - ID job
  - `title` (String) - Judul posisi
  - `company` (String) - Nama perusahaan
  - `location` (String) - Lokasi
  - `type` (String) - Tipe pekerjaan (full-time/part-time/remote)
  - `salary` (String) - Range gaji
  - `postedDate` (String) - Tanggal posting
  - `applicants` (Number) - Jumlah pelamar
  - `status` (String) - Status lowongan
  - `skills` (Array) - Array skill yang dibutuhkan

**Cara Penggunaan:**

```vue
<template>
  <SpkReusebleJobs :job="jobData" />
</template>

<script setup>
import SpkReusebleJobs from '@/shared/@spk/dashboards/jobs/dashboard/spk-reuseble-jobs.vue'

const jobData = {
  id: 1,
  title: 'Senior Vue.js Developer',
  company: 'Tech Solutions Inc.',
  location: 'Jakarta, Indonesia',
  type: 'Remote',
  salary: '$15,000 - $25,000',
  postedDate: '2024-01-10',
  applicants: 45,
  status: 'Active',
  skills: ['Vue.js', 'JavaScript', 'Node.js', 'MongoDB'],
}
</script>
```

---

### SpkJobDetailsSwiper

**Lokasi:** `resources/js/shared/@spk/dashboards/jobs/job-details/spk-job-detailsswiper.vue`

**Fungsi:** Swiper untuk menampilkan detail pekerjaan dan informasi terkait.

**Props:**

- `jobDetails` (Object) - Data detail job dengan properti:
  - `job` (Object) - Informasi utama job
  - `company` (Object) - Informasi perusahaan
  - `benefits` (Array) - Array benefit
  - `requirements` (Array) - Array persyaratan
  - `responsibilities` (Array) - Array tanggung jawab
  - `similarJobs` (Array) - Array job similar
- `swiperOptions` (Object) - Opsi konfigurasi swiper

**Cara Penggunaan:**

```vue
<template>
  <SpkJobDetailsSwiper :jobDetails="jobInfo" :swiperOptions="swiperConfig" />
</template>

<script setup>
import SpkJobDetailsSwiper from '@/shared/@spk/dashboards/jobs/job-details/spk-job-detailsswiper.vue'

const jobInfo = {
  job: {
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    description: 'We are looking for experienced developer...',
  },
  company: {
    name: 'Digital Agency',
    size: '50-100 employees',
    industry: 'Technology',
  },
  benefits: ['Health Insurance', 'Flexible Hours', 'Remote Work'],
  requirements: ['5+ years experience', 'Vue.js expertise'],
  responsibilities: ['Develop web applications', 'Code review'],
  similarJobs: [
    { title: 'Frontend Developer', company: 'Tech Corp' },
    { title: 'Backend Developer', company: 'StartupXYZ' },
  ],
}

const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: true,
}
</script>
```

