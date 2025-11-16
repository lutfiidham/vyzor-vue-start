<script setup>
import { Head } from '@inertiajs/vue3'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkNftReusebleCard from '@/shared/@spk/dashboards/nft/spk-nft-reusebleCard.vue'
import * as AcuationData from '@/shared/data/dashboards/nft/live-auctiondata'
import { MartketPlaceItems } from '@/shared/data/dashboards/nft/marcketplacedata'

const dataToPass = {
  activepage: 'Live Auction',
  title: 'Dashboards',
  subtitle: 'NFT',
  currentpage: 'Live Auction',
}
</script>

<template>
  <Head title="NFT-Live Auction | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xxl-9 col-xl-12 col-lg-12">
      <div class="d-flex align-items-center gap-4 mb-4 flex-wrap">
        <div
          v-for="idx in AcuationData.AcuationTags"
          :key="idx.id"
          :class="`nft-tag nft-tag-${idx.className} ${idx.active ? 'active' : ''} `"
        >
          <a href="javascript:void(0);" class="stretched-link" />
          <span class="nft-tag-text">{{ idx.text }}</span>
        </div>
      </div>
      <div class="row">
        <h6 class="fw-medium mb-3">
          Live Auction:
        </h6>
        <div
          v-for="idx in MartketPlaceItems.slice(0, 6)"
          :key="idx.id"
          class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"
        >
          <SpkNftReusebleCard :card="idx" />
        </div>
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-end mb-4">
            <li class="page-item disabled">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-12 col-lg-12">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header justify-content-between">
              <div class="card-title">
                Top Drops
              </div>
              <a href="javascript:void(0);" class="text-muted fs-13">View All<i class="ti ti-arrow-narrow-right ms-1" /></a>
            </div>
            <div class="card-body">
              <ul class="list-unstyled nft-top-drops-list">
                <li v-for="idx in AcuationData.LiveList" :key="idx.id">
                  <div class="d-flex align-items-center gap-2">
                    <div class="lh-1">
                      <span class="avatar avatar-md avatar-rounded">
                        <BaseImg :src="idx.image" alt="" />
                      </span>
                    </div>
                    <div class="flex-fill">
                      <span class="d-block fw-semibold">{{ idx.title }}</span>
                      <span class="fs-13 text-muted">{{ idx.author }}</span>
                    </div>
                    <div class="text-end">
                      <div class="d-flex align-items-center gap-1">
                        <div class="lh-1">
                          <span class="avatar avatar-xs">
                            <BaseImg
                              src="/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <span class="fw-semibold">
                          {{ idx.price }}
                        </span>
                      </div>
                      <span class="fs-13 text-muted d-block">Sold At</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card overflow-hidden">
            <div class="card-header justify-content-between">
              <div class="card-title">
                Recent Activity
              </div>
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="p-2 fs-12 text-muted"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Today<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                </a>
                <ul class="dropdown-menu" role="menu">
                  <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                </ul>
              </div>
            </div>
            <div class="card-body p-0">
              <ul class="list-group list-group-flush">
                <li
                  v-for="idx in AcuationData.NotificationsLive"
                  :key="idx.id"
                  class="list-group-item"
                >
                  <div class="d-flex gap-3 align-items-start">
                    <div class="lh-1">
                      <span class="avatar avatar-lg">
                        <BaseImg :src="idx.image" alt="" />
                      </span>
                    </div>
                    <div>
                      <div class="mb-1">
                        <a href="javascript:void(0);" class="fw-medium">{{ idx.title }}</a><span class="fs-12 text-muted ms-2 d-inline-block">{{ idx.time }}</span>
                      </div>
                      <div class="fs-13" v-html="idx.content" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
