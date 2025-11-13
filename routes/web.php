<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Inertia\Inertia;

// Guest routes
Route::middleware('guest')->group(function () {
    Route::get('/', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::get('/login', [AuthenticatedSessionController::class, 'create']);
    Route::post('/login', [AuthenticatedSessionController::class, 'store']);
});

// Demo routes - all pages moved under /demo/* prefix
Route::prefix('demo')->group(base_path('routes/demo.php'));

// Protected routes (require authentication)
Route::middleware('auth')->group(function () {
    // Dashboard - Landing page after login
    Route::get('/dashboard', function () {
        $user = auth()->user();
        
        return Inertia::render('Dashboard', [
            'stats' => [
                'totalUsers' => \App\Models\User::count(),
                'activeUsers' => \App\Models\User::where('is_active', true)->count(),
                'totalRoles' => \Spatie\Permission\Models\Role::count(),
                'totalPermissions' => \Spatie\Permission\Models\Permission::count(),
            ]
        ]);
    })->name('dashboard');
    
    // Admin Routes
    Route::prefix('admin')->name('admin.')->group(function () {
        // User Management
        Route::middleware('permission:users.view')->group(function () {
            Route::get('users', [\App\Http\Controllers\Admin\UserController::class, 'index'])->name('users.index');
            Route::get('users/{user}', [\App\Http\Controllers\Admin\UserController::class, 'show'])->name('users.show');
        });
        Route::middleware('permission:users.create')->group(function () {
            Route::get('users/create', [\App\Http\Controllers\Admin\UserController::class, 'create'])->name('users.create');
            Route::post('users', [\App\Http\Controllers\Admin\UserController::class, 'store'])->name('users.store');
        });
        Route::middleware('permission:users.edit')->group(function () {
            Route::get('users/{user}/edit', [\App\Http\Controllers\Admin\UserController::class, 'edit'])->name('users.edit');
            Route::put('users/{user}', [\App\Http\Controllers\Admin\UserController::class, 'update'])->name('users.update');
            Route::patch('users/{user}', [\App\Http\Controllers\Admin\UserController::class, 'update']);
            Route::post('users/bulk', [\App\Http\Controllers\Admin\UserController::class, 'bulk'])->name('users.bulk');
        });
        Route::middleware('permission:users.delete')->group(function () {
            Route::delete('users/{user}', [\App\Http\Controllers\Admin\UserController::class, 'destroy'])->name('users.destroy');
        });
        Route::get('users/export', [\App\Http\Controllers\Admin\UserController::class, 'export'])->name('users.export')->middleware('permission:users.view');
        
        // Role Management
        Route::middleware('permission:roles.view')->group(function () {
            Route::get('roles', [\App\Http\Controllers\Admin\RoleController::class, 'index'])->name('roles.index');
            Route::get('roles/{role}', [\App\Http\Controllers\Admin\RoleController::class, 'show'])->name('roles.show');
        });
        Route::middleware('permission:roles.create')->group(function () {
            Route::get('roles/create', [\App\Http\Controllers\Admin\RoleController::class, 'create'])->name('roles.create');
            Route::post('roles', [\App\Http\Controllers\Admin\RoleController::class, 'store'])->name('roles.store');
        });
        Route::middleware('permission:roles.edit')->group(function () {
            Route::get('roles/{role}/edit', [\App\Http\Controllers\Admin\RoleController::class, 'edit'])->name('roles.edit');
            Route::put('roles/{role}', [\App\Http\Controllers\Admin\RoleController::class, 'update'])->name('roles.update');
            Route::patch('roles/{role}', [\App\Http\Controllers\Admin\RoleController::class, 'update']);
        });
        Route::middleware('permission:roles.delete')->group(function () {
            Route::delete('roles/{role}', [\App\Http\Controllers\Admin\RoleController::class, 'destroy'])->name('roles.destroy');
        });

        // Permission Management
        Route::middleware('permission:roles.create')->group(function () {
            Route::post('permissions', [\App\Http\Controllers\Admin\PermissionController::class, 'store'])->name('permissions.store');
            Route::post('permissions/bulk', [\App\Http\Controllers\Admin\PermissionController::class, 'bulkStore'])->name('permissions.bulk-store');
        });
        Route::middleware('permission:roles.edit')->group(function () {
            Route::put('permissions/{permission}', [\App\Http\Controllers\Admin\PermissionController::class, 'update'])->name('permissions.update');
        });
        Route::middleware('permission:roles.delete')->group(function () {
            Route::delete('permissions/{permission}', [\App\Http\Controllers\Admin\PermissionController::class, 'destroy'])->name('permissions.destroy');
            Route::post('permissions/bulk-delete', [\App\Http\Controllers\Admin\PermissionController::class, 'bulkDestroy'])->name('permissions.bulk-destroy');
        });

        // Menu Management
        Route::middleware('permission:menus.view')->group(function () {
            Route::get('menus', [\App\Http\Controllers\Admin\MenuController::class, 'index'])->name('menus.index');
            Route::get('menus/{menu}', [\App\Http\Controllers\Admin\MenuController::class, 'show'])->name('menus.show');
        });
        Route::middleware('permission:menus.create')->group(function () {
            Route::get('menus/create', [\App\Http\Controllers\Admin\MenuController::class, 'create'])->name('menus.create');
            Route::post('menus', [\App\Http\Controllers\Admin\MenuController::class, 'store'])->name('menus.store');
        });
        Route::middleware('permission:menus.edit')->group(function () {
            Route::get('menus/{menu}/edit', [\App\Http\Controllers\Admin\MenuController::class, 'edit'])->name('menus.edit');
            Route::put('menus/{menu}', [\App\Http\Controllers\Admin\MenuController::class, 'update'])->name('menus.update');
            Route::patch('menus/{menu}', [\App\Http\Controllers\Admin\MenuController::class, 'update']);
            Route::post('menus/reorder', [\App\Http\Controllers\Admin\MenuController::class, 'reorder'])->name('menus.reorder');
            Route::post('menus/{menu}/toggle', [\App\Http\Controllers\Admin\MenuController::class, 'toggle'])->name('menus.toggle');
            Route::post('menus/clear-cache', [\App\Http\Controllers\Admin\MenuController::class, 'clearCache'])->name('menus.clear-cache');
        });
        Route::middleware('permission:menus.delete')->group(function () {
            Route::delete('menus/{menu}', [\App\Http\Controllers\Admin\MenuController::class, 'destroy'])->name('menus.destroy');
        });

        // Settings
        Route::middleware('permission:settings.view')->group(function () {
            Route::get('settings', [\App\Http\Controllers\Admin\SystemSettingController::class, 'index'])->name('settings.index');
        });
        Route::middleware('permission:settings.edit')->group(function () {
            Route::post('settings', [\App\Http\Controllers\Admin\SystemSettingController::class, 'update'])->name('settings.update');
            Route::post('settings/test-email', [\App\Http\Controllers\Admin\SystemSettingController::class, 'testEmail'])->name('settings.test-email');
            Route::post('settings/clear-cache', [\App\Http\Controllers\Admin\SystemSettingController::class, 'clearCache'])->name('settings.clear-cache');
        });
        
        // Activity Logs
        Route::middleware('permission:activity-logs.view')->group(function () {
            Route::get('activity-logs', [\App\Http\Controllers\Admin\ActivityLogController::class, 'index'])->name('activity-logs.index');
        });
    });
    
    // Profile Routes
    Route::prefix('profile')->name('profile.')->group(function () {
        Route::get('/', [\App\Http\Controllers\ProfileController::class, 'show'])->name('show');
        Route::get('/edit', [\App\Http\Controllers\ProfileController::class, 'edit'])->name('edit');
        Route::put('/', [\App\Http\Controllers\ProfileController::class, 'update'])->name('update');
        Route::put('/password', [\App\Http\Controllers\ProfileController::class, 'updatePassword'])->name('password.update');
    });
    
    // Notifications
    Route::prefix('notifications')->name('notifications.')->group(function () {
        Route::get('/', [\App\Http\Controllers\NotificationController::class, 'index'])->name('index');
        Route::post('/{id}/read', [\App\Http\Controllers\NotificationController::class, 'markAsRead'])->name('read');
        Route::post('/read-all', [\App\Http\Controllers\NotificationController::class, 'markAllAsRead'])->name('read-all');
    });
    
    // Logout
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});
