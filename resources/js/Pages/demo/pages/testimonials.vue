<script setup>
import SwiperjsCardComponent from '@/shared/@spk/swiperjs-cards.vue'
import * as TestimonialData from '@/shared/data/pages/testimonialsdata'
import Pageheader from '@/components/pageheader/pageheader.vue'
import TestimonialsStyles1 from '@/shared/@spk/pages/testimonials/TestimonialsStyles1.vue'
import TestimonialsStyles2 from '@/shared/@spk/pages/testimonials/TestimonialsStyles2.vue'
import TestimonialsStyles3 from '@/shared/@spk/pages/testimonials/TestimonialsStyles3.vue'
import TestimonialsStyles4 from '@/shared/@spk/pages/testimonials/TestimonialsStyles4.vue'
import { reactive } from 'vue'
import { Head } from '@inertiajs/vue3'

const dataToPass = reactive({
  title: 'Pages',
  currentpage: 'Testimonials',
  activepage: 'Testimonials',
})

const breakpoints = reactive({
  320: { slidesPerView: 1, spaceBetween: 5 },
  640: { slidesPerView: 1, spaceBetween: 5 },
  768: { slidesPerView: 1, spaceBetween: 5 },
  1024: { slidesPerView: 3, spaceBetween: 20 },
})

const breakpoints1 = reactive({
  320: { slidesPerView: 1, spaceBetween: 10 },
  640: { slidesPerView: 1, spaceBetween: 20 },
  768: { slidesPerView: 1, spaceBetween: 20 },
  1200: { slidesPerView: 2, spaceBetween: 20 },
  1400: { slidesPerView: 3, spaceBetween: 20 },
})

const breakpoints2 = reactive({
  320: { slidesPerView: 1, spaceBetween: 10 },
  480: { slidesPerView: 1, spaceBetween: 10 },
  1112: { slidesPerView: 2, spaceBetween: 10 },
  1300: { slidesPerView: 4, spaceBetween: 30 },
})

const breakpoints3 = reactive({
  320: { slidesPerView: 1, spaceBetween: 10 },
  480: { slidesPerView: 1, spaceBetween: 10 },
  1112: { slidesPerView: 1, spaceBetween: 10 },
  1300: { slidesPerView: 3, spaceBetween: 30 },
})
</script>

<template>
  <Head title="Testimonials | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row gy-5">
    <div class="col-xl-12">
      <div class="testimonials-heading-section text-center mb-5">
        <span class="badge bg-primary-transparent rounded-pill"> Testimonials Style 1 </span>
        <h2 class="fw-semibold mt-2 mb-1">What Our Clients Say</h2>
        <span class="d-block text-muted fs-16 mb-3"
          >Real feedback from customers who trust our services.</span
        >
      </div>
      <SwiperjsCardComponent
        :swiperItems="TestimonialData.Reviews"
        swiperClass="swiper testimonialSwiperService1 testimonial-style1"
        :slidesPerView="3"
        :spaceBetween="20"
        :breakpoints="breakpoints"
        :pagination="false"
        :navigation="false"
        :autoplay="true"
      >
        <template #default="{ card }">
          <TestimonialsStyles1 :card="card" height="25px" width="120px" />
        </template>
      </SwiperjsCardComponent>
    </div>
    <div class="col-xl-12">
      <div class="testimonials-heading-section text-center mb-5">
        <span class="badge bg-primary-transparent rounded-pill"> Testimonials Style 2 </span>
        <h2 class="fw-semibold mt-2 mb-1">Customer Testimonials</h2>
        <span class="d-block text-muted fs-16 mb-3"
          >Hear how we've made a difference in our clients’ lives.</span
        >
      </div>
      <SwiperjsCardComponent
        :swiperItems="TestimonialData.CustomReviews"
        swiperClass="swiper pagination-dynamic testimonialSwiperService testimonials-swiper-2"
        :slidesPerView="3"
        :spaceBetween="20"
        :breakpoints="breakpoints1"
        :pagination="false"
        :navigation="false"
        :autoplay="true"
      >
        <template #default="{ card }">
          <TestimonialsStyles2 :card="card" height="25px" width="120px" />
        </template>
      </SwiperjsCardComponent>
    </div>
    <div class="col-xl-12">
      <div class="testimonials-heading-section text-center mb-5">
        <span class="badge bg-primary-transparent rounded-pill"> Testimonials Style 3 </span>
        <h2 class="fw-semibold mt-2 mb-1">Client Feedback</h2>
        <span class="d-block text-muted fs-16 mb-3"
          >Discover why our clients choose us time and again.</span
        >
      </div>
      <SwiperjsCardComponent
        :swiperItems="TestimonialData.Testimonials3"
        swiperClass="swiper testimonialSwiper3"
        :slidesPerView="4"
        :spaceBetween="20"
        :breakpoints="breakpoints2"
        :pagination="false"
        :navigation="false"
        :autoplay="true"
      >
        <template #default="{ card }">
          <TestimonialsStyles3 :card="card" height="25px" width="120px" />
        </template>
      </SwiperjsCardComponent>
    </div>
    <div class="col-xl-12">
      <div class="testimonials-heading-section text-center mb-5">
        <span class="badge bg-primary-transparent rounded-pill"> Testimonials Style 4 </span>
        <h2 class="fw-semibold mt-2 mb-1">Real Stories from Real Clients</h2>
        <span class="d-block text-muted fs-16 mb-3"
          >Authentic testimonials from customers sharing their success.</span
        >
      </div>
      <SwiperjsCardComponent
        :swiperItems="TestimonialData.Testimonialsdata"
        swiperClass="swiper testimonialSwiper1 testimonial-style4"
        :slidesPerView="3"
        :spaceBetween="20"
        :breakpoints="breakpoints3"
        :pagination="false"
        :navigation="false"
        :autoplay="true"
      >
        <template #default="{ card }">
          <TestimonialsStyles4 :card="card" height="25px" width="120px" />
        </template>
      </SwiperjsCardComponent>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
