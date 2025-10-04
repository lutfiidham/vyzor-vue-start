<script setup>
import * as SearchData from '@/shared/data/pages/searchdata'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SearchGallery from '../../../UI/SearchGallery.vue'
import BaseImg from '../../components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'
const dataToPass = {
  title: 'Pages',
  currentpage: 'Search',
  activepage: 'Search',
}
</script>

<template>
  <Head title="Search | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-7">
      <div class="input-group p-3">
        <input
          type="text"
          class="form-control form-control-lg rounded-pill search-results-input"
          placeholder="Search Here ..."
          aria-label="Search Here ..."
          aria-describedby="button-addon1"
          value="Best Web Development Frameworks 2025"
        />
        <div class="other-search-types">
          <a href="javascript:void(0);"><i class="bx bx-microphone"></i></a>
          <a href="javascript:void(0);"><i class="bx bx-image"></i></a>
        </div>
      </div>
      <div
        class="d-flex align-items-center justify-content-between flex-wrap gap-3 px-3 pb-0 border-bottom"
      >
        <ul class="nav nav-tabs tab-style-8 scaleX" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active fw-medium text-muted"
              data-bs-toggle="tab"
              role="tab"
              aria-current="page"
              href="#search-all"
              aria-selected="true"
              >All</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link fw-medium text-muted"
              data-bs-toggle="tab"
              role="tab"
              aria-current="page"
              href="#search-images"
              aria-selected="false"
              tabindex="-1"
              >Images</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link fw-medium text-muted"
              data-bs-toggle="tab"
              role="tab"
              aria-current="page"
              href="#search-books"
              aria-selected="false"
              tabindex="-1"
              >Books</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link fw-medium text-muted"
              data-bs-toggle="tab"
              role="tab"
              aria-current="page"
              href="#search-news"
              aria-selected="false"
              tabindex="-1"
              >News</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link fw-medium text-muted"
              data-bs-toggle="tab"
              role="tab"
              aria-current="page"
              href="#search-videos"
              aria-selected="false"
              tabindex="-1"
              >Videos</a
            >
          </li>
        </ul>
        <div class="text-muted p-2">About 12,400,000 results (0.68 seconds)</div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->

  <!-- Start:: row-2 -->
  <div class="row mt-4">
    <div class="col-xl-12">
      <div class="tab-content p-3">
        <div class="tab-pane p-0 border-0 show active" id="search-all" role="tabpanel">
          <div class="row">
            <div class="col-xl-7">
              <ul class="list-unstyled search-results-list">
                <li>
                  <div
                    class="d-flex align-items-start justify-content-between flex-wrap flex-xxl-nowrap"
                  >
                    <div>
                      <div class="position-relative">
                        <a href="javascript:void(0);" class="stretched-link"></a>
                        <div class="d-flex align-items-center gap-2 mb-2 position-relative">
                          <div class="lh-1">
                            <span class="avatar avatar-md avatar-rounded bg-light border">
                              <BaseImg src="/images/company-logos/1.png" alt="" />
                            </span>
                          </div>
                          <div>
                            <span class="d-block fw-medium lh-1"
                              ><a href="javascript:void(0);">Developer.com</a></span
                            >
                            <span class="fs-12 text-muted">
                              www.developer.com/top-10-web-frameworks</span
                            >
                          </div>
                        </div>
                      </div>
                      <div class="mb-2">
                        <h6 class="fw-medium mb-1">
                          <a href="javascript:void(0)" class="searched-item-main-link"
                            >Top 10 Web Development Frameworks to Use in 2025</a
                          >
                        </h6>
                        <span class="d-block text-muted"
                          >January 4, 2025 - Web development frameworks are evolving, and 2025
                          brings exciting new trends in the tech industry. Learn which frameworks
                          are shaping the future of front-end and back-end development.</span
                        >
                      </div>
                    </div>
                    <div class="dropdown">
                      <a aria-label="anchor" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <i class="ri-more-2-fill fs-5 text-muted"></i>
                      </a>
                      <ul class="dropdown-menu" role="menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Open</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Save</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Share</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="d-flex align-items-start justify-content-between flex-wrap flex-xxl-nowrap"
                  >
                    <div>
                      <div class="position-relative">
                        <a href="javascript:void(0);" class="stretched-link"></a>
                        <div class="d-flex align-items-center gap-2 mb-2 position-relative">
                          <div class="lh-1">
                            <span class="avatar avatar-md avatar-rounded bg-light border">
                              <BaseImg src="/images/company-logos/5.png" alt="" />
                            </span>
                          </div>
                          <div>
                            <span class="d-block fw-medium lh-1"
                              ><a href="javascript:void(0);">WebDevHub</a></span
                            >
                            <span class="fs-12 text-muted"
                              >www.webdevhub.com/react-best-framework</span
                            >
                          </div>
                        </div>
                      </div>
                      <div class="mb-2">
                        <h6 class="fw-medium mb-1">
                          <a href="javascript:void(0)" class="searched-item-main-link"
                            >Why React is Still the Best Framework for Web Development in 2025</a
                          >
                        </h6>
                        <span class="d-block text-muted"
                          >February 8, 2025 - React remains a dominant force in the world of
                          JavaScript frameworks. Find out what makes React so powerful and how it
                          simplifies the development process for developers in 2025.</span
                        >
                      </div>
                    </div>
                    <div class="dropdown">
                      <a aria-label="anchor" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <i class="ri-more-2-fill fs-5 text-muted"></i>
                      </a>
                      <ul class="dropdown-menu" role="menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Open</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Save</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Share</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="d-flex align-items-start justify-content-between flex-wrap flex-xxl-nowrap"
                  >
                    <div>
                      <h6 class="">
                        <a href="javascript:void(0)" class="fw-medium">Search Related Images :</a>
                      </h6>
                      <div class="d-flex align-items-start gap-3 flex-wrap">
                        <div>
                          <figure class="figure mb-0">
                            <a class="avatar avatar-search" href="javascript:void(0);">
                              <BaseImg
                                class="img-fluid rounded card-img"
                                src="/images/media/media-59.jpg"
                                alt="..."
                              />
                            </a>
                            <a href="javascript:void(0)" class="d-block"> Natural Serenity </a>
                          </figure>
                        </div>
                        <div>
                          <figure class="figure mb-0">
                            <a class="avatar avatar-search" href="javascript:void(0);">
                              <BaseImg
                                class="img-fluid rounded card-img"
                                src="/images/media/media-60.jpg"
                                alt="..."
                              />
                            </a>
                            <a href="javascript:void(0)" class="d-block"> Active Living </a>
                          </figure>
                        </div>
                        <div>
                          <figure class="figure mb-0">
                            <a class="avatar avatar-search" href="javascript:void(0);">
                              <BaseImg
                                class="img-fluid rounded card-img"
                                src="/images/media/media-61.jpg"
                                alt="..."
                              />
                            </a>
                            <a href="javascript:void(0)" class="d-block"> Creative Elegance </a>
                          </figure>
                        </div>
                        <div>
                          <figure class="figure mb-0">
                            <a
                              href="javascript:void(0)"
                              class="avatar px-4 avatar-search fw-medium bg-primary-transparent"
                            >
                              View All <i class="ti ti-arrow-narrow-right ms-2"></i>
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div class="dropdown">
                      <a aria-label="anchor" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <i class="ri-more-2-fill fs-5 text-muted"></i>
                      </a>
                      <ul class="dropdown-menu" role="menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Week</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Day</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="d-flex align-items-start justify-content-between flex-wrap flex-xxl-nowrap"
                  >
                    <div>
                      <div class="position-relative">
                        <a href="javascript:void(0);" class="stretched-link"></a>
                        <div class="d-flex align-items-center gap-2 mb-2 position-relative">
                          <div class="lh-1">
                            <span class="avatar avatar-md avatar-rounded bg-light border">
                              <BaseImg src="/images/company-logos/6.png" alt="" />
                            </span>
                          </div>
                          <div>
                            <span class="d-block fw-medium lh-1"
                              ><a href="javascript:void(0);">CodeAcademy</a></span
                            >
                            <span class="fs-12 text-muted">www.codeacademy.com/vuejs-2025</span>
                          </div>
                        </div>
                      </div>
                      <div class="mb-2">
                        <h6 class="fw-medium mb-1">
                          <a href="javascript:void(0)" class="searched-item-main-link"
                            >Vue.js: The Framework You Should Learn in 2025</a
                          >
                        </h6>
                        <span class="d-block text-muted"
                          >January 18, 2025 - Vue.js has become a favorite for developers looking
                          for an easy-to-learn and flexible framework for building modern web
                          applications. Get a head start by diving into Vue.js in 2025.</span
                        >
                      </div>
                    </div>
                    <div class="dropdown">
                      <a aria-label="anchor" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <i class="ri-more-2-fill fs-5 text-muted"></i>
                      </a>
                      <ul class="dropdown-menu" role="menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Open</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Save</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Share</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="d-flex align-items-start justify-content-between flex-wrap flex-xxl-nowrap"
                  >
                    <div>
                      <div class="position-relative">
                        <a href="javascript:void(0);" class="stretched-link"></a>
                        <div class="d-flex align-items-center gap-2 mb-2 position-relative">
                          <div class="lh-1">
                            <span class="avatar avatar-md avatar-rounded bg-light border">
                              <BaseImg src="/images/company-logos/2.png" alt="" />
                            </span>
                          </div>
                          <div>
                            <span class="d-block fw-medium lh-1"
                              ><a href="javascript:void(0);">DeveloperFuture</a></span
                            >
                            <span class="fs-12 text-muted">www.developerfuture.com</span>
                          </div>
                        </div>
                      </div>
                      <div class="mb-2">
                        <h6 class="fw-medium mb-1">
                          <a href="javascript:void(0)" class="searched-item-main-link"
                            >What’s Next for 2025?</a
                          >
                        </h6>
                        <span class="d-block text-muted"
                          >In the world of web development, frameworks evolve quickly. Let’s look
                          ahead at what new frameworks will emerge and how existing ones will adapt
                          in 2025.</span
                        >
                      </div>
                    </div>
                    <div class="dropdown">
                      <a aria-label="anchor" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <i class="ri-more-2-fill fs-5 text-muted"></i>
                      </a>
                      <ul class="dropdown-menu" role="menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Open</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Save</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Share</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="d-flex align-items-start justify-content-between flex-wrap flex-xxl-nowrap"
                  >
                    <div>
                      <div class="position-relative">
                        <a href="javascript:void(0);" class="stretched-link"></a>
                        <div class="d-flex align-items-center gap-2 mb-2 position-relative">
                          <div class="lh-1">
                            <span class="avatar avatar-md avatar-rounded bg-light border">
                              <BaseImg src="/images/company-logos/4.png" alt="" />
                            </span>
                          </div>
                          <div>
                            <span class="d-block fw-medium lh-1"
                              ><a href="javascript:void(0);">DevStack</a></span
                            >
                            <span class="fs-12 text-muted"
                              >www.devstack.com/fullstack-frameworks-2025</span
                            >
                          </div>
                        </div>
                      </div>
                      <div class="mb-2">
                        <h6 class="fw-medium mb-1">
                          <a href="javascript:void(0)" class="searched-item-main-link"
                            >Best Full-Stack Development Frameworks for 2025</a
                          >
                        </h6>
                        <span class="d-block text-muted"
                          >February 20, 2025 - From MERN to MEAN, full-stack frameworks enable
                          developers to create dynamic web applications. Here are the top full-stack
                          frameworks for 2025.</span
                        >
                      </div>
                    </div>
                    <div class="dropdown">
                      <a aria-label="anchor" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <i class="ri-more-2-fill fs-5 text-muted"></i>
                      </a>
                      <ul class="dropdown-menu" role="menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Open</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Save</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Share</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="d-flex align-items-start justify-content-between flex-wrap flex-xxl-nowrap"
                  >
                    <div>
                      <div class="position-relative">
                        <a href="javascript:void(0);" class="stretched-link"></a>
                        <div class="d-flex align-items-center gap-2 mb-2 position-relative">
                          <div class="lh-1">
                            <span class="avatar avatar-md avatar-rounded bg-light border">
                              <BaseImg src="/images/company-logos/3.png" alt="" />
                            </span>
                          </div>
                          <div>
                            <span class="d-block fw-medium lh-1"
                              ><a href="javascript:void(0);">WebDevDebate</a></span
                            >
                            <span class="fs-12 text-muted">www.webdevdebate.com</span>
                          </div>
                        </div>
                      </div>
                      <div class="mb-2">
                        <h6 class="fw-medium mb-1">
                          <a href="javascript:void(0)" class="searched-item-main-link"
                            >Which is Better for Web Development in 2025?</a
                          >
                        </h6>
                        <span class="d-block text-muted"
                          >In this article, we compare two of the biggest web development
                          frameworks: Angular and React. Each has its strengths and weaknesses, but
                          which one will come out on top in 2025?</span
                        >
                      </div>
                    </div>
                    <div class="dropdown">
                      <a aria-label="anchor" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <i class="ri-more-2-fill fs-5 text-muted"></i>
                      </a>
                      <ul class="dropdown-menu" role="menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Open</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Save</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Share</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <h5 class="fw-medium mb-3">
                    <span class="fw-normal">Related Searches for</span> Best Web Development
                    Frameworks 2025
                  </h5>
                  <div class="row gy-3">
                    <div class="col-xl-6">
                      <div class="rounded-pill related-search-container">
                        <a href="javascript:void(0)">Top web development frameworks in 2025</a>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="rounded-pill related-search-container">
                        <a href="javascript:void(0)">Best JavaScript frameworks for developers</a>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="rounded-pill related-search-container">
                        <a href="javascript:void(0)">React vs Angular vs Vue comparison 2025</a>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="rounded-pill related-search-container">
                        <a href="javascript:void(0)">Future of web development frameworks</a>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="rounded-pill related-search-container">
                        <a href="javascript:void(0)"
                          >How to choose the right framework for your project</a
                        >
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="rounded-pill related-search-container">
                        <a href="javascript:void(0)">Svelte vs React performance comparison 2025</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <nav aria-label="Page navigation" class="pagination-style-2 mt-5">
                <ul class="pagination mb-0 flex-wrap justify-content-center">
                  <li class="page-item disabled">
                    <a class="page-link" href="javascript:void(0);"> Prev </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="javascript:void(0);">1</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">
                      <i class="bi bi-three-dots"></i>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">17</a></li>
                  <li class="page-item">
                    <a class="page-link text-primary" href="javascript:void(0);"> next </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="tab-pane border-0 p-0" id="search-images" role="tabpanel">
          <SearchGallery />
        </div>
        <div class="tab-pane border-0 p-0" id="search-books" role="tabpanel">
          <div class="row">
            <div class="col-xl-6" v-for="(idx, index) in SearchData.Books" :key="index">
              <div class="card custom-card shadow-none">
                <div class="card-body">
                  <div class="d-flex align-items-start flex-wrap gap-3 justify-content-between">
                    <div class="d-flex align-items-center">
                      <div>
                        <span
                          class="avatar avatar-lg avatar-rounded bg-primary bg-opacity-10 border"
                        >
                          <BaseImg :src="idx.imgSrc" alt="" />
                        </span>
                      </div>
                      <div class="ms-2">
                        <h6 class="fw-medium mb-0 d-flex align-items-center">
                          <a href="javascript:void(0);">{{ idx.title }}</a>
                        </h6>
                        <a href="javascript:void(0);">{{ idx.subTitle }}</a>
                      </div>
                    </div>
                    <div class="btn-list">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-sm btn-icon btn-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Add to favourite"
                        data-bs-original-title="Add to favourite"
                        ><span><i class="ri-heart-3-fill align-middle text-muted"></i></span
                      ></a>
                      <a
                        href="javascript:void(0);"
                        class="btn btn-sm btn-icon btn-warning-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Featured Book"
                        data-bs-original-title="Featured Book"
                        ><span><i class="ri-star-fill"></i></span
                      ></a>
                    </div>
                  </div>
                  <div class="popular-tags my-3">
                    <a
                      href="javascript:void(0);"
                      class="badge rounded-pill bg-light text-default me-1"
                      v-for="(badge, index) in idx.tags"
                      :key="index"
                      >{{ badge }}</a
                    >
                  </div>
                  <div class="d-flex justify-content-between flex-wrap gap-2">
                    <div>
                      <span class="text-muted">Published On</span> -
                      <span class="fw-medium mb-0">{{ idx.date }}</span>
                    </div>
                    <a href="javascript:void(0);" class="text-primary fw-semibold fs-14">
                      Preview <i class="fe fe-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-12">
              <button class="btn btn-info-light btn-loader mx-auto">
                <span class="me-2">Loading</span>
                <span class="loading"><i class="ri-loader-4-line fs-16"></i></span>
              </button>
            </div>
          </div>
        </div>
        <div class="tab-pane border-0 p-0" id="search-news" role="tabpanel">
          <div class="row">
            <div class="col-xl-7">
              <div class="card custom-card">
                <div class="card-body p-0">
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item"
                      v-for="(idx, index) in SearchData.News"
                      :key="index"
                    >
                      <a href="javascript:void(0);" class="stretched-link"></a>
                      <div class="mb-1">
                        <span class="h6 fw-semibold text-primary">{{ idx.title }}</span>
                      </div>
                      <span class="text-muted">
                        {{ idx.description }}
                      </span>
                      <span class="d-block mt-2">{{ idx.dateTime }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <nav aria-label="Page navigation" class="pagination-style-2 mt-5">
                <ul class="pagination mb-0 flex-wrap justify-content-center">
                  <li class="page-item disabled">
                    <a class="page-link" href="javascript:void(0);"> Prev </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="javascript:void(0);">1</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">
                      <i class="bi bi-three-dots"></i>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">17</a></li>
                  <li class="page-item">
                    <a class="page-link text-primary" href="javascript:void(0);"> next </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="tab-pane border-0 p-0" id="search-videos" role="tabpanel">
          <div class="row gy-4">
            <div
              class="col-lg-3 col-lg-3 col-sm-6 col-12"
              v-for="(idx, index) in SearchData.VideoData"
              :key="index"
            >
              <div class="ratio ratio-16x9">
                <iframe
                  :src="idx.videoUrl"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="p-2">
                <div class="d-flex align-items-center gap-1">
                  <div class="figure-caption fs-13 fw-medium text-default text-truncate">
                    {{ idx.title }}
                  </div>
                </div>
                <a
                  :href="idx.linkText"
                  target="_blank"
                  class="fs-12 link-primary text-decoration-underline"
                  >{{ idx.linkText }}</a
                >
              </div>
            </div>
            <div class="col-xl-12 my-4">
              <button class="btn btn-info-light btn-loader mx-auto">
                <span class="me-2">Loading</span>
                <span class="loading"><i class="ri-loader-4-line fs-16"></i></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->
</template>

<style scoped>
/* Add your styles here */
</style>
