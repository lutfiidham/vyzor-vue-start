# 🚀 Vyzor Vue Start

<p align="center">
  <strong>Template Admin Panel Siap Pakai</strong>
</p>

Template admin panel modern yang dibangun dengan **Laravel + Vue.js + Inertia.js**. Siap digunakan untuk berbagai kebutuhan aplikasi web dengan fitur-fitur lengkap untuk manajemen pengguna dan sistem.

## ✨ Fitur Utama

- 🔐 **Authentication & Authorization** - Login, registrasi, email verification, role-based access control
- 👥 **User Management** - Manajemen pengguna lengkap dengan CRUD
- 📋 **Menu Management** - Pengelolaan menu dinamis
- ⚙️ **Pengaturan Aplikasi** - Konfigurasi sistem yang mudah
- 🎨 **UI Modern** - Responsive design dengan Bootstrap
- 📊 **Dashboard** - Tampilan dashboard dengan statistik real-time
- 📝 **Activity Logs** - Pencatatan aktivitas pengguna

---

## 🛠️ Tech Stack

- **Backend**: Laravel 12, PHP 8.2+
- **Frontend**: Vue 3, Inertia.js, Bootstrap CSS
- **Database**: MySQL/PostgreSQL/SQLite
- **Tools**: Vite, Redis, Spatie Packages

---

## ⚡ Quick Start

```bash
# Clone dan install
git clone <repository-url>
cd vyzor-vue-start
composer install
npm install

# Setup environment
cp .env.example .env
php artisan key:generate
php artisan migrate:fresh --seed
php artisan storage:link

# Start development
composer dev
```

Aplikasi tersedia di `http://localhost:8000`

## 👤 Demo Credentials

- **Admin**: `admin@vyzor.test` / `password`
- **Manager**: `manager@vyzor.test` / `password`
- **User**: `user@vyzor.test` / `password`

⚠️ Ubah password di lingkungan production!

---

## 📝 Documentation

Dokumentasi lengkap tersedia di folder `/docs`

## 📄 License

MIT License - lihat file [LICENSE](LICENSE) untuk detail

## 🤖 Terima Kasih

Proyek ini dikembangkan dengan bantuan berbagai AI tools:

- **[z.ai (GLM)](https://z.ai)** - Model bahasa besar untuk asistensi pengembangan
- **[Github Copilot (Claude)](https://github.com/features/copilot)** - AI pair programming untuk kode generation
- **[Qwen Code](https://qwen.ai)** - AI untuk analisis dan optimasi kode
- **[ChatGPT](https://openai.com)** - Model GPT untuk brainstorming dan problem solving

---

<p align="center">
  <strong>Made with ☕ by Idham & AI Assistant</strong>
</p>
