<script setup>
import { ref, reactive } from 'vue'
import { Head, Link, useForm } from '@inertiajs/vue3'

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const form = useForm({
  name: props.user.name,
  email: props.user.email,
  password: '',
  password_confirmation: '',
  role: props.user.role,
  status: props.user.status
})

const roles = [
  { value: 'Super Admin', label: 'Super Admin' },
  { value: 'Admin', label: 'Admin' },
  { value: 'Manager', label: 'Manager' },
  { value: 'User', label: 'User' }
]

const statuses = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'suspended', label: 'Suspended' }
]

const showPasswordFields = ref(false)

const submit = () => {
  form.put(route('admin.users.update', props.user.id), {
    onSuccess: () => {
      showPasswordFields.value = false
      form.password = ''
      form.password_confirmation = ''
    }
  })
}

const togglePasswordFields = () => {
  showPasswordFields.value = !showPasswordFields.value
  if (!showPasswordFields.value) {
    form.password = ''
    form.password_confirmation = ''
  }
}
</script>

<template>
  <Head :title="`Edit User - ${user.name}`" />

  <div>
    <!-- Page Header -->
    <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
      <div>
        <h1 class="page-title fw-semibold fs-20 mb-0">Edit User</h1>
        <p class="mb-0 text-muted">Update information for {{ user.name }}</p>
      </div>
      <div class="ms-md-1 ms-0">
        <nav>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <Link href="/dashboard">Home</Link>
            </li>
            <li class="breadcrumb-item">
              <Link href="javascript:void(0);">Admin</Link>
            </li>
            <li class="breadcrumb-item">
              <Link :href="route('admin.users.index')">Users</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Edit</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Edit Form -->
    <div class="row">
      <div class="col-xl-4">
        <div class="card custom-card">
          <div class="card-body text-center">
            <div class="user-avatar mb-3">
              <img
                :src="`https://ui-avatars.com/api/?name=${user.name}&background=4361ee&color=fff&size=128`"
                alt="User Avatar"
                class="rounded-circle"
                width="128"
                height="128"
              />
            </div>
            <h4 class="mb-1">{{ user.name }}</h4>
            <p class="text-muted mb-3">{{ user.email }}</p>

            <div class="d-grid gap-2">
              <Link
                :href="route('admin.users.show', user.id)"
                class="btn btn-outline-primary btn-wave"
              >
                <i class="ri-eye-line me-1"></i>View Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-8">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">Edit User Information</div>
          </div>
          <div class="card-body">
            <form @submit.prevent="submit">
              <div class="row g-3">
                <!-- Name -->
                <div class="col-md-6">
                  <label class="form-label">Name <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.name }"
                    v-model="form.name"
                    placeholder="Enter user name"
                    required
                  />
                  <div class="invalid-feedback" v-if="form.errors.name">
                    {{ form.errors.name }}
                  </div>
                </div>

                <!-- Email -->
                <div class="col-md-6">
                  <label class="form-label">Email <span class="text-danger">*</span></label>
                  <input
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.email }"
                    v-model="form.email"
                    placeholder="Enter email address"
                    required
                  />
                  <div class="invalid-feedback" v-if="form.errors.email">
                    {{ form.errors.email }}
                  </div>
                </div>

                <!-- Role -->
                <div class="col-md-6">
                  <label class="form-label">Role <span class="text-danger">*</span></label>
                  <select
                    class="form-select"
                    :class="{ 'is-invalid': form.errors.role }"
                    v-model="form.role"
                    required
                  >
                    <option value="">Select Role</option>
                    <option v-for="role in roles" :key="role.value" :value="role.value">
                      {{ role.label }}
                    </option>
                  </select>
                  <div class="invalid-feedback" v-if="form.errors.role">
                    {{ form.errors.role }}
                  </div>
                </div>

                <!-- Status -->
                <div class="col-md-6">
                  <label class="form-label">Status <span class="text-danger">*</span></label>
                  <select
                    class="form-select"
                    :class="{ 'is-invalid': form.errors.status }"
                    v-model="form.status"
                    required
                  >
                    <option value="">Select Status</option>
                    <option v-for="status in statuses" :key="status.value" :value="status.value">
                      {{ status.label }}
                    </option>
                  </select>
                  <div class="invalid-feedback" v-if="form.errors.status">
                    {{ form.errors.status }}
                  </div>
                </div>

                <!-- Password Section -->
                <div class="col-12">
                  <div class="card border">
                    <div class="card-header py-2 d-flex justify-content-between align-items-center">
                      <h6 class="mb-0">Change Password</h6>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-primary"
                        @click="togglePasswordFields"
                      >
                        <i :class="showPasswordFields ? 'ri-eye-off-line' : 'ri-eye-line'"></i>
                        {{ showPasswordFields ? 'Hide' : 'Show' }} Password Fields
                      </button>
                    </div>
                    <div class="card-body" v-show="showPasswordFields">
                      <div class="row g-3">
                        <div class="col-md-6">
                          <label class="form-label">New Password</label>
                          <input
                            type="password"
                            class="form-control"
                            :class="{ 'is-invalid': form.errors.password }"
                            v-model="form.password"
                            placeholder="Enter new password (leave empty to keep current)"
                          />
                          <div class="invalid-feedback" v-if="form.errors.password">
                            {{ form.errors.password }}
                          </div>
                        </div>
                        <div class="col-md-6">
                          <label class="form-label">Confirm New Password</label>
                          <input
                            type="password"
                            class="form-control"
                            :class="{ 'is-invalid': form.errors.password_confirmation }"
                            v-model="form.password_confirmation"
                            placeholder="Confirm new password"
                          />
                          <div class="invalid-feedback" v-if="form.errors.password_confirmation">
                            {{ form.errors.password_confirmation }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Buttons -->
                <div class="col-12">
                  <div class="d-flex gap-2">
                    <button
                      type="submit"
                      class="btn btn-primary btn-wave"
                      :disabled="form.processing"
                    >
                      <i class="ri-save-line me-1"></i>
                      {{ form.processing ? 'Updating...' : 'Update User' }}
                    </button>
                    <Link
                      :href="route('admin.users.index')"
                      class="btn btn-secondary btn-wave"
                    >
                      <i class="ri-arrow-left-line me-1"></i>
                      Back to Users
                    </Link>
                    <Link
                      :href="route('admin.users.show', user.id)"
                      class="btn btn-info btn-wave"
                    >
                      <i class="ri-eye-line me-1"></i>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>