# 📚 Dokumentasi Lengkap: Alur Kerja Laravel + Vue.js (Inertia.js)

> **Tujuan Dokumentasi:** Memahami alur kerja lengkap aplikasi Laravel + Vue.js dengan Inertia.js untuk pemula

## 🎯 Pendahuluan

Inertia.js adalah jembatan antara Laravel (backend) dan Vue.js (frontend). Dengan Inertia, kita bisa membangun aplikasi single-page yang terasa seperti SPA tapi dengan kemudahan development seperti aplikasi web tradisional.

### 🤔 Mengapa Inertia.js?

- **Tanpa API**: Tidak perlu membuat REST API endpoints
- **Seamless**: Halaman berpindah tanpa reload penuh
- **Simple**: Backend Laravel tetap mengatur data dan routing
- **Powerful**: Frontend Vue.js menghandle interaktivitas

---

## 🏗️ Struktur Folder Proyek

```
vyzor-vue-start/
├── app/                     # Folder utama Laravel
│   ├── Http/
│   │   ├── Controllers/     # Logic backend
│   │   └── Middleware/      # Filter request
│   ├── Models/             # Database models
│   └── Providers/          # Service providers
├── config/                 # Konfigurasi Laravel
├── database/               # Migrations & seeds
├── routes/                 # Route definitions
│   └── web.php            # Routes utama aplikasi
├── resources/
│   ├── views/             # Blade templates (hanya app.blade.php)
│   └── js/                # 🔥 Folder utama Vue.js
│       ├── Pages/         # Halaman Vue.js
│       ├── components/    # Komponen reusable
│       ├── layouts/       # Template layout
│       ├── composables/   # Vue utilities
│       └── stores/        # State management (Pinia)
├── vite.config.js         # Konfigurasi build tool
└── package.json           # Dependencies Node.js
```

---

## 🚀 Alur Kerja Lengkap (Step by Step)

Mari kita ikuti alur lengkap saat user mengakses halaman **User Management**:

### Step 1: User Akses URL 🌐

```
User membuka: http://localhost:8000/admin/users
```

### Step 2: Laravel Menerima Request 📥

**File yang diproses:** `routes/web.php`

```php
// Di dalam routes/web.php
Route::middleware(['auth', 'permission:users.view'])->prefix('admin')->group(function () {
    Route::get('/users', [UserController::class, 'index'])->name('admin.users.index');
});
```

**Yang terjadi:**
1. Laravel menerima request GET `/admin/users`
2. Middleware `auth` mengecek apakah user sudah login
3. Middleware `permission:users.view` mengecek apakah user punya izin
4. Route mengarah request ke `UserController::index`

### Step 3: Laravel Middleware Handle Inertia ⚙️

**File yang dieksekusi:** `app/Http/Middleware/HandleInertiaRequests.php`

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
            ] : null,
        ],
        'settings' => app(GeneralSettings::class)
    ]);
}
```

**Yang terjadi:**
- Data user yang login disiapkan
- Settings aplikasi dibagi ke semua halaman
- Data ini akan tersedia di semua Vue pages

### Step 4: Controller Menyiapkan Data 🎮

**File yang dieksekusi:** `app/Http/Controllers/Admin/UserController.php`

```php
public function index(Request $request)
{
    // 1. Query database dengan relasi
    $query = User::with('roles');

    // 2. Filter jika ada search
    if ($request->search) {
        $query->where(function ($q) use ($request) {
            $q->where('name', 'like', "%{$request->search}%")
              ->orWhere('email', 'like', "%{$request->search}%");
        });
    }

    // 3. Pagination dengan transformasi data
    $users = $query->latest()->paginate(15)->through(function ($user) {
        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'avatar' => $user->avatar,
            'role' => $user->getRoleNames()->first(),
            'is_active' => $user->is_active,
            'created_at' => $user->created_at->format('Y-m-d H:i'),
        ];
    });

    // 4. Kirim data ke Vue.js
    return Inertia::render('Admin/Users/Index', [
        'users' => $users,
        'filters' => $request->only(['search']),
        'stats' => [
            'total' => User::count(),
            'active' => User::where('is_active', true)->count(),
            'inactive' => User::where('is_active', false)->count(),
        ]
    ]);
}
```

**Yang terjadi:**
1. Database diquery untuk mendapatkan users
2. Data di-transform (hanya field yang dibutuhkan)
3. Pagination di-setup (15 users per halaman)
4. `Inertia::render()` mengirim data ke Vue.js

### Step 5: Inertia Mengirim Response ke Browser 📦

**Data yang dikirim ke frontend:**

```json
{
  "component": "Admin/Users/Index",
  "props": {
    "users": {
      "data": [...],
      "links": [...],
      "meta": {...}
    },
    "filters": {
      "search": "john"
    },
    "stats": {
      "total": 150,
      "active": 120,
      "inactive": 30
    },
    "auth": {
      "user": {
        "id": 1,
        "name": "Admin User",
        "email": "admin@example.com",
        "avatar": "avatar.jpg",
        "roles": ["Admin"]
      }
    },
    "settings": {
      "app_name": "Vyzor App",
      "theme": "light"
    }
  },
  "url": "/admin/users",
  "version": "..."
}
```

### Step 6: Vue.js Menerima dan Merender Data 🖥️

**File Vue.js yang diproses:**

#### 6.1. Main Layout (`resources/js/layouts/maindashboard.vue`)
```vue
<template>
  <div class="dashboard-layout">
    <!-- Header -->
    <Header />

    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content (Slot untuk Page) -->
    <main class="main-content">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
