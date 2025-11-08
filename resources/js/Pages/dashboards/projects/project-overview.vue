<script setup>
import * as ProjectOverview from '@/shared/data/dashboards/projects/projectoverviewdata'
import Pageheader from '@/components/pageheader/pageheader.vue'
import { defineAsyncComponent } from 'vue'
import BaseImg from '../../../components/Baseimage/BaseImg.vue'
import { Head, Link } from '@inertiajs/vue3'
const baseUrl = __BASE_PATH__
const VueDraggableNext = defineAsyncComponent(() =>
  import('vue-draggable-next').then((s) => s.VueDraggableNext)
)
let draggable = VueDraggableNext

const dataToPass = {
  activepage: 'Projects Overview',
  title: 'Dashboards',
  subtitle: 'Projects',
  currentpage: 'Projects Overview',
}
</script>

<template>
  <Head title="Projects Overview | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xxl-6">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">Project Details</div>
          <div class="btn-list">
            <Link
              :href="`${baseUrl}/demo/dashboards/projects/create-project`"
              class="btn btn-sm btn-primary btn-wave"
              ><i class="ri-add-line align-middle me-1 fw-medium"></i>Create Project</Link
            >
            <a href="javascript:void(0);" class="btn btn-sm btn-secondary btn-wave"
              ><i class="ri-share-line align-middle fw-medium me-1"></i>Share</a
            >
          </div>
        </div>
        <div class="card-body">
          <div class="d-flex align-items-center mb-4 gap-2 flex-wrap">
            <div class="lh-1">
              <span class="avatar avatar-lg me-1 bg-primary"
                ><i class="ri-stack-line fs-24 lh-1"></i
              ></span>
            </div>
            <div>
              <h6 class="fw-medium mb-2">E-commerce Platform</h6>
              <span class="badge bg-success-transparent"> In progress</span>
              <span class="text-muted fs-12"
                ><i class="ri-circle-fill text-success mx-2 fs-9"></i>Last Updated 1 Day Ago</span
              >
            </div>
            <div class="ms-auto align-self-start">
              <div class="dropdown">
                <a
                  aria-label="anchor"
                  href="javascript:void(0);"
                  class="btn btn-icon btn-sm btn-primary-light"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="ri-more-2-fill"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);"
                      ><i class="ri-eye-line align-middle me-1 d-inline-block"></i>View</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);"
                      ><i class="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);"
                      ><i class="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="fs-15 fw-medium mb-2">Project Description :</div>
          <p class="text-muted mb-4">
            The Customer Feedback Dashboard Development project aims to create a comprehensive
            dashboard that aggregates and visualizes customer feedback data. This will enable our
            team to gain actionable insights and improve customer satisfaction.
          </p>
          <div class="d-flex gap-5 mb-4 flex-wrap">
            <div class="d-flex align-items-center gap-2 me-3">
              <span class="avatar avatar-md avatar-rounded me-1 bg-success"
                ><i class="ri-calendar-event-line fs-18 lh-1 align-middle"></i
              ></span>
              <div>
                <div class="fw-medium mb-0">Start Date</div>
                <span class="fs-12 text-muted">March 1, 2025</span>
              </div>
            </div>
            <div class="d-flex align-items-center gap-2 me-3">
              <span class="avatar avatar-md avatar-rounded me-1 bg-info"
                ><i class="ri-time-line fs-18 lh-1 align-middle"></i
              ></span>
              <div>
                <div class="fw-medium mb-0">End Date</div>
                <span class="fs-12 text-muted">July 15, 2025</span>
              </div>
            </div>
            <div class="d-flex align-items-center gap-2">
              <span class="avatar avatar-md avatar-rounded me-1"
                ><BaseImg src="/images/faces/11.jpg" alt=""
              /></span>

              <div>
                <span class="d-block fs-14 fw-medium">John Smith</span>
                <span class="fs-12 text-muted">Project Manager</span>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <div class="row gy-3">
              <div class="col-xl-12">
                <div class="fs-15 fw-medium mb-2">Key tasks :</div>
                <ul class="task-details-key-tasks mb-0">
                  <li>Initial planning phase of the project including scoping and goal setting.</li>
                  <li>Designing the product layout, wireframes, and UI elements.</li>
                  <li>
                    Coding and development of the website interface, functionality, and integration.
                  </li>
                  <li>Testing the product and website for bugs and quality assurance checks.</li>
                  <li>Deploy the final product to the live server.</li>
                  <li>Perform usability testing and iterate based on feedback.</li>
                </ul>
              </div>
              <div class="col-xl-12">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <div class="fs-15 fw-medium">Sub Tasks :</div>
                  <a href="javascript:void(0);" class="btn btn-primary-light btn-wave btn-sm"
                    >See More</a
                  >
                </div>
                <ul class="list-group">
                  <li
                    :class="`list-group-item ${idx.liClass}`"
                    v-for="idx in ProjectOverview.Tasks"
                    :key="idx.id"
                  >
                    <div class="d-flex align-items-center">
                      <div class="me-2">
                        <i class="ri-link fs-15 lh-1 p-1 bg-primary-transparent rounded-circle"></i>
                      </div>
                      <div class="fw-medium">{{ idx.title }}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="fs-15 fw-medium mb-2">Skills :</div>
          <div class="d-flex gap-2 flex-wrap">
            <span
              :class="`badge bg-${idx.className}-transparent`"
              v-for="idx in ProjectOverview.Badges"
              :key="idx.id"
              >{{ idx.label }}</span
            >
          </div>
        </div>
        <div class="card-footer">
          <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
            <div class="d-flex gap-3 align-items-center">
              <span class="fs-12">Assigned To :</span>
              <div class="avatar-list-stacked">
                <span
                  class="avatar avatar-sm avatar-rounded"
                  data-bs-toggle="tooltip"
                  data-bs-custom-class="tooltip-primary"
                  data-bs-original-title="John"
                >
                  <BaseImg src="/images/faces/2.jpg" alt="img" />
                </span>
                <span
                  class="avatar avatar-sm avatar-rounded"
                  data-bs-toggle="tooltip"
                  data-bs-custom-class="tooltip-primary"
                  data-bs-original-title="Emily"
                >
                  <BaseImg src="/images/faces/8.jpg" alt="img" />
                </span>
                <span
                  class="avatar avatar-sm avatar-rounded"
                  data-bs-toggle="tooltip"
                  data-bs-custom-class="tooltip-primary"
                  data-bs-original-title="Liam"
                >
                  <BaseImg src="/images/faces/5.jpg" alt="img" />
                </span>
                <span
                  class="avatar avatar-sm avatar-rounded"
                  data-bs-toggle="tooltip"
                  data-bs-custom-class="tooltip-primary"
                  data-bs-original-title="Sophia"
                >
                  <BaseImg src="/images/faces/10.jpg" alt="img" />
                </span>
                <span
                  class="avatar avatar-sm avatar-rounded"
                  data-bs-toggle="tooltip"
                  data-bs-custom-class="tooltip-primary"
                  data-bs-original-title="Charlotte"
                >
                  <BaseImg src="/images/faces/15.jpg" alt="img" />
                </span>
              </div>
            </div>
            <div class="d-flex gap-3 align-items-center">
              <span class="fs-12">Status :</span>
              <span class="d-block"><span class="badge bg-info">On going</span></span>
            </div>
            <div class="d-flex gap-3 align-items-center">
              <span class="fs-12">Priority :</span>
              <span class="d-block fs-14 fw-medium"
                ><span class="badge bg-secondary">Medium</span></span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="card custom-card overflow-hidden">
        <div class="card-header justify-content-between">
          <div class="card-title">Project Documents</div>
          <div class="dropdown">
            <div class="btn btn-light btn-full btn-sm" data-bs-toggle="dropdown">
              View All<i class="ti ti-chevron-down ms-1 d-inline-block"></i>
            </div>
            <ul class="dropdown-menu" role="menu">
              <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
            </ul>
          </div>
        </div>
        <div class="card-body p-0">
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="idx in ProjectOverview.Filedocument" :key="idx.id">
              <div class="d-flex align-items-center flex-wrap gap-2">
                <div class="lh-1">
                  <span :class="`avatar avatar-md avatar-rounded ${idx.avatarClass} bg-light lh-1`">
                    <BaseImg :src="idx.img" alt="" />
                  </span>
                </div>
                <div class="flex-fill">
                  <a href="javascript:void(0);"
                    ><span class="d-block fw-medium">{{ idx.name }}</span></a
                  >
                  <span class="d-block text-muted fs-12 fw-normal">{{ idx.size }}</span>
                </div>
                <div class="btn-list">
                  <button class="btn btn-sm btn-icon btn-info-light btn-wave">
                    <i class="ri-edit-line"></i>
                  </button>
                  <button class="btn btn-sm btn-icon btn-danger-light btn-wave">
                    <i class="ri-delete-bin-line"></i>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xxl-6">
      <div class="card custom-card justify-content-between">
        <div class="card-header">
          <div class="card-title">Project Discussions</div>
        </div>
        <div class="card-body">
          <ul class="list-unstyled project-timeline">
            <li v-for="idx in ProjectOverview.TimelineMessages" :key="idx.id">
              <div>
                <span class="avatar avatar-sm avatar-rounded project-timeline-avatar">
                  <BaseImg :src="idx.avatar" alt="" />
                </span>
                <div class="mb-2 d-flex align-items-start gap-2 flex-wrap">
                  <div>
                    <span class="fw-medium">{{ idx.name }} ({{ idx.role }})</span>
                  </div>
                  <span class="ms-auto bg-light text-default badge">{{ idx.time }}</span>
                </div>
                <p :class="`text-muted ${idx.attachment ? 'mb-1' : 'mb-0'} `">
                  {{ idx.message }}
                </p>
                <p class="project-activity-media mb-0" v-if="idx.attachment">
                  <a href="javascript:void(0);">
                    <BaseImg
                      src="/images/media/file-manager/3.png"
                      alt=""
                      class="img-fluid bg-light"
                    />
                  </a>
                  <span class="fs-11 text-muted mx-1">728.62KB</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="card-footer">
          <div class="d-sm-flex align-items-center lh-1">
            <div
              class="me-sm-2 mb-2 mb-sm-0 p-1 rounded-circle bg-primary-transparent d-inline-block"
            >
              <BaseImg src="/images/faces/5.jpg" alt="" class="avatar avatar-sm avatar-rounded" />
            </div>
            <div class="flex-fill">
              <div class="input-group flex-nowrap custom-inputgroup">
                <input
                  type="text"
                  class="form-control w-sm-50 border shadow-none"
                  placeholder="Share your thoughts"
                  aria-label="Recipient's username with two button addons"
                />
                <button class="btn btn-primary-light btn-sm btn-wave" type="button">
                  <i class="bi bi-emoji-smile"></i>
                </button>
                <button class="btn btn-primary-light btn-sm btn-wave" type="button">
                  <i class="bi bi-paperclip"></i>
                </button>
                <button class="btn btn-primary-light btn-sm btn-wave" type="button">
                  <i class="bi bi-camera"></i>
                </button>
                <button class="btn btn-primary btn-wave text-nowrap" type="button">Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card custom-card overflow-hidden">
        <div class="card-header justify-content-between">
          <div class="card-title">To Do Tasks</div>
          <div class="btn btn-sm btn-primary-light btn-wave">
            <i class="ri-add-line align-middle me-1 fw-medium"></i>Add Task
          </div>
        </div>
        <div class="card-body p-0 position-relative" id="todo-content">
          <div>
            <div class="table-responsive">
              <table class="table text-nowrap todo-tasks-table">
                <thead>
                  <tr>
                    <th>
                      <input
                        class="form-check-input check-all"
                        type="checkbox"
                        id="all-tasks"
                        value=""
                        aria-label="..."
                      />
                    </th>
                    <th class="todolist-handle-drag"></th>
                    <th scope="col">Task Title</th>
                    <th scope="col">Status</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <draggable tag="tbody" item-key="id" id="todo-drag">
                  <tr class="todo-box" v-for="idx in ProjectOverview.TodoItems" :key="idx.id">
                    <td class="task-checkbox">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        aria-label="..."
                        :checked="idx.checked"
                      />
                    </td>
                    <td>
                      <button class="btn btn-icon btn-sm btn-wave btn-light todo-handle">
                        : :
                      </button>
                    </td>
                    <td>
                      <div class="fw-medium todo-task-title">{{ idx.title }}</div>
                    </td>
                    <td>
                      <span :class="`badge bg-${idx.badgeClass}-transparent`"
                        ><i class="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"></i
                        >{{ idx.status }}</span
                      >
                    </td>
                    <td>
                      {{ idx.date }}
                    </td>
                    <td class="text-end">
                      <div class="d-flex gap-2">
                        <a
                          href="javascript:void(0);"
                          class="btn btn-icon btn-sm btn-info-light btn-wave"
                        >
                          <i class="ri-edit-line"></i>
                        </a>
                        <a
                          href="javascript:void(0);"
                          class="btn btn-icon btn-sm btn-danger-light btn-wave"
                        >
                          <i class="ri-delete-bin-line"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </draggable>
              </table>
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
