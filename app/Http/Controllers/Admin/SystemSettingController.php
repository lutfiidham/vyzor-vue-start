<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SystemSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class SystemSettingController extends Controller
{
    public function index()
    {
        $settings = SystemSetting::pluck('value', 'key')->toArray();
        
        // Merge with .env config values sebagai fallback
        $settings = array_merge([
            // General Settings
            'app_name' => config('app.name'),
            'app_url' => config('app.url'),
            'admin_email' => config('mail.from.address', 'admin@example.com'),
            'timezone' => config('app.timezone'),
            'date_format' => 'Y-m-d',
            'app_description' => '',
            
            // Email Settings
            'mail_driver' => config('mail.default'),
            'mail_host' => config('mail.mailers.smtp.host'),
            'mail_port' => config('mail.mailers.smtp.port'),
            'mail_encryption' => config('mail.mailers.smtp.encryption'),
            'mail_username' => config('mail.mailers.smtp.username'),
            'mail_password' => config('mail.mailers.smtp.password'),
            'mail_from_address' => config('mail.from.address'),
            'mail_from_name' => config('mail.from.name'),
            
            // Security Settings
            'two_factor_enabled' => false,
            'session_lifetime' => config('session.lifetime', 120),
            'login_attempts' => 5,
            'lockout_duration' => 15,
            'password_min_length' => 8,
            'password_complexity' => false,
            
            // Notification Settings
            'notify_user_registration' => true,
            'notify_password_reset' => true,
            'notify_login' => false,
            'notify_suspicious_activity' => true,
            'notify_maintenance' => true,
            'notify_updates' => true,
            
            // Maintenance Settings
            'maintenance_mode' => app()->isDownForMaintenance(),
            'maintenance_message' => 'We are currently performing scheduled maintenance. We will be back shortly.',
            'maintenance_end' => '',
        ], $settings);

        return Inertia::render('Admin/Settings/Index', [
            'settings' => $settings
        ]);
    }

    public function update(Request $request)
    {
        $category = $request->input('category');
        $settings = $request->input('settings');

        foreach ($settings as $key => $value) {
            SystemSetting::updateOrCreate(
                ['key' => $key],
                [
                    'value' => is_bool($value) ? ($value ? '1' : '0') : $value,
                    'group' => $category
                ]
            );
        }

        // Update .env file for certain settings
        if ($category === 'email') {
            $this->updateEnvFile([
                'MAIL_MAILER' => $settings['mail_driver'] ?? '',
                'MAIL_HOST' => $settings['mail_host'] ?? '',
                'MAIL_PORT' => $settings['mail_port'] ?? '',
                'MAIL_USERNAME' => $settings['mail_username'] ?? '',
                'MAIL_PASSWORD' => $settings['mail_password'] ?? '',
                'MAIL_ENCRYPTION' => $settings['mail_encryption'] ?? '',
                'MAIL_FROM_ADDRESS' => $settings['mail_from_address'] ?? '',
                'MAIL_FROM_NAME' => $settings['mail_from_name'] ?? '',
            ]);
        }

        return redirect()->back()->with('success', 'Settings updated successfully');
    }

    public function testEmail(Request $request)
    {
        try {
            Mail::raw('This is a test email from your application.', function ($message) use ($request) {
                $message->to($request->input('mail_from_address'))
                    ->subject('Test Email');
            });

            return redirect()->back()->with('success', 'Test email sent successfully');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Failed to send test email: ' . $e->getMessage());
        }
    }

    public function clearCache(Request $request)
    {
        $type = $request->input('type');

        try {
            switch ($type) {
                case 'application':
                    Artisan::call('cache:clear');
                    break;
                case 'route':
                    Artisan::call('route:clear');
                    break;
                case 'config':
                    Artisan::call('config:clear');
                    break;
                case 'view':
                    Artisan::call('view:clear');
                    break;
                case 'all':
                    Artisan::call('cache:clear');
                    Artisan::call('route:clear');
                    Artisan::call('config:clear');
                    Artisan::call('view:clear');
                    break;
            }

            return redirect()->back()->with('success', ucfirst($type) . ' cache cleared successfully');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Failed to clear cache: ' . $e->getMessage());
        }
    }

    private function updateEnvFile(array $data)
    {
        $envFile = app()->environmentFilePath();
        $str = file_get_contents($envFile);

        foreach ($data as $key => $value) {
            $str = preg_replace(
                "/^{$key}=.*/m",
                "{$key}={$value}",
                $str
            );
        }

        file_put_contents($envFile, $str);
    }
}
