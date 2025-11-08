<script setup>
import Pageheader from '@/components/pageheader/pageheader.vue'
import SimpleCard from '@/shared/@spk/simple-card.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import {
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
} from 'swiper/modules'
import * as swiperData from '@/shared/data/swiper'
import { ref } from 'vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'

const thumbsSwiper = ref(null)

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}

const pagination = {
  clickable: true,
}
const custompagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>'
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
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Basic Swiper">
        <swiper :autoplay="true" class="">
          <swiper-slide v-for="(idx, index) in swiperData.Basicdata" :key="index">
            <BaseImg :src="idx.src" alt="" />
          </swiper-slide>
        </swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Swiper With Navigation">
        <swiper :autoplay="true" :navigation="true" :modules="modules" class="">
          <swiper-slide v-for="(idx, index) in swiperData.Navigationdata" :key="index">
            <BaseImg :src="idx" alt="" />
          </swiper-slide>
        </swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Swiper with Pagination">
        <swiper :autoplay="true" class="" :pagination="pagination" :modules="modules">
          <swiper-slide v-for="(idx, index) in swiperData.Paginationdata" :key="index">
            <BaseImg :src="idx" alt="" />
          </swiper-slide>
        </swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Dynamic Pagination">
        <swiper
          :autoplay="true"
          class=""
          :pagination="{
            dynamicBullets: true,
          }"
          :modules="modules"
        >
          <swiper-slide v-for="(idx, index) in swiperData.Dynamicdata" :key="index">
            <BaseImg :src="idx" alt="" />
          </swiper-slide>
        </swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Pagination With Progress">
        <swiper
          :autoplay="true"
          class=""
          :pagination="{
            type: 'progressbar',
          }"
          :navigation="true"
          :modules="modules"
        >
          <swiper-slide v-for="(idx, index) in swiperData.Progressdata" :key="index">
            <BaseImg :src="idx" alt="" />
          </swiper-slide>
        </swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Pagination Fraction">
        <swiper
          :autoplay="true"
          class="pagination-fraction"
          :pagination="{
            type: 'fraction',
          }"
          :navigation="true"
          :modules="modules"
        >
          <swiper-slide v-for="(idx, index) in swiperData.FractionData" :key="index">
            <BaseImg :src="idx" alt="" />
          </swiper-slide>
        </swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Custom Paginatioin">
        <swiper
          :autoplay="true"
          class="custom-pagination"
          :pagination="custompagination"
          :modules="modules"
        >
          <swiper-slide v-for="(idx, index) in swiperData.CustomPaginatioin" :key="index">
            <BaseImg :src="idx" alt="" />
          </swiper-slide>
        </swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Scrollbar Swiper">
        <swiper
          :autoplay="true"
          class=""
          :scrollbar="{
            hide: true,
          }"
          :modules="modules"
        >
          <swiper-slide v-for="(idx, index) in swiperData.ScrollbarSwiper" :key="index">
            <BaseImg :src="idx" alt="" />
          </swiper-slide>
        </swiper>
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
        <swiper
          :autoplay="true"
          class=""
          :slidesPerView="1"
          :spaceBetween="30"
          :mousewheel="true"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
        >
          <swiper-slide v-for="(idx, index) in swiperData.MouseWheelControl" :key="index">
            <BaseImg :src="idx" alt="" />
          </swiper-slide>
        </swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Keyboard Control">
        <swiper
          :autoplay="true"
          class=""
          :slidesPerView="1"
          :spaceBetween="30"
          :keyboard="{
            enabled: true,
          }"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          :modules="modules"
        >
          <swiper-slide v-for="(idx, index) in swiperData.KeyboardControl" :key="index">
            <BaseImg :src="idx" alt="" />
          </swiper-slide>
        </swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Nested Swiper">
        <swiper
          :autoplay="true"
          class="nested-swiper"
          :slidesPerView="1"
          :spaceBetween="30"
          :keyboard="{ enabled: true }"
          :pagination="{ clickable: true }"
          :navigation="true"
          :modules="modules"
        >
          <swiper-slide>
            <BaseImg src="/images/media/media-30.jpg" alt="" />
          </swiper-slide>
          <swiper-slide>
            <swiper
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              class="mySwiper2 swiper-v swiper vertical"
              :spaceBetween="50"
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              direction="vertical"
            >
              <swiper-slide><BaseImg src="/images/media/media-25.jpg" alt="" /></swiper-slide>
              <swiper-slide><BaseImg src="/images/media/media-31.jpg" alt="" /></swiper-slide>
              <swiper-slide><BaseImg src="/images/media/media-32.jpg" alt="" /></swiper-slide>
            </swiper>
          </swiper-slide>
          <swiper-slide>
            <BaseImg src="/images/media/media-28.jpg" alt="" />
          </swiper-slide>
          <swiper-slide>
            <BaseImg src="/images/media/media-29.jpg" alt="" />
          </swiper-slide>
        </swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Effect Cube">
        <swiper
          :autoplay="true"
          class=""
          :effect="'cube'"
          :grabCursor="true"
          :cubeEffect="{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }"
          :pagination="pagination"
          :modules="modules"
        >
          <swiper-slide v-for="(idx, index) in swiperData.EffectCube" :key="index">
            <BaseImg :src="idx" alt="" />
          </swiper-slide>
        </swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Effect Fade">
        <swiper
          :autoplay="true"
          class=""
          :spaceBetween="30"
          :effect="'fade'"
          :navigation="true"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
        >
          <swiper-slide v-for="(idx, index) in swiperData.EffectFade" :key="index">
            <BaseImg :src="idx" alt="" />
          </swiper-slide>
        </swiper>
      </SimpleCard>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCard title="Effect Flip">
        <swiper
          :autoplay="true"
          class=""
          :effect="'flip'"
          :grabCursor="true"
          :pagination="pagination"
          :navigation="true"
          :modules="modules"
        >
          <swiper-slide v-for="(idx, index) in swiperData.EffectFlip" :key="index">
            <BaseImg :src="idx" alt="" />
          </swiper-slide>
        </swiper>
      </SimpleCard>
    </div>
  </div>
  <!--End::row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <SimpleCard title="Effect Coverflow">
        <swiper
          :autoplay="true"
          class="swiper-overflow"
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="false"
          :autoHeight="true"
          :slidesPerView="4"
          :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }"
          :pagination="pagination"
          :modules="modules"
        >
          <swiper-slide height="100px" v-for="(idx, index) in swiperData.coverFlow" :key="index">
            <BaseImg class="img-fluid" :src="idx" alt="" />
          </swiper-slide>
        </swiper>
      </SimpleCard>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-12">
      <SimpleCard title="Thumbs Gallery">
        <swiper
          :autoplay="true"
          :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }"
          :spaceBetween="10"
          :navigation="true"
          :thumbs="{ swiper: thumbsSwiper }"
          :loop="true"
          :modules="modules"
          class="mySwiper2"
        >
          <swiper-slide
            ><BaseImg class="img-fluid rounded" src="/images/media/media-1.jpg"
          /></swiper-slide>
          <swiper-slide
            ><BaseImg class="img-fluid rounded" src="/images/media/media-2.jpg"
          /></swiper-slide>
          <swiper-slide
            ><BaseImg class="img-fluid rounded" src="/images/media/media-6.jpg"
          /></swiper-slide>
          <swiper-slide
            ><BaseImg class="img-fluid rounded" src="/images/media/media-7.jpg"
          /></swiper-slide>
          <swiper-slide
            ><BaseImg class="img-fluid rounded" src="/images/media/media-10.jpg"
          /></swiper-slide>
          <swiper-slide
            ><BaseImg class="img-fluid rounded" src="/images/media/media-11.jpg"
          /></swiper-slide>
        </swiper>
        <swiper
          :autoplay="true"
          @swiper="setThumbsSwiper"
          :spaceBetween="10"
          :loop="true"
          :slidesPerView="4"
          :freeMode="true"
          :watchSlidesProgress="true"
          :modules="modules"
          class="mySwiper custom-swiper mt-2"
        >
          <swiper-slide><BaseImg class="img-fluid" src="/images/media/media-1.jpg" /></swiper-slide>
          <swiper-slide><BaseImg class="img-fluid" src="/images/media/media-2.jpg" /></swiper-slide>
          <swiper-slide><BaseImg class="img-fluid" src="/images/media/media-6.jpg" /></swiper-slide>
          <swiper-slide><BaseImg class="img-fluid" src="/images/media/media-7.jpg" /></swiper-slide>
          <swiper-slide
            ><BaseImg class="img-fluid" src="/images/media/media-10.jpg"
          /></swiper-slide>
          <swiper-slide
            ><BaseImg class="img-fluid" src="/images/media/media-11.jpg"
          /></swiper-slide>
        </swiper>
      </SimpleCard>
    </div>
  </div>
  <!-- End:: row-3 -->
</template>

<style scoped>
/* Add your styles here */
</style>
