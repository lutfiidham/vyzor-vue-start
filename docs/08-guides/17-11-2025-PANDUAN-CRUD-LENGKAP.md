# PANDUAN LENGKAP MEMBUAT CRUD

## Contoh: Employee Management

Panduan ini akan memandu Anda membuat halaman CRUD lengkap dari awal hingga akhir, termasuk:

- Migration & Model
- Controller & Routes
- Frontend (Vue/Inertia)
- Permissions & Menu

---

## 📋 TAHAP 1: DATABASE MIGRATION

### 1.1 Buat Migration File

```bash
php artisan make:migration create_employees_table
```

**File:** `database/migrations/YYYY_MM_DD_HHMMSS_create_employees_table.php`

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('employee_number')->unique();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->string('phone')->nullable();
            $table->date('hire_date');
            $table->string('position');
            $table->string('department');
            $table->decimal('salary', 10, 2)->nullable();
            $table->enum('employment_type', ['full-time', 'part-time', 'contract'])->default('full-time');
            $table->enum('status', ['active', 'inactive', 'terminated'])->default('active');
            $table->text('address')->nullable();
            $table->date('birth_date')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
```

### 1.2 Jalankan Migration

```bash
php artisan migrate
```

---

## 📦 TAHAP 2: MODEL

### 2.1 Buat Model

```bash
php artisan make:model Employee
```

**File:** `app/Models/Employee.php`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class Employee extends Model
{
    use HasFactory, SoftDeletes, LogsActivity;

    protected $fillable = [
        'employee_number',
        'first_name',
        'last_name',
        'email',
        'phone',
        'hire_date',
        'position',
        'department',
        'salary',
        'employment_type',
        'status',
        'address',
        'birth_date',
        'notes',
    ];

    protected $casts = [
        'hire_date' => 'date',
        'birth_date' => 'date',
        'salary' => 'decimal:2',
    ];

    protected $hidden = [
        'salary', // Hide salary in default JSON response
    ];

    /**
     * Activity log configuration
     */
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnly([
                'employee_number',
                'first_name',
                'last_name',
                'email',
                'position',
                'department',
                'status'
            ])
            ->logOnlyDirty()
            ->dontSubmitEmptyLogs();
    }

    /**
     * Accessor: Get full name
     */
    public function getFullNameAttribute(): string
    {
        return "{$this->first_name} {$this->last_name}";
    }

    /**
     * Scope: Filter active employees
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    /**
     * Scope: Filter by department
     */
    public function scopeByDepartment($query, $department)
    {
        return $query->where('department', $department);
    }

    /**
     * Scope: Search employees
     */
    public function scopeSearch($query, $search)
    {
        return $query->where(function ($q) use ($search) {
            $q->where('first_name', 'like', "%{$search}%")
              ->orWhere('last_name', 'like', "%{$search}%")
              ->orWhere('email', 'like', "%{$search}%")
              ->orWhere('employee_number', 'like', "%{$search}%")
              ->orWhere('position', 'like', "%{$search}%");
        });
    }
}
```

---

## 🎮 TAHAP 3: CONTROLLER

### 3.1 Buat Controller

```bash
php artisan make:controller Admin/EmployeeController
```

**File:** `app/Http/Controllers/Admin/EmployeeController.php`

```php
<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Employee::query();

        // Search
        if ($request->search) {
            $query->search($request->search);
        }

        // Filter by department
        if ($request->department) {
            $query->byDepartment($request->department);
        }

        // Filter by status
        if ($request->status) {
            $query->where('status', $request->status);
        }

        // Filter by employment type
        if ($request->employment_type) {
            $query->where('employment_type', $request->employment_type);
        }

        // Sort
        $sortField = $request->get('sort', 'created_at');
        $sortDirection = $request->get('direction', 'desc');
        $query->orderBy($sortField, $sortDirection);

        // Paginate
        $employees = $query->paginate(15)->through(function ($employee) {
            return [
                'id' => $employee->id,
                'employee_number' => $employee->employee_number,
                'full_name' => $employee->full_name,
                'first_name' => $employee->first_name,
                'last_name' => $employee->last_name,
                'email' => $employee->email,
                'phone' => $employee->phone,
                'position' => $employee->position,
                'department' => $employee->department,
                'employment_type' => $employee->employment_type,
                'status' => $employee->status,
                'hire_date' => $employee->hire_date?->format('Y-m-d'),
                'created_at' => $employee->created_at,
            ];
        });

        // Statistics
        $stats = [
            'total' => Employee::count(),
            'active' => Employee::where('status', 'active')->count(),
            'inactive' => Employee::where('status', 'inactive')->count(),
            'terminated' => Employee::where('status', 'terminated')->count(),
        ];

        // Department list for filter
        $departments = Employee::distinct()->pluck('department')->filter()->values();

        return Inertia::render('Admin/Employees/Index', [
            'employees' => $employees,
            'stats' => $stats,
            'departments' => $departments,
            'filters' => $request->only(['search', 'department', 'status', 'employment_type', 'sort', 'direction'])
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Employees/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'employee_number' => 'required|string|unique:employees,employee_number|max:50',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|unique:employees,email',
            'phone' => 'nullable|string|max:20',
            'hire_date' => 'required|date',
            'position' => 'required|string|max:255',
            'department' => 'required|string|max:255',
            'salary' => 'nullable|numeric|min:0',
            'employment_type' => 'required|in:full-time,part-time,contract',
            'status' => 'required|in:active,inactive,terminated',
            'address' => 'nullable|string',
            'birth_date' => 'nullable|date',
            'notes' => 'nullable|string',
        ]);

        Employee::create($validated);

        return redirect()->route('admin.employees.index')
            ->with('success', 'Employee created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        return Inertia::render('Admin/Employees/Show', [
            'employee' => [
                'id' => $employee->id,
                'employee_number' => $employee->employee_number,
                'first_name' => $employee->first_name,
                'last_name' => $employee->last_name,
                'full_name' => $employee->full_name,
                'email' => $employee->email,
                'phone' => $employee->phone,
                'hire_date' => $employee->hire_date?->format('Y-m-d'),
                'position' => $employee->position,
                'department' => $employee->department,
                'salary' => $employee->salary,
                'employment_type' => $employee->employment_type,
                'status' => $employee->status,
                'address' => $employee->address,
                'birth_date' => $employee->birth_date?->format('Y-m-d'),
                'notes' => $employee->notes,
                'created_at' => $employee->created_at,
                'updated_at' => $employee->updated_at,
            ]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        return Inertia::render('Admin/Employees/Edit', [
            'employee' => [
                'id' => $employee->id,
                'employee_number' => $employee->employee_number,
                'first_name' => $employee->first_name,
                'last_name' => $employee->last_name,
                'email' => $employee->email,
                'phone' => $employee->phone,
                'hire_date' => $employee->hire_date?->format('Y-m-d'),
                'position' => $employee->position,
                'department' => $employee->department,
                'salary' => $employee->salary,
                'employment_type' => $employee->employment_type,
                'status' => $employee->status,
                'address' => $employee->address,
                'birth_date' => $employee->birth_date?->format('Y-m-d'),
                'notes' => $employee->notes,
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        $validated = $request->validate([
            'employee_number' => 'required|string|max:50|unique:employees,employee_number,' . $employee->id,
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|unique:employees,email,' . $employee->id,
            'phone' => 'nullable|string|max:20',
            'hire_date' => 'required|date',
            'position' => 'required|string|max:255',
            'department' => 'required|string|max:255',
            'salary' => 'nullable|numeric|min:0',
            'employment_type' => 'required|in:full-time,part-time,contract',
            'status' => 'required|in:active,inactive,terminated',
            'address' => 'nullable|string',
            'birth_date' => 'nullable|date',
            'notes' => 'nullable|string',
        ]);

        $employee->update($validated);

        return redirect()->route('admin.employees.index')
            ->with('success', 'Employee updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        $employee->delete();

        return redirect()->route('admin.employees.index')
            ->with('success', 'Employee deleted successfully');
    }

    /**
     * Bulk actions
     */
    public function bulk(Request $request)
    {
        $validated = $request->validate([
            'action' => 'required|in:activate,deactivate,terminate,delete',
            'ids' => 'required|array',
            'ids.*' => 'exists:employees,id'
        ]);

        $employees = Employee::whereIn('id', $validated['ids']);

        switch ($validated['action']) {
            case 'activate':
                $employees->update(['status' => 'active']);
                $message = 'Employees activated successfully';
                break;
            case 'deactivate':
                $employees->update(['status' => 'inactive']);
                $message = 'Employees deactivated successfully';
                break;
            case 'terminate':
                $employees->update(['status' => 'terminated']);
                $message = 'Employees terminated successfully';
                break;
            case 'delete':
                $employees->delete();
                $message = 'Employees deleted successfully';
                break;
        }

        return redirect()->back()->with('success', $message);
    }

    /**
     * Export employees to Excel/CSV
     */
    public function export(Request $request)
    {
        // Implement export functionality using Laravel Excel
        // This is a placeholder
        return response()->json(['message' => 'Export functionality coming soon']);
    }
}
```

