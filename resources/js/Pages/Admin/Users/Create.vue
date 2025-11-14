<script setup>
import { ref, reactive } from 'vue'
import { Head, Link, useForm } from '@inertiajs/vue3'

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  role: 'user',
  status: 'active'
})

const roles = [
  { value: 'admin', label: 'Admin' },
  { value: 'manager', label: 'Manager' },
  { value: 'user', label: 'User' }
]

const statuses = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'suspended', label: 'Suspended' }
]

const submit = () => {
  form.post(route('admin.users.store'), {
    onSuccess: () => {
      form.reset()
    }
  })
}
</script>

<template>
  <Head title="Create User" />

  <div>
    <!-- Page Header -->
    <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
      <div>
        <h1 class="page-title fw-semibold fs-20 mb-0">Create User</h1>
        <p class="mb-0 text-muted">Add a new user to the system</p>
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
            <li class="breadcrumb-item active" aria-current="page">Create</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Create Form -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">User Information</div>
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

                <!-- Password -->
                <div class="col-md-6">
                  <label class="form-label">Password <span class="text-danger">*</span></label>
                  <input
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.password }"
                    v-model="form.password"
                    placeholder="Enter password"
                    required
                  />
                  <div class="invalid-feedback" v-if="form.errors.password">
                    {{ form.errors.password }}
                  </div>
                </div>

                <!-- Password Confirmation -->
                <div class="col-md-6">
                  <label class="form-label">Confirm Password <span class="text-danger">*</span></label>
                  <input
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.password_confirmation }"
                    v-model="form.password_confirmation"
                    placeholder="Confirm password"
                    required
                  />
                  <div class="invalid-feedback" v-if="form.errors.password_confirmation">
                    {{ form.errors.password_confirmation }}
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

                <!-- Buttons -->
                <div class="col-12">
                  <div class="d-flex gap-2">
                    <button
                      type="submit"
                      class="btn btn-primary btn-wave"
                      :disabled="form.processing"
                    >
                      <i class="ri-save-line me-1"></i>
                      {{ form.processing ? 'Creating...' : 'Create User' }}
                    </button>
                    <Link
                      :href="route('admin.users.index')"
                      class="btn btn-secondary btn-wave"
                    >
                      <i class="ri-arrow-left-line me-1"></i>
                      Back to Users
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