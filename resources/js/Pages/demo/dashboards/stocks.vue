<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as Stockdata from '@/shared/data/dashboards/stocksdata'
import { Tooltip } from 'bootstrap'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import SwiperjsCards from '@/shared/@spk/swiperjs-cards.vue'
import SpkStockSwipercard from '@/shared/@spk/dashboards/spk-stock-swipercard.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'

// Header data
const dataToPass = {
  title: 'Dashboards',
  currentpage: 'Stocks',
  activepage: 'Stocks',
}

// Stock data
let stock = [...Stockdata.StockTable]

// Responsive breakpoints
const breakpoints = {
  500: { slidesPerView: 2, spaceBetween: 20 },
  768: { slidesPerView: 3, spaceBetween: 20 },
  1024: { slidesPerView: 3, spaceBetween: 20 },
  1200: { slidesPerView: 3, spaceBetween: 20 },
  1400: { slidesPerView: 5, spaceBetween: 20 },
  1600: { slidesPerView: 5, spaceBetween: 20 },
  1800: { slidesPerView: 5, spaceBetween: 20 },
}

// Tooltip instance
let tooltipInstance = null

// Mount Bootstrap tooltip
onMounted(() => {
  tooltipInstance = new Tooltip(document.body, {
    selector: '[data-bs-toggle="tooltip"]',
  })
})

// Clean up tooltip
onBeforeUnmount(() => {
  const tooltips = document.getElementsByClassName('tooltip')
  Array.from(tooltips).forEach((tooltip) => tooltip.remove())
})

// Handle stock deletion
let handleToDelete = (id) => {
  stock = stock.filter((item) => item.id !== id)
}
</script>

