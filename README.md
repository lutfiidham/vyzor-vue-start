# 🚀 Vyzor Vue Start

<p align="center">
  <strong>Production-Ready Laravel + Vue.js Application Starter</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#demo-credentials">Demo</a>
</p>

---

## ✨ Features

### 🔐 Authentication & Authorization

- ✅ Complete authentication system with email verification
- ✅ Two-factor authentication (2FA)
- ✅ Role-based access control (RBAC)
- ✅ Permission management system
- ✅ Account lockout protection
- ✅ Login tracking with device information

### 👥 User Management

- ✅ Full CRUD operations
- ✅ Bulk actions (activate, deactivate, delete)
- ✅ Advanced filtering and search
- ✅ Export/Import functionality (CSV, Excel, PDF)
- ✅ User activity tracking

### 📊 Dashboard & Analytics

- ✅ Interactive dashboard with real-time statistics
- ✅ Customizable widgets
- ✅ Charts and graphs
- ✅ Key performance indicators

### 🔔 Notification System

- ✅ In-app notifications
- ✅ Email notifications
- ✅ Real-time updates
- ✅ Notification preferences

### 📁 File Management

- ✅ Drag & drop upload
- ✅ Folder structure
- ✅ File preview
- ✅ Cloud storage integration ready

### ⚙️ System Settings

- ✅ **Spatie Laravel Settings** - Type-safe settings management
- ✅ Application configuration (name, URL, timezone, etc)
- ✅ Email settings (SMTP configuration)
- ✅ Security settings (2FA, session timeout)
- ✅ Theme customization
- ✅ Multi-language support ready
- ✅ Maintenance mode
- ✅ **Dynamic page titles** - Auto-update from settings
- ✅ Settings accessible globally in Vue components

### 📝 Activity Logs

- ✅ Automatic activity tracking
- ✅ User action logging
- ✅ Model change tracking
- ✅ Advanced filtering

### 🔑 API Management

- ✅ RESTful API endpoints
- ✅ API key management
- ✅ Rate limiting
- ✅ API documentation

### 🛡️ Security

- ✅ CSRF protection
- ✅ XSS protection
- ✅ SQL injection prevention
- ✅ Security headers
- ✅ Password strength requirements

### 🎨 Modern UI/UX

- ✅ Responsive design
- ✅ Dark mode ready
- ✅ Smooth animations
- ✅ Loading states
- ✅ Toast notifications

---

## 🛠️ Tech Stack

### Backend

- **Laravel 12** - PHP Framework
- **PHP 8.2+** - Programming Language
- **MySQL/PostgreSQL/SQLite** - Database
- **Redis** - Caching & Queues

### Frontend

- **Vue 3** - JavaScript Framework (Composition API)
- **Inertia.js** - Modern Monolith
- **Bootstrap CSS** - CSS
- **Vite** - Build Tool

### Key Packages

- **Laravel Sanctum** - API Authentication
- **Laravel Fortify** - Authentication Backend
- **Spatie Laravel Permission** - Roles & Permissions
- **Spatie Laravel Settings** - Type-safe Settings Management
- **Spatie Laravel Activitylog** - Activity Tracking
- **Spatie Laravel MediaLibrary** - File Management
- **Maatwebsite Excel** - Excel Import/Export
- **Barryvdh DomPDF** - PDF Generation

---

## ⚡ Quick Start

### Requirements

- PHP >= 8.2
- Composer
- Node.js >= 18
- MySQL/PostgreSQL/SQLite

### Installation

```bash
# 1. Clone repository
git clone <repository-url> vyzor-vue-start
cd vyzor-vue-start

# 2. Install dependencies
composer install
npm install

# 3. Environment setup
cp .env.example .env
php artisan key:generate

# 4. Database setup
php artisan migrate:fresh --seed

# 5. Storage link
php artisan storage:link

# 6. Start development servers
composer dev
```

The application will be available at `http://localhost:8000`

---

## 👤 Demo Credentials

### Admin User

- **Email**: `admin@vyzor.test`
- **Password**: `password`
- **Roles**: Admin (Full Access)

### Manager User

- **Email**: `manager@vyzor.test`
- **Password**: `password`
- **Roles**: Manager (Limited Access)

