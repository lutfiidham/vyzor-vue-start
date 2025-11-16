<script setup>
import { Head } from '@inertiajs/vue3'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as checkoutData from '@/shared/data/dashboards/ecommerce/checkoutdata'

const dataToPass = {
  activepage: 'Checkout',
  title: 'Dashboards',
  subtitle: 'Ecommerce',
  currentpage: 'Checkout',
}
</script>

<template>
  <Head title="Ecommerce-Checkout | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="container">
    <div class="row">
      <div class="col-xl-8">
        <div class="card custom-card !border-0">
          <div class="card-body">
            <h5 class="mb-3">
              Personal Info
            </h5>
            <div class="row gy-4">
              <div class="col-md-6">
                <input id="firstName" type="text" class="form-control" placeholder="First Name">
              </div>
              <div class="col-md-6">
                <input id="lastName" type="text" class="form-control" placeholder="Last Name">
              </div>
              <div class="col-md-6">
                <input
                  id="emailAddress"
                  type="email"
                  class="form-control"
                  placeholder="Email Address"
                >
              </div>
              <div class="col-md-6">
                <input
                  id="mobileNumber"
                  type="email"
                  class="form-control"
                  placeholder="Mobile Number"
                >
              </div>
            </div>
            <div class="mt-5 mb-3 d-flex align-items-center justify-content-between flex-wrap">
              <h5 class="fw-semibold mb-0">
                Shipping Address
              </h5>
              <a href="#select-address" class="link-primary" data-bs-toggle="modal">Select From Address Book</a>
            </div>
            <div class="row mb-4">
              <div class="col-md-6">
                <input id="fullName" type="email" class="form-control" placeholder="Full Name">
              </div>
            </div>
            <div class="row gy-4">
              <div class="col-md-6">
                <input id="address1" type="email" class="form-control" placeholder="Address 1">
              </div>
              <div class="col-md-6">
                <input id="address2" type="email" class="form-control" placeholder="Address 2">
              </div>
              <div class="col-md-6">
                <input id="landMark" type="email" class="form-control" placeholder="Landmark">
              </div>
              <div class="col-md-6">
                <input
                  id="pinZipCode"
                  type="email"
                  class="form-control"
                  placeholder="Pincode / Zipcode"
                >
              </div>
              <div class="col-md-6">
                <input id="city" type="email" class="form-control" placeholder="City">
              </div>
              <div class="col-md-6">
                <input
                  id="stateDistrict"
                  type="email"
                  class="form-control"
                  placeholder="State, District"
                >
              </div>
              <div class="col-md-12">
                <textarea
                  id="deliveryInstructions"
                  rows="3"
                  class="form-control"
                  placeholder="Delivery Instructions"
                />
              </div>
              <div class="col-md-12">
                <div class="form-group d-flex align-items-center flex-wrap">
                  <div class="min-w-fit-content me-4">
                    <p class="mb-0 fw-medium">
                      Address Type:
                    </p>
                  </div>
                  <div class="flex-grow-1">
                    <div class="d-flex gap-4 flex-wrap">
                      <div class="form-check mb-0">
                        <input
                          id="radio-1"
                          class="form-check-input"
                          type="radio"
                          name="addressType"
                          checked
                        >
                        <label class="form-check-labe fs-13l" for="radio-1">Home</label>
                      </div>
                      <div class="form-check mb-0">
                        <input
                          id="radio-2"
                          class="form-check-input"
                          type="radio"
                          name="addressType"
                        >
                        <label class="form-check-label fs-13" for="radio-2">Work</label>
                      </div>
                      <div class="form-check mb-0">
                        <input
                          id="radio-3"
                          class="form-check-input"
                          type="radio"
                          name="addressType"
                        >
                        <label class="form-check-label fs-13" for="radio-3">Other</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <h5 class="fw-semibold mb-3">
                Payment Method
              </h5>
              <ul id="myTab" class="nav nav-tabs custom-nav-tabs-2 gap-3" role="tablist">
                <li class="nav-item" role="presentation">
                  <div
                    class="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#paypal-tab"
                    aria-selected="true"
                    role="tab"
                  >
                    <div class="d-flex align-items-center">
                      <span class="min-w-fit-content me-3"><i class="bi bi-paypal fs-20" /></span>
                      <div class="flex-grow-1">
                        PayPal
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item" role="presentation">
                  <div
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#card-tab"
                    aria-selected="false"
                    tabindex="-1"
                    role="tab"
                  >
                    <div class="d-flex align-items-center">
                      <span class="min-w-fit-content me-3"><i class="bi bi-credit-card fs-20" /></span>
                      <div class="flex-grow-1">
                        Credit Or Debit Card
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item" role="presentation">
                  <div
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#netbanking-tab"
                    aria-selected="false"
                    tabindex="-1"
                    role="tab"
                  >
                    <div class="d-flex align-items-center">
                      <span class="min-w-fit-content me-3"><i class="bi bi-globe fs-20" /></span>
                      <div class="flex-grow-1">
                        UPI / Net Banking
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item" role="presentation">
                  <div
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#cod-tab"
                    aria-selected="false"
                    tabindex="-1"
                    role="tab"
                  >
                    <div class="d-flex align-items-center">
                      <span class="min-w-fit-content me-3"><i class="bi bi-cash-stack fs-20" /></span>
                      <div class="flex-grow-1">
                        Cash On Delivery
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="tab-content">
                <div id="paypal-tab" class="tab-pane p-0 border-0 active" role="tabpanel">
                  <p class="mb-3 mt-4 text-muted">
                    Order will be placed once the payment is done. Please read all the terms &amp;
                    conditions about
                    <a href="javascript:void(0);" class="text-primary text-decoration-underline">refund policy</a>.
                  </p>
                  <a href="javascript:void(0);" class="btn btn-primary">Proceed to pay <i class="ti ti-arrow-right fs-18 ms-2 align-middle" /></a>
                </div>
                <div id="card-tab" class="tab-pane p-0 border-0" role="tabpanel">
                  <p class="mb-2 mt-4 fw-medium">
                    Card Details:
                  </p>
                  <div class="row gy-4">
                    <div class="col-md-6">
                      <input
                        id="cardHolderName"
                        type="text"
                        class="form-control"
                        placeholder="Card Holder Name"
                      >
                    </div>
                    <div class="col-md-6">
                      <input
                        id="cardNumber"
                        type="text"
                        class="form-control"
                        placeholder="Card Number"
                      >
                    </div>
                    <div class="col-md-3">
                      <input
                        id="expDate"
                        type="text"
                        class="form-control"
                        placeholder="Expiry Date"
                      >
                    </div>
                    <div class="col-md-2">
                      <input id="cvv" type="text" class="form-control" placeholder="CVV">
                    </div>
                  </div>
                  <p class="mb-3 mt-2 fs-13 text-muted">
                    <span class="me-1"><i class="ti ti-lock fs-16" /></span>
                    <span>Your transaction is secured with encryption.</span>
                  </p>
                  <a href="javascript:void(0);" class="btn btn-primary">Proceed to pay <i class="ti ti-arrow-right fs-18 ms-2 align-middle" /></a>
                </div>
                <div id="netbanking-tab" class="tab-pane p-0 border-0" role="tabpanel">
                  <p class="mb-3 mt-4 text-muted">
                    Order will be placed once the payment is done. Please read all the terms &
                    conditions about
                    <a href="javascript:void(0);" class="text-primary text-decoration-underline">refund policy</a>.
                  </p>
                  <a href="javascript:void(0);" class="btn btn-primary">Proceed to pay <i class="ti ti-arrow-right fs-18 ms-2 align-middle" /></a>
                </div>
                <div id="cod-tab" class="tab-pane p-0 border-0" role="tabpanel">
                  <p class="mb-3 mt-4 text-muted">
                    Proceed to place order. If you have any doubts regarding returning/exchanging
                    products, checkout
                    <a href="javascript:void(0);" class="text-primary text-decoration-underline">Return & Exchange policy</a>
                  </p>
                  <a href="javascript:void(0);" class="btn btn-primary">Proceed to checkout <i class="ti ti-arrow-right align-middle fs-18 ms-2" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card custom-card overflow-hidden">
          <div class="card-body p-0">
            <ul class="list-group list-group-flush">
              <li
                v-for="(item, index) in checkoutData.checkoutSummary"
                :key="index"
                class="list-group-item"
              >
                <div class="d-flex align-items-center gap-3">
                  <div class="lh-1">
                    <span class="avatar avatar-xxl">
                      <BaseImg :src="item.imageUrl" alt="" />
                    </span>
                  </div>
                  <div class="flex-fill">
                    <span class="fw-semibold d-block mb-2">{{ item.name }}</span>
                    <span class="text-muted d-block fs-13 mb-1">Color : {{ item.color }}</span>
                    <div class="d-flex align-items-center justify-content-between flex-wrap">
                      <span class="text-muted d-block fs-13">Qty : {{ item.quantity }} x ${{ item.price }}
                      </span>
                      <div class="fw-semibold">
                        ${{ item.quantity * item.price }}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="card-footer">
            <span class="d-block fs-14 text-muted mb-1">Have a coupon ? Enter below</span>
            <div class="input-group mb-1">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Coupon Code"
                aria-label="coupon-code"
                aria-describedby="coupons"
              >
              <button id="coupons" class="btn btn-primary input-group-text">
                Apply
              </button>
            </div>
            <ul class="list-unstyled cart-order-summary-list mt-3">
              <li v-for="(item, index) in checkoutData.summaryData" :key="index">
                <div class="d-flex align-items-center justify-content-between">
                  <div :class="item.class">
                    {{ item.label }}
                  </div>
                  <div
                    :class="`fw-medium ${item.isFree ? 'text-success' : `${item.isTotal ? 'text-primary h5 mb-0' : ''}`}`"
                  >
                    {{ item.value }}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-1 -->

  <!-- Start:: select address modal -->
  <div id="select-address" class="modal fade modal-style-1 modal-3" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="d-flex align-items-start justify-content-between mb-4">
            <h6 class="fs-18 mb-0">
              Select Address
            </h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="card custom-card checkout-address-card">
                <div class="card-body">
                  <!-- form-check -->
                  <input
                    id="address1_select"
                    class="form-check-input d-none"
                    type="radio"
                    name="select-address"
                    checked=""
                  >
                  <label
                    class="position-absolute all-0 cursor-pointer"
                    for="address1_select"
                  />
                  <!-- form-check -->

                  <span class="badge bg-secondary rounded-pill custom-badge-3">Default</span>

                  <div class="d-flex align-items-center gap-2 mb-3">
                    <div class="lh-1">
                      <span class="avatar avatar-md avatar-rounded border"><i class="ti ti-home fs-5" /></span>
                    </div>
                    <h6 class="fs-16 mb-0">
                      Home
                    </h6>
                  </div>
                  <p class="mb-1 fw-medium">
                    Ruby Disousa
                  </p>
                  <p class="mb-1 fw-medium text-muted fs-13">
                    rubyakuner@ginna.mail
                  </p>
                  <p class="mb-2 fw-medium text-muted fs-13">
                    +11-23-1116773
                  </p>
                  <p class="mb-0 fs-13 text-muted">
                    H.No: 3-116/458, Golden Park, Marias St., Near 12Amet Residency, 14756, United
                    States Of America
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="card custom-card checkout-address-card">
                <div class="card-body">
                  <!-- form-check -->
                  <input
                    id="address2_select"
                    class="form-check-input d-none"
                    type="radio"
                    name="select-address"
                  >
                  <label
                    class="position-absolute all-0 cursor-pointer"
                    for="address2_select"
                  />
                  <!-- form-check -->

                  <div class="d-flex align-items-center gap-2 mb-3">
                    <div class="lh-1">
                      <span class="avatar avatar-md avatar-rounded border"><i class="ti ti-briefcase fs-16" /></span>
                    </div>
                    <h6 class="fs-16 mb-0">
                      Work
                    </h6>
                  </div>
                  <p class="mb-1 fw-medium">
                    Ruby Disousa
                  </p>
                  <p class="mb-1 fw-medium text-muted fs-13">
                    rubyakuner@ginna.mail
                  </p>
                  <p class="mb-2 fw-medium text-muted fs-13">
                    +11-23-1116773
                  </p>
                  <p class="mb-0 fs-13 text-muted">
                    Taj Building, 3rd Floor, Room No: 3, Silver St., Adugiahsuk, LICE, 14756, United
                    States Of America
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center gap-2 justify-content-end">
            <a href="javascript:void(0);" class="btn btn-light" data-bs-dismiss="modal">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary">Select address</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: select address modal -->
</template>

<style scoped>
/* Add your styles here */
</style>
