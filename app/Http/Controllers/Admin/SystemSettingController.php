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
                    'category' => $category
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
