export let
    basicProgress = {
        script: `
     <div :class="progress {idx.maincustomClass}" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" v-for="(idx, index) in progressData.progressdata" :key="index" >
                <div class="progress-bar" :style="{ width: idx.data + '%' }"></div>
            </div>`,
        data: ` 
        progressdata = [
        { id: 1, data: 0, maincustomClass: "mb-3" },
        { id: 2, data: 25, maincustomClass: "mb-3" },
        { id: 3, data: 50, maincustomClass: "mb-3" },
        { id: 4, data: 75, maincustomClass: "mb-3" },
        { id: 5, data: 100, maincustomClass: "mb-0" },
    ]
        `
    },
    differentColoredProgress = {
        script: `
    <div :class="progress {idx.maincustomClass}" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" v-for="(idx, index) in progressData.Coloreddata" :key="index">
                <div :class="progress-bar bg-{idx.color}" :style="{width:idx.data+'%'}"></div>
            </div>`,
        data: `
         Coloreddata = [
        { id: 1, data: 20, color: "secondary", maincustomClass: "mb-3" },
        { id: 2, data: 40, color: "warning", maincustomClass: "mb-3" },
        { id: 3, data: 60, color: "info", maincustomClass: "mb-3" },
        { id: 4, data: 80, color: "success", maincustomClass: "mb-3" },
        { id: 5, data: 100, color: "danger", maincustomClass: "" },
    ]
        `
    },
    stripedProgress = {
        script: `
     <div :class="progress {idx.maincustomClass}" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" v-for="(idx, index) in progressData.Stripeddata" :key="index">
                <div :class="progress-bar progress-bar-striped bg-{idx.color}" :style="{width:idx.data+'%'}">
                </div>
            </div>`,
        data: `
        Stripeddata = [
        { id: 1, data: 10, color: "primary", maincustomClass: "mb-3" },
        { id: 2, data: 25, color: "secondary", maincustomClass: "mb-3" },
        { id: 3, data: 50, color: "success", maincustomClass: "mb-3" },
        { id: 4, data: 75, color: "info", maincustomClass: "mb-3" },
        { id: 5, data: 100, color: "warning", maincustomClass: "" },
    ]
        `
    },
    progressHeight = {
        script: `
                <div :class="progress {idx.class}" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" v-for="(idx, index) in progressData.Heightdata" :key="index">
                <div class="progress-bar bg-primary" :style="{width:idx.data+'%'}">
                </div>
            </div>`,

        data: `
         Heightdata = [
        { id: 1, data: 10, class: "progress progress-xs mb-3" },
        { id: 2, data: 25, class: "progress progress-sm mb-3" },
        { id: 3, data: 50, class: "progress  mb-3" },
        { id: 4, data: 75, class: "progress progress-lg mb-3"},
        { id: 5, data: 100, class: "progress progress-xl" },
    ]
        `},
    progressWithLabels = {
        script: `
     <div :class="progress {idx.maincustomClass}" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" v-for="(idx, index) in progressData.Stripeddata" :key="index">
                <div :class="progress-bar bg-{idx.color}" :style="{width: idx.data+'%'}">{{idx.data}}%</div>
            </div>`,
        data: `
        Stripeddata = [
        { id: 1, data: 10, color: "primary", maincustomClass: "mb-3" },
        { id: 2, data: 25, color: "secondary", maincustomClass: "mb-3" },
        { id: 3, data: 50, color: "success", maincustomClass: "mb-3" },
        { id: 4, data: 75, color: "info", maincustomClass: "mb-3" },
        { id: 5, data: 100, color: "warning", maincustomClass: "" },
    ]
        `
    },
    multipleBarsWithSizes = {
        script: `
    <div :class="progress-stacked progress-{idx.size} {idx.maincustomClass}" v-for="(idx, index) in progressData.Multipleprogress" :key="index">
                <div :class="progress-bar bg-{idx.class1}" role="progressbar" :style="{width: idx.now1 +'%'}" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                <div :class="progress-bar bg-{idx.class2}" role="progressbar" :style="{width: idx.now2+'%'}" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                <div :class="progress-bar bg-{idx.class3}" role="progressbar" :style="{width: idx.now3+'%'}" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            </div>`,
        data: `
        Multipleprogress = [
        { class1: "primary", class2: "secondary", class3: "success", now1: 5, now2: 10, now3: 15, size: "xs", maincustomClass: "mb-3" },
        { class1: "warning", class2: "info", class3: "danger", now1: 10, now2: 15, now3: 20, size: "sm", maincustomClass: "mb-3" },
        { class1: "info", class2: "success", class3: "primary", now1: 15, now2: 20, now3: 25, size: "", maincustomClass: "mb-3" },
        { class1: "purple", class2: "teal", class3: "orange", now1: 20, now2: 25, now3: 30, size: "lg", maincustomClass: "mb-3" },
        { class1: "success", class2: "danger", class3: "warning", now1: 25, now2: 30, now3: 35, size: "xl", maincustomClass: "" },

    ]
        `
    },
    animatedStrippedProgress = {
        script: `
     <div :class="progress {idx.class}" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" v-for="(idx, index) in progressData.Animatedata" :key="index" >
                <div :class="progress-bar progress-bar-striped bg-{idx.color} progress-bar-animated" :style="{width: idx.data+'%'}"></div>
            </div>`,
        data: `
         Animatedata = [
        { id: 1, data: 10, color: "primary", class: "mb-3" },
        { id: 2, data: 20, color: "secondary", class: "mb-3" },
        { id: 3, data: 40, color: "success", class: "mb-3" },
        { id: 4, data: 60, color: "info", class: "mb-3" },
        { id: 5, data: 80, color: "warning", class: "mb-0" },
    ]`
    },
    gradientProgress = {
        script: `
     <div :class="progress {idx.class}" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" v-for="(idx, index) in progressData.Animatedata" :key="index">
                <div :class="progress-bar bg-{idx.color}-gradient" :style="{width: idx.data+'%'}"></div>
            </div>` ,
        data: `
        Animatedata = [
        { id: 1, data: 10, color: "primary", class: "mb-3" },
        { id: 2, data: 20, color: "secondary", class: "mb-3" },
        { id: 3, data: 40, color: "success", class: "mb-3" },
        { id: 4, data: 60, color: "info", class: "mb-3" },
        { id: 5, data: 80, color: "warning", class: "mb-0" },
    ]
        `
    },
    customAnimatedProgress = {
        script: `
    <div :class="progress {idx.class} progress-animate" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" v-for="(idx, index) in progressData.Animatedata" :key="index">
                <div :class="progress-bar bg{idx.color}-gradient" :style="{width: idx.data+'%'}"></div>
            </div>`,
        data: `
        Animatedata = [
        { id: 1, data: 10, color: "primary", class: "mb-3" },
        { id: 2, data: 20, color: "secondary", class: "mb-3" },
        { id: 3, data: 40, color: "success", class: "mb-3" },
        { id: 4, data: 60, color: "info", class: "mb-3" },
        { id: 5, data: 80, color: "warning", class: "mb-0" },
    ]
        `
    },
    customProgress1 = {
        script: `
     <div class="progress progress-sm progress-custom mb-5 progress-animate" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <h6 class="progress-bar-title">Mobiles</h6>
                <div class="progress-bar" style="width: 50%">
                    <div class="progress-bar-value">50%</div>
                </div>
            </div>
            <div class="progress progress-sm progress-custom mb-5 progress-animate" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                <h6 class="progress-bar-title bg-secondary">Watches</h6>
                <div class="progress-bar bg-secondary" style="width: 60%">
                    <div class="progress-bar-value bg-secondary">60%</div>
                </div>
            </div>
            <div class="progress progress-sm progress-custom progress-animate" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                <h6 class="progress-bar-title bg-success">Shirts</h6>
                <div class="progress-bar bg-success" style="width: 70%">
                    <div class="progress-bar-value bg-success">70%</div>
                </div>
            </div>` },
    customProgress2 = {
        script: `
    <div :class="progress progress-sm {idx.class3}" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" v-for="(idx, index) in progressData.CustomProgress2data" :key="index">
                <div :class="progress-item-1 bg-{idx.class}"></div>
                <div :class="progress-item-2 bg-{idx.class2}"></div>
                <div :class="progress-item-3 bg-{idx.class1}"></div>
                <div :class="progress-bar bg-{idx.class}" :style="{width: idx.now+'%'}"></div>
            </div>`,
        data: `
        CustomProgress2data = [
        { class: "primary", now: 50, class1: "", class2: "", class3: "mb-4" },
        { class: "secondary", now: 60, class1: "", class2: "secondary", class3: "mb-4" },
        { class: "success", now: 70, class1: "", class2: "success", class3: "mb-4" },
        { class: "info", now: 80, class1: "info", class2: "info", class3: "mb-4" },
        { class: "warning", now: 90, class1: "warning", class2: "warning", class3: "" },
    ]
        `
    },
    customProgress3 = {
        script: `
     <div class="progress progress-lg mb-5 custom-progress-3 progress-animate" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style="width: 50%">
                    <div class="progress-bar-value">50%</div>
                </div>
            </div>
            <div class="progress progress-lg mb-5 custom-progress-3 progress-animate" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-secondary" style="width: 60%">
                    <div class="progress-bar-value secondary">60%</div>
                </div>
            </div>
            <div class="progress progress-lg custom-progress-3 progress-animate" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-success" style="width: 70%">
                    <div class="progress-bar-value success">70%</div>
                </div>
            </div>` },
    customProgress4 = {
        script: `
    <div class="progress progress-xl mb-3 progress-animate custom-progress-4" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-primary-gradient" style="width: 10%"></div>
                    <div class="progress-bar-label">10%</div>
                </div>
                <div class="progress progress-xl mb-3 progress-animate custom-progress-4 secondary" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-secondary-gradient" style="width: 20%"></div>
                    <div class="progress-bar-label">20%</div>
                </div>
                <div class="progress progress-xl mb-3 progress-animate custom-progress-4 success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-success-gradient" style="width: 40%"></div>
                    <div class="progress-bar-label">40%</div>
                </div>
                <div class="progress progress-xl mb-3 progress-animate custom-progress-4 info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-info-gradient" style="width: 60%"></div>
                    <div class="progress-bar-label">60%</div>
                </div>
                <div class="progress progress-xl mb-3 progress-animate custom-progress-4 warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-warning-gradient" style="width: 80%"></div>
                    <div class="progress-bar-label">80%</div>
                </div>
                <div class="progress progress-xl progress-animate custom-progress-4 danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-danger-gradient" style="width: 90%"></div>
                    <div class="progress-bar-label">90%</div>
                </div>` },
    customProgress5 = {
        script: `
    <h6 class="fw-medium mb-2">Project Dependencies</h6>
                <div class="progress-stacked progress-xl mb-5">
                    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                    <div class="progress-bar bg-secondary" role="progressbar" style="width: 35%" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">35%</div>
                    <div class="progress-bar bg-danger" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-5">
                        <div class="border p-3">
                            <p class="fs-12 fw-medium mb-0 text-muted">Html<span class="float-end fs-10 fw-normal">25%</span></p>
                            <div class="progress progress-xs mb-4 progress-animate" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-primary" style="width: 25%">
                                </div>
                            </div>
                            <p class="fs-12 fw-medium mb-0 text-muted">Css<span class="float-end fs-10 fw-normal">35%</span></p>
                            <div class="progress progress-xs mb-4 progress-animate" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-secondary" style="width: 35%">
                                </div>
                            </div>
                            <p class="fs-12 fw-medium mb-0 text-muted">Js<span class="float-end fs-10 fw-normal">40%</span></p>
                            <div class="progress progress-xs mb-0 progress-animate" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-danger" style="width: 40%">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>` };