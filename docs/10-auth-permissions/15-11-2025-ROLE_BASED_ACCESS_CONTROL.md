# Role-Based Access Control (RBAC) in Vue Components

## ✅ Overview

Aplikasi ini menggunakan **Spatie Laravel Permission** untuk role-based access control. Vue components dapat dengan mudah mengecek role user menggunakan composable `useAuth`.

## 🎯 Implementation

### Backend Setup

**HandleInertiaRequests.php** - Share user data dengan roles:

```php
'auth' => [
    'user' => $request->user() ? [
        'id' => $request->user()->id,
        'name' => $request->user()->name,
        'email' => $request->user()->email,
        'roles' => $request->user()->getRoleNames(), // Array of role names
    ] : null,
],
```

**Data yang di-share:**
```javascript
$page.props.auth.user = {
    id: 1,
    name: "Admin User",
    email: "admin@vyzor.test",
    roles: ["admin"] // Array of strings
}
```

### Frontend Setup

**useAuth Composable** - `resources/js/composables/useAuth.js`:

```javascript
import { useAuth } from '@/composables/useAuth'

const { user, isAdmin, hasRole } = useAuth()
```

## 📚 API Reference

### useAuth() Composable

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `user` | `Ref<Object>` | Current authenticated user object |
| `isAuthenticated` | `Ref<Boolean>` | Check if user is authenticated |
| `isAdmin` | `Ref<Boolean>` | Check if user has 'admin' role |
| `isManager` | `Ref<Boolean>` | Check if user has 'manager' role |
| `isUser` | `Ref<Boolean>` | Check if user has 'user' role |

#### Methods

| Method | Parameters | Return | Description |
|--------|-----------|--------|-------------|
| `hasRole(role)` | string or array | boolean | Check if user has specific role(s) |
| `hasAnyRole(roles)` | array | boolean | Check if user has any of the roles |
| `hasAllRoles(roles)` | array | boolean | Check if user has all of the roles |

## 🚀 Usage Examples

### Example 1: Hide/Show Content Based on Role

```vue
<script setup>
import { useAuth } from '@/composables/useAuth'

const { isAdmin } = useAuth()
</script>

<template>
  <div>
    <!-- Only visible for Admin -->
    <div v-if="isAdmin" class="admin-panel">
      <h2>Admin Panel</h2>
      <p>This content is only visible to administrators</p>
    </div>
    
    <!-- Visible for all users -->
    <div class="user-content">
      <h2>Welcome!</h2>
    </div>
  </div>
</template>
```

### Example 2: Check Single Role

```vue
<script setup>
import { useAuth } from '@/composables/useAuth'

const { hasRole } = useAuth()
</script>

<template>
  <div>
    <!-- Check for specific role -->
    <button v-if="hasRole('admin')" class="btn btn-danger">
      Delete User
    </button>
    
    <button v-if="hasRole('manager')" class="btn btn-primary">
      Edit User
    </button>
  </div>
</template>
```

### Example 3: Check Multiple Roles (Any)

```vue
<script setup>
import { useAuth } from '@/composables/useAuth'

const { hasAnyRole } = useAuth()
</script>

<template>
  <div>
    <!-- Show if user has admin OR manager role -->
    <div v-if="hasAnyRole(['admin', 'manager'])" class="management-panel">
      <h2>Management Dashboard</h2>
      <p>Access for Admin and Manager only</p>
    </div>
  </div>
</template>
```

### Example 4: Check Multiple Roles (All)

```vue
<script setup>
import { useAuth } from '@/composables/useAuth'

const { hasAllRoles } = useAuth()
</script>

<template>
  <div>
    <!-- Show only if user has BOTH admin AND developer role -->
    <div v-if="hasAllRoles(['admin', 'developer'])" class="dev-tools">
      <h2>Developer Tools</h2>
      <p>Advanced features for admin developers</p>
    </div>
  </div>
</template>
```

### Example 5: Conditional Button Actions

```vue
<script setup>
import { useAuth } from '@/composables/useAuth'

const { isAdmin, hasRole } = useAuth()

const handleEdit = () => {
  if (isAdmin.value) {
    // Admin can edit everything
    router.visit('/admin/users/edit')
  } else if (hasRole('manager')) {
    // Manager has limited edit
    router.visit('/manager/users/edit')
  }
}
</script>

<template>
  <button @click="handleEdit" v-if="hasAnyRole(['admin', 'manager'])">
    Edit User
  </button>
</template>
```

