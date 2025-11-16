<script setup>
import { Head } from '@inertiajs/vue3'
import { ref } from 'vue'
import Pageheader from '@/components/pageheader/pageheader.vue'

const picked = ref(null)

const dataToPass = {
  activepage: 'Post Job',
  title: 'Dashboards',
  subtitle: 'Jobs',
  currentpage: 'Post Job',
}
const CategorydataValue = ref('Development')
const ExperiencedataValue = ref('0 - 1 Years')
const JobtypedataValue = ref('Contract')
const PrioritydataValue = ref('Normal')
const VacanciesdataValue = ref('10')
const SalarydataValue = ref('0 - $1,00,000 / Year')
const SkilldataValue = ref(['HTML', 'CSS', 'JavaScript'])
const GenderValue = ref('No Preferences')
const LanguagesdataValue = ref(['English', 'German'])
const QualificationdataValue = ref(['Graduate', 'MBA', 'MCA'])
const EmployerValue = ref('Obligation Pvt.Ltd')
const CountryValue = ref('India')
const Categorydata = ['Development', 'Marketing', 'IT Software']
const Experiencedata = ['0 - 1 Years', '1 - 3 Years', '3 - 5 Years']
const Jobtypedata = ['Contract', 'Freelance', 'Full Time', 'Internship', 'Part Time']
const Prioritydata = ['Normal', 'Urgent']
const Vacanciesdata = ['10', '20', '30', '40']
const Salarydata = [
  '0 - $1,00,000 / Year',
  '$1,00,000 - $3,00,000 / Year',
  '$3,00,000 - $5,00,000 / Year',
]
const Skilldata = ['HTML', 'CSS', 'JavaScript', 'React']
const Gender = ['No Preferences', 'Male Only', 'Female Only', 'React']
const Languagesdata = [
  'English',
  'Spanish',
  'French',
  'German',
  'Chinese',
  'Japanese',
  'Arabic',
  'Portuguese',
]
const Qualificationdata = ['Graduate', 'Diploma', 'MBA', 'MCA']
const EmployerData = [
  'Obligation Pvt.Ltd',
  'Voluptatem Pvt.Ltd',
  'BloomTech.Inc',
  'Spotech Technical Solutions',
]
const CountryData = ['India', 'USA', 'Germany', 'Spain', 'Argentina']
</script>

