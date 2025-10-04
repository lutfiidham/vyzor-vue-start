<script setup>
import SpkReusableCryptoCard from "@/shared/@spk/dashboards/crypto/spk-reusable-cryptoCard.vue";
import * as dashBoardData from "@/shared/data/dashboards/crypto/dashboarddata";
import Pageheader from "@/components/pageheader/pageheader.vue";
import TableComponent from "@/shared/@spk/table-reuseble/table-component.vue";
import { ref } from "vue";
import BaseImg from "../../../components/Baseimage/BaseImg.vue";
import { Head } from "@inertiajs/vue3";
const dataToPass = {
    title: "Dashboards",
    subtitle: "Crypto",
    currentpage: "Dashboard",
    activepage: "Dashboard"
}

const cryptoDataStatus = ref("BTC")
const currencyDataStatus = ref("USD")

</script>

<template>
    <Head title="Dashboards-Crypto | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />
    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xxl-9">
            <div class="row">
                <SpkReusableCryptoCard :cryptoCards="dashBoardData.cryptoCards" />
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Crypto Performance
                            </div>
                        </div>
                        <div class="card-body">
                            <div
                                class="p-3 d-flex align-items-center gap-4 border border-dashed rounded flex-wrap mb-2">
                                <div class="d-flex align-items-center gap-2 flex-wrap">
                                    <span class="avatar avatar-sm">
                                        <BaseImg src="/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg" alt=""/>
                                    </span>
                                    <div>
                                        <span class="fw-medium">Bitcoin</span> - <span class="text-muted">BTC</span>
                                    </div>
                                </div>
                                <h6 class="fw-medium mb-0">$42,761.32 USD<span
                                        class="text-success mx-2">0.14%</span>(24H)</h6>
                                <div class="d-flex gap-4 align-items-center flex-wrap">
                                    <div>Open - <span class="text-success fw-medium">6612.98</span></div>
                                    <div>High - <span class="text-success fw-medium">6625.97</span></div>
                                    <div>Low - <span class="text-danger fw-medium">6612.34</span></div>
                                    <div>Close - <span class="text-success fw-medium">6623.45</span></div>
                                </div>
                            </div>
                            <div id="coin-statistics">
                                <apexchart height="400px" type="candlestick" :options="dashBoardData.cryptooptions"
                                    :series="dashBoardData.cryptoseries" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Transactions History
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled crypto-transaction-history-list">
                                <li v-for="(item, index) in dashBoardData.transactions" :key="index">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="lh-1">
                                            <span class="avatar avatar-md bg-light avatar-rounded p-2 border">
                                                <BaseImg :src="item.icon" alt="" :class="item.imgClass"/>
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="fw-semibold d-block">{{ item.title }}</span>
                                            <span class="fs-12 text-muted">{{ item.date }}</span>
                                        </div>
                                        <div class="text-end">
                                            <span class="fw-semibold d-block">{{ item.amount }}</span>
                                            <span
                                                :class="`badge ${item.status === 'Completed' ? 'bg-success' : `${item.status === 'Pending' ? 'bg-warning' : 'bg-danger'}`}`">{{
                                                    item.status }}</span>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card custom-card overflow-hidden">
                        <div class="card-header justify-content-between">
                            <div class="card-title">
                                Recent Activity
                            </div>
                            <a href="javascript:void(0);" class="fs-12 text-muted">View All <i
                                    class="ti ti-arrow-narrow-right ms-1"></i></a>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled recent-activity-crypto-list">

                                <li v-for="(item, index) in dashBoardData.transactionActivities" :key="index">
                                    <div class="d-flex align-items-center gap-2">
                                        <div>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <BaseImg :src="item.avatar" alt=""/>
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="fw-semibold">{{ item.name }}</span>
                                            <p class="mb-0">{{ item.currency }} - <span class="text-muted">({{
                                                item.amount }})</span></p>
                                        </div>
                                        <div class="text-end">
                                            <span class="fs-12 text-muted mb-1">{{ item.date }}</span>
                                            <p class="mb-0"><span
                                                    :class="`fs-11 fw-semibold ${item.status === 'Received' ? 'text-success' : `${item.status === 'Processing' ? 'text-info' : 'text-danger'}`}  `">{{
                                                        item.status }}</span> - {{ item.time }}</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card custom-card overflow-hidden">
                        <div class="card-header">
                            <div class="card-title">
                                Coin Price Statistics
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <ul class="list-group list-group-flush">

                                <li v-for="(item, index) in dashBoardData.cryptoStats" :key="index"
                                    class="list-group-item">
                                    <div class="d-flex w-100 justify-content-between align-items-center">
                                        <p class="tx-14 mb-0 font-weight-semibold text-dark">{{ item.label }}
                                            <span v-if="item.badge?.isbadge"
                                                :class="['badge ms-3', item.badge.className]">{{ item.badge.text
                                                }}</span>
                                        </p>
                                        <p :class="['mb-0 font-weight-normal tx-13', item.valueColor]">
                                            <span class="numberfont">{{ item.value }}</span> <i
                                                class="fa fa-arrow-up"></i>
                                        </p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-xxl-3">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <p class="mb-1 text-muted">Your Balance</p>
                                    <h5 class="fw-semibold mb-1">$23,895.00</h5>
                                    <p class=" text-muted fs-12 mb-4">Total Value : 13.50234BTC</p>
                                </div>
                                <div class="dropdown">
                                    <a href="javascript:void(0);" class="btn-outline-light btn btn-sm text-muted"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                                    </a>
                                    <ul class="dropdown-menu" role="menu">
                                        <li class=""><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                                        <li class=""><a class="dropdown-item" href="javascript:void(0);">This Week</a>
                                        </li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-6 col-sm-6 col-6">
                                    <div class="d-flex align-items-center flex-wrap gap-3">
                                        <div class="lh-1">
                                            <div class="avatar bg-primary-transparent">
                                                <i class="ti ti-arrow-big-up-lines fs-20"></i>
                                            </div>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="text-md mb-1 fw-semibold">$22,490.00</span>
                                            <p class="mb-0 fs-12  text-muted">Invested</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-sm-6 col-6">
                                    <div class="d-flex align-items-center flex-wrap gap-3">
                                        <div class="lh-1">
                                            <div class="avatar bg-primary-transparent">
                                                <i class="ti ti-corner-up-right-double fs-20"></i>
                                            </div>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="text-md mb-1  fw-semibold">$22,490.00</span>
                                            <p class="mb-0 fs-12  text-muted">Expenditure</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Buy & Sell Crypto
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="nav nav-tabs tab-style-1 d-sm-flex d-block nav-justified" role="tablist">
                                <li class="nav-item me-sm-2 me-0" role="presentation">
                                    <a class="nav-link active" data-bs-toggle="tab" data-bs-target="#buy-crypto"
                                        aria-current="page" href="#buy-crypto" aria-selected="true" role="tab">Buy</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" data-bs-target="#sell-crypto"
                                        href="#sell-crypto" aria-selected="false" role="tab" tabindex="-1">Sell</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane border-0 p-0 active show" id="buy-crypto" role="tabpanel"
                                    aria-labelledby="buy-crypto">
                                    <div>
                                        <div class="input-group mb-3 flex-nowrap">
                                            <input type="text"
                                                class="form-control form-control-sm crypto-buy-sell-input"
                                                aria-label="crypto buy select" placeholder="Enter Value">
                                            <VueMultiselect class="custom-vuemulti-select custom-crypto1" data-trigger
                                                :searchable="true" :show-labels="false" id="choices-single-default"
                                                v-model="cryptoDataStatus" :options="dashBoardData.coindata">
                                            </VueMultiselect>

                                        </div>
                                        <div class="input-group mb-3 flex-nowrap">
                                            <input type="text"
                                                class="form-control form-control-sm crypto-buy-sell-input"
                                                aria-label="crypto buy select" placeholder="Amount Obtained">
                                            <VueMultiselect class="custom-crypto1 custom-vuemulti-select" data-triggeR
                                                :searchable="true" :show-labels="false" id="choices-single-default1"
                                                v-model="currencyDataStatus" :options="dashBoardData.currencydata">
                                            </VueMultiselect>

                                        </div>
                                        <div>
                                            <div class="fs-14 py-2"><span class="fw-medium text-dark">Price:</span><span
                                                    class="text-muted ms-2 fs-14 d-inline-block">6.003435</span><span
                                                    class="text-dark fw-medium float-end">BTC</span></div>
                                            <div class="fs-14 py-2"><span
                                                    class="fw-medium text-dark">Amount:</span><span
                                                    class="text-muted ms-2 fs-14 d-inline-block">2,34,4543.00</span><span
                                                    class="text-dark fw-medium float-end">LTC</span></div>
                                            <div class="fw-medium fs-14 py-2">Total: <span
                                                    class="fs-14 d-inline-block">22.00 BTC</span></div>
                                            <div class="fs-12 text-success">Additional Charges: 0.32%(0.0001231 BTC)
                                            </div>
                                            <label class="fw-medium fs-12 mt-4 mb-3">SELECT PAYMENT METHOD :</label>
                                            <div class="row g-2">
                                                <div class="col-xl-6">
                                                    <div class="p-2 border rounded">
                                                        <div class="form-check mb-0">
                                                            <input class="form-check-input" type="radio"
                                                                name="flexRadioDefault" id="flexRadioDefault1" checked>
                                                            <label class="form-check-label fs-12"
                                                                for="flexRadioDefault1">
                                                                Credit / Debit Cards
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6">
                                                    <div class="p-2 border rounded">
                                                        <div class="form-check mb-0">
                                                            <input class="form-check-input" type="radio"
                                                                name="flexRadioDefault" id="flexRadioDefault2">
                                                            <label class="form-check-label fs-12"
                                                                for="flexRadioDefault2">
                                                                Paypal
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12">
                                                    <div class="p-2 border rounded">
                                                        <div class="form-check mb-0">
                                                            <input class="form-check-input" type="radio"
                                                                name="flexRadioDefault" id="flexRadioDefault3">
                                                            <label class="form-check-label fs-12"
                                                                for="flexRadioDefault3">
                                                                Wallet
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-grid mt-3 pt-1">
                                            <button type="button" class="btn btn-primary btn-wave btn-lg">BUY
                                                CRYPTO</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane border-0 p-0" id="sell-crypto" role="tabpanel"
                                    aria-labelledby="sell-crypto">
                                    <div class="tab-pane border-0 p-0" id="sell-crypto1" role="tabpanel"
                                        aria-labelledby="sell-crypto1">
                                        <div class="input-group mb-3 flex-nowrap">
                                            <input type="text" class="form-control" aria-label="crypto buy select"
                                                placeholder="Select Crypto">
                                            <VueMultiselect class="custom-vuemulti-select custom-crypto1" data-trigger
                                                :searchable="true" :show-labels="false" id="choices-single-default"
                                                v-model="cryptoDataStatus" :options="dashBoardData.coindata">
                                            </VueMultiselect>

                                        </div>
                                        <div class="input-group mb-3 flex-nowrap">
                                            <input type="text" class="form-control" aria-label="crypto buy select"
                                                placeholder="Select Currency">
                                            <VueMultiselect class="custom-vuemulti-select custom-crypto1" data-trigger
                                                :searchable="true" :show-labels="false" id="choices-single-default"
                                                v-model="currencyDataStatus" :options="dashBoardData.currencydata">
                                            </VueMultiselect>

                                        </div>
                                        <div class="mb-3">
                                            <span class="form-label">Crypto Value :</span>
                                            <div class="position-relative">
                                                <div
                                                    class="p-2 border rounded d-flex align-items-center flex-wrap justify-content-between gap-3 mt-1">
                                                    <div class="gap-2 d-flex align-items-center">
                                                        <div class="lh-1">
                                                            <span class="avatar bg-light p-2">
                                                                <BaseImg src="/images/crypto-currencies/regular/Bitcoin.svg" alt=""/>

                                                            </span>
                                                        </div>
                                                        <div class="fw-medium">Bitcoin - BTC</div>
                                                    </div>
                                                    <div class="text-end">
                                                        <span class="fw-medium d-block">0.374638535 BTC</span>
                                                        <span class="text-muted">$5,364.65</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <span class="form-label">Deposit To :</span>
                                            <div class="position-relative">
                                                <div
                                                    class="p-2 border rounded d-flex align-items-center flex-wrap gap-2 mt-1">
                                                    <div class="lh-1">
                                                        <span class="avatar bg-light p-2">
                                                            <i class="ri-bank-line text-info fs-20"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span class="fw-medium d-block">Banking</span>
                                                        <span class="text-muted">Checking ...</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="fs-14 py-2">
                                                <div class="d-inline-flex">
                                                    <span class="fw-medium text-dark">Price:</span><span
                                                        class="text-muted ms-2 fs-14">6.003435</span>
                                                </div>
                                                <span class="text-dark fw-medium float-end">BTC</span>
                                            </div>
                                            <div class="fs-14 py-2">
                                                <div class="d-inline-flex">
                                                    <span class="fw-medium text-dark">Amount:</span><span
                                                        class="text-muted ms-2 fs-14">2,34,4543.00</span>
                                                </div>
                                                <span class="text-dark fw-medium float-end">LTC</span>
                                            </div>
                                        </div>
                                        <div class="d-grid mt-3">
                                            <button type="button" class="btn btn-danger btn-wave btn-lg">SELL
                                                CRYPTO</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Assets Overview
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div id="balanceAnalysis" class="p-3">
                                <apexchart height="167px" type="radialBar" :options="dashBoardData.assetoptions"
                                    :series="dashBoardData.assetseries" />
                            </div>
                            <div class="border-top border-block-start-dashed p-3">
                                <div class="d-flex align-items-center gap-3 mb-3">
                                    <div class="lh-1">
                                        <span class="avatar avatar-sm bg-primary">
                                            <i class="ri-wallet-3-line fs-16"></i>
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <div class="fw-medium text-muted">Funding</div>
                                        <h6 class="mb-0">$54,784 USD</h6>
                                    </div>
                                    <div class="text-end">
                                        <span class="d-block text-muted fs-12">This Year</span>
                                        <span class="fw-medium text-success">
                                            <i class="ri-arrow-down-s-fill me-1 align-middle"></i>1.05%
                                        </span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-center gap-3">
                                    <div class="lh-1">
                                        <span class="avatar avatar-sm bg-secondary">
                                            <i class="ri-arrow-up-down-line fs-16"></i>
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <div class="fw-medium text-muted">Trading</div>
                                        <h6 class="mb-0">$23,489 USD</h6>
                                    </div>
                                    <div class="text-end">
                                        <span class="d-block text-muted fs-12">This Year</span>
                                        <span class="fw-medium text-danger">
                                            <i class="ri-arrow-down-s-fill me-1 align-middle"></i>1.05%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Portfolio Overview
                    </div>
                    <div class="d-flex flex-wrap gap-2">
                        <div class="dropdown">
                            <a href="javascript:void(0);"
                                class="btn btn-outline-light btn-wave waves-effect waves-light"
                                data-bs-toggle="dropdown" aria-expanded="false">Filters<i
                                    class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">New</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Popular</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Relevant</a></li>
                            </ul>
                        </div>
                        <div>
                            <input class="form-control" type="text" placeholder="Search Here"
                                aria-label=".form-control-sm example">
                        </div>
                    </div>
                </div>
                <div class="card-body p-0">
                    <TableComponent tableClass="table text-nowrap"
                        :headers="[{ text: 'Asset Type' }, { text: 'Current Balance (Crypto)' }, { text: 'Current Price (USD)' }, { text: 'Total Value (USD)' }, { text: '24h Change' }, { text: 'Total Gain/Loss (USD)' }, { text: '24h Volume (USD)' }, { text: 'Market Rank', thClass: 'text-center' },]"
                        :rows="dashBoardData.cryptoTableRows" v-slot:cell="{ row }">
                        <td :class="row.tdClass">
                            <div class="d-flex align-items-center gap-2">
                                <div class="lh-1">
                                    <span class="avatar avatar-sm avatar-rounded">
                                        <BaseImg :src="row.image" alt=""/>
                                    </span>
                                </div>
                                <div>
                                    {{ row.name }}
                                </div>
                            </div>
                        </td>
                        <td :class="row.tdClass">{{ row.quantity }}</td>
                        <td :class="row.tdClass">{{ row.price }}</td>
                        <td :class="row.tdClass">{{ row.totalValue }}</td>
                        <td :class="row.tdClass"><span :class="['badge', row.changeColor]">{{ row.change }}</span></td>
                        <td :class="row.tdClass">{{ row.profitLoss }}</td>
                        <td :class="row.tdClass">{{ row.marketCap }}</td>
                        <td :class="`text-center ${row.tdClass}`">{{ row.rank }}</td>
                    </TableComponent>

                </div>
                <div class="card-footer">
                    <div class="d-flex align-items-center flex-wrap">
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
    <!-- End:: row-2 -->
</template>

<style scoped>
/* Add your styles here */
</style>
