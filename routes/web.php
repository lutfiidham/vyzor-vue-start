<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Inertia\Inertia;

// Guest routes
Route::middleware('guest')->group(function () {
    Route::get('/', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('/login', [AuthenticatedSessionController::class, 'store']);
});

// Demo routes - all pages moved under /demo/* prefix
Route::prefix('demo')->group(base_path('routes/demo.php'));

// Protected routes (require authentication)
Route::middleware('auth')->group(function () {
    // Dashboard - Landing page after login
    Route::get('/dashboard', function () {
        $user = Auth()->user;
        
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
        Route::resource('users', \App\Http\Controllers\Admin\UserController::class);
        Route::post('users/bulk', [\App\Http\Controllers\Admin\UserController::class, 'bulk'])->name('users.bulk');
        Route::get('users/export', [\App\Http\Controllers\Admin\UserController::class, 'export'])->name('users.export');
        
        // Role Management
        Route::resource('roles', \App\Http\Controllers\Admin\RoleController::class);
        
        // Settings
        Route::get('settings', [\App\Http\Controllers\Admin\SystemSettingController::class, 'index'])->name('settings.index');
        Route::post('settings', [\App\Http\Controllers\Admin\SystemSettingController::class, 'update'])->name('settings.update');
        Route::post('settings/test-email', [\App\Http\Controllers\Admin\SystemSettingController::class, 'testEmail'])->name('settings.test-email');
        Route::post('settings/clear-cache', [\App\Http\Controllers\Admin\SystemSettingController::class, 'clearCache'])->name('settings.clear-cache');
        
        // Activity Logs
        Route::get('activity-logs', [\App\Http\Controllers\Admin\ActivityLogController::class, 'index'])->name('activity-logs.index');
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
