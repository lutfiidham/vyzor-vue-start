<script setup>
import * as Timelinedata from '@/shared/data/pages/timelinedata'
import Pageheader from '@/components/pageheader/pageheader.vue'
import BaseImg from '../../components/Baseimage/BaseImg.vue'
const dataToPass = {
  title: 'Pages',
  currentpage: 'Timeline',
  activepage: 'Timeline',
}
</script>

<template>
  <Head title="Timeline | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row mb-5">
    <div class="col-xl-12">
      <h6>Timeline 1</h6>
      <div class="timeline">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="timeline-container">
                <div class="timeline-end">
                  <span class="avatar avatar-lg avatar-rounded bg-primary text-center">
                    <i class="ri ri-building-line fs-4"></i>
                  </span>
                </div>
                <div class="timeline-continue">
                  <div class="row timeline-right">
                    <div class="col-md-6">
                      <div class="timeline-time-container primary">
                        <p class="timeline-date text-primary">Jan 15</p>
                        <span class="timeline-time fs-12 text-muted fw-medium d-block"> 2023 </span>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="timeline-box primary">
                        <h6 class="fw-semibold">Company Founded</h6>
                        <p class="mb-0 text-muted">
                          Our journey began with a vision to revolutionize the industry. On January
                          15th, 2023, we officially founded the company with a small but dedicated
                          team and big dreams for the future.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row timeline-left">
                    <div class="col-md-6">
                      <div class="timeline-box ms-md-auto success">
                        <h6 class="fw-semibold">First Product Launch</h6>
                        <p class="mb-0 text-muted">
                          After months of hard work and dedication, we launched our first product.
                          It was a pivotal moment in our company's history, setting the stage for
                          everything that was to come.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="timeline-time-container success">
                        <p class="timeline-date text-success">Feb 20</p>
                        <span class="timeline-time fs-12 text-muted fw-medium d-block text-start">
                          02:00 PM
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="timeline-year">
                        <span class="avatar avatar-lg avatar-rounded bg-success text-center">
                          <i class="ri ri-money-dollar-circle-line fs-4"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="row timeline-right">
                    <div class="col-md-6">
                      <div class="timeline-time-container warning">
                        <p class="timeline-date text-warning">Apr 5</p>
                        <span class="timeline-time fs-12 text-muted fw-medium d-block">
                          11:45 AM
                        </span>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="timeline-box warning">
                        <h6 class="fw-semibold">Secured First Round of Funding</h6>
                        <p class="mb-0 text-muted">
                          We secured our first round of funding from angel investors. This was a
                          major milestone that allowed us to scale and bring our product to market
                          faster.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row timeline-left">
                    <div class="col-md-6">
                      <div class="timeline-box ms-md-auto info">
                        <h6 class="fw-semibold">Expanded Team</h6>
                        <p class="mb-0 text-muted">
                          As our business grew, we expanded our team to include experts in various
                          fields, from marketing to engineering. This allowed us to focus on
                          innovation and improve our products.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="timeline-time-container info">
                        <p class="timeline-date text-info">May 18</p>
                        <span class="timeline-time fs-12 text-muted fw-medium d-block text-start">
                          04:20 PM
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="timeline-year">
                        <span class="avatar avatar-lg avatar-rounded bg-danger text-center">
                          <i class="ri ri-settings-3-line fs-4"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="row timeline-right">
                    <div class="col-md-6">
                      <div class="timeline-time-container danger">
                        <p class="timeline-date text-danger">Aug 25</p>
                        <span class="timeline-time fs-12 text-muted fw-medium d-block">
                          09:15 AM
                        </span>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="timeline-box danger">
                        <h6 class="fw-semibold">Launched New Feature</h6>
                        <p class="mb-0 text-muted">
                          A major milestone in our product development, we launched a new feature
                          that was highly anticipated by our users. It garnered positive feedback
                          and improved user engagement.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row timeline-left">
                    <div class="col-md-6">
                      <div class="timeline-box ms-md-auto teal">
                        <h6 class="fw-semibold">Reached 100k Users</h6>
                        <p class="mb-0 text-muted">
                          We hit a major milestone: 100,000 active users. This achievement reflected
                          the hard work of our team and the value our product brings to our users.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="timeline-time-container teal">
                        <p class="timeline-date text-teal">Oct 10</p>
                        <span class="timeline-time fs-12 text-muted fw-medium d-block text-start">
                          01:30 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="timeline-start">
                  <span class="avatar avatar-lg avatar-rounded bg-warning text-center">
                    <i class="ri ri-user-star-line fs-4"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row mb-5">
    <div class="col-xl-12">
      <h6>Timeline 2</h6>
      <div class="p-5">
        <div class="timeline-steps">
          <div class="timeline-step" v-for="(idx, index) in Timelinedata.TimelineData" :key="index">
            <div
              class="timeline-content"
              data-toggle="popover"
              data-placement="top"
              title=""
              data-content="And here's some amazing content. It's very engaging. Right?"
              data-original-title="2003"
            >
              <div class="timeline-date_time-container">
                <span :class="`badge bg-${idx.bgColor}`">{{ idx.date }}</span>
              </div>
              <div :class="`inner-circle ${idx.bgColor}`"></div>
              <p class="fw-medium mt-3 mb-1">{{ idx.title }}</p>
              <p class="text-muted mb-0 mb-lg-0">{{ idx.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-4">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Icons Timeline</div>
        </div>
        <div class="card-body p-4">
          <ul class="list-unstyled timeline-list-1">
            <li v-for="(idx, index) in Timelinedata.ActivityLogs" :key="index">
              <span class="fw-semibold d-block fs-15 mb-1">{{ idx.title }}</span>
              <span class="d-block mb-1">{{ idx.description }}</span>
              <span class="fs-13 text-muted d-block">{{ idx.timestamp }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xl-4">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Rounded Timeline</div>
        </div>
        <div class="card-body">
          <ul class="list-unstyled timeline-list-2">
            <li v-for="(idx, index) in Timelinedata.Activities" :key="index">
              <div class="d-flex align-items-center mb-1 gap-2">
                <div class="lh-1">
                  <span class="avatar avatar-xs avatar-rounded">
                    <BaseImg :src="idx.avatar" alt="" />
                  </span>
                </div>
                <div class="fw-semibold flex-fill">{{ idx.title }}</div>
                <div class="fs-13 text-muted">{{ idx.time }}</div>
              </div>
              <div class="d-flex align-items-center gap-2">
                <div class="fs-13 text-muted">{{ idx.user }} {{ idx.message }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xl-4">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Solid Timeline</div>
        </div>
        <div class="card-body">
          <ul class="list-unstyled timeline-list-3">
            <li v-for="(idx, index) in Timelinedata.ProjectTimeline" :key="index">
              <div class="d-flex align-items-center gap-3 mb-1 flex-wrap">
                <div class="fw-semibold fs-15">{{ idx.title }}</div>
                <span :class="`badge bg-${idx.badgeColor}-transparent`">{{ idx.time }}</span>
              </div>
              <div class="fs-13 text-muted" v-html="idx.description"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-3 -->
</template>

<style scoped>
/* Add your styles here */
</style>