---

## 🛣️ TAHAP 4: ROUTES

**File:** `routes/web.php`

Tambahkan route berikut di dalam group `Route::prefix('admin')->name('admin.')`:

```php
// Employee Management
Route::middleware('permission:employees.view')->group(function () {
    Route::get('employees', [\App\Http\Controllers\Admin\EmployeeController::class, 'index'])->name('employees.index');
    Route::get('employees/{employee}', [\App\Http\Controllers\Admin\EmployeeController::class, 'show'])->name('employees.show');
});
Route::middleware('permission:employees.create')->group(function () {
    Route::get('employees/create', [\App\Http\Controllers\Admin\EmployeeController::class, 'create'])->name('employees.create');
    Route::post('employees', [\App\Http\Controllers\Admin\EmployeeController::class, 'store'])->name('employees.store');
});
Route::middleware('permission:employees.edit')->group(function () {
    Route::get('employees/{employee}/edit', [\App\Http\Controllers\Admin\EmployeeController::class, 'edit'])->name('employees.edit');
    Route::put('employees/{employee}', [\App\Http\Controllers\Admin\EmployeeController::class, 'update'])->name('employees.update');
    Route::patch('employees/{employee}', [\App\Http\Controllers\Admin\EmployeeController::class, 'update']);
    Route::post('employees/bulk', [\App\Http\Controllers\Admin\EmployeeController::class, 'bulk'])->name('employees.bulk');
});
Route::middleware('permission:employees.delete')->group(function () {
    Route::delete('employees/{employee}', [\App\Http\Controllers\Admin\EmployeeController::class, 'destroy'])->name('employees.destroy');
});
Route::get('employees/export', [\App\Http\Controllers\Admin\EmployeeController::class, 'export'])->name('employees.export')->middleware('permission:employees.view');
```

---

## 🔐 TAHAP 5: PERMISSIONS

### 5.1 Update RolesAndPermissionsSeeder

**File:** `database/seeders/RolesAndPermissionsSeeder.php`

Tambahkan permissions berikut di array `$permissions`:

```php
'employees.view',
'employees.create',
'employees.edit',
'employees.delete',
'employees.export',
```

### 5.2 Update role permissions

Di bagian role configuration, tambahkan permissions untuk setiap role:

```php
// Super Admin - Full system access
$superAdminRole->givePermissionTo(Permission::all());

// Admin
$adminRole->givePermissionTo([
    // ... existing permissions
    'employees.view',
    'employees.create',
    'employees.edit',
    'employees.delete',
    'employees.export',
]);

// Manager
$managerRole->givePermissionTo([
    // ... existing permissions
    'employees.view',
    'employees.create',
    'employees.edit',
]);

// User
$userRole->givePermissionTo([
    // ... existing permissions
    'employees.view',
]);
```

### 5.3 Jalankan Seeder

```bash
php artisan db:seed --class=RolesAndPermissionsSeeder
```

Atau jika ingin refresh semua:

```bash
php artisan migrate:fresh --seed
```

---

## 🍔 TAHAP 6: MENU

### 6.1 Update MenuSeeder

**File:** `database/seeders/MenuSeeder.php`

Tambahkan menu Employee di bagian ADMINISTRATION:

```php
[
    'title' => 'Employee Management',
    'icon' => '<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M56,144H32a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H56a8,8,0,0,1,8,8v48A8,8,0,0,1,56,144Zm72-64H104a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h24a8,8,0,0,0,8-8V88A8,8,0,0,0,128,80Zm96,0H200a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h24a8,8,0,0,0,8-8V88A8,8,0,0,0,224,80ZM104,152a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8v-8a8,8,0,0,0-8-8Z" opacity="0.2"/><circle cx="88" cy="108" r="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M152,184v16a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184a52,52,0,0,1,52-52h4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="176 80 208 112 176 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
    'path' => $baseUrl . 'admin/employees',
    'type' => 'link',
    'order' => 11.5, // Insert between User Management and Roles
    'is_active' => true,
    'roles' => [$superAdminRole->id, $adminRole->id, $managerRole->id],
],
```

### 6.2 Jalankan Seeder

```bash
php artisan db:seed --class=MenuSeeder
```

---

## 🎨 TAHAP 7: FRONTEND - INDEX PAGE

### 7.1 Buat Folder dan File

Buat folder: `resources/js/Pages/Admin/Employees`

**File:** `resources/js/Pages/Admin/Employees/Index.vue`

