<script setup>
import { ref, onMounted } from 'vue'
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import Tagify from '@yaireo/tagify'
import '@yaireo/tagify/dist/tagify.css'
import Pageheader from '@/components/pageheader/pageheader.vue'
import { Head } from '@inertiajs/vue3'
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview)

const picked = ref(null)
const picked1 = ref(null)
const tagifyRef = ref(null)

onMounted(() => {
  const input = document.querySelector('[name="tags"]')
  if (input) {
    tagifyRef.value = new Tagify(input, {
      maxTags: 10,
      placeholder: 'Add tags here...',
    })
  }
})

// State
const dataToPass = {
  activepage: 'Create Project',
  title: 'Dashboards',
  subtitle: 'Projects',
  currentpage: 'Create Project',
}

const content = ref(`
  <p>"Project Omni" is a cloud-based platform designed to streamline project management for small to medium-sized businesses. The application enables users to create, manage, and collaborate on projects with team members. It includes tools for task tracking, time management, file sharing, and real-time messaging. The goal is to improve productivity, enhance communication, and ensure that projects are completed on time and within budget.</p>
  <p><br></p>
  <ol>
    <li class="ql-size-normal">User Authentication and Role Management.</li>
    <li class="">Project Creation and Management.</li>
    <li class="">Task Assignment and Tracking.</li>
    <li class="">Time Tracking Integration.</li>
    <li class="">File Sharing and Document Management.</li>
    <li class="">Real-time Collaboration and Messaging.</li>
  </ol>
`)

const StatusSelectValue = ref('Inprogress')
const StatusSelect = ['Completed', 'Inprogress', 'On-hold']

const PrioritySelectValue = ref('High')
const PrioritySelect = ['High', 'Medium', 'Low']

const AssionedSelectValue = ref(['Angelina May', 'Alexa Biss', 'Alex Carey'])
const AssionedSelect = [
  'Angelina May',
  'Kiara advain',
  'Hercules Jhon',
  'Mayor Kim',
  'Alexa Biss',
  'Karley Dia',
  'Kim Jong',
  'Darren Sami',
  'Elizabeth',
  'Bear Gills',
  'Alex Carey',
]

const myFiles = ref([])
</script>

<template>
  <Head title="Create-Project | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Create Project</div>
        </div>
        <div class="card-body">
          <div class="row gy-3">
            <div class="col-xl-4">
              <label for="input-label" class="form-label">Project Name :</label>
              <input
                type="text"
                class="form-control"
                id="input-label"
                placeholder="Enter Project Name"
              />
            </div>
            <div class="col-xl-4">
              <label for="input-label11" class="form-label">Project Manager :</label>
              <input
                type="text"
                class="form-control"
                id="input-label11"
                placeholder="Project Manager Name"
              />
            </div>
            <div class="col-xl-4">
              <label for="input-label1" class="form-label">Client / Stakeholder :</label>
              <input
                type="text"
                class="form-control"
                id="input-label1"
                placeholder="Enter Client Name"
              />
            </div>
            <div class="col-xl-12">
              <label class="form-label">Project Description :</label>
              <div id="project-descriptioin-editor">
                <vue-editor v-model="content"></vue-editor>
              </div>
            </div>
            <div class="col-xl-6">
              <label class="form-label">Start Date :</label>
              <div class="form-group">
                <div class="input-group salesDatePicker">
                  <div class="input-group-text text-muted"><i class="ri-calendar-line"></i></div>
                  <Datepicker
                    class="form-control custom-date-picker custom"
                    autoApply
                    placeholder="Choose date and time"
                    v-model="picked"
                  />
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <label class="form-label">End Date :</label>
              <div class="form-group">
                <div class="input-group salesDatePicker">
                  <div class="input-group-text text-muted"><i class="ri-calendar-line"></i></div>
                  <Datepicker
                    class="form-control custom-date-picker custom"
                    autoApply
                    placeholder="Choose date and time"
                    v-model="picked1"
                  />
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <label class="form-label">Status :</label>
              <VueMultiselect
                :searchable="true"
                :show-labels="false"
                name="choices-single-default1"
                id="choices-single-default1"
                :multiple="false"
                v-model="StatusSelectValue"
                :options="StatusSelect"
                :taggable="false"
              >
              </VueMultiselect>
            </div>
            <div class="col-xl-6">
              <label class="form-label">Priority :</label>
              <VueMultiselect
                :searchable="true"
                :show-labels="false"
                name="choices-single-default1"
                id="choices-single-default1"
                v-model="PrioritySelectValue"
                :options="PrioritySelect"
                :taggable="false"
              >
              </VueMultiselect>
            </div>
            <div class="col-xl-6">
              <label class="form-label">Assigned To</label>
              <VueMultiselect
                :searchable="false"
                :show-labels="false"
                :multiple="true"
                v-model="AssionedSelectValue"
                :options="AssionedSelect"
                :taggable="true"
              >
              </VueMultiselect>
            </div>
            <div class="col-xl-6 custom-tag">
              <label class="form-label">Tags</label>
              <input
                class="form-control"
                name="tags"
                id="choices-text-unique-values"
                type="text"
                value="Marketing, Sales, Development, Design, Research"
                placeholder="Add Tags Here "
              />
            </div>
            <div class="col-xl-12 custom-product">
              <label class="form-label">Attachments</label>
              <file-pond
                name="test"
                ref="pond"
                label-idle="Drag & Drop files here or <span class='filepond--label-action'>Browse</span>"
                allow-multiple="true"
                max-files="3"
                accepted-file-types="image/jpeg, image/png"
                v-bind:files="myFiles"
              />
            </div>
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary-light btn-wave ms-auto float-end">Create Project</button>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
