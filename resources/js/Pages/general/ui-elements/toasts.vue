<script setup>
import { onMounted, ref } from 'vue';
import * as prism from '@/shared/data/prismCode/ui-elements/toasts';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import Pageheader from "@/components/pageheader/pageheader.vue";
import ShowcodeCard from "../../../../UI/showcodeCard.vue";
import { Head } from '@inertiajs/vue3';
import BaseImg from '../../../components/Baseimage/BaseImg.vue';
// Reactive state
const dataToPass = {
    title: 'Ui Elements',
    currentpage: 'Toasts',
    activepage: 'Toasts'
};

const BASE_URL = ref('');

// Set BASE_URL on mounted
onMounted(() => {
    BASE_URL.value = __BASE_PATH__;
});

// Toast method
function toster(
    text,
    dangerouslyHTMLString,
    theme,
    icon,
    hideProgressBar,
    transition,
    autoclose,
    position,
    delay = 1000,
    closeOnClick = false,
    newestOnTop = false
) {
    toast.success(String(text), {
        theme: theme || 'auto',
        dangerouslyHTMLString,
        icon,
        hideProgressBar,
        transition,
        autoClose: autoclose,
        position,
        delay,
        closeOnClick,
        newestOnTop: newestOnTop || true
    });
}

// Helper to create different types of toast notifications
function successToast(text, dangerouslyHTMLString, theme, icon, hideProgressBar, transition, autoclose, position) {
    toast.success(String(text), {
        theme: theme || 'auto',
        dangerouslyHTMLString,
        icon,
        hideProgressBar,
        transition,
        autoClose: autoclose,
        position
    });
}

function infoToast(text, dangerouslyHTMLString, theme, icon, hideProgressBar, transition, autoclose, position) {
    toast.info(String(text), {
        theme: theme || 'auto',
        dangerouslyHTMLString,
        icon,
        hideProgressBar,
        transition,
        autoClose: autoclose,
        position
    });
}

function warningToast(text, dangerouslyHTMLString, theme, icon, hideProgressBar, transition, autoclose, position) {
    toast.warning(String(text), {
        theme: theme || 'auto',
        dangerouslyHTMLString,
        icon,
        hideProgressBar,
        transition,
        autoClose: autoclose,
        position
    });
}

function errorToast(text, dangerouslyHTMLString, theme, icon, hideProgressBar, transition, autoclose, position) {
    toast.error(String(text), {
        theme: theme || 'auto',
        dangerouslyHTMLString,
        icon,
        hideProgressBar,
        transition,
        autoClose: autoclose,
        position
    });
}

function showliveToast(event) {
    const target = event.currentTarget;
    const ele = target.nextElementSibling?.querySelector('#liveToast');

    if (ele) {
        // Remove 'hide' class if it exists
        ele.classList.remove('hide');

        // Toggle 'show' class to control visibility
        ele.classList.toggle('show');
    }

}
</script>


