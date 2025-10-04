<script setup>
import { onMounted } from 'vue';
import * as widgetsData from "@/shared/data/widgetsdata"
import SpkEmployeeStatCard from "@/shared/@spk/reusable-widgets/spk-employeecard.vue"
import SpkSalesCard from "@/shared/@spk/reusable-widgets/spk-salescard.vue"
import SpkProductscard from "@/shared/@spk/reusable-widgets/spk-productscard.vue"
import TableComponent from "@/shared/@spk/table-reuseble/table-component.vue"
import Pageheader from '@/components/pageheader/pageheader.vue';
import BaseImg from '../components/Baseimage/BaseImg.vue';
import { Head } from '@inertiajs/vue3';
const jsVectorMap = window.jsVectorMap

const dataToPass = {
    title: "Widgets",
    currentpage: "Widgets",
    activepage: "Widgets"
}

const data = [{
    id: 2,
    name: "Map With Markers",
    chartid: "sales-locations",
    bodyclass: "text-center mx-auto"
},]

let windowWidth = window.innerWidth

onMounted(() => {
    // Map with Markers
    const markers = [{
        name: 'Argentina',
        coords: [-38.4161, -63.6167],
        style: {
            fill: 'var(--primary-color)'
        }
    },
    {
        name: 'France',
        coords: [46.6034, 1.8883],
        style: {
            fill: 'var(--primary-color)'
        }
    },
    {
        name: 'USA',
        coords: [37.0902, -95.7129],
        style: {
            fill: 'var(--primary-color)'
        }
    },
    ];
    const markersmap = new jsVectorMap({
        map: 'world_merc',
        selector: '#sales-locations',
        markersSelectable: true,
        onMarkerSelected(index, isSelected, selectedMarkers) {
            console.log(index, isSelected, selectedMarkers);
        },
        labels: {
            markers: {
                render(marker) {
                    return marker.name;
                },
            },
        },
        markers: markers,
        markerStyle: {
            initial: {
                r: 5,
                fill: 'var(--primary-color)',
                stroke: 'rgba(255,255,255,0.1)',
                strokeWidth: 2,
            }
        },
        markerLabelStyle: {
            initial: {
                fontSize: 13,
                fontWeight: 500,
                fill: '#35373e',
            },
        },
    });

});

</script>

