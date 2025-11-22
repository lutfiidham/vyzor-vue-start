# 📋 Contoh Praktis: User Management Flow

> **Study case:** Menganalisis flow lengkap User Management di proyek Vyzor Vue Start

## 🔍 File-File yang Terlibat

### Laravel Side (Backend)

#### 1. Route Definition
**File:** `routes/web.php:24-28`
```php
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // User management routes ada di routes/admin.php
});
```

**File:** `routes/admin.php` (di-load dari web.php:35)
```php
// User management routes
Route::middleware(['permission:users.view'])->prefix('users')->group(function () {
    Route::get('/', [UserController::class, 'index'])->name('admin.users.index');
    Route::get('/create', [UserController::class, 'create'])->name('admin.users.create');
    Route::post('/', [UserController::class, 'store'])->name('admin.users.store');
    Route::get('/{user}', [UserController::class, 'show'])->name('admin.users.show');
    Route::get('/{user}/edit', [UserController::class, 'edit'])->name('admin.users.edit');
    Route::put('/{user}', [UserController::class, 'update'])->name('admin.users.update');
    Route::delete('/{user}', [UserController::class, 'destroy'])->name('admin.users.destroy');
});
```

#### 2. Controller Logic
**File:** `app/Http/Controllers/Admin/UserController.php`

**Index Method (Line 15-45):**
```php
public function index(Request $request)
{
    // Query dengan eager loading
    $query = User::with('roles');

    // Search functionality
    if ($request->search) {
        $query->where(function ($q) use ($request) {
            $q->where('name', 'like', "%{$request->search}%")
              ->orWhere('email', 'like', "%{$request->search}%");
        });
    }

    // Filter berdasarkan role
    if ($request->role) {
        $query->whereHas('roles', function ($q) use ($request) {
            $q->where('name', $request->role);
        });
    }

    // Filter status
    if ($request->status !== null) {
        $query->where('is_active', $request->status);
    }

    // Pagination dengan transformasi data
    $users = $query->latest()->paginate(15)->through(function ($user) {
        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'avatar' => $user->avatar,
            'role' => $user->getRoleNames()->first(),
            'is_active' => $user->is_active,
            'created_at' => $user->created_at->format('Y-m-d H:i'),
            'last_login_at' => $user->last_login_at?->format('Y-m-d H:i'),
        ];
    });

    // Kirim ke Vue
    return Inertia::render('Admin/Users/Index', [
        'users' => $users,
        'filters' => $request->only(['search', 'role', 'status']),
        'roles' => Role::pluck('name', 'name'),
        'stats' => [
            'total' => User::count(),
            'active' => User::where('is_active', true)->count(),
            'inactive' => User::where('is_active', false)->count(),
        ]
    ]);
}
```

**Store Method (Line 75-95):**
```php
public function store(StoreUserRequest $request)
{
    // Validasi via Form Request
    $validated = $request->validated();

    // Create user
    $user = User::create([
        'name' => $validated['name'],
        'email' => $validated['email'],
        'password' => Hash::make($validated['password']),
        'phone' => $validated['phone'] ?? null,
    ]);

    // Assign role
    if (isset($validated['role'])) {
        $user->assignRole($validated['role']);
    }

    // Send notification (jika ada)
    if ($validated['send_email'] ?? false) {
        // Logic kirim email welcome
    }

    return redirect()->route('admin.users.index')
        ->with('success', 'User created successfully!');
}
```

#### 3. Form Request Validation
**File:** `app/Http/Requests/StoreUserRequest.php`
```php
public function rules(): array
{
    return [
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:8|confirmed',
        'role' => 'required|string|exists:roles,name',
        'phone' => 'nullable|string|max:20',
        'send_email' => 'boolean',
    ];
}
```

