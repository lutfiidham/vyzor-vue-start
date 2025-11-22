# DOKUMENTASI SISTEM MENU MANAGEMENT

## 1. OVERVIEW

Sistem Menu Management adalah fitur yang memungkinkan pengelolaan menu aplikasi secara dinamis melalui database, menggantikan hardcode menu di file `resources/js/shared/data/sidebar/nav.js`. Sistem ini terintegrasi dengan Role & Permissions yang sudah ada, sehingga akses menu dapat dikontrol berdasarkan role pengguna.

**Stack Teknologi:**

- Backend: Laravel 11
- Frontend: Vue 3 + Inertia.js
- State Management: Pinia (recommended) atau Vuex
- Data Flow: Server-side rendering via Inertia.js (no REST API)

---

## 2. TUJUAN

1. **Fleksibilitas**: Menu dapat dikelola tanpa harus mengubah kode
2. **Role-Based Access Control (RBAC)**: Setiap role dapat memiliki akses menu yang berbeda
3. **Hierarchical Structure**: Mendukung menu bertingkat (parent-child)
4. **Dynamic Icons**: Mendukung SVG icon yang dapat disimpan di database
5. **Ordering**: Menu dapat diurutkan sesuai kebutuhan
6. **Multi-language Support**: Siap untuk implementasi multi-bahasa di masa depan

---

## 3. STRUKTUR DATABASE

### 3.1 Tabel: `menus`

Menyimpan data menu utama

**Kolom:**

- `id` (bigint, PK, auto increment)
- `parent_id` (bigint, nullable, FK to menus.id) - untuk submenu
- `title` (varchar 100) - judul menu
- `icon` (text, nullable) - SVG icon atau class icon
- `path` (varchar 255, nullable) - route/URL tujuan
- `type` (enum: 'menutitle', 'link', 'sub') - tipe menu
- `badge_text` (varchar 50, nullable) - badge HTML (opsional)
- `badge_color` (varchar 50, nullable) - warna badge
- `order` (integer, default 0) - urutan tampilan
- `is_active` (boolean, default true) - status aktif/nonaktif
- `target` (enum: '\_self', '\_blank', nullable) - target link
- `description` (text, nullable) - deskripsi menu
- `created_at` (timestamp)
- `updated_at` (timestamp)

**Index:**

- `parent_id` (untuk query hierarchy)
- `order` (untuk sorting)
- `is_active` (untuk filtering)

**Relasi:**

- Self-referencing untuk parent-child relationship

---

### 3.2 Tabel: `menu_role` (Pivot Table)

Menghubungkan menu dengan role

**Kolom:**

- `id` (bigint, PK, auto increment)
- `menu_id` (bigint, FK to menus.id)
- `role_id` (bigint, FK to roles.id)
- `created_at` (timestamp)

**Index:**

- Composite unique index pada (`menu_id`, `role_id`)

---

## 4. ALUR SISTEM

### 4.1 Menu Management (CRUD)

#### A. Create Menu

1. Admin mengakses halaman "Menu Management"
2. Klik tombol "Add Menu"
3. Form input muncul dengan field:
   - Title (required)
   - Parent Menu (dropdown, nullable untuk top-level menu)
   - Icon (textarea untuk SVG atau input untuk icon class)
   - Path/URL (untuk type 'link')
   - Type (menutitle/link/sub)
   - Badge Text & Color (optional)
   - Order (untuk sorting)
   - Status (Active/Inactive)
   - Description
4. Pilih Role yang bisa mengakses menu ini (multiple select)
5. Submit → Validasi → Simpan ke database
6. Menu baru tersedia untuk role yang dipilih

#### B. Read/List Menu

1. Tampilkan menu dalam bentuk tree/hierarchy
2. Indikasi visual untuk parent-child relationship
3. Filter berdasarkan:
   - Status (Active/Inactive)
   - Type
   - Role
4. Search by title
5. Action buttons: Edit, Delete, Reorder

#### C. Update Menu

1. Klik Edit pada menu tertentu
2. Form pre-filled dengan data existing
3. Dapat mengubah semua field termasuk role assignment
4. Update parent → otomatis mengubah hierarchy
5. Submit → Validasi → Update database
6. Cache menu di-refresh

#### D. Delete Menu

1. Klik Delete pada menu tertentu
2. Konfirmasi:
   - Jika ada submenu → warning "Menu ini memiliki X submenu"
   - Opsi: Delete all (cascade) atau Cancel
3. Jika confirmed → Soft delete atau Hard delete
4. Menu dihapus dari semua role yang memiliki akses
5. Cache menu di-refresh

---

### 4.2 Menu-Role Assignment

