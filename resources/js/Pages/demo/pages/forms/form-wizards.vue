<script setup>
import { Link } from '@inertiajs/vue3'

import { defineAsyncComponent, ref } from 'vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import 'form-wizard-vue3/dist/form-wizard-vue3.css'

const Wizard = defineAsyncComponent(() => import('form-wizard-vue3'))
const picked = ref(null)
const baseUrl = __BASE_PATH__
const dataToPass = {
  current: 'Form Wizards',
  list: ['Forms', 'Form Wizards'],
}

let currentTabIndex = 0
const tabs = [
  {
    title: 'Personal Information',
    currentTabIndex: 0,
  },
  {
    title: 'Select Service',
    currentTabIndex: 1,
  },
  {
    title: 'Appointment Details',
    currentTabIndex: 2,
  },
  {
    title: 'Payment',
    currentTabIndex: 3,
  },
  {
    title: 'Confirmation',
    currentTabIndex: 4,
  },
]

const genderValue = ref('Male')
const genderOptions = ref(['Male', 'Female'])
const countryValue = ref('United States')
const countryOptions = ref(['United States', ' China', ' India', 'Brazil', 'Russia'])

const cityValue = ref('India')
const cityOptions = ref(['India', 'USA', 'Australia'])

function onChangeCurrentTab(index, oldIndex) {
  currentTabIndex = index
}

function onTabBeforeChange() {
  if (currentTabIndex === 0) {
    //
  }
}

function wizardCompleted() {}

function onSubmit() {}

//  first Tab

const currentTab = ref(1)

function goToFirst() {
  currentTab.value = 1
}

function goToPrevious() {
  if (currentTab.value > 1) {
    currentTab.value--
  }
}

function goToNext() {
  if (currentTab.value < 4) {
    currentTab.value++
  }
}

function finish() {
  currentTab.value = 4
}

//  second Tab

const currentTab1 = ref(1)

function goToFirst1() {
  currentTab1.value = 1
}

function goToPrevious1() {
  if (currentTab1.value > 1) {
    currentTab1.value--
  }
}

function goToNext1() {
  if (currentTab1.value < 4) {
    currentTab1.value++
  }
}

function finish1() {
  currentTab1.value = 4
}
</script>

