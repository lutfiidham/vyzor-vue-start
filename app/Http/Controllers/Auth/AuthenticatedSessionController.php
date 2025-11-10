<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Login');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(Request $request)
    {
        // Validate input
        $request->validate([
            'username' => ['required', 'string', 'max:255'],
            'password' => ['required', 'string'],
        ]);

        // Rate limiting key
        $throttleKey = Str::transliterate(Str::lower($request->input('username')).'|'.$request->ip());

        // Check rate limiting (5 attempts per minute)
        if (RateLimiter::tooManyAttempts($throttleKey, 5)) {
            $seconds = RateLimiter::availableIn($throttleKey);
            
            throw ValidationException::withMessages([
                'username' => trans('auth.throttle', [
                    'seconds' => $seconds,
                    'minutes' => ceil($seconds / 60),
                ]),
            ]);
        }

        // Determine login field (email or username)
        $loginField = filter_var($request->username, FILTER_VALIDATE_EMAIL) ? 'email' : 'name';
        
        // Find user
        $user = User::where($loginField, $request->username)->first();

        // Check if user exists and password is correct
        if (!$user || !Auth::attempt([
            $loginField => $request->username, 
            'password' => $request->password
        ], $request->boolean('remember'))) {
            
            // Increment rate limiter on failed attempt
            RateLimiter::hit($throttleKey, 60);

            throw ValidationException::withMessages([
                'username' => __('auth.failed'),
            ]);
        }

        // Clear rate limiter on successful login
        RateLimiter::clear($throttleKey);

        // Update last login timestamp
        $user->update([
            'last_login_at' => now(),
        ]);

        // Regenerate session to prevent session fixation
        $request->session()->regenerate();

        // Redirect to dashboard using Inertia (smooth transition, no white flash)
        return redirect()->intended('/dashboard');
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
