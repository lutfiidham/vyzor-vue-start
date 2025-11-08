<script setup>
import * as marketCapData from '@/shared/data/dashboards/crypto/marketCapdata.js'
import SpkReusableMarketCapCard from '@/shared/@spk/dashboards/crypto/spk-reusable-marketCapCard.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'
const dataToPass = {
  title: 'Dashboards',
  subtitle: 'Crypto',
  currentpage: 'Marketcap',
  activepage: 'Marketcap',
}
</script>

<template>
  <Head title="Crypto-Market Cap | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div
      v-for="(item, index) in marketCapData.marketData"
      :key="index"
      class="col-xxl-3 col-xl-6 col-lg-12"
    >
      <SpkReusableMarketCapCard :item="item" />
    </div>

    <div class="col-xxl-3 col-xl-6 col-lg-12">
      <div class="card custom-card overflow-hidden">
        <div class="card-header justify-content-between">
          <div class="card-title">My Top Currencies</div>
          <div>
            <a
              href="javascript:void(0);"
              class="fw-medium text-success fs-13 text-decoration-underline"
              >View All</a
            >
          </div>
        </div>
        <div class="card-body p-0">
          <ul class="list-group list-group-flush">
            <li
              v-for="(item, index) in marketCapData.portfolioData"
              :key="index"
              class="list-group-item"
            >
              <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div class="d-flex align-items-center gap-2">
                  <div>
                    <span class="avatar avatar-sm p-1 bg-light">
                      <BaseImg :src="item.imgSrc" alt="" />
                    </span>
                  </div>
                  <div>
                    <span class="d-block fw-medium">{{ item.name }}</span>
                  </div>
                </div>
                <div>
                  <span class="fw-medium d-block">{{ item.quantity }}</span>
                </div>
                <div>
                  <span class="fw-medium d-block">{{ item.value }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->

  <!-- Start::row-2  -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">Crypto MarketCap</div>
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
                class="btn btn-primary btn-sm btn-wave"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li><a class="dropdown-item" href="javascript:void(0);">Market Cap</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Price</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Trading Volume</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Price Change (24h)</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Rank</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">A - Z</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">All-Time High (ATH)</a></li>
              </ul>
            </div>
            <div>
              <button class="btn btn-light btn-sm btn-wave border">View All</button>
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <TableComponent
            tableClass="table text-nowrap"
            :headers="[
              { text: '' },
              { text: '#' },
              { text: 'Crypto Name' },
              { text: 'MarketCap' },
              { text: 'Price(USD)' },
              { text: '1h Change' },
              { text: '24h Change' },
              { text: 'Volume (24h)' },
              { text: 'Circulating Supply' },
              { text: 'last 1Week' },
              { text: 'Trade' },
            ]"
            :rows="marketCapData.marketTable"
            v-slot:cell="{ row }"
          >
            <td class="text-center">
              <a href="javascript:void(0);"><i class="ri-star-line fs-16 text-muted"></i></a>
            </td>
            <td>{{ row.id }}</td>
            <td>
              <div class="d-flex align-items-center gap-2">
                <div class="lh-1">
                  <span class="avatar avatar-xs avatar-rounded">
                    <BaseImg :src="row.img" alt="" />
                  </span>
                </div>
                <div class="fw-medium">
                  <a href="javascript:void(0);">{{ row.name }} ({{ row.symbol }})</a>
                </div>
              </div>
            </td>
            <td>
              <span class="fw-medium">{{ row.marketCap }}</span>
            </td>
            <td>
              <span class="fw-medium">
                <a href="javascript:void(0);">{{ row.price }}</a>
              </span>
            </td>
            <td>
              <span :class="`text-${row.priceChangeColor} fw-medium`"
                ><i
                  :class="`${row.priceChangeColor === 'success' ? 'ti ti-arrow-narrow-up' : 'ti ti-arrow-narrow-down'} fs-15 fw-medium`"
                ></i
                >{{ row.priceChange1h }}</span
              >
            </td>
            <td>
              <span :class="`text-${row.priceChange24hColor} fw-medium`"
                ><i
                  :class="`${row.priceChange24hColor === 'success' ? 'ti ti-arrow-narrow-up' : 'ti ti-arrow-narrow-down'} fs-15 fw-medium`"
                ></i
                >{{ row.priceChange24h }}</span
              >
            </td>
            <td>
              <a href="javascript:void(0)">
                <span class="d-block fw-medium">{{ row.volume }}</span>
              </a>
            </td>
            <td>
              <a href="javascript:void(0);">
                <span class="fw-medium d-block">
                  {{ row.circulatingSupply }}
                </span>
              </a>
            </td>
            <td>
              <div :id="row.chartId">
                <apexchart
                  height="30px"
                  type="line"
                  :options="row.chartOptions"
                  :series="row.chartSeries"
                />
              </div>
            </td>
            <td>
              <button class="btn btn-success-light btn-sm">Trade</button>
            </td>
          </TableComponent>
        </div>
        <div class="card-footer border-top-0">
          <nav aria-label="Page navigation" class="pagination-style-2">
            <ul class="pagination mb-0 flex-wrap justify-content-end">
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
  <!-- End::row-2  -->
</template>

<style scoped>
/* Add your styles here */
</style>