// Komponen ini wrapper semua pages dengan header, sidebar, footer
</script>
```

#### 6.2. User Management Page (`resources/js/Pages/Admin/Users/Index.vue`)
```vue
<template>
  <Head title="User Management" />

  <div class="users-page">
    <!-- Page Header -->
    <div class="page-header">
      <h1>User Management</h1>
      <Link href="/admin/users/create" class="btn btn-primary">
        Add New User
      </Link>
    </div>

    <!-- Stats Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <h3>{{ stats.total }}</h3>
        <p>Total Users</p>
      </div>
      <div class="stat-card">
        <h3>{{ stats.active }}</h3>
        <p>Active Users</p>
      </div>
      <div class="stat-card">
        <h3>{{ stats.inactive }}</h3>
        <p>Inactive Users</p>
      </div>
    </div>

    <!-- Search -->
    <div class="search-bar">
      <input
        type="text"
        v-model="search"
        placeholder="Search users..."
        @input="searchUsers"
      />
    </div>

    <!-- Users Table -->
    <DataTable :users="users.data" />

    <!-- Pagination -->
    <Pagination :links="users.links" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Head, Link, router } from '@inertiajs/vue3'
import { debounce } from 'lodash'

// 1. Terima props dari Laravel
const props = defineProps({
  users: Object,
  filters: Object,
  stats: Object,
  auth: Object
})

// 2. Local state untuk search
const search = ref(props.filters.search || '')

// 3. Search functionality
const searchUsers = debounce(() => {
  router.get('/admin/users', { search: search.value }, {
    preserveState: true,
    replace: true
  })
}, 300)
</script>
```

#### 6.3. Data Table Component (`resources/js/components/Admin/UserDataTable.vue`)
```vue
<template>
  <table class="users-table">
    <thead>
      <tr>
        <th>Avatar</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>
          <img :src="user.avatar" :alt="user.name" class="avatar" />
        </td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>
          <span class="role-badge">{{ user.role }}</span>
        </td>
        <td>
          <span :class="user.is_active ? 'status-active' : 'status-inactive'">
            {{ user.is_active ? 'Active' : 'Inactive' }}
          </span>
        </td>
        <td>
          <div class="action-buttons">
            <Link :href="`/admin/users/${user.id}/edit`" class="btn-edit">
              Edit
            </Link>
            <button @click="deleteUser(user.id)" class="btn-delete">
              Delete
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
// 1. Terima props dari parent component
const props = defineProps({
  users: Array
})

// 2. Delete functionality
const deleteUser = (userId) => {
  if (confirm('Are you sure you want to delete this user?')) {
    router.delete(`/admin/users/${userId}`, {
      onSuccess: () => {
        // Success handling (auto refresh page)
      }
    })
  }
}
</script>
```

---

## 🔄 Alur Interaksi User (Event Handling)

### Contoh 1: Search User Functionality 🔍

```vue
<!-- Di Admin/Users/Index.vue -->
<template>
  <input
    type="text"
    v-model="search"
    placeholder="Search users..."
    @input="handleSearch"
  />
</template>

