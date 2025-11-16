<script setup>
import { Head } from '@inertiajs/vue3'
import { ref } from 'vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkReusebleJobs from '@/shared/@spk/dashboards/jobs/dashboard/spk-reuseble-jobs.vue'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import * as ListViewdata from '@/shared/data/applications/task/listviewdata'
import 'simplebar-vue/dist/simplebar.min.css'
// Reactive variables
const picked = ref(null)
const picked1 = ref(null)

const dataToPass = {
  title: 'Applications',
  subtitle: 'Task',
  currentpage: 'Task List View',
  activepage: 'Task List View',
}

// Make listview reactive since you modify it
const listview = ref([...ListViewdata.Taskstable])

// Select field values (use ref for reactivity)
const StatusdataValue = ref('New')
const Statusdata = ['New', 'Completed', 'Inprogress', 'Pending']

const PrioritydataValue = ref('High')
const Prioritydata = ['High', 'Medium', 'Low']

const ListviewassigneddataValue = ref(null)
const Listviewassigneddata = ['Angelina May', 'Kiara advain', 'Hercules Jhon', 'Mayor Kim']

// Method to delete an item by ID
function handleToDelete(id) {
  listview.value = listview.value.filter(list => list.id !== id)
}
</script>

<template>
  <Head title="Tasks-List View | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="row">
        <div v-for="idx in ListViewdata.TaskData" :key="idx.id" class="col-xl-3 col-lg-6">
          <SpkReusebleJobs
            title-class="mb-2 fs-12"
            :image-icon="false"
            :list-card="true"
            :card-class="`card ${idx.cardClass}`"
            :list="idx"
            :CountUpValue="true"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="col-xxl-12 col-xl-12">
    <div class="card custom-card">
      <div class="card-header justify-content-between">
        <div class="card-title">
          Total Tasks
        </div>
        <div class="d-flex">
          <button
            class="btn btn-sm btn-primary btn-wave waves-light"
            data-bs-toggle="modal"
            data-bs-target="#create-task"
          >
            <i class="ri-add-line fw-medium align-middle me-1" /> Create Task
          </button>
          <div class="dropdown ms-2">
            <button
              class="btn btn-icon btn-secondary-light btn-sm btn-wave waves-light"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="ti ti-dots-vertical" />
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="javascript:void(0);">New Tasks</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Pending Tasks</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Completed Tasks</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Inprogress Tasks</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-body p-0">
        <div class="table-responsive">
          <TableComponent
            #cell="{ row }"
            thead-class="table-light"
            table-class="table text-nowrap"
            :show-checkbox="true"
            :headers="[
              { text: 'Task', thClass: '' },
              { text: 'Task ID', thClass: '' },
              { text: 'Assigned Date', thClass: '' },
              { text: 'Status', thClass: '' },
              { text: 'Due Date', thClass: '' },
              { text: 'Priority', thClass: '' },
              { text: 'Assigned To', thClass: '' },
              { text: 'Actions', thClass: '' },
            ]"
            :rows="listview"
          >
            <td>
              <a
                href="javascript:void(0);"
                class="fw-medium"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >{{ row.title }}</a>
            </td>
            <td>
              <span class="fw-medium">{{ row.code }}</span>
            </td>
            <td>
              {{ row.startDate }}
            </td>
            <td>
              <span :class="`fw-medium text-${row.color}`">{{ row.status }}</span>
            </td>
            <td>
              {{ row.dueDate }}
            </td>
            <td>
              <span :class="`badge bg-${row.priorityColor}-transparent`">{{ row.priority }}</span>
            </td>
            <td>
              <div class="avatar-list-stacked">
                <span
                  v-for="(img, index) in row.avatars"
                  :key="index"
                  class="avatar avatar-sm avatar-rounded mx-1"
                >
                  <BaseImg :src="img" alt="img" />
                </span>
                <a
                  v-if="row.extraMembers > 0"
                  class="avatar avatar-sm bg-primary avatar-rounded text-fixed-white mx-1"
                  href="javascript:void(0);"
                >
                  +{{ row.extraMembers }}
                </a>
              </div>
            </td>
            <td>
              <button
                class="btn btn-primary-light btn-icon btn-sm me-1"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Edit"
              >
                <i class="ri-edit-line" />
              </button>
              <button
                class="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"
                @click="handleToDelete(row.id)"
              >
                <i class="ri-delete-bin-5-line" />
              </button>
            </td>
          </TableComponent>
        </div>
      </div>
      <div class="card-footer border-top-0">
        <nav aria-label="Page navigation" class="pagination-style-2">
          <ul class="pagination mb-0 flex-wrap justify-content-end">
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
  <!-- End::row-2 -->

  <!-- Task Details Offcanvas -->
  <div
    id="offcanvasRight"
    class="offcanvas offcanvas-end"
    tabindex="-1"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel" class="offcanvas-title task-title">
        Redesign Product Page
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div class="offcanvas-body">
      <div class="fs-15 fw-medium mb-2">
        Task Description :
      </div>
      <p class="text-muted task-description mb-4 fs-13">
        The current product page layout is outdated and does not provide a smooth user experience
        across all devices. This task involves redesigning the product page to make it more visually
        appealing, responsive, and user-friendly.
      </p>
      <div class="card custom-card overflow-hidden border-0">
        <div class="card-body p-0">
          <ul class="list-unstyled task-additional-list">
            <li>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-2">
                  <div class="lh-1">
                    <span
                      class="avatar avatar-sm avatar-rounded bg-primary-transparent svg-primary text-primary"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none" />
                        <polyline
                          points="88 136 112 160 168 104"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                        <circle
                          cx="128"
                          cy="128"
                          r="96"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <span class="text-muted fs-13">Task ID :</span>
                  </div>
                </div>
                <div>SPK - 123</div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-2">
                  <div class="lh-1">
                    <span
                      class="avatar avatar-sm avatar-rounded bg-secondary-transparent svg-secondary text-secondary"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none" />
                        <path
                          d="M32,200H187.72a8,8,0,0,0,6.65-3.56L240,128,194.37,59.56A8,8,0,0,0,187.72,56H32l48,72Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <span class="text-muted fs-13">Task Tags :</span>
                  </div>
                </div>
                <div>
                  <span class="badge bg-light border text-default">Web Design</span>
                  <span class="badge bg-light border text-default">Responsive Design</span>
                </div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-2">
                  <div class="lh-1">
                    <span
                      class="avatar avatar-sm avatar-rounded bg-warning-transparent svg-warning text-warning"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none" />
                        <path
                          d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                        <polyline
                          points="148 32 148 92 208 92"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <span class="text-muted fs-13">Project Name :</span>
                  </div>
                </div>
                <div>Digital Marketing Portal</div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-2">
                  <div class="lh-1">
                    <span
                      class="avatar avatar-sm avatar-rounded bg-info-transparent svg-info-transparent text-info-transparent"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none" />
                        <path
                          d="M42.34,138.34A8,8,0,0,1,40,132.69V40h92.69a8,8,0,0,1,5.65,2.34l99.32,99.32a8,8,0,0,1,0,11.31L153,237.66a8,8,0,0,1-11.31,0Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                        <circle cx="88" cy="88" r="16" />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <span class="text-muted fs-13">Project Status :</span>
                  </div>
                </div>
                <div>
                  <span class="fw-medium text-secondary">Inprogress</span>
                </div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-2">
                  <div class="lh-1">
                    <span
                      class="avatar avatar-sm avatar-rounded bg-success-transparent svg-success text-success"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none" />
                        <line
                          x1="48"
                          y1="224"
                          x2="48"
                          y2="56"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                        <path
                          d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <span class="text-muted fs-13">Project Priority :</span>
                  </div>
                </div>
                <div>
                  <span class="badge bg-danger-transparent">High</span>
                </div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-2">
                  <div class="lh-1">
                    <span
                      class="avatar avatar-sm avatar-rounded bg-danger-transparent svg-danger text-danger"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none" />
                        <rect
                          x="40"
                          y="40"
                          width="176"
                          height="176"
                          rx="8"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                        <line
                          x1="176"
                          y1="24"
                          x2="176"
                          y2="52"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                        <line
                          x1="80"
                          y1="24"
                          x2="80"
                          y2="52"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                        <line
                          x1="40"
                          y1="88"
                          x2="216"
                          y2="88"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <span class="text-muted fs-13">Date Created :</span>
                  </div>
                </div>
                <div>24,Feb 2025</div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-2">
                  <div class="lh-1">
                    <span
                      class="avatar avatar-sm avatar-rounded bg-teal-transparent svg-teal text-teal"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none" />
                        <rect
                          x="40"
                          y="40"
                          width="176"
                          height="176"
                          rx="8"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                        <line
                          x1="176"
                          y1="24"
                          x2="176"
                          y2="52"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                        <line
                          x1="80"
                          y1="24"
                          x2="80"
                          y2="52"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                        <line
                          x1="40"
                          y1="88"
                          x2="216"
                          y2="88"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <span class="text-muted fs-13">Due Date :</span>
                  </div>
                </div>
                <div>15,Mar 2025</div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-2">
                  <div class="lh-1">
                    <span
                      class="avatar avatar-sm avatar-rounded bg-pink-transparent svg-pink text-pink"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none" />
                        <circle
                          cx="84"
                          cy="108"
                          r="52"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                        <path
                          d="M13,196a88,88,0,0,1,142,0"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                        <path
                          d="M172,160a87.86,87.86,0,0,1,71,36"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                        <path
                          d="M158.62,57.74A52,52,0,1,1,172,160"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <span class="text-muted fs-13">Assigned To :</span>
                  </div>
                </div>
                <div class="avatar-list-stacked">
                  <span
                    class="avatar avatar-sm avatar-rounded"
                    data-bs-toggle="tooltip"
                    data-bs-custom-class="tooltip-primary"
                    data-bs-original-title="Simon"
                  >
                    <BaseImg src="/images/faces/2.jpg" alt="img" />
                  </span>
                  <span
                    class="avatar avatar-sm avatar-rounded"
                    data-bs-toggle="tooltip"
                    data-bs-custom-class="tooltip-primary"
                    data-bs-original-title="Sasha"
                  >
                    <BaseImg src="/images/faces/8.jpg" alt="img" />
                  </span>
                  <span
                    class="avatar avatar-sm avatar-rounded"
                    data-bs-toggle="tooltip"
                    data-bs-custom-class="tooltip-primary"
                    data-bs-original-title="Anagha"
                  >
                    <BaseImg src="/images/faces/2.jpg" alt="img" />
                  </span>
                  <span
                    class="avatar avatar-sm avatar-rounded"
                    data-bs-toggle="tooltip"
                    data-bs-custom-class="tooltip-primary"
                    data-bs-original-title="Hishen"
                  >
                    <BaseImg src="/images/faces/10.jpg" alt="img" />
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="card custom-card overflow-hidden">
        <div class="card-header p-0">
          <ul
            id="myTab4"
            class="nav nav-tabs nav-justified w-100 tab-style-8 scaleX activity-details-tabs"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#sub-task"
                type="button"
                role="tab"
                aria-controls="sub-task"
                aria-selected="true"
              >
                Sub Tasks<span class="badge bg-primary ms-2">8</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#comments"
                type="button"
                role="tab"
                aria-controls="comments"
                aria-selected="false"
                tabindex="-1"
              >
                Comments
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#files"
                type="button"
                role="tab"
                aria-controls="files"
                aria-selected="false"
                tabindex="-1"
              >
                Files
              </button>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div id="myTabContent3" class="tab-content">
            <div
              id="sub-task"
              class="tab-pane overflow-hidden active show p-0 border-0"
              role="tabpanel"
              aria-labelledby="sub-task"
              tabindex="0"
            >
              <ul class="list-unstyled sub-tasks-list">
                <li>
                  <div class="form-check mb-0">
                    <input
                      id="subtask1"
                      class="form-check-input form-checked-gray"
                      type="checkbox"
                      value=""
                      checked
                    >
                    <label class="form-check-label" for="subtask1">Creating new wireframes for the product page</label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-0">
                    <input
                      id="subtask2"
                      class="form-check-input form-checked-gray"
                      type="checkbox"
                      value=""
                    >
                    <label class="form-check-label" for="subtask2">Updating the UI/UX design</label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-0">
                    <input
                      id="subtask3"
                      class="form-check-input form-checked-gray"
                      type="checkbox"
                      value=""
                    >
                    <label class="form-check-label" for="subtask3">Integrating customer reviews section</label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-0">
                    <input
                      id="subtask4"
                      class="form-check-input form-checked-gray"
                      type="checkbox"
                      value=""
                      checked
                    >
                    <label class="form-check-label" for="subtask4">Optimizing for mobile devices</label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-0">
                    <input
                      id="subtask5"
                      class="form-check-input form-checked-gray"
                      type="checkbox"
                      value=""
                      checked
                    >
                    <label class="form-check-label" for="subtask5">Testing performance and functionality across browsers</label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-0">
                    <input
                      id="subtask6"
                      class="form-check-input form-checked-gray"
                      type="checkbox"
                      value=""
                    >
                    <label class="form-check-label" for="subtask6">Set up user authentication backend</label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-0">
                    <input
                      id="subtask7"
                      class="form-check-input form-checked-gray"
                      type="checkbox"
                      value=""
                      checked
                    >
                    <label class="form-check-label" for="subtask7">Set up user authentication backend</label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-0">
                    <input
                      id="subtask8"
                      class="form-check-input form-checked-gray"
                      type="checkbox"
                      value=""
                    >
                    <label class="form-check-label" for="subtask8">Implement password strength validation</label>
                  </div>
                </li>
              </ul>
            </div>
            <div
              id="comments"
              class="tab-pane overflow-hidden p-0 border-0"
              role="tabpanel"
              aria-labelledby="comments"
              tabindex="0"
            >
              <ul
                id="task-comments-area"
                class="list-unstyled profile-timeline task-profile-timeline"
              >
                <li>
                  <div class="d-flex align-items-start">
                    <div class="lh-1">
                      <span
                        class="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar"
                      >
                        <BaseImg src="/images/faces/11.jpg" alt="" />
                      </span>
                    </div>
                    <div>
                      <div class="d-flex align-items-center justify-content-between mb-1">
                        <div class="fw-medium d-flex align-items-center">
                          John Doe<span class="badge bg-primary-transparent ms-2">Project Manager</span>
                        </div>
                        <div class="text-muted fs-13">
                          10:15 AM
                        </div>
                      </div>
                      <div class="fs-13 text-muted">
                        Let's make sure we prioritize the mobile responsiveness for this feature. We
                        don’t want any issues on smaller screens &#128187;.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-start">
                    <div class="lh-1">
                      <span
                        class="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar"
                      >
                        <BaseImg src="/images/faces/1.jpg" alt="" />
                      </span>
                    </div>
                    <div>
                      <div class="d-flex align-items-center justify-content-between mb-1">
                        <div class="fw-medium d-flex align-items-center">
                          Jane Smith<span class="badge bg-secondary-transparent ms-2">Developer</span>
                        </div>
                        <div class="text-muted fs-13">
                          11:00 AM
                        </div>
                      </div>
                      <div class="fs-13 text-muted">
                        The design is a bit tricky. I'm facing some alignment issues with the
                        elements. Can someone take a look at it?&#128247;
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-start">
                    <div class="lh-1">
                      <span
                        class="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar"
                      >
                        <BaseImg src="/images/faces/4.jpg" alt="" />
                      </span>
                    </div>
                    <div>
                      <div class="d-flex align-items-center justify-content-between mb-1">
                        <div class="fw-medium d-flex align-items-center">
                          Alice Cooper<span class="badge bg-warning-transparent ms-2">UI Designer</span>
                        </div>
                        <div class="text-muted fs-13">
                          1:45 PM
                        </div>
                      </div>
                      <div class="fs-13 text-muted">
                        I’ve updated the mockups to better fit the requirements. Check them out and
                        let me know if we need any tweaks &#128221;.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-start">
                    <div class="lh-1">
                      <span
                        class="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar"
                      >
                        <BaseImg src="/images/faces/14.jpg" alt="" />
                      </span>
                    </div>
                    <div>
                      <div class="d-flex align-items-center justify-content-between mb-1">
                        <div class="fw-medium d-flex align-items-center">
                          Bob Brown<span class="badge bg-info-transparent ms-2">QA Tester</span>
                        </div>
                        <div class="text-muted fs-13">
                          2:30 PM
                        </div>
                      </div>
                      <div class="fs-13 text-muted">
                        I’ve tested the task on all browsers. The issue on Safari is resolved, but
                        there’s still a minor glitch on Firefox &#128221;.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-start">
                    <div class="lh-1">
                      <span
                        class="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar"
                      >
                        <BaseImg src="/images/faces/12.jpg" alt="" />
                      </span>
                    </div>
                    <div>
                      <div class="d-flex align-items-center justify-content-between mb-1">
                        <div class="fw-medium d-flex align-items-center">
                          Charlie Evans<span class="badge bg-success-transparent ms-2">Developer</span>
                        </div>
                        <div class="text-muted fs-13">
                          3:00 PM
                        </div>
                      </div>
                      <div class="fs-13 text-muted">
                        I’ve fixed the issue and pushed the update. The styling should be consistent
                        across browsers now. Let me know if anything looks off &#128073;.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="d-sm-flex align-items-center lh-1 task-comment-new">
                <div class="me-sm-3 mb-2 mb-sm-0">
                  <span class="avatar avatar-md avatar-rounded">
                    <BaseImg src="/images/faces/9.jpg" alt="" />
                  </span>
                </div>
                <div class="flex-fill me-sm-2">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control shadow-none border"
                      placeholder="Post Anything"
                      aria-label="Recipient's username with two button addons"
                    >
                    <button
                      type="button"
                      aria-label="button"
                      class="btn btn-outline-light px-3 border btn-wave border-start-0 waves-effect waves-light"
                    >
                      <i class="bi bi-emoji-smile" />
                    </button>
                    <button
                      type="button"
                      aria-label="button"
                      class="btn btn-outline-light px-3 border btn-wave border-start-0 waves-effect waves-light"
                    >
                      <i class="bi bi-paperclip" />
                    </button>
                    <button
                      type="button"
                      aria-label="button"
                      class="btn btn-outline-light px-3 border btn-wave border-start-0 waves-effect waves-light"
                    >
                      <i class="bi bi-camera" />
                    </button>
                    <button class="btn btn-primary btn-wave waves-effect waves-light" type="button">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="files"
              class="tab-pane overflow-hidden p-0 border-0"
              role="tabpanel"
              aria-labelledby="files"
              tabindex="0"
            >
              <Simplebar>
                <ul class="list-unstyled task-files-list">
                  <li>
                    <div class="d-flex align-items-center flex-wrap gap-2">
                      <div class="lh-1">
                        <span class="avatar avatar-rounded p-2 bg-light">
                          <BaseImg src="/images/media/file-manager/1.png" alt="" />
                        </span>
                      </div>
                      <div class="flex-fill">
                        <a href="javascript:void(0);"><span class="d-block fw-medium">Full Project</span></a>
                        <span class="d-block text-muted fs-12 fw-normal">0.45MB</span>
                      </div>
                      <a
                        href="javascript:void(0)"
                        class="btn btn-light btn-icon btn-sm border rounded-circle"
                      >
                        <i class="ti ti-download" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-center flex-wrap gap-2">
                      <div class="lh-1">
                        <span class="avatar avatar-rounded bg-light">
                          <BaseImg src="/images/media/file-manager/3.png" alt="" />
                        </span>
                      </div>
                      <div class="flex-fill">
                        <a href="javascript:void(0);"><span class="d-block fw-medium">assets.zip</span></a>
                        <span class="d-block text-muted fs-12 fw-normal">0.99MB</span>
                      </div>
                      <a
                        href="javascript:void(0)"
                        class="btn btn-light btn-icon btn-sm border rounded-circle"
                      >
                        <i class="ti ti-download" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-center flex-wrap gap-2">
                      <div class="lh-1">
                        <span class="avatar avatar-rounded p-2 bg-light">
                          <BaseImg src="/images/media/file-manager/1.png" alt="" />
                        </span>
                      </div>
                      <div class="flex-fill">
                        <a href="javascript:void(0);"><span class="d-block fw-medium">image-1.png</span></a>
                        <span class="d-block text-muted fs-12 fw-normal">245KB</span>
                      </div>
                      <a
                        href="javascript:void(0)"
                        class="btn btn-light btn-icon btn-sm border rounded-circle"
                      >
                        <i class="ti ti-download" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-center flex-wrap gap-2">
                      <div class="lh-1">
                        <span class="avatar avatar-rounded bg-light">
                          <BaseImg src="/images/media/file-manager/3.png" alt="" />
                        </span>
                      </div>
                      <div class="flex-fill">
                        <a href="javascript:void(0);"><span class="d-block fw-medium">documentation.zip</span></a>
                        <span class="d-block text-muted fs-12 fw-normal">2MB</span>
                      </div>
                      <a
                        href="javascript:void(0)"
                        class="btn btn-light btn-icon btn-sm border rounded-circle"
                      >
                        <i class="ti ti-download" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-center flex-wrap gap-2">
                      <div class="lh-1">
                        <span class="avatar avatar-rounded bg-light">
                          <BaseImg src="/images/media/file-manager/3.png" alt="" />
                        </span>
                      </div>
                      <div class="flex-fill">
                        <a href="javascript:void(0);"><span class="d-block fw-medium">landing.zip</span></a>
                        <span class="d-block text-muted fs-12 fw-normal">3.46MB</span>
                      </div>
                      <a
                        href="javascript:void(0)"
                        class="btn btn-light btn-icon btn-sm border rounded-circle"
                      >
                        <i class="ti ti-download" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-center flex-wrap gap-2">
                      <div class="lh-1">
                        <span class="avatar avatar-rounded p-2 bg-light">
                          <BaseImg src="/images/media/file-manager/1.png" alt="" />
                        </span>
                      </div>
                      <div class="flex-fill">
                        <a href="javascript:void(0);"><span class="d-block fw-medium">image-1.png</span></a>
                        <span class="d-block text-muted fs-12 fw-normal">245KB</span>
                      </div>
                      <a
                        href="javascript:void(0)"
                        class="btn btn-light btn-icon btn-sm border rounded-circle"
                      >
                        <i class="ti ti-download" />
                      </a>
                    </div>
                  </li>
                </ul>
              </Simplebar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Task Details Offcanvas -->

  <!-- Start::add task modal -->
  <div id="create-task" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">
            Add Task
          </h6>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body px-4">
          <div class="row gy-2">
            <div class="col-xl-6">
              <label for="task-name" class="form-label">Task Name</label>
              <input id="task-name" type="text" class="form-control" placeholder="Task Name">
            </div>
            <div class="col-xl-6">
              <label for="task-id" class="form-label">Task ID</label>
              <input id="task-id" type="text" class="form-control" placeholder="Task ID">
            </div>
            <div class="col-xl-6">
              <label class="form-label">Assigned Date</label>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-text text-muted">
                    <i class="ri-calendar-line" />
                  </div>
                  <Datepicker
                    v-model="picked"
                    placeholder="Choose date and time"
                    auto-apply
                    class="form-control custom-date-picker custom"
                  />
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <label class="form-label">Due Date</label>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-text text-muted">
                    <i class="ri-calendar-line" />
                  </div>
                  <Datepicker
                    v-model="picked1"
                    placeholder="Choose date and time"
                    auto-apply
                    class="form-control custom-date-picker custom"
                  />
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <label class="form-label">Status</label>
              <VueMultiselect
                id="choices-single-default"
                v-model="StatusdataValue"
                :searchable="true"
                :show-labels="false"
                name="choices-single-default"
                :multiple="false"
                :options="Statusdata"
                :taggable="false"
              />
            </div>
            <div class="col-xl-6">
              <label class="form-label">Priority</label>
              <VueMultiselect
                id="choices-single-default1"
                v-model="PrioritydataValue"
                :searchable="true"
                :show-labels="false"
                name="choices-single-default"
                :multiple="false"
                :options="Prioritydata"
                :taggable="false"
              />
            </div>
            <div class="col-xl-12">
              <label class="form-label">Assigned To</label>
              <VueMultiselect
                id="choices-multiple-remove-button1"
                v-model="ListviewassigneddataValue"
                :searchable="true"
                :show-labels="false"
                name="choices-multiple-remove-button1"
                :multiple="true"
                :options="Listviewassigneddata"
                :taggable="false"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">
            Cancel
          </button>
          <button type="button" class="btn btn-primary">
            Add Task
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End::add task modal -->
</template>

<style scoped>
/* Add your styles here */
</style>
