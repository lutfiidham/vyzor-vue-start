<script setup>
import * as cart from '@/shared/data/dashboards/ecommerce/cartdata'
import Pageheader from '@/components/pageheader/pageheader.vue'
import Quantity from '../../../../UI/quantity.vue'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import BaseImg from '../../../components/Baseimage/BaseImg.vue'
import { Head, Link } from '@inertiajs/vue3'
const dataToPass = {
  activepage: 'Cart',
  title: 'Dashboards',
  subtitle: 'Ecommerce',
  currentpage: 'Cart',
}

const baseUrl = __BASE_PATH__
</script>

<template>
  <Head title="Ecommerce-Cart | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-9">
      <div class="card custom-card overflow-hidden">
        <div class="card-body p-0">
          <TableComponent
            tableClass="table text-nowrap"
            :rows="cart.cartData"
            v-slot:cell="{ row }"
          >
            <td :class="row.tdClass">
              <div class="d-flex align-items-center gap-3">
                <div class="lh-1">
                  <span class="avatar avatar-xxl">
                    <BaseImg :src="row.image" alt="" />
                  </span>
                </div>
                <div>
                  <span class="d-block text-muted mb-1">{{ row.brand }}</span>
                  <h6 class="fw-semibold">{{ row.name }}</h6>
                  <div class="d-flex align-items-center gap-2 fs-13">
                    <div>
                      Color : <span class="fw-medium text-muted">{{ row.color }}</span>
                    </div>
                    <div class="vr"></div>
                    <div class="">
                      Size : <span class="fw-medium text-muted">{{ row.size }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td :class="row.tdClass">
              <span
                :class="`badge bg-${row.stockStatusColor ? 'success' : 'danger'}-transparent fs-13`"
                >{{ row.stockStatus }}</span
              >
            </td>
            <td :class="row.tdClass">
              <div class="fw-medium">${{ row.price }}</div>
            </td>
            <td :class="row.tdClass">
              <div
                class="d-inline-flex rounded align-items-center flex-nowrap order-qnt gap-2 p-1 bg-light"
              >
                <Quantity
                  decClass="badge bg-white p-2 border text-muted fs-13 product-quantity-minus"
                  inputClass="form-control form-control-cart border-0 text-center w-100 shadow-none"
                  incClass="badge bg-white p-2 border text-muted fs-13 product-quantity-plus"
                  :initialValue="row.quantity"
                />
              </div>
            </td>
            <td :class="row.tdClass">
              <div class="fw-medium">${{ row.quantity * row.price }}</div>
            </td>
            <td :class="row.tdClass">
              <div class="d-flex align-items-center gap-2 lh-1">
                <div>
                  <a
                    href="javascript:void(0);"
                    class="text-muted d-inline-flex align-items-center justify-content-center"
                    ><i class="ti ti-trash me-1"></i>Delete</a
                  >
                </div>
                <div class="vr"></div>
                <div>
                  <a
                    href="javascript:void(0);"
                    class="text-muted d-inline-flex align-items-center justify-content-center"
                    ><i class="ti ti-heart me-1"></i>Save For Later</a
                  >
                </div>
              </div>
            </td>
          </TableComponent>
        </div>
      </div>
    </div>
    <div class="col-xl-3">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">Order Summary</div>
          <div class="text-end">
            <span class="text-muted fs-13">Estimated Delivery</span>
            <span class="d-block fw-medium">13,Apr 2025</span>
          </div>
        </div>
        <div class="card-header">
          <span class="d-block fs-14 fw-medium mb-1">Have a coupon?</span>
          <div class="input-group mb-1">
            <input
              type="text"
              class="form-control form-control-sm"
              placeholder="Coupon Code"
              aria-label="coupon-code"
              aria-describedby="coupons"
            />
            <button class="btn btn-primary input-group-text" id="coupons">Apply</button>
          </div>
        </div>
        <div class="card-body">
          <ul class="list-unstyled cart-order-summary-list">
            <li>
              <div class="d-flex align-items-center justify-content-between">
                <div>Sub Total</div>
                <div class="fw-medium">$929.79</div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center justify-content-between">
                <div>Discount (10%)</div>
                <div class="fw-medium">- $92.97</div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center justify-content-between">
                <div>Tax</div>
                <div class="fw-medium">$0.00</div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center justify-content-between">
                <div>Shipping</div>
                <div class="fw-medium text-success">Free</div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center justify-content-between">
                <div>Total</div>
                <div class="fw-medium">$837.79</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="card-footer d-grid">
          <Link
            :href="`${baseUrl}/demo/dashboards/ecommerce/checkout`"
            class="btn btn-primary d-inline-flex align-items-center justify-content-center"
            >Proceed to checkout<i class="ti ti-arrow-narrow-right ms-1"></i
          ></Link>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
