<script setup>
import { Head } from '@inertiajs/vue3'
import { ref } from 'vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkProjectDashboard from '@/shared/@spk/dashboards/projects/spk-project-dashboard.vue'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import * as ProjectDashboard from '@/shared/data/dashboards/projects/dashboarddata'

const dataToPass = {
  activepage: 'Projects',
  title: 'Dashboards',
  subtitle: 'Projects',
  currentpage: 'Dashboard',
}

const projects = ref([...ProjectDashboard.ProjectsSummary])

function handleToDelete(id) {
  projects.value = projects.value.filter(project => project.id !== id)
}
</script>

<template>
  <Head title="Projects-Dashboards | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xxl-9">
      <div class="row">
        <div v-for="idx in ProjectDashboard.DashboardCards" :key="idx.id" class="col-xl-3">
          <SpkProjectDashboard :card="idx" />
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">
                Projects Overview
              </div>
            </div>
            <div class="card-body">
              <div id="projects-overview">
                <Apexchart
                  type="area"
                  height="408px"
                  :options="ProjectDashboard.ProjectOptions"
                  :series="ProjectDashboard.ProjectSeries"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="card custom-card overflow-hidden">
        <div class="card-header">
          <div class="card-title">
            Task Activity
          </div>
        </div>
        <div class="card-body">
          <div id="task-activity">
            <Apexchart
              type="radialBar"
              height="235px"
              :options="ProjectDashboard.TaskOptions"
              :series="ProjectDashboard.TaskSeries"
            />
          </div>
        </div>
        <div class="card-footer p-0">
          <ul class="list-group list-group-flush project-task-activity-list">
            <li v-for="idx in ProjectDashboard.TaskList" :key="idx.id" class="list-group-item">
              <div class="d-flex align-items-start gap-2">
                <div class="flex-fill">
                  <span :class="`d-block fw-semibold task-type ${idx.className}`">{{
                    idx.type
                  }}</span>
                  <span class="fs-12 text-muted">{{ idx.trend }} by
                    <span
                      :class="`text-${idx.trend === 'Increased' ? 'success' : 'danger'} mx-1`"
                    >{{ idx.percentage }}</span>
                    This year</span>
                </div>
                <div class="fw-semibold">
                  {{ idx.count }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xxl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Recent Activity
          </div>
        </div>
        <div class="card-body">
          <ul class="list-unstyled projects-recent-activity-list">
            <li v-for="idx in ProjectDashboard.Recentupdates" :key="idx.id">
              <div class="d-flex align-items-start gap-3">
                <div>
                  <span :class="`avatar avatar-md avatar-rounded ${idx.status}`">
                    <BaseImg :src="idx.avatar" alt="" />
                  </span>
                </div>
                <div class="flex-fill">
                  <div class="d-flex align-items-start justify-content-between mb-1 flex-wrap">
                    <div class="d-block fw-semibold">
                      {{ idx.name }}
                    </div>
                    <span class="badge bg-light text-muted border">{{ idx.date }}</span>
                  </div>
                  <div :class="`descrption ${idx.file ? 'mb-1' : ''}`">
                    {{ idx.description }}
                  </div>
                  <div v-if="idx.file" class="p-1 border border-dotted rounded position-relative">
                    <a href="javascript:void(0);" class="stretched-link" />
                    <div class="d-flex align-items-center gap-2">
                      <span class="badge bg-success">PPT</span>
                      <span class="fs-11">Project_discussion</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xxl-6">
      <div class="card custom-card overflow-hidden">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Urgent Tasks
          </div>
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="p-2 fs-12 text-muted"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Today<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a class="dropdown-item" href="javascript:void(0);">Week</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
            </ul>
          </div>
        </div>
        <div class="card-body p-0">
          <TableComponent
            #cell="{ row }"
            table-class="table text-nowrap"
            :headers="[
              { text: 'Task', thClass: '' },
              { text: 'Deadline', thClass: '' },
              { text: 'Assigned To', thClass: '' },
              { text: 'Priority', thClass: '' },
              { text: 'Status', thClass: '' },
            ]"
            :rows="ProjectDashboard.UrgentTasks"
          >
            <td :class="row.tdClass">
              <div class="d-flex align-items-center gap-2">
                <div class="form-check mb-0">
                  <input
                    :id="`urgent-task${row.id}`"
                    class="form-check-input"
                    type="checkbox"
                    value=""
                  >
                </div>
                <a href="javascript:void(0);" class="urgent-task-title">{{ row.title }}</a>
              </div>
            </td>
            <td :class="row.tdClass">
              {{ row.dueDate }}
            </td>
            <td :class="row.tdClass">
              <div class="avatar-list-stacked">
                <span
                  v-for="(img, index) in row.avatars"
                  :key="index"
                  class="avatar avatar-xs avatar-rounded mx-2"
                >
                  <BaseImg :src="img" alt="img" />
                </span>
              </div>
            </td>
            <td :class="row.tdClass">
              {{ row.priority }}
            </td>
            <td :class="row.tdClass">
              <span :class="`badge bg-${row.statusClass}-transparent`">{{ row.status }}</span>
            </td>
          </TableComponent>
        </div>
        <div class="card-footer">
          <div class="d-flex align-items-center">
            <div>Showing 6 Entries <i class="bi bi-arrow-right ms-2 fw-semibold" /></div>
            <div class="ms-auto">
              <nav aria-label="Page navigation" class="pagination-style-2">
                <ul class="pagination mb-0 flex-wrap">
                  <li class="page-item disabled">
                    <a class="page-link" href="javascript:void(0);"> Prev </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">1</a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="javascript:void(0);">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">
                      <i class="bi bi-three-dots" />
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">17</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link text-primary" href="javascript:void(0);"> next </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="card custom-card overflow-hidden">
        <div class="card-header">
          <div class="card-title">
            Recent Transactions
          </div>
        </div>
        <div class="card-body">
          <ul class="list-unstyled projects-recent-transactions-list">
            <li v-for="transaction in ProjectDashboard.Transactions" :key="transaction.id">
              <div class="d-flex align-items-center gap-2">
                <div class="lh-1">
                  <span
                    :class="`avatar avatar-md avatar-rounded bg-${transaction.avatarColor}-transparent`"
                  >
                    {{ transaction.name ? transaction.name.charAt(0) : '?' }}
                  </span>
                </div>
                <div class="flex-fill">
                  <span class="d-block fw-semibold">{{ transaction.name }}</span>
                  <span class="fs-13 text-muted">{{ transaction.dateTime }}</span>
                </div>
                <div class="text-end">
                  <span class="d-block fw-semibold">{{ transaction.amount }}</span>
                  <span
                    class="fw-medium fs-13" :class="[
                      transaction.status === 'Completed'
                        ? 'text-success'
                        : transaction.status === 'Pending'
                          ? 'text-warning'
                          : 'text-danger',
                    ]"
                  >
                    {{ transaction.status }}
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card custom-project-table">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Projects Summary
          </div>
          <div class="d-flex flex-wrap gap-2">
            <div>
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Search Here"
                aria-label=".form-control-sm example"
              >
            </div>
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
              </a>
              <ul class="dropdown-menu" role="menu">
                <li><a class="dropdown-item" href="javascript:void(0);">New</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Popular</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Relevant</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <TableComponent
              #cell="{ row }"
              table-class="table text-nowrap"
              :show-checkbox="true"
              :headers="[
                { text: 'Project Name', thClass: '' },
                { text: 'Start Date', thClass: '' },
                { text: 'End Date', thClass: '' },
                { text: 'Status', thClass: '' },
                { text: 'Progress', thClass: '' },
                { text: 'Team', thClass: '' },
                { text: 'Budget', thClass: '' },
                { text: 'Actions', thClass: '' },
              ]"
              :rows="projects"
            >
              <td :class="row.tdClass">
                {{ row.name }}
              </td>
              <td :class="row.tdClass">
                {{ row.startDate }}
              </td>
              <td :class="row.tdClass">
                {{ row.endDate }}
              </td>
              <td :class="row.tdClass">
                <span
                  class="badge" :class="[
                    `bg-${row.status === 'Completed' ? 'success' : 'primary'}-transparent`,
                  ]"
                >
                  {{ row.status }}
                </span>
              </td>
              <td :class="row.tdClass">
                <div class="d-flex align-items-center">
                  <div
                    class="progress progress-animate progress-xs w-100"
                    role="progressbar"
                    :aria-valuenow="row.progress"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      :class="`progress-bar progress-bar-striped progress-bar-animated bg-${row.progressColor}`"
                      :style="`width: ${row.progress}%`"
                    />
                  </div>
                  <div class="ms-2">
                    {{ row.progress }}%
                  </div>
                </div>
              </td>
              <td :class="row.tdClass">
                <div class="avatar-list-stacked">
                  <span
                    v-for="(avatar, i) in row.avatars"
                    :key="i"
                    class="avatar avatar-xs avatar-rounded mx-2"
                  >
                    <BaseImg :src="avatar" alt="avatar" class="" />
                  </span>
                  <a
                    v-if="row.moreAvatars"
                    class="avatar avatar-xs bg-primary avatar-rounded text-fixed-white mx-2"
                    href="javascript:void(0);"
                  >
                    +{{ row.moreAvatars }}
                  </a>
                </div>
              </td>
              <td :class="row.tdClass">
                {{ row.amount }}
              </td>
              <td :class="row.tdClass">
                <div class="btn-list">
                  <button class="btn btn-sm btn-icon btn-primary-light btn-wave">
                    <i class="ri-edit-line" />
                  </button>
                  <button
                    class="btn btn-sm btn-icon btn-danger-light btn-wave"
                    @click="handleToDelete(row.id)"
                  >
                    <i class="ri-delete-bin-line" />
                  </button>
                </div>
              </td>
            </TableComponent>
          </div>
        </div>
        <div class="card-footer">
          <div class="d-flex align-items-center">
            <div>Showing 6 Entries <i class="bi bi-arrow-right ms-2 fw-semibold" /></div>
            <div class="ms-auto">
              <nav aria-label="Page navigation" class="pagination-style-2">
                <ul class="pagination mb-0 flex-wrap">
                  <li class="page-item disabled">
                    <a class="page-link" href="javascript:void(0);"> Prev </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">1</a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="javascript:void(0);">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">
                      <i class="bi bi-three-dots" />
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">17</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link text-primary" href="javascript:void(0);"> next </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-3 -->
</template>

<style scoped>
/* Add your styles here */
</style>
