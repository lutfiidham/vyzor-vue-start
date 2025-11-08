<script setup>
import { ref, computed } from 'vue'
import * as CustomerData from '@/shared/data/dashboards/ecommerce/customersdata'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import Pageheader from '@/components/pageheader/pageheader.vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'

// Metadata
const picked = ref(new Date())
const dataToPass = {
  activepage: 'Customers List',
  title: 'Dashboards',
  subtitle: 'Ecommerce',
  currentpage: 'Customers List',
}

// Filters
const searchQuery = ref('')
const CategoriesValue = ref('Customer Status')
const Categories = ['Customer Status', 'Active', 'All Status', 'Blocked']
const SelectValue = ref('Select')
const Select = ['Select', 'Active', 'Block']
const SortValue = ref('') // Optional sorting feature
const Sort = ['Customer Name', 'Date Added']

// Make data reactive
const customers = ref([...CustomerData.CustomerTable])

// Computed filtered & sorted customers
const filteredProducts = computed(() => {
  return customers.value
    .filter((product) => {
      const matchesCategory =
        CategoriesValue.value === 'Customer Status' ||
        CategoriesValue.value === 'All Status' ||
        product.status === CategoriesValue.value

      const matchesSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase())

      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (SortValue.value) {
        case 'Customer Name':
          return a.name.localeCompare(b.name)
        case 'Date Added':
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        default:
          return 0
      }
    })
})

// Delete function with confirmation
function deleteCustomer(id) {
  Swal.fire({
    title: 'Are you sure?',
    text: 'This customer will be permanently deleted.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      customers.value = customers.value.filter((customer) => customer.id !== id)
      Swal.fire('Deleted!', 'Customer has been deleted.', 'success')
    }
  })
}
</script>

