<script setup>
import { ref } from 'vue'
import * as HrmData from '@/shared/data/dashboards/hrmdata'
import SpkReusebleHrmCard from '@/shared/@spk/dashboards/spk-reusable-hrmCard.vue'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'
const dataToPass = {
  title: 'Dashboards',
  currentpage: 'HRM',
  activepage: 'HRM',
}

const hrm = ref([...HrmData.Applicants])

const handleToDelete = (id) => {
  hrm.value = hrm.value.filter((applicant) => applicant.id !== id)
}
</script>

<template>
  <Head title="HRM | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xxl-4 col-xl-6">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card overflow-hidden">
            <div class="card-body p-0">
              <div class="row g-0">
                <div class="col-xl-6" v-for="idx in HrmData.Hrmcards" :key="idx.id">
                  <SpkReusebleHrmCard :card="idx" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-body">
              <h6 class="fw-semibold mb-3">Employees Status</h6>
              <div class="progress-stacked progress-xl mb-3">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  25%
                </div>
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style="width: 35%"
                  aria-valuenow="35"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  35%
                </div>
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  style="width: 25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  25%
                </div>
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style="width: 15%"
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  15%
                </div>
              </div>
              <div class="row gy-2">
                <div class="col-xl-6">
                  <div class="d-flex align-items-center gap-4 flex-wrap">
                    <div class="employee-status-marker remote">Remote :</div>
                    <div class="fw-semibold">4,075</div>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="d-flex align-items-center gap-4 flex-wrap">
                    <div class="employee-status-marker probation">Probation :</div>
                    <div class="fw-semibold">5,775</div>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="d-flex align-items-center gap-4 flex-wrap">
                    <div class="employee-status-marker contract">Contract :</div>
                    <div class="fw-semibold">3,976</div>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="d-flex align-items-center gap-4 flex-wrap">
                    <div class="employee-status-marker work-home">Work From Home :</div>
                    <div class="fw-semibold">1,675</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-5 col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Candidate Statistics</div>
        </div>
        <div class="card-body p-0">
          <div class="row g-0 border-bottom border-block-end-dashed">
            <div class="col-xl-6">
              <div class="text-center p-3">
                <span class="d-block text-muted mb-1">Total Candidates Hired</span>
                <h5 class="fw-semibold mb-0">576</h5>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="text-center p-3">
                <span class="d-block text-muted mb-1">Total Responses</span>
                <h5 class="fw-semibold mb-0">1,854</h5>
              </div>
            </div>
          </div>
          <div id="candidate-statistics" class="p-2">
            <apexchart
              type="line"
              height="322px"
              :options="HrmData.CandidateOptions"
              :series="HrmData.CandidateSeries"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Attendance Overview</div>
        </div>
        <div class="card-body">
          <div id="attendance-overview">
            <apexchart
              type="donut"
              height="260px"
              :options="HrmData.AttendanceOptions"
              :series="HrmData.AttendanceSeries"
            ></apexchart>
          </div>
          <ul class="list-unstyled my-4 hrm-attendance-overview-list">
            <li v-for="idx in HrmData.AttendanceData" :key="idx.id">
              <div class="d-flex align-items-center justify-content-between gap-2">
                <div :class="`attendance-type ${idx.className}`">{{ idx.type }}</div>
                <div class="fw-semibold">{{ idx.count }}</div>
              </div>
            </li>
          </ul>
          <div class="d-grid">
            <button class="btn btn-light btn-lg">
              View Complete Statistics <i class="ti ti-arrow-narrow-right ms-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xxl-4">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Employees By Department</div>
        </div>
        <div class="card-body">
          <div id="employee-department">
            <apexchart
              type="bar"
              height="367px"
              :options="HrmData.EmployeeOptions"
              :series="HrmData.EmployeeSeries"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-4">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">Employees List</div>
          <a href="javascript:void(0);" class="text-muted fs-13"
            >View All<i class="ti ti-arrow-narrow-right ms-1"></i
          ></a>
        </div>
        <div class="card-body">
          <ul class="list-unstyled hrm-employee-list">
            <li v-for="idx in HrmData.Employees" :key="idx.id">
              <div class="d-flex align-items-center gap-2 flex-wrap">
                <div class="lh-1">
                  <span class="avatar avatar-md avatar-rounded">
                    <BaseImg :src="idx.image" alt="" />
                  </span>
                </div>
                <div class="flex-fill">
                  <span class="d-block fw-semibold"
                    >{{ idx.name
                    }}<span :class="`badge bg-${idx.badgeColor}-transparent ms-2`">{{
                      idx.department
                    }}</span></span
                  >
                  <span class="text-muted fs-13">
                    {{ idx.role }}
                  </span>
                </div>
                <div class="text-end">
                  <span class="fw-medium">{{ idx.joinDate }}</span>
                  <span class="d-block fs-12 mt-1 text-muted"> Joined </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xxl-4">
      <div class="card custom-card overflow-hidden">
        <div class="card-header justify-content-between">
          <div class="card-title">Today's Attendance</div>
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="fs-12 text-muted"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort By <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">This Month</a></li>
            </ul>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <TableComponent
              tableClass="table text-nowrap table-hover"
              theadClass="table-header-light"
              :headers="[
                { text: 'Name', thClass: '' },
                { text: 'Time In', thClass: '' },
                { text: 'Status', thClass: '' },
              ]"
              :rows="HrmData.AttendancesToday"
              v-slot:cell="{ row }"
            >
              <td :class="row.tdClass">
                <div class="d-flex align-items-center gap-2">
                  <span class="avatar avatar-md bg-light p-1 avatar-rounded">
                    <BaseImg :src="row.image" alt="" />
                  </span>
                  <div>
                    <p class="fw-medium mb-0">{{ row.name }}</p>
                    <span class="text-muted fs-12">{{ row.role }}</span>
                  </div>
                </div>
              </td>
              <td :class="row.tdClass">
                {{ row.time }}
              </td>
              <td :class="row.tdClass">
                <span :class="`badge bg-${row.badgeColor}-transparent rounded-pill min-w-badge`">{{
                  row.status
                }}</span>
              </td>
            </TableComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">Applicant Details</div>
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
              tableClass="table text-nowrap table-hover"
              :showCheckbox="true"
              theadClass="table-header-light"
              :headers="[
                { text: 'Application ID', thClass: '' },
                { text: 'Applicant Name', thClass: '' },
                { text: 'Position Applied', thClass: '' },
                { text: 'Date Of Application', thClass: '' },
                { text: 'Email', thClass: '' },
                { text: 'Work Experience', thClass: '' },
                { text: 'Status', thClass: '' },
                { text: 'Action', thClass: '' },
              ]"
              :rows="hrm"
              v-slot:cell="{ row }"
            >
              <td>
                {{ row.application }}
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="avatar avatar-sm me-2 avatar-rounded">
                    <BaseImg :src="row.image" alt="img" /> </span
                  >{{ row.name }}
                </div>
              </td>
              <td>{{ row.role }}</td>
              <td>{{ row.dateApplied }}</td>
              <td>
                {{ row.email }}
              </td>
              <td>{{ row.experience }}</td>
              <td>
                <span
                  :class="`badge bg-${row.status === 'New' ? 'primary' : row.status === 'Interviewed' ? 'success' : row.status === 'Hired' ? 'info' : row.status === 'Under Review' ? 'secondary' : 'danger'}-transparent`"
                  >{{ row.status }}</span
                >
              </td>
              <td>
                <div class="hstack gap-2 fs-15">
                  <a
                    aria-label="anchor"
                    href="javascript:void(0);"
                    class="btn btn-icon waves-effect waves-light btn-sm btn-success-light rounded-circle"
                    ><i class="ri-phone-line"></i
                  ></a>
                  <a
                    aria-label="anchor"
                    href="javascript:void(0);"
                    class="btn btn-icon waves-effect waves-light btn-sm btn-primary-light rounded-circle"
                    ><i class="ri-edit-line"></i
                  ></a>
                  <a
                    aria-label="anchor"
                    href="javascript:void(0);"
                    class="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-danger-light rounded-circle"
                    @click="handleToDelete(row.id)"
                    ><i class="ri-delete-bin-line"></i
                  ></a>
                </div>
              </td>
            </TableComponent>
          </div>
        </div>
        <div class="card-footer border-top-0">
          <div class="d-flex align-items-center">
            <div>Showing 5 Entries <i class="bi bi-arrow-right ms-2 fw-semibold"></i></div>
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
  <!-- End:: row-3 -->
</template>

<style scoped>
/* Add your styles here */
</style>