<template>

    <Head title="Toast | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <ShowcodeCard title="Live example" :code="prism.LiveExample">
                <button type="button" class="btn btn-primary btn-wave" id="liveToastBtn" @click="showliveToast">Show
                    live
                    toast</button>
                <div class="toast-container position-fixed top-0 end-0 p-3">
                    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header text-default">
                            <BaseImg class="bd-placeholder-img rounded me-1" src="/images/brand-logos/toggle-logo.png"
                                alt="..." />
                            <strong class="me-auto">Vyzor</strong>
                            <small>11 mins ago</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </div>
                </div>
            </ShowcodeCard>
            <ShowcodeCard title="Color schemes" :code="prism.ColorSchemes">

                <div class="toast align-items-center text-bg-primary border-0 fade show mb-4" role="alert"
                    aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            Hello, world! This is the Primary toast message.
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                            aria-label="Close"></button>
                    </div>
                </div>
                <div class="toast align-items-center text-bg-secondary border-0 fade show mb-4" role="alert"
                    aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            Hello, world! This is the Secondary toast.
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                            aria-label="Close"></button>
                    </div>
                </div>
                <div class="toast align-items-center text-bg-success border-0 fade show mb-4" role="alert"
                    aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            Hello, world! This is the Success toast message.
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                            aria-label="Close"></button>
                    </div>
                </div>
                <div class="toast align-items-center text-bg-info border-0 fade show" role="alert" aria-live="assertive"
                    aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            Hello, world! This is the info toast message.
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                            aria-label="Close"></button>
                    </div>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Basic example" :code="prism.BasicExample">
                <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header text-default">
                        <BaseImg class="bd-placeholder-img rounded me-1" src="/images/brand-logos/toggle-logo.png"
                            alt="..." />

                        <strong class="me-auto">Vyzor</strong>
                        <small>11 mins ago</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                </div>
            </ShowcodeCard>
            <ShowcodeCard title="Stacking" :code="prism.Stacking">

                <div class="toast-container position-static">
                    <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header text-default">
                            <BaseImg class="bd-placeholder-img rounded me-1" src="/images/brand-logos/toggle-logo.png"
                                alt="..." />

                            <strong class="me-auto">Vyzor</strong>
                            <small class="text-muted">just now</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            See? Just like this.
                        </div>
                    </div>
                    <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header text-default">
                            <BaseImg class="bd-placeholder-img rounded me-1" src="/images/brand-logos/toggle-logo.png"
                                alt="..." />

                            <strong class="me-auto">Vyzor</strong>
                            <small class="text-muted">2 seconds ago</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            Heads up, toasts will stack automatically
                        </div>
                    </div>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Translucent" :code="prism.Translucent">
                <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header text-default">
                        <BaseImg class="bd-placeholder-img rounded me-1" src="/images/brand-logos/toggle-logo.png"
                            alt="..." />

                        <strong class="me-auto">Vyzor</strong>
                        <small class="text-muted">11 mins ago</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                </div>
            </ShowcodeCard>
            <ShowcodeCard title=" Custom content" :code="prism.CustomContent">
                <div class="toast align-items-center fade show mb-3" role="alert" aria-live="assertive"
                    aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                        <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close">
                        </button>
                    </div>
                </div>
                <div>
                    <span class="my-4 text-muted">
                        Alternatively, you can also add additional controls and components to
                        toasts.
                    </span>
                </div>
                <div class="toast fade show mt-2" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-body">
                        Hello, world! This is a toast message.
                        <div class="mt-2 pt-2 border-top">
                            <button type="button" class="btn btn-primary btn-sm btn-wave me-1">Take
                                action</button>
                            <button type="button" class="btn btn-secondary btn-sm btn-wave"
                                data-bs-dismiss="toast">Close</button>
                        </div>
                    </div>
                </div>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-6">
            <ShowcodeCard title="Toast Variants" :code="prism.ToastVariants">
                <div class="btn-list">
                    <button v-on:click="successToast(
                        `<img class='bd-placeholder-img rounded me-2 toast-logo-img' src='${BASE_URL}/images/brand-logos/toggle-logo.png' alt='...'/>` +
                        '<strong class=\' me-auto\'>Vyzor</strong>' +
                        '<div class=\'toast-body\'>Your toast message here.</div>',
                        true,
                        'auto',
                        true,
                        true,
                        'bounce',
                        1000,
                        'top-right'
                    )" type="button" class="btn btn-success-light me-2 btn-wave" id="successToastBtn">success</button>
                    <button v-on:click="warningToast(
                        `<img class=\' bd-placeholder-img rounded me-2 toast-logo-img \' src='${BASE_URL}/images/brand-logos/toggle-logo.png' alt=\'...\'/>` +
                        '<strong class=\' me-auto\'>Vyzor</strong>' +
                        '<div class=\'toast-body\'>Your toast message here.</div>',
                        true,
                        'auto',
                        true,
                        true,
                        'bounce',
                        1000,
                        'top-right'
                    )" type="button" class="btn btn-warning-light me-2 btn-wave" id="warningToastBtn">warning</button>
                    <button v-on:click="infoToast(
                        `<img class=\' bd-placeholder-img rounded me-2 toast-logo-img \' src='${BASE_URL}/images/brand-logos/toggle-logo.png' alt=\'...\'/>` +
                        '<strong class=\' me-auto\'>Vyzor</strong>' +
                        '<div class=\'toast-body\'>Your toast message here.</div>',
                        true,
                        'auto',
                        true,
                        true,
                        'bounce',
                        1000,
                        'top-right'
                    )" type="button" class="btn btn-info-light me-2 btn-wave" id="infoToastBtn">info</button>
                    <button v-on:click="errorToast(
                        `<img class=\' bd-placeholder-img rounded me-2 toast-logo-img \' src='${BASE_URL}/images/brand-logos/toggle-logo.png' alt=\'...\'/>` +
                        '<strong class=\' me-auto\'>Vyzor</strong>' +
                        '<div class=\'toast-body\'>Your toast message here.</div>',
                        true,
                        'auto',
                        true,
                        true,
                        'bounce',
                        1000,
                        'top-right'
                    )" type="button" class="btn btn-danger-light me-2 btn-wave" id="dangerToastBtn">danger</button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-6">
            <ShowcodeCard title="Toast Options" :code="prism.ToastOptions">
                <div class="btn-list">
                    <button v-on:click="toster(
                        `<img class=\' bd-placeholder-img rounded me-2 toast-logo-img \' src='${BASE_URL}/images/brand-logos/toggle-logo.png' alt=\'...\'/>` +
                        '<strong class=\' me-auto\'>Vyzor</strong>' +
                        '<div class=\'toast-body\'>Your toast message here.</div>',
                        true,
                        'auto',
                        false,
                        true,
                        'bounce',
                        1000,
                        'top-right', 0, false, true
                    )" type="button" class="btn btn-secondary me-2 btn-wave" id="solidsecondaryToastBtn">Newest
                        on
                        Top</button>
                    <button v-on:click="toster(
                        `<img class=\' bd-placeholder-img rounded me-2 toast-logo-img \' src='${BASE_URL}/images/brand-logos/toggle-logo.png' alt=\'...\'/>` +
                        '<strong class=\' me-auto\'>Vyzor</strong>' +
                        '<div class=\'toast-body\'>Your toast message here.</div>',
                        true,
                        'auto',
                        true,
                        true,
                        'bounce',
                        1000,
                        'top-right', 3000, false, false
                    )" type="button" class="btn btn-warning me-2 btn-wave" id="solidwarningToastBtn">Delay</button>
                    <button v-on:click="toster(
                        `<img class=\' bd-placeholder-img rounded me-2 toast-logo-img \' src='${BASE_URL}/images/brand-logos/toggle-logo.png' alt=\'...\'/>` +
                        '<strong class=\' me-auto\'>Vyzor</strong>' +
                        '<div class=\'toast-body\'>Your toast message here.</div>',
                        true,
                        'auto',
                        false,
                        true,
                        'bounce',
                        1000,
                        'top-right', 0, true, false
                    )" type="button" class="btn btn-info me-2 btn-wave" id="solidinfoToastBtn">Close on
                        Click</button>
                    <button v-on:click="toster(
                        `<img class=\' bd-placeholder-img rounded me-2 toast-logo-img \' src='${BASE_URL}/images/brand-logos/toggle-logo.png' alt=\'...\'/>` +
                        '<strong class=\' me-auto\'>Vyzor</strong>' +
                        '<div class=\'toast-body\'>Your toast message here.</div>',
                        true,
                        'auto',
                        false,
                        true,
                        'bounce',
                        1000,
                        'top-right'
                    )" type="button" class="btn btn-success me-2 btn-wave" id="solidsuccessToastBtn">Disable
                        Auto
                        Close</button>
                    <button v-on:click="toster(
                        `<img class=\' bd-placeholder-img rounded me-2 toast-logo-img \' src='${BASE_URL}/images/brand-logos/toggle-logo.png' alt=\'...\'/>` +
                        '<strong class=\' me-auto\'>Vyzor</strong>' +
                        '<div class=\'toast-body\'>Your toast message here.</div>',
                        true,
                        'auto',
                        true,
                        false,
                        'zoom',
                        1000,
                        'top-right'
                    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlerightToastBtn">Show
                        ProgressBar</button>
                </div>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xl-12">
            <ShowcodeCard title="Toast Placements" :code="prism.ToastPlacements">
                <div class="btn-list">
                    <button v-on:click="toster(
                        `<img class=\' bd-placeholder-img rounded me-2 toast-logo-img \' src='${BASE_URL}/images/brand-logos/toggle-logo.png' alt=\'...\'/>` +
                        '<strong class=\' me-auto\'>Vyzor</strong>' +
                        '<div class=\'toast-body\'>Your toast message here.</div>',
                        true,
                        'auto',
                        false,
                        true,
                        'bounce',
                        1000,
                        'top-left'
                    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="topleftToastBtn">Top
                        Left</button>
                    <button v-on:click="toster(
                        `<img class=\' bd-placeholder-img rounded me-2 toast-logo-img \' src='${BASE_URL}/images/brand-logos/toggle-logo.png' alt=\'...\'/>` +
                        '<strong class=\' me-auto\'>Vyzor</strong>' +
                        '<div class=\'toast-body\'>Your toast message here.</div>',
                        true,
                        'auto',
                        false,
                        true,
                        'bounce',
                        1000,
                        'top-center'
                    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="topcenterToastBtn">Top
                        Center</button>
                    <button v-on:click="toster(
                        `<img class=\' bd-placeholder-img rounded me-2 toast-logo-img \' src='${BASE_URL}/images/brand-logos/toggle-logo.png' alt=\'...\'/>` +
                        '<strong class=\' me-auto\'>Vyzor</strong>' +
                        '<div class=\'toast-body\'>Your toast message here.</div>',
                        true,
                        'auto',
                        false,
                        true,
                        'bounce',
                        1000,
                        'top-right'
                    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="toprightToastBtn">Top
                        Right</button>
                    <button v-on:click="toster(
                        `<img class=\' bd-placeholder-img rounded me-2 toast-logo-img \' src='${BASE_URL}/images/brand-logos/toggle-logo.png' alt=\'...\'/>` +
                        '<strong class=\' me-auto\'>Vyzor</strong>' +
                        '<div class=\'toast-body\'>Your toast message here.</div>',
                        true,
                        'auto',
                        false,
                        true,
                        'bounce',
                        1000,
                        'bottom-left'
                    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomleftToastBtn">Bottom
                        Left</button>
                    <button v-on:click="toster(
                        `<img class=\' bd-placeholder-img rounded me-2 toast-logo-img \' src='${BASE_URL}/images/brand-logos/toggle-logo.png' alt=\'...\'/>` +
                        '<strong class=\' me-auto\'>Vyzor</strong>' +
                        '<div class=\'toast-body\'>Your toast message here.</div>',
                        true,
                        'auto',
                        false,
                        true,
                        'bounce',
                        1000,
                        'bottom-center'
                    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomcenterToastBtn">Bottom
                        Center</button>
                    <button v-on:click="toster(
                        `<img class=\' bd-placeholder-img rounded me-2 toast-logo-img \' src='${BASE_URL}/images/brand-logos/toggle-logo.png' alt=\'...\'/>` +
                        '<strong class=\' me-auto\'>Vyzor</strong>' +
                        '<div class=\'toast-body\'>Your toast message here.</div>',
                        true,
                        'auto',
                        false,
                        true,
                        'bounce',
                        1000,
                        'bottom-right'
                    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomrightToastBtn">Bottom
                        Right</button>
                    <button v-on:click="toster(
                        `<img class=\' bd-placeholder-img rounded me-2 toast-logo-img \' src='${BASE_URL}/images/brand-logos/toggle-logo.png' alt=\'...\'/>` +
                        '<strong class=\' me-auto\'>Vyzor</strong>' +
                        '<div class=\'toast-body\'>Your toast message here.</div>',
                        true,
                        'auto',
                        false,
                        true,
                        'flip',
                        1000,
                        'top-right'
                    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="middleleftToastBtn">Flip
                        Animation</button>
                    <button v-on:click="toster(
                        `<img class=\' bd-placeholder-img rounded me-2 toast-logo-img \' src='${BASE_URL}/images/brand-logos/toggle-logo.png' alt=\'...\'/>` +
                        '<strong class=\' me-auto\'>Vyzor</strong>' +
                        '<div class=\'toast-body\'>Your toast message here.</div>',
                        true,
                        'auto',
                        false,
                        true,
                        'slide',
                        1000,
                        'top-right'
                    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlecenterToastBtn">Slide
                        Animation</button>
                    <button v-on:click="toster(
                        `<img class=\' bd-placeholder-img rounded me-2 toast-logo-img \' src='${BASE_URL}/images/brand-logos/toggle-logo.png' alt=\'...\'/>` +
                        '<strong class=\' me-auto\'>Vyzor</strong>' +
                        '<div class=\'toast-body\'>Your toast message here.</div>',
                        true,
                        'auto',
                        false,
                        true,
                        'zoom',
                        1000,
                        'top-right'
                    )" type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlerightToastBtn">Zoom
                        Animation</button>
                </div>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-4 -->
</template>

<style scoped>
/* Add your styles here */
</style>