<template>
  <Head title="Ecommerce-Customers List | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />

  <!-- Start::row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header justify-content-between border-bottom-0">
          <!-- Search Bar -->
          <div class="w-sm-25">
            <input
              class="form-control"
              type="search"
              id="search-input"
              placeholder="Search Customer"
              v-model="searchQuery"
              aria-label="search-product"
            />
          </div>

          <!-- Filters Section -->
          <div class="d-flex gap-4 flex-wrap w-sm-50 justify-content-start justify-content-sm-end">
            <!-- Category Filter -->
            <div class="">
              <VueMultiselect
                :searchable="true"
                :allow-empty="false"
                :show-labels="false"
                placeholder="Customer Status"
                v-model="CategoriesValue"
                :options="Categories"
                :taggable="false"
              />
            </div>

            <!-- Stock Filter -->
            <div class="">
              <div class="dropdown d-grid">
                <button
                  class="btn btn-primary-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="ri-upload-2-line me-1"></i>Export
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="">
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);"
                      ><i class="bi bi-file-earmark-excel me-2"></i>Excel</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);"
                      ><i class="bi bi-file-earmark-excel me-2"></i>Csv</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);"
                      ><i class="bi bi-filetype-pdf me-2"></i>PDF</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);"
                      ><i class="bi bi-file-zip me-2"></i>Zip</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="d-grid">
              <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addtask">
                <i class="ri ri-add-line me-1"></i>Add Customer
              </button>
            </div>
          </div>

          <!-- Sort By Filter -->
        </div>

        <!-- Table inside the card-body -->
        <div class="card-body p-0 custom-product-list">
          <div id="product-table" class="grid-card-table">
            <v-table :data="filteredProducts" class="">
              <template #head>
                <v-th class="gridjs-th gridjs-th-sort" sortKey="id" defaultSort="asc">#</v-th>
                <v-th class="gridjs-th gridjs-th-sort" sortKey="id">Customer IP </v-th>
                <v-th class="gridjs-th gridjs-th-sort" sortKey="price">Customer Name</v-th>
                <v-th class="gridjs-th gridjs-th-sort" sortKey="stockStatus">Status</v-th>
                <v-th class="gridjs-th gridjs-th-sort" sortKey="date">Joining Date</v-th>
                <v-th class="gridjs-th gridjs-th-sort" sortKey="status">Actions</v-th>
              </template>

              <template #body="{ rows }">
                <tr v-if="rows.length === 0">
                  <td colspan="9" class="text-center py-4">No matching records found</td>
                </tr>
                <tr v-for="row in rows" :key="row.id" class="gridjs-tr">
                  <td data-column-id="#" class="gridjs-td">
                    <span
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        id="customer-192.168.1.1"
                        value=""
                        aria-label="..."
                    /></span>
                  </td>
                  <td data-column-id="customerIp" class="gridjs-td">
                    <span
                      ><a href="javascript:void(0);">{{ row.ip }}</a></span
                    >
                  </td>
                  <td data-column-id="customerName" class="gridjs-td">
                    <span>
                      <div class="d-flex align-items-center gap-3 position-relative">
                        <a href="javascript:void(0);" class="stretched-link"></a>
                        <div class="lh-1">
                          <span class="avatar avatar-md">
                            <BaseImg :src="row.avatar" alt="Customer Image" />
                          </span>
                        </div>
                        <div>
                          <span class="d-block fw-semibold">{{ row.name }}</span>
                          <span class="text-muted fs-13">{{ row.email }}</span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td data-column-id="status" class="gridjs-td">
                    <span
                      ><span
                        :class="`badge bg-${row.status === 'Active' ? 'success' : 'danger'}-transparent`"
                        >{{ row.status }}</span
                      ></span
                    >
                  </td>
                  <td data-column-id="joiningDate" class="gridjs-td">{{ row.joinedDate }}</td>
                  <td data-column-id="actions" class="gridjs-td">
                    <span>
                      <div class="dropdown">
                        <a
                          href="javascript:void(0);"
                          class="btn btn-icon btn-sm btn-primary-light border"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="ri-more-2-fill"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="javascript:void(0);"
                              ><i class="ri-pencil-line me-2"></i>Edit</a
                            >
                          </li>
                          <li>
                            <a
                              class="dropdown-item btn-delete"
                              href="javascript:void(0);"
                              @click="deleteCustomer(row.id)"
                              ><i class="ri-delete-bin-line me-2"></i>Delete</a
                            >
                          </li>
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
              <div role="status" aria-live="polite" class="gridjs-summary" title="Page 1 of 1">
                Showing <b>1</b> to <b>10</b> of <b>10</b> results
              </div>
              <div class="gridjs-pages">
                <button
                  tabindex="0"
                  role="button"
                  disabled=""
                  title="Previous"
                  aria-label="Previous"
                  class=""
                >
                  Previous
                </button>
                <button
                  tabindex="0"
                  role="button"
                  class="gridjs-currentPage"
                  title="Page 1"
                  aria-label="Page 1"
                >
                  1
                </button>
                <button
                  tabindex="0"
                  role="button"
                  disabled=""
                  title="Next"
                  aria-label="Next"
                  class=""
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-2 -->

  <!-- Start:: Add new customer modal -->
  <div class="modal fade" id="addtask" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content mt-5">
        <div class="modal-header">
          <h6 class="modal-title" id="mail-ComposeLabel">Add Customer</h6>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body px-4">
          <div class="row gy-2">
            <div class="col-xl-12">
              <label for="customer-name" class="form-label">Customer Name</label>
              <input
                type="text"
                class="form-control"
                id="customer-name"
                placeholder="Customer Name"
              />
            </div>
            <div class="col-xl-12">
              <label for="customer-email" class="form-label">Customer Email</label>
              <input
                type="email"
                class="form-control"
                id="customer-email"
                placeholder="Customer Email"
              />
            </div>
            <div class="col-xl-12">
              <label class="form-label">Joined Date</label>
              <div class="form-group">
                <div class="input-group salesDatePicker">
                  <div class="input-group-text text-muted"><i class="ri-calendar-line"></i></div>
                  <Datepicker
                    class="form-control custom-date-picker custom"
                    autoApply
                    placeholder="Choose date"
                    v-model="picked"
                  />
                </div>
              </div>
            </div>
            <div class="col-xl-12">
              <label class="form-label">Status</label>
              <VueMultiselect
                :searchable="true"
                :show-labels="false"
                placeholder="Customer Status"
                v-model="SelectValue"
                :options="Select"
                :taggable="false"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary">Add Customer</button>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: Add new customer modal -->
</template>

<style scoped>
/* Add your styles here */
</style>