```vue
<script setup>
import { Head, router, Link } from '@inertiajs/vue3'
import { computed, ref, watch } from 'vue'
import { useConfirm } from '@/composables/useConfirm'
import { useToast } from '@/composables/useToast'

const props = defineProps({
  employees: {
    type: Object,
    required: true,
  },
  stats: {
    type: Object,
    default: () => ({}),
  },
  departments: {
    type: Array,
    default: () => [],
  },
  filters: {
    type: Object,
    default: () => ({}),
  },
})

const toast = useToast()
const { confirmDelete } = useConfirm()

// State
const selected = ref([])
const selectAll = ref(false)
const filters = ref({
  search: props.filters.search || '',
  department: props.filters.department || '',
  status: props.filters.status || '',
  employment_type: props.filters.employment_type || '',
  sort: props.filters.sort || 'created_at',
  direction: props.filters.direction || 'desc',
})

// Computed
const pages = computed(() => {
  const total = props.employees.last_page
  const current = props.employees.current_page
  const pages = []
  const start = Math.max(1, current - 2)
  const end = Math.min(total, current + 2)
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})

const hasFilters = computed(() => {
  return (
    filters.value.search ||
    filters.value.department ||
    filters.value.status ||
    filters.value.employment_type
  )
})

// Methods
function applyFilters() {
  router.get('/admin/employees', filters.value, {
    preserveState: true,
    preserveScroll: true,
  })
}

function resetFilters() {
  filters.value = {
    search: '',
    department: '',
    status: '',
    employment_type: '',
    sort: 'created_at',
    direction: 'desc',
  }
  applyFilters()
}

function changePage(page) {
  router.get(`/admin/employees?page=${page}`, filters.value, {
    preserveState: true,
    preserveScroll: true,
  })
}

function sortBy(field) {
  if (filters.value.sort === field) {
    filters.value.direction = filters.value.direction === 'asc' ? 'desc' : 'asc'
  } else {
    filters.value.sort = field
    filters.value.direction = 'asc'
  }
  applyFilters()
}

function toggleSelectAll() {
  if (selectAll.value) {
    selected.value = props.employees.data.map((e) => e.id)
  } else {
    selected.value = []
  }
}

function deleteEmployee(employee) {
  confirmDelete('Are you sure you want to delete this employee?', () => {
    router.delete(`/admin/employees/${employee.id}`, {
      preserveScroll: true,
      onSuccess: () => {
        toast.success('Employee deleted successfully')
      },
    })
  })
}

function bulkAction(action) {
  if (selected.value.length === 0) {
    toast.error('Please select at least one employee')
    return
  }

  const actions = {
    activate: 'activate',
    deactivate: 'deactivate',
    terminate: 'terminate',
    delete: 'delete',
  }

  const messages = {
    activate: 'Are you sure you want to activate selected employees?',
    deactivate: 'Are you sure you want to deactivate selected employees?',
    terminate: 'Are you sure you want to terminate selected employees?',
    delete: 'Are you sure you want to delete selected employees?',
  }

  if (action === 'delete') {
    confirmDelete(messages[action], () => {
      executeBulkAction(action)
    })
  } else {
    if (confirm(messages[action])) {
      executeBulkAction(action)
    }
  }
}

function executeBulkAction(action) {
  router.post(
    '/admin/employees/bulk',
    {
      action: action,
      ids: selected.value,
    },
    {
      preserveScroll: true,
      onSuccess: () => {
        selected.value = []
        selectAll.value = false
        toast.success('Bulk action completed successfully')
      },
    }
  )
}

function getStatusBadge(status) {
  const badges = {
    active: 'success',
    inactive: 'warning',
    terminated: 'danger',
  }
  return badges[status] || 'secondary'
}

function getEmploymentTypeBadge(type) {
  const badges = {
    'full-time': 'primary',
    'part-time': 'info',
    contract: 'warning',
  }
  return badges[type] || 'secondary'
}

// Watch for filter changes
let searchTimeout
watch(
  () => filters.value.search,
  () => {
    clearTimeout(searchTimeout)
    searchTimeout = setTimeout(() => {
      applyFilters()
    }, 500)
  }
)
</script>

<template>
  <div>
    <Head title="Employee Management" />

    <div class="page-header">
      <div>
        <h1 class="page-title">Employee Management</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link href="/dashboard">Dashboard</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Employees</li>
          </ol>
        </nav>
      </div>
      <div class="ms-auto">
        <Link href="/admin/employees/create" class="btn btn-primary">
          <i class="fe fe-plus me-2"></i>Add Employee
        </Link>
      </div>
    </div>

    <!-- Statistics Cards -->
    <div class="row mb-4">
      <div class="col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-grow-1">
                <p class="mb-2 text-muted">Total Employees</p>
                <h3 class="mb-0">{{ stats.total || 0 }}</h3>
              </div>
              <div class="avatar avatar-lg bg-primary-transparent rounded-circle">
                <i class="fe fe-users fs-20"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-grow-1">
                <p class="mb-2 text-muted">Active</p>
                <h3 class="mb-0 text-success">{{ stats.active || 0 }}</h3>
              </div>
              <div class="avatar avatar-lg bg-success-transparent rounded-circle">
                <i class="fe fe-check-circle fs-20"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-grow-1">
                <p class="mb-2 text-muted">Inactive</p>
                <h3 class="mb-0 text-warning">{{ stats.inactive || 0 }}</h3>
              </div>
              <div class="avatar avatar-lg bg-warning-transparent rounded-circle">
                <i class="fe fe-pause-circle fs-20"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-grow-1">
                <p class="mb-2 text-muted">Terminated</p>
                <h3 class="mb-0 text-danger">{{ stats.terminated || 0 }}</h3>
              </div>
              <div class="avatar avatar-lg bg-danger-transparent rounded-circle">
                <i class="fe fe-x-circle fs-20"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="card">
      <div class="card-body">
        <div class="row g-3">
          <div class="col-lg-3">
            <input
              v-model="filters.search"
              type="text"
              class="form-control"
              placeholder="Search employees..."
            />
          </div>
          <div class="col-lg-2">
            <select v-model="filters.department" class="form-select" @change="applyFilters">
              <option value="">All Departments</option>
              <option v-for="dept in departments" :key="dept" :value="dept">{{ dept }}</option>
            </select>
          </div>
          <div class="col-lg-2">
            <select v-model="filters.status" class="form-select" @change="applyFilters">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="terminated">Terminated</option>
            </select>
          </div>
          <div class="col-lg-2">
            <select v-model="filters.employment_type" class="form-select" @change="applyFilters">
              <option value="">All Types</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="contract">Contract</option>
            </select>
          </div>
          <div class="col-lg-3">
            <button v-if="hasFilters" @click="resetFilters" class="btn btn-outline-secondary w-100">
              <i class="fe fe-x me-2"></i>Reset Filters
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bulk Actions -->
    <div v-if="selected.length > 0" class="card mt-3">
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
          <span>{{ selected.length }} employee(s) selected</span>
          <div class="btn-group">
            <button @click="bulkAction('activate')" class="btn btn-success btn-sm">
              <i class="fe fe-check me-1"></i>Activate
            </button>
            <button @click="bulkAction('deactivate')" class="btn btn-warning btn-sm">
              <i class="fe fe-pause me-1"></i>Deactivate
            </button>
            <button @click="bulkAction('terminate')" class="btn btn-danger btn-sm">
              <i class="fe fe-x me-1"></i>Terminate
            </button>
            <button @click="bulkAction('delete')" class="btn btn-dark btn-sm">
              <i class="fe fe-trash-2 me-1"></i>Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Table -->
    <div class="card mt-3">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th style="width: 50px">
                  <input
                    v-model="selectAll"
                    @change="toggleSelectAll"
                    type="checkbox"
                    class="form-check-input"
                  />
                </th>
                <th @click="sortBy('employee_number')" style="cursor: pointer">
                  Employee #
                  <i
                    v-if="filters.sort === 'employee_number'"
                    :class="filters.direction === 'asc' ? 'fe fe-arrow-up' : 'fe fe-arrow-down'"
                  ></i>
                </th>
                <th @click="sortBy('first_name')" style="cursor: pointer">
                  Name
                  <i
                    v-if="filters.sort === 'first_name'"
                    :class="filters.direction === 'asc' ? 'fe fe-arrow-up' : 'fe fe-arrow-down'"
                  ></i>
                </th>
                <th>Email</th>
                <th>Position</th>
                <th>Department</th>
                <th>Type</th>
                <th>Status</th>
                <th>Hire Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="employees.data.length === 0">
                <td colspan="10" class="text-center py-5">
                  <div class="text-muted">
                    <i class="fe fe-inbox fs-40 mb-3"></i>
                    <p>No employees found</p>
                  </div>
                </td>
              </tr>
              <tr v-for="employee in employees.data" :key="employee.id">
                <td>
                  <input
                    v-model="selected"
                    :value="employee.id"
                    type="checkbox"
                    class="form-check-input"
                  />
                </td>
                <td>{{ employee.employee_number }}</td>
                <td>
                  <Link :href="`/admin/employees/${employee.id}`" class="text-dark fw-semibold">
                    {{ employee.full_name }}
                  </Link>
                </td>
                <td>{{ employee.email }}</td>
                <td>{{ employee.position }}</td>
                <td>{{ employee.department }}</td>
                <td>
                  <span :class="`badge bg-${getEmploymentTypeBadge(employee.employment_type)}`">
                    {{ employee.employment_type }}
                  </span>
                </td>
                <td>
                  <span :class="`badge bg-${getStatusBadge(employee.status)}`">
                    {{ employee.status }}
                  </span>
                </td>
                <td>{{ employee.hire_date }}</td>
                <td>
                  <div class="btn-group">
                    <Link
                      :href="`/admin/employees/${employee.id}`"
                      class="btn btn-sm btn-info"
                      title="View"
                    >
                      <i class="fe fe-eye"></i>
                    </Link>
                    <Link
                      :href="`/admin/employees/${employee.id}/edit`"
                      class="btn btn-sm btn-primary"
                      title="Edit"
                    >
                      <i class="fe fe-edit"></i>
                    </Link>
                    <button
                      @click="deleteEmployee(employee)"
                      class="btn btn-sm btn-danger"
                      title="Delete"
                    >
                      <i class="fe fe-trash-2"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div
          v-if="employees.last_page > 1"
          class="d-flex justify-content-between align-items-center mt-3"
        >
          <div class="text-muted">
            Showing {{ employees.from }} to {{ employees.to }} of {{ employees.total }} entries
          </div>
          <nav>
            <ul class="pagination mb-0">
              <li class="page-item" :class="{ disabled: !employees.prev_page_url }">
                <button
                  @click="changePage(employees.current_page - 1)"
                  class="page-link"
                  :disabled="!employees.prev_page_url"
                >
                  Previous
                </button>
              </li>
              <li
                v-for="page in pages"
                :key="page"
                class="page-item"
                :class="{ active: page === employees.current_page }"
              >
                <button @click="changePage(page)" class="page-link">{{ page }}</button>
              </li>
              <li class="page-item" :class="{ disabled: !employees.next_page_url }">
                <button
                  @click="changePage(employees.current_page + 1)"
                  class="page-link"
                  :disabled="!employees.next_page_url"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
```

