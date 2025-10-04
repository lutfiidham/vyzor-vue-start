<script setup>
import { ref, computed } from 'vue';
import * as ordersData from '@/shared/data/dashboards/ecommerce/ordersdata';
import VueMultiselect from 'vue-multiselect';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'
import Pageheader from '@/components/pageheader/pageheader.vue';
import SpkReusebleJobs from '@/shared/@spk/dashboards/jobs/dashboard/spk-reuseble-jobs.vue';
import BaseImg from '../../../components/Baseimage/BaseImg.vue';
import { Head, Link } from '@inertiajs/vue3';

// Reactive state
const searchQuery = ref('');
const CategoriesValue = ref('Payment Status');
const StatusValue = ref('Delivery Status');
const SortValue = ref('Date Added');
const orders = ref([...ordersData.initialOrders]);
const baseUrl = __BASE_PATH__

const Categories = [
  'Payment Status',
  'All Status',
  'Cancelled',
  'Completed',
  'Failed',
  'Pending',
  'Refunded',
];

const Status = [
  'Delivery Status',
  'All Status',
  'Pending',
  'Shipped',
  'Delivered',
  'Cancelled'
];

const dataToPass = {
  activepage: 'Orders',
  title: 'Dashboards',
  subtitle: 'Ecommerce',
  currentpage: 'Orders',
};

// Computed filter and sort logic
const filteredProducts = computed(() => {
  return orders.value
    .filter(order => {
      const matchesCategory =
        CategoriesValue.value === 'Payment Status' ||
        CategoriesValue.value === 'All Status' ||
        order.paymentStatus === CategoriesValue.value;

      const matchesStatus =
        StatusValue.value === 'Delivery Status' ||
        StatusValue.value === 'All Status' ||
        order.shippingStatus === StatusValue.value;

      const matchesSearch =
        order.customerName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        order.orderId.toLowerCase().includes(searchQuery.value.toLowerCase());

      return matchesCategory && matchesStatus && matchesSearch;
    })
    .sort((a, b) => {
      switch (SortValue.value) {
        case 'Price':
          return parseFloat(a.amount.replace('$', '')) - parseFloat(b.amount.replace('$', ''));
        case 'Product Name':
          return a.customerName.localeCompare(b.customerName);
        case 'Date Added':
          return new Date(b.orderDate) - new Date(a.orderDate);
        default:
          return 0;
      }
    });
});
function ConfirmAlert(orderId) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      deleteOrder(orderId); // Perform delete

      Swal.fire({
        title: "Deleted!",
        text: "The order has been deleted.",
        icon: "success"
      });
    }
  });
}
function deleteOrder(orderId) {
  const index = orders.value.findIndex(order => order.orderId === orderId);
  if (index !== -1) {
    orders.value.splice(index, 1);
  }
}
</script>


