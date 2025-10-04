export let
    LiveExample = {
        script: `
     <button type="button" class="btn btn-primary btn-wave" id="liveToastBtn" @click="showliveToast">Show live
                    toast</button>
                <div class="toast-container position-fixed top-0 end-0 p-3">
                    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header text-default">
                            <img class="bd-placeholder-img rounded me-2" src="/images/brand-logos/favicon.ico" alt="...">
                            <strong class="me-auto">Vyzor</strong>
                            <small>11 mins ago</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </div>
                </div>` },
    ColorSchemes = {
        script: `
    <div class="toast align-items-center text-bg-primary border-0 fade show mb-4" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            Hello, world! This is the Primary toast message.
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
                <div class="toast align-items-center text-bg-secondary border-0 fade show mb-4" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            Hello, world! This is the Secondary toast.
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
                <div class="toast align-items-center text-bg-warning border-0 fade show mb-4" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            Hello, world! This is the Warning toast message.
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
                <div class="toast align-items-center text-bg-info border-0 fade show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            Hello, world! This is the info toast message.
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>` },
    BasicExample = {
        script: ` <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header text-default">
                        <img class="bd-placeholder-img rounded me-2" src="/images/brand-logos/favicon.ico" alt="...">

                        <strong class="me-auto">Vyzor</strong>
                        <small>11 mins ago</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                </div>` },
    Stacking = {
        script: `<div class="toast-container position-static">
                    <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header text-default">
                            <img class="bd-placeholder-img rounded me-2" src="/images/brand-logos/favicon.ico" alt="...">

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
                            <img class="bd-placeholder-img rounded me-2" src="/images/brand-logos/favicon.ico" alt="...">

                            <strong class="me-auto">Vyzor</strong>
                            <small class="text-muted">2 seconds ago</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            Heads up, toasts will stack automatically
                        </div>
                    </div>
                </div>` },
    Translucent = {
        script: ` <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header text-default">
                        <img class="bd-placeholder-img rounded me-2" src="/images/brand-logos/favicon.ico" alt="...">

                        <strong class="me-auto">Vyzor</strong>
                        <small class="text-muted">11 mins ago</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                </div>` },
    CustomContent = {
        script: `  <div class="btn-list">
                <button v-on:click="successToast(
                        <img class=\' bd-placeholder-img rounded me-2 \' src='/images/brand-logos/toggle-dark.png' alt=\'...\'> +
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
                        <img class=\' bd-placeholder-img rounded me-2 \' src='/images/brand-logos/toggle-dark.png' alt=\'...\'> +
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
                        <img class=\' bd-placeholder-img rounded me-2 \' src='/images/brand-logos/toggle-dark.png' alt=\'...\'> +
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
                        <img class=\' bd-placeholder-img rounded me-2 \' src='/images/brand-logos/toggle-dark.png' alt=\'...\'> +
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
            </div>` },
    ToastVariants = {
        script: `&lt;div class="btn-list">
    &lt;button v-on:click="successToast(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Vyzor&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        true,
        true,
        'bounce',
        1000,
        'top-right'
    )" type="button" class="btn btn-success-light me-2 btn-wave" id="successToastBtn">success&lt;/button>
    &lt;button v-on:click="warningToast(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Vyzor&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        true,
        true,
        'bounce',
        1000,
        'top-right'
    )" type="button" class="btn btn-warning-light me-2 btn-wave" id="warningToastBtn">warning&lt;/button>
    &lt;button v-on:click="infoToast(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Vyzor&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        true,
        true,
        'bounce',
        1000,
        'top-right'
    )" type="button" class="btn btn-info-light me-2 btn-wave" id="infoToastBtn">info&lt;/button>
    &lt;button v-on:click="errorToast(
        '&lt;img class=\' bd-placeholder-img rounded me-2 \' src='+BASE_URL+'images/brand-logos/toggle-dark.png alt=\'...\'>' +
        '&lt;strong class=\' me-auto\'>Vyzor&lt;/strong>' +
        '&lt;div class=\'toast-body\'>Your toast message here.&lt;/div>',
        true,
        'auto',
        true,
        true,
        'bounce',
        1000,
        'top-right'
    )" type="button" class="btn btn-danger-light me-2 btn-wave" id="dangerToastBtn">danger&lt;/button>
&lt;/div>` },
    ToastOptions = {
        script: `div class="btn-list">
                    <button v-on:click="toster(
                        <img class=\' bd-placeholder-img rounded me-2 \' src='/images/brand-logos/toggle-dark.png' alt=\'...\'> +
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
                        <img class=\' bd-placeholder-img rounded me-2 \' src='/images/brand-logos/toggle-dark.png' alt=\'...\'> +
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
                        <img class=\' bd-placeholder-img rounded me-2 \' src='/images/brand-logos/toggle-dark.png' alt=\'...\'> +
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
                        <img class=\' bd-placeholder-img rounded me-2 \' src='/images/brand-logos/toggle-dark.png' alt=\'...\'> +
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
                        <img class=\' bd-placeholder-img rounded me-2 \' src='/images/brand-logos/toggle-dark.png' alt=\'...\'> +
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
                        </div>` },
    ToastPlacements = {
        script: `            <div class="btn-list">
                <button v-on:click="toster(
                        <img class=\' bd-placeholder-img rounded me-2 \' src='/images/brand-logos/toggle-dark.png' alt=\'...\'> +
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
                        <img class=\' bd-placeholder-img rounded me-2 \' src='/images/brand-logos/toggle-dark.png' alt=\'...\'> +
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
                        <img class=\' bd-placeholder-img rounded me-2 \' src='/images/brand-logos/toggle-dark.png' alt=\'...\'> +
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
                        <img class=\' bd-placeholder-img rounded me-2 \' src='/images/brand-logos/toggle-dark.png' alt=\'...\'> +
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
                        <img class=\' bd-placeholder-img rounded me-2 \' src='/images/brand-logos/toggle-dark.png' alt=\'...\'> +
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
                        <img class=\' bd-placeholder-img rounded me-2 \' src='/images/brand-logos/toggle-dark.png' alt=\'...\'> +
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
                        <img class=\' bd-placeholder-img rounded me-2 \' src='/images/brand-logos/toggle-dark.png' alt=\'...\'> +
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
                        <img class=\' bd-placeholder-img rounded me-2 \' src='/images/brand-logos/toggle-dark.png' alt=\'...\'> +
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
                        <img class=\' bd-placeholder-img rounded me-2 \' src='/images/brand-logos/toggle-dark.png' alt=\'...\'> +
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
            </div>` },
    AligningToastUsingFlexbox = {
        script: `<div class="bd-example bg-light bd-example-toasts d-flex p-0">
                <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">
                    <div class="toast fade show shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header text-default">
                            <img class="bd-placeholder-img rounded me-2" src="/images/brand-logos/favicon.ico" alt="...">
                            <strong class="me-auto">Vyzor</strong>
                            <small>11 mins ago</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </div>
                </div>
            </div>` };