---

## ➕ TAHAP 8: FRONTEND - CREATE PAGE

**File:** `resources/js/Pages/Admin/Employees/Create.vue`

```vue
<script setup>
import { Head, useForm, Link } from '@inertiajs/vue3'
import { useToast } from '@/composables/useToast'

const toast = useToast()

const form = useForm({
  employee_number: '',
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  hire_date: '',
  position: '',
  department: '',
  salary: '',
  employment_type: 'full-time',
  status: 'active',
  address: '',
  birth_date: '',
  notes: '',
})

function submit() {
  form.post('/admin/employees', {
    preserveScroll: true,
    onSuccess: () => {
      toast.success('Employee created successfully')
    },
    onError: (errors) => {
      toast.error('Please check the form for errors')
    },
  })
}
</script>

<template>
  <div>
    <Head title="Create Employee" />

    <div class="page-header">
      <div>
        <h1 class="page-title">Create Employee</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link href="/dashboard">Dashboard</Link></li>
            <li class="breadcrumb-item"><Link href="/admin/employees">Employees</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Create</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <form @submit.prevent="submit">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Employee Information</h3>
            </div>
            <div class="card-body">
              <div class="row">
                <!-- Employee Number -->
                <div class="col-md-6 mb-3">
                  <label class="form-label"
                    >Employee Number <span class="text-danger">*</span></label
                  >
                  <input
                    v-model="form.employee_number"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.employee_number }"
                    placeholder="EMP001"
                  />
                  <div v-if="form.errors.employee_number" class="invalid-feedback">
                    {{ form.errors.employee_number }}
                  </div>
                </div>

                <!-- Status -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Status <span class="text-danger">*</span></label>
                  <select
                    v-model="form.status"
                    class="form-select"
                    :class="{ 'is-invalid': form.errors.status }"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="terminated">Terminated</option>
                  </select>
                  <div v-if="form.errors.status" class="invalid-feedback">
                    {{ form.errors.status }}
                  </div>
                </div>

                <!-- First Name -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">First Name <span class="text-danger">*</span></label>
                  <input
                    v-model="form.first_name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.first_name }"
                    placeholder="John"
                  />
                  <div v-if="form.errors.first_name" class="invalid-feedback">
                    {{ form.errors.first_name }}
                  </div>
                </div>

                <!-- Last Name -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Last Name <span class="text-danger">*</span></label>
                  <input
                    v-model="form.last_name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.last_name }"
                    placeholder="Doe"
                  />
                  <div v-if="form.errors.last_name" class="invalid-feedback">
                    {{ form.errors.last_name }}
                  </div>
                </div>

                <!-- Email -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Email <span class="text-danger">*</span></label>
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.email }"
                    placeholder="john.doe@example.com"
                  />
                  <div v-if="form.errors.email" class="invalid-feedback">
                    {{ form.errors.email }}
                  </div>
                </div>

                <!-- Phone -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Phone</label>
                  <input
                    v-model="form.phone"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.phone }"
                    placeholder="+62 812 3456 7890"
                  />
                  <div v-if="form.errors.phone" class="invalid-feedback">
                    {{ form.errors.phone }}
                  </div>
                </div>

                <!-- Position -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Position <span class="text-danger">*</span></label>
                  <input
                    v-model="form.position"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.position }"
                    placeholder="Software Engineer"
                  />
                  <div v-if="form.errors.position" class="invalid-feedback">
                    {{ form.errors.position }}
                  </div>
                </div>

                <!-- Department -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Department <span class="text-danger">*</span></label>
                  <input
                    v-model="form.department"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.department }"
                    placeholder="IT"
                  />
                  <div v-if="form.errors.department" class="invalid-feedback">
                    {{ form.errors.department }}
                  </div>
                </div>

                <!-- Hire Date -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Hire Date <span class="text-danger">*</span></label>
                  <input
                    v-model="form.hire_date"
                    type="date"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.hire_date }"
                  />
                  <div v-if="form.errors.hire_date" class="invalid-feedback">
                    {{ form.errors.hire_date }}
                  </div>
                </div>

                <!-- Birth Date -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Birth Date</label>
                  <input
                    v-model="form.birth_date"
                    type="date"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.birth_date }"
                  />
                  <div v-if="form.errors.birth_date" class="invalid-feedback">
                    {{ form.errors.birth_date }}
                  </div>
                </div>

                <!-- Employment Type -->
                <div class="col-md-6 mb-3">
                  <label class="form-label"
                    >Employment Type <span class="text-danger">*</span></label
                  >
                  <select
                    v-model="form.employment_type"
                    class="form-select"
                    :class="{ 'is-invalid': form.errors.employment_type }"
                  >
                    <option value="full-time">Full-Time</option>
                    <option value="part-time">Part-Time</option>
                    <option value="contract">Contract</option>
                  </select>
                  <div v-if="form.errors.employment_type" class="invalid-feedback">
                    {{ form.errors.employment_type }}
                  </div>
                </div>

                <!-- Salary -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Salary</label>
                  <input
                    v-model="form.salary"
                    type="number"
                    step="0.01"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.salary }"
                    placeholder="5000000"
                  />
                  <div v-if="form.errors.salary" class="invalid-feedback">
                    {{ form.errors.salary }}
                  </div>
                </div>

                <!-- Address -->
                <div class="col-md-12 mb-3">
                  <label class="form-label">Address</label>
                  <textarea
                    v-model="form.address"
                    rows="3"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.address }"
                    placeholder="Full address"
                  ></textarea>
                  <div v-if="form.errors.address" class="invalid-feedback">
                    {{ form.errors.address }}
                  </div>
                </div>

                <!-- Notes -->
                <div class="col-md-12 mb-3">
                  <label class="form-label">Notes</label>
                  <textarea
                    v-model="form.notes"
                    rows="3"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.notes }"
                    placeholder="Additional notes"
                  ></textarea>
                  <div v-if="form.errors.notes" class="invalid-feedback">
                    {{ form.errors.notes }}
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer text-end">
              <Link href="/admin/employees" class="btn btn-secondary me-2"> Cancel </Link>
              <button type="submit" class="btn btn-primary" :disabled="form.processing">
                <span v-if="form.processing" class="spinner-border spinner-border-sm me-2"></span>
                Create Employee
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
```

