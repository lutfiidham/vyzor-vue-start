# Sidebar Always Dark Mode

## Perubahan

Sidebar sekarang akan **selalu berwarna gelap (dark)** terlepas dari theme mode halaman utama (light/dark).

### Behavior:

#### **Sebelum:**
- Light Mode → Sidebar transparent/terang (ikut theme)
- Dark Mode → Sidebar transparent/gelap (ikut theme)

#### **Sesudah:** ✅
- Light Mode → Sidebar dark (tetap gelap)
- Dark Mode → Sidebar dark (tetap gelap)

---

## Implementasi

### File Modified: `resources/stores/switcher.js`

#### 1. **Fungsi `colorthemeFn`** - Theme Switcher

**Light Mode:**
```javascript
if (value == 'light') {
  this.$state.colortheme = 'light'
  this.$state.menuColor = 'dark'  // ← Force sidebar dark
  // ...
  html.setAttribute('data-menu-styles', 'dark')  // ← Always dark
}
```

**Dark Mode:**
```javascript
if (value == 'dark') {
  this.colortheme = 'dark'
  this.$state.menuColor = 'dark'  // ← Force sidebar dark
  // ...
  html.setAttribute('data-menu-styles', 'dark')  // ← Always dark
}
```

#### 2. **Fungsi `retrieveFromLocalStorage`** - Initial Load

```javascript
// Sebelum:
this.menuColor = localStorage.getItem('vyzorMenu')
  ? localStorage.getItem('vyzorMenu')
  : localStorage.getItem('vyzorcolortheme') === 'dark'
    ? 'transparent'
    : this.menuColor

// Sesudah:
this.menuColor = 'dark'  // ← Always dark
this.menuColorFn(this.menuColor)
```

---

## Testing

### Test 1: Light Mode
```
1. Refresh halaman
2. Default mode: Light
3. Check sidebar → Harus berwarna gelap ✅
4. Halaman utama → Berwarna terang ✅
```

### Test 2: Toggle ke Dark Mode
```
1. Klik toggle dark mode (icon moon/sun)
2. Halaman utama → Berubah ke gelap ✅
3. Sidebar → Tetap gelap (tidak berubah) ✅
```

### Test 3: Toggle kembali ke Light Mode
```
1. Klik toggle light mode
2. Halaman utama → Berubah ke terang ✅
3. Sidebar → Tetap gelap (tidak berubah) ✅
```

### Test 4: Reload Page
```
1. Refresh halaman (F5)
2. Theme tersimpan di localStorage
3. Sidebar → Tetap gelap ✅
```

---

## CSS Attribute

Sidebar dark mode diatur melalui HTML attribute:

```html
<html data-menu-styles="dark">
  <!-- Sidebar akan menggunakan style dark -->
</html>
```

### Possible Values:
- `dark` - Sidebar gelap ✅ (default sekarang)
- `light` - Sidebar terang
- `color` - Sidebar dengan warna custom
- `gradient` - Sidebar dengan gradient
- `transparent` - Sidebar transparent (ikut theme)

---

## Customization

Jika ingin mengubah behavior sidebar (misalnya: ikut theme mode):

### Option 1: Sidebar Mengikuti Theme
```javascript
// resources/stores/switcher.js
colorthemeFn(value) {
  if (value == 'light') {
    this.$state.menuColor = 'light'  // Sidebar ikut light
    html.setAttribute('data-menu-styles', 'light')
  }
  if (value == 'dark') {
    this.$state.menuColor = 'dark'  // Sidebar ikut dark
    html.setAttribute('data-menu-styles', 'dark')
  }
}
```

### Option 2: Sidebar Selalu Light
```javascript
colorthemeFn(value) {
  this.$state.menuColor = 'light'  // Always light
  html.setAttribute('data-menu-styles', 'light')
}
```

### Option 3: Sidebar dengan Gradient
```javascript
colorthemeFn(value) {
  this.$state.menuColor = 'gradient'
  html.setAttribute('data-menu-styles', 'gradient')
}
```

---

## CSS Variables

Sidebar dark mode menggunakan CSS variables:

```css
[data-menu-styles="dark"] {
  --sidebar-bg: rgb(15, 23, 42);
  --sidebar-text: rgb(255, 255, 255);
  --sidebar-hover: rgb(30, 41, 59);
  /* ... more variables */
}
```

---

## Notes

- ✅ Perubahan ini memastikan **konsistensi UI** - sidebar selalu gelap
- ✅ **Readability** lebih baik dengan sidebar dark
- ✅ **Modern design** - banyak aplikasi modern menggunakan dark sidebar
- ✅ **User preference** tetap bisa toggle theme untuk content area

---

## Rollback

Jika ingin kembali ke behavior lama (sidebar ikut theme):

1. Buka `resources/stores/switcher.js`
2. Di fungsi `colorthemeFn`, ubah:
   ```javascript
   // Light mode
   html.setAttribute('data-menu-styles', 'transparent')
   
   // Dark mode
   html.setAttribute('data-menu-styles', 'transparent')
   ```
3. Di fungsi `retrieveFromLocalStorage`, ubah:
   ```javascript
   this.menuColor = localStorage.getItem('vyzorMenu')
     ? localStorage.getItem('vyzorMenu')
     : this.menuColor
   ```
4. Run `npm run build`
