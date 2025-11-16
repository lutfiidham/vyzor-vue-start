<script setup>
import { Head } from '@inertiajs/vue3'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import { ref } from 'vue'
import vueFilePond from 'vue-filepond'

import Multiselect from 'vue-multiselect'
import Pageheader from '@/components/pageheader/pageheader.vue'

import * as addProductsData from '@/shared/data/dashboards/ecommerce/addProductsdata'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

// Register FilePond with plugins
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview)

// Date picker value
const picked = ref(null)
const time = ref(null)

// Page header data
const dataToPass = {
  activepage: 'Add Product',
  title: 'Dashboards',
  subtitle: 'Ecommerce',
  currentpage: 'Add Product',
}

// Reactive select inputs
const BrandselectValue = ref(null)
const CategoryselectValue = ref(null)
const GenderselectValue = ref(null)
const ColorselectValue = ref(null)
const SizeselectValue = ref(null)
const StatusselectValue = ref(null)
const AvailabilityselectValue = ref(null)

// Multiselect (tags) setup
const value = ref([])
const options = ref([])

// Add tag handler for Multiselect
function addTag(newTag) {
  const tag = {
    name: newTag,
    code: newTag.substring(0, 2).toUpperCase() + Math.floor(Math.random() * 10000000),
  }
  options.value.push(tag)
  value.value.push(tag)
}
</script>