---

---

## ✏️ TAHAP 9: FRONTEND - EDIT PAGE

**File:** `resources/js/Pages/Admin/Employees/Edit.vue`

```vue
<script setup>
import { Head, useForm, Link } from '@inertiajs/vue3'
import { useToast } from '@/composables/useToast'

const props = defineProps({
  employee: {
    type: Object,
    required: true,
  },
})

const toast = useToast()

const form = useForm({
  employee_number: props.employee.employee_number,
  first_name: props.employee.first_name,
  last_name: props.employee.last_name,
  email: props.employee.email,
  phone: props.employee.phone,
  hire_date: props.employee.hire_date,
  position: props.employee.position,
  department: props.employee.department,
  salary: props.employee.salary,
  employment_type: props.employee.employment_type,
  status: props.employee.status,
  address: props.employee.address,
  birth_date: props.employee.birth_date,
  notes: props.employee.notes,
})

function submit() {
  form.put(`/admin/employees/${props.employee.id}`, {
    preserveScroll: true,
    onSuccess: () => {
      toast.success('Employee updated successfully')
    },
    onError: (errors) => {
      toast.error('Please check the form for errors')
    },
  })
}
</script>

<template>
  <div>
    <Head title="Edit Employee" />

    <div class="page-header">
      <div>
        <h1 class="page-title">Edit Employee</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link href="/dashboard">Dashboard</Link></li>
            <li class="breadcrumb-item"><Link href="/admin/employees">Employees</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Edit</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <form @submit.prevent="submit">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Employee Information</h3>
            </div>
            <div class="card-body">
              <div class="row">
                <!-- Employee Number -->
                <div class="col-md-6 mb-3">
                  <label class="form-label"
                    >Employee Number <span class="text-danger">*</span></label
                  >
                  <input
                    v-model="form.employee_number"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.employee_number }"
                    placeholder="EMP001"
                  />
                  <div v-if="form.errors.employee_number" class="invalid-feedback">
                    {{ form.errors.employee_number }}
                  </div>
                </div>

                <!-- Status -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Status <span class="text-danger">*</span></label>
                  <select
                    v-model="form.status"
                    class="form-select"
                    :class="{ 'is-invalid': form.errors.status }"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="terminated">Terminated</option>
                  </select>
                  <div v-if="form.errors.status" class="invalid-feedback">
                    {{ form.errors.status }}
                  </div>
                </div>

                <!-- First Name -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">First Name <span class="text-danger">*</span></label>
                  <input
                    v-model="form.first_name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.first_name }"
                    placeholder="John"
                  />
                  <div v-if="form.errors.first_name" class="invalid-feedback">
                    {{ form.errors.first_name }}
                  </div>
                </div>

                <!-- Last Name -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Last Name <span class="text-danger">*</span></label>
                  <input
                    v-model="form.last_name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.last_name }"
                    placeholder="Doe"
                  />
                  <div v-if="form.errors.last_name" class="invalid-feedback">
                    {{ form.errors.last_name }}
                  </div>
                </div>

                <!-- Email -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Email <span class="text-danger">*</span></label>
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.email }"
                    placeholder="john.doe@example.com"
                  />
                  <div v-if="form.errors.email" class="invalid-feedback">
                    {{ form.errors.email }}
                  </div>
                </div>

                <!-- Phone -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Phone</label>
                  <input
                    v-model="form.phone"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.phone }"
                    placeholder="+62 812 3456 7890"
                  />
                  <div v-if="form.errors.phone" class="invalid-feedback">
                    {{ form.errors.phone }}
                  </div>
                </div>

                <!-- Position -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Position <span class="text-danger">*</span></label>
                  <input
                    v-model="form.position"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.position }"
                    placeholder="Software Engineer"
                  />
                  <div v-if="form.errors.position" class="invalid-feedback">
                    {{ form.errors.position }}
                  </div>
                </div>

                <!-- Department -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Department <span class="text-danger">*</span></label>
                  <input
                    v-model="form.department"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.department }"
                    placeholder="IT"
                  />
                  <div v-if="form.errors.department" class="invalid-feedback">
                    {{ form.errors.department }}
                  </div>
                </div>

                <!-- Hire Date -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Hire Date <span class="text-danger">*</span></label>
                  <input
                    v-model="form.hire_date"
                    type="date"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.hire_date }"
                  />
                  <div v-if="form.errors.hire_date" class="invalid-feedback">
                    {{ form.errors.hire_date }}
                  </div>
                </div>

                <!-- Birth Date -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Birth Date</label>
                  <input
                    v-model="form.birth_date"
                    type="date"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.birth_date }"
                  />
                  <div v-if="form.errors.birth_date" class="invalid-feedback">
                    {{ form.errors.birth_date }}
                  </div>
                </div>

                <!-- Employment Type -->
                <div class="col-md-6 mb-3">
                  <label class="form-label"
                    >Employment Type <span class="text-danger">*</span></label
                  >
                  <select
                    v-model="form.employment_type"
                    class="form-select"
                    :class="{ 'is-invalid': form.errors.employment_type }"
                  >
                    <option value="full-time">Full-Time</option>
                    <option value="part-time">Part-Time</option>
                    <option value="contract">Contract</option>
                  </select>
                  <div v-if="form.errors.employment_type" class="invalid-feedback">
                    {{ form.errors.employment_type }}
                  </div>
                </div>

                <!-- Salary -->
                <div class="col-md-6 mb-3">
                  <label class="form-label">Salary</label>
                  <input
                    v-model="form.salary"
                    type="number"
                    step="0.01"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.salary }"
                    placeholder="5000000"
                  />
                  <div v-if="form.errors.salary" class="invalid-feedback">
                    {{ form.errors.salary }}
                  </div>
                </div>

                <!-- Address -->
                <div class="col-md-12 mb-3">
                  <label class="form-label">Address</label>
                  <textarea
                    v-model="form.address"
                    rows="3"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.address }"
                    placeholder="Full address"
                  ></textarea>
                  <div v-if="form.errors.address" class="invalid-feedback">
                    {{ form.errors.address }}
                  </div>
                </div>

                <!-- Notes -->
                <div class="col-md-12 mb-3">
                  <label class="form-label">Notes</label>
                  <textarea
                    v-model="form.notes"
                    rows="3"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.notes }"
                    placeholder="Additional notes"
                  ></textarea>
                  <div v-if="form.errors.notes" class="invalid-feedback">
                    {{ form.errors.notes }}
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer text-end">
              <Link href="/admin/employees" class="btn btn-secondary me-2"> Cancel </Link>
              <button type="submit" class="btn btn-primary" :disabled="form.processing">
                <span v-if="form.processing" class="spinner-border spinner-border-sm me-2"></span>
                Update Employee
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
```

