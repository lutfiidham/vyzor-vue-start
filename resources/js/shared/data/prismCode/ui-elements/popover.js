export let
    defaultPopovers = {
        script: `
    <div class="btn-list">
                <a tabindex="0" class="btn btn-outline-primary btn-wave" role="button" data-bs-toggle="popover" :data-bs-placement="idx.class" :title="Popover {idx.text} " data-bs-content="And here's some amazing content. It's very engaging. Right?" v-for="(idx, index) in popoverData.Defaultalerts" :key="index">Popover
                    {{idx.text}}
                </a>
            </div>` ,
        data:`
         Defaultalerts = [
        { id: 1, text: "Top", class: "top" },
        { id: 2, text: "Right", class: "auto" },
        { id: 3, text: "Bottom", class: "bottom" },
        { id: 4, text: "Left", class: "left" },
    ]`
        },
    coloredHeaders = {
        script: `
    <div class="btn-list">
                <button type="button" :class="btn btn-{idx.color} btn-wave" data-bs-toggle="popover" :data-bs-placement="idx.class" :data-bs-custom-class="header-{idx.color1}" title="Color Header" :data-bs-content="Popover with {idx.color1} header." v-for="(idx, index) in popoverData.Colorheaderalerts" :key="index">
                    Header {{idx.text}}
                </button>
            </div>`,
        data:`
        Colorheaderalerts = [
        { id: 1, text: "Primary", class: "top", color: "outline-primary", color1: "primary", color2: "" },
        { id: 2, text: "Secondary", class: "right", color: "outline-secondary", color1: "secondary", color2: "" },
        { id: 3, text: "Info", class: "bottom", color: "outline-info", color1: "info", color2: "bs-popover-auto" },
        { id: 4, text: "Warning", class: "left", color: "outline-warning", color1: "warning", color2: "" },
        { id: 5, text: "Success", class: "top", color: "outline-success", color1: "success", color2: "" },
        { id: 6, text: "Danger", class: "top", color: "outline-danger", color1: "danger", color2: "" },
    ]
        ` },
    coloredPopovers = {
        script: `
     <div class="btn-list">
                <button type="button" :class="btn btn-{idx.color1} btn-wave" data-bs-toggle="popover" :data-bs-placement="idx.class" :data-bs-custom-class="popover-{idx.color1}" title="Color Background" :data-bs-content="Popover with {idx.text} background." v-for="(idx, index) in popoverData.Colredalerts" :key="index">
                    {{idx.text}}
                </button>
            </div>`,
        data:`
        Colredalerts = [
        { id: 1, text: "Primary", class: "top", color1: "primary" },
        { id: 2, text: "Secondary", class: "right", color1: "secondary" },
        { id: 3, text: "Info", class: "bottom", color1: "info" },
        { id: 4, text: "Warning", class: "left", color1: "warning" },
        { id: 5, text: "Success", class: "top", color1: "success" },
        { id: 6, text: "Danger", class: "right", color1: "danger" },
        { id: 7, text: "Teal", class: "bottom", color1: "teal" },
        { id: 8, text: "Purple", class: "left", color1: "purple" },
    ]
        `
        },
    lightPopovers = {
        script: `
     <div class="btn-list">
                <button type="button" :class="btn btn-{idx.color1}-light btn-wave" data-bs-toggle="popover" :data-bs-placement="idx.class" :data-bs-custom-class="popover-{idx.color1}-light" title="Light Background" :data-bs-content="Popover with light {idx.text} background." v-for="(idx, index) in popoverData.Colredalerts" :key="index">
                    {{idx.text}}
                </button>
            </div>` ,
        data:`
        Colredalerts = [
        { id: 1, text: "Primary", class: "top", color1: "primary" },
        { id: 2, text: "Secondary", class: "right", color1: "secondary" },
        { id: 3, text: "Info", class: "bottom", color1: "info" },
        { id: 4, text: "Warning", class: "left", color1: "warning" },
        { id: 5, text: "Success", class: "top", color1: "success" },
        { id: 6, text: "Danger", class: "right", color1: "danger" },
        { id: 7, text: "Teal", class: "bottom", color1: "teal" },
        { id: 8, text: "Purple", class: "left", color1: "purple" },
    ]
        `
        },
    disabledPopover = {
        script: `
     <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
                <button class="btn btn-primary" type="button" disabled>Disabled
                    button</button>
            </span>` },
    iconPopovers = {
        script: `
   <a class="me-4 svg-primary" href="javascript:void(0)" data-bs-toggle="popover" data-bs-placement="top" data-bs-custom-class="popover-primary only-body" data-bs-content="This popover is used to provide details about this icon.">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>
                </a>
                <a class="me-4 svg-secondary" href="javascript:void(0)" data-bs-toggle="popover" data-bs-placement="left" data-bs-custom-class="popover-secondary only-body" data-bs-content="This popover is used to provide information about this icon.">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                </a>` },
    DismissiblePopovers = {
        script: ` <a tabindex="0" :class="btn btn-{idx.color} m-1" role="button" data-bs-toggle="popover" data-bs-trigger="focus" :data-bs-placement="idx.class" title="Dismissible popover" :data-bs-content="And here's some amazing content. It's very engaging. {idx.class}?"v-for="(idx, index) in popoverData.Dismissiblealerts" :key="index" >Popover Dismiss
            </a>`,
            data:`
            Dismissiblealerts = [
        { id: 1, color: "primary", class: "top" },
        { id: 2, color: "secondary", class: "right" },
        { id: 3, color: "info", class: "left" },
        { id: 4, color: "warning", class: "bottom" },
    ]`
    }