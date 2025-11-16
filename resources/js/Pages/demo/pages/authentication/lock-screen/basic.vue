<script setup>
import { Head, Link, router } from '@inertiajs/vue3'
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import authlayout from '@/layouts/authlayout.vue'

defineOptions({
  layout: authlayout,
})

const baseUrl = __BASE_PATH__

const formData = reactive({
  password: '',
})

const formErrors = reactive({})

const passwordVisibility = reactive({
  password: false,
  passwords: false, // not used in this example, remove if unnecessary
})

const matched = ref('')

function clearError(field) {
  formErrors[field] = ''
}

function togglePasswordVisibility(field) {
  passwordVisibility[field] = !passwordVisibility[field]
}

function validate() {
  const errors = {}
  if (!formData.password || formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
  }

  // Copy errors into reactive formErrors
  Object.keys(formErrors).forEach(key => delete formErrors[key])
  Object.assign(formErrors, errors)

  return Object.keys(errors).length === 0
}

function handleSubmit() {
  if (validate()) {
    router.visit(`${baseUrl}/demo/dashboards/sales`) // Replace with your actual route
    matched.value = 'Save Password successful'
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
  <Head title="Basic Lock-Screen | Vyzor - Laravel & Vue " />
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
              <p class="h4 mb-2 fw-semibold">
                Hello Tom Phillip
              </p>
              <p class="mb-3 text-muted fw-normal">
                Welcome Back
              </p>
              <div class="d-flex gap-2 align-items-center mb-3">
                <div class="lh-1">
                  <span class="avatar avatar-sm avatar-rounded">
                    <BaseImg src="/images/faces/12.jpg" alt="" />
                  </span>
                </div>
                <div>
                  <p class="mb-0 text-dark fw-medium">
                    tomphillip32@gmail.com
                  </p>
                </div>
              </div>
              <form @submit.prevent="handleSubmit">
                <div class="row gy-3">
                  <div class="col-xl-12 mb-2">
                    <label for="password" class="form-label text-default">Password</label>
                    <div class="position-relative">
                      <input
                        id="password"
                        v-model="formData.password"
                        :type="passwordVisibility.password ? 'text' : 'password'"
                        class="form-control form-control-lg"
                        placeholder="password"
                        autocomplete="new-password"
                        @input="clearError('password')"
                      >

                      <a
                        id="button-addon2"
                        href="#!"
                        class="show-password-button text-muted"
                        @click.prevent="togglePasswordVisibility('password')"
                      >
                        <i
                          :class="`align-middle ${passwordVisibility.password ? 'ri-eye-line' : 'ri-eye-off-line'}`"
                        />
                      </a>
                    </div>

                    <p v-if="formErrors.password" class="text-danger text-xs mt-1 mb-0">
                      {{ formErrors.password }}
                    </p>

                    <p v-if="matched" class="text-success text-xs mt-1">
                      {{ matched }}
                    </p>
                  </div>

                  <div class="col-xl-12 d-grid mt-2">
                    <button type="submit" class="btn btn-lg btn-primary">
                      Unlock
                    </button>
                  </div>
                </div>
              </form>
              <div class="text-center">
                <p class="fw-medium mt-3 mb-0">
                  Try unlock with
                  <a class="text-success" href="javascript:void(0);"><u>Finger print</u></a> /
                  <a class="text-success" href="javascript:void(0);"><u>Face Id</u></a>
                </p>
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
