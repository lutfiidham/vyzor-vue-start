# 🚀 Getting Started

Welcome to Vyzor Vue Start! This section contains everything you need to get up and running quickly.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **PHP** >= 8.1
- **Composer** >= 2.0
- **Node.js** >= 18.x
- **NPM** or **Yarn**
- **MySQL** >= 8.0 or **PostgreSQL**
- **Git**

## 📚 Available Documentation

### [Installation Guide](./INSTALLATION.md)
Complete step-by-step installation and setup instructions.

**Contents:**
- System requirements
- Installation steps
- Database configuration
- Environment setup
- Initial admin account
- Running the application

## ⚡ Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/your-repo/vyzor-vue-start.git
cd vyzor-vue-start

# 2. Install dependencies
composer install
npm install

# 3. Setup environment
cp .env.example .env
php artisan key:generate

# 4. Configure database in .env
# DB_DATABASE=your_database_name
# DB_USERNAME=your_username
# DB_PASSWORD=your_password

# 5. Run migrations
php artisan migrate --seed

# 6. Build assets
npm run build

# 7. Start the server
php artisan serve
```

Visit: `http://localhost:8000`

## 🎯 Default Credentials

After seeding the database:

```
Email: admin@admin.com
Password: password
```

⚠️ **Change these credentials immediately in production!**

## 📖 Next Steps

After installation:

1. ✅ Login to the admin panel
2. ✅ Explore the dashboard
3. ✅ Read the [User Guide](../02-guides/USER_GUIDE.md)
4. ✅ Check out [Features](../03-features/FEATURES_PLANNING.md)
5. ✅ Review [Developer Guide](../02-guides/DEVELOPER_GUIDE.md) if you're a developer

## 🆘 Troubleshooting

### Common Issues

**Problem**: `composer install` fails
- **Solution**: Ensure PHP version >= 8.1 and all required extensions are installed

**Problem**: `npm install` fails
- **Solution**: Delete `node_modules` and `package-lock.json`, then try again

**Problem**: Database connection error
- **Solution**: Check `.env` file for correct database credentials

**Problem**: 500 error on first load
- **Solution**: Run `php artisan config:clear` and `php artisan cache:clear`

**Problem**: Assets not loading
- **Solution**: Run `npm run build` again

## 📞 Need Help?

- Check [Installation Guide](./INSTALLATION.md) for detailed steps
- See [Fixes & Updates](../06-fixes-and-updates) for known issues
- Review [Technical Documentation](../07-technical)

---

[← Back to Documentation](../README.md) | [Installation Guide →](./INSTALLATION.md)