<template>

    <Head title="Widgets | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row row-cols-xxl-5">
        <template v-for="card in widgetsData.Employeesdata">
            <SpkEmployeeStatCard :widget="card" />
        </template>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <template v-for="card in widgetsData.Salesdata">
            <SpkSalesCard :sales="card" />
        </template>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body">
                    <div class="row gy-4">
                        <template v-for="card in widgetsData.Productsdata">
                            <SpkProductscard :products="card" />
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xxl-3 col-xl-6">
            <div class="card custom-card overflow-hidden">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Top Categories
                    </div>
                    <a href="javascript:void(0);" class="fs-12 text-muted"> View All<i
                            class="ti ti-arrow-narrow-right ms-1"></i> </a>
                </div>
                <div class="card-body">
                    <div id="top-categories">
                        <apexchart height="155px" type="line" :options="widgetsData.Categoriesoptions"
                            :series="widgetsData.Categoriesseries" />
                    </div>
                </div>
                <div class="card-footer p-0">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="d-flex align-items-start justify-content-between">
                                <div class="top-category-type one">
                                    <div class="fw-medium">Electronics</div>
                                    <span class="fs-13 text-muted">Increased By<span
                                            class="text-success ms-1 fw-medium d-inline-block">18.67%</span></span>
                                </div>
                                <div class="text-end">
                                    <span class="d-block fs-13 text-muted">Sales</span>
                                    <span class="d-block fw-semibold mb-0">19,754</span>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-start justify-content-between">
                                <div class="top-category-type two">
                                    <div class="fw-medium">Fashion</div>
                                    <span class="fs-13 text-muted">Increased By<span
                                            class="text-success ms-1 fw-medium d-inline-block">35.46%</span></span>
                                </div>
                                <div class="text-end">
                                    <span class="d-block fs-13 text-muted">Sales</span>
                                    <span class="d-block fw-semibold mb-0">16,236</span>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-start justify-content-between">
                                <div class="top-category-type three">
                                    <div class="fw-medium">Furniture</div>
                                    <span class="fs-13 text-muted">Decresed By<span
                                            class="text-danger ms-1 fw-medium d-inline-block">23.43%</span></span>
                                </div>
                                <div class="text-end">
                                    <span class="d-block fs-13 text-muted">Sales</span>
                                    <span class="d-block fw-semibold mb-0">12,645</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6">
            <div class="card custom-card overflow-hidden">
                <div class="card-header">
                    <div class="card-title">
                        Top Country Sales
                    </div>
                </div>
                <div class="card-body" v-for="(map, index) in data" :key="index">
                    <div :id="map.chartid"></div>
                    <div class="mt-4">
                        <ul class="list-unstyled sales-locations-list">
                            <li v-for="(country, index) in widgetsData.Countries" :key="index">
                                <div class="d-flex align-items-center gap-2 mb-2">
                                    <div class="lh-1">
                                        <span class="avatar avatar-xs avatar-rounded">
                                            <BaseImg :src="country.flag" alt="" />
                                        </span>
                                    </div>
                                    <div class="flex-fill">{{ country.name }}</div>
                                    <div>{{ country.population.toLocaleString() }}</div>
                                </div>
                                <div class="progress progress-animate progress-xs" role="progressbar" aria-valuenow="75"
                                    aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated"
                                        :style="{ width: `${country.now}%` }"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Sales Revenue</div>
                </div>
                <div class="card-body">
                    <div id="salesOverview">
                        <apexchart height="365px" width="100%" type="bar" :options="widgetsData.Revenuesoptions"
                            :series="widgetsData.Revenuesseries" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-4 -->

    <!-- Start:: row-5 -->
    <div class="row">
        <div class="col-xxl-4 col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Top Categories
                    </div>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="btn btn-primary-light btn-sm" data-bs-toggle="dropdown"
                            aria-expanded="false"> This Week<i
                                class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                            <li><a class="dropdown-item active" href="javascript:void(0);">This Week</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row align-items-center justify-content-center">
                        <div class="col">
                            <div id="top-categories1" class="py-3 text-center">
                                <apexchart height="228px" type="donut" :options="widgetsData.Categoriesdataoptions"
                                    :series="widgetsData.Categoriesdataseries" />
                            </div>
                        </div>
                        <div class="col">
                            <ul class="list-unstyled top-categories-list1 gy-1">
                                <li vfor>
                                    <div class="d-flex align-items-center gap-2 justify-content-between">
                                        <div class="d-flex align-items-center gap-2"><i
                                                class="ri-circle-fill fs-10 text-primary"></i>Electronics</div>
                                        <div class="fw-semibold text-primary">31%</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center gap-2 justify-content-between">
                                        <div class="d-flex align-items-center gap-2"><i
                                                class="ri-circle-fill fs-10 text-secondary"></i>Fashion</div>
                                        <div class="fw-semibold text-secondary">26%</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center gap-2 justify-content-between">
                                        <div class="d-flex align-items-center gap-2"><i
                                                class="ri-circle-fill fs-10 text-info"></i>Furniture</div>
                                        <div class="fw-semibold text-info">18%</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center gap-2 justify-content-between">
                                        <div class="d-flex align-items-center gap-2"><i
                                                class="ri-circle-fill fs-10 text-warning"></i>Appliances</div>
                                        <div class="fw-semibold text-warning">14%</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center gap-2 justify-content-between">
                                        <div class="d-flex align-items-center gap-2"><i
                                                class="ri-circle-fill fs-10 text-success"></i>Gaming</div>
                                        <div class="fw-semibold text-success">11%</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="row">
                        <div class="col border-end border-inline-end-dashed">
                            <div class="text-center">
                                <span class="text-muted">Last Month</span>
                                <h4 class="fw-semibold mb-0">13,965</h4>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-center">
                                <span class="d-block text-muted mb-1">This Month</span>
                                <h4 class="fw-semibold mb-0">15,367</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-5 col-xl-6">
            <div class="card custom-card overflow-hidden">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Recent Orders
                    </div>
                    <a href="javascript:void(0);" class="link-primary fw-semibold">View All Orders<i
                            class="ri-arrow-right-s-line ms-1 align-middle"></i></a>
                </div>
                <div class="card-body p-0">
                    <TableComponent tableClass="table text-nowrap"
                        :headers="[{ text: 'Order ID' }, { text: 'Payment Mode' }, { text: 'Status' }, { text: 'Amount Paid' }, { text: 'Action' }]"
                        :rows="widgetsData.Ordersdata" v-slot:cell="{ row }">
                        <td :class="row.tdclass"><span class="fw-semibold">{{ row.id }}</span></td>
                        <td :class="row.tdclass">
                            <div>
                                <span class="d-block fw-semibold">{{ row.method }}</span>
                                <span class="d-block fs-12 text-muted">{{ row.methodDetails }}</span>
                            </div>
                        </td>
                        <td :class="row.tdclass"><span :class="`badge bg-${row.statusColor}`">{{ row.status }}</span>
                        </td>
                        <td :class="row.tdclass">
                            <div>
                                <span class="d-block fw-semibold">{{ row.amount }}</span>
                                <span class="d-block fs-12 text-muted">{{ row.date }}</span>
                            </div>
                        </td>
                        <td :class="row.tdclass">
                            <button class="btn btn-sm btn-outline-light btn-wave waves-effect waves-light">
                                <i class="fe fe-eye text-muted align-middle me-1"></i>
                                View
                            </button>
                        </td>
                    </TableComponent>
                </div>
            </div>
        </div>
        <div class="col-xxl-3">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Social Visitors
                    </div>
                </div>
                <div class="card-body py-0">
                    <div id="social-visitors">
                        <apexchart height="390px" type="bar" :options="widgetsData.Visitorsoptions"
                            :series="widgetsData.Visitorsseries" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-5 -->

    <!-- Start:: row-6 -->
    <div class="row">
        <div class="col-xxl-3 col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Social Traffic
                    </div>
                </div>
                <div class="card-body pb-0 px-0">
                    <div id="social-traffic1">
                        <apexchart height="315px" type="bar" :options="widgetsData.Trafficoptions"
                            :series="widgetsData.Trafficseries" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Recent Orders
                    </div>
                </div>
                <div class="card-body">
                    <div id="recent-orders">
                        <apexchart height="260px" type="donut" :options="widgetsData.Recentoptions"
                            :series="widgetsData.Recentseries" />
                    </div>
                </div>
                <div class="card-footer">
                    <div class="row gy-4">
                        <div class="col-xl-6" v-for="(item, index) in widgetsData.StatusData" :key="index">
                            <div class="d-flex align-items-start gap-3 flex-wrap">
                                <div>
                                    <span :class="`avatar avatar-rounded ${item.colorClass}`" v-html="item.svg">
                                    </span>
                                </div>
                                <div>
                                    <span class="d-block text-muted fs-13">{{ item.label }}</span>
                                    <span class="d-block fw-semibold fs-16">{{ item.count }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Recent Transactions
                    </div>
                    <a href="javascript:void(0);" class="fs-12 text-muted fw-medium"> View All<i
                            class="ti ti-arrow-narrow-right ms-1"></i> </a>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled widgets-transactions-list">
                        <li v-for="(item, index) in widgetsData.Transactionsdata" :key="index">
                            <div class="d-flex align-items-center gap-2">
                                <div class="lh-1">
                                    <span :class="`avatar avatar-md avatar-rounded ${item.bgClass}`" v-html="item.svg">
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <span class="d-block fw-semibold">{{ item.name }}</span>
                                    <span class="d-block text-muted fs-12">{{ item.time }}</span>
                                </div>
                                <div class="text-end">
                                    <span :class="`badge ${item.badgeClass}`">{{ item.status }}</span>
                                    <span class="d-block mt-1">{{ item.amount }}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Recent Activity</div>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled mb-0 ecommerce-recent-activity">
                        <li class="ecommerce-recent-activity-content" v-for="(item, index) in widgetsData.ActivityItems"
                            :key="index">
                            <div class="d-flex align-items-start">
                                <div class="me-3">
                                    <span
                                        :class="`avatar avatar-sm avatar-rounded bg-light ${item.avatarTextClass} fw-semibold`">
                                        <i :class="item.iconClass"></i>
                                    </span>
                                </div>
                                <div class="activity-content">
                                    <span class="d-block fw-medium">{{ item.title }}</span>
                                    <span class="d-block fs-12 text-muted">{{ item.subtitle }}</span>
                                </div>
                                <div class="flex-fill text-end">
                                    <span :class="`d-block ${item.timeColorClass} fs-11 op-7`">{{ item.time }}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-6 -->
</template>

<style scoped>
/* Add your styles here */
</style>
