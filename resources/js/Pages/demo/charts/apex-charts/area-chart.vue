<script setup>
import * as areaData from '@/shared/data/apexcharts/apexchart-area'
import { ref } from 'vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'
import ApexCharts from 'apexcharts'

const dataToPass = {
  title: 'Charts',
  subtitle: 'Apex Charts',
  currentpage: 'Apex Area Charts',
  activepage: 'Apex Area Charts',
}

const selection = ref('one_year')

const updateData = (timeline) => {
  selection.value = timeline

  switch (timeline) {
    case 'one_month':
      ApexCharts.exec(
        'area-datetime',
        'zoomX',
        new Date('28 Jan 2013').getTime(),
        new Date('27 Feb 2013').getTime()
      )
      break
    case 'six_months':
      ApexCharts.exec(
        'area-datetime',
        'zoomX',
        new Date('27 Sep 2012').getTime(),
        new Date('27 Feb 2013').getTime()
      )
      break
    case 'one_year':
      ApexCharts.exec(
        'area-datetime',
        'zoomX',
        new Date('27 Feb 2012').getTime(),
        new Date('27 Feb 2013').getTime()
      )
      break
    case 'ytd':
      ApexCharts.exec(
        'area-datetime',
        'zoomX',
        new Date('01 Jan 2013').getTime(),
        new Date('27 Feb 2013').getTime()
      )
      break
    case 'all':
      ApexCharts.exec(
        'area-datetime',
        'zoomX',
        new Date('23 Jan 2012').getTime(),
        new Date('27 Feb 2013').getTime()
      )
      break
    default:
      break
  }
}
</script>

<template>
  <Pageheader :propData="dataToPass" />
  <Head title="Area Charts | Vyzor - Laravel & Vue " />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Basic Area Chart</div>
        </div>
        <div class="card-body">
          <div id="area-basic">
            <apexchart
              height="300"
              type="area"
              :options="areaData.Areabasicoptions"
              :series="areaData.Areabasicseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Spline Area Chart</div>
        </div>
        <div class="card-body">
          <div id="area-basic">
            <apexchart
              height="300"
              type="area"
              :options="areaData.Areasplineoptions"
              :series="areaData.Areasplineseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Area Chart With Negative Values</div>
        </div>
        <div class="card-body">
          <div id="area-basic">
            <apexchart
              height="300"
              type="area"
              :options="areaData.Areavalueoptions"
              :series="areaData.Areavalueseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Selection-Github Style Chart</div>
        </div>
        <div class="card-body">
          <div id="area-basic">
            <apexchart
              height="120"
              type="area"
              :options="areaData.Areagithuboptions"
              :series="areaData.Areagithubseries"
            />
          </div>
          <div class="github-style d-flex align-items-center">
            <div class="me-2">
              <BaseImg
                class="userimg rounded"
                src="/images/faces/1.jpg"
                alt=""
                width="38"
                height="38"
              />
            </div>
            <div class="userdetails lh-1">
              <a class="username fw-medium fs-14">coder</a>
              <span class="cmeta d-block mt-1"> <span class="commits">95</span> commits </span>
            </div>
          </div>
          <div id="area-basic">
            <apexchart
              height="126"
              type="area"
              :options="areaData.optionsYears"
              :series="areaData.seriesYears"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Stacked Area Chart</div>
        </div>
        <div class="card-body">
          <div id="area-basic">
            <apexchart
              height="350"
              type="area"
              :options="areaData.Areastackoptions"
              :series="areaData.Areastackseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Irregular Time Series Chart</div>
        </div>
        <div class="card-body">
          <div id="area-basic">
            <apexchart
              height="350"
              type="area"
              :options="areaData.Areatimeoptions"
              :series="areaData.Areatimeseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Area Chart With Null Values</div>
        </div>
        <div class="card-body">
          <div id="area-basic">
            <apexchart
              height="350"
              type="area"
              :options="areaData.Areanulloptions"
              :series="areaData.Areanullseries"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header d-flex">
          <div class="card-title">Area Chart-Datetime X-Axis Chart</div>
          <div class="btn-group ms-auto">
            <button class="btn btn-primary btn-sm" id="one_month" @click="updateData('one_month')">
              1M
            </button>
            <button
              class="btn btn-primary btn-sm"
              id="six_months"
              @click="updateData('six_months')"
            >
              6M
            </button>
            <button class="btn btn-primary btn-sm" id="one_year" @click="updateData('one_year')">
              1Y
            </button>
            <button class="btn btn-primary btn-sm" id="all" @click="updateData('all')">ALL</button>
          </div>
        </div>
        <div class="card-body">
          <div id="area-basic">
            <apexchart
              height="340"
              type="area"
              :options="areaData.Dateoptions"
              :series="areaData.Dateseries"
            />
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