---

## 👁️ TAHAP 10: FRONTEND - SHOW PAGE

**File:** `resources/js/Pages/Admin/Employees/Show.vue`

```vue
<script setup>
import { Head, Link, router } from '@inertiajs/vue3'
import { useConfirm } from '@/composables/useConfirm'
import { useToast } from '@/composables/useToast'

const props = defineProps({
  employee: {
    type: Object,
    required: true,
  },
})

const toast = useToast()
const { confirmDelete } = useConfirm()

function deleteEmployee() {
  confirmDelete('Are you sure you want to delete this employee?', () => {
    router.delete(`/admin/employees/${props.employee.id}`, {
      onSuccess: () => {
        toast.success('Employee deleted successfully')
      },
    })
  })
}

function getStatusBadge(status) {
  const badges = {
    active: 'success',
    inactive: 'warning',
    terminated: 'danger',
  }
  return badges[status] || 'secondary'
}

function getEmploymentTypeBadge(type) {
  const badges = {
    'full-time': 'primary',
    'part-time': 'info',
    contract: 'warning',
  }
  return badges[type] || 'secondary'
}

function formatCurrency(value) {
  if (!value) return '-'
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value)
}

function formatDate(date) {
  if (!date) return '-'
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div>
    <Head :title="`Employee - ${employee.full_name}`" />

    <div class="page-header">
      <div>
        <h1 class="page-title">Employee Details</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link href="/dashboard">Dashboard</Link></li>
            <li class="breadcrumb-item"><Link href="/admin/employees">Employees</Link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ employee.full_name }}</li>
          </ol>
        </nav>
      </div>
      <div class="ms-auto">
        <Link :href="`/admin/employees/${employee.id}/edit`" class="btn btn-primary me-2">
          <i class="fe fe-edit me-2"></i>Edit
        </Link>
        <button @click="deleteEmployee" class="btn btn-danger">
          <i class="fe fe-trash-2 me-2"></i>Delete
        </button>
      </div>
    </div>

    <div class="row">
      <!-- Basic Information -->
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Basic Information</h3>
          </div>
          <div class="card-body">
            <div class="row mb-3">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label text-muted">Employee Number</label>
                  <p class="fw-bold">{{ employee.employee_number }}</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label text-muted">Status</label>
                  <div>
                    <span :class="`badge bg-${getStatusBadge(employee.status)} fs-14`">
                      {{ employee.status }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label text-muted">First Name</label>
                  <p class="fw-bold">{{ employee.first_name }}</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label text-muted">Last Name</label>
                  <p class="fw-bold">{{ employee.last_name }}</p>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label text-muted">Email</label>
                  <p class="fw-bold">
                    <a :href="`mailto:${employee.email}`">{{ employee.email }}</a>
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label text-muted">Phone</label>
                  <p class="fw-bold">{{ employee.phone || '-' }}</p>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label text-muted">Birth Date</label>
                  <p class="fw-bold">{{ formatDate(employee.birth_date) }}</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="mb-0">
                  <label class="form-label text-muted">Address</label>
                  <p class="fw-bold">{{ employee.address || '-' }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Employment Details -->
        <div class="card mt-3">
          <div class="card-header">
            <h3 class="card-title">Employment Details</h3>
          </div>
          <div class="card-body">
            <div class="row mb-3">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label text-muted">Position</label>
                  <p class="fw-bold">{{ employee.position }}</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label text-muted">Department</label>
                  <p class="fw-bold">{{ employee.department }}</p>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label text-muted">Employment Type</label>
                  <div>
                    <span
                      :class="`badge bg-${getEmploymentTypeBadge(employee.employment_type)} fs-14`"
                    >
                      {{ employee.employment_type }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label text-muted">Hire Date</label>
                  <p class="fw-bold">{{ formatDate(employee.hire_date) }}</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label text-muted">Salary</label>
                  <p class="fw-bold">{{ formatCurrency(employee.salary) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Notes -->
        <div v-if="employee.notes" class="card mt-3">
          <div class="card-header">
            <h3 class="card-title">Notes</h3>
          </div>
          <div class="card-body">
            <p class="mb-0">{{ employee.notes }}</p>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="col-lg-4">
        <!-- Quick Stats -->
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Quick Stats</h3>
          </div>
          <div class="card-body">
            <div class="list-group list-group-flush">
              <div class="list-group-item d-flex justify-content-between align-items-center">
                <span class="text-muted">Created At</span>
                <span class="fw-bold">{{ formatDate(employee.created_at) }}</span>
              </div>
              <div class="list-group-item d-flex justify-content-between align-items-center">
                <span class="text-muted">Updated At</span>
                <span class="fw-bold">{{ formatDate(employee.updated_at) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="card mt-3">
          <div class="card-header">
            <h3 class="card-title">Quick Actions</h3>
          </div>
          <div class="card-body">
            <div class="d-grid gap-2">
              <Link :href="`/admin/employees/${employee.id}/edit`" class="btn btn-primary">
                <i class="fe fe-edit me-2"></i>Edit Employee
              </Link>
              <button @click="deleteEmployee" class="btn btn-danger">
                <i class="fe fe-trash-2 me-2"></i>Delete Employee
              </button>
              <Link href="/admin/employees" class="btn btn-secondary">
                <i class="fe fe-arrow-left me-2"></i>Back to List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```

