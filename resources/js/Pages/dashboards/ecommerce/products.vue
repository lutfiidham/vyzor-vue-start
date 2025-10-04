<script setup>
import { ref, computed } from 'vue'
import * as productsData from '@/shared/data/dashboards/ecommerce/productsdata';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import Pageheader from '@/components/pageheader/pageheader.vue';
import SpkReusebleJobs from '@/shared/@spk/dashboards/jobs/dashboard/spk-reuseble-jobs.vue';
import BaseImg from '../../../components/Baseimage/BaseImg.vue';
import { Head, Link } from '@inertiajs/vue3';
const baseUrl = __BASE_PATH__
// Page metadata
const dataToPass = {
    activepage: 'Products',
    title: 'Dashboards',
    subtitle: 'Ecommerce',
    currentpage: 'Products',
}

// Reactive filter and sort state
const searchQuery = ref('')
const CategoriesValue = ref('All Categories')
const Categories = ['All Categories', 'Fashion', 'Home', 'Electronics']

const StatusValue = ref('All Status')
const Status = ['All Status', 'Published', 'Draft', 'Archived']

const StockValue = ref('All Stock')
const Stock = ['All Stock', 'In Stock', 'Out of Stock']

const SortValue = ref('Date Added')
const Sort = ['Date Added', 'Price', 'Product Name']

const products = ref([...productsData.users])

// Computed filtered & sorted products
const filteredProducts = computed(() => {
    return products.value
        .filter(product => {
            const matchesCategory =
                CategoriesValue.value === 'All Categories' || product.category === CategoriesValue.value

            const matchesStatus =
                StatusValue.value === 'All Status' || product.status === StatusValue.value

            const matchesStock =
                StockValue.value === 'All Stock' || product.stockStatus === StockValue.value

            const matchesSearch =
                product.name.toLowerCase().includes(searchQuery.value.toLowerCase())

            return matchesCategory && matchesStatus && matchesStock && matchesSearch
        })
        .sort((a, b) => {
            switch (SortValue.value) {
                case 'Price':
                    return parseFloat(a.price) - parseFloat(b.price)
                case 'Product Name':
                    return a.name.localeCompare(b.name)
                case 'Date Added':
                    return new Date(b.date).getTime() - new Date(a.date).getTime()
                default:
                    return 0
            }
        })
})


function deleteProduct(id) {
    Swal.fire({
        title: 'Are you sure?',
        text: "This product will be deleted permanently.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
        if (result.isConfirmed) {
            products.value = products.value.filter(product => product.id !== id)
            Swal.fire('Deleted!', 'The product has been deleted.', 'success')
        }
    })
}
</script>


