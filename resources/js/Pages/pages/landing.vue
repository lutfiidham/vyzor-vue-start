<script setup>
import { ref, onMounted, onBeforeUnmount, reactive } from 'vue'
import { Tooltip, Popover, Offcanvas } from 'bootstrap'
import BaseImg from '../../components/Baseimage/BaseImg.vue';
import SwiperjsCardComponent from "@/shared/@spk/swiperjs-cards.vue"
import * as LandinData from '@/shared/data/pages/landingdata';
import {
    BasicPricing1data,
    BasicPricingdata
} from '@/shared/data/pages/pricingdata';
import {
    CustomReviews
} from '@/shared/data/pages/testimonialsdata';
import {
    TeamMembers
} from '@/shared/data/pages/teamdata';
import SpkClientsSwiper from '@/shared/@spk/pages/landingpage/spk-clientsSwiper.vue';
import SpkBasicpricecard from '@/shared/@spk/pages/pricing/spk-basicpricecard.vue';
import TestimonialsStyles2 from '@/shared/@spk/pages/testimonials/TestimonialsStyles2.vue';
import SpkReusableTeamCard from '@/shared/@spk/pages/spk-reusable-teamCard.vue';
import { Head, Link } from '@inertiajs/vue3';
import landingpage from '@/layouts/landingpage.vue';
const baseUrl = __BASE_PATH__

defineOptions({
    layout: landingpage,
})

// Reactive states
const expande = ref(false)
const expande1 = ref(false)
const expande2 = ref(false)
const isActive = ref(false)
const sideMenuItems = ref([])
const activeLink = ref('')

const windowWidth = ref(window.innerWidth)
const currentYear = new Date().getFullYear()

// Bootstrap instances storage
let tooltipInstances = []
let popoverInstances = []
let offcanvasInstance = null

// Methods
function toggleNavigation() {
    const html = document.querySelector('html')
    if (!html) return
    if (window.innerWidth <= 992) {
        const dataToggled = html.getAttribute('data-toggled')
        html.setAttribute('data-toggled', dataToggled === 'open' ? 'close' : 'open')
    }
}

function menuClose() {
    const html = document.querySelector('html')
    if (!html) return

    if (window.innerWidth <= 992) {
        html.setAttribute('data-toggled', 'close')
    }
    // Remove overlay active class if exists
    const overlayElement = document.querySelector('.overlayElementRef')
    overlayElement?.classList.remove('active')
}

function handleResize() {
    const html = document.querySelector('html')
    if (!html) return

    if (window.innerWidth <= 992) {
        html.setAttribute('data-toggled', 'close')
        html.setAttribute('data-nav-layout', 'horizontal')
    } else {
        html.setAttribute('data-toggled', 'open')
        html.setAttribute('data-nav-layout', 'horizontal')
    }
}


function handleClick1() {
    const html = document.querySelector('html')
    expande.value = false
    expande1.value = false
    expande2.value = false
    if (html) {
        html.setAttribute('data-toggled', 'close')
        html.setAttribute('data-nav-layout', 'horizontal')
    }
}

function handleClick(e) {
    e.preventDefault()
    const target = (e.currentTarget).getAttribute('href')
    if (!target) return

    const el = document.getElementById(target.substring(1))
    if (el) {
        window.scrollTo({
            top: el.offsetTop - 64,
            left: 0,
            behavior: 'smooth',
        })
    }
}

function toggleExpand() {
    expande.value = !expande.value
}

function handleSubMenuToggle1() {
    expande1.value = !expande1.value
}

function handleSubMenuToggle2() {
    expande2.value = !expande2.value
}

function handleLinkClick(link) {
  activeLink.value = link
  // optional: scroll smoothly to the section
  const section = document.getElementById(link)
  if (section) {
    window.scrollTo({ top: section.offsetTop - 70, behavior: 'smooth' })
  }
}

// function onScroll() {
//     const sections = document.querySelectorAll('.side-menu__item')
//     const scrollPos =
//         window.scrollY ||
//         document.documentElement.scrollTop ||
//         (document.querySelector('body')?.scrollTop ?? 0)

//     sections.forEach(elem => {
//         const value = elem.getAttribute('href') ?? ''
//         const fragmentIndex = value.indexOf('#')
//         const fragment = fragmentIndex !== -1 ? value.substring(fragmentIndex + 1) : ''

//         if (fragment) {
//             const refElement = document.getElementById(fragment)
//             if (refElement) {
//                 const scrollTopMinus = scrollPos + 73
//                 if (
//                     refElement.offsetTop <= scrollTopMinus &&
//                     refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
//                 ) {
//                     elem.classList.add('active')
//                 } else {
//                     elem.classList.remove('active')
//                 }
//             }
//         }
//     })
// }

// This function updates activeLink based on scroll position
function onScroll() {
  const scrollPos = window.scrollY + 73

  sideMenuItems.value.forEach(elem => {
    const href = elem.getAttribute('href')
    const fragment = href?.substring(1)
    const sectionEl = document.getElementById(fragment)
    if (!sectionEl) return

    if (sectionEl.offsetTop <= scrollPos && sectionEl.offsetTop + sectionEl.offsetHeight > scrollPos) {
      activeLink.value = fragment
    }
  })
}

onMounted(() => {
    // Setup tooltips
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
        if (!Tooltip.getInstance(el)) {
            tooltipInstances.push(new Tooltip(el))
        }
    })

    // Setup popovers
    document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
        if (!Popover.getInstance(el)) {
            popoverInstances.push(new Popover(el))
        }
    })

    // Window event listeners
    window.addEventListener('resize', toggleNavigation)
    window.addEventListener('resize', menuClose)
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', onScroll)

    const html = document.querySelector('html')
    if (!html) return

      if (window.innerWidth <= 992) {
        html.setAttribute('data-toggled', 'close')
    } else {
        html.setAttribute('data-toggled', 'open')
    }

    html.setAttribute('data-nav-style', 'menu-click')
    html.setAttribute('data-nav-layout', 'horizontal')
    html.setAttribute('data-menu-styles', '')
    html.setAttribute('data-vertical-style', '')
    html.setAttribute('data-width', '')

    if (localStorage.getItem('vyzorMenu') === 'light') {
        html.setAttribute('data-menu-styles', 'light')
    }

    offcanvasInstance = new Offcanvas(document.body, {
        selector: '[data-bs-toggle="offcanvas"]',
    })
})

