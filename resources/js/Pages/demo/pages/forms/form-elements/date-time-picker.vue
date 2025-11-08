<script setup>
import { startOfQuarter } from 'date-fns'
import { ref } from 'vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import { Head } from '@inertiajs/vue3'
const picked = ref(new Date())
const picked2 = ref(new Date())
const lowerpicked = new Date(picked2.value)
const picked3 = ref(new Date())
const picked4 = ref(new Date())
const picked5 = ref(new Date())
const date = ref()
const date1 = ref()

const quarter = ref(startOfQuarter(new Date()))
// Get the day of the month
const currentDay = picked.value.getDate()

const time = ref({
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
})
const month = ref({
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
})
// Calculate the date of the next 5th day
const picked1 = new Date(picked.value)
picked1.setDate(currentDay + 5)
lowerpicked.setDate(currentDay - 5)
const startDate = new Date()
const endDate = new Date(new Date().setDate(startDate.getDate() + 7))
date.value = [startDate, endDate]
date1.value = [startDate, endDate]

const weekPicker = ref()
const inlinedate = ref(new Date())

const dataToPass = {
  title: 'Forms',
  subtitle: 'Form Elements',
  currentpage: 'Date & Time Pickers',
  activepage: 'Date & Time Pickers',
}
</script>

<template>
  <Head title="date-Time | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Basic Date picker</div>
        </div>
        <div class="card-body">
          <div class="form-group">
            <div class="input-group salesDatePicker">
              <div class="input-group-text text-muted"><i class="ri-calendar-line"></i></div>
              <Datepicker
                class="form-control custom-date-picker custom"
                autoApply
                placeholder="Choose date"
                v-model="picked"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Lower Limit Date</div>
        </div>
        <div class="card-body">
          <div class="form-group">
            <div class="input-group flex-nowrap input-group-custom">
              <div class="input-group-text text-muted"><i class="ri-calendar-line"></i></div>
              <Datepicker
                class="form-control custom-date-picker custom"
                autoApply
                placeholder="Choose date"
                :lowerLimit="picked"
                v-model="picked2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Upper Limit picker</div>
        </div>
        <div class="card-body">
          <div class="form-group">
            <div class="input-group flex-nowrap input-group-custom">
              <div class="input-group-text text-muted"><i class="ri-calendar-line"></i></div>
              <Datepicker
                class="form-control custom-date-picker custom"
                autoApply
                placeholder="Choose date"
                :upperLimit="picked1"
                v-model="picked3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">input Format dates</div>
        </div>
        <div class="card-body">
          <div class="form-group">
            <div class="input-group flex-nowrap input-group-custom">
              <div class="input-group-text text-muted"><i class="ri-calendar-line"></i></div>
              <Datepicker
                class="form-control custom-date-picker custom"
                autoApply
                placeholder="Choose date"
                v-model="picked4"
                inputFormat="dd-MM-yyyy"
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
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Basic Date and Time picker</div>
        </div>
        <div class="card-body">
          <div class="form-group">
            <div class="input-group input-group-custom">
              <div class="input-group-text text-muted"><i class="ri-calendar-line"></i></div>
              <Datepicker
                autoApply
                placeholder="Date Time"
                class="form-control datepicker-here custom-date-picker"
                v-model="picked5"
                time-picker-inline
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Range Picker</div>
        </div>
        <div class="card-body">
          <div class="form-group">
            <div class="input-group input-group-custom">
              <div class="input-group-text text-muted"><i class="ri-calendar-line"></i></div>
              <Datepicker
                placeholder="Date Time"
                class="form-control datepicker-here custom-date-picker custom"
                autoApply
                v-model="date"
                range
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Time Picker</div>
        </div>
        <div class="card-body">
          <div class="form-group">
            <div class="input-group input-group-custom">
              <div class="input-group-text text-muted"><i class="ri-calendar-line"></i></div>
              <Datepicker
                placeholder="Date Time"
                class="form-control datepicker-here custom-date-picker"
                autoApply
                time-picker
                v-model="time"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Month Picker</div>
        </div>
        <div class="card-body">
          <div class="form-group">
            <div class="input-group input-group-custom">
              <div class="input-group-text text-muted"><i class="ri-calendar-line"></i></div>
              <Datepicker
                placeholder="Date Time"
                class="form-control datepicker-here custom-date-picker"
                autoApply
                v-model="month"
                month-picker
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Quarter Picker</div>
            </div>
            <div class="card-body">
              <div class="form-group mb-0">
                <div class="input-group input-group-custom">
                  <div class="input-group-text text-muted"><i class="ri-calendar-line"></i></div>
                  <Datepicker
                    v-model="quarter"
                    autoApply
                    class="form-control custom-date-picker"
                    quarter-picker
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">Multi Calendars</div>
            </div>
            <div class="card-body">
              <div class="form-group mb-0">
                <div class="input-group input-group-custom">
                  <div class="input-group-text text-muted"><i class="ri-calendar-line"></i></div>
                  <Datepicker
                    v-model="date1"
                    range
                    multi-calendars
                    autoApply
                    class="form-control custom-date-picker custom"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Inline Calendar</div>
        </div>
        <div class="card-body">
          <div class="form-group overflow-auto">
            <Datepicker class="datepicker-here" inline autoApply v-model="inlinedate">
              <template #input-icon>
                <div class="input-group-text text-muted">
                  <i class="ri-calendar-line"></i>
                </div> </template
            ></Datepicker>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-3 -->
</template>

<style scoped>
/* Add your styles here */
</style>
