<script setup>
import * as orderDetailsData from '@/shared/data/dashboards/ecommerce/orderdetailsdata'
import Pageheader from '@/components/pageheader/pageheader.vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'
const dataToPass = {
  activepage: 'Order Details',
  title: 'Dashboards',
  subtitle: 'Ecommerce',
  currentpage: 'Order Details',
}
</script>

<template>
  <Head title="Ecommerce-Order Details | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xxl-9">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card overflow-hidden">
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table nowrap text-nowrap">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>SKU</th>
                      <th class="text-center">Quantity</th>
                      <th>Price Per Unit</th>
                      <th class="text-end">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in orderDetailsData.detailsTable" :key="index">
                      <td>
                        <div class="d-flex align-items-center gap-3">
                          <div class="lh-1">
                            <span class="avatar avatar-xxl">
                              <BaseImg :src="item.imageUrl" alt="" />
                            </span>
                          </div>
                          <div>
                            <span class="d-block text-muted mb-1">{{ item.brand }}</span>
                            <h6 class="fw-semibold">{{ item.name }}</h6>
                            <div class="d-flex align-items-center gap-2 fs-13">
                              <div>
                                Color : <span class="fw-medium text-muted">{{ item.color }}</span>
                              </div>
                              <div class="vr"></div>
                              <div class="">
                                Size : <span class="fw-medium text-muted">{{ item.size }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="text-muted">
                          {{ item.id }}
                        </div>
                      </td>
                      <td class="product-quantity-container text-center">
                        {{ item.quantity }}
                      </td>
                      <td>${{ item.price }}</td>
                      <td class="text-end">${{ (item.quantity * item.price).toFixed(2) }}</td>
                    </tr>
                    <tr>
                      <td colspan="3" class="border-bottom-0"></td>
                      <td colspan="2" class="border-bottom-0">
                        <table class="table table-sm text-nowrap mb-0 table-borderless">
                          <tbody>
                            <tr>
                              <td scope="row">Sub Total :</td>
                              <td class="text-end">
                                <span class="mb-0 fw-medium">$419.97</span>
                              </td>
                            </tr>
                            <tr>
                              <td scope="row">Avail Discount :</td>
                              <td class="text-end">
                                <span class="mb-0 fw-medium">-$30.00</span>
                              </td>
                            </tr>
                            <tr>
                              <td scope="row">Coupon Discount :</td>
                              <td class="text-end">
                                <span class="mb-0 fw-medium">-$41.99</span>
                              </td>
                            </tr>
                            <tr>
                              <td scope="row">Vat :</td>
                              <td class="text-end">
                                <span class="mb-0 fw-medium">$67.99</span>
                              </td>
                            </tr>
                            <tr>
                              <td scope="row">Total :</td>
                              <td class="text-end">
                                <span class="mb-0 fw-medium fs-15">$415.97</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-7">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Order Activity</div>
            </div>
            <div class="card-body">
              <ul class="list-unstyled order-activity-list">
                <li
                  v-for="(item, index) in orderDetailsData.orderTimeline"
                  :key="index"
                  :class="`${item.isCompleted ? '' : 'pending'}`"
                >
                  <div class="d-flex align-items-start justify-content-between">
                    <div class="w-50">
                      <h6 class="fw-medium mb-1">{{ item.title }}</h6>
                      <div class="text-muted">{{ item.isCompleted ? item.description : '' }}</div>
                    </div>
                    <div class="fs-13 text-end">
                      <span class="d-block mb-1">{{ item.isCompleted ? item.date : '' }}</span>
                      <span class="d-block text-muted">{{
                        item.isCompleted ? item.time : ''
                      }}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-5">
          <div class="card custom-card">
            <div class="card-header justify-content-between">
              <div class="card-title">Billing Address</div>
              <a
                href="javascript:void(0);"
                class="btn btn-primary-light btn-sm d-inline-flex align-items-center justify-content-center"
                ><i class="ti ti-edit me-1"></i>Edit</a
              >
            </div>
            <div class="card-body">
              <span class="d-block fw-medium mb-2">Tom Phillip</span>
              <ul class="list-unstyled order-address-list">
                <li>9876 Maple Avenue, Unit 12C</li>
                <li>New York, NY 10001</li>
                <li>United States</li>
                <li>(212) 555-0987</li>
              </ul>
            </div>
          </div>
          <div class="card custom-card">
            <div class="card-header justify-content-between">
              <div class="card-title">Shipping Address</div>
              <a
                href="javascript:void(0);"
                class="btn btn-primary-light btn-sm d-inline-flex align-items-center justify-content-center"
                ><i class="ti ti-edit me-1"></i>Edit</a
              >
            </div>
            <div class="card-body">
              <span class="d-block fw-medium mb-2">Tom Phillip</span>
              <ul class="list-unstyled order-address-list mb-3">
                <li>9876 Maple Avenue, Unit 12C</li>
                <li>New York, NY 10001</li>
                <li>United States</li>
                <li>(212) 555-0987</li>
              </ul>
              <span class="d-block fw-medium mb-2">Visa Card</span>
              <span class="d-block">**** **** **** 1234</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card overflow-hidden">
            <div class="card-header justify-content-between">
              <div class="card-title">Customer Details</div>
              <span class="badge bg-primary-transparent fs-13">18 Orders</span>
            </div>
            <div class="card-body p-0">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="fs-13 text-muted">
                      <i class="ri-user-line me-2 fs-14"></i>Full Name
                    </div>
                    <div class="d-flex align-items-center gap-2">
                      <div class="lh-1">
                        <span class="avatar avatar-sm avatar-rounded">
                          <BaseImg src="/images/faces/12.jpg" alt="" />
                        </span>
                      </div>
                      <div class="fw-medium">Tom Phillip</div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="fs-13 text-muted"><i class="ri-mail-line me-2 fs-14"></i>Email</div>
                    <div class="fw-medium">tomphillip23@gmail.com</div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="fs-13 text-muted">
                      <i class="ri-phone-line me-2 fs-14"></i>Phone
                    </div>
                    <div class="fw-medium text-end">(555) 123-4567</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Payment Details</div>
            </div>
            <div class="card-body p-0">
              <ul class="list-group list-group-flush custom-order">
                <li
                  v-for="(item, index) in orderDetailsData.paymentDetails"
                  :key="index"
                  class="list-group-item"
                >
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="fs-13 text-muted">
                      {{ item.label }}
                    </div>
                    <div
                      :class="`${item.label === 'Payment Status' ? 'badge bg-success-transparent fs-13' : 'fw-medium'}`"
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
  </div>
  <!--End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
