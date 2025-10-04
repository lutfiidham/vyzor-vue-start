<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as ChatData from '@/shared/data/applications/chartdata'
import simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'
import EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css'
import ChatGalleryList from "../../../UI/chatGalleryList.vue";
import Pageheader from "@/components/pageheader/pageheader.vue";
import BaseImg from '../../components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'


// Emoji picker state
const showPicker = ref(false)
const inputValue = ref('')
const pickerRef = ref(null)

const handleEmojiClick = (emojiData) => {
    inputValue.value += emojiData.i
}

const handleClickOutside = (event) => {
    if (pickerRef.value && !pickerRef.value.contains(event.target)) {
        showPicker.value = false
    }
}

onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside, { passive: true })
})

onBeforeUnmount(() => {
    document.removeEventListener('mousedown', handleClickOutside)
})

// Chat user data
const activeUser = ref({
    name: 'Alice Smith',
    image: '/images/faces/2.jpg',
    status: 'online',
})

// Change active user
const handleChatClick = (user) => {
    activeUser.value = {
        name: user.name,
        image: user.image,
        status: user.status,
    }
}

// Chat panel toggle
const chartWrapper = ref(null)

const toggleChat = () => {
    if (chartWrapper.value) {
        chartWrapper.value.classList.add('responsive-chat-open')
    }
}

const toggleChat1 = () => {
    if (chartWrapper.value) {
        chartWrapper.value.classList.remove('responsive-chat-open')
    }
}

// Page meta info
const dataToPass = {
    title: 'Applications',
    currentpage: 'Chat',
    activepage: 'Chat',
}

</script>