<script setup>
const search = ref('')
const handleSearch = debounce(() => {
  // Kirim request baru ke Laravel dengan parameter search
  router.get('/admin/users', { search: search.value }, {
    preserveState: true,  // Jangan reset state
    replace: true,        // Replace di history browser
    preserveScroll: true  // Jangan scroll ke atas
  })
}, 300)
</script>
```

**Alurnya:**
1. User mengetik di search box
2. `debounce(300ms)` menunggu user berhenti mengetik
3. `router.get()` mengirim request ke `/admin/users?search=keyword`
4. Laravel UserController menerima request dengan parameter
5. Database di-filter sesuai keyword
6. Data baru dikirim ke Vue.js
7. Table ter-update tanpa full page reload

### Contoh 2: Create New User ➕

```php
// Laravel Controller
public function store(StoreUserRequest $request)
{
    // 1. Validasi data (via Form Request)
    $validated = $request->validated();

    // 2. Create user
    $user = User::create([
        'name' => $validated['name'],
        'email' => $validated['email'],
        'password' => Hash::make($validated['password']),
    ]);

    // 3. Assign role
    $user->assignRole($validated['role']);

    // 4. Redirect ke index dengan success message
    return redirect()->route('admin.users.index')
        ->with('success', 'User created successfully!');
}
```

```vue
<!-- Vue Create Form -->
<script setup>
import { useForm } from '@inertiajs/vue3'

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  role: 'user'
})

const submit = () => {
  form.post('/admin/users', {
    onSuccess: () => {
      // Auto redirect ke index page
      // Success message ditampilkan via flash data
    }
  })
}
</script>
```

---

## 🎨 Data Flow Diagram

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Browser       │    │   Laravel       │    │   Database      │
│                 │    │                 │    │                 │
│ 1. User clicks  │───▶│ 2. Route matches│───▶│ 5. Query data   │
│    /admin/users │    │    UserController│    │                 │
│                 │    │                 │    │                 │
│                 │    │ 3. Middleware   │◀───│ 6. Return data  │
│                 │    │    shares auth  │    │                 │
│                 │    │                 │    │                 │
│ 9. Vue renders  │◀───│ 4. Inertia sends│    │                 │
│    page         │    │    JSON response│    │                 │
│                 │    │                 │    │                 │
│ 8. Inertia app  │◀───│                 │    │                 │
│    receives     │    │                 │    │                 │
│    JSON         │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘

     ▲                                                          │
     │                                                          │
     │ 7. Vite builds & serves                                  │
     │                                                          │
     └──────────────────────────────────────────────────────────┘
```

---

## 🔑 Konsep Penting Inertia.js

### 1. Props vs Shared Data

**Props (Per Page):**
```php
// Di Controller - hanya untuk page ini
return Inertia::render('Admin/Users/Index', [
    'users' => $users,
    'stats' => $stats
]);
```

**Shared Data (All Pages):**
```php
// Di Middleware - tersedia di semua pages
public function share(Request $request): array
{
    return [
        'auth' => [
            'user' => $request->user()
        ]
    ];
}
```

### 2. Inertia Links vs Regular Links

```vue
<!-- ❌ Regular link - full page reload -->
<a href="/admin/users">Users</a>

<!-- ✅ Inertia link - SPA navigation -->
<Link href="/admin/users">Users</Link>
```

### 3. Forms with Inertia

```vue
<!-- Automatic form handling -->
<script setup>
import { useForm } from '@inertiajs/vue3'

const form = useForm({
  name: '',
  email: ''
})

const submit = () => {
  form.post('/users', {
    onSuccess: () => {
      // Success callback
    },
    onError: (errors) => {
      // Error handling
    }
  })
}
</script>
```

### 4. Manual Navigation

```vue
<script setup>
import { router } from '@inertiajs/vue3'

// Manual GET request
router.get('/users', { search: 'john' }, {
  preserveState: true,
  replace: true
})

// Manual POST request
router.post('/users', formData)

// Manual DELETE request
router.delete(`/users/${userId}`)
</script>
```

---

## 📁 File-File Kunci yang Perlu Dipahami

### Laravel Side:

1. **`routes/web.php`** - Definisi routing aplikasi
2. **`app/Http/Middleware/HandleInertiaRequests.php`** - Share data ke semua pages
3. **`app/Http/Controllers/`** - Logic backend dan data preparation
4. **`resources/views/app.blade.php`** - Root template Inertia
5. **`config/inertia.php`** - Konfigurasi Inertia

### Vue.js Side:

1. **`resources/js/app.js`** - Inertia app initialization
2. **`resources/js/bootstrap.js`** - Setup plugins (axios, csrf, etc)
3. **`resources/js/Pages/`** - Page components (route handlers)
4. **`resources/js/layouts/`** - Template wrappers
5. **`resources/js/components/`** - Reusable components
6. **`resources/js/composables/`** - Vue utilities

### Build Tools:

1. **`vite.config.js`** - Build configuration
2. **`package.json`** - Dependencies management
3. **`resources/css/app.css`** - Global styles

---

## 🎯 Best Practices untuk Pemula

### 1. Struktur Folder yang Rapi

