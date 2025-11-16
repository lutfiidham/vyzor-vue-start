// app.js

import { createInertiaApp, router } from '@inertiajs/vue3'
// Import Bootstrap JS
import * as bootstrap from 'bootstrap'
import { createApp, h } from 'vue'
import maindashboard from '@/layouts/maindashboard.vue'
import plugins from './plugins'
import './bootstrap'
import '../css/app.scss'
import '../css/scss/switcher.scss'
import '../css/checkbox-improvements.css'

import '@mdi/font/css/materialdesignicons.css'

window.bootstrap = bootstrap

// Progress bar for page transitions
router.on('start', () => {
  const loader = document.createElement('div')
  loader.id = 'page-loader'
  loader.style.cssText = 'position:fixed;top:0;left:0;width:0;height:3px;background:#4361ee;z-index:99999;transition:width 0.3s ease'
  document.body.appendChild(loader)
  setTimeout(() => loader.style.width = '70%', 50)
})

router.on('finish', () => {
  const loader = document.getElementById('page-loader')
  if (loader) {
    loader.style.width = '100%'
    setTimeout(() => loader.remove(), 300)
  }
})

createInertiaApp({
  title: (title) => {
    const appName = window._appName || 'Vyzor'

    return title ? `${title} - ${appName}` : appName
  },
  resolve: (name) => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    const page = pages[`./Pages/${name}.vue`].default

    if (!page.layout) {
      page.layout = maindashboard
    }

    return page
  },
  setup({ el, App, props, plugin }) {
    // Store app name globally for title callback
    window._appName = props.initialPage.props.settings?.app_name || 'Vyzor'

    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(plugins)
      .mount(el)
  },
})
