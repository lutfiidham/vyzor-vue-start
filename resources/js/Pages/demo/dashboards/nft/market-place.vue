<script setup>
import {
  MartketPlaceItems,
  MartketPlaceItems1,
} from '@/shared/data/dashboards/nft/marcketplacedata'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkNftReusebleCard from '@/shared/@spk/dashboards/nft/spk-nft-reusebleCard.vue'
import { Head } from '@inertiajs/vue3'
const Market = MartketPlaceItems.slice(0, 2)
const MarketDomain = MartketPlaceItems.filter((items) => [2].includes(items.id))
const MarketMusic = MartketPlaceItems.filter((items) => [3].includes(items.id))
const MarketReal = MartketPlaceItems.filter((items) => [4].includes(items.id))
const MarketSports = MartketPlaceItems.filter((items) => [5].includes(items.id))
const MarketFashion = MartketPlaceItems.filter((items) => [6].includes(items.id))
const MarketAvatars = MartketPlaceItems.filter((items) => [7].includes(items.id))
const MarketMemes = MartketPlaceItems.filter((items) => [8].includes(items.id))
const dataToPass = {
  activepage: 'Market Place',
  title: 'Dashboards',
  subtitle: 'NFT',
  currentpage: 'Market Place',
}
</script>

<template>
  <Head title="NFT-Market Place | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div>
              <ul class="nav nav-tabs nav-tabs-header mb-0" role="tablist">
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#nft-all"
                    aria-selected="true"
                    >All</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#nft-art"
                    aria-selected="false"
                    tabindex="-1"
                    >Art</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#nft-gaming"
                    aria-selected="false"
                    tabindex="-1"
                    >Gaming</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#nft-domain"
                    aria-selected="false"
                    tabindex="-1"
                    >Domain</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#nft-music"
                    aria-selected="false"
                    tabindex="-1"
                    >Music</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#nft-realestate"
                    aria-selected="false"
                    tabindex="-1"
                    >Real Estate</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#nft-sports"
                    aria-selected="false"
                    tabindex="-1"
                    >Sports</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#nft-fashion"
                    aria-selected="false"
                    tabindex="-1"
                    >Fashion</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#nft-avatars"
                    aria-selected="false"
                    tabindex="-1"
                    >Avatars</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#nft-memes"
                    aria-selected="false"
                    tabindex="-1"
                    >Memes</a
                  >
                </li>
              </ul>
            </div>
            <div class="d-flex gap-2">
              <button type="button" class="btn btn-sm btn-secondary btn-wave">Filters</button>
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="btn btn-sm btn-wave btn-primary waves-effect waves-light"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                </a>
                <ul class="dropdown-menu" role="menu">
                  <li><a class="dropdown-item" href="javascript:void(0);">New Collection</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">High - Low</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Low - High</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="tab-content">
        <div class="tab-pane show active p-0 border-0" id="nft-all" role="tabpanel">
          <div class="row">
            <div
              class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
              v-for="idx in MartketPlaceItems"
              :key="idx.id"
            >
              <SpkNftReusebleCard :card="idx" />
            </div>
            <nav aria-label="Page navigation">
              <ul class="pagination justify-content-end mb-4">
                <li class="page-item disabled">
                  <a class="page-link">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0);">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="tab-pane p-0 border-0" id="nft-art" role="tabpanel">
          <div class="row">
            <div
              class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12"
              v-for="idx in MartketPlaceItems1"
              :key="idx.id"
            >
              <SpkNftReusebleCard :card="idx" />
            </div>
          </div>
        </div>
        <div class="tab-pane p-0 border-0" id="nft-gaming" role="tabpanel">
          <div class="row">
            <div
              class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12"
              v-for="idx in Market"
              :key="idx.id"
            >
              <SpkNftReusebleCard :card="idx" />
            </div>
          </div>
        </div>
        <div class="tab-pane p-0 border-0" id="nft-domain" role="tabpanel">
          <div class="row">
            <div
              class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12"
              v-for="idx in MarketDomain"
              :key="idx.id"
            >
              <SpkNftReusebleCard :card="idx" />
            </div>
          </div>
        </div>
        <div class="tab-pane p-0 border-0" id="nft-music" role="tabpanel">
          <div class="row">
            <div
              class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12"
              v-for="idx in MarketMusic"
              :key="idx.id"
            >
              <SpkNftReusebleCard :card="idx" />
            </div>
          </div>
        </div>
        <div class="tab-pane p-0 border-0" id="nft-realestate" role="tabpanel">
          <div class="row">
            <div
              class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12"
              v-for="idx in MarketReal"
              :key="idx.id"
            >
              <SpkNftReusebleCard :card="idx" />
            </div>
          </div>
        </div>
        <div class="tab-pane p-0 border-0" id="nft-sports" role="tabpanel">
          <div class="row">
            <div
              class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12"
              v-for="idx in MarketSports"
              :key="idx.id"
            >
              <SpkNftReusebleCard :card="idx" />
            </div>
          </div>
        </div>
        <div class="tab-pane p-0 border-0" id="nft-fashion" role="tabpanel">
          <div class="row">
            <div
              class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12"
              v-for="idx in MarketFashion"
              :key="idx.id"
            >
              <SpkNftReusebleCard :card="idx" />
            </div>
          </div>
        </div>
        <div class="tab-pane p-0 border-0" id="nft-avatars" role="tabpanel">
          <div class="row">
            <div
              class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12"
              v-for="idx in MarketAvatars"
              :key="idx.id"
            >
              <SpkNftReusebleCard :card="idx" />
            </div>
          </div>
        </div>
        <div class="tab-pane p-0 border-0" id="nft-memes" role="tabpanel">
          <div class="row">
            <div
              class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12"
              v-for="idx in MarketMemes"
              :key="idx.id"
            >
              <SpkNftReusebleCard :card="idx" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->
</template>

<style scoped>
/* Add your styles here */
</style>