```
Pages/
├── Admin/
│   ├── Users/
│   │   ├── Index.vue    (List users)
│   │   ├── Create.vue   (Create form)
│   │   ├── Edit.vue     (Edit form)
│   │   └── Show.vue     (User details)
│   ├── Roles/
│   └── Settings/
├── Auth/
│   ├── Login.vue
│   └── Register.vue
└── Dashboard.vue
```

### 2.命名 convention (Penamaan yang Konsisten)

- **Components:** PascalCase (`UserTable.vue`)
- **Pages:** PascalCase (`Admin/Users/Index.vue`)
- **Routes:** kebab-case (`/admin/users`)
- **Props:** camelCase (`userData`, `isModalOpen`)

### 3. Data Preparation Pattern

```php
// ❌ JANGAN: Kirim semua field model
return Inertia::render('Users/Index', [
    'users' => User::all()  // Mengirim semua field termasuk password!
]);

// ✅ BENAR: Transform data sebelum dikirim
return Inertia::render('Users/Index', [
    'users' => User::latest()->paginate(15)->through(function ($user) {
        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'role' => $user->getRoleNames()->first(),
        ];
    })
]);
```

### 4. Error Handling

```php
// Laravel Controller
public function store(StoreUserRequest $request)
{
    try {
        $user = User::create($request->validated());

        return redirect()->route('admin.users.index')
            ->with('success', 'User created successfully!');

    } catch (\Exception $e) {
        return back()->with('error', 'Failed to create user');
    }
}
```

```vue
<!-- Vue Form -->
<script setup>
const form = useForm({
    name: '',
    email: ''
})

const submit = () => {
    form.post('/users', {
        onSuccess: () => {
            // Success - auto redirect
        },
        onError: (errors) => {
            // Validation errors
            console.error('Form errors:', errors)
        }
    })
}
</script>
```

---

## 🔧 Debugging Tips

### 1. Laravel Side Debugging

```php
// Lihat data yang akan dikirim ke Vue
dd($users);

// Lihat semua props Inertia
dd(Inertia::getShared());
```

### 2. Vue.js Side Debugging

```vue
<script setup>
// Lihat semua props yang diterima
const props = defineProps({
    users: Object
})

console.log('Props received:', props)

// Lihat semua page props (shared + specific)
import { usePage } from '@inertiajs/vue3'
const page = usePage()
console.log('All page props:', page.props)
</script>
```

### 3. Browser DevTools

- **Network Tab:** Lihat Inertia requests (type: xhr)
- **Vue DevTools:** Inspect Vue components dan state
- **Console:** Lihat error logs dan debugging info

---

## 📚 Cheat Sheet Quick Reference

### Laravel Controller Pattern:

```php
public function index()
{
    return Inertia::render('Page/Index', [
        'data' => Model::latest()->paginate(15)
    ]);
}

public function create()
{
    return Inertia::render('Page/Create');
}

public function store(Request $request)
{
    // Validate and create
    Model::create($request->validated());

    return redirect()->route('page.index')
        ->with('success', 'Created successfully!');
}
```

### Vue.js Page Pattern:

```vue
<template>
  <Head title="Page Title" />

  <div>
    <h1>{{ pageTitle }}</h1>
    <!-- Content here -->
  </div>
</template>

<script setup>
import { Head, Link, router } from '@inertiajs/vue3'

const props = defineProps({
  data: Object,
  auth: Object
})

const pageTitle = 'My Page'
</script>
```

### Navigation Patterns:

```vue
<!-- Link -->
<Link :href="route('users.show', user.id)">{{ user.name }}</Link>

<!-- Form -->
<form @submit.prevent="form.post(route('users.store'))">
  <!-- Form fields -->
</form>

<!-- Manual navigation -->
router.visit(route('users.index'), { method: 'get' })
```

---

## 🎉 Kesimpulan

Dengan Inertia.js, kamu mendapatkan:

- ✅ **Kemudahan Laravel:** Routing, middleware, database handling
- ✅ **Interaktivitas Vue.js:** Reactive UI, components, state management
- ✅ **Performance:** Navigasi tanpa full page reload
- ✅ **Developer Experience:** Code yang terorganisir dan maintainable

**Tips untuk Pemula:**
1. Mulai dengan memahami flow Laravel → Inertia → Vue
2. Praktikkan dengan membuat CRUD sederhana
3. Gunakan Vue DevTools untuk debugging
4. Pelajari composables untuk logic reusable
5. Jangan lupa validasi di kedua sisi (server + client)

Selamat belajar! 🚀

---

*Last updated: 20 November 2025*
*Project: Vyzor Vue Start*