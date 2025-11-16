<script setup>
import { Head, router } from '@inertiajs/vue3'
import { getCurrentInstance, ref } from 'vue'

// Props
const props = defineProps({
  settings: {
    type: Object,
    default: () => ({}),
  },
})
const { proxy } = getCurrentInstance()
const theme = localStorage.getItem('vyzorcolortheme') || 'light'

// State
const activeCategory = ref('general')

const categories = ref([
  { id: 'general', name: 'General', icon: 'ri-settings-3-line' },
  { id: 'email', name: 'Email', icon: 'ri-mail-line' },
  { id: 'security', name: 'Security', icon: 'ri-shield-keyhole-line' },
  { id: 'notifications', name: 'Notifications', icon: 'ri-notification-line' },
  { id: 'maintenance', name: 'Maintenance', icon: 'ri-tools-line' },
  { id: 'cache', name: 'Cache', icon: 'ri-database-2-line' },
])

// Settings data - Langsung dari backend tanpa hardcoded defaults
const generalSettings = ref({
  app_name: props.settings.app_name || '',
  app_url: props.settings.app_url || '',
  admin_email: props.settings.admin_email || '',
  timezone: props.settings.timezone || '',
  date_format: props.settings.date_format || '',
  app_description: props.settings.app_description || '',
})

const emailSettings = ref({
  mail_driver: props.settings.mail_driver || '',
  mail_host: props.settings.mail_host || '',
  mail_port: props.settings.mail_port || '',
  mail_encryption: props.settings.mail_encryption || '',
  mail_username: props.settings.mail_username || '',
  mail_password: props.settings.mail_password || '',
  mail_from_address: props.settings.mail_from_address || '',
  mail_from_name: props.settings.mail_from_name || '',
})

const securitySettings = ref({
  two_factor_enabled: props.settings.two_factor_enabled == '1' || props.settings.two_factor_enabled === true,
  session_lifetime: props.settings.session_lifetime || 120,
  login_attempts: props.settings.login_attempts || 5,
  lockout_duration: props.settings.lockout_duration || 15,
  password_min_length: props.settings.password_min_length || 8,
  password_complexity: props.settings.password_complexity == '1' || props.settings.password_complexity === true,
})

const notificationSettings = ref({
  notify_user_registration: props.settings.notify_user_registration == '1' || props.settings.notify_user_registration === true,
  notify_password_reset: props.settings.notify_password_reset == '1' || props.settings.notify_password_reset === true,
  notify_login: props.settings.notify_login == '1' || props.settings.notify_login === true,
  notify_suspicious_activity: props.settings.notify_suspicious_activity == '1' || props.settings.notify_suspicious_activity === true,
  notify_maintenance: props.settings.notify_maintenance == '1' || props.settings.notify_maintenance === true,
  notify_updates: props.settings.notify_updates == '1' || props.settings.notify_updates === true,
})

const maintenanceSettings = ref({
  maintenance_mode: props.settings.maintenance_mode == '1' || props.settings.maintenance_mode === true,
  maintenance_message: props.settings.maintenance_message || '',
  maintenance_end: props.settings.maintenance_end || '',
})

// Methods
function saveSettings(category) {
  let data = {}

  switch (category) {
  case 'general':
    data = generalSettings.value
    break
  case 'email':
    data = emailSettings.value
    break
  case 'security':
    data = securitySettings.value
    break
  case 'notifications':
    data = notificationSettings.value
    break
  case 'maintenance':
    data = maintenanceSettings.value
    break
  }

  router.post('/admin/settings', {
    category,
    settings: data,
  }, {
    preserveScroll: true,
    onSuccess: () => {
      proxy.$toast.success(`${category.charAt(0).toUpperCase() + category.slice(1)} settings saved successfully!`, {
        theme,
        icon: true,
        hideProgressBar: false,
        autoClose: 3000,
        position: 'top-right',
      })
    },
    onError: () => {
      proxy.$toast.error('Failed to save settings. Please try again.', {
        theme,
        icon: true,
        hideProgressBar: false,
        autoClose: 3000,
        position: 'top-right',
      })
    },
  })
}

function testEmail() {
  router.post('/admin/settings/test-email', emailSettings.value, {
    preserveScroll: true,
    onSuccess: () => {
      proxy.$toast.success('Test email sent! Please check your inbox.', {
        theme,
        icon: true,
        hideProgressBar: false,
        autoClose: 3000,
        position: 'top-right',
      })
    },
    onError: () => {
      proxy.$toast.error('Failed to send test email.', {
        theme,
        icon: true,
        hideProgressBar: false,
        autoClose: 3000,
        position: 'top-right',
      })
    },
  })
}

