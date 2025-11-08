<script setup>
import simplebar from 'simplebar-vue'
import * as FileMenuData from '@/shared/data/applications/filemanagerdata'
import Pageheader from '@/components/pageheader/pageheader.vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'
const dataToPass = {
  title: 'Applications',
  currentpage: 'File Manager',
  activepage: 'File Manager',
}
</script>

<template>
  <Head title="File Manager | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xxl-3 col-xl-12">
      <div class="row">
        <div class="col-xxl-12 col-xl-6">
          <div class="card custom-card">
            <div class="card-body">
              <simplebar id="files-main-nav">
                <ul class="list-unstyled files-main-nav">
                  <li
                    :class="`${idx.active ? 'active' : ''} files-type`"
                    v-for="idx in FileMenuData.FileMenuItems"
                    :key="idx.id"
                  >
                    <a href="javascript:void(0)">
                      <div class="d-flex align-items-center">
                        <div class="me-2" v-html="idx.icon"></div>
                        <span class="flex-fill text-nowrap">
                          {{ idx.label }}
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </simplebar>
            </div>
          </div>
        </div>
        <div class="col-xxl-12 col-xl-6">
          <div class="card custom-card">
            <div class="card-body">
              <div class="filemanager-upgrade-storage w-100 text-center">
                <span class="d-block mb-3 p-4 bg-light rounded file-manager-upgrade-img">
                  <BaseImg src="/images/media/file-manager/2.png" alt="" class="img-fluid" />
                </span>
                <span class="fs-15 fw-semibold text-default">Upgrade To PRO</span>
                <span class="fs-13 fw-medium d-block text-muted mt-2"
                  >Unlock Pro for faster transfers, stronger security, and unlimited storage.</span
                >
                <div class="mt-3 d-grid">
                  <button class="btn btn-lg btn-primary">Upgrade Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-6 col-xl-12">
      <div class="card custom-card">
        <div class="card-body p-0">
          <div class="file-manager-folders">
            <div
              class="d-flex p-3 flex-wrap gap-2 align-items-center justify-content-between border-bottom"
            >
              <div class="w-50">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Search Files Here"
                  aria-label="files-search"
                />
              </div>
              <div class="d-flex gap-2 flex-wrap justify-content-sm-end">
                <button
                  class="btn btn-primary btn-w-md d-flex align-items-center justify-content-center btn-wave waves-light"
                  data-bs-toggle="modal"
                  data-bs-target="#create-folder"
                >
                  <i class="ri-add-circle-line align-middle me-1"></i>Upload File
                </button>
                <div
                  class="modal fade"
                  id="create-folder"
                  tabindex="-1"
                  aria-labelledby="create-folder"
                  data-bs-keyboard="false"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h6 class="modal-title" id="staticBackdropLabel">Upload File</h6>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <label for="create-folder1" class="form-label">File Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="create-folder1"
                          placeholder="File Name"
                        />
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-sm btn-icon btn-light"
                          data-bs-dismiss="modal"
                        >
                          <i class="ri-close-fill"></i>
                        </button>
                        <button type="button" class="btn btn-sm btn-success">Create</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-3 file-folders-container">
              <div class="d-flex mb-3 align-items-center justify-content-between">
                <p class="mb-0 fw-medium fs-14">Categories</p>
                <a href="javascript:void(0);" class="fs-12 text-muted fw-medium">
                  View All<i class="ti ti-arrow-narrow-right ms-1"></i>
                </a>
              </div>
              <div class="row">
                <div
                  class="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
                  v-for="idx in FileMenuData.FileCategories"
                  :key="idx.id"
                >
                  <div :class="`card custom-card shadow-none file-category-card ${idx.colorClass}`">
                    <div class="card-body text-center">
                      <a href="javascript:void(0)" class="stretched-link"></a>
                      <div
                        class="d-flex align-items-center gap-2 lh-1 justify-content-end file-icons"
                      >
                        <div class="file-important">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none"></rect>
                            <path
                              d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z"
                              opacity="0.2"
                            ></path>
                            <path
                              d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="16"
                            ></path>
                          </svg>
                        </div>
                        <div class="dropdown">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ri-more-2-fill fw-semibold fs-16 text-muted"></i>
                          </a>
                          <ul class="dropdown-menu custom-filedropdown">
                            <li><a class="dropdown-item" href="javascript:void(0);">Delete</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Rename</a></li>
                            <li>
                              <a class="dropdown-item" href="javascript:void(0);">Hide Folder</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        :class="`mb-2 text-${idx.colorClass} svg-${idx.colorClass} file-img`"
                        v-html="idx.icon"
                      ></div>
                      <h6 class="fw-semibold mb-1">{{ idx.title }}</h6>
                      <span class="d-block text-muted">{{ idx.fileCount }} Files</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex mb-3 align-items-center justify-content-between">
                <p class="mb-0 fw-medium fs-14">Folders</p>
                <a href="javascript:void(0);" class="fs-12 text-muted fw-medium">
                  View All<i class="ti ti-arrow-narrow-right ms-1"></i>
                </a>
              </div>
              <div class="row">
                <div
                  class="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
                  v-for="idx in FileMenuData.Folders"
                  :key="idx.id"
                >
                  <div class="card custom-card">
                    <div class="card-body">
                      <a href="javascript:void(0);" class="stretched-link"></a>
                      <div
                        class="mb-4 folder-svg-container d-flex flex-wrap justify-content-between align-items-start"
                      >
                        <div class="svg-warning text-warning">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none" />
                            <path
                              d="M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Z"
                            />
                          </svg>
                        </div>
                        <div class="d-flex align-items-center gap-2 lh-1 file-icons">
                          <div :class="`file-important ${idx.star}`">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                              <rect width="256" height="256" fill="none" />
                              <path
                                d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z"
                                opacity="0.2"
                              />
                              <path
                                d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                              />
                            </svg>
                          </div>
                          <div class="dropdown">
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i class="ri-more-2-fill fw-semibold fs-16 text-muted"></i>
                            </a>
                            <ul class="dropdown-menu">
                              <li>
                                <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="javascript:void(0);">Rename</a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="javascript:void(0);">Hide Folder</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="fs-14 fw-medium mb-1 lh-1">
                        {{ idx.name }}
                      </div>
                      <div class="d-flex align-items-center justify-content-between flex-wrap">
                        <div>
                          <span class="text-muted fs-12"> {{ idx.fileCount }} Files </span>
                        </div>
                        <div>
                          <span class="text-default fw-medium">
                            {{ idx.size }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex mb-3 align-items-center justify-content-between">
                <p class="mb-0 fw-medium fs-14">Recent Files</p>
                <a href="javascript:void(0);" class="fs-12 text-muted fw-medium">
                  View All<i class="ti ti-arrow-narrow-right ms-1"></i>
                </a>
              </div>
              <div class="row">
                <div class="col-xl-12">
                  <div class="table-responsive border border-bottom-0">
                    <table class="table text-nowrap table-hover">
                      <thead>
                        <tr>
                          <th scope="col">File Name</th>
                          <th scope="col">Category</th>
                          <th scope="col">Size</th>
                          <th scope="col">Date Modified</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody class="files-list">
                        <tr v-for="idx in FileMenuData.FileData" :key="idx.id">
                          <th scope="row">
                            <div class="d-flex align-items-center">
                              <div class="me-0">
                                <span
                                  :class="`avatar avatar-sm svg-${idx.avatarClass} text-${idx.avatarClass}`"
                                  v-html="idx.icon"
                                ></span>
                              </div>
                              <div>
                                <a
                                  href="javascript:void(0);"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#offcanvasRight"
                                  aria-controls="offcanvasRight"
                                  >{{ idx.fileName }}</a
                                >
                              </div>
                            </div>
                          </th>
                          <td>{{ idx.fileType }}</td>
                          <td>{{ idx.fileSize }}</td>
                          <td>{{ idx.fileDate }}</td>
                          <td>
                            <div class="hstack gap-2 fs-15">
                              <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                                ><i class="ri-eye-line"></i
                              ></a>
                              <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                                ><i class="ri-delete-bin-line"></i
                              ></a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-12">
      <div class="card custom-card">
        <div class="card-body">
          <div class="p-1 rounded bg-light mb-4">
            <div class="d-flex align-items-center">
              <div id="available-storage">
                <apexchart
                  height="80px"
                  type="radialBar"
                  width="80px"
                  :options="FileMenuData.Options"
                  :series="FileMenuData.Series"
                />
              </div>
              <div class="flex-fill">
                <span class="d-block fw-semibold">Available Storage</span>
                <span class="fs-13 text-muted">51Gb of 64Gb</span>
              </div>
            </div>
          </div>
          <ul class="list-unstyled files-media-list">
            <li v-for="idx in FileMenuData.FileCategorie" :key="idx.id">
              <div class="d-flex align-items-center gap-2">
                <div class="lh-1">
                  <span
                    :class="`avatar avatar-md avatar-rounded svg-${idx.color} bg-${idx.color}-transparent`"
                    v-html="idx.icon"
                  ></span>
                </div>
                <div class="flex-fill">
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <div class="fw-medium">{{ idx.name }}</div>
                    <div class="text-muted fs-13">{{ idx.size }}</div>
                  </div>
                  <div class="progress progress-xs">
                    <div
                      :class="`progress-bar bg-${idx.color} progress-bar-animated`"
                      role="progressbar"
                      style="width: 58%"
                      aria-valuenow="58"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Recent Activity</div>
        </div>
        <div class="card-body">
          <ul class="list-unstyled file-manager-activity-list">
            <li v-for="idx in FileMenuData.ActivityLog" :key="idx.id">
              <div class="d-flex align-items-center gap-2">
                <div class="lh-1">
                  <span class="avatar avatar-md avatar-rounded bg-light text-muted">
                    <i :class="`ti ti-${idx.icon} fs-18`"></i>
                  </span>
                </div>
                <div class="flex-fill w-75">
                  <div class="d-flex align-items-center justify-content-between">
                    <span class="fw-semibold">{{ idx.title }}</span>
                    <span class="fs-13 text-muted">{{ idx.time }}</span>
                  </div>
                  <span class="d-block text-muted fs-13 w-100 text-truncate">{{
                    idx.description
                  }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start::mail information offcanvas -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight">
    <div class="offcanvas-body p-0">
      <div class="selected-file-details">
        <div class="d-flex p-3 align-items-center justify-content-between border-bottom">
          <div>
            <h6 class="fw-medium mb-0">File Details</h6>
          </div>
          <div class="d-flex align-items-center">
            <div class="dropdown me-1">
              <button
                class="btn btn-sm btn-icon btn-primary-light btn-wave waves-light waves-effect waves-light"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="ri-more-2-fill"></i>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="javascript:void(0);">Share</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Copy</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Move</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Delete</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Raname</a></li>
              </ul>
            </div>
            <button
              type="button"
              class="btn btn-sm btn-icon btn-outline-light border"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i class="ri-close-line"></i>
            </button>
          </div>
        </div>
        <div class="filemanager-file-details" id="filemanager-file-details">
          <div class="p-3 text-center border-bottom border-block-end-dashed">
            <div class="file-details mb-3">
              <BaseImg src="/images/media/blog/9.jpg" alt="" />
            </div>
            <div>
              <p class="mb-0 fw-medium fs-16">IMG-09123878-SPK734.jpeg</p>
              <p class="mb-0 text-muted fs-10">422KB | 23,Nov 2025</p>
            </div>
          </div>
          <div class="p-3 border-bottom border-block-end-dashed">
            <ul class="list-group">
              <li class="list-group-item">
                <div>
                  <span class="fw-medium">File Format : </span
                  ><span class="fs-12 text-muted">jpeg</span>
                </div>
              </li>
              <li class="list-group-item">
                <div>
                  <p class="fw-medium mb-0">File Description :</p>
                  <span class="fs-12 text-muted"
                    >This file contains 3 folder VYZOR.main & VYZOR.premium & VYZOR.featured and 42
                    images and layout styles are added in this update.</span
                  >
                </div>
              </li>
              <li class="list-group-item">
                <p class="fw-medium mb-0">File Location :</p>
                <span class="fs-12 text-muted"
                  >Device/Storage/Archives/IMG-09123878-SPK734.jpeg</span
                >
              </li>
            </ul>
          </div>
          <div class="p-3 border-bottom border-block-end-dashed">
            <p class="mb-1 fw-medium fs-14">Downloaded from :</p>
            <a
              class="text-primary fw-medium text-break"
              href="https://themeforest.net/user/spruko/portfolio"
              target="_blank"
            >
              <u>https://themeforest.net/user/spruko/portfolio</u>
            </a>
          </div>
          <div class="p-3">
            <p class="mb-2 fw-medium fs-14">Shared With :</p>
            <a href="javascript:void(0);">
              <div class="d-flex align-items-center p-2 mb-1">
                <span class="avatar avatar-sm me-2 avatar-rounded">
                  <BaseImg src="/images/faces/1.jpg" alt="" />
                </span>
                <span class="fw-medium flex-fill">Akira Susan</span>
                <span class="badge bg-success-transparent fw-normal">28,Nov 2025</span>
              </div>
            </a>
            <a href="javascript:void(0);">
              <div class="d-flex align-items-center p-2 mb-1">
                <span class="avatar avatar-sm me-2 avatar-rounded">
                  <BaseImg src="/images/faces/15.jpg" alt="" />
                </span>
                <span class="fw-medium flex-fill">Khalid Ahmad</span>
                <span class="badge bg-success-transparent fw-normal">16,Oct 2025</span>
              </div>
            </a>

            <a href="javascript:void(0);">
              <div class="d-flex align-items-center p-2 mb-1">
                <span class="avatar avatar-sm me-2 avatar-rounded">
                  <BaseImg src="/images/faces/8.jpg" alt="" />
                </span>
                <span class="fw-medium flex-fill">Jeremiah Jackson</span>
                <span class="badge bg-success-transparent fw-normal">05,Dec 2025</span>
              </div>
            </a>
            <a href="javascript:void(0);">
              <div class="d-flex align-items-center p-2">
                <span class="avatar avatar-sm me-2 avatar-rounded">
                  <BaseImg src="/images/faces/13.jpg" alt="" />
                </span>
                <span class="fw-medium flex-fill">Brigo Jhonson</span>
                <span class="badge bg-success-transparent fw-normal">13,Nov 2025</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::mail information offcanvas -->
</template>

<style scoped>
/* Add your styles here */
</style>
