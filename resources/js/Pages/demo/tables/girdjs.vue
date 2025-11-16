<script setup>
import { Head } from '@inertiajs/vue3'
import { computed, ref } from 'vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SimpleCard from '@/shared/@spk/simple-card.vue'
import * as productsData from '@/shared/data/dashboards/ecommerce/productsdata'
import * as GriData from '@/shared/data/gridjsdata.js'
// Reactive data
const themeColor = ref(localStorage.getItem('vyzorcolortheme') === 'dark' ? 'dark' : 'light')
const dataToPass = {
  title: 'Tables',
  currentpage: 'GridJs',
  activepage: 'GridJs',
}

const filters = ref({
  name: {
    value: '',
    keys: ['name'],
  },
})

const SortValue = ref('') // Default sorting: none

// Get products array safely
const products = productsData?.users ?? []

// Computed: filtered and sorted products
const filteredProducts = computed(() => {
  const result = [...products]

  switch (SortValue.value) {
    case 'Price':
      result.sort((a, b) => Number.parseFloat(a.price) - Number.parseFloat(b.price))
      break
    case 'Product Name':
      result.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'Date Added':
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      break
  }

  return result
})

// Computed: filtered table data
const filteredTableData = computed(() => {
  let result = [...GriData.users]

  // Apply name filter
  if (filters.value.name.value) {
    const searchTerm = filters.value.name.value.toLowerCase()
    result = result.filter(row =>
      row.name.toLowerCase().includes(searchTerm),
    )
  }

  return result
})

// Methods
function nameLength(row) {
  return row.name.length
}

function dateSort(a, b) {
  const date1 = new Date(a.registered).getTime()
  const date2 = new Date(b.registered).getTime()

  return date1 - date2
}
</script>

<template>
  <Head title="Gridjs-Tables | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Basic Table -->
  <div class="row mb-4 custom-grid-table">
    <div class="col-xl-12">
      <SimpleCard title="Basic Table">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th class="gridjs-th gridjs-th-sort">
                  Date
                </th>
                <th class="gridjs-th gridjs-th-sort">
                  Name
                </th>
                <th class="gridjs-th gridjs-th-sort">
                  Email
                </th>
                <th class="gridjs-th gridjs-th-sort">
                  Id
                </th>
                <th class="gridjs-th gridjs-th-sort">
                  Price
                </th>
                <th class="gridjs-th gridjs-th-sort">
                  Quantity
                </th>
                <th class="gridjs-th gridjs-th-sort">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in GriData.users" :key="row.id">
                <td class="gridjs-td">
                  {{ row.date }}
                </td>
                <td class="gridjs-td">
                  {{ row.name }}
                </td>
                <td class="gridjs-td">
                  {{ row.email }}
                </td>
                <td class="gridjs-td">
                  {{ row.id }}
                </td>
                <td class="gridjs-td">
                  {{ row.price }}
                </td>
                <td class="gridjs-td">
                  {{ row.quantity }}
                </td>
                <td class="gridjs-td">
                  {{ row.total }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </SimpleCard>
    </div>
  </div>

  <!-- Table with Filters -->
  <div class="row mb-4 custom-grid-table">
    <div class="col-xl-12">
      <SimpleCard title="Table With Filters">
        <label class="form-label">Filter by Name:</label>
        <input
          v-model="filters.name.value"
          class="form-control mb-3 w-sm-25 custom-gridjs"
          placeholder="Search name"
        >

        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th class="gridjs-th gridjs-th-sort">
                  Date
                </th>
                <th class="gridjs-th gridjs-th-sort">
                  Name
                </th>
                <th class="gridjs-th gridjs-th-sort">
                  Email
                </th>
                <th class="gridjs-th gridjs-th-sort">
                  Id
                </th>
                <th class="gridjs-th gridjs-th-sort">
                  Price
                </th>
                <th class="gridjs-th gridjs-th-sort">
                  Quantity
                </th>
                <th class="gridjs-th gridjs-th-sort">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="filteredTableData.length === 0">
                <td class="gridjs-td text-center" colspan="7">
                  No matching records found
                </td>
              </tr>
              <tr v-for="row in filteredTableData" :key="row.id">
                <td class="gridjs-td">
                  {{ row.date }}
                </td>
                <td class="gridjs-td">
                  {{ row.name }}
                </td>
                <td class="gridjs-td">
                  {{ row.email }}
                </td>
                <td class="gridjs-td">
                  {{ row.id }}
                </td>
                <td class="gridjs-td">
                  {{ row.price }}
                </td>
                <td class="gridjs-td">
                  {{ row.quantity }}
                </td>
                <td class="gridjs-td">
                  {{ row.total }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </SimpleCard>
    </div>
  </div>

  <!-- Sortable Table -->
  <div class="row">
    <div class="col-xl-12">
      <SimpleCard title="Sortable Table" card-class-body="custom-product-list">
        <div class="table-responsive">
          <VTable :data="filteredProducts">
            <template #head>
              <VTh class="gridjs-th gridjs-th-sort" sort-key="id" default-sort="asc">
                #
              </VTh>
              <VTh class="gridjs-th gridjs-th-sort" sort-key="id">
                Product ID
              </VTh>
              <VTh class="gridjs-th gridjs-th-sort" sort-key="name">
                Product Name
              </VTh>
              <VTh class="gridjs-th gridjs-th-sort" sort-key="price">
                Price
              </VTh>
              <VTh class="gridjs-th gridjs-th-sort" sort-key="date">
                Quantity
              </VTh>
              <VTh class="gridjs-th gridjs-th-sort" sort-key="status">
                Status
              </VTh>
              <VTh class="gridjs-th gridjs-th-sort" sort-key="status">
                Actions
              </VTh>
            </template>

            <template #body="{ rows }">
              <tr v-for="row in rows" :key="row.id">
                <td class="gridjs-td">
                  <span><input
                    id="product-SPK001"
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    aria-label="..."
                  ></span>
                </td>
                <td class="gridjs-td">
                  <span><a href="javascript:void(0);">{{ row.id }}</a></span>
                </td>
                <td class="gridjs-td">
                  <span>
                    <a href="javascript:void(0);">
                      <div class="d-flex align-items-center gap-3 position-relative">
                        <div>
                          <span class="d-block fw-semibold">{{ row.name }}</span>
                          <span class="text-muted fs-13">{{ row.category }}</span>
                        </div>
                      </div>
                    </a>
                  </span>
                </td>
                <td class="gridjs-td">
                  {{ row.price }}
                </td>
                <td class="gridjs-td">
                  <span>{{ row.sales }}</span>
                </td>
                <td class="gridjs-td">
                  {{ row.date }}
                </td>
                <td class="gridjs-td">
                  <span>
                    <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon btn-sm btn-primary-light border"
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
                          <a class="dropdown-item btn-delete" href="javascript:void(0);"><i class="ri-delete-bin-line me-2" />Delete</a>
                        </li>
                      </ul>
                    </div>
                  </span>
                </td>
              </tr>
            </template>
          </VTable>
        </div>
      </SimpleCard>
    </div>
  </div>
</template>

<style scoped>
/* Optional custom styles */
</style>