#### A. Assign Menu ke Role

**Via Menu Management:**

1. Saat create/edit menu → pilih multiple roles
2. System menyimpan relasi ke tabel `menu_role`

**Via Role Management:**

1. Pada halaman Edit Role → tab "Menu Access"
2. Tampilkan tree/checklist semua menu
3. Check/uncheck menu yang bisa diakses role ini
4. Submit → Update relasi di `menu_role`

#### B. Bulk Assignment

1. Admin dapat assign multiple menu ke single role
2. Admin dapat assign single menu ke multiple roles
3. Interface drag-and-drop atau checkbox bulk action

---

### 4.3 Menu Rendering (Frontend dengan Inertia.js)

#### A. Load Menu untuk User via Inertia Shared Data

1. User login → System detect user's roles
2. **Inertia Middleware** (`HandleInertiaRequests.php`) menambahkan menu ke shared data
3. Query logic di middleware:
   ```php
   // Di method share()
   - Get authenticated user's roles
   - Query menus via relation (user->roles->menus)
   - Sort by order ASC
   - Build hierarchy (parent-child structure)
   - Return array sesuai struktur MENUITEMS
   ```
4. Menu otomatis tersedia di semua komponen Vue via `$page.props.menus`

#### B. Inertia Shared Props Format

```php
// app/Http/Middleware/HandleInertiaRequests.php
public function share(Request $request): array
{
    return array_merge(parent::share($request), [
        'auth' => [
            'user' => $request->user(),
        ],
        'menus' => $request->user()
            ? $this->getUserMenus($request->user())
            : [],
        // ... props lainnya
    ]);
}
```

```javascript
// Format data yang diterima di Vue component
{
  menus: [
    {
      id: 1,
      menutitle: 'MAIN',
    },
    {
      id: 2,
      title: 'Dashboard',
      icon: '<svg>...</svg>',
      path: '/dashboard',
      type: 'link',
      active: false,
      selected: false,
      children: [],
    },
    {
      id: 3,
      title: 'Admin',
      icon: '<svg>...</svg>',
      type: 'sub',
      active: false,
      children: [
        {
          id: 4,
          title: 'User Management',
          icon: '<svg>...</svg>',
          path: '/admin/users',
          type: 'link',
        },
      ],
    },
  ]
}
```

#### C. Frontend Implementation

1. Menu otomatis tersedia di semua page via `$page.props.menus`
2. Sidebar component: `import { usePage } from '@inertiajs/vue3'`
3. Access menu: `const menus = computed(() => usePage().props.menus)`
4. Optional: Store menu di Pinia untuk state management tambahan
5. Menu di-render secara rekursif untuk handle nested levels
6. Active state management berdasarkan current route (`$page.url`)

---

### 4.4 Caching Strategy

#### A. Server-Side Cache (Laravel Cache)

1. Cache menu per role di Redis/File cache
2. Cache key: `menu_role_{role_id}`
3. TTL: 1 hour atau until manual refresh
4. Implementation di `getUserMenus()` method:
   ```php
   Cache::remember("menu_role_{$roleId}", 3600, function() {
       // Query menu dari database
   });
   ```
5. Auto clear cache on:
   - Menu created/updated/deleted (Observer)
   - Role assignment changed (Event Listener)

#### B. Client-Side (Inertia.js Automatic)

1. Inertia.js otomatis handle caching via shared data
2. Menu di-refresh otomatis saat page navigation (soft reload)
3. Force refresh dengan `router.reload()` jika perlu
4. No need localStorage karena data selalu fresh dari server

---

## 5. PERMISSION & AUTHORIZATION

### 5.1 Menu Management Permissions

Buat permissions khusus untuk menu management:

- `menu.view` - Melihat daftar menu
- `menu.create` - Membuat menu baru
- `menu.edit` - Mengubah menu
- `menu.delete` - Menghapus menu
- `menu.assign` - Assign menu ke role

### 5.2 Access Control Logic

1. User hanya bisa melihat menu sesuai role mereka
2. Admin dengan permission `menu.*` bisa manage semua menu
3. Middleware check di route untuk validasi akses
4. Frontend juga validate untuk hide/show menu items

---

## 6. MIGRATION & SEEDING

### 6.1 Migration Existing Menu

1. Buat migration untuk tabel `menus` dan `menu_role`
2. Buat seeder untuk migrate data dari `nav.js`:
   - Parse existing MENUITEMS array
   - Insert ke tabel `menus` dengan maintain hierarchy
   - Assign semua menu ke Super Admin role by default
3. Backup file `nav.js` untuk reference

### 6.2 Default Menu Setup

