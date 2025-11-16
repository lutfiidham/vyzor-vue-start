<script setup>
import { Head } from '@inertiajs/vue3'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'

const dataToPass = {
  title: 'Pages',
  subtitle: 'Invoice',
  currentpage: 'Invoice Details',
  activepage: 'Invoice Details',
}
</script>

<template>
  <Head title="Invoice-Details | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card invoice-card">
        <div class="card-body">
          <div class="row gy-3">
            <div class="col-xl-12">
              <BaseImg
                src="/images/brand-logos/desktop-logo.png"
                alt=""
                class="img-fluid desktop-logo"
              />
              <BaseImg
                src="/images/brand-logos/desktop-dark.png"
                alt=""
                class="img-fluid desktop-dark"
              />
            </div>
            <div class="col-xl-12">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <p class="text-muted mb-2">
                    Billing From :
                  </p>
                  <p class="fw-bold mb-1">
                    Spruko Technologies
                  </p>
                  <p class="mb-1 text-muted">
                    Mig-1-11,Manroe street
                  </p>
                  <p class="mb-1 text-muted">
                    Georgetown,Washington D.C,USA,200071
                  </p>
                  <p class="mb-1 text-muted">
                    sprukotrust.VYZOR@gmail.com
                  </p>
                  <p class="mb-1 text-muted">
                    (555) 555-1234
                  </p>
                  <p class="text-muted">
                    For more information check for
                    <a href="javascript:void(0);" class="text-primary fw-medium"><u>GSTIN</u></a>
                    Details.
                  </p>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 ms-auto mt-sm-0 mt-3">
                  <p class="text-muted mb-2">
                    Billing To :
                  </p>
                  <p class="fw-bold mb-1">
                    Jack Miller
                  </p>
                  <p class="text-muted mb-1">
                    Lig-22-1,20 Covington Place
                  </p>
                  <p class="text-muted mb-1">
                    New Castle,de, United States,19320
                  </p>
                  <p class="text-muted mb-1">
                    jackmiller2134@gmail.com
                  </p>
                  <p class="text-muted">
                    +1 202-918-2132
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3">
              <p class="fw-medium text-muted mb-1">
                Invoice ID :
              </p>
              <p class="fs-15 mb-1">
                #SPK120219890
              </p>
            </div>
            <div class="col-xl-3">
              <p class="fw-medium text-muted mb-1">
                Date Issued :
              </p>
              <p class="fs-15 mb-1">
                29,Nov 2025 - <span class="text-muted fs-12 d-inline-block">12:42PM</span>
              </p>
            </div>
            <div class="col-xl-3">
              <p class="fw-medium text-muted mb-1">
                Due Date :
              </p>
              <p class="fs-15 mb-1">
                29,Dec 2025
              </p>
            </div>
            <div class="col-xl-3">
              <p class="fw-medium text-muted mb-1">
                Due Amount :
              </p>
              <p class="fs-16 mb-1 fw-medium">
                $2,570.42
              </p>
            </div>
            <div class="col-xl-12">
              <div class="table-responsive">
                <table class="table nowrap text-nowrap table-borderless border mt-4">
                  <thead>
                    <tr>
                      <th>Brand Name</th>
                      <th>Description</th>
                      <th>Quantity</th>
                      <th>Price Per Unit</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="fw-medium">
                          TechFusion
                        </div>
                      </td>
                      <td>
                        <div class="text-muted">
                          Wireless Bluetooth Earbuds
                        </div>
                      </td>
                      <td class="product-quantity-container">
                        15
                      </td>
                      <td>$49.99</td>
                      <td>$749.85</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="fw-medium">
                          HomeEase
                        </div>
                      </td>
                      <td>
                        <div class="text-muted">
                          Memory Foam Pillow
                        </div>
                      </td>
                      <td class="product-quantity-container">
                        20
                      </td>
                      <td>$19.99</td>
                      <td>$399.80</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="fw-medium">
                          GizmoWorks
                        </div>
                      </td>
                      <td>
                        <div class="text-muted">
                          Smartwatch with Fitness Tracker
                        </div>
                      </td>
                      <td class="product-quantity-container">
                        10
                      </td>
                      <td>$129.99</td>
                      <td>$1,299.90</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="fw-medium">
                          PureLux
                        </div>
                      </td>
                      <td>
                        <div class="text-muted">
                          LED Desk Lamp with USB Charging Port
                        </div>
                      </td>
                      <td class="product-quantity-container">
                        30
                      </td>
                      <td>$24.99</td>
                      <td>$749.70</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="fw-medium">
                          EcoVibe
                        </div>
                      </td>
                      <td>
                        <div class="text-muted">
                          Stainless Steel Water Bottle
                        </div>
                      </td>
                      <td class="product-quantity-container">
                        50
                      </td>
                      <td>$14.99</td>
                      <td>$749.50</td>
                    </tr>
                    <tr>
                      <td colspan="3" />
                      <td colspan="2">
                        <table class="table table-sm text-nowrap mb-0 table-borderless">
                          <tbody>
                            <tr>
                              <th scope="row" class="w-60">
                                <p class="mb-0">
                                  Sub Total :
                                </p>
                              </th>
                              <td>
                                <p class="mb-0 fw-medium fs-15">
                                  $3,999.75
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" class="w-60">
                                <p class="mb-0">
                                  Avail Discount :
                                </p>
                              </th>
                              <td>
                                <p class="mb-0 fw-medium fs-15">
                                  $49.99
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" class="w-60">
                                <p class="mb-0">
                                  Coupon Discount <span class="text-success">(10%)</span> :
                                </p>
                              </th>
                              <td>
                                <p class="mb-0 fw-medium fs-15">
                                  $399.98
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" class="w-60">
                                <p class="mb-0">
                                  Vat <span class="text-danger">(20%)</span> :
                                </p>
                              </th>
                              <td>
                                <p class="mb-0 fw-medium fs-15">
                                  $799.95
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" class="w-60">
                                <p class="mb-0">
                                  Due Till Date :
                                </p>
                              </th>
                              <td>
                                <p class="mb-0 fw-medium fs-15">
                                  $0
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" class="w-60">
                                <p class="mb-0 fs-14">
                                  Total :
                                </p>
                              </th>
                              <td>
                                <p class="mb-0 fw-medium fs-16 text-success">
                                  $4,349.73
                                </p>
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
            <div class="col-xl-4">
              <div class="card custom-card">
                <div class="card-body">
                  <h6 class="fw-semibold mb-4">
                    Mode Of Payment :
                  </h6>
                  <div class="row">
                    <div class="col-xl-12">
                      <p class="fs-14 fw-medium">
                        Credit/Debit Card
                      </p>
                      <p>
                        <span class="fw-medium text-muted fs-12">Name On Card :</span> Jack Miller
                      </p>
                      <p>
                        <span class="fw-medium text-muted fs-12">Card Number :</span> 1234 5678 9087
                        XXXX
                      </p>
                      <p>
                        <span class="fw-medium text-muted fs-12">Due Date :</span> 29,Dec 2025 -
                        <span class="text-danger fs-12 fw-medium">30 days due</span>
                      </p>
                      <p class="mb-0">
                        <span class="fw-medium text-muted fs-12">Invoice Status :
                          <span class="badge bg-warning-transparent">Pending</span></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-12">
              <div>
                <label for="invoice-note" class="form-label">Note:</label>
                <textarea id="invoice-note" class="form-control" rows="3">
Once the invoice has been verified by the accounts payable team and recorded, the only task left is to send it for approval before releasing the payment</textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer text-end">
          <button class="btn btn-warning m-1">
            Save As PDF<i class="ri-file-pdf-line ms-1 align-middle d-inline-block" />
          </button>
          <button class="btn btn-success m-1">
            Download Invoice<i class="ri-download-2-line ms-1 d-inline-block" />
          </button>
          <button class="btn btn-primary m-1">
            Send Invoice <i class="ri-send-plane-2-line ms-1 align-middle d-inline-block" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
