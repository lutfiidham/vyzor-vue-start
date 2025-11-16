<script setup>
import { Head } from '@inertiajs/vue3'
import { ref } from 'vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'

import SpkReusebleJobs from '@/shared/@spk/dashboards/jobs/dashboard/spk-reuseble-jobs.vue'
import * as buySellData from '@/shared/data/dashboards/crypto/buySelldata.js'

const dataToPass = {
  title: 'Dashboards',
  subtitle: 'Crypto',
  currentpage: 'Buy & Sell',
  activepage: 'Buy & Sell',
}

const cryptoType = ref('USD')
const cryptoValue = ref('BTC')
const cryptoValue1 = ref('BTC')
const currencyValue = ref('USD')
const currencyValue1 = ref('USD')
</script>

<template>
  <Head title="Crypto-Buy & Sell | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div v-for="(item, index) in buySellData.Buycards" :key="index" class="col-xl-4">
      <SpkReusebleJobs
        :card-class="`card ${item.cardClass}`"
        count-up-class="fs-5"
        body-class="p-4"
        :image-icon="true"
        :list-card="true"
        title-class="d-block text-muted mb-1"
        :list="item"
        :NoCountUp="true"
        :CountUpValue="false"
      />
    </div>

    <div class="col-xxl-6 col-xl-12">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Buy & Sell Statistics
          </div>
          <div class="btn-group flex-wrap" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary btn-sm btn-wave waves-effect waves-light">
              1D
            </button>
            <button
              type="button"
              class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
            >
              1W
            </button>
            <button
              type="button"
              class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
            >
              1M
            </button>
            <button
              type="button"
              class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
            >
              3M
            </button>
            <button
              type="button"
              class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
            >
              6M
            </button>
            <button
              type="button"
              class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
            >
              1Y
            </button>
          </div>
        </div>
        <div class="card-body p-0">
          <div
            class="d-flex flex-wrap align-items-center border-bottom border-block-end-dashed mb-3 p-4 gap-5 justify-content-sm-center"
          >
            <div v-for="(item, index) in buySellData.accountSummary" :key="index">
              <span class="d-block fs-12">{{ item.label }}</span>
              <span :class="`d-block fw-medium fs-15 text-${item.color}`">{{ item.value }}</span>
            </div>

            <div />
          </div>
          <div id="buy_sell-statistics" class="px-3">
            <Apexchart
              height="370px"
              type="bar"
              :options="buySellData.sellOptions"
              :series="buySellData.sellSeries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Quick Secure Transfer
          </div>
        </div>
        <div class="card-body">
          <div
            id="sell-crypto"
            class="tab-pane border-0 p-0"
            role="tabpanel"
            aria-labelledby="sell-crypto"
          >
            <div class="mb-3">
              <span class="form-label">Crypto Value :</span>
              <div class="position-relative">
                <a href="javascript:void(0);" class="stretched-link" />
                <div
                  class="p-2 border rounded d-flex align-items-center flex-wrap justify-content-between gap-3 mt-1"
                >
                  <div class="gap-2 d-flex align-items-center">
                    <div class="lh-1">
                      <span class="avatar bg-light p-2">
                        <BaseImg src="/images/crypto-currencies/regular/Bitcoin.svg" alt="" />
                      </span>
                    </div>
                    <div class="fw-medium">
                      Bitcoin - BTC
                    </div>
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
                <a href="javascript:void(0);" class="stretched-link" />
                <div class="p-2 border rounded d-flex align-items-center gap-2 mt-1">
                  <div class="lh-1">
                    <span class="avatar bg-light p-2">
                      <i class="ri-bank-line text-info fs-20" />
                    </span>
                  </div>
                  <div>
                    <span class="fw-medium d-block">Banking</span>
                    <span class="text-muted">Checking ...</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <span class="d-block fw-medium">Amount :</span>
              <div class="d-flex align-items-center justify-content-between text-muted">
                <div>Weekly Bank Limit</div>
                <div>$10,000 remaining</div>
              </div>
            </div>
            <div class="input-group mb-3 flex-nowrap">
              <input type="text" class="form-control" aria-label="crypto buy select">
              <VueMultiselect
                id="choices-single-default4"
                v-model="cryptoType"
                class="custom-crypto1 custom-vuemulti-select"
                :searchable="true"
                :show-labels="false"
                :multiple="false"
                :options="buySellData.sellCrypto1"
                :taggable="false"
                placeholder="Select"
              />
            </div>
            <div>
              <div class="fs-14 py-2">
                <div class="d-inline-flex">
                  <span class="fw-medium text-dark">Price:</span><span class="text-muted ms-2 fs-14">6.003435</span>
                </div>
                <span class="text-dark fw-medium float-end">BTC</span>
              </div>
              <div class="fs-14 py-2">
                <div class="d-inline-flex">
                  <span class="fw-medium text-dark">Amount:</span><span class="text-muted ms-2 fs-14">2,34,4543.00</span>
                </div>
                <span class="text-dark fw-medium float-end">LTC</span>
              </div>
            </div>
            <div class="d-grid mt-4">
              <button type="button" class="btn btn-success btn-wave btn-lg">
                Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6">
      <div class="card custom-card">
        <div class="card-header justify-content-between pb-2">
          <div class="card-title">
            Buy & Sell Crypto
          </div>
          <ul id="myTab4" class="nav nav-tabs tab-style-8 scaleX" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                id="buy-crypto-tab"
                class="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#buy-crypto-tab-pane"
                type="button"
                role="tab"
                aria-controls="buy-crypto-tab-pane"
                aria-selected="true"
              >
                Buy
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="sell-crypto-tab"
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#sell-crypto-tab-pane"
                type="button"
                role="tab"
                aria-controls="sell-crypto-tab-pane"
                aria-selected="false"
              >
                Sell
              </button>
            </li>
          </ul>
        </div>
        <div class="card-body custom-buy">
          <div id="myTabContent3" class="tab-content">
            <div
              id="buy-crypto-tab-pane"
              class="tab-pane show active overflow-hidden border-0 p-0"
              role="tabpanel"
              aria-labelledby="buy-crypto-tab"
              tabindex="0"
            >
              <div>
                <div class="input-group mb-3 flex-nowrap">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="crypto buy select"
                    placeholder="Enter Value"
                  >
                  <VueMultiselect
                    id="choices-single-default"
                    v-model="cryptoValue"
                    class="custom-crypto1 custom-vuemulti-select"
                    :searchable="true"
                    :show-labels="false"
                    :multiple="false"
                    :options="buySellData.sellCrypto"
                    :taggable="false"
                    placeholder="Select"
                  />
                </div>
                <div class="input-group mb-3 flex-nowrap">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="crypto buy select"
                    placeholder="Amount Obtained"
                  >
                  <VueMultiselect
                    id="choices-single-default1"
                    v-model="currencyValue"
                    class="custom-crypto1 custom-vuemulti-select"
                    :searchable="true"
                    :show-labels="false"
                    :multiple="false"
                    :options="buySellData.sellCrypto1"
                    :taggable="false"
                    placeholder="Select"
                  />
                </div>
                <div>
                  <div class="fs-14 py-2">
                    <span class="fw-medium text-dark">Price:</span><span class="text-muted ms-2 fs-14 d-inline-block">6.003435</span><span class="text-dark fw-medium float-end">BTC</span>
                  </div>
                  <div class="fs-14 py-2">
                    <span class="fw-medium text-dark">Amount:</span><span class="text-muted ms-2 fs-14 d-inline-block">2,34,4543.00</span><span class="text-dark fw-medium float-end">LTC</span>
                  </div>
                  <div class="fw-medium fs-14 py-2">
                    Total: <span class="fs-14 d-inline-block">22.00 BTC</span>
                  </div>
                  <div class="fs-12 text-success">
                    Additional Charges: 0.32%(0.0001231 BTC)
                  </div>
                  <label class="fw-medium fs-12 mt-4 mb-3">SELECT PAYMENT METHOD :</label>
                  <div class="row g-2">
                    <div class="col-xl-6">
                      <div class="p-2 border rounded">
                        <div class="form-check mb-0">
                          <input
                            id="flexRadioDefault1"
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            checked
                          >
                          <label class="form-check-label fs-12" for="flexRadioDefault1">
                            Credit / Debit Cards
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="p-2 border rounded">
                        <div class="form-check mb-0">
                          <input
                            id="flexRadioDefault2"
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                          >
                          <label class="form-check-label fs-12" for="flexRadioDefault2">
                            Paypal
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-12">
                      <div class="p-2 border rounded">
                        <div class="form-check mb-0">
                          <input
                            id="flexRadioDefault3"
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                          >
                          <label class="form-check-label fs-12" for="flexRadioDefault3">
                            Wallet
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-grid mt-3 pt-1">
                  <button type="button" class="btn btn-primary btn-wave btn-lg">
                    BUY CRYPTO
                  </button>
                </div>
              </div>
            </div>
            <div
              id="sell-crypto-tab-pane"
              class="tab-pane overflow-hidden border-0 p-0"
              role="tabpanel"
              aria-labelledby="sell-crypto-tab"
              tabindex="0"
            >
              <div class="input-group mb-3 flex-nowrap">
                <input
                  type="text"
                  class="form-control"
                  aria-label="crypto buy select"
                  placeholder="Select Currency"
                >
                <VueMultiselect
                  id="choices-single-default2"
                  v-model="cryptoValue1"
                  class="custom-crypto1 custom-vuemulti-select"
                  :searchable="true"
                  :show-labels="false"
                  :multiple="false"
                  :options="buySellData.sellCrypto2"
                  :taggable="false"
                  placeholder="Select"
                />
              </div>
              <div class="input-group mb-3 flex-nowrap">
                <input type="text" class="form-control" aria-label="crypto buy select">
                <VueMultiselect
                  id="choices-single-default3"
                  v-model="currencyValue1"
                  class="custom-crypto1 custom-vuemulti-select"
                  :searchable="true"
                  :show-labels="false"
                  :multiple="false"
                  :options="buySellData.sellCrypto3"
                  :taggable="false"
                  placeholder="Select"
                />
              </div>
              <div class="mb-3">
                <span class="form-label">Crypto Value :</span>
                <div class="position-relative">
                  <div
                    class="p-2 border rounded d-flex align-items-center justify-content-between gap-3 mt-1 flex-wrap"
                  >
                    <div class="gap-2 d-flex align-items-center">
                      <div class="lh-1">
                        <span class="avatar bg-light p-2">
                          <BaseImg src="/images/crypto-currencies/regular/Bitcoin.svg" alt="" />
                        </span>
                      </div>
                      <div class="fw-medium">
                        Bitcoin - BTC
                      </div>
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
                  <div class="p-2 border rounded d-flex align-items-center gap-2 mt-1">
                    <div class="lh-1">
                      <span class="avatar bg-light p-2">
                        <i class="ri-bank-line text-info fs-20" />
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
                    <span class="fw-medium text-dark">Price:</span><span class="text-muted ms-2 fs-14">6.003435</span>
                  </div>
                  <span class="text-dark fw-medium float-end">BTC</span>
                </div>
                <div class="fs-14 py-2">
                  <div class="d-inline-flex">
                    <span class="fw-medium text-dark">Amount:</span><span class="text-muted ms-2 fs-14">2,34,4543.00</span>
                  </div>
                  <span class="text-dark fw-medium float-end">LTC</span>
                </div>
              </div>
              <div class="d-grid mt-3">
                <button type="button" class="btn btn-danger btn-wave btn-lg">
                  SELL CRYPTO
                </button>
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
