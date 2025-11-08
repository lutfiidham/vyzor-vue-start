<script setup>
import * as prism from '@/shared/data/prismCode/advancedUi/carousel'
import 'vue3-carousel/carousel.css'
import Pageheader from '@/components/pageheader/pageheader.vue'
import ShowcodeCard from '../../../../../UI/showcodeCard.vue'

import { defineAsyncComponent, ref } from 'vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'

const Carousel = defineAsyncComponent(() => import('vue3-carousel').then((m) => m.Carousel))
const Slide = defineAsyncComponent(() => import('vue3-carousel').then((m) => m.Slide))
const Navigation = defineAsyncComponent(() => import('vue3-carousel').then((m) => m.Navigation))
const Pagination = defineAsyncComponent(() => import('vue3-carousel').then((m) => m.Pagination))

const carouselConfig = {
  itemsToShow: 1,
  autoplay: 5000,
  wrapAround: true,
}
const carouselRef = ref()
const currentSlide = ref(1)

const next = () => carouselRef.value.next()
const prev = () => carouselRef.value.prev()
const dataToPass = {
  title: 'Advanced Ui',
  currentpage: 'Carousel',
  activepage: 'Carousel',
}
</script>

<template>
  <Head title="Carousel | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard :code="prism.slidesOnly" title="Slides Only">
        <Carousel v-bind="carouselConfig" id="carouselExampleSlidesOnly">
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-26.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-27.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-33.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
        </Carousel>
      </ShowcodeCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard :code="prism.withControls" title="With controls">
        <Carousel v-bind="carouselConfig" id="carouselExampleControls">
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-28.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-31.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-32.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </ShowcodeCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard :code="prism.withIndicators" title="With indicators">
        <Carousel v-bind="carouselConfig" id="carouselExampleIndicators">
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-25.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-29.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-30.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </ShowcodeCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard :code="prism.withCaptions" title="With captions">
        <Carousel v-bind="carouselConfig" id="carouselExampleCaptions">
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-59.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5 class="text-fixed-white">First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-60.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5 class="text-fixed-white">Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-61.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5 class="text-fixed-white">Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </ShowcodeCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard :code="prism.crossfade" title="Crossfade">
        <Carousel
          v-bind="{ slideEffect: 'fade', autoplay: 5000, wrapAround: true }"
          id="carouselExampleCaptions"
        >
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-43.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-44.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-45.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </ShowcodeCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard
        :code="prism.individualCarouselItemInterval"
        title="Individual .carousel-item interval"
      >
        <Carousel v-bind="carouselConfig" id="carouselExampleCaptions">
          <Slide v-bind="{}">
            <div class="carousel__item">
              <BaseImg src="/images/media/media-40.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-41.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-42.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </ShowcodeCard>
    </div>
    <div class="col-xxl-4 col-md-6">
      <ShowcodeCard :code="prism.disableTouchSwiping" title="Disable touch swiping">
        <div
          id="carouselExampleControlsNoTouching"
          class="carousel slide"
          data-bs-touch="false"
          data-bs-interval="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <BaseImg src="/images/media/media-13.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <BaseImg src="/images/media/media-14.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <BaseImg src="/images/media/media-18.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xxl-4 col-md-6">
      <ShowcodeCard :code="prism.darkVariant" title="Dark variant">
        <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <BaseImg src="/images/media/media-63.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5 class="text-fixed-white">First slide label</h5>
                <p class="op-7">Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <BaseImg src="/images/media/media-64.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5 class="text-fixed-white">Second slide label</h5>
                <p class="op-7">Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <BaseImg src="/images/media/media-62.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5 class="text-fixed-white">Third slide label</h5>
                <p class="op-7">Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xxl-4 col-md-6">
      <ShowcodeCard :code="prism.WrapAround" title="Wrap Around">
        <Carousel
          v-bind="{
            itemsToShow: 1,
            autoplay: 5000,
            wrapAround: true,
            pauseAutoplayOnHover: true,
          }"
          id="carouselExampleCaptions"
        >
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-62.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-63.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-64.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </ShowcodeCard>
    </div>
    <div class="col-xxl-4 col-md-6">
      <ShowcodeCard :code="prism.Vertical" title="Vertical">
        <Carousel
          v-bind="{
            dir: 'ttb',
            height: '314px',
            autoplay: 5000,
            wrapAround: true,
          }"
          id="carouselExampleCaptions"
        >
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-40.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-43.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-42.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </ShowcodeCard>
    </div>
    <div class="col-xxl-4 col-md-6">
      <ShowcodeCard :code="prism.MouseWheel" title="Mouse Wheel">
        <Carousel
          v-bind="{
            mouseWheel: true,
            autoplay: 5000,
            wrapAround: true,
          }"
          id="carouselExampleCaptions"
        >
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-42.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-40.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-44.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </ShowcodeCard>
    </div>
    <div class="col-xxl-4 col-md-6">
      <ShowcodeCard :code="prism.CustomNavigation" title="Custom Navigation">
        <Carousel
          v-bind="{
            autoplay: 5000,
            wrapAround: true,
          }"
          id="carouselExampleCaptions"
          ref="carouselRef"
          v-model="currentSlide"
        >
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-40.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-41.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <Slide>
            <div class="carousel__item">
              <BaseImg src="/images/media/media-42.jpg" class="d-block w-100" alt="..." />
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
        <div class="d-flex align-items-center justify-content-center mt-3 gap-2">
          <button type="button" @click="prev" class="btn btn-primary-light btn-wave">Prev</button>
          <input
            type="text"
            class="form-control w-25 text-center"
            id="input"
            v-model="currentSlide"
          />
          <button type="button" @click="next" class="btn btn-primary-light btn-wave">Next</button>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