#### 4. Middleware untuk Shared Data
**File:** `app/Http/Middleware/HandleInertiaRequests.php:35-50`
```php
public function share(Request $request): array
{
    return array_merge(parent::share($request), [
        'auth' => [
            'user' => $request->user() ? [
                'id' => $request->user()->id,
                'name' => $request->user()->name,
                'email' => $request->user()->email,
                'avatar' => $request->user()->avatar,
                'roles' => $request->user()->getRoleNames()->toArray(),
                'permissions' => $request->user()->getAllPermissions()->pluck('name')->toArray(),
            ] : null,
        ],
        'settings' => app(GeneralSettings::class),
        'flash' => [
            'success' => fn () => $request->session()->get('success'),
            'error' => fn () => $request->session()->get('error'),
        ],
    ]);
}
```

### Vue.js Side (Frontend)

#### 1. Inertia App Initialization
**File:** `resources/js/app.js:15-35`
```javascript
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m'

// Import layout
import MainDashboardLayout from './layouts/maindashboard.vue'

createInertiaApp({
    title: (title) => `${title} - ${import.meta.env.VITE_APP_NAME}`,
    resolve: (name) => {
        const page = resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue'))

        // Apply layout untuk Admin pages
        if (name.startsWith('Admin/')) {
            page.then(module => {
                module.default.layout = MainDashboardLayout
            })
        }

        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy.routes)
            .mount(el)
    },
    progress: {
        color: '#4B5563',
    },
})
```

#### 2. User Management Index Page
**File:** `resources/js/Pages/Admin/Users/Index.vue`

```vue
<template>
  <Head title="User Management" />

  <div class="users-management">
    <!-- Page Header -->
    <div class="page-header">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">User Management</h1>
        <p class="text-gray-600">Manage application users and permissions</p>
      </div>
      <Link
        :href="route('admin.users.create')"
        class="btn-primary"
      >
        <PlusIcon class="w-4 h-4 mr-2" />
        Add New User
      </Link>
    </div>

    <!-- Stats Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon bg-blue-100">
          <UsersIcon class="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 class="text-2xl font-bold">{{ stats.total }}</h3>
          <p class="text-gray-600">Total Users</p>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon bg-green-100">
          <CheckCircleIcon class="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 class="text-2xl font-bold">{{ stats.active }}</h3>
          <p class="text-gray-600">Active Users</p>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon bg-red-100">
          <XCircleIcon class="w-6 h-6 text-red-600" />
        </div>
        <div>
          <h3 class="text-2xl font-bold">{{ stats.inactive }}</h3>
          <p class="text-gray-600">Inactive Users</p>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="filters-section">
      <div class="filter-group">
        <input
          type="text"
          v-model="filters.search"
          placeholder="Search by name or email..."
          class="search-input"
          @input="handleSearch"
        />
      </div>

      <div class="filter-group">
        <select
          v-model="filters.role"
          @change="handleFilter"
          class="filter-select"
        >
          <option value="">All Roles</option>
          <option v-for="role in roles" :key="role" :value="role">
            {{ role }}
          </option>
        </select>
      </div>

      <div class="filter-group">
        <select
          v-model="filters.status"
          @change="handleFilter"
          class="filter-select"
        >
          <option value="">All Status</option>
          <option :value="1">Active</option>
          <option :value="0">Inactive</option>
        </select>
      </div>
    </div>

    <!-- Flash Messages -->
    <div v-if="$page.props.flash.success" class="alert-success">
      {{ $page.props.flash.success }}
    </div>

    <div v-if="$page.props.flash.error" class="alert-error">
      {{ $page.props.flash.error }}
    </div>

    <!-- Users Table -->
    <div class="table-container">
      <UsersTable :users="users.data" />

      <!-- Pagination -->
      <Pagination :links="users.links" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, reactive } from 'vue'
import { Head, Link, router, usePage } from '@inertiajs/vue3'
import { debounce } from 'lodash'
import { route } from 'ziggy-js'
import UsersTable from '@/components/Admin/UsersTable.vue'
import Pagination from '@/components/Pagination.vue'
import {
  PlusIcon,
  UsersIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/vue/24/outline'

// Props dari Laravel
const props = defineProps({
  users: Object,
  filters: Object,
  roles: Object,
  stats: Object,
})

// Local state untuk filters
const filters = reactive({
  search: props.filters.search || '',
  role: props.filters.role || '',
  status: props.filters.status ?? '',
})

// Search dengan debounce
const handleSearch = debounce(() => {
  handleFilter()
}, 300)

const handleFilter = () => {
  router.get(route('admin.users.index'), filters, {
    preserveState: true,
    replace: true,
    preserveScroll: true
  })
}

// Watch untuk reset filters saat navigasi
watch(() => usePage().props.filters, (newFilters) => {
  Object.assign(filters, newFilters)
})
</script>

<style scoped>
/* Styles untuk user management page */
.users-management {
  @apply p-6 space-y-6;
}

.page-header {
  @apply flex justify-between items-center;
}

.stats-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-4;
}

.stat-card {
  @apply bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center space-x-4;
}

.stat-icon {
  @apply p-3 rounded-full flex items-center justify-center;
}

.filters-section {
  @apply bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-wrap gap-4;
}

.filter-group {
  @apply flex-1 min-w-[200px];
}

.search-input {
  @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent;
}

.filter-select {
  @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent;
}

.alert-success {
  @apply bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-4;
}

.alert-error {
  @apply bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-4;
}

.btn-primary {
  @apply inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors;
}
</style>
```

