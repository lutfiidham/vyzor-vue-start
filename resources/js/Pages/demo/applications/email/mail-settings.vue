<script setup>
import { Head } from '@inertiajs/vue3'
import { reactive, ref } from 'vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as SettingData from '@/shared/data/applications/email/mailsettingsdata'
import ToggleSwitch from '../../../../../UI/toggleSwitch.vue'

const toggles = reactive({})

function toggle(toggleKey) {
  toggles[toggleKey] = toggles[toggleKey] === 'on' ? 'off' : 'on'
}

const dataToPass = {
  title: 'Applications',
  subtitle: 'Email',
  currentpage: 'Mail Settings',
  activepage: 'Mail Settings',
}

const MaildataValue = ref('English')
const MaildataValue1 = ref(['English', 'French'])
const Maildata = ref(['English', 'French', 'Arabic', 'Hindi'])
const CountryValue = ref(['Usa'])
const CountryData = ref(['Usa', 'Australia', 'Dubai'])
const MaximumValue = ref(['10'])
const MaximumData = ref(['10', '50', '100', '120'])

const DayValue = ref([{ name: '1 Day', code: '3' }])
const DayData = ref([
  { name: '1 Day', code: '3' },
  { name: '1 Hour', code: '5' },
  { name: '1 Month', code: '10' },
  { name: '1 Year', code: '20' },
])

const AttemptsValue = ref([{ name: '3 Attempts', code: '3' }])
const AttemptsData = ref([
  { name: '3 Attempts', code: '3' },
  { name: '5 Attempts', code: '5' },
  { name: '10 Attempts', code: '10' },
  { name: '20 Attempts', code: '20' },
])

