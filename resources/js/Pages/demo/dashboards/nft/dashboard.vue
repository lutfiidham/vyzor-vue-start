<script setup>
import * as NftData from '@/shared/data/dashboards/nft/dashboarddata.js'
import SwiperjsCardComponent from '@/shared/@spk/swiperjs-cards.vue'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkNftSwipercard from '@/shared/@spk/dashboards/nft/spk-nft-swipercard.vue'
import SpkNftReusebleCard from '@/shared/@spk/dashboards/nft/spk-nft-reusebleCard.vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'

const dataToPass = {
  activepage: 'Dashboard',
  title: 'Dashboards',
  subtitle: 'NFT',
  currentpage: 'Dashboard',
}
</script>

<template>
  <Head title="Dashboards-NFT | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xxl-9">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card nft-main-banner-card border-0">
            <div class="card-body">
              <div class="nft-main-bannr-background">
                <BaseImg src="/images/nft-images/1.png" alt="" class="d-md-block d-none" />
              </div>
              <h2 class="text-fixed-white">Discover, buy, and sell unique NFTs</h2>
              <p class="fs-16 op-8 mb-4">
                Immerse yourself in a world where digital creativity <br />
                meets blockchain technology
              </p>
              <div class="btn-list">
                <button class="btn btn-lg btn-light">Explore</button>
                <button class="btn btn-lg btn-outline-light text-fixed-white">Sell Artwork</button>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <h6 class="fw-medium mb-0">Trending NFT'S :</h6>
          <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary btn-sm btn-wave waves-effect waves-light">
              1D
            </button>
            <button
              type="button"
              class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
            >
              1W
            </button>
            <button
              type="button"
              class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
            >
              1M
            </button>
            <button
              type="button"
              class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
            >
              1Y
            </button>
          </div>
        </div>
        <div class="d-flex align-items-center gap-4 mb-4 flex-wrap">
          <div
            :class="`nft-tag nft-tag-${idx.className} ${idx.isActive ? 'active' : ''}`"
            v-for="idx in NftData.NftTags"
            :key="idx.id"
          >
            <a href="javascript:void(0);" class="stretched-link"></a>
            <span class="nft-tag-text">{{ idx.label }}</span>
          </div>
        </div>
        <div
          class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"
          v-for="idx in NftData.NftCards"
          :key="idx.id"
        >
          <SpkNftReusebleCard :card="idx" />
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex align-items-start gap-3 mb-2">
                <div class="lh-1">
                  <span class="avatar avatar-md bg-primary-transparent svg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                      <path
                        d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"
                      ></path>
                      <circle cx="16" cy="12" r="1.5"></circle>
                    </svg>
                  </span>
                </div>
                <div>
                  <span class="d-block fs-13">Your Balance</span>
                  <h4 class="fw-semibold mb-1">162.87ETH</h4>
                  <span class="text-muted fs-12 d-inline-flex align-items-center"
                    ><span class="text-success me-2"
                      ><i class="ti ti-arrow-narrow-up me-1"></i>2.55%</span
                    >This Year</span
                  >
                </div>
              </div>
              <div id="nft-balance-chart">
                <apexchart
                  height="60px"
                  type="area"
                  :options="NftData.BalanceOptions"
                  :series="NftData.BalanceSeries"
                ></apexchart>
              </div>
              <div class="d-grid mt-3">
                <button
                  class="btn btn-primary d-inline-flex align-items-center justify-content-center"
                >
                  <i class="ti ti-circle-plus me-1 align-middle fs-14"></i>Top Up Balance
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card overflow-hidden">
            <div class="card-header justify-content-between">
              <div class="card-title">Top Creators</div>
              <a href="javascript:void(0);" class="text-muted fs-13"
                >View All <i class="ti ti-arrow-narrow-right ms-1"></i
              ></a>
            </div>
            <div class="card-body">
              <ul class="list-unstyled nft-top-collectors-list">
                <li v-for="idx in NftData.Followers" :key="idx.id">
                  <div class="d-flex align-items-center gap-2 flex-wrap">
                    <div class="lh-1">
                      <span class="avatar avatar-md avatar-rounded">
                        <BaseImg :src="idx.image" alt="" />
                      </span>
                    </div>
                    <div class="flex-fill">
                      <span class="fw-semibold d-block"
                        >{{ idx.name
                        }}<i class="bi bi-patch-check-fill text-primary align-middle ms-2"></i
                      ></span>
                      <span class="text-muted fs-13">{{ idx.handle }}</span>
                    </div>
                    <div>
                      <button
                        :class="`btn btn-${idx.isFollowing ? 'primary' : 'light'} rounded-pill`"
                      >
                        {{ idx.isFollowing ? 'Following' : 'Follow' }}
                      </button>
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
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xxl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">NFT Statistics</div>
        </div>
        <div class="card-body pb-2">
          <div class="p-3 border border-dashed rounded mb-4">
            <div class="d-flex align-items-center justify-content-center flex-wrap gap-5">
              <div>
                <div class="mb-2">
                  Growth<span class="badge bg-success ms-2"
                    ><i class="ti ti-arrow-up me-1"></i>2.35%</span
                  >
                </div>
                <div class="d-flex align-items-center gap-2">
                  <div class="fs-13 text-muted">NFT's Sold</div>
                  <h5 class="fw-semibold mb-0">3,297</h5>
                </div>
              </div>
              <div>
                <div class="mb-2">
                  Market<span class="badge bg-success ms-2"
                    ><i class="ti ti-arrow-up me-1"></i>6.96%</span
                  >
                </div>
                <div class="d-flex align-items-center gap-2">
                  <div class="fs-13 text-muted">Total Market</div>
                  <h5 class="fw-semibold mb-0">$1.45M</h5>
                </div>
              </div>
              <div>
                <div class="mb-2">
                  Bid<span class="badge bg-danger ms-2"
                    ><i class="ti ti-arrow-down me-1"></i>3.85%</span
                  >
                </div>
                <div class="d-flex align-items-center gap-2">
                  <div class="fs-13 text-muted">Highest Bid</div>
                  <h5 class="fw-semibold mb-0">128ETH</h5>
                </div>
              </div>
            </div>
          </div>
          <div id="nft-statistics">
            <apexchart
              height="280px"
              type="bar"
              :options="NftData.NftOptions"
              :series="NftData.NftSeries"
            >
            </apexchart>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">Top Drops</div>
          <a href="javascript:void(0);" class="text-muted fs-13"
            >View All<i class="ti ti-arrow-narrow-right ms-1"></i
          ></a>
        </div>
        <div class="card-body">
          <ul class="list-unstyled nft-top-drops-list">
            <li v-for="idx in NftData.NftSales" :key="idx.id">
              <div class="d-flex align-items-center gap-2">
                <div class="lh-1">
                  <span class="avatar avatar-md avatar-rounded">
                    <BaseImg :src="idx.image" alt="" />
                  </span>
                </div>
                <div class="flex-fill">
                  <span class="d-block fw-semibold">{{ idx.title }}</span>
                  <span class="fs-13 text-muted">By {{ idx.author }}</span>
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
    <div class="col-xxl-3 col-xl-6">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">Featured Authors</div>
          <a href="javascript:void(0);" class="text-muted fs-13"
            >View All <i class="ti ti-arrow-narrow-right ms-1"></i
          ></a>
        </div>
        <div class="card-body p-2">
          <SwiperjsCardComponent
            :swiperItems="NftData.NftCardsData"
            swiperClass="swiper pagination-dynamic custom-nft-swiper text-start featured-collections swiper-initialized swiper-horizontal swiper-backface-hidden"
            :slidesPerView="1"
            :spaceBetween="20"
            :pagination="false"
            :navigation="false"
            :autoplay="true"
          >
            <template #default="{ card }">
              <SpkNftSwipercard :card="card" />
            </template>
          </SwiperjsCardComponent>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">NFT Collection Overview</div>
          <div class="d-flex flex-wrap gap-2">
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="btn btn-outline-light btn-wave waves-effect waves-light"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Price<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li><a class="dropdown-item" href="javascript:void(0);">All</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Under 5 ETH</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">5 ETH - 10 ETH</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">10 ETH - 20 ETH</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Above 20 ETH</a></li>
              </ul>
            </div>
            <div>
              <input
                class="form-control"
                type="text"
                placeholder="Search Here"
                aria-label=".form-control-sm example"
              />
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <TableComponent
              tableClass="table text-nowrap"
              :headers="[
                { text: 'S.No', thClass: '' },
                { text: 'NFT Name', thClass: '' },
                { text: 'Creator', thClass: '' },
                { text: 'Release Date', thClass: '' },
                { text: 'Price', thClass: '' },
                { text: 'Status', thClass: '' },
                { text: 'Category', thClass: '' },
                { text: 'Blockchain', thClass: '' },
                { text: 'Ownership', thClass: '' },
                { text: 'Volume (ETH)', thClass: '' },
              ]"
              :rows="NftData.NftTableData"
              v-slot:cell="{ row }"
            >
              <td>{{ row.id }}</td>
              <td>
                <div class="d-flex align-items-center gap-2">
                  <div class="lh-1">
                    <span class="avatar avatar-md avatar-rounded">
                      <BaseImg :src="row.image" alt="" />
                    </span>
                  </div>
                  <div>
                    <span class="fw-semibold d-block">{{ row.title }}</span>
                    <span class="fs-13 text-muted">{{ row.handle }}</span>
                  </div>
                </div>
              </td>
              <td>{{ row.creator }}</td>
              <td>{{ row.date }}</td>
              <td>{{ row.price }}</td>
              <td>
                <span :class="`badge bg-${row.statusClass}-transparent`">{{ row.status }}</span>
              </td>
              <td>{{ row.category }}</td>
              <td>{{ row.chain }}</td>
              <td>{{ row.edition }}</td>
              <td>{{ row.volume }}</td>
            </TableComponent>
          </div>
        </div>
        <div class="card-footer border-top-0">
          <div class="d-flex align-items-center">
            <div>Showing 6 Entries <i class="bi bi-arrow-right ms-2 fw-semibold"></i></div>
            <div class="ms-auto">
              <nav aria-label="Page navigation" class="pagination-style-2">
                <ul class="pagination mb-0 flex-wrap">
                  <li class="page-item disabled">
                    <a class="page-link" href="javascript:void(0);"> Prev </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                  <li class="page-item active">
                    <a class="page-link" href="javascript:void(0);">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">
                      <i class="bi bi-three-dots"></i>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">17</a></li>
                  <li class="page-item">
                    <a class="page-link text-primary" href="javascript:void(0);"> next </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-3 -->
</template>

<style scoped>
/* Add your styles here */
</style>