<template>
  <Head title="Ecommerce-Add Products | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-3">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">
                Product Images
              </div>
            </div>
            <div class="card-body custom-product">
              <FilePond
                ref="pond"
                name="test"
                label-idle="Drag & Drop files here or <span class='filepond--label-action'>Browse</span>"
                allow-multiple="true"
                max-files="3"
                accepted-file-types="image/jpeg, image/png"
                :files="myFiles"
              />
              <label class="form-label text-muted mt-1 fs-13 mb-0 fw-normal">Upload 6 images, ensuring uniform size (max 2MB). Changes can be made after 24
                hours.
              </label>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">
                Product Details
              </div>
            </div>
            <div class="card-body">
              <div class="row gy-2">
                <div class="col-xl-12">
                  <label for="publish-date" class="form-label">Publish Date</label>
                  <Datepicker
                    id="publish-date"
                    v-model="picked"
                    placeholder="Choose date"
                    :enable-time-picker="false"
                    auto-apply
                    class="form-control custom-date-picker"
                  />
                </div>
                <div class="col-xl-12">
                  <label for="publish-time" class="form-label">Publish Time</label>
                  <Datepicker
                    id="publish-time"
                    v-model="time"
                    placeholder="Choose time"
                    class="datepicker-here form-control custom-date-picker"
                    auto-apply
                    time-picker
                  />
                </div>
                <div class="col-xl-12">
                  <label for="product-status-add" class="form-label">Published Status</label>
                  <VueMultiselect
                    id="product-status-add"
                    v-model="StatusselectValue"
                    :searchable="true"
                    name="product-status-add"
                    :show-labels="false"
                    :multiple="false"
                    :options="addProductsData.publishselect"
                    :taggable="false"
                    placeholder="Select"
                  />
                </div>
                <div class="col-xl-12 custom-tags">
                  <label for="product-tags" class="form-label">Product Tags</label>
                  <Multiselect
                    id="tagging"
                    v-model="value"
                    tag-placeholder="Add this as new tag"
                    placeholder="Search or add a tag"
                    label="name"
                    track-by="code"
                    :options="options"
                    :multiple="true"
                    :taggable="true"
                    @tag="addTag"
                  />
                </div>
                <div class="col-xl-12">
                  <label for="product-status-add1" class="form-label">Availability</label>
                  <VueMultiselect
                    id="product-status-add1"
                    v-model="AvailabilityselectValue"
                    :searchable="true"
                    name="product-status-add1"
                    :show-labels="false"
                    :multiple="false"
                    :options="addProductsData.availableselect"
                    :taggable="false"
                    placeholder="Select"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">
                Warrenty Documents
              </div>
            </div>
            <div class="card-body custom-product">
              <FilePond
                ref="pond"
                name="test"
                label-idle="Drag & Drop files here or <span class='filepond--label-action'>Browse</span>"
                allow-multiple="true"
                max-files="3"
                accepted-file-types="image/jpeg, image/png"
                :files="myFiles"
              />
              <label class="form-label text-muted mt-1 fs-13 fw-normal mb-0">Upload warranty document (PDF/DOC, max 5MB).</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-9">
      <div class="card custom-card shadow-none mb-0 border-0">
        <div class="card-body p-0">
          <div class="row gy-3">
            <div class="col-xl-12">
              <label for="product-name-add" class="form-label">Product Name</label>
              <input id="product-name-add" type="text" class="form-control" placeholder="Name">
              <label for="product-name-add" class="form-label mt-1 fs-12 op-5 text-muted mb-0">*Product Name should not exceed 30 characters</label>
            </div>
            <div class="col-xl-6">
              <label for="product-category-add" class="form-label">Category</label>
              <VueMultiselect
                id="product-category-add"
                v-model="CategoryselectValue"
                :searchable="true"
                name="product-category-add"
                :show-labels="false"
                :multiple="false"
                :options="addProductsData.categoryselect"
                :taggable="false"
                placeholder="Select"
              />
            </div>
            <div class="col-xl-6">
              <label for="product-gender-add" class="form-label">Gender</label>
              <VueMultiselect
                id="product-gender-add"
                v-model="GenderselectValue"
                :searchable="true"
                name="product-gender-add"
                :show-labels="false"
                :multiple="false"
                :options="addProductsData.genderselect"
                :taggable="false"
                placeholder="Select"
              />
            </div>
            <div class="col-xl-6">
              <label for="product-size-add" class="form-label">Size</label>
              <VueMultiselect
                id="product-size-add"
                v-model="SizeselectValue"
                :searchable="true"
                name="product-size-add"
                :show-labels="false"
                :multiple="false"
                :options="addProductsData.sizeselect"
                :taggable="false"
                placeholder="Select"
              />
            </div>
            <div class="col-xl-6">
              <label for="product-brand-add" class="form-label">Brand</label>
              <VueMultiselect
                id="product-brand-add"
                v-model="BrandselectValue"
                :searchable="true"
                name="product-brand-add"
                :show-labels="false"
                :multiple="false"
                :options="addProductsData.brandselect"
                :taggable="false"
                placeholder="Select"
              />
            </div>
            <div class="col-xl-6 color-selection">
              <label for="product-color-add" class="form-label">Colors</label>
              <VueMultiselect
                id="product-color-add"
                v-model="ColorselectValue"
                :searchable="true"
                name="product-color-add"
                :show-labels="false"
                :multiple="true"
                :options="addProductsData.colorselect"
                :taggable="false"
                placeholder="Select"
              />
            </div>
            <div class="col-xl-6">
              <label for="product-cost-add" class="form-label">Enter Cost</label>
              <input id="product-cost-add" type="text" class="form-control" placeholder="Cost">
              <label for="product-cost-add" class="form-label mt-1 fs-12 op-5 text-muted mb-0">*Mention final price of the product</label>
            </div>
            <div class="col-xl-12">
              <label for="product-description-add" class="form-label">Product Description</label>
              <textarea id="product-description-add" class="form-control" rows="2" />
              <label
                for="product-description-add"
                class="form-label mt-1 fs-12 op-5 text-muted mb-0"
              >*Description should not exceed 500 letters</label>
            </div>
            <div class="col-xl-12">
              <label class="form-label">Product Features</label>
              <div id="product-features">
                <VueEditor v-model="content" />
              </div>
            </div>
            <div class="col-xl-4">
              <label for="product-actual-price" class="form-label">Actual Price</label>
              <input
                id="product-actual-price"
                type="text"
                class="form-control"
                placeholder="Actual Price"
              >
            </div>
            <div class="col-xl-4">
              <label for="product-dealer-price" class="form-label">Dealer Price</label>
              <input
                id="product-dealer-price"
                type="text"
                class="form-control"
                placeholder="Dealer Price"
              >
            </div>
            <div class="col-xl-4">
              <label for="product-discount" class="form-label">Discount</label>
              <input
                id="product-discount"
                type="text"
                class="form-control"
                placeholder="Discount in %"
              >
            </div>
            <div class="col-xl-6">
              <label for="product-type" class="form-label">Product Type</label>
              <input id="product-type" type="text" class="form-control" placeholder="Type">
            </div>
            <div class="col-xl-6">
              <label for="product-discount" class="form-label">Item Weight</label>
              <input
                id="product-discount1"
                type="text"
                class="form-control"
                placeholder="Weight in gms"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-end mt-3">
      <button class="btn btn-primary-light m-1">
        Add Product<i class="bi bi-plus-lg ms-2" />
      </button>
      <button class="btn btn-success-light m-1">
        Save Product<i class="bi bi-download ms-2" />
      </button>
    </div>
  </div>
  <!-- End:: row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
