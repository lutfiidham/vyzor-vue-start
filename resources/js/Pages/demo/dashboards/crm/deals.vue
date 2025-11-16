<script setup>
import { Head } from '@inertiajs/vue3'
import { defineAsyncComponent, ref } from 'vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkDealsCard from '@/shared/@spk/dashboards/crm/spk-deals-card.vue'
import * as dealsData from '@/shared/data/dashboards/crm/dealsdata'

const VueDraggableNext = defineAsyncComponent(() =>
  import('vue-draggable-next').then(m => m.VueDraggableNext),
)

const draggable = VueDraggableNext

// reactive references
const picked = ref(null)
const profileImg = ref('/images/faces/9.jpg')

// dataToPass object
const dataToPass = {
  title: 'Dashboards',
  subtitle: 'CRM',
  currentpage: 'Deals',
  activepage: 'Deals',
}

// methods
const avatar = ref('')
const fileinput = ref(null)

function onFileSelected(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = e => {
      avatar.value = e.target.result
    }
  }
}

function triggerFileInput() {
  fileinput.value?.click()
}
</script>

<template>
  <Head title="CRM-Deals | Vyzor - Laravel & Vue " />

  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex align-items-center flex-wrap gap-2 justify-content-between">
            <div class="d-flex align-items-center">
              <span class="fw-medium fs-16 me-1">Deals</span>
            </div>
            <div class="d-flex flex-wrap gap-2">
              <button
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#create-contact"
              >
                <i class="ri-add-line me-1 fw-medium align-middle" />New Deal
              </button>
              <button class="btn btn-success">
                Export As CSV
              </button>
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="btn btn-light btn-wave waves-effect waves-light"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                </a>
                <ul class="dropdown-menu" role="menu">
                  <li><a class="dropdown-item" href="javascript:void(0);">Newest</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Date Added</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">A - Z</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-1 -->

  <!-- Start::row-2 -->
  <div class="row">
    <div
      v-for="(item, index) in dealsData.dealCards"
      :key="index"
      class="col-xxl-2 col-xl-4 col-lg-6 col-md-6"
    >
      <div class="card custom-card">
        <div class="card-body p-3">
          <div class="d-flex align-items-top flex-wrap justify-content-between gap-1">
            <div>
              <div class="fw-medium fs-15" :class="[item.labelClass]">
                {{ item.label }}
              </div>
              <span class="badge bg-light text-default">{{ item.badgeText }}</span>
            </div>
            <div>
              <span class="fw-medium" :class="[item.amountStyle]">{{ item.amount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-2 -->

  <!-- Start::row-3 -->
  <div class="row">
    <div class="col-xxl-2">
      <Draggable
        v-for="idx in dealsData.PrimaryDeal"
        id="leads-discovered"
        :key="idx.id"
        group="deals"
        item-key="name"
      >
        <SpkDealsCard :card="idx" />
      </Draggable>
    </div>
    <div class="col-xxl-2">
      <Draggable
        v-for="idx in dealsData.warningDeal"
        id="leads-qualified"
        :key="idx.id"
        group="deals"
        item-key="name"
      >
        <SpkDealsCard :card="idx" />
      </Draggable>
    </div>
    <div class="col-xxl-2">
      <Draggable
        v-for="idx in dealsData.successDeal"
        id="contact-initiated"
        :key="idx.id"
        group="deals"
        item-key="name"
      >
        <SpkDealsCard :card="idx" />
      </Draggable>
    </div>
    <div class="col-xxl-2">
      <Draggable
        v-for="idx in dealsData.infoDeal"
        id="needs-identified"
        :key="idx.id"
        group="deals"
        item-key="name"
      >
        <SpkDealsCard :card="idx" />
      </Draggable>
    </div>
    <div class="col-xxl-2">
      <Draggable
        v-for="idx in dealsData.dangerDeals"
        id="negotiation"
        :key="idx.id"
        group="deals"
        item-key="name"
      >
        <SpkDealsCard :card="idx" />
      </Draggable>
    </div>
    <div class="col-xxl-2">
      <Draggable
        v-for="idx in dealsData.pinkDeals"
        id="deal-finalized"
        :key="idx.id"
        group="deals"
        item-key="name"
      >
        <SpkDealsCard :card="idx" />
      </Draggable>
    </div>
  </div>
  <!-- End::row-3 -->

  <!-- Start:: New Deal -->
  <div id="create-contact" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">
            New Deal
          </h6>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body px-4">
          <div class="row gy-3">
            <div class="col-xl-12">
              <div class="mb-0 text-center">
                <span class="avatar avatar-xxl avatar-rounded">
                  <img v-if="avatar" loading="lazy" class="avatar" :src="avatar" alt="Avatar">
                  <BaseImg v-else id="profile-img" src="/images/faces/9.jpg" alt="" />
                  <a
                    href="#!"
                    class="badge rounded-pill bg-primary avatar-badge"
                    aria-label="Change profile picture"
                    @click.prevent="triggerFileInput"
                  >
                    <i class="fe fe-camera" />
                  </a>

                  <input
                    id="profile-change"
                    ref="fileinput"
                    style="display: none"
                    type="file"
                    class="position-absolute w-100 h-100 op-0"
                    accept=".jpg, .jpeg, .png"
                    @change="onFileSelected"
                  >
                </span>
              </div>
            </div>
            <div class="col-xl-6">
              <label for="deal-name" class="form-label">Contact Name</label>
              <input id="deal-name" type="text" class="form-control" placeholder="Contact Name">
            </div>
            <div class="col-xl-6">
              <label for="deal-lead-score" class="form-label">Deal Value</label>
              <input
                id="deal-lead-score"
                type="number"
                class="form-control"
                placeholder="Deal Value"
              >
            </div>
            <div class="col-xl-12">
              <label for="company-name" class="form-label">Company Name</label>
              <input
                id="company-name"
                type="text"
                class="form-control"
                placeholder="Company Name"
              >
            </div>
            <div class="col-xl-12">
              <label class="form-label">Last Contacted</label>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-text text-muted">
                    <i class="ri-calendar-line" />
                  </div>
                  <Datepicker
                    v-model="picked"
                    class="form-control custom-date-picker"
                    auto-apply
                    placeholder="Choose date and time"
                    time-picker-inline
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">
            Cancel
          </button>
          <button type="button" class="btn btn-primary">
            Create Deal
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: New Deal -->
</template>

<style scoped>
/* Add your styles here */
</style>
