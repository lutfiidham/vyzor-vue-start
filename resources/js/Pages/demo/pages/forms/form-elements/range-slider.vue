<script setup>
import { Head } from '@inertiajs/vue3'
import { defineAsyncComponent, ref } from 'vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
// import 'VueSlider-component/theme/default.css'
import * as prism from '@/shared/data/prismCode/forms/formelements/range-slider'
import ShowcodeCard from '../../../../../../UI/showcodeCard.vue'

const VueSlider = defineAsyncComponent(() => import('vue-3-slider-component'))

const dataToPass = {
  title: 'Forms',
  subtitle: 'Form Elements',
  currentpage: 'Range Slider',
  activepage: 'Range Slider',
}
const square = 0
const syncMultivalue = 10
const customvalue = 50
const customvalue1 = 30
const customvalue2 = 60
const customvalue3 = 80
const customvalue4 = 20
const customvalue5 = 50
const syncMultiinDragging = ref(false)
const limitRange = [0, 30]
const customTooltip = 0
const dotTooltips = [0, 50, 100]
const diffTolltips = [0, 50]
const customformatter = '{value}%'
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
const colored = [0, 30, 50, 70, 100]
function coloredprocess(dotsPos) {
  return [
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
}
const customLabeldata = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const customLabel = 'a'
const independentValue = [0, 50]
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
const labelSlotValue = 0
const labelSlotmarks = val => val % 20 === 0
const stepSlotValue = 0
const stepSlotMarks = val => val % 20 === 0
const formatter2 = v => `${(`${v}`).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
</script>

<template>
  <Head title="Range-Sliders | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <ShowcodeCard :code="prism.defaultRange" title="Default Range">
        <input id="customRange1" type="range" class="form-range">
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard :code="prism.disabledRange" title="Disabled Range">
        <input id="disabledRange" type="range" class="form-range" disabled>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard :code="prism.rangeWithMinAndMaxValues" title=" Range With Min and Max Values">
        <input id="customRange2" type="range" class="form-range" min="0" max="5">
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard :code="prism.rangeWithSteps" title="Range With Steps">
        <input id="customRange3" type="range" class="form-range" min="0" max="5" step="0.5">
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <h6 class="mb-3">
    noUiSlider:
  </h6>
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Default-Styling
          </div>
        </div>
        <div class="card-body">
          <VueSlider tooltip="none" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Limit distance between sliders
          </div>
        </div>
        <div class="card-body">
          <VueSlider v-model="limitRange" :min-range="20" :max-range="50" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Slide with custom Tooltip
          </div>
        </div>
        <div class="card-body">
          <VueSlider v-model="customTooltip" :tooltip-formatter="customformatter" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Square Styling
          </div>
        </div>
        <div class="card-body custom-range">
          <VueSlider
            v-model="square"
            tooltip="none"
            :process-style="{ backgroundColor: 'pink' }"
            :tooltip-style="{ backgroundColor: 'pink', borderColor: 'pink' }"
          >
            <template #dot="{ value, focus }">
              <div class="custom-dot" :class="[{ focus }]" />
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
          <div class="card-title">
            Sync Multi component Sliders
          </div>
        </div>
        <div class="card-body">
          <VueSlider
            v-for="n in 2"
            :key="n"
            v-model="syncMultivalue"
            class="mb-3"
            :duration="syncMultiinDragging ? 0 : 0.5"
            @drag-start="() => (syncMultiinDragging = true)"
            @drag-end="() => (syncMultiinDragging = false)"
          />
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              Label slot
            </div>
          </div>
          <div class="card-body">
            <VueSlider v-model="labelSlotValue" :marks="labelSlotmarks" class="mb-3">
              <template #label="{ label, active }">
                <div class="VueSlider-mark-label custom-label" :class="[{ active }]">
                  {{ label }}
                </div>
              </template>
            </VueSlider>
          </div>
        </div>
      </div>
      <div class="col-xl-12">
        <div class="card custom-card">
          <div class="card-header">
            <div class="card-title">
              Step slot
            </div>
          </div>
          <div class="card-body">
            <VueSlider v-model="stepSlotValue" :marks="stepSlotMarks" class="mb-3">
              <template #step="{ label, active }">
                <div class="custom-step" :class="[{ active }]" />
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
              <div class="card-title">
                tooltips slider
              </div>
            </div>
            <div class="card-body">
              <VueSlider v-model="dotTooltips" class="mb-3" :dot-options="dotOptions" />
              <VueSlider
                v-model="diffTolltips"
                class="mb-3"
                tooltip="always"
                :tooltip-placement="['top', 'bottom']"
              />
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
          <div class="card-title">
            Colored Connect Elements
          </div>
        </div>
        <div class="card-body">
          <VueSlider v-model="colored" :process="coloredprocess" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Custom Labels
          </div>
        </div>
        <div class="card-body pb-5">
          <VueSlider
            v-model="customLabel"
            :data="customLabeldata"
            :marks="true"
            class="mb-3"
          />
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
          <div class="card-title">
            Independent slider
          </div>
        </div>
        <div class="card-body pb-5">
          <VueSlider
            v-model="independentValue"
            :order="false"
            tooltip="always"
            :process="false"
            :marks="marks"
            class="my-3"
          >
            <template #tooltip="{ index }">
              <div v-if="index === 1">
                🐰
              </div>
              <div v-else>
                🐢
              </div>
            </template>
          </VueSlider>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-5 -->

  <!-- Start:: row-6 -->
  <h6 class="mb-3">
    noUiSlider Colors:
  </h6>
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Primary
          </div>
        </div>
        <div class="card-body">
          <VueSlider id="primary-colored-slider" v-model="customvalue" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Secondary
          </div>
        </div>
        <div class="card-body">
          <VueSlider id="secondary-colored-slider" v-model="customvalue1" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Warning
          </div>
        </div>
        <div class="card-body">
          <VueSlider id="warning-colored-slider" v-model="customvalue2" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Info
          </div>
        </div>
        <div class="card-body">
          <VueSlider id="info-colored-slider" v-model="customvalue3" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Success
          </div>
        </div>
        <div class="card-body">
          <VueSlider id="success-colored-slider" v-model="customvalue4" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Danger
          </div>
        </div>
        <div class="card-body">
          <VueSlider id="danger-colored-slider" v-model="customvalue5" />
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-6 -->
</template>

<style scoped>
/* Add your styles here */
</style>
