# Authentication Flow

## Intended URL Redirect

Aplikasi ini sudah diatur untuk mengingat halaman yang ingin diakses user sebelum login, lalu redirect ke halaman tersebut setelah berhasil login.

### Cara Kerja:

#### 1. **User Mengakses Halaman yang Dilindungi**
```
User akses: http://vyzor-vue-start.test/profile
Status: Belum login
```

#### 2. **Middleware Authenticate Menangkap Request**
```php
// app/Http/Middleware/Authenticate.php
return redirect()->guest(route('login'));
```
- Method `guest()` otomatis menyimpan URL intended (`/profile`) ke session
- User di-redirect ke halaman login

#### 3. **User Login**
```
User login dengan kredensial yang benar
```

#### 4. **Controller Redirect ke Intended URL**
```php
// app/Http/Controllers/Auth/AuthenticatedSessionController.php
return redirect()->intended('/dashboard');
```
- Method `intended()` mengecek apakah ada URL intended di session
- Jika ada → redirect ke URL intended (`/profile`)
- Jika tidak ada → redirect ke fallback (`/dashboard`)

### Contoh Skenario:

#### ✅ Skenario 1: Akses halaman protected dulu
```
1. User akses: /profile (belum login)
2. Sistem simpan intended URL: /profile
3. Redirect ke: /login
4. User login berhasil
5. Redirect ke: /profile ✅
```

#### ✅ Skenario 2: Login langsung
```
1. User akses: /login atau / (belum login)
2. Tidak ada intended URL
3. User login berhasil
4. Redirect ke: /dashboard ✅ (fallback)
```

#### ✅ Skenario 3: Logout kemudian akses protected page
```
1. User logout
2. User akses: /admin/users (belum login)
3. Sistem simpan intended URL: /admin/users
4. Redirect ke: /login
5. User login berhasil
6. Redirect ke: /admin/users ✅
```

### Protected Routes

Semua route di dalam middleware `auth` akan otomatis dilindungi:

```php
// routes/web.php
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', ...);           // Protected
    Route::prefix('profile')->group(...);    // Protected
    Route::prefix('admin')->group(...);      // Protected
    Route::prefix('notifications')->group(...); // Protected
});
```

### Testing

Untuk test fitur ini:

1. **Logout** (jika sudah login)
2. **Akses halaman protected**: http://vyzor-vue-start.test/profile
3. **Akan redirect ke login**: http://vyzor-vue-start.test/login
4. **Login dengan kredensial yang benar**
5. **Setelah login, otomatis redirect ke**: http://vyzor-vue-start.test/profile ✅

### Custom Redirect Logic

Jika ingin menambahkan logic custom untuk redirect, bisa modifikasi di controller:

```php
// app/Http/Controllers/Auth/AuthenticatedSessionController.php

public function store(Request $request)
{
    // ... authentication logic ...
    
    // Custom redirect logic
    if ($user->is_admin) {
        return redirect()->intended('/admin/dashboard');
    }
    
    return redirect()->intended('/dashboard');
}
```

### API Authentication

Untuk API request (JSON), middleware akan return JSON response:

```json
{
    "message": "Unauthenticated."
}
```

HTTP Status: 401
