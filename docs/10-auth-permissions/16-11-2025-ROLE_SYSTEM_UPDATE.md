# Role System Update - Super Admin Implementation

## 📋 Overview

Sistem role telah diperbarui dari 3 roles menjadi 4 roles dengan menambahkan **Super Admin** dan mengubah nama role menjadi proper case (Title Case).

### Perubahan Role

| Sebelum | Sesudah | Keterangan |
|---------|---------|------------|
| `admin` | `Super Admin` | 🆕 Role baru dengan akses penuh sistem |
| - | `Admin` | Role admin dengan akses hampir penuh |
| `manager` | `Manager` | Manager dengan akses terbatas |
| `user` | `User` | User biasa dengan akses dasar |

## 🔄 File yang Diperbarui

### 1. Backend Files

#### `app/Http/Middleware/CheckMenuPermission.php`
**Perubahan:**
```php
// Sebelum
if (auth()->user() && auth()->user()->hasRole('admin')) {

// Sesudah
if (auth()->user() && auth()->user()->hasAnyRole(['Super Admin', 'Admin'])) {
```

**Keterangan:** Middleware sekarang memeriksa Super Admin dan Admin untuk bypass permission check.

### 2. Frontend Composables

#### `resources/js/composables/useAuth.js`
**Perubahan:**
```javascript
// Ditambahkan computed properties baru
const isSuperAdmin = computed(() => hasRole('Super Admin'))
const isAdmin = computed(() => hasRole('Admin'))
const isAdminLevel = computed(() => hasAnyRole(['Super Admin', 'Admin']))
const isManager = computed(() => hasRole('Manager'))
const isUser = computed(() => hasRole('User'))
```

**Export:**
```javascript
return {
  user,
  isAuthenticated,
  hasRole,
  hasAnyRole,
  hasAllRoles,
  isSuperAdmin,      // 🆕 NEW
  isAdmin,           // ✅ Updated
  isAdminLevel,      // 🆕 NEW - Helper untuk cek admin-level access
  isManager,         // ✅ Updated
  isUser,            // ✅ Updated
}
```

### 3. Frontend Components

#### `resources/js/components/sidebar/sidebar.vue`
**Perubahan:**
```javascript
// Sebelum - memeriksa 'admin'
const isAdmin = computed(() => {
  return userRoles.value.some((role) =>
    typeof role === 'string' ? role.toLowerCase() === 'admin' : ...
  )
})

// Sesudah - memeriksa 'Super Admin' atau 'Admin'
const isAdminLevel = computed(() => {
  return userRoles.value.some((role) => {
    if (typeof role === 'string') {
      const roleLower = role.toLowerCase()
      return roleLower === 'super admin' || roleLower === 'admin'
    }
    ...
  })
})
```

**Keterangan:** Demo menu sekarang hanya ditampilkan untuk Super Admin dan Admin.

### 4. Frontend Pages

#### `resources/js/Pages/Dashboard.vue`
**Import:**
```javascript
const { user, isAdminLevel, isSuperAdmin, isAdmin } = useAuth()
```

#### `resources/js/Pages/Admin/Users/Create.vue`
**Roles Options:**
```javascript
const roles = [
  { value: 'Super Admin', label: 'Super Admin' },  // 🆕 NEW
  { value: 'Admin', label: 'Admin' },               // ✅ Updated
  { value: 'Manager', label: 'Manager' },           // ✅ Updated
  { value: 'User', label: 'User' }                  // ✅ Updated
]

// Default role
const form = useForm({
  ...
  role: 'User',  // Changed from 'user' to 'User'
})
```

#### `resources/js/Pages/Admin/Users/Edit.vue`
**Roles Options:** (sama dengan Create.vue)
```javascript
const roles = [
  { value: 'Super Admin', label: 'Super Admin' },
  { value: 'Admin', label: 'Admin' },
  { value: 'Manager', label: 'Manager' },
  { value: 'User', label: 'User' }
]
```

