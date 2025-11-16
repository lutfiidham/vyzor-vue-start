<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import { Terms } from '@/shared/data/pages/termsconditionsdata'

const dataToPass = {
  title: 'Pages',
  currentpage: 'Terms & Conditions',
  activepage: 'Terms & Conditions',
}
</script>

<template>
  <Head title="terms-Conditions | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row justify-content-center">
    <div class="col-xl-8">
      <div class="card custom-card overflow-hidden">
        <div class="card-body p-5">
          <div class="mb-4">
            <h2 class="fw-semibold mb-1">
              Terms & Conditions
            </h2>
            <span class="d-block fw-medium text-gradient">Last Updated - 21,May 2024</span>
          </div>
          <div class="p-3 rounded terms_conditions_welcome mb-4">
            <h5 class="fw-semibold mb-2 text-fixed-black">
              Hey There,Welcome to Spruko &#9996;
            </h5>
            <span class="text-fixed-black">By accessing and using this application, you agree to comply with these Terms and
              Conditions,The application reserves the right to update or modify these terms at any
              time.</span>
          </div>
          <ul class="terms-list list-unstyled mb-0">
            <li v-for="idx in Terms" :key="idx.id">
              <h6 class="fw-semibold">
                {{ idx.title }}
              </h6>
              {{ idx.content }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