function clearCache(type) {
  if (confirm(`Are you sure you want to clear ${type} cache?`)) {
    router.post('/admin/settings/clear-cache', { type }, {
      preserveScroll: true,
      onSuccess: () => {
        proxy.$toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} cache cleared successfully!`, {
          theme,
          icon: true,
          hideProgressBar: false,
          autoClose: 3000,
          position: 'top-right',
        })
      },
      onError: () => {
        proxy.$toast.error('Failed to clear cache.', {
          theme,
          icon: true,
          hideProgressBar: false,
          autoClose: 3000,
          position: 'top-right',
        })
      },
    })
  }
}
</script>

<template>
  <Head title="System Settings" />
  <div>
    <!-- Page Header -->
    <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
      <div>
        <h1 class="page-title fw-semibold fs-20 mb-0">
          System Settings
        </h1>
        <p class="mb-0 text-muted">
          Configure application settings and preferences
        </p>
      </div>
      <div class="ms-md-1 ms-0">
        <nav>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <a href="/dashboard">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="javascript:void(0);">Admin</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Settings
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="row">
      <!-- Sidebar Navigation -->
      <div class="col-xl-3">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              Settings Categories
            </div>
          </div>
          <div class="card-body p-0">
            <ul class="list-group list-group-flush">
              <li
                v-for="category in categories"
                :key="category.id"
                class="list-group-item list-group-item-action"
                :class="{ active: activeCategory === category.id }"
                style="cursor: pointer;"
                @click="activeCategory = category.id"
              >
                <div class="d-flex align-items-center">
                  <i :class="`${category.icon} me-2`" />
                  <span>{{ category.name }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Settings Content -->
      <div class="col-xl-9">
        <!-- General Settings -->
        <div v-show="activeCategory === 'general'" class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              <i class="ri-settings-3-line me-2" />General Settings
            </div>
          </div>
          <div class="card-body">
            <form @submit.prevent="saveSettings('general')">
              <div class="row">
                <div class="col-xl-12 mb-3">
                  <label class="form-label">Application Name</label>
                  <input
                    v-model="generalSettings.app_name"
                    type="text"
                    class="form-control"
                    placeholder="Enter application name"
                  >
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Application URL</label>
                  <input
                    v-model="generalSettings.app_url"
                    type="url"
                    class="form-control"
                    placeholder="https://example.com"
                  >
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Admin Email</label>
                  <input
                    v-model="generalSettings.admin_email"
                    type="email"
                    class="form-control"
                    placeholder="admin@example.com"
                  >
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Timezone</label>
                  <select v-model="generalSettings.timezone" class="form-select">
                    <option value="UTC">
                      UTC
                    </option>
                    <option value="Asia/Jakarta">
                      Asia/Jakarta
                    </option>
                    <option value="America/New_York">
                      America/New York
                    </option>
                    <option value="Europe/London">
                      Europe/London
                    </option>
                  </select>
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Date Format</label>
                  <select v-model="generalSettings.date_format" class="form-select">
                    <option value="Y-m-d">
                      YYYY-MM-DD
                    </option>
                    <option value="d/m/Y">
                      DD/MM/YYYY
                    </option>
                    <option value="m/d/Y">
                      MM/DD/YYYY
                    </option>
                  </select>
                </div>
                <div class="col-xl-12 mb-3">
                  <label class="form-label">Application Description</label>
                  <textarea
                    v-model="generalSettings.app_description"
                    class="form-control"
                    rows="3"
                    placeholder="Brief description of your application"
                  />
                </div>
                <div class="col-xl-12">
                  <button type="submit" class="btn btn-primary">
                    <i class="ri-save-line me-1" />Save General Settings
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <!-- Email Settings -->
        <div v-show="activeCategory === 'email'" class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              <i class="ri-mail-line me-2" />Email Settings
            </div>
          </div>
          <div class="card-body">
            <form @submit.prevent="saveSettings('email')">
              <div class="row">
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Mail Driver</label>
                  <select v-model="emailSettings.mail_driver" class="form-select">
                    <option value="smtp">
                      SMTP
                    </option>
                    <option value="sendmail">
                      Sendmail
                    </option>
                    <option value="mailgun">
                      Mailgun
                    </option>
                    <option value="ses">
                      Amazon SES
                    </option>
                  </select>
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Mail Host</label>
                  <input
                    v-model="emailSettings.mail_host"
                    type="text"
                    class="form-control"
                    placeholder="smtp.gmail.com"
                  >
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Mail Port</label>
                  <input
                    v-model="emailSettings.mail_port"
                    type="number"
                    class="form-control"
                    placeholder="587"
                  >
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Encryption</label>
                  <select v-model="emailSettings.mail_encryption" class="form-select">
                    <option value="tls">
                      TLS
                    </option>
                    <option value="ssl">
                      SSL
                    </option>
                    <option value="">
                      None
                    </option>
                  </select>
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Mail Username</label>
                  <input
                    v-model="emailSettings.mail_username"
                    type="text"
                    class="form-control"
                    placeholder="your-email@gmail.com"
                  >
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Mail Password</label>
                  <input
                    v-model="emailSettings.mail_password"
                    type="password"
                    class="form-control"
                    placeholder="••••••••"
                  >
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">From Address</label>
                  <input
                    v-model="emailSettings.mail_from_address"
                    type="email"
                    class="form-control"
                    placeholder="noreply@example.com"
                  >
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">From Name</label>
                  <input
                    v-model="emailSettings.mail_from_name"
                    type="text"
                    class="form-control"
                    placeholder="Application Name"
                  >
                </div>
                <div class="col-xl-12 mb-3">
                  <button type="button" class="btn btn-info" @click="testEmail">
                    <i class="ri-mail-send-line me-1" />Send Test Email
                  </button>
                </div>
                <div class="col-xl-12">
                  <button type="submit" class="btn btn-primary">
                    <i class="ri-save-line me-1" />Save Email Settings
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <!-- Security Settings -->
        <div v-show="activeCategory === 'security'" class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              <i class="ri-shield-keyhole-line me-2" />Security Settings
            </div>
          </div>
          <div class="card-body">
            <form @submit.prevent="saveSettings('security')">
              <div class="row">
                <div class="col-xl-12 mb-3">
                  <div class="form-check form-switch">
                    <input
                      id="two_factor"
                      v-model="securitySettings.two_factor_enabled"
                      class="form-check-input"
                      type="checkbox"
                    >
                    <label class="form-check-label" for="two_factor">
                      Enable Two-Factor Authentication
                    </label>
                  </div>
                  <small class="text-muted">Require users to verify login with 2FA</small>
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Session Lifetime (minutes)</label>
                  <input
                    v-model="securitySettings.session_lifetime"
                    type="number"
                    class="form-control"
                    placeholder="120"
                  >
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Login Attempts</label>
                  <input
                    v-model="securitySettings.login_attempts"
                    type="number"
                    class="form-control"
                    placeholder="5"
                  >
                  <small class="text-muted">Max attempts before lockout</small>
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Lockout Duration (minutes)</label>
                  <input
                    v-model="securitySettings.lockout_duration"
                    type="number"
                    class="form-control"
                    placeholder="15"
                  >
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Password Min Length</label>
                  <input
                    v-model="securitySettings.password_min_length"
                    type="number"
                    class="form-control"
                    placeholder="8"
                  >
                </div>
                <div class="col-xl-12 mb-3">
                  <div class="form-check form-switch">
                    <input
                      id="password_complexity"
                      v-model="securitySettings.password_complexity"
                      class="form-check-input"
                      type="checkbox"
                    >
                    <label class="form-check-label" for="password_complexity">
                      Require Password Complexity
                    </label>
                  </div>
                  <small class="text-muted">Must contain uppercase, lowercase, numbers, and symbols</small>
                </div>
                <div class="col-xl-12">
                  <button type="submit" class="btn btn-primary">
                    <i class="ri-save-line me-1" />Save Security Settings
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <!-- Notification Settings -->
        <div v-show="activeCategory === 'notifications'" class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              <i class="ri-notification-line me-2" />Notification Settings
            </div>
          </div>
          <div class="card-body">
            <form @submit.prevent="saveSettings('notifications')">
              <div class="row">
                <div class="col-xl-12 mb-3">
                  <h6 class="mb-3">
                    Email Notifications
                  </h6>
                  <div class="form-check form-switch mb-2">
                    <input
                      id="notify_user_registration"
                      v-model="notificationSettings.notify_user_registration"
                      class="form-check-input"
                      type="checkbox"
                    >
                    <label class="form-check-label" for="notify_user_registration">
                      New User Registration
                    </label>
                  </div>
                  <div class="form-check form-switch mb-2">
                    <input
                      id="notify_password_reset"
                      v-model="notificationSettings.notify_password_reset"
                      class="form-check-input"
                      type="checkbox"
                    >
                    <label class="form-check-label" for="notify_password_reset">
                      Password Reset Requests
                    </label>
                  </div>
                  <div class="form-check form-switch mb-2">
                    <input
                      id="notify_login"
                      v-model="notificationSettings.notify_login"
                      class="form-check-input"
                      type="checkbox"
                    >
                    <label class="form-check-label" for="notify_login">
                      User Login Notifications
                    </label>
                  </div>
                  <div class="form-check form-switch mb-2">
                    <input
                      id="notify_suspicious_activity"
                      v-model="notificationSettings.notify_suspicious_activity"
                      class="form-check-input"
                      type="checkbox"
                    >
                    <label class="form-check-label" for="notify_suspicious_activity">
                      Suspicious Activity Alerts
                    </label>
                  </div>
                </div>
                <div class="col-xl-12 mb-3">
                  <h6 class="mb-3">
                    System Notifications
                  </h6>
                  <div class="form-check form-switch mb-2">
                    <input
                      id="notify_maintenance"
                      v-model="notificationSettings.notify_maintenance"
                      class="form-check-input"
                      type="checkbox"
                    >
                    <label class="form-check-label" for="notify_maintenance">
                      Scheduled Maintenance
                    </label>
                  </div>
                  <div class="form-check form-switch mb-2">
                    <input
                      id="notify_updates"
                      v-model="notificationSettings.notify_updates"
                      class="form-check-input"
                      type="checkbox"
                    >
                    <label class="form-check-label" for="notify_updates">
                      System Updates
                    </label>
                  </div>
                </div>
                <div class="col-xl-12">
                  <button type="submit" class="btn btn-primary">
                    <i class="ri-save-line me-1" />Save Notification Settings
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <!-- Maintenance Settings -->
        <div v-show="activeCategory === 'maintenance'" class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              <i class="ri-tools-line me-2" />Maintenance Mode
            </div>
          </div>
          <div class="card-body">
            <div v-if="maintenanceSettings.maintenance_mode" class="alert alert-warning">
              <i class="ri-alert-line me-2" />
              <strong>Warning!</strong> Maintenance mode is currently enabled.
            </div>
            <form @submit.prevent="saveSettings('maintenance')">
              <div class="row">
                <div class="col-xl-12 mb-3">
                  <div class="form-check form-switch">
                    <input
                      id="maintenance_mode"
                      v-model="maintenanceSettings.maintenance_mode"
                      class="form-check-input"
                      type="checkbox"
                    >
                    <label class="form-check-label" for="maintenance_mode">
                      Enable Maintenance Mode
                    </label>
                  </div>
                  <small class="text-muted">Site will be unavailable to regular users</small>
                </div>
                <div class="col-xl-12 mb-3">
                  <label class="form-label">Maintenance Message</label>
                  <textarea
                    v-model="maintenanceSettings.maintenance_message"
                    class="form-control"
                    rows="3"
                    placeholder="We are currently performing scheduled maintenance..."
                  />
                </div>
                <div class="col-xl-6 mb-3">
                  <label class="form-label">Expected End Time</label>
                  <input
                    v-model="maintenanceSettings.maintenance_end"
                    type="datetime-local"
                    class="form-control"
                  >
                </div>
                <div class="col-xl-12">
                  <button type="submit" class="btn btn-primary">
                    <i class="ri-save-line me-1" />Save Maintenance Settings
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <!-- Cache Settings -->
        <div v-show="activeCategory === 'cache'" class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              <i class="ri-database-2-line me-2" />Cache Management
            </div>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-xl-12">
                <p class="text-muted">
                  Clear cached data to improve performance or resolve issues.
                </p>
              </div>
              <div class="col-xl-6">
                <div class="card border">
                  <div class="card-body">
                    <h6 class="mb-2">
                      Application Cache
                    </h6>
                    <p class="text-muted fs-12 mb-3">
                      Clear all application cached data
                    </p>
                    <button class="btn btn-warning w-100" @click="clearCache('application')">
                      <i class="ri-delete-bin-line me-1" />Clear Application Cache
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="card border">
                  <div class="card-body">
                    <h6 class="mb-2">
                      Route Cache
                    </h6>
                    <p class="text-muted fs-12 mb-3">
                      Clear cached routes
                    </p>
                    <button class="btn btn-warning w-100" @click="clearCache('route')">
                      <i class="ri-delete-bin-line me-1" />Clear Route Cache
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="card border">
                  <div class="card-body">
                    <h6 class="mb-2">
                      Config Cache
                    </h6>
                    <p class="text-muted fs-12 mb-3">
                      Clear configuration cache
                    </p>
                    <button class="btn btn-warning w-100" @click="clearCache('config')">
                      <i class="ri-delete-bin-line me-1" />Clear Config Cache
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="card border">
                  <div class="card-body">
                    <h6 class="mb-2">
                      View Cache
                    </h6>
                    <p class="text-muted fs-12 mb-3">
                      Clear compiled views
                    </p>
                    <button class="btn btn-warning w-100" @click="clearCache('view')">
                      <i class="ri-delete-bin-line me-1" />Clear View Cache
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-xl-12">
                <button class="btn btn-danger w-100" @click="clearCache('all')">
                  <i class="ri-delete-bin-line me-1" />Clear All Caches
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-group-item.active {
  background-color: rgba(var(--primary-rgb), 0.1);
  border-color: rgba(var(--primary-rgb), 0.2);
  color: var(--primary-color);
}

.list-group-item:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.form-switch .form-check-input {
  cursor: pointer;
}

.form-check-label {
  cursor: pointer;
}
</style>
