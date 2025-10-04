<script setup>
import BaseImg from '../Baseimage/BaseImg.vue'
</script>

<template>
  <div class="page error-bg">
    <div class="error-page-background">
      <BaseImg src="/images/media/backgrounds/10.svg" alt="" />
    </div>
    <!-- Start::error-page -->
    <div class="row align-items-center justify-content-center h-100 g-0">
      <div class="col-xl-7 col-lg-7 col-md-7 col-12">
        <div class="text-center">
          <div class="text-center mb-5">
            <BaseImg src="/images/media/backgrounds/11.png" alt="" class="w-sm-auto w-100 h-100" />
          </div>
          <span class="d-block fs-4 text-primary fw-semibold">Oops! Something Went Wrong</span>
          <p class="error-text mb-0">404</p>
          <p class="fs-5 fw-normal mb-0">
            There was an issue with the page. Try again <br />
            later or contact support.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