<template>
  <CommonFilesPageheader :prop-data="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            FORM WIZARD
          </div>
        </div>
        <div class="card-body p-0">
          <Wizard
            :custom-tabs="[
              { title: 'Personal Information' },
              { title: 'Select Service' },
              { title: 'Appointment Details' },
              { title: 'Payment' },
              { title: 'Confirmation' },
            ]"
            :before-change="onTabBeforeChange"
            :current-tab="currentTabIndex"
            @change="onChangeCurrentTab"
            @complete:wizard="wizardCompleted"
            @submit.prevent="onSubmit"
          >
            <div
              class="tab-content" :class="{
                active: currentTabIndex,
              }"
            >
              <div v-if="currentTabIndex === 0" class="col-xs-12 text-start">
                <div class="row justify-content-center">
                  <div class="col-xl-12">
                    <div class="register-page">
                      <h6 class="mb-3">
                        Registration :
                      </h6>
                      <div class="row gy-3">
                        <div class="col-xl-6">
                          <label for="Customer" class="form-label">First Name</label>
                          <input
                            id="Customer"
                            type="text"
                            class="form-control"
                            placeholder="Enter First Name"
                          >
                        </div>
                        <div class="col-xl-6">
                          <label for="last-name" class="form-label">Last Name</label>
                          <input
                            id="last-name"
                            type="text"
                            class="form-control"
                            placeholder="Enter Last Name"
                          >
                        </div>
                        <div class="col-xl-6">
                          <label for="Email" class="form-label">Email Address</label>
                          <input
                            id="Email"
                            type="email"
                            class="form-control"
                            placeholder="Enter Email Adress"
                          >
                        </div>
                        <div class="col-xl-6">
                          <label class="form-label">Phone Number</label>
                          <div class="input-group">
                            <span id="inputGroup-sizing-default" class="input-group-text">+99</span>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Phone Number"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-default"
                            >
                          </div>
                        </div>
                        <div class="col-xl-6">
                          <label class="form-label">Date of Birth</label>
                          <div
                            class="input-group custom-date-picker flex-nowrap input-group-custom"
                          >
                            <div class="input-group-text text-muted">
                              <i class="ri-calendar-line" />
                            </div>
                            <Datepicker
                              v-model="picked"
                              class="form-control"
                              auto-apply
                              placeholder="Choose date"
                              :enable-time-picker="false"
                            />
                          </div>
                        </div>
                        <div class="col-xl-6">
                          <label class="form-label">Select Gender :</label>
                          <VueMultiselect
                            v-model="genderValue"
                            :searchable="true"
                            :show-labels="false"
                            placeholder="Company Size"
                            :options="genderOptions"
                          />
                        </div>
                        <div class="col-xl-6">
                          <label class="form-label">Country</label>
                          <VueMultiselect
                            v-model="countryValue"
                            :searchable="true"
                            :show-labels="false"
                            placeholder="Company Size"
                            :options="countryOptions"
                          />
                        </div>
                        <div class="col-xl-6">
                          <label class="form-label">Select City :</label>
                          <VueMultiselect
                            v-model="cityValue"
                            :searchable="true"
                            :show-labels="false"
                            placeholder="Company Size"
                            :options="cityOptions"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-7">
                    <div class="login-page d-none">
                      <h6 class="mb-3">
                        Sign In :
                      </h6>
                      <div class="row justify-content-center gy-4">
                        <div class="col-xl-12">
                          <label for="email-adress" class="form-label">Email Address</label>
                          <input
                            id="email-adress"
                            type="text"
                            class="form-control"
                            placeholder="Enter Email Adress"
                          >
                        </div>
                        <div class="col-xl-12">
                          <label for="password" class="form-label">Enter Password</label>
                          <input
                            id="password"
                            type="text"
                            class="form-control"
                            placeholder="Enter Password"
                          >
                        </div>
                        <div class="col-xl-12">
                          <div class="d-grid">
                            <a href="javascript:void(0);" class="btn btn-primary px-4">Login</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="currentTabIndex === 1" class="col-xs-12 text-start">
                <div class="row gy-4">
                  <div class="col-xl-3">
                    <div class="col">
                      <div
                        class="form-check d-flex align-items-center gap-3 p-2 border rounded-pill"
                      >
                        <div>
                          <span class="avatar avatar-lg avatar-rounded bg-primary-transparent">
                            <i class="bi bi-hospital fs-5" />
                          </span>
                        </div>
                        <div class="flex-fill">
                          <label
                            class="form-check-label d-block fw-medium fs-15"
                            for="flexCheckChecked"
                          >Cardio Check</label>
                          <span class="fs-12 text-muted">$249</span>
                        </div>
                        <div>
                          <input
                            id="flexCheckChecked"
                            class="form-check-input form-checked-primary rounded-circle"
                            type="checkbox"
                            value=""
                            checked
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="col">
                      <div
                        class="form-check d-flex align-items-center gap-3 p-2 border rounded-pill"
                      >
                        <div>
                          <span class="avatar avatar-lg avatar-rounded bg-secondary-transparent">
                            <i class="bi bi-hospital fs-5" />
                          </span>
                        </div>
                        <div class="flex-fill">
                          <label
                            class="form-check-label d-block fw-medium fs-15"
                            for="flexCheckChecked1"
                          >Ortho Consult</label>
                          <span class="fs-12 text-muted">$120</span>
                        </div>
                        <div>
                          <input
                            id="flexCheckChecked1"
                            class="form-check-input form-checked-secondary rounded-circle"
                            type="checkbox"
                            value=""
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="col">
                      <div
                        class="form-check d-flex align-items-center gap-3 p-2 border rounded-pill"
                      >
                        <div>
                          <span class="avatar avatar-lg avatar-rounded bg-success-transparent">
                            <i class="bi bi-hospital fs-5" />
                          </span>
                        </div>
                        <div class="flex-fill">
                          <label
                            class="form-check-label d-block fw-medium fs-15"
                            for="flexCheckChecked2"
                          >Gyn Exam</label>
                          <span class="fs-12 text-muted">$100</span>
                        </div>
                        <div>
                          <input
                            id="flexCheckChecked2"
                            class="form-check-input form-checked-success rounded-circle"
                            type="checkbox"
                            value=""
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="col">
                      <div
                        class="form-check d-flex align-items-center gap-3 p-2 border rounded-pill"
                      >
                        <div>
                          <span class="avatar avatar-lg avatar-rounded bg-orange-transparent">
                            <i class="bi bi-hospital fs-5" />
                          </span>
                        </div>
                        <div class="flex-fill">
                          <label
                            class="form-check-label d-block fw-medium fs-15"
                            for="flexCheckChecked3"
                          >Pediatric Vaccines</label>
                          <span class="fs-12 text-muted">$50</span>
                        </div>
                        <div>
                          <input
                            id="flexCheckChecked3"
                            class="form-check-input form-checked-orange rounded-circle"
                            type="checkbox"
                            value=""
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="col">
                      <div
                        class="form-check d-flex align-items-center gap-3 p-2 border rounded-pill"
                      >
                        <div>
                          <span class="avatar avatar-lg avatar-rounded bg-info-transparent">
                            <i class="bi bi-hospital fs-5" />
                          </span>
                        </div>
                        <div class="flex-fill">
                          <label
                            class="form-check-label d-block fw-medium fs-15"
                            for="flexCheckChecked4"
                          >Dental Checkup</label>
                          <span class="fs-12 text-muted">$80</span>
                        </div>
                        <div>
                          <input
                            id="flexCheckChecked4"
                            class="form-check-input form-checked-info rounded-circle"
                            type="checkbox"
                            value=""
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="col">
                      <div
                        class="form-check d-flex align-items-center gap-3 p-2 border rounded-pill"
                      >
                        <div>
                          <span class="avatar avatar-lg avatar-rounded bg-warning-transparent">
                            <i class="bi bi-hospital fs-5" />
                          </span>
                        </div>
                        <div class="flex-fill">
                          <label
                            class="form-check-label d-block fw-medium fs-15"
                            for="flexCheckChecked5"
                          >X-ray Imaging</label>
                          <span class="fs-12 text-muted">$80</span>
                        </div>
                        <div>
                          <input
                            id="flexCheckChecked5"
                            class="form-check-input form-checked-warning rounded-circle"
                            type="checkbox"
                            value=""
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="col">
                      <div
                        class="form-check d-flex align-items-center gap-3 p-2 border rounded-pill"
                      >
                        <div>
                          <span class="avatar avatar-lg avatar-rounded bg-danger-transparent">
                            <i class="bi bi-hospital fs-5" />
                          </span>
                        </div>
                        <div class="flex-fill">
                          <label
                            class="form-check-label d-block fw-medium fs-15"
                            for="flexCheckChecked6"
                          >Blood Tests</label>
                          <span class="fs-12 text-muted">Varies</span>
                        </div>
                        <div>
                          <input
                            id="flexCheckChecked6"
                            class="form-check-input form-checked-danger rounded-circle"
                            type="checkbox"
                            value=""
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3">
                    <div class="col">
                      <div
                        class="form-check d-flex align-items-center gap-3 p-2 border rounded-pill"
                      >
                        <div>
                          <span class="avatar avatar-lg avatar-rounded bg-dark-transparent">
                            <i class="bi bi-hospital fs-5" />
                          </span>
                        </div>
                        <div class="flex-fill">
                          <label
                            class="form-check-label d-block fw-medium fs-15"
                            for="flexCheckChecked7"
                          >Eye Exam</label>
                          <span class="fs-12 text-muted">$90</span>
                        </div>
                        <div>
                          <input
                            id="flexCheckChecked7"
                            class="form-check-input form-checked-dark rounded-circle"
                            type="checkbox"
                            value=""
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="currentTabIndex === 2" class="col-xs-12 text-start">
                <div class="row justify-content-center summary-view">
                  <div class="col-xl-7">
                    <div class="border border-bottom-0 rounded-1 mb-3">
                      <div class="card-body p-0">
                        <div class="table-responsive">
                          <table class="table text-nowrap">
                            <thead>
                              <tr class="bg-light">
                                <th scope="col">
                                  Appointment Details
                                </th>
                                <th scope="col" />
                                <th scope="col" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="w-25">
                                  <span class="d-block fw-semibold">Category</span>
                                </td>
                                <td class="w-10">
                                  :
                                </td>
                                <td class="text-start text-muted">
                                  Neuro Clinic
                                </td>
                              </tr>
                              <tr>
                                <td class="w-25">
                                  <span class="d-block fw-semibold">Service</span>
                                </td>
                                <td class="w-10">
                                  :
                                </td>
                                <td class="text-start text-muted">
                                  Heart Care
                                </td>
                              </tr>
                              <tr>
                                <td class="w-25">
                                  <span class="d-block fw-semibold">Service providers</span>
                                </td>
                                <td class="w-10">
                                  :
                                </td>
                                <td class="text-start text-muted">
                                  Jiohn Alzian
                                </td>
                              </tr>
                              <tr>
                                <td class="w-25">
                                  <span class="d-block fw-semibold">Branch</span>
                                </td>
                                <td class="w-10">
                                  :
                                </td>
                                <td class="text-start text-muted">
                                  India
                                </td>
                              </tr>
                              <tr>
                                <td class="w-25">
                                  <span class="d-block fw-semibold">Appointment Date</span>
                                </td>
                                <td class="w-10">
                                  :
                                </td>
                                <td class="text-start text-muted">
                                  12-Sep-2024
                                </td>
                              </tr>
                              <tr>
                                <td class="w-25">
                                  <span class="d-block fw-semibold">Appointment Time</span>
                                </td>
                                <td class="w-10">
                                  :
                                </td>
                                <td class="text-start text-muted">
                                  10:00 AM
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-7">
                    <div class="border border-bottom-0 rounded-1 mb-3">
                      <div class="card-body p-0">
                        <div class="table-responsive">
                          <table class="table text-nowrap">
                            <thead>
                              <tr class="bg-light">
                                <th scope="col">
                                  Persional Details
                                </th>
                                <th scope="col" />
                                <th scope="col" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="w-25">
                                  <span class="d-block fw-semibold">First Name</span>
                                </td>
                                <td class="w-10">
                                  :
                                </td>
                                <td class="text-start text-muted">
                                  Jogh barle
                                </td>
                              </tr>
                              <tr>
                                <td class="w-25">
                                  <span class="d-block fw-semibold">Last Name </span>
                                </td>
                                <td class="w-10">
                                  :
                                </td>
                                <td class="text-start text-muted">
                                  Jogh barle
                                </td>
                              </tr>
                              <tr>
                                <td class="w-25">
                                  <span class="d-block fw-semibold">Email Address</span>
                                </td>
                                <td class="w-10">
                                  :
                                </td>
                                <td class="text-start text-muted">
                                  Jogh12@gamil.com
                                </td>
                              </tr>
                              <tr>
                                <td class="w-25">
                                  <span class="d-block fw-semibold">Phone Number</span>
                                </td>
                                <td class="w-10">
                                  :
                                </td>
                                <td class="text-start text-muted">
                                  98765433221
                                </td>
                              </tr>
                              <tr>
                                <td class="w-25">
                                  <span class="d-block fw-semibold">Country </span>
                                </td>
                                <td class="w-10">
                                  :
                                </td>
                                <td class="text-start text-muted">
                                  India
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-7">
                    <div class="border border-bottom-0 rounded-1 mb-3">
                      <div class="card-body p-0">
                        <div class="table-responsive">
                          <table class="table text-nowrap">
                            <thead>
                              <tr class="bg-light">
                                <th scope="col">
                                  Payment Details
                                </th>
                                <th scope="col" />
                                <th scope="col" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="w-25">
                                  <span class="d-block fw-semibold">Mode of Payment</span>
                                </td>
                                <td class="w-10">
                                  :
                                </td>
                                <td class="text-start text-muted">
                                  Paypal
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-7">
                    <div class="p-3 rounded-2 bg-light">
                      <label class="mb-1 fw-semibold">Source Information:</label>
                      <div class="d-flex align-items-center flex-wrap gap-2">
                        <div class="form-check-sm">
                          <input
                            id="Radio-sm"
                            class="form-check-input me-1"
                            type="radio"
                            name="Radio"
                          >
                          <label class="form-check-label" for="Radio-sm"> Google </label>
                        </div>
                        <div class="form-check-sm">
                          <input
                            id="Radio-md"
                            class="form-check-input me-1"
                            type="radio"
                            name="Radio"
                          >
                          <label class="form-check-label" for="Radio-md"> Advertisement </label>
                        </div>
                        <div class="form-check-sm">
                          <input
                            id="Radio-s"
                            class="form-check-input me-1"
                            type="radio"
                            name="Radio"
                          >
                          <label class="form-check-label" for="Radio-s"> Other</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="currentTabIndex === 3" class="col-xs-12 text-start">
                <div class="row">
                  <div class="col-xl-12">
                    <div>
                      <div
                        class="fs-15 fw-medium d-sm-flex d-block align-items-center justify-content-between mb-3"
                      >
                        <div>Payment Details :</div>
                      </div>
                      <div class="row">
                        <div class="col-xl-12">
                          <div class="mb-3">
                            <label class="form-label">Delivery Address</label>
                            <div class="input-group">
                              <input
                                type="text"
                                class="form-control border-end-0"
                                placeholder="Address"
                                aria-label="address"
                                aria-describedby="payment-address"
                                value="1234 Elm Street,Anytown, USA,12345"
                              >
                              <button
                                id="payment-address"
                                type="button"
                                class="btn btn-info-light input-group-text"
                              >
                                Change
                              </button>
                            </div>
                          </div>
                          <div class="card custom-card border shadow-none mb-3">
                            <div class="card-header">
                              <div class="card-title">
                                Payment Methods
                              </div>
                            </div>
                            <div class="card-body">
                              <div
                                class="btn-group mb-3 d-sm-flex d-block"
                                role="group"
                                aria-label="Basic radio toggle button group"
                              >
                                <input
                                  id="btnradio1"
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio"
                                >
                                <label
                                  class="btn btn-outline-light text-default mt-sm-0 mt-1"
                                  for="btnradio1"
                                >C.O.D(Cash on delivery)</label>
                                <input
                                  id="btnradio2"
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio"
                                >
                                <label
                                  class="btn btn-outline-light text-default mt-sm-0 mt-1"
                                  for="btnradio2"
                                >UPI</label>
                                <input
                                  id="btnradio3"
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio"
                                  checked
                                >
                                <label
                                  class="btn btn-outline-light text-default mt-sm-0 mt-1"
                                  for="btnradio3"
                                >Credit/Debit Card</label>
                              </div>
                              <div class="row gy-3">
                                <div class="col-xl-12">
                                  <label for="payment-card-number" class="form-label">Card Number</label>
                                  <input
                                    id="payment-card-number"
                                    type="text"
                                    class="form-control"
                                    placeholder="Card Number"
                                    value="1245 - 5447 - 8934 - XXXX"
                                  >
                                </div>
                                <div class="col-xl-12">
                                  <label for="payment-card-name" class="form-label">Name On Card</label>
                                  <input
                                    id="payment-card-name"
                                    type="text"
                                    class="form-control"
                                    placeholder="Name On Card"
                                    value="Jack Miller"
                                  >
                                </div>
                                <div class="col-xl-4">
                                  <label for="payment-cardexpiry-date" class="form-label">Expiration Date</label>
                                  <input
                                    id="payment-cardexpiry-date"
                                    type="text"
                                    class="form-control"
                                    placeholder="MM/YY"
                                    value="08/2024"
                                  >
                                </div>
                                <div class="col-xl-4">
                                  <label for="payment-cvv" class="form-label">CVV</label>
                                  <input
                                    id="payment-cvv"
                                    type="text"
                                    class="form-control"
                                    placeholder="XXX"
                                    value="341"
                                  >
                                </div>
                                <div class="col-xl-4">
                                  <label for="payment-security" class="form-label">O.T.P</label>
                                  <input
                                    id="payment-security"
                                    type="text"
                                    class="form-control"
                                    placeholder="XXXXXX"
                                    value="183467"
                                  >
                                  <label
                                    for="payment-security"
                                    class="form-label mt-1 text-success fs-11"
                                  ><sup><i class="ri-star-s-fill" /></sup>Do not share O.T.P
                                    with anyone</label>
                                </div>
                                <div class="col-xl-12">
                                  <div class="form-check">
                                    <input
                                      id="payment-card-save"
                                      class="form-check-input form-checked-success"
                                      type="checkbox"
                                      value=""
                                      checked
                                    >
                                    <label class="form-check-label" for="payment-card-save">
                                      Save this card
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="card-footer">
                              <div class="row gy-3">
                                <p class="fs-15 fw-medium mb-1">
                                  Saved Cards :
                                </p>
                                <div class="col-xl-6">
                                  <div class="form-check payment-card-container mb-0 lh-1">
                                    <input
                                      id="payment-card1"
                                      name="payment-cards"
                                      type="radio"
                                      class="form-check-input"
                                      checked
                                    >
                                    <div class="form-check-label">
                                      <div
                                        class="d-sm-flex d-block align-items-center justify-content-between"
                                      >
                                        <div class="me-2 lh-1">
                                          <span class="avatar avatar-md">
                                            <BaseImg src="/images/ecommerce/png/18.png" alt="" />
                                          </span>
                                        </div>
                                        <div class="saved-card-details pe-5">
                                          <p class="mb-0 fw-medium">
                                            XXXX - XXXX - XXXX - 7646
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-6">
                                  <div class="form-check payment-card-container mb-0 lh-1">
                                    <input
                                      id="payment-card2"
                                      name="payment-cards"
                                      type="radio"
                                      class="form-check-input"
                                    >
                                    <div class="form-check-label">
                                      <div
                                        class="d-sm-flex d-block align-items-center justify-content-between"
                                      >
                                        <div class="me-2 lh-1">
                                          <span class="avatar avatar-md">
                                            <BaseImg src="/images/ecommerce/png/20.png" alt="" />
                                          </span>
                                        </div>
                                        <div class="saved-card-details pe-5">
                                          <p class="mb-0 fw-medium">
                                            XXXX - XXXX - XXXX - 9556
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="currentTabIndex === 4" class="col-xs-12 text-start">
                <div class="row">
                  <div class="col-xl-12">
                    <div class="checkout-payment-success text-center">
                      <div class="mb-4">
                        <h5 class="text-success fw-medium">
                          Appointment Booked...
                        </h5>
                      </div>
                      <div class="mb-4">
                        <BaseImg src="/images/ecommerce/png/17.png" alt="" class="img-fluid" />
                      </div>
                      <div class="mb-4">
                        <p class="mb-1 fs-14">
                          You will get the appointment details with appointment id <b>SPK#1FR</b> to
                          <a class="link-success" href="javascript:void(0);"><u>Jogh12@gamil.com</u></a>
                        </p>
                        <p class="text-muted">
                          Thank you for booking an appointment .
                        </p>
                      </div>
                      <a href="javascript:void(0);" class="btn btn-success">Book Another Appointment</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Wizard>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            FORM WIZARD WITH VALIDATION
          </div>
        </div>
        <div class="card-body custom-wizard">
          <div id="basicwizard">
            <ul class="nav nav-tabs nav-justified flex-md-row flex-column mb-4 tab-style-6 p-0">
              <li class="nav-item" data-target-form="#contactDetailForm">
                <a
                  class="nav-link icon-btn d-flex align-items-center justify-content-md-center gap-1"
                  :class="{ active: currentTab === 1 }"
                  data-bs-toggle="tab"
                  data-toggle="tab"
                  href="#contactDetail"
                  @click="currentTab = 1"
                ><span>Contact Detail</span></a>
              </li>
              <li class="nav-item" data-target-form="#jobDetailForm">
                <a
                  class="nav-link icon-btn d-flex align-items-center justify-content-md-center gap-1"
                  :class="{ active: currentTab === 2 }"
                  data-bs-toggle="tab"
                  data-toggle="tab"
                  href="#jobDetail"
                  @click="currentTab = 2"
                ><span>Job Detail</span></a>
              </li>
              <li class="nav-item" data-target-form="#educationDetailForm">
                <a
                  class="nav-link icon-btn d-flex align-items-center justify-content-md-center gap-1"
                  :class="{ active: currentTab === 3 }"
                  data-bs-toggle="tab"
                  data-toggle="tab"
                  href="#educationDetail"
                  @click="currentTab = 3"
                ><span>Education Detail</span></a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link icon-btn d-flex align-items-center justify-content-md-center gap-1"
                  :class="{ active: currentTab === 4 }"
                  data-bs-toggle="tab"
                  data-toggle="tab"
                  href="#finish"
                  @click="currentTab = 4"
                ><span>Finish</span></a>
              </li>
            </ul>
            <div class="tab-content">
              <div v-if="currentTab === 1" id="contactDetail" class="tab-pane show active">
                <form id="contactForm" class="needs-validation was-validated" novalidate>
                  <div class="mb-3">
                    <label for="fullName2" class="form-label">Full Name:</label>
                    <input
                      id="fullName2"
                      type="text"
                      name="fullName2"
                      class="form-control"
                      required
                    >
                  </div>

                  <div class="mb-3">
                    <label for="email2" class="form-label">Email:</label>
                    <input id="email2" type="email" name="email2" class="form-control" required>
                  </div>

                  <div class="mb-3">
                    <label for="phoneNumber2" class="form-label">Phone Number:</label>
                    <input
                      id="phoneNumber2"
                      type="tel"
                      name="phoneNumber2"
                      class="form-control"
                      pattern="[0-9]{10}"
                      placeholder="Enter 10-digit phone number"
                    >
                  </div>
                </form>
              </div>
              <div v-if="currentTab === 2" id="jobDetail" class="tab-pane show active">
                <form id="jobForm" class="needs-validation was-validated" novalidate>
                  <div class="mb-3">
                    <label for="jobTitle" class="form-label">Job Title:</label>
                    <input
                      id="jobTitle"
                      type="text"
                      name="jobTitle"
                      class="form-control"
                      required
                    >
                  </div>

                  <div class="mb-3">
                    <label for="company" class="form-label">Company:</label>
                    <input id="company" type="text" name="company" class="form-control" required>
                  </div>

                  <div class="mb-3">
                    <label for="location" class="form-label">Location:</label>
                    <input
                      id="location"
                      type="text"
                      name="location"
                      class="form-control"
                      required
                    >
                  </div>

                  <div class="mb-3">
                    <label for="jobDescription" class="form-label">Job Description:</label>
                    <textarea
                      id="jobDescription"
                      name="jobDescription"
                      class="form-control"
                      rows="4"
                      required
                    />
                  </div>
                </form>
              </div>
              <div v-if="currentTab === 3" id="educationDetail" class="tab-pane show active">
                <form id="educationForm" class="needs-validation was-validated" novalidate>
                  <div class="mb-3">
                    <label for="degree" class="form-label">Degree:</label>
                    <input id="degree" type="text" name="degree" class="form-control" required>
                  </div>

                  <div class="mb-3">
                    <label for="institution" class="form-label">Institution:</label>
                    <input
                      id="institution"
                      type="text"
                      name="institution"
                      class="form-control"
                      required
                    >
                  </div>

                  <div class="mb-3">
                    <label for="graduationYear" class="form-label">Graduation Year:</label>
                    <input
                      id="graduationYear"
                      type="number"
                      name="graduationYear"
                      class="form-control"
                      min="1900"
                      max="2100"
                      required
                    >
                  </div>

                  <div class="mb-3">
                    <label for="fieldOfStudy" class="form-label">Field of Study:</label>
                    <input
                      id="fieldOfStudy"
                      type="text"
                      name="fieldOfStudy"
                      class="form-control"
                      required
                    >
                  </div>
                </form>
              </div>
              <div v-if="currentTab === 4" id="finish" class="tab-pane show active">
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-10">
                    <div class="text-center p-4">
                      <span
                        class="avatar avatar-xl avatar-rounded bg-success-transparent svg-success"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                          <rect width="256" height="256" fill="none" />
                          <circle cx="128" cy="128" r="96" opacity="0.2" />
                          <polyline
                            points="88 136 112 160 168 104"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                          />
                          <circle
                            cx="128"
                            cy="128"
                            r="96"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                          />
                        </svg>
                      </span>
                      <h3 class="mt-2">
                        Successful <span class="fs-14 align-middle">&#127881;</span>
                      </h3>
                      <p>
                        Nulla facilisi. Praesent euismod, ex in viverra ullamcorper, augue justo
                        convallis urna, a sollicitudin quam libero et magna. Sed ac metus.
                      </p>
                      <div class="mb-0">
                        <div class="form-check d-inline-block">
                          <input
                            id="customCheck1"
                            class="form-check-input"
                            required
                            type="checkbox"
                          >
                          <label class="form-check-label" for="customCheck1">I agree with the
                            <Link
                              class="fw-medium text-decoration-underline"
                              :href="`${baseUrl}/demo/pages/terms-conditions/`"
                            >Terms and Conditions.
                            </Link>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row -->
              </div>
              <div class="d-flex wizard justify-content-between mt-3 flex-wrap gap-2">
                <div class="first">
                  <a href="javascript:void(0);" class="btn btn-light" @click="goToFirst"> First </a>
                </div>
                <div class="d-flex flex-wrap gap-2">
                  <div class="previous me-2">
                    <a
                      href="javascript:void(0);"
                      class="btn icon-btn btn-primary table-icon"
                      @click="goToPrevious"
                    >
                      <i class="bx bx-left-arrow-alt me-2 d-inline-block" />Back To Previous
                    </a>
                  </div>
                  <div class="next">
                    <a
                      href="javascript:void(0);"
                      class="btn icon-btn btn-secondary flex-wrap table-icon"
                      @click="goToNext"
                    >
                      Next Step<i class="bx bx-right-arrow-alt d-inline-block ms-2" />
                    </a>
                  </div>
                </div>
                <div class="last">
                  <a href="javascript:void(0);" class="btn btn-success flex-wrap" @click="finish">
                    Finish
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            WIZARD WITH PROGRESS
          </div>
        </div>
        <div class="card-body">
          <div id="progresswizard">
            <ul
              class="nav nav-tabs nav-justified flex-sm-row flex-column mb-4 tab-style-8 scaleX p-0"
            >
              <li class="nav-item" data-target-form="#progress-contactDetailForm">
                <a
                  class="nav-link icon-btn d-flex align-items-center justify-content-sm-center gap-1"
                  :class="{ active: currentTab1 === 1 }"
                  data-bs-toggle="tab"
                  data-toggle="tab"
                  href="#progress-contactDetail"
                  @click="currentTab1 = 1"
                ><span>Contact Detail</span></a>
              </li>
              <li class="nav-item" data-target-form="#progress-jobDetailForm">
                <a
                  class="nav-link icon-btn d-flex align-items-center justify-content-sm-center gap-1"
                  :class="{ active: currentTab1 === 2 }"
                  data-bs-toggle="tab"
                  data-toggle="tab"
                  href="#progress-jobDetail"
                  @click="currentTab1 = 2"
                ><span>Job Detail</span></a>
              </li>
              <li class="nav-item" data-target-form="#progress-educationDetailForm">
                <a
                  class="nav-link icon-btn d-flex align-items-center justify-content-sm-center gap-1"
                  :class="{ active: currentTab1 === 3 }"
                  data-bs-toggle="tab"
                  data-toggle="tab"
                  href="#progress-educationDetail"
                  @click="currentTab1 = 3"
                ><span>Education Detail</span></a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link icon-btn d-flex align-items-center justify-content-sm-center gap-1"
                  :class="{ active: currentTab1 === 4 }"
                  data-bs-toggle="tab"
                  data-toggle="tab"
                  href="#progress-finish"
                  @click="currentTab1 = 4"
                ><span>Finish</span></a>
              </li>
            </ul>
            <div class="tab-content">
              <div id="bar" class="progress mb-3" style="height: 7px">
                <div
                  class="bar progress-bar progress-bar-striped progress-bar-animated bg-success"
                  :style="{ width: `${currentTab1 * 25}%` }"
                />
              </div>
              <div
                v-if="currentTab1 === 1"
                id="progress-contactDetail"
                class="tab-pane show active"
              >
                <form id="contactForm2" class="needs-validatio was-validated" novalidate>
                  <div class="mb-3">
                    <label for="fullName" class="form-label">Full Name:</label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      class="form-control"
                      required
                    >
                  </div>

                  <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input id="email" type="email" name="email" class="form-control" required>
                  </div>

                  <div class="mb-3 custom-wizards">
                    <label for="phoneNumber" class="form-label">Phone Number:</label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      name="phoneNumber"
                      class="form-control"
                      pattern="[0-9]{10}"
                      placeholder="Enter 10-digit phone number"
                    >
                  </div>
                </form>
              </div>
              <div v-if="currentTab1 === 2" id="progress-jobDetail" class="tab-pane show active">
                <form id="jobForm2" class="needs-validation was-validated" novalidate>
                  <div class="mb-3">
                    <label for="jobTitle2" class="form-label">Job Title:</label>
                    <input
                      id="jobTitle2"
                      type="text"
                      name="jobTitle2"
                      class="form-control"
                      required
                    >
                  </div>

                  <div class="mb-3">
                    <label for="company2" class="form-label">Company:</label>
                    <input
                      id="company2"
                      type="text"
                      name="company2"
                      class="form-control"
                      required
                    >
                  </div>

                  <div class="mb-3">
                    <label for="location2" class="form-label">Location:</label>
                    <input
                      id="location2"
                      type="text"
                      name="location2"
                      class="form-control"
                      required
                    >
                  </div>

                  <div class="mb-3">
                    <label for="jobDescription2" class="form-label">Job Description:</label>
                    <textarea
                      id="jobDescription2"
                      name="jobDescription2"
                      class="form-control"
                      rows="4"
                      required
                    />
                  </div>
                </form>
              </div>
              <div
                v-if="currentTab1 === 3"
                id="progress-educationDetail"
                class="tab-pane show active"
              >
                <form id="educationForm2" class="needs-validation was-validated" novalidate>
                  <div class="mb-3">
                    <label for="degree2" class="form-label">Degree:</label>
                    <input id="degree2" type="text" name="degree2" class="form-control" required>
                  </div>

                  <div class="mb-3">
                    <label for="institution2" class="form-label">Institution:</label>
                    <input
                      id="institution2"
                      type="text"
                      name="institution2"
                      class="form-control"
                      required
                    >
                  </div>

                  <div class="mb-3">
                    <label for="graduationYear2" class="form-label">Graduation Year:</label>
                    <input
                      id="graduationYear2"
                      type="number"
                      name="graduationYear2"
                      class="form-control"
                      min="1900"
                      max="2100"
                      required
                    >
                  </div>

                  <div class="mb-3">
                    <label for="fieldOfStudy2" class="form-label">Field of Study:</label>
                    <input
                      id="fieldOfStudy2"
                      type="text"
                      name="fieldOfStudy2"
                      class="form-control"
                      required
                    >
                  </div>
                </form>
              </div>
              <div v-if="currentTab1 === 4" id="progress-finish" class="tab-pane show active">
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-10">
                    <div class="text-center p-4">
                      <span
                        class="avatar avatar-xl avatar-rounded bg-success-transparent svg-success"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                          <rect width="256" height="256" fill="none" />
                          <circle cx="128" cy="128" r="96" opacity="0.2" />
                          <polyline
                            points="88 136 112 160 168 104"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                          />
                          <circle
                            cx="128"
                            cy="128"
                            r="96"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                          />
                        </svg>
                      </span>
                      <h3 class="mt-2">
                        Successful <span class="fs-14 align-middle">&#127881;</span>
                      </h3>
                      <p>
                        Nulla facilisi. Praesent euismod, ex in viverra ullamcorper, augue justo
                        convallis urna, a sollicitudin quam libero et magna. Sed ac metus.
                      </p>
                      <div class="mb-0">
                        <div class="form-check d-inline-block">
                          <input
                            id="customCheck2"
                            class="form-check-input"
                            required
                            type="checkbox"
                          >
                          <label class="form-check-label" for="customCheck2">I agree with the
                            <Link
                              class="fw-medium text-decoration-underline"
                              :href="`${baseUrl}/demo/pages/terms-conditions/`"
                            >Terms and Conditions.
                            </Link>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row -->
              </div>
              <div class="d-flex wizard justify-content-between mt-3 flex-wrap gap-2">
                <div class="first">
                  <a href="javascript:void(0);" class="btn btn-light" @click="goToFirst1">
                    First
                  </a>
                </div>
                <div class="d-flex flex-wrap gap-2">
                  <div class="previous me-2">
                    <a
                      href="javascript:void(0);"
                      class="btn icon-btn btn-primary table-icon"
                      @click="goToPrevious1"
                    >
                      <i class="bx bx-left-arrow-alt me-2 d-inline-block" />Back To Previous
                    </a>
                  </div>
                  <div class="next">
                    <a
                      href="javascript:void(0);"
                      class="btn icon-btn btn-secondary table-icon"
                      @click="goToNext1"
                    >
                      Next Step<i class="bx bx-right-arrow-alt d-inline-block ms-2" />
                    </a>
                  </div>
                </div>
                <div class="last">
                  <a href="javascript:void(0);" class="btn btn-success" @click="finish1">
                    Finish
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->
</template>

<style scoped>
/* Add your styles here */
</style>
