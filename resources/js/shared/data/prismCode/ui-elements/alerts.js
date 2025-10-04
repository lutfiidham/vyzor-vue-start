export let basic = {
    script: `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields
            below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>
    </div>`,
},
    live = {
        script: `
        <div v-if="showLive" class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Holy guacamole!</strong> You should check in on some of those fields
              below.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>
        </div>
        <button type="button" class="btn btn-primary" id="liveAlertBtn" @click="showLive = !showLive;">Show live
                alert
        </button>
            `
    },
    defaultAlerts = {
        script: `
    <div :class="alert alert-{idx.class}" role="alert" v-for="(idx,index) in alertsData.Defaultalerts" :key="index">
                {{idx.text}}
    </div>
   ` ,
        data: `
   Defaultalerts = [
        { id: 1, text: " A simple primary alert—check it out!", class: "primary" },
        { id: 5, text: " A simple secondary alert—check it out!", class: "secondary" },
        { id: 6, text: " A simple success alert—check it out!", class: "success" },
        { id: 7, text: " A simple danger alert—check it out!", class: "danger" },
        { id: 8, text: " A simple warning alert—check it out!", class: "warning" },
        { id: 9, text: " A simple info alert—check it out!", class: "info" },
        { id: 10, text: " A simple light alert—check it out!", class: "light" },
        { id: 11, text: " A simple dark alert—check it out!", class: "dark" },
    ]
   `

    },
    linksInAlerts = {
        script: `
    <div :class="alert alert-{idx.class}" role="alert" v-for="(idx,index) in alertsData.Linkalerts" :key="index">
                {{idx.text1}} <a href="javascript:void(0);" class="alert-link">{{ idx.text2 }}</a>.
                {{idx.text3}}
            </div>`,
        data: `
            Linkalerts = [
        { text1: "A simple primary alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "primary" },
        { text1: "A simple secondary alert with", text2: "an example link. ", text3: "Give it a click if you like.", class: "secondary" },
        { text1: "A simple success alert with", text2: "an example link. ", text3: "Give it a click if you like.", class: "success" },
        { text1: "A simple danger alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "danger" },
        { text1: "A simple warning alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "warning" },
        { text1: "A simple info alert with", text2: "an example link. ", text3: "Give it a click if you like.", class: "info" },
        { text1: "A simple light alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "light" },
        { text1: "A simple dark alert with", text2: "an example link. ", text3: "Give it a click if you like.", class: "dark" },
    ]
            `

    },
    solidColoredAlerts = {
        script: `
             <div :class="alert alert-{idx.class} alert-dismissible fade show{idx.color} " v-for="(idx,index) in alertsData.Solidalerts" :key="index">
                {{idx.text}}
                <button type="button" :class="btn-close {idx.color}" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>
            </div>
           `,
        data: `
           Solidalerts = [
        { id: 1, text: "A simple solid primary alert—check it out! ", class: "solid-primary", color: "" },
        { id: 5, text: "A simple solid secondary alert—check it out!", class: "solid-secondary", color: "" },
        { id: 6, text: "A simple solid info alert—check it out!", class: "solid-info", color: "" },
        { id: 7, text: "A simple solid warning alert—check it out! ", class: "solid-warning", color: "" },
        { id: 8, text: "A simple solid success alert—check it out!", class: "solid-success", color: "" },
        { id: 9, text: "A simple solid danger alert—check it out! ", class: "solid-danger", color: "" },
        { id: 10, text: "A simple solid light alert—check it out! ", class: "solid-light", color: "text-default" },
        { id: 11, text: "A simple solid dark alert—check it out!", class: "solid-dark", color: "text-white" },
    ]
           `

    },
    outlineAlerts = {
        script: `
    <div :class="alert alert-{idx.class} alert-dismissible fade show" v-for="(idx,index) in alertsData.Outlinealerts" :key="index">
                {{idx.text}}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>
            </div>
    ` ,
        data: `
    Outlinealerts = [
        { id: 1, text: "A simple outline primary alert—check it out! ", class: "outline-primary", color: "" },
        { id: 5, text: "A simple outline secondary alert—check it out!", class: "outline-secondary", color: "" },
        { id: 6, text: "A simple outline info alert—check it out!", class: "outline-info", color: "" },
        { id: 7, text: "A simple outline warning alert—check it out! ", class: "outline-warning", color: "" },
        { id: 8, text: "A simple outline success alert—check it out!", class: "outline-success", color: "" },
        { id: 9, text: "A simple outline danger alert—check it out! ", class: "outline-danger", color: "" },
        { id: 10, text: "A simple outline light alert—check it out! ", class: "outline-light", color: "text-default" },
        { id: 11, text: "A simple outline dark alert—check it out!", class: "outline-dark", color: "" },
    ]
    `

    },
    solidAlertsWithDifferentShadows = {
        script: `
     <div :class="alert alert-{idx.class} shadow-{idx.size} alert-dismissible fade show" v-for="(idx,index) in alertsData.Shadowsolidalerts" :key="index">
                {{ idx.text }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>
    </div>
   `,
        data: `
   Shadowsolidalerts = [
        { id: 1, text: "A simple solid primary alert with small shadow—check it out! ", class: "solid-primary", size: "sm" },
        { id: 2, text: "A simple solid primary alert with normal shadow—check it out! ", class: "solid-primary", size: "" },
        { id: 3, text: "A simple solid primary alert with large shadow—check it out! ", class: "solid-primary", size: "lg" },
        { id: 4, text: "A simple solid secondary alert with small shadow—check it out!", class: "solid-secondary", size: "sm" },
        { id: 5, text: "A simple solid secondary alert with normal shadow—check it out!", class: "solid-secondary", size: "" },
        { id: 6, text: "A simple solid secondary alert with large shadow—check it out!", class: "solid-secondary", size: "lg" },
    ]
   `

    },
    defaultAlertsWithDifferentShadows = {
        script: `
   <div :class="alert alert-{idx.class} shadow-{idx.size}" v-for="(idx,index) in alertsData.Defaultsolidalerts" :key="index">
                {{idx.text}}
            </div>
    ` ,

        data: `
    Defaultsolidalerts = [
        { text: "A simple solid primary alert with small shadow—check it out! ", class: "primary", size: "sm" },
        { text: "A simple solid primary alert with normal shadow—check it out! ", class: "primary", size: "lg" },
        { text: "A simple solid primary alert with large shadow—check it out! ", class: "primary", size: "lg" },
        { text: "A simple solid secondary alert with small shadow—check it out!", class: "secondary", size: "sm" },
        { text: "A simple solid secondary alert with normal shadow—check it out!", class: "secondary", size: "lg" },
        { text: "A simple solid secondary alert with large shadow—check it out!", class: "secondary", size: "lg" },
    ]
    `

    },
    roundedSolidAlerts = {
        script: `
    <div :class="alert alert-{idx.class} rounded-pill alert-dismissible fade show" v-for="(idx,index) in alertsData.Roundedsolidalerts" :key="index">
                {{idx.text}}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>
            </div>
    `,
        data: `
    Roundedsolidalerts = [
        { id: 1, text: "A simple solid rounded primary alert—check it out! ", class: "solid-primary" },
        { id: 5, text: "A simple solid rounded secondary alert—check it out! ", class: "solid-secondary" },
        { id: 6, text: "A simple solid rounded warning alert—check it out! ", class: "solid-warning" },
        { id: 7, text: "A simple solid rounded danger alert—check it out!", class: "solid-danger" }
    ]
    `

    },
    roundedOutlineAlerts = {
        script: `
        <div :class="alert alert-{idx.class} rounded-pill alert-dismissible fade show" v-for="(idx,index) in alertsData.Roundedoutlinealerts" :key="index">
                {{idx.text}}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>
            </div>
       `,
        data: `
       Roundedoutlinealerts = [
        { id: 1, text: "A simple outline rounded primary alert—check it out! ", class: "outline-primary" },
        { id: 5, text: "A simple outline rounded secondary alert—check it out! ", class: "outline-secondary" },
        { id: 6, text: "A simple outline rounded warning alert—check it out! ", class: "outline-warning" },
        { id: 7, text: "A simple outline rounded danger alert—check it out!", class: "outline-danger" }
    ]
       `
    },
    roundedDefaultAlerts = {
        script: `
     <div :class="alert alert-{idx.class} rounded-pill alert-dismissible fade show" v-for="(idx,index) in alertsData.Roundedefaultalerts">
                {{idx.text}}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>
            </div>
   `,

        data: `
   Roundedefaultalerts = [
        { id: 1, text: "A simple rounded primary alert—check it out! ", class: "primary" },
        { id: 5, text: "A simple rounded secondary alert—check it out! ", class: "info" },
        { id: 6, text: "A simple rounded warning alert—check it out! ", class: "warning" },
        { id: 7, text: "A simple rounded danger alert—check it out!", class: "danger" }
    ]
   `
    },
    roundedAlertsWithCustomCloseButton = {
        script: `
   <div :class="alert alert-{idx.class} rounded-pill alert-dismissible fade show" v-for="(idx,index) in alertsData.Roundewithbtnalerts" :key="index">
                {{idx.text}}
                <button type="button" class="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>
            </div>
    ` ,
        data: `
    Roundewithbtnalerts = [
        { id: 1, text: "A simple rounded primary alert—check it out! ", class: "primary" },
        { id: 2, text: "A simple rounded secondary alert—check it out! ", class: "secondary" },
        { id: 3, text: "A simple rounded warning alert—check it out! ", class: "warning" },
        { id: 4, text: "A simple rounded danger alert—check it out!", class: "danger" }
    ]
    `
    },
    alertsWithIcons = {
        script: `
    <div class="alert alert-primary svg-primary d-flex align-items-center" role="alert">
                <svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                <div>
                    An example alert with an icon
                </div>
            </div>
            <div class="alert alert-success svg-success d-flex align-items-center" role="alert">
                <svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                    <path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>
                <div>
                    An example success alert with an icon
                </div>
            </div>
            <div class="alert alert-warning svg-warning d-flex align-items-center" role="alert">
                <svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
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
                <svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                    <g>
                        <rect fill="none" height="24" width="24" />
                    </g>
                    <g>
                        <g>
                            <g>
                                <path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" />
                                <rect height="6" width="2" x="11" y="7" />
                                <rect height="2" width="2" x="11" y="15" />
                            </g>
                        </g>
                    </g>
                </svg>
                <div>
                    An example danger alert with an icon
                </div>
            </div>` },
    customizedAlertsWithSVGs = {
        script: `
    <div :class="alert svg-{idx.color} alert-{idx.color} alert-dismissible fade show custom-alert-icon shadow-sm" role="alert" v-for="(idx,index) in alertsData.Customizedalert1" :key="index">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path :d="idx.class1" /></svg>
                A customized primary alert with an icon
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>
    </div>
    `,
        data: `
    Customizedalert1 = [
        { id: 1, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z", color: "primary" },
        { id: 2, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z", color: "secondary", },
        { id: 3, class1: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z", color: "warning", },
        { id: 4, class1: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z", color: "danger", },
    ]
    `


    },
    alertsWithImages = {
        script: `
     <div :class="alert alert-img alert-{idx.color} alert-dismissible fase show rounded-pill flex-wrap" role="alert" v-for="(idx,index) in alertsData.Imagealerts" :key="index">
                <div class="avatar avatar-sm me-3 avatar-rounded">
                    <img :src="idx.src1" alt="img">
                </div>
                <div>A simple {{idx.color}} alert with image—check it out!</div>
                <button type="button" :class="btn-close {idx.class}" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>
            </div>
    ` ,
        data: `


    Imagealerts = [
            { id: 1, src1: '/images/faces/3.jpg', color: "primary", class: "" },
            { id: 2, src1: '/images/faces/5.jpg', color: "secondary", class: "" },
            { id: 3, src1: '/images/faces/8.jpg', color: "warning", class: "" },
            { id: 4, src1: '/images/faces/11.jpg', color: "danger", class: "" },
            { id: 5, src1: '/images/faces/13.jpg', color: "info", class: "" },
            { id: 6, src1: '/images/faces/10.jpg', color: "light", class: "" },
            { id: 7, src1: '/images/faces/15.jpg', color: "dark", class: "text-muted" },
        ]
    `
    },
    alertsWithDifferentSizeImages = {
        script: `
     <div :class="alert alert-img alert-{idx.color} alert-dismissible fase show flex-wrap" role="alert" v-for="(idx,index) in alertsData.avatarsizealert" :key="index">
                <div :class="avatar avatar-{idx.class} me-3">
                    <img :src="idx.src1" alt="img">
                </div>
                <div>A simple {{idx.color}} alert with image—check it out!</div>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i :class="bi bi-x {idx.class1}"></i></button>
            </div>
   `,
        data: `


   avatarsizealert = [
           { id: 1, src1: '/images/faces/3.jpg', color: "primary", class: "xs", class1: "" },
           { id: 2, src1: '/images/faces/5.jpg', color: "secondary", class: "sm", class1: "" },
           { id: 3, src1: '/images/faces/8.jpg', color: "warning", class: "", class1: "" },
           { id: 4, src1: '/images/faces/11.jpg', color: "danger", class: "md", class1: "" },
           { id: 5, src1: '/images/faces/13.jpg', color: "info", class: "lg", class1: "" },
           { id: 6, src1: '/images/faces/14.jpg', color: "dark", class: "xl", class1: "text-muted" },
       ]
   `

    },
    additionalContent = {
        script: `
        &lt;div class="row gy-3">
            &lt;div class="col-xl-6" v-for="(idx,index) in alertsData.Additionalcontentalerts" :key="index">
                &lt;div:class="alert alert-{idx.class} overflow-hidden p-0" role="alert">
                    &lt;div :class="p-3 bg-{idx.class} text-fixed-white d-flex justify-content-between">
                        &lt;h6 class="aletr-heading mb-0 text-fixed-white">Thank you for reporting this.</h6>
                        &lt;button type="button" class="btn-close p-0 text-fixed-white" data-bs-dismiss="alert"
                            aria-label="Close">&lt;i class="bi bi-x"></i></button>
                    </div>
                    $lt;hr class="my-0">
                    &lt;div class="p-3">
                       <p class="mb-0">{{idx.text2}} <a href="javascript:void(0);" class="fw-medium text-decoration-underline">{{idx.text3}}</a></p>
                       </div>
                </div>
            </div>
        </div>`,
        data: `
        Additionalcontentalerts = [
        { id: 1, text1: "Thank you for reporting this.", text2: "We appreciate you to let us know the bug in the template and for warning us about future consequences ", text3: "Visit for support for queries ?", class: "primary" },
        { id: 2, text1: "Thank you for reporting this.", text2: "We appreciate you to let us know the bug in the template and for warning us about future consequences ", text3: "Visit for support for queries ?", class: "secondary" },
        { id: 3, text1: "Thank you for reporting this.", text2: "We appreciate you to let us know the bug in the template and for warning us about future consequences ", text3: "Visit for support for queries ?", class: "success" },
        { id: 4, text1: "Thank you for reporting this.", text2: "We appreciate you to let us know the bug in the template and for warning us about future consequences ", text3: "Visit for support for queries ?", class: "warning" }
    ]
        `
    };
