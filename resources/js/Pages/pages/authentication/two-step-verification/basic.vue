<script setup>
import { nextTick, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import BaseImg from '../../../../components/Baseimage/BaseImg.vue'
import { Head, Link, router } from '@inertiajs/vue3'
import authlayout from '@/layouts/authlayout.vue'
const baseUrl = __BASE_PATH__

defineOptions({
  layout: authlayout,
})

const inputValues = reactive({
  one: '',
  two: '',
  three: '',
  four: '',
})

const error = ref('')
const verify = ref('')

const refs = {
  one: ref(null),
  two: ref(null),
  three: ref(null),
  four: ref(null),
}

const handleChange = (currentId, nextId, value) => {
  // Allow only digits
  if (!/^\d?$/.test(value)) return

  inputValues[currentId] = value

  if (value && nextId) {
    nextTick(() => {
      const nextInput = document.getElementById(nextId)
      if (nextInput) nextInput.focus()
    })
  }
}

const handlePaste = (e) => {
  e.preventDefault()
  const paste = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4)

  if (paste.length === 4) {
    inputValues.one = paste[0]
    inputValues.two = paste[1]
    inputValues.three = paste[2]
    inputValues.four = paste[3]

    refs.four.value.focus()
  }
}

const handleSubmit = () => {
  const { one, two, three, four } = inputValues

  if (!one || !two || !three || !four) {
    error.value = 'All fields are required.'
    verify.value = ''
    return
  }

  const fullOTP = `${one}${two}${three}${four}`

  // Example: Navigate to dashboard on success
  router.visit(`${baseUrl}/dashboards/sales`) // Replace with your basePath if needed

  verify.value = 'Verify Your Account successful'
  error.value = ''

  // TODO: call your backend API with fullOTP here
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
  <Head title="Basic Two-Step-Verification | Vyzor - Laravel & Vue " />
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
                <Link :href="`${baseUrl}/dashboards/sales`">
                  <BaseImg
                    src="/images/brand-logos/toggle-logo.png"
                    alt="logo"
                    class="desktop-dark"
                  />
                </Link>
              </div>
              <p class="h4 mb-2 fw-semibold">Verify Your Account</p>
              <p class="mb-4 text-muted fw-normal">
                Enter the 4 digit code sent to the registered email Id.
              </p>
              <form @submit.prevent="handleSubmit">
                <div class="row gy-3">
                  <div class="col-xl-12 mb-2">
                    <div class="row">
                      <div class="col-3">
                        <input
                          id="one"
                          type="text"
                          maxlength="1"
                          v-model="inputValues.one"
                          @input="handleChange('one', 'two', inputValues.one)"
                          @paste="handlePaste"
                          class="form-control form-control-lg text-center"
                        />
                      </div>
                      <div class="col-3">
                        <input
                          id="two"
                          type="text"
                          maxlength="1"
                          v-model="inputValues.two"
                          @input="handleChange('two', 'three', inputValues.two)"
                          class="form-control form-control-lg text-center"
                        />
                      </div>
                      <div class="col-3">
                        <input
                          id="three"
                          type="text"
                          maxlength="1"
                          v-model="inputValues.three"
                          @input="handleChange('three', 'four', inputValues.three)"
                          class="form-control form-control-lg text-center"
                        />
                      </div>
                      <div class="col-3">
                        <input
                          id="four"
                          type="text"
                          maxlength="1"
                          v-model="inputValues.four"
                          @input="handleChange('four', null, inputValues.four)"
                          class="form-control form-control-lg text-center"
                        />
                      </div>
                    </div>

                    <div class="form-check mt-3">
                      <input class="form-check-input" type="checkbox" id="defaultCheck1" />
                      <label class="form-check-label" for="defaultCheck1">
                        Did not receive a code ?
                        <Link
                          :href="`${baseUrl}/applications/email/mail-app`"
                          class="text-primary ms-2 d-inline-block fw-medium"
                        >
                          Resend
                        </Link>
                      </label>
                    </div>
                  </div>

                  <div class="col-xl-12 d-grid mt-3">
                    <p v-if="error" class="text-danger text-sm text-center mb-2">{{ error }}</p>
                    <p v-if="verify" class="text-success text-sm text-center mb-2">{{ verify }}</p>

                    <button type="submit" class="btn btn-lg btn-primary">Verify</button>
                  </div>
                </div>
              </form>
              <div class="text-center">
                <p class="text-danger mt-3 mb-0 fw-medium">
                  <sup><i class="ri-asterisk"></i></sup>Keep the verification code private!
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
