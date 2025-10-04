<script setup>
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as Faqsdata from '@/shared/data/pages/faqsdata'
import BaseImg from '../../components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'
const dataToPass = {
  title: 'Pages',
  currentpage: "Faq's",
  activepage: "Faq's",
}
</script>

<template>
  <Head title="Faqs | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card faq-banner-card">
        <div class="card-body text-center">
          <div class="faq-banner-background">
            <BaseImg src="/images/media/media-65.png" alt="" />
          </div>
          <h3 class="fw-semibold text-primary">Frequently Asked Questions</h3>
          <span class="d-block text-muted mb-4"
            >Find quick answers to common queries about using the admin panel.</span
          >
          <div class="row justify-content-center">
            <div class="col-xl-6">
              <input
                type="text"
                class="form-control form-control-lg border-0 shadow-none"
                id="input-text"
                placeholder="Search Faq's"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-3">
      <div class="card custom-card">
        <div class="card-body">
          <ul
            class="nav nav-tabs flex-column nav-tabs-header faq-nav mb-0 d-sm-flex d-inline-block"
            role="tablist"
          >
            <li class="nav-item m-1" role="presentation">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#faq1"
                aria-selected="false"
                tabindex="-1"
                ><i class="ri-question-line me-2 fs-16"></i>General</a
              >
            </li>
            <li class="nav-item m-1" role="presentation">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#faq2"
                aria-selected="true"
                ><i class="ri-user-line me-2 fs-16"></i>Account & Login</a
              >
            </li>
            <li class="nav-item m-1" role="presentation">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#faq3"
                aria-selected="false"
                tabindex="-1"
                ><i class="ri-wallet-line me-2 fs-16"></i>Payments & Billing</a
              >
            </li>
            <li class="nav-item m-1" role="presentation">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#faq4"
                aria-selected="false"
                tabindex="-1"
                ><i class="ri-global-line me-2 fs-16"></i>Website Usage & Features</a
              >
            </li>
            <li class="nav-item m-1" role="presentation">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#faq5"
                aria-selected="false"
                tabindex="-1"
                ><i class="ri-customer-service-2-line me-2 fs-16"></i>Technical Support</a
              >
            </li>
            <li class="nav-item m-1" role="presentation">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#faq6"
                aria-selected="false"
                tabindex="-1"
                ><i class="ri-lock-line me-2 fs-16"></i>Privacy & Security</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xl-9 my-auto">
      <div class="row mb-4">
        <div class="col-xl-12">
          <div class="tab-content">
            <div class="tab-pane border-0 p-0" id="faq1" role="tabpanel">
              <div class="accordion faq-accordion accordions-items-seperate" id="accordionFAQ1">
                <div class="accordion-item" v-for="(item, index) in Faqsdata.faqItems" :key="index">
                  <h2 :id="'heading' + item.id" class="accordion-header">
                    <button
                      class="accordion-button"
                      :class="{ collapsed: !item.open }"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="'#collapse' + item.id"
                      :aria-expanded="item.open ? 'true' : 'false'"
                      :aria-controls="'collapse' + item.id"
                    >
                      <i
                        :class="
                          item.icon +
                          ' fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary'
                        "
                      ></i>
                      {{ item.question }}
                    </button>
                  </h2>
                  <div
                    :id="'collapse' + item.id"
                    class="accordion-collapse collapse"
                    :class="{ show: item.open }"
                    :aria-labelledby="'heading' + item.id"
                    data-bs-parent="#accordionFAQ1"
                  >
                    <div class="accordion-body">
                      {{ item.answer }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane show active border-0 p-0" id="faq2" role="tabpanel">
              <div class="accordion faq-accordion accordions-items-seperate" id="accordionFAQ2">
                <div
                  class="accordion-item"
                  v-for="(item, index) in Faqsdata.FaqAccountItems"
                  :key="index"
                >
                  <h2 class="accordion-header" :id="'heading' + item.id">
                    <button
                      class="accordion-button"
                      :class="{ collapsed: !item.open }"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="'#collapse' + item.id"
                      :aria-expanded="item.open ? 'true' : 'false'"
                      :aria-controls="'collapse' + item.id"
                    >
                      <i
                        :class="
                          item.icon +
                          ' fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary'
                        "
                      ></i>
                      {{ item.question }}
                    </button>
                  </h2>
                  <div
                    class="accordion-collapse collapse"
                    :class="{ show: item.open }"
                    :id="'collapse' + item.id"
                    :aria-labelledby="'heading' + item.id"
                    data-bs-parent="#accordionFAQ2"
                  >
                    <div class="accordion-body">
                      {{ item.answer }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane border-0 p-0" id="faq3" role="tabpanel">
              <div class="accordion faq-accordion accordions-items-seperate" id="accordionFAQ3">
                <div
                  class="accordion-item"
                  v-for="(item, index) in Faqsdata.FaqPaymentItems"
                  :key="index"
                >
                  <h2 class="accordion-header" :id="'heading' + item.id">
                    <button
                      class="accordion-button"
                      :class="{ collapsed: !item.open }"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="'#collapse' + item.id"
                      :aria-expanded="item.open ? 'true' : 'false'"
                      :aria-controls="'collapse' + item.id"
                    >
                      <i
                        :class="
                          item.icon +
                          ' fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary'
                        "
                      ></i>
                      {{ item.question }}
                    </button>
                  </h2>
                  <div
                    class="accordion-collapse collapse"
                    :class="{ show: item.open }"
                    :id="'collapse' + item.id"
                    :aria-labelledby="'heading' + item.id"
                    data-bs-parent="#accordionFAQ3"
                  >
                    <div class="accordion-body">
                      {{ item.answer }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane border-0 p-0" id="faq4" role="tabpanel">
              <div class="accordion faq-accordion accordions-items-seperate" id="accordionFAQ4">
                <div
                  class="accordion-item"
                  v-for="(item, index) in Faqsdata.FaqUsageItems"
                  :key="index"
                >
                  <h2 class="accordion-header" :id="'heading' + item.id">
                    <button
                      class="accordion-button"
                      :class="{ collapsed: !item.open }"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="'#collapse' + item.id"
                      :aria-expanded="item.open ? 'true' : 'false'"
                      :aria-controls="'collapse' + item.id"
                    >
                      <i
                        :class="
                          item.icon +
                          ' fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary'
                        "
                      ></i>
                      {{ item.question }}
                    </button>
                  </h2>
                  <div
                    class="accordion-collapse collapse"
                    :class="{ show: item.open }"
                    :id="'collapse' + item.id"
                    :aria-labelledby="'heading' + item.id"
                    data-bs-parent="#accordionFAQ4"
                  >
                    <div class="accordion-body">
                      {{ item.answer }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane border-0 p-0" id="faq5" role="tabpanel">
              <div class="accordion faq-accordion accordions-items-seperate" id="accordionFAQ5">
                <div
                  class="accordion-item"
                  v-for="(item, index) in Faqsdata.FaqTechItems"
                  :key="index"
                >
                  <h2 class="accordion-header" :id="'heading' + item.id">
                    <button
                      class="accordion-button"
                      :class="{ collapsed: !item.open }"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="'#collapse' + item.id"
                      :aria-expanded="item.open ? 'true' : 'false'"
                      :aria-controls="'collapse' + item.id"
                    >
                      <i
                        :class="
                          item.icon +
                          ' fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary'
                        "
                      ></i>
                      {{ item.question }}
                    </button>
                  </h2>
                  <div
                    class="accordion-collapse collapse"
                    :class="{ show: item.open }"
                    :id="'collapse' + item.id"
                    :aria-labelledby="'heading' + item.id"
                    data-bs-parent="#accordionFAQ5"
                  >
                    <div class="accordion-body">
                      {{ item.answer }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane border-0 p-0" id="faq6" role="tabpanel">
              <div class="accordion faq-accordion accordions-items-seperate" id="accordionFAQ6">
                <div
                  class="accordion-item"
                  v-for="(item, index) in Faqsdata.FaqPrivacyItems"
                  :key="index"
                >
                  <h2 class="accordion-header" :id="'heading' + item.id">
                    <button
                      class="accordion-button"
                      :class="{ collapsed: !item.open }"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="'#collapse' + item.id"
                      :aria-expanded="item.open ? 'true' : 'false'"
                      :aria-controls="'collapse' + item.id"
                    >
                      <i
                        :class="
                          item.icon +
                          ' fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary'
                        "
                      ></i>
                      {{ item.question }}
                    </button>
                  </h2>
                  <div
                    class="accordion-collapse collapse"
                    :class="{ show: item.open }"
                    :id="'collapse' + item.id"
                    :aria-labelledby="'heading' + item.id"
                    data-bs-parent="#accordionFAQ6"
                  >
                    <div class="accordion-body">
                      {{ item.answer }}
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
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-3">
      <div class="card custom-card bg-primary-transparent border-0">
        <div class="card-body p-0">
          <BaseImg src="/images/media/media-74.png" alt="" class="img-fluid custom-faq" />
        </div>
      </div>
    </div>
    <div class="col-xl-9">
      <h5 class="fw-semibold">Still Have Questions? Post them here!</h5>
      <div class="card custom-card">
        <div class="card-body">
          <div class="row gy-2 mb-3">
            <div class="col-xl-6">
              <label for="user-name" class="form-label">Your Name</label>
              <input
                type="text"
                class="form-control"
                id="user-name"
                placeholder="Enter Your Name"
              />
            </div>
            <div class="col-xl-6">
              <label for="user-email" class="form-label">Email Id</label>
              <input type="text" class="form-control" id="user-email" placeholder="Enter Email" />
            </div>
            <div class="col-xl-12">
              <label for="text-area" class="form-label">Post Your Question</label>
              <textarea
                class="form-control"
                placeholder="Enter your question here"
                id="text-area"
                rows="2"
              ></textarea>
            </div>
          </div>
          <button type="button" class="btn btn-success float-end">
            Send<i class="ri-send-plane-2-line ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-3 -->
</template>

<style scoped>
/* Add your styles here */
</style>