const profileImg = ref('/images/faces/9.jpg')

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
  <Head title="Mail Settings | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row mb-5">
    <div class="col-xl-3">
      <div class="card custom-card">
        <div class="card-body text-center p-4">
          <span class="avatar avatar-xxl avatar-rounded">
            <img v-if="avatar" loading="lazy" class="avatar" :src="avatar" alt="Avatar">
            <BaseImg v-else id="profile-img" src="/images/faces/9.jpg" alt="" />
            <span class="badge rounded-pill avatar-badge">
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
          </span>
          <h6 class="fw-semibold mt-3 mb-1">
            Jhon Doe
          </h6>
          <span class="d-block fs-13 tex-muted">jhondoe3125@gmail.com</span>
          <div class="btn-list mt-3">
            <button class="btn btn-sm btn-w-sm btn-primary">
              Edit
            </button>
            <button class="btn btn-sm btn-w-sm btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
      <div class="card custom-card">
        <div class="card-body">
          <ul
            class="nav nav-tabs flex-column nav-tabs-header mb-0 mail-sesttings-tab"
            role="tablist"
          >
            <li class="nav-item m-1">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#personal-info"
                aria-selected="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <path
                    d="M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM96,144a24,24,0,1,1,24-24A24,24,0,0,1,96,144Z"
                    opacity="0.2"
                  />
                  <line
                    x1="152"
                    y1="112"
                    x2="192"
                    y2="112"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                  <line
                    x1="152"
                    y1="144"
                    x2="192"
                    y2="144"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                  <rect
                    x="32"
                    y="48"
                    width="192"
                    height="160"
                    rx="8"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                  <circle
                    cx="96"
                    cy="120"
                    r="24"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                  <path
                    d="M64,168c3.55-13.8,17.09-24,32-24s28.46,10.19,32,24"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                </svg>
                Personal Information</a>
            </li>
            <li class="nav-item m-1">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#account-settings"
                aria-selected="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <path
                    d="M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
                    opacity="0.2"
                  />
                  <circle
                    cx="128"
                    cy="128"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                  <path
                    d="M41.43,178.09A99.14,99.14,0,0,1,31.36,153.8l16.78-21a81.59,81.59,0,0,1,0-9.64l-16.77-21a99.43,99.43,0,0,1,10.05-24.3l26.71-3a81,81,0,0,1,6.81-6.81l3-26.7A99.14,99.14,0,0,1,102.2,31.36l21,16.78a81.59,81.59,0,0,1,9.64,0l21-16.77a99.43,99.43,0,0,1,24.3,10.05l3,26.71a81,81,0,0,1,6.81,6.81l26.7,3a99.14,99.14,0,0,1,10.07,24.29l-16.78,21a81.59,81.59,0,0,1,0,9.64l16.77,21a99.43,99.43,0,0,1-10,24.3l-26.71,3a81,81,0,0,1-6.81,6.81l-3,26.7a99.14,99.14,0,0,1-24.29,10.07l-21-16.78a81.59,81.59,0,0,1-9.64,0l-21,16.77a99.43,99.43,0,0,1-24.3-10l-3-26.71a81,81,0,0,1-6.81-6.81Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                </svg>
                Account Settings</a>
            </li>
            <li class="nav-item m-1">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#email-settings"
                aria-selected="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <polygon points="224 56 128 144 32 56 224 56" opacity="0.2" />
                  <path
                    d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                  <polyline
                    points="224 56 128 144 32 56"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                </svg>
                Email</a>
            </li>
            <li class="nav-item m-1">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#labels"
                aria-selected="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <path
                    d="M42.34,138.34A8,8,0,0,1,40,132.69V40h92.69a8,8,0,0,1,5.65,2.34l99.32,99.32a8,8,0,0,1,0,11.31L153,237.66a8,8,0,0,1-11.31,0Z"
                    opacity="0.2"
                  />
                  <path
                    d="M42.34,138.34A8,8,0,0,1,40,132.69V40h92.69a8,8,0,0,1,5.65,2.34l99.32,99.32a8,8,0,0,1,0,11.31L153,237.66a8,8,0,0,1-11.31,0Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                  <circle cx="84" cy="84" r="12" />
                </svg>
                Labels</a>
            </li>
            <li class="nav-item m-1">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#notification-settings"
                aria-selected="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <path
                    d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z"
                    opacity="0.2"
                  />
                  <path
                    d="M96,192a32,32,0,0,0,64,0"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                  <path
                    d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                </svg>
                Notifications</a>
            </li>
            <li class="nav-item m-1">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#security"
                aria-selected="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <rect x="40" y="88" width="176" height="128" rx="8" opacity="0.2" />
                  <rect
                    x="40"
                    y="88"
                    width="176"
                    height="128"
                    rx="8"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                  <circle cx="128" cy="152" r="12" />
                  <path
                    d="M88,88V56a40,40,0,0,1,80,0V88"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                </svg>
                Security</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xl-9">
      <div class="card custom-card">
        <div class="card-body">
          <div class="tab-content">
            <div id="personal-info" class="tab-pane show active p-0 border-0" role="tabpanel">
              <div>
                <h6 class="fw-medium mb-3">
                  Profile :
                </h6>
                <div class="row gy-4 mb-4">
                  <div class="col-xl-6">
                    <label for="first-name" class="form-label">First Name</label>
                    <input
                      id="first-name"
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                    >
                  </div>
                  <div class="col-xl-6">
                    <label for="last-name" class="form-label">Last Name</label>
                    <input
                      id="last-name"
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                    >
                  </div>
                  <div class="col-xl-12">
                    <label class="form-label">User Name</label>
                    <div class="input-group mb-3">
                      <span id="basic-addon3" class="input-group-text">user2413@gmail.com</span>
                      <input
                        id="basic-url"
                        type="text"
                        class="form-control"
                        aria-describedby="basic-addon3"
                      >
                    </div>
                  </div>
                </div>
                <h6 class="fw-medium mb-3">
                  Personal information :
                </h6>
                <div class="row gy-4">
                  <div class="col-xl-6">
                    <label for="email-address" class="form-label">Email Address :</label>
                    <input
                      id="email-address"
                      type="text"
                      class="form-control"
                      placeholder="xyz@gmail.com"
                    >
                  </div>
                  <div class="col-xl-6">
                    <label for="phone-no" class="form-label">Phone No :</label>
                    <input
                      id="phone-no"
                      type="text"
                      class="form-control"
                      placeholder="Enter Phone No"
                    >
                  </div>
                  <div class="col-xl-6">
                    <label for="language" class="form-label">Language :</label>
                    <VueMultiselect
                      v-model="MaildataValue"
                      :searchable="false"
                      :show-labels="false"
                      :multiple="true"
                      :options="Maildata"
                      :taggable="false"
                    />
                  </div>
                  <div class="col-xl-6">
                    <label class="form-label">Country :</label>
                    <VueMultiselect
                      v-model="CountryValue"
                      :searchable="false"
                      :show-labels="false"
                      :options="CountryData"
                      :taggable="false"
                    />
                  </div>
                  <div class="col-xl-12">
                    <label for="bio" class="form-label">Bio :</label>
                    <textarea id="bio" class="form-control" rows="5">
Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!</textarea>
                  </div>
                </div>
              </div>
            </div>
            <div id="account-settings" class="tab-pane border-0 p-0" role="tabpanel">
              <div class="row gy-3">
                <div class="col-xxl-7">
                  <div class="card custom-card shadow-none mb-0 border">
                    <div class="card-body">
                      <div class="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                        <div class="w-75">
                          <p class="fs-14 mb-1 fw-medium">
                            Two Step Verification
                          </p>
                          <p class="fs-13 text-muted mb-0">
                            Two step verificatoin is very secured and restricts in happening faulty
                            practices.
                          </p>
                        </div>
                        <ToggleSwitch
                          custom-class="toggle toggle-primary mb-0"
                          :is-on="true"
                          title=""
                        />
                      </div>
                      <div class="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                        <div class="mb-sm-0 mb-2 w-75">
                          <p class="fs-14 mb-2 fw-medium">
                            Authentication
                          </p>
                          <div class="mb-0 authentication-btn-group">
                            <div
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                id="btnradio1"
                                type="radio"
                                class="btn-check"
                                name="btnradio"
                                checked=""
                              >
                              <label class="btn btn-outline-light" for="btnradio1"><i class="ri-lock-unlock-line me-2 d-inline-block" />Pin</label>
                              <input
                                id="btnradio2"
                                type="radio"
                                class="btn-check"
                                name="btnradio"
                              >
                              <label class="btn btn-outline-light" for="btnradio2"><i class="ri-lock-password-line me-2 d-inline-block" />Password</label>
                              <input
                                id="btnradio3"
                                type="radio"
                                class="btn-check"
                                name="btnradio"
                              >
                              <label class="btn btn-outline-light" for="btnradio3"><i class="ri-fingerprint-line me-2 d-inline-block" />Finger
                                Print</label>
                            </div>
                          </div>
                        </div>
                        <ToggleSwitch
                          custom-class="toggle toggle-primary mb-0"
                          :is-on="true"
                          title=""
                        />
                      </div>
                      <div class="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                        <div class="w-75">
                          <p class="fs-14 mb-1 fw-medium">
                            Recovery Mail
                          </p>
                          <p class="fs-13 text-muted mb-0">
                            Incase of forgetting password mails are sent to heifo@gmail.com
                          </p>
                        </div>
                        <ToggleSwitch
                          custom-class="toggle toggle-primary mb-0"
                          :is-on="true"
                          title=""
                        />
                      </div>
                      <div class="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                        <div>
                          <p class="fs-14 mb-1 fw-medium">
                            SMS Recovery
                          </p>
                          <p class="fs-13 text-muted mb-0">
                            SMS are sent to 9102312xx in case of recovery
                          </p>
                        </div>
                        <ToggleSwitch
                          custom-class="toggle toggle-primary mb-0"
                          :is-on="true"
                          title=""
                        />
                      </div>
                      <div class="d-flex align-items-top justify-content-between">
                        <div>
                          <p class="fs-14 mb-1 fw-medium">
                            Reset Password
                          </p>
                          <p class="fs-13 text-muted">
                            Password should be min of
                            <b class="text-success">8 digits<sup>*</sup></b>,atleast <b class="text-success">One Capital letter<sup>*</sup></b> and
                            <b class="text-success">One Special Character<sup>*</sup></b>
                            included.
                          </p>
                          <div class="mb-2">
                            <label for="current-password" class="form-label">Current Password</label>
                            <input
                              id="current-password"
                              type="text"
                              class="form-control"
                              placeholder="Current Password"
                            >
                          </div>
                          <div class="mb-2">
                            <label for="new-password" class="form-label">New Password</label>
                            <input
                              id="new-password"
                              type="text"
                              class="form-control"
                              placeholder="New Password"
                            >
                          </div>
                          <div class="mb-0">
                            <label for="confirm-password" class="form-label">Confirm Password</label>
                            <input
                              id="confirm-password"
                              type="text"
                              class="form-control"
                              placeholder="Confirm Password"
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-5">
                  <div class="card custom-card shadow-none mb-0 border">
                    <div class="card-header justify-content-between d-sm-flex d-block">
                      <div class="card-title">
                        Registered Devices
                      </div>
                      <div class="mt-sm-0 mt-2">
                        <button class="btn btn-sm btn-primary">
                          Signout from all devices
                        </button>
                      </div>
                    </div>
                    <div class="card-body">
                      <ul class="list-group">
                        <li
                          v-for="idx in SettingData.Devices"
                          :key="idx.id"
                          :class="`list-group-item ${idx.liclass}`"
                        >
                          <div class="d-sm-flex d-block align-items-top">
                            <div class="lh-1 mb-sm-0 mb-2">
                              <i
                                :class="`bi bi-${idx.icon} me-3 fs-16 align-middle text-muted`"
                              />
                            </div>
                            <div class="lh-1 flex-fill">
                              <p class="mb-1">
                                <span class="fw-medium">{{ idx.name }}</span>
                              </p>
                              <p class="mb-0">
                                <span class="text-muted fs-13">{{ idx.locationDate }}</span>
                              </p>
                            </div>
                            <div class="dropdown mt-sm-0 mt-2">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-light"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="ri-more-2-fill" />
                              </a>
                              <ul class="dropdown-menu">
                                <li>
                                  <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="email-settings" class="tab-pane p-0" role="tabpanel">
              <ul class="list-group list-group-flush rounded">
                <li class="list-group-item">
                  <div class="row gy-2 d-sm-flex align-items-center justify-content-between">
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                      <span class="fs-14 fw-medium mb-0">Menu View :</span>
                    </div>
                    <div class="col-xl-4">
                      <div class="form-check">
                        <input
                          id="flexRadioDefault1"
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                        >
                        <label class="form-check-label" for="flexRadioDefault1">
                          Default View
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="flexRadioDefault2"
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          checked=""
                        >
                        <label class="form-check-label" for="flexRadioDefault2">
                          Advanced View
                        </label>
                      </div>
                    </div>
                    <div class="col-xl-5">
                      <ToggleSwitch
                        custom-class="toggle toggle-danger mb-0 float-sm-end"
                        :is-on="true"
                        title=""
                      />
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row gy-3 d-sm-flex align-items-center justify-content-between">
                    <div class="col-xl-3">
                      <span class="fs-14 fw-medium mb-0">Language :</span>
                    </div>
                    <div class="col-xl-4">
                      <label for="mail-language" class="form-label">Languages :</label>
                      <VueMultiselect
                        v-model="MaildataValue1"
                        :searchable="false"
                        :show-labels="false"
                        :multiple="true"
                        :options="Maildata"
                        :taggable="false"
                      />
                    </div>
                    <div class="col-xl-5">
                      <ToggleSwitch
                        custom-class="toggle toggle-success mb-0 float-sm-end"
                        :is-on="false"
                        title=""
                      />
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row gy-2 d-sm-flex align-items-center justify-content-between">
                    <div class="col-xl-3">
                      <span class="fs-14 fw-medium mb-0">Images :</span>
                    </div>
                    <div class="col-xl-4">
                      <div class="form-check">
                        <input
                          id="images-open1"
                          class="form-check-input"
                          type="radio"
                          name="images-open"
                        >
                        <label class="form-check-label" for="images-open1">
                          Always Open Images
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="images-hide2"
                          class="form-check-input"
                          type="radio"
                          name="images-open"
                          checked=""
                        >
                        <label class="form-check-label" for="images-hide2">
                          Ask For Permission
                        </label>
                      </div>
                    </div>
                    <div class="col-xl-5">
                      <ToggleSwitch
                        custom-class="toggle toggle-success mb-0 float-sm-end"
                        :is-on="false"
                        title=""
                      />
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row gy-2 d-sm-flex align-items-center justify-content-between">
                    <div class="col-xl-3">
                      <span class="fs-14 fw-medium mb-0">Keyboard Shortcuts :</span>
                    </div>
                    <div class="col-xl-4">
                      <div class="form-check">
                        <input
                          id="keyboard-enable1"
                          class="form-check-input"
                          type="radio"
                          name="keyboard-enable"
                        >
                        <label class="form-check-label" for="keyboard-enable1">
                          Keyboard Shortcuts Enable
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="keyboard-disable2"
                          class="form-check-input"
                          type="radio"
                          name="keyboard-enable"
                          checked=""
                        >
                        <label class="form-check-label" for="keyboard-disable2">
                          Keyboard Shortcuts Disable
                        </label>
                      </div>
                    </div>
                    <div class="col-xl-5">
                      <ToggleSwitch
                        custom-class="toggle toggle-success mb-0 float-sm-end"
                        :is-on="false"
                        title=""
                      />
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row gy-2 d-sm-flex align-items-center justify-content-between">
                    <div class="col-xl-3">
                      <span class="fs-14 fw-medium mb-0">Notifications :</span>
                    </div>
                    <div class="col-xl-4">
                      <div class="form-check">
                        <input
                          id="desktop-notifications"
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          checked=""
                        >
                        <label class="form-check-label" for="desktop-notifications">
                          Desktop Notifications
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="mobile-notifications"
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        >
                        <label class="form-check-label" for="mobile-notifications">
                          Mobile Notifications
                        </label>
                      </div>
                    </div>
                    <div class="col-xl-5">
                      <div class="float-sm-end">
                        <a href="javascript:void(0)" class="btn btn-success-ghost btn-sm">Learn-more</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row gy-3 d-sm-flex align-items-center justify-content-between">
                    <div class="col-xl-3">
                      <span class="fs-14 fw-medium mb-0">Maximum Mails Per Page :</span>
                    </div>
                    <div class="col-xl-4">
                      <VueMultiselect
                        v-model="MaximumValue"
                        :searchable="false"
                        :show-labels="false"
                        :options="MaximumData"
                        :taggable="false"
                      />
                    </div>
                    <div class="col-xl-5">
                      <ToggleSwitch
                        custom-class="toggle toggle-success mb-0 float-sm-end"
                        :is-on="false"
                        title=""
                      />
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row gy-2 d-sm-flex align-items-center justify-content-between">
                    <div class="col-xl-3">
                      <span class="fs-14 fw-medium mb-0">Mail Composer :</span>
                    </div>
                    <div class="col-xl-4">
                      <div class="form-check">
                        <input
                          id="mail-composeron1"
                          class="form-check-input"
                          type="radio"
                          name="mail-composer"
                        >
                        <label class="form-check-label" for="mail-composeron1">
                          Mail Composer On
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="mail-composeroff2"
                          class="form-check-input"
                          type="radio"
                          name="mail-composer"
                          checked=""
                        >
                        <label class="form-check-label" for="mail-composeroff2">
                          Mail Composer Off
                        </label>
                      </div>
                    </div>
                    <div class="col-xl-5">
                      <ToggleSwitch
                        custom-class="toggle toggle-success mb-0 float-sm-end"
                        :is-on="false"
                        title=""
                      />
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row gy-2 d-sm-flex align-items-center justify-content-between">
                    <div class="col-xl-3">
                      <span class="fs-14 fw-medium mb-0">Auto Correct :</span>
                    </div>
                    <div class="col-xl-4">
                      <div class="form-check">
                        <input
                          id="auto-correcton1"
                          class="form-check-input"
                          type="radio"
                          name="auto-correct"
                        >
                        <label class="form-check-label" for="auto-correcton1">
                          Auto Correct On
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="auto-correctoff2"
                          class="form-check-input"
                          type="radio"
                          name="auto-correct"
                          checked=""
                        >
                        <label class="form-check-label" for="auto-correctoff2">
                          Auto Correct Off
                        </label>
                      </div>
                    </div>
                    <div class="col-xl-5">
                      <ToggleSwitch
                        custom-class="toggle toggle-success mb-0 float-sm-end"
                        :is-on="false"
                        title=""
                      />
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row gy-2 d-sm-flex align-items-center justify-content-between">
                    <div class="col-xl-3">
                      <span class="fs-14 fw-medium mb-0">Mail Send Action :</span>
                    </div>
                    <div class="col-xl-4">
                      <div class="form-check">
                        <input
                          id="on-keyboard"
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          checked=""
                        >
                        <label class="form-check-label" for="on-keyboard">
                          On Keyboard Action
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          id="on-buttonclick"
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        >
                        <label class="form-check-label" for="on-buttonclick">
                          On Button Click
                        </label>
                      </div>
                    </div>
                    <div class="col-xl-5">
                      <div class="float-sm-end">
                        <a href="javascript:void(0)" class="btn btn-success-ghost btn-sm">Learn-more</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="labels" class="tab-pane" role="tabpanel">
              <p class="fs-14 fw-medium mb-3">
                Mail Labels :
              </p>
              <div class="row gy-2">
                <div
                  v-for="(idx, index) in SettingData.MailCategories"
                  :key="index"
                  class="col-xxl-3 col-xl-6 col-lg-4 col-md-4 col-sm-6 col-12"
                >
                  <div class="card custom-card shadow-none">
                    <div
                      class="card-body d-flex align-items-center justify-content-between flex-wrap gap-2"
                    >
                      <label class="form-check-label" :for="idx.id">{{ idx.label }}</label>
                      <div class="form-check form-check-md form-switch mb-0">
                        <input
                          id="label-all-mails"
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          :checked="idx.defaultChecked"
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p class="fs-14 fw-medium mb-3">
                Settings :
              </p>
              <div class="row gy-2">
                <div class="col-xxl-3 col-xl-6 col-lg-4 col-md-4 col-sm-6 col-12">
                  <div class="card custom-card shadow-none">
                    <div
                      class="card-body d-flex align-items-center justify-content-between flex-wrap gap-2"
                    >
                      <label class="form-check-label" for="label-settings">Settings</label>
                      <div class="form-check form-check-md form-switch mb-0">
                        <input
                          id="label-settings"
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          checked=""
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p class="fs-14 fw-medium mb-3">
                Custom Labels :
              </p>
              <div class="row gy-2">
                <div
                  v-for="(idx, index) in SettingData.Categories"
                  :key="index"
                  class="col-xxl-3 col-xl-6 col-lg-4 col-md-4 col-sm-6 col-12"
                >
                  <div class="card custom-card shadow-none">
                    <div
                      class="card-body d-flex align-items-center justify-content-between flex-wrap gap-2"
                    >
                      <label class="form-check-label" for="label-mail">{{ idx.label }}</label>
                      <div class="form-check form-check-md form-switch mb-0">
                        <input
                          id="label-mail"
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          :checked="idx.defaultChecked"
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="notification-settings" class="tab-pane p-0" role="tabpanel">
              <ul class="list-group list-group-flush list-unstyled rounded">
                <li class="list-group-item">
                  <div class="row gx-5 gy-3">
                    <div class="col-xl-5">
                      <p class="fs-16 mb-1 fw-medium">
                        Email Notifications
                      </p>
                      <p class="fs-13 mb-0 text-muted">
                        Email notifications are the notifications you will receeive when you are
                        offline, you can customize them by enabling or disabling them.
                      </p>
                    </div>
                    <div class="col-xl-7">
                      <div class="d-flex align-items-top justify-content-between mt-sm-0 mt-3">
                        <div class="mail-notification-settings">
                          <p class="fs-14 mb-1 fw-medium">
                            Updates & Features
                          </p>
                          <p class="fs-13 mb-0 text-muted">
                            Notifications about new updates and their features.
                          </p>
                        </div>
                        <ToggleSwitch
                          custom-class="toggle toggle-success mb-0 float-sm-end"
                          :is-on="true"
                          title=""
                        />
                      </div>
                      <div class="d-flex align-items-top justify-content-between mt-3">
                        <div class="mail-notification-settings">
                          <p class="fs-14 mb-1 fw-medium">
                            Early Access
                          </p>
                          <p class="fs-13 mb-0 text-muted">
                            Users are selected for beta testing of new update,notifications relating
                            or participate in any of paid product promotion.
                          </p>
                        </div>
                        <ToggleSwitch
                          custom-class="toggle toggle-success mb-0 float-sm-end"
                          :is-on="false"
                          title=""
                        />
                      </div>
                      <div class="d-flex align-items-top justify-content-between mt-3">
                        <div class="mail-notification-settings">
                          <p class="fs-14 mb-1 fw-medium">
                            Email Shortcuts
                          </p>
                          <p class="fs-13 mb-0 text-muted">
                            Shortcut notifications for email.
                          </p>
                        </div>
                        <ToggleSwitch
                          custom-class="toggle toggle-success mb-0 float-sm-end"
                          :is-on="true"
                          title=""
                        />
                      </div>
                      <div class="d-flex align-items-top justify-content-between mt-3">
                        <div class="mail-notification-settings">
                          <p class="fs-14 mb-1 fw-medium">
                            New Mails
                          </p>
                          <p class="fs-13 mb-0 text-muted">
                            Notifications related to new mails received.
                          </p>
                        </div>
                        <ToggleSwitch
                          custom-class="toggle toggle-success mb-0 float-sm-end"
                          :is-on="true"
                          title=""
                        />
                      </div>
                      <div class="d-flex align-items-top justify-content-between mt-3">
                        <div class="mail-notification-settings">
                          <p class="fs-14 mb-1 fw-medium">
                            Mail Chat Messages
                          </p>
                          <p class="fs-13 mb-0 text-muted">
                            Any of new messages are received will be updated through notifications.
                          </p>
                        </div>
                        <ToggleSwitch
                          custom-class="toggle toggle-success mb-0 float-sm-end"
                          :is-on="true"
                          title=""
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row gx-5 gy-3">
                    <div class="col-xl-5">
                      <p class="fs-16 mb-1 fw-medium">
                        Push Notifications
                      </p>
                      <p class="fs-13 mb-0 text-muted">
                        Push notifications are recieved when you are online, you can customize them
                        by enabling or disabling them.
                      </p>
                    </div>
                    <div class="col-xl-7">
                      <div class="d-flex align-items-top justify-content-between mt-sm-0 mt-3">
                        <div class="mail-notification-settings">
                          <p class="fs-14 mb-1 fw-medium">
                            New Mails
                          </p>
                          <p class="fs-13 mb-0 text-muted">
                            Notifications related to new mails received.
                          </p>
                        </div>
                        <ToggleSwitch
                          custom-class="toggle toggle-success mb-0 float-sm-end"
                          :is-on="true"
                          title=""
                        />
                      </div>
                      <div class="d-flex align-items-top justify-content-between mt-3">
                        <div class="mail-notification-settings">
                          <p class="fs-14 mb-1 fw-medium">
                            Mail Chat Messages
                          </p>
                          <p class="fs-13 mb-0 text-muted">
                            Any of new messages are received will be updated through notifications.
                          </p>
                        </div>
                        <ToggleSwitch
                          custom-class="toggle toggle-success mb-0 float-sm-end"
                          :is-on="true"
                          title=""
                        />
                      </div>
                      <div class="d-flex align-items-top justify-content-between mt-3">
                        <div class="mail-notification-settings">
                          <p class="fs-14 mb-1 fw-medium">
                            Mail Extensions
                          </p>
                          <p class="fs-13 mb-0 text-muted">
                            Notifications related to the extensions received by new emails and thier
                            propertied also been displayed.
                          </p>
                        </div>
                        <ToggleSwitch
                          custom-class="toggle toggle-success mb-0 float-sm-end"
                          :is-on="true"
                          title=""
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="security" class="tab-pane p-0" role="tabpanel">
              <ul class="list-group list-group-flush list-unstyled rounded">
                <li class="list-group-item">
                  <div class="row gx-5 gy-3">
                    <div class="col-xl-4">
                      <p class="fs-16 mb-1 fw-medium">
                        Logging In
                      </p>
                      <p class="fs-13 mb-0 text-muted">
                        Security settings related to logging into our email account and taking down
                        account if any mischevious action happended.
                      </p>
                    </div>
                    <div class="col-xl-8">
                      <div
                        class="d-sm-flex d-block align-items-top justify-content-between mt-sm-0 mt-3"
                      >
                        <div class="mail-security-settings">
                          <p class="fs-14 mb-1 fw-medium">
                            Max Limit for login attempts
                          </p>
                          <p class="fs-13 mb-0 text-muted mb-sm-0 mb-2">
                            Account will freeze for 24hrs while attempt to login with wrong
                            credentials for selected number of times
                          </p>
                        </div>
                        <div>
                          <VueMultiselect
                            v-model="AttemptsValue"
                            :show-labels="false"
                            placeholder="Search or add a tag"
                            label="name"
                            track-by="code"
                            :options="AttemptsData"
                          />
                        </div>
                      </div>
                      <div class="d-sm-flex d-block align-items-top justify-content-between mt-3">
                        <div>
                          <p class="fs-14 mb-1 fw-medium">
                            Account Freeze time management
                          </p>
                          <p class="fs-13 mb-0 text-muted mb-sm-0 mb-2">
                            You can change the time for the account freeze when attempts for
                          </p>
                        </div>
                        <div>
                          <VueMultiselect
                            v-model="DayValue"
                            :show-labels="false"
                            placeholder="Search or add a tag"
                            label="name"
                            track-by="code"
                            :options="DayData"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row gx-5 gy-3">
                    <div class="col-xl-4">
                      <p class="fs-16 mb-1 fw-medium">
                        Password Requirements
                      </p>
                      <p class="fs-13 mb-0 text-muted">
                        Security settings related to password strength.
                      </p>
                    </div>
                    <div class="col-xl-8">
                      <div
                        class="d-sm-flex d-block align-items-top justify-content-between mt-sm-0 mt-3 gap-3"
                      >
                        <div class="mail-security-settings">
                          <p class="fs-14 mb-1 fw-medium">
                            Minimum number of characters in the password
                          </p>
                          <p class="fs-13 mb-0 text-muted">
                            There should be a minimum number of characters for a password to be
                            validated that shouls be set here.
                          </p>
                        </div>
                        <div>
                          <input type="text" class="form-control" value="8">
                        </div>
                      </div>
                      <div class="d-sm-flex d-block align-items-top justify-content-between mt-3">
                        <div>
                          <p class="fs-14 mb-1 fw-medium">
                            Contain A Number
                          </p>
                          <p class="fs-13 mb-0 text-muted">
                            Password should contain a number.
                          </p>
                        </div>
                        <ToggleSwitch
                          custom-class="toggle toggle-success mb-0 float-sm-end"
                          :is-on="false"
                          title=""
                        />
                      </div>
                      <div class="d-sm-flex d-block align-items-top justify-content-between mt-3">
                        <div>
                          <p class="fs-14 mb-1 fw-medium">
                            Contain A Special Character
                          </p>
                          <p class="fs-13 mb-0 text-muted">
                            Password should contain a special Character.
                          </p>
                        </div>
                        <ToggleSwitch
                          custom-class="toggle toggle-success mb-0 float-sm-end"
                          :is-on="true"
                          title=""
                        />
                      </div>
                      <div class="d-sm-flex d-block align-items-top justify-content-between mt-3">
                        <div>
                          <p class="fs-14 mb-1 fw-medium">
                            Atleast One Capital Letter
                          </p>
                          <p class="fs-13 mb-0 text-muted">
                            Password should contain atleast one capital letter.
                          </p>
                        </div>
                        <ToggleSwitch
                          custom-class="toggle toggle-success mb-0 float-sm-end"
                          :is-on="false"
                          title=""
                        />
                      </div>
                      <div class="d-sm-flex d-block align-items-top justify-content-between mt-3">
                        <div>
                          <p class="fs-14 mb-1 fw-medium">
                            Maximum Password Length
                          </p>
                          <p class="fs-13 mb-0 text-muted">
                            Maximum password lenth should be selected here.
                          </p>
                        </div>
                        <div>
                          <input type="text" class="form-control" value="16">
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row gx-5 gy-3">
                    <div class="col-xl-4">
                      <p class="fs-16 mb-1 fw-medium">
                        Unknown Chats
                      </p>
                      <p class="fs-13 mb-0 text-muted">
                        Security settings related to unknown chats.
                      </p>
                    </div>
                    <div class="col-xl-8">
                      <div
                        class="btn-group float-sm-end"
                        role="group"
                        aria-label="Basic radio toggle button group"
                      >
                        <input
                          id="unknown-chats-show"
                          type="radio"
                          class="btn-check"
                          name="btnunknownchats"
                          checked=""
                        >
                        <label class="btn btn-outline-light" for="unknown-chats-show">Show</label>
                        <input
                          id="unknown-chats-hide"
                          type="radio"
                          class="btn-check"
                          name="btnunknownchats"
                        >
                        <label class="btn btn-outline-light" for="unknown-chats-hide">Hide</label>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="float-end">
            <button class="btn btn-light m-1">
              Restore Defaults
            </button>
            <button class="btn btn-primary m-1">
              Save Changes
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
