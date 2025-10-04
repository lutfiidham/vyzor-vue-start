<script setup>
import * as tableData from "@/shared/data/tables"
import * as prism from "@/shared/data/prismCode/table/tables";
import Pageheader from "@/components/pageheader/pageheader.vue";
import ShowcodeCard from "../../../UI/showcodeCard.vue";
import TableComponent from "@/shared/@spk/table-reuseble/table-component.vue";
import BaseImg from "../../components/Baseimage/BaseImg.vue";
import { Head } from "@inertiajs/vue3";

const dataToPass = {
    title: "Tables",
    currentpage: "Tables",
    activepage: "Tables"
}

</script>

<template>
    <Head title="Tables | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-6">
            <ShowcodeCard title="Basic Tables" :code="prism.basicTable">
                <TableComponent
                    :headers="[{ text: 'Name' }, { text: 'Created On' }, { text: 'Number' }, { text: 'Status' }]"
                    :rows="tableData.basicRows" tableClass="table text-nowrap" v-slot:cell="{ row }">
                    <td>{{ row.name }}</td>
                    <td>{{ row.createdOn }}</td>
                    <td>{{ row.number }}</td>
                    <td><span :class="`badge ${row.color}`">{{ row.status }}</span></td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-6">
            <ShowcodeCard title="Bordered Tables" :code="prism.BorderedTables">
                <TableComponent :headers="[{ text: 'User' }, { text: 'Status' }, { text: 'Email' }, { text: 'Action' }]"
                    :rows="tableData.bordered" tableClass="table text-nowrap table-bordered" v-slot:cell="{ row }">
                    <th>
                        <div class="d-flex align-items-center">
                            <span class="avatar avatar-xs me-2 online avatar-rounded"><BaseImg :src="(row.avatar)"
                                    alt="img"/></span>{{ row.name }}
                        </div>
                    </th>
                    <td><span :class="`badge bg-${row.color} text-${row.textColor}`">{{ row.status }}</span></td>
                    <td>{{ row.email }}</td>
                    <td>
                        <div class="hstack gap-2 flex-wrap">
                            <a href="javascript:void(0);" class="text-info fs-14 lh-1"><i class="ri-edit-line"></i></a>
                            <a href="javascript:void(0);" class="text-danger fs-14 lh-1"><i
                                    class="ri-delete-bin-5-line"></i></a>
                        </div>
                    </td>
                </TableComponent>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-4">
            <ShowcodeCard title="Bordered Primary" :code="prism.BorderedPrimary" class="custom-border-table">
                <TableComponent
                    :headers="[{ text: 'Order' }, { text: 'Date' }, { text: 'Customer' }, { text: 'Action' }]"
                    :rows="tableData.borderedPrimary" tableClass="table text-nowrap table-bordered border-primary"
                    v-slot:cell="{ row }">
                    <td>{{ row.id }}</td>
                    <td><span class="badge bg-light text-dark">{{ row.date }}</span></td>
                    <td>
                        <div class="d-flex align-items-center">
                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                <BaseImg :src="(row.avatar)" alt="img"/>
                            </span>{{ row.name }}
                        </div>
                    </td>
                    <td><span class="badge bg-primary-transparent">{{ row.status }}</span></td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-4">
            <ShowcodeCard title="Bordered Success" :code="prism.BorderedSuccess">
                <TableComponent
                    :headers="[{ text: 'Order' }, { text: 'Date' }, { text: 'Customer' }, { text: 'Action' }]"
                    :rows="tableData.borderedSuccess" tableClass="table text-nowrap table-bordered border-success"
                    v-slot:cell="{ row }">
                    <td>{{ row.id }}</td>
                    <td><span class="badge bg-light text-dark">{{ row.date }}</span></td>
                    <td>
                        <div class="d-flex align-items-center">
                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                <BaseImg :src="(row.avatar)" alt="img"/>
                            </span>{{ row.name }}
                        </div>
                    </td>
                    <td><span :class="`badge ${row.color}`">{{ row.status }}</span></td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-4">
            <ShowcodeCard title="Bordered warning" :code="prism.BorderedWarning">
                <TableComponent
                    :headers="[{ text: 'Order' }, { text: 'Date' }, { text: 'Customer' }, { text: 'Action' }]"
                    :rows="tableData.borderedWarning"
                    tableClass="table text-nowrap table-bordered border-warning custom-table-warning"
                    v-slot:cell="{ row }">
                    <td>{{ row.id }}</td>
                    <td><span class="badge bg-light text-dark">{{ row.date }}</span></td>
                    <td>
                        <div class="d-flex align-items-center">
                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                <BaseImg :src="(row.avatar)" alt="img"/>
                            </span>{{ row.name }}
                        </div>
                    </td>
                    <td><span :class="`badge ${row.color}`">{{ row.status }}</span></td>
                </TableComponent>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-6">
            <ShowcodeCard title="Table Without Borders" :code="prism.TableWithoutBorders">
                <TableComponent
                    :headers="[{ text: 'User Name' }, { text: 'Transaction Id' }, { text: 'Created' }, { text: 'Status' }]"
                    :rows="tableData.withourBorder" tableClass="table text-nowrap table-borderless"
                    v-slot:cell="{ row }">
                    <td>{{ row.name }}</td>
                    <td>{{ row.ticketId }}</td>
                    <td>{{ row.date }}</td>
                    <td><span :class="`badge ${row.badgeClass}`">{{ row.status }}</span></td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-6">
            <ShowcodeCard title=" Table Group Dividers " :code="prism.TableGroupDivideres">
                <TableComponent
                    :headers="[{ text: 'Product' }, { text: 'Seller' }, { text: 'Sale Percentage' }, { text: 'Quantity Sold' }]"
                    :rows="tableData.groupDivideres" tableClass="table text-nowrap" v-slot:cell="{ row }">
                    <td>{{ row.name }}</td>
                    <td>{{ row.brand }}</td>
                    <td><a href="javascript:void(0);" :class="`text-${row.color}`">{{ row.percentage }}<i
                                :class="`ri-arrow-${row.dir}-fill ms-1`"></i></a></td>
                    <td>{{ row.stock }}</td>
                </TableComponent>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xl-6">
            <ShowcodeCard title="Striped rows" :code="prism.Stripedrows">
                <TableComponent :headers="[{ text: 'ID' }, { text: 'Date' }, { text: 'Customer' }, { text: 'Action' }]"
                    :rows="tableData.stripedRows" tableClass="table text-nowrap table-striped" v-slot:cell="{ row }">
                    <td>{{ row.id }}</td>
                    <td>{{ row.date }}</td>
                    <td>{{ row.name }}</td>
                    <td>
                        <button class="btn btn-sm btn-success btn-wave">
                            <i class="ri-download-2-line align-middle me-2 d-inline-block"></i>Download
                        </button>
                    </td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-6">
            <ShowcodeCard title="Striped columns" :code="prism.Stripedcolumns">
                <TableComponent :headers="[{ text: 'ID' }, { text: 'Date' }, { text: 'Customer' }, { text: 'Action' }]"
                    :rows="tableData.stripedRows" tableClass="table text-nowrap table-striped-columns"
                    v-slot:cell="{ row }">
                    <td>{{ row.id }}</td>
                    <td>{{ row.date }}</td>
                    <td>{{ row.name }}</td>
                    <td>
                        <button class="btn btn-sm btn-danger btn-wave">
                            <i class="ri-delete-bin-line align-middle me-2 d-inline-block"></i>Delete
                        </button>
                    </td>
                </TableComponent>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-4 -->

    <!-- Start:: row-5 -->
    <div class="row">
        <div class="col-xl-4">
            <ShowcodeCard title="Primary Table" :code="prism.PrimaryTable">
                <TableComponent :headers="[{ text: '#' }, { text: 'First' }, { text: 'Last' }, { text: 'Handle' }]"
                    :rows="tableData.colorTable" tableClass="table text-nowrap table-primary" v-slot:cell="{ row }">
                    <td>{{ row.id }}</td>
                    <td>{{ row.firstName }}</td>
                    <td>{{ row.lastName }}</td>
                    <td>{{ row.username }}</td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-4">
            <ShowcodeCard title="Secondary Table" :code="prism.SecondaryTable">
                <TableComponent :headers="[{ text: '#' }, { text: 'First' }, { text: 'Last' }, { text: 'Handle' }]"
                    :rows="tableData.colorTable" tableClass="table text-nowrap table-secondary" v-slot:cell="{ row }">
                    <td>{{ row.id }}</td>
                    <td>{{ row.firstName }}</td>
                    <td>{{ row.lastName }}</td>
                    <td>{{ row.username }}</td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-4">
            <ShowcodeCard title="Warning Table" :code="prism.WarningTable">
                <TableComponent :headers="[{ text: '#' }, { text: 'First' }, { text: 'Last' }, { text: 'Handle' }]"
                    :rows="tableData.colorTable" tableClass="table text-nowrap table-warning" v-slot:cell="{ row }">
                    <td>{{ row.id }}</td>
                    <td>{{ row.firstName }}</td>
                    <td>{{ row.lastName }}</td>
                    <td>{{ row.username }}</td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-4">
            <ShowcodeCard title="Danger Table" :code="prism.DangerTable">
                <TableComponent :headers="[{ text: '#' }, { text: 'First' }, { text: 'Last' }, { text: 'Handle' }]"
                    :rows="tableData.colorTable" tableClass="table text-nowrap table-danger" v-slot:cell="{ row }">
                    <td>{{ row.id }}</td>
                    <td>{{ row.firstName }}</td>
                    <td>{{ row.lastName }}</td>
                    <td>{{ row.username }}</td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-4">
            <ShowcodeCard title="Dark Table" :code="prism.DarkTable">
                <TableComponent :headers="[{ text: '#' }, { text: 'First' }, { text: 'Last' }, { text: 'Handle' }]"
                    :rows="tableData.colorTable" tableClass="table text-nowrap table-dark" v-slot:cell="{ row }">
                    <td>{{ row.id }}</td>
                    <td>{{ row.firstName }}</td>
                    <td>{{ row.lastName }}</td>
                    <td>{{ row.username }}</td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-4">
            <ShowcodeCard title="Success Table With Striped Rows" :code="prism.SuccessTableWithStripedRows">
                <TableComponent :headers="[{ text: '#' }, { text: 'First' }, { text: 'Last' }, { text: 'Handle' }]"
                    :rows="tableData.colorTable" tableClass="table text-nowrap table-success table-striped"
                    v-slot:cell="{ row }">
                    <td>{{ row.id }}</td>
                    <td>{{ row.firstName }}</td>
                    <td>{{ row.lastName }}</td>
                    <td>{{ row.username }}</td>
                </TableComponent>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-5 -->

    <!-- Start:: row-6 -->
    <div class="row">
        <div class="col-xl-6">
            <ShowcodeCard title="Hoverable Rows" :code="prism.HoverableRows">
                <TableComponent
                    :headers="[{ text: 'Product Manager' }, { text: 'Category' }, { text: 'Team' }, { text: 'Status' }]"
                    :rows="tableData.hoverableRows" tableClass="table text-nowrap table-hover" v-slot:cell="{ row }">
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-sm me-2 avatar-rounded">
                                <BaseImg :src="(row.src)" alt="img"/>
                            </div>
                            <div>
                                <div class="lh-1">
                                    <span>{{ row.name }}</span>
                                </div>
                                <div class="lh-1">
                                    <span class="fs-11 text-muted">{{ row.email }}</span>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td><span :class="`badge ${row.color}`">{{ row.category }}</span></td>
                    <td>
                        <div class="avatar-list-stacked">
                            <span v-for="(avatar, index) in row.avatars.slice(0, 3)" :key="index"
                                class="avatar avatar-sm avatar-rounded">
                                <BaseImg :src="avatar" alt="img"/>
                            </span>
                            <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                href="javascript:void(0);">
                                +{{ row.extraAvatarsCount }}
                            </a>
                        </div>
                    </td>
                    <td>
                        <div class="progress progress-xs">
                            <div class="progress-bar bg-primary" role="progressbar" :style="`width: ${row.progress}%`"
                                :aria-valuenow="`${row.progress}`" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-6">
            <ShowcodeCard title="Hoverable rows With striped rows" :code="prism.HoverablerowsWithstripedrows">
                <TableComponent
                    :headers="[{ text: 'Invoice' }, { text: 'Customer' }, { text: 'Status' }, { text: 'Date' }]"
                    :rows="tableData.hoverableRow" tableClass="table text-nowrap table-striped table-hover"
                    v-slot:cell="{ row }">
                    <td>{{ row.number }}</td>
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-sm me-2 avatar-rounded">
                                <BaseImg :src="(row.avatar)" alt="img"/>
                            </div>
                            <div>
                                <div class="lh-1">
                                    <span>{{ row.name }}</span>
                                </div>
                                <div class="lh-1">
                                    <span class="fs-11 text-muted">{{ row.email }}</span>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td><span :class="`badge ${row.statusClass}`">
                            <i :class="`${row.statusIcon} align-middle me-1`"></i>{{ row.status }}</span>
                    </td>
                    <td>{{ row.date }}</td>
                </TableComponent>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-6 -->

    <!-- Start:: row-7 -->
    <div class="row">
        <div class="col-xl-6">
            <ShowcodeCard title="Table Head Primary" :code="prism.TableHeadPrimary">
                <TableComponent
                    :headers="[{ text: 'User Name' }, { text: 'Transaction Id' }, { text: 'Created' }, { text: 'Status' }]"
                    :rows="tableData.tableHeadwarning" tableClass="table text-nowrap" theadClass="table-primary"
                    v-slot:cell="{ row }">
                    <td>{{ row.name }}</td>
                    <td>{{ row.orderNumber }}</td>
                    <td>{{ row.date }}</td>
                    <td>
                        <div class="hstack gap-2 fs-15">
                            <a href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i
                                    class="ri-download-2-line"></i></a>
                            <a href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i
                                    class="ri-edit-line"></i></a>
                            <a href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i
                                    class="ri-delete-bin-line"></i></a>
                        </div>
                    </td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-6">
            <ShowcodeCard title="Table Head warning" :code="prism.TableHeadwarning">
                <TableComponent
                    :headers="[{ text: 'User Name' }, { text: 'Transaction Id' }, { text: 'Created' }, { text: 'Status' }]"
                    :rows="tableData.tableHeadwarning" tableClass="table text-nowrap" theadClass="table-warning"
                    v-slot:cell="{ row }">
                    <td>{{ row.name }}</td>
                    <td>{{ row.orderNumber }}</td>
                    <td>{{ row.date }}</td>
                    <td><button :class="`btn btn-sm btn-${row.statusClass}`">{{ row.status }}</button> </td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-6">
            <ShowcodeCard title="Table Head Success" :code="prism.TableHeadSuccess">
                <TableComponent
                    :headers="[{ text: 'User Name' }, { text: 'Transaction Id' }, { text: 'Created' }, { text: 'Status' }]"
                    :rows="tableData.tableHeadwarning" tableClass="table text-nowrap" theadClass="table-success"
                    v-slot:cell="{ row }">
                    <td>{{ row.name }}</td>
                    <td>{{ row.orderNumber }}</td>
                    <td>{{ row.date }}</td>
                    <td><button :class="`btn btn-sm btn-${row.statusClass}`">{{ row.status }}</button> </td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-6">
            <ShowcodeCard title="Table Head Info" :code="prism.TableHeadInfo">
                <TableComponent
                    :headers="[{ text: 'User Name' }, { text: 'Transaction Id' }, { text: 'Created' }, { text: 'Status' }]"
                    :rows="tableData.tableHeadwarning" tableClass="table text-nowrap" theadClass="table-info"
                    v-slot:cell="{ row }">
                    <td>{{ row.name }}</td>
                    <td>{{ row.orderNumber }}</td>
                    <td>{{ row.date }}</td>
                    <td><button :class="`btn btn-sm btn-${row.statusClass}`">{{ row.status }}</button> </td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-6">
            <ShowcodeCard title="Table Head Secondary" :code="prism.TableHeadSecondary">
                <TableComponent
                    :headers="[{ text: 'User Name' }, { text: 'Transaction Id' }, { text: 'Created' }, { text: 'Status' }]"
                    :rows="tableData.tableHeadwarning" tableClass="table text-nowrap" theadClass="table-secondary"
                    v-slot:cell="{ row }">
                    <td>{{ row.name }}</td>
                    <td>{{ row.orderNumber }}</td>
                    <td>{{ row.date }}</td>
                    <td><button :class="`btn btn-sm btn-${row.statusClass}`">{{ row.status }}</button> </td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-6">
            <ShowcodeCard title="Table Head Danger" :code="prism.TableHeadDanger">
                <TableComponent
                    :headers="[{ text: 'User Name' }, { text: 'Transaction Id' }, { text: 'Created' }, { text: 'Status' }]"
                    :rows="tableData.tableHeadwarning" tableClass="table text-nowrap" theadClass="table-danger"
                    v-slot:cell="{ row }">
                    <td>{{ row.name }}</td>
                    <td>{{ row.orderNumber }}</td>
                    <td>{{ row.date }}</td>
                    <td><button :class="`btn btn-sm btn-${row.statusClass}`">{{ row.status }}</button> </td>
                </TableComponent>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-7 -->

    <!-- Start:: row-8 -->
    <div class="row">
        <div class="col-xl-4">
            <ShowcodeCard title="Table Foot" :code="prism.TableFoot">
                <TableComponent theadClass="table-primary"
                    :headers="[{ text: 'S.No' }, { text: 'Team' }, { text: 'Matches Won' }, { text: 'Win Ratio' }]"
                    :rows="tableData.tableFoot" tableClass="table text-nowrap" v-slot:cell="{ row }">
                    <td> {{ row.id }} </td>
                    <td> {{ row.location }}</td>
                    <td> {{ row.count }}</td>
                    <td> <span class="badge bg-primary">{{ row.percentage }}</span></td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-4">
            <ShowcodeCard title="Table With Caption" :code="prism.TableWithCaption">
                <TableComponent
                    :headers="[{ text: 'S.No' }, { text: 'Country' }, { text: 'Medals Won' }, { text: 'No Of Athletes' }]"
                    :rows="tableData.tableWithCaption" tableClass="table text-nowrap" v-slot:cell="{ row }">
                    <td>{{ row.rank }}</td>
                    <td>{{ row.country }}</td>
                    <td>{{ row.year }}<i class="ri-medal-line mx-2"></i></td>
                    <td>{{ row.value }}</td>

                </TableComponent>
                <caption class="d-flex">Top 3 Countries</caption>
            </ShowcodeCard>
        </div>
        <div class="col-xl-4">
            <ShowcodeCard title="Table With Top Caption" :code="prism.TableWithTopCaption">
                <caption class="d-flex">Top IT Companies</caption>
                <TableComponent
                    :headers="[{ text: 'S.No' }, { text: 'Name' }, { text: 'Revenue' }, { text: 'Country' }]"
                    :rows="tableData.tableWithTopCaption" tableClass="table text-nowrap caption-top"
                    v-slot:cell="{ row }">
                    <td>{{ row.rank }}</td>
                    <td>{{ row.name }}</td>
                    <td>{{ row.revenue }}</td>
                    <td>{{ row.country }}</td>
                </TableComponent>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-8 -->

    <!-- Start:: row-9 -->
    <div class="row">
        <div class="col-xl-6">
            <ShowcodeCard title="Active Tables" :code="prism.ActiveTables">
                <TableComponent
                    :headers="[{ text: 'Name' }, { text: 'Created On' }, { text: 'Number' }, { text: 'Status' }]"
                    :rows="tableData.activeTables" tableClass="table text-nowrap" v-slot:cell="{ row }">
                    <td>{{ row.name }}</td>
                    <td>{{ row.date }}</td>
                    <td :class="row.tdClass">{{ row.phone }}</td>
                    <td><span :class="`badge ${row.statusClass}`">{{ row.status }}</span></td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-6">
            <ShowcodeCard title="Small Tables" :code="prism.SmallTables">
                <TableComponent
                    :headers="[{ text: 'Invoice' }, { text: 'Created Date' }, { text: 'Status' }, { text: 'Action' }]"
                    :rows="tableData.smallTables" tableClass="table text-nowrap table-sm" v-slot:cell="{ row }">
                    <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="checkebox-sm"
                                :checked="row.cheacked">
                            <label class="form-check-label" for="checkebox-sm"> {{ row.name }} </label>
                        </div>
                    </td>
                    <td>{{ row.date }}</td>
                    <td><span :class="`badge ${row.statusClass}`">{{ row.status }}</span></td>
                    <td>
                        <div class="hstack gap-2 fs-15">
                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                                    class="ri-download-2-line"></i></a>
                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                                    class="ri-edit-line"></i></a>
                        </div>
                    </td>
                </TableComponent>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-9 -->

    <!-- Start:: row-10 -->
    <div class="row">
        <div class="col-xl-6">
            <ShowcodeCard title="Color variants tables" :code="prism.Colorvariantstables">
                <TableComponent
                    :headers="[{ text: 'Color' }, { text: 'Client' }, { text: 'State' }, { text: 'Quantity' }, { text: 'Total Price' }]"
                    :rows="tableData.colorvariantsTables" tableClass="table text-nowrap" v-slot:cell="{ row }">
                    <td>{{ row.type }}</td>
                    <td>{{ row.title }}</td>
                    <td><span :class="`badge ${row.badgeClass}`">{{ row.status }}</span></td>
                    <td>{{ row.quantity }}</td>
                    <td>{{ row.amount }}</td>
                </TableComponent>
            </ShowcodeCard>
        </div>
        <div class="col-xl-6">
            <ShowcodeCard title="Nesting" :code="prism.Nesting">
                <div class="table-responsive">
                    <table class="table text-nowrap table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td colspan="4">
                                    <table class="table text-nowrap mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Aplhabets</th>
                                                <th scope="col">Users</th>
                                                <th scope="col">Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">A</th>
                                                <td>Dino King</td>
                                                <td>dinoking231@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">B</th>
                                                <td>Poppins sams</td>
                                                <td>pops@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">C</th>
                                                <td>Brian Shaw</td>
                                                <td>swanbrian@gmail.com</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Jimmy</td>
                                <td>the Ostrich</td>
                                <td>Dummy Text</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Cobra Kai</td>
                                <td>the Snake</td>
                                <td>Another Name</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-10 -->

    <!-- Start:: row-11 -->
    <div class="row">
        <div class="col-xl-12">
            <ShowcodeCard title="Always responsive" :code="prism.Alwaysresponsive">
                <TableComponent
                    :headers="[{ text: `<input class='form-check-input' type='checkbox' id='checkboxNoLabel1' aria-label='...'>` }, { text: 'Team Head' }, { text: 'Category' }, { text: 'Role' }, { text: 'Gmail' }, { text: 'Team' }, { text: 'Work Progress' }, { text: 'Revenue' }, { text: 'Action' }]"
                    :rows="tableData.alwaysResponsive" tableClass="table text-nowrap" v-slot:cell="{ row }">
                    <td><input class="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="...">
                    </td>
                    <td>
                        <div class="d-flex align-items-center">
                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                <BaseImg :src="row.avatar" alt="img"/>
                            </span>{{ row.name }}
                        </div>
                    </td>
                    <td>{{ row.position }}</td>
                    <td><span :class="`badge ${row.badgeClass}`">{{ row.badgeText }}</span></td>
                    <td>{{ row.email }}</td>
                    <td>
                        <div class="avatar-list-stacked">
                            <span v-for="(collaborator, idx) in row.collaborators" :key="idx"
                                class="avatar avatar-sm avatar-rounded">
                                <BaseImg :src="collaborator" alt="img"/>
                            </span>
                            <a v-if="row.length" class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                href="javascript:void(0);">
                                {{ row.length }}
                            </a>
                        </div>
                    </td>
                    <td>
                        <div class="progress progress-xs">
                            <div class="progress-bar bg-primary" role="progressbar" :style="{ width: row.progress }"
                                aria-valuenow="row.progressValue" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </td>
                    <td>{{ row.salary }}</td>
                    <td>
                        <div class="hstack gap-2 fs-15">
                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-success"><i
                                    class="ri-download-2-line"></i></a>
                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-info"><i
                                    class="ri-edit-line"></i></a>
                        </div>
                    </td>
                </TableComponent>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-11 -->

    <!-- Start:: row-12 -->
    <div class="row">
        <div class="col-xl-12">
            <ShowcodeCard title="Vertical alignment" :code="prism.Verticalalignment">
                <div class="table-responsive">
                    <table class="table align-middle">
                        <thead>
                            <tr>
                                <th scope="col" class="w-25">Heading 1</th>
                                <th scope="col" class="w-25">Heading 2</th>
                                <th scope="col" class="w-25">Heading 3</th>
                                <th scope="col" class="w-25">Heading 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>This cell inherits <code>vertical-align: middle;</code> from
                                    the
                                    table</td>
                                <td>This cell inherits <code>vertical-align: middle;</code> from
                                    the
                                    table</td>
                                <td>This cell inherits <code>vertical-align: middle;</code> from
                                    the
                                    table</td>
                                <td>This here is some placeholder text, intended to take up
                                    quite a
                                    bit of vertical space, to demonstrate how the vertical
                                    alignment
                                    works in the preceding cells.</td>
                            </tr>
                            <tr class="align-bottom">
                                <td>This cell inherits <code>vertical-align: bottom;</code> from
                                    the
                                    table row</td>
                                <td>This cell inherits <code>vertical-align: bottom;</code> from
                                    the
                                    table row</td>
                                <td>This cell inherits <code>vertical-align: bottom;</code> from
                                    the
                                    table row</td>
                                <td>This here is some placeholder text, intended to take up
                                    quite a
                                    bit of vertical space, to demonstrate how the vertical
                                    alignment
                                    works in the preceding cells.</td>
                            </tr>
                            <tr>
                                <td>This cell inherits <code>vertical-align: middle;</code> from
                                    the
                                    table</td>
                                <td>This cell inherits <code>vertical-align: middle;</code> from
                                    the
                                    table</td>
                                <td class="align-top">This cell is aligned to the top.</td>
                                <td>This here is some placeholder text, intended to take up
                                    quite a
                                    bit of vertical space, to demonstrate how the vertical
                                    alignment
                                    works in the preceding cells.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-12 -->
</template>

<style scoped>
/* Add your styles here */
</style>
