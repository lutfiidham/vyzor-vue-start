# Database Seeders

Dokumentasi lengkap untuk semua seeder yang tersedia di aplikasi ini.

## Daftar Seeder

### 1. RolesAndPermissionsSeeder
Membuat roles dan permissions untuk sistem authorization menggunakan Spatie Laravel Permission.

**Roles yang dibuat:**
- **Super Admin**: Akses penuh ke seluruh sistem termasuk operasi kritis
- **Admin**: Akses hampir penuh kecuali operasi sistem kritis
- **Manager**: Dapat mengelola users dan melihat reports
- **User**: Akses dasar untuk pengguna biasa

**Permissions yang dibuat:**
- Users Management: view, create, edit, delete, export, import
- Roles Management: view, create, edit, delete
- Permissions: view, assign
- Menus: view, create, edit, delete
- Settings: view, edit
- Activity Logs: view, delete, export
- Files: view, upload, download, delete
- Notifications: view, create, delete
- API Keys: view, create, delete
- Dashboard: view
- Reports: view, export
- System: maintenance, backup, restore

### 2. AdminUserSeeder
Membuat user default untuk setiap role.

**Users yang dibuat:**
| Role | Email | Password |
|------|-------|----------|
| Super Admin | superadmin@vyzor.test | password |
| Admin | admin@vyzor.test | password |
| Manager | manager@vyzor.test | password |
| User | user@vyzor.test | password |

### 3. MenuSeeder
Membuat menu navigasi dan mengassign ke role yang sesuai.

**Menu Structure:**
- **MAIN**
  - Dashboard (All roles)
- **ADMINISTRATION** (Super Admin, Admin, Manager)
  - User Management
  - Roles & Permissions (Super Admin, Admin only)
  - Menu Management (Super Admin, Admin only)
  - Activity Logs
  - System Settings
- **ACCOUNT** (All roles)
  - My Profile

### 4. SettingsSeeder
Membuat default settings menggunakan Spatie Laravel Settings.

**Settings Groups:**
- **General Settings**: app_name, app_url, admin_email, timezone, date_format, app_description
- **Email Settings**: mail_driver, mail_host, mail_port, mail_encryption, credentials
- **Security Settings**: two_factor_enabled, session_lifetime, login_attempts, lockout_duration, password rules
- **Notification Settings**: notify_user_registration, notify_password_reset, notify_login, dll
- **Maintenance Settings**: maintenance_mode, maintenance_message, maintenance_end

### 5. ActivityLogSeeder
Membuat sample activity logs untuk testing (opsional).

## Cara Menggunakan

### Menjalankan Semua Seeder
```bash
php artisan db:seed
```

### Menjalankan Seeder Spesifik
```bash
php artisan db:seed --class=RolesAndPermissionsSeeder
php artisan db:seed --class=AdminUserSeeder
php artisan db:seed --class=MenuSeeder
php artisan db:seed --class=SettingsSeeder
php artisan db:seed --class=ActivityLogSeeder
```

### Fresh Migration dengan Seeder
```bash
php artisan migrate:fresh --seed
```

### Fresh Migration Tanpa Activity Log Seeder
Jika tidak ingin data sample activity logs:
```bash
php artisan migrate:fresh
php artisan db:seed --class=RolesAndPermissionsSeeder
php artisan db:seed --class=AdminUserSeeder
php artisan db:seed --class=MenuSeeder
php artisan db:seed --class=SettingsSeeder
```

## Urutan Eksekusi

Seeder dijalankan dalam urutan berikut (penting untuk referential integrity):

1. **RolesAndPermissionsSeeder** - Membuat roles dan permissions terlebih dahulu
2. **AdminUserSeeder** - Membuat users dan assign roles
3. **MenuSeeder** - Membuat menus dan assign ke roles
4. **SettingsSeeder** - Membuat default settings
5. **ActivityLogSeeder** - Membuat sample activity logs (opsional)

## Catatan Penting

- Semua seeder menggunakan `firstOrCreate()` untuk mencegah duplikasi
- Password default untuk semua user adalah: **password**
- Segera ubah password setelah deployment ke production
- ActivityLogSeeder hanya untuk development/testing
- Settings menggunakan Spatie Laravel Settings untuk type-safe access
- Roles menggunakan spasi dalam nama sesuai best practice

## Spatie Laravel Settings

Settings menggunakan Spatie Laravel Settings package dengan Settings classes di `app/Settings/`:
- `GeneralSettings.php`
- `EmailSettings.php`
- `SecuritySettings.php`
- `NotificationSettings.php`
- `MaintenanceSettings.php`

Akses settings:
```php
$general = app(GeneralSettings::class);
echo $general->app_name;

// Update settings
$general->app_name = 'New Name';
$general->save();
```

## Development vs Production

**Development:**
```bash
php artisan migrate:fresh --seed
```

**Production:**
```bash
php artisan migrate
php artisan db:seed --class=RolesAndPermissionsSeeder
php artisan db:seed --class=SettingsSeeder
# Buat admin user manual atau via artisan command
```

Jangan menjalankan ActivityLogSeeder di production!
