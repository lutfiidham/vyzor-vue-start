<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function show()
    {
        $user = auth()->user();
        
        $stats = [
            'loginCount' => $user->loginLogs()->where('successful', true)->count(),
            'activeDays' => $user->loginLogs()
                ->where('successful', true)
                ->distinct('DATE(login_at)')
                ->count(),
        ];
        
        $recentActivity = $user->activities()
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($activity) {
                return [
                    'title' => ucfirst($activity->description),
                    'description' => $activity->subject_type ? class_basename($activity->subject_type) . ' #' . $activity->subject_id : '',
                    'time' => $activity->created_at->diffForHumans(),
                    'icon' => $this->getActivityIcon($activity->description),
                    'color' => $this->getActivityColor($activity->description),
                ];
            });
        
        return Inertia::render('Profile/Show', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'phone' => $user->phone,
                'avatar' => $user->avatar,
                'role' => $user->getRoleNames()->first(),
                'timezone' => $user->timezone,
                'locale' => $user->locale,
                'is_active' => $user->is_active,
                'last_login_at' => $user->last_login_at,
            ],
            'permissions' => $user->getAllPermissions()->pluck('name')->toArray(),
            'stats' => $stats,
            'recentActivity' => $recentActivity,
        ]);
    }
    
    public function edit()
    {
        return Inertia::render('Profile/Edit', [
            'user' => auth()->user()
        ]);
    }
    
    public function update(Request $request)
    {
        $user = auth()->user();
        
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'phone' => 'nullable|string|max:20',
            'timezone' => 'nullable|string',
            'locale' => 'nullable|string',
            'avatar' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
            'remove_avatar' => 'nullable|in:true,false,1,0',
        ]);
        
        // Handle avatar upload
        if ($request->hasFile('avatar')) {
            // Delete old avatar if exists
            if ($user->avatar && file_exists(public_path($user->avatar))) {
                unlink(public_path($user->avatar));
            }
            
            // Store new avatar
            $avatar = $request->file('avatar');
            $filename = 'avatar_' . $user->id . '_' . time() . '.' . $avatar->getClientOriginalExtension();
            $avatar->move(public_path('uploads/avatars'), $filename);
            $validated['avatar'] = '/uploads/avatars/' . $filename;
        }
        
        // Handle avatar removal
        if ($request->input('remove_avatar') == 'true' || $request->input('remove_avatar') == true || $request->input('remove_avatar') == '1') {
            if ($user->avatar && file_exists(public_path($user->avatar))) {
                unlink(public_path($user->avatar));
            }
            $validated['avatar'] = null;
        }
        
        unset($validated['remove_avatar']);
        $user->update($validated);
        
        return redirect()->route('profile.show')
            ->with('success', 'Profile updated successfully');
    }
    
    public function updatePassword(Request $request)
    {
        $validated = $request->validate([
            'current_password' => 'required',
            'password' => 'required|min:8|confirmed',
        ]);
        
        $user = auth()->user();
        
        if (!Hash::check($validated['current_password'], $user->password)) {
            return back()->withErrors(['current_password' => 'Current password is incorrect']);
        }
        
        $user->update([
            'password' => Hash::make($validated['password'])
        ]);
        
        return redirect()->route('profile.show')
            ->with('success', 'Password changed successfully');
    }
    
    private function getActivityIcon($description)
    {
        $icons = [
            'created' => 'ri-add-circle-line',
            'updated' => 'ri-pencil-line',
            'deleted' => 'ri-delete-bin-line',
            'login' => 'ri-login-box-line',
            'logout' => 'ri-logout-box-line',
        ];
        
        return $icons[$description] ?? 'ri-history-line';
    }
    
    private function getActivityColor($description)
    {
        $colors = [
            'created' => 'bg-success-transparent',
            'updated' => 'bg-primary-transparent',
            'deleted' => 'bg-danger-transparent',
            'login' => 'bg-info-transparent',
            'logout' => 'bg-warning-transparent',
        ];
        
        return $colors[$description] ?? 'bg-secondary-transparent';
    }
}
