# 🛠️ DEVELOPER GUIDE

## Architecture Overview

### Technology Stack

**Backend**:
- Laravel 12
- PHP 8.2+
- MySQL/PostgreSQL/SQLite
- Redis (caching, queues)

**Frontend**:
- Vue 3 (Composition API)
- Inertia.js
- Tailwind CSS 4
- Vite

**Key Packages**:
- Laravel Sanctum (API authentication)
- Laravel Fortify (Authentication scaffolding)
- Spatie Laravel Permission (Roles & Permissions)
- Spatie Laravel Activitylog (Activity tracking)
- Spatie Laravel MediaLibrary (File management)

---

## Project Structure

```
vyzor-vue-start/
├── app/
│   ├── Actions/              # Business logic actions
│   ├── Http/
│   │   ├── Controllers/      # Request handlers
│   │   │   ├── Admin/        # Admin controllers
│   │   │   └── Auth/         # Auth controllers
│   │   ├── Middleware/       # Custom middleware
│   │   └── Requests/         # Form requests
│   ├── Models/               # Eloquent models
│   ├── Policies/             # Authorization policies
│   ├── Services/             # Service layer
│   └── Traits/               # Reusable traits
├── database/
│   ├── factories/            # Model factories
│   ├── migrations/           # Database migrations
│   └── seeders/              # Database seeders
├── resources/
│   ├── css/                  # Global styles
│   ├── js/
│   │   ├── Components/       # Vue components
│   │   ├── Composables/      # Vue composables
│   │   ├── Layouts/          # Layout components
│   │   ├── Pages/            # Inertia pages
│   │   ├── Stores/           # Pinia stores
│   │   └── Utils/            # Helper functions
│   └── views/                # Blade templates
├── routes/
│   ├── api.php               # API routes
│   ├── web.php               # Web routes
│   └── console.php           # Console routes
└── tests/
    ├── Feature/              # Feature tests
    └── Unit/                 # Unit tests
```

---

## Coding Standards

### PHP (PSR-12)

Follow PSR-12 coding style:

```php
<?php

namespace App\Services;

use App\Models\User;

class UserService
{
    public function __construct(
        private User $user
    ) {}

    public function createUser(array $data): User
    {
        return $this->user->create($data);
    }
}
```

Run Laravel Pint for automatic formatting:

```bash
composer pint
```

### JavaScript/Vue

Follow Vue 3 style guide:

```javascript
<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const double = computed(() => count.value * 2)

function increment() {
  count.value++
}
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ double }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
```

Run ESLint:

```bash
npm run lint
npm run lint:fix
```

Run Prettier:

```bash
npm run format
```

---

## Development Workflow

### 1. Feature Development

```bash
# Create feature branch
git checkout -b feature/user-export

# Make changes
# Write tests
# Run tests
composer test

# Commit with descriptive message
git commit -m "Add user export functionality"

# Push and create PR
git push origin feature/user-export
```

### 2. Database Changes

```bash
# Create migration
php artisan make:migration add_status_to_users_table

# Edit migration file
# Run migration
php artisan migrate

# Create seeder if needed
php artisan make:seeder StatusSeeder
php artisan db:seed --class=StatusSeeder
```

### 3. Creating Models

```bash
# Create model with migration, factory, seeder
php artisan make:model Post -mfs

# Create model with controller
php artisan make:model Post -c

# Create model with everything
php artisan make:model Post -a
```

### 4. Creating Controllers

```bash
# Create resource controller
php artisan make:controller PostController --resource

# Create API controller
php artisan make:controller Api/PostController --api

# Create invokable controller
php artisan make:controller ShowDashboard --invokable
```

---

## Backend Development

### Service Layer Pattern

Create services for business logic:

```php
<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function createUser(array $data): User
    {
        $data['password'] = Hash::make($data['password']);
        
        $user = User::create($data);
        
        if (isset($data['role'])) {
            $user->assignRole($data['role']);
        }
        
        return $user;
    }
    
    public function updateUser(User $user, array $data): User
    {
        if (isset($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        }
        
        $user->update($data);
        
        if (isset($data['role'])) {
            $user->syncRoles($data['role']);
        }
        
        return $user;
    }
}
```

### Repository Pattern

For complex queries:

