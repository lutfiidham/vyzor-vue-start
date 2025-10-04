// app.js

import './bootstrap'
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import maindashboard from '@/layouts/maindashboard.vue'
import plugins from './plugins'
import '../css/app.scss'
import '../css/scss/switcher.scss'
import '@mdi/font/css/materialdesignicons.css'
createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    const page = pages[`./Pages/${name}.vue`].default // 👈 Get the actual component

    // 👇 Assign DefaultLayout if no layout is defined
    if (!page.layout) {
      page.layout = maindashboard
    }
    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(plugins)
      .mount(el)
  },
})
