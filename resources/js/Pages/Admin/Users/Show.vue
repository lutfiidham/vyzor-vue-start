<script setup>
import { Head, Link } from '@inertiajs/vue3'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

function getStatusBadgeClass(status) {
  switch (status) {
  case 'active':
    return 'bg-success'
  case 'inactive':
    return 'bg-warning'
  case 'suspended':
    return 'bg-danger'
  default:
    return 'bg-secondary'
  }
}

function getRoleBadgeClass(role) {
  const roleLower = role?.toLowerCase()
  switch (roleLower) {
  case 'super admin':
    return 'bg-purple'
  case 'admin':
    return 'bg-danger'
  case 'manager':
    return 'bg-primary'
  case 'user':
    return 'bg-info'
  default:
    return 'bg-secondary'
  }
}
</script>

<template>
  <Head :title="`User Details - ${user.name}`" />

  <div>
    <!-- Page Header -->
    <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
      <div>
        <h1 class="page-title fw-semibold fs-20 mb-0">
          User Details
        </h1>
        <p class="mb-0 text-muted">
          View detailed information about {{ user.name }}
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
              Details
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- User Details -->
    <div class="row">
      <!-- Profile Card -->
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
              >
            </div>
            <h4 class="mb-1">
              {{ user.name }}
            </h4>
            <p class="text-muted mb-3">
              {{ user.email }}
            </p>

            <div class="d-flex gap-2 justify-content-center mb-3">
              <span class="badge" :class="getStatusBadgeClass(user.status)">
                {{ user.status.charAt(0).toUpperCase() + user.status.slice(1) }}
              </span>
              <span class="badge" :class="getRoleBadgeClass(user.role)">
                {{ user.role.charAt(0).toUpperCase() + user.role.slice(1) }}
              </span>
            </div>

            <div class="d-flex gap-2 justify-content-center">
              <Link
                :href="route('admin.users.edit', user.id)"
                class="btn btn-primary btn-sm btn-wave"
              >
                <i class="ri-edit-line me-1" />Edit
              </Link>
              <button
                class="btn btn-danger btn-sm btn-wave"
                @click="confirmDelete"
              >
                <i class="ri-delete-bin-line me-1" />Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Information Card -->
      <div class="col-xl-8">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              User Information
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-4">
                  <label class="form-label text-muted">Full Name</label>
                  <p class="mb-0 fw-medium">
                    {{ user.name }}
                  </p>
                </div>
                <div class="mb-4">
                  <label class="form-label text-muted">Email Address</label>
                  <p class="mb-0 fw-medium">
                    {{ user.email }}
                  </p>
                </div>
                <div class="mb-4">
                  <label class="form-label text-muted">Role</label>
                  <p class="mb-0">
                    <span class="badge" :class="getRoleBadgeClass(user.role)">
                      {{ user.role.charAt(0).toUpperCase() + user.role.slice(1) }}
                    </span>
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-4">
                  <label class="form-label text-muted">Status</label>
                  <p class="mb-0">
                    <span class="badge" :class="getStatusBadgeClass(user.status)">
                      {{ user.status.charAt(0).toUpperCase() + user.status.slice(1) }}
                    </span>
                  </p>
                </div>
                <div class="mb-4">
                  <label class="form-label text-muted">Created At</label>
                  <p class="mb-0 fw-medium">
                    {{ new Date(user.created_at).toLocaleDateString() }}
                  </p>
                </div>
                <div class="mb-4">
                  <label class="form-label text-muted">Last Updated</label>
                  <p class="mb-0 fw-medium">
                    {{ new Date(user.updated_at).toLocaleDateString() }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Activity Summary -->
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              Activity Summary
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-3 col-6">
                <div class="text-center">
                  <div class="text-primary fs-24 fw-bold">
                    0
                  </div>
                  <p class="text-muted mb-0">
                    Total Logins
                  </p>
                </div>
              </div>
              <div class="col-md-3 col-6">
                <div class="text-center">
                  <div class="text-success fs-24 fw-bold">
                    0
                  </div>
                  <p class="text-muted mb-0">
                    Actions Performed
                  </p>
                </div>
              </div>
              <div class="col-md-3 col-6">
                <div class="text-center">
                  <div class="text-warning fs-24 fw-bold">
                    0
                  </div>
                  <p class="text-muted mb-0">
                    Files Uploaded
                  </p>
                </div>
              </div>
              <div class="col-md-3 col-6">
                <div class="text-center">
                  <div class="text-info fs-24 fw-bold">
                    0
                  </div>
                  <p class="text-muted mb-0">
                    Reports Generated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
