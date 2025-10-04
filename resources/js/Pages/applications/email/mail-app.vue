<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as MailData from "@/shared/data/applications/email/mailappdata"
import { Tooltip } from "bootstrap"
import Pageheader from '@/components/pageheader/pageheader.vue'
import BaseImg from '../../../components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'
// Correct typing & declaration of reactive variables:
const dataToPass = {
    title: "Applications",
    subtitle: "Email",
    currentpage: "Mail App",
    activepage: "Mail App"
}

const content = ref('')
const content1 = ref('')
const isVisible = ref(false)
const isMobile = ref(false)
const MaildataValue = ref(['jay@gmail.com'])
const Maildata = ref(['jay@gmail.com', 'kia@gmail.com', 'don@gmail.com', 'kimo@gmail.com'])

let pop = null

const toggleVisibility = () => {
    if (isMobile.value) {
        isVisible.value = !isVisible.value
    }
}

const handleResize = () => {
    isMobile.value = window.innerWidth < 992
}

onMounted(() => {
    // Initialize tooltip
    pop = new Tooltip(document.body, {
        selector: '[data-bs-toggle="tooltip"]',
    })

    handleResize() // Check initial window size

    window.addEventListener('resize', handleResize, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)

    // Remove all tooltips
    const popovers = document.getElementsByClassName('tooltip')
    Array.from(popovers).forEach(item => {
        item.remove()
    })

    // Dispose tooltip instance if needed
    pop?.dispose()
    pop = null
})

const mails = ref(
    MailData.Mailstable.map(mail => ({
        ...mail,
        checked: mail.checked ?? false,
    }))
)

const selectAll = ref(false)

function toggleAll() {
    mails.value.forEach(mail => (mail.checked = selectAll.value))
}

function updateSelectAll() {
    selectAll.value = mails.value.every(mail => mail.checked)
}

selectAll.value = mails.value.every(mail => mail.checked)

</script>


