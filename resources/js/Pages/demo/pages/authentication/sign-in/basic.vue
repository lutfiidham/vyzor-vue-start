<script setup>
import { Head, Link, router } from '@inertiajs/vue3'
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import authlayout from '@/layouts/authlayout.vue'

defineOptions({
  layout: authlayout,
})

const baseUrl = __BASE_PATH__

const values = reactive({
  email: 'tomphillip21@gmail.com',
  password: '12345678',
  showPassword: false,
})

const errors = reactive({})

function validate() {
  const newErrors = {}

  if (!values.email) {
    newErrors.email = 'Email is required.'
  }
  else if (!/\S[^\s@]*@\S+\.\S+/.test(values.email)) {
    newErrors.email = 'Invalid email format.'
  }

  if (!values.password) {
    newErrors.password = 'Password is required.'
  }
  else if (values.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters.'
  }

  Object.keys(errors).forEach(key => delete errors[key]) // Clear previous errors
  Object.assign(errors, newErrors) // Apply new errors

  return Object.keys(newErrors).length === 0
}

const matched = ref('')

function handleSubmit() {
  if (validate()) {
    matched.value = 'Save Password successful'
    router.visit(`${baseUrl}/demo/dashboards/sales/`)
  }
}

function togglePassword() {
  values.showPassword = !values.showPassword
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
  <Head title="Basic Sign-In | Vyzor - Laravel & Vue " />
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
                  Hi,Welcome back!
                </h4>
                <p class="mb-4 text-muted fw-normal">
                  Please enter your credentials
                </p>
              </div>
              <form @submit.prevent="handleSubmit">
                <div class="row gy-3">
                  <Col :xl="12">
                    <Label for="signin-email" class="text-default">Email</Label>
                    <input
                      id="signup-firstname"
                      v-model="values.email"
                      type="email"
                      class="form-control"
                      placeholder="Enter Email ID"
                    >
                    <p v-if="errors.email" class="text-danger text-sm mt-1 mb-0">
                      {{ errors.email }}
                    </p>
                  </Col>

                  <Col :xl="12" class="mb-2">
                    <Label for="signin-password" class="text-default d-block">Password</Label>
                    <div class="position-relative">
                      <input
                        id="signup-password"
                        v-model="values.password"
                        :type="values.showPassword ? 'text' : 'password'"
                        class="form-control"
                        placeholder="Password"
                      >
                      <a
                        href="#!"
                        class="show-password-button text-muted"
                        @click.prevent="togglePassword"
                      >
                        <i :class="values.showPassword ? 'ri-eye-line' : 'ri-eye-off-line'" />
                      </a>

                      <p v-if="errors.password" class="text-danger text-sm mt-1 mb-0">
                        {{ errors.password }}
                      </p>
                      <p v-if="matched" class="text-success text-sm">
                        {{ matched }}
                      </p>
                    </div>

                    <div class="mt-2">
                      <div class="form-check d-flex gap-2 flex-wrap">
                        <input
                          id="defaultCheck1"
                          class="form-check-input"
                          type="checkbox"
                          checked
                        >
                        <label class="form-check-label flex-grow-1" for="defaultCheck1">
                          Remember me
                        </label>
                        <Link
                          :href="`${baseUrl}/demo/pages/authentication/reset-password/basic/`"
                          class="float-end link-danger fw-medium fs-12"
                        >
                          Forget password ?
                        </Link>
                      </div>
                    </div>
                  </Col>
                </div>

                <div class="d-grid mt-3">
                  <button type="submit" class="btn btn-primary">
                    Sign In
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
                Dont have an account?
                <Link :href="`${baseUrl}/demo/pages/authentication/sign-up/basic`" class="text-primary">
                  Sign Up
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
