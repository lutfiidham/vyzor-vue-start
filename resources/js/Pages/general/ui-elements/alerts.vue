<script setup>
import * as alertsData from "@/shared/data/ui-elements/alerts"
import * as prism from "@/shared/data/prismCode/ui-elements/alerts";
import Pageheader from "@/components/pageheader/pageheader.vue";
import ShowcodeCard from "../../../../UI/showcodeCard.vue";
import { ref } from "vue";
import BaseImg from "../../../components/Baseimage/BaseImg.vue";
import { Head } from "@inertiajs/vue3";


// Reactive state for alerts
const alerts = ref([]);

// Function to handle the alert showing
const handleShowAlert = () => {
  const newAlert = {
    id: new Date().getTime() // Unique ID for each alert
  };
  alerts.value.push(newAlert); // Add new alert to the state
};

const dataToPass = {
  title: 'Ui Elements',
  currentpage: 'Alerts',
  activepage: 'Alerts',
}

</script>

<template>
    <Head title="Alerts | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />
    <!--ROW-START-->
    <div class="row">
        <div class="col-xl-12">
            <ShowcodeCard title="Basic Alerts" :code="prism.basic">
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields
                    below.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Live example" :code="prism.live">
                <div  v-for="alert in alerts" :key="alert.id" class="alert alert-success alert-dismissible fade show" role="alert">
                    <div>Nice, you triggered this alert message!</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
                <button type="button" class="btn btn-primary my-1" id="liveAlertBtn" @click="handleShowAlert">Show
                    live
                    alert
                </button>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Outline Alerts" :code="prism.outlineAlerts">
                <div :class="`alert alert-${idx.class} alert-dismissible fade show`"
                    v-for="(idx, index) in alertsData.Outlinealerts" :key="index">
                    {{ idx.text }}
                    <button type="button" :class="`btn-close ${idx.color}`" data-bs-dismiss="alert"
                        aria-label="Close"><i class="bi bi-x"></i></button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Solid Alerts With Different Shadows" :code="prism.solidAlertsWithDifferentShadows">
                <div :class="`alert alert-${idx.class} shadow-${idx.size} alert-dismissible fade show`"
                    v-for="(idx, index) in alertsData.Shadowsolidalerts" :key="index">
                    {{ idx.text }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Default Alerts With Different Shadows" :code="prism.defaultAlertsWithDifferentShadows">
                <div :class="`alert alert-${idx.class} shadow-${idx.size}`"
                    v-for="(idx, index) in alertsData.Defaultsolidalerts" :key="index">
                    {{ idx.text }}
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Default alerts" :code="prism.defaultAlerts">
                <div :class="`alert alert-${idx.class}`" role="alert" v-for="(idx, index) in alertsData.Defaultalerts"
                    :key="index">
                    {{ idx.text }}
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Links in alerts" :code="prism.linksInAlerts">
                <div :class="`alert alert-${idx.class}`" role="alert" v-for="(idx, index) in alertsData.Linkalerts"
                    :key="index">
                    {{ idx.text1 }} <a href="javascript:void(0);" class="alert-link">{{ idx.text2 }}</a>.
                    {{ idx.text3 }}
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Solid Colored Alerts" :code="prism.solidColoredAlerts">
                <div :class="`alert alert-${idx.class} alert-dismissible fade show ${idx.color} `"
                    v-for="(idx, index) in alertsData.Solidalerts" :key="index">
                    {{ idx.text }}
                    <button type="button" :class="`btn-close ${idx.color}`" data-bs-dismiss="alert"
                        aria-label="Close"><i class="bi bi-x"></i></button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Rounded Solid Alerts" :code="prism.roundedSolidAlerts">
                <div :class="`alert alert-${idx.class} rounded-pill alert-dismissible fade show`"
                    v-for="(idx, index) in alertsData.Roundedsolidalerts" :key="index">
                    {{ idx.text }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Rounded Outline Alerts" :code="prism.roundedOutlineAlerts">
                <div :class="`alert alert-${idx.class} rounded-pill alert-dismissible fade show`"
                    v-for="(idx, index) in alertsData.Roundedoutlinealerts" :key="index">
                    {{ idx.text }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Rounded Default Alerts" :code="prism.roundedDefaultAlerts">
                <div :class="`alert alert-${idx.class} rounded-pill alert-dismissible fade show`"
                    v-for="(idx, index) in alertsData.Roundedefaultalerts">
                    {{ idx.text }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Rounded Alerts With Custom Close Button"
                :code="prism.roundedAlertsWithCustomCloseButton">
                <div :class="`alert alert-${idx.class} rounded-pill alert-dismissible fade show`"
                    v-for="(idx, index) in alertsData.Roundewithbtnalerts" :key="index">
                    {{ idx.text }}
                    <button type="button" class="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Customized Alerts With SVG's" :code="prism.customizedAlertsWithSVGs">
                <div :class="`alert svg-${idx.color} alert-${idx.color} alert-dismissible fade show custom-alert-icon shadow-sm`"
                    role="alert" v-for="(idx, index) in alertsData.Customizedalert1" :key="index">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem"
                        fill="#000000">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path :d="idx.class1" />
                    </svg>
                    A customized primary alert with an icon
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            class="bi bi-x"></i></button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Alerts with icons" :code="prism.alertsWithIcons">
                <div class="alert alert-primary svg-primary d-flex align-items-center" role="alert">
                    <svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                        viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                    <div>
                        An example alert with an icon
                    </div>
                </div>
                <div class="alert alert-success svg-success d-flex align-items-center" role="alert">
                    <svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                        viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                        <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                    </svg>
                    <div>
                        An example success alert with an icon
                    </div>
                </div>
                <div class="alert alert-warning svg-warning d-flex align-items-center" role="alert">
                    <svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
                        height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" />
                                    <polygon points="13,16 11,16 11,18 13,18" />
                                    <polygon points="13,10 11,10 11,15 13,15" />
                                </g>
                            </g>
                        </g>
                    </svg>
                    <div>
                        An example warning alert with an icon
                    </div>
                </div>
                <div class="alert alert-danger svg-danger d-flex align-items-center" role="alert">
                    <svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
                        height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path
                                        d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" />
                                    <rect height="6" width="2" x="11" y="7" />
                                    <rect height="2" width="2" x="11" y="15" />
                                </g>
                            </g>
                        </g>
                    </svg>
                    <div>
                        An example danger alert with an icon
                    </div>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Alerts With Images" :code="prism.alertsWithImages">
                <div :class="`alert alert-img alert-${idx.color} alert-dismissible fase show rounded-pill flex-wrap`"
                    role="alert" v-for="(idx, index) in alertsData.Imagealerts" :key="index">
                    <div class="avatar avatar-sm me-3 avatar-rounded">
                        <BaseImg :src="idx.src1" alt="img"/>
                    </div>
                    <div>A simple {{ idx.color }} alert with image—check it out!</div>
                    <button type="button" :class="`btn-close ${idx.class}`" data-bs-dismiss="alert"
                        aria-label="Close"><i class="bi bi-x"></i></button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Alerts With Different size Images" :code="prism.alertsWithDifferentSizeImages">
                <div :class="`alert alert-img alert-${idx.color} alert-dismissible fase show flex-wrap`" role="alert"
                    v-for="(idx, index) in alertsData.avatarsizealert" :key="index">
                    <div :class="`avatar avatar-${idx.class} me-3`">
                        <BaseImg :src="idx.src1" alt="img"/>
                    </div>
                    <div>A simple {{ idx.color }} alert with image—check it out!</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i
                            :class="`bi bi-x ${idx.class1}`"></i></button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Additional content" :code="prism.additionalContent">
                <div class="row gy-3">
                    <div class="col-xl-6" v-for="(idx, index) in alertsData.Additionalcontentalerts" :key="index">
                        <div :class="`alert alert-${idx.class} overflow-hidden p-0`" role="alert">
                            <div :class="`p-3 bg-${idx.class} text-fixed-white d-flex justify-content-between`">
                                <h6 class="aletr-heading mb-0 text-fixed-white">Thank you for reporting this.</h6>
                                <button type="button" class="btn-close p-0 text-fixed-white" data-bs-dismiss="alert"
                                    aria-label="Close"><i class="bi bi-x"></i></button>
                            </div>
                            <hr class="my-0">
                            <div class="p-3">
                                <p class="mb-0">{{ idx.text2 }} <a href="javascript:void(0);"
                                        class="fw-medium text-decoration-underline">{{ idx.text3 }}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <div class="row">
                <div class="col-xl-3" v-for="(idx, index) in alertsData.Svgalert1" :key="index">
                    <div class="card border-0">
                        <div :class="`alert alert-solid-${idx.color} border border-${idx.color} mb-0 p-2`">
                            <div class="d-flex align-items-start">
                                <div class="me-2 svg-white" v-html="idx.class1">
                                </div>
                                <div class="text-fixed-white w-100">
                                    <div class="fw-medium d-flex justify-content-between">{{ idx.text1 }}<button
                                            type="button" class="btn-close p-0" data-bs-dismiss="alert"
                                            aria-label="Close"><i class="bi bi-x"></i></button></div>
                                    <div class="fs-12 op-8 mb-1">{{ idx.text2 }}</div>
                                    <div class="fs-12 d-inline-flex">
                                        <a href="javascript:void(0);"
                                            :class="`text-fixed-white fw-medium me-2 op-7 ${idx.class}`">{{ idx.btn1
                                            }}</a>
                                        <a href="javascript:void(0);" class="text-fixed-white fw-medium">{{ idx.btn2
                                            }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="row">
                <div class="col-xl-3" v-for="(idx, index) in alertsData.Svgalert" :key="index">
                    <div class="card border-0">
                        <div :class="`alert alert-${idx.color} border border-${idx.color} mb-0 p-2`">
                            <div class="d-flex align-items-start">
                                <div :class="`me-2 svg-${idx.color}`" v-html="idx.class1">
                                </div>
                                <div :class="`text-${idx.color} w-100`">
                                    <div class="fw-medium d-flex justify-content-between">{{ idx.text1 }}<button
                                            type="button" class="btn-close p-0" data-bs-dismiss="alert"
                                            aria-label="Close"><i class="bi bi-x"></i></button></div>
                                    <div class="fs-12 op-8 mb-1">{{ idx.text2 }}</div>
                                    <div class="fs-12 d-inline-flex">
                                        <a href="javascript:void(0);"
                                            :class="`text-${idx.class} fw-medium me-2 d-inline-block`">cancel</a>
                                        <a href="javascript:void(0);" :class="`text-${idx.color} fw-medium`">open</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="row">
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class=" card bg-white alert custom-alert1 alert-primary mb-3">
                        <button type="button" class="btn-close ms-auto p-0" data-bs-dismiss="alert" aria-label="Close"><i
                                class="bi bi-x"></i></button>
                        <div class="text-center px-5 pb-0 svg-primary">
                            <svg class="custom-alert-icon" xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                                viewBox="0 0 24 24" width="1.5rem">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                            </svg>
                            <h5>Information?</h5>
                            <p class="">This alert is created to just show the related information.</p>
                            <div class="">
                                <button class="btn btn-sm btn-outline-danger m-1">Decline</button>
                                <button class="btn btn-sm btn-primary m-1">Accept</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="card bg-white alert custom-alert1 alert-secondary mb-3">
                        <button type="button" class="btn-close ms-auto p-0" data-bs-dismiss="alert" aria-label="Close"><i
                                class="bi bi-x"></i></button>
                        <div class="text-center px-5 pb-0 svg-secondary">
                            <svg class="custom-alert-icon" xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                                viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                            <h5>Confirmed</h5>
                            <p class="">This alert is created to just show the confirmation message.</p>
                            <div class="">
                                <button class="btn btn-sm btn-secondary m-1">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="card bg-white alert custom-alert1 alert-warning mb-3">
                        <button type="button" class="btn-close ms-auto p-0" data-bs-dismiss="alert" aria-label="Close"><i
                                class="bi bi-x"></i></button>
                        <div class="text-center px-5 pb-0 svg-warning">
                            <svg class="custom-alert-icon" xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                                viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                            </svg>
                            <h5>Warning</h5>
                            <p class="">This alert is created to just show the warning message.</p>
                            <div class="">
                                <button class="btn btn-sm btn-outline-secondary m-1">Back</button>
                                <button class="btn btn-sm btn-warning m-1">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="card bg-white alert custom-alert1 alert-danger mb-3">
                        <button type="button" class="btn-close ms-auto p-0" data-bs-dismiss="alert" aria-label="Close"><i
                                class="bi bi-x"></i></button>
                        <div class="text-center px-5 pb-0 svg-danger">
                            <svg class="custom-alert-icon" xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                                viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" />
                            </svg>
                            <h5>danger</h5>
                            <p class="">This alert is created to just show the danger message.</p>
                            <div class="">
                                <button class="btn btn-sm btn-danger m-1">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--ROW-END-->
</template>

<style scoped>
/* Add your styles here */
</style>
