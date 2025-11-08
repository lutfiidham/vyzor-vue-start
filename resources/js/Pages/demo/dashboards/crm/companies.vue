<script setup>
import { ref } from 'vue'
import * as companyData from '@/shared/data/dashboards/crm/companydata'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'
// Meta info
const dataToPass = {
  title: 'Dashboards',
  subtitle: 'CRM',
  currentpage: 'Companies',
  activepage: 'Companies',
}

// Reactive state
const Company = ref([...companyData.companiesTable])

const Selectdata1Value = ref(null)
const Selectdata1 = [
  'Company Size',
  'Corporate',
  'Small Business',
  'Micro Business',
  'Startup',
  'Large Enterprise',
  'Medium Size',
]

const Selectdata2Value = ref(null)
const Selectdata2 = [
  'Select Industry',
  'Information Technology',
  'Telecommunications',
  'Logistics',
  'Professional Services',
  'Education',
  'Manufacturing',
  'Healthcare',
]

// Methods
const removeCompany = (id) => {
  Company.value = Company.value.filter((itm) => itm.id !== id)
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
  <Head title="CRM-Companies | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">Companies</div>
          <div class="d-flex flex-wrap gap-2">
            <button
              class="btn btn-primary btn-wave"
              data-bs-toggle="modal"
              data-bs-target="#create-contact"
            >
              <i class="ri-add-line me-1 fw-medium align-middle"></i>Add Company
            </button>
            <button class="btn btn-success btn-wave">Export As CSV</button>
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="btn btn-light btn-wave"
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
          <TableComponent
            tableClass="table text-nowrap"
            :showCheckbox="true"
            :headers="[
              { text: 'Company Name' },
              { text: 'Email' },
              { text: '	Phone' },
              { text: '	Company Size' },
              { text: '	Industry' },
              { text: 'Key Contact' },
              { text: '	Total Deals' },
              { text: 'Actions' },
            ]"
            :rows="Company"
            v-slot:cell="{ row }"
          >
            <td>
              <div class="d-flex align-items-center gap-2">
                <div class="lh-1">
                  <span class="avatar avatar-md bg-light avatar-rounded">
                    <BaseImg :src="row.companyLogo" alt="" />
                  </span>
                </div>
                <div>
                  <a
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                    >{{ row.companyName }}</a
                  >
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
                  ><i class="ri-phone-line me-2 align-middle fs-14 text-muted d-inline-block"></i
                  >{{ row.phone }}</span
                >
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center flex-wrap gap-1">
                <span :class="`badge bg-${row.badgeColor}`">{{ row.employeeBadge }}</span>
              </div>
            </td>
            <td>
              {{ row.industry }}
            </td>
            <td>
              <div class="d-flex align-items-center gap-2">
                <div class="lh-1">
                  <span class="avatar avatar-rounded avatar-sm">
                    <BaseImg :src="row.personImage" alt="" />
                  </span>
                </div>
                <div>
                  <span class="d-block fw-medium">{{ row.personName }}</span>
                </div>
              </div>
            </td>
            <td>
              {{ row.score }}
            </td>
            <td>
              <div class="btn-list">
                <a
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                  class="btn btn-sm btn-warning-light btn-icon"
                  ><i class="ri-eye-line"></i
                ></a>
                <button class="btn btn-sm btn-info-light btn-icon">
                  <i class="ri-pencil-line"></i>
                </button>
                <button
                  class="btn btn-sm btn-danger-light btn-icon contact-delete"
                  @click="removeCompany(row.id)"
                >
                  <i class="ri-delete-bin-line"></i>
                </button>
              </div>
            </td>
          </TableComponent>
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

  <!-- Start:: Company Details Offcanvas -->
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExample"
  >
    <div class="offcanvas-body p-0">
      <div
        class="d-sm-flex align-items-top p-4 border-bottom border-block-end-dashed main-profile-cover"
      >
        <div>
          <span class="avatar avatar-xxl avatar-rounded me-3 bg-light p-2">
            <BaseImg src="/images/company-logos/1.png" alt="" />
          </span>
        </div>
        <div class="flex-fill main-profile-info">
          <div class="d-flex align-items-center justify-content-between">
            <h6 class="fw-medium mb-1">Spruko Technologies</h6>
            <button
              type="button"
              class="btn-close invert-1"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <p class="mb-1 text-muted op-7">Telecommunications</p>
          <p class="fs-12 mb-4 op-5">
            <span class="me-3"><i class="ri-building-line me-1 align-middle"></i>Georgia</span>
            <span class="d-inline-flex align-items-center"
              ><i class="ri-map-pin-line me-1 align-middle"></i>Washington D.C</span
            >
          </p>
          <div class="d-flex mb-0">
            <div class="me-4">
              <p class="fw-medium fs-20 text-shadow mb-0">113</p>
              <p class="mb-0 fs-11 op-5">Deals</p>
            </div>
            <div class="me-4">
              <p class="fw-medium fs-20 text-shadow mb-0">$12.2k</p>
              <p class="mb-0 fs-11 op-5">Contributions</p>
            </div>
            <div class="me-4">
              <p class="fw-medium fs-20 text-shadow mb-0">$10.67k</p>
              <p class="mb-0 fs-11 op-5">Comitted</p>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 border-bottom border-block-end-dashed">
        <div class="mb-0">
          <p class="fs-15 mb-2 fw-medium">Professional Bio :</p>
          <p class="text-muted op-8 mb-0">
            <b class="text-default">Spruko</b> Technologies is a leading technology company
            specializing in innovative software solutions for businesses worldwide. With a strong
            focus on cutting-edge technologies and a team of skilled professionals.
          </p>
        </div>
      </div>
      <div class="p-4 border-bottom border-block-end-dashed">
        <p class="fs-14 mb-2 me-4 fw-medium">Contact Information :</p>
        <div class="">
          <div class="d-flex align-items-center mb-2">
            <div class="me-2">
              <span class="avatar avatar-sm avatar-rounded bg-light text-muted">
                <i class="ri-mail-line align-middle fs-14"></i>
              </span>
            </div>
            <div>spruko2981@gmail.com</div>
          </div>
          <div class="d-flex align-items-center mb-2">
            <div class="me-2">
              <span class="avatar avatar-sm avatar-rounded bg-light text-muted">
                <i class="ri-phone-line align-middle fs-14"></i>
              </span>
            </div>
            <div>1678-28993-223</div>
          </div>
          <div class="d-flex align-items-center mb-0">
            <div class="me-2">
              <span class="avatar avatar-sm avatar-rounded bg-light text-muted">
                <i class="ri-map-pin-line align-middle fs-14"></i>
              </span>
            </div>
            <div>MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA,20071</div>
          </div>
        </div>
      </div>
      <div
        class="p-4 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4"
      >
        <p class="fs-14 mb-0 fw-medium">Social Networks :</p>
        <div class="btn-list mb-0">
          <button
            class="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light mb-0"
          >
            <i class="ri-facebook-line fw-medium"></i>
          </button>
          <button
            class="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light mb-0"
          >
            <i class="ri-twitter-x-line fw-medium"></i>
          </button>
          <button
            class="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light mb-0"
          >
            <i class="ri-instagram-line fw-medium"></i>
          </button>
          <button
            class="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light mb-0"
          >
            <i class="ri-github-line fw-medium"></i>
          </button>
          <button
            class="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light mb-0"
          >
            <i class="ri-youtube-line fw-medium"></i>
          </button>
        </div>
      </div>
      <div class="p-4 border-bottom border-block-end-dashed d-flex align-items-center gap-3">
        <div class="fs-14 fw-medium">Company Size:</div>
        <div><span class="badge bg-primary-transparent m-1">Corporate</span> - 1001+ Employees</div>
      </div>
      <div class="p-4 d-flex align-items-center gap-3">
        <div class="fs-14 fw-medium">Key Contact :</div>
        <div class="d-flex align-items-center gap-2">
          <div class="lh-1">
            <span class="avatar avatar-rounded avatar-sm">
              <BaseImg src="/images/faces/2.jpg" alt="img" />
            </span>
          </div>
          <div class="fw-medium">Lisa Convay</div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: Company Details Offcanvas -->

  <!-- Start:: Add Company -->
  <div class="modal fade" id="create-contact" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Add Company</h6>
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
                <span class="avatar avatar-xxl avatar-rounded p-2 bg-light">
                  <img v-if="avatar" loading="lazy" class="avatar" :src="avatar" alt="Avatar" />
                  <BaseImg v-else src="/images/company-logos/11.png" alt="" id="profile-img" />
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
            <div class="col-xl-6">
              <label for="company-name" class="form-label">Company Name</label>
              <input
                type="text"
                class="form-control"
                id="company-name"
                placeholder="Contact Name"
              />
            </div>
            <div class="col-xl-6">
              <label for="company-lead-score" class="form-label">Total Deals</label>
              <input
                type="number"
                class="form-control"
                id="company-lead-score"
                placeholder="Total Deals"
              />
            </div>
            <div class="col-xl-12">
              <label for="company-mail" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="company-mail"
                placeholder="Enter Email"
              />
            </div>
            <div class="col-xl-12">
              <label for="company-phone" class="form-label">Phone No</label>
              <input
                type="tel"
                class="form-control"
                id="company-phone"
                placeholder="Enter Phone Number"
              />
            </div>
            <div class="col-xl-12">
              <label for="key-contact" class="form-label">Key Contact</label>
              <input type="text" class="form-control" id="key-contact" placeholder="Contact Name" />
            </div>
            <div class="col-xl-12">
              <label class="form-label">Industry</label>
              <VueMultiselect
                :searchable="true"
                :show-labels="false"
                :multiple="false"
                v-model="Selectdata2Value"
                :options="Selectdata2"
                :taggable="false"
                id="choices-single-default1"
                name="choices-multiple-remove-button2"
                placeholder="Select Industry"
              >
              </VueMultiselect>
            </div>
            <div class="col-xl-12">
              <label class="form-label">Company Size</label>
              <VueMultiselect
                :searchable="true"
                :show-labels="false"
                :multiple="false"
                v-model="Selectdata1Value"
                :options="Selectdata1"
                :taggable="false"
                id="choices-single-default2"
                name="choices-multiple-remove-button3"
                placeholder="Select Company Size"
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
  <!-- End:: Add Company -->
</template>

<style scoped>
/* Add your styles here */
</style>