#### 3. Users Table Component
**File:** `resources/js/components/Admin/UsersTable.vue`

```vue
<template>
  <div class="overflow-x-auto">
    <table class="users-table">
      <thead>
        <tr>
          <th>User</th>
          <th>Role</th>
          <th>Status</th>
          <th>Created</th>
          <th>Last Login</th>
          <th class="text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50">
          <td>
            <div class="flex items-center space-x-3">
              <img
                :src="user.avatar || '/default-avatar.png'"
                :alt="user.name"
                class="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div class="font-medium text-gray-900">{{ user.name }}</div>
                <div class="text-sm text-gray-500">{{ user.email }}</div>
              </div>
            </div>
          </td>

          <td>
            <span class="role-badge" :class="getRoleBadgeClass(user.role)">
              {{ user.role }}
            </span>
          </td>

          <td>
            <span
              class="status-badge"
              :class="user.is_active ? 'status-active' : 'status-inactive'"
            >
              <span
                class="w-2 h-2 rounded-full mr-1 inline-block"
                :class="user.is_active ? 'bg-green-500' : 'bg-red-500'"
              ></span>
              {{ user.is_active ? 'Active' : 'Inactive' }}
            </span>
          </td>

          <td class="text-sm text-gray-500">
            {{ formatDate(user.created_at) }}
          </td>

          <td class="text-sm text-gray-500">
            {{ user.last_login_at || 'Never' }}
          </td>

          <td>
            <div class="flex items-center justify-end space-x-2">
              <Link
                :href="route('admin.users.show', user.id)"
                class="btn-action btn-view"
                title="View Details"
              >
                <EyeIcon class="w-4 h-4" />
              </Link>

              <Link
                :href="route('admin.users.edit', user.id)"
                class="btn-action btn-edit"
                title="Edit User"
              >
                <PencilIcon class="w-4 h-4" />
              </Link>

              <button
                @click="confirmDelete(user)"
                class="btn-action btn-delete"
                title="Delete User"
                :disabled="user.id === $page.props.auth.user.id"
              >
                <TrashIcon class="w-4 h-4" />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { Link, router, usePage } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import { useConfirm } from '@/composables/useConfirm'
import { useToast } from '@/composables/useToast'
import {
  EyeIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/vue/24/outline'

// Props dari parent component
const props = defineProps({
  users: Array
})

// Composables
const { confirm } = useConfirm()
const { success, error } = useToast()

// Helper functions
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const getRoleBadgeClass = (role) => {
  const classes = {
    'Admin': 'bg-purple-100 text-purple-800',
    'Manager': 'bg-blue-100 text-blue-800',
    'User': 'bg-gray-100 text-gray-800',
  }
  return classes[role] || 'bg-gray-100 text-gray-800'
}

// Delete functionality
const confirmDelete = async (user) => {
  // Prevent self-deletion
  if (user.id === usePage().props.auth.user.id) {
    error('You cannot delete your own account')
    return
  }

  const confirmed = await confirm({
    title: 'Delete User',
    message: `Are you sure you want to delete "${user.name}"? This action cannot be undone.`,
    confirmText: 'Delete',
    cancelText: 'Cancel',
    type: 'danger'
  })

  if (confirmed) {
    router.delete(route('admin.users.destroy', user.id), {
      onSuccess: () => {
        success('User deleted successfully')
      },
      onError: (errors) => {
        error('Failed to delete user')
        console.error('Delete errors:', errors)
      }
    })
  }
}
</script>

<style scoped>
.users-table {
  @apply w-full bg-white border border-gray-200 rounded-lg overflow-hidden;
}

.users-table th {
  @apply px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 border-b;
}

.users-table td {
  @apply px-6 py-4 whitespace-nowrap border-b border-gray-100;
}

.role-badge {
  @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium;
}

.status-badge {
  @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium;
}

.status-active {
  @apply bg-green-100 text-green-800;
}

.status-inactive {
  @apply bg-red-100 text-red-800;
}

.btn-action {
  @apply p-2 rounded-lg transition-colors;
}

.btn-view {
  @apply text-gray-600 hover:text-blue-600 hover:bg-blue-50;
}

.btn-edit {
  @apply text-gray-600 hover:text-green-600 hover:bg-green-50;
}

.btn-delete {
  @apply text-gray-600 hover:text-red-600 hover:bg-red-50;
}

.btn-delete:disabled {
  @apply text-gray-300 cursor-not-allowed hover:text-gray-300 hover:bg-transparent;
}
</style>
```

