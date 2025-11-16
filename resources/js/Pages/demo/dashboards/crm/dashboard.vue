<script setup>
import { Head } from '@inertiajs/vue3'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkReusableCrmCard from '@/shared/@spk/dashboards/crm/spk-reusable-crmCard.vue'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import * as dashboardData from '@/shared/data/dashboards/crm/dashboarddata'

const dataToPass = {
  title: 'Dashboards',
  subtitle: 'CRM',
  currentpage: 'Dashboard',
  activepage: 'Dashboard',
}
</script>

<template>
  <Head title="Dashboards-CRM | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xxl-5">
      <div class="row">
        <div v-for="(item, index) in dashboardData.statCards" :key="index" class="col-lg-6">
          <SpkReusableCrmCard :card="item" />
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">
                Revenue Analytics
              </div>
            </div>
            <div class="card-body pb-0">
              <div id="crm-revenue-analytics">
                <Apexchart
                  height="318px"
                  type="line"
                  :options="dashboardData.crmOptions"
                  :series="dashboardData.crmSeries"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-4">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card overflow-hidden">
            <div class="card-header justify-content-between">
              <div class="card-title">
                Tasks List
              </div>
              <ul
                class="nav nav-tabs justify-content-end nav-tabs-header card-headertabs"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#today"
                    aria-selected="false"
                    tabindex="-1"
                  >Today</a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#Upcoming"
                    aria-selected="true"
                  >Upcoming</a>
                </li>
              </ul>
            </div>
            <div class="card-body todo-tab p-0">
              <div class="tab-content">
                <div id="today" class="tab-pane border-0" role="tabpanel">
                  <ul class="list-unstyled task-list-tab">
                    <li v-for="(item, index) in dashboardData.tasks" :key="index">
                      <div class="d-flex align-items-start gap-2 flex-wrap">
                        <div class="mb-3 form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            :checked="item.completed"
                          >
                        </div>
                        <div class="flex-fill">
                          <div class="d-flex align-items-center gap-2 mb-1">
                            <a href="javascript:void(0);" class="crm-task-name">{{ item.title }}</a>
                            <span
                              class="avatar avatar-xs avatar-rounded bg-light border text-muted fw-semibold"
                              data-bs-toggle="tooltip"
                              title="in-progress"
                              data-bs-original-title="Progress"
                            >
                              <i class="ti ti-info-circle fs-11" />
                            </span>
                          </div>
                          <div class="d-flex align-items-center gap-2 lh-1">
                            <a href="javascript:void(0);" class="fs-12">{{ item.code }}</a>
                            <div class="vr" />
                            <span class="text-muted mb-0 fs-12"><i class="ti ti-user me-1 fw-medium" />{{ item.assignee }}</span>
                            <div class="vr" />
                            <span
                              :class="`badge ${item.priority === 'High' ? 'bg-danger-transparent' : `${item.priority === 'Low' ? 'bg-success-transparent' : 'bg-warning-transparent'}`}`"
                            >{{ item.priority }}</span>
                          </div>
                        </div>
                        <div class="text-end">
                          <span class="d-block fw-medium">{{ item.dueTime }}</span>
                          <span class="d-block fs-12 text-muted">Due Time</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="Upcoming" class="tab-pane border-0 active show" role="tabpanel">
                  <ul class="list-unstyled task-list-tab">
                    <li v-for="(item, index) in dashboardData.upcomming" :key="index">
                      <div class="d-flex align-items-start gap-2 flex-wrap">
                        <div class="mb-3 form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            :checked="item.completed"
                          >
                        </div>
                        <div class="flex-fill">
                          <div class="d-flex align-items-center gap-2 mb-1">
                            <a href="javascript:void(0);" class="crm-task-name">{{ item.title }}</a>
                            <span
                              class="avatar avatar-xs avatar-rounded bg-light border text-muted fw-semibold"
                              data-bs-toggle="tooltip"
                              title="Not Started"
                              data-bs-original-title="Not Started"
                            >
                              <i class="ti ti-info-circle fs-11" />
                            </span>
                          </div>
                          <div class="d-flex align-items-center gap-2 lh-1">
                            <a href="javascript:void(0);" class="fs-12">{{ item.code }}</a>
                            <div class="vr" />
                            <span class="text-muted mb-0 fs-12"><i class="ti ti-user me-1 fw-medium" />{{ item.assignee }}</span>
                            <div class="vr" />
                            <span
                              :class="`badge ${item.priority === 'High' ? 'bg-danger-transparent' : `${item.priority === 'Low' ? 'bg-success-transparent' : 'bg-warning-transparent'}`}`"
                            >{{ item.priority }}</span>
                          </div>
                        </div>
                        <div class="text-end">
                          <span class="d-block fw-medium">{{ item.dueDate }}</span>
                          <span class="d-block fs-12 text-muted">Due Date</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="lead-title total">
                  Total Leads
                </div>
                <div class="lead-title target">
                  Leads Target
                </div>
              </div>
              <div class="progress-stacked progress-animate progress-sm my-3">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 68%"
                  aria-valuenow="68"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style="width: 32%"
                  aria-valuenow="32"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <div class="d-flex align-items-center gap-3 justify-content-between flex-wrap">
                <div>
                  <span class="text-success fw-medium me-2"><i class="ti ti-arrow-up me-1" />3.25%</span>
                  Compared to last week
                </div>
                <div>
                  <a href="javascript:void(0);" class="link-primary text-decoration-underline">Leads Report <i class="ti ti-arrow-narrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="card custom-card overflow-hidden">
        <div class="card-header">
          <div class="card-title">
            Leads By Source
          </div>
        </div>
        <div class="card-body">
          <div id="leads-source">
            <Apexchart
              height="205px"
              type="polarArea"
              :options="dashboardData.leadOptions"
              :series="dashboardData.leadSeries"
            />
          </div>
        </div>
        <div class="card-footer p-0">
          <ul class="list-group list-group-flush leads-source-list">
            <li
              v-for="(item, index) in dashboardData.trafficSources"
              :key="index"
              class="list-group-item"
            >
              <div class="d-flex align-items-center justify-content-between">
                <div class="fw-semibold">
                  {{ item.name }}
                </div>
                <div class="lh-1 text-end">
                  <span class="d-block fw-semibold mb-0"><span
                    :class="` ${item.trend === 'up' ? 'text-success' : 'text-danger'} d-inline-flex align-items-center fw-medium me-2 fs-12`"
                  ><i
                    :class="`${item.trend === 'up' ? 'ti ti-arrow-up' : 'ti ti-arrow-down'} me-1`"
                  />{{ item.percentage }}</span>{{ item.count }}</span>
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
  <div class="row">
    <div class="col-xxl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Top Deals
          </div>
        </div>
        <div class="card-body">
          <ul class="list-unstyled crm-top-deals">
            <li v-for="(item, index) in dashboardData.deals" :key="index">
              <div class="d-flex align-items-top flex-wrap">
                <div class="me-2">
                  <span v-if="item.avatar !== null" class="avatar avatar-sm avatar-rounded">
                    <BaseImg :src="item.avatar" alt="" />
                  </span>
                  <span
                    v-if="item.avatar === null"
                    class="avatar avatar-sm avatar-rounded bg-primary-transparent fw-semibold"
                  >
                    {{ item.initials }}
                  </span>
                </div>
                <div class="flex-fill">
                  <p class="fw-semibold mb-0">
                    {{ item.name }}
                  </p>
                  <span class="text-muted fs-12">{{ item.email }}</span>
                </div>
                <div class="fw-semibold fs-15">
                  {{ item.amount }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Deals Statistics
          </div>
        </div>
        <div class="card-body py-0">
          <div id="deals-statistics">
            <Apexchart
              height="351px"
              type="bar"
              :options="dashboardData.staticOptions"
              :series="dashboardData.staticSeries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-6">
      <div class="card custom-card overflow-hidden">
        <div class="card-header">
          <div class="card-title">
            Leads Overview
          </div>
        </div>
        <div class="card-body p-0">
          <TableComponent
            #cell="{ row }"
            table-class="table text-nowrap"
            :headers="[
              { text: 'Lead Name' },
              { text: 'Company' },
              { text: 'Status' },
              { text: 'Source' },
            ]"
            :rows="dashboardData.overviewtable"
          >
            <td :class="row.tdClass">
              <div class="d-flex align-items-center gap-2">
                <div class="lh-1">
                  <span class="avatar avatar-sm avatar-rounded">
                    <BaseImg :src="row.avatar" alt="" />
                  </span>
                </div>
                <div>{{ row.name }}</div>
              </div>
            </td>
            <td :class="row.tdClass">
              {{ row.company }}
            </td>
            <td :class="row.tdClass">
              <span :class="`badge ${row.status.colorClass}`">{{ row.status.label }}</span>
            </td>
            <td :class="row.tdClass">
              {{ row.source }}
            </td>
          </TableComponent>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card overflow-hidden">
        <div class="card-header">
          <div class="card-title">
            Top Deals
          </div>
        </div>
        <div class="card-body p-0">
          <TableComponent
            #cell="{ row }"
            table-class="table text-nowrap"
            :headers="[
              { text: 'Deal ID' },
              { text: 'Deal Name' },
              { text: 'Client Name' },
              { text: 'Deal Amount' },
              { text: 'Status' },
              { text: 'Closing Date' },
              { text: 'Sales Rep' },
              { text: 'Priority' },
              { text: 'Actions' },
            ]"
            :rows="dashboardData.topdealsTable"
          >
            <td :class="row.tdClass">
              <a href="javascript:void(0);">{{ row.id }}</a>
            </td>
            <td :class="row.tdClass">
              {{ row.title }}
            </td>
            <td :class="row.tdClass">
              <div class="d-flex align-items-center gap-2 position-relative">
                <a href="javascript:void(0);" class="stretched-link" />
                <div class="lh-1">
                  <span class="avatar avatar-sm avatar-rounded">
                    <BaseImg :src="row.companyLogo" alt="" />
                  </span>
                </div>
                <div>
                  {{ row.companyName }}
                </div>
              </div>
            </td>
            <td :class="row.tdClass">
              {{ row.amount }}
            </td>
            <td :class="row.tdClass">
              <span :class="`badge ${row.status.colorClass}`">{{ row.status.label }}</span>
            </td>
            <td :class="row.tdClass">
              {{ row.closeDate }}
            </td>
            <td :class="row.tdClass">
              {{ row.owner }}
            </td>
            <td :class="row.tdClass">
              {{ row.priority }}
            </td>
            <td :class="row.tdClass">
              <div class="btn-list">
                <button class="btn btn-icon btn-primary-light btn-sm">
                  <i class="ti ti-edit" />
                </button>
                <button class="btn btn-icon btn-danger-light btn-sm">
                  <i class="ti ti-trash" />
                </button>
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
  <!-- End:: row-3 -->
</template>

<style scoped>
/* Add your styles here */
</style>
