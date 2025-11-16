<script setup>
import { Head, Link, router } from '@inertiajs/vue3'
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import authlayout from '@/layouts/authlayout.vue'

defineOptions({
  layout: authlayout,
})

const baseUrl = __BASE_PATH__

const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const reseted = ref('')

const errors = reactive({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
})

const passwordVisibility = reactive({
  current: false,
  new: false,
  confirm: false,
})

function togglePasswordVisibility(field) {
  passwordVisibility[field] = !passwordVisibility[field]
}

function validateForm() {
  let valid = true
  errors.currentPassword = ''
  errors.newPassword = ''
  errors.confirmPassword = ''

  if (!currentPassword.value) {
    errors.currentPassword = 'Current password is required'
    valid = false
  }

  if (!newPassword.value) {
    errors.newPassword = 'New password is required'
    valid = false
  }

  if (confirmPassword.value !== newPassword.value) {
    errors.confirmPassword = 'Passwords do not match'
    valid = false
  }

  return valid
}

function onSubmit() {
  if (validateForm()) {
    reseted.value = 'Created Password successful'
    router.visit(`${baseUrl}/demo/dashboards/sales`) // Adjust the path as needed
  }
}

function setBodyClass(action) {
  if (action === 'add') {
    document.body.classList.add('authentication-background')
    document.body.style.display = 'block'
  }
  else {
    document.body.classList.remove('authentication-background')
    document.body.style.display = 'none'
  }
}

onMounted(() => {
  // Check if the user has visited before
  if (localStorage.getItem('visited') === 'true') {
    setBodyClass('add')
  }
  else {
    setBodyClass('add')
    localStorage.setItem('visited', 'true')
  }

  const handleBeforeUnload = () => {
    setBodyClass('remove')
    localStorage.removeItem('visited')
  }

  window.addEventListener('beforeunload', handleBeforeUnload, {
    passive: true,
  })

  onBeforeUnmount(() => {
    window.removeEventListener('beforeunload', handleBeforeUnload)
    setBodyClass('remove')
    document.body.removeAttribute('style')
  })
})
</script>

<template>
  <Head title="Basic Reset-Password | Vyzor - Laravel & Vue " />
  <div class="authentication-background">
    <div class="authentication-basic-background">
      <BaseImg src="/images/media/backgrounds/9.png" alt="" />
    </div>
    <div class="container">
      <div
        class="row justify-content-center align-items-center authentication authentication-basic h-100"
      >
        <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-sm-8 col-12">
          <div class="card custom-card border-0 my-4">
            <div class="card-body p-5">
              <div class="mb-4">
                <Link :href="`${baseUrl}/demo/dashboards/sales`">
                  <BaseImg
                    src="/images/brand-logos/toggle-logo.png"
                    alt="logo"
                    class="desktop-dark"
                  />
                </Link>
              </div>
              <div>
                <h4 class="mb-1 fw-semibold">
                  Reset Password
                </h4>
                <p class="mb-4 text-muted fw-normal">
                  Set your new password here.
                </p>
              </div>
              <form @submit.prevent="onSubmit">
                <div class="row gy-3">
                  <!-- Current Password -->
                  <div class="col-xl-12">
                    <label for="reset-password" class="form-label text-default">Current Password</label>
                    <div class="position-relative">
                      <input
                        id="currentPassword"
                        v-model="currentPassword"
                        :type="passwordVisibility.current ? 'text' : 'password'"
                        placeholder="Current password"
                        class="form-control form-control-lg"
                      >
                      <a
                        id="button-addon2"
                        href="#!"
                        class="show-password-button text-muted"
                        @click.prevent="togglePasswordVisibility('current')"
                      >
                        <i
                          :class="passwordVisibility.current ? 'ri-eye-line' : 'ri-eye-off-line'"
                          class="align-middle"
                        />
                      </a>
                    </div>
                    <p v-if="errors.currentPassword" class="text-danger text-sm mb-0 mt-1">
                      {{ errors.currentPassword }}
                    </p>
                  </div>

                  <!-- New Password -->
                  <div class="col-xl-12">
                    <label for="reset-newpassword" class="form-label text-default">New Password</label>
                    <div class="position-relative">
                      <input
                        id="newPassword"
                        v-model="newPassword"
                        :type="passwordVisibility.new ? 'text' : 'password'"
                        placeholder="New password"
                        class="form-control form-control-lg"
                      >
                      <a
                        id="button-addon21"
                        href="#!"
                        class="show-password-button text-muted"
                        @click.prevent="togglePasswordVisibility('new')"
                      >
                        <i
                          :class="passwordVisibility.new ? 'ri-eye-line' : 'ri-eye-off-line'"
                          class="align-middle"
                        />
                      </a>
                    </div>
                    <p v-if="errors.newPassword" class="text-danger text-sm mb-0 mt-1">
                      {{ errors.newPassword }}
                    </p>
                  </div>

                  <!-- Confirm Password -->
                  <div class="col-xl-12">
                    <label for="reset-confirmpassword" class="form-label text-default">Confirm Password</label>
                    <div class="position-relative">
                      <input
                        id="confirmPassword"
                        v-model="confirmPassword"
                        :type="passwordVisibility.confirm ? 'text' : 'password'"
                        placeholder="Confirm password"
                        class="form-control form-control-lg"
                      >
                      <a
                        id="button-addon22"
                        href="#!"
                        class="show-password-button text-muted"
                        @click.prevent="togglePasswordVisibility('confirm')"
                      >
                        <i
                          :class="passwordVisibility.confirm ? 'ri-eye-line' : 'ri-eye-off-line'"
                          class="align-middle"
                        />
                      </a>
                    </div>
                    <p v-if="errors.confirmPassword" class="text-danger text-sm mb-0 mt-1">
                      {{ errors.confirmPassword }}
                    </p>

                    <p v-if="reseted" class="text-success text-sm">
                      {{ reseted }}
                    </p>
                  </div>
                </div>

                <div class="d-grid mt-3">
                  <!-- Replace SpkButton with your actual component or native button -->
                  <button type="submit" class="btn btn-primary">
                    Reset Password
                  </button>
                </div>
              </form>
              <div class="text-center my-3 authentication-barrier">
                <span class="op-4 fs-13">OR</span>
              </div>
              <div class="d-grid mb-3">
                <button
                  class="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill mb-3"
                >
                  <span class="avatar avatar-xs">
                    <BaseImg src="/images/media/apps/google.png" alt="" />
                  </span>
                  <span class="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Google</span>
                </button>
                <button
                  class="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill"
                >
                  <span class="avatar avatar-xs">
                    <BaseImg src="/images/media/apps/facebook.png" alt="" />
                  </span>
                  <span class="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Facebook</span>
                </button>
              </div>
              <div class="text-center mt-3 fw-medium">
                Dont want to reset?
                <Link :href="`${baseUrl}/demo/pages/authentication/sign-in/basic`" class="text-primary">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