#### `resources/js/Pages/Admin/Users/Index.vue`
**Filter Dropdown:**
```html
<select class="form-select" v-model="filters.role">
  <option value="">All Roles</option>
  <option value="Super Admin">Super Admin</option>
  <option value="Admin">Admin</option>
  <option value="Manager">Manager</option>
  <option value="User">User</option>
</select>
```

**Modal Form:**
```html
<select class="form-select" v-model="form.role">
  <option value="User">User</option>
  <option value="Manager">Manager</option>
  <option value="Admin">Admin</option>
  <option value="Super Admin">Super Admin</option>
</select>
```

**Default Data:**
```javascript
data: [
  { id: 1, name: 'Super Admin', email: 'superadmin@vyzor.test', role: 'Super Admin', ... },
  { id: 2, name: 'Admin User', email: 'admin@vyzor.test', role: 'Admin', ... },
  { id: 3, name: 'Manager User', email: 'manager@vyzor.test', role: 'Manager', ... },
  { id: 4, name: 'Regular User', email: 'user@vyzor.test', role: 'User', ... }
]
```

#### `resources/js/Pages/Admin/Users/Show.vue`
**Badge Color Function:**
```javascript
const getRoleBadgeClass = (role) => {
  const roleLower = role?.toLowerCase()
  switch (roleLower) {
    case 'super admin':
      return 'bg-purple'      // 🆕 NEW color for Super Admin
    case 'admin':
      return 'bg-danger'
    case 'manager':
      return 'bg-primary'
    case 'user':
      return 'bg-info'
    default:
      return 'bg-secondary'
  }
}
```

#### `resources/js/Pages/Admin/Roles/Index.vue`
**Default Roles Data:**
```javascript
default: () => [
  {
    id: 1,
    name: 'Super Admin',
    description: 'Super Administrator with full system access',
    ...
  },
  {
    id: 2,
    name: 'Admin',
    description: 'Administrator with full access',
    ...
  },
  {
    id: 3,
    name: 'Manager',
    description: 'Manager with limited admin access',
    ...
  },
  {
    id: 4,
    name: 'User',
    description: 'Regular user with basic access',
    ...
  },
]
```

#### `resources/js/Pages/Profile/Show.vue`
**Default User Data:**
```javascript
default: () => ({
  ...
  role: 'Admin',  // Changed from 'admin'
  ...
})
```

## 🎨 Badge Colors untuk Roles

| Role | Badge Class | Color |
|------|-------------|-------|
| Super Admin | `bg-purple` | Purple (sistem critical) |
| Admin | `bg-danger` | Red (high privilege) |
| Manager | `bg-primary` | Blue (medium privilege) |
| User | `bg-info` | Cyan (basic access) |

## 🔐 Permission Matrix

### Super Admin
- ✅ **ALL** permissions (37 permissions)
- ✅ System maintenance, backup, restore
- ✅ Bypass semua permission checks
- ✅ Akses ke demo menu (jika enabled)

### Admin
- ✅ Users: view, create, edit, delete, export
- ✅ Roles: view, create, edit, delete
- ✅ Permissions: view, assign
- ✅ Menus: view, create, edit, delete
- ✅ Settings: view, edit
- ✅ Activity Logs: view, export
- ✅ Files, Notifications, API Keys management
- ✅ Dashboard & Reports access
- ✅ Bypass menu permission checks
- ✅ Akses ke demo menu (jika enabled)
- ❌ System operations (maintenance, backup, restore)

### Manager
- ✅ Users: view, create, edit
- ✅ Roles: view only
- ✅ Dashboard access
- ✅ Files: view, upload, download
- ✅ Notifications: view, create
- ✅ Reports: view, export
- ✅ Activity Logs: view

### User
- ✅ Dashboard: view
- ✅ Files: view, upload, download
- ✅ Notifications: view

## 📝 Migration Guide

