<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import BaseImg from '../../../../components/Baseimage/BaseImg.vue'
import { Link, router } from '@inertiajs/vue3'
import authlayout from '@/layouts/authlayout.vue'
const baseUrl = __BASE_PATH__

defineOptions({
  layout: authlayout,
})

const values = reactive({
  email: '',
  password: '',
  showPassword: false,
})

const errors = reactive({})

const matched = ref('')

const validate = () => {
  const newErrors = {}

  if (!values.email) {
    newErrors.email = 'Email is required.'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    newErrors.email = 'Invalid email format.'
  }

  if (!values.password) {
    newErrors.password = 'Password is required.'
  } else if (values.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters.'
  }

  // Clear existing errors first
  Object.keys(errors).forEach((key) => delete errors[key])

  Object.assign(errors, newErrors)
  return Object.keys(newErrors).length === 0
}

const togglePassword = () => {
  values.showPassword = !values.showPassword
}

const handleSubmit = () => {
  if (validate()) {
    matched.value = 'Save Password successful'
    router.visit(`${baseUrl}/demo/dashboards/sales`) // Replace with your basePath if needed
  }
}

const setBodyClass = (action) => {
  if (action === 'add') {
    document.body.classList.add('authentication-background')
    document.body.style.display = 'block'
  } else {
    document.body.classList.remove('authentication-background')
    document.body.style.display = 'none'
  }
}

onMounted(() => {
  // Check if the user has visited before
  if (localStorage.getItem('visited') === 'true') {
    setBodyClass('add')
  } else {
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
  <Head title="Basic Sign-Up | Vyzor - Laravel & Vue " />
  <div class="authentication-background">
    <div class="authentication-basic-background">
      <BaseImg src="/images/media/backgrounds/9.png" alt="" />
    </div>
    <div class="container">
      <div
        class="row justify-content-center align-items-center authentication authentication-basic h-100"
      >
        <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-7 col-sm-9 col-12">
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
                <h4 class="mb-1 fw-semibold">Sign Up</h4>
                <p class="mb-4 text-muted fw-normal">Join us by creating a free account !</p>
              </div>
              <form @submit.prevent="handleSubmit">
                <div class="row gy-3">
                  <!-- Email Field -->
                  <div class="col-xl-12">
                    <label for="signin-email" class="text-default">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="signup-firstname"
                      placeholder="Enter Email ID"
                      v-model="values.email"
                    />
                    <p v-if="errors.email" class="text-danger text-sm mt-1 mb-0">
                      {{ errors.email }}
                    </p>
                  </div>

                  <!-- Password Field -->
                  <div class="col-xl-12 mb-2">
                    <label for="signin-password" class="text-default d-block">Password</label>
                    <div class="position-relative">
                      <input
                        :type="values.showPassword ? 'text' : 'password'"
                        class="form-control"
                        id="signup-password"
                        placeholder="Password"
                        v-model="values.password"
                      />
                      <a
                        href="#!"
                        class="show-password-button text-muted"
                        @click.prevent="togglePassword"
                      >
                        <i
                          :class="
                            values.showPassword
                              ? 'ri-eye-line align-middle'
                              : 'ri-eye-off-line align-middle'
                          "
                        ></i>
                      </a>

                      <p v-if="errors.password" class="text-danger text-sm mt-1 mb-0">
                        {{ errors.password }}
                      </p>

                      <p v-if="matched" class="text-success text-sm mt-1 mb-0">{{ matched }}</p>
                    </div>
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="d-grid mt-3">
                  <button type="submit" class="btn btn-primary">Sign Up</button>
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
                Already have a account?
                <Link :href="`${baseUrl}/demo/pages/authentication/sign-in/basic`" class="text-primary"
                  >Sign In</Link
                >
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