<template>
  <Head title="Stocks | Vyzor - Laravel & Vue " />

  <Pageheader :propData="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <h6 class="fw-semibold mb-3">My Portfolio</h6>
      <div class="card custom-card">
        <div class="card-body">
          <SwiperjsCards
            :swiperItems="Stockdata.StockData"
            swiperClass="swiper stocks-swiper swiper-initialized swiper-horizontal swiper-backface-hidden"
            :slidesPerView="1"
            :spaceBetween="20"
            :breakpoints="breakpoints"
            :pagination="false"
            :navigation="false"
            :autoplay="true"
          >
            <template #default="{ card }">
              <SpkStockSwipercard :card="card" height="25px" width="120px" />
            </template>
          </SwiperjsCards>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xxl-9">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">Portfolio Analysis</div>
          <div class="btn-group">
            <a href="javascript:void(0);" class="btn btn-sm btn-primary-light">1H</a>
            <a href="javascript:void(0);" class="btn btn-sm btn-primary-light">6H</a>
            <a href="javascript:void(0);" class="btn btn-sm btn-primary-light">12H</a>
            <a href="javascript:void(0);" class="btn btn-sm btn-primary">1D</a>
          </div>
        </div>
        <div class="card-body">
          <div class="d-flex align-items-center gap-3 p-3 rounded border border-dashed flex-wrap">
            <div>
              <span class="avatar avatar-lg avatar-rounded">
                <BaseImg src="/images/media/apps/apple.png" alt="" class="invert-1" />
              </span>
            </div>
            <div class="flex-fill">
              <span class="d-block fw-semibold">Apple Inc</span>
              <span class="fw-medium fs-13 text-muted">AAPL</span>
            </div>
            <div class="text-end">
              <div class="d-flex align-items-center mb-1 gap-2">
                <span class="badge bg-success rounded-pill"
                  ><i class="ti ti-arrow-narrow-up me-1"></i>0.54%</span
                >
                <h4 class="fw-semibold mb-0">$1,63,340</h4>
              </div>
              <span class="fs-13 text-muted">Last Updated 12:24pm</span>
            </div>
          </div>
          <div id="portfolio-analysis">
            <apexchart
              height="382px"
              type="area"
              :options="Stockdata.PortfolioOptions"
              :series="Stockdata.PortfolioSeries"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">My Watchlist</div>
          <a href="javascript:void(0);" class="text-muted fs-13">View All</a>
        </div>
        <div class="card-body">
          <ul class="list-unstyled stocks-watchlist">
            <li v-for="idx in Stockdata.Watchlistdata" :key="idx.id">
              <div class="d-flex align-items-center gap-3">
                <div class="lh-1">
                  <span class="avatar avatar-md p-1">
                    <BaseImg
                      :src="idx.image"
                      alt=""
                      :class="`${idx.imageClass ? 'invert-1' : ''}`"
                    />
                  </span>
                </div>
                <div class="flex-fill">
                  <span class="d-block fw-semibold">{{ idx.name }}</span>
                  <span class="fs-13 text-muted">{{ idx.symbol }}</span>
                </div>
                <div class="text-end">
                  <span class="fw-semibold d-block">{{ idx.price }}</span>
                  <span :class="`badge bg-${idx.changeType}-transparent`">{{ idx.change }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-12">
      <h6 class="fw-semibold mb-3">Trending Stocks :</h6>
      <div class="row">
        <div
          class="col-xxl-2 col-xl-4 col-lg-6 col-md-6 col-sm-12"
          v-for="idx in Stockdata.Trendingdata"
          :key="idx.id"
        >
          <div class="p-3 card custom-card border bg-white rounded">
            <div class="d-flex gap-2 flex-wrap align-items-center justify-content-between mb-3">
              <div class="d-flex flex-fill align-items-center">
                <div class="me-2">
                  <span class="avatar avatar-rounded bg-light p-2">
                    <i :class="`bi ${idx.icon} text-${idx.iconColor} fs-18`"></i>
                  </span>
                </div>
                <div class="lh-1">
                  <span class="fw-semibold d-block mb-2 text-default">{{ idx.name }}</span>
                  <span class="d-block text-muted fs-12">{{ idx.value }}</span>
                </div>
              </div>
              <div class="text-success fs-12 text-end">
                <span class="d-block"
                  >{{ idx.percentChange }}<i class="ti ti-arrow-bear-right"></i
                ></span>
                <span class="d-block">{{ idx.amountChange }}</span>
              </div>
            </div>
            <div class="d-flex gap-2">
              <button type="button" class="btn btn-sm btn-light flex-fill">Short</button>
              <button type="button" class="btn btn-sm btn-primary-light flex-fill">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-3 -->

  <!-- Start:: row-4 -->
  <div class="row">
    <div class="col-xxl-3">
      <div class="card custom-card overflow-hidden">
        <div class="card-header justify-content-between">
          <div class="card-title">Recent Activities</div>
          <a href="javascript:void(0);" class="fs-12 text-muted py-1 tag-link">
            View All<i class="ti ti-arrow-narrow-right ms-1"></i>
          </a>
        </div>
        <div class="card-body">
          <ul class="list-unstyled stocks-recent-activities-list">
            <li v-for="idx in Stockdata.Recentstocks" :key="idx.id">
              <div class="d-flex gap-2 flex-wrap align-items-start justify-content-between mb-2">
                <div class="d-flex flex-fill align-items-center">
                  <div class="me-2">
                    <span class="avatar avatar-md p-1">
                      <BaseImg :src="idx.logo" alt="" :class="idx.bgClass" />
                    </span>
                  </div>
                  <div class="lh-1">
                    <span class="fw-semibold d-block mb-2 text-default">{{ idx.name }}</span>
                    <span class="text-muted">{{ idx.symbol }}</span>
                  </div>
                </div>
                <div class="fw-medium fs-14 text-end">
                  <span class="d-block">{{ idx.valueChange }}</span>
                </div>
              </div>
              <div>
                <div class="progress progress-xs progress-animate">
                  <div
                    :class="`progress-bar progress-bar-animated bg-${idx.progressColor} progress-bar-striped progress-bar-animated`"
                    :style="`width: ${idx.progressBarWidth}%;`"
                  ></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xxl-9">
      <div class="card custom-card overflow-hidden">
        <div class="card-header justify-content-between">
          <div class="card-title">My Stocks</div>
          <div class="d-flex flex-wrap gap-2">
            <div>
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Search Here"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li><a class="dropdown-item" href="javascript:void(0);">New</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Popular</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Relevant</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <TableComponent
              tableClass="table text-nowrap"
              :headers="[
                { text: 'S.No', thClass: '' },
                { text: 'Name', thClass: '' },
                { text: 'Price', thClass: '' },
                { text: 'Date Invested', thClass: '' },
                { text: 'Market Cap', thClass: '' },
                { text: 'Price Change', thClass: '' },
                { text: 'Volume', thClass: '' },
                { text: 'Actions', thClass: '' },
              ]"
              :rows="stock"
              v-slot:cell="{ row }"
            >
              <td>{{ row.id }}</td>
              <td>
                <div class="d-flex align-items-start gap-3">
                  <div class="lh-1">
                    <span class="avatar avatar-sm">
                      <BaseImg :src="row.logo" alt="" :class="row.bgCustomClass" />
                    </span>
                  </div>
                  <div class="flex-fill lh-1">
                    <a href="javascript:void(0);" class="d-block mb-1 fs-14 fw-medium">{{
                      row.name
                    }}</a>
                    <span class="d-block fs-12 text-muted text-muted">{{ row.symbol }}</span>
                  </div>
                </div>
              </td>
              <td>{{ row.price }}</td>
              <td>
                <span class="text-muted">{{ row.date }}</span>
              </td>
              <td>{{ row.marketCap }}</td>
              <td>
                <span
                  :class="`badge bg-${row.change.startsWith('-') ? 'danger' : 'success'}-transparent text-${row.change.startsWith('-') ? 'danger' : 'success'}`"
                  >{{ row.change }}
                </span>
              </td>
              <td>{{ row.volume }}</td>
              <td>
                <div class="btn-list">
                  <a href="javascript:void(0);" class="btn btn-icon btn-primary-light btn-sm"
                    ><i class="bi bi-pencil-square"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="btn btn-icon btn-danger-light btn-sm"
                    @click="handleToDelete(row.id)"
                    ><i class="bi bi-trash"></i
                  ></a>
                </div>
              </td>
            </TableComponent>
          </div>
        </div>
        <div class="card-footer border-top-0">
          <div class="d-flex align-items-center">
            <div>Showing 6 Entries <i class="bi bi-arrow-right ms-2 fw-semibold"></i></div>
            <div class="ms-auto">
              <nav aria-label="Page navigation" class="pagination-style-4">
                <ul class="pagination mb-0">
                  <li class="page-item disabled">
                    <a class="page-link" href="javascript:void(0);"> Prev </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="javascript:void(0);">1</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
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
  <!-- End:: row-4 -->
</template>

<style scoped>
/* Add your styles here */
</style>
