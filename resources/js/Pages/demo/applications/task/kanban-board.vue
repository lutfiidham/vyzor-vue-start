<script setup>
import { Head } from '@inertiajs/vue3'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import { defineAsyncComponent, ref } from 'vue'
import vueFilePond from 'vue-filepond'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkKanbancard from '@/shared/@spk/applications/task/spk-kanbancard.vue'
import {
  kanbanCardsdangerdata,
  KanbanCardsdata,
  kanbanCardsinfodata,
  kanbanCardsuccessdata,
  kanbanCardswarningdata,
} from '@/shared/data/applications/task/kanbandata'
import 'simplebar-vue/dist/simplebar.min.css'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

const KanbanCards = ref(KanbanCardsdata)
const kanbanCardsdanger = ref(kanbanCardsdangerdata)
const kanbanCardsinfo = ref(kanbanCardsinfodata)
const kanbanCardsuccess = ref(kanbanCardsuccessdata)
const kanbanCardswarning = ref(kanbanCardswarningdata)

const VueDraggableNext = defineAsyncComponent(() =>
  import('vue-draggable-next').then(m => m.VueDraggableNext),
)

const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview)

const picked = ref(null)
const dataToPass = {
  title: 'Applications',
  subtitle: 'Task',
  currentpage: 'Kanban Board',
  activepage: 'Kanban Board',
}

const simpleItems1Value = ref(null)
const simpleItems1 = ref(['Angelina May', 'Hercules Jhon', 'Kairar Advin', 'Mayour Kim'])
const Option3Value = ref(null)
const Option3 = ref([
  'UI/UX',
  'Marketing',
  'Finance',
  'Designing',
  'Admin',
  'Authentication',
  'Product',
  'Development',
])
const OptionsValue = ref('Sort By')
const Options = ref(['Sort By', 'Newest', 'Date Added', 'Type', 'A - Z'])
const myFiles = ref([])

function onDragStart(event) {}

function onDragEnd(event) {}
</script>