---

## 🧪 TAHAP 11: TESTING & FINALISASI

### 11.1 Test Migration

```bash
php artisan migrate --seed
```

### 11.2 Test Routes

```bash
php artisan route:list --name=employees
```

### 11.3 Clear Cache

```bash
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

### 11.4 Test Permission

Login sebagai user dengan role berbeda dan test akses:

- Super Admin: Full access
- Admin: Full access kecuali system critical
- Manager: View, Create, Edit (tidak bisa delete)
- User: View only

---

## 📝 TAHAP 12: SEEDER UNTUK DATA CONTOH (OPSIONAL)

Jika ingin membuat data contoh Employee untuk testing:

**File:** `database/seeders/EmployeeSeeder.php`

```php
<?php

namespace Database\Seeders;

use App\Models\Employee;
use Illuminate\Database\Seeder;

class EmployeeSeeder extends Seeder
{
    public function run(): void
    {
        $employees = [
            [
                'employee_number' => 'EMP001',
                'first_name' => 'John',
                'last_name' => 'Doe',
                'email' => 'john.doe@company.com',
                'phone' => '+62 812 3456 7890',
                'hire_date' => '2023-01-15',
                'position' => 'Software Engineer',
                'department' => 'IT',
                'salary' => 8000000,
                'employment_type' => 'full-time',
                'status' => 'active',
                'address' => 'Jakarta, Indonesia',
                'birth_date' => '1990-05-20',
            ],
            [
                'employee_number' => 'EMP002',
                'first_name' => 'Jane',
                'last_name' => 'Smith',
                'email' => 'jane.smith@company.com',
                'phone' => '+62 813 4567 8901',
                'hire_date' => '2023-02-20',
                'position' => 'Product Manager',
                'department' => 'Product',
                'salary' => 10000000,
                'employment_type' => 'full-time',
                'status' => 'active',
                'address' => 'Bandung, Indonesia',
                'birth_date' => '1988-08-15',
            ],
            [
                'employee_number' => 'EMP003',
                'first_name' => 'Bob',
                'last_name' => 'Johnson',
                'email' => 'bob.johnson@company.com',
                'phone' => '+62 814 5678 9012',
                'hire_date' => '2023-03-10',
                'position' => 'Designer',
                'department' => 'Design',
                'salary' => 7000000,
                'employment_type' => 'contract',
                'status' => 'active',
                'address' => 'Surabaya, Indonesia',
                'birth_date' => '1992-12-03',
            ],
            [
                'employee_number' => 'EMP004',
                'first_name' => 'Alice',
                'last_name' => 'Williams',
                'email' => 'alice.williams@company.com',
                'phone' => '+62 815 6789 0123',
                'hire_date' => '2022-11-05',
                'position' => 'HR Manager',
                'department' => 'Human Resources',
                'salary' => 9000000,
                'employment_type' => 'full-time',
                'status' => 'active',
                'address' => 'Yogyakarta, Indonesia',
                'birth_date' => '1985-03-25',
            ],
            [
                'employee_number' => 'EMP005',
                'first_name' => 'Charlie',
                'last_name' => 'Brown',
                'email' => 'charlie.brown@company.com',
                'phone' => '+62 816 7890 1234',
                'hire_date' => '2023-06-01',
                'position' => 'Marketing Specialist',
                'department' => 'Marketing',
                'salary' => 6500000,
                'employment_type' => 'part-time',
                'status' => 'inactive',
                'address' => 'Bali, Indonesia',
                'birth_date' => '1995-07-18',
            ],
        ];

        foreach ($employees as $employee) {
            Employee::create($employee);
        }

        $this->command->info('✅ Employee data seeded successfully!');
        $this->command->info('📊 Created ' . count($employees) . ' employees');
    }
}
```

Tambahkan ke `DatabaseSeeder.php`:

```php
$this->call([
    RolesAndPermissionsSeeder::class,
    AdminUserSeeder::class,
    MenuSeeder::class,
    SettingsSeeder::class,
    ActivityLogSeeder::class,
    EmployeeSeeder::class, // <-- Tambahkan ini
]);
```

Jalankan seeder:

```bash
php artisan db:seed --class=EmployeeSeeder
```

---

## 🎯 TAHAP 13: FACTORY UNTUK TESTING (OPSIONAL)

Buat Factory untuk generate dummy data:

```bash
php artisan make:factory EmployeeFactory
```

**File:** `database/factories/EmployeeFactory.php`

```php
<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    public function definition(): array
    {
        $departments = ['IT', 'HR', 'Marketing', 'Sales', 'Finance', 'Operations'];
        $positions = [
            'IT' => ['Software Engineer', 'DevOps Engineer', 'QA Engineer', 'System Administrator'],
            'HR' => ['HR Manager', 'Recruiter', 'HR Specialist'],
            'Marketing' => ['Marketing Manager', 'Content Creator', 'SEO Specialist'],
            'Sales' => ['Sales Manager', 'Account Executive', 'Sales Representative'],
            'Finance' => ['Financial Analyst', 'Accountant', 'Finance Manager'],
            'Operations' => ['Operations Manager', 'Project Manager', 'Business Analyst'],
        ];

        $department = fake()->randomElement($departments);
        $position = fake()->randomElement($positions[$department]);

        return [
            'employee_number' => 'EMP' . str_pad(fake()->unique()->numberBetween(1, 9999), 4, '0', STR_PAD_LEFT),
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'email' => fake()->unique()->safeEmail(),
            'phone' => fake()->phoneNumber(),
            'hire_date' => fake()->dateTimeBetween('-3 years', 'now'),
            'position' => $position,
            'department' => $department,
            'salary' => fake()->numberBetween(5000000, 15000000),
            'employment_type' => fake()->randomElement(['full-time', 'part-time', 'contract']),
            'status' => fake()->randomElement(['active', 'active', 'active', 'inactive', 'terminated']), // More active employees
            'address' => fake()->address(),
            'birth_date' => fake()->dateTimeBetween('-60 years', '-20 years'),
            'notes' => fake()->optional()->sentence(),
        ];
    }
}
```

Generate 50 employees:

```bash
php artisan tinker
>>> App\Models\Employee::factory(50)->create()
```

---

## 📚 CHECKLIST LENGKAP

Gunakan checklist ini untuk memastikan semua tahapan sudah dilakukan:

### Backend

- [ ] Migration created (`create_employees_table.php`)
- [ ] Migration executed (`php artisan migrate`)
- [ ] Model created (`Employee.php`)
- [ ] Model relationships & scopes defined
- [ ] Controller created (`EmployeeController.php`)
- [ ] All CRUD methods implemented
- [ ] Routes registered in `web.php`
- [ ] Routes grouped with permissions

### Permissions & Access Control

- [ ] Permissions added to seeder (`employees.*`)
- [ ] Permissions assigned to roles
- [ ] Permission seeder executed
- [ ] Routes protected with middleware

### Menu

- [ ] Menu item added to `MenuSeeder`
- [ ] Menu assigned to appropriate roles
- [ ] Menu seeder executed
- [ ] Menu visible in sidebar

### Frontend

- [ ] Folder created (`resources/js/Pages/Admin/Employees`)
- [ ] Index page created (`Index.vue`)
- [ ] Create page created (`Create.vue`)
- [ ] Edit page created (`Edit.vue`)
- [ ] Show page created (`Show.vue`)
- [ ] All pages tested

### Testing

- [ ] Clear all caches
- [ ] Test as Super Admin
- [ ] Test as Admin
- [ ] Test as Manager
- [ ] Test as User
- [ ] All CRUD operations working
- [ ] Validation working
- [ ] Permissions enforced

### Optional

- [ ] Seeder created for sample data
- [ ] Factory created for testing
- [ ] Export functionality implemented
- [ ] Import functionality implemented

---

## 🚀 COMMAND CHEAT SHEET

```bash
# Migration
php artisan make:migration create_employees_table
php artisan migrate
php artisan migrate:fresh --seed

