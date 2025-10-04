<script setup>
import { ref } from 'vue'
import { Leadsdata as InitialLeadsdata } from '@/shared/data/dashboards/crm/leads'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import BaseImg from '../../../components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'
// Reactive state
const Leadsdata = ref(
  InitialLeadsdata.map((item) => ({
    ...item,
    checked: false,
  }))
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
  Leadsdata.value = Leadsdata.value.filter((item) => item.id !== id)
}

const avatar = ref('')
const fileinput = ref(null)

const onFileSelected = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      avatar.value = e.target.result
    }
  }
}

const triggerFileInput = () => {
  fileinput.value?.click()
}
</script>

<template>
  <Head title="CRM-Leads | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div class="card-title">Leads</div>
          <div class="d-flex flex-wrap gap-2">
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#create-contact">
              <i class="ri-add-line me-1 fw-medium align-middle"></i>Create Lead
            </button>
            <button class="btn btn-success">Export As CSV</button>
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="btn btn-light btn-wave waves-effect waves-light"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
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
              tableClass="table leads-table"
              :showCheckbox="true"
              theadClass="table-header-light"
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
              v-slot:cell="{ row }"
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
                  <span class="d-block mb-1"
                    ><i class="ri-mail-line me-2 align-middle fs-14 text-muted d-inline-block"></i
                    >{{ row.email }}</span
                  >
                </div>
              </td>
              <td>
                <div>
                  <span class="d-block"
                    ><i class="ri-phone-line me-2 align-middle fs-14 text-muted"></i
                    >{{ row.phone }}</span
                  >
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
                    >{{ badge.label }}</span
                  >
                </div>
              </td>
              <td>
                <div class="btn-list">
                  <a class="btn btn-sm btn-warning-light btn-icon"><i class="ri-eye-line"></i></a>
                  <button class="btn btn-sm btn-info-light btn-icon">
                    <i class="ri-pencil-line"></i>
                  </button>
                  <button
                    class="btn btn-sm btn-danger-light btn-icon contact-delete"
                    @click="handleToDelete(row.id)"
                  >
                    <i class="ri-delete-bin-line"></i>
                  </button>
                </div>
              </td>
            </TableComponent>
          </div>
        </div>
        <div class="card-footer border-top-0">
          <div class="d-flex align-items-center flex-wrap">
            <div>Showing 10 Entries <i class="bi bi-arrow-right ms-2 fw-medium"></i></div>
            <div class="ms-auto">
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

  <!-- Start:: Create Contact -->
  <div class="modal fade" id="create-contact" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Create Lead</h6>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body px-4">
          <div class="row gy-3">
            <div class="col-xl-12">
              <div class="mb-0 text-center">
                <span class="avatar avatar-xxl avatar-rounded">
                  <img v-if="avatar" loading="lazy" class="avatar" :src="avatar" alt="Avatar" />
                  <BaseImg v-else src="/images/faces/9.jpg" alt="" id="profile-img" />
                  <a
                    href="#!"
                    class="badge rounded-pill bg-primary avatar-badge"
                    @click.prevent="triggerFileInput"
                    aria-label="Change profile picture"
                  >
                    <i class="fe fe-camera"></i>
                  </a>

                  <input
                    style="display: none"
                    type="file"
                    class="position-absolute w-100 h-100 op-0"
                    id="profile-change"
                    accept=".jpg, .jpeg, .png"
                    @change="onFileSelected"
                    ref="fileinput"
                  />
                </span>
              </div>
            </div>
            <div class="col-xl-12">
              <label for="contact-name" class="form-label">Contact Name</label>
              <input
                type="text"
                class="form-control"
                id="contact-name"
                placeholder="Contact Name"
              />
            </div>
            <div class="col-xl-12">
              <label for="contact-mail" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="contact-mail"
                placeholder="Enter Email"
              />
            </div>
            <div class="col-xl-12">
              <label for="contact-phone" class="form-label">Phone No</label>
              <input
                type="tel"
                class="form-control"
                id="contact-phone"
                placeholder="Enter Phone Number"
              />
            </div>
            <div class="col-xl-12">
              <label for="company-name" class="form-label">Company Name</label>
              <input
                type="text"
                class="form-control"
                id="company-name"
                placeholder="Company Name"
              />
            </div>
            <div class="col-xl-12">
              <label class="form-label">Lead Status</label>
              <VueMultiselect
                :searchable="true"
                :show-labels="false"
                :multiple="false"
                v-model="Data2Value"
                :options="Data2"
                :taggable="false"
                name="choices-multiple-remove-button3"
                id="choices-multiple-remove-button3"
                placeholder="Select Status"
              >
              </VueMultiselect>
            </div>
            <div class="col-xl-12">
              <label class="form-label">Lead Source</label>
              <VueMultiselect
                :searchable="true"
                :show-labels="false"
                :multiple="false"
                v-model="Data1Value"
                :options="Data1"
                :taggable="false"
                name="choices-multiple-remove-button1"
                id="choices-multiple-remove-button1"
              >
              </VueMultiselect>
            </div>
            <div class="col-xl-12 custom-leads">
              <label class="form-label">Tags</label>
              <VueMultiselect
                :searchable="true"
                :show-labels="false"
                :multiple="true"
                v-model="DataValue"
                :options="Data"
                :taggable="false"
                name="choices-multiple-remove-button2"
                id="choices-multiple-remove-button2"
                placeholder="Select Tag"
              >
              </VueMultiselect>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary">Create Contact</button>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: Create Contact -->
</template>

<style scoped>
/* Add your styles here */
</style>