onBeforeUnmount(() => {
    // Dispose tooltips and popovers
    tooltipInstances.forEach(i => i.dispose())
    tooltipInstances = []

    popoverInstances.forEach(i => i.dispose())
    popoverInstances = []

    // Remove event listeners
    window.removeEventListener('resize', toggleNavigation)
    window.removeEventListener('resize', menuClose)
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('scroll', onScroll)

    // Cleanup html attributes
    const html = document.querySelector('html')
    if (!html) return

    html.setAttribute('data-nav-style', '')
    html.setAttribute('data-vertical-style', '')

    if (localStorage.getItem('vyzornavstyles') === 'horizontal') {
        html.setAttribute('data-nav-layout', 'horizontal')
    } else {
        html.setAttribute('data-nav-layout', 'vertical')
    }

    // Remove offcanvas elements
    const offcanvasElements = document.getElementsByClassName('offcanvas')
    Array.from(offcanvasElements).forEach(el => el.remove())
})

const breakpoints1 = reactive({
    320: { slidesPerView: 1, spaceBetween: 10 },
    640: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 1, spaceBetween: 20 },
    1200: { slidesPerView: 2, spaceBetween: 20 },
    1400: { slidesPerView: 2, spaceBetween: 20 },
});

const breakpoints2 = reactive({
    320: {
        slidesPerView: 1,
        spaceBetween: 5,
    },
    640: {
        slidesPerView: 1,
        spaceBetween: 5,
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 5,
    },
    1024: {
        slidesPerView: 5,
        spaceBetween: 20,
    }
})


</script>