### Example 6: Access User Data

```vue
<script setup>
import { useAuth } from '@/composables/useAuth'

const { user, isAuthenticated } = useAuth()
</script>

<template>
  <div v-if="isAuthenticated">
    <h3>Welcome, {{ user.name }}!</h3>
    <p>Email: {{ user.email }}</p>
    <p>Roles: {{ user.roles.join(', ') }}</p>
  </div>
</template>
```

## 🎨 Real-World Examples

### Dashboard.vue - System Information (Admin Only)

```vue
<script setup>
import { useAuth } from '@/composables/useAuth'

const { isAdmin } = useAuth()
</script>

<template>
  <!-- System Info - Only visible for Admin -->
  <div class="row" v-if="isAdmin">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">System Information</div>
        </div>
        <div class="card-body">
          <!-- System info content -->
        </div>
      </div>
    </div>
  </div>
</template>
```

### Settings Page - Role-Based Sections

```vue
<script setup>
import { useAuth } from '@/composables/useAuth'

const { isAdmin, hasRole } = useAuth()
</script>

<template>
  <div>
    <!-- General Settings - All authenticated users -->
    <div class="settings-section">
      <h3>General Settings</h3>
      <!-- Content -->
    </div>
    
    <!-- Advanced Settings - Manager and Admin -->
    <div v-if="hasAnyRole(['admin', 'manager'])" class="settings-section">
      <h3>Advanced Settings</h3>
      <!-- Content -->
    </div>
    
    <!-- System Settings - Admin only -->
    <div v-if="isAdmin" class="settings-section">
      <h3>System Settings</h3>
      <!-- Content -->
    </div>
  </div>
</template>
```

## 🔒 Available Roles

Default roles dalam aplikasi:

- **admin** - Full system access
- **manager** - Management access with limitations
- **user** - Basic user access

## 💡 Best Practices

1. **Always check roles in template** - Use `v-if` untuk hide/show content
2. **Backend validation is mandatory** - Frontend checks adalah untuk UX, selalu validate di backend
3. **Use composable** - Gunakan `useAuth()` untuk consistency
4. **Cache computed values** - Role checks sudah di-optimize dengan computed
5. **Combine with permissions** - Untuk granular control, combine dengan permission checks

## 🛡️ Security Notes

⚠️ **Important:** Role checks di frontend **HANYA untuk UX**!

**ALWAYS validate di backend:**

```php
// Laravel Controller
public function update(Request $request)
{
    // Always check authorization in backend
    if (!$request->user()->hasRole('admin')) {
        abort(403, 'Unauthorized');
    }
    
    // Process update
}
```

**Or use middleware:**

```php
// routes/web.php
Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::get('/admin/settings', [SettingsController::class, 'index']);
});
```

## 🧪 Testing

### Test Role Check

```javascript
// Browser console
console.log($page.props.auth.user.roles)
// Output: ["admin"]

// Check if admin
const { isAdmin } = useAuth()
console.log(isAdmin.value)
// Output: true
```

### Debug Role Issues

```vue
<template>
  <div>
    <!-- Debug info -->
    <div class="debug">
      <p>User: {{ user?.name }}</p>
      <p>Roles: {{ user?.roles }}</p>
      <p>Is Admin: {{ isAdmin }}</p>
    </div>
  </div>
</template>
```

## 📖 Related Documentation

- [Spatie Laravel Permission](https://spatie.be/docs/laravel-permission)
- [Inertia.js Shared Data](https://inertiajs.com/shared-data)
- [Vue Composables](https://vuejs.org/guide/reusability/composables.html)

## 🔍 Troubleshooting

**Role check tidak bekerja?**
- Check `$page.props.auth.user.roles` di console
- Verify middleware share user dengan roles
- Clear browser cache dan refresh

**isAdmin always false?**
- Check role name di database adalah 'admin' (lowercase)
- Verify user memiliki role admin: `$user->hasRole('admin')`
- Check `getRoleNames()` return array

**Roles undefined?**
- Verify `HandleInertiaRequests` share roles
- Check user authenticated
- Verify Spatie permission setup

---

**Last Updated:** 2025-11-15  
**Status:** ✅ Implemented & Tested
