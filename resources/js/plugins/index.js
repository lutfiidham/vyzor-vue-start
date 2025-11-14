import { defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'

import { vMaska } from 'maska/vue'

import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/style.css'

import Vue3ColorPicker from 'vue3-colorpicker'
import 'vue3-colorpicker/style.css'

import DropZone from 'dropzone-vue'
import 'dropzone-vue/dist/dropzone-vue.common.css'

import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import VueSweetalert2 from 'vue-sweetalert2'

import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'

import { Countdown } from 'vue3-flip-countdown'

import CountUp from 'vue-countup-v3'

import VueMultiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'

import VueCountdown from '@chenfengyuan/vue-countdown'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// VueEditor removed due to security vulnerabilities - consider using @tinymce/tinymce-vue or @ckeditor/ckeditor5-vue

const Particles = defineAsyncComponent(() => import('@tsparticles/vue3'))

import { loadFull } from 'tsparticles'

import SmartTable from 'vuejs-smart-table'

const VueApexCharts = defineAsyncComponent(() => import('vue3-apexcharts'))

import Vue3Tour from 'vue3-tour'
import 'vue3-tour/dist/vue3-tour.css'

import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/maps/world-merc.js'
import 'jsvectormap/dist/maps/world.js'
import 'jsvectormap/dist/jsvectormap.css'

// Vuetify setup
const vuetify = createVuetify({
  ssr: false,
  components,
  directives,
})

// Pinia store
const pinia = createPinia()

export default {
  install(app) {
    // Third-party plugins
    app.use(PerfectScrollbarPlugin)
    app.use(Vue3ColorPicker)
    app.use(DropZone)
    app.use(VueSweetalert2)
    app.use(Vue3Tour)
    app.directive('maska', vMaska)
    // Particle effects
    app.use(Particles, {
      init: async (engine) => {
        await loadFull(engine)
      },
    })
    // toast
    app.config.globalProperties.$toast = toast

    // Vuetify UI
    app.use(vuetify)

    app.use(SmartTable)

    // Register global components
    app.component('apexchart', VueApexCharts)
    app.component('Datepicker', Datepicker)
    app.component('EasyDataTable', Vue3EasyDataTable)
    app.component('jsVectorMap', jsVectorMap)
    app.component('Countdown', Countdown)
    app.component('VueMultiselect', VueMultiselect)
    app.component(VueCountdown.name, VueCountdown)
    // VueEditor component removed due to security vulnerabilities
    app.component('count-up', CountUp)
    // Pinia store
    app.use(pinia)
  },
}