<template>

  <Head title="Ecommerce-Orders | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row row-cols-xxl-5 row-cols-xl-3 row-cols-md-2 row-cols-1">
    <div className="col" v-for='(idx) in ordersData.ordersCard' :key='idx.id'>
      <SpkReusebleJobs :list="idx" :listCard="true" :imageIcon="false" :cardClass="`dashboard-main-card card ${idx.priceColor}`"
        :NoCountUp="true" />
    </div>
  </div>
  <!--End::row-1 -->

  <!-- Start::row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header justify-content-between border-bottom-0">
          <!-- Search Bar -->
          <div class="w-sm-25">
            <input class="form-control" type="search" id="search-input" placeholder="Search Product"
              v-model="searchQuery" aria-label="search-product">
          </div>

          <!-- Filters Section -->
          <div class="d-flex gap-4 flex-wrap w-sm-50 justify-content-end flex-fill">
            <!-- Category Filter -->
            <div>
              <div class="dropdown d-grid">
                <button class="btn btn-primary-light dropdown-toggle" type="button" id="dropdownMenuButton1"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="ri-upload-2-line me-1"></i>Export
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="javascript:void(0);"><i
                        class="bi bi-file-earmark-excel me-2"></i>Excel</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);"><i
                        class="bi bi-file-earmark-excel me-2"></i>Csv</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="bi bi-filetype-pdf me-2"></i>PDF</a>
                  </li>
                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="bi bi-file-zip me-2"></i>Zip</a>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Status Filter -->
            <div>
              <VueMultiselect :searchable="true" :show-labels="false" placeholder="Select Category"
                v-model="CategoriesValue" :options="Categories" />

            </div>

            <!-- Stock Filter -->
            <div>
              <VueMultiselect :searchable="true" :show-labels="false" id="blockchain" placeholder="Choose Royalities"
                :multiple="false" v-model="StatusValue" :options="Status" :taggable="false">
              </VueMultiselect>
            </div>
          </div>
        </div>

        <!-- Table inside the card-body -->
        <div class="card-body p-0 custom-table custom-product-list">
          <div id="orders-table" class="grid-card-table">
            <v-table :data="filteredProducts">
              <template #head>
                <v-th class="gridjs-th gridjs-th-sort" sortKey="id" defaultSort="asc">#</v-th>
                <v-th class="gridjs-th gridjs-th-sort" sortKey="id">Order ID</v-th>
                <v-th class="gridjs-th gridjs-th-sort" sortKey="name">Customer</v-th>
                <v-th class="gridjs-th gridjs-th-sort" sortKey="price">Price</v-th>
                <v-th class="gridjs-th gridjs-th-sort" sortKey="stockStatus">Delivery Status</v-th>
                <v-th class="gridjs-th gridjs-th-sort" sortKey="date">Payment Method</v-th>
                <v-th class="gridjs-th gridjs-th-sort" sortKey="status">Payment Status</v-th>
                <v-th class="gridjs-th gridjs-th-sort" sortKey="status">Ordered Date</v-th>
                <v-th class="gridjs-th gridjs-th-sort" sortKey="status">Actions</v-th>
              </template>

              <template #body="{ rows }">
                <tr v-if="rows.length === 0">
                  <td colspan="9" class="text-center py-4">No matching records found</td>
                </tr>
                <tr v-for="row in rows" :key="row.id" class="gridjs-tr">
                  <td data-column-id="#" class="gridjs-td"><span><input class="form-check-input" type="checkbox"
                        id="order-#SPK001" value="" aria-label="..."></span></td>
                  <td data-column-id="orderId" class="gridjs-td"><span><a href="javascript:void(0);"
                        class="text-primary text-decoration-underline">{{ row.orderId }}</a></span></td>
                  <td data-column-id="customer" class="gridjs-td"><span>
                      <Link :href="`${baseUrl}/dashboards/ecommerce/order-details`">
                        <div class="d-flex align-items-center gap-3 position-relative">
                          <div class="lh-1">
                            <span class="avatar avatar-md avatar-rounded">
                              <BaseImg :src="row.avatar" alt="User Image"/>
                            </span>
                          </div>
                          <div>
                            <span class="d-block fw-semibold">{{ row.customerName }}</span>
                            <span class="text-muted fs-13">{{ row.email }}</span>
                          </div>
                        </div>
                      </Link>
                    </span></td>
                  <td data-column-id="price" class="gridjs-td">{{ row.amount }}</td>
                  <td data-column-id="deliveryStatus" class="gridjs-td"><span><span
                        :class="`badge bg-${row.shippingStatusColor}-transparent`">{{ row.shippingStatus
                        }}</span></span></td>
                  <td data-column-id="paymentMethod" class="gridjs-td"><span>{{ row.paymentMethod }}</span></td>
                  <td data-column-id="paymentStatus" class="gridjs-td"><span><span
                        :class="`text-${row.paymentStatusColor}`"><i class="ri-circle-fill me-1 fs-10"></i>{{
                        row.paymentStatus }}</span></span></td>
                  <td data-column-id="orderedDate" class="gridjs-td">{{ row.orderDate }}</td>
                  <td data-column-id="actions" class="gridjs-td"><span>
                      <div class="dropdown">
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-primary-light border"
                          data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="ri-more-2-fill"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <Link class="dropdown-item" :href="`${baseUrl}/dashboards/ecommerce/order-details`"><i
                                class="ri-eye-line me-2"></i>View</Link>
                          </li>
                          <li><a class="dropdown-item btn-delete" href="javascript:void(0);"
                              @click="ConfirmAlert(row.orderId)"><i class="ri-delete-bin-line me-2"></i>Delete</a></li>
                        </ul>
                      </div>
                    </span>
                  </td>
                </tr>
              </template>
            </v-table>
          </div>
          <div class="gridjs-footer">
            <div class="gridjs-pagination">
              <div role="status" aria-live="polite" class="gridjs-summary" title="Page 1 of 1">Showing <b>1</b> to <b>10</b> of <b>10</b> results</div>
              <div class="gridjs-pages">
                <button tabindex="0" role="button" disabled="" title="Previous" aria-label="Previous" class="">Previous</button>
                <button tabindex="0" role="button" class="gridjs-currentPage" title="Page 1" aria-label="Page 1">1</button>
                <button tabindex="0" role="button" disabled="" title="Next" aria-label="Next" class="">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-2 -->
</template>

<style scoped>
/* Add your styles here */
</style>
