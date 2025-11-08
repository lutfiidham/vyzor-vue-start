<template>
  <Head title="Dashboard" />
  <div>
    <!-- Page Header -->
    <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
      <div>
        <h1 class="page-title fw-semibold fs-20 mb-0">Dashboard</h1>
        <p class="mb-0 text-muted">Selamat datang di Vyzor Dashboard</p>
      </div>
      <div class="ms-md-1 ms-0">
        <nav>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Welcome Card -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-xl-8 col-lg-7">
                <div class="d-flex align-items-start">
                  <div class="me-3">
                    <span class="avatar avatar-xl avatar-rounded bg-primary-transparent">
                      <i class="ri-user-smile-line fs-1"></i>
                    </span>
                  </div>
                  <div>
                    <h4 class="fw-semibold mb-2">Selamat Datang Kembali!</h4>
                    <p class="text-muted mb-3">
                      Selamat datang di dashboard Vyzor. Ini adalah halaman utama aplikasi Anda.
                      Mulai kelola data dan pantau aktivitas dari sini.
                    </p>
                    <div class="d-flex gap-2 flex-wrap">
                      <button class="btn btn-primary btn-wave" @click="exploreDemo">
                        <i class="ri-eye-line me-1"></i>Explore Demo
                      </button>
                      <button class="btn btn-outline-secondary btn-wave">
                        <i class="ri-settings-3-line me-1"></i>Settings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-5 d-none d-lg-block">
                <div class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="img-fluid" style="max-height: 200px;" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="80" fill="#e3f2fd" />
                    <path d="M70,90 Q100,60 130,90" stroke="#2196f3" stroke-width="4" fill="none"/>
                    <circle cx="80" cy="85" r="8" fill="#2196f3"/>
                    <circle cx="120" cy="85" r="8" fill="#2196f3"/>
                    <path d="M70,130 Q100,150 130,130" stroke="#2196f3" stroke-width="4" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="row">
      <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div class="card custom-card">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
              <div>
                <p class="mb-1 text-muted">Total Users</p>
                <h3 class="fw-semibold mb-1">{{ stats.totalUsers }}</h3>
                <span class="badge bg-success-transparent">
                  <i class="ri-arrow-up-line me-1"></i>12.5%
                </span>
              </div>
              <div>
                <span class="avatar avatar-lg bg-primary-transparent">
                  <i class="ri-user-line fs-4"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div class="card custom-card">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
              <div>
                <p class="mb-1 text-muted">Active Projects</p>
                <h3 class="fw-semibold mb-1">{{ stats.activeProjects }}</h3>
                <span class="badge bg-info-transparent">
                  <i class="ri-arrow-up-line me-1"></i>8.2%
                </span>
              </div>
              <div>
                <span class="avatar avatar-lg bg-info-transparent">
                  <i class="ri-folder-line fs-4"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div class="card custom-card">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
              <div>
                <p class="mb-1 text-muted">Tasks Completed</p>
                <h3 class="fw-semibold mb-1">{{ stats.tasksCompleted }}</h3>
                <span class="badge bg-success-transparent">
                  <i class="ri-arrow-up-line me-1"></i>24.8%
                </span>
              </div>
              <div>
                <span class="avatar avatar-lg bg-success-transparent">
                  <i class="ri-task-line fs-4"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div class="card custom-card">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
              <div>
                <p class="mb-1 text-muted">Revenue</p>
                <h3 class="fw-semibold mb-1">${{ stats.revenue }}</h3>
                <span class="badge bg-warning-transparent">
                  <i class="ri-arrow-down-line me-1"></i>3.1%
                </span>
              </div>
              <div>
                <span class="avatar avatar-lg bg-warning-transparent">
                  <i class="ri-money-dollar-circle-line fs-4"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity & Quick Actions -->
    <div class="row">
      <div class="col-xl-6">
        <div class="card custom-card">
          <div class="card-header justify-content-between">
            <div class="card-title">Recent Activity</div>
            <a href="javascript:void(0);" class="btn btn-sm btn-light">View All</a>
          </div>
          <div class="card-body">
            <ul class="list-unstyled mb-0 activity-timeline">
              <li v-for="(activity, index) in recentActivities" :key="index" class="activity-item">
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

      <div class="col-xl-6">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">Quick Actions</div>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-md-6" v-for="(action, index) in quickActions" :key="index">
                <div class="card border shadow-none mb-0 quick-action-card" style="cursor: pointer;">
                  <div class="card-body text-center">
                    <span :class="`avatar avatar-xl avatar-rounded ${action.color} mb-3`">
                      <i :class="`${action.icon} fs-3`"></i>
                    </span>
                    <h6 class="fw-semibold mb-1">{{ action.title }}</h6>
                    <p class="text-muted fs-12 mb-0">{{ action.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- System Info -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">System Information</div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div class="p-3 border rounded">
                  <p class="mb-2 text-muted fs-12">Application Version</p>
                  <h6 class="fw-semibold mb-0">v1.0.0</h6>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div class="p-3 border rounded">
                  <p class="mb-2 text-muted fs-12">Laravel Version</p>
                  <h6 class="fw-semibold mb-0">{{ systemInfo.laravelVersion }}</h6>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div class="p-3 border rounded">
                  <p class="mb-2 text-muted fs-12">Vue Version</p>
                  <h6 class="fw-semibold mb-0">{{ systemInfo.vueVersion }}</h6>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div class="p-3 border rounded">
                  <p class="mb-2 text-muted fs-12">Environment</p>
                  <h6 class="fw-semibold mb-0">{{ systemInfo.environment }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Head, router } from '@inertiajs/vue3'

// Stats Data
const stats = ref({
  totalUsers: '2,543',
  activeProjects: '48',
  tasksCompleted: '326',
  revenue: '42,890'
})

// Recent Activities
const recentActivities = ref([
  {
    title: 'New User Registration',
    description: 'John Doe registered as a new user',
    time: '2 hours ago',
    icon: 'ri-user-add-line',
    color: 'bg-primary-transparent'
  },
  {
    title: 'Project Created',
    description: 'New project "Website Redesign" created',
    time: '4 hours ago',
    icon: 'ri-folder-add-line',
    color: 'bg-success-transparent'
  },
  {
    title: 'Task Completed',
    description: 'Database optimization task completed',
    time: '6 hours ago',
    icon: 'ri-checkbox-circle-line',
    color: 'bg-info-transparent'
  },
  {
    title: 'System Update',
    description: 'Application updated to v1.0.0',
    time: '1 day ago',
    icon: 'ri-refresh-line',
    color: 'bg-warning-transparent'
  }
])

// Quick Actions
const quickActions = ref([
  {
    title: 'Create Project',
    description: 'Start a new project',
    icon: 'ri-add-circle-line',
    color: 'bg-primary-transparent'
  },
  {
    title: 'Add User',
    description: 'Register new user',
    icon: 'ri-user-add-line',
    color: 'bg-success-transparent'
  },
  {
    title: 'View Reports',
    description: 'Check analytics',
    icon: 'ri-bar-chart-line',
    color: 'bg-info-transparent'
  },
  {
    title: 'Settings',
    description: 'Configure system',
    icon: 'ri-settings-3-line',
    color: 'bg-warning-transparent'
  }
])

// System Information
const systemInfo = ref({
  laravelVersion: '11.x',
  vueVersion: '3.x',
  environment: 'Development'
})

// Methods
const exploreDemo = () => {
  router.visit('/demo/dashboards/sales')
}
</script>

<style scoped>
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

.quick-action-card {
  transition: all 0.3s ease;
}

.quick-action-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.card {
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .col-md-6 {
    margin-bottom: 1rem;
  }
}
</style>
