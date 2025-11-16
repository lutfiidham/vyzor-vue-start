# Quick Reference - Role System

## 🎭 Available Roles

```
Super Admin  →  Full system access + critical operations
Admin        →  Almost full access (no system ops)
Manager      →  User management & reports
User         →  Basic access only
```

## 🔑 Default Login Credentials

```
superadmin@vyzor.test  /  password  →  Super Admin
admin@vyzor.test       /  password  →  Admin
manager@vyzor.test     /  password  →  Manager
user@vyzor.test        /  password  →  User
```

## 💻 Backend Usage (PHP)

```php
// Check single role
if (auth()->user()->hasRole('Super Admin')) {
    // Super Admin only
}

// Check multiple roles (Admin-level)
if (auth()->user()->hasAnyRole(['Super Admin', 'Admin'])) {
    // Admin-level access
}

// Check permission
if (auth()->user()->hasPermission('users.delete')) {
    // Has permission
}

// In Blade
@role('Super Admin')
    Super Admin content
@endrole

@hasanyrole('Super Admin|Admin')
    Admin-level content
@endhasanyrole
```

## 🎨 Frontend Usage (Vue)

### In Component Script

```vue
<script setup>
import { useAuth } from '@/composables/useAuth'

const { 
  isSuperAdmin,   // true if Super Admin
  isAdmin,        // true if Admin
  isAdminLevel,   // true if Super Admin OR Admin (helper)
  isManager,      // true if Manager
  isUser,         // true if User
  hasRole,        // function to check specific role
  hasAnyRole      // function to check multiple roles
} = useAuth()

// Use in logic
if (isSuperAdmin.value) {
  console.log('Super Admin access')
}

if (isAdminLevel.value) {
  console.log('Admin-level access')
}

if (hasRole('Manager')) {
  console.log('Manager access')
}

if (hasAnyRole(['Admin', 'Manager'])) {
  console.log('Admin or Manager')
}
</script>
```

### In Template

```vue
<template>
  <!-- Super Admin only -->
  <div v-if="isSuperAdmin">
    Super Admin content
  </div>

  <!-- Admin-level (Super Admin OR Admin) -->
  <div v-if="isAdminLevel">
    Admin-level content
  </div>

  <!-- Specific role -->
  <div v-if="hasRole('Manager')">
    Manager only content
  </div>

  <!-- Multiple roles -->
  <div v-if="hasAnyRole(['Super Admin', 'Admin', 'Manager'])">
    Admin, Manager content
  </div>

  <!-- Show for all except User -->
  <div v-if="!isUser">
    Not for regular users
  </div>
</template>
```

## 🎨 Badge Colors

```html
<!-- Super Admin -->
<span class="badge bg-purple">Super Admin</span>

<!-- Admin -->
<span class="badge bg-danger">Admin</span>

<!-- Manager -->
<span class="badge bg-primary">Manager</span>

<!-- User -->
<span class="badge bg-info">User</span>
```

## 📊 Permissions by Role

### Super Admin (37/37 - 100%)
```
ALL permissions including:
✅ system.maintenance
✅ system.backup  
✅ system.restore
```

### Admin (34/37 - 92%)
```
All except:
❌ system.maintenance
❌ system.backup
❌ system.restore
```

### Manager (11/37 - 30%)
```
✅ users.view, users.create, users.edit
✅ roles.view
✅ files.view, files.upload, files.download
✅ notifications.view, notifications.create
✅ reports.view, reports.export
✅ activity-logs.view
✅ dashboard.view
```

### User (4/37 - 11%)
```
✅ dashboard.view
✅ files.view, files.upload, files.download
✅ notifications.view
```

## 🔄 Migration from Old System

If you have existing data with old role names:

```php
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

// Update existing role names
DB::transaction(function() {
    // Rename existing roles
    Role::where('name', 'admin')->update(['name' => 'Admin']);
    Role::where('name', 'manager')->update(['name' => 'Manager']);
    Role::where('name', 'user')->update(['name' => 'User']);
    
    // Create Super Admin
    $superAdmin = Role::firstOrCreate(['name' => 'Super Admin']);
    $superAdmin->givePermissionTo(Permission::all());
    
    // Clear permission cache
    app()->make(\Spatie\Permission\PermissionRegistrar::class)->forgetCachedPermissions();
});
```

## 📝 Form Select Options

```vue
<script setup>
const roles = [
  { value: 'Super Admin', label: 'Super Admin' },
  { value: 'Admin', label: 'Admin' },
  { value: 'Manager', label: 'Manager' },
  { value: 'User', label: 'User' }
]
</script>

<template>
  <select v-model="form.role">
    <option v-for="role in roles" :key="role.value" :value="role.value">
      {{ role.label }}
    </option>
  </select>
</template>
```

## 🚀 Quick Commands

```bash
# Fresh install with seeders
php artisan migrate:fresh --seed

# Run specific seeder
php artisan db:seed --class=RolesAndPermissionsSeeder
php artisan db:seed --class=AdminUserSeeder

# Clear caches
php artisan config:clear
php artisan cache:clear
php artisan permission:cache-reset

# Build frontend
npm run build

# Dev mode
npm run dev
```

## 📦 Files Modified

```
Backend:
- app/Http/Middleware/CheckMenuPermission.php

Frontend:
- resources/js/composables/useAuth.js
- resources/js/components/sidebar/sidebar.vue
- resources/js/Pages/Dashboard.vue
- resources/js/Pages/Admin/Users/Create.vue
- resources/js/Pages/Admin/Users/Edit.vue
- resources/js/Pages/Admin/Users/Index.vue
- resources/js/Pages/Admin/Users/Show.vue
- resources/js/Pages/Admin/Roles/Index.vue
- resources/js/Pages/Profile/Show.vue

Database:
- database/seeders/RolesAndPermissionsSeeder.php
- database/seeders/AdminUserSeeder.php
- database/seeders/MenuSeeder.php
```

## 📚 Documentation

- `ROLE_SYSTEM_UPDATE.md` - Detailed update documentation
- `SEEDERS_UPDATE_SUMMARY.md` - Seeder changes
- `database/seeders/README.md` - Seeder guide
- `QUICK_REFERENCE_ROLES.md` - This file

---

**Last Updated:** 2025-11-16  
**Version:** 1.0.0  
**Status:** ✅ Production Ready
