<script setup>
import * as MedicalData from '@/shared/data/dashboards/medicaldata.js'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkReusableMedicalcard from '@/shared/@spk/dashboards/spk-reusable-medicalcard.vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'

const dataToPass = {
  title: 'Dashboards',
  currentpage: 'Medical',
  activepage: 'Medical',
}
</script>

<template>
  <Head title="Medical | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xxl-5">
      <div class="row">
        <div class="col-xl-6" v-for="idx in MedicalData.MedicalCards" :key="idx.id">
          <SpkReusableMedicalcard :card="idx" />
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header justify-content-between">
              <div class="card-title">Patient Statistics</div>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button
                  type="button"
                  class="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                >
                  1D
                </button>
                <button
                  type="button"
                  class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                >
                  1W
                </button>
                <button
                  type="button"
                  class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                >
                  1M
                </button>
                <button
                  type="button"
                  class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                >
                  6M
                </button>
                <button
                  type="button"
                  class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                >
                  1Y
                </button>
              </div>
            </div>
            <div class="card-body">
              <div id="patients-statistics">
                <apexchart
                  type="bar"
                  height="260px"
                  :options="MedicalData.MedicalOptions"
                  :series="MedicalData.MedicalSeries"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-7">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card available-treatments-card">
            <div class="card-header justify-content-between">
              <div class="card-title">Available Treatments</div>
              <a href="javascript:void(0);" class="text-muted fs-13"
                >View All<i class="ti ti-arrow-narrow-right ms-1"></i
              ></a>
            </div>
            <div class="card-body">
              <div class="row gy-sm-0 gy-3 gx-3 !flex-wrap">
                <div
                  class="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-3 col text-center"
                  v-for="idx in MedicalData.Departments"
                  :key="idx.id"
                >
                  <a
                    aria-label="anchor"
                    href="javascript:void(0);"
                    :class="`btn btn-${idx.btnClass}-light btn-icon`"
                  >
                    <i :class="idx.iconClass"></i>
                  </a>
                  <a href="javascript:void(0);" class="d-block mt-3 fw-medium">{{ idx.label }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-7">
          <div class="card custom-card overflow-hidden">
            <div class="card-header justify-content-between">
              <div class="card-title">Today's Appointments</div>
              <a href="javascript:void(0);" class="text-muted fs-13"
                >View All<i class="ti ti-arrow-narrow-right ms-1"></i
              ></a>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive">
                <TableComponent
                  tableClass="table text-nowrap appointments-table"
                  :rows="MedicalData.Appointments"
                  v-slot:cell="{ row }"
                >
                  <td :class="row.tdClass">
                    <div class="d-flex align-items-center gap-2">
                      <div class="lh-1">
                        <span class="avatar avatar-sm avatar-rounded">
                          <BaseImg :src="row.imageUrl" alt="" />
                        </span>
                      </div>
                      <div>
                        <span class="fw-semibold d-block">{{ row.name }}</span>
                        <span class="fs-13 text-muted">{{ row.gender }},{{ row.age }}Yrs</span>
                      </div>
                    </div>
                  </td>
                  <td :class="row.tdClass">
                    <span :class="`badge bg-${row.badgeClass}-transparent`">{{
                      row.department
                    }}</span>
                  </td>
                  <td :class="row.tdClass">
                    {{ row.time }}
                  </td>
                </TableComponent>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-5">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Available Doctors</div>
            </div>
            <div class="card-body">
              <nav class="nav nav-style-1 nav-pills mb-4 nav-justified" role="tablist">
                <a
                  class="nav-link px-2"
                  data-bs-toggle="tab"
                  role="tab"
                  href="#tue"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <span class="d-block mb-1">22</span>
                  <span class="op-6 fs-12">Sat</span>
                </a>
                <a
                  class="nav-link px-2"
                  data-bs-toggle="tab"
                  role="tab"
                  href="#wed"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <span class="d-block mb-1">23</span>
                  <span class="op-6 fs-12">Sun</span>
                </a>
                <a
                  class="nav-link px-2 active"
                  data-bs-toggle="tab"
                  aria-current="page"
                  role="tab"
                  href="#thu"
                  aria-selected="true"
                  tabindex="-1"
                >
                  <span class="d-block mb-1">24</span>
                  <span class="op-6 fs-12">Mon</span>
                </a>
                <a
                  class="nav-link px-2"
                  data-bs-toggle="tab"
                  role="tab"
                  href="#fri"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <span class="d-block mb-1">25</span>
                  <span class="op-6 fs-12">Tue</span>
                </a>
                <a
                  class="nav-link px-2"
                  data-bs-toggle="tab"
                  role="tab"
                  href="#sat"
                  aria-selected="false"
                  tabindex="-1"
                >
                  <span class="d-block mb-1">26</span>
                  <span class="op-6 fs-12">Wed</span>
                </a>
              </nav>
              <simplebar id="available-doctors">
                <ul class="list-unstyled availabe-doctors-list">
                  <li v-for="idx in MedicalData.DoctorSchedules" :key="idx.id">
                    <div class="d-flex align-items-start gap-2">
                      <div class="flex-fill">
                        <span class="d-block fw-semibold">{{ idx.name }}</span>
                        <span :class="`text-${idx.departmentClass} fs-13`">{{
                          idx.department
                        }}</span>
                      </div>
                      <div class="fs-13 text-muted d-flex align-items-center gap-1">
                        <i class="ti ti-clock-hour-3"></i>{{ idx.time }}
                      </div>
                    </div>
                  </li>
                </ul>
              </simplebar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xxl-3 col-xl-6">
      <div class="card custom-card overflow-hidden">
        <div class="card-header">
          <div class="card-title">Patients Visits</div>
        </div>
        <div class="card-body">
          <div id="patients-visits">
            <apexchart
              type="radialBar"
              height="223px"
              :options="MedicalData.PatientsOptions"
              :series="MedicalData.PatientsSeries"
            />
          </div>
        </div>
        <div class="card-footer p-0">
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="idx in MedicalData.GenderData" :key="idx.id">
              <div class="d-flex align-items-center gap-2">
                <div class="lh-1">
                  <span
                    :class="`avatar avatar-md avatar-rounded bg-${idx.avatarBgClass}-transparent`"
                  >
                    <i :class="`ti ti-gender-${idx.iconClass} fs-5`"></i>
                  </span>
                </div>
                <div class="flex-fill">
                  <span class="fw-semibold d-block">{{ idx.label }}</span>
                  <span class="fs-13 d-block text-muted"
                    ><span
                      :class="`text-${idx.trendColorClass} me-2 d-inline-flex align-items-center`"
                      ><i :class="`ti ti-trending-${idx.trendIconClass} me-1 align-middle`"></i
                      >{{ idx.trendText }}</span
                    >{{ idx.trendLabel }}</span
                  >
                </div>
                <div :class="`text-${idx.trendColor} fw-semibold`">{{ idx.percentage }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6">
      <div class="card custom-card overflow-hidden">
        <div class="card-header justify-content-between">
          <div class="card-title">Top Doctors</div>
          <a href="javascript:void(0);" class="fs-13 text-muted"
            >View All<i class="ti ti-arrow-narrow-right ms-1"></i
          ></a>
        </div>
        <div class="card-body p-0">
          <ul class="list-group list-group-flush custom-doctors">
            <li class="list-group-item" v-for="idx in MedicalData.Doctors" :key="idx.id">
              <a href="javascript:void(0);" class="stretched-link"></a>
              <div class="d-flex align-items-center gap-3">
                <div class="lh-1">
                  <span class="avatar avatar-md avatar-rounded bg-light">
                    <BaseImg :src="idx.image" alt="" />
                  </span>
                </div>
                <div class="flex-fill">
                  <span class="d-block fw-semibold">{{ idx.name }}</span>
                  <span class="d-block fs-13 text-muted">{{ idx.specialization }}</span>
                </div>
                <div class="text-end">
                  <div>
                    <span class="d-inline-flex align-items-center"
                      >{{ idx.rating }}<i class="ti ti-star-filled m-1 text-warning me-0"></i
                    ></span>
                  </div>
                  <span class="fs-13 text-muted">{{ idx.experience }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">Patients Reports</div>
          <a href="javascript:void(0);" class="fs-13 text-muted"
            >View All<i class="ti ti-arrow-narrow-right ms-1"></i
          ></a>
        </div>
        <div class="card-body">
          <ul class="list-unstyled patients-reports-list">
            <li v-for="idx in MedicalData.TestRecords" :key="idx.id">
              <div class="d-flex align-items-center gap-2 flex-wrap">
                <div class="lh-1">
                  <span :class="`avatar avatar-md bg-${idx.bgClass}-transparent avatar-rounded`">
                    <i :class="`ti ti-${idx.iconClass} fs-20`"></i>
                  </span>
                </div>
                <div class="flex-fill">
                  <span class="d-block fw-semibold">{{ idx.name }}</span>
                  <span class="d-block fs-13 text-muted">{{ idx.testType }}</span>
                </div>
                <div class="text-end">
                  <span class="d-flex align-items-center gap-1"
                    ><i :class="`ti ti-${idx.statusIcon} text-${idx.statusColor} fs-20`"></i
                    >{{ idx.statusText }}</span
                  >
                  <span class="fs-13 text-muted">{{ idx.date }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Top Departments</div>
        </div>
        <div class="card-body py-0">
          <div id="top-departments">
            <apexchart
              type="bar"
              height="358px"
              :options="MedicalData.DepartmentOptions"
              :series="MedicalData.DepartmentSeries"
            />
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
          <div class="card-title">Patient Records</div>
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
                { text: 'Patient ID', thClass: '' },
                { text: 'Name', thClass: '' },
                { text: 'Age', thClass: '' },
                { text: 'Gender', thClass: '' },
                { text: 'Consultation Type', thClass: '' },
                { text: 'Doctor', thClass: '' },
                { text: 'Status', thClass: '' },
                { text: 'Appointment Date', thClass: '' },
                { text: 'Time', thClass: '' },
                { text: 'Actions', thClass: '' },
              ]"
              :rows="MedicalData.PatientRecords"
              v-slot:cell="{ row }"
            >
              <td>
                {{ row.id }}
              </td>
              <td>
                {{ row.name }}
              </td>
              <td>
                {{ row.age }}
              </td>
              <td>
                {{ row.gender }}
              </td>
              <td>
                {{ row.department }}
              </td>
              <td>
                <div class="d-flex align-items-center gap-2">
                  <div class="lh-1">
                    <span class="avatar avatar-sm avatar-rounded bg-light">
                      <BaseImg :src="row.doctorImage" alt="" />
                    </span>
                  </div>
                  <div>
                    {{ row.doctorName }}
                  </div>
                </div>
              </td>
              <th>
                <span :class="`badge bg-${row.statusBadgeClass}-transparent`">{{
                  row.status
                }}</span>
              </th>
              <th>
                {{ row.date }}
              </th>
              <th>
                {{ row.time }}
              </th>
              <th>
                <div class="dropdown">
                  <a
                    aria-label="anchor"
                    href="javascript:void(0);"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    class="btn btn-icon btn-sm btn-light"
                  >
                    <i class="ti ti-dots-vertical"></i>
                  </a>
                  <ul class="dropdown-menu" role="menu">
                    <li>
                      <a
                        class="dropdown-item d-inline-flex align-items-center"
                        href="javascript:void(0);"
                        ><i class="ti ti-eye me-2"></i>View</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-inline-flex align-items-cente"
                        href="javascript:void(0);"
                        ><i class="ti ti-edit me-2"></i>Edit</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item d-inline-flex align-items-cente"
                        href="javascript:void(0);"
                        ><i class="ti ti-trash me-2"></i>Delete</a
                      >
                    </li>
                  </ul>
                </div>
              </th>
            </TableComponent>
          </div>
        </div>
        <div class="card-footer border-top-0">
          <div class="d-flex align-items-center">
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
  <!-- End:: row-3 -->
</template>

<style scoped>
/* Add your styles here */
</style>
