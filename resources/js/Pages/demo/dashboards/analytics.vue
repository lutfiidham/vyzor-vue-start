<script setup>
import { Head } from '@inertiajs/vue3'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkReusableAnlyticsCard from '@/shared/@spk/dashboards/spk-reusable-anlyticsCard.vue'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import * as analyticsData from '@/shared/data/dashboards/analyticsdata'

const dataToPass = {
  title: 'Dashboards',
  currentpage: 'Analytics',
  activepage: 'Analytics',
}
</script>

<template>
  <Head title="Analytics | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xxl-9">
      <div class="row">
        <SpkReusableAnlyticsCard :analytic-data="analyticsData.analyticData" />
        <div class="col-xxl-4">
          <div class="card custom-card">
            <div class="card-header justify-content-between">
              <div class="card-title">
                Sessions By Device
              </div>
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="p-2 fs-12 text-muted"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  View All<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                </a>
                <ul class="dropdown-menu" role="menu">
                  <li><a class="dropdown-item" href="javascript:void(0);">Day</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <div id="sessions-device">
                <Apexchart
                  height="259px"
                  type="donut"
                  :options="analyticsData.sessionoptions"
                  :series="analyticsData.sessionseries"
                />
              </div>
            </div>
            <div class="card-footer p-0">
              <div class="row">
                <div class="col">
                  <div class="p-3 text-center border-end">
                    <h5 class="fw-semibold mb-1">
                      1754
                    </h5>
                    <span class="fs-12 d-block">Mobile</span>
                  </div>
                </div>
                <div class="col">
                  <div class="p-3 text-center border-end">
                    <h5 class="fw-semibold mb-1">
                      1234
                    </h5>
                    <span class="fs-12 d-block">Tablet</span>
                  </div>
                </div>
                <div class="col">
                  <div class="p-3 text-center">
                    <h5 class="fw-semibold mb-1">
                      878
                    </h5>
                    <span class="fs-12 d-block">Desktop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-8">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">
                Audience Metrics
              </div>
            </div>
            <div class="card-body">
              <div id="audience-metrics">
                <Apexchart
                  height="330px"
                  type="line"
                  :options="analyticsData.audienceoptions"
                  :series="analyticsData.audienceseries"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4">
          <div class="card custom-card overflow-hidden">
            <div class="card-header">
              <div class="card-title">
                Visitors By Countries
              </div>
            </div>
            <div class="card-body p-0">
              <TableComponent
                #cell="{ row }"
                table-class="table text-nowrap"
                :headers="[{ text: 'S.No' }, { text: 'Country' }, { text: 'Visitors' }]"
                :rows="analyticsData.countryData"
              >
                <td class="border-bottom-0">
                  {{ row.rank }}
                </td>
                <td class="border-bottom-0">
                  <div class="d-flex align-items-center gap-2">
                    <div class="lh-1">
                      <span class="avatar avatar-xs">
                        <BaseImg :src="row.flagUrl" :alt="row.country" />
                      </span>
                    </div>
                    <div class="fw-semibold">
                      {{ row.country }}
                    </div>
                  </div>
                </td>
                <td class="border-bottom-0">
                  <span class="fs-12 text-muted me-2">(<i
                    :class="`ti ti-arrow-${row.arrow} text-${row.arrow === 'up' ? 'success' : 'danger'} fs-16 align-middle`"
                  />{{ row.percentageChange }})</span>{{ row.count }}
                </td>
              </TableComponent>
            </div>
          </div>
        </div>
        <div class="col-xxl-8">
          <div class="card custom-card overflow-hidden">
            <div class="card-header justify-content-between">
              <div class="card-title">
                Top Campaigns
              </div>
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="p-2 fs-12 text-muted tag-link"
                  data-bs-toggle="dropdown"
                >
                  View All<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                </a>
                <ul class="dropdown-menu" role="menu">
                  <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
                </ul>
              </div>
            </div>
            <div class="card-body p-0">
              <TableComponent
                #cell="{ row }"
                table-class="table text-nowrap top-campaigns-table"
                :headers="[
                  { text: 'Provider' },
                  { text: 'Sales' },
                  { text: 'Goal' },
                  { text: 'Status' },
                  { text: 'Ation', thClass: 'text-center' },
                ]"
                :rows="analyticsData.influencerData"
              >
                <td :class="row.tableClass">
                  <div class="d-flex align-items-center lh-1">
                    <span class="avatar avatar-sm p-1 bg-light me-2">
                      <BaseImg :src="row.avatarUrl" />
                    </span>
                    <div>
                      <p class="fw-medium mb-1">
                        {{ row.name }}
                      </p>
                      <span class="fs-12 text-muted">{{ row.role }}</span>
                    </div>
                  </div>
                </td>
                <td :class="row.tableClass">
                  {{ row.earnings }}
                </td>
                <td :class="row.tableClass">
                  <span :class="`text-${row.percentageColor}`">{{ row.percentage }}</span>
                </td>
                <td :class="row.tableClass">
                  <span :class="`badge bg-${row.statusColor}-transparent`">{{ row.status }}</span>
                </td>
                <td :class="`text-end ${row.tableClass}`">
                  <div class="btn-list">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-light btn-icon btn-sm"
                      data-bs-toggle="tooltip"
                      title=""
                      data-bs-original-title="Edit"
                      aria-label="Edit"
                    ><i class="bi bi-pencil-square" /></a>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-light btn-icon btn-sm"
                      data-bs-toggle="tooltip"
                      title=""
                      data-bs-original-title="Delete"
                      aria-label="Delete"
                    ><i class="bi bi-trash" /></a>
                  </div>
                </td>
              </TableComponent>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header justify-content-between">
              <div class="card-title">
                Engagement Metrics
              </div>
              <div class="d-flex flex-wrap gap-2">
                <div>
                  <input
                    class="form-control form-control-sm"
                    type="text"
                    placeholder="Search Here"
                    aria-label=".form-control-sm example"
                  >
                </div>
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
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
              <TableComponent
                #cell="{ row }"
                table-class="table text-nowrap"
                :headers="[
                  { text: 'S.No', thClass: 'text-center' },
                  { text: 'User' },
                  { text: 'Sessions' },
                  { text: 'Country' },
                  { text: 'Page Views' },
                  { text: 'Bounce Rate' },
                  { text: 'Conversion Rate', thClass: 'text-center' },
                ]"
                :rows="analyticsData.engagementdata"
              >
                <td class="text-center">
                  {{ row.rank }}
                </td>
                <td>
                  <div class="d-flex align-items-center gap-2">
                    <div class="lh-1">
                      <span class="avatar avatar-sm avatar-rounded">
                        <BaseImg :src="row.avatarUrl" alt="" />
                      </span>
                    </div>
                    <div>
                      {{ row.name }}
                    </div>
                  </div>
                </td>
                <td>{{ row.clicks }}</td>
                <td>
                  <div class="d-flex align-items-center gap-2">
                    <div class="lh-1">
                      <span class="avatar avatar-xs avatar-rounded">
                        <BaseImg :src="row.countryFlagUrl" alt="" />
                      </span>
                    </div>
                    <div>
                      {{ row.country }}
                    </div>
                  </div>
                </td>
                <td>{{ row.views }}</td>
                <td>{{ row.conversionRate }}</td>
                <td class="text-center">
                  {{ row.percentage }}
                </td>
              </TableComponent>
            </div>
            <div class="card-footer border-top-0">
              <div class="d-flex align-items-center flex-wrap">
                <div>Showing 5 Entries <i class="bi bi-arrow-right ms-2 fw-semibold" /></div>
                <div class="ms-auto">
                  <nav aria-label="Page navigation" class="pagination-style-4">
                    <ul class="pagination mb-0">
                      <li class="page-item disabled">
                        <a class="page-link" href="javascript:void(0);"> Prev </a>
                      </li>
                      <li class="page-item active">
                        <a class="page-link" href="javascript:void(0);">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="javascript:void(0);">2</a>
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
    </div>
    <div class="col-xxl-3">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card overflow-hidden">
            <div class="card-header">
              <div class="card-title">
                Browser Insights
              </div>
            </div>
            <div class="card-body">
              <ul class="list-unstyled browser-insights-list">
                <li v-for="(item, index) in analyticsData.browsersData" :key="index">
                  <div class="d-flex align-items-start gap-3">
                    <div class="lh-1">
                      <span class="avatar avatar-rounded avatar-sm">
                        <BaseImg :src="item.imageUrl" alt="" />
                      </span>
                    </div>
                    <div class="flex-fill">
                      <span class="fw-medium">{{ item.name }}</span>
                      <span class="d-block text-muted fs-12">{{ item.company }}</span>
                    </div>
                    <div class="text-end w-25">
                      <span class="d-block mb-1 fw-semibold">
                        {{ item.downloads }}
                      </span>
                      <div class="progress progress-animate progress-xs w-75 ms-auto">
                        <div
                          :class="`progress-bar bg-${item.progressColor}`"
                          role="progressbar"
                          :style="`width: ${item.progress}%`"
                          aria-valuenow="78"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header justify-content-between">
              <div class="card-title">
                Users By Time Of Week
              </div>
            </div>
            <div class="card-body p-0">
              <div id="users-by-time">
                <Apexchart
                  height="262px"
                  type="heatmap"
                  :options="analyticsData.timeoptions"
                  :series="analyticsData.timeseries"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">
                Top Referral Pages
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex align-items-center mb-3 flex-wrap">
                <h4 class="fw-bold mb-0">
                  4,289
                </h4>
                <div class="ms-2">
                  <span class="badge bg-success-transparent">1.02<i class="ri-arrow-up-s-fill align-mmiddle ms-1" /></span>
                  <span class="text-muted ms-1 text-nowrap">compared to last week</span>
                </div>
              </div>
              <div class="progress-stacked progress-animate progress-sm mb-4">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 21%"
                  aria-valuenow="21"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
                <div
                  class="progress-bar bg-info"
                  role="progressbar"
                  style="width: 26%"
                  aria-valuenow="26"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  style="width: 35%"
                  aria-valuenow="35"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style="width: 18%"
                  aria-valuenow="18"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <ul class="list-unstyled mb-0 pt-2 top-referral-pages">
                <li
                  v-for="(item, index) in analyticsData.listItemsData"
                  :key="index"
                  :class="item.className"
                >
                  <div class="d-flex align-items-center justify-content-between">
                    <div>{{ item.path }}</div>
                    <div class="fs-12 text-muted">
                      {{ item.views }}
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
                Average Sessions
              </div>
            </div>
            <div class="card-body pb-0">
              <div class="d-flex gap-3 flex-wrap align-items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  class="text-primary bg-primary-transparent rounded-1 px-1"
                  viewBox="0 0 24 24"
                >
                  <g fill="currentColor">
                    <path fill-opacity="0.5" d="M8 13h6v4H8z" />
                    <path d="M6 6H4v12h2zm14 1H8v4h12z" />
                  </g>
                </svg>
                <div>
                  <h6 class="fw-medium mb-0">
                    3m 45s
                  </h6>
                </div>
                <div class="ms-auto text-muted fs-11 text-end">
                  <div class="fw-medium">
                    From Last Week
                  </div>
                  <span class="text-success fw-semibold">
                    1.25% <i class="ri-arrow-up-line lh-1 align-center fs-14 fw-normal" /></span>
                </div>
              </div>
              <div id="analytics-avgsession">
                <Apexchart
                  height="283px"
                  type="bar"
                  :options="analyticsData.averageoptions"
                  :series="analyticsData.averageseries"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
