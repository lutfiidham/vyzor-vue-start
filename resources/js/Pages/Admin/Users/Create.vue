<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3'

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  role: 'User',
  status: 'active',
})

const roles = [
  { value: 'Super Admin', label: 'Super Admin' },
  { value: 'Admin', label: 'Admin' },
  { value: 'Manager', label: 'Manager' },
  { value: 'User', label: 'User' },
]

const statuses = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'suspended', label: 'Suspended' },
]

function submit() {
  form.post(route('admin.users.store'), {
    onSuccess: () => {
      form.reset()
    },
  })
}
</script>

<template>
  <Head title="Create User" />

  <div>
    <!-- Page Header -->
    <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
      <div>
        <h1 class="page-title fw-semibold fs-20 mb-0">
          Create User
        </h1>
        <p class="mb-0 text-muted">
          Add a new user to the system
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
              <Link href="javascript:void(0);">
                Admin
              </Link>
            </li>
            <li class="breadcrumb-item">
              <Link :href="route('admin.users.index')">
                Users
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Create
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Create Form -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              User Information
            </div>
          </div>
          <div class="card-body">
            <form @submit.prevent="submit">
              <div class="row g-3">
                <!-- Name -->
                <div class="col-md-6">
                  <label class="form-label">Name <span class="text-danger">*</span></label>
                  <input
                    v-model="form.name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.name }"
                    placeholder="Enter user name"
                    required
                  >
                  <div v-if="form.errors.name" class="invalid-feedback">
                    {{ form.errors.name }}
                  </div>
                </div>

                <!-- Email -->
                <div class="col-md-6">
                  <label class="form-label">Email <span class="text-danger">*</span></label>
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.email }"
                    placeholder="Enter email address"
                    required
                  >
                  <div v-if="form.errors.email" class="invalid-feedback">
                    {{ form.errors.email }}
                  </div>
                </div>

                <!-- Password -->
                <div class="col-md-6">
                  <label class="form-label">Password <span class="text-danger">*</span></label>
                  <input
                    v-model="form.password"
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.password }"
                    placeholder="Enter password"
                    required
                  >
                  <div v-if="form.errors.password" class="invalid-feedback">
                    {{ form.errors.password }}
                  </div>
                </div>

                <!-- Password Confirmation -->
                <div class="col-md-6">
                  <label class="form-label">Confirm Password <span class="text-danger">*</span></label>
                  <input
                    v-model="form.password_confirmation"
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.password_confirmation }"
                    placeholder="Confirm password"
                    required
                  >
                  <div v-if="form.errors.password_confirmation" class="invalid-feedback">
                    {{ form.errors.password_confirmation }}
                  </div>
                </div>

                <!-- Role -->
                <div class="col-md-6">
                  <label class="form-label">Role <span class="text-danger">*</span></label>
                  <select
                    v-model="form.role"
                    class="form-select"
                    :class="{ 'is-invalid': form.errors.role }"
                    required
                  >
                    <option value="">
                      Select Role
                    </option>
                    <option v-for="role in roles" :key="role.value" :value="role.value">
                      {{ role.label }}
                    </option>
                  </select>
                  <div v-if="form.errors.role" class="invalid-feedback">
                    {{ form.errors.role }}
                  </div>
                </div>

                <!-- Status -->
                <div class="col-md-6">
                  <label class="form-label">Status <span class="text-danger">*</span></label>
                  <select
                    v-model="form.status"
                    class="form-select"
                    :class="{ 'is-invalid': form.errors.status }"
                    required
                  >
                    <option value="">
                      Select Status
                    </option>
                    <option v-for="status in statuses" :key="status.value" :value="status.value">
                      {{ status.label }}
                    </option>
                  </select>
                  <div v-if="form.errors.status" class="invalid-feedback">
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
                      <i class="ri-save-line me-1" />
                      {{ form.processing ? 'Creating...' : 'Create User' }}
                    </button>
                    <Link
                      :href="route('admin.users.index')"
                      class="btn btn-secondary btn-wave"
                    >
                      <i class="ri-arrow-left-line me-1" />
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