<template>

    <Head title="Landing | Vyzor - Laravel & Vue " />
    <div ref="overlayElementRef" id="responsive-overlay" @click="menuClose"></div>
    <div class="landing-page-wrapper">

        <!-- app-header -->
        <header class="app-header sticky-pin" id="header">

            <!-- Start::main-header-container -->
            <div class="main-header-container container-fluid">

                <!-- Start::header-content-left -->
                <div class="header-content-left">

                    <!-- Start::header-element -->
                    <div class="header-element">
                        <div class="horizontal-logo">
                            <Link :href="`${baseUrl}/dashboards/sales`" class="header-logo">
                            <BaseImg src="/images/brand-logos/toggle-logo.png" alt="logo" class="toggle-logo" />
                            <BaseImg src="/images/brand-logos/toggle-dark.png" alt="logo" class="toggle-dark" />

                            </Link>
                        </div>
                    </div>
                    <!-- End::header-element -->

                    <!-- Start::header-element -->
                    <div class="header-element">
                        <!-- Start::header-link -->
                        <a @click="toggleNavigation" href="#!" class="sidemenu-toggle header-link"
                            data-bs-toggle="sidebar">
                            <span class="open-toggle">
                                <i class="ri-menu-3-line fs-20"></i>
                            </span>
                        </a>
                        <!-- End::header-link -->
                    </div>
                    <!-- End::header-element -->

                </div>
                <!-- End::header-content-left -->

                <!-- Start::header-content-right -->
                <div class="header-content-right">

                    <!-- Start::header-element -->
                    <div class="header-element align-items-center">
                        <!-- Start::header-link|switcher-icon -->
                        <div class="btn-list d-lg-none d-flex">
                            <Link :href="`${baseUrl}/pages/authentication/sign-in/basic`" class="btn btn-primary-light">
                            Login / Register
                            </Link>
                            <button
                                class="btn btn-icon btn-success switcher-icon d-flex align-items-center justify-content-center"
                                data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas">
                                <i class="ri-settings-3-line"></i>
                            </button>
                        </div>
                        <!-- End::header-link|switcher-icon -->
                    </div>
                    <!-- End::header-element -->

                </div>
                <!-- End::header-content-right -->

            </div>
            <!-- End::main-header-container -->

        </header>
        <!-- /app-header -->
        <!-- <a href="#!" > -->

        <!-- </a> -->
        <!-- Start::app-sidebar -->
        <aside class="app-sidebar sticky sticky-pin" id="sidebar">

            <div class="container px-0">
                <!-- Start::main-sidebar -->
                <div class="main-sidebar">

                    <!-- Start::nav -->
                    <nav class="main-menu-container nav nav-pills sub-open">
                        <div class="landing-logo-container">
                            <div class="horizontal-logo">
                                <Link :href="`${baseUrl}/dashboards/sales`" class="header-logo">
                                <BaseImg src="/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo" />
                                <BaseImg src="/images/brand-logos/desktop-dark.png" alt="logo" class="desktop-dark" />

                                </Link>
                            </div>
                        </div>
                        <div class="slide-left" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                            </svg></div>
                        <ul class="main-menu">
                            <!-- Start::slide -->
                            <li class="slide">
                                <a :class="`side-menu__item ${activeLink === 'home' ? 'active' : ''}`"
                                    :ref="(el) => el && sideMenuItems.push(el)" href="#home"
                                    @click="handleLinkClick('home')">
                                    <span class="side-menu__label">Home</span>
                                </a>
                            </li>
                            <!-- End::slide -->
                            <!-- Start::slide -->
                            <li class="slide">
                                <a href="#feature" :class="`side-menu__item ${activeLink === 'feature' ? 'active' : ''}`"
                                    :ref="(el) => el && sideMenuItems.push(el)" @click="handleLinkClick('feature')">
                                    <span class="side-menu__label">Features</span>
                                </a>
                            </li>
                            <!-- End::slide -->
                            <!-- Start::slide -->
                            <li class="slide">
                                <a href="#service" :class="`side-menu__item ${activeLink === 'service' ? 'active' : ''}`"
                                    :ref="(el) => el && sideMenuItems.push(el)" @click="handleLinkClick('service')">
                                    <span class="side-menu__label">Services</span>
                                </a>
                            </li>
                            <!-- End::slide -->
                            <!-- Start::slide -->
                            <li :class="`slide has-sub ${expande ? 'open' : ''} `">
                                <a href="javascript:void(0);"
                                    :class="`side-menu__item ${expande ? 'active' : ''} ${isActive ? 'active' : ''} `"
                                    :ref="(el) => el && sideMenuItems.push(el)" @click="toggleExpand">
                                    <span class="side-menu__label me-2">Pages</span>
                                    <i class="fe fe-chevron-right side-menu__angle op-8"></i>
                                </a>
                                <ul :class="`slide-menu child1 ${expande ? 'active' : ''}`"
                                    :style="{ display: expande ? 'block' : 'none' }">
                                    <li class="slide">
                                        <a href="javascript:void(0);" :ref="(el) => el && sideMenuItems.push(el)"
                                            @click="handleLinkClick('services')"
                                            :class="`side-menu__item ${activeLink === 'services' ? 'active' : ''}`">Abous
                                            Us </a>
                                    </li>
                                    <li class="slide">
                                        <a href="javascript:void(0);" :ref="(el) => el && sideMenuItems.push(el)"
                                            @click="handleLinkClick('expectations')"
                                            :class="`side-menu__item ${activeLink === 'expectations' ? 'active' : ''}`">Terms
                                            & Conditions</a>
                                    </li>
                                    <li class="slide">
                                        <a href="javascript:void(0);" :ref="(el) => el && sideMenuItems.push(el)"
                                            @click="handleLinkClick('features')"
                                            :class="`side-menu__item ${activeLink === 'features' ? 'active' : ''}`">Privacy
                                            Policy</a>
                                    </li>
                                    <li :class="`slide has-sub ${expande1 ? 'open' : ''}`">
                                        <a href="javascript:void(0);" :ref="(el) => el && sideMenuItems.push(el)"
                                            @click="handleSubMenuToggle1" class="side-menu__item">Level-2
                                            <i class="fe fe-chevron-right side-menu__angle"></i></a>
                                        <ul :class="`slide-menu child2 ${expande1 ? 'active' : ''}`"
                                            :style="{ display: expande1 ? 'block' : 'none' }">
                                            <li class="slide">
                                                <a href="javascript:void(0);"
                                                    :ref="(el) => el && sideMenuItems.push(el)"
                                                    class="side-menu__item">Level-2-1</a>
                                            </li>
                                            <li :class="`slide has-sub ${expande2 ? 'open' : ''}`">
                                                <a href="javascript:void(0);"
                                                    :ref="(el) => el && sideMenuItems.push(el)"
                                                    @click="handleSubMenuToggle2" class="side-menu__item">Level-2-2
                                                    <i class="fe fe-chevron-right side-menu__angle"></i></a>
                                                <ul :class="`slide-menu child3 ${expande2 ? 'active' : ''}`"
                                                    :style="{ display: expande2 ? 'block' : 'none' }">
                                                    <li class="slide">
                                                        <a href="javascript:void(0);"
                                                            :ref="(el) => el && sideMenuItems.push(el)"
                                                            class="side-menu__item">Level-2-2-1</a>
                                                    </li>
                                                    <li class="slide has-sub">
                                                        <a href="javascript:void(0);"
                                                            :ref="(el) => el && sideMenuItems.push(el)"
                                                            class="side-menu__item">Level-2-2-2</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <!-- End::slide -->
                            <!-- Start::slide -->
                            <li class="slide">
                                <a href="#price" :class="`side-menu__item ${activeLink === 'price' ? 'active' : ''}`"
                                    :ref="(el) => el && sideMenuItems.push(el)" @click="handleLinkClick('price')">
                                    <span class="side-menu__label">Subscription</span>
                                </a>
                            </li>
                            <!-- End::slide -->
                            <!-- Start::slide -->
                            <li class="slide">
                                <a href="#contactus" :class="`side-menu__item ${activeLink === 'contactus' ? 'active' : ''}`"
                                    :ref="(el) => el && sideMenuItems.push(el)" @click="handleLinkClick('contactus')">
                                    <span class="side-menu__label">Contact Us</span>
                                </a>
                            </li>
                            <!-- End::slide -->

                        </ul>
                        <div class="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z">
                                </path>
                            </svg></div>
                        <div class="d-lg-flex d-none">
                            <div class="btn-list d-lg-flex d-none mt-lg-2 mt-xl-0 mt-0">
                                <Link :href="`${baseUrl}/pages/authentication/sign-in/basic`"
                                    class="btn btn-wave btn-primary">
                                Login / Register
                                </Link>
                                <button class="btn btn-icon btn-primary-light switcher-icon" data-bs-toggle="offcanvas"
                                    data-bs-target="#switcher-canvas">
                                    <i class="ri-settings-3-line"></i>
                                </button>
                            </div>
                        </div>
                    </nav>
                    <!-- End::nav -->

                </div>
                <!-- End::main-sidebar -->
            </div>

        </aside>
        <!-- End::app-sidebar -->

        <div class="main-content landing-main" id="home" @click="handleClick1">

            <!-- Start:: Landing Banner -->
            <div class="landing-banner">
                <div class="banner-image-container">
                    <BaseImg src="/images/media/backgrounds/5.png" alt="" />

                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 my-auto">
                            <div
                                class="d-inline-flex align-items-center gap-2 text-default badge bg-white border fs-13 rounded-pill">
                                <span class="avatar avatar-xs avatar-rounded bg-warning"><i
                                        class="ri-flashlight-fill fs-14"></i></span>Seamless Integration
                            </div>
                            <h1 class="fw-semibold mt-3 landing-banner-heading">Track key metrics <br> and <span
                                    class="text-primary">optimize</span> your business</h1>
                            <span class="d-block fs-18">Keep track of important business metrics and optimize processes
                                to drive growth and improve efficiency.</span>
                            <div class="btn-list banner-buttons">
                                <Link :href="`${baseUrl}/dashboards/sales`"
                                    class="btn btn-primary btn-lg rounded-pill btn-w-lg">Get Started
                                for free</Link>
                                <a class="btn btn-lg btn-light border rounded-pill btn-w-lg"
                                    href="javascript:void(0);">View Demo</a>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="banner-main-img text-end d-xl-block d-none">
                                <BaseImg src="/images/media/backgrounds/7.png" alt="" class="img-fluid" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End:: Landing Banner -->

            <!-- Start:: Section-1 -->
            <section class="section">
                <div class="container">
                    <div class="heading-section">
                        <div class="heading-subtitle">Clients</div>
                        <div class="heading-title">Trusted by Leading Companies Worldwide</div>
                        <div class="heading-description">
                            Thousands of businesses trust our solutions <br> to optimize their operations and drive
                            growth.
                        </div>
                    </div>
                    <SwiperjsCardComponent :swiperItems="LandinData.ClientSwiperdata"
                        swiperClass="swiper trusted-clients" :slidesPerView="5" :spaceBetween="20"
                        :breakpoints="breakpoints2" :pagination="false" :navigation="false" :autoplay="true">
                        <template #default="{ card }">
                            <SpkClientsSwiper :card="card" height="25px" width="120px" />
                        </template>
                    </SwiperjsCardComponent>
                </div>
            </section>
            <!-- End:: Section-1 -->

            <!-- Start:: Section-2 -->
            <section class="section" id="feature">
                <div class="container">
                    <div class="heading-section">
                        <div class="heading-subtitle">Features</div>
                        <div class="heading-title">Powerful Features to Streamline Your Workflow</div>
                        <div class="heading-description">
                            Boost productivity and simplify management with our powerful, real-time features.
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-md-6" v-for="(idx) in LandinData.LandingFeatures" :key="idx.id">
                            <div class="card custom-card">
                                <div class="card-body">
                                    <div class="lh-1 mb-3">
                                        <span
                                            :class="`avatar avatar-lg avatar-rounded bg-${idx.bgClass}-transparent svg-${idx.bgClass}`"
                                            v-html="idx.svgIcon"></span>
                                    </div>
                                    <h5 class="fw-semibold">{{ idx.title }}</h5>
                                    <span class="fs-15 text-muted">
                                        {{ idx.description }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End:: Section-2 -->

            <!-- Start:: Section-3 -->
            <section class="section" id="service">
                <div class="container">
                    <div class="heading-section">
                        <div class="heading-subtitle">Services</div>
                        <div class="heading-title">Comprehensive Solutions for Your Business Needs</div>
                        <div class="heading-description">
                            Discover our services to streamline operations, boost productivity, <br> and drive growth,
                            from analytics to automation.
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-7">
                            <div class="row">
                                <div class="col-lg-6" v-for="(idx) in LandinData.ServiceCards" :key="idx.id">
                                    <div :class="`card custom-card landing-services-card ${idx.cardClass}`">
                                        <div class="card-body">
                                            <div class="d-flex align-items-start gap-3">
                                                <div class="lh-1">
                                                    <span
                                                        :class="`avatar avatar-lg avatar-rounded bg-${idx.cardClass}-transparent svg-${idx.cardClass}`"
                                                        v-html="idx.icon"> </span>
                                                </div>
                                                <div>
                                                    <h6 class="d-block fw-semibold">{{ idx.title }}</h6>
                                                    <span class="d-block text-muted">{{ idx.description }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 my-auto">
                            <div class="services-image-container text-end d-xl-block d-none">
                                <BaseImg src="/images/media/media-67.png" alt="" class="img-fluid" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End:: Section-3 -->

            <!-- Start:: Buy Now Section -->
            <section class="section section-md section-primary text-fixed-white py-5 buy-now-section">
                <div class="testimonials-background-container">
                    <BaseImg src="/images/media/backgrounds/1.png" alt="" />

                </div>
                <div class="container">
                    <div class="d-flex align-items-center gap-2 justify-content-between flex-wrap">
                        <div>
                            <h4 class="fw-semibold text-fixed-white">Transform Your Workflow Today</h4>
                            <span class="d-block fs-16 op-8">Unlock all the powerful features of our admin template.
                                <br> Purchase now or try the demo to see it in action!</span>
                        </div>
                        <div class="btn-list">
                            <Link :href="`${baseUrl}/dashboards/sales`"
                                class="btn btn-danger btn-lg btn-w-md d-inline-flex align-items-center">View Demo<i
                                class="ti ti-arrow-narrow-right ms-2 custom-arrow"></i></Link>
                            <button class="btn btn-success btn-lg btn-w-md d-inline-flex align-items-center">Buy Now<i
                                    class="ti ti-shopping-cart ms-2"></i></button>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End:: Buy Now Section -->

            <!-- Start:: Section-4 -->
            <section class="section" id="price">
                <div class="container">
                    <div class="heading-section">
                        <div class="heading-subtitle">Our Pricing</div>
                        <div class="heading-title">Choose the Plan That Fits Your Needs</div>
                        <div class="heading-description mb-3">
                            Select the right fit and enjoy seamless access to all features.
                        </div>
                        <div class="tab-style-1 border bg-white rounded-0 d-inline-block">
                            <ul class="nav nav-pills" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button type="button" class="nav-link rounded-0 fw-medium active"
                                        data-bs-toggle="pill" data-bs-target="#pricing1-monthly" aria-selected="true"
                                        role="tab">Monthly</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button type="button" class="nav-link rounded-0 fw-medium" data-bs-toggle="pill"
                                        data-bs-target="#pricing1-yearly" aria-selected="false" role="tab"
                                        tabindex="-1">Yearly</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane show active p-0 border-0" id="pricing1-monthly" role="tabpanel">
                            <div class="row">
                                <div class="col-xxl-4" v-for="(idx, index) in BasicPricingdata" :key="index">
                                    <SpkBasicpricecard :card="idx" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane p-0 border-0" id="pricing1-yearly" role="tabpanel">
                            <div class="row">
                                <div class="col-xxl-4" v-for="(idx, index) in BasicPricing1data" :key="index">
                                    <SpkBasicpricecard :card="idx" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End:: Section-4 -->

            <!-- Start:: Section-5 -->
            <section class="section">
                <div class="container">
                    <div class="heading-section">
                        <div class="heading-subtitle">FAQ's</div>
                        <div class="heading-title">Need Help? Find Your Answers Here</div>
                        <div class="heading-description">
                            Browse through common questions to get quick solutions. We're here to help!
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="accordion faq-accordion accordions-items-seperate" id="accordionFAQ3">
                                <div class="accordion-item" v-for="(item, index) in LandinData.FaqAdminTemplateItems"
                                    :key="index">
                                    <h2 class="accordion-header" :id="'heading' + item.id">
                                        <button class="accordion-button" :class="{ collapsed: !item.open }"
                                            type="button" data-bs-toggle="collapse"
                                            :data-bs-target="'#collapse' + item.id"
                                            :aria-expanded="item.open ? 'true' : 'false'"
                                            :aria-controls="'collapse' + item.id">
                                            <i
                                                :class="item.icon + ' fw-medium avatar avatar-sm avatar-rounded bg-primary-transparent fs-5 me-2 text-primary'"></i>
                                            {{ item.question }}
                                        </button>
                                    </h2>
                                    <div class="accordion-collapse collapse" :class="{ show: item.open }"
                                        :id="'collapse' + item.id" :aria-labelledby="'heading' + item.id"
                                        data-bs-parent="#accordionFAQ3">
                                        <div class="accordion-body">
                                            {{ item.answer }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End:: Section-5 -->

            <!-- Start:: Section-6 -->
            <section class="section section-primary testimonials-section">
                <div class="testimonials-background-container">
                    <BaseImg src="/images/media/backgrounds/2.png" alt="" />

                </div>
                <div class="container">
                    <div class="heading-section">
                        <div class="heading-subtitle">Testimonials</div>
                        <div class="heading-title">See What Our Customers Say</div>
                        <div class="heading-description">
                            Read real testimonials from customers who’ve <br> improved their business with our platform.
                        </div>
                    </div>
                    <SwiperjsCardComponent :swiperItems="CustomReviews"
                        swiperClass="swiper pagination-dynamic testimonialSwiperService testimonials-swiper-2"
                        :slidesPerView="2" :breakpoints="breakpoints1" :spaceBetween="20" :pagination="false"
                        :navigation="false" :autoplay="true">
                        <template #default="{ card }">
                            <TestimonialsStyles2 :card="card" />
                        </template>
                    </SwiperjsCardComponent>
                </div>
            </section>
            <!-- End:: Section-6 -->

            <!-- Start:: Setion-7 -->
            <section class="section bg-light py-5">
                <div class="container">
                    <div class="row gy-4">
                        <div class="col-lg-3 col-6" v-for="(idx) in LandinData.Stats" :key="idx.id">
                            <div :class="`text-center stats-point ${idx.class}`">
                                <h4 class="fw-semibold mb-1">{{ idx.value }}</h4>
                                <div class="text-muted fs-16">{{ idx.label }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End:: Setion-7 -->

            <!-- Start:: Section-8 -->
            <section class="section">
                <div class="container">
                    <div class="heading-section">
                        <div class="heading-subtitle">Workflow</div>
                        <div class="heading-title">Streamlined Workflow for Efficient Results</div>
                        <div class="heading-description">
                            Discover how our structured workflow drives productivity, <br> ensuring seamless execution
                            from start to finish.
                        </div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="col-lg-3" v-for="(idx, index) in LandinData.WorkflowCards" :key="index">
                            <div class="card custom-card border-0 shadow-none">
                                <div class="card-body p-4 text-center">
                                    <div class="step-arrow-container d-lg-block d-none">
                                        <BaseImg :src="idx.imgSrc" alt="" class="img-fluid" />
                                    </div>
                                    <div class="lh-1 mb-3">
                                        <span
                                            :class="`avatar avatar-lg svg-${idx.iconClass} text-${idx.iconClass} workflow-icon-container`"
                                            v-html="idx.icon"></span>
                                    </div>
                                    <h5 class="fw-semibold">{{ idx.title }}</h5>
                                    <span class="d-block text-muted">{{ idx.description }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End:: Section-8 -->

            <!-- Start:: Section-9 -->
            <section class="section">
                <div class="container">
                    <div class="heading-section">
                        <div class="heading-subtitle">Our Team</div>
                        <div class="heading-title">Meet Our Expert Team</div>
                        <div class="heading-description">
                            Get to know the talented individuals behind our success, <br> working together to deliver
                            exceptional results.
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6" v-for="(idx) in TeamMembers.slice(0, 4)" :key="idx.id">
                            <SpkReusableTeamCard :card="idx" />
                        </div>
                    </div>
                </div>
            </section>
            <!-- End:: Section-9 -->

            <!-- Start:: Section-10 -->
            <section class="section" id="contactus">
                <div class="container">
                    <div class="heading-section">
                        <div class="heading-subtitle">Contact Us</div>
                        <div class="heading-title">Get in Touch With Us</div>
                        <div class="heading-description">
                            Have questions or need assistance? Our team is here to help. <br> Reach out to us anytime
                            for support or inquiries.
                        </div>
                    </div>
                    <div class="row gy-4 justify-content-between">
                        <div class="col-xl-6">
                            <h6 class="fw-semibold mb-4">Get In Touch !</h6>
                            <div class="row gy-3">
                                <div class="col-xl-6">
                                    <label for="contact-address-firstname" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="contact-address-firstname"
                                        placeholder="Enter Name">
                                </div>
                                <div class="col-xl-6">
                                    <label for="contact-address-lastname" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="contact-address-lastname"
                                        placeholder="Enter Name">
                                </div>
                                <div class="col-xl-12">
                                    <label for="contact-address-email" class="form-label">Email Id</label>
                                    <input type="email" class="form-control" id="contact-address-email"
                                        placeholder="Enter Email Id">
                                </div>
                                <div class="col-xl-12">
                                    <label for="contact-address-phone" class="form-label">Phone No</label>
                                    <input type="text" class="form-control" id="contact-address-phone"
                                        placeholder="Enter Phone No">
                                </div>
                                <div class="col-xl-12">
                                    <label for="contact-mail-message" class="form-label">Message</label>
                                    <textarea class="form-control" id="contact-mail-message" rows="4"
                                        placeholder="Enter Your Query ?"></textarea>
                                </div>
                            </div>
                            <div class="d-grid mt-3">
                                <button class="btn btn-primary">Submit<i
                                        class="ti ti-arrow-narrow-right ms-1 align-middle"></i></button>
                            </div>
                        </div>
                        <div class="col-xl-5">
                            <div class="row gy-5">
                                <div class="col-xl-12">
                                    <div class="d-flex align-items-start gap-3">
                                        <div>
                                            <span class="avatar avatar-lg bg-primary-transparent svg-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                    viewBox="0 0 24 24" width="24px" fill="#5f6368">
                                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                                    <path
                                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div>
                                            <h5 class="fs-13 text-muted text-uppercase">Address :</h5>
                                            <span class="d-block fs-12 text-muted mb-2">Visit us in person From Mon-Fri
                                                9:00am - 6:00pm</span>
                                            <div class="fw-semibold">123 Health Street, Suite 456
                                                <br>Wellness City, HC 78910<br>
                                                Country Name
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <div class="d-flex align-items-start gap-3">
                                        <div>
                                            <span class="avatar avatar-lg bg-primary-transparent svg-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                    viewBox="0 0 24 24" width="24px" fill="#5f6368">
                                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                                    <path
                                                        d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div>
                                            <h5 class="fs-13 text-muted text-uppercase">Phone Number :</h5>
                                            <span class="d-block fs-12 text-muted mb-2">Call our team Mon-Fri 9:00am -
                                                6:00pm</span>
                                            <div class="fw-semibold">+1 (555) 123-4567</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <div class="d-flex align-items-start gap-3">
                                        <div>
                                            <span class="avatar avatar-lg bg-primary-transparent svg-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                    viewBox="0 0 24 24" width="24px" fill="#5f6368">
                                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                                    <path
                                                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div>
                                            <h5 class="fs-13 text-muted text-uppercase">Email ID :</h5>
                                            <div class="fw-semibold lh-1">contact@healthclinic.com</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <div class="d-flex align-items-start gap-3">
                                        <div>
                                            <span class="avatar avatar-lg bg-primary-transparent svg-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.897 5.516 5 6.934V22l5.34-4.004C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm-2.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div>
                                            <h5 class="fs-13 text-muted text-uppercase">Chat With Us :</h5>
                                            <div class="fw-semibold lh-1 chat-platforms">
                                                <a href="https://www.facebook.com" target="_blank" class="d-block">
                                                    Chat on Facebook
                                                </a>
                                                <a href="https://www.twitter.com" target="_blank" class="d-block">
                                                    Message Us On Twitter
                                                </a>
                                                <a href="javascript:void(0);" target="_blank">
                                                    Start a Live Chat
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End:: Section-10 -->

            <!-- Start:: Buy Now Section -->
            <section class="section section-md section-primary text-fixed-white py-5 buy-now-section">
                <div class="testimonials-background-container">
                    <BaseImg src="/images/media/backgrounds/1.png" alt="" />
                </div>
                <div class="container">
                    <div class="d-flex align-items-center gap-2 justify-content-between">
                        <div>
                            <h4 class="fw-semibold text-fixed-white">Build and Manage with Ease</h4>
                            <span class="d-block fs-16 op-8">Create, manage, and optimize effortlessly with our admin
                                template.</span>
                        </div>
                        <button class="btn btn-secondary btn-lg btn-w-md d-inline-flex align-items-center">Buy Now<i
                                class="ti ti-shopping-cart ms-2"></i></button>
                    </div>
                </div>
            </section>
            <!-- End:: Buy Now Section -->

        </div>
        <!-- End::app-content -->

        <!-- Start:: Footer -->
        <section class="section landing-footer text-fixed-white">
            <div class="container">
                <div class="row my-auto justify-content-between align-items-center mb-5 pb-5 newsletter-area gap-3">
                    <div class="col-lg-6">
                        <h3 class="mb-2 text-fixed-white">Subscribe to our News Letter</h3>
                        <div class="op-6">Stay up-to-date with the latest news and updates on our
                            products and services</div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form mb-0">
                            <div class="form-group custom-form-group mx-auto">
                                <input type="text" class="form-control shadow-none"
                                    placeholder="Enter Your Email Address...">
                                <button
                                    class="custom-form-btn btn btn-primary bg-primary border-0 right-0 shadow-none me-2"
                                    type="button">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center gy-3">
                    <div class="col-xl-4">
                        <p class="fw-semibold mb-3 brand-image">
                            <Link :href="`${baseUrl}/dashboards/sales`">
                            <BaseImg src="/images/brand-logos/desktop-dark.png" alt="" />
                            </Link>
                        </p>
                        <p class="mb-2 op-6 fw-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et magnam, fuga est
                            mollitia eius, quo illum illo inventore optio aut quas omnis rem. Dolores accusantium
                            aspernatur minus ea incidunt.
                        </p>
                        <p class="mb-0 op-6 fw-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                            ea esse ad</p>
                    </div>
                    <div class="col-sm-3 col-xl-2 col-6">
                        <h6 class="fw-semibold mb-3 text-fixed-white">Product</h6>
                        <ul class="list-unstyled fw-normal landing-footer-list mb-0">
                            <li>
                                <a href="javascript:void(0);" class="text-fixed-white op-6">Services</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="text-fixed-white op-6">Product Tour</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="text-fixed-white op-6">Integrations</a>
                            </li>
                            <li>
                                <a href="pricing.html" class="text-fixed-white op-6">Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-3 col-xl-2 col-6">
                        <h6 class="fw-semibold mb-3 text-fixed-white">Support</h6>
                        <ul class="list-unstyled fw-normal landing-footer-list mb-0">
                            <li>
                                <a href="javascript:void(0);" class="text-fixed-white op-6">Contact Us</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="text-fixed-white op-6">Technical Support</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="text-fixed-white op-6">Documentation</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="text-fixed-white op-6">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-3 col-xl-2 col-6">
                        <h6 class="fw-semibold mb-3 text-fixed-white">Other</h6>
                        <ul class="list-unstyled fw-normal landing-footer-list mb-0">
                            <li>
                                <a href="javascript:void(0);" class="text-fixed-white op-6">Market Place</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="text-fixed-white op-6">Social Integrations</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-3 col-xl-2 col-6">
                        <h6 class="fw-semibold mb-3 text-fixed-white">About</h6>
                        <ul class="list-unstyled fw-normal landing-footer-list mb-0">
                            <li>
                                <a href="blog.html" class="text-fixed-white op-6">Blog</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="text-fixed-white op-6">About Us</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="text-fixed-white op-6">Customers</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="text-fixed-white op-6">Jobs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <div class="py-3 landing-payment-gateways">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-9">
                        <div class="d-md-flex align-items-center justify-content-center">
                            <p class="mb-0 me-3 text-fixed-white op-6 fw-normal">Payments We Accept :</p>
                            <div class="d-flex align-items-center gap-2 justify-content-center flex-wrap">
                                <div class="me-2 mb-2 mb-sm-0 payment-cards">
                                    <a href="javascript:void(0);">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40"
                                            viewBox="0 0 64 64">
                                            <g data-name="Paypal card">
                                                <path fill="#fff"
                                                    d="M47 25.23a2.91 2.91 0 0 0-1-1.1 4.63 4.63 0 0 0-1.63-.59 12.57 12.57 0 0 0-2.19-.17H38.3a1 1 0 0 0-.88.71L34.8 35.47a.56.56 0 0 0 .57.71h1.86a1 1 0 0 0 .89-.7l.63-2.77a1 1 0 0 1 .9-.7h.53a8.9 8.9 0 0 0 5.32-1.4 4.41 4.41 0 0 0 1.88-3.69 3.67 3.67 0 0 0-.38-1.69ZM43 29a4 4 0 0 1-2.35.61h-.45a.57.57 0 0 1-.57-.71l.57-2.41a1 1 0 0 1 .89-.71h.6a3 3 0 0 1 1.62.36 1.26 1.26 0 0 1 .55 1.11A2.09 2.09 0 0 1 43 29Zm19.4-5.49h-1.65A1 1 0 0 0 60 24l-.09.15-.08.37-2.38 10.61-.08.33a.53.53 0 0 0 .46.67h1.77a.93.93 0 0 0 .8-.57l.1-.14L63 24.17a.54.54 0 0 0-.58-.7ZM56 26.82a7.12 7.12 0 0 0-3.32-.59 14.22 14.22 0 0 0-2.25.18c-.56.08-.61.1-1 .17a1.08 1.08 0 0 0-.81.87l-.23.93c-.13.59.21.57.37.52a9.45 9.45 0 0 1 1.1-.32 8.23 8.23 0 0 1 1.75-.24 4.66 4.66 0 0 1 1.69.24.86.86 0 0 1 .56.84v.27l-.27.16a33.3 33.3 0 0 0-2.74.3 9 9 0 0 0-2.37.65 3.73 3.73 0 0 0-1.6 1.26 3.5 3.5 0 0 0-.52 1.94 2.33 2.33 0 0 0 .76 1.78 2.89 2.89 0 0 0 2 .66 5.12 5.12 0 0 0 1.17-.1l.9-.31.77-.42.69-.47-.06.3a.54.54 0 0 0 .49.7h1.76a1 1 0 0 0 .79-.7L57 29.59l.07-.48v-.45A2 2 0 0 0 56 26.82Zm-3 6.61-.3.39-.72.37a2.66 2.66 0 0 1-1 .21 2.19 2.19 0 0 1-1-.2l-.37-.69a1.44 1.44 0 0 1 .27-.92 1.84 1.84 0 0 1 .8-.53 6.5 6.5 0 0 1 1.22-.28c.42-.05 1.27-.15 1.37-.15l.13.23c-.04.14-.28 1.14-.4 1.57Z">
                                                </path>
                                                <path fill="#fff"
                                                    d="M34.86 26.37h-2.23a1.63 1.63 0 0 0-1.18.7s-2.66 4.58-2.92 5h-.31l-.83-5a1 1 0 0 0-1-.73h-1.68a.54.54 0 0 0-.55.71s1.26 7.2 1.51 8.9c.12.94 0 1.1 0 1.1L24 40c-.24.39-.11.71.29.71h1.93a1.55 1.55 0 0 0 1.16-.7l7.42-12.59s.72-1.07.06-1.05Zm-12.65.45a7 7 0 0 0-3.32-.59 14.42 14.42 0 0 0-2.26.17 8.18 8.18 0 0 0-.95.18 1.08 1.08 0 0 0-.82.86l-.22.93c-.13.6.22.58.35.52a10.88 10.88 0 0 1 1.12-.32 7.58 7.58 0 0 1 1.74-.23 4.47 4.47 0 0 1 1.7.24.83.83 0 0 1 .55.84v.26l-.27.17a27 27 0 0 0-2.74.3 8.7 8.7 0 0 0-2.36.64 3.63 3.63 0 0 0-1.6 1.27 3.38 3.38 0 0 0-.57 1.94 2.28 2.28 0 0 0 .77 1.77 2.83 2.83 0 0 0 2 .67 4.87 4.87 0 0 0 1.16-.11l.91-.31.76-.42.7-.47-.06.29a.55.55 0 0 0 .5.69H21a1 1 0 0 0 .8-.69l1.36-5.88.07-.47v-.45a2 2 0 0 0-1.02-1.8Zm-3 6.6-.3.38-.73.38a2.62 2.62 0 0 1-1 .21 2.17 2.17 0 0 1-1.06-.2l-.36-.7a1.4 1.4 0 0 1 .27-.9l.79-.54a7.54 7.54 0 0 1 1.23-.28c.42-.05 1.26-.15 1.38-.15l.12.22c.02.16-.22 1.16-.33 1.58Zm-6-8.23a2.71 2.71 0 0 0-1-1.09 4.54 4.54 0 0 0-1.62-.6 13.86 13.86 0 0 0-2.2-.17H4.53a1 1 0 0 0-.9.71L1 35.42a.55.55 0 0 0 .56.71h1.88a.94.94 0 0 0 .89-.71L5 32.66a.93.93 0 0 1 .88-.7h.52a8.88 8.88 0 0 0 5.3-1.4 4.38 4.38 0 0 0 1.9-3.69 3.42 3.42 0 0 0-.36-1.68Zm-4 3.72a3.91 3.91 0 0 1-2.35.62h-.44a.55.55 0 0 1-.56-.71l.56-2.42a1 1 0 0 1 .89-.71h.6a3 3 0 0 1 1.62.36 1.24 1.24 0 0 1 .54 1.11 2 2 0 0 1-.84 1.75Z">
                                                </path>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <div class="me-2 mb-2 mb-sm-0 payment-cards">
                                    <a href="javascript:void(0);">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40"
                                            enable-background="new 0 0 48 48" viewBox="0 0 48 48">
                                            <polygon fill="#fff"
                                                points="17.202 32.269 21.087 32.269 23.584 16.732 19.422 16.732">
                                            </polygon>
                                            <path fill="#fff"
                                                d="M13.873 16.454l-3.607 11.098-.681-3.126c-1.942-4.717-5.272-6.659-5.272-6.659l3.456 14.224h4.162l5.827-15.538H13.873zM44.948 16.454h-4.162l-6.382 15.538h3.884l.832-2.22h4.994l.555 2.22H48L44.948 16.454zM39.954 26.997l2.22-5.826 1.11 5.826H39.954zM28.855 20.893c0-.832.555-1.665 2.497-1.665 1.387 0 2.775 1.11 2.775 1.11l.832-3.329c0 0-1.942-.832-3.607-.832-4.162 0-6.104 2.22-6.104 4.717 0 4.994 5.549 4.162 5.549 6.659 0 .555-.277 1.387-2.497 1.387s-3.884-.832-3.884-.832l-.555 3.329c0 0 1.387.832 4.162.832 2.497.277 6.382-1.942 6.382-5.272C34.405 23.113 28.855 22.836 28.855 20.893z">
                                            </path>
                                            <path fill="#fff" d="M9.711,25.055l-1.387-6.936c0,0-0.555-1.387-2.22-1.387c-1.665,0-6.104,0-6.104,0
                                S8.046,19.229,9.711,25.055z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="me-2 mb-2 mb-sm-0 payment-cards">
                                    <a href="javascript:void(0);">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40"
                                            viewBox="0 0 24 24">
                                            <path fill="#FF5F00" d="M15.245 17.831h-6.49V6.168h6.49v11.663z"></path>
                                            <path fill="#EB001B"
                                                d="M9.167 12A7.404 7.404 0 0 1 12 6.169 7.417 7.417 0 0 0 0 12a7.417 7.417 0 0 0 11.999 5.831A7.406 7.406 0 0 1 9.167 12z">
                                            </path>
                                            <path fill="#F79E1B"
                                                d="M24 12a7.417 7.417 0 0 1-12 5.831c1.725-1.358 2.833-3.465 2.833-5.831S13.725 7.527 12 6.169A7.417 7.417 0 0 1 24 12z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="me-2 mb-2 mb-sm-0 payment-cards">
                                    <a href="javascript:void(0);">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40"
                                            enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                                            <path fill="#fff"
                                                d="M3.093,14.964c1.18,0,2.55-0.431,2.79-1.711h-1.24c-0.213,0.625-0.85,0.923-1.568,0.923c-1.035,0-1.788-0.64-1.853-1.726h4.83v1.042c0,0.387-0.02,0.848-0.04,1.235h1.18c0.025-0.238,0.04-0.49,0.04-0.728c0.506,0.61,1.33,0.923,2.2,0.923c1.407,0,2.467-0.833,2.767-2.069c-0.022,0.12-0.037,0.253-0.037,0.402c0,0.908,0.792,1.682,2.272,1.682c1,0,1.717-0.224,2.32-0.952c0,0.253,0.016,0.506,0.046,0.759h1.114c-0.03-0.313-0.04-0.654-0.04-0.997v-2.44c0-0.372-0.07-0.67-0.2-0.923l2.33,4.345l-1.07,2.024h1.346L24,9.503h-1.243l-2.055,4.093l-2.055-4.092h-1.41l0.436,0.833c-0.42-0.744-1.351-1.012-2.415-1.012c-1.186,0-2.55,0.327-2.686,1.607h1.275c0.06-0.506,0.585-0.804,1.305-0.804c0.974,0,1.53,0.356,1.53,1.234v0.134c-0.465,0-1.05,0-1.56,0.018c-1.622,0.039-2.656,0.388-2.896,1.333c0.045-0.209,0.06-0.432,0.06-0.663c0-1.936-1.488-2.832-2.828-2.832c-0.8,0-1.612,0.201-2.202,0.899V7.25h-1.2v4.876c-0.01-1.904-1.252-2.783-2.94-2.783C0.982,9.343,0,10.49,0,12.23C0,13.808,0.95,14.985,3.093,14.964z M15.193,12.313l-0.002-0.002h-0.012c0.494-0.016,1.034-0.022,1.484-0.022v0.129c0,1.115-0.675,1.8-1.935,1.8c-0.945,0-1.305-0.501-1.305-0.962C13.423,12.544,14.098,12.346,15.193,12.313z M9.116,10.165c1.125,0,1.893,0.8,1.893,2.004c0,1.204-0.766,2.004-1.876,2.004H9.131h-0.03c-1.11,0-1.875-0.8-1.875-2.004C7.226,10.964,8.006,10.165,9.116,10.165z M3.058,10.145c0.871,0,1.681,0.418,1.725,1.534h-3.54C1.364,10.615,2.114,10.145,3.058,10.145z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="landing-main-footer py-3">
            <div class="container">
                <div class="row">
                    <div></div>
                </div>
                <div class="row">
                    <div class="col-lg-4 text-lg-start text-center">
                        <span class="text-fixed-white op-7 fs-14"> © Copyright <span id="year">{{ currentYear }}</span>
                            <a href="javascript:void(0);" class="text-primary fs-15 fw-semibold"> Spruko </a> .All
                            rights reserved
                        </span>
                    </div>
                    <div class="col-lg-8 text-lg-end text-center mt-lg-0 mt-1">
                        <ul class="list-unstyled fw-normal landing-footer-list mb-0">
                            <li>
                                <a href="javascript:void(0);" class="text-fixed-white op-8">Terms Of Service</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="text-fixed-white op-8">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="text-fixed-white op-8">Legal</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="text-fixed-white op-8">Contact</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="text-fixed-white op-8">Blog</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="text-fixed-white op-8">Licenses</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- End:: Footer -->
        <!-- End::app-content -->

    </div>
</template>

<style scoped>
/* Add your styles here */
</style>
