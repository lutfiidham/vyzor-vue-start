<script setup>
import { Head } from '@inertiajs/vue3'
import BaseImg from '@/components/Baseimage/BaseImg.vue'

import Pageheader from '@/components/pageheader/pageheader.vue'
import * as prism from '@/shared/data/prismCode/utilities/avatars'
import * as avatarData from '@/shared/data/utilities/avatars'
import ShowcodeCard from '../../../../../UI/showcodeCard.vue'

const dataToPass = {
  title: 'Utilities',
  currentpage: 'Avatars',
  activepage: 'Avatars',
}
</script>

<template>
  <Head title="Avatars | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
      <ShowcodeCard title="Avatars" custom-card-body-class="py-4" :code="prism.avatars">
        <span
          v-for="(idx, index) in avatarData.Avatardata"
          :key="index"
          :class="`avatar me-2 ${idx.class}`"
        >
          <BaseImg :src="idx.src" alt="img" />
        </span>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
      <ShowcodeCard
        :code="prism.avatarSizes"
        title="Avatar Sizes<p class='subtitle text-muted fs-12 fw-normal'>Avatars of different sizes</p>"
      >
        <span
          v-for="(idx, index) in avatarData.Avatarsize"
          :key="index"
          :class="`avatar avatar-${idx.class} me-2`"
        >
          <BaseImg :src="idx.src" alt="img" />
        </span>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
      <ShowcodeCard
        :code="prism.avatarWithIcons"
        title="Avatar With Icons<p class='subtitle text-muted fs-12 fw-normal'>Avatar contains icons to perform respective action.</p>"
      >
        <span
          v-for="(idx, index) in avatarData.Avataricon"
          :key="index"
          :class="`avatar avatar-${idx.class} me-2 avatar-rounded`"
        >
          <BaseImg :src="idx.src" alt="img" />
          <a href="javascript:void(0);" :class="`badge bg-${idx.class1} rounded-pill avatar-badge`"><i :class="`fe fe-${idx.icon}`" /></a>
        </span>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
      <ShowcodeCard
        :code="prism.avatarWithOnlineStatusIndicators"
        title="Avatar With Online Status Indicators<p class='subtitle text-muted fs-12 fw-normal'>avatars having online status indicator.</p>"
      >
        <span
          v-for="(idx, index) in avatarData.Avataronline"
          :key="index"
          :class="`avatar avatar-${idx.class} me-2 online avatar-rounded`"
        >
          <BaseImg :src="idx.src" alt="img" />
        </span>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
      <ShowcodeCard
        :code="prism.avatarWithOfflineStatusIndicators"
        title="Avatar With Offline Status Indicators<p class='subtitle text-muted fs-12 fw-normal'>avatars having a offline status indicator.</p>"
      >
        <span
          v-for="(idx, index) in avatarData.Avataroffline"
          :key="index"
          :class="`avatar avatar-${idx.class} me-2 offline avatar-rounded`"
        >
          <BaseImg :src="idx.src" alt="img" />
        </span>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
      <ShowcodeCard
        :code="prism.avatarsWithNumberBadges"
        title="Avatars With Number Badges<p class='subtitle text-muted fs-12 fw-normal'>Avatar numbers indicates the no. of unread notififactions/messages.</p>"
      >
        <span
          v-for="(idx, index) in avatarData.Avatarnumber"
          :key="index"
          :class="`avatar avatar-${idx.class} me-2 avatar-rounded`"
        >
          <BaseImg :src="idx.src" alt="img" />
          <span :class="`badge rounded-pill bg-${idx.class1} avatar-badge`">{{ idx.data }}</span>
        </span>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End::row-1 -->

  <!-- Start::row-3 -->
  <div class="row">
    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12">
      <ShowcodeCard
        :code="prism.avatarWithInitials"
        title="Avatar With Initials<p class='subtitle text-muted fs-12 fw-normal'>Avatar contains intials when user profile doesn't exist.</p>"
      >
        <span
          v-for="(idx, index) in avatarData.Avatarinitial"
          :key="index"
          :class="`avatar avatar-${idx.data} m-2 bg-${idx.color}`"
        >
          {{ idx.data1 }}
        </span>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12">
      <ShowcodeCard
        :code="prism.stackedAvatars"
        title="Stacked Avatars<p class='subtitle text-muted fs-12 fw-normal'>Group of avatars stacked together.</p>"
      >
        <div class="avatar-list-stacked">
          <span v-for="(idx, index) in avatarData.Avatarstack" :key="index" class="avatar">
            <BaseImg :src="idx.src" alt="img" />
          </span>
          <a class="avatar bg-primary text-fixed-white" href="javascript:void(0);"> +8 </a>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12 col-lg-6 col-md-12 col-sm-12">
      <ShowcodeCard
        :code="prism.roundedStackedAvatars"
        title=" Rounded Stacked Avatars<p class='subtitle text-muted fs-12 fw-normal'>Group of avatars stacked together.</p>"
      >
        <div class="avatar-list-stacked">
          <span
            v-for="(idx, index) in avatarData.Avatarstack"
            :key="index"
            class="avatar avatar-rounded"
          >
            <BaseImg :src="idx.src" alt="img" />
          </span>
          <a class="avatar bg-primary avatar-rounded text-fixed-white" href="javascript:void(0);">
            +8
          </a>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End::row-3 -->
</template>

<style scoped>
/* Add your styles here */
</style>