### Regular User

- **Email**: `user@vyzor.test`
- **Password**: `password`
- **Roles**: User (Basic Access)

⚠️ **Important**: Change these passwords in production!

---

## 📚 Documentation

Comprehensive documentation available in the `/documentations` folder:

- **[Installation Guide](documentations/INSTALLATION.md)** - Detailed setup instructions
- **[User Guide](documentations/USER_GUIDE.md)** - Feature documentation for end-users
- **[Developer Guide](documentations/DEVELOPER_GUIDE.md)** - Development guidelines
- **[API Documentation](documentations/API_DOCUMENTATION.md)** - API reference
- **[Features Planning](documentations/FEATURES_PLANNING.md)** - Roadmap & features list

### Settings Documentation

- **[Settings Usage Guide](docs/SETTINGS_USAGE.md)** - Complete guide for using Spatie Laravel Settings
- **[Settings Quick Reference](docs/SETTINGS_QUICK_REFERENCE.md)** - Quick reference and common tasks
- **[Settings Demo](docs/SETTINGS_DEMO.md)** - Examples and demonstrations
- **[Settings Migration Guide](docs/SETTINGS_MIGRATION.md)** - Migration from old system
- **[Timezone Implementation](docs/TIMEZONE_IMPLEMENTATION.md)** - Dynamic timezone and date formatting guide

---

## 📦 What's Included

### Database Schema

✅ 16 tables with complete relationships:

- `users` - User accounts
- `roles` - Role definitions
- `permissions` - Permission definitions
- `model_has_roles` - User-role relationships
- `model_has_permissions` - Direct permissions
- `role_has_permissions` - Role-permission relationships
- `user_settings` - User preferences
- `notifications` - Notification storage
- `activity_log` - Activity tracking
- `media` - File metadata
- `login_logs` - Login activity
- `settings` - Application settings (Spatie Settings)
- `api_keys` - API key management
- `personal_access_tokens` - Sanctum tokens
- `cache`, `jobs`, `job_batches` - System tables

### Pre-configured Features

✅ **3 Roles**: Admin, Manager, User  
✅ **35+ Permissions**: Granular access control  
✅ **3 Demo Users**: Ready for testing  
✅ **System Settings**: Pre-configured defaults

### Controllers

✅ User management controller  
✅ Role management controller  
✅ Permission controller  
✅ Settings controller  
✅ Activity log controller  
✅ Notification controller  
✅ Profile controller

### Middleware

✅ Authentication  
✅ Authorization  
✅ Activity logging  
✅ Rate limiting

---

## 🚀 Deployment

### Production Optimization

```bash
# 1. Install production dependencies
composer install --optimize-autoloader --no-dev
npm run build

# 2. Cache configuration
php artisan config:cache
php artisan route:cache
php artisan view:cache

# 3. Set production environment
APP_ENV=production
APP_DEBUG=false
```

See [Installation Guide](documentations/INSTALLATION.md) for detailed deployment instructions.

---

## 🧪 Testing

```bash
# Run all tests
composer test

# Run specific test
php artisan test --filter=UserManagementTest

# Run with coverage
php artisan test --coverage
```

---

## 📝 Code Quality

```bash
# Format PHP code (Laravel Pint)
composer pint

# Lint JavaScript/Vue
npm run lint
npm run lint:fix

# Format code (Prettier)
npm run format
```

---

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines first.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

Built with:

- [Laravel](https://laravel.com) - The PHP Framework
- [Vue.js](https://vuejs.org) - The Progressive JavaScript Framework
- [Inertia.js](https://inertiajs.com) - The Modern Monolith
- [Tailwind CSS](https://tailwindcss.com) - Utility-First CSS Framework
- [Spatie Packages](https://spatie.be/open-source) - High-quality Laravel packages

---

## 📞 Support

- **Documentation**: Check the `/documentations` folder
- **Issues**: Open an issue on GitHub
- **Email**: support@vyzor.test

---

<p align="center">
  <strong>Made with ❤️ by Vyzor Team</strong>
</p>

<p align="center">
  <sub>Version 1.0.0 | Last Updated: 2025-11-09</sub>
</p>
