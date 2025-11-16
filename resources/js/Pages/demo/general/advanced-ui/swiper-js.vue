<script setup>
import { Head } from '@inertiajs/vue3'
import {
  Autoplay,
  EffectCoverflow,
  EffectCube,
  EffectFade,
  EffectFlip,
  FreeMode,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SimpleCard from '@/shared/@spk/simple-card.vue'
import * as swiperData from '@/shared/data/swiper'
import 'swiper/swiper-bundle.css'

const thumbsSwiper = ref(null)

function setThumbsSwiper(swiper) {
  thumbsSwiper.value = swiper
}

const pagination = {
  clickable: true,
}
const custompagination = {
  clickable: true,
  renderBullet(index, className) {
    return `<span class="${className}">${index + 1}</span>`
  },
}
const modules = [
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  Mousewheel,
  Keyboard,
  EffectCube,
  EffectFade,
  EffectCoverflow,
  EffectFlip,
  FreeMode,
  Thumbs,
]
const dataToPass = {
  title: 'Advanced Ui',
  currentpage: 'Swiper',
  activepage: 'Swiper',
}
</script>

<template>
  <Head title="Swiper | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Basic Swiper">
        <Swiper :autoplay="true" class="">
          <SwiperSlide v-for="(idx, index) in swiperData.Basicdata" :key="index">
            <BaseImg :src="idx.src" alt="" />
          </SwiperSlide>
        </Swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Swiper With Navigation">
        <Swiper :autoplay="true" :navigation="true" :modules="modules" class="">
          <SwiperSlide v-for="(idx, index) in swiperData.Navigationdata" :key="index">
            <BaseImg :src="idx" alt="" />
          </SwiperSlide>
        </Swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Swiper with Pagination">
        <Swiper :autoplay="true" class="" :pagination="pagination" :modules="modules">
          <SwiperSlide v-for="(idx, index) in swiperData.Paginationdata" :key="index">
            <BaseImg :src="idx" alt="" />
          </SwiperSlide>
        </Swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Dynamic Pagination">
        <Swiper
          :autoplay="true"
          class=""
          :pagination="{
            dynamicBullets: true,
          }"
          :modules="modules"
        >
          <SwiperSlide v-for="(idx, index) in swiperData.Dynamicdata" :key="index">
            <BaseImg :src="idx" alt="" />
          </SwiperSlide>
        </Swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Pagination With Progress">
        <Swiper
          :autoplay="true"
          class=""
          :pagination="{
            type: 'progressbar',
          }"
          :navigation="true"
          :modules="modules"
        >
          <SwiperSlide v-for="(idx, index) in swiperData.Progressdata" :key="index">
            <BaseImg :src="idx" alt="" />
          </SwiperSlide>
        </Swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Pagination Fraction">
        <Swiper
          :autoplay="true"
          class="pagination-fraction"
          :pagination="{
            type: 'fraction',
          }"
          :navigation="true"
          :modules="modules"
        >
          <SwiperSlide v-for="(idx, index) in swiperData.FractionData" :key="index">
            <BaseImg :src="idx" alt="" />
          </SwiperSlide>
        </Swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Custom Paginatioin">
        <Swiper
          :autoplay="true"
          class="custom-pagination"
          :pagination="custompagination"
          :modules="modules"
        >
          <SwiperSlide v-for="(idx, index) in swiperData.CustomPaginatioin" :key="index">
            <BaseImg :src="idx" alt="" />
          </SwiperSlide>
        </Swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Scrollbar Swiper">
        <Swiper
          :autoplay="true"
          class=""
          :scrollbar="{
            hide: true,
          }"
          :modules="modules"
        >
          <SwiperSlide v-for="(idx, index) in swiperData.ScrollbarSwiper" :key="index">
            <BaseImg :src="idx" alt="" />
          </SwiperSlide>
        </Swiper>
      </SimpleCard>
    </div>
    <!-- <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <SimpleCard title="Vertical Swiper">
            <swiper :autoplay="true" class="" :pagination="{
                        clickable: true,
                    }" :modules="modules" :direction="'vertical'">
                <swiper-slide v-for="(idx, index) in swiperData.VerticalSwiper" :key="index">
                    <BaseImg :src="idx" alt="">
                </swiper-slide>
            </swiper>
        </SimpleCard>
    </div> -->
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Mouse Wheel Control">
        <Swiper
          :autoplay="true"
          class=""
          :slides-per-view="1"
          :space-between="30"
          :mousewheel="true"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
        >
          <SwiperSlide v-for="(idx, index) in swiperData.MouseWheelControl" :key="index">
            <BaseImg :src="idx" alt="" />
          </SwiperSlide>
        </Swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Keyboard Control">
        <Swiper
          :autoplay="true"
          class=""
          :slides-per-view="1"
          :space-between="30"
          :keyboard="{
            enabled: true,
          }"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          :modules="modules"
        >
          <SwiperSlide v-for="(idx, index) in swiperData.KeyboardControl" :key="index">
            <BaseImg :src="idx" alt="" />
          </SwiperSlide>
        </Swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Nested Swiper">
        <Swiper
          :autoplay="true"
          class="nested-swiper"
          :slides-per-view="1"
          :space-between="30"
          :keyboard="{ enabled: true }"
          :pagination="{ clickable: true }"
          :navigation="true"
          :modules="modules"
        >
          <SwiperSlide>
            <BaseImg src="/images/media/media-30.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Swiper
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              class="mySwiper2 swiper-v swiper vertical"
              :space-between="50"
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              direction="vertical"
            >
              <SwiperSlide><BaseImg src="/images/media/media-25.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><BaseImg src="/images/media/media-31.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><BaseImg src="/images/media/media-32.jpg" alt="" /></SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <BaseImg src="/images/media/media-28.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <BaseImg src="/images/media/media-29.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Effect Cube">
        <Swiper
          :autoplay="true"
          class=""
          effect="cube"
          :grab-cursor="true"
          :cube-effect="{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }"
          :pagination="pagination"
          :modules="modules"
        >
          <SwiperSlide v-for="(idx, index) in swiperData.EffectCube" :key="index">
            <BaseImg :src="idx" alt="" />
          </SwiperSlide>
        </Swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Effect Fade">
        <Swiper
          :autoplay="true"
          class=""
          :space-between="30"
          effect="fade"
          :navigation="true"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
        >
          <SwiperSlide v-for="(idx, index) in swiperData.EffectFade" :key="index">
            <BaseImg :src="idx" alt="" />
          </SwiperSlide>
        </Swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Effect Flip">
        <Swiper
          :autoplay="true"
          class=""
          effect="flip"
          :grab-cursor="true"
          :pagination="pagination"
          :navigation="true"
          :modules="modules"
        >
          <SwiperSlide v-for="(idx, index) in swiperData.EffectFlip" :key="index">
            <BaseImg :src="idx" alt="" />
          </SwiperSlide>
        </Swiper>
      </SimpleCard>
    </div>
  </div>
  <!-- End::row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <SimpleCard title="Effect Coverflow">
        <Swiper
          :autoplay="true"
          class="swiper-overflow"
          effect="coverflow"
          :grab-cursor="true"
          :centered-slides="false"
          :auto-height="true"
          :slides-per-view="4"
          :coverflow-effect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }"
          :pagination="pagination"
          :modules="modules"
        >
          <SwiperSlide v-for="(idx, index) in swiperData.coverFlow" :key="index" height="100px">
            <BaseImg class="img-fluid" :src="idx" alt="" />
          </SwiperSlide>
        </Swiper>
      </SimpleCard>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-12">
      <SimpleCard title="Thumbs Gallery">
        <Swiper
          :autoplay="true"
          :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }"
          :space-between="10"
          :navigation="true"
          :thumbs="{ swiper: thumbsSwiper }"
          :loop="true"
          :modules="modules"
          class="mySwiper2"
        >
          <SwiperSlide>
            <BaseImg class="img-fluid rounded" src="/images/media/media-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <BaseImg class="img-fluid rounded" src="/images/media/media-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <BaseImg class="img-fluid rounded" src="/images/media/media-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <BaseImg class="img-fluid rounded" src="/images/media/media-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <BaseImg class="img-fluid rounded" src="/images/media/media-10.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <BaseImg class="img-fluid rounded" src="/images/media/media-11.jpg" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          :autoplay="true"
          :space-between="10"
          :loop="true"
          :slides-per-view="4"
          :free-mode="true"
          :watch-slides-progress="true"
          :modules="modules"
          class="mySwiper custom-swiper mt-2"
          @swiper="setThumbsSwiper"
        >
          <SwiperSlide><BaseImg class="img-fluid" src="/images/media/media-1.jpg" /></SwiperSlide>
          <SwiperSlide><BaseImg class="img-fluid" src="/images/media/media-2.jpg" /></SwiperSlide>
          <SwiperSlide><BaseImg class="img-fluid" src="/images/media/media-6.jpg" /></SwiperSlide>
          <SwiperSlide><BaseImg class="img-fluid" src="/images/media/media-7.jpg" /></SwiperSlide>
          <SwiperSlide>
            <BaseImg class="img-fluid" src="/images/media/media-10.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <BaseImg class="img-fluid" src="/images/media/media-11.jpg" />
          </SwiperSlide>
        </Swiper>
      </SimpleCard>
    </div>
  </div>
  <!-- End:: row-3 -->
</template>

<style scoped>
/* Add your styles here */
</style>
