<script setup>
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkCardComponent from '@/shared/@spk/reusable-uielements/reusable-cards/spkcard.vue'
import SpkCollapseCard from '@/shared/@spk/reusable-uielements/reusable-cards/spkcollapsecard.vue'
import SpkImageOverlayCard from '@/shared/@spk/reusable-uielements/reusable-cards/spkimageoverlaycard.vue'
import SpkTitleComponent from '@/shared/@spk/reusable-uielements/reusable-cards/spktitlecards.vue'
import SpkBackgroundCard from '@/shared/@spk/reusable-uielements/reusable-cards/spkbgcards.vue'
import BaseImg from '../../../components/Baseimage/BaseImg.vue'
import { defineAsyncComponent } from 'vue'

const VueDraggableNext = defineAsyncComponent(() =>
  import('vue-draggable-next').then((s) => s.VueDraggableNext)
)

const dataToPass = {
  title: 'Advanced Ui',
  currentpage: 'Draggable Cards',
  activepage: 'Draggable Cards',
}
</script>

<template>
  <Head title="Draggable Cards | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <VueDraggableNext group="people" itemKey="name" class="col-xl-6" id="draggable-left">
      <SpkCardComponent :linkTag="true" cardClass="card-bg-primary">
        <template v-slot:bodyText>
          <blockquote class="blockquote mb-0 text-center">
            <h6 class="text-fixed-white">
              The best and most beautiful things in the world cannot be seen or even touched — they
              must be felt with the heart..
            </h6>
            <footer class="blockquote-footer mt-3 fs-14 text-fixed-white op-7">
              Someone famous as <cite title="Source Title">-Helen Keller</cite>
            </footer>
          </blockquote>
        </template>
      </SpkCardComponent>
      <SpkCollapseCard :fullScreen="true" Text="Card With Fullscreen Button">
        <template v-slot:FullContent>
          <div class="card-body">
            <h6 class="card-text fw-medium">FullScreen Card</h6>
            <p class="card-text mb-0">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words
            </p>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary">Read More</button>
          </div>
        </template>
      </SpkCollapseCard>
      <SpkCollapseCard
        :collapseToggle="true"
        Text="Card With Collapse Button"
        Customheaderclass="border-bottom-0"
      >
        <template v-slot:collapseToggle>
          <a
            href="javascript:void(0);"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <i class="ri-arrow-down-s-line fs-18 collapse-open"></i>
            <i class="ri-arrow-up-s-line collapse-close fs-18"></i>
          </a>
        </template>
        <template v-slot:collapseContent>
          <div class="card-body">
            <h6 class="card-text fw-medium">Collapsible Card</h6>
            <p class="card-text mb-0">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words
            </p>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary">Read More</button>
          </div>
        </template>
      </SpkCollapseCard>
      <SpkCollapseCard :hideToggle="true" Text="Card With Close Button">
        <template v-slot:hideContent>
          <div class="card-body">
            <h6 class="card-text fw-medium">Closed Card</h6>
            <p class="card-text mb-0">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words
            </p>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary">Read More</button>
          </div>
        </template>
      </SpkCollapseCard>
      <SpkTitleComponent
        AnchortagNavigate="javascript:void(0);"
        Navigate="javascript:void(0);"
        :Anchortagbefore="true"
        Customclass="custom-card border border-info"
      >
        <div class="d-flex align-items-center">
          <div class="me-3">
            <span class="avatar avatar-xl">
              <BaseImg src="/images/faces/8.jpg" alt="img" />
            </span>
          </div>
          <div>
            <p class="card-text text-info mb-1 fs-14 fw-medium">Alicia Keys.</p>
            <div class="card-title fs-12 mb-1">Department Of Commerce</div>
            <div class="card-title text-muted fs-11 mb-0">24 Years, Female</div>
          </div>
        </div>
      </SpkTitleComponent>
      <SpkTitleComponent
        AnchortagNavigate="javascript:void(0);"
        Navigate="javascript:void(0);"
        :Anchortagbefore="true"
        Customclass="custom-card"
      >
        <div class="d-flex align-items-center">
          <div class="me-3">
            <span class="avatar avatar-md">
              <BaseImg src="/images/faces/15.jpg" alt="img" />
            </span>
          </div>
          <div>
            <p class="card-text mb-0 fs-14 fw-medium">Atharva Simon.</p>
            <div class="card-title text-muted fs-12 mb-0">Correspondent Professor</div>
          </div>
        </div>
      </SpkTitleComponent>
    </VueDraggableNext>
    <VueDraggableNext group="people" itemKey="name" class="col-xl-6" id="draggable-right">
      <SpkImageOverlayCard
        CustomClass="overlay-card"
        :CardHeader="false"
        Imgsrc="/images/media/media-36.jpg"
        Overlayclass="over-content-bottom top-0"
        :CardFooter="true"
        Footertext="Last updated 3 mins ago"
        Customimgclass="card-img"
        Custombodyclass="text-fixed-white overflow-y-auto"
        Customfooterclass="text-fixed-white"
      >
        <template v-slot:cardContent>
          <div class="card-text">Image Overlays Are Awesome!</div>
          <div class="card-text mb-2 card-text2">
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don't
            look even.
          </div>
        </template>
      </SpkImageOverlayCard>
      <SpkBackgroundCard
        Navigate="javascript:void(0);"
        Customclass="card-bg-success"
        color="primary2"
        Imgsrc="/images/faces/5.jpg"
        Title="Sonia Agarwal"
        Value="In leave for 1 month"
        Textclass="fixed-white"
        Class="fixed-white"
      >
        <div class="fs-15 fw-medium">Samantha sid</div>
        <p class="mb-0 text-fixed-white op-7 fs-12">In leave for 1 month</p>
      </SpkBackgroundCard>
      <SpkImageOverlayCard
        CustomClass="overlay-card"
        Title="Image Overlays Are Awesome!"
        Imgsrc="/images/media/media-35.jpg"
        :CardHeader="true"
        :CardFooter="false"
        Customimgclass="card-img"
        Custombodyclass="text-fixed-white  overflow-y-auto"
        CustomTitleclass="text-fixed-white"
      >
        <template v-slot:cardContent>
          <div class="card-text mb-2">
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don't
            look even.
          </div>
          <div class="card-text">Last updated 3 mins ago</div>
        </template>
      </SpkImageOverlayCard>
    </VueDraggableNext>
  </div>
  <!--End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
