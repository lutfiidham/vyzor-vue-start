# Analisis & Rekomendasi Keamanan Login

## 📋 Executive Summary

Tanggal: 9 November 2025

Fitur login telah dianalisis untuk best practices dan keamanan. Ditemukan beberapa area yang perlu diperbaiki untuk meningkatkan security posture aplikasi.

---

## 🔍 Current Implementation

### Frontend: `Login.vue`

**✅ YANG SUDAH BAIK:**
1. Menggunakan Inertia Form untuk CSRF protection
2. Loading state (`form.processing`) untuk UX
3. Error handling dengan toast notifications
4. Remember me functionality
5. Client-side validation (required fields)
6. Password input component (tersembunyi)

**⚠️ YANG PERLU DIPERBAIKI:**
1. **Hardcoded Credentials di Source Code** (CRITICAL)
2. Link "Forget Password" mengarah ke demo page
3. Social login buttons tidak berfungsi
4. Tidak ada rate limiting UI feedback

### Backend: `AuthenticatedSessionController.php`

**✅ YANG SUDAH BAIK:**
1. Server-side validation
2. Session regeneration setelah login
3. CSRF protection via Laravel middleware
4. Support login dengan email atau username
5. Remember me functionality

**⚠️ YANG PERLU DIPERBAIKI:**
1. **Tidak ada rate limiting/throttling**
2. **Tidak ada account lockout mechanism**
3. Tidak ada logging untuk login attempts
4. Tidak ada 2FA support
5. Response error terlalu generic

---

## 🚨 CRITICAL ISSUES

### 1. Hardcoded Credentials (SEVERITY: CRITICAL)

**File:** `Login.vue` (Line 17-21)

**Current Code:**
```javascript
const form = useForm({
  username: 'spruko',      // ❌ HARDCODED
  password: 'spruko1234',  // ❌ HARDCODED - EXPOSED IN SOURCE
  remember: false
})
```

**Risk:**
- Credentials exposed dalam source code
- Visible di Git history
- Dapat dilihat siapa saja yang akses repository
- Dapat dilihat di browser DevTools
- Production credentials bisa bocor

**Fix:**
```javascript
const form = useForm({
  username: '',  // ✅ Empty by default
  password: '',  // ✅ Empty by default
  remember: false
})
```

**Alternative (Development Only):**
```javascript
const form = useForm({
  username: import.meta.env.DEV ? 'demo@example.com' : '',
  password: import.meta.env.DEV ? 'password' : '',
  remember: false
})
```

### 2. No Rate Limiting (SEVERITY: HIGH)

**Current State:**
- Tidak ada rate limiting di route `/login`
- Attacker bisa melakukan unlimited login attempts
- Vulnerable terhadap brute force attacks

**Risk:**
- Brute force attacks
- Credential stuffing attacks
- DDoS via login endpoint
- Account enumeration

**Fix Recommendation:**

**Option 1: Route Level Throttling**
```php
// routes/web.php
Route::middleware('guest')->group(function () {
    Route::get('/', [AuthenticatedSessionController::class, 'create'])
        ->name('login');
    
    Route::post('/login', [AuthenticatedSessionController::class, 'store'])
        ->middleware('throttle:5,1'); // 5 attempts per minute
});
```

**Option 2: Controller Level with Custom Message**
```php
// AuthenticatedSessionController.php
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;

public function store(Request $request)
{
    $throttleKey = Str::lower($request->input('username')).'|'.$request->ip();
    
    if (RateLimiter::tooManyAttempts($throttleKey, 5)) {
        $seconds = RateLimiter::availableIn($throttleKey);
        
        throw ValidationException::withMessages([
            'username' => "Too many login attempts. Please try again in {$seconds} seconds.",
        ]);
    }
    
    $request->validate([
        'username' => 'required|string',
        'password' => 'required|string',
    ]);
    
    $loginField = filter_var($request->username, FILTER_VALIDATE_EMAIL) ? 'email' : 'name';
    
    if (!Auth::attempt([$loginField => $request->username, 'password' => $request->password], $request->boolean('remember'))) {
        RateLimiter::hit($throttleKey, 60); // Block for 60 seconds
        
        throw ValidationException::withMessages([
            'username' => __('auth.failed'),
        ]);
    }
    
    RateLimiter::clear($throttleKey);
    $request->session()->regenerate();
    
    return Inertia::location(url('/dashboard'));
}
```

