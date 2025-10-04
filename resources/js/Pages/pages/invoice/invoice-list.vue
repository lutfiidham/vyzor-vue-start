<script setup>
import { ref } from 'vue'
import * as InvoiceListData from '@/shared/data/pages/invoice/invoicelistdata'
import { defineAsyncComponent } from 'vue'
const CountUp = defineAsyncComponent(() => import('vue-countup-v3'))
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import BaseImg from '../../../components/Baseimage/BaseImg.vue'
import { Head, Link } from '@inertiajs/vue3'
const baseUrl = __BASE_PATH__
// reactive invoice list
const Invoice = ref([...InvoiceListData.Invoices])

// data to pass (can be a plain object or reactive if needed)
const dataToPass = {
  title: 'Pages',
  subtitle: 'Invoice',
  currentpage: 'Invoice List',
  activepage: 'Invoice List',
}

// method to delete invoice by id
function handleToDelete(id) {
  Invoice.value = Invoice.value.filter((invoice) => invoice.id !== id)
}
</script>

<template>
  <Head title="Invoice-List | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xxl-3 col-xl-6" v-for="idx in InvoiceListData.Invoicedata" :key="idx.id">
      <div :class="`card custom-card dashboard-main-card ${idx.cardClass}`">
        <div class="card-body p-4">
          <div class="d-flex align-items-start gap-3">
            <div class="flex-fill">
              <h6 class="mb-2 fs-12">{{ idx.title }}</h6>
              <div class="pb-0 mt-0">
                <div>
                  <div class="d-flex align-items-center gap-2 mb-2">
                    <h4 class="fw-medium mb-0 d-flex flex-wrap">
                      {{ idx.dollar
                      }}<span class="count-up"> <CountUp :end-val="idx.price"></CountUp> </span
                      >{{ idx.kelvin }}
                    </h4>
                    <span :class="`badge bg-${idx.color} text-fixed-white`">{{ idx.value }}</span>
                  </div>
                  <p class="text-muted fs-11 mb-0 lh-1">
                    <span :class="`text-${idx.percentColor} me-1 fw-medium d-inline-block`">
                      <i :class="`ri-arrow-${idx.arrow}-s-line me-1 align-middle`"></i
                      >{{ idx.percent }}
                    </span>
                    <span>this month</span>
                  </p>
                </div>
              </div>
            </div>
            <div
              :class="`avatar avatar-lg bg-${idx.cardClass}-transparent svg-${idx.cardClass}`"
              v-html="idx.svgIcon"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">Manage Invoices</div>
          <div class="d-flex">
            <Link
              :href="`${baseUrl}/pages/invoice/create-invoice`"
              class="btn btn-sm btn-primary btn-wave waves-light"
              ><i class="ri-add-line fw-medium align-middle me-1"></i> Create Invoice</Link
            >
            <div class="dropdown ms-2">
              <button
                class="btn btn-icon btn-secondary-light btn-sm btn-wave waves-light"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="ti ti-dots-vertical"></i>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="javascript:void(0);">All Invoices</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Paid Invoices</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Pending Invoices</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Overdue Invoices</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <TableComponent
              trClass="invoice-list"
              tableClass="table text-nowrap"
              :headers="[
                { text: 'Client', thClass: '' },
                { text: 'Invoice ID', thClass: '' },
                { text: 'Issued Date', thClass: '' },
                { text: 'Amount', thClass: '' },
                { text: 'Status', thClass: '' },
                { text: 'Due Date', thClass: '' },
                { text: 'Action', thClass: '' },
              ]"
              :rows="Invoice"
              v-slot:cell="{ row }"
            >
              <td>
                <div class="d-flex align-items-center">
                  <div class="me-2 lh-1">
                    <span class="avatar avatar-sm avatar-rounded">
                      <BaseImg :src="row.avatar" alt="" />
                    </span>
                  </div>
                  <div>
                    <p class="mb-0 fw-medium">{{ row.name }}</p>
                    <p class="mb-0 fs-11 text-muted">{{ row.email }}</p>
                  </div>
                </div>
              </td>
              <td>
                <a href="javascript:void(0);" class="fw-medium text-primary">
                  {{ row.invoiceId }}
                </a>
              </td>
              <td>
                {{ row.issueDate }}
              </td>
              <td>
                {{ row.amount }}
              </td>
              <td>
                <span :class="`badge bg-${row.statusColor}-transparent`">{{ row.status }}</span>
              </td>
              <td>
                {{ row.dueDate }}
              </td>
              <td>
                <button class="btn btn-primary-light btn-icon btn-sm">
                  <i class="ri-printer-line"></i>
                </button>
                <button
                  class="btn btn-danger-light btn-icon ms-1 btn-sm invoice-btn"
                  @click="handleToDelete(row.id)"
                >
                  <i class="ri-delete-bin-5-line"></i>
                </button>
              </td>
            </TableComponent>
          </div>
        </div>
        <div class="card-footer border-top-0">
          <div class="ms-auto">
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
  </div>
  <!--End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
