<script setup>
import { Head } from '@inertiajs/vue3'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkReusebleSchoolCard from '@/shared/@spk/dashboards/spk-reuseble-schoolCard.vue'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import * as SchoolData from '@/shared/data/dashboards/schooldata'

const dataToPass = {
  title: 'Dashboards',
  currentpage: 'School',
  activepage: 'School',
}
</script>

<template>
  <Head title="School | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xxl-3">
      <div class="row">
        <div v-for="idx in SchoolData.SchoolCardsData" :key="idx.id" class="col-xxl-12 col-lg-6">
          <SpkReusebleSchoolCard :card="idx" />
        </div>
      </div>
    </div>
    <div class="col-xxl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            School Revenue
          </div>
        </div>
        <div class="card-body">
          <div id="school-revenue">
            <Apexchart
              type="line"
              height="320px"
              :options="SchoolData.SchoolOptions"
              :series="SchoolData.SchoolSeries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Events
          </div>
        </div>
        <div class="card-body">
          <ul class="list-unstyled school-events-list">
            <li v-for="idx in SchoolData.SchoolEvents" :key="idx.id">
              <div class="d-flex align-items-center gap-3 flex-wrap flex-xxl-nowrap">
                <div class="lh-1">
                  <span :class="`avatar avatar-md bg-${idx.bgClass}-transparent`">
                    <i :class="`ti ti-${idx.icon} fs-5`" />
                  </span>
                </div>
                <div class="flex-grow-1">
                  <div class="d-flex align-items-center gap-3 justify-content-between flex-wrap">
                    <span class="d-block fw-semibold">{{ idx.title }}</span>
                    <span class="badge bg-light text-default border">{{ idx.date }}</span>
                  </div>
                  <div class="text-muted fs-13 event-description">
                    {{ idx.description }}
                  </div>
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
            Students Activity
          </div>
        </div>
        <div class="card-body">
          <ul class="list-unstyled students-activity-list">
            <li v-for="idx in SchoolData.StudentActivities" :key="idx.id">
              <div class="d-flex align-items-start gap-2">
                <div class="lh-1">
                  <span
                    :class="`avatar avatar-md avatar-rounded ${idx.initials ? 'bg-warning' : ''} `"
                  >
                    <BaseImg v-if="idx.avatar" :src="idx.avatar" alt="" />
                    <template v-if="idx.initials">
                      {{ idx.initials }}
                    </template>
                  </span>
                </div>
                <div class="flex-fill">
                  <div class="d-flex align-items-start justify-content-between gap-3">
                    <span class="d-block fw-semibold">{{ idx.name }}</span>
                    <span :class="`badge bg-${idx.badgeClass}-transparent`">{{ idx.date }}</span>
                  </div>
                  <span class="fs-13 text-muted">{{ idx.description }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Students Overview
          </div>
        </div>
        <div class="card-body">
          <div id="students-overview">
            <Apexchart
              type="donut"
              height="227px"
              :options="SchoolData.SchoolOverviewOptions"
              :series="SchoolData.SchoolOverviewSeries"
            />
          </div>
        </div>
        <div class="card-footer">
          <div class="row g-0">
            <div class="col border-end border-inline-end-dashed">
              <div class="text-center">
                <span class="student-overview-type boys">Boys</span>
                <h5
                  class="mb-0 mt-1 fw-semibold d-flex align-items-center justify-content-center gap-1"
                >
                  6,560
                  <span
                    class="badge bg-success-transparent rounded-pill d-inline-flex align-items-center"
                  >
                    <i class="ti ti-arrow-up me-1" />2.45%
                  </span>
                </h5>
              </div>
            </div>
            <div class="col">
              <div class="text-center">
                <span class="student-overview-type girls">Girls</span>
                <h5
                  class="mb-0 mt-1 fw-semibold d-flex align-items-center justify-content-center gap-1"
                >
                  3,354
                  <span
                    class="badge bg-danger-transparent rounded-pill d-inline-flex align-items-center"
                  >
                    <i class="ti ti-arrow-down me-1" />6.76%
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="card custom-card overflow-hidden">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Top Students
          </div>
          <a href="javascript:void(0);" class="text-muted fs-13">View All<i class="ti ti-arrow-narrow-right ms-1" /></a>
        </div>
        <div class="card-body p-0">
          <ul class="list-group list-group-flush">
            <li v-for="idx in SchoolData.TopStudents" :key="idx.id" class="list-group-item">
              <div class="d-flex align-items-center gap-2">
                <div class="lh-1">
                  <span class="avatar avatar-md">
                    <BaseImg :src="idx.avatar" alt="" />
                  </span>
                </div>
                <div class="flex-fill">
                  <span class="d-block fw-semibold">{{ idx.name }}</span>
                  <span class="fs-13 text-muted">{{ idx.grade }}</span>
                </div>
                <div class="text-end">
                  <span>GPA : <span class="fw-medium text-primary">{{ idx.gpa }}</span></span>
                  <span :class="`text-${idx.achievementClass} fs-13 d-block`">{{
                    idx.achievement
                  }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="card custom-card overflow-hidden">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Students Fee Analytics
          </div>
          <a href="javascript:void(0);" class="text-muted fs-13">View All<i class="ti ti-arrow-narrow-right ms-1" /></a>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table text-nowrap">
              <tbody>
                <tr v-for="idx in SchoolData.Analyticspayments" :key="idx.id">
                  <td :class="idx.tdClass">
                    #SP0{{ idx.id }}
                  </td>
                  <td :class="idx.tdClass">
                    <div class="d-flex align-items-center gap-2">
                      <div class="lh-1">
                        <span class="avatar avatar-md avatar-rounded">
                          <BaseImg :src="idx.imageUrl" alt="img" />
                        </span>
                      </div>
                      <div>
                        <span class="d-block fw-semibold lh-1 mb-1">{{ idx.name }}</span>
                        <span class="fs-13 text-muted">{{ idx.feeType }}</span>
                      </div>
                    </div>
                  </td>
                  <td :class="`text-end ${idx.tdClass}`">
                    <span
                      :class="`${idx.status === 'Paid' ? 'text-success' : idx.status === 'Pending' ? 'text-danger' : 'text-warning'} fs-13 fw-semibold `"
                    >{{ idx.status }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xxl-9">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Student Summary
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
              :headers="[
                { text: 'Student ID', thClass: '' },
                { text: 'Name', thClass: '' },
                { text: 'Grade', thClass: '' },
                { text: 'Fee Status', thClass: '' },
                { text: 'Attendance (%)', thClass: '' },
                { text: 'Marks (%)', thClass: '' },
                { text: 'Last Payment Date', thClass: '' },
                { text: 'Total Fees Paid', thClass: '' },
              ]"
              :rows="SchoolData.StudentPayments"
            >
              <td>SPK0{{ row.id }}</td>
              <td>
                <div class="d-flex align-items-center gap-2">
                  <div class="lh-1">
                    <span class="avatar avatar-sm avatar-rounded">
                      <BaseImg :src="row.imageUrl" alt="" />
                    </span>
                  </div>
                  <div class="fw-semibold">
                    {{ row.name }}
                  </div>
                </div>
              </td>
              <td>{{ row.grade }}</td>
              <td>
                <span
                  :class="`badge ${row.status === 'Paid' ? 'bg-success' : row.status === 'Pending' ? 'bg-warning' : 'bg-danger'}`"
                >{{ row.status }}</span>
              </td>
              <td>{{ row.currentPerformance }}</td>
              <td>{{ row.previousPerformance }}</td>
              <td>{{ row.dueDate }}</td>
              <td>{{ row.amount }}</td>
            </TableComponent>
          </div>
        </div>
        <div class="card-footer border-top-0">
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
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Attendance Overview
          </div>
          <a href="javascript:void(0)" class="btn btn-primary-light btn-sm">View All</a>
        </div>
        <div class="card-body">
          <div id="attendance-overview">
            <Apexchart
              type="bar"
              height="365px"
              :options="SchoolData.SchoolAttendanceOptions"
              :series="SchoolData.SchoolAttendanceSeries"
            />
          </div>
        </div>
        <div class="card-footer p-0">
          <div class="row mt-0 g-0">
            <div class="col-6 border-end border-inline-end-dashed text-center p-3">
              <p class="mb-1 fw-medium">
                Boys
              </p>
              <h5 class="text-warning fw-semibold mb-0">
                12.34K
              </h5>
            </div>
            <div class="col-6 text-center p-3">
              <p class="mb-1 fw-medium">
                Girls
              </p>
              <h5 class="text-primary fw-semibold mb-0">
                10.19K
              </h5>
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