1. Seed menu dasar (Dashboard, Profile, dll)
2. Assign ke role default (Admin, User)
3. Demo pages → optional, bisa dinonaktifkan

---

## 7. UI/UX DESIGN

### 7.1 Menu Management Page

**Layout:**

- Header: Title + Button "Add Menu"
- Sidebar: Filter & Search
- Main Content: Tree view dengan drag-drop untuk reorder
- Context Menu: Edit, Delete, Add Child

**Features:**

- Drag-and-drop untuk reorder dan change parent
- Inline editing untuk quick update
- Preview menu sebelum save
- Icon picker untuk select icon
- Color picker untuk badge

### 7.2 Role Assignment Interface

**Via Menu Management:**

- Multi-select dropdown dengan search
- Chip/tag display untuk selected roles

**Via Role Management:**

- Nested checkbox tree untuk menu hierarchy
- "Select All" dan "Deselect All" buttons
- Visual indikator: parent checked → all children checked

---

## 8. INERTIA ROUTES & CONTROLLERS

### 8.1 Menu Management Routes (web.php)

```php
Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    // Menu Management
    Route::resource('menus', MenuController::class);
    Route::post('menus/reorder', [MenuController::class, 'reorder'])->name('menus.reorder');
    Route::post('menus/{menu}/toggle', [MenuController::class, 'toggle'])->name('menus.toggle');

    // Menu-Role Assignment (via Menu)
    Route::get('menus/{menu}/roles', [MenuController::class, 'roles'])->name('menus.roles');
    Route::post('menus/{menu}/roles', [MenuController::class, 'assignRoles'])->name('menus.assign-roles');

    // Menu-Role Assignment (via Role)
    Route::get('roles/{role}/menus', [RoleController::class, 'menus'])->name('roles.menus');
    Route::post('roles/{role}/menus', [RoleController::class, 'assignMenus'])->name('roles.assign-menus');
});
```

### 8.2 Controller Methods & Inertia Responses

**MenuController.php:**

- `index()` → `return Inertia::render('Admin/Menus/Index', ['menus' => $menus])`
- `create()` → `return Inertia::render('Admin/Menus/Create', ['roles' => $roles])`
- `store(Request $request)` → `redirect()->route('admin.menus.index')`
- `edit(Menu $menu)` → `return Inertia::render('Admin/Menus/Edit', ['menu' => $menu])`
- `update(Request $request, Menu $menu)` → `redirect()->route('admin.menus.index')`
- `destroy(Menu $menu)` → `redirect()->route('admin.menus.index')`
- `reorder(Request $request)` → `redirect()->back()`
- `toggle(Menu $menu)` → `redirect()->back()`

**Data Flow:**

1. User action di Vue component
2. Inertia form submission: `router.post()` / `router.put()` / `router.delete()`
3. Laravel controller process data
4. Controller return Inertia response atau redirect
5. Inertia otomatis update page props tanpa full reload

---

## 9. VALIDASI & BUSINESS RULES

### 9.1 Validasi Create/Update Menu

1. **Title**: Required, max 100 chars, unique per level
2. **Parent ID**: Must exist if provided, prevent circular reference
3. **Path**:
   - Required jika type = 'link'
   - Harus unique jika provided
   - Validate format URL/route
4. **Type**: Required, must be in enum values
5. **Order**: Integer, default 0
6. **Icon**: Optional, validate if SVG format valid
7. **Role Assignment**: Minimal 1 role harus dipilih

### 9.2 Business Rules

1. Menu type 'menutitle' tidak boleh punya parent
2. Menu type 'sub' harus punya minimal 1 child (validate on activate)
3. Menu type 'link' harus punya path
4. Tidak boleh delete menu jika sedang diakses (active users)
5. Parent menu otomatis hidden jika semua children inactive
6. Menu dengan path harus memiliki corresponding route di aplikasi

---

## 10. SECURITY CONSIDERATIONS

### 10.1 Authorization

1. Semua endpoint menu management butuh authentication
2. Check permission sebelum CRUD operation
3. Validate user's role sebelum assign menu to role
4. Audit log untuk semua perubahan menu

### 10.2 Input Sanitization

1. Sanitize SVG icon untuk prevent XSS
2. Validate URL path untuk prevent injection
3. Escape HTML di badge text
4. Limit icon size (max 10KB)

### 10.3 Rate Limiting

1. Route throttling di `web.php`: `throttle:60,1` untuk menu management
2. User menu via shared data: No rate limit (cached di server)

---

## 11. TESTING STRATEGY

### 11.1 Unit Testing

1. Menu Model: Relations, scopes, accessors
2. Menu Service: CRUD operations, hierarchy building
3. Menu Policy: Authorization checks
4. Menu Validation: All validation rules

