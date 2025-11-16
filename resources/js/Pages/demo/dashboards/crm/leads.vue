<script setup>
import { Head } from '@inertiajs/vue3'
import { ref } from 'vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import { Leadsdata as InitialLeadsdata } from '@/shared/data/dashboards/crm/leads'
// Reactive state
const Leadsdata = ref(
  InitialLeadsdata.map(item => ({
    ...item,
    checked: false,
  })),
)

const profileImg = ref('/images/faces/9.jpg')
const checkAll = ref(false)

const Data2Value = ref(null)
const Data2 = ['New', 'Follow-up', 'Closed', 'Contacted', 'Disqualified', 'Qualified']

const Data1Value = ref('Social Media')
const Data1 = ['Social Media', 'Direct mail', 'Blog Articles', 'Affiliates', 'Organic search']

const DataValue = ref(null)
const Data = [
  'New Lead',
  'Prospect',
  'Customer',
  'Hot Lead',
  'Partner',
  'LostCustomer',
  'Influencer',
  'Subscriber',
]

const dataToPass = {
  title: 'Dashboards',
  subtitle: 'CRM',
  currentpage: 'Leads',
  activepage: 'Leads',
}

// Methods
function handleToDelete(id) {
  Leadsdata.value = Leadsdata.value.filter(item => item.id !== id)
}

const avatar = ref('')
const fileinput = ref(null)

function onFileSelected(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      avatar.value = e.target.result
    }
  }
}

function triggerFileInput() {
  fileinput.value?.click()
}
</script>

<template>
  <Head title="CRM-Leads | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div class="card-title">
            Leads
          </div>
          <div class="d-flex flex-wrap gap-2">
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#create-contact">
              <i class="ri-add-line me-1 fw-medium align-middle" />Create Lead
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
        <div class="card-body p-0">
          <div class="table-responsive">
            <TableComponent
              #cell="{ row }"
              table-class="table leads-table"
              :show-checkbox="true"
              thead-class="table-header-light"
              :headers="[
                { text: 'Contact Name', thClass: '' },
                { text: 'Email', thClass: '' },
                { text: 'Phone', thClass: '' },
                { text: 'Lead Status', thClass: '' },
                { text: 'Company', thClass: '' },
                { text: 'Lead Source', thClass: '' },
                { text: 'Tags', thClass: '' },
                { text: 'Actions', thClass: '' },
              ]"
              :rows="Leadsdata"
            >
              <td>
                <div class="d-flex align-items-center gap-2">
                  <div class="lh-1">
                    <span class="avatar avatar-rounded avatar-sm">
                      <BaseImg :src="row.avatar" alt="" />
                    </span>
                  </div>
                  <div>
                    <span class="d-block fw-medium">{{ row.name }}</span>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <span class="d-block mb-1"><i class="ri-mail-line me-2 align-middle fs-14 text-muted d-inline-block" />{{ row.email }}</span>
                </div>
              </td>
              <td>
                <div>
                  <span class="d-block"><i class="ri-phone-line me-2 align-middle fs-14 text-muted" />{{ row.phone }}</span>
                </div>
              </td>
              <td>
                <span class="badge bg-light text-default">{{ row.status }}</span>
              </td>
              <td>
                <div class="d-flex align-items-center gap-2">
                  <div class="lh-1">
                    <span class="avatar avatar-sm avatar-rounded">
                      <BaseImg :src="row.companyLogo" alt="" />
                    </span>
                  </div>
                  <div>{{ row.companyName }}</div>
                </div>
              </td>
              <td>
                {{ row.source }}
              </td>
              <td>
                <div class="d-flex align-items-center flex-wrap gap-1">
                  <span
                    v-for="(badge, index) in row.tags"
                    :key="index"
                    :class="`badge bg-${badge.color}`"
                  >{{ badge.label }}</span>
                </div>
              </td>
              <td>
                <div class="btn-list">
                  <a class="btn btn-sm btn-warning-light btn-icon"><i class="ri-eye-line" /></a>
                  <button class="btn btn-sm btn-info-light btn-icon">
                    <i class="ri-pencil-line" />
                  </button>
                  <button
                    class="btn btn-sm btn-danger-light btn-icon contact-delete"
                    @click="handleToDelete(row.id)"
                  >
                    <i class="ri-delete-bin-line" />
                  </button>
                </div>
              </td>
            </TableComponent>
          </div>
        </div>
        <div class="card-footer border-top-0">
          <div class="d-flex align-items-center flex-wrap">
            <div>Showing 10 Entries <i class="bi bi-arrow-right ms-2 fw-medium" /></div>
            <div class="ms-auto">
              <nav aria-label="Page navigation" class="pagination-style-4">
                <ul class="pagination mb-0">
                  <li class="page-item disabled">
                    <a class="page-link" href="javascript:void(0);"> Prev </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="javascript:void(0);">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">2</a>
                  </li>
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
  <!-- End::row-1 -->

  <!-- Start:: Create Contact -->
  <div id="create-contact" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">
            Create Lead
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
            <div class="col-xl-12">
              <label for="contact-name" class="form-label">Contact Name</label>
              <input
                id="contact-name"
                type="text"
                class="form-control"
                placeholder="Contact Name"
              >
            </div>
            <div class="col-xl-12">
              <label for="contact-mail" class="form-label">Email</label>
              <input
                id="contact-mail"
                type="email"
                class="form-control"
                placeholder="Enter Email"
              >
            </div>
            <div class="col-xl-12">
              <label for="contact-phone" class="form-label">Phone No</label>
              <input
                id="contact-phone"
                type="tel"
                class="form-control"
                placeholder="Enter Phone Number"
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
              <label class="form-label">Lead Status</label>
              <VueMultiselect
                id="choices-multiple-remove-button3"
                v-model="Data2Value"
                :searchable="true"
                :show-labels="false"
                :multiple="false"
                :options="Data2"
                :taggable="false"
                name="choices-multiple-remove-button3"
                placeholder="Select Status"
              />
            </div>
            <div class="col-xl-12">
              <label class="form-label">Lead Source</label>
              <VueMultiselect
                id="choices-multiple-remove-button1"
                v-model="Data1Value"
                :searchable="true"
                :show-labels="false"
                :multiple="false"
                :options="Data1"
                :taggable="false"
                name="choices-multiple-remove-button1"
              />
            </div>
            <div class="col-xl-12 custom-leads">
              <label class="form-label">Tags</label>
              <VueMultiselect
                id="choices-multiple-remove-button2"
                v-model="DataValue"
                :searchable="true"
                :show-labels="false"
                :multiple="true"
                :options="Data"
                :taggable="false"
                name="choices-multiple-remove-button2"
                placeholder="Select Tag"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">
            Cancel
          </button>
          <button type="button" class="btn btn-primary">
            Create Contact
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: Create Contact -->
</template>

<style scoped>
/* Add your styles here */
</style>
