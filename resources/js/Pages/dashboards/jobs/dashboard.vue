<script setup>
import * as JobsData from '@/shared/data/dashboards/jobs/dashboard'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkReusebleJobs from '@/shared/@spk/dashboards/jobs/dashboard/spk-reuseble-jobs.vue'
import { ref } from 'vue'
import BaseImg from '../../../components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'

// Page metadata
const dataToPass = {
  activepage: 'Dashboard',
  title: 'Dashboards',
  subtitle: 'Jobs',
  currentpage: 'Dashboard',
}

// Reactive job list
const Jobs = ref([...JobsData.JobsPostings])

// Methods
function handleToDelete(id) {
  Jobs.value = Jobs.value.filter((job) => job.id !== id)
}
</script>

<template>
  <Head title="Dashboards-Jobs | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row row-cols-xxl-5 row-cols-xl-3 row-cols-lg-3 row-cols-sm-2 row-cols-1">
    <div class="col" v-for="idx in JobsData.JobsCards" :key="idx.id">
      <SpkReusebleJobs
        :jobsCard="true"
        cardClass="card"
        :list="idx"
        :imageIcon="false"
        :NoCountUp="true"
      />
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xxl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Employees Performance</div>
        </div>
        <div class="card-body">
          <div id="employees-performance">
            <apexchart
              type="line"
              height="378px"
              :options="JobsData.JobsEmployeeOptions"
              :series="JobsData.JobsEmployeeSeries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Recent Activity</div>
        </div>
        <div class="card-body">
          <ul class="list-unstyled jobs-recent-activity-list">
            <li v-for="idx in JobsData.Jobsactivities" :key="idx.id">
              <div class="d-flex align-items-start gap-3 flex-wrap flex-xxl-nowrap">
                <div>
                  <span class="avatar avatar-md avatar-rounded">
                    <BaseImg :src="idx.avatar" alt="" />
                  </span>
                </div>
                <div>
                  <div class="d-flex align-items-center gap-2">
                    <div class="fw-semibold">{{ idx.name }}</div>
                    <span :class="`badge ${idx.badgeClass}`">{{ idx.badgeText }}</span>
                  </div>
                  <div class="fs-13 description mb-1">{{ idx.description }}</div>
                  <span class="d-block fs-12 text-muted">{{ idx.timestamp }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6">
      <div class="card custom-card overflow-hidden">
        <div class="card-header">
          <div class="card-title">Candidates Overview</div>
        </div>
        <div class="card-body">
          <div id="candidates-overview">
            <apexchart
              type="donut"
              height="236px"
              :options="JobsData.JobsOverviewOptions"
              :series="JobsData.JobsOverviewSeries"
            />
          </div>
        </div>
        <div class="card-footer p-0">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="d-flex align-items-center gap-2">
                <div class="lh-1">
                  <span class="avatar avatar-md bg-warning-transparent svg-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#5f6368"
                    >
                      <rect fill="none" height="24" width="24" />
                      <path
                        d="M9.5,11c1.93,0,3.5,1.57,3.5,3.5S11.43,18,9.5,18S6,16.43,6,14.5S7.57,11,9.5,11z M9.5,9C6.46,9,4,11.46,4,14.5 S6.46,20,9.5,20s5.5-2.46,5.5-5.5c0-1.16-0.36-2.23-0.97-3.12L18,7.42V10h2V4h-6v2h2.58l-3.97,3.97C11.73,9.36,10.66,9,9.5,9z"
                      />
                    </svg>
                  </span>
                </div>
                <div class="flex-fill">
                  <span class="fs-13 d-block">Male</span>
                  <h5 class="fw-semibold mb-0">15,976</h5>
                </div>
                <div>
                  <span class="text-success"><i class="ti ti-arrow-narrow-up me-1"></i>3.45%</span>
                  <span class="d-block fs-13 text-muted">This Year</span>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex align-items-center gap-2">
                <div class="lh-1">
                  <span class="avatar avatar-md bg-primary-transparent svg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#5f6368"
                    >
                      <rect fill="none" height="24" width="24" />
                      <path
                        d="M17.5,9.5C17.5,6.46,15.04,4,12,4S6.5,6.46,6.5,9.5c0,2.7,1.94,4.93,4.5,5.4V17H9v2h2v2h2v-2h2v-2h-2v-2.1 C15.56,14.43,17.5,12.2,17.5,9.5z M8.5,9.5C8.5,7.57,10.07,6,12,6s3.5,1.57,3.5,3.5S13.93,13,12,13S8.5,11.43,8.5,9.5z"
                      />
                    </svg>
                  </span>
                </div>
                <div class="flex-fill">
                  <span class="fs-13 d-block">Female</span>
                  <h5 class="fw-semibold mb-0">12,765</h5>
                </div>
                <div>
                  <span class="text-danger"><i class="ti ti-arrow-narrow-down me-1"></i>0.86%</span>
                  <span class="d-block fs-13 text-muted">This Year</span>
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
    <div class="col-xxl-6">
      <div class="card custom-card overflow-hidden">
        <div class="card-header">
          <div class="card-title">Recently Added Jobs</div>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <TableComponent
              tableClass="table text-nowrap"
              :headers="[
                { text: 'Company', thClass: '' },
                { text: 'Job Role', thClass: '' },
                { text: 'Location', thClass: '' },
                { text: 'Job Type', thClass: '' },
              ]"
              :rows="JobsData.JobsTable"
              v-slot:cell="{ row }"
            >
              <td :class="row.tdClass">
                <div class="d-flex align-items-center gap-2">
                  <span class="avatar avatar-sm bg-light avatar-rounded">
                    <BaseImg :src="row.companyLogo" alt="" />
                  </span>
                  <a href="javascript:void(0);" class="fw-medium">{{ row.companyName }}</a>
                </div>
              </td>
              <td :class="row.tdClass">{{ row.position }}</td>
              <td :class="row.tdClass">
                <span class="text-muted">
                  <i class="ti ti-map-pin me-1"></i> {{ row.location }}</span
                >
              </td>
              <td :class="row.tdClass">
                <span :class="`badge ${row.badgeClass} rounded-pill`">{{ row.jobType }}</span>
              </td>
            </TableComponent>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Acquisitions</div>
        </div>
        <div class="card-body">
          <div class="progress progress-md mb-4 mt-2">
            <div
              class="progress-bar bg-primary"
              role="progressbar"
              style="width: 52%"
              aria-valuenow="52"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              class="progress-bar bg-secondary"
              role="progressbar"
              style="width: 12%"
              aria-valuenow="12"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style="width: 16%"
              aria-valuenow="16"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              class="progress-bar bg-warning"
              role="progressbar"
              style="width: 12%"
              aria-valuenow="12"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              class="progress-bar bg-danger"
              role="progressbar"
              style="width: 8%"
              aria-valuenow="8"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <ul class="list-group acquisitions-list mt-1">
            <li
              :class="`list-group-item ${idx.liClass}`"
              v-for="idx in JobsData.Acquisitions"
              :key="idx.id"
            >
              {{ idx.label }}
              <span :class="`badge float-end bg-${idx.badgeClass}-transparent`">{{
                idx.count
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-12">
      <div class="card custom-card overflow-hidden">
        <div class="card-header">
          <div class="card-title">Recent Jobs</div>
        </div>
        <div class="card-body p-0">
          <ul class="list-group list-group-flush">
            <simplebar id="recent-jobs">
              <li
                :class="`list-group-item border-top-0 border-start-0 border-end-0 ${idx.id === 6 ? 'border-bottom-0' : ''}`"
                v-for="idx in JobsData.JobsRecent"
                :key="idx.id"
              >
                <a href="javascript:void(0);">
                  <div class="d-flex align-items-center flex-wrap">
                    <div class="me-2 lh-1">
                      <span :class="`avatar avatar-md avatar-rounded bg-${idx.bgClass}`">
                        {{ idx.initials }}
                      </span>
                    </div>
                    <div class="flex-fill">
                      <p class="mb-0 fw-semibold">{{ idx.title }}</p>
                      <p class="fs-12 text-muted mb-0">
                        {{ idx.companyInfo }} - {{ idx.timeInfo }}
                      </p>
                    </div>
                    <div class="text-end">
                      <p class="mb-0 fs-12">{{ idx.jobType }}</p>
                      <span :class="`badge bg-${idx.badgeClass}-transparent`">{{ idx.badge }}</span>
                    </div>
                  </div>
                </a>
              </li>
            </simplebar>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-3 -->

  <!-- Start:: row-4 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">Recent Job Postings</div>
          <div class="d-flex flex-wrap gap-2">
            <div>
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Search Here"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
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
              tableClass="table text-nowrap"
              :headers="[
                { text: 'S.No', thClass: '' },
                { text: 'Job Title', thClass: '' },
                { text: 'Department', thClass: '' },
                { text: 'Company Name', thClass: '' },
                { text: 'Location', thClass: '' },
                { text: 'Applications', thClass: '' },
                { text: 'Status', thClass: '' },
                { text: 'Posted By', thClass: '' },
                { text: 'Posted Date', thClass: '' },
                { text: 'Actions', thClass: '' },
              ]"
              :rows="Jobs"
              v-slot:cell="{ row }"
            >
              <td>{{ row.id }}</td>
              <td>{{ row.title }}</td>
              <td>{{ row.department }}</td>
              <td>{{ row.company }}</td>
              <td>{{ row.location }}</td>
              <td>{{ row.applicants }}</td>
              <td>
                <span
                  :class="`badge bg-${row.status === 'Active' ? 'success' : 'danger'}-transparent`"
                  >{{ row.status }}</span
                >
              </td>
              <td>
                <div class="d-flex align-items-center gap-2">
                  <div class="lh-1">
                    <span class="avatar avatar-xs avatar-rounded">
                      <BaseImg :src="row.avatar" alt="" />
                    </span>
                  </div>
                  <div>{{ row.applicantName }}</div>
                </div>
              </td>
              <td>{{ row.datePosted }}</td>
              <td>
                <div class="btn-list">
                  <button class="btn btn-primary-light btn-icon btn-sm">
                    <i class="ti ti-edit"></i>
                  </button>
                  <button
                    class="btn btn-danger-light btn-icon btn-sm"
                    @click="handleToDelete(row.id)"
                  >
                    <i class="ti ti-trash"></i>
                  </button>
                </div>
              </td>
            </TableComponent>
          </div>
        </div>
        <div class="card-footer border-top-0">
          <div class="d-flex align-items-center flex-wrap">
            <div>Showing 6 Entries <i class="bi bi-arrow-right ms-2 fw-semibold"></i></div>
            <div class="ms-auto">
              <nav aria-label="Page navigation" class="pagination-style-2">
                <ul class="pagination mb-0 flex-wrap">
                  <li class="page-item disabled">
                    <a class="page-link" href="javascript:void(0);"> Prev </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                  <li class="page-item active">
                    <a class="page-link" href="javascript:void(0);">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">
                      <i class="bi bi-three-dots"></i>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">17</a></li>
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
  <!-- End:: row-4 -->
</template>

<style scoped>
/* Add your styles here */
</style>
