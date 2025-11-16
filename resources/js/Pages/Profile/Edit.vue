<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3'
import { getCurrentInstance, ref } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const { proxy } = getCurrentInstance()

const theme = localStorage.getItem('vyzorcolortheme') || 'light'

// Avatar handling
const avatarInput = ref(null)
const avatarPreview = ref(null)

// Profile form
const form = useForm({
  name: props.user.name,
  email: props.user.email,
  phone: props.user.phone,
  timezone: props.user.timezone || 'UTC',
  locale: props.user.locale || 'en',
  avatar: null,
  remove_avatar: false,
})

// Avatar functions
function handleAvatarChange(event) {
  const file = event.target.files[0]
  if (file) {
    // Validate file size (2MB)
    if (file.size > 2 * 1024 * 1024) {
      proxy.$toast.error('File size must be less than 2MB', {
        theme,
        icon: true,
        hideProgressBar: false,
        autoClose: 3000,
        position: 'top-right',
      })

      return
    }

    // Validate file type
    if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
      proxy.$toast.error('Only JPG, JPEG and PNG files are allowed', {
        theme,
        icon: true,
        hideProgressBar: false,
        autoClose: 3000,
        position: 'top-right',
      })

      return
    }

    form.avatar = file
    form.remove_avatar = false

    // Create preview
    const reader = new FileReader()
    reader.onload = (e) => {
      avatarPreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

function removeAvatar() {
  // Set flags untuk remove avatar
  form.avatar = null
  form.remove_avatar = 'true'
  avatarPreview.value = null
  if (avatarInput.value) {
    avatarInput.value.value = ''
  }

  // Pastikan field lain tetap ada sebelum submit
  // Form sudah berisi data user dari props
  updateProfile()
}

// Password form
const passwordForm = useForm({
  current_password: '',
  password: '',
  password_confirmation: '',
})

function updateProfile() {
  form.transform(data => ({
    ...data,
    _method: 'PUT',
  })).post('/profile', {
    forceFormData: true,
    preserveScroll: true,
    onSuccess: () => {
      proxy.$toast.success('Profile updated successfully!', {
        theme,
        icon: true,
        hideProgressBar: false,
        autoClose: 3000,
        position: 'top-right',
      })
      avatarPreview.value = null
      // Reset remove_avatar flag after submit
      form.remove_avatar = false
    },
    onError: () => {
      proxy.$toast.error('Failed to update profile. Please check the form.', {
        theme,
        icon: true,
        hideProgressBar: false,
        autoClose: 3000,
        position: 'top-right',
      })
    },
  })
}

function updatePassword() {
  passwordForm.put('/profile/password', {
    preserveScroll: true,
    onSuccess: () => {
      passwordForm.reset()
      proxy.$toast.success('Password changed successfully!', {
        theme,
        icon: true,
        hideProgressBar: false,
        autoClose: 3000,
        position: 'top-right',
      })
    },
    onError: () => {
      proxy.$toast.error('Failed to change password. Please check your current password.', {
        theme,
        icon: true,
        hideProgressBar: false,
        autoClose: 3000,
        position: 'top-right',
      })
    },
  })
}

function getRoleBadgeClass(role) {
  const classes = {
    admin: 'bg-primary',
    manager: 'bg-success',
    user: 'bg-info',
  }

  return classes[role] || 'bg-secondary'
}

function formatDate(date) {
  if (!date)
    return 'N/A'

  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
</script>

<template>
  <Head title="Edit Profile" />
  <div>
    <!-- Page Header -->
    <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
      <div>
        <h1 class="page-title fw-semibold fs-20 mb-0">
          Edit Profile
        </h1>
        <p class="mb-0 text-muted">
          Update your profile information
        </p>
      </div>
      <div class="ms-md-1 ms-0">
        <nav>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <Link href="/dashboard">
                Home
              </Link>
            </li>
            <li class="breadcrumb-item">
              <Link href="/profile">
                Profile
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Edit
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="row">
      <!-- Profile Information -->
      <div class="col-xl-8">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              Profile Information
            </div>
          </div>
          <div class="card-body">
            <form @submit.prevent="updateProfile">
              <div class="row gy-3">
                <!-- Avatar Upload -->
                <div class="col-xl-12">
                  <label class="form-label">Profile Picture</label>
                  <div class="d-flex align-items-center gap-3">
                    <div class="position-relative">
                      <span class="avatar avatar-xxl avatar-rounded">
                        <img v-if="avatarPreview" :src="avatarPreview" alt="avatar">
                        <img v-else-if="user.avatar" :src="user.avatar" alt="avatar">
                        <span v-else class="avatar-title bg-primary fs-1">
                          {{ user.name?.charAt(0).toUpperCase() }}
                        </span>
                      </span>
                    </div>
                    <div class="flex-fill">
                      <input
                        ref="avatarInput"
                        type="file"
                        accept="image/*"
                        class="d-none"
                        @change="handleAvatarChange"
                      >
                      <button
                        type="button"
                        class="btn btn-primary btn-sm me-2"
                        @click="$refs.avatarInput.click()"
                      >
                        <i class="ri-upload-2-line me-1" />Upload Photo
                      </button>
                      <button
                        v-if="avatarPreview || user.avatar"
                        type="button"
                        class="btn btn-danger btn-sm"
                        @click="removeAvatar"
                      >
                        <i class="ri-delete-bin-line me-1" />Remove
                      </button>
                      <p class="text-muted fs-12 mt-2 mb-0">
                        Allowed JPG, PNG or JPEG. Max size of 2MB
                      </p>
                      <div v-if="form.errors.avatar" class="text-danger fs-12 mt-1">
                        {{ form.errors.avatar }}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-12">
                  <label class="form-label">Full Name <span class="text-danger">*</span></label>
                  <input
                    v-model="form.name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.name }"
                    placeholder="Enter full name"
                  >
                  <div v-if="form.errors.name" class="invalid-feedback">
                    {{ form.errors.name }}
                  </div>
                </div>

                <div class="col-xl-12">
                  <label class="form-label">Email <span class="text-danger">*</span></label>
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.email }"
                    placeholder="Enter email"
                  >
                  <div v-if="form.errors.email" class="invalid-feedback">
                    {{ form.errors.email }}
                  </div>
                </div>

                <div class="col-xl-6">
                  <label class="form-label">Phone</label>
                  <input
                    v-model="form.phone"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.phone }"
                    placeholder="Enter phone number"
                  >
                  <div v-if="form.errors.phone" class="invalid-feedback">
                    {{ form.errors.phone }}
                  </div>
                </div>

                <div class="col-xl-6">
                  <label class="form-label">Timezone</label>
                  <select
                    v-model="form.timezone"
                    class="form-select"
                    :class="{ 'is-invalid': form.errors.timezone }"
                  >
                    <option value="UTC">
                      UTC
                    </option>
                    <option value="Asia/Jakarta">
                      Asia/Jakarta
                    </option>
                    <option value="Asia/Singapore">
                      Asia/Singapore
                    </option>
                    <option value="America/New_York">
                      America/New_York
                    </option>
                    <option value="Europe/London">
                      Europe/London
                    </option>
                  </select>
                  <div v-if="form.errors.timezone" class="invalid-feedback">
                    {{ form.errors.timezone }}
                  </div>
                </div>

                <div class="col-xl-6">
                  <label class="form-label">Language</label>
                  <select
                    v-model="form.locale"
                    class="form-select"
                    :class="{ 'is-invalid': form.errors.locale }"
                  >
                    <option value="en">
                      English
                    </option>
                    <option value="id">
                      Indonesian
                    </option>
                  </select>
                  <div v-if="form.errors.locale" class="invalid-feedback">
                    {{ form.errors.locale }}
                  </div>
                </div>
              </div>

              <div class="mt-4">
                <button type="submit" class="btn btn-primary" :disabled="form.processing">
                  <span v-if="form.processing">
                    <span class="spinner-border spinner-border-sm me-1" role="status" />
                    Saving...
                  </span>
                  <span v-else>
                    <i class="ri-save-line me-1" />Save Changes
                  </span>
                </button>
                <Link href="/profile" class="btn btn-light ms-2">
                  <i class="ri-arrow-left-line me-1" />Back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Change Password -->
      <div class="col-xl-4">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              Change Password
            </div>
          </div>
          <div class="card-body">
            <form @submit.prevent="updatePassword">
              <div class="row gy-3">
                <div class="col-xl-12">
                  <label class="form-label">Current Password <span class="text-danger">*</span></label>
                  <input
                    v-model="passwordForm.current_password"
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': passwordForm.errors.current_password }"
                    placeholder="Enter current password"
                  >
                  <div v-if="passwordForm.errors.current_password" class="invalid-feedback">
                    {{ passwordForm.errors.current_password }}
                  </div>
                </div>

                <div class="col-xl-12">
                  <label class="form-label">New Password <span class="text-danger">*</span></label>
                  <input
                    v-model="passwordForm.password"
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': passwordForm.errors.password }"
                    placeholder="Enter new password"
                  >
                  <div v-if="passwordForm.errors.password" class="invalid-feedback">
                    {{ passwordForm.errors.password }}
                  </div>
                </div>

                <div class="col-xl-12">
                  <label class="form-label">Confirm Password <span class="text-danger">*</span></label>
                  <input
                    v-model="passwordForm.password_confirmation"
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': passwordForm.errors.password_confirmation }"
                    placeholder="Confirm new password"
                  >
                  <div v-if="passwordForm.errors.password_confirmation" class="invalid-feedback">
                    {{ passwordForm.errors.password_confirmation }}
                  </div>
                </div>
              </div>

              <div class="mt-4">
                <button type="submit" class="btn btn-danger w-100" :disabled="passwordForm.processing">
                  <span v-if="passwordForm.processing">
                    <span class="spinner-border spinner-border-sm me-1" role="status" />
                    Updating...
                  </span>
                  <span v-else>
                    <i class="ri-lock-line me-1" />Update Password
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Profile Info Card -->
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              Account Info
            </div>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item border-0 px-0">
                <div class="d-flex align-items-center">
                  <div class="me-2 fw-semibold">
                    Role:
                  </div>
                  <span :class="`badge ${getRoleBadgeClass(user.role)}`">
                    {{ user.role }}
                  </span>
                </div>
              </li>
              <li class="list-group-item border-0 px-0">
                <div class="d-flex align-items-center">
                  <div class="me-2 fw-semibold">
                    Status:
                  </div>
                  <span :class="`badge ${user.is_active ? 'bg-success' : 'bg-danger'}`">
                    {{ user.is_active ? 'Active' : 'Inactive' }}
                  </span>
                </div>
              </li>
              <li class="list-group-item border-0 px-0">
                <div class="d-flex flex-column">
                  <div class="fw-semibold mb-1">
                    Last Login:
                  </div>
                  <span class="text-muted fs-12">{{ formatDate(user.last_login_at) }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-bottom: 1.5rem;
}
</style>