#### 4. Create User Form
**File:** `resources/js/Pages/Admin/Users/Create.vue`

```vue
<template>
  <Head title="Create New User" />

  <div class="create-user">
    <div class="page-header">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Create New User</h1>
        <p class="text-gray-600">Add a new user to the system</p>
      </div>
      <Link
        :href="route('admin.users.index')"
        class="btn-secondary"
      >
        Back to Users
      </Link>
    </div>

    <div class="form-container">
      <form @submit.prevent="submit">
        <div class="form-section">
          <h3 class="section-title">User Information</h3>

          <div class="form-grid">
            <!-- Name -->
            <div class="form-group">
              <label for="name" class="form-label">
                Full Name <span class="required">*</span>
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                class="form-input"
                :class="{ 'border-red-500': form.errors.name }"
                required
              />
              <div v-if="form.errors.name" class="form-error">
                {{ form.errors.name }}
              </div>
            </div>

            <!-- Email -->
            <div class="form-group">
              <label for="email" class="form-label">
                Email Address <span class="required">*</span>
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="form-input"
                :class="{ 'border-red-500': form.errors.email }"
                required
              />
              <div v-if="form.errors.email" class="form-error">
                {{ form.errors.email }}
              </div>
            </div>

            <!-- Phone -->
            <div class="form-group">
              <label for="phone" class="form-label">Phone Number</label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                class="form-input"
                :class="{ 'border-red-500': form.errors.phone }"
                placeholder="+62 812-3456-7890"
              />
              <div v-if="form.errors.phone" class="form-error">
                {{ form.errors.phone }}
              </div>
            </div>

            <!-- Role -->
            <div class="form-group">
              <label for="role" class="form-label">
                Role <span class="required">*</span>
              </label>
              <select
                id="role"
                v-model="form.role"
                class="form-select"
                :class="{ 'border-red-500': form.errors.role }"
                required
              >
                <option value="">Select a role</option>
                <option v-for="role in roles" :key="role" :value="role">
                  {{ role }}
                </option>
              </select>
              <div v-if="form.errors.role" class="form-error">
                {{ form.errors.role }}
              </div>
            </div>

            <!-- Password -->
            <div class="form-group">
              <label for="password" class="form-label">
                Password <span class="required">*</span>
              </label>
              <input
                id="password"
                v-model="form.password"
                type="password"
                class="form-input"
                :class="{ 'border-red-500': form.errors.password }"
                required
              />
              <div v-if="form.errors.password" class="form-error">
                {{ form.errors.password }}
              </div>
              <div class="form-hint">
                Minimum 8 characters
              </div>
            </div>

            <!-- Password Confirmation -->
            <div class="form-group">
              <label for="password_confirmation" class="form-label">
                Confirm Password <span class="required">*</span>
              </label>
              <input
                id="password_confirmation"
                v-model="form.password_confirmation"
                type="password"
                class="form-input"
                required
              />
            </div>
          </div>
        </div>

        <!-- Additional Options -->
        <div class="form-section">
          <h3 class="section-title">Additional Options</h3>

          <div class="form-group">
            <label class="checkbox-label">
              <input
                v-model="form.send_email"
                type="checkbox"
                class="checkbox"
              />
              <span class="ml-2">Send welcome email to user</span>
            </label>
          </div>
        </div>

        <!-- Form Actions -->
        <div class="form-actions">
          <button
            type="submit"
            class="btn-primary"
            :disabled="form.processing"
          >
            <span v-if="form.processing">Creating...</span>
            <span v-else>Create User</span>
          </button>

          <Link
            :href="route('admin.users.index')"
            class="btn-secondary"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3'
import { route } from 'ziggy-js'

// Props dari Laravel
const props = defineProps({
  roles: Object,
})

// Form setup dengan Inertia
const form = useForm({
  name: '',
  email: '',
  phone: '',
  role: '',
  password: '',
  password_confirmation: '',
  send_email: false,
})

// Submit form
const submit = () => {
  form.post(route('admin.users.store'), {
    onSuccess: () => {
      // Auto redirect to users index
      // Success message ditampilkan via flash data
    },
    onError: (errors) => {
      // Validation errors automatically handled by Inertia
      console.log('Validation errors:', errors)
    },
    onFinish: () => {
      // Reset form if needed
      // form.reset('password', 'password_confirmation')
    }
  })
}
</script>

<style scoped>
.create-user {
  @apply p-6 space-y-6;
}

.page-header {
  @apply flex justify-between items-center;
}

.form-container {
  @apply bg-white rounded-lg shadow-sm border border-gray-200 p-6;
}

.form-section {
  @apply mb-8;
}

.form-section:last-child {
  @apply mb-0;
}

.section-title {
  @apply text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200;
}

.form-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.form-group {
  @apply space-y-2;
}

.form-label {
  @apply block text-sm font-medium text-gray-700;
}

.required {
  @apply text-red-500;
}

.form-input,
.form-select {
  @apply w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors;
}

.form-input:disabled,
.form-select:disabled {
  @apply bg-gray-50 text-gray-500 cursor-not-allowed;
}

.form-error {
  @apply text-sm text-red-600;
}

.form-hint {
  @apply text-sm text-gray-500;
}

.checkbox-label {
  @apply flex items-center cursor-pointer;
}

.checkbox {
  @apply w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500;
}

.form-actions {
  @apply flex items-center space-x-4 pt-6 border-t border-gray-200;
}

.btn-primary {
  @apply inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors;
}

.btn-secondary {
  @apply inline-flex items-center px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors;
}
</style>
```

