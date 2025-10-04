<script setup>
import * as CandidateData from '@/shared/data/dashboards/jobs/candidatedetailsdata'
import Pageheader from '@/components/pageheader/pageheader.vue'
import BaseImg from '../../../components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'
const dataToPass = {
  activepage: 'Candidate Details',
  title: 'Dashboards',
  subtitle: 'Jobs',
  currentpage: 'Candidate Details',
}
</script>

<template>
  <Head title="Jobs-Candidate Details | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />
  <!-- Start::row-2 -->
  <div class="row">
    <div class="col-xxl-9 col-xl-8">
      <div class="card custom-card">
        <div class="card-body">
          <div class="d-flex align-items-center flex-wrap justify-content-between gap-2">
            <div class="d-flex flex-wrap gap-2 w-75">
              <div>
                <span class="avatar avatar-xxl">
                  <BaseImg src="/images/faces/13.jpg" class="img-fluid" alt="" />
                </span>
              </div>
              <div class="ms-3 w-75">
                <h4 class="fw-medium mb-0 d-flex align-items-center gap-2">
                  <a href="javascript:void(0);" class="lh-1">Jhon Doe</a>
                  <span class="text-success fs-13 lh-1"
                    ><i class="ti ti-star-filled me-1 text-warning d-inline-block"></i>4.5</span
                  >
                </h4>
                <div class="my-1">
                  <a href="javascript:void(0);" class="fw-medium"
                    ><i class="bi bi-briefcase me-1 align-middle"></i> Software Engineer</a
                  >
                </div>
                <div class="popular-tags">
                  <a href="javascript:void(0);" class="badge rounded-pill bg-info-transparent me-1"
                    ><i class="bi bi-moon-stars me-1"></i>Full Time</a
                  >
                  <a href="javascript:void(0);" class="badge rounded-pill bg-danger-transparent"
                    ><i class="bi bi-clock me-1"></i> Immediate Joinee</a
                  >
                </div>
                <div class="row mt-3 gy-2">
                  <div class="col-xl-6">
                    <div><i class="bi bi-geo-alt me-2"></i>Hyderabad, India</div>
                  </div>
                  <div class="col-xl-6">
                    <div><i class="bi bi-briefcase me-2"></i>6 Years Experience</div>
                  </div>
                  <div class="col-xl-6">
                    <div><i class="bi bi-coin me-2"></i>Package (Yearly) : $80,000 - $100,000</div>
                  </div>
                  <div class="col-xl-6">
                    <i class="bi bi-mortarboard me-2"></i>B.Sc. in Computer Science
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-list">
              <a href="javascript:void(0);" class="btn btn-primary"
                ><i class="bi bi-download me-1"></i> Download CV</a
              >
              <a href="javascript:void(0);" class="btn btn-icon btn-primary-light btn-wave">
                <i class="ri-heart-line fs-13"></i>
              </a>
              <a href="javascript:void(0);" class="btn btn-icon btn-primary-light btn-wave">
                <i class="ri-share-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="card custom-card">
        <div class="card-body p-0">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <h6 class="fw-semibold mb-3">About</h6>
              <div>
                <p class="text-muted">
                  Hi, I'm John Doe, a passionate Software Engineer with over 8 years of experience
                  in developing full-stack applications. My expertise lies in JavaScript, Node.js,
                  and React, which I’ve used to build scalable web applications and optimize
                  performance across various platforms. I am a problem-solver at heart, and I love
                  tackling complex challenges while ensuring my code is clean and efficient.
                </p>
                <p class="text-muted">
                  I believe in continuous learning and always strive to stay updated with the latest
                  technologies in the industry. I am well-versed in both front-end and back-end
                  development, allowing me to contribute to all phases of software development. I’m
                  also passionate about working in agile environments, collaborating with
                  cross-functional teams to meet project goals and deadlines.
                </p>
                <p class="mb-0 text-muted">
                  When I’m not coding, you’ll find me mentoring junior developers, where I share my
                  knowledge and help others grow in their careers. I’m always looking for new
                  opportunities to push the boundaries of technology and contribute to innovative
                  projects. I thrive in a team-oriented environment and am excited to collaborate
                  with others to create impactful solutions.
                </p>
              </div>
            </li>
            <li class="list-group-item">
              <h6 class="fw-semibold mb-3">Projects</h6>
              <div class="row">
                <div class="col-xl-6" v-for="idx in CandidateData.ProjectsCandidate" :key="idx.id">
                  <div class="card custom-card">
                    <div class="card-body">
                      <div class="d-flex align-items-start gap-3 mb-4 flex-wrap">
                        <div>
                          <span class="avatar avatar-lg avatar-rounded bg-light">
                            <BaseImg :src="idx.logoSrc" alt="" />
                          </span>
                        </div>
                        <div class="flex-fill w-50">
                          <a
                            href="javascript:void(0);"
                            class="fw-semibold fs-14 d-block text-truncate project-list-title"
                            >{{ idx.title }}</a
                          >
                          <span class="d-block text-muted fs-13">{{ idx.description }}</span>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-primary-light"
                          ><i class="ti ti-eye align-middle me-1 custom-icon"></i>View</a
                        >
                      </div>
                      <div class="d-flex align-items-center flex-wrap justify-content-between">
                        <div>
                          <span class="text-muted fs-11 d-block">Assigned Date :</span>
                          <span class="fw-semibold d-block">{{ idx.assignedDate }}</span>
                        </div>
                        <div>
                          <span class="text-muted fs-11 d-block">Status :</span>
                          <span class="badge bg-success-transparent">{{ idx.status }}</span>
                        </div>
                        <div class="text-end">
                          <span class="text-muted fs-11 d-block">Due Date :</span>
                          <span class="fw-semibold d-block">{{ idx.dueDate }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row gy-3">
                <div class="col-xl-6">
                  <h6 class="fw-semibold mb-3">Certifications</h6>
                  <ul class="list-group">
                    <li
                      :class="`list-group-item ${idx.liclass}`"
                      v-for="idx in CandidateData.Certifications"
                      :key="idx.id"
                    >
                      <div class="d-flex align-items-center gap-3 flex-wrap">
                        <div class="fw-medium">{{ idx.title }}</div>
                        <div>-</div>
                        <div>{{ idx.issuer }}</div>
                        <div>-</div>
                        <div>{{ idx.year }}</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="col-xl-6">
                  <h6 class="fw-semibold mb-3">Job Preferences</h6>
                  <ul class="list-group">
                    <li
                      :class="`list-group-item ${idx.liclass}`"
                      v-for="idx in CandidateData.Preferences"
                      :key="idx.id"
                    >
                      <div class="d-flex align-items-center gap-3 flex-wrap">
                        <div class="fw-medium">{{ idx.label }} :</div>
                        <div>{{ idx.value }}</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Experience Overview</div>
        </div>
        <div class="card-body p-0 candidate-edu-timeline">
          <div class="p-4 border-bottom">
            <div class="d-flex align-items-start gap-3">
              <div>
                <span class="avatar avatar-xl bg-light">
                  <BaseImg src="/images/company-logos/10.png" alt="" />
                </span>
              </div>
              <div>
                <span class="d-block fw-medium fs-14 mb-1"
                  >Software Engineer (June 2014 - Present)</span
                >
                <div class="d-flex gap-2 mb-3 flex-wrap">
                  <span class="d-block">Tech Innovations Inc.</span>
                  <div class="mb-0 fs-13 text-muted">
                    <i class="bi bi-geo-alt me-1 align-middle"></i>New York, USA
                  </div>
                </div>
                <div class="fw-semibold mb-2">Key Responsibilities :</div>
                <ol class="list-group border-0 list-bullets">
                  <li class="border-0 py-1">Develop and maintain web applications.</li>
                  <li class="border-0 py-1">Collaborate with cross-functional teams.</li>
                  <li class="border-0 py-1">
                    Write clean and scalable code using JavaScript, React, and Node.js.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div class="p-4">
            <div class="d-flex align-items-start gap-3">
              <div>
                <span class="avatar avatar-xl bg-light">
                  <BaseImg src="/images/company-logos/4.png" alt="" />
                </span>
              </div>
              <div>
                <div class="fw-medium fs-14 mb-1">Junior Developer (May 2012 - May 2014)</div>
                <div class="d-flex gap-2 mb-3 flex-wrap">
                  <div>CodeLabs Pvt Ltd.</div>
                  <div class="mb-0 fs-13 text-muted">
                    <i class="bi bi-geo-alt me-1"></i>San Francisco, USA
                  </div>
                </div>
                <div class="fw-medium mb-2">Key Responsibilities :</div>
                <ol class="list-group border-0 list-bullets">
                  <li class="border-0 py-1">
                    Assisted in designing and developing software solutions.
                  </li>
                  <li class="border-0 py-1">Wrote unit tests and ensured software stability.</li>
                  <li class="border-0 py-1">Supported senior developers in various projects.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-4">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Personal Information</div>
        </div>
        <div class="card-body">
          <ul class="list-unstyled candidate-personal-info-list">
            <li v-for="idx in CandidateData.PersonalInfoList" :key="idx.id">
              <div class="d-flex align-items-start gap-2 justify-content-between">
                <span class="d-block text-muted d-inline-flex align-items-center"
                  ><i :class="`ti ${idx.icon} me-2 align-middle fs-16`"></i>{{ idx.label }}</span
                >
                <span
                  :class="`fw-medium d-block text-end ${idx.valueClass ? '' : 'text-truncate adress-per'}  `"
                  >{{ idx.value }}</span
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Skills</div>
        </div>
        <div class="card-body">
          <ul class="list-unstyled job-candidate-skills-list">
            <li v-for="idx in CandidateData.Skills" :key="idx.id">
              <div class="d-flex align-items-center justify-content-between mb-1">
                <span class="d-block">
                  {{ idx.name }}
                </span>
                <span class="d-block fw-medium">{{ idx.progress }}%</span>
              </div>
              <div
                class="progress progress-xs progress-animate"
                role="progressbar"
                :aria-valuenow="idx.progress"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  :class="`progress-bar progress-bar-striped bg-${idx.color}`"
                  :style="`width: ${idx.progress}%`"
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="card custom-card overflow-hidden">
        <div class="card-header">
          <div class="card-title">Portfolio</div>
        </div>
        <div class="card-body d-flex flex-wrap gap-2">
          <div class="btn-list">
            <a
              href="javascript:void(0);"
              v-for="idx in CandidateData.SocialLinks"
              :key="idx.id"
              :class="`btn btn-${idx.buttonClass} btn-icon rounded-circle`"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              :data-bs-title="idx.title"
            >
              <i :class="`ti ti-${idx.iconClass}`"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-2 -->
</template>

<style scoped>
/* Add your styles here */
</style>
