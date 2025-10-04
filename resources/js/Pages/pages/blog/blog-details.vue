<script setup>
import simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'
import * as Blogdetailsdata from '@/shared/data/pages/blogdetails/blogdetailsdata'
import Pageheader from '@/components/pageheader/pageheader.vue'
import BaseImg from '../../../components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'
const dataToPass = {
  title: 'Pages',
  subtitle: 'Blog',
  currentpage: 'Blog Details',
  activepage: 'Blog Details',
}
</script>

<template>
  <Head title="Blog-Details | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xxl-9">
      <h3 class="fw-medium mb-3">The Future of Artificial Intelligence: Trends to Watch in 2025</h3>
      <div class="card custom-card">
        <BaseImg src="/images/media/blog/27.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap">
            <div class="d-flex align-items-center gap-2">
              <div class="lh-1">
                <span class="avatar avatar-xs avatar-rounded">
                  <BaseImg src="/images/faces/13.jpg" alt="" />
                </span>
              </div>
              <div>John Doe</div>
              <div>
                <span class="badge bg-primary-transparent">Technology</span>
              </div>
            </div>
            <div class="d-flex align-items-center gap-3 text-muted">
              <div class="d-inline-flex align-items-center">
                <i class="ti ti-calendar-event fs-16 me-2"></i>March 15, 2025
              </div>
              <div>1.2K Views</div>
            </div>
          </div>
          <div class="blog-details-area">
            <p>
              The rapid advancements in Artificial Intelligence (AI) have already begun transforming
              industries, and the next decade promises even more exciting innovations. As we look
              toward 2025, several key trends will define the future of AI and shape the way
              businesses, governments, and individuals interact with technology. Here’s a look at
              what to expect from the AI revolution in the coming years.
            </p>
            <h5>1. AI-Powered Personal Assistants</h5>
            <p>
              Artificial intelligence is evolving rapidly to make personal assistants smarter and
              more intuitive. Virtual assistants, powered by AI, will become increasingly capable of
              understanding complex tasks and personal preferences. Whether it's scheduling
              appointments, managing emails, or providing personalized recommendations, AI will
              become a more integral part of our daily lives.
            </p>
            <h5>2. Autonomous Systems and Self-Driving Vehicles</h5>
            <p>
              The field of autonomous vehicles has made huge strides, and by 2025, we expect
              self-driving cars to become much more prevalent. With advancements in AI and machine
              learning algorithms, self-driving cars are expected to improve in safety, efficiency,
              and affordability, potentially revolutionizing transportation and mobility.
            </p>
            <div class="card custom-card card-bg-primary">
              <a href="javascript:void(0);" class="card-anchor"></a>
              <div class="card-body">
                <blockquote class="m-0 text-center">
                  <h5 class="text-fixed-white lh-base">
                    This highlights how AI is expected to revolutionize industries just as
                    electricity did in the past, <br />
                    becoming a core part of almost every sector..
                  </h5>
                  <footer class="blockquote-footer mt-3 mb-0 fs-14 text-fixed-white op-7">
                    Someone famous as <cite title="Source Title">-Andrew Ng</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
            <h5>3. AI in Healthcare</h5>
            <p>
              AI is already being used to predict diseases, assist in diagnostics, and provide
              personalized treatment options. By 2025, AI will play an even larger role in
              healthcare, including innovations like AI-powered robotic surgery, precision medicine,
              and real-time health monitoring. The AI-driven healthcare industry will help reduce
              human error, lower costs, and improve outcomes for patients.
            </p>
            <h5>4. The Rise of Ethical AI</h5>
            <p>
              As AI continues to shape the future, the focus on ethics will become more important
              than ever. There will be an increasing demand for AI systems to be transparent, fair,
              and accountable. Companies and governments will invest in frameworks and guidelines to
              ensure that AI is used responsibly, without reinforcing biases or discrimination.
            </p>
            <h5>5. AI-Driven Automation in the Workplace</h5>
            <p>
              Automation is transforming industries by increasing efficiency and reducing costs. By
              2025, AI will continue to automate tasks across multiple sectors, from manufacturing
              and logistics to customer service and data analysis. As a result, businesses will
              experience greater productivity, while workers will need to adapt and learn new skills
              to stay relevant in the evolving job market.
            </p>
            <h5>Conclusion</h5>
            <p>
              Artificial Intelligence is poised to disrupt nearly every industry over the next
              decade. From personalized AI assistants to autonomous vehicles and smarter healthcare
              systems, the future of AI will create both exciting opportunities and significant
              challenges. To stay competitive and adapt to this rapidly changing landscape,
              businesses and individuals must embrace the potential of AI and prepare for the
              transformation it will bring. In the coming years, those who are prepared to leverage
              AI will be at the forefront of innovation.
            </p>
          </div>
          <div class="blog-comments mb-4">
            <div class="card custom-card">
              <div class="card-header">
                <div class="card-title">Comments</div>
              </div>
              <div class="card-body">
                <simplebar id="blog-details-comment-list">
                  <div class="mb-3 overflow-visible d-flex align-items-start flex-wrap">
                    <div class="me-3">
                      <span class="avatar avatar-rounded avatar-md">
                        <BaseImg src="/images/faces/2.jpg" alt="img" />
                      </span>
                    </div>
                    <div class="media-body overflow-visible flex-fill">
                      <div class="mb-4">
                        <nav class="nav float-end">
                          <div class="dropdown">
                            <a
                              class="nav-link text-muted fs-16 p-0 ps-4"
                              href="javascript;"
                              data-bs-toggle="dropdown"
                              role="button"
                              aria-haspopup="true"
                              aria-expanded="false"
                              ><i class="ri-more-2-fill"></i
                            ></a>
                            <div class="dropdown-menu dropdown-menu-start">
                              <a class="dropdown-item" href="javascript:void(0);"
                                ><i class="fe fe-edit me-1 d-inline-block"></i> Edit</a
                              >
                              <a class="dropdown-item" href="javascript:void(0);"
                                ><i class="fe fe-flag me-1 d-inline-block"></i> Report Abuse</a
                              >
                              <a class="dropdown-item" href="javascript:void(0);"
                                ><i class="fe fe-trash-2 me-1 d-inline-block"></i> Delete</a
                              >
                            </div>
                          </div>
                        </nav>
                        <h6 class="mt-0">
                          JohnDoe23 <span class="text-muted fs-12 ms-1">1 day ago</span>
                        </h6>
                        <span><i class="fe fe-thumb-up text-danger"></i></span>
                        <p class="font-13 text-muted">
                          This is a fascinating read! AI is truly shaping the future in ways we
                          never imagined. Excited to see what’s next!
                        </p>
                        <span class="reply" id="1">
                          <a
                            data-bs-toggle="collapse"
                            href="#collapseExample"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                            ><span
                              class="px-2 py-1 rounded bg-light text-muted fs-12 border d-inline-flex align-items-center"
                              >Reply<i class="ti ti-share-3 ms-1"></i></span
                          ></a>
                        </span>
                        <div class="collapse" id="collapseExample">
                          <textarea
                            class="form-control mb-2 mt-3"
                            id="text-area"
                            rows="3"
                            placeholder="Write a reply ..."
                          ></textarea>
                          <div class="text-end">
                            <button class="btn btn-primary btn-wave btn-sm">Post</button>
                          </div>
                        </div>
                      </div>
                      <div class="media mb-2 overflow-visible d-flex flex-wrap">
                        <div class="me-3">
                          <span class="avatar avatar-rounded avatar-md">
                            <BaseImg src="/images/faces/3.jpg" alt="img" />
                          </span>
                        </div>
                        <div class="media-body overflow-visible flex-fill">
                          <nav class="nav float-end">
                            <div class="dropdown">
                              <a
                                class="nav-link text-muted fs-16 p-0 ps-4"
                                href="javascript:;"
                                data-bs-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                                ><i class="ri-more-2-fill"></i
                              ></a>
                              <div class="dropdown-menu dropdown-menu-start">
                                <a class="dropdown-item" href="javascript:void(0);"
                                  ><i class="fe fe-edit me-1 d-inline-block"></i> Edit</a
                                >
                                <a class="dropdown-item" href="javascript:void(0);"
                                  ><i class="fe fe-flag me-1 d-inline-block"></i> Report Abuse</a
                                >
                                <a class="dropdown-item" href="javascript:void(0);"
                                  ><i class="fe fe-trash-2 me-1 d-inline-block"></i> Delete</a
                                >
                              </div>
                            </div>
                          </nav>
                          <h6 class="mt-0 d-flex align-items-center gap-2 flex-wrap">
                            TechEnthusiast99<span class="badge text-muted bg-light border"
                              >Reply to JohnDoe23</span
                            ><span class="text-muted fs-12 ms-1">2 min ago</span>
                          </h6>
                          <span><i class="fe fe-thumb-up text-danger"></i></span>
                          <p class="font-13 text-muted">
                            I love how AI is revolutionizing different industries, but do you think
                            it will ever fully replace human creativity?
                          </p>
                          <span class="reply" id="2">
                            <a
                              data-bs-toggle="collapse"
                              href="#collapseExample1"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample1"
                              ><span
                                class="px-2 py-1 rounded bg-light text-muted fs-12 border d-inline-flex align-items-center"
                                >Reply<i class="ti ti-share-3 ms-1"></i></span
                            ></a>
                          </span>
                          <div class="collapse" id="collapseExample1">
                            <textarea
                              class="form-control mb-2 mt-3"
                              id="text-area"
                              rows="3"
                              placeholder="Write a reply ..."
                            ></textarea>
                            <div class="text-end">
                              <button class="btn btn-primary btn-wave btn-sm">Post</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="media mb-2 overflow-visible d-flex align-items-start flex-wrap">
                    <div class="me-3">
                      <span class="avatar avatar-rounded avatar-md">
                        <BaseImg src="/images/faces/4.jpg" alt="img" />
                      </span>
                    </div>
                    <div class="media-body overflow-visible flex-fill">
                      <div>
                        <nav class="nav float-end">
                          <div class="dropdown">
                            <a
                              class="nav-link text-muted fs-16 p-0 ps-4"
                              href="javascript:;"
                              data-bs-toggle="dropdown"
                              role="button"
                              aria-haspopup="true"
                              aria-expanded="false"
                              ><i class="ri-more-2-fill"></i
                            ></a>
                            <div class="dropdown-menu dropdown-menu-start">
                              <a class="dropdown-item" href="javascript:void(0);"
                                ><i class="fe fe-edit me-1 d-inline-block"></i> Edit</a
                              >
                              <a class="dropdown-item" href="javascript:void(0);"
                                ><i class="fe fe-flag me-1 d-inline-block"></i> Report Abuse</a
                              >
                              <a class="dropdown-item" href="javascript:void(0);"
                                ><i class="fe fe-trash-2 me-1 d-inline-block"></i> Delete</a
                              >
                            </div>
                          </div>
                        </nav>
                        <h6 class="mt-0">
                          FutureCoder<span class="text-muted fs-12 ms-1 d-inline-block"
                            >27 Mar 2025 - 10:45AM</span
                          >
                        </h6>
                        <p class="font-13 text-muted">
                          Great insights! AI has come a long way, but ethical concerns around
                          automation still need to be addressed.
                        </p>
                        <span class="reply" id="3">
                          <a
                            data-bs-toggle="collapse"
                            href="#collapseExample2"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseExample2"
                            ><span
                              class="px-2 py-1 rounded bg-light text-muted fs-12 border d-inline-flex align-items-center"
                              >Reply<i class="ti ti-share-3 ms-1"></i></span
                          ></a>
                        </span>
                        <div class="collapse" id="collapseExample2">
                          <textarea
                            class="form-control mb-2 mt-3"
                            id="text-area"
                            rows="3"
                            placeholder="Write a reply ..."
                          ></textarea>
                          <div class="text-end">
                            <button class="btn btn-primary btn-wave btn-sm">Post</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </simplebar>
              </div>
            </div>
          </div>
          <div class="blog-comments-create">
            <div class="row gy-3">
              <div class="col-xl-12">
                <label for="blog-first-name" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control form-control-light"
                  id="blog-first-name"
                  placeholder="Enter Name"
                />
              </div>
              <div class="col-xl-12">
                <label for="blog-comment" class="form-label">Write Comment</label>
                <textarea
                  class="form-control form-control-light"
                  id="blog-comment"
                  rows="5"
                ></textarea>
              </div>
              <div class="col-xl-12">
                <div class="btn-list float-end">
                  <button class="btn btn-light btn-icon border">
                    <i class="ti ti-paperclip"></i>
                  </button>
                  <button class="btn btn-primary float-end">Post Comment</button>
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
          <div class="card custom-card">
            <div class="card-body p-5 text-center">
              <div class="lh-1 mb-2">
                <span class="avatar avatar-rounded blogger-details-avatar">
                  <BaseImg src="/images/faces/14.jpg" alt="" />
                </span>
              </div>
              <h5 class="fw-semibold mb-0">John Doe</h5>
              <span class="d-block text-muted mb-3">Tech Blogger</span>
              <p>
                Jhon Doe, an AI and tech writer, explores emerging trends, innovations, and their
                impact on everyday life.
              </p>
              <div class="btn-list custom-blog">
                <button
                  class="btn btn-icon btn-facebook btn-wave rounded-circle waves-effect waves-light"
                >
                  <i class="ri-facebook-line"></i>
                </button>
                <button
                  class="btn btn-icon btn-twitter btn-wave rounded-circle waves-effect waves-light"
                >
                  <i class="ri-twitter-x-line"></i>
                </button>
                <button
                  class="btn btn-icon btn-instagram btn-wave rounded-circle waves-effect waves-light"
                >
                  <i class="ri-instagram-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-body">
              <div class="text-center">
                <h5 class="fw-semibold mb-3">Never Miss A Post!</h5>
                <label class="form-check-label mb-4"
                  >Subscribe for free and be the first to receive updates and exclusive content!
                </label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email Here"
                    aria-label="blog-email"
                    aria-describedby="blog-subscribe"
                  />
                  <button
                    class="btn btn-primary btn-wave waves-effect waves-light"
                    type="button"
                    id="blog-subscribe"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Top Categories</div>
            </div>
            <div class="card-body">
              <ul class="list-unstyled top-blog-categories-list">
                <li v-for="idx in Blogdetailsdata.CategoryStats" :key="idx.id">
                  <div class="d-flex align-items-center gap-2">
                    <div class="flex-fill fw-medium">{{ idx.name }}</div>
                    <div>
                      <span :class="`badge ${idx.badgeClass} rounded-pill`">{{ idx.count }}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card overflow-hidden">
            <div class="card-header justify-content-between">
              <div class="card-title">Blogs you may like</div>
              <a href="javascript:void(0);" class="fs-13 text-muted text-decoration-underline"
                >View All<i class="ti ti-arrow-narrow-right"></i
              ></a>
            </div>
            <div class="card-body p-0">
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item"
                  v-for="idx in Blogdetailsdata.PopularPosts"
                  :key="idx.id"
                >
                  <a href="javascript:void(0);" class="stretched-link"></a>
                  <div class="d-flex align-items-center gap-3">
                    <div class="lh-1">
                      <span class="avatar avatar-xl">
                        <BaseImg :src="idx.image" alt="" />
                      </span>
                    </div>
                    <div class="flex-fill">
                      <div class="popular-blogs-title fw-semibold mb-1">{{ idx.title }}</div>
                      <span class="d-block text-muted fs-13 fw-normal">{{ idx.dateViews }}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Popular Tags</div>
            </div>
            <div class="card-body">
              <div class="d-flex align-items-center gap-2 flex-wrap">
                <a
                  href="javascript:void(0);"
                  class="badge bg-primary-transparent"
                  v-for="idx in Blogdetailsdata.Tags"
                  :key="idx.id"
                  >{{ idx.title }}</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Archive</div>
            </div>
            <div class="card-body">
              <ul class="list-unstyled blog-archive">
                <li>
                  <a href="javascript:void(0)" class="stretched-link"></a>
                  <div class="d-flex align-items-center gap-5 justify-content-between">
                    <div>2024</div>
                    <div>
                      <i class="ti ti-chevron-right"></i>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="javascript:void(0)" class="stretched-link"></a>
                  <div class="d-flex align-items-center gap-5 justify-content-between">
                    <div>2023</div>
                    <div>
                      <i class="ti ti-chevron-right"></i>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="javascript:void(0)" class="stretched-link"></a>
                  <div class="d-flex align-items-center gap-5 justify-content-between">
                    <div>2022</div>
                    <div>
                      <i class="ti ti-chevron-right"></i>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="javascript:void(0)" class="stretched-link"></a>
                  <div class="d-flex align-items-center gap-5 justify-content-between">
                    <div>2021</div>
                    <div>
                      <i class="ti ti-chevron-right"></i>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="javascript:void(0)" class="stretched-link"></a>
                  <div class="d-flex align-items-center gap-5 justify-content-between">
                    <div>2020</div>
                    <div>
                      <i class="ti ti-chevron-right"></i>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="javascript:void(0)" class="stretched-link"></a>
                  <div class="d-flex align-items-center gap-5 justify-content-between">
                    <div>2019</div>
                    <div>
                      <i class="ti ti-chevron-right"></i>
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
  <!--End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
