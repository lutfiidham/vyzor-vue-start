<script setup>
import { useAuthStore } from '../../stores/auth'
import { getCurrentInstance, onMounted, onUnmounted, ref } from 'vue'
import PasswordInput from '../../UI/passwordInput.vue'
import ParticlesJs from '../shared/@spk/reuseble-plugin/particles-js.vue'
import BaseImg from '../components/Baseimage/BaseImg.vue'
import authlayout from '../layouts/authlayout.vue'
import { Link, router } from '@inertiajs/vue3'
import { Head } from '@inertiajs/vue3' // For Vue 3
const baseUrl = __BASE_PATH__
const { authenticateUser } = useAuthStore() // use authenticateUser action from  auth store

defineOptions({
  layout: authlayout,
})

const user = ref({
  username: 'spruko',
  password: 'spruko1234',
})
const { proxy } = getCurrentInstance()

const theme = localStorage.getItem('vyzorcolortheme')
const login = async () => {
  let data = await authenticateUser(user.value) // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  if (data.authenticated) {
    router.visit(`${baseUrl}/dashboards/sales`)
    proxy.$toast.success('Login Successful!', {
      theme: theme,
      icon: true,
      hideProgressBar: false,
      autoClose: 55555000,
      position: 'top-right',
    })
  } else {
    proxy.$toast.error('Invalid credentials', {
      theme: theme,
      icon: true,
      hideProgressBar: false,
      autoClose: 2000,
      position: 'top-right',
    })
  }
}

onMounted(() => {
  const setBodyClass = (action) => {
    if (action === 'add') {
      document.body.classList.add('authentication-background')
      document.body.style.display = 'block'
    } else {
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
  <Head title="Login | Vyzor - Laravel & Vue " />
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
              <Link :href="`${baseUrl}/dashboards/sales`">
                <BaseImg
                  src="/images/brand-logos/toggle-logo.png"
                  alt="logo"
                  class="desktop-dark"
                />
              </Link>
            </div>
            <div>
              <h4 class="mb-1 fw-semibold">Hi,Welcome back!</h4>
              <p class="mb-4 text-muted fw-normal">Please enter your credentials</p>
            </div>
            <div class="row gy-3">
              <div class="col-xl-12">
                <label for="signin-email" class="form-label text-default">Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="signin-email"
                  v-model="user.username"
                  placeholder="Enter Email"
                />
              </div>
              <div class="col-xl-12 mb-2">
                <label for="signin-password" class="form-label text-default d-block"
                  >Password</label
                >
                <div class="position-relative">
                  <PasswordInput
                    :initialValue="user.password"
                    name="psw"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="mt-2">
                  <div class="form-check d-flex gap-2 flex-wrap">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                      checked
                    />
                    <label class="form-check-label flex-grow-1" for="defaultCheck1">
                      Remember me
                    </label>
                    <Link
                      :href="`${baseUrl}/pages/authentication/reset-password/basic`"
                      class="float-end link-danger fw-medium fs-12"
                      >Forget password ?</Link
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="d-grid mt-3">
              <Link href="/" class="btn btn-primary" @click.prevent="login">Sign In</Link>
            </div>
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
              <Link :href="`${baseUrl}/pages/authentication/sign-up/basic`" class="text-primary"
                >Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
