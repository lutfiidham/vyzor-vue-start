<script setup>
import { Head } from '@inertiajs/vue3'
import { ref } from 'vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import { timezones } from '@/shared/data/pages/profilesettingdata'
// Reactive state
const dataToPass = {
  title: 'Pages',
  currentpage: 'Profile Settings',
  activepage: 'Profile Settings',
}

const tagValue = ref([{ name: 'Us English', code: 'Us English' }])

const tagOptions = ref([
  { name: 'English', code: 'English' },
  { name: 'Arabic', code: 'Arabic' },
  { name: 'Korean', code: 'Korean' },
])

const selectedTimezone = ref([{ name: '(GMT-11:00) Midway Island, Samoa', code: 'Pacific/Midway' }])

const success1 = ref(true)
const success2 = ref(true)
const success3 = ref(false)
const success4 = ref(true)

// Methods
function handleSuccess1() {
  success1.value = !success1.value
}
function handleSuccess2() {
  success2.value = !success2.value
}
function handleSuccess3() {
  success3.value = !success3.value
}
function handleSuccess4() {
  success4.value = !success4.value
}
</script>

<template>
  <Head title="Profile-Settings | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Account
          </div>
        </div>
        <div class="card-body p-4">
          <div class="row gy-3">
            <div class="col-xl-12">
              <div class="d-flex align-items-start flex-wrap gap-3">
                <div>
                  <span class="avatar avatar-xxl">
                    <BaseImg src="/images/faces/9.jpg" alt="" />
                  </span>
                </div>
                <div>
                  <span class="fw-medium d-block mb-2">Profile Picture</span>
                  <div class="btn-list mb-1">
                    <button class="btn btn-sm btn-primary btn-wave">
                      <i class="ri-upload-2-line me-1" />Change Image
                    </button>
                    <button class="btn btn-sm btn-light btn-wave">
                      <i class="ri-delete-bin-line me-1" />Remove
                    </button>
                  </div>
                  <span class="d-block fs-12 text-muted">Use JPEG, PNG, or GIF. Best size: 200x200 pixels. Keep it under 5MB</span>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <label for="profile-user-name" class="form-label">User Name :</label>
              <input
                id="profile-user-name"
                type="text"
                class="form-control"
                value=""
                placeholder="Enter Name"
              >
            </div>
            <div class="col-xl-6">
              <label for="profile-email" class="form-label">Email :</label>
              <input
                id="profile-email"
                type="email"
                class="form-control"
                value=""
                placeholder="Enter Email"
              >
            </div>
            <div class="col-xl-6">
              <label for="profile-phn-no" class="form-label">Phone No :</label>
              <input
                id="profile-phn-no"
                type="text"
                class="form-control"
                value=""
                placeholder="Enter Number"
              >
            </div>
            <div class="col-xl-3">
              <label for="profile-age" class="form-label">Age :</label>
              <input
                id="profile-age"
                type="number"
                class="form-control"
                value=""
                placeholder="Enter Age"
              >
            </div>
            <div class="col-xl-3">
              <label for="profile-designation" class="form-label">Designation :</label>
              <input
                id="profile-designation"
                type="text"
                class="form-control"
                value=""
                placeholder="Enter Designation"
              >
            </div>
            <div class="col-xl-12">
              <label for="profile-address" class="form-label">Address :</label>
              <textarea id="profile-address" class="form-control" rows="3" />
            </div>
            <div class="col-xl-6 custom-profile-set">
              <label for="profile-language" class="form-label">Language :</label>
              <VueMultiselect
                v-model="tagValue"
                :show-labels="false"
                tag-placeholder="Add this as new tag"
                placeholder="Search or add a tag"
                label="name"
                track-by="code"
                :options="tagOptions"
                :taggable="true"
                @tag="addTag"
              />
            </div>
            <div class="col-xl-6 custom-profile-set">
              <label for="profile-timezone" class="form-label">Timezone :</label>
              <VueMultiselect
                v-model="selectedTimezone"
                :show-labels="false"
                tag-placeholder="Add this as new tag"
                placeholder="Search or add a tag"
                label="name"
                track-by="code"
                :options="timezones"
                :taggable="true"
                @tag="addTag"
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
            Change Password
          </div>
        </div>
        <div class="card-body">
          <div class="row gy-3">
            <div class="col-xl-6">
              <label for="Password" class="form-label">New Password</label>
              <input
                id="Password"
                type="text"
                class="form-control"
                value=""
                placeholder="Enter Password"
              >
            </div>
            <div class="col-xl-6">
              <label for="confirm-password" class="form-label">Confirm Password</label>
              <input
                id="confirm-password"
                type="text"
                class="form-control"
                value=""
                placeholder="Confirm Password"
              >
            </div>
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary float-end">
            Save Changes
          </button>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Security Settings
          </div>
        </div>
        <div class="card-body">
          <div class="d-sm-flex d-block align-items-top justify-content-between">
            <div class="w-50">
              <p class="fs-14 mb-1 fw-medium">
                Login Verification
              </p>
              <p class="fs-12 mb-0 text-muted">
                This helps protect accounts from unauthorized access, even if a password is
                compromised.
              </p>
            </div>
            <a href="javascript:void(0);" class="link-primary text-decoration-underline">Set Up Verification</a>
          </div>
          <div class="d-sm-flex d-block align-items-top justify-content-between mt-3">
            <div class="w-50">
              <p class="fs-14 mb-1 fw-medium">
                Password Verification
              </p>
              <p class="fs-12 mb-0 text-muted">
                This additional step helps ensure that the person attempting to modify account
                details is the legitimate account owner.
              </p>
            </div>
            <div class="form-check">
              <input id="personal-details" class="form-check-input" type="checkbox" value="">
              <label class="form-check-label" for="personal-details">
                Require Personal Details
              </label>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="btn-list float-end">
            <button class="btn btn-danger btn-wave">
              Deactivate Account
            </button>
            <button class="btn btn-light btn-wave">
              Restore Defaults
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Notifications
          </div>
        </div>
        <div class="card-body">
          <div class="row gx-5 gy-3">
            <div class="col-xl-12">
              <p class="fs-14 mb-1 fw-medium">
                Configure Notifications
              </p>
              <p class="fs-12 mb-0 text-muted">
                By configuring notifications, users can tailor their experience to receive alerts
                for the types of events that matter to them.
              </p>
            </div>
            <div class="col-xl-12">
              <div class="d-flex align-items-top justify-content-between mt-sm-0 mt-3">
                <div class="mail-notification-settings">
                  <p class="fs-14 mb-1 fw-medium">
                    In-App Notifications
                  </p>
                  <p class="fs-12 mb-0 text-muted">
                    Alerts that appear within the application interface.
                  </p>
                </div>
                <div
                  id="push-notifications"
                  :class="`toggle toggle-success mb-0 float-sm-end ${success1 ? 'on' : ''}`"
                  @click="handleSuccess1"
                >
                  <span />
                </div>
              </div>
              <div class="d-flex align-items-top justify-content-between mt-3">
                <div class="mail-notification-settings">
                  <p class="fs-14 mb-1 fw-medium">
                    Email Notifications
                  </p>
                  <p class="fs-12 mb-0 text-muted">
                    Messages sent to the user's email address.
                  </p>
                </div>
                <div
                  id="email-notifications"
                  :class="`toggle toggle-success mb-0 float-sm-end ${success2 ? 'on' : ''}`"
                  @click="handleSuccess2"
                >
                  <span />
                </div>
              </div>
              <div class="d-flex align-items-top justify-content-between mt-3">
                <div class="mail-notification-settings">
                  <p class="fs-14 mb-1 fw-medium">
                    Push Notifications
                  </p>
                  <p class="fs-12 mb-0 text-muted">
                    Alerts sent to the user's mobile device or desktop.
                  </p>
                </div>
                <div
                  id="in-app-notifications"
                  :class="`toggle toggle-success mb-0 float-sm-end ${success3 ? 'on' : ''}`"
                  @click="handleSuccess3"
                >
                  <span />
                </div>
              </div>
              <div class="d-flex align-items-top justify-content-between mt-3">
                <div class="mail-notification-settings">
                  <p class="fs-14 mb-1 fw-medium">
                    SMS Notifications
                  </p>
                  <p class="fs-12 mb-0 text-muted">
                    Text messages sent to the user's mobile phone.
                  </p>
                </div>
                <div
                  id="sms-notifications"
                  :class="`toggle toggle-success mb-0 float-sm-end ${success4 ? 'on' : ''}`"
                  @click="handleSuccess4"
                >
                  <span />
                </div>
              </div>
            </div>
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
