<script setup>
import * as SocialMediaData from "@/shared/data/dashboards/socialmediadata";
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import Pageheader from "@/components/pageheader/pageheader.vue";
import SpkReusableSocialmediaCard from "@/shared/@spk/dashboards/spk-reusable-socialmediaCard.vue";
import BaseImg from "../../components/Baseimage/BaseImg.vue";
import { Head } from "@inertiajs/vue3";
const dataToPass = {
    title: "Dashboards",
    currentpage: "Social Media",
    activepage: "Social Media"
}
</script>

<template>
    <Head title="Social Media | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />
    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xxl-9">
            <div class="row">
                <div class="col-xxl-3 col-md-6" v-for="(idx) in SocialMediaData.SocialCards" :key="idx.id">
                    <SpkReusableSocialmediaCard :card="idx" />
                </div>
                <div class="col-xl-8">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Profile Visits
                            </div>
                        </div>
                        <div class="card-body">
                            <div id="profile-analysis">
                                <apexchart type="line" height="320px" :options="SocialMediaData.SocialMediaOptions"
                                    :series="SocialMediaData.SocialMediaSeries" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Audience By Gender
                            </div>
                        </div>
                        <div class="card-body">
                            <div id="audience-by-gender">
                                <apexchart type="radar" height="280px" :options="SocialMediaData.SocialGenderoptions"
                                    :series="SocialMediaData.SocialGenderseries" />
                            </div>
                            <div class="row mt-0">
                                <div class="col-6 border-end border-inline-end-dashed text-center">
                                    <p class="text-muted mb-1 fs-12">Male</p>
                                    <h6 class="text-primary mb-0">12.34K</h6>
                                </div>
                                <div class="col-6 text-center">
                                    <p class="text-muted mb-1 fs-12">Female</p>
                                    <h6 class="text-secondary mb-0">10.19K</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card custom-card overflow-hidden">
                        <div class="card-header">
                            <div class="card-title">
                                Top Audience Countries
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive custom-table-list">
                                <TableComponent tableClass="table text-nowrap"
                                    :headers="[{ text: 'S.No', thClass: '' }, { text: 'Country', thClass: '' }, { text: 'Engagement', thClass: '' }, { text: 'Followers', thClass: '' },]"
                                    :rows="SocialMediaData.Audiencedata" v-slot:cell="{ row }">
                                    <td :class="row.tdClass">{{ row.id }}</td>
                                    <td :class="row.tdClass">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm">
                                                    <BaseImg :src="row.flag" alt=""/>
                                                </span>
                                            </div>
                                            <div class="fw-semibold">{{ row.country }}</div>
                                        </div>
                                    </td>
                                    <td :class="row.tdClass">
                                        <span class="d-block">
                                            {{ row.likes }}<i class="ti ti-thumb-up text-muted fs-18 mx-1 d-inline-block"></i>
                                        </span>
                                    </td>
                                    <td :class="row.tdClass">
                                        <div class="d-block">
                                            {{ row.count }} <span
                                                :class="`fs-12 text-${row.arrow === 'up' ? 'success' : 'danger'}  ms-1 d-inline-flex`">
                                                <i :class="`ti ti-trending-${row.arrow} me-1 align-middle`"></i>{{
                                                    row.change }}%
                                            </span>
                                        </div>
                                    </td>
                                </TableComponent>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card custom-card overflow-hidden">
                        <div class="card-header">
                            <div class="card-title">
                                Post Insights
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <TableComponent tableClass="table text-nowrap"
                                    :headers="[{ text: 'Post Name', thClass: '' }, { text: 'Posted', thClass: '' }, { text: 'Platform', thClass: '' }, { text: 'Views', thClass: '' }, { text: 'Action', thClass: 'text-center' },]"
                                    :rows="SocialMediaData.Insightsdata" v-slot:cell="{ row }">
                                    <td :class="row.tdClass">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm">
                                                    <BaseImg :src="row.image"/>
                                                </span>
                                            </div>
                                            <span class="fw-medium">{{ row.title }}</span>
                                        </div>
                                    </td>
                                    <td :class="row.tdClass">
                                        {{ row.date }}
                                    </td>
                                    <td :class="row.tdClass"><span
                                            :class="`badge bg-${row.platformColor}-transparent`">{{ row.platform
                                            }}</span></td>
                                    <td :class="row.tdClass">
                                        {{ row.followers }}
                                    </td>
                                    <td :class="`text-end ${row.tdClass}`">
                                        <div class="dropdown">
                                            <a aria-label="anchor" href="javascript:void(0);" data-bs-toggle="dropdown"
                                                aria-expanded="false" class=" btn btn-icon btn-sm btn-primary-light">
                                                <i class="ti ti-dots-vertical"></i>
                                            </a>
                                            <ul class="dropdown-menu" role="menu">
                                                <li><a class="dropdown-item  d-inline-flex align-items-center"
                                                        href="javascript:void(0);"><i
                                                            class="ti ti-edit me-2"></i>Edit</a></li>
                                                <li><a class="dropdown-item  d-inline-flex align-items-center"
                                                        href="javascript:void(0);"><i
                                                            class="ti ti-trash me-2"></i>Delete</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </TableComponent>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header justify-content-between">
                            <div class="card-title">
                                Social Media Performance Overview
                            </div>
                            <div class="d-flex flex-wrap gap-2">
                                <div>
                                    <input class="form-control form-control-sm" type="text" placeholder="Search Here"
                                        aria-label=".form-control-sm example">
                                </div>
                                <div class="dropdown">
                                    <a href="javascript:void(0);"
                                        class="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                                        data-bs-toggle="dropdown" aria-expanded="false"> Sort By<i
                                            class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
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
                            <div class="table-responsive">
                                <TableComponent tableClass="table text-nowrap" :showCheckbox="true"
                                    :headers="[{ text: 'Platform', thClass: '' }, { text: 'Posts', thClass: '' }, { text: 'Likes', thClass: '' }, { text: 'Shares', thClass: '' }, { text: 'Comments', thClass: '' }, { text: 'Impressions', thClass: '' }, { text: 'Followers', thClass: '' }, { text: 'CTR (%)', thClass: '' }, { text: 'Actions', thClass: '' },]"
                                    :rows="SocialMediaData.SocialMediaData" v-slot:cell="{ row }">
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span :class="`avatar avatar-sm bg-${row.color}-transparent`">
                                                    <i :class="`ri-${row.avatar} fs-5`"></i>
                                                </span>
                                            </div>
                                            <div>{{ row.platform }}</div>
                                        </div>
                                    </td>
                                    <td>{{ row.followers }}</td>
                                    <td>{{ row.impressions }}</td>
                                    <td>{{ row.clicks }}</td>
                                    <td>{{ row.conversions }}</td>
                                    <td>{{ row.conversionRate }}</td>
                                    <td>{{ row.reach }}</td>
                                    <td>
                                        <span :class="`badge bg-${row.badgeColor}-transparent`">{{ row.growth }}</span>
                                    </td>
                                    <td>
                                        <div class="dropdown">
                                            <a aria-label="anchor" href="javascript:void(0);" data-bs-toggle="dropdown"
                                                aria-expanded="false" class=" btn btn-icon btn-sm btn-light">
                                                <i class="ti ti-dots-vertical"></i>
                                            </a>
                                            <ul class="dropdown-menu" role="menu">
                                                <li><a class="dropdown-item d-inline-flex align-items-center"
                                                        href="javascript:void(0);"><i
                                                            class="ti ti-eye me-2 "></i>View</a></li>
                                                <li><a class="dropdown-item d-inline-flex align-items-center"
                                                        href="javascript:void(0);"><i
                                                            class="ti ti-edit me-2 "></i>Edit</a></li>
                                                <li><a class="dropdown-item d-inline-flex align-items-center"
                                                        href="javascript:void(0);"><i
                                                            class="ti ti-trash me-2 "></i>Delete</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </TableComponent>
                            </div>
                        </div>
                        <div class="card-footer border-top-0">
                            <div class="d-flex align-items-center">
                                <div> Showing 6 Entries <i class="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                <div class="ms-auto">
                                    <nav aria-label="Page navigation" class="pagination-style-2">
                                        <ul class="pagination mb-0 flex-wrap">
                                            <li class="page-item disabled">
                                                <a class="page-link" href="javascript:void(0);">
                                                    Prev
                                                </a>
                                            </li>
                                            <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a>
                                            </li>
                                            <li class="page-item active"><a class="page-link"
                                                    href="javascript:void(0);">2</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="javascript:void(0);">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                            </li>
                                            <li class="page-item"><a class="page-link" href="javascript:void(0);">17</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link text-primary" href="javascript:void(0);">
                                                    next
                                                </a>
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
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Recent Activity
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled social-recent-activity-list">
                                <li v-for="(idx) in SocialMediaData.AcivitySocial" :key="idx.id">
                                    <div class="d-flex align-items-start gap-3">
                                        <div class="lh-1">
                                            <span
                                                :class="`avatar avatar-md avatar-rounded bg-${idx.badgeColor}-transparent`">
                                                <i :class="`ri-${idx.icon} fs-5`"></i>
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <div class="d-flex align-items-start gap-2 justify-content-between mb-1">
                                                <span class="fw-semibold d-block">{{ idx.platform }}</span>
                                                <span :class="`badge bg-${idx.badgeColor}-transparent`">{{ idx.time
                                                    }}</span>
                                            </div>
                                            <div class="fs-13 text-muted social-activity">{{ idx.activity }}</div>
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
                                Audience Age Metrics
                            </div>
                        </div>
                        <div class="card-body py-0">
                            <div id="audience-age-metrics">
                                <apexchart type="bar" height="375px" :options="SocialMediaData.MetricsOptions"
                                    :series="SocialMediaData.MetricsSeries" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header justify-content-between">
                            <div class="card-title">
                                Suggestions
                            </div>
                            <a href="javascript:void(0);" class="text-muted">View All<i
                                    class="ti ti-arrow-narrow-right ms-1"></i></a>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled social-suggestions-list">
                                <li v-for="(idx) in SocialMediaData.Suggestion" :key="idx.id">
                                    <div class="d-flex align-items-center gap-3">
                                        <div class="lh-1">
                                            <span class="avatar avatar-md">
                                                <BaseImg :src="idx.imageSrc" alt=""/>
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="fw-semibold d-block">{{ idx.name }}</span>
                                            <span class="text-muted d-block">{{ idx.mutualFriends }}</span>
                                        </div>
                                        <div>
                                            <button aria-label="buton" type="button"
                                                class="btn btn-sm btn-icon btn-light border"><i
                                                    class="ri-user-add-line"></i></button>
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
                            <div class="card-title">Engagement</div>
                            <div class="d-flex align-items-center gap-2">
                                <span class="fs-12 text-success"><i class="ti ti-arrow-up"></i>2.45%</span>
                                <h5 class="fw-semibold mb-0">231,232</h5>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div id="social-engagement">
                                <apexchart type="heatmap" height="195px" :options="SocialMediaData.EngagementOptions"
                                    :series="SocialMediaData.EngagementSeries" />
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