---

## 🔄 Complete Flow Analysis

### 1. **Initial Load (/admin/users)**

```
Browser Request
    ↓
routes/web.php (Route matching)
    ↓
routes/admin.php (Admin routes)
    ↓
UserController@index (Method execution)
    ↓
Database Query → User Model → Transform Data
    ↓
HandleInertiaRequests@share (Add auth data)
    ↓
Inertia::render('Admin/Users/Index', [data])
    ↓
JSON Response to Browser
    ↓
Vue.js resolves page component
    ↓
Admin/Users/Index.vue renders with props
    ↓
UsersTable component displays data
```

### 2. **Search/Filter Interaction**

```
User types in search box
    ↓
@input="handleSearch" (Vue event)
    ↓
debounce(300ms) (Performance optimization)
    ↓
router.get(route('admin.users.index'), filters)
    ↓
Laravel receives GET request with query params
    ↓
UserController@index with filters applied
    ↓
Database filtered query
    ↓
New data sent to Vue
    ↓
Page updates without full reload
```

### 3. **Create New User Flow**

```
User clicks "Add New User"
    ↓
<Link :href="route('admin.users.create')">
    ↓
Inertia navigation to /admin/users/create
    ↓
UserController@create() → return Inertia::render('Admin/Users/Create', ['roles'])
    ↓
Create.vue renders with form
    ↓
User fills form and submits
    ↓
form.post(route('admin.users.store'), formData)
    ↓
StoreUserRequest validation
    ↓
UserController@store() → Create user → Assign role
    ↓
return redirect()->route('admin.users.index')->with('success')
    ↓
Auto redirect with flash message
    ↓
Index page shows success message
```

