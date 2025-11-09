<template>
  <Head title="My Profile" />
  <div>
    <!-- Page Header -->
    <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
      <div>
        <h1 class="page-title fw-semibold fs-20 mb-0">My Profile</h1>
        <p class="mb-0 text-muted">View and manage your profile information</p>
      </div>
      <div class="ms-md-1 ms-0">
        <nav>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Profile</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Profile Card -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card overflow-hidden">
          <div class="card-body p-0">
            <div class="d-sm-flex align-items-top p-4 border-bottom-0 main-profile-cover">
              <div>
                <span class="avatar avatar-xxl avatar-rounded me-3 mb-3">
                  <img v-if="user.avatar" :src="user.avatar" alt="profile">
                  <span v-else class="avatar-title bg-primary fs-1">
                    {{ user.name?.charAt(0).toUpperCase() }}
                  </span>
                </span>
              </div>
              <div class="flex-fill main-profile-info">
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fw-semibold mb-1 text-fixed-white">{{ user.name }}</h6>
                </div>
                <p class="mb-1 text-muted text-fixed-white op-7">{{ user.email }}</p>
                <p class="fs-12 text-fixed-white mb-4 op-5">
                  <span class="me-3">
                    <i class="ri-shield-user-line me-1 align-middle"></i>{{ user.role }}
                  </span>
                  <span>
                    <i class="ri-map-pin-line me-1 align-middle"></i>{{ user.timezone || 'UTC' }}
                  </span>
                </p>
                <div class="d-flex mb-0">
                  <div class="me-4">
                    <p class="fw-bold fs-20 text-fixed-white text-shadow mb-0">{{ stats.loginCount }}</p>
                    <p class="mb-0 fs-11 op-5 text-fixed-white">Total Logins</p>
                  </div>
                  <div class="me-4">
                    <p class="fw-bold fs-20 text-fixed-white text-shadow mb-0">{{ stats.activeDays }}</p>
                    <p class="mb-0 fs-11 op-5 text-fixed-white">Active Days</p>
                  </div>
                  <div class="me-4">
                    <p class="fw-bold fs-20 text-fixed-white text-shadow mb-0">{{ permissions.length }}</p>
                    <p class="mb-0 fs-11 op-5 text-fixed-white">Permissions</p>
                  </div>
                </div>
              </div>
              <div class="ms-auto">
                <button class="btn btn-light btn-wave" @click="editProfile">
                  <i class="ri-pencil-line me-1"></i>Edit Profile
                </button>
              </div>
            </div>
            <div class="p-4 border-top border-block-start-dashed">
              <p class="fs-15 fw-semibold mb-2 me-4 text-center">
                Personal Information
              </p>
              <div class="row">
                <div class="col-xl-6">
                  <ul class="list-group">
                    <li class="list-group-item border-0">
                      <div class="d-flex flex-wrap align-items-center">
                        <div class="me-2 fw-semibold">Full Name:</div>
                        <span class="fs-12 text-muted">{{ user.name }}</span>
                      </div>
                    </li>
                    <li class="list-group-item border-0">
                      <div class="d-flex flex-wrap align-items-center">
                        <div class="me-2 fw-semibold">Email:</div>
                        <span class="fs-12 text-muted">{{ user.email }}</span>
                      </div>
                    </li>
                    <li class="list-group-item border-0">
                      <div class="d-flex flex-wrap align-items-center">
                        <div class="me-2 fw-semibold">Phone:</div>
                        <span class="fs-12 text-muted">{{ user.phone || 'Not set' }}</span>
                      </div>
                    </li>
                    <li class="list-group-item border-0">
                      <div class="d-flex flex-wrap align-items-center">
                        <div class="me-2 fw-semibold">Role:</div>
                        <span :class="`badge ${getRoleBadgeClass(user.role)}`">
                          {{ user.role }}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="col-xl-6">
                  <ul class="list-group">
                    <li class="list-group-item border-0">
                      <div class="d-flex flex-wrap align-items-center">
                        <div class="me-2 fw-semibold">Timezone:</div>
                        <span class="fs-12 text-muted">{{ user.timezone || 'UTC' }}</span>
                      </div>
                    </li>
                    <li class="list-group-item border-0">
                      <div class="d-flex flex-wrap align-items-center">
                        <div class="me-2 fw-semibold">Language:</div>
                        <span class="fs-12 text-muted">{{ user.locale || 'en' }}</span>
                      </div>
                    </li>
                    <li class="list-group-item border-0">
                      <div class="d-flex flex-wrap align-items-center">
                        <div class="me-2 fw-semibold">Status:</div>
                        <span :class="`badge ${user.is_active ? 'bg-success' : 'bg-danger'}`">
                          {{ user.is_active ? 'Active' : 'Inactive' }}
                        </span>
                      </div>
                    </li>
                    <li class="list-group-item border-0">
                      <div class="d-flex flex-wrap align-items-center">
                        <div class="me-2 fw-semibold">Last Login:</div>
                        <span class="fs-12 text-muted">
                          {{ user.last_login_at ? formatDate(user.last_login_at) : 'Never' }}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Permissions Card -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">My Permissions</div>
          </div>
          <div class="card-body">
            <div class="row g-2">
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" v-for="permission in permissions" :key="permission">
                <div class="p-2 border rounded d-flex align-items-center">
                  <i class="ri-checkbox-circle-line text-success me-2"></i>
                  <span class="fs-12">{{ permission }}</span>
                </div>
              </div>
            </div>
            <div v-if="permissions.length === 0" class="text-center text-muted py-3">
              No permissions assigned
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">Recent Activity</div>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mb-0 activity-timeline">
              <li v-for="(activity, index) in recentActivity" :key="index" class="activity-item">
                <div class="d-flex align-items-start">
                  <div class="me-3">
                    <span :class="`avatar avatar-sm avatar-rounded ${activity.color}`">
                      <i :class="activity.icon"></i>
                    </span>
                  </div>
                  <div class="flex-fill">
                    <p class="mb-1 fw-semibold">{{ activity.title }}</p>
                    <p class="mb-1 text-muted fs-12">{{ activity.description }}</p>
                    <span class="text-muted fs-11">{{ activity.time }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Head, router, usePage } from '@inertiajs/vue3'