<template>
    <Head title="Ecommerce-Products | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row row-cols-xxl-5 row-cols-md-3 row-cols-1">
        <div className="col" v-for='(idx) in productsData.productCards' :key='idx.id'>
            <SpkReusebleJobs :listCard="true" :imageIcon="false" :cardClass="`dashboard-main-card card ${idx.priceColor}`" :list="idx"
                :NoCountUp="true" :titleClass="`fs-13 fw-medium`"/>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card product-table-card">
                <div class="card-header justify-content-between border-bottom-0">
                    <!-- Search Bar -->
                    <div class="w-sm-25 w-100 w-sm-auto">
                        <input class="form-control" type="search" id="search-input" placeholder="Search Product" v-model="searchQuery" aria-label="search-product" />
                    </div>
                    <!-- Filters Section -->
                    <div class="row gy-2 w-sm-50">
                        <!-- Category Filter -->
                        <div class="col-sm col-12">
                            <VueMultiselect :searchable="true"  :allow-empty="false" :show-labels="false" placeholder="Select Category" v-model="CategoriesValue" :options="Categories" />
                        </div>
                        <!-- Status Filter -->
                        <div class="col-sm col-12">
                            <VueMultiselect :searchable="true" :allow-empty="false" :show-labels="false" id="blockchain" placeholder="Sort By" :multiple="false" v-model="StatusValue" :options="Status" :taggable="false">
                            </VueMultiselect>
                        </div>
                        <!-- Stock Filter -->
                        <div class="col-sm col-12">
                            <VueMultiselect :searchable="true" :allow-empty="false" :show-labels="false" id="blockchain" placeholder="Sort By" :multiple="false" v-model="StockValue" :options="Stock" :taggable="false">
                            </VueMultiselect>
                        </div>
                        <!-- Sort By Filter -->
                        <div class="col-sm col-12">
                            <VueMultiselect :searchable="true" :allow-empty="false" :show-labels="false" id="blockchain" placeholder="Sort By" :multiple="false" v-model="SortValue" :options="Sort":taggable="false">
                            </VueMultiselect>
                        </div>
                    </div>
                </div>

                <!-- Table inside the card-body -->
                <div class="card-body p-0 custom-product-table">
                    <div id="product-table" class="grid-card-table ">
                        <v-table :data="filteredProducts">
                            <template #head>
                                <v-th class="gridjs-th gridjs-th-sort" sortKey="id" defaultSort="asc">#</v-th>
                                <v-th class="gridjs-th gridjs-th-sort" sortKey="id">Product ID</v-th>
                                <v-th class="gridjs-th gridjs-th-sort" sortKey="name">Product Name</v-th>
                                <v-th class="gridjs-th gridjs-th-sort" sortKey="price">Price</v-th>
                                <v-th class="gridjs-th gridjs-th-sort" sortKey="stockStatus">Stock Status</v-th>
                                <v-th class="gridjs-th gridjs-th-sort" sortKey="date">Quantity</v-th>
                                <v-th class="gridjs-th gridjs-th-sort" sortKey="status">Status</v-th>
                                <v-th class="gridjs-th gridjs-th-sort" sortKey="status">Date Added</v-th>
                                <v-th class="gridjs-th gridjs-th-sort" sortKey="status">Actions</v-th>
                            </template>
                            <template #body="{ rows }">
                                <tr v-if="rows.length === 0">
                                    <td colspan="9" class="text-center py-4 gridjs-td">No matching records found</td>
                                </tr>
                                <tr v-for="row in rows" :key="row.id">
                                    <td class="gridjs-td">
                                        <span><input class="form-check-input" type="checkbox" id="product-SPK001" value="" aria-label="..."></span>
                                    </td>
                                    <td class="gridjs-td">
                                        <span><a href="javascript:void(0);">{{ row.id }}</a></span>
                                    </td>
                                    <td class="gridjs-td">
                                        <span>
                                            <Link :href="`${baseUrl}/dashboards/ecommerce/product-details`">
                                                <div class="d-flex align-items-center gap-3 position-relative">
                                                    <div class="lh-1">
                                                        <span class="avatar avatar-lg bg-light">
                                                            <BaseImg :src="row.image" alt="Product Image"/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span class="d-block fw-semibold">{{ row.name }}</span>
                                                        <span class="text-muted fs-13">{{ row.category }}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </span>
                                    </td>
                                    <td class="gridjs-td">{{ row.price }}</td>
                                    <td class="gridjs-td">
                                        <span>
                                            <span :class="`badge bg-${row.stockStatusColor ? 'success' : 'danger'}-transparent`">{{ row.stockStatus }}
                                            </span>
                                        </span>
                                    </td>
                                    <td class="gridjs-td"><span>{{ row.sales }}</span></td>
                                    <td class="gridjs-td">
                                        <span>
                                            <span :class="`text-${row.statusColor}`">{{ row.status }}</span>
                                        </span>
                                    </td>
                                    <td class="gridjs-td">{{ row.date }}</td>
                                    <td class="gridjs-td">
                                        <span>
                                            <div class="dropdown">
                                                <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-primary-light border"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ri-more-2-fill"></i>
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <Link class="dropdown-item" :href="`${baseUrl}/dashboards/ecommerce/product-details`"><i class="ri-eye-line me-2"></i>View</Link>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item btn-delete" href="javascript:void(0);" @click="deleteProduct(row.id)"><i class="ri-delete-bin-line me-2"></i>Delete</a>
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
.smart-table {
    width: 100%;
    border-collapse: collapse;
}

.smart-table th,
.smart-table td {
    padding: 8px;
    border: 1px solid #ddd;
}

.smart-table th {
    background-color: #f4f4f4;
    font-weight: bold;
}
</style>
