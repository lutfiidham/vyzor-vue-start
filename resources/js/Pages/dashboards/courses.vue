<script setup>
import * as CourseData from "@/shared/data/dashboards/coursesdata";
import TableComponent from "@/shared/@spk/table-reuseble/table-component.vue"
import SpkReusebleCouresCard from "@/shared/@spk/dashboards/spk-reuseble-couresCard.vue";
import Pageheader from "@/components/pageheader/pageheader.vue";
import BaseImg from "../../components/Baseimage/BaseImg.vue";
import { Head } from "@inertiajs/vue3";
const dataToPass = {
    title: "Dashboards",
    currentpage: "Courses",
    activepage: "Courses"
}
</script>

<template>
    <Head title="Courses | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />
    <!-- Start:: row-1 -->
    <div class="row row-cols-xxl-5 row-cols-lg-2 row-cols-xl">
        <div class="col flex-fill" v-for="(idx) in CourseData.CourseCards" :key="idx.id">
            <SpkReusebleCouresCard :card="idx" />
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Students Analysis
                    </div>
                </div>
                <div class="card-body">
                    <div id="students-analysis">
                        <apexchart type="line" height="365px" :options="CourseData.StudentOptions"
                            :series="CourseData.StudentSeries"></apexchart>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card overflow-hidden">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Courses List
                    </div>
                    <a href="javascript:void(0);" class="text-muted">View All <i
                            class="ti ti-arrow-narrow-right ms-1"></i></a>
                </div>
                <div class="card-body p-0">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-for="(idx) in CourseData.CourseListData" :key="idx.id">
                            <div class="d-flex align-items-start flex-wrap gap-3">
                                <div class="lh-1">
                                    <span class="avatar avatar-xl">
                                        <BaseImg :src="idx.image" alt="img"/>
                                    </span>
                                </div>
                                <div class="flex-fill fw-medium">
                                    <a href="javascript:void(0);" class="text-muted d-block mb-1 fs-10"
                                        title="Category"><i class="ti ti-tag fs-11 align-middle"></i>&nbsp;{{
                                            idx.category }}</a>
                                    <a href="javascript:void(0);" class="d-block mb-2 fs-14">{{ idx.title }}</a>
                                    <div class="d-flex align-items-center flex-wrap gap-3">
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0);" class="me-2 lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <BaseImg :src="idx.avatar" alt="img"/>
                                                </span>
                                            </a>
                                            <a href="javascript:void(0);" class="flex-fill fs-12">{{ idx.name }}</a>
                                        </div>
                                        <div class="fs-12">
                                            <span class="me-2">{{ idx.views }}</span>
                                            <span class="d-inline-flex align-items-center"><i
                                                    class="ri-star-fill fs-16 text-warning me-1"></i>({{ idx.rating
                                                    }})</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Top Course Categories
                    </div>
                    <a href="javascript:void(0);" class="text-muted">View All <i
                            class="ti ti-arrow-narrow-right ms-1"></i></a>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled top-course-categories-list">
                        <li v-for="(idx) in CourseData.CategoryListData" :key="idx.id">
                            <div class="d-flex align-items-center gap-3 flex-wrap">
                                <div class="lh-1">
                                    <span :class="`avatar avatar-md bg-${idx.color}-transparent`">
                                        {{ idx.initials }}
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <span class="fw-semibold d-block">
                                        {{ idx.title }}
                                    </span>
                                    <span class="fs-12">{{ idx.courseCount }}</span>
                                </div>
                                <div class="text-end">
                                    <span class="fw-semibold">{{ idx.studentCount }}</span>
                                    <span class="d-block text-muted">Students</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xxl-3 col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Top Instructors
                    </div>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled top-instructors-list">
                        <li v-for="(idx) in CourseData.Instructors" :key="idx.id">
                            <div class="d-flex align-items-center gap-3 flex-wrap">
                                <div class="lh-1">
                                    <span class="avatar avatar-md online avatar-rounded">
                                        <BaseImg :src="idx.image" alt=""/>
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <div class="d-flex align-items-center gap-2 lh-1 mb-1">
                                        <span class="fw-semibold d-block">{{ idx.name }}</span>
                                        <div class="vr"></div>
                                        <div class="d-inline-flex align-items-center">{{ idx.rating }}<i
                                                class="ti ti-star-filled ms-1 text-warning"></i></div>
                                    </div>
                                    <span class="text-muted fs-13">{{ idx.students }}</span>
                                </div>
                                <div class="text-end">
                                    <span class="fw-semibold d-block">{{ idx.earnings }}</span>
                                    <span class="fw-semibold fs-13 text-muted">Earnings</span>
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
                    <div class="card-title">
                        Upcoming Schedules
                    </div>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled upcoming-schedules-list">
                        <li v-for="(idx) in CourseData.Coursesdata" :key="idx.id">
                            <div class="d-flex align-items-center justify-content-between gap-1">
                                <div class="w-50">
                                    <div class="mb-1 fw-semibold text-truncate">
                                        {{ idx.title }}
                                    </div>
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="lh-1">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <BaseImg :src="idx.image" alt=""/>
                                            </span>
                                        </div>
                                        <div>{{ idx.instructor }}</div>
                                    </div>
                                </div>
                                <div class="text-end w-50">
                                    <div class="mb-1">
                                        {{ idx.dateRange }}
                                    </div>
                                    <span class="d-block fs-12 text-muted">
                                        {{ idx.time }}
                                    </span>
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
                    <div class="card-title">
                        Payout Report
                    </div>
                </div>
                <div class="card-body">
                    <div class="row gy-4 mb-5">
                        <div class="col">
                            <div class="d-flex align-items-center p-2 border border-dashed rounded">
                                <div class="me-3">
                                    <span class="avatar radius-5 bg-primary-transparent text-primary"><i
                                            class="ti ti-cash fs-5"></i></span>
                                </div>
                                <div class="flex-1">
                                    <span class="fs-12 text-muted">Paid</span>
                                    <span class="fs-16 fw-semibold d-flex align-items-center">$68,400</span>
                                    <span class="text-success fs-12"><i class="ti ti-arrow-up me-1"></i>4.26%</span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="d-flex align-items-center p-2 border border-dashed rounded">
                                <div class="me-3">
                                    <span class="avatar radius-5 bg-secondary-transparent text-secondary"><i
                                            class="ti ti-x fs-5"></i></span>
                                </div>
                                <div class="flex-1">
                                    <span class="fs-12 text-muted">Unpaid</span>
                                    <span class="fs-16 fw-semibold d-flex align-items-center">$21,300</span>
                                    <span class="text-danger fs-12"><i class="ti ti-arrow-down me-1"></i>0.86%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="payout-Report">
                        <apexchart type="line" height="212px" :options="CourseData.PayoutOptions"
                            :series="CourseData.PayoutSeries"></apexchart>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-12">
            <div class="card custom-card">
                <div class="card-header flex-between justify-content-between">
                    <div class="card-title">Ongoing Courses</div>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="text-muted" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a class="dropdown-item border-bottom" href="javascript:void(0);">Today</a></li>
                            <li><a class="dropdown-item border-bottom" href="javascript:void(0);">This Week</a></li>
                            <li><a class="dropdown-item border-bottom" href="javascript:void(0);">Last Week</a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled ongoing-courses-list">
                        <li v-for="(idx) in CourseData.ProgressData" :key="idx.id">
                            <div class="d-flex align-items-center gap-3 flex-wrap">
                                <div>
                                    <span :class="`avatar avatar-md bg-${idx.avatarClass}-transparent`"><i
                                            :class="`bx bx-${idx.iconClass} fs-5`"></i></span>
                                </div>
                                <div class="flex-fill">
                                    <div class="d-flex justify-content-between mb-1 flex-wrap">
                                        <span class="fw-semibold d-block w-75 text-truncate">
                                            {{ idx.title }}
                                        </span>
                                        <div>
                                            <p class="mb-0 fs-13 text-muted">
                                                <i class='ti ti-arrow-up align-middle me-1 text-success'></i>{{
                                                    idx.progress }}.0%
                                            </p>
                                        </div>
                                    </div>
                                    <div class="progress progress-animate progress-xs">
                                        <div :class="`progress-bar progress-bar-striped progress-bar-animated bg-${idx.avatarClass}`"
                                            :style="`width: ${idx.progress}%;`"></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Courses Overview
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
                        <TableComponent tableClass="table text-nowrap table-hover" :showCheckbox="true"
                            theadClass="table-header-light"
                            :headers="[{ text: 'Course Name', thClass: '' }, { text: 'Instructor', thClass: '' }, { text: 'Start Date', thClass: '' }, { text: 'Total Enrolled', thClass: '' }, { text: 'Average Rating', thClass: '' }, { text: 'Status', thClass: '' }, { text: 'Revenue', thClass: '' }, { text: 'Actions', thClass: '' },]"
                            :rows="CourseData.CoursesOverview" v-slot:cell="{ row }">
                            <td>{{ row.title }}</td>
                            <td>
                                <div class="d-flex align-items-center gap-2">
                                    <div class="lh-1">
                                        <span class="avatar avatar-xs avatar-rounded">
                                            <BaseImg :src="row.avatar" alt=""/>
                                        </span>
                                    </div>
                                    <div>{{ row.instructorName }}</div>
                                </div>
                            </td>
                            <td>
                                {{ row.date }}
                            </td>
                            <td>
                                {{ row.students }}
                            </td>
                            <td>
                                <div class="d-inline-flex align-items-center">
                                    {{ row.rating }}<i class="ti ti-star-filled text-warning ms-1"></i>
                                </div>
                            </td>
                            <td>
                                <span :class="`badge bg-${row.statusClass}-transparent`">{{ row.status }}</span>
                            </td>
                            <td>
                                {{ row.earnings }}
                            </td>
                            <td>
                                <div class="dropdown">
                                    <a aria-label="anchor" href="javascript:void(0);"
                                        class="btn btn-icon btn-sm btn-light border" data-bs-toggle="dropdown"
                                        aria-expanded="false"> <i class="ri-more-2-fill"></i> </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                    class="ri-eye-line me-2"></i>View</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                    class="ri-pencil-line me-2"></i>Edit</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                    class="ri-delete-bin-line me-2"></i>Delete</a></li>
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
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="javascript:void(0);">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">17</a></li>
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
    <!-- End:: row-4 -->
</template>

<style scoped>
/* Add your styles here */
</style>
