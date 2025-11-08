<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import BaseImg from '../../../components/Baseimage/BaseImg.vue'
import { Head, Link } from '@inertiajs/vue3'
import authlayout from '@/layouts/authlayout.vue'
import ParticlesJs from '../../../shared/@spk/reuseble-plugin/particles-js.vue'

const baseUrl = __BASE_PATH__

defineOptions({
  layout: authlayout,
})

const setBodyClass = (action) => {
  if (action === 'add') {
    document.body.classList.add('coming-soon-main')
    document.body.style.display = 'block'
  } else {
    document.body.classList.remove('coming-soon-main')
    document.body.style.display = 'none'
  }
}

onMounted(() => {
  // const router = useRouter();

  // Check if the user has visited before
  if (localStorage.getItem('visited') === 'true') {
    setBodyClass('add')
  } else {
    setBodyClass('add')
    localStorage.setItem('visited', 'true')
  }

  // Listen for route changes to remove class on navigation

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
  <Head title="Coming-Soon | Vyzor - Laravel & Vue " />
  <div class="coming-soon-background">
    <BaseImg src="/images/media/backgrounds/9.png" alt="" />
  </div>
  <ParticlesJs />
  <div class="row authentication coming-soon g-0 my-4 justify-content-center">
    <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-7 col-11 my-auto">
      <div class="authentication-cover text-center">
        <div class="authentication-cover-content">
          <div class="row justify-content-center align-items-center mx-0 g-0">
            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
              <div>
                <div class="mb-3">
                  <Link :href="`${baseUrl}/demo/dashboards/sales`">
                    <BaseImg
                      src="/images/brand-logos/desktop-logo.png"
                      alt=""
                      class="authentication-brand"
                    />
                    <BaseImg
                      src="/images/brand-logos/desktop-dark.png"
                      alt=""
                      class="authentication-brand dark"
                    />
                  </Link>
                </div>
                <h1 class="mb-0">Coming Soon</h1>
                <div
                  class="d-flex gap-5 flex-wrap gy-xxl-0 gy-3 justify-content-center my-4 rounded p-4 timer-container"
                  id="timer"
                >
                  <Countdown />
                </div>
                <p class="mb-4 fs-18">
                  Big things are coming your way! We're putting the final touches <br />
                  on something amazing. Stay tuned!
                </p>
                <div class="input-group">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="info@gmail.com"
                    aria-label="info@gmail.com"
                    aria-describedby="button-addon2"
                  />
                  <button class="btn btn-primary btn-lg" type="button" id="button-addon2">
                    Subscribe
                  </button>
                </div>
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
