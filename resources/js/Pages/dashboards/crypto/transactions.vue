<script setup>
import * as transactionsData from '@/shared/data/dashboards/crypto/transactionsdata.js'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import SpkReusebleJobs from '@/shared/@spk/dashboards/jobs/dashboard/spk-reuseble-jobs.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import BaseImg from '../../../components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'

const dataToPass = {
  title: 'Dashboards',
  subtitle: 'Crypto',
  currentpage: 'Transactions',
  activepage: 'Transactions',
}
</script>

<template>
  <Head title="Crypto-Transactions | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xxl-3 col-lg-6" v-for="idx in transactionsData.transactionCard" :key="idx.id">
      <SpkReusebleJobs
        titleClass="mb-2 fs-12"
        :listCard="true"
        :imageIcon="false"
        :cardClass="`card  ${idx.cardClass}`"
        :list="idx"
        :CountUpValue="true"
      />
    </div>
  </div>
  <!--End::row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">Transaction History</div>
          <div class="d-flex flex-wrap gap-2">
            <div>
              <input
                class="form-control"
                type="search"
                placeholder="Search Here"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="btn btn-primary btn-wave waves-effect waves-light"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">This Month</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">This Year</a></li>
              </ul>
            </div>
            <div>
              <button class="btn btn-secondary btn-wave">View All</button>
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <TableComponent
            tableClass="table text-nowrap"
            :headers="[
              { text: '' },
              { text: 'Sender' },
              { text: 'Transaction Hash' },
              { text: 'Coin' },
              { text: 'Date' },
              { text: 'Amount' },
              { text: 'Receiver' },
              { text: 'Status' },
              { text: 'Actions' },
            ]"
            :rows="transactionsData.transactionsTable"
            v-slot:cell="{ row }"
          >
            <td :class="row.tdClass">
              <span
                :class="`avatar avatar-sm avatar-rounded ${row.direction === 'up' ? 'bg-success-transparent' : 'bg-danger-transparent'}`"
              >
                <i
                  :class="`${row.direction === 'up' ? 'ti ti-arrow-narrow-up text-success' : 'ti ti-arrow-narrow-down text-danger'} fw-medium fs-16`"
                ></i>
              </span>
            </td>
            <td :class="row.tdClass">
              <div class="d-flex align-items-center gap-2">
                <span class="avatar avatar-xs avatar-rounded">
                  <BaseImg :src="row.user.avatar" alt="" />
                </span>
                <div class="fw-medium">{{ row.user.name }}</div>
              </div>
            </td>
            <td :class="row.tdClass">
              <span>{{ row.id }}</span>
            </td>
            <td :class="row.tdClass">
              <div class="d-flex align-items-center gap-2">
                <span class="avatar avatar-xs avatar-rounded">
                  <BaseImg :src="row.crypto.icon" alt="" />
                </span>
                <div class="fw-medium">{{ row.crypto.name }}</div>
              </div>
            </td>
            <td :class="row.tdClass">
              <span>{{ row.date }}</span>
            </td>
            <td :class="row.tdClass">
              <span>{{ row.amount }}</span>
            </td>
            <td :class="row.tdClass">
              <span>{{ row.recipient }}</span>
            </td>
            <td :class="row.tdClass">
              <span :class="`badge bg-${row.statusColor}-transparent`">{{ row.status }}</span>
            </td>
            <td :class="row.tdClass">
              <button
                class="btn btn-primary-light btn-icon btn-sm"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="download"
              >
                <i class="ri-download-2-line"></i>
              </button>
              <button
                class="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Delete"
              >
                <i class="ri-delete-bin-5-line"></i>
              </button>
            </td>
          </TableComponent>
        </div>
        <div class="card-footer">
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
  <!-- End:: row-2 -->
</template>

<style scoped>
/* Add your styles here */
</style>