### 4. **Delete User Flow**

```
User clicks delete button
    ↓
confirmDelete(user) function
    ↓
useConfirm() composable → Show confirmation dialog
    ↓
User confirms deletion
    ↓
router.delete(route('admin.users.destroy', user.id))
    ↓
UserController@destroy() → Delete user from database
    ↓
return back() with success message
    ↓
useToast() shows success notification
    ↓
Table updates via Inertia props refresh
```

---

## 🎯 Key Learning Points

### 1. **Data Transformation Pattern**
```php
// Laravel: Transform data sebelum dikirim
$users = User::latest()->paginate(15)->through(function ($user) {
    return [
        'id' => $user->id,
        'name' => $user->name,
        'role' => $user->getRoleNames()->first(), // relationship
        'formatted_date' => $user->created_at->format('Y-m-d'),
    ];
});
```

### 2. **Form Handling with Inertia**
```vue
<script setup>
// Vue: Form handling
const form = useForm({
    name: '',
    email: '',
    role: ''
})

const submit = () => {
    form.post(route('admin.users.store'), {
        onSuccess: () => {
            // Auto redirect & success message
        },
        onError: (errors) => {
            // Auto validation errors
        }
    })
}
</script>
```

### 3. **Shared Data via Middleware**
```php
// Laravel: Share data ke semua pages
public function share(Request $request): array
{
    return [
        'auth' => ['user' => $request->user()],
        'settings' => app(GeneralSettings::class),
        'flash' => ['success' => fn () => $request->session()->get('success')]
    ];
}
```

### 4. **Navigation Patterns**
```vue
<!-- Vue: Navigation -->
<Link :href="route('admin.users.index')">Back</Link>

<!-- Programmatic navigation -->
router.visit(route('admin.users.create'))

<!-- With data -->
router.get(route('admin.users.index'), { search: query })
```

---

## 🛠️ Common Patterns in This Project

### 1. **Layout Structure**
```
maindashboard.vue (Layout)
├── Header.vue
├── Sidebar.vue
└── <slot> (Page content)
    └── Admin/Users/Index.vue
        ├── UsersTable.vue
        └── Pagination.vue
```

### 2. **Composables Usage**
```vue
<script setup>
import { useAuth } from '@/composables/useAuth'
import { useToast } from '@/composables/useToast'
import { useConfirm } from '@/composables/useConfirm'

const { user } = useAuth()
const { success, error } = useToast()
const { confirm } = useConfirm()
</script>
```

### 3. **Permission-based UI**
```vue
<!-- Check permissions before showing elements -->
<div v-if="$page.props.auth.permissions.includes('users.create')">
    <Link href="/admin/users/create">Add User</Link>
</div>
```

This practical example shows exactly how User Management works in your project, with real file paths and complete flow from Laravel backend to Vue.js frontend using Inertia.js.

---

*Last updated: 20 November 2025*
*Based on: Vyzor Vue Start project structure*