<template>
     <Head title="Email | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />
    <div class="main-mail-container mb-3 gap-2 d-flex">
        <div class="mail-navigation border" @click="toggleVisibility"
            :style="{ display: isMobile ? (isVisible ? 'block' : 'none') : 'block', }">
            <div class="d-grid align-items-top p-3 pb-0">
                <button class="btn btn-primary d-flex align-items-center justify-content-center" data-bs-toggle="modal"
                    data-bs-target="#mail-Compose">
                    <i class="ri-add-circle-line fs-16 align-middle me-1"></i>New Mail
                </button>
            </div>
            <div>
                <PerfectScrollbar id="mail-main-nav">
                    <ul class="list-unstyled mail-main-nav">
                        <li class="px-0 pt-0">
                            <span class="fs-11 text-muted op-7 fw-medium">MAILS</span>
                        </li>
                        <li :class="`${idx.isActive ? 'active' : ''} mail-type`" v-for="(idx) in MailData.MailMenuItems"
                            :key="idx.id">
                            <a href="javascript:void(0);">
                                <div class="d-flex gap-2 align-items-center">
                                    <div class="lh-1">
                                        <span class="mail-menu-icon" v-html="idx.icon"></span>
                                    </div>
                                    <span class="flex-fill text-nowrap">
                                        {{ idx.label }}
                                    </span>
                                    <span class="badge bg-primary" v-if="idx.count">5</span>
                                </div>
                            </a>
                        </li>
                        <li class="px-0">
                            <span class="fs-11 text-muted op-7 fw-medium">SETTINGS</span>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div class="d-flex gap-2 align-items-center">
                                    <div class="lh-1">
                                        <span class="mail-menu-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                                <rect width="256" height="256" fill="none" />
                                                <path
                                                    d="M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
                                                    opacity="0.2" />
                                                <circle cx="128" cy="128" r="40" fill="none" stroke="currentColor"
                                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
                                                <path
                                                    d="M130.05,206.11c-1.34,0-2.69,0-4,0L94,224a104.61,104.61,0,0,1-34.11-19.2l-.12-36c-.71-1.12-1.38-2.25-2-3.41L25.9,147.24a99.15,99.15,0,0,1,0-38.46l31.84-18.1c.65-1.15,1.32-2.29,2-3.41l.16-36A104.58,104.58,0,0,1,94,32l32,17.89c1.34,0,2.69,0,4,0L162,32a104.61,104.61,0,0,1,34.11,19.2l.12,36c.71,1.12,1.38,2.25,2,3.41l31.85,18.14a99.15,99.15,0,0,1,0,38.46l-31.84,18.1c-.65,1.15-1.32,2.29-2,3.41l-.16,36A104.58,104.58,0,0,1,162,224Z"
                                                    fill="none" stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="16" />
                                            </svg>
                                        </span>
                                    </div>
                                    <span class="flex-fill text-nowrap">
                                        Settings
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li class="px-0">
                            <span class="fs-11 text-muted op-7 fw-medium">LABELS</span>
                        </li>
                        <li v-for="(idx) in MailData.TagItems" :key="idx.id">
                            <a href="javascript:void(0);">
                                <div class="d-flex align-items-center">
                                    <span class="me-2 lh-1">
                                        <i
                                            :class="`ri-circle-line align-middle fs-10 fw-semibold text-${idx.colorClass}`"></i>
                                    </span>
                                    <span class="flex-fill text-nowrap">
                                        {{ idx.label }}
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div class="mb-2 fs-12">
                                <a href="javascript:void(0)">
                                    40Gb of 50Gb used
                                </a>
                            </div>
                            <div class="progress progress-xs mb-3">
                                <div class="progress-bar bg-primary progress-bar-animatedd" role="progressbar"
                                    style="width: 58%" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </li>
                    </ul>
                </PerfectScrollbar>
            </div>
        </div>
        <div class="total-mails border" :style="{ display: isMobile ? (isVisible ? 'none' : 'block') : 'block' }">
            <div class="total-mails-header d-flex align-items-center border-bottom flex-wrap gap-2">
                <div>
                    <input class="form-check-input" type="checkbox" id="checkAll" aria-label="Select All"
                        v-model="selectAll" @change="toggleAll" />
                </div>
                <div class="flex-fill d-flex align-items-center gap-3 flex-wrap">
                    <h6 class="fw-medium mb-0">All Mails</h6>
                    <div class="d-flex gap-2">
                        <div class="btn-list">
                            <button class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-title="Reload">
                                <i class="ti ti-refresh"></i>
                            </button>
                            <button class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-title="Archive">
                                <i class="ti ti-archive"></i>
                            </button>
                            <button class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-title="Delete">
                                <i class="ti ti-trash"></i>
                            </button>
                            <button class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-title="Report Spam">
                                <i class="ti ti-alert-circle"></i>
                            </button>
                        </div>
                        <div class="dropdown">
                            <button class="btn btn-icon btn-light btn-sm" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ti ti-dots-vertical"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Recent</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Unread</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Mark All Read</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Spam</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Delete All</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="d-flex gap-2">
                    <div class="input-group">
                        <input type="text" class="form-control shadow-none" placeholder="Search Email"
                            aria-describedby="button-addon">
                        <button class="btn btn-primary" type="button" id="button-addon"><i
                                class="ri-search-line"></i></button>
                    </div>
                    <button class="btn btn-icon btn-light d-lg-none d-block total-mails-close"
                        @click="toggleVisibility">
                        <i class="ri-close-line"></i>
                    </button>
                </div>
            </div>
            <PerfectScrollbar class="mail-messages" id="mail-messages">
                <div class="table-responsive mail-messages-container">
                    <table class="table text-nowrap table-borderless table-hover">
                        <tbody>
                            <tr v-for="(idx) in mails" :key="idx.id" :class="idx.isActive ? 'mail-selected' : ''">
                                <td>
                                    <input class="form-check-input mail-check-input" type="checkbox"
                                        :id="'mail' + idx.id" v-model="idx.checked" @change="updateSelectAll"
                                        aria-label="Select Mail" />
                                </td>
                                <td>
                                    <div class="d-flex align-items-center gap-4">
                                        <a :class="`mail-starred ${idx.starred}`" href="javascript:void(0);"
                                            data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Star">
                                            <i class="ti ti-star-filled"></i>
                                        </a>
                                        <a :class="`mail-important ${idx.important}`" href="javascript:void(0);"
                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-title="Mark As Important">
                                            <i class="ti ti-bookmark"></i>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center gap-2 mail-user-container"
                                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                        aria-controls="offcanvasRight">
                                        <div class="lh-1">
                                            <span class="avatar avatar-sm avatar-rounded mail-msg-avatar">
                                                <BaseImg :src="idx.senderAvatar" alt=""/>
                                            </span>
                                        </div>
                                        <div>{{ idx.senderName }}</div>
                                    </div>
                                </td>
                                <td>
                                    <div class="mail-msg" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                        aria-controls="offcanvasRight">
                                        <span class="d-block mb-0 fw-medium text-truncate w-75">{{ idx.subject }} <span
                                                :class="`badge ${idx.badge.className} ms-2`" v-if="idx.badge">{{
                                                    idx.badge.text }}</span></span>
                                        <div class="text-muted text-wrap text-truncate mail-msg-content">{{ idx.content
                                            }}</div>
                                    </div>
                                </td>
                                <td><span class="mail-received-time">{{ idx.time }}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </PerfectScrollbar>
        </div>
    </div>
    <!-- Start::mail information offcanvas -->
    <div class="offcanvas offcanvas-end mail-info-offcanvas" tabindex="-1" id="offcanvasRight">
        <div class="offcanvas-body p-0">
            <div class="mails-information">
                <div class="mail-info-header d-flex flex-wrap gap-2 align-items-center">
                    <div class="flex-fill">
                        <button class="btn btn-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top"
                            data-bs-title="Print">
                            <i class="ri-printer-line"></i>
                        </button>
                        <button class="btn btn-icon btn-light ms-1" data-bs-toggle="tooltip" data-bs-placement="top"
                            data-bs-title="Mark as read">
                            <i class="ri-mail-open-line"></i>
                        </button>
                        <button class="btn btn-icon btn-light ms-1" data-bs-toggle="tooltip" data-bs-placement="top"
                            data-bs-title="Reload">
                            <i class="ri-refresh-line"></i>
                        </button>
                    </div>
                    <button type="button" class="btn-close btn btn-sm btn-icon border" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="mail-info-body p-4" id="mail-info-body">
                    <div class="d-sm-flex d-block align-items-center justify-content-between mb-4">
                        <div>
                            <p class="fs-20 fw-medium mb-0">Invoice #45678 – Payment Due Soon</p>
                        </div>
                        <div class="float-end">
                            <span class="fs-13 fw-medium text-muted">Feb 22 2025,03:05PM</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-2 mb-4">
                        <div class="me-1">
                            <span class="avatar avatar-md me-2 avatar-rounded mail-msg-avatar">
                                <BaseImg src="/images/faces/6.jpg" alt=""/>

                            </span>
                        </div>
                        <div class="flex-fill">
                            <h6 class="mb-0 fw-medium">Sarah Smith</h6>
                            <span class="text-muted fs-12">to:me</span>
                        </div>
                        <div class="d-flex align-items-center gap-2 fs-14">
                            <a href="javascript:void(0);" class="text-muted" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-title="Starred">
                                <i class="ri-star-line"></i>
                            </a>
                            <a href="javascript:void(0);" class="text-muted ms-1" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-title="Archive">
                                <i class="ri-inbox-archive-line"></i>
                            </a>
                            <a href="javascript:void(0);" class="text-muted ms-1" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-title="Report spam">
                                <i class="ri-spam-2-line"></i>
                            </a>
                            <a href="javascript:void(0);" class="text-muted ms-1" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-title="Delete">
                                <i class="ri-delete-bin-line"></i>
                            </a>
                            <a href="javascript:void(0);" class="text-muted ms-1" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-title="Reply">
                                <i class="ri-reply-line"></i>
                            </a>
                        </div>
                    </div>
                    <div class="main-mail-content mb-4">
                        <p class="text-muted mb-2">Dear Sarah</p>
                        <p class="mb-2 text-muted">Thank you for your prompt attention to this matter. As we approach
                            the end of the month, please ensure that the payment is made by the 28th to avoid any late
                            fees. You can find the invoice attached to this email. If you require any further
                            clarification or need assistance with the payment process, don't hesitate to reach out.</p>
                        <p class="mb-2 text-muted">Looking forward to your confirmation.</p>
                        <p class="mb-0 mt-4">
                            <span class="d-block fs-13 text-muted">Best Regards,</span>
                            <span class="d-block">Finance Team</span>
                        </p>
                    </div>
                    <div class="mail-attachments mb-4">
                        <div class="row">
                            <div class="col-xl-3">
                                <div class="card custom-card">
                                    <BaseImg src="/images/media/media-43.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body p-2 text-center">
                                        <a href="javascript:void(0);" class="text-decoration-underline">Download <i
                                                class="ti ti-download"></i></a>
                                    </div>

                                </div>
                            </div>
                            <div class="col-xl-3">
                                <div class="card custom-card">
                                    <BaseImg src="/images/media/media-44.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body p-2 text-center">
                                        <a href="javascript:void(0);" class="text-decoration-underline">Download <i
                                                class="ti ti-download"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mail-reply">
                        <div id="mail-reply-editor">
                            <vue-editor v-model="content1"></vue-editor>
                        </div>
                        <div class="mail-info-footer">
                            <div class="float-end">
                                <button class="btn btn-primary">
                                    <i class="ri-share-forward-line me-1 d-inline-block align-middle"></i>Forward
                                </button>
                                <button class="btn btn-danger ms-1">
                                    <i class="ri-reply-all-line me-1 d-inline-block align-middle"></i>Reply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End::mail information offcanvas -->
    <!-- Start::compose mail modal -->
    <div class="modal modal-lg fade" id="mail-Compose" tabindex="-1" aria-labelledby="mail-ComposeLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title" id="mail-ComposeLabel">Compose Mail</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-4">
                    <div class="row">
                        <div class="col-xl-6 mb-2">
                            <label for="fromMail" class="form-label">From<sup><i
                                        class="ri-star-s-fill text-success fs-8"></i></sup></label>
                            <input type="email" class="form-control" id="fromMail" value="jackmiller2345@gmail.com">
                        </div>
                        <div class="col-xl-6 mb-2">
                            <label for="toMail" class="form-label">To<sup><i
                                        class="ri-star-s-fill text-success fs-8"></i></sup></label>
                            <VueMultiselect :searchable="false" :show-labels="false" :multiple="true"
                                v-model="MaildataValue" :options="Maildata" :taggable="false">
                            </VueMultiselect>
                        </div>
                        <div class="col-xl-6 mb-2">
                            <label for="mailCC" class="form-label text-dark fw-medium">Cc</label>
                            <input type="email" class="form-control" id="mailCC">
                        </div>
                        <div class="col-xl-6 mb-2">
                            <label for="mailBcc" class="form-label text-dark fw-medium">Bcc</label>
                            <input type="email" class="form-control" id="mailBcc">
                        </div>
                        <div class="col-xl-12 mb-2">
                            <label for="Subject" class="form-label">Subject</label>
                            <input type="text" class="form-control" id="Subject" placeholder="Subject">
                        </div>
                        <div class="col-xl-12">
                            <label class="col-form-label">Content :</label>
                            <div class="mail-compose">
                                <div id="mail-compose-editor">
                                    <vue-editor v-model="content1"></vue-editor>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Send</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End::compose mail modal -->
</template>

<style scoped>
/* Add your styles here */
</style>
