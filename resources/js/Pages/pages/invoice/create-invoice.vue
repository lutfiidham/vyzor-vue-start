<script setup>
import { ref } from 'vue'
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import Pageheader from '@/components/pageheader/pageheader.vue'
import Quantity from '../../../../UI/quantity.vue'
import { Head } from '@inertiajs/vue3'
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview)

const picked = ref(null)
const picked1 = ref(null)
const myFiles = ref([])

const dataToPass = {
  title: 'Pages',
  subtitle: 'Invoice',
  currentpage: 'Create Invoice',
  activepage: 'Create Invoice',
}

const currencySelect = ref(null)
const currencyOptions = [
  'CHF - (Swiss Franc)',
  'KWD - (Kuwaiti Dinar)',
  'BHD - (Bahraini Dinar)',
  'USD - (United States Dollar)',
]

const CreditSelect = ref('Credit/Debit Card')
const CreditOptions = ['Credit/Debit Card', 'PayPal', 'Stripe', 'Apple Pay', 'UPI']
</script>

<template>
  <Head title="Create-Invoice | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-body">
          <div class="row gy-3">
            <div class="col-xl-12">
              <div class="row">
                <div class="col-xl-12 custom-invoice">
                  <p class="fw-semibold mb-2">Company Logo :</p>
                  <file-pond
                    name="test"
                    ref="pond"
                    label-idle="Drag & Drop files here or <span class='filepond--label-action'>Browse</span>"
                    allow-multiple="true"
                    max-files="10"
                    accepted-file-types="image/jpeg, image/png"
                    v-bind:files="myFiles"
                  />
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <p class="fw-semibold mb-2 mt-2">Billing From :</p>
                  <div class="row gy-2">
                    <div class="col-xl-12">
                      <input
                        type="text"
                        class="form-control"
                        id="Company-Name"
                        placeholder="Company Name"
                        value="SPRUKO TECHNOLOGIES"
                      />
                    </div>
                    <div class="col-xl-12">
                      <textarea
                        class="form-control"
                        id="company-address"
                        placeholder="Enter Address"
                        rows="3"
                      ></textarea>
                    </div>
                    <div class="col-xl-12">
                      <input
                        type="text"
                        class="form-control"
                        id="company-mail"
                        placeholder="Company Email"
                        value=""
                      />
                    </div>
                    <div class="col-xl-12">
                      <input
                        type="text"
                        class="form-control"
                        id="company-phone"
                        placeholder="Phone Number"
                        value=""
                      />
                    </div>
                    <div class="col-xl-12">
                      <textarea
                        class="form-control"
                        id="invoice-subject"
                        placeholder="Subject"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 ms-auto mt-sm-0 mt-3">
                  <p class="fw-semibold mb-2 mt-3">Billing To :</p>
                  <div class="row gy-2">
                    <div class="col-xl-12">
                      <input
                        type="text"
                        class="form-control"
                        id="customer-Name"
                        placeholder="Customer Name"
                        value="Jack Miller"
                      />
                    </div>
                    <div class="col-xl-12">
                      <textarea
                        class="form-control"
                        id="customer-address"
                        placeholder="Enter Address"
                        rows="3"
                      ></textarea>
                    </div>
                    <div class="col-xl-12">
                      <input
                        type="text"
                        class="form-control"
                        id="customer-mail"
                        placeholder="Customer Email"
                        value=""
                      />
                    </div>
                    <div class="col-xl-12">
                      <input
                        type="text"
                        class="form-control"
                        id="customer-phone"
                        placeholder="Phone Number"
                        value=""
                      />
                    </div>
                    <div class="col-xl-12">
                      <input
                        type="text"
                        class="form-control"
                        id="zip-code"
                        placeholder="Zip Code"
                        value=""
                      />
                    </div>
                    <div class="col-xl-12">
                      <p class="fw-semibold mb-2 mt-2">Currency :</p>
                      <VueMultiselect
                        :show-labels="false"
                        :options="currencyOptions"
                        :multiple="false"
                        v-model="currencySelect"
                      >
                      </VueMultiselect>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3">
              <label for="invoice-number" class="form-label">Invoice ID</label>
              <input
                type="text"
                class="form-control"
                id="invoice-number"
                placeholder="Inv No"
                value="#SPK120219890"
              />
            </div>
            <div class="col-xl-3">
              <label for="invoice-date-issued" class="form-label">Date Issued</label>
              <Datepicker
                placeholder="Choose Date"
                class="form-control custom-date-picker"
                autoApply
                v-model="picked"
                :enable-time-picker="false"
              />
            </div>
            <div class="col-xl-3">
              <label for="invoice-date-due" class="form-label">Due Date</label>
              <Datepicker
                placeholder="Choose Date"
                class="form-control custom-date-picker"
                autoApply
                v-model="picked1"
                :enable-time-picker="false"
              />
            </div>
            <div class="col-xl-3">
              <label for="invoice-due-amount" class="form-label">Due Amount</label>
              <input
                type="text"
                class="form-control"
                id="invoice-due-amount"
                placeholder="Enter Amount"
                value="$12,983.78"
              />
            </div>
            <div class="col-xl-12">
              <div class="table-responsive">
                <table class="table nowrap text-nowrap table-borderless border mt-3">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Description</th>
                      <th>Quantity</th>
                      <th>Price Per Unit</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="text" class="form-control" placeholder="Enter Product Name" />
                      </td>
                      <td>
                        <textarea
                          rows="1"
                          class="form-control"
                          placeholder="Enter Description"
                        ></textarea>
                      </td>
                      <td class="invoice-quantity-container">
                        <div class="input-group border rounded flex-nowrap">
                          <Quantity
                            decClass="btn btn-icon btn-primary input-group-text flex-fill product-quantity-minus"
                            inputClass="form-control form-control-sm border-0 text-center w-100"
                            incClass="btn btn-icon btn-primary input-group-text flex-fill product-quantity-plus"
                          />
                        </div>
                      </td>
                      <td>
                        <input class="form-control" placeholder="" type="text" value="$60.00" />
                      </td>
                      <td>
                        <input class="form-control" placeholder="" type="text" value="$120.00" />
                      </td>
                      <td>
                        <button class="btn btn-sm btn-icon btn-danger-light">
                          <i class="ri-delete-bin-5-line"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="text" class="form-control" placeholder="Enter Product Name" />
                      </td>
                      <td>
                        <textarea
                          rows="1"
                          class="form-control"
                          placeholder="Enter Description"
                        ></textarea>
                      </td>
                      <td class="invoice-quantity-container">
                        <div class="input-group border rounded flex-nowrap">
                          <Quantity
                            decClass="btn btn-icon btn-primary input-group-text flex-fill product-quantity-minus"
                            inputClass="form-control form-control-sm border-0 text-center w-100"
                            incClass="btn btn-icon btn-primary input-group-text flex-fill product-quantity-plus"
                          />
                        </div>
                      </td>
                      <td><input class="form-control" placeholder="Enter Amount" type="text" /></td>
                      <td><input class="form-control" placeholder="Enter Amount" type="text" /></td>
                      <td>
                        <button class="btn btn-sm btn-icon btn-danger-light">
                          <i class="ri-delete-bin-5-line"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="6" class="border-bottom-0">
                        <a class="btn btn-primary-light" href="javascript:void(0);"
                          ><i class="bi bi-plus-lg"></i> Add Product</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4"></td>
                      <td colspan="2">
                        <table class="table table-sm text-nowrap mb-0 table-borderless">
                          <tbody>
                            <tr>
                              <th scope="row">
                                <div class="fw-medium">Sub Total :</div>
                              </th>
                              <td>
                                <input
                                  type="text"
                                  class="form-control invoice-amount-input"
                                  placeholder="Enter Amount"
                                  value="$1209.89"
                                />
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div class="fw-medium">Avail Discount :</div>
                              </th>
                              <td>
                                <input
                                  type="text"
                                  class="form-control invoice-amount-input"
                                  placeholder="Enter Amount"
                                  value="$29.98"
                                />
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div class="fw-medium">
                                  Coupon Discount <span class="text-success">(10%)</span> :
                                </div>
                              </th>
                              <td>
                                <input
                                  type="text"
                                  class="form-control invoice-amount-input"
                                  placeholder="Enter Amount"
                                  value="$129.00"
                                />
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div class="fw-medium">
                                  Vat <span class="text-danger">(20%)</span> :
                                </div>
                              </th>
                              <td>
                                <input
                                  type="text"
                                  class="form-control invoice-amount-input"
                                  placeholder="Enter Amount"
                                  value="$258.00"
                                />
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div class="fw-medium">Due Till Date :</div>
                              </th>
                              <td>
                                <input
                                  type="text"
                                  class="form-control invoice-amount-input"
                                  placeholder="Enter Amount"
                                  value="$0.00"
                                />
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div class="fs-14 fw-medium">Total :</div>
                              </th>
                              <td>
                                <input
                                  type="text"
                                  class="form-control invoice-amount-input"
                                  placeholder="Enter Amount"
                                  value="$1,071.89"
                                />
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
              <div class="row gy-3">
                <div class="col-xl-12">
                  <VueMultiselect
                    :show-labels="false"
                    :options="CreditOptions"
                    v-model="CreditSelect"
                  >
                  </VueMultiselect>
                </div>
                <div class="col-xl-12">
                  <input type="text" class="form-control" placeholder="Card Holder Name" />
                </div>
                <div class="col-xl-12">
                  <input
                    type="text"
                    class="form-control"
                    id="invoice-payment-cardname"
                    placeholder="Card Number"
                    value="1234 5678 9087 XXXX"
                  />
                  <label for="invoice-payment-cardname" class="form-label mb-0"
                    ><a class="text-danger fs-11" href="javascript:void(0);"
                      >Enter valid card number*</a
                    ></label
                  >
                </div>
                <div class="col-xl-12">
                  <input type="text" class="form-control" placeholder="Enter OTP" />
                </div>
              </div>
            </div>
            <div class="col-xl-12">
              <div>
                <label for="invoice-note" class="form-label">Note:</label>
                <textarea class="form-control" id="invoice-note" rows="3">
Once the invoice has been verified by the accounts payable team and recorded, the only task left is to send it for approval before releasing the payment</textarea
                >
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer text-end">
          <button class="btn btn-warning m-1">
            Save As PDF<i class="ri-file-pdf-line ms-1 align-middle d-inline-block"></i>
          </button>
          <button class="btn btn-success m-1">
            Download Invoice<i class="ri-download-2-line ms-1 d-inline-block"></i>
          </button>
          <button class="btn btn-primary m-1">
            Send Invoice <i class="ri-send-plane-2-line ms-1 align-middle d-inline-block"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