<template>
  <Head title="Job-Post | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xxl-3 col-xl-4">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Assign To Employer
          </div>
        </div>
        <div class="card-body">
          <div class="col-xl-12">
            <label class="form-label">Employer Name</label>
            <VueMultiselect
              v-model="EmployerValue"
              :searchable="true"
              :show-labels="false"
              name="Category-select"
              :multiple="false"
              :options="EmployerData"
              :taggable="false"
            />
          </div>
        </div>
      </div>
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Company Details
          </div>
        </div>
        <div class="card-body">
          <div class="row gy-3">
            <div class="col-xl-12">
              <label for="Company-Name" class="form-label">Company Name</label>
              <input
                id="Company-Name"
                type="text"
                class="form-control"
                placeholder="Company Name"
                value="Obligation Pvt.Ltd"
              >
            </div>
            <div class="col-xl-12">
              <label for="Company-Website" class="form-label">Company Website</label>
              <input
                id="Company-Website"
                type="text"
                class="form-control"
                placeholder="Company Website"
                value="http//www.obligationpvtltd.com"
              >
            </div>
            <div class="col-xl-12">
              <label class="form-label">Country</label>
              <VueMultiselect
                v-model="CountryValue"
                :searchable="true"
                :show-labels="false"
                name="Category-select"
                :multiple="false"
                :options="CountryData"
                :taggable="false"
              />
            </div>
            <div class="col-xl-12">
              <label for="Company-Address" class="form-label">Address</label>
              <input
                id="Company-Address"
                type="text"
                class="form-control"
                placeholder="Company Address"
                value="USA"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-9 col-xl-8">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Post New Job
          </div>
        </div>
        <div class="card-body">
          <div class="row gy-4 mb-4">
            <div class="col-xl-6">
              <label for="job-title" class="form-label">Job Title</label>
              <input
                id="job-title"
                type="text"
                class="form-control"
                placeholder="Job Title"
                value="Web Developer"
              >
            </div>
            <div class="col-xl-6">
              <label class="form-label">Job Category</label>
              <VueMultiselect
                v-model="CategorydataValue"
                :searchable="true"
                :show-labels="false"
                name="Category-select"
                :multiple="false"
                :options="Categorydata"
                :taggable="false"
              />
            </div>
            <div class="col-xl-6">
              <label class="form-label">Working Experience</label>
              <VueMultiselect
                v-model="ExperiencedataValue"
                :searchable="true"
                :show-labels="false"
                name="experience"
                :multiple="false"
                :options="Experiencedata"
                :taggable="false"
              />
            </div>
            <div class="col-xl-6">
              <label class="form-label">Job Type</label>
              <VueMultiselect
                v-model="JobtypedataValue"
                :searchable="true"
                :show-labels="false"
                name="jobtype"
                :multiple="false"
                :options="Jobtypedata"
                :taggable="false"
              />
            </div>
            <div class="col-xl-6">
              <label class="form-label">Priority</label>
              <VueMultiselect
                v-model="PrioritydataValue"
                :searchable="true"
                :show-labels="false"
                name="Category-select"
                :multiple="false"
                :options="Prioritydata"
                :taggable="false"
              />
            </div>
            <div class="col-xl-6">
              <label class="form-label">Vacancies</label>
              <VueMultiselect
                v-model="VacanciesdataValue"
                :searchable="true"
                :show-labels="false"
                name="Category-select"
                :multiple="false"
                :options="Vacanciesdata"
                :taggable="false"
              />
            </div>
            <div class="col-xl-6">
              <label class="form-label">Salary</label>
              <VueMultiselect
                v-model="SalarydataValue"
                :searchable="true"
                :show-labels="false"
                name="Salary"
                :multiple="false"
                :options="Salarydata"
                :taggable="false"
              />
            </div>
            <div class="col-xl-6">
              <label for="skills" class="form-label">Skills :</label>
              <VueMultiselect
                id="skills"
                v-model="SkilldataValue"
                :searchable="true"
                :show-labels="false"
                name="skills"
                :multiple="true"
                :options="Skilldata"
                :taggable="false"
              />
            </div>
            <div class="col-xl-6">
              <label for="job-deadline" class="form-label">Job Deadline</label>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-text text-muted">
                    <i class="ri-calendar-line" />
                  </div>
                  <Datepicker
                    v-model="picked"
                    placeholder="Job Deadline"
                    class="form-control datepicker-here custom-date-picker"
                    auto-apply
                    :enable-time-picker="false"
                  />
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <label class="form-label">Gender Requirement</label>
              <VueMultiselect
                v-model="GenderValue"
                :searchable="true"
                :show-labels="false"
                name="Salary"
                :multiple="false"
                :options="Gender"
                :taggable="false"
              />
            </div>
            <div class="col-xl-6">
              <label for="language" class="form-label">Languages :</label>
              <VueMultiselect
                v-model="LanguagesdataValue"
                :searchable="true"
                :show-labels="false"
                name="Category-select"
                :multiple="true"
                :options="Languagesdata"
                :taggable="false"
              />
            </div>
            <div class="col-xl-6">
              <label for="qualification" class="form-label">Qualification :</label>
              <VueMultiselect
                id="qualification"
                v-model="QualificationdataValue"
                :searchable="true"
                :show-labels="false"
                name="Qualification"
                :multiple="true"
                :options="Qualificationdata"
                :taggable="false"
              />
            </div>
            <div class="col-xl-12">
              <label for="job-description" class="form-label">Job Description :</label>
              <textarea id="job-description" class="form-control" rows="4">
Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!</textarea>
            </div>
          </div>
        </div>
        <div class="card-footer text-end">
          <a href="javascript:void(0);" class="btn btn-primary btn-wave waves-effect waves-light">
            <i class="bi bi-plus-circle" /> Post Job
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
