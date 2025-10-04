export let
    defaultButtons = {
        script: `
    <button type="button" :class="btn btn-{idx.class} btn-wave" v-for="(idx,index) in buttonData.DefaultButtons" :key="index">{{idx.text}}</button>`,
        data: `
     DefaultButtons = [
        { id: 1, class: "primary", text: " Primary" },
        { id: 2, class: "secondary", text: "  Secondary" },
        { id: 3, class: "success", text: " Success" },
        { id: 4, class: "danger", text: "  Danger" },
        { id: 5, class: "warning", text: "  Warning" },
        { id: 6, class: "info", text: "Info" },
        { id: 7, class: "light", text: " Light" },
        { id: 8, class: "dark", text: "  Dark" },
        { id: 9, class: "link", text: "Link" },
    ]
`
    },
    roundedButtons = {
        script: `
    <div class="btn-list">
                <button type="button" :class="btn btn-{idx.class} rounded-pill btn-wave" v-for="(idx,index) in buttonData.DefaultButtons">{{idx.text}}</button>
            </div>`,
        data: `
        DefaultButtons = [
        { id: 1, class: "primary", text: " Primary" },
        { id: 2, class: "secondary", text: "  Secondary" },
        { id: 3, class: "success", text: " Success" },
        { id: 4, class: "danger", text: "  Danger" },
        { id: 5, class: "warning", text: "  Warning" },
        { id: 6, class: "info", text: "Info" },
        { id: 7, class: "light", text: " Light" },
        { id: 8, class: "dark", text: "  Dark" },
        { id: 9, class: "link", text: "Link" },
    ]
        `
    },
    lightButtons = {
        script: `
    <div class="btn-list">
                    <button type="button" class="btn btn-primary-light btn-wave">Primary</button>
                    <button type="button" class="btn btn-secondary-light btn-wave">Secondary</button>
                    <button type="button" class="btn btn-success-light btn-wave">Success</button>
                    <button type="button" class="btn btn-danger-light btn-wave">Danger</button>
                    <button type="button" class="btn btn-warning-light btn-wave">Warning</button>
                    <button type="button" class="btn btn-info-light btn-wave">Info</button>
                    <button type="button" class="btn btn-purple-light btn-wave">purple</button>
                    <button type="button" class="btn btn-teal-light btn-wave">teal</button>
                    <button type="button" class="btn btn-orange-light btn-wave">orange</button>
                </div>` },
    lightRoundedButtons = {
        script: `
     <div class="btn-list">
                <button type="button" :class="btn btn-{idx.class} rounded-pill btn-wave" v-for="(idx,index) in buttonData.LightButtons" :key="index">Primary</button>
            </div>`,
        data: `
         LightButtons = [
        { id: 1, class: "primary-light", text: " Primary" },
        { id: 2, class: "secondary-light", text: "  Secondary" },
        { id: 3, class: "success-light", text: " Success" },
        { id: 4, class: "danger-light", text: "  Danger" },
        { id: 5, class: "warning-light", text: "  Warning" },
        { id: 6, class: "info-light", text: "Info" },
        { id: 7, class: "purple-light", text: " purple" },
        { id: 8, class: "teal-light", text: "  teal" },
        { id: 9, class: "orange-light", text: "orange" }
    ]
        `
    },
    outlineButtons = {
        script: `<div class="btn-list">
                <button type="button" :class="btn btn-{idx.class} btn-wave" v-for="(idx,index) in buttonData.OutlineButtons" :key="index">{{idx.text}}</button>
            </div>`,
        data: `
        OutlineButtons = [
        { id: 1, class: "outline-primary", text: " Primary" },
        { id: 2, class: "outline-secondary", text: "  Secondary" },
        { id: 3, class: "outline-success", text: " Success" },
        { id: 4, class: "outline-danger", text: "  Danger" },
        { id: 5, class: "outline-warning", text: "  Warning" },
        { id: 6, class: "outline-info", text: "Info" },
        { id: 7, class: "outline-light", text: " Light" },
        { id: 8, class: "outline-dark", text: "  Dark" },
    ]
        `
    },
    roundedOutlineButtons = {
        script: ` <div class="btn-list">
                <button type="button" :class="btn btn-{idx.class} rounded-pill btn-wave" v-for="(idx,index) in buttonData.OutlineButtons" :key="index">{{idx.text}}</button>
            </div>` ,
        data: `
         OutlineButtons = [
        { id: 1, class: "outline-primary", text: " Primary" },
        { id: 2, class: "outline-secondary", text: "  Secondary" },
        { id: 3, class: "outline-success", text: " Success" },
        { id: 4, class: "outline-danger", text: "  Danger" },
        { id: 5, class: "outline-warning", text: "  Warning" },
        { id: 6, class: "outline-info", text: "Info" },
        { id: 7, class: "outline-light", text: " Light" },
        { id: 8, class: "outline-dark", text: "  Dark" },
    ]
        `
    },
    gradientButtons = {
        script: `<div class="btn-list">
                <button type="button" :class="btn btn-{idx.class} btn-wave" v-for="(idx,index) in buttonData.GradientButtons" :key="index">Primary</button>
            </div>`,
        data: `
        GradientButtons = [
        { id: 1, class: "primary-gradient", text: "Primary" },
        { id: 2, class: "secondary-gradient", text: "Secondary" },
        { id: 3, class: "success-gradient", text: "Success" },
        { id: 4, class: "danger-gradient", text: "Danger" },
        { id: 5, class: "warning-gradient", text: "Warning" },
        { id: 6, class: "info-gradient", text: "Info" },
        { id: 7, class: "orange-gradient", text: " Orange" },
        { id: 8, class: "purple-gradient", text: "Purple" },
        { id: 9, class: "teal-gradient", text: "  teal" },
    ]
        `
    },
    roundedGradientButtons = {
        script: `<div class="btn-list">
                <button type="button" :class="btn btn-{idx.class} rounded-pill btn-wave" v-for="(idx,index) in buttonData.GradientButtons" :key="index">{{idx.text}}</button>
            </div>`,
        data: `GradientButtons = [
        { id: 1, class: "primary-gradient", text: "Primary" },
        { id: 2, class: "secondary-gradient", text: "Secondary" },
        { id: 3, class: "success-gradient", text: "Success" },
        { id: 4, class: "danger-gradient", text: "Danger" },
        { id: 5, class: "warning-gradient", text: "Warning" },
        { id: 6, class: "info-gradient", text: "Info" },
        { id: 7, class: "orange-gradient", text: " Orange" },
        { id: 8, class: "purple-gradient", text: "Purple" },
        { id: 9, class: "teal-gradient", text: "  teal" },
    ]
        `
    },
    ghostButtons = {
        script: `<div class="btn-list">
                <button type="button" :class="btn btn-{idx.class} btn-wave" v-for="(idx, index) in buttonData.GhostButtons" :key="index">{{idx.text}}</button>
            </div>`,
        data: `
         GhostButtons = [
        { id: 1, class: "primary-ghost", text: "Primary" },
        { id: 2, class: "secondary-ghost", text: "Secondary" },
        { id: 3, class: "success-ghost", text: "Success" },
        { id: 4, class: "danger-ghost", text: "Danger" },
        { id: 5, class: "warning-ghost", text: "Warning" },
        { id: 6, class: "info-ghost", text: "Info" },
        { id: 5, class: "orange-ghost", text: "orange" },
        { id: 6, class: "purple-ghost", text: "Purple" },
        { id: 6, class: "teal-ghost", text: "Teal" },
    ]
        `
    },
    buttonTags = {
        script: ` <div class="btn-list">
                    <a class="btn btn-primary btn-wave" href="javascript:void(0);" role="button">Link</a>
                    <button class="btn btn-secondary btn-wave" type="submit">Button</button>
                    <input class="btn btn-info" type="button" value="Input">
                    <input class="btn btn-warning" type="submit" value="Submit">
                    <input class="btn btn-success" type="reset" value="Reset">
                </div>` },
    disabledStateWithAnchorTags = {
        script: `<div class="btn-list">
                    <div class="mb-4">
                        <button type="button" class="btn btn-primary" disabled="">Primary
                            button</button>
                        <button type="button" class="btn btn-secondary" disabled="">Button</button>
                        <button type="button" class="btn btn-outline-primary" disabled="">Primary
                            button</button>
                        <button type="button" class="btn btn-outline-secondary" disabled="">Button</button>
                    </div>

                    <div>
                        <a class="btn btn-primary disabled" role="button" aria-disabled="true">Primary
                            link</a>
                        <a class="btn btn-secondary disabled" role="button" aria-disabled="true">Link</a>
                    </div>
                </div>` },
    buttonPluginToggleStates = {
        script: `<div class="btn-list">
                    <div class="mb-4">
                        <button type="button" class="btn btn-primary btn-wave" data-bs-toggle="button">Toggle button</button>
                        <button type="button" class="btn btn-secondary active btn-wave" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
                        <button type="button" class="btn btn-teal btn-wave" disabled data-bs-toggle="button">Disabled toggle
                            button</button>
                    </div>
                    <div>
                        <a href="javascript:void(0);" class="btn btn-primary btn-wave" role="button" data-bs-toggle="button">Toggle
                            link</a>
                        <a href="javascript:void(0);" class="btn btn-secondary active btn-wave" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a>
                        <a class="btn btn-teal disabled btn-wave" aria-disabled="true" role="button" data-bs-toggle="button">Disabled toggle link</a>
                    </div>
                </div>` },
    linkFunctionallyCaveat = {
        script: `<div class="btn-list">
                    <a class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
                    <a class="btn btn-secondary disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
                </div>` },
    loadingButtons = {
        script: `<div class="btn-list d-md-flex flex-wrap">
                    <button class="btn btn-primary btn-loader">
                        <span class="me-2">Loading</span>
                        <span class="loading"><i class="ri-loader-2-fill fs-16"></i></span>
                    </button>
                    <button class="btn btn-outline-secondary btn-loader">
                        <span class="me-2">Loading</span>
                        <span class="loading"><i class="ri-loader-2-fill fs-16"></i></span>
                    </button>
                    <button class="btn btn-info-light btn-loader">
                        <span class="me-2">Loading</span>
                        <span class="loading"><i class="ri-loader-4-line fs-16"></i></span>
                    </button>
                    <button class="btn btn-warning-light btn-loader">
                        <span class="me-2">Loading</span>
                        <span class="loading"><i class="ri-loader-5-line fs-16"></i></span>
                    </button>
                    <button class="btn btn-success btn-loader disabled">
                        <span class="me-2">Disabled</span>
                        <span class="loading"><i class="ri-refresh-line fs-16"></i></span>
                    </button>
                </div>` },
    iconButtons = {
        script: `<div class="btn-list d-md-flex d-block">
                    <div class="mb-md-0 mb-2">
                        <button class="btn btn-icon btn-primary btn-wave">
                            <i class="ri-bank-fill"></i>
                        </button>
                        <button class="btn btn-icon btn-info btn-wave">
                            <i class="ri-medal-line"></i>
                        </button>
                        <button class="btn btn-icon btn-danger btn-wave">
                            <i class="ri-archive-line"></i>
                        </button>
                        <button class="btn btn-icon btn-warning btn-wave me-5">
                            <i class="ri-calendar-2-line"></i>
                        </button>
                    </div>
                    <div class="mb-md-0 mb-2">
                        <button class="btn btn-icon btn-primary-light rounded-pill btn-wave">
                            <i class="ri-home-smile-line"></i>
                        </button>
                        <button class="btn btn-icon btn-secondary-light rounded-pill btn-wave">
                            <i class="ri-delete-bin-line"></i>
                        </button>
                        <button class="btn btn-icon btn-success-light rounded-pill btn-wave">
                            <i class="ri-notification-3-line"></i>
                        </button>
                        <button class="btn btn-icon btn-danger-light rounded-pill btn-wave me-5">
                            <i class="ri-chat-settings-line"></i>
                        </button>
                    </div>
                    <div class="">
                        <button class="btn btn-icon btn-outline-primary rounded-pill btn-wave">
                            <i class="ri-phone-line"></i>
                        </button>
                        <button class="btn btn-icon btn-outline-teal rounded-pill btn-wave">
                            <i class="ri-customer-service-2-line"></i>
                        </button>
                        <button class="btn btn-icon btn-outline-success rounded-pill btn-wave">
                            <i class="ri-live-line"></i>
                        </button>
                        <button class="btn btn-icon btn-outline-secondary rounded-pill btn-wave">
                            <i class="ri-save-line"></i>
                        </button>
                    </div>
                </div>` },
    iconButtonsSizes = {
        script: `
        <div class="btn-list d-md-flex d-block gap-5">
                <div class="mb-md-0 mb-2">
                    <button class="btn btn-sm btn-icon btn-primary btn-wave">
                        <i class="ri-bank-fill"></i>
                    </button>
                    <button class="btn btn-icon btn-info btn-wave">
                        <i class="ri-medal-line"></i>
                    </button>
                    <button class="btn btn-lg btn-icon btn-danger btn-wave">
                        <i class="ri-archive-line"></i>
                    </button>
                </div>
                <div class="mb-md-0 mb-2">
                    <button class="btn btn-sm btn-icon btn-primary-light rounded-pill btn-wave">
                        <i class="ri-home-smile-line"></i>
                    </button>
                    <button class="btn btn-icon btn-secondary-light rounded-pill btn-wave">
                        <i class="ri-delete-bin-line"></i>
                    </button>
                    <button class="btn btn-lg btn-icon btn-success-light rounded-pill btn-wave">
                        <i class="ri-notification-3-line"></i>
                    </button>
                </div>
                <div class="">
                    <button class="btn btn-sm btn-icon btn-outline-primary rounded-pill btn-wave">
                        <i class="ri-phone-line"></i>
                    </button>
                    <button class="btn btn-icon btn-outline-teal rounded-pill btn-wave">
                        <i class="ri-customer-service-2-line"></i>
                    </button>
                    <button class="btn btn-lg btn-icon btn-outline-success rounded-pill btn-wave">
                        <i class="ri-live-line"></i>
                    </button>
                </div>
            </div>
        `
    },
    socialButtons = {
        script: ` <div class="btn-list">
                <button :class="btn btn-icon btn-{idx.class1} btn-wave" v-for="(idx,index) in buttonData.SocialIconButtons" :key="index" >
                    <i :class="ri-{idx.class}-line"></i>
                </button>
            </div>`,
        data:`
        SocialIconButtons = [
        { id: 1, class: "facebook", class1: "facebook" },
        { id: 2, class: "twitter-x", class1: "twitter" },
        { id: 3, class: "instagram", class1: "instagram" },
        { id: 4, class: "github", class1: "github" },
        { id: 5, class: "youtube", class1: "youtube" },
        { id: 5, class: "google", class1: "google" },

    ]`
        },
    sizes = {
        script: `<div class="btn-list">
                            <button type="button" class="btn btn-primary btn-sm btn-wave">Small
                                button</button>
                            <button type="button" class="btn btn-secondary btn-wave">Default
                                button</button>
                            <button type="button" class="btn btn-success btn-lg btn-wave">Large
                                button</button>
                        </div>` },
    buttonWidths = {
        script: `<div class="btn-list">
                            <button type="button" class="btn btn-primary btn-w-xs btn-wave">XS</button>
                            <button type="button" class="btn btn-secondary btn-w-sm btn-wave">SM</button>
                            <button type="button" class="btn btn-warning btn-w-md btn-wave">MD</button>
                            <button type="button" class="btn btn-info btn-w-lg btn-wave">LG</button>
                        </div>` },
    buttonsWithDifferentShadows = {
        script: `  <div class="btn-list d-flex">
                    <div class="me-5">
                        <button class="btn btn-primary shadow-sm btn-wave">Button</button>
                        <button class="btn btn-primary shadow btn-wave">Button</button>
                        <button class="btn btn-primary shadow-lg btn-wave">Button</button>
                    </div>
                    <div>
                        <button class="btn btn-secondary btn-sm shadow-sm btn-wave">Button</button>
                        <button class="btn btn-info shadow btn-wave">Button</button>
                        <button class="btn btn-lg btn-success shadow-lg btn-wave">Button</button>
                    </div>
                </div>` },
    differentColoredButtonsWithShadows = {
        script: ` <div class="btn-list">
                <button :class="btn btn-{idx.class} shadow-{idx.class} btn-wave" v-for="(idx,index) in buttonData.ColoredButtons" :key="index">Button</button>
            </div> `,
data:`
ColoredButtons = [
        { id: 1, class: "primary" },
        { id: 2, class: "secondary" },
        { id: 3, class: "success" },
        { id: 4, class: "info" },
        { id: 5, class: "warning" },
        { id: 6, class: "danger" },
        { id: 7, class: "purple" },
        { id: 8, class: "orange" },

    ]`
},
    raisedButtons = {
        script: `&lt;div class="btn-list">
    &lt;button class="btn btn-primary btn-raised-shadow btn-wave">Button&lt;/button>
    &lt;button class="btn btn-secondary btn-raised-shadow btn-wave">Button&lt;/button>
    &lt;button class="btn btn-success btn-raised-shadow btn-wave">Button&lt;/button>
    &lt;button class="btn btn-info btn-raised-shadow btn-wave">Button&lt;/button>
    &lt;button class="btn btn-warning btn-raised-shadow btn-wave">Button&lt;/button>
    &lt;button class="btn btn-danger btn-raised-shadow btn-wave">Button&lt;/button>
    &lt;button class="btn btn-purple btn-raised-shadow btn-wave">Button&lt;/button>
    &lt;button class="btn btn-orange btn-raised-shadow btn-wave">Button&lt;/button>
&lt;/div>` },
    labelButtons = {
        script: ` <div class="btn-list">
                    <button class="btn btn-primary label-btn">
                        <i class="ri-chat-smile-line label-btn-icon me-2"></i>
                        Primary
                    </button>
                    <button class="btn btn-secondary label-btn">
                        <i class="ri-settings-4-line label-btn-icon me-2"></i>
                        Secondary
                    </button>
                    <button class="btn btn-warning label-btn rounded-pill">
                        <i class="ri-spam-2-line label-btn-icon me-2 rounded-pill"></i>
                        Warning
                    </button>
                    <button class="btn btn-info label-btn rounded-pill">
                        <i class="ri-phone-line label-btn-icon me-2 rounded-pill"></i>
                        Info
                    </button>
                    <button class="btn btn-success label-btn label-end">
                        Success
                        <i class="ri-thumb-up-line label-btn-icon ms-2"></i>
                    </button>
                    <button class="btn btn-danger label-btn label-end rounded-pill">
                        Cancel
                        <i class="ri-close-line label-btn-icon ms-2 rounded-pill"></i>
                    </button>
                </div>` },
    customButtons = {
        script: `<div class="btn-list">
                    <button class="btn btn-info custom-button rounded-pill">
                        <span class="custom-btn-icons"><i class="ri-twitter-x-line text-info"></i></span>
                        Twitter
                    </button>
                    <button class="btn btn-teal-light btn-border-down">Border</button>
                    <button class="btn btn-secondary-light btn-border-start">Border</button>
                    <button class="btn btn-purple-light btn-border-end">Border</button>
                    <button class="btn btn-warning-light btn-border-top">Border</button>
                    <button class="btn btn-secondary btn-glare"><span>Glare Button</span></button>
                    <button class="btn btn-danger btn-hover btn-hover-animate">Like</button>
                    <button class="btn btn-success btn-darken-hover">Hover</button>
                    <button class="btn btn-orange btn-custom-border">Hover</button>
                </div>` },
    blockButtons = {
        script: `<div class="btn-list">
                    <div class="d-grid gap-2 mb-4">
                        <button class="btn btn-primary btn-wave" type="button">Button</button>
                        <button class="btn btn-secondary btn-wave" type="button">Button</button>
                    </div>
                    <div class="d-grid gap-2 d-md-block">
                        <button class="btn btn-info btn-wave" type="button">Button</button>
                        <button class="btn btn-success btn-wave" type="button">Button</button>
                    </div>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="btn btn-danger btn-wave" type="button">Button</button>
                        <button class="btn btn-warning btn-wave" type="button">Button</button>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-teal me-md-2 btn-wave" type="button">Button</button>
                        <button class="btn btn-purple btn-wave" type="button">Button</button>
                    </div>
                </div>` };
