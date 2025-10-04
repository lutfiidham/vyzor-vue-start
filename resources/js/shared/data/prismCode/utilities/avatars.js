export let
    avatars = {
        script: `
    <span :class="avatar me-2 {idx.class}" v-for="(idx, index) in avatarData.Avatardata" :key="index">
                <img :src="idx.src" alt="img">
            </span>`,
        data: `
        Avatardata = [
        { id: 1, class: "avatar-radius-0", src: "/images/faces/1.jpg" },
        { id: 1, class: "", src: "/images/faces/2.jpg" },
        { id: 1, class: "avatar-rounded", src: "/images/faces/3.jpg" },
    ]` },
    avatarSizes = {
        script: `
    <span :class="avatar avatar-{idx.class} me-2" v-for="(idx, index) in avatarData.Avatarsize" :key="index">
                <img :src="idx.src" alt="img">
            </span>`,
        data: `
         Avatarsize = [
        { id: 1, class: "xs", src: "/images/faces/4.jpg" },
        { id: 2, class: "sm", src: "/images/faces/5.jpg" },
        { id: 3, class: "md", src: "/images/faces/6.jpg" },
        { id: 4, class: "lg", src: "/images/faces/7.jpg" },
        { id: 5, class: "xl", src: "/images/faces/8.jpg" },
        { id: 6, class: "xxl", src: "/images/faces/9.jpg" },
    ]
        `
    },
    avatarWithIcons = {
        script: `
    <span :class="avatar avatar-{idx.class} me-2 avatar-rounded" v-for="(idx, index) in avatarData.Avataricon" :key="index">
                <img :src="idx.src" alt="img">
                <a href="javascript:void(0);" :class="badge bg-{idx.class1} rounded-pill avatar-badge"><i :class="fe fe-{idx.icon}"></i></a>
            </span>`,

        data: `
         Avataricon = [
        { id: 1, class: "xs", src: "/images/faces/2.jpg", icon: "camera", class1: "success" },
        { id: 2, class: "sm", src: "/images/faces/3.jpg", icon: "edit", class1: "secondary" },
        { id: 3, class: "md", src: "/images/faces/14.jpg", icon: "plus", class1: "warning" },
        { id: 4, class: "lg", src: "/images/faces/13.jpg", icon: "edit", class1: "info" },
        { id: 5, class: "xl", src: "/images/faces/15.jpg", icon: "camera", class1: "success" },
        { id: 6, class: "xxl", src: "/images/faces/9.jpg", icon: "plus", class1: "danger" },
    ]
        `},
    avatarWithOnlineStatusIndicators = {
        script: `
   <span :class="avatar avatar-{idx.class} me-2 online avatar-rounded" v-for="(idx, index) in avatarData.Avataronline" :key="index">
                <img :src="idx.src" alt="img">
            </span>`,
        data: `
        Avataronline = [
        { id: 1, class: "xs online", src: "/images/faces/8.jpg" },
        { id: 2, class: "sm online", src: "/images/faces/10.jpg" },
        { id: 3, class: "md online", src: "/images/faces/12.jpg" },
        { id: 4, class: "lg online", src: "/images/faces/13.jpg" },
        { id: 5, class: "xl online", src: "/images/faces/14.jpg" },
        { id: 6, class: "xxl online", src: "/images/faces/15.jpg" },
    ]
        ` },
    avatarWithOfflineStatusIndicators = {
        script: `
    <span :class="avatar avatar-{idx.class} me-2 offline avatar-rounded" v-for="(idx, index) in avatarData.Avataroffline" :key="index">
                <img :src="idx.src" alt="img">
            </span>`,
        data: `
        Avataroffline = [
        { id: 1, class: "xs offline", src: "/images/faces/2.jpg" },
        { id: 2, class: "sm offline", src: "/images/faces/3.jpg" },
        { id: 3, class: "md offline", src: "/images/faces/4.jpg" },
        { id: 4, class: "lg offline", src: "/images/faces/5.jpg" },
        { id: 5, class: "xl offline", src: "/images/faces/6.jpg" },
        { id: 6, class: "xxl offline", src: "/images/faces/7.jpg" },
    ]
        `
    },
    avatarsWithNumberBadges = {
        script: `
     <span :class="avatar avatar-{idx.class} me-2 avatar-rounded" v-for="(idx, index) in avatarData.Avatarnumber" :key="index">
                <img :src="idx.src" alt="img">
                <span :class="badge rounded-pill bg-{idx.class1} avatar-badge">{{idx.data}}</span>
            </span>`,
        data: `
         Avatarnumber = [
        { id: 1, class: "xs", src: "/images/faces/2.jpg", icon: "camera", class1: "primary", data: '2' },
        { id: 2, class: "sm", src: "/images/faces/3.jpg", icon: "edit", class1: "secondary", data: '5' },
        { id: 3, class: "md", src: "/images/faces/14.jpg", icon: "plus", class1: "warning", data: '1' },
        { id: 4, class: "lg", src: "/images/faces/13.jpg", icon: "edit", class1: "info", data: '7' },
        { id: 5, class: "xl", src: "/images/faces/15.jpg", icon: "camera", class1: "success", data: '3' },
        { id: 6, class: "xxl", src: "/images/faces/9.jpg", icon: "plus", class1: "danger", data: '9' },
    ]
        `
    },
    avatarWithInitials = {
        script: `
    <span :class="avatar avatar-{idx.data} m-2 bg-{idx.color}" v-for="(idx, index) in avatarData.Avatarinitial" :key="index">
                {{idx.data1}}
            </span>`,
        data: `
         Avatarinitial = [
        { id: 1, data: "xs", color: "primary", data1: "XS" },
        { id: 2, data: "sm", color: "secondary", data1: "SM" },
        { id: 3, data: "md", color: "warning", data1: "MD" },
        { id: 4, data: "lg", color: "danger", data1: "LG" },
        { id: 5, data: "xl", color: "success", data1: "XL" },
        { id: 6, data: "xxl", color: "info", data1: "XXL" },
    ]
        ` },
    stackedAvatars = {
        script: `
     <span class="avatar" v-for="(idx, index) in avatarData.Avatarstack" :key="index">
                <img :src="idx.src" alt="img">
            </span>`,
        data: `
        Avatarstack = [
        { id: 1, src: "/images/faces/2.jpg" },
        { id: 2, src: "/images/faces/8.jpg" },
        { id: 3, src: "/images/faces/2.jpg" },
        { id: 4, src: "/images/faces/10.jpg" },
        { id: 5, src: "/images/faces/4.jpg" },
        { id: 6, src: "/images/faces/13.jpg" },
    ]
        `
    },
    roundedStackedAvatars = {
        script: `
     <span class="avatar avatar-rounded" v-for="(idx, index) in avatarData.Avatarstack" :key="index">
                <img :src="idx.src" alt="img">
            </span>`,
        data: `
        Avatarstack = [
        { id: 1, src: "/images/faces/2.jpg" },
        { id: 2, src: "/images/faces/8.jpg" },
        { id: 3, src: "/images/faces/2.jpg" },
        { id: 4, src: "/images/faces/10.jpg" },
        { id: 5, src: "/images/faces/4.jpg" },
        { id: 6, src: "/images/faces/13.jpg" },
    ]
        `
    };