const page = usePage()

// Props
const props = defineProps({
  user: {
    type: Object,
    default: () => ({
      id: 1,
      name: 'Admin User',
      email: 'admin@vyzor.test',
      phone: null,
      avatar: null,
      role: 'admin',
      timezone: 'UTC',
      locale: 'en',
      is_active: true,
      last_login_at: '2025-11-09T08:00:00Z'
    })
  },
  permissions: {
    type: Array,
    default: () => []
  },
  stats: {
    type: Object,
    default: () => ({
      loginCount: 142,
      activeDays: 87
    })
  },
  recentActivity: {
    type: Array,
    default: () => [
      {
        title: 'Profile Updated',
        description: 'You updated your profile information',
        time: '2 hours ago',
        icon: 'ri-user-line',
        color: 'bg-primary-transparent'
      },
      {
        title: 'Password Changed',
        description: 'You changed your password',
        time: '1 day ago',
        icon: 'ri-lock-line',
        color: 'bg-success-transparent'
      },
      {
        title: 'Logged In',
        description: 'You logged in from Chrome on Windows',
        time: '2 days ago',
        icon: 'ri-login-box-line',
        color: 'bg-info-transparent'
      }
    ]
  }
})

// Use page props as fallback if props not provided
const user = computed(() => props.user || page.props.auth?.user || props.user)
const permissions = computed(() => props.permissions.length > 0 ? props.permissions : (page.props.auth?.permissions || []))

// Methods
const editProfile = () => {
  router.visit('/profile/edit')
}

const getRoleBadgeClass = (role) => {
  const classes = {
    admin: 'bg-primary',
    manager: 'bg-success',
    user: 'bg-info'
  }
  return classes[role] || 'bg-secondary'
}

const formatDate = (date) => {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<style scoped>
.main-profile-cover {
  background: linear-gradient(to right, var(--primary-color), var(--primary-rgb));
  position: relative;
}

.activity-item {
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.activity-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}
</style>