### 3. No Account Lockout (SEVERITY: MEDIUM)

**Current State:**
- Tidak ada mekanisme lockout setelah multiple failed attempts
- Akun tidak ter-protect dari sustained attacks

**Recommendation:**

**Create Migration:**
```php
// database/migrations/xxxx_add_lockout_fields_to_users_table.php
public function up()
{
    Schema::table('users', function (Blueprint $table) {
        $table->integer('failed_login_attempts')->default(0);
        $table->timestamp('locked_until')->nullable();
    });
}
```

**Update Controller:**
```php
public function store(Request $request)
{
    $request->validate([
        'username' => 'required|string',
        'password' => 'required|string',
    ]);
    
    $loginField = filter_var($request->username, FILTER_VALIDATE_EMAIL) ? 'email' : 'name';
    $user = User::where($loginField, $request->username)->first();
    
    // Check if account is locked
    if ($user && $user->locked_until && $user->locked_until->isFuture()) {
        throw ValidationException::withMessages([
            'username' => 'Account is locked. Please try again later.',
        ]);
    }
    
    if (!Auth::attempt([$loginField => $request->username, 'password' => $request->password], $request->boolean('remember'))) {
        // Increment failed attempts
        if ($user) {
            $user->increment('failed_login_attempts');
            
            // Lock account after 5 failed attempts
            if ($user->failed_login_attempts >= 5) {
                $user->locked_until = now()->addMinutes(30);
                $user->save();
            }
        }
        
        throw ValidationException::withMessages([
            'username' => __('auth.failed'),
        ]);
    }
    
    // Reset failed attempts on successful login
    if ($user) {
        $user->update([
            'failed_login_attempts' => 0,
            'locked_until' => null
        ]);
    }
    
    $request->session()->regenerate();
    return Inertia::location(url('/dashboard'));
}
```

---

## ⚠️ MEDIUM PRIORITY ISSUES

### 4. No Login Attempt Logging

**Issue:**
- Tidak ada audit trail untuk login attempts
- Sulit detect suspicious activities
- Tidak ada forensic data jika terjadi breach

**Recommendation:**

**Create Migration:**
```php
// database/migrations/xxxx_create_login_attempts_table.php
Schema::create('login_attempts', function (Blueprint $table) {
    $table->id();
    $table->string('username');
    $table->string('ip_address');
    $table->string('user_agent')->nullable();
    $table->boolean('successful')->default(false);
    $table->timestamp('attempted_at');
    $table->index(['username', 'attempted_at']);
    $table->index('ip_address');
});
```

**Log Every Attempt:**
```php
use App\Models\LoginAttempt;

// In store() method
LoginAttempt::create([
    'username' => $request->username,
    'ip_address' => $request->ip(),
    'user_agent' => $request->userAgent(),
    'successful' => Auth::check(),
    'attempted_at' => now(),
]);
```

### 5. Generic Error Messages

**Current:**
```php
throw ValidationException::withMessages([
    'username' => __('auth.failed'),
]);
```

**Issue:**
- Error message sama untuk wrong username atau wrong password
- Bisa digunakan untuk account enumeration

**Best Practice (Keep as is):**
- ✅ Generic error message is actually GOOD for security
- ✅ Prevents account enumeration
- ✅ Attacker tidak tahu username valid atau tidak

**Optional Enhancement:**
```php
throw ValidationException::withMessages([
    'username' => 'Invalid credentials. Please check your username and password.',
]);
```

### 6. Missing Two-Factor Authentication (2FA)

**Recommendation:**

**Install Package:**
```bash
composer require pragmarx/google2fa-laravel
```

**Add to User Model:**
```php
protected $fillable = [
    'name',
    'email',
    'password',
    'google2fa_secret',
    'google2fa_enabled',
];

protected $casts = [
    'google2fa_enabled' => 'boolean',
];
```

**Update Login Flow:**
```php
public function store(Request $request)
{
    // ... existing validation and auth attempt ...
    
    if (Auth::attempt($credentials, $request->boolean('remember'))) {
        $user = Auth::user();
        
        // Check if 2FA is enabled
        if ($user->google2fa_enabled) {
            Auth::logout(); // Logout temporarily
            session(['2fa:user:id' => $user->id]);
            
            return Inertia::render('Auth/TwoFactorChallenge');
        }
        
        $request->session()->regenerate();
        return Inertia::location(url('/dashboard'));
    }
    
    throw ValidationException::withMessages([
        'username' => __('auth.failed'),
    ]);
}
```