### Untuk Developer

1. **Update Seeder:**
   ```bash
   php artisan migrate:fresh --seed
   ```

2. **Build Frontend:**
   ```bash
   npm run build
   # atau untuk development
   npm run dev
   ```

3. **Clear Cache:**
   ```bash
   php artisan config:clear
   php artisan cache:clear
   php artisan permission:cache-reset
   ```

### Untuk Existing Data

Jika Anda sudah memiliki data, jalankan script untuk update role names:

```php
// UpdateRoleNames.php (buat seeder atau command baru)
use Spatie\Permission\Models\Role;

// Update role names
Role::where('name', 'admin')->update(['name' => 'Admin']);
Role::where('name', 'manager')->update(['name' => 'Manager']);
Role::where('name', 'user')->update(['name' => 'User']);

// Create Super Admin role
$superAdmin = Role::firstOrCreate(['name' => 'Super Admin']);
$superAdmin->givePermissionTo(Permission::all());
```

## 🧪 Testing

### Test Cases

1. **Login dengan berbagai roles:**
   - ✅ Super Admin: superadmin@vyzor.test / password
   - ✅ Admin: admin@vyzor.test / password
   - ✅ Manager: manager@vyzor.test / password
   - ✅ User: user@vyzor.test / password

2. **Verifikasi akses:**
   - Super Admin dan Admin dapat akses semua menu admin
   - Manager dapat akses terbatas
   - User hanya dapat akses dashboard dan profile
   - Demo menu hanya muncul untuk Super Admin dan Admin

3. **Verifikasi form:**
   - Create/Edit User menampilkan 4 roles
   - Filter di User Index menampilkan 4 roles
   - Badge colors sesuai dengan role

## 🔍 Cara Menggunakan di Code

### Backend (Laravel)

```php
// Check single role
if ($user->hasRole('Super Admin')) {
    // Super Admin only
}

// Check multiple roles
if ($user->hasAnyRole(['Super Admin', 'Admin'])) {
    // Admin-level access
}

// Check permission
if ($user->hasPermission('users.delete')) {
    // Has permission
}
```

### Frontend (Vue)

```vue
<script setup>
import { useAuth } from '@/composables/useAuth'

const { isSuperAdmin, isAdmin, isAdminLevel, isManager, isUser, hasRole } = useAuth()
</script>

<template>
  <!-- Super Admin only -->
  <div v-if="isSuperAdmin">
    Super Admin content
  </div>

  <!-- Admin-level (Super Admin or Admin) -->
  <div v-if="isAdminLevel">
    Admin-level content
  </div>

  <!-- Specific role -->
  <div v-if="hasRole('Manager')">
    Manager content
  </div>

  <!-- Multiple roles -->
  <div v-if="hasAnyRole(['Super Admin', 'Admin', 'Manager'])">
    Admin & Manager content
  </div>
</template>
```

## 📚 References

- Database Seeder: `database/seeders/RolesAndPermissionsSeeder.php`
- User Seeder: `database/seeders/AdminUserSeeder.php`
- Menu Seeder: `database/seeders/MenuSeeder.php`
- Auth Composable: `resources/js/composables/useAuth.js`
- Middleware: `app/Http/Middleware/CheckMenuPermission.php`

## ✅ Checklist

- [x] Update database seeders
- [x] Update middleware
- [x] Update auth composable
- [x] Update sidebar component
- [x] Update dashboard page
- [x] Update user management pages
- [x] Update role management pages
- [x] Update profile page
- [x] Build frontend assets
- [x] Test all role access levels
- [x] Documentation

## 🎯 Status

**Status:** ✅ Completed and Tested
**Version:** 1.0.0
**Date:** 2025-11-16

---

**Note:** Semua perubahan sudah di-build dan siap untuk production. Pastikan untuk menjalankan `php artisan migrate:fresh --seed` untuk fresh installation atau gunakan migration script untuk existing data.
