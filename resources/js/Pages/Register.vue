<script setup>
import { Head, Link, useForm, usePage } from '@inertiajs/vue3'
import { getCurrentInstance, onMounted, onUnmounted } from 'vue'
import PasswordInput from '../../UI/passwordInput.vue'
import BaseImg from '../components/Baseimage/BaseImg.vue'
import authlayout from '../layouts/authlayout.vue'
import ParticlesJs from '../shared/@spk/reuseble-plugin/particles-js.vue'

defineOptions({
  layout: authlayout,
})

const baseUrl = __BASE_PATH__
const { proxy } = getCurrentInstance()
const page = usePage()

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

const theme = localStorage.getItem('vyzorcolortheme') || 'light'

function register() {
  form.post('/register', {
    preserveScroll: true,
    onSuccess: () => {
      proxy.$toast.success('Account created successfully!', {
        theme,
        icon: true,
        hideProgressBar: false,
        autoClose: 2000,
        position: 'top-right',
      })
    },
    onError: errors => {
      const errorMessage = errors.name || errors.email || errors.password || 'Registration failed'
      proxy.$toast.error(errorMessage, {
        theme,
        icon: true,
        hideProgressBar: false,
        autoClose: 3000,
        position: 'top-right',
      })
    },
  })
}

onMounted(() => {
  const setBodyClass = (action) => {
    if (action === 'add') {
      document.body.classList.add('authentication-background')
      document.body.style.display = 'block'
    }
    else {
      document.body.classList.remove('authentication-background')
      document.body.style.display = 'none'
    }
  }

  setBodyClass('add')

  const handleBeforeUnload = () => {
    setBodyClass('remove')
  }
  window.addEventListener('beforeunload', handleBeforeUnload)

  onUnmounted(() => {
    setBodyClass('remove')
    document.body.removeAttribute('style')
    window.removeEventListener('beforeunload', handleBeforeUnload)
  })
})
</script>

<template>
  <Head title="Sign Up" />
  <div class="authentication-basic-background">
    <BaseImg src="/images/media/backgrounds/9.png" alt="" />
  </div>
  <ParticlesJs />
  <div class="container">
    <div
      class="row justify-content-center align-items-center authentication authentication-basic h-100"
    >
      <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-sm-8 col-12">
        <div class="card custom-card border-0 my-4">
          <div class="card-body p-sm-5">
            <div class="mb-4">
              <Link :href="`${baseUrl}/`">
                <BaseImg
                  src="/images/brand-logos/toggle-logo.png"
                  alt="logo"
                  class="desktop-dark"
                />
              </Link>
            </div>
            <div>
              <h4 class="mb-1 fw-semibold">
                Sign Up
              </h4>
              <p class="mb-4 text-muted fw-normal">
                Join us by creating a free account!
              </p>
            </div>
            <form @submit.prevent="register">
              <div class="row gy-3">
                <div class="col-xl-12">
                  <label for="signup-name" class="form-label text-default">Full Name</label>
                  <input
                    id="signup-name"
                    v-model="form.name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.name }"
                    placeholder="Enter Full Name"
                  >
                  <div v-if="form.errors.name" class="invalid-feedback">
                    {{ form.errors.name }}
                  </div>
                </div>
                <div class="col-xl-12">
                  <label for="signup-email" class="form-label text-default">Email</label>
                  <input
                    id="signup-email"
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.email }"
                    placeholder="Enter Email"
                  >
                  <div v-if="form.errors.email" class="invalid-feedback">
                    {{ form.errors.email }}
                  </div>
                </div>
                <div class="col-xl-12">
                  <label for="signup-password" class="form-label text-default d-block">Password</label>
                  <div class="position-relative">
                    <PasswordInput
                      id="signup-password"
                      v-model="form.password"
                      name="password"
                      placeholder="Password"
                      :class="{ 'is-invalid': form.errors.password }"
                      required
                    />
                    <div v-if="form.errors.password" class="invalid-feedback d-block">
                      {{ form.errors.password }}
                    </div>
                  </div>
                </div>
                <div class="col-xl-12 mb-2">
                  <label for="signup-password-confirm" class="form-label text-default d-block">Confirm Password</label>
                  <div class="position-relative">
                    <PasswordInput
                      id="signup-password-confirm"
                      v-model="form.password_confirmation"
                      name="password_confirmation"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="d-grid mt-3">
                <button type="submit" class="btn btn-primary" :disabled="form.processing">
                  <span v-if="form.processing">
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Creating account...
                  </span>
                  <span v-else>Sign Up</span>
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
              Already have an account?
              <Link
                :href="`${baseUrl}/login`"
                class="text-primary"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
