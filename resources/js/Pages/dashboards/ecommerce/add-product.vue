<script setup>
import { ref } from 'vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

import * as addProductsData from '@/shared/data/dashboards/ecommerce/addProductsdata'
import Multiselect from 'vue-multiselect'
import { Head } from '@inertiajs/vue3'

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
const addTag = (newTag) => {
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
  <Pageheader :propData="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-3">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Product Images</div>
            </div>
            <div class="card-body custom-product">
              <file-pond
                name="test"
                ref="pond"
                label-idle="Drag & Drop files here or <span class='filepond--label-action'>Browse</span>"
                allow-multiple="true"
                max-files="3"
                accepted-file-types="image/jpeg, image/png"
                v-bind:files="myFiles"
              />
              <label class="form-label text-muted mt-1 fs-13 mb-0 fw-normal"
                >Upload 6 images, ensuring uniform size (max 2MB). Changes can be made after 24
                hours.
              </label>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Product Details</div>
            </div>
            <div class="card-body">
              <div class="row gy-2">
                <div class="col-xl-12">
                  <label for="publish-date" class="form-label">Publish Date</label>
                  <Datepicker
                    placeholder="Choose date"
                    id="publish-date"
                    :enable-time-picker="false"
                    autoApply
                    v-model="picked"
                    class="form-control custom-date-picker"
                  />
                </div>
                <div class="col-xl-12">
                  <label for="publish-time" class="form-label">Publish Time</label>
                  <Datepicker
                    placeholder="Choose time"
                    id="publish-time"
                    class="datepicker-here form-control custom-date-picker"
                    autoApply
                    time-picker
                    v-model="time"
                  />
                </div>
                <div class="col-xl-12">
                  <label for="product-status-add" class="form-label">Published Status</label>
                  <VueMultiselect
                    :searchable="true"
                    name="product-status-add"
                    id="product-status-add"
                    :show-labels="false"
                    :multiple="false"
                    v-model="StatusselectValue"
                    :options="addProductsData.publishselect"
                    :taggable="false"
                    placeholder="Select"
                  >
                  </VueMultiselect>
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
                  >
                  </Multiselect>
                </div>
                <div class="col-xl-12">
                  <label for="product-status-add1" class="form-label">Availability</label>
                  <VueMultiselect
                    :searchable="true"
                    name="product-status-add1"
                    id="product-status-add1"
                    :show-labels="false"
                    :multiple="false"
                    v-model="AvailabilityselectValue"
                    :options="addProductsData.availableselect"
                    :taggable="false"
                    placeholder="Select"
                  >
                  </VueMultiselect>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Warrenty Documents</div>
            </div>
            <div class="card-body custom-product">
              <file-pond
                name="test"
                ref="pond"
                label-idle="Drag & Drop files here or <span class='filepond--label-action'>Browse</span>"
                allow-multiple="true"
                max-files="3"
                accepted-file-types="image/jpeg, image/png"
                v-bind:files="myFiles"
              />
              <label class="form-label text-muted mt-1 fs-13 fw-normal mb-0"
                >Upload warranty document (PDF/DOC, max 5MB).</label
              >
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
              <input type="text" class="form-control" id="product-name-add" placeholder="Name" />
              <label for="product-name-add" class="form-label mt-1 fs-12 op-5 text-muted mb-0"
                >*Product Name should not exceed 30 characters</label
              >
            </div>
            <div class="col-xl-6">
              <label for="product-category-add" class="form-label">Category</label>
              <VueMultiselect
                :searchable="true"
                name="product-category-add"
                id="product-category-add"
                :show-labels="false"
                :multiple="false"
                v-model="CategoryselectValue"
                :options="addProductsData.categoryselect"
                :taggable="false"
                placeholder="Select"
              >
              </VueMultiselect>
            </div>
            <div class="col-xl-6">
              <label for="product-gender-add" class="form-label">Gender</label>
              <VueMultiselect
                :searchable="true"
                name="product-gender-add"
                id="product-gender-add"
                :show-labels="false"
                :multiple="false"
                v-model="GenderselectValue"
                :options="addProductsData.genderselect"
                :taggable="false"
                placeholder="Select"
              >
              </VueMultiselect>
            </div>
            <div class="col-xl-6">
              <label for="product-size-add" class="form-label">Size</label>
              <VueMultiselect
                :searchable="true"
                name="product-size-add"
                id="product-size-add"
                :show-labels="false"
                :multiple="false"
                v-model="SizeselectValue"
                :options="addProductsData.sizeselect"
                :taggable="false"
                placeholder="Select"
              >
              </VueMultiselect>
            </div>
            <div class="col-xl-6">
              <label for="product-brand-add" class="form-label">Brand</label>
              <VueMultiselect
                :searchable="true"
                name="product-brand-add"
                id="product-brand-add"
                :show-labels="false"
                :multiple="false"
                v-model="BrandselectValue"
                :options="addProductsData.brandselect"
                :taggable="false"
                placeholder="Select"
              >
              </VueMultiselect>
            </div>
            <div class="col-xl-6 color-selection">
              <label for="product-color-add" class="form-label">Colors</label>
              <VueMultiselect
                :searchable="true"
                name="product-color-add"
                id="product-color-add"
                :show-labels="false"
                :multiple="true"
                v-model="ColorselectValue"
                :options="addProductsData.colorselect"
                :taggable="false"
                placeholder="Select"
              >
              </VueMultiselect>
            </div>
            <div class="col-xl-6">
              <label for="product-cost-add" class="form-label">Enter Cost</label>
              <input type="text" class="form-control" id="product-cost-add" placeholder="Cost" />
              <label for="product-cost-add" class="form-label mt-1 fs-12 op-5 text-muted mb-0"
                >*Mention final price of the product</label
              >
            </div>
            <div class="col-xl-12">
              <label for="product-description-add" class="form-label">Product Description</label>
              <textarea class="form-control" id="product-description-add" rows="2"></textarea>
              <label
                for="product-description-add"
                class="form-label mt-1 fs-12 op-5 text-muted mb-0"
                >*Description should not exceed 500 letters</label
              >
            </div>
            <div class="col-xl-12">
              <label class="form-label">Product Features</label>
              <div id="product-features">
                <vue-editor v-model="content"></vue-editor>
              </div>
            </div>
            <div class="col-xl-4">
              <label for="product-actual-price" class="form-label">Actual Price</label>
              <input
                type="text"
                class="form-control"
                id="product-actual-price"
                placeholder="Actual Price"
              />
            </div>
            <div class="col-xl-4">
              <label for="product-dealer-price" class="form-label">Dealer Price</label>
              <input
                type="text"
                class="form-control"
                id="product-dealer-price"
                placeholder="Dealer Price"
              />
            </div>
            <div class="col-xl-4">
              <label for="product-discount" class="form-label">Discount</label>
              <input
                type="text"
                class="form-control"
                id="product-discount"
                placeholder="Discount in %"
              />
            </div>
            <div class="col-xl-6">
              <label for="product-type" class="form-label">Product Type</label>
              <input type="text" class="form-control" id="product-type" placeholder="Type" />
            </div>
            <div class="col-xl-6">
              <label for="product-discount" class="form-label">Item Weight</label>
              <input
                type="text"
                class="form-control"
                id="product-discount1"
                placeholder="Weight in gms"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-end mt-3">
      <button class="btn btn-primary-light m-1">
        Add Product<i class="bi bi-plus-lg ms-2"></i>
      </button>
      <button class="btn btn-success-light m-1">
        Save Product<i class="bi bi-download ms-2"></i>
      </button>
    </div>
  </div>
  <!-- End:: row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
