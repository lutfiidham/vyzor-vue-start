<script setup>
import { Head, Link, useForm, usePage } from '@inertiajs/vue3'
import { getCurrentInstance, onMounted, onUnmounted, ref } from 'vue'
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
  username: '',
  password: '',
  remember: false,
})

const theme = localStorage.getItem('vyzorcolortheme') || 'light'
const showForgotPasswordModal = ref(false)

function login() {
  form.post('/login', {
    preserveScroll: true,
    onSuccess: () => {
      proxy.$toast.success('Welcome back!', {
        theme,
        icon: true,
        hideProgressBar: false,
        autoClose: 2000,
        position: 'top-right',
      })
    },
    onError: errors => {
      const errorMessage = errors.username || errors.password || 'Invalid credentials'
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

function openForgotPasswordModal() {
  showForgotPasswordModal.value = true
}

function closeForgotPasswordModal() {
  showForgotPasswordModal.value = false
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

  // Clean up display on browser unload
  const handleBeforeUnload = () => {
    setBodyClass('remove')
  }
  window.addEventListener('beforeunload', handleBeforeUnload)

  // Remove listener and clean body style on unmount
  onUnmounted(() => {
    setBodyClass('remove')
    document.body.removeAttribute('style') // <== this removes the whole style attribute
    window.removeEventListener('beforeunload', handleBeforeUnload)
  })
})
</script>

<template>
  <Head title="Login" />
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
            <form @submit.prevent="login">
              <div class="row gy-3">
                <div class="col-xl-12">
                  <label for="signin-email" class="form-label text-default">Username or Email</label>
                  <input
                    id="signin-email"
                    v-model="form.username"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.username }"
                    placeholder="Enter Username or Email"
                  >
                  <div v-if="form.errors.username" class="invalid-feedback">
                    {{ form.errors.username }}
                  </div>
                </div>
                <div class="col-xl-12 mb-2">
                  <label for="signin-password" class="form-label text-default d-block">Password</label>
                  <div class="position-relative">
                    <PasswordInput
                      id="password"
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
                  <div class="mt-2">
                    <div class="form-check d-flex gap-2 flex-wrap">
                      <button
                        type="button"
                        @click="openForgotPasswordModal"
                        class="float-end link-danger fw-medium fs-12 border-0 bg-transparent p-0"
                      >
                        Forget password ?
                      </button>
                    </div>
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
                    Signing in...
                  </span>
                  <span v-else>Sign In</span>
                </button>
              </div>
            </form>
            <div class="text-center mt-3 fw-medium">
              Dont have an account?
              <Link
                :href="`${baseUrl}/register`"
                class="text-primary"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Forgot Password Modal -->
  <div
    v-if="showForgotPasswordModal"
    class="modal fade show d-block"
    tabindex="-1"
    style="background-color: rgba(0, 0, 0, 0.5)"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Forgot Password
          </h5>
          <button
            type="button"
            class="btn-close"
            @click="closeForgotPasswordModal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <div class="text-center mb-4">
            <i class="ti ti-lock fs-1 text-primary mb-3" />
            <h6>Hubungi Administrator</h6>
            <p class="text-muted">
              Untuk reset password, silakan hubungi administrator sistem melalui:
            </p>
          </div>
          <div class="contact-info bg-light p-3 rounded mb-3">
            <div class="d-flex align-items-center mb-2">
              <i class="ti ti-mail me-2 text-primary" />
              <strong>Email:</strong> support@vyzor.test
            </div>
            <div class="d-flex align-items-center">
              <i class="ti ti-phone me-2 text-primary" />
              <strong>Phone:</strong> +62 XXX-XXXX-XXXX
            </div>
          </div>
          <p class="text-muted small mb-0">
            Administrator akan membantu Anda melakukan reset password dengan aman.
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="closeForgotPasswordModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