<template>

    <Head title="Chat | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />

    <div class="main-chart-wrapper gap-lg-2 gap-0 mb-3 d-lg-flex" ref="chartWrapper">
        <div class="chat-info border">
            <div class="d-flex align-items-center justify-content-between w-100 p-3 border-bottom">
                <div>
                    <h5 class="fw-semibold mb-0">Messages</h5>
                </div>
                <div class="dropdown ms-2">
                    <button aria-label="button" class="btn btn-icon btn-light btn-wave waves-light btn-sm" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ti ti-dots-vertical"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">New Chat</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Create Group</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Invite a Friend</a></li>
                    </ul>
                </div>
            </div>
            <ul class="nav nav-style-1 nav-pills nav-justified p-2 border-bottom d-flex" id="myTab1" role="tablist">
                <li class="nav-item me-0" role="presentation">
                    <button class="nav-link active" id="users-tab" data-bs-toggle="tab" data-bs-target="#users-tab-pane"
                        type="button" role="tab" aria-controls="users-tab-pane" aria-selected="true">Recents<span
                            class="badge bg-secondary ms-1 rounded-pill">04</span></button>
                </li>
                <li class="nav-item me-0" role="presentation">
                    <button class="nav-link" id="groups-tab" data-bs-toggle="tab" data-bs-target="#groups-tab-pane"
                        type="button" role="tab" aria-controls="groups-tab-pane" aria-selected="false">Groups</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contacts-tab" data-bs-toggle="tab" data-bs-target="#contacts-tab-pane"
                        type="button" role="tab" aria-controls="contacts-tab-pane"
                        aria-selected="false">Contacts</button>
                </li>
            </ul>
            <div class="chat-search p-3 border-bottom border-block-end-dashed">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search Here" aria-describedby="button-addon2">
                    <button aria-label="button" class="btn btn-primary" type="button" id="button-addon2"><i
                            class="ri-search-line"></i></button>
                </div>
            </div>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane show active border-0 chat-users-tab" id="users-tab-pane" role="tabpanel"
                    aria-labelledby="users-tab" tabindex="0">
                    <PerfectScrollbar id="chat-msg-scroll">
                        <ul class="list-unstyled mb-0 mt-2 chat-users-tab">
                            <li class="pb-0">
                                <p class="text-muted fs-11 fw-medium mb-2 op-7">Recent Chats</p>
                            </li>
                            <li :class="`checkforactive ${activeUser.name === idx.name ? 'active chat-msg-unread' : 'chat-inactive'}`"
                                v-for='(idx) in ChatData.ChatUsers' :key="idx.id" @click="handleChatClick(idx)">
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-top">
                                        <div class="me-1 lh-1">
                                            <span :class="`avatar avatar-md ${idx.status} me-2 avatar-rounded`">
                                                <BaseImg :src="idx.image" alt="img" />
                                            </span>
                                        </div>
                                        <div class="flex-fill" @click="toggleChat">
                                            <p class="mb-0 fw-medium">
                                                {{ idx.name }} <span class="float-end text-muted fw-normal fs-11">{{
                                                    idx.time }}</span>
                                            </p>
                                            <p :class="`fs-13 mb-0 ${idx.typing ? 'chat-msg-typing' : ''}`">
                                                <span class="chat-msg !text-truncate">{{ idx.message }}</span>
                                                <span
                                                    :class="`badge ${idx.typing ? 'bg-warning' : 'bg-primary'} rounded-pill float-end`"
                                                    v-if="idx.unreadCount > 0">{{ idx.unreadCount }}</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="pb-0">
                                <p class="text-muted fs-11 fw-medium mb-2 op-7">All Chats</p>
                            </li>
                            <li :class="`checkforactive ${activeUser.name === idx.name ? 'active chat-msg-unread' : 'chat-inactive'}`"
                                v-for="(idx) in ChatData.ChatUsers1" :key="idx.id" @click="handleChatClick(idx)">
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-top">
                                        <div class="me-1 lh-1">
                                            <span :class="`avatar avatar-md ${idx.status} me-2 avatar-rounded`">
                                                <BaseImg :src="idx.image" alt="img" />
                                            </span>
                                        </div>
                                        <div class="flex-fill" @click="toggleChat">
                                            <p class="mb-0 fw-medium">
                                                {{ idx.name }} <span class="float-end text-muted fw-normal fs-11">{{
                                                    idx.time }}</span>
                                            </p>
                                            <p class="fs-13 mb-0">
                                                <span class="chat-msg !text-truncate">{{ idx.message }}</span>
                                                <span class="chat-read-icon float-end align-middle"><i
                                                        class="ri-check-double-fill"></i></span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </PerfectScrollbar>
                </div>
                <div class="tab-pane border-0 chat-groups-tab" id="groups-tab-pane" role="tabpanel"
                    aria-labelledby="groups-tab" tabindex="0">
                    <PerfectScrollbar class="list-unstyled mb-0 mt-2 chat-users-tab" id="chat-msg-scroll">
                        <ul class="list-unstyled mb-0 mt-2 ">
                            <li class="pb-0">
                                <p class="text-muted fs-11 fw-medium mb-1 op-7">Groups</p>
                            </li>
                            <li v-for="(idx) in ChatData.GroupChats" :key="idx.id">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p class="mb-0">{{ idx.id }}) {{ idx.name }}</p>
                                        <p class="mb-0"><span class="badge bg-light text-default border">{{
                                            idx.onlineCount }}
                                                Online</span></p>
                                    </div>
                                    <div class="avatar-list-stacked my-auto">
                                        <span class="avatar avatar-sm avatar-rounded mx-2"
                                            v-for="(img, index) in idx.avatars" :key="index">
                                            <BaseImg :src="img" alt="img" />
                                        </span>
                                        <a class="avatar avatar-sm bg-primary avatar-rounded"
                                            href="javascript:void(0);">
                                            +{{ idx.extraCount }}
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul class="list-unstyled mb-0 mt-2 ">
                            <li class="pb-0">
                                <p class="text-muted fs-11 fw-medium mb-1 op-7">Group Chats</p>
                            </li>
                            <li :class="`checkforactive ${activeUser.name === idx.name ? 'active chat-msg-unread' : 'chat-inactive'}`"
                                v-for="(idx) in ChatData.GroupChatPreviews" :key="idx.id" @click="handleChatClick(idx)">
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-top">
                                        <div class="me-1 lh-1">
                                            <span
                                                :class="`avatar avatar-md ${idx.online ? 'online' : 'offline'}  me-2 avatar-rounded`">
                                                <BaseImg :src="idx.image" alt="img" />
                                            </span>
                                        </div>
                                        <div class="flex-fill" @click="toggleChat">
                                            <p class="mb-0 fw-medium">
                                                {{ idx.name }} <span class="float-end text-muted fw-normal fs-11">{{
                                                    idx.time }}</span>
                                            </p>
                                            <p class="fs-13 mb-0">
                                                <span class="chat-msg !text-truncate"><span class="group-indivudial">{{
                                                    idx.sender }} {{ idx.sender ? ':' : '' }}</span> {{ idx.message
                                                        }}</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </PerfectScrollbar>
                </div>
                <div class="tab-pane border-0 chat-contacts-tab" id="contacts-tab-pane" role="tabpanel"
                    aria-labelledby="contacts-tab" tabindex="0">
                    <PerfectScrollbar>
                        <ul class="list-unstyled mb-0 chat-contacts-tab">
                            <template v-for="(idx) in ChatData.GroupedContacts" :key="idx.id">
                                <li>
                                    <span class="text-default fw-semibold">{{ idx.letter }}</span>
                                </li>
                                <li v-for="(data, index) in idx.contacts" :key="index">
                                    <div class="d-flex align-items-center gap-3">
                                        <div class="lh-1">
                                            <span
                                                :class="`avatar avatar-rounded avatar-sm ${data.initials ? 'bg-light text-default' : ''} `">
                                                <template v-if="data.avatar">
                                                    <BaseImg :src="data.avatar" alt="" />
                                                </template>
                                                <template v-if="data.initials">
                                                    {{ data.initials }}
                                                </template>
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="d-block fw-semibold">
                                                {{ data.name }}
                                            </span>
                                        </div>
                                        <div class="dropdown">
                                            <a aria-label="anchor" href="javascript:void(0);" data-bs-toggle="dropdown"
                                                class="btn btn-icon btn-sm btn-outline-light">
                                                <i class="ri-more-2-fill"></i>
                                            </a>
                                            <ul class="dropdown-menu" role="menu">
                                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                            class="ri-message-2-line me-2"></i>Chat</a></li>
                                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                            class="ri-phone-line me-2"></i>Audio Call</a></li>
                                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                            class="ri-live-line me-2"></i>Video Call</a></li>
                                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                            class="ri-edit-line me-2"></i>Edit</a></li>
                                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                            class="ri-spam-2-line me-2"></i>Block</a></li>
                                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                            class="ri-delete-bin-line me-2"></i>Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </template>
                        </ul>
                    </PerfectScrollbar>
                </div>
            </div>
        </div>
        <div class="main-chat-area border">
            <div class="d-flex align-items-center border-bottom main-chat-head flex-wrap">
                <div class="me-2 lh-1">
                    <span
                        :class="`avatar avatar-md ${activeUser.status === 'online' ? 'online' : 'offline'} avatar-rounded chatstatusperson`">
                        <BaseImg class="chatimageperson" :src="activeUser.image" alt="img" />
                    </span>
                </div>
                <div class="flex-fill">
                    <p class="mb-0 fw-medium fs-14 lh-1">
                        <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight" class="chatnameperson responsive-userinfo-open">{{
                                activeUser.name
                            }}</a>
                    </p>
                    <p class="text-muted mb-0 chatpersonstatus">online</p>
                </div>
                <div class="d-flex align-items-center flex-wrap rightIcons">
                    <button aria-label="button" type="button" class="btn btn-icon btn-light ms-2 btn-sm">
                        <i class="ti ti-phone"></i>
                    </button>
                    <button aria-label="button" type="button" class="btn btn-icon btn-light ms-2 btn-sm">
                        <i class="ti ti-video"></i>
                    </button>
                    <button aria-label="button" type="button"
                        class="btn btn-icon btn-light ms-2 responsive-userinfo-open btn-sm">
                        <i class="ti ti-user-circle" id="responsive-chat-close"></i>
                    </button>
                    <div class="dropdown ms-2">
                        <button aria-label="button" class="btn btn-icon btn-light btn-wave waves-light btn-sm"
                            type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ti ti-dots-vertical"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-user-3-line me-1"></i>Profile</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-format-clear me-1"></i>Clear
                                    Chat</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-user-unfollow-line me-1"></i>Delete User</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-user-forbid-line me-1"></i>Block User</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-error-warning-line me-1"></i>Report</a></li>
                        </ul>
                    </div>
                    <button aria-label="button" type="button"
                        class="btn btn-icon btn-light ms-2 responsive-chat-close btn-sm" @click="toggleChat1">
                        <i class="ri-close-line"></i>
                    </button>
                </div>
            </div>
            <simplebar>

                <div class="chat-content" id="main-chat-content">
                    <div class="chat-content-background">
                        <BaseImg src="/images/media/backgrounds/12.png" alt="" />

                    </div>
                    <ul class="list-unstyled">
                        <li class="chat-day-label">
                            <span>Today</span>
                        </li>
                        <li class="chat-item-start">
                            <div class="chat-list-inner">
                                <div class="chat-user-profile">
                                    <span
                                        :class="`avatar avatar-md ${activeUser.status === 'online' ? 'online' : 'offline'} avatar-rounded chatstatusperson`">
                                        <BaseImg class="chatimageperson" :src="activeUser.image" alt="img" />
                                    </span>
                                </div>
                                <div class="ms-3">
                                    <span class="chatting-user-info">
                                        <span class="chatnameperson">{{ activeUser.name }}</span> <span
                                            class="msg-sent-time">10:00 AM</span>
                                    </span>
                                    <div class="main-chat-msg">
                                        <div>
                                            <p class="mb-0">Hey! How are you doing today? &#128522;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="chat-item-end">
                            <div class="chat-list-inner">
                                <div class="me-3">
                                    <span class="chatting-user-info">
                                        <span class="msg-sent-time"><span
                                                class="chat-read-mark align-middle d-inline-flex"><i
                                                    class="ri-check-double-line"></i></span>10:02 AM</span> You
                                    </span>
                                    <div class="main-chat-msg">
                                        <div>
                                            <p class="mb-0">Hi! I'm doing great, thanks for asking. How about you?</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-user-profile">
                                    <span class="avatar avatar-md online avatar-rounded">
                                        <BaseImg src="/images/faces/15.jpg" alt="img" />

                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="chat-item-start">
                            <div class="chat-list-inner">
                                <div class="chat-user-profile">
                                    <span
                                        :class="`avatar avatar-md ${activeUser.status === 'online' ? 'online' : 'offline'} avatar-rounded chatstatusperson`">
                                        <BaseImg class="chatimageperson" :src="activeUser.image" alt="img" />
                                    </span>
                                </div>
                                <div class="ms-3">
                                    <span class="chatting-user-info">
                                        <span class="chatnameperson">{{ activeUser.name }}</span> <span
                                            class="msg-sent-time">10:05 AM</span>
                                    </span>
                                    <div class="main-chat-msg">
                                        <div>
                                            <p class="mb-0">I'm good too.</p>
                                        </div>
                                        <div>
                                            <p class="mb-0">Have you completed the project report yet? &#128221;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="chat-item-end">
                            <div class="chat-list-inner">
                                <div class="me-3">
                                    <span class="chatting-user-info">
                                        <span class="msg-sent-time"><span
                                                class="chat-read-mark align-middle d-inline-flex"><i
                                                    class="ri-check-double-line"></i></span>10:06 AM</span> You
                                    </span>
                                    <div class="main-chat-msg">
                                        <div>
                                            <p class="mb-0">Almost! Just need to finalize a few things. I should be done
                                                by the
                                                end of the day.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-user-profile">
                                    <span class="avatar avatar-md online avatar-rounded">
                                        <BaseImg src="/images/faces/15.jpg" alt="img" />
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="chat-item-start">
                            <div class="chat-list-inner">
                                <div class="chat-user-profile">
                                    <span
                                        :class="`avatar avatar-md ${activeUser.status === 'online' ? 'online' : 'offline'} avatar-rounded chatstatusperson`">
                                        <BaseImg class="chatimageperson" :src="activeUser.image" alt="img" />
                                    </span>
                                </div>
                                <div class="ms-3">
                                    <span class="chatting-user-info">
                                        <span class="chatnameperson">{{ activeUser.name }}</span> <span
                                            class="msg-sent-time">10:10 AM</span>
                                    </span>
                                    <div class="main-chat-msg">
                                        <div>
                                            <p class="mb-0">Awesome! Let me know if you need any help with it.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="chat-item-end">
                            <div class="chat-list-inner">
                                <div class="me-3">
                                    <span class="chatting-user-info">
                                        <span class="msg-sent-time"><span
                                                class="chat-read-mark align-middle d-inline-flex"><i
                                                    class="ri-check-double-line"></i></span>10:11 AM</span> You
                                    </span>
                                    <div class="main-chat-msg">
                                        <div class="">
                                            <p class="mb-0">Thanks! Actually, I was thinking of adding a new section to
                                                the
                                                report. What do you think about including a summary of our recent team
                                                discussions? &#128528;</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-user-profile">
                                    <span class="avatar avatar-md online avatar-rounded">
                                        <BaseImg src="/images/faces/15.jpg" alt="img" />
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="chat-item-start">
                            <div class="chat-list-inner">
                                <div class="chat-user-profile">
                                    <span
                                        :class="`avatar avatar-md ${activeUser.status === 'online' ? 'online' : 'offline'} avatar-rounded`">
                                        <BaseImg class="chatimageperson" :src="activeUser.image" alt="img" />
                                    </span>
                                </div>
                                <div class="ms-3">
                                    <span class="chatting-user-info chatnameperson">
                                        {{ activeUser.name }} <span class="msg-sent-time">10:15 AM</span>
                                    </span>
                                    <div class="main-chat-msg">
                                        <div>
                                            <p class="mb-0">That’s a great idea! It will definitely add more value. I
                                                can help
                                                with writing it if you’d like.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </simplebar>
            <div class="chat-footer">
                <a aria-label="anchor" class="btn btn-icon me-2 btn-light" href="javascript:void(0)">
                    <i class="ri-attachment-line"></i>
                </a>
                <input class="form-control form-control-lg chat-message-space border-0 shadow-none"
                    placeholder="Type your message here..." type="text" v-model="inputValue">
                <a aria-label="anchor" @click="showPicker = !showPicker"
                    class="btn btn-icon ms-2 btn-light emoji-picker" href="javascript:void(0)">
                    <i class="ri-emotion-line"></i>
                </a>
                <div v-if="showPicker" ref="pickerRef" style="position: absolute;z-index:1000;bottom: 4rem;">
                    <EmojiPicker :native="true" @select="handleEmojiClick" />
                </div>
                <a aria-label="anchor" class="btn btn-primary ms-2 btn-icon btn-send" href="javascript:void(0)">
                    <i class="ri-send-plane-2-line"></i>
                </a>
            </div>
        </div>

    </div>

    <!-- Start::chat user details offcanvas -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight">
        <div class="offcanvas-body">
            <button type="button" class="btn-close btn btn-sm btn-icon btn-outline-light border"
                data-bs-dismiss="offcanvas" aria-label="Close"></button>
            <div class="chat-user-details" id="chat-user-details">
                <div class="text-center mb-5">
                    <span
                        :class="`avatar avatar-rounded ${activeUser.status === 'online' ? 'online' : 'offline'} avatar-xxl me-2 mb-3 chatstatusperson`">
                        <BaseImg class="chatimageperson" :src="activeUser.image" alt="img" />
                    </span>
                    <p class="mb-1 fs-15 fw-medium text-dark lh-1 chatnameperson">{{ activeUser.name }}</p>
                    <p class="fs-13 text-muted"><span class="chatnameperson">alicesmith</span>@gmail.com</p>
                    <p class="text-center mb-0">
                        <button type="button" aria-label="button"
                            class="btn btn-icon rounded-pill btn-primary-light btn-wave"><i
                                class="ri-phone-line"></i></button>
                        <button type="button" aria-label="button"
                            class="btn btn-icon rounded-pill btn-success-light ms-2 btn-wave"><i
                                class="ri-chat-1-line"></i></button>
                        <button type="button" aria-label="button"
                            class="btn btn-icon rounded-pill btn-warning-light ms-2 btn-wave"><i
                                class="ri-video-add-line"></i></button>
                    </p>
                </div>
                <div class="mb-5">
                    <div class="fw-medium mb-4">Shared Files
                        <span class="float-end fs-11"><a href="javascript:void(0);" class="fs-13 text-muted"> View All<i
                                    class="ti ti-arrow-narrow-right ms-1"></i> </a></span>
                    </div>
                    <ul class="shared-files list-unstyled">
                        <li>
                            <div class="d-flex align-items-center">
                                <div class="lh-1">
                                    <span class="avatar avatar-lg">
                                        <BaseImg src="/images/media/files/1.png" alt="" />

                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <p class="fs-13 fw-medium mb-0">Vacation_Photo_01.jpg</p>
                                    <p class="mb-0 text-muted fs-11">24,Oct 2025 - 14:24PM</p>
                                </div>
                                <div class="fs-13 text-muted">
                                    3.4 MB
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex align-items-center">
                                <div class="lh-1">
                                    <span class="avatar avatar-lg">
                                        <BaseImg src="/images/media/files/2.png" alt="" />
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <p class="fs-13 fw-medium mb-0">Document_Report_2025.pdf</p>
                                    <p class="mb-0 text-muted fs-11">22,Oct 2025 - 10:19AM</p>
                                </div>
                                <div class="fs-13 text-muted">
                                    1.2 MB
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex align-items-center">
                                <div class="lh-1">
                                    <span class="avatar avatar-lg">
                                        <BaseImg src="/images/media/files/3.png" alt="" />
                                    </span>
                                </div>

                                <div class="flex-fill">
                                    <p class="fs-13 fw-medium mb-0">Design_Assets_Logo.png</p>
                                    <p class="mb-0 text-muted fs-11">22,Oct 2025 - 10:18AM</p>
                                </div>
                                <div class="fs-13 text-muted">
                                    1.5 MB
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex align-items-center">
                                <div class="lh-1">
                                    <span class="avatar avatar-lg">
                                        <BaseImg src="/images/media/files/4.png" alt="" />
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <p class="fs-13 fw-medium mb-0">Project_Files_Backup.zip</p>
                                    <p class="mb-0 text-muted fs-11">22,Oct 2025 - 10:18AM</p>
                                </div>
                                <div class="fs-13 text-muted">
                                    25.8 MB
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="mb-0">
                    <div class="fw-medium mb-4">Photos & Media
                        <span class="float-end fs-11"><a href="javascript:void(0);" class="fs-13 text-muted"> View All<i
                                    class="ti ti-arrow-narrow-right ms-1"></i> </a></span>
                    </div>
                    <ChatGalleryList />
                </div>
            </div>
        </div>
    </div>
    <!-- End::chat user details offcanvas -->
</template>

<style scoped>
/* Add your styles here */
</style>