```php
<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

class UserRepository
{
    public function __construct(
        private User $user
    ) {}
    
    public function getActiveUsers(): Collection
    {
        return $this->user
            ->where('is_active', true)
            ->whereNull('locked_until')
            ->get();
    }
    
    public function findByEmail(string $email): ?User
    {
        return $this->user
            ->where('email', $email)
            ->first();
    }
}
```

### Form Requests

Validate requests:

```php
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('users.create');
    }
    
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:8'],
            'role' => ['required', 'exists:roles,name'],
        ];
    }
}
```

### Resource Classes

Format API responses:

```php
<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'avatar' => $this->avatar,
            'role' => $this->getRoleNames()->first(),
            'permissions' => $this->getAllPermissions()->pluck('name'),
            'is_active' => $this->is_active,
            'last_login_at' => $this->last_login_at?->toISOString(),
            'created_at' => $this->created_at->toISOString(),
        ];
    }
}
```

### Policies

Handle authorization:

```php
<?php

namespace App\Policies;

use App\Models\User;

class UserPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->hasPermissionTo('users.view');
    }
    
    public function create(User $user): bool
    {
        return $user->hasPermissionTo('users.create');
    }
    
    public function update(User $user, User $model): bool
    {
        return $user->hasPermissionTo('users.edit') 
            || $user->id === $model->id;
    }
    
    public function delete(User $user, User $model): bool
    {
        return $user->hasPermissionTo('users.delete') 
            && $user->id !== $model->id;
    }
}
```

---

## Frontend Development

### Inertia Pages

Create Inertia pages:

```vue
<script setup>
import { ref } from 'vue'
import { useForm } from '@inertiajs/vue3'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'

defineProps({
  users: Array,
})

const form = useForm({
  name: '',
  email: '',
  password: '',
})

function submit() {
  form.post('/users')
}
</script>

<template>
  <AuthenticatedLayout>
    <Head title="Users" />
    
    <div class="py-12">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-2xl font-bold">Users</h1>
        
        <!-- Content -->
      </div>
    </div>
  </AuthenticatedLayout>
</template>
```

### Composables

Create reusable logic:

```javascript
// usePermissions.js
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'

export function usePermissions() {
  const page = usePage()
  
  const user = computed(() => page.props.auth.user)
  const permissions = computed(() => user.value?.permissions || [])
  
  function can(permission) {
    return permissions.value.includes(permission)
  }
  
  function hasRole(role) {
    return user.value?.role === role
  }
  
  return {
    can,
    hasRole,
    user,
    permissions,
  }
}
```

Usage:

```vue
<script setup>
import { usePermissions } from '@/Composables/usePermissions'

const { can } = usePermissions()
</script>

<template>
  <button v-if="can('users.create')">
    Create User
  </button>
</template>
```

### Pinia Stores

State management:

```javascript
// stores/userStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
  const users = ref([])
  const loading = ref(false)
  
  const activeUsers = computed(() => {
    return users.value.filter(user => user.is_active)
  })
  
  async function fetchUsers() {
    loading.value = true
    try {
      const response = await axios.get('/api/users')
      users.value = response.data
    } finally {
      loading.value = false
    }
  }
  
  return {
    users,
    loading,
    activeUsers,
    fetchUsers,
  }
})
```

---

## Testing

### Feature Tests

```php
<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserManagementTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_admin_can_view_users(): void
    {
        $admin = User::factory()->create();
        $admin->assignRole('admin');
        
        $response = $this->actingAs($admin)
            ->get('/admin/users');
        
        $response->assertStatus(200);
    }
    
    public function test_admin_can_create_user(): void
    {
        $admin = User::factory()->create();
        $admin->assignRole('admin');
        
        $response = $this->actingAs($admin)
            ->post('/admin/users', [
                'name' => 'Test User',
                'email' => 'test@example.com',
                'password' => 'password',
                'role' => 'user',
            ]);
        
        $response->assertRedirect();
        $this->assertDatabaseHas('users', [
            'email' => 'test@example.com',
        ]);
    }
}
```

### Unit Tests

```php
<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_user_can_be_locked(): void
    {
        $user = User::factory()->create();
        
        $user->update(['locked_until' => now()->addHour()]);
        
        $this->assertTrue($user->isLocked());
    }
    
    public function test_failed_login_increments_attempts(): void
    {
        $user = User::factory()->create();
        
        $user->incrementFailedLogins();
        
        $this->assertEquals(1, $user->failed_login_attempts);
    }
}
```

