<script setup>
import { ref } from 'vue'
import { defineAsyncComponent } from 'vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
const VueDraggableNext = defineAsyncComponent(() =>
  import('vue-draggable-next').then((m) => m.VueDraggableNext)
)
import * as Todotable from '@/shared/data/applications/todolistdata'
import BaseImg from '../../components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'

let draggable = VueDraggableNext

// Reactive refs
const picked = ref(null)
const picked1 = ref(null)

// Meta info
const dataToPass = {
  title: 'Applications',
  currentpage: 'To Do List',
  activepage: 'To Do List',
}

// Todo table data
const Tasks = ref([...Todotable.Todotables])

const ListviewassignedValue = ref(['Angelina May'])
const Listviewassigneddata = ['Angelina May', 'Kiara advain', 'Hercules Jhon', 'Mayor Kim']

const StatusdataValue = ref(null)
const Statusdata = ['New', 'Completed', 'Inprogress', 'Pending']

const PrioritydataValue = ref(null)
const Prioritydata = ['High', 'Medium', 'Low']

// Delete task method
const handleToDeleteTask = (id) => {
  Tasks.value = Tasks.value.filter((item) => item.id !== id)
}
</script>

<template>
  <Head title="To Do List | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-3">
      <div class="card custom-card">
        <div class="card-body p-0">
          <div class="p-3 task-navigation border-bottom border-block-end-dashed">
            <div class="d-grid">
              <button
                class="btn rounded-pill d-flex align-items-center justify-content-center btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#addtask"
              >
                <i class="ri-add-circle-line fs-16 align-middle me-1"></i>Create New Task
              </button>
            </div>
            <ul class="list-unstyled task-main-nav mb-0 mt-3">
              <li class="px-0 pt-0">
                <span class="fs-11 text-muted op-7 fw-medium">Tasks</span>
              </li>
              <li
                :class="`${idx.active ? 'active' : ''}`"
                v-for="idx in Todotable.TodoCategories"
                :key="idx.id"
              >
                <a href="javascript:void(0);">
                  <div class="d-flex align-items-center">
                    <span class="me-2 lh-1 todo-menu-icon" v-html="idx.icon"> </span>
                    <span class="flex-fill text-nowrap">
                      {{ idx.name }}
                    </span>
                    <span class="badge bg-success rounded-pill">{{ idx.badgeCount }}</span>
                  </div>
                </a>
              </li>
              <li class="px-0 pt-2">
                <span class="fs-11 text-muted op-7 fw-medium">Categories</span>
              </li>
              <li v-for="idx in Todotable.Categories" :key="idx.id">
                <a href="javascript:void(0);">
                  <div class="d-flex align-items-center flex-wrap">
                    <span class="me-2 lh-1">
                      <i :class="`ri-circle-fill fs-8 fw-medium text-${idx.textColor}`"></i>
                    </span>
                    <span class="flex-fill text-nowrap">
                      {{ idx.name }}
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="p-3 text-center">
            <BaseImg src="/images/media/media-66.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-9">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div>
            <input
              class="form-control"
              type="text"
              placeholder="Search Here"
              aria-label=".form-control-sm example"
            />
          </div>
          <div class="d-flex flex-wrap gap-2">
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
                <li><a class="dropdown-item" href="javascript:void(0);">New</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Popular</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Relevant</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body p-0 position-relative" id="todo-content">
          <div>
            <div class="table-responsive">
              <table class="table text-nowrap">
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
                    <th scope="col">Assigned To</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created On</th>
                    <th scope="col" class="todolist-progress">Progress</th>
                    <th scope="col" class="text-end">Action</th>
                  </tr>
                </thead>
                <draggable tag="tbody" item-key="id" id="todo-drag">
                  <tr class="todo-box" v-for="row in Tasks" :key="row.id">
                    <td class="task-checkbox">
                      <input class="form-check-input" type="checkbox" value="" aria-label="..." />
                    </td>
                    <td>
                      <button class="btn btn-icon btn-sm btn-wave btn-light todo-handle">
                        : :
                      </button>
                    </td>
                    <td>
                      <a href="javascript:void(0);" class="fw-medium">{{ row.title }}</a>
                    </td>
                    <td>
                      <div class="d-flex align-items-center gap-2">
                        <div class="lh-1">
                          <span class="avatar avatar-xs avatar-rounded">
                            <BaseImg :src="row.avatar" alt="" />
                          </span>
                        </div>
                        <div class="fw-medium">{{ row.name }}</div>
                      </div>
                    </td>
                    <td>
                      <span :class="`fw-medium text-${row.priorityColor}`"
                        ><i class="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"></i
                        >{{ row.priority }}</span
                      >
                    </td>
                    <td>
                      {{ row.dueDate }}
                    </td>
                    <td>
                      <span :class="`badge bg-${row.statusColor}-transparent`">{{
                        row.status
                      }}</span>
                    </td>
                    <td>
                      {{ row.createdDate }}
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div
                          class="progress progress-animate progress-xs w-100"
                          role="progressbar"
                          :aria-valuenow="row.progress"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                            :style="`width: ${row.progress}%`"
                          ></div>
                        </div>
                        <div class="ms-2">{{ row.progress }}%</div>
                      </div>
                    </td>
                    <td class="text-end">
                      <div class="dropdown">
                        <a
                          aria-label="anchor"
                          class="btn btn-light btn-icon btn-sm btn-wave"
                          href="javascript:void(0);"
                          data-bs-toggle="dropdown"
                        >
                          <i class="ri-more-2-fill text-muted"></i>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                          <li>
                            <a class="dropdown-item" href="javascript:void(0);"
                              ><i class="ri-edit-line me-2"></i>Edit</a
                            >
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="javascript:void(0);"
                              @click="handleToDeleteTask(row.id)"
                              ><i class="ri-delete-bin-5-line me-2"></i>Delete</a
                            >
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </draggable>
              </table>
            </div>
          </div>
        </div>
        <div class="card-footer border-top-0">
          <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div>Showing 10 Entries <i class="bi bi-arrow-right ms-2 fw-semibold"></i></div>
            <div>
              <nav aria-label="Page navigation" class="pagination-style-4">
                <ul class="pagination mb-0">
                  <li class="page-item disabled">
                    <a class="page-link" href="javascript:void(0);"> Prev </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="javascript:void(0);">1</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
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
  <!--End::row-1 -->
  <!-- Start:: Add new task modal -->
  <div class="modal fade" id="addtask" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title" id="mail-ComposeLabel">Create Task</h6>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body px-4">
          <div class="row gy-2">
            <div class="col-xl-12">
              <label for="task-name" class="form-label">Task Name</label>
              <input type="text" class="form-control" id="task-name" placeholder="Task Name" />
            </div>
            <div class="col-xl-12">
              <label class="form-label">Assigned To</label>
              <VueMultiselect
                :searchable="false"
                :show-labels="false"
                :multiple="true"
                v-model="ListviewassignedValue"
                :options="Listviewassigneddata"
                :taggable="false"
              >
              </VueMultiselect>
            </div>
            <div class="col-xl-6">
              <label class="form-label">Assigned Date</label>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-text text-muted"><i class="ri-calendar-line"></i></div>
                  <Datepicker
                    placeholder="Choose date and time"
                    autoApply
                    v-model="picked"
                    class="form-control custom-date-picker custom"
                  />
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <label class="form-label">Target Date</label>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-text text-muted"><i class="ri-calendar-line"></i></div>
                  <Datepicker
                    placeholder="Choose date and time"
                    autoApply
                    v-model="picked1"
                    class="form-control custom-date-picker custom"
                  />
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <label class="form-label">Status</label>
              <VueMultiselect
                :searchable="true"
                :show-labels="false"
                :multiple="false"
                v-model="StatusdataValue"
                :options="Statusdata"
                :taggable="false"
                placeholder="Select"
              >
              </VueMultiselect>
            </div>
            <div class="col-xl-6">
              <label class="form-label">Priority</label>
              <VueMultiselect
                :searchable="true"
                :show-labels="false"
                :multiple="false"
                v-model="PrioritydataValue"
                :options="Prioritydata"
                :taggable="false"
                placeholder="Select"
              >
              </VueMultiselect>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary">Create</button>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: Add new task modal -->
</template>

<style scoped>
/* Add your styles here */
</style>
