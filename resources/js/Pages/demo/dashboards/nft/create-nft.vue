<script setup>
import { Head } from '@inertiajs/vue3'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import { ref } from 'vue'
import vueFilePond from 'vue-filepond'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkNftReusebleCard from '@/shared/@spk/dashboards/nft/spk-nft-reusebleCard.vue'
import { MartketPlaceItems } from '@/shared/data/dashboards/nft/marcketplacedata'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview)

const myFiles = ref([])

const dataToPass = {
  activepage: 'Create NFT',
  title: 'Dashboards',
  subtitle: 'NFT',
  currentpage: 'Create NFT',
}
const Data1Value = ref(null)
const Data1 = ref([
  'Choose Royalities',
  'Flat Royalty',
  'Graduated Royalty',
  'Tiered Royalty',
  'Time-Limited Royalty',
  'Customized Royalty',
])
</script>

<template>
  <Head title="Create-NFT | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xxl-9 col-xl-8">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Create NFT
          </div>
        </div>
        <div class="card-body">
          <div class="row gy-3 justify-content-between">
            <div class="col-xxl-3 col-xl-12">
              <div class="create-nft-item">
                <label class="form-label">Upload NFT</label>
                <FilePond
                  ref="pond"
                  name="test"
                  label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
                  allow-multiple="false"
                  max-files="1"
                  accepted-file-types="image/jpeg, image/png"
                  :files="myFiles"
                  data-style-panel-layout="circle"
                />
              </div>
            </div>
            <div class="col-xxl-7 col-xl-12">
              <div class="row gy-3">
                <div class="col-xl-12">
                  <label for="input-placeholder" class="form-label">NFT Title</label>
                  <input
                    id="input-placeholder"
                    type="text"
                    class="form-control"
                    placeholder="eg:Neo-Nebulae"
                  >
                </div>
                <div class="col-xl-12">
                  <label for="nft-description" class="form-label">NFT Description</label>
                  <textarea
                    id="nft-description"
                    class="form-control"
                    rows="3"
                    placeholder="Enter Description"
                  />
                </div>
                <div class="col-xl-12">
                  <label for="nft-link" class="form-label">External Link</label>
                  <input
                    id="nft-link"
                    type="text"
                    class="form-control"
                    placeholder="External Link Here"
                  >
                </div>
              </div>
            </div>
            <div class="col-xl-12">
              <div class="row gy-3">
                <div class="col-xl-6">
                  <label for="nft-creator-name" class="form-label">Creator Name</label>
                  <input
                    id="nft-creator-name"
                    type="text"
                    class="form-control"
                    placeholder="Enter Name"
                  >
                </div>
                <div class="col-xl-6">
                  <label for="nft-price" class="form-label">NFT Price</label>
                  <input
                    id="nft-price"
                    type="text"
                    class="form-control"
                    placeholder="Enter Price"
                  >
                </div>
                <div class="col-xl-4">
                  <label for="nft-size" class="form-label">NFT Size</label>
                  <input id="nft-size" type="text" class="form-control" placeholder="Enter Size">
                </div>
                <div class="col-xl-4">
                  <label for="nft-royality" class="form-label">Royality</label>
                  <VueMultiselect
                    id="blockchain"
                    v-model="Data1Value"
                    :searchable="true"
                    :show-labels="false"
                    placeholder="Choose Royalities"
                    :multiple="false"
                    :options="Data1"
                    :taggable="false"
                  />
                </div>
                <div class="col-xl-4">
                  <label for="nft-property" class="form-label">Property</label>
                  <input
                    id="nft-property"
                    type="text"
                    class="form-control"
                    placeholder="Enter Property"
                  >
                </div>
                <div class="col-xl-12">
                  <label class="form-label d-block">Method</label>
                  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input
                      id="strap1"
                      type="radio"
                      class="btn-check"
                      name="strap-material"
                      checked
                    >
                    <label class="btn btn-sm btn-outline-primary text-default z-0" for="strap1"><i class="ti ti-tag me-1 align-middle fs-15 d-inline-block" />Fixed
                      Price</label>
                    <input id="strap2" type="radio" class="btn-check" name="strap-material">
                    <label class="btn btn-sm btn-outline-primary text-default z-0" for="strap2"><i class="ti ti-users fs-15 me-1 align-middle d-inline-block" />Open For
                      Bids</label>
                    <input id="strap3" type="radio" class="btn-check" name="strap-material">
                    <label class="btn btn-sm btn-outline-primary text-default z-0" for="strap3"><i class="ti ti-hourglass-low fs-15 me-1 align-middle d-inline-block" />Timed Auction</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer text-end">
          <a href="javascript:void(0);" class="btn btn-primary btn-wave waves-effect waves-light">Create NFT</a>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-4">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            NFT Preview Here
          </div>
        </div>
        <div class="card-body mb-0">
          <SpkNftReusebleCard
            v-for="idx in MartketPlaceItems.slice(0, 1)"
            :key="idx.id"
            :card="idx"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