### 11.2 Feature Testing

1. Menu CRUD operations via Inertia routes
2. Role assignment/removal
3. Menu rendering berdasarkan role di shared props
4. Caching mechanism
5. Menu reordering
6. Inertia response assertions

### 11.3 Browser Testing

1. Menu display di berbagai role
2. Drag-drop reordering
3. Nested menu expand/collapse
4. Active state pada current route
5. Responsive design

---

## 12. DEPLOYMENT & ROLLBACK

### 12.1 Deployment Steps

1. **Phase 1 - Database Setup:**
   - Run migrations untuk create tables
   - Run seeder untuk migrate existing menus
   - Verify data integrity

2. **Phase 2 - Backend Implementation:**
   - Deploy models, controllers, services
   - Deploy API endpoints
   - Setup cache configuration

3. **Phase 3 - Frontend Update:**
   - Update HandleInertiaRequests middleware untuk share menu
   - Update sidebar component untuk consume shared props
   - Implement Pinia store (optional)
   - Deploy menu management UI pages

4. **Phase 4 - Testing:**
   - Test semua role dapat melihat menu sesuai haknya
   - Test CRUD operations di menu management
   - Performance testing

5. **Phase 5 - Production:**
   - Feature flag untuk enable/disable dynamic menu
   - Monitor error logs
   - Monitor performance metrics

### 12.2 Rollback Plan

1. **Immediate Rollback:**
   - Set feature flag OFF
   - System fallback ke hardcode menu (`nav.js`)
2. **Data Rollback:**
   - Restore database backup jika ada corruption
   - Re-run seeder untuk reset menu data

3. **Complete Rollback:**
   - Revert frontend changes
   - Revert backend changes
   - Drop menu tables (jika perlu full rollback)

---

## 13. MAINTENANCE & MONITORING

### 13.1 Performance Monitoring

1. Track Inertia response time untuk menu pages
2. Monitor cache hit ratio (Laravel Cache)
3. Database query performance (Laravel Telescope)
4. Frontend render time
5. Shared data payload size

### 13.2 Error Monitoring

1. Log semua error di menu management operations
2. Alert jika ada error rate spike
3. Track failed menu loads untuk users

### 13.3 Regular Maintenance

1. Weekly: Review menu usage statistics
2. Monthly: Cleanup inactive menus
3. Quarterly: Audit role-menu assignments
4. Yearly: Review dan optimize database indices

---

## 14. FUTURE ENHANCEMENTS

### 14.1 Phase 2 Features

1. **Multi-language Support**: Tabel `menu_translations`
2. **Menu Templates**: Pre-defined menu sets untuk different industries
3. **Menu Analytics**: Track which menu paling banyak diakses
4. **Conditional Display**: Show/hide menu based on subscription plan
5. **Menu Permissions Inheritance**: Child inherit parent permissions

### 14.2 Phase 3 Features

1. **Menu Versioning**: Track history perubahan menu
2. **A/B Testing**: Test different menu structures
3. **Personalization**: User dapat customize menu order (per-user)
4. **External Links**: Menu bisa link ke external URLs
5. **Menu Shortcuts**: Quick access shortcuts di header

---

## 15. GLOSSARY

- **Menu**: Item navigasi di sidebar aplikasi
- **Menu Title**: Header/separator di menu tanpa link
- **Parent Menu**: Menu yang memiliki submenu
- **Child/Submenu**: Menu yang berada di dalam parent menu
- **Role**: Group of permissions yang assigned ke users
- **Permission**: Hak akses untuk melakukan action tertentu
- **RBAC**: Role-Based Access Control
- **Hierarchy**: Struktur parent-child menu
- **Cascade**: Action yang berlaku ke semua children
- **Pivot Table**: Tabel penghubung many-to-many relationship

---

## 16. REFERENCES

- **Current Menu File**: `resources/js/shared/data/sidebar/nav.js`
- **Role Management**: `app/Http/Controllers/Admin/RoleController.php`
- **Permission System**: Menggunakan Spatie Laravel Permission
- **Backend Framework**: Laravel 12
- **Frontend Framework**: Vue 3 + Vite
- **SSR Framework**: Inertia.js
- **Inertia Middleware**: `app/Http/Middleware/HandleInertiaRequests.php`

---

## CONTACT & SUPPORT

Untuk pertanyaan atau klarifikasi mengenai dokumentasi ini:

- Buat issue di repository
- Contact development team
- Refer to technical lead

---

**Document Version**: 1.0  
**Created**: 2025-11-12  
**Last Updated**: 2025-11-12  
**Status**: Draft - Ready for Review
