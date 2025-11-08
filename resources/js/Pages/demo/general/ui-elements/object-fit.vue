<script setup>
import * as prism from '@/shared/data/prismCode/ui-elements/objectfit'
import Pageheader from '@/components/pageheader/pageheader.vue'
import ShowcodeCard from '../../../../../UI/showcodeCard.vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import BaseVideo from '@/components/BaseVideo/BaseVideo.vue'
import { Head } from '@inertiajs/vue3'
const dataToPass = {
  title: 'Ui Elements',
  currentpage: 'Object Fit',
  activepage: 'Object Fit',
}
</script>

<template>
  <Head title="Object-Fit | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard
        title="Object Fit Contain"
        custom-card-body-class="object-fit-container"
        :code="prism.ObjectFitContain"
      >
        <BaseImg
          src="/images/media/media-28.jpg"
          class="object-fit-contain border rounded"
          alt="..."
        />
      </ShowcodeCard>
    </div>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard
        title="Object Fit Cover"
        custom-card-body-class="object-fit-container"
        :code="prism.ObjectFitCover"
      >
        <BaseImg
          src="/images/media/media-28.jpg"
          class="object-fit-cover border rounded"
          alt="..."
        />
      </ShowcodeCard>
    </div>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard
        title="Object Fit Fill"
        custom-card-body-class="object-fit-container"
        :code="prism.ObjectFitFill"
      >
        <BaseImg
          src="/images/media/media-28.jpg"
          class="object-fit-fill border rounded"
          alt="..."
        />
      </ShowcodeCard>
    </div>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard
        title="Object Fit Scale Down"
        custom-card-body-class="object-fit-container"
        :code="prism.ObjectFitScaleDown"
      >
        <BaseImg
          src="/images/media/media-28.jpg"
          class="object-fit-scale border rounded"
          alt="..."
        />
      </ShowcodeCard>
    </div>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard
        title="Object Fit None"
        custom-card-body-class="object-fit-container"
        :code="prism.ObjectFitNone"
      >
        <BaseImg
          src="/images/media/media-28.jpg"
          class="object-fit-none border rounded"
          alt="..."
        />
      </ShowcodeCard>
    </div>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard
        title="Object Fit Contain (SM - responsive)"
        custom-card-body-class="object-fit-container"
        :code="prism.ObjectFitContainSMResponsive"
      >
        <BaseImg
          src="/images/media/media-28.jpg"
          class="object-fit-sm-contain border rounded"
          alt="..."
        />
      </ShowcodeCard>
    </div>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard
        title="Object Fit Contain (MD - responsive)"
        custom-card-body-class="object-fit-container"
        :code="prism.ObjectFitContainMDResponsive"
      >
        <BaseImg
          src="/images/media/media-28.jpg"
          class="object-fit-md-contain border rounded"
          alt="..."
        />
      </ShowcodeCard>
    </div>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard
        title="Object Fit Contain (LG - responsive)"
        custom-card-body-class="object-fit-container"
        :code="prism.ObjectFitContainLGResponsive"
      >
        <BaseImg
          src="/images/media/media-28.jpg"
          class="object-fit-lg-contain border rounded"
          alt="..."
        />
      </ShowcodeCard>
    </div>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard
        title="Object Fit Contain (XL - responsive)"
        custom-card-body-class="object-fit-container"
        :code="prism.ObjectFitContainXLResponsive"
      >
        <BaseImg
          src="/images/media/media-28.jpg"
          class="object-fit-xl-contain border rounded"
          alt="..."
        />
      </ShowcodeCard>
    </div>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard
        title="Object Fit Contain (XXL - responsive)"
        custom-card-body-class="object-fit-container"
        :code="prism.ObjectFitContainXXLResponsive"
      >
        <BaseImg
          src="/images/media/media-28.jpg"
          class="object-fit-xxl-contain border rounded"
          alt="..."
        />
      </ShowcodeCard>
    </div>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard
        title="Object Fit Contain Video"
        custom-card-body-class="object-fit-container"
        :code="prism.ObjectFitContainVideo"
      >
        <BaseVideo
          src="/video/1.mp4"
          class="object-fit-contain rounded border"
          autoplay
          loop
          muted
        ></BaseVideo>
      </ShowcodeCard>
    </div>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard
        title="Object Fit Cover Video"
        custom-card-body-class="object-fit-container"
        :code="prism.ObjectFitCoverVideo"
      >
        <BaseVideo
          src="/video/1.mp4"
          class="object-fit-cover rounded border"
          autoplay
          loop
          muted
        ></BaseVideo>
      </ShowcodeCard>
    </div>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard
        title="Object Fit Fill Video"
        custom-card-body-class="object-fit-container"
        :code="prism.ObjectFitFillVideo"
      >
        <BaseVideo
          src="/video/1.mp4"
          class="object-fit-fill rounded border"
          autoplay
          loop
          muted
        ></BaseVideo>
      </ShowcodeCard>
    </div>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard
        title="Object Fit Scale Video"
        custom-card-body-class="object-fit-container"
        :code="prism.ObjectFitScaleVideo"
      >
        <BaseVideo
          src="/video/1.mp4"
          class="object-fit-scale rounded border"
          autoplay
          loop
          muted
        ></BaseVideo>
      </ShowcodeCard>
    </div>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard
        title=" Object Fit None Video"
        custom-card-body-class="object-fit-container"
        :code="prism.ObjectFitNoneVideo"
      >
        <BaseVideo
          src="/video/1.mp4"
          class="object-fit-none rounded border"
          autoplay
          loop
          muted
        ></BaseVideo>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
