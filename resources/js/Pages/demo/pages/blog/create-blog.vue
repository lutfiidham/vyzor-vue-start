<script setup>
import { Head } from '@inertiajs/vue3'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import { ref } from 'vue'
import vueFilePond from 'vue-filepond'
import Pageheader from '@/components/pageheader/pageheader.vue'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview)

const picked = ref(new Date())
const time = ref({
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
})

const dataToPass = {
  title: 'Pages',
  subtitle: 'Blog',
  currentpage: 'Blog Create',
  activepage: 'Blog Create',
}

const categorySelect = ref(null)
const categoryOptions = ref([
  { name: 'Beauty', code: 'Beauty' },
  { name: 'Fashion', code: 'Fashion' },
  { name: 'Travel', code: 'Travel' },
  { name: 'Food', code: 'Food' },
  { name: 'Sports', code: 'Sports' },
  { name: 'Nature', code: 'Nature' },
])

const publishSelect = ref(null)
const publishOptions = ref([
  { name: 'Published', code: 'Published' },
  { name: 'Hold', code: 'Hold' },
])

const tagValue = ref([
  { name: 'Landscape', code: 'Landscape' },
  { name: 'Blogger', code: 'Blogger' },
])

const tagOptions = ref([
  { name: 'Top Blog', code: 'Top Blog' },
  { name: 'Blogger', code: 'Blogger' },
  { name: 'Adventure', code: 'Adventure' },
  { name: 'Landscape', code: 'Landscape' },
])

function addTag(newTag) {
  const tag = {
    name: newTag,
    code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
  }
  tagOptions.value.push(tag)
  tagValue.value.push(tag)
}

// Rich text content
const content = ref('')

// File uploads
const myFiles = ref([])

// Optional formatting helpers
function nameWithLang({ name, language }) {
  return `${name} — [${language}]`
}

function customLabel({ title, desc }) {
  return `${title} – ${desc}`
}
</script>

<template>
  <Head title="Create-Blog | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            New Blog
          </div>
        </div>
        <div class="card-body">
          <div class="row gy-3">
            <div class="col-xl-12">
              <label for="blog-title" class="form-label">Blog Title</label>
              <input id="blog-title" type="text" class="form-control" placeholder="Blog Title">
            </div>
            <div class="col-xl-12">
              <label for="blog-category" class="form-label">Blog Category</label>
              <VueMultiselect
                v-model="categorySelect"
                :show-labels="false"
                tag-placeholder="Add this as new tag"
                placeholder="Select Category"
                label="name"
                track-by="code"
                :options="categoryOptions"
                :multiple="false"
                @tag="addTag"
              />
            </div>
            <div class="col-xl-6">
              <label for="blog-author" class="form-label">Blog Author</label>
              <input id="blog-author" type="text" class="form-control" placeholder="Enter Name">
            </div>
            <div class="col-xl-6">
              <label for="blog-author-email" class="form-label">Email</label>
              <input
                id="blog-author-email"
                type="text"
                class="form-control"
                placeholder="Enter Email"
              >
            </div>
            <div class="col-xl-6">
              <label for="publish-date" class="form-label">Publish Date</label>
              <Datepicker
                v-model="picked"
                placeholder="Choose Date"
                class="form-control custom-date-picker"
                auto-apply
                :enable-time-picker="false"
              />
            </div>
            <div class="col-xl-6">
              <label for="publish-time" class="form-label">Publish Time</label>
              <Datepicker
                v-model="time"
                placeholder="Date Time"
                class="form-control datepicker-here custom-date-picker"
                auto-apply
                time-picker
              />
            </div>
            <div class="col-xl-6">
              <label for="product-status-add" class="form-label">Published Status</label>
              <VueMultiselect
                v-model="publishSelect"
                :show-labels="false"
                tag-placeholder="Add this as new tag"
                placeholder="Select"
                label="name"
                track-by="code"
                :options="publishOptions"
                :multiple="false"
                @tag="addTag"
              />
            </div>
            <div class="col-xl-6">
              <label for="blog-tags" class="form-label">Blog Tags</label>
              <VueMultiselect
                v-model="tagValue"
                :show-labels="false"
                tag-placeholder="Add this as new tag"
                placeholder="Search or add a tag"
                label="name"
                track-by="code"
                :options="tagOptions"
                :multiple="true"
                :taggable="true"
                @tag="addTag"
              />
            </div>
            <div class="col-xl-12">
              <label class="form-label">Blog Content</label>
              <div id="blog-content">
                <VueEditor v-model="content" />
              </div>
            </div>
            <div class="col-xl-12 blog-images-container custom-product">
              <label for="blog-author-email" class="form-label">Blog Images</label>
              <FilePond
                ref="pond"
                name="test"
                label-idle="Drag & Drop files here or <span class='filepond--label-action'>Browse</span>"
                allow-multiple="true"
                max-files="5"
                accepted-file-types="image/jpeg, image/png"
                :files="myFiles"
              />
            </div>
            <div class="col-xl-12">
              <label class="form-label">Blog Type</label>
              <div class="d-flex align-items-center">
                <div class="form-check me-3">
                  <input
                    id="blog-free1"
                    class="form-check-input"
                    type="radio"
                    name="blog-type"
                    checked
                  >
                  <label class="form-check-label" for="blog-free1"> Free </label>
                </div>
                <div class="form-check">
                  <input id="blog-paid1" class="form-check-input" type="radio" name="blog-type">
                  <label class="form-check-label" for="blog-paid1"> Paid </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="btn-list text-end">
            <button type="button" class="btn btn-sm btn-light">
              Save As Draft
            </button>
            <button type="button" class="btn btn-sm btn-primary">
              Post Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
