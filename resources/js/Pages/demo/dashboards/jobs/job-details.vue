<script setup>
import { Head } from '@inertiajs/vue3'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkJobDetailsswiper from '@/shared/@spk/dashboards/jobs/job-details/spk-job-detailsswiper.vue'
import SwiperjsCardComponent from '@/shared/@spk/swiperjs-cards.vue'
import * as JobDetailsData from '@/shared/data/dashboards/jobs/jobdetalisdata'

const dataToPass = {
  activepage: 'Job Details',
  title: 'Dashboards',
  subtitle: 'Jobs',
  currentpage: 'Job Details',
}
</script>

<template>
  <Head title="Job-Details | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-9">
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex flex-wrap align-items-top justify-content-between gap-2">
            <div>
              <div class="d-flex flex-wrap gap-3">
                <div>
                  <span class="avatar avatar-lg bg-light">
                    <BaseImg src="/images/company-logos/8.png" alt="" />
                  </span>
                </div>
                <div>
                  <h4 class="fw-medium mb-2 d-flex align-items-center">
                    <a href="javascript:void(0);">Software Developer</a>
                  </h4>
                  <a href="javascript:void(0);"><i class="bi bi-building" />Tech Solutions Inc.</a>
                  <div class="d-flex fs-14 mt-4">
                    <div>
                      <p class="mb-2">
                        <i class="bi bi-geo-alt me-2" />New York, NY (Hybrid: 3 days in office, 2
                        days remote)
                      </p>
                      <p><i class="bi bi-briefcase me-2" />2+ years in software development</p>
                    </div>
                    <div class="ms-4">
                      <p class="mb-2">
                        <i class="bi bi-coin me-1" />
                        <span class="fw-medium">$80,000 - $110,000 per year (depending on experience)</span>
                      </p>
                      <p><i class="bi bi-mortarboard me-2" />Development Team</p>
                    </div>
                  </div>
                  <div class="popular-tags">
                    <a
                      href="javascript:void(0);"
                      class="badge rounded-pill bg-info-transparent me-1"
                    ><i class="bi bi-clock me-1" />Full Time</a>
                    <a href="javascript:void(0);" class="badge rounded-pill bg-danger-transparent"><i class="bi bi-briefcase me-1" />13 Openings</a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="btn-list mb-2">
                <a href="javascript:void(0);" class="btn btn-primary"> Apply Now</a>
                <a href="javascript:void(0);" class="btn btn-icon btn-primary-light btn-wave">
                  <i class="ri-heart-line" />
                </a>
                <a href="javascript:void(0);" class="btn btn-icon btn-primary-light btn-wave">
                  <i class="ri-share-line" />
                </a>
              </div>
              <p class="mb-0">
                <i
                  class="bi bi-info-circle text-danger"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="45 days left"
                />
                <span class="fw-medium">45 days left </span> to apply this job
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card custom-card">
        <div class="card-body">
          <h5 class="fw-medium">
            Job Description
          </h5>
          <p class="op-9">
            We are looking for a skilled and passionate Software Developer to join our dynamic
            development team. As a Software Developer, you will play a crucial role in designing,
            developing, and maintaining our core software applications and systems. You will
            collaborate with cross-functional teams to create innovative solutions that meet the
            needs of our clients.
          </p>
          <div class="row gy-3">
            <div class="col-xl-6">
              <h5 class="fw-medium mb-3">
                Key Responsibilities :
              </h5>
              <ol class="list-unstyled list-group-numbered mb-0">
                <li
                  v-for="(idx, id) in JobDetailsData.Responsibilities"
                  :key="id"
                  :class="`list-group-item ${idx.class}`"
                >
                  {{ idx.title }}
                </li>
              </ol>
            </div>
            <div class="col-xl-6">
              <h5 class="fw-medium mb-3">
                Skills & Qualifications :
              </h5>
              <ol class="list-unstyled list-group-numbered mb-0">
                <li
                  v-for="(idx, id) in JobDetailsData.Qualifications"
                  :key="id"
                  :class="`list-group-item ${idx.class}`"
                >
                  {{ idx.title }}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 class="fw-medium mb-0">
          Related Jobs
        </h4>
        <p class="">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <SwiperjsCardComponent
          :swiper-items="JobDetailsData.Jobs"
          swiper-class="swiper swiper-related-jobs"
          :breakpoints="breakpoints"
          :loop="true"
          :pagination="false"
          :navigation="true"
          :autoplay="true"
        >
          <template #default="{ card }">
            <SpkJobDetailsswiper
              :card="card"
              card-class="overflow-hidden"
              height="25px"
              width="120px"
            />
          </template>
        </SwiperjsCardComponent>
      </div>
      <div class="row">
        <div class="col-xl-6">
          <div class="card custom-card border bg-primary-transparent shadow-none">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="fw-medium mb-0">
                  &#128400; Was this job fit for someone?
                </h5>
                <a href="javascript:void(0);" class="btn btn-success btn-lg" role="button">
                  <i class="ri-share-line me-2 align-middle d-inline-block" />Share Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex align-items-center gap-4 flex-wrap">
                <div class="w-sm-50">
                  <h5 class="fw-medium mb-0">
                    Latest Job Alerts
                  </h5>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email Here"
                    aria-label="blog-email"
                    aria-describedby="blog-subscribe"
                  >
                  <button id="blog-subscribe" class="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Job Highlights
          </div>
        </div>
        <div class="card-body">
          <ul class="list-unstyled job-highlights-list">
            <li v-for="idx in JobDetailsData.InfoList" :key="idx.id">
              <div class="d-flex align-items-center gap-2">
                <div class="lh-1">
                  <span
                    class="avatar avatar-sm border lh-1 avatar-rounded me-2 bg-light text-default"
                  >
                    <i :class="`${idx.iconClass} fs-15`" />
                  </span>
                </div>
                <div>{{ idx.label }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="card custom-card overflow-hidden">
        <div class="card-header">
          <div class="card-title">
            Benefits
          </div>
        </div>
        <div class="card-body p-0">
          <ul class="list-group list-group-flush list-group-numbered">
            <li
              v-for="(idx, index) in JobDetailsData.Benefits"
              :key="index"
              class="list-group-item"
            >
              {{ idx }}
            </li>
          </ul>
        </div>
      </div>
      <div class="card custom-card overflow-hidden">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Similar Jobs
          </div>
          <a href="javascript:void(0);" class="text-primary fw-medium fs-13">
            View All <i class="fe fe-arrow-right" />
          </a>
        </div>
        <div class="card-body p-0">
          <ul class="list-group list-group-flush">
            <li
              v-for="idx in JobDetailsData.JobListings"
              :key="idx.id"
              class="list-group-item mb-2"
            >
              <div class="d-sm-flex flex-wrap gap-2">
                <span
                  class="avatar avatar-md avatar-rounded bg-primary bg-opacity-10 border"
                  v-html="idx.icon"
                />
                <div class="flex-grow-1">
                  <p class="fw-medium fs-13 mb-1">
                    <a href="javascript:void(0);"> {{ idx.title }}</a>
                  </p>
                  <p class="mb-0 me-3">
                    <i class="bi bi-building text-muted" /> {{ idx.company }}
                  </p>
                </div>
              </div>
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
