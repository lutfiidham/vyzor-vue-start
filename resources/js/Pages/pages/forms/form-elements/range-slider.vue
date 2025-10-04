<script setup>
import { defineAsyncComponent, ref } from 'vue'
const VueSlider = defineAsyncComponent(() => import('vue-3-slider-component'))
// import 'VueSlider-component/theme/default.css'
import * as prism from '@/shared/data/prismCode/forms/formelements/range-slider'
import Pageheader from '@/components/pageheader/pageheader.vue'
import ShowcodeCard from '../../../../../UI/showcodeCard.vue'
import { Head } from '@inertiajs/vue3'

const dataToPass = {
  title: 'Forms',
  subtitle: 'Form Elements',
  currentpage: 'Range Slider',
  activepage: 'Range Slider',
}
let square = 0
let syncMultivalue = 10
let customvalue = 50
let customvalue1 = 30
let customvalue2 = 60
let customvalue3 = 80
let customvalue4 = 20
let customvalue5 = 50
const syncMultiinDragging = ref(false)
let limitRange = [0, 30]
let customTooltip = 0
let dotTooltips = [0, 50, 100]
let diffTolltips = [0, 50]
let customformatter = '{value}%'
const dotOptions = [
  {
    tooltip: 'always',
  },
  {
    tooltip: 'active',
  },
  {
    tooltip: 'always',
  },
]
let colored = [0, 30, 50, 70, 100]
const coloredprocess = (dotsPos) => [
  [
    dotsPos[0],
    dotsPos[1],
    {
      backgroundColor: '#3FB8AF',
    },
  ],
  [
    dotsPos[1],
    dotsPos[2],
    {
      backgroundColor: '#f5b849',
    },
  ],
  [
    dotsPos[2],
    dotsPos[3],
    {
      backgroundColor: '#3FB8AF',
    },
  ],
  [
    dotsPos[3],
    dotsPos[4],
    {
      backgroundColor: '#eb533c',
    },
  ],
]
let customLabeldata = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
let customLabel = 'a'
let independentValue = [0, 50]
const marks = {
  100: {
    label: '🏁',
    labelStyle: {
      left: '100%',
      top: '0',
      transform: 'translateY(-150%) translateX(-50%)',
    },
  },
}
let labelSlotValue = 0
const labelSlotmarks = (val) => val % 20 === 0
let stepSlotValue = 0
const stepSlotMarks = (val) => val % 20 === 0
const formatter2 = (v) => `${('' + v).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
</script>

<template>
  <Head title="Range-Sliders | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <ShowcodeCard :code="prism.defaultRange" title="Default Range">
        <input type="range" class="form-range" id="customRange1" />
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard :code="prism.disabledRange" title="Disabled Range">
        <input type="range" class="form-range" id="disabledRange" disabled />
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard :code="prism.rangeWithMinAndMaxValues" title=" Range With Min and Max Values">
        <input type="range" class="form-range" min="0" max="5" id="customRange2" />
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard :code="prism.rangeWithSteps" title="Range With Steps">
        <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3" />
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <h6 class="mb-3">noUiSlider:</h6>
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Default-Styling</div>
        </div>
        <div class="card-body">
          <VueSlider :tooltip="'none'" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Limit distance between sliders</div>
        </div>
        <div class="card-body">
          <VueSlider v-model="limitRange" :min-range="20" :max-range="50"></VueSlider>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Slide with custom Tooltip</div>
        </div>
        <div class="card-body">
          <VueSlider v-model="customTooltip" :tooltip-formatter="customformatter"></VueSlider>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Square Styling</div>
        </div>
        <div class="card-body custom-range">
          <VueSlider
            v-model="square"
            :tooltip="'none'"
            :process-style="{ backgroundColor: 'pink' }"
            :tooltip-style="{ backgroundColor: 'pink', borderColor: 'pink' }"
          >
            <template v-slot:dot="{ value, focus }">
              <div :class="['custom-dot', { focus }]"></div>
            </template>
          </VueSlider>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Sync Multi component Sliders</div>
        </div>
        <div class="card-body">
          <VueSlider
            class="mb-3"
            v-for="n in 2"
            :key="n"
            v-model="syncMultivalue"
            :duration="syncMultiinDragging ? 0 : 0.5"
            @drag-start="() => (syncMultiinDragging = true)"
            @drag-end="() => (syncMultiinDragging = false)"
          ></VueSlider>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">Label slot</div>
          </div>
          <div class="card-body">
            <VueSlider v-model="labelSlotValue" :marks="labelSlotmarks" class="mb-3">
              <template v-slot:label="{ label, active }">
                <div :class="['VueSlider-mark-label', 'custom-label', { active }]">{{ label }}</div>
              </template>
            </VueSlider>
          </div>
        </div>
      </div>
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">Step slot</div>
          </div>
          <div class="card-body">
            <VueSlider v-model="stepSlotValue" :marks="stepSlotMarks" class="mb-3">
              <template v-slot:step="{ label, active }">
                <div :class="['custom-step', { active }]"></div>
              </template>
            </VueSlider>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">tooltips slider</div>
            </div>
            <div class="card-body">
              <VueSlider class="mb-3" v-model="dotTooltips" :dot-options="dotOptions"></VueSlider>
              <VueSlider
                class="mb-3"
                v-model="diffTolltips"
                :tooltip="'always'"
                :tooltip-placement="['top', 'bottom']"
              ></VueSlider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-3 -->

  <!-- Start:: row-4 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card colored-range-slider">
        <div class="card-header">
          <div class="card-title">Colored Connect Elements</div>
        </div>
        <div class="card-body">
          <VueSlider v-model="colored" :process="coloredprocess"></VueSlider>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Custom Labels</div>
        </div>
        <div class="card-body pb-5">
          <VueSlider
            v-model="customLabel"
            :data="customLabeldata"
            :marks="true"
            class="mb-3"
          ></VueSlider>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-4 -->

  <!-- Start:: row-5 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Independent slider</div>
        </div>
        <div class="card-body pb-5">
          <VueSlider
            v-model="independentValue"
            :order="false"
            :tooltip="'always'"
            :process="false"
            :marks="marks"
            class="my-3"
          >
            <template #tooltip="{ index }">
              <div v-if="index === 1">🐰</div>
              <div v-else>🐢</div>
            </template>
          </VueSlider>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-5 -->

  <!-- Start:: row-6 -->
  <h6 class="mb-3">noUiSlider Colors:</h6>
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Primary</div>
        </div>
        <div class="card-body">
          <VueSlider v-model="customvalue" id="primary-colored-slider"></VueSlider>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Secondary</div>
        </div>
        <div class="card-body">
          <VueSlider v-model="customvalue1" id="secondary-colored-slider"></VueSlider>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Warning</div>
        </div>
        <div class="card-body">
          <VueSlider v-model="customvalue2" id="warning-colored-slider"></VueSlider>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Info</div>
        </div>
        <div class="card-body">
          <VueSlider v-model="customvalue3" id="info-colored-slider"></VueSlider>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Success</div>
        </div>
        <div class="card-body">
          <VueSlider v-model="customvalue4" id="success-colored-slider"></VueSlider>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Danger</div>
        </div>
        <div class="card-body">
          <VueSlider v-model="customvalue5" id="danger-colored-slider"></VueSlider>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-6 -->
</template>

<style scoped>
/* Add your styles here */
</style>
