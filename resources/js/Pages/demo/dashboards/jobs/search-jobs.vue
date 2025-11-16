<script setup>
import { Head } from '@inertiajs/vue3'
import { defineAsyncComponent } from 'vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import { JobTable } from '@/shared/data/dashboards/jobs/searchjobsdata'
import 'vue-slider-component/theme/default.css'

const VueSlider = defineAsyncComponent(() => import('vue-slider-component'))

const dataToPass = {
  activepage: 'Search Jobs',
  title: 'Dashboards',
  subtitle: 'Jobs',
  currentpage: 'Search Jobs',
}

const diffTolltips = [9000, 30000]
const min = 7000
const max = 40000
</script>

<template>
  <Head title="Search-Jobs | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start::row-2 -->
  <div class="row">
    <div class="col-xxl-3 col-xl-4 search-jobs-nav">
      <div class="card custom-card products-navigation-card">
        <div class="card-body p-0">
          <div class="py-4 px-sm-4 p-3 border-bottom">
            <h6 class="fw-medium mb-0">
              Categories
            </h6>
            <div class="px-sm-2 px-0 py-3 pb-0">
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="c-1" class="form-check-input" type="checkbox" value="" checked>
                <label class="form-check-label flex-grow-1" for="c-1"> Software Engineer </label>
                <span class="badge bg-light text-default fw-500">2,712</span>
              </div>
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="c-2" class="form-check-input" type="checkbox" value="">
                <label class="form-check-label flex-grow-1" for="c-2"> Data Analyst </label>
                <span class="badge bg-light text-default fw-500">536</span>
              </div>
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="c-3" class="form-check-input" type="checkbox" value="" checked>
                <label class="form-check-label flex-grow-1" for="c-3"> Product Manager </label>
                <span class="badge bg-light text-default fw-500">18,289</span>
              </div>
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="c-4" class="form-check-input" type="checkbox" value="" checked>
                <label class="form-check-label flex-grow-1" for="c-4"> UI/UX Designer </label>
                <span class="badge bg-light text-default fw-500">3,453</span>
              </div>
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="c-5" class="form-check-input" type="checkbox" value="">
                <label class="form-check-label flex-grow-1" for="c-5"> Marketing Specialist </label>
                <span class="badge bg-light text-default fw-500">7,165</span>
              </div>
              <div id="category-more" class="collapse">
                <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                  <input id="c-6" class="form-check-input" type="checkbox" value="">
                  <label class="form-check-label flex-grow-1" for="c-6"> HR Manager </label>
                  <span class="badge bg-light text-default fw-500">5,964</span>
                </div>
                <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                  <input id="c-7" class="form-check-input" type="checkbox" value="">
                  <label class="form-check-label flex-grow-1" for="c-7">
                    Full Stack Developer
                  </label>
                  <span class="badge bg-light text-default fw-500">2,123</span>
                </div>
                <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                  <input id="c-8" class="form-check-input" type="checkbox" value="">
                  <label class="form-check-label flex-grow-1" for="c-8">
                    Network Administrator
                  </label>
                  <span class="badge bg-light text-default fw-500">2,123</span>
                </div>
                <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                  <input id="c-9" class="form-check-input" type="checkbox" value="">
                  <label class="form-check-label flex-grow-1" for="c-9"> Sales Manager </label>
                  <span class="badge bg-light text-default fw-500">2,123</span>
                </div>
                <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                  <input id="c-10" class="form-check-input" type="checkbox" value="">
                  <label class="form-check-label flex-grow-1" for="c-10">
                    Customer Support Lead
                  </label>
                  <span class="badge bg-light text-default fw-500">2,123</span>
                </div>
              </div>
              <a
                class="ecommerce-more-link badge bg-primary-transparent"
                data-bs-toggle="collapse"
                href="#category-more"
                role="button"
                aria-expanded="false"
                aria-controls="category-more"
              >More</a>
            </div>
          </div>
          <div class="py-4 px-sm-4 p-3 border-bottom">
            <h6 class="fw-medium mb-0">
              Shift Type
            </h6>
            <div class="px-sm-2 px-0 py-3 pb-0">
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="j-1" class="form-check-input" type="checkbox" value="" checked>
                <label class="form-check-label flex-grow-1" for="j-1"> Day Shift </label>
                <span class="badge bg-light text-default fw-500">512</span>
              </div>
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="j-2" class="form-check-input" type="checkbox" value="" checked>
                <label class="form-check-label flex-grow-1" for="j-2"> Night Shift </label>
                <span class="badge bg-light text-default fw-500">2,186</span>
              </div>
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="j-3" class="form-check-input" type="checkbox" value="" checked>
                <label class="form-check-label flex-grow-1" for="j-3"> Flexible </label>
                <span class="badge bg-light text-default fw-500">734</span>
              </div>
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="j-4" class="form-check-input" type="checkbox" value="">
                <label class="form-check-label flex-grow-1" for="j-4"> Rotational </label>
                <span class="badge bg-light text-default fw-500">16</span>
              </div>
            </div>
          </div>
          <div class="py-4 px-sm-4 p-3 border-bottom">
            <h6 class="fw-medium mb-0">
              Salary Range
            </h6>
            <div class="px-sm-2 px-0 py-3 pb-0">
              <div id="nonlinear">
                <VueSlider
                  v-model="diffTolltips"
                  class="mb-5"
                  tooltip="always"
                  :marks="[7000, 40000]"
                  :min="min"
                  :max="max"
                  :tooltip-placement="['top', 'bottom']"
                />
              </div>
              <div class="d-flex mt-4 flex-wrap">
                <div class="fw-medium h6 mb-0">
                  $<span id="lower-value">{{ diffTolltips[0] }}</span>
                </div>
                &nbsp; -- &nbsp;
                <div class="fw-medium h6 mb-0">
                  $<span id="upper-value">{{ diffTolltips[1] }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="py-4 px-sm-4 p-3 border-bottom">
            <h6 class="fw-medium mb-0">
              Qualification
            </h6>
            <div class="px-sm-2 px-0 py-3 pb-0">
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="q-1" class="form-check-input" type="checkbox" value="">
                <label class="form-check-label flex-grow-1" for="q-1"> Computer Science </label>
                <span class="badge bg-light text-default fw-500">16,563</span>
              </div>
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="q-2" class="form-check-input" type="checkbox" value="" checked>
                <label class="form-check-label flex-grow-1" for="q-2"> Marketing </label>
                <span class="badge bg-light text-default fw-500">15,234</span>
              </div>
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="q-3" class="form-check-input" type="checkbox" value="">
                <label class="form-check-label flex-grow-1" for="q-3"> Design </label>
                <span class="badge bg-light text-default fw-500">6,278</span>
              </div>
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="q-4" class="form-check-input" type="checkbox" value="" checked>
                <label class="form-check-label flex-grow-1" for="q-4"> Business </label>
                <span class="badge bg-light text-default fw-500">4,531</span>
              </div>
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="q-5" class="form-check-input" type="checkbox" value="">
                <label class="form-check-label flex-grow-1" for="q-5"> HR Management </label>
                <span class="badge bg-light text-default fw-500">2,405</span>
              </div>
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="q-6" class="form-check-input" type="checkbox" value="">
                <label class="form-check-label flex-grow-1" for="q-6"> Product </label>
                <span class="badge bg-light text-default fw-500">453</span>
              </div>
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="q-7" class="form-check-input" type="checkbox" value="">
                <label class="form-check-label flex-grow-1" for="q-7"> Web Development </label>
                <span class="badge bg-light text-default fw-500">123</span>
              </div>
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="q-8" class="form-check-input" type="checkbox" value="">
                <label class="form-check-label flex-grow-1" for="q-8"> IT </label>
                <span class="badge bg-light text-default fw-500">422</span>
              </div>
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="q-9" class="form-check-input" type="checkbox" value="">
                <label class="form-check-label flex-grow-1" for="q-9"> Customer Service </label>
                <span class="badge bg-light text-default fw-500">256</span>
              </div>
            </div>
          </div>
          <div class="py-4 px-sm-4 p-3">
            <h6 class="fw-medium mb-0">
              Experience
            </h6>
            <div class="px-sm-2 px-0 py-3 pb-0">
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="e-1" class="form-check-input" type="checkbox" value="" checked>
                <label class="form-check-label flex-grow-1" for="e-1"> 1-3 years </label>
                <span class="badge bg-light text-default fw-500">156</span>
              </div>
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="e-2" class="form-check-input" type="checkbox" value="">
                <label class="form-check-label flex-grow-1" for="e-2"> 2-4 years </label>
                <span class="badge bg-light text-default fw-500">632</span>
              </div>
              <div class="form-check mb-2 d-flex gap-2 flex-wrap">
                <input id="e-3" class="form-check-input" type="checkbox" value="" checked>
                <label class="form-check-label flex-grow-1" for="e-3"> 3-5 years </label>
                <span class="badge bg-light text-default fw-500">32</span>
              </div>
              <div class="form-check">
                <input id="e-4" class="form-check-input" type="checkbox" value="" checked>
                <label class="form-check-label flex-grow-1" for="e-4"> 4-6 years </label>
                <span class="badge bg-light text-default fw-500">54</span>
              </div>
              <div class="form-check">
                <input id="e-5" class="form-check-input" type="checkbox" value="" checked>
                <label class="form-check-label flex-grow-1" for="e-5"> 5+ years </label>
                <span class="badge bg-light text-default fw-500">44</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-9 col-xl-8 serach-jobs-main">
      <div class="row">
        <div class="col-lg-12">
          <div class="input-group companies-search-input mb-4">
            <input
              type="text"
              class="form-control form-control-lg w-25"
              aria-label="Text input with segmented dropdown button"
              placeholder="Enter your keyword here"
            >
            <input
              type="text"
              class="form-control form-control-lg w-25"
              aria-label="Text input with segmented dropdown button"
              placeholder="Search by location"
            >
            <button type="button" class="btn btn-primary z-0">
              <i class="ri-search-line" />
            </button>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-body p-3">
              <div class="row align-items-center">
                <div class="col-sm-8">
                  <div class="d-flex">
                    <h5 class="fw-medium mb-0">
                      <span class="fw-normal">Showing</span> 3456 Jobs
                    </h5>
                  </div>
                </div>
                <div class="col-sm-4 text-sm-end mt-3 mt-sm-0">
                  <div class="btn-group">
                    <button
                      class="btn btn-outline-light border dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sort By
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript:void(0);">Featured</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Newest</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Most Relevant</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Best Rated</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card border-bottom-0 overflow-hidden">
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table text-nowrap">
                  <tbody>
                    <tr v-for="idx in JobTable" :key="idx.id">
                      <td>
                        <div class="d-flex align-items-center gap-3">
                          <div class="lh-1">
                            <span
                              :class="`avatar avatar-xl bg-${idx.avatarColor}-transparent svg-${idx.avatarColor}`"
                              v-html="idx.svgIcon"
                            />
                          </div>
                          <div>
                            <h6 class="fw-semibold mb-1">
                              {{ idx.title }}
                            </h6>
                            <span class="d-block fw-medium">{{ idx.company }}</span>
                            <span class="d-block text-muted fs-13">{{ idx.location }}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <span class="fs-13 d-block text-muted mb-1">Job Vacancies</span>
                          <span class="fw-semibold">{{ idx.jobVacancies }}</span>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <span class="fs-13 d-block text-muted mb-1">Qualification</span>
                          <span class="fw-semibold">{{ idx.qualification }}</span>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <span class="fs-13 d-block text-muted mb-1">Experience</span>
                          <span class="fw-semibold">{{ idx.experience }}</span>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <span class="fs-13 d-block text-muted mb-1">Shift</span>
                          <span :class="`badge bg-${idx.shiftColor}-transparent`">{{
                            idx.shift
                          }}</span>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <span class="fs-13 d-block text-muted mb-1">Salary</span>
                          <span class="fw-semibold">{{ idx.salaryRange }}</span>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="mb-2">
                          <a
                            href="javascript:void(0);"
                            class="btn btn-icon btn-warning-light rounded-circle btn-sm"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            aria-label="Featured Jobs"
                            data-bs-original-title="Featured Jobs"
                          ><span><i class="ti ti-star-filled align-middle" /></span></a>
                        </div>
                        <a href="javascript:void(0);" class="text-primary fw-medium d-inline-flex">
                          Apply Now <i class="ti ti-arrow-narrow-right ms-2 lh-base" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="pagination mb-4 justify-content-end">
        <li class="page-item disabled">
          <a class="page-link" href="javascript:void(0);"> Prev </a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="javascript:void(0);">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="javascript:void(0);">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="javascript:void(0);">3</a>
        </li>
        <li class="page-item">
          <a class="page-link text-primary" href="javascript:void(0);"> next </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- End::row-2 -->
</template>

<style scoped>
/* Add your styles here */
</style>
