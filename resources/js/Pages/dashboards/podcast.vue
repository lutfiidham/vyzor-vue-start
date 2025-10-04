<script setup>
import * as PodcastData from '@/shared/data/dashboards/podcastdata'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import BaseImg from '../../components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'
const dataToPass = {
  title: 'Dashboards',
  currentpage: 'Podcast',
  activepage: 'Podcast',
}
</script>

<template>
  <Head title="Podcast | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xxl-9">
      <div class="row">
        <div class="col-xxl-8">
          <div class="row">
            <div class="col-xl-12">
              <div class="card custom-card podcast-banner-card border-0 shadow-none">
                <div class="card-body">
                  <div class="podcast-banner-card-background">
                    <BaseImg src="/images/media/backgrounds/6.png" alt="" />
                  </div>
                  <div class="row">
                    <div class="col-xl-8">
                      <span class="badge bg-primary rounded-pill">Featured Track</span>
                      <h2 class="fw-semibold mt-2">Echoes of Tomorrow</h2>
                      <p class="fs-16 mb-3">
                        Tune in to 'Echoes of Tomorrow'—exclusive insights and an <br />
                        artist interview, only on our podcast.
                      </p>
                      <div class="fw-medium text-primary mb-4">
                        <i class="ti ti-music mx-1"></i>30 + Eps
                        <span class="ms-2 text-default fs-12 op-8"
                          ><i class="ri-play-circle-line fs-13 mx-1"></i>260.517/ Monthly
                          Listenders</span
                        >
                      </div>
                      <div class="btn-list">
                        <button class="btn btn-lg btn-primary btn-w-lg me-2">Listen Now</button>
                        <button class="btn btn-lg btn-primary-ghost btn-w-lg">Try Premium</button>
                      </div>
                    </div>
                    <div class="col-xl-4">
                      <BaseImg
                        src="/images/media/media-70.png"
                        alt=""
                        class="podcast-banner-img img-fluid d-md-block d-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-12">
              <div class="mb-4 d-flex align-items-center justify-content-between">
                <h6 class="fw-medium mb-0">Categories :</h6>
                <span class="text-muted fs-13"
                  >View All<i class="ti ti-arrow-narrow-right ms-1"></i
                ></span>
              </div>
              <div class="d-flex align-items-center gap-2 mb-4 flex-wrap">
                <div
                  :class="`nft-tag nft-tag-${idx.className}`"
                  v-for="idx in PodcastData.PodcastCategeries"
                  :key="idx.id"
                >
                  <a href="javascript:void(0);" class="stretched-link"></a>
                  <span class="nft-tag-icon"><i :class="`ti ti-${idx.icon} fs-16`"></i></span>
                  <span class="nft-tag-text podcast-category-text">{{ idx.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4">
          <div class="card custom-card">
            <div class="card-header justify-content-between">
              <div class="card-title">Top Podcasters</div>
              <a href="javascript:void(0);" class="text-muted fs-13"
                >View All<i class="ti ti-arrow-narrow-right ms-1 align-middle"></i
              ></a>
            </div>
            <div class="card-body">
              <ul class="list-unstyled top-podcasters-list">
                <li v-for="idx in PodcastData.Podcasters" :key="idx.id">
                  <div class="d-flex align-items-center gap-2 flex-wrap">
                    <div class="lh-1">
                      <span class="avatar avatar-rounded">
                        <BaseImg :src="idx.avatar" alt="" />
                      </span>
                    </div>
                    <div class="flex-fill">
                      <span class="fw-semibold">{{ idx.name }}</span>
                      <span class="fs-13 d-block text-muted">{{ idx.title }}</span>
                    </div>
                    <div class="text-end">
                      <span :class="`badge bg-${idx.badgeClass}-transparent`">{{
                        idx.category
                      }}</span>
                      <span class="fs-13 d-block mt-1">{{ idx.followers }}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="row">
            <div class="mb-4 d-flex align-items-center justify-content-between">
              <h6 class="fw-medium mb-0">Recommendations :</h6>
              <a href="javascript:void(0);" class="fs-12 text-muted">
                View All<i class="ti ti-arrow-narrow-right ms-1"></i>
              </a>
            </div>
            <div
              class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
              v-for="idx in PodcastData.MediaCards"
              :key="idx.id"
            >
              <div class="card custom-card">
                <div class="row g-0">
                  <div class="col-3">
                    <BaseImg
                      :src="idx.image"
                      class="img-fluid rounded-start h-100 w-100"
                      alt="..."
                    />
                  </div>
                  <div class="col-9">
                    <div class="card-body p-4">
                      <div class="d-flex align-items-center justify-content-between gap-1">
                        <div>
                          <a href="javascript:void(0);">
                            <h6 class="fw-medium mb-0">{{ idx.title }}</h6>
                          </a>
                          <span class="text-muted fs-12">{{ idx.author }}</span>
                        </div>
                        <div>
                          <button class="btn btn-primary-light btn-icon btn-wave">
                            <i class="ri-play-fill"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-4 d-flex align-items-center justify-content-between">
              <h6 class="fw-medium mb-0">Recently Played :</h6>
              <a href="javascript:void(0);" class="fs-12 text-muted">
                View All<i class="ti ti-arrow-narrow-right ms-1"></i>
              </a>
            </div>
            <div class="col-xl-12">
              <div class="row row-cols-xxl-5">
                <div class="col" v-for="idx in PodcastData.RecentlyMedia" :key="idx.id">
                  <div class="card custom-card">
                    <a href="javascript:void(0);" class="card-anchor"></a>
                    <BaseImg :src="idx.image" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h6 class="card-title fw-medium mb-0">{{ idx.title }}</h6>
                      <span class="fs-13 text-muted">{{ idx.author }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="row">
        <div class="col-xl-12">
          <h6 class="fw-semibold mb-3">Now Playing</h6>
          <div class="card custom-card">
            <div class="card-body p-4">
              <div class="text-center mb-4">
                <span class="avatar mb-3 podcast-playing-now-avatar shadow">
                  <BaseImg src="/images/media/media-78.jpg" alt="" />
                </span>
                <a href="javascript:void(0);">
                  <h6 class="fw-medium mb-1">Echoes of Tomorrow</h6>
                </a>
                <span class="fs-12">By Alice Mumbleton</span>
              </div>
              <div class="row justify-content-center">
                <div class="col-xl-9">
                  <div class="d-flex gap-3 align-items-center mb-4">
                    <div class="fs-12">12.25</div>
                    <div
                      class="progress progress-xs progress-custom progress-animate podcast-playing-progress bg-light"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div class="progress-bar bg-success" style="width: 50%"></div>
                    </div>
                    <div class="fs-12">23.45</div>
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-between flex-wrap gap-3 lh-1 p-3 bg-light rounded"
                  >
                    <a href="javascript:void(0);">
                      <i class="ri-repeat-2-fill fs-5 text-muted"></i>
                    </a>
                    <a href="javascript:void(0);">
                      <i class="ri-skip-back-fill fs-5 text-muted"></i>
                    </a>
                    <a href="javascript:void(0);" class="btn btn-primary btn-icon rounded-circle">
                      <i class="ri-play-fill"></i>
                    </a>
                    <a href="javascript:void(0);">
                      <i class="ri-skip-forward-fill fs-5 text-muted"></i>
                    </a>
                    <a href="javascript:void(0);">
                      <i class="ri-shuffle-fill fs-5 text-muted"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card overflow-hidden">
            <div class="card-header">
              <div class="card-title">Top Charts Today</div>
            </div>
            <div class="card-body p-0">
              <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="idx in PodcastData.ListItems" :key="idx.id">
                  <div class="d-flex align-items-center gap-2 flex-wrap">
                    <div class="me-3">
                      {{ idx.id }}
                    </div>
                    <div class="lh-1">
                      <span class="avatar avatar-md avatar-rounded">
                        <BaseImg :src="idx.image" alt="" />
                      </span>
                    </div>
                    <div class="flex-fill">
                      <span class="fw-semibold">{{ idx.title }}</span>
                      <span class="d-block text-muted fs-13">{{ idx.author }}</span>
                    </div>
                    <div
                      class="d-block fw-medium d-flex align-items-center gap-2 justify-content-end"
                    >
                      {{ idx.likes }}<i class="ti ti-heart-filled text-danger"></i>
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
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">Podcast Analytics</div>
          <div class="d-flex flex-wrap gap-2">
            <div>
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Search Here"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li><a class="dropdown-item" href="javascript:void(0);">New</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Popular</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Relevant</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <TableComponent
              tableClass="table text-nowrap"
              :headers="[
                { text: 'S.No', thClass: '' },
                { text: 'Podcast Name', thClass: '' },
                { text: 'Genre', thClass: '' },
                { text: 'Episodes', thClass: '' },
                { text: 'Total Listeners', thClass: '' },
                { text: 'Avg. Play Time', thClass: '' },
                { text: 'Likes', thClass: '' },
                { text: 'Comments', thClass: '' },
                { text: 'Shares', thClass: '' },
                { text: 'Rating', thClass: '' },
                { text: 'Status', thClass: '' },
              ]"
              :rows="PodcastData.PodcastTable"
              v-slot:cell="{ row }"
            >
              <td>
                {{ row.id }}
              </td>
              <td>
                <div class="d-flex align-items-center gap-2">
                  <div class="lh-1">
                    <span class="avatar avatar-md avatar-rounded">
                      <BaseImg :src="row.image" alt="" />
                    </span>
                  </div>
                  <div>
                    <span class="fw-semibold d-block">{{ row.title }}</span>
                    <span class="text-muted fs-13">By {{ row.author }}</span>
                  </div>
                </div>
              </td>
              <td>
                {{ row.category }}
              </td>
              <td>{{ row.episodes }}</td>
              <td>
                {{ row.views }}
              </td>
              <td>{{ row.duration }}</td>
              <td>{{ row.comments }}</td>
              <td>{{ row.likes }}</td>
              <td>{{ row.shares }}</td>
              <td>
                <div class="d-inline-flex align-items-center">
                  {{ row.rating }}<i class="ti ti-star-filled ms-1 text-warning"></i>
                </div>
              </td>
              <td>
                <span
                  :class="`badge bg-${row.status === 'Active' ? 'success' : 'danger'}-transparent`"
                  >{{ row.status }}</span
                >
              </td>
            </TableComponent>
          </div>
        </div>
        <div class="card-footer border-top-0">
          <div class="d-flex align-items-center">
            <div>Showing 6 Entries <i class="bi bi-arrow-right ms-2 fw-semibold"></i></div>
            <div class="ms-auto">
              <nav aria-label="Page navigation" class="pagination-style-2">
                <ul class="pagination mb-0 flex-wrap">
                  <li class="page-item disabled">
                    <a class="page-link" href="javascript:void(0);"> Prev </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                  <li class="page-item active">
                    <a class="page-link" href="javascript:void(0);">2</a>
                  </li>
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
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->
</template>

<style scoped>
/* Add your styles here */
</style>
