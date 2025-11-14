# 🚀 Menu Management - Quick Reference

> Fast reference guide for common tasks and commands

---

## 📋 Table of Contents

1. [Common Tasks](#-common-tasks)
2. [Quick Commands](#-quick-commands)
3. [File Locations](#-file-locations)
4. [Troubleshooting](#-troubleshooting)
5. [Permission Matrix](#-permission-matrix)

---

## 🎯 Common Tasks

### Assign Menu to Role

**Via UI (Recommended):**
```
1. Navigate to: /admin/menus
2. Click "Edit" on the menu item
3. Check the role(s) in "Roles" section
4. Click "Update"
✅ Done!
```

**Via Tinker:**
```bash
php artisan tinker
```
```php
$menu = Menu::find(1);
$role = Role::find(2);
$menu->roles()->attach($role->id);
Artisan::call('cache:clear');
```

**Via SQL:**
```sql
INSERT INTO menu_role (menu_id, role_id, created_at) 
VALUES (1, 2, NOW());
```

---

### Remove Menu Access from Role

**Via UI:**
```
1. Go to: /admin/menus
2. Click "Edit" on the menu
3. Uncheck the role
4. Click "Update"
```

**Via Tinker:**
```php
$menu = Menu::find(1);
$role = Role::find(2);
$menu->roles()->detach($role->id);
Artisan::call('cache:clear');
```

---

### Clear Menu Cache

**Method 1 - Via UI:**
```
1. Go to: /admin/menus
2. Click "Clear Cache" button
✅ Cache cleared!
```

**Method 2 - Via Command:**
```bash
php artisan cache:clear
```

**Method 3 - Via Tinker:**
```php
Artisan::call('cache:clear');
```

---

### Create New Menu

**Via UI:**
```
1. Go to: /admin/menus
2. Click "Create Menu"
3. Fill in:
   - Title (required)
   - Parent Menu (optional)
   - Icon (SVG code)
   - Path (e.g., /admin/users)
   - Type (link/sub/menutitle)
   - Order (number for sorting)
   - Status (Active/Inactive)
4. Select roles (at least one)
5. Click "Save"
```

---

### Toggle Menu Status

**Via UI:**
```
1. Go to: /admin/menus
2. Find the menu item
3. Click the toggle switch
✅ Status changed!
```

---

### Check User's Menus

**Via Tinker:**
```php
$user = User::find(1);
$menuService = app(\App\Services\MenuService::class);
$menus = $menuService->getMenusByRoles(
    $user->roles->pluck('id')->toArray()
);
dd($menus);
```

---

## 💻 Quick Commands

### Cache Management
```bash
# Clear all cache
php artisan cache:clear

# Clear specific cache key
php artisan tinker
>>> Cache::forget('user_menus_1');
```

### Database Operations
```bash
# Re-run menu seeder
php artisan db:seed --class=MenuSeeder

# Re-run permission seeder
php artisan db:seed --class=PermissionSeeder

# Migrate fresh with seeders
php artisan migrate:fresh --seed
```

### Inspection Commands
```bash
# View all routes
php artisan route:list --name=admin.menus

# Check permissions
php artisan permission:show

# Open Tinker
php artisan tinker
```

### Tinker Helpers
```php
// Get all menus
Menu::all();

// Get menus with roles
Menu::with('roles')->get();

// Get active menus
Menu::active()->get();

// Get root menus (no parent)
Menu::root()->get();

// Get menu with children
Menu::with('children')->find(1);

// Get user's roles
$user = User::find(1);
$user->roles->pluck('name');

// Check if user has role
$user->hasRole('admin');

// Check menu assignment
$menu = Menu::find(1);
$menu->roles->pluck('name');
```

---

## 📁 File Locations

### Backend Files
```
app/
├── Models/
│   └── Menu.php                        # Menu model
├── Services/
│   └── MenuService.php                 # Menu business logic
├── Http/
│   ├── Controllers/Admin/
│   │   └── MenuController.php          # Menu CRUD controller
│   └── Middleware/
│       └── ShareMenuData.php           # Share menu to all pages
└── Policies/
    └── MenuPolicy.php                  # Authorization (if exists)

database/
├── migrations/
│   ├── *_create_menus_table.php
│   └── *_create_menu_role_table.php
└── seeders/
    └── MenuSeeder.php
```

### Frontend Files
```
resources/js/
├── Pages/Admin/Menus/
│   └── Index.vue                       # Menu management page
└── Layouts/
    └── components/
        └── sidebar/
            └── nav.js                   # Menu rendering (if still used)
```

### Configuration
```
config/
└── cache.php                           # Cache configuration

.env                                    # Environment variables
```

---

## 🔧 Troubleshooting

### Problem: Menu not showing after update

**Solution:**
```bash
# Clear cache
php artisan cache:clear

# Check if menu is active
php artisan tinker
>>> Menu::find(ID)->is_active;

# Check role assignment
>>> Menu::find(ID)->roles->pluck('name');
```

---

### Problem: User can't see menu they should have access to

**Checklist:**
1. ✅ Is menu `is_active = true`?
2. ✅ Is menu assigned to user's role?
3. ✅ Does user have the role?
4. ✅ Is cache cleared?

**Check via Tinker:**
```php
$user = User::find(1);
$menu = Menu::find(1);

// Check user roles
$user->roles->pluck('name');

// Check menu's roles
$menu->roles->pluck('name');

// Check if menu is active
$menu->is_active;

// Get user's menus
$menuService = app(\App\Services\MenuService::class);
$menus = $menuService->getMenusByRoles($user->roles->pluck('id')->toArray());
```

---

### Problem: 403 Forbidden when accessing /admin/menus

**Cause:** User doesn't have `menus.view` permission

**Solution:**
```bash
php artisan tinker
```
```php
$user = User::find(1);
$user->givePermissionTo('menus.view');

// Or assign admin role
$user->assignRole('admin');
```

---

### Problem: Duplicate menus showing

**Solution:**
```bash
php artisan tinker
```
```php
// Check for duplicate relations
DB::table('menu_role')
    ->where('menu_id', 1)
    ->where('role_id', 1)
    ->count(); // Should be 1

// Remove duplicates
DB::table('menu_role')
    ->where('menu_id', 1)
    ->where('role_id', 1)
    ->delete();

// Re-attach properly
$menu = Menu::find(1);
$role = Role::find(1);
$menu->roles()->syncWithoutDetaching($role->id);

// Clear cache
Artisan::call('cache:clear');
```

---

### Problem: Cache not clearing

**Solution:**
```bash
# Try all cache clear methods
php artisan cache:clear
php artisan config:clear
php artisan view:clear
php artisan route:clear

# If using Redis
php artisan redis:clear

# Manual clear via Tinker
php artisan tinker
>>> Cache::flush();
```

---

## 🔐 Permission Matrix

### Menu Management Permissions

| Permission | Description | Route Example |
|------------|-------------|---------------|
| `menus.view` | View menu list | GET /admin/menus |
| `menus.create` | Create new menu | POST /admin/menus |
| `menus.edit` | Edit existing menu | PUT /admin/menus/{id} |
| `menus.delete` | Delete menu | DELETE /admin/menus/{id} |

### Role Access

| Role | menus.view | menus.create | menus.edit | menus.delete |
|------|------------|--------------|------------|--------------|
| Admin | ✅ | ✅ | ✅ | ✅ |
| Manager | ❌ | ❌ | ❌ | ❌ |
| Editor | ❌ | ❌ | ❌ | ❌ |
| User | ❌ | ❌ | ❌ | ❌ |

---

## 📊 Database Queries

### Common Queries

**Get all active menus:**
```sql
SELECT * FROM menus WHERE is_active = 1;
```

**Get menus for specific role:**
```sql
SELECT m.* 
FROM menus m
INNER JOIN menu_role mr ON m.id = mr.menu_id
WHERE mr.role_id = 1
AND m.is_active = 1
ORDER BY m.order ASC;
```

**Get menu with role names:**
```sql
SELECT m.title, GROUP_CONCAT(r.name) as roles
FROM menus m
LEFT JOIN menu_role mr ON m.id = mr.menu_id
LEFT JOIN roles r ON mr.role_id = r.id
GROUP BY m.id;
```

**Check cache keys:**
```sql
SELECT * FROM cache WHERE key LIKE '%menu%';
```

---

## 🎨 Icon Management

### Using SVG Icons

**Phosphor Icons (Current system):**
```html
<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none"/>
    <!-- icon paths here -->
</svg>
```

**Finding Icons:**
- Website: https://phosphoricons.com/
- Copy SVG code
- Paste into Icon field in menu form

---

## 🔄 Cache Keys Reference

### Format
```
user_menus_{role_id_1}_{role_id_2}
```

### Examples
- Single role: `user_menus_1`
- Multiple roles: `user_menus_1_2_3`

### Cache Duration
- TTL: 3600 seconds (1 hour)
- Auto-clear: On menu create/update/delete
- Manual clear: Via UI button or command

---

## 📞 Emergency Commands

### Reset Everything
```bash
# DANGER: This will reset all menu data!
php artisan migrate:refresh --path=database/migrations/*_create_menus_table.php
php artisan migrate:refresh --path=database/migrations/*_create_menu_role_table.php
php artisan db:seed --class=MenuSeeder
php artisan cache:clear
```

### Backup Before Reset
```bash
# Export menus to SQL
php artisan tinker
>>> $menus = Menu::with('roles')->get()->toJson();
>>> File::put('menu_backup.json', $menus);
```

---

## 💡 Tips & Tricks

### Performance Tips
1. ✅ Always clear cache after bulk changes
2. ✅ Use `syncWithoutDetaching()` for role assignment
3. ✅ Index frequently queried columns
4. ✅ Use eager loading: `Menu::with('roles')->get()`

### Best Practices
1. ✅ Use UI for menu management (safer)
2. ✅ Test changes in staging first
3. ✅ Document custom menu structures
4. ✅ Keep menu order increments of 10 (10, 20, 30...)
5. ✅ Deactivate instead of delete

### Don'ts
1. ❌ Don't delete menus that are actively used
2. ❌ Don't skip cache clearing
3. ❌ Don't create circular parent relationships
4. ❌ Don't hardcode menu items in code
5. ❌ Don't forget to assign at least one role

---

## 📚 Related Documentation

- [Full System Documentation](./MENU_MANAGEMENT_SYSTEM.md)
- [Implementation Status](./MENU_IMPLEMENTATION_STATUS.md)
- [Flexibility Guide](./MENU_FLEXIBILITY_GUIDE.md)
- [RBAC Implementation](./RBAC_IMPLEMENTATION.md)
- [Main Hub](./README.md)

---

## 🆘 Getting Help

1. **Check this quick reference first**
2. **Review [Troubleshooting](#-troubleshooting) section**
3. **See detailed docs in [README.md](./README.md)**
4. **Check Laravel logs:** `storage/logs/laravel.log`
5. **Enable debug mode:** `.env` set `APP_DEBUG=true`

---

<div align="center">

**Quick Reference Version 1.0** | Last Updated: 2025-11-13

[← Back to Menu Management Hub](./README.md)

</div>
