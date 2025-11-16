<script setup>
import { Head } from '@inertiajs/vue3'
import { defineAsyncComponent, ref } from 'vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import { Peopletable } from '@/shared/data/dashboards/jobs/searchcandidatedata'
import 'vue-slider-component/theme/default.css'

const VueSlider = defineAsyncComponent(() => import('vue-slider-component'))

const dataToPass = {
  activepage: 'Search Candidate',
  title: 'Dashboards',
  subtitle: 'Jobs',
  currentpage: 'Search Candidate',
}

const DataValue = ref(null)
const Data = ref([
  'Software Dveloper',
  'Web Developer',
  'Software Architect',
  'IT Hardware',
  'Network Engineer',
  'React Developer',
])
const Data2Value = ref(null)
const Data2 = ref([
  'Fresher\'s',
  '1 Year Exp',
  '2 Year Exp',
  '3 Year Exp',
  '4 Year Exp',
  '5+ Year Exp',
])
const diffTolltips = ref([9000, 30000])
const min = ref(7000)
const max = ref(40000)
</script>

<template>
  <Head title="Search-Candidate | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xxl-3 col-xl-4 search-jobs-nav">
      <div class="card custom-card products-navigation-card">
        <div class="card-body p-0">
          <div class="px-2 py-4 px-sm-4 border-bottom">
            <h6 class="fw-medium mb-0">
              Categories
            </h6>
            <div class="px-2 py-3 pb-0">
              <div class="form-check mb-2">
                <input id="c-1" class="form-check-input me-2" type="checkbox" value="" checked>
                <label class="form-check-label" for="c-1"> Software Engineer </label>
                <span class="badge bg-light text-default fw-500 float-end">2,712</span>
              </div>
              <div class="form-check mb-2">
                <input id="c-2" class="form-check-input me-2" type="checkbox" value="">
                <label class="form-check-label" for="c-2"> Data Analyst </label>
                <span class="badge bg-light text-default fw-500 float-end">536</span>
              </div>
              <div class="form-check mb-2">
                <input id="c-3" class="form-check-input me-2" type="checkbox" value="" checked>
                <label class="form-check-label" for="c-3"> Product Manager </label>
                <span class="badge bg-light text-default fw-500 float-end">18,289</span>
              </div>
              <div class="form-check mb-2">
                <input id="c-4" class="form-check-input me-2" type="checkbox" value="" checked>
                <label class="form-check-label" for="c-4"> UI/UX Designer </label>
                <span class="badge bg-light text-default fw-500 float-end">3,453</span>
              </div>
              <div class="form-check mb-2">
                <input id="c-5" class="form-check-input me-2" type="checkbox" value="">
                <label class="form-check-label" for="c-5"> HR Manager </label>
                <span class="badge bg-light text-default fw-500 float-end">7,165</span>
              </div>
              <div id="category-more" class="collapse">
                <div class="form-check mb-2">
                  <input id="c-6" class="form-check-input me-2" type="checkbox" value="">
                  <label class="form-check-label" for="c-6"> Marketing Specialist </label>
                  <span class="badge bg-light text-default fw-500 float-end">5,964</span>
                </div>
                <div class="form-check mb-2">
                  <input id="c-7" class="form-check-input me-2" type="checkbox" value="">
                  <label class="form-check-label" for="c-7"> Sales Manager </label>
                  <span class="badge bg-light text-default fw-500 float-end">2,123</span>
                </div>
                <div class="form-check mb-2">
                  <input id="c-8" class="form-check-input me-2" type="checkbox" value="">
                  <label class="form-check-label" for="c-8"> Customer Support Lead </label>
                  <span class="badge bg-light text-default fw-500 float-end">1,645</span>
                </div>
                <div class="form-check mb-2">
                  <input id="c-9" class="form-check-input me-2" type="checkbox" value="">
                  <label class="form-check-label" for="c-9"> Full Stack Developer </label>
                  <span class="badge bg-light text-default fw-500 float-end">1,432</span>
                </div>
                <div class="form-check mb-2">
                  <input id="c-10" class="form-check-input me-2" type="checkbox" value="">
                  <label class="form-check-label" for="c-10"> Network Administrator </label>
                  <span class="badge bg-light text-default fw-500 float-end">1,231</span>
                </div>
              </div>
              <a
                class="badge bg-primary-transparent"
                data-bs-toggle="collapse"
                href="#category-more"
                role="button"
                aria-expanded="false"
                aria-controls="category-more"
              >More</a>
            </div>
          </div>
          <div class="px-2 py-4 px-sm-4 border-bottom">
            <h6 class="fw-medium mb-0">
              Notice Period
            </h6>
            <div class="px-2 py-3 pb-0">
              <div class="form-check mb-2">
                <input
                  id="available-1"
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  checked
                >
                <label class="form-check-label" for="available-1"> Immediate </label>
                <span class="badge bg-light text-default fw-500 float-end">512</span>
              </div>
              <div class="form-check mb-2">
                <input id="available-2" class="form-check-input me-2" type="checkbox" value="">
                <label class="form-check-label" for="available-2"> 1 Week </label>
                <span class="badge bg-light text-default fw-500 float-end">2,186</span>
              </div>
              <div class="form-check">
                <input id="available-3" class="form-check-input me-2" type="checkbox" value="">
                <label class="form-check-label" for="available-3"> 2 Weeks </label>
                <span class="badge bg-light text-default fw-500 float-end">734</span>
              </div>
              <div class="form-check">
                <input id="available-4" class="form-check-input me-2" type="checkbox" value="">
                <label class="form-check-label" for="available-4"> 1 Month </label>
                <span class="badge bg-light text-default fw-500 float-end">734</span>
              </div>
              <div class="form-check">
                <input id="available-5" class="form-check-input me-2" type="checkbox" value="">
                <label class="form-check-label" for="available-5"> 2 Months </label>
                <span class="badge bg-light text-default fw-500 float-end">734</span>
              </div>
              <div class="form-check">
                <input id="available-6" class="form-check-input me-2" type="checkbox" value="">
                <label class="form-check-label" for="available-6"> 3+ Months </label>
                <span class="badge bg-light text-default fw-500 float-end">734</span>
              </div>
            </div>
          </div>
          <div class="px-2 py-4 px-sm-4 border-bottom">
            <h6 class="fw-medium mb-0">
              Job Type
            </h6>
            <div class="px-2 py-3 pb-0">
              <div class="form-check mb-2">
                <input id="j-1" class="form-check-input me-2" type="checkbox" value="" checked>
                <label class="form-check-label" for="j-1"> Full Time </label>
                <span class="badge bg-light text-default fw-500 float-end">512</span>
              </div>
              <div class="form-check mb-2">
                <input id="j-2" class="form-check-input me-2" type="checkbox" value="" checked>
                <label class="form-check-label" for="j-2"> Part Time </label>
                <span class="badge bg-light text-default fw-500 float-end">2,186</span>
              </div>
              <div class="form-check mb-2">
                <input id="j-3" class="form-check-input me-2" type="checkbox" value="" checked>
                <label class="form-check-label" for="j-3"> Internship </label>
                <span class="badge bg-light text-default fw-500 float-end">734</span>
              </div>
              <div class="form-check mb-2">
                <input id="j-4" class="form-check-input me-2" type="checkbox" value="">
                <label class="form-check-label" for="j-4"> Freelancer </label>
                <span class="badge bg-light text-default fw-500 float-end">16</span>
              </div>
              <div class="form-check">
                <input id="j-5" class="form-check-input me-2" type="checkbox" value="">
                <label class="form-check-label" for="j-5"> Remote Job </label>
                <span class="badge bg-light text-default fw-500 float-end">1,432</span>
              </div>
            </div>
          </div>
          <div class="px-2 py-4 px-sm-4 border-bottom">
            <h6 class="fw-medium mb-0">
              Salary Range
            </h6>
            <div class="px-2 py-3 pb-0">
              <div id="nonlinear">
                <VueSlider
                  v-model="diffTolltips"
                  class="mb-5 custom"
                  tooltip="always"
                  :marks="[7000, 40000]"
                  :min="min"
                  :max="max"
                  :tooltip-placement="['top', 'bottom']"
                />
              </div>
              <div class="d-flex mt-4 justify-content-center">
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
          <div class="px-2 py-4 px-sm-4 border-bottom">
            <h6 class="fw-medium mb-0">
              Qualification
            </h6>
            <div class="px-2 py-3 pb-0">
              <div class="form-check mb-2">
                <input id="q-1" class="form-check-input me-2" type="checkbox" value="">
                <label class="form-check-label" for="q-1"> High School </label>
                <span class="badge bg-light text-default fw-500 float-end">16,563</span>
              </div>
              <div class="form-check mb-2">
                <input id="q-2" class="form-check-input me-2" type="checkbox" value="" checked>
                <label class="form-check-label" for="q-2"> Associate Degree </label>
                <span class="badge bg-light text-default fw-500 float-end">15,234</span>
              </div>
              <div class="form-check mb-2">
                <input id="q-3" class="form-check-input me-2" type="checkbox" value="">
                <label class="form-check-label" for="q-3"> Bachelor’s Degree </label>
                <span class="badge bg-light text-default fw-500 float-end">6,278</span>
              </div>
              <div class="form-check mb-2">
                <input id="q-4" class="form-check-input me-2" type="checkbox" value="" checked>
                <label class="form-check-label" for="q-4"> Master’s Degree </label>
                <span class="badge bg-light text-default fw-500 float-end">4,531</span>
              </div>
              <div class="form-check">
                <input id="q-5" class="form-check-input me-2" type="checkbox" value="">
                <label class="form-check-label" for="q-5"> PhD </label>
                <span class="badge bg-light text-default fw-500 float-end">2,405</span>
              </div>
              <div class="form-check">
                <input id="q-6" class="form-check-input me-2" type="checkbox" value="">
                <label class="form-check-label" for="q-6"> Diploma/Certification </label>
                <span class="badge bg-light text-default fw-500 float-end">2,142</span>
              </div>
            </div>
          </div>
          <div class="px-2 py-4 px-sm-4">
            <h6 class="fw-medium mb-0">
              Skills
            </h6>
            <div class="px-2 py-3 pb-0">
              <div class="form-check mb-2">
                <input id="s-1" class="form-check-input me-2" type="checkbox" value="" checked>
                <label class="form-check-label" for="s-1"> JavaScript </label>
                <span class="badge bg-light text-default fw-500 float-end">23,156</span>
              </div>
              <div class="form-check mb-2">
                <input id="s-2" class="form-check-input me-2" type="checkbox" value="" checked>
                <label class="form-check-label" for="s-2"> Python </label>
                <span class="badge bg-light text-default fw-500 float-end">15,632</span>
              </div>
              <div class="form-check mb-2">
                <input id="s-3" class="form-check-input me-2" type="checkbox" value="">
                <label class="form-check-label" for="s-3"> React </label>
                <span class="badge bg-light text-default fw-500 float-end">15,032</span>
              </div>
              <div class="form-check mb-2">
                <input id="s-4" class="form-check-input me-2" type="checkbox" value="" checked>
                <label class="form-check-label" for="s-4"> Node.js </label>
                <span class="badge bg-light text-default fw-500 float-end">7,154</span>
              </div>
              <div id="sizes-more" class="collapse">
                <div class="form-check mb-2">
                  <input id="s-5" class="form-check-input me-2" type="checkbox" value="">
                  <label class="form-check-label" for="s-5"> SQL </label>
                  <span class="badge bg-light text-default fw-500 float-end">5,946</span>
                </div>
                <div class="form-check mb-2">
                  <input id="s-6" class="form-check-input me-2" type="checkbox" value="">
                  <label class="form-check-label" for="s-6"> Product </label>
                  <span class="badge bg-light text-default fw-500 float-end">3,267</span>
                </div>
                <div class="form-check mb-2">
                  <input id="s-7" class="form-check-input me-2" type="checkbox" value="">
                  <label class="form-check-label" for="s-7"> Agile/Scrum </label>
                  <span class="badge bg-light text-default fw-500 float-end">578</span>
                </div>
                <div class="form-check mb-2">
                  <input id="s-8" class="form-check-input me-2" type="checkbox" value="">
                  <label class="form-check-label" for="s-8"> Data Analysis </label>
                  <span class="badge bg-light text-default fw-500 float-end">142</span>
                </div>
                <div class="form-check mb-2">
                  <input id="s-9" class="form-check-input me-2" type="checkbox" value="">
                  <label class="form-check-label" for="s-9"> Digital Marketing </label>
                  <span class="badge bg-light text-default fw-500 float-end">633</span>
                </div>
                <div class="form-check mb-2">
                  <input id="s-10" class="form-check-input me-2" type="checkbox" value="">
                  <label class="form-check-label" for="s-10"> UX/UI Design </label>
                  <span class="badge bg-light text-default fw-500 float-end">452</span>
                </div>
                <div class="form-check mb-2">
                  <input id="s-11" class="form-check-input me-2" type="checkbox" value="">
                  <label class="form-check-label" for="s-11"> Networking </label>
                  <span class="badge bg-light text-default fw-500 float-end">32</span>
                </div>
                <div class="form-check mb-2">
                  <input id="s-12" class="form-check-input me-2" type="checkbox" value="">
                  <label class="form-check-label" for="s-12"> CRM Software </label>
                  <span class="badge bg-light text-default fw-500 float-end">12</span>
                </div>
              </div>
              <a
                class="badge bg-primary-transparent"
                data-bs-toggle="collapse"
                href="#sizes-more"
                role="button"
                aria-expanded="false"
                aria-controls="sizes-more"
              >More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-9 col-xl-8 serach-jobs-main">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="card custom-card border-0 shadow-none">
            <div class="card-body p-md-0">
              <div class="input-group companies-search-input flex-nowrap">
                <input
                  type="text"
                  class="form-control form-control-lg w-25"
                  aria-label="Text input with segmented dropdown button"
                  placeholder="Enter your keyword here"
                >
                <VueMultiselect
                  v-model="DataValue"
                  :searchable="true"
                  class="form-select px-0 py-1 rounded-0"
                  placeholder="All Categories"
                  :show-labels="false"
                  :multiple="false"
                  :options="Data"
                  :taggable="false"
                />
                <input
                  type="text"
                  class="form-control form-control-lg w-25"
                  aria-label="Text input with segmented dropdown button"
                  placeholder="Search by location"
                >
                <VueMultiselect
                  v-model="Data2Value"
                  :searchable="true"
                  class="form-select px-0 py-1 rounded-0"
                  placeholder="Experience Level"
                  :show-labels="false"
                  :multiple="false"
                  :options="Data2"
                  :taggable="false"
                />
                <button type="button" class="btn btn-lg btn-primary">
                  <i class="ri-search-line" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-body">
              <div class="d-flex flex-wrap gap-2 align-items-center">
                <h5 class="fw-medium mb-0 flex-grow-1">
                  1287 <span class="fw-normal fs-18">Candidates match your search</span>
                </h5>
                <div class="btn-group">
                  <button
                    class="btn btn-outline-light border dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort By
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="javascript:void(0);">Premium</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Newest</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Most Relevant</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Fresher</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Experienced</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Flexible Shift</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Day Shift</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card overflow-hidden border-bottom-0">
            <div class="card-body p-0">
              <div class="table-responsive">
                <TableComponent
                  #cell="{ row }"
                  table-class="table text-nowrap"
                  :headers="[
                    { text: 'Details', thClass: '' },
                    { text: 'Education', thClass: '' },
                    { text: 'Skills', thClass: '' },
                    { text: 'Job Type', thClass: '' },
                    { text: 'Salary Expectation', thClass: '' },
                    { text: 'Notice Period', thClass: '' },
                    { text: 'Actions', thClass: 'text-center' },
                  ]"
                  :rows="Peopletable"
                >
                  <td>
                    <div>
                      <div class="d-flex align-items-start gap-3">
                        <div class="lh-1">
                          <span class="avatar avatar-lg">
                            <BaseImg :src="row.imageUrl" alt="" />
                          </span>
                        </div>
                        <div>
                          <span class="fw-semibold d-block">{{ row.name }}</span>
                          <span class="">{{ row.role }}</span>
                          <span class="text-muted fs-13 d-block mb-1">{{ row.location }}</span>
                          <span
                            href="javascript:void(0);"
                            class="badge badge-md rounded-pill bg-primary-transparent"
                          ><i class="bi bi-briefcase me-1 align-middle" />Exp :
                            {{ row.experience }}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {{ row.education }}
                  </td>
                  <td>
                    <div class="d-flex align-items-center gap-1 skills-container flex-wrap">
                      <span
                        v-for="(skill, index) in row.skills"
                        :key="index"
                        :class="`badge bg-${skill.color}-transparent`"
                      >
                        {{ skill.name }}
                      </span>
                    </div>
                  </td>
                  <td>
                    {{ row.employmentType }}
                  </td>
                  <td>
                    <span class="fw-medium">{{ row.salaryRange }}</span>
                  </td>
                  <td>
                    {{ row.noticePeriod }}
                  </td>
                  <td class="text-center">
                    <div class="dropdown">
                      <a
                        aria-label="anchor"
                        href="javascript:void(0);"
                        class="btn btn-icon btn-sm btn-light border"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="ri-more-2-fill" />
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a
                            class="dropdown-item d-inline-flex align-items-center"
                            href="javascript:void(0);"
                          ><i class="ti ti-file-text me-2" />Download CV</a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item d-inline-flex align-items-center"
                            href="javascript:void(0);"
                          ><i class="ti ti-eye me-2" />View</a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item d-inline-flex align-items-center"
                            href="javascript:void(0);"
                          ><i class="ti ti-checklist me-2" />Shortlist</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </TableComponent>
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
  <!-- End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
