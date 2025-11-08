<script setup>
import * as productDetails from '@/shared/data/dashboards/ecommerce/productdetails'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import Quantity from '../../../../../UI/quantity.vue'
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  Mousewheel,
  Keyboard,
  EffectCube,
  EffectFade,
  EffectCoverflow,
  EffectFlip,
  FreeMode,
  Thumbs,
} from 'swiper/modules'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import { Head, Link } from '@inertiajs/vue3'
const baseUrl = __BASE_PATH__
const thumbsSwiper = ref(null)

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}
const modules = [
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  Mousewheel,
  Keyboard,
  EffectCube,
  EffectFade,
  EffectCoverflow,
  EffectFlip,
  FreeMode,
  Thumbs,
]

const dataToPass = {
  activepage: 'Product Details',
  title: 'Dashboards',
  subtitle: 'Ecommerce',
  currentpage: 'Product Details',
}
</script>

<template>
  <Head title="Ecommerce-Product Details | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="container">
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-body">
            <div class="row g-5">
              <div class="col-xl-6 custom-product-swiper">
                <swiper
                  class="swiper swiper-preview-details bg-light product-details-page"
                  swiper
                  :autoplay="true"
                  :style="{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }"
                  :spaceBetween="20"
                  :navigation="true"
                  :thumbs="{ swiper: thumbsSwiper }"
                  :modules="modules"
                >
                  <swiper-slide class="swiper-slide" id="img-container">
                    <BaseImg class="img-fluid" src="/images/ecommerce/jpg/4.jpg" alt="img" />
                  </swiper-slide>
                  <swiper-slide class="swiper-slide image-container">
                    <BaseImg class="img-fluid" src="/images/ecommerce/jpg/2.jpg" alt="img" />
                  </swiper-slide>
                  <swiper-slide class="swiper-slide image-container">
                    <BaseImg class="img-fluid" src="/images/ecommerce/jpg/3.jpg" alt="img" />
                  </swiper-slide>
                  <swiper-slide class="swiper-slide image-container">
                    <BaseImg class="img-fluid" src="/images/ecommerce/jpg/1.jpg" alt="img" />
                  </swiper-slide>
                  <swiper-slide class="swiper-slide image-container">
                    <BaseImg class="img-fluid" src="/images/ecommerce/jpg/5.jpg" alt="img" />
                  </swiper-slide>
                  <swiper-slide class="swiper-slide image-container">
                    <BaseImg class="img-fluid" src="/images/ecommerce/jpg/6.jpg" alt="img" />
                  </swiper-slide>
                </swiper>
                <swiper
                  class="swiper swiper-view-details mt-2"
                  :autoplay="false"
                  @swiper="setThumbsSwiper"
                  :spaceBetween="10"
                  :slidesPerView="6"
                  :freeMode="true"
                  :watchSlidesProgress="true"
                  :modules="modules"
                >
                  <swiper-slide class="">
                    <BaseImg class="img-fluid" src="/images/ecommerce/jpg/4.jpg" alt="img" />
                  </swiper-slide>
                  <swiper-slide class="">
                    <BaseImg class="img-fluid" src="/images/ecommerce/jpg/2.jpg" alt="img" />
                  </swiper-slide>
                  <swiper-slide class="">
                    <BaseImg class="img-fluid" src="/images/ecommerce/jpg/3.jpg" alt="img" />
                  </swiper-slide>
                  <swiper-slide class="">
                    <BaseImg class="img-fluid" src="/images/ecommerce/jpg/1.jpg" alt="img" />
                  </swiper-slide>
                  <swiper-slide class="">
                    <BaseImg class="img-fluid" src="/images/ecommerce/jpg/5.jpg" alt="img" />
                  </swiper-slide>
                  <swiper-slide class="">
                    <BaseImg class="img-fluid" src="/images/ecommerce/jpg/6.jpg" alt="img" />
                  </swiper-slide>
                </swiper>
              </div>
              <div class="col-xl-6">
                <div>
                  <h4 class="fw-semibold">Nike Air Max 2025 Sneakers</h4>
                  <div class="d-flex align-items-center mb-4 flex-wrap">
                    <div class="text-warning">
                      <i class="ti ti-star-filled me-1"></i>
                      <i class="ti ti-star-filled me-1"></i>
                      <i class="ti ti-star-filled me-1"></i>
                      <i class="ti ti-star-filled me-1"></i>
                      <i class="ti ti-star-half-filled me-1"></i>
                    </div>
                    <span class="text-muted ms-1 fs-13">4.5 (2.4k Reviews)</span>
                  </div>
                  <div class="mb-4">
                    <p class="mb-1 lh-1 fs-11 text-success fw-semibold">Special Offer</p>
                    <div class="mb-1 d-flex align-items-center">
                      <span class="h3 fw-semibold mb-0"><sup class="fs-14">$</sup>129.99</span
                      ><span class="ms-3 badge bg-danger-transparent">50% Off</span>
                    </div>
                    <p class="mb-0 text-muted">M.R.P : <s>$259.99</s></p>
                  </div>
                  <div class="mb-4">
                    <h6 class="fw-semibold mb-3">Description :</h6>
                    <p class="text-muted mb-0">
                      These stylish Nike Air Max 2025 sneakers are designed for ultimate comfort and
                      durability. Featuring a sleek, breathable mesh upper, the shoe’s advanced Air
                      Max cushioning system ensures you stay comfortable on your feet all day long.
                      Whether you're running errands or running a marathon, these sneakers will give
                      you the support you need. Available in multiple colors.
                    </p>
                  </div>
                  <div class="mb-4">
                    <h6 class="fw-semibold mb-3">Colors :</h6>
                    <div class="mb-0 d-flex flex-wrap gap-1">
                      <a class="color-1 product-colors selected" href="javascript:void(0)">
                        <i class="ri-checkbox-blank-circle-fill"></i>
                      </a>
                      <a class="color-2 product-colors" href="javascript:void(0)">
                        <i class="ri-checkbox-blank-circle-fill"></i>
                      </a>
                      <a class="color-3 product-colors" href="javascript:void(0)">
                        <i class="ri-checkbox-blank-circle-fill"></i>
                      </a>
                      <a class="color-4 product-colors" href="javascript:void(0)">
                        <i class="ri-checkbox-blank-circle-fill"></i>
                      </a>
                      <a class="color-5 product-colors" href="javascript:void(0)">
                        <i class="ri-checkbox-blank-circle-fill"></i>
                      </a>
                    </div>
                  </div>
                  <div class="mb-4">
                    <h6 class="fw-semibold mb-3">Size:</h6>
                    <div class="mb-0 d-flex flex-wrap gap-1">
                      <a class="product-sizes selected" href="javascript:void(0)"> 6 </a>
                      <a class="product-sizes" href="javascript:void(0)"> 7 </a>
                      <a class="product-sizes" href="javascript:void(0)"> 8 </a>
                      <a class="product-sizes" href="javascript:void(0)"> 9 </a>
                      <a class="product-sizes" href="javascript:void(0)"> 10 </a>
                      <a class="product-sizes" href="javascript:void(0)"> 11 </a>
                      <a class="product-sizes" href="javascript:void(0)"> 12 </a>
                    </div>
                  </div>
                  <div>
                    <h6 class="fw-semibold mb-3">Quantity:</h6>
                    <div
                      class="d-inline-flex rounded align-items-center flex-nowrap order-qnt gap-2 p-1 bg-light"
                    >
                      <Quantity
                        decClass="badge bg-white p-2 border text-muted fs-13 product-quantity-minus"
                        inputClass="form-control form-control-cart border-0 text-center w-100 shadow-none"
                        incClass="badge bg-white p-2 border text-muted fs-13 product-quantity-plus"
                      />
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-center gap-2 mt-5 flex-wrap">
                  <Link
                    :href="`${baseUrl}/demo/dashboards/ecommerce/cart`"
                    class="btn btn-primary btn-lg btn-w-lg border"
                    ><i class="ti ti-shopping-cart mx-1"></i>Add To Cart</Link
                  >
                  <Link
                    :href="`${baseUrl}/demo/dashboards/ecommerce/checkout`"
                    class="btn btn-primary btn-lg btn-w-lg border"
                    >Buy Now</Link
                  >
                </div>
              </div>
              <div class="col-xxl-12 col-xl-12">
                <div class="row justify-content-center mb-4">
                  <div
                    v-for="(item, index) in productDetails.assuranceCards"
                    :key="index"
                    class="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 mt-sm-0 mt-3"
                  >
                    <div class="ecommerce-assurance p-5 text-center">
                      <div class="lh-1 mb-3">
                        <span
                          class="avatar avatar-md avatar-rounded bg-success svg-white"
                          v-html="item.icon"
                        >
                        </span>
                      </div>
                      <h6 class="fw-semibold">{{ item.title }}</h6>
                      <span class="d-block text-muted">{{ item.description }}</span>
                    </div>
                  </div>
                </div>
                <div class="mb-4">
                  <div class="row g-5">
                    <div class="col-xl-6">
                      <h6 class="fw-semibold mb-3">Product Details :</h6>
                      <TableComponent
                        tableClass="table table-bordered text-lg-wrap product-details-table"
                        theadClass="d-none"
                        :rows="productDetails.productDetailsdata"
                        v-slot:cell="{ row }"
                      >
                        <th scope="row" class="fw-semibold">
                          {{ row.label }}
                        </th>
                        <td>{{ row.value }}</td>
                      </TableComponent>
                    </div>
                    <div class="col-xl-6">
                      <div class="mb-4">
                        <h6 class="fw-semibold mb-3">Features :</h6>
                        <ul class="list-unstyled product-details-features-list">
                          <li v-for="(item, index) in productDetails.productFeatures" :key="index">
                            {{ item }}
                          </li>
                        </ul>
                      </div>
                      <div class="mb-4">
                        <h6 class="fw-semibold mb-3">Care Instructions :</h6>
                        <ul class="list-unstyled product-details-features-list">
                          <li v-for="(item, index) in productDetails.careInstructions" :key="index">
                            {{ item }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-0">
                  <p class="fs-15 fw-semibold mb-3">Reviews & Ratings :</p>
                  <div class="row">
                    <div class="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div class="d-flex align-items-top mb-3">
                        <div class="me-2 lh-1">
                          <i class="ri-star-fill fs-25 text-warning"></i>
                        </div>
                        <div class="lh-1">
                          <p class="mb-1">4.2 out of 5</p>
                          <p class="mb-0 text-muted fs-11">Based on (23,435) ratings</p>
                        </div>
                      </div>
                      <div
                        v-for="(item, index) in productDetails.ratings"
                        :key="index"
                        class="d-flex align-items-center mb-3"
                      >
                        <div class="fs-12 me-2 fw-semibold">
                          {{ item.stars }}<i class="ri-star-fill fs-10 mx-1"></i>
                        </div>
                        <div class="progress progress-xs flex-fill">
                          <div
                            :class="`progress-bar ${item.color}`"
                            role="progressbar"
                            :style="`width: ${item.percentage}%`"
                            :aria-valuenow="item.percentage"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <div class="text-muted ms-2 fs-12">({{ item.count }})</div>
                      </div>
                    </div>
                    <div class="col-xxl-8 col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-xxl-0 mt-3">
                      <div class="border p-3">
                        <div class="d-sm-flex d-block align-items-top mb-3">
                          <div class="d-flex flex-fill align-items-start gap-3">
                            <div>
                              <span class="avatar avatar-md avatar-rounded">
                                <BaseImg src="/images/faces/15.jpg" alt="" />
                              </span>
                            </div>
                            <div class="lh-1 me-2">
                              <p class="mb-1 fw-semibold fs-14">John Doe</p>
                              <div class="mb-1">
                                <i class="ri-star-s-fill text-warning align-middle fs-12"></i>
                                <i class="ri-star-s-fill text-warning align-middle fs-12"></i>
                                <i class="ri-star-s-fill text-warning align-middle fs-12"></i>
                                <i class="ri-star-s-fill text-warning align-middle fs-12"></i>
                                <i class="ri-star-s-line text-warning align-middle fs-12"></i>
                              </div>
                              <div class="fs-11 text-muted">Reviewed on 24 May,2025</div>
                            </div>
                          </div>
                          <div class="ps-sm-0 mt-sm-0 mt-3 ps-sm-0 ps-2">
                            <span class="badge bg-success">Verified Purchase</span>
                          </div>
                        </div>
                        <div class="ps-sm-3 ps-0 mb-3">
                          <p class="fw-semibold mb-1 ps-2">Wonderful product&#128512;</p>
                          <p class="mb-0 text-muted ps-2">
                            The comfort is unmatched! I love the sleek design, and the Air Max
                            cushioning is fantastic.
                          </p>
                        </div>
                        <div class="product-images ps-sm-4 ps-0">
                          <div class="row">
                            <div class="col-xl-6">
                              <div class="products-review-images">
                                <a href="#!" class="me-1" @click="(e) => e.preventDefault()">
                                  <BaseImg src="/images/ecommerce/jpg/1.jpg" alt="" />
                                </a>
                                <a href="#!" @click="(e) => e.preventDefault()">
                                  <BaseImg src="/images/ecommerce/jpg/2.jpg" alt="" />
                                </a>
                              </div>
                            </div>
                            <div
                              class="col-xl-6 d-flex align-items-end justify-content-sm-end mt-sm-0 mt-2 flex-wrap gap-2"
                            >
                              <button class="btn btn-sm btn-warning-light me-2">
                                Report abuse
                              </button>
                              <button class="btn btn-sm btn-icon btn-success-light me-2">
                                <i class="ri-thumb-up-line"></i>
                              </button>
                              <button class="btn btn-sm btn-icon btn-danger-light">
                                <i class="ri-thumb-down-line"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
