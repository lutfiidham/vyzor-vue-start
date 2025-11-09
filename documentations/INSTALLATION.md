# 📦 INSTALLATION GUIDE

## Requirements

- PHP >= 8.2
- Composer
- Node.js >= 18
- MySQL/PostgreSQL/SQLite
- Redis (optional, recommended for production)

## Installation Steps

### 1. Clone Repository

```bash
git clone <repository-url> vyzor-vue-start
cd vyzor-vue-start
```

### 2. Install PHP Dependencies

```bash
composer install
```

### 3. Install JavaScript Dependencies

```bash
npm install
```

### 4. Environment Configuration

```bash
cp .env.example .env
php artisan key:generate
```

Update your `.env` file with database credentials:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=vyzor
DB_USERNAME=root
DB_PASSWORD=
```

### 5. Database Setup

```bash
php artisan migrate:fresh --seed
```

This will create all tables and seed:
- 3 Roles: admin, manager, user
- 35+ Permissions
- 3 Demo Users
- System Settings

### 6. Storage Link

```bash
php artisan storage:link
```

### 7. Compile Assets

For development:
```bash
npm run dev
```

For production:
```bash
npm run build
```

### 8. Start Development Server

```bash
php artisan serve
```

Or use the combined command:
```bash
composer dev
```

This will start:
- Laravel development server
- Vite dev server
- Queue worker
- Log viewer

## Default Credentials

### Admin User
- Email: `admin@vyzor.test`
- Password: `password`
- Roles: admin
- Permissions: All

### Manager User
- Email: `manager@vyzor.test`
- Password: `password`
- Roles: manager
- Permissions: Limited

### Regular User
- Email: `user@vyzor.test`
- Password: `password`
- Roles: user
- Permissions: Basic

## Additional Configuration

### Queue Configuration

For background jobs, configure queue driver in `.env`:

```env
QUEUE_CONNECTION=redis
```

Then run:
```bash
php artisan queue:work
```

### Email Configuration

Configure mail settings in `.env`:

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=your-username
MAIL_PASSWORD=your-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@vyzor.test
MAIL_FROM_NAME="${APP_NAME}"
```

### Broadcasting Configuration (Real-time)

For real-time notifications:

```env
BROADCAST_DRIVER=pusher

PUSHER_APP_ID=your-app-id
PUSHER_APP_KEY=your-app-key
PUSHER_APP_SECRET=your-app-secret
PUSHER_APP_CLUSTER=mt1
```

Or use Laravel Echo with Soketi (free alternative):

```bash
npm install -g @soketi/soketi
soketi start
```

### File Storage

For cloud storage (AWS S3):

```env
FILESYSTEM_DISK=s3

AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=your-bucket-name
```

## Troubleshooting

### Permission Issues

```bash
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

### Clear Cache

```bash
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear
```

### Rebuild Assets

```bash
npm run build
```

### Database Issues

```bash
php artisan migrate:fresh --seed
```

## Production Deployment

### 1. Optimize Application

```bash
composer install --optimize-autoloader --no-dev
npm run build
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### 2. Set Production Environment

```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com
```

### 3. Setup Supervisor (Queue Worker)

Create file `/etc/supervisor/conf.d/vyzor-worker.conf`:

```ini
[program:vyzor-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /path/to/vyzor-vue-start/artisan queue:work --sleep=3 --tries=3
autostart=true
autorestart=true
user=www-data
numprocs=2
redirect_stderr=true
stdout_logfile=/path/to/vyzor-vue-start/storage/logs/worker.log
```

### 4. Setup Cron Jobs

Add to crontab:

```bash
* * * * * cd /path/to/vyzor-vue-start && php artisan schedule:run >> /dev/null 2>&1
```

### 5. Setup SSL

Use Let's Encrypt with Certbot:

```bash
certbot --nginx -d yourdomain.com
```

## Performance Tips

1. **Use Redis for caching and sessions**
2. **Enable OPcache**
3. **Use CDN for static assets**
4. **Enable HTTP/2**
5. **Optimize images**
6. **Use queue for heavy tasks**
7. **Enable compression (gzip/brotli)**

## Security Checklist

- [ ] Change all default passwords
- [ ] Set `APP_DEBUG=false` in production
- [ ] Use HTTPS
- [ ] Set proper file permissions
- [ ] Enable CSRF protection
- [ ] Use secure session cookies
- [ ] Implement rate limiting
- [ ] Keep dependencies updated
- [ ] Enable security headers
- [ ] Regular backups

## Next Steps

- Read [USER_GUIDE.md](USER_GUIDE.md) for feature documentation
- Read [DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md) for development guidelines
- Check [API_DOCUMENTATION.md](API_DOCUMENTATION.md) for API reference
