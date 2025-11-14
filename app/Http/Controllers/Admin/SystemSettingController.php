<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Settings\GeneralSettings;
use App\Settings\EmailSettings;
use App\Settings\SecuritySettings;
use App\Settings\NotificationSettings;
use App\Settings\MaintenanceSettings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class SystemSettingController extends Controller
{
    public function index(
        GeneralSettings $generalSettings,
        EmailSettings $emailSettings,
        SecuritySettings $securitySettings,
        NotificationSettings $notificationSettings,
        MaintenanceSettings $maintenanceSettings
    ) {
        $settings = array_merge(
            $this->toArray($generalSettings),
            $this->toArray($emailSettings),
            $this->toArray($securitySettings),
            $this->toArray($notificationSettings),
            $this->toArray($maintenanceSettings)
        );

        return Inertia::render('Admin/Settings/Index', [
            'settings' => $settings
        ]);
    }

    public function update(Request $request)
    {
        $category = $request->input('category');
        $settings = $request->input('settings');

        switch ($category) {
            case 'general':
                $settingsClass = app(GeneralSettings::class);
                break;
            case 'email':
                $settingsClass = app(EmailSettings::class);
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
                break;
            case 'security':
                $settingsClass = app(SecuritySettings::class);
                break;
            case 'notifications':
                $settingsClass = app(NotificationSettings::class);
                break;
            case 'maintenance':
                $settingsClass = app(MaintenanceSettings::class);
                break;
            default:
                return redirect()->back()->with('error', 'Invalid settings category');
        }

        foreach ($settings as $key => $value) {
            if (property_exists($settingsClass, $key)) {
                $settingsClass->$key = $value;
            }
        }

        $settingsClass->save();

        return redirect()->back()->with('success', 'Settings updated successfully');
    }

    private function toArray($settings): array
    {
        $reflection = new \ReflectionClass($settings);
        $result = [];
        
        foreach ($reflection->getProperties(\ReflectionProperty::IS_PUBLIC) as $property) {
            $key = $property->getName();
            $result[$key] = $settings->$key;
        }
        
        return $result;
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
