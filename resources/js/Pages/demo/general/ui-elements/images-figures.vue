<script setup>
import { Head } from '@inertiajs/vue3'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as prism from '@/shared/data/prismCode/ui-elements/image-figure'
import ShowcodeCard from '../../../../../UI/showcodeCard.vue'

const dataToPass = {
  title: 'Ui Elements',
  currentpage: 'Images & Figures',
  activepage: 'Images & Figures',
}
</script>

<template>
  <Head title="Images-Figures | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <ShowcodeCard title="Responsive image" :code="prism.ResponsiveImage">
        <p class="card-title mb-3">
          Use <code> .img-fluid </code>class to the img tag to get responsive image.
        </p>
        <div class="text-center">
          <BaseImg src="/images/media/media-48.jpg" class="img-fluid" alt="..." />
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="Image With Radius" :code="prism.ImageWithRadius">
        <p class="card-title mb-3">
          Use <code>.rounded</code> class along with <code>.img-fluid</code> to get border radius.
        </p>
        <div class="text-center">
          <BaseImg src="/images/media/media-49.jpg" class="img-fluid rounded" alt="..." />
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="Rounded Image" :code="prism.RoundedImage">
        <p class="card-title mb-3">
          Use <code>.rounded-pill</code> class to <code>img</code> tag to get rounded image.
        </p>
        <div class="text-center">
          <BaseImg src="/images/media/media-50.jpg" class="img-fluid rounded-pill" alt="..." />
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="Image Left Align" :code="prism.ImageLeftAlign">
        <BaseImg class="rounded float-start" src="/images/media/media-53.jpg" alt="..." />
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="Image Center Align" :code="prism.ImageCenterAlign">
        <BaseImg class="rounded mx-auto d-block" src="/images/media/media-55.jpg" alt="..." />
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="Image Right Align" :code="prism.ImageRightAlign">
        <BaseImg class="rounded float-end" src="/images/media/media-54.jpg" alt="..." />
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard
        title="Figures"
        custom-card-body-class="d-flex  justify-content-between gap-2"
        :code="prism.Figures"
      >
        <figure class="figure">
          <BaseImg
            class="bd-placeholder-img figure-img img-fluid rounded card-img"
            src="/images/media/media-56.jpg"
            alt="..."
          />
          <figcaption class="figure-caption mt-2">
            A caption for the above image.
          </figcaption>
        </figure>
        <figure class="figure float-end">
          <BaseImg
            class="bd-placeholder-img figure-img img-fluid rounded card-img"
            src="/images/media/media-57.jpg"
            alt="..."
          />
          <figcaption class="figure-caption text-end mt-2">
            A caption for the above image.
          </figcaption>
        </figure>
      </ShowcodeCard>
    </div>
    <div class="col-xl-3">
      <ShowcodeCard title="Image Thumbnail" :code="prism.ImageThumbnail">
        <p class="card-title mb-3">
          Use <code> .img-thumbnail </code>to give an image a rounded 1px border.
        </p>
        <div class="text-center">
          <BaseImg src="/images/media/media-51.jpg" class="img-thumbnail" alt="..." />
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-3">
      <ShowcodeCard title="Rounded Thumbnail" :code="prism.RoundedThumbnail">
        <p class="card-title mb-3">
          Use <code> .rounded-pill </code>along with <code> .img-thummbnail </code> to get radius.
        </p>
        <div class="text-center">
          <BaseImg src="/images/media/media-52.jpg" class="img-thumbnail rounded-pill" alt="..." />
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
