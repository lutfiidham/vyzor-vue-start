<script setup>
import { Head } from '@inertiajs/vue3'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkReusableEcommerceCard from '@/shared/@spk/dashboards/spk-reusable-ecommerceCard.vue'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import * as dashboardData from '@/shared/data/dashboards/ecommerce/dashboarddata'

const dataToPass = {
  activepage: 'Dashboard',
  title: 'Dashboards',
  subtitle: 'Ecommerce',
  currentpage: 'Dashboard',
}
</script>

<template>
  <Head title="Dashboards-Ecommerce | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xxl-6">
      <div class="row">
        <SpkReusableEcommerceCard :ecommerce-cards="dashboardData.ecommerceCards" />
      </div>
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              Sales Statistics
            </div>
          </div>
          <div class="card-body">
            <div class="row sales-stats mb-3">
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div>Orders</div>
                <div class="d-flex align-items-center gap-1">
                  <span class="fs-16 fw-semibold">3,542</span>
                  <span class="text-success d-inline-flex"><i class="ti ti-arrow-narrow-up align-middle" />
                    <span class="badge bg-success-transparent">0.9%</span></span>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div>Revenue</div>
                <div class="d-flex align-items-center gap-1">
                  <span class="fs-16 fw-semibold">$52,38,346</span>
                  <span class="text-success d-inline-flex"><i class="ti ti-arrow-narrow-up align-middle" />
                    <span class="badge bg-success-transparent">0.39%</span></span>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div>Conversion Ratio</div>
                <div class="mb-0">
                  <span class="fs-16 fw-semibold text-secondary">33.7%</span>
                  <span class="text-success d-inline-flex"><i class="ti ti-arrow-narrow-up align-middle" />
                    <span class="badge bg-success-transparent">0.5%</span>
                  </span>
                </div>
              </div>
            </div>
            <div id="sale-stats">
              <Apexchart
                height="320px"
                type="line"
                :options="dashboardData.ecommerceOptions"
                :series="dashboardData.ecommerceSeries"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-12">
        <div class="card custom-card overflow-hidden">
          <div class="card-header">
            <div class="card-title">
              Top Selling Products
            </div>
          </div>
          <div class="card-body p-0">
            <TableComponent
              #cell="{ row }"
              table-class="table text-nowrap"
              :headers="[
                { text: 's.no' },
                { text: 'Product Category' },
                { text: 'Sale Value', thClass: 'text-center' },
                { text: 'Total Sales', thClass: 'text-center' },
                { text: 'Status' },
              ]"
              :rows="dashboardData.productsTable"
            >
              <td :class="row.tdClass">
                {{ row.id }}
              </td>
              <td :class="row.tdClass">
                <div class="d-flex align-items-center gap-2">
                  <div class="lh-1">
                    <span class="avatar avatar-sm avatar-rounded bg-light">
                      <BaseImg :src="row.image" alt="" />
                    </span>
                  </div>
                  <div>
                    <span class="fw-semibold">{{ row.name }}</span>
                  </div>
                </div>
              </td>
              <td :class="`text-center ${row.tdClass}`">
                ${{ row.price }}
              </td>
              <td :class="`text-center ${row.tdClass}`">
                {{ row.quantity }}
              </td>
              <td :class="row.tdClass">
                <span
                  :class="`badge ${row.status === 'In Stock' ? 'bg-success-transparent' : 'bg-danger-transparent'}`"
                >{{ row.status }}</span>
              </td>
            </TableComponent>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">
                Recent Orders
              </div>
            </div>
            <div class="card-body">
              <ul class="list-unstyled ecommerce-recent-orders-list">
                <li v-for="(item, index) in dashboardData.productList" :key="index">
                  <div class="d-flex align-items-center gap-3">
                    <div class="lh-1">
                      <span class="avatar avatar-md">
                        <BaseImg :src="item.image" alt="" />
                      </span>
                    </div>
                    <div class="flex-fill">
                      <span class="d-block fw-semibold"><a href="javascript:void(0);">{{ item.name }}</a></span>
                      <span class="text-muted fs-12">{{ item.category }}</span>
                    </div>
                    <div class="text-end">
                      <div class="fw-semibold">
                        ${{ item.price }}
                      </div>
                      <span class="fs-12 text-muted">Price</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">
                Top Categories
              </div>
            </div>
            <div class="card-body">
              <div id="top-categories">
                <Apexchart
                  height="255px"
                  type="donut"
                  :options="dashboardData.ecommerceCategeriesOptions"
                  :series="dashboardData.ecommerceCategeriesSeries"
                />
              </div>
              <ul class="list-unstyled top-categories-list mt-3">
                <li v-for="(item, index) in dashboardData.categorySalesList" :key="index">
                  <div class="d-flex align-items-center gap-2">
                    <div class="flex-fill">
                      {{ item.category }}
                    </div>
                    <div class="fw-semibold">
                      {{ item.sales }}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">
                Top Countries By Sales
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex align-items-center mb-3 flex-wrap">
                <div>
                  <h4 class="mb-0 lh-1">
                    38,256
                  </h4>
                </div>
                <div>
                  <span class="badge bg-primary-transparent ms-2 me-1">12.24%</span><span class="text-muted fs-11">Since last week</span>
                </div>
              </div>
              <ul class="pt-2 list-unstyled top-country-sales-list">
                <li
                  v-for="(item, index) in dashboardData.countryStats"
                  :key="index"
                  :class="`${dashboardData.countryStats.length - 1 === index ? 'mb-0' : ''}`"
                >
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center lh-1 gap-2">
                      <span class="avatar avatar-xs avatar-rounded">
                        <BaseImg :src="item.flag" alt="" />
                      </span>
                      <span class="top-country-name">{{ item.name }}</span>
                    </div>
                    <div>
                      <i
                        :class="`ti ti-trending-${item.trend} fs-16 ${item.trend === 'up' ? 'text-success' : 'text-danger'}`"
                      />
                    </div>
                    <div class="fs-14">
                      {{ item.value }}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card atm-card border-0 overflow-hidden">
            <div class="card-body">
              <div class="atm-card-background-container">
                <BaseImg src="/images/ecommerce/png/21.png" alt="" />
              </div>
              <div class="d-flex align-items-center gap-2">
                <div>
                  <svg
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 3"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#ffd66e"
                      d="M30.07,31.722H97.931a12.415,12.415,0,0,1,12.415,12.415V83.865A12.413,12.413,0,0,1,97.933,96.278H30.069A12.415,12.415,0,0,1,17.654,83.864V44.138A12.416,12.416,0,0,1,30.07,31.722Z"
                    />
                    <path
                      fill="#005f75"
                      d="M97.931,30.047H30.069A14.1,14.1,0,0,0,15.98,44.135V83.862A14.106,14.106,0,0,0,30.069,97.953H97.931A14.106,14.106,0,0,0,112.02,83.862V44.135A14.1,14.1,0,0,0,97.931,30.047ZM71.883,51.653c0,.034.014.064.02.1a1.628,1.628,0,0,0,.173.511c.017.03.039.056.058.086a1.638,1.638,0,0,0,.351.4c.016.013.023.033.04.046a14.084,14.084,0,0,1-.008,22.421c-.023.018-.034.045-.056.064a1.523,1.523,0,0,0-.544.909,1.655,1.655,0,0,0-.042.207c0,.053-.031.1-.031.153V94.6H56.155V76.531c0-.048-.023-.089-.028-.137a1.607,1.607,0,0,0-.042-.209,1.632,1.632,0,0,0-.147-.433c-.02-.036-.047-.067-.069-.1a1.635,1.635,0,0,0-.358-.407c-.011-.008-.015-.021-.026-.029a14.081,14.081,0,0,1,0-22.429c.011-.008.015-.021.026-.029a1.635,1.635,0,0,0,.358-.407c.023-.035.049-.066.069-.1a1.632,1.632,0,0,0,.147-.433,1.607,1.607,0,0,0,.042-.209c0-.047.028-.088.028-.137V33.4H71.845V51.463A1.564,1.564,0,0,0,71.883,51.653ZM108.672,71.1H79.905a17.275,17.275,0,0,0,.133-13.878h28.633ZM19.328,57.218H47.962A17.274,17.274,0,0,0,48.1,71.1H19.328ZM30.069,33.4H52.807V50.678a17.492,17.492,0,0,0-2.967,3.191H19.328V44.135A10.751,10.751,0,0,1,30.069,33.4ZM19.328,83.862V74.444H50.07a17.517,17.517,0,0,0,2.736,2.878V94.6H30.069A10.753,10.753,0,0,1,19.328,83.862ZM97.931,94.6H75.193V77.325a17.509,17.509,0,0,0,2.738-2.88h30.74v9.418A10.753,10.753,0,0,1,97.931,94.6Zm10.74-40.735H78.16a17.492,17.492,0,0,0-2.966-3.191V33.4H97.931a10.751,10.751,0,0,1,10.74,10.739Z"
                    />
                  </svg>
                </div>
                <h6 class="fw-semibold mb-0 flex-fill text-fixed-black">
                  Debit Card
                </h6>
                <div>
                  <span class="float-end badge badge-sm bg-primary rounded-pill">Max Bank</span>
                </div>
              </div>
              <p class="fs-18 mb-3 text-fixed-black">
                **** **** **** ****
              </p>
              <div class="fs-15 mb-3 text-fixed-black">
                ELISA GIBSON ANABELLA
              </div>
              <div class="d-flex align-items-center gap-3 flex-wrap">
                <div class="flex-fill">
                  <span class="fs-13 mb-1 text-white-75 text-fixed-black">Exp Date:05/27</span>
                </div>
                <div>
                  <span class="fs-14 mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="32.003" height="20">
                    <path
                      fill="#26A6D1"
                      d="M19.994 10c0 5.524-4.475 10-9.997 10s-9.997-4.477-9.997-10 4.476-10 9.997-10 9.997 4.477 9.997 10z"
                    />
                    <path
                      fill="#E2574C"
                      d="M22.003 0c-2.242 0-4.306.747-5.974 1.994l.008.001c.328.317.69.54.969.905l-2.08.033c-.326.329-.623.687-.903 1.059h3.668c.279.335.537.626.771.996h-5.104c-.187.322-.36.653-.511.997h6.196c.162.343.307.602.43.965h-6.993c-.111.345-.206.698-.278 1.058h7.564c.074.346.131.666.17.992h-7.884c-.033.329-.05.663-.05 1h7.991c0 .354-.025.682-.061 1h-7.88c.034.339.084.672.15 1h7.552c-.078.324-.168.65-.281.988h-7.016c.106.342.235.674.376.998h6.21c-.172.364-.367.655-.582.996h-5.121c.202.35.425.684.667 1.004l3.684.055c-.314.377-.717.604-1.084.934.02.016-.587-.002-1.782-.021 1.818 1.876 4.359 3.046 7.178 3.046 5.523 0 10-4.477 10-10s-4.476-10-10-10z"
                    /></svg></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card overflow-hidden">
            <div class="card-header justify-content-between">
              <div class="card-title">
                Customers Satisfaction
                <a
                  href="javascript:void(0);"
                  class="d-block fs-12 text-muted fw-normal text-decoration-underline"
                >View report <i class="ti ti-arrow-narrow-right" /></a>
              </div>
              <div class="text-end">
                <span class="d-block fw-semibold">25,765</span>
                <span class="d-block fs-12 text-muted">Total Customers</span>
              </div>
            </div>
            <div class="card-body p-0">
              <ul class="list-group list-group-flush">
                <li
                  v-for="(item, index) in dashboardData.feedbackData"
                  :key="index"
                  class="list-group-item"
                >
                  <div class="d-flex align-items-center gap-2 mb-1">
                    <div :class="`fs-14 fw-semibold mb-0 text-${item.colorClass}`">
                      {{ item.percentage }}%
                    </div>
                    <div class="text-muted flex-fill fs-12">
                      {{ item.label }}
                    </div>
                    <div>
                      <span class="avatar avatar-xs">
                        <BaseImg :src="item.emojiSrc" alt="" />
                      </span>
                    </div>
                  </div>
                  <div
                    class="progress progress-xs progress-animate"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      :class="`progress-bar bg-${item.colorClass}`"
                      :style="`width: ${item.percentage}%`"
                    />
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
                Transaction History
              </div>
              <a href="javascript:void(0);" class="text-muted text-decoration-underline fs-12">View All <i class="ti ti-arrow-narrow-right" /></a>
            </div>
            <div class="card-body">
              <ul class="list-unstyled transaction-history-list">
                <li v-for="(item, index) in dashboardData.transactionsEcommerce" :key="index">
                  <div class="d-flex align-items-center gap-2">
                    <div class="lh-1">
                      <span class="avatar avatar-md avatar-rounded">
                        <BaseImg :src="item.image" alt="" />
                      </span>
                    </div>
                    <div class="flex-fill">
                      <div class="fw-semibold">
                        {{ item.name }}
                      </div>
                      <span class="text-muted fs-12">{{ item.method }}</span>
                    </div>
                    <div class="text-end">
                      <div class="fw-semibold">
                        {{ item.amount }}
                      </div>
                      <span class="badge" :class="[item.statusClass]">{{ item.status }}</span>
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
    <div class="col-xl-12">
      <div class="card custom-card overflow-hidden">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Order History
          </div>
          <div class="d-flex flex-wrap gap-2">
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="btn btn-outline-light btn-wave waves-effect waves-light"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >Filters<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
              </a>
              <ul class="dropdown-menu" role="menu">
                <li><a class="dropdown-item" href="javascript:void(0);">New</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Popular</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Relevant</a></li>
              </ul>
            </div>
            <div>
              <input
                class="form-control"
                type="text"
                placeholder="Search Here"
                aria-label=".form-control-sm example"
              >
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <TableComponent
            #cell="{ row }"
            table-class="table text-nowrap"
            :headers="[
              { text: 'Order ID' },
              { text: 'Customer' },
              { text: 'Product' },
              { text: 'Quantity', thClass: 'text-center' },
              { text: 'Total Amount' },
              { text: 'Payment Method' },
              { text: 'Date' },
              { text: 'Status' },
              { text: 'Action' },
            ]"
            :rows="dashboardData.ordersHistory"
          >
            <td :class="row.tdClass">
              <a href="javascript:void(0);">{{ row.id }}</a>
            </td>
            <td :class="row.tdClass">
              <a href="javascript:void(0);">{{ row.customer }}</a>
            </td>
            <td :class="row.tdClass">
              <div class="d-flex align-items-center gap-2">
                <div class="lh-1">
                  <span class="avatar avatar-sm avatar-rounded">
                    <BaseImg :src="row.productImage" alt="" />
                  </span>
                </div>
                <div>{{ row.productName }}</div>
              </div>
            </td>
            <td :class="`text-center ${row.tdClass}`">
              {{ row.quantity }}
            </td>
            <td :class="row.tdClass">
              {{ row.price }}
            </td>
            <td :class="row.tdClass">
              {{ row.paymentMethod }}
            </td>
            <td :class="row.tdClass">
              {{ row.date }}
            </td>
            <td :class="row.tdClass">
              <span class="badge" :class="[row.statusClass]">{{ row.status }}</span>
            </td>
            <td :class="row.tdClass">
              <div class="dropdown">
                <a
                  aria-label="anchor"
                  href="javascript:void(0);"
                  class="btn btn-icon btn-sm btn-light border"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="ri-more-2-fill" />
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);"><i class="ri-eye-line me-2" />View</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);"><i class="ri-pencil-line me-2" />Edit</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);"><i class="ri-delete-bin-line me-2" />Delete</a>
                  </li>
                </ul>
              </div>
            </td>
          </TableComponent>
        </div>
        <div class="card-footer">
          <div class="d-flex align-items-center flex-wrap">
            <div>Showing 6 Entries <i class="bi bi-arrow-right ms-2 fw-semibold" /></div>
            <div class="ms-auto">
              <nav aria-label="Page navigation" class="pagination-style-2">
                <ul class="pagination mb-0 flex-wrap">
                  <li class="page-item disabled">
                    <a class="page-link" href="javascript:void(0);"> Prev </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">1</a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="javascript:void(0);">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">
                      <i class="bi bi-three-dots" />
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">17</a>
                  </li>
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
  <!-- End:: row-2 -->
</template>

<style scoped>
/* Add your styles here */
</style>
