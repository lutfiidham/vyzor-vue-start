<script setup>
import * as badgeData from "@/shared/data/ui-elements/badges"
import * as prism from "@/shared/data/prismCode/ui-elements/badges";
import Pageheader from "@/components/pageheader/pageheader.vue";
import ShowcodeCard from "../../../../UI/showcodeCard.vue";
import BaseImg from "../../../components/Baseimage/BaseImg.vue";
import { Head } from "@inertiajs/vue3";

const dataToPass = {
    title: "Ui Elements",
    currentpage: "Badge",
    activepage: "Badge"
}

</script>

<template>
    <Head title="Badge | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <ShowcodeCard title="Badges" customCardBodyClass="d-flex flex-wrap gap-2" :code="prism.badges">
                <span :class="`badge bg-${idx.color} ${idx.class}`" v-for="(idx, index) in badgeData.Badgesdata"
                    :key="index">{{ idx.heading }}</span>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Light Badges" customCardBodyClass="d-flex flex-wrap gap-2" :code="prism.lightBadges">
                <span :class="`badge bg-${badge.color}-transparent ${badge.class}`"
                    v-for="(badge, index) in badgeData.Outlinebadgesdata" :key="index">{{ badge.heading }}</span>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <ShowcodeCard title="Pill Badges" customCardBodyClass="d-flex flex-wrap gap-2" :code="prism.pillBadges">
                <span :class="`badge rounded-pill bg-${badge.color} ${badge.class}`"
                    v-for="(badge, index) in badgeData.Badgesdata" :key="index">{{ badge.heading }}</span>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Light Pill Badges" customCardBodyClass="d-flex flex-wrap gap-2"
                :code="prism.lightPillBadges">
                <span :class="`badge rounded-pill bg-${badge.color}-transparent ${badge.class}`"
                    v-for="(badge, index) in badgeData.Outlinebadgesdata" :key="index">{{ badge.heading }}</span>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End::row-2 -->

    <!-- Start::row-3 -->
    <div class="row">
        <div class="col-xl-12">
            <ShowcodeCard title="Gradient Badges" customCardBodyClass="d-flex flex-wrap gap-2"
                :code="prism.gradientBadges">
                <span :class="`badge bg-${badge1.color}-gradient`" v-for="(badge1, index) in badgeData.badges1"
                    :key="index">{{ badge1.heading }}</span>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Gradient Pill Badges" customCardBodyClass="d-flex flex-wrap gap-2"
                :code="prism.gradientPillBadges">
                <span :class="`badge rounded-pill bg-${badge1.color}-gradient`"
                    v-for="(badge1, index) in badgeData.badges1" :key="index">{{ badge1.heading }}</span>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End::row-3 -->

    <!-- Start::row-4 -->
    <div class="row">
        <div class="col-xl-12">
            <ShowcodeCard title="Outline Badges" customCardBodyClass="d-flex flex-wrap gap-2"
                :code="prism.outlineBadges">
                <span :class="`badge bg-outline-${badge.color} ${badge.class}`"
                    v-for="(badge, index) in badgeData.Outlinebadgesdata" :key="index">{{ badge.heading }}</span>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Outline Pill Badges" customCardBodyClass="d-flex flex-wrap gap-2"
                :code="prism.outlinePillBadges">
                <span :class="`badge rounded-pill bg-outline-${badge.color} ${badge.class}`"
                    v-for="(badge, index) in badgeData.Outlinebadgesdata" :key="index">{{ badge.heading }}</span>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End::row-4 -->

    <!-- Start::row-5 -->
    <div class="row">
        <div class="col-xl-12">
            <ShowcodeCard title="Buttons With Badges" customCardBodyClass="d-flex flex-wrap gap-2"
                :code="prism.buttonsWithBadges">
                <button type="button" class="btn btn-primary my-1 me-2">
                    Notifications <span class="badge ms-2 bg-secondary">4</span>
                </button>
                <button type="button" class="btn btn-secondary my-1 me-2">
                    Notifications <span class="badge ms-2 bg-primary">7</span>
                </button>
                <button type="button" class="btn btn-success my-1 me-2">
                    Notifications <span class="badge ms-2 bg-danger">12</span>
                </button>
                <button type="button" class="btn btn-info my-1 me-2">
                    Notifications <span class="badge ms-2 bg-warning">32</span>
                </button>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Outline Button Badges" customCardBodyClass="d-flex flex-wrap gap-2"
                :code="prism.outlineButtonBadges">
                <button type="button" class="btn btn-outline-primary my-1 me-2">
                    Notifications <span class="badge ms-2">4</span>
                </button>
                <button type="button" class="btn btn-outline-secondary my-1 me-2">
                    Notifications <span class="badge ms-2">7</span>
                </button>
                <button type="button" class="btn btn-outline-success my-1 me-2">
                    Notifications <span class="badge ms-2">12</span>
                </button>
                <button type="button" class="btn btn-outline-info my-1 me-2">
                    Notifications <span class="badge ms-2">32</span>
                </button>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End::row-5 -->

    <!-- Start::row- -->
    <div class="row">
        <div class="col-xl-12">
            <div class="row">
                <div class="col-xl-12">
                    <ShowcodeCard title="Positioned Badges" customCardBodyClass="d-flex flex-wrap gap-4 pe-4"
                        :code="prism.positionedBadges">
                        <button type="button" class="btn btn-primary position-relative">
                            Inbox
                            <span
                                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                99+
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </button>
                        <button type="button" class="btn btn-secondary position-relative">
                            Profile
                            <span
                                class="position-absolute top-80 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
                                <span class="visually-hidden">New alerts</span>
                            </span>
                        </button>
                        <span class="avatar">
                            <BaseImg src="/images/faces/2.jpg" alt="img"/>

                            <span
                                class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                <span class="visually-hidden">New alerts</span>
                            </span>
                        </span>
                        <span class="avatar avatar-rounded">
                            <BaseImg src="/images/faces/15.jpg" alt="img"/>
                            <span
                                class="position-absolute top-80 start-100 translate-middle p-1 bg-success border border-light              rounded-circle">
                                <span class="visually-hidden">New alerts</span>
                            </span>
                        </span>
                        <span class="avatar avatar-rounded">
                            <BaseImg src="/images/faces/10.jpg" alt="img"/>
                            <span
                                class="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">1000+
                                <span class="visually-hidden">New alerts</span>
                            </span>
                        </span>
                    </ShowcodeCard>
                </div>
                <div class="col-xl-12">
                    <ShowcodeCard title="Custom Badges" :code="prism.customBadges">
                        <div class="d-flex align-items-center gap-5 flex-wrap">
                            <div>
                                <span
                                    class="badge bg-outline-secondary custom-badge fs-15 d-inline-flex align-items-center"><i
                                        class="ti ti-flame me-1"></i>Hot</span>
                            </div>
                            <div>
                                <span class="icon-badge">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px"
                                        viewBox="0 0 24 24" width="24px" fill="#000000">
                                        <path
                                            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                                    </svg>
                                    <span class="badge rounded-pill bg-success">14</span>
                                </span>
                            </div>
                            <div>
                                <span class="badge border bg-light text-default custom-badge"><i
                                        class="fe fe-eye me-2 d-inline-block"></i>13.2k</span>
                            </div>
                            <div>
                                <span class="text-badge">
                                    <span class="text fs-18">Inbox</span>
                                    <span class="badge rounded-pill bg-success">32</span>
                                </span>
                            </div>
                        </div>
                    </ShowcodeCard>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Headings" :code="prism.headings">
                <h1>Example heading <span class="badge bg-primary">New</span></h1>
                <h2>Example heading <span class="badge bg-primary">New</span></h2>
                <h3>Example heading <span class="badge bg-primary">New</span></h3>
                <h4>Example heading <span class="badge bg-primary">New</span></h4>
                <h5>Example heading <span class="badge bg-primary">New</span></h5>
                <h6>Example heading <span class="badge bg-primary">New</span></h6>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End::row- -->
</template>

<style scoped>
/* Add your styles here */
</style>