Run tests:

```bash
# Run all tests
composer test

# Run specific test
php artisan test --filter=UserManagementTest

# Run with coverage
php artisan test --coverage
```

---

## API Development

### Creating API Endpoints

```php
// routes/api.php
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('users', UserController::class);
    Route::get('users/{user}/permissions', [UserController::class, 'permissions']);
});
```

### API Controller

```php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::query()
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%");
            })
            ->paginate($request->per_page ?? 15);
        
        return UserResource::collection($users);
    }
    
    public function show(User $user)
    {
        return new UserResource($user);
    }
}
```

### Rate Limiting

```php
// app/Providers/RouteServiceProvider.php
protected function configureRateLimiting()
{
    RateLimiter::for('api', function (Request $request) {
        return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
    });
    
    RateLimiter::for('api-strict', function (Request $request) {
        return Limit::perMinute(10)->by($request->user()?->id ?: $request->ip());
    });
}
```

---

## Queue & Jobs

### Creating Jobs

```bash
php artisan make:job SendWelcomeEmail
```

```php
<?php

namespace App\Jobs;

use App\Models\User;
use App\Notifications\WelcomeNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendWelcomeEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    
    public function __construct(
        public User $user
    ) {}
    
    public function handle(): void
    {
        $this->user->notify(new WelcomeNotification());
    }
}
```

Dispatch job:

```php
SendWelcomeEmail::dispatch($user);

// Delayed dispatch
SendWelcomeEmail::dispatch($user)->delay(now()->addMinutes(5));

// Specific queue
SendWelcomeEmail::dispatch($user)->onQueue('emails');
```

---

## Events & Listeners

### Creating Events

```bash
php artisan make:event UserRegistered
```

```php
<?php

namespace App\Events;

use App\Models\User;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class UserRegistered
{
    use Dispatchable, SerializesModels;
    
    public function __construct(
        public User $user
    ) {}
}
```

### Creating Listeners

```bash
php artisan make:listener SendWelcomeNotification --event=UserRegistered
```

```php
<?php

namespace App\Listeners;

use App\Events\UserRegistered;
use App\Jobs\SendWelcomeEmail;

class SendWelcomeNotification
{
    public function handle(UserRegistered $event): void
    {
        SendWelcomeEmail::dispatch($event->user);
    }
}
```

Register in EventServiceProvider:

```php
protected $listen = [
    UserRegistered::class => [
        SendWelcomeNotification::class,
    ],
];
```

---

## Best Practices

### 1. Security

- Always validate input
- Use parameterized queries (Eloquent does this)
- Implement CSRF protection
- Use password hashing
- Implement rate limiting
- Keep dependencies updated

### 2. Performance

- Use eager loading to avoid N+1 queries
- Cache frequently accessed data
- Use queue for heavy tasks
- Optimize database queries
- Use pagination for large datasets

### 3. Code Quality

- Follow SOLID principles
- Write self-documenting code
- Add comments for complex logic
- Keep functions small and focused
- Use dependency injection

### 4. Error Handling

- Use try-catch blocks appropriately
- Log errors properly
- Provide user-friendly error messages
- Don't expose sensitive information

### 5. Testing

- Write tests for critical functionality
- Aim for high coverage (>80%)
- Use factories for test data
- Mock external services
- Test edge cases

---

## Debugging

### Debug Bar

Laravel Debugbar is installed. Access at bottom of page in development.

### Logging

```php
use Illuminate\Support\Facades\Log;

Log::info('User created', ['user_id' => $user->id]);
Log::warning('Invalid login attempt', ['email' => $email]);
Log::error('Payment failed', ['error' => $e->getMessage()]);
```

### Dump & Die

```php
dd($variable);  // Dump and die
dump($variable);  // Dump without dying
```

### Telescope (Optional)

Install for advanced debugging:

```bash
composer require laravel/telescope
php artisan telescope:install
php artisan migrate
```

Access at `/telescope`

---

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

---

## Resources

- [Laravel Documentation](https://laravel.com/docs)
- [Vue 3 Documentation](https://vuejs.org)
- [Inertia.js Documentation](https://inertiajs.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

**Version**: 1.0.0
**Last Updated**: 2025-11-09
