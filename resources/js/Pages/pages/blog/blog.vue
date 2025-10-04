<script setup>
import * as BlogData from '@/shared/data/pages/blog/blogdata'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkBlogcard from '@/shared/@spk/pages/blog/spk-blogcard.vue'
import SpkPopularcard from '@/shared/@spk/pages/blog/spk-popularcard.vue'
import BaseImg from '../../../components/Baseimage/BaseImg.vue'
import { Head, Link } from '@inertiajs/vue3'
const baseUrl = __BASE_PATH__
const dataToPass = {
  title: 'Pages',
  subtitle: 'Blog',
  currentpage: 'Blog',
  activepage: 'Blog',
}
</script>

<template>
  <Head title="Blog | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xxl-5">
      <div class="card custom-card overlay-card blog-card">
        <Link :href="`${baseUrl}/pages/blog/blog-details`" class="stretched-link"></Link>
        <BaseImg src="/images/media/blog/1.jpg" class="card-img" alt="..." />
        <div class="card-img-overlay d-flex flex-column p-0 over-content-bottom">
          <div class="card-body text-fixed-white">
            <div class="text-fixed-white fs-14 mb-2">FEATURED POST</div>
            <div class="card-text mb-2 fs-2 fw-semibold lh-sm">
              Exploring the Future of Artificial Intelligence
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-4">
      <div class="row">
        <div class="col-xl-6" v-for="idx in BlogData.BlogPosts" :key="idx.id">
          <SpkBlogcard :card="idx" />
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">Top Stories</div>
          <a href="javascript:void(0);" class="fs-13 text-muted text-decoration-underline"
            >View All <i class="ti ti-arrow-narrow-right"></i
          ></a>
        </div>
        <div class="card-body">
          <ul class="list-unstyled blog-top-stories-list">
            <li v-for="idx in BlogData.TopStories" :key="idx.id">
              <Link :href="`${baseUrl}/pages/blog/blog-details`" class="stretched-link"></Link>
              <div class="d-flex align-items-center gap-3">
                <div class="lh-1">
                  <span class="avatar avatar-xl">
                    <BaseImg :src="idx.image" alt="" />
                  </span>
                </div>
                <div class="flex-fill">
                  <span :class="`badge ${idx.badgeClass}`">{{ idx.badgeText }}</span>
                  <h6 class="fw-semibold mb-0 lh-base top-stories-title mt-1">{{ idx.title }}</h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="col-xl-12">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h5 class="mb-0 fw-semibold">Popular Topics</h5>
      <p class="mb-0 fw-semibold">
        <a href="javascript:void(0);" class="text-primary"><u>View All</u></a>
      </p>
    </div>
    <div class="popular-cards align-items-center d-flex gap-3 flex-wrap justify-content-between">
      <div class="col" v-for="idx in BlogData.BlogCategoryCards" :key="idx.id">
        <a href="javascript:void(0);">
          <SpkPopularcard :card="idx" />
        </a>
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xxl-9">
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-6" v-for="idx in BlogData.BlogCards" :key="idx.id">
          <SpkBlogcard :card="idx" />
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="card custom-card overflow-hidden">
        <div class="card-header justify-content-between">
          <div class="card-title">Popular Blogs</div>
          <a href="javascript:void(0);" class="fs-13 text-muted text-decoration-underline"
            >View All <i class="ti ti-arrow-narrow-right"></i
          ></a>
        </div>
        <div class="card-body p-0">
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="idx in BlogData.PopularBlogs" :key="idx.id">
              <Link :href="`${baseUrl}/pages/blog/blog-details`" class="stretched-link"></Link>
              <div class="d-flex align-items-center gap-3">
                <div class="lh-1">
                  <span class="avatar avatar-xl">
                    <BaseImg :src="idx.image" alt="" />
                  </span>
                </div>
                <div class="flex-fill">
                  <div class="popular-blogs-title fw-semibold mb-1">{{ idx.title }}</div>
                  <span class="d-block text-muted fs-13 fw-normal">{{ idx.dateViews }}</span>
                </div>
              </div>
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