---

## 🔒 ADDITIONAL SECURITY RECOMMENDATIONS

### 7. Password Policy

**Add to Validation:**
```php
$request->validate([
    'username' => 'required|string',
    'password' => ['required', 'string', Password::min(8)
        ->mixedCase()
        ->numbers()
        ->symbols()
        ->uncompromised()
    ],
]);
```

### 8. Session Security

**config/session.php:**
```php
return [
    'lifetime' => 120, // 2 hours
    'expire_on_close' => true,
    'secure' => env('SESSION_SECURE_COOKIE', true), // HTTPS only
    'http_only' => true, // Prevent XSS
    'same_site' => 'lax', // CSRF protection
];
```

### 9. HTTPS Enforcement

**app/Http/Middleware/TrustProxies.php:**
```php
protected $proxies = '*';
protected $headers = Request::HEADER_X_FORWARDED_FOR | 
                     Request::HEADER_X_FORWARDED_HOST | 
                     Request::HEADER_X_FORWARDED_PORT | 
                     Request::HEADER_X_FORWARDED_PROTO;
```

**.env:**
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com
SESSION_SECURE_COOKIE=true
```

### 10. Email Verification

**Add to User Model:**
```php
use Illuminate\Contracts\Auth\MustVerifyEmail;

class User extends Authenticatable implements MustVerifyEmail
{
    // ...
}
```

**Update Route:**
```php
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
```

---

## 🛠️ IMPLEMENTATION CHECKLIST

### Immediate (CRITICAL):
- [ ] Remove hardcoded credentials from Login.vue
- [ ] Implement rate limiting (5 attempts per minute)
- [ ] Add login attempt logging
- [ ] Test rate limiting functionality

### Short Term (HIGH):
- [ ] Implement account lockout mechanism
- [ ] Add IP blocking for suspicious activities
- [ ] Create admin panel untuk monitor login attempts
- [ ] Add email notifications for suspicious logins

### Medium Term (MEDIUM):
- [ ] Implement 2FA (Google Authenticator)
- [ ] Add "Remember this device" functionality
- [ ] Implement session management (active sessions)
- [ ] Add "Force logout all devices" feature

### Long Term (LOW):
- [ ] Implement biometric authentication
- [ ] Add OAuth providers (Google, Facebook)
- [ ] Implement passwordless login (magic links)
- [ ] Add behavioral analytics untuk detect anomalies

---

## 📊 SECURITY SCORECARD

| Category | Current Status | Target |
|----------|---------------|--------|
| CSRF Protection | ✅ Implemented | ✅ |
| Rate Limiting | ❌ Missing | ⚠️ Critical |
| Account Lockout | ❌ Missing | ⚠️ High |
| Login Logging | ❌ Missing | ⚠️ High |
| 2FA Support | ❌ Missing | 📋 Medium |
| Session Security | ✅ Good | ✅ |
| Password Policy | ⚠️ Basic | 📋 Medium |
| HTTPS Enforcement | ⚠️ Depends on env | ✅ |
| Email Verification | ❌ Not required | 📋 Low |

**Overall Security Score: 5/10** ⚠️

---

## 🎯 QUICK WINS (Do This First)

### 1. Remove Hardcoded Credentials (5 minutes)
```javascript
// Login.vue
const form = useForm({
  username: '',
  password: '',
  remember: false
})
```

### 2. Add Rate Limiting (10 minutes)
```php
// routes/web.php
Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->middleware('throttle:5,1');
```

### 3. Add Basic Logging (15 minutes)
```php
// In store() method
Log::info('Login attempt', [
    'username' => $request->username,
    'ip' => $request->ip(),
    'success' => Auth::check(),
]);
```

**Total Time: ~30 minutes for major security improvement!**

---

## 📚 Resources

- [Laravel Security Best Practices](https://laravel.com/docs/security)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [Laravel Rate Limiting](https://laravel.com/docs/rate-limiting)
- [Google2FA Laravel Package](https://github.com/antonioribeiro/google2fa-laravel)

---

*Analisis dilakukan: 9 November 2025*
*Priority: CRITICAL - Implement immediately*
