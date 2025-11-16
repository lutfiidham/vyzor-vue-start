<script setup>
import { Head } from '@inertiajs/vue3'
// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

// Import Vue FilePond
import vueFilePond from 'vue-filepond'

import BaseImg from '@/components/Baseimage/BaseImg.vue'

import Pageheader from '@/components/pageheader/pageheader.vue'
import * as ProfileData from '@/shared/data/pages/profiledata'
import ProfileGallery from '../../../../UI/profileGallery.vue'
// Import FilePond styles
import 'filepond/dist/filepond.min.css'
// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

// Create component
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview)

const dataToPass = {
  title: 'Pages',
  currentpage: 'Profile',
  activepage: 'Profile',
}
const myFiles = []
</script>

<template>
  <Head title="Profile | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row justify-content-center">
    <div class="col-xl-10">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card profile-card">
            <div class="profile-banner-image">
              <BaseImg src="/images/media/media-3.jpg" class="card-img-top" alt="..." />
            </div>
            <div class="card-body p-4 pb-0 position-relative">
              <div class="d-flex align-items-end justify-content-between flex-wrap">
                <div>
                  <span class="avatar avatar-xxl avatar-rounded bg-info online">
                    <BaseImg src="/images/faces/12.jpg" alt="" />
                  </span>
                  <div
                    class="mt-4 mb-3 d-flex align-items-center flex-wrap gap-3 justify-content-between"
                  >
                    <div>
                      <h5 class="fw-semibold mb-1">
                        Tom Phillip
                      </h5>
                      <span class="d-block fw-medium text-muted mb-1">Senior Product Manager</span>
                      <p class="fs-12 mb-0 fw-medium text-muted">
                        <span class="me-3"><i class="ri-building-line me-1 align-middle" />New York, USA</span>
                        <span class="d-inline-block"><i class="ri-phone-line me-2 align-middle" />+1 (123) 456-7890</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <ul id="myTab" class="nav nav-tabs mb-0 tab-style-8 scaleX" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        id="profile-about-tab"
                        class="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-about-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="profile-about-tab-pane"
                        aria-selected="true"
                      >
                        About
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        id="gallery-tab"
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#gallery-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="gallery-tab-pane"
                        aria-selected="false"
                      >
                        Gallery
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        id="followers-tab"
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#followers-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="followers-tab-pane"
                        aria-selected="false"
                      >
                        Followers
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        id="friends-tab"
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#friends-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="friends-tab-pane"
                        aria-selected="false"
                      >
                        Friends
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div id="profile-tabs" class="tab-content">
            <div
              id="profile-about-tab-pane"
              class="tab-pane show active p-0 border-0"
              role="tabpanel"
              aria-labelledby="profile-about-tab"
              tabindex="0"
            >
              <div class="row">
                <div class="col-xxl-4">
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="card custom-card">
                        <div class="card-body">
                          <div class="d-flex align-items-center justify-content-center gap-4">
                            <div class="text-center">
                              <h3 class="fw-semibold mb-1">
                                13,264
                              </h3>
                              <span class="d-block text-muted">Followers</span>
                            </div>
                            <div class="vr" />
                            <div class="text-center">
                              <h3 class="fw-semibold mb-1">
                                7,238
                              </h3>
                              <span class="d-block text-muted">Following</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-12">
                      <div class="card custom-card">
                        <div class="card-header">
                          <div class="card-title">
                            About
                          </div>
                        </div>
                        <div class="card-body">
                          <p class="text-muted">
                            Experienced pereson passionate about delivering user-centered solutions,
                            leading cross-functional teams, and driving product success.
                          </p>
                          <div class="text-muted">
                            <div class="mb-2 d-flex align-items-center gap-1 flex-wrap">
                              <span class="avatar avatar-sm avatar-rounded text-default">
                                <i class="ri-mail-line align-middle fs-15" />
                              </span>
                              <span class="fw-medium text-default">Email : </span>
                              your.email@example.com
                            </div>
                            <div class="mb-2 d-flex align-items-center gap-1 flex-wrap">
                              <span class="avatar avatar-sm avatar-rounded text-default">
                                <i class="ri-phone-line align-middle fs-15" />
                              </span>
                              <span class="fw-medium text-default">Phone : </span> +1 (555) 123-4567
                            </div>
                            <div class="mb-2 d-flex align-items-center gap-1 flex-wrap">
                              <span class="avatar avatar-sm avatar-rounded text-default">
                                <i class="ri-map-pin-line align-middle fs-15" />
                              </span>
                              <span class="fw-medium text-default">Website : </span>
                              www.yourwebsite.com
                            </div>
                            <div class="mb-0 d-flex align-items-center gap-1">
                              <span class="avatar avatar-sm avatar-rounded text-default">
                                <i class="ri-building-line align-middle fs-15" />
                              </span>
                              <span class="fw-medium text-default">Location : </span>
                              City, Country
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-12">
                      <div class="card custom-card overflow-hidden">
                        <div class="card-header">
                          <div class="card-title">
                            Social Media
                          </div>
                        </div>
                        <div class="card-body p-0">
                          <ul class="list-group list-group-flush social-media-list">
                            <li class="list-group-item">
                              <div class="d-flex align-items-center gap-3 flex-wrap">
                                <div>
                                  <span class="avatar avatar-md bg-primary-transparent"><i class="ri-facebook-circle-fill fs-4" /></span>
                                </div>
                                <div>
                                  <span class="d-block fw-medium">Facebook</span>
                                  <a href="javascript:void(0);" class="text-muted">https://www.facebook.com/johndoe</a>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              <div class="d-flex align-items-center gap-3 flex-wrap">
                                <div>
                                  <span class="avatar avatar-md bg-secondary-transparent"><i class="ri-twitter-x-fill fs-4" /></span>
                                </div>
                                <div>
                                  <span class="d-block fw-medium">Twitter</span>
                                  <a href="javascript:void(0);" class="text-muted">https://twitter.com/johndoe</a>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              <div class="d-flex align-items-center gap-3 flex-wrap">
                                <div>
                                  <span class="avatar avatar-md bg-success-transparent"><i class="ri-linkedin-box-fill fs-4" /></span>
                                </div>
                                <div>
                                  <span class="d-block fw-medium">Linkedin</span>
                                  <a href="javascript:void(0);" class="text-muted">https://www.linkedin.com/in/johndoe</a>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              <div class="d-flex align-items-center gap-3 flex-wrap">
                                <div>
                                  <span class="avatar avatar-md bg-orange-transparent"><i class="ri-instagram-fill fs-4" /></span>
                                </div>
                                <div>
                                  <span class="d-block fw-medium">Instagram</span>
                                  <a href="javascript:void(0);" class="text-muted">https://www.instagram.com/johndoe</a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-8">
                  <div class="card custom-card">
                    <div class="card-header p-0">
                      <ul
                        id="myTab4"
                        class="nav nav-tabs tab-style-8 scaleX justify-content-end"
                        role="tablist"
                      >
                        <li class="nav-item" role="presentation">
                          <button
                            id="status-tab"
                            class="nav-link active"
                            data-bs-toggle="tab"
                            data-bs-target="#status-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="status-tab-pane"
                            aria-selected="true"
                          >
                            <i class="ri-radio-button-line lh-1 me-1" />Status
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button
                            id="media-tab"
                            class="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#media-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="media-tab-pane"
                            aria-selected="false"
                            tabindex="-1"
                          >
                            <i class="ri-video-line lh-1 me-1" />Image/Video
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button
                            id="live-stream-tab"
                            class="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#live-stream-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="live-stream-tab-pane"
                            aria-selected="false"
                            tabindex="-1"
                          >
                            <i class="ri-tv-line lh-1 me-1" />Live Stream
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div class="card-body custom-product">
                      <div id="myTabContent3" class="tab-content">
                        <div
                          id="status-tab-pane"
                          class="tab-pane show active overflow-hidden p-0 border-0"
                          role="tabpanel"
                          aria-labelledby="status-tab"
                          tabindex="0"
                        >
                          <textarea
                            id="text-area"
                            class="form-control"
                            rows="4"
                            placeholder="What's on your mind?"
                          />
                          <div class="mt-2">
                            <button class="btn btn-primary float-end">
                              Post <i class="ri-send-plane-2-line ms-1" />
                            </button>
                          </div>
                        </div>
                        <div
                          id="media-tab-pane"
                          class="tab-pane overflow-hidden border-0 p-0"
                          role="tabpanel"
                          aria-labelledby="media-tab"
                          tabindex="0"
                        >
                          <textarea
                            id="text-area"
                            class="form-control mb-3"
                            rows="2"
                            placeholder="What's on your mind?"
                          />
                          <FilePond
                            ref="pond"
                            name="test"
                            label-idle="Drag & Drop files here or <span class='filepond--label-action'>Browse</span>"
                            allow-multiple="false"
                            max-files="1"
                            accepted-file-types="image/jpeg, image/png"
                            :files="myFiles"
                          />
                          <div class="mt-2">
                            <button class="btn btn-success float-end">
                              Upload <i class="ri-upload-2-line ms-1" />
                            </button>
                          </div>
                        </div>
                        <div
                          id="live-stream-tab-pane"
                          class="tab-pane overflow-hidden border-0 p-0"
                          role="tabpanel"
                          aria-labelledby="live-stream-tab"
                          tabindex="0"
                        >
                          <textarea
                            id="text-area"
                            class="form-control"
                            rows="4"
                            placeholder="What's on your mind?"
                          />
                          <div class="mt-2">
                            <button class="btn btn-warning float-end">
                              Start Streaming <i class="ri-tv-2-line ms-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card custom-card">
                    <div class="card-body">
                      <div class="d-flex align-items-center gap-2 flex-wrap mb-2">
                        <div class="lh-1">
                          <span class="avatar avatar-rounded avatar-md">
                            <BaseImg src="/images/faces/12.jpg" alt="" />
                          </span>
                        </div>
                        <div class="flex-fill">
                          <span class="d-block fw-semibold">Tom Phillip</span>
                          <span class="text-muted fs-13">14 hrs ago</span>
                        </div>
                        <div class="dropdown">
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            class="btn btn-icon rounded-circle border btn-light"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ri-more-2-fill" />
                          </a>
                          <ul class="dropdown-menu">
                            <li>
                              <a class="dropdown-item" href="javascript:void(0);"><i class="ri-edit-line me-2" />Edit</a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="javascript:void(0);"><i class="ri-delete-bin-line me-2" />Delete</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="my-3">
                        Captured the serene beauty of the blue sky as the sun sets.
                      </div>
                      <div>
                        <BaseImg src="/images/media/media-23.jpg" class="card-img" alt="..." />
                      </div>
                    </div>
                    <div class="card-footer">
                      <div class="d-flex align-items-center gap-2 flex-wrap">
                        <div class="avatar-list-stacked">
                          <span class="avatar avatar-rounded">
                            <BaseImg src="/images/faces/2.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-rounded">
                            <BaseImg src="/images/faces/8.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-rounded">
                            <BaseImg src="/images/faces/2.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-rounded">
                            <BaseImg src="/images/faces/10.jpg" alt="img" />
                          </span>
                        </div>
                        <div class="flex-fill">
                          and 8 others <i class="ri-heart-3-fill text-danger" /> this post
                        </div>
                        <div class="d-flex align-items-center gap-2 flex-wrap">
                          <a
                            href="javascript:void(0);"
                            class="p-1 px-2 bg-primary-transparent rounded"
                          ><i class="ri-message-3-line me-1" />Comment</a>
                          <a href="javascript:void(0);" class="p-1 px-2 bg-info-transparent rounded"><i class="ri-share-forward-line me-1" />Share</a>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer">
                      <ul class="list-unstyled post-comments-list">
                        <li>
                          <div class="d-flex align-items-start gap-3">
                            <div class="lh-1">
                              <span class="avatar avatar-md avatar-rounded">
                                <BaseImg src="/images/faces/4.jpg" alt="" />
                              </span>
                            </div>
                            <div class="flex-fill p-3 rounded bg-light">
                              <div
                                class="d-flex align-items-center justify-content-between flex-wrap"
                              >
                                <div class="fw-semibold">
                                  Emily_Smith
                                </div>
                                <div class="text-muted fs-13">
                                  2 hours ago
                                </div>
                              </div>
                              <div class="text-muted">
                                Wow, what a peaceful view! Nature at its best &#x1F60D;.
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex align-items-start gap-3">
                            <div class="lh-1">
                              <span class="avatar avatar-md avatar-rounded">
                                <BaseImg src="/images/faces/14.jpg" alt="" />
                              </span>
                            </div>
                            <div class="flex-fill p-3 rounded bg-light">
                              <div
                                class="d-flex align-items-center justify-content-between flex-wrap"
                              >
                                <div class="fw-semibold">
                                  JohnDoe
                                </div>
                                <div class="text-muted fs-13">
                                  1 hours ago
                                </div>
                              </div>
                              <div class="text-muted">
                                Absolutely stunning! The colors are just perfect &#x1F305;&#x1F499;.
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex align-items-center lh-1 flex-wrap">
                            <div class="me-3">
                              <span class="avatar avatar-md avatar-rounded">
                                <BaseImg src="/images/faces/12.jpg" alt="" />
                              </span>
                            </div>
                            <div class="flex-fill">
                              <div class="input-group">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Write a comment"
                                  aria-label="comment"
                                >
                                <button class="btn btn-light border px-2 px-sm-3" type="button">
                                  <i class="bi bi-emoji-smile" />
                                </button>
                                <button class="btn btn-light border px-2 px-sm-3" type="button">
                                  <i class="bi bi-paperclip" />
                                </button>
                                <button class="btn btn-light border px-2 px-sm-3" type="button">
                                  <i class="bi bi-camera" />
                                </button>
                                <button class="btn btn-primary" type="button">
                                  Post
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="card custom-card">
                    <div class="card-body">
                      <div class="d-flex align-items-center gap-2 flex-wrap mb-2">
                        <div class="lh-1">
                          <span class="avatar avatar-rounded avatar-md">
                            <BaseImg src="/images/faces/12.jpg" alt="" />
                          </span>
                        </div>
                        <div class="flex-fill">
                          <span class="d-block fw-semibold">Tom Phillip</span>
                          <span class="text-muted fs-13">2 days ago</span>
                        </div>
                        <div class="dropdown">
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            class="btn btn-icon rounded-circle border btn-light"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ri-more-2-fill" />
                          </a>
                          <ul class="dropdown-menu">
                            <li>
                              <a class="dropdown-item" href="javascript:void(0);"><i class="ri-edit-line me-2" />Edit</a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="javascript:void(0);"><i class="ri-delete-bin-line me-2" />Delete</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="my-3">
                        Success is not final, failure is not fatal: It is the courage to continue
                        that counts. Keep pushing forward!
                        <a href="javascript:void(0);">&#128170; #MotivationMonday</a>
                      </div>
                    </div>
                    <div class="card-footer">
                      <div class="d-flex align-items-center gap-2 flex-wrap">
                        <div class="avatar-list-stacked">
                          <span class="avatar avatar-rounded">
                            <BaseImg src="/images/faces/12.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-rounded">
                            <BaseImg src="/images/faces/3.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-rounded">
                            <BaseImg src="/images/faces/15.jpg" alt="img" />
                          </span>
                        </div>
                        <div class="flex-fill">
                          and 2 others <i class="ri-heart-3-fill text-danger" /> this post
                        </div>
                        <div class="d-flex align-items-center gap-2 flex-wrap">
                          <a
                            href="javascript:void(0);"
                            class="p-1 px-2 bg-primary-transparent rounded"
                          ><i class="ri-message-3-line me-1" />Comment</a>
                          <a href="javascript:void(0);" class="p-1 px-2 bg-info-transparent rounded"><i class="ri-share-forward-line me-1" />Share</a>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer">
                      <ul class="list-unstyled post-comments-list">
                        <li>
                          <div class="d-flex align-items-center lh-1 flex-wrap">
                            <div class="me-3">
                              <span class="avatar avatar-md avatar-rounded">
                                <BaseImg src="/images/faces/12.jpg" alt="" />
                              </span>
                            </div>
                            <div class="flex-fill">
                              <div class="input-group">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Write a comment"
                                  aria-label="comment"
                                >
                                <button class="btn btn-light border px-2 px-sm-3" type="button">
                                  <i class="bi bi-emoji-smile" />
                                </button>
                                <button class="btn btn-light border px-2 px-sm-3" type="button">
                                  <i class="bi bi-paperclip" />
                                </button>
                                <button class="btn btn-light border px-2 px-sm-3" type="button">
                                  <i class="bi bi-camera" />
                                </button>
                                <button class="btn btn-primary" type="button">
                                  Post
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="card custom-card">
                    <div class="card-body">
                      <div class="d-flex align-items-center gap-2 flex-wrap mb-2">
                        <div class="lh-1">
                          <span class="avatar avatar-rounded avatar-md">
                            <BaseImg src="/images/faces/12.jpg" alt="" />
                          </span>
                        </div>
                        <div class="flex-fill">
                          <span class="d-block fw-semibold">Tom Phillip</span>
                          <span class="text-muted fs-13">14 hrs ago</span>
                        </div>
                        <div class="dropdown">
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            class="btn btn-icon rounded-circle border btn-light"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ri-more-2-fill" />
                          </a>
                          <ul class="dropdown-menu">
                            <li>
                              <a class="dropdown-item" href="javascript:void(0);"><i class="ri-edit-line me-2" />Edit</a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="javascript:void(0);"><i class="ri-delete-bin-line me-2" />Delete</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="my-3">
                        The serene beauty of the evening beach with the soft waves and the sky
                        painted in shades of orange and pink is a perfect way to unwind after a long
                        day. &#x1F305; &#127754; <a href="javascript:void(0);">#BeachVibes</a>
                        <a href="javascript:void(0);">#EveningSunset</a>
                        <a href="javascript:void(0);">#Relaxing</a>
                      </div>
                      <div>
                        <BaseImg src="/images/media/media-10.jpg" class="card-img" alt="..." />
                      </div>
                    </div>
                    <div class="card-footer">
                      <div class="d-flex align-items-center gap-2 flex-wrap">
                        <div class="avatar-list-stacked">
                          <span class="avatar avatar-rounded">
                            <BaseImg src="/images/faces/13.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-rounded">
                            <BaseImg src="/images/faces/3.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-rounded">
                            <BaseImg src="/images/faces/4.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-rounded">
                            <BaseImg src="/images/faces/14.jpg" alt="img" />
                          </span>
                          <span class="avatar avatar-rounded">
                            <BaseImg src="/images/faces/5.jpg" alt="img" />
                          </span>
                        </div>

                        <div class="flex-fill">
                          and 25 others <i class="ri-heart-3-fill text-danger" /> this post
                        </div>
                        <div class="d-flex align-items-center gap-2 flex-wrap">
                          <a
                            href="javascript:void(0);"
                            class="p-1 px-2 bg-primary-transparent rounded"
                          ><i class="ri-message-3-line me-1" />Comment</a>
                          <a href="javascript:void(0);" class="p-1 px-2 bg-info-transparent rounded"><i class="ri-share-forward-line me-1" />Share</a>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer">
                      <ul class="list-unstyled post-comments-list">
                        <li>
                          <div class="d-flex align-items-start gap-3">
                            <div class="lh-1">
                              <span class="avatar avatar-md avatar-rounded">
                                <BaseImg src="/images/faces/6.jpg" alt="" />
                              </span>
                            </div>
                            <div class="flex-fill p-3 rounded bg-light">
                              <div
                                class="d-flex align-items-center justify-content-between flex-wrap"
                              >
                                <div class="fw-semibold">
                                  Emma Watson
                                </div>
                                <div class="text-muted fs-13">
                                  2 hours ago
                                </div>
                              </div>
                              <div class="text-muted">
                                Such a peaceful moment at the beach! Perfect way to end the day.
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex align-items-center lh-1 flex-wrap">
                            <div class="me-3">
                              <span class="avatar avatar-md avatar-rounded">
                                <BaseImg src="/images/faces/12.jpg" alt="" />
                              </span>
                            </div>
                            <div class="flex-fill">
                              <div class="input-group">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Write a comment"
                                  aria-label="comment"
                                >
                                <button class="btn btn-light border px-2 px-sm-3" type="button">
                                  <i class="bi bi-emoji-smile" />
                                </button>
                                <button class="btn btn-light border px-2 px-sm-3" type="button">
                                  <i class="bi bi-paperclip" />
                                </button>
                                <button class="btn btn-light border px-2 px-sm-3" type="button">
                                  <i class="bi bi-camera" />
                                </button>
                                <button class="btn btn-primary" type="button">
                                  Post
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="gallery-tab-pane"
              class="tab-pane p-0 border-0"
              role="tabpanel"
              aria-labelledby="gallery-tab"
              tabindex="0"
            >
              <ProfileGallery />
            </div>
            <div
              id="followers-tab-pane"
              class="tab-pane p-0 border-0"
              role="tabpanel"
              aria-labelledby="followers-tab"
              tabindex="0"
            >
              <div class="row">
                <div v-for="(idx, index) in ProfileData.Profiles" :key="index" class="col-xl-4">
                  <div class="card custom-card">
                    <div class="card-body">
                      <div class="d-flex align-items-center gap-2 flex-wrap">
                        <div class="lh-1">
                          <span class="avatar avatar-lg avatar-rounded">
                            <BaseImg :src="idx.imgSrc" alt="" />
                          </span>
                        </div>
                        <div class="flex-fill">
                          <span class="fw-semibold d-block">{{ idx.name }}</span>
                          <span class="text-muted fs-13">{{ idx.mail }}</span>
                        </div>
                        <div>
                          <button :class="`btn btn-${idx.color}-ghost`">
                            <i :class="`ri-user-${idx.icon}-line me-1`" />{{ idx.followers }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="friends-tab-pane"
              class="tab-pane p-0 border-0"
              role="tabpanel"
              aria-labelledby="friends-tab"
              tabindex="0"
            >
              <div class="row">
                <div
                  v-for="(idx, index) in ProfileData.FriendsList"
                  :key="index"
                  class="col-xxl-3 col-xl-4 col-lg-6"
                >
                  <div class="card custom-card">
                    <div class="card-body p-4 text-center">
                      <div class="dropdown profile-friends-actions">
                        <a
                          aria-label="anchor"
                          href="javascript:void(0);"
                          class="btn btn-icon rounded-circle border btn-light"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="ri-more-2-fill" />
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="javascript:void(0);"><i class="ri-edit-line me-2" />Edit</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="javascript:void(0);"><i class="ri-delete-bin-line me-2" />Delete</a>
                          </li>
                        </ul>
                      </div>
                      <div class="lh-1 mb-2">
                        <span class="avatar avatar-xxl avatar-rounded">
                          <BaseImg :src="idx.imgSrc" alt="" />
                        </span>
                      </div>
                      <div class="mb-3">
                        <span class="d-block fw-semibold">{{ idx.name }}</span>
                        <span class="text-muted fs-13">{{ idx.mail }}</span>
                      </div>
                      <div class="btn-list">
                        <button
                          class="btn btn-icon btn-facebook btn-wave rounded-circle waves-effect waves-light"
                        >
                          <i class="ri-facebook-line" />
                        </button>
                        <button
                          class="btn btn-icon btn-twitter btn-wave rounded-circle waves-effect waves-light"
                        >
                          <i class="ri-twitter-x-line" />
                        </button>
                        <button
                          class="btn btn-icon btn-instagram btn-wave rounded-circle waves-effect waves-light"
                        >
                          <i class="ri-instagram-line" />
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
  <!-- End:: row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