<template>
  <Head title="Kanban Board | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-body p-3">
          <div
            class="d-sm-flex align-items-center flex-wrap gap-3 kanban-header justify-content-between"
          >
            <div class="d-sm-flex align-items-center flex-wrap gap-3 w-sm-50 mb-sm-0 mb-3">
              <div class="mb-sm-0 mb-3">
                <button
                  class="btn btn-primary me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#add-board"
                >
                  <i class="ri-add-line me-1 fw-medium align-middle" />New Board
                </button>
              </div>
              <div>
                <div class="avatar-list-stacked">
                  <span class="avatar avatar-sm avatar-rounded">
                    <BaseImg src="/images/faces/2.jpg" alt="img" />
                  </span>
                  <span class="avatar avatar-sm avatar-rounded">
                    <BaseImg src="/images/faces/8.jpg" alt="img" />
                  </span>
                  <span class="avatar avatar-sm avatar-rounded">
                    <BaseImg src="/images/faces/2.jpg" alt="img" />
                  </span>
                  <span class="avatar avatar-sm avatar-rounded">
                    <BaseImg src="/images/faces/10.jpg" alt="img" />
                  </span>
                  <span class="avatar avatar-sm avatar-rounded">
                    <BaseImg src="/images/faces/4.jpg" alt="img" />
                  </span>
                  <span class="avatar avatar-sm avatar-rounded">
                    <BaseImg src="/images/faces/13.jpg" alt="img" />
                  </span>
                  <a
                    class="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                    href="javascript:void(0);"
                  >
                    +8
                  </a>
                </div>
              </div>
            </div>
            <div
              class="d-sm-flex align-items-center flex-wrap justify-content-end gap-3 custom-board"
            >
              <VueMultiselect
                id="choices-single-default"
                v-model="OptionsValue"
                :searchable="true"
                :show-labels="false"
                class="kanban-sortby"
                name="choices-single-default"
                :multiple="false"
                :options="Options"
                :taggable="false"
              />
              <div class="d-flex mt-sm-0 mt-3" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                >
                <button class="btn btn-light" type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start::row-2 -->
  <div class="VYZOR-kanban-board">
    <div class="kanban-tasks-type new">
      <div class="pe-3 mb-3">
        <div class="d-flex justify-content-between align-items-center">
          <span class="d-block fw-medium fs-15">New - 04</span>
          <div>
            <a
              aria-label="anchor"
              href="javascript:void(0)"
              class="btn btn-sm bg-white text-default border btn-wave"
              data-bs-toggle="modal"
              data-bs-target="#add-task"
            >
              <i class="ri-add-line align-middle me-1 fw-medium" />Add Task
            </a>
          </div>
        </div>
      </div>
      <Simplebar id="new-tasks" class="kanban-tasks">
        <div id="new-tasks-draggable" data-view-btn="new-tasks">
          <VueDraggableNext
            id="task-null-background"
            v-model="KanbanCards"
            group="people"
            item-key="name"
            data-view-btn="new-tasks"
            @start="onDragStart"
            @end="onDragEnd"
          >
            <div v-if="KanbanCards.length === 0" class="task-null-background">
              <BaseImg src="/images/media/media-81.svg" alt="" />
            </div>
            <SpkKanbancard v-for="idx in KanbanCards" :key="idx.id" :card="idx" />
          </VueDraggableNext>
        </div>
      </Simplebar>
      <div v-if="KanbanCards.length" class="d-grid view-more-button mt-3">
        <button class="btn btn-primary-light btn-wave">
          View More
        </button>
      </div>
    </div>
    <div class="kanban-tasks-type todo">
      <div class="pe-3 mb-3">
        <div class="d-flex justify-content-between align-items-center">
          <span class="d-block fw-medium fs-15">Todo - 36</span>
          <div>
            <a
              aria-label="anchor"
              href="javascript:void(0)"
              class="btn btn-sm bg-white text-default border btn-wave"
              data-bs-toggle="modal"
              data-bs-target="#add-task"
            >
              <i class="ri-add-line align-middle me-1 fw-medium" />Add Task
            </a>
          </div>
        </div>
      </div>
      <Simplebar id="todo-tasks" class="kanban-tasks">
        <div id="todo-tasks-draggable" data-view-btn="todo-tasks">
          <VueDraggableNext
            id="todo-tasks-draggable"
            v-model="kanbanCardswarning"
            group="people"
            item-key="name"
            data-view-btn="new-tasks"
            @start="onDragStart"
            @end="onDragEnd"
          >
            <div v-if="kanbanCardswarning.length === 0" class="task-null-background">
              <BaseImg src="/images/media/media-81.svg" alt="" />
            </div>
            <SpkKanbancard v-for="idx in kanbanCardswarning" :key="idx.id" :card="idx" />
          </VueDraggableNext>
        </div>
      </Simplebar>
      <div v-if="kanbanCardswarning.length" class="d-grid view-more-button mt-3">
        <button class="btn btn-warning-light btn-wave">
          View More
        </button>
      </div>
    </div>
    <div class="kanban-tasks-type in-progress">
      <div class="pe-3 mb-3">
        <div class="d-flex justify-content-between align-items-center">
          <span class="d-block fw-medium fs-15">On Going - 25</span>
          <div>
            <a
              aria-label="anchor"
              href="javascript:void(0)"
              class="btn btn-sm bg-white text-default border btn-wave"
              data-bs-toggle="modal"
              data-bs-target="#add-task"
            >
              <i class="ri-add-line align-middle me-1 fw-medium" />Add Task
            </a>
          </div>
        </div>
      </div>
      <Simplebar id="inprogress-tasks" class="kanban-tasks">
        <div id="inprogress-tasks-draggable" data-view-btn="inprogress-tasks">
          <VueDraggableNext
            id="inprogress-tasks-draggable"
            v-model="kanbanCardsinfo"
            group="people"
            item-key="name"
            data-view-btn="new-tasks"
            @start="onDragStart"
            @end="onDragEnd"
          >
            <div v-if="kanbanCardsinfo.length === 0" class="task-null-background" draggable="false">
              <BaseImg src="/images/media/media-81.svg" alt="" />
            </div>
            <SpkKanbancard v-for="idx in kanbanCardsinfo" :key="idx.id" :card="idx" />
          </VueDraggableNext>
        </div>
      </Simplebar>
      <div v-if="kanbanCardsinfo.length" class="d-grid view-more-button mt-3">
        <button class="btn btn-info-light btn-wave">
          View More
        </button>
      </div>
    </div>
    <div class="kanban-tasks-type inreview">
      <div class="pe-3 mb-3">
        <div class="d-flex justify-content-between align-items-center">
          <span class="d-block fw-medium fs-15">In Review - 02</span>
          <div>
            <a
              aria-label="anchor"
              href="javascript:void(0)"
              class="btn btn-sm bg-white text-default border btn-wave"
              data-bs-toggle="modal"
              data-bs-target="#add-task"
            >
              <i class="ri-add-line align-middle me-1 fw-medium" />Add Task
            </a>
          </div>
        </div>
      </div>
      <Simplebar id="inreview-tasks" class="kanban-tasks">
        <div id="inreview-tasks-draggable" data-view-btn="inreview-tasks">
          <VueDraggableNext
            id="inreview-tasks-draggable"
            v-model="kanbanCardsdanger"
            group="people"
            item-key="name"
            data-view-btn="inreview-tasks"
            @start="onDragStart"
            @end="onDragEnd"
          >
            <div
              v-if="kanbanCardsdanger.length === 0"
              class="task-null-background"
              draggable="false"
            >
              <BaseImg src="/images/media/media-81.svg" alt="" />
            </div>
            <SpkKanbancard v-for="idx in kanbanCardsdanger" :key="idx.id" :card="idx" />
          </VueDraggableNext>
        </div>
      </Simplebar>
      <div v-if="kanbanCardsdanger.length" class="d-grid view-more-button mt-3">
        <button class="btn btn-danger-light btn-wave">
          View More
        </button>
      </div>
    </div>
    <div class="kanban-tasks-type completed">
      <div class="pe-3 mb-3">
        <div class="d-flex justify-content-between align-items-center">
          <span class="d-block fw-medium fs-15">Completed - 36</span>
          <div>
            <a
              aria-label="anchor"
              href="javascript:void(0)"
              class="btn btn-sm bg-white text-default border btn-wave"
              data-bs-toggle="modal"
              data-bs-target="#add-task"
            >
              <i class="ri-add-line align-middle me-1 fw-medium" />Add Task
            </a>
          </div>
        </div>
      </div>
      <Simplebar id="completed-tasks" class="kanban-tasks">
        <div id="completed-tasks-draggable" data-view-btn="completed-tasks">
          <VueDraggableNext
            id="completed-tasks-draggable"
            v-model="kanbanCardsuccess"
            group="people"
            item-key="name"
            data-view-btn="completed-tasks"
            @start="onDragStart"
            @end="onDragEnd"
          >
            <div
              v-if="kanbanCardsuccess.length === 0"
              class="task-null-background"
              draggable="false"
            >
              <BaseImg src="/images/media/media-81.svg" alt="" />
            </div>
            <SpkKanbancard v-for="idx in kanbanCardsuccess" :key="idx.id" :card="idx" />
          </VueDraggableNext>
        </div>
      </Simplebar>
      <div v-if="kanbanCardsuccess.length" class="d-grid view-more-button mt-3">
        <button class="btn btn-success-light btn-wave">
          View More
        </button>
      </div>
    </div>
  </div>
  <!-- End::row-2 -->

  <!-- Start::add board modal -->
  <div id="add-board" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">
            Add Board
          </h6>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body px-4">
          <div class="row">
            <div class="col-xl-12">
              <label for="board-title" class="form-label">Task Board Title</label>
              <input id="board-title" type="text" class="form-control" placeholder="Board Title">
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">
            Cancel
          </button>
          <button type="button" class="btn btn-primary">
            Add Board
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End::add board modal -->

  <!-- Start::add task modal -->
  <div id="add-task" class="modal fade" tabindex="-1" aria-hidden="true">
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
            <div class="col-xl-12">
              <label for="text-area" class="form-label">Task Description</label>
              <textarea
                id="text-area"
                class="form-control"
                rows="2"
                placeholder="Write Description"
              />
            </div>
            <div class="col-xl-12 custom-tasks">
              <label for="text-area" class="form-label">Task Images</label>
              <FilePond
                ref="pond"
                name="test"
                label-idle="Drag & Drop files here or <span class='filepond--label-action'>Browse</span>"
                allow-multiple="true"
                max-files="3"
                accepted-file-types="image/jpeg, image/png"
                :files="myFiles"
              />
            </div>
            <div class="col-xl-12">
              <label class="form-label">Assigned To</label>
              <VueMultiselect
                id="choices-multiple-remove-button1"
                v-model="simpleItems1Value"
                :searchable="true"
                :show-labels="false"
                name="choices-multiple-remove-button1"
                :multiple="true"
                :options="simpleItems1"
                :taggable="false"
              />
            </div>
            <div class="col-xl-6">
              <label class="form-label">Target Date</label>

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
              <label class="form-label">Tags</label>
              <VueMultiselect
                id="choices-multiple-remove-button2"
                v-model="Option3Value"
                :searchable="true"
                :show-labels="false"
                name="choices-multiple-remove-button2"
                :multiple="true"
                placeholder="Select Tag"
                :options="Option3"
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
