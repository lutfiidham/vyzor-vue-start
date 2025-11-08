<script setup>
import { ref } from 'vue'
import { JobsListData } from '@/shared/data/dashboards/jobs/jobslistdata'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import BaseImg from '../../../components/Baseimage/BaseImg.vue'
import { Head, Link } from '@inertiajs/vue3'
const baseUrl = __BASE_PATH__
const dataToPass = {
  activepage: 'Jobs List',
  title: 'Dashboards',
  subtitle: 'Jobs',
  currentpage: 'Jobs List',
}

const jobsList = ref([...JobsListData])

const handleToDelete = (id) => {
  jobsList.value = jobsList.value.filter((job) => job.id !== id)
}
</script>

<template>
  <Head title="Job-List | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card overflow-hidden">
        <div class="card-header justify-content-between">
          <div class="card-title">All Jobs List</div>
          <div class="d-flex flex-wrap gap-2">
            <Link :href="`${baseUrl}/demo/dashboards/jobs/job-post`" class="btn btn-primary btn-wave">
              <i class="ri-add-line me-1 align-middle"></i>Post Job
            </Link>
            <div>
              <input
                class="form-control"
                type="text"
                placeholder="Search Here"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="btn btn-primary btn-wave"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li><a class="dropdown-item" href="javascript:void(0);">Posted Date</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Status</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Department</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Job Type</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Newest</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Oldest</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <TableComponent
              tableClass="table text-nowrap"
              :showCheckbox="true"
              :headers="[
                { text: 'Job Title', thClass: '' },
                { text: 'Company', thClass: '' },
                { text: 'Department', thClass: '' },
                { text: 'Applications', thClass: '' },
                { text: 'Vacancies', thClass: '' },
                { text: 'Status', thClass: '' },
                { text: 'Job Type', thClass: '' },
                { text: 'Posted Date', thClass: '' },
                { text: 'Action', thClass: '' },
              ]"
              :rows="JobsListData"
              v-slot:cell="{ row }"
            >
              <td>
                <div class="d-flex align-items-center">
                  <div class="lh-1">
                    <span
                      :class="`avatar avatar-md avatar-rounded bg-${row.svgClass}-transparent svg-${row.svgClass}`"
                      v-html="row.svgIcon"
                    >
                    </span>
                  </div>
                  <div class="ms-2">
                    <p class="fw-medium mb-0 d-flex align-items-center">
                      <Link :href="`${baseUrl}/demo/dashboards/jobs/job-details`">{{ row.title }}</Link>
                    </p>
                    <p class="fs-12 text-muted mb-0">{{ row.location }}</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="avatar avatar-md me-1 avatar-rounded">
                    <BaseImg :src="row.imgSrc" alt="" />
                  </span>
                  <a href="javascript:void(0);" class="fw-medium mb-0">{{ row.company }}</a>
                </div>
              </td>
              <td>
                {{ row.department }}
              </td>
              <td>{{ row.applicants }}</td>
              <td>{{ row.interviews }}</td>
              <td>
                <span :class="`badge rounded-pill bg-${row.color}-transparent`">{{
                  row.status
                }}</span>
              </td>
              <td>{{ row.employmentType }}</td>
              <td>
                {{ row.postedDate }}
              </td>
              <td>
                <Link
                  :href="`${baseUrl}/demo/dashboards/jobs/job-details`"
                  class="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1"
                >
                  <i class="ri-eye-line"></i>
                </Link>
                <a
                  href="javascript:void(0);"
                  class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1"
                >
                  <i class="ri-edit-line"></i>
                </a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"
                  @click="handleToDelete(row.id)"
                >
                  <i class="ri-delete-bin-line"></i>
                </a>
              </td>
            </TableComponent>
          </div>
        </div>
        <div class="card-footer border-top-0">
          <div class="d-flex align-items-center flex-wrap overflow-auto">
            <div class="mb-2 mb-sm-0">
              Showing <b>1</b> to <b>8</b> of <b>100</b> entries
              <i class="bi bi-arrow-right ms-2 fw-medium"></i>
            </div>
            <div class="ms-auto">
              <ul class="pagination mb-0 overflow-auto">
                <li class="page-item disabled">
                  <a class="page-link">Previous</a>
                </li>
                <li class="page-item active" aria-current="page">
                  <a class="page-link" href="javascript:void(0);">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0);">2</a>
                </li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">4</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">5</a></li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0);">Next</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