# Model & Controller
php artisan make:model Employee
php artisan make:controller Admin/EmployeeController

# Seeder & Factory
php artisan make:seeder EmployeeSeeder
php artisan make:factory EmployeeFactory
php artisan db:seed --class=EmployeeSeeder

# Cache
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear

# Routes & Permissions
php artisan route:list --name=employees
php artisan permission:cache-reset

# Development
php artisan serve
npm run dev
```

---

## 🎓 TIPS & BEST PRACTICES

### 1. **Naming Convention**

- Model: Singular (`Employee`)
- Table: Plural (`employees`)
- Controller: Singular + Controller (`EmployeeController`)
- Routes: Plural (`/admin/employees`)

### 2. **Validation**

- Gunakan Form Request untuk validation kompleks
- Implement validation di frontend untuk UX lebih baik
- Berikan error message yang jelas

### 3. **Security**

- Selalu gunakan middleware permission
- Validate input di backend
- Escape output untuk prevent XSS
- Use CSRF protection (sudah built-in Laravel)

### 4. **Performance**

- Gunakan pagination untuk list
- Implement search dengan debounce
- Use eager loading untuk relationship
- Cache menu dan permission

### 5. **UX/UI**

- Berikan feedback untuk setiap action
- Implement confirmation untuk destructive action
- Loading state saat processing
- Responsive design

### 6. **Activity Logging**

- Log semua perubahan data penting
- Simpan informasi user yang melakukan
- Include IP address dan user agent

---

## 🔄 CUSTOMIZATION GUIDE

### Menambah Field Baru

1. **Tambah di Migration:**

```php
$table->string('new_field')->nullable();
```

2. **Tambah di Model `$fillable`:**

```php
protected $fillable = [
    // ... existing fields
    'new_field',
];
```

3. **Tambah di Controller:**

- Tambahkan di validation
- Tambahkan di transform data

4. **Tambah di Frontend:**

- Tambahkan input field di Create & Edit
- Tambahkan display di Index & Show

### Menambah Filter

1. **Di Controller (`index` method):**

```php
if ($request->new_filter) {
    $query->where('new_field', $request->new_filter);
}
```

2. **Di Frontend Index:**

```vue
<select v-model="filters.new_filter" @change="applyFilters">
  <option value="">All</option>
  <option value="value1">Value 1</option>
</select>
```

### Menambah Relationship

1. **Di Model:**

```php
public function department()
{
    return $this->belongsTo(Department::class);
}
```

2. **Di Controller:**

```php
$query = Employee::with('department');
```

3. **Di Frontend:**

```vue
<td>{{ employee.department.name }}</td>
```

---

## ❓ TROUBLESHOOTING

### Permission Denied

```bash
php artisan permission:cache-reset
php artisan cache:clear
```

### Menu Tidak Muncul

```bash
php artisan db:seed --class=MenuSeeder
# Clear browser cache
```

### Routes Not Found

```bash
php artisan route:clear
php artisan route:cache
php artisan route:list
```

### Validation Error

- Check field names match between frontend & backend
- Check validation rules in controller
- Check console for error details

### Database Error

```bash
php artisan migrate:fresh --seed
```

---

## 📖 REFERENSI

- **Laravel Documentation:** https://laravel.com/docs
- **Inertia.js Documentation:** https://inertiajs.com
- **Vue.js Documentation:** https://vuejs.org
- **Spatie Permission:** https://spatie.be/docs/laravel-permission
- **Bootstrap Documentation:** https://getbootstrap.com

---

## ✅ KESIMPULAN

Panduan ini mencakup seluruh proses pembuatan CRUD dari A sampai Z:

1. ✅ Database (Migration & Model)
2. ✅ Backend (Controller & Routes)
3. ✅ Permission & Authorization
4. ✅ Menu Management
5. ✅ Frontend (Index, Create, Edit, Show)
6. ✅ Testing & Validation
7. ✅ Best Practices & Tips

Dengan mengikuti panduan ini, Anda dapat membuat halaman CRUD lengkap dengan mudah dan konsisten dengan struktur project yang sudah ada.

**Happy Coding! 🚀**

---

**Dibuat dengan ❤️ untuk Vyzor Vue Start Project**
_Version: 1.0_
_Last Updated: 2025-11-17_
