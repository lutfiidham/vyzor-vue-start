export let
    BasicList = {
        script: `
     <ul class="list-group">
                <li class="list-group-item" v-for="(idx,index) in listData.BasicButtons" :key="index">
                    <div class="d-flex align-items-center">
                        <span class="avatar avatar-sm">
                            <img :src="idx.src" alt="img">
                        </span>
                        <div class="ms-2 fw-medium">
                            {{idx.text}}
                        </div>
                    </div>
                </li>
            </ul>`,

        data: `
             BasicButtons = [
        { id: 1, src: "/images/faces/1.jpg", text: "Alicia Sierra" },
        { id: 2, src: "/images/faces/3.jpg", text: "Samantha Mery" },
        { id: 3, src: "/images/faces/6.jpg", text: "Juliana Pena" },
        { id: 4, src: "/images/faces/15.jpg", text: "Adam Smith" },
        { id: 5, src: "/images/faces/13.jpg", text: "Farhaan Amhed" },
    ]
            `
    },
    ActiveItems = {
        script: `
     <ul class="list-group">
                <li :class="list-group-item {idx.class1}" v-for="(idx,index) in listData.ActiveButtons" :key="index">
                    <div class="d-flex align-items-center">
                        <div>
                            <span class="fs-15">
                                <i :class="idx.class"></i>
                            </span>
                        </div>
                        <div class="ms-2">
                            {{idx.text}}
                        </div>
                    </div>
                </li>
            </ul>`,
        data: `
        ActiveButtons = [
        { id: 1, class: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,116.69V216H152V152H104v64H40V116.69l82.34-82.35a8,8,0,0,1,11.32,0Z" opacity="0.2"></path><path d="M240,208H224V136l2.34,2.34A8,8,0,0,0,237.66,127L139.31,28.68a16,16,0,0,0-22.62,0L18.34,127a8,8,0,0,0,11.32,11.31L32,136v72H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM48,120l80-80,80,80v88H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48Zm96,88H112V160h32Z"></path></svg>', text: "Home", class1: "active",class2:'white' },
        { id: 2, class: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,147.81,56,112a72,72,0,0,1,144,0c0,35.82,8.3,56.6,14.9,68A8,8,0,0,1,208,192Z" opacity="0.2"></path><path d="M224,71.1a8,8,0,0,1-10.78-3.42,94.13,94.13,0,0,0-33.46-36.91,8,8,0,1,1,8.54-13.54,111.46,111.46,0,0,1,39.12,43.09A8,8,0,0,1,224,71.1ZM35.71,72a8,8,0,0,0,7.1-4.32A94.13,94.13,0,0,1,76.27,30.77a8,8,0,1,0-8.54-13.54A111.46,111.46,0,0,0,28.61,60.32,8,8,0,0,0,35.71,72Zm186.1,103.94A16,16,0,0,1,208,200H167.2a40,40,0,0,1-78.4,0H48a16,16,0,0,1-13.79-24.06C43.22,160.39,48,138.28,48,112a80,80,0,0,1,160,0C208,138.27,212.78,160.38,221.81,175.94ZM150.62,200H105.38a24,24,0,0,0,45.24,0ZM208,184c-10.64-18.27-16-42.49-16-72a64,64,0,0,0-128,0c0,29.52-5.38,53.74-16,72Z"></path></svg>', text: "Notifications", class1: "" ,class2:'primary'},
        { id: 3, class: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128Z" opacity="0.2"></path><path d="M216,72H180.92c.39-.33.79-.65,1.17-1A29.53,29.53,0,0,0,192,49.57,32.62,32.62,0,0,0,158.44,16,29.53,29.53,0,0,0,137,25.91a54.94,54.94,0,0,0-9,14.48,54.94,54.94,0,0,0-9-14.48A29.53,29.53,0,0,0,97.56,16,32.62,32.62,0,0,0,64,49.57,29.53,29.53,0,0,0,73.91,71c.38.33.78.65,1.17,1H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM149,36.51a13.69,13.69,0,0,1,10-4.5h.49A16.62,16.62,0,0,1,176,49.08a13.69,13.69,0,0,1-4.5,10c-9.49,8.4-25.24,11.36-35,12.4C137.7,60.89,141,45.5,149,36.51Zm-64.09.36A16.63,16.63,0,0,1,96.59,32h.49a13.69,13.69,0,0,1,10,4.5c8.39,9.48,11.35,25.2,12.39,34.92-9.72-1-25.44-4-34.92-12.39a13.69,13.69,0,0,1-4.5-10A16.6,16.6,0,0,1,84.87,36.87ZM40,88h80v32H40Zm16,48h64v64H56Zm144,64H136V136h64Zm16-80H136V88h80v32Z"></path></svg>', text: "Sent Messages", class1: "",class2:'primary' },
        { id: 4, class: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z" opacity="0.2"></path><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path></svg>', text: "New Requests", class1: "",class2:'primary' },
        { id: 5, class: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z" opacity="0.2"></path><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>', text: "Deleted Messages", class1: "" ,class2:'primary'},
    ]
        `
    },
    DisabledItems = {
        script: `
    <ul class="list-group">
                    <li class="list-group-item disabled" aria-disabled="true">A disabled item meant to be disabled
                    </li>
                    <li class="list-group-item">Simply dummy text of the printing</li>
                    <li class="list-group-item">There are many variations of passages</li>
                    <li class="list-group-item">All the Lorem Ipsum generators</li>
                    <li class="list-group-item">Written in 45 BC. This book is a treatise on the theory</li>
                </ul>` },
    flush = {
        script: `
    <ul class="list-group list-group-flush">
                <li class="list-group-item fw-medium"><i class="bi bi-envelope align-middle me-2 text-muted"></i>Asish Trivedhi<span class="ms-1 text-muted fw-normal d-inline-block">(+1023-84534)</span></li>
                <li class="list-group-item fw-medium"><i class="bi bi-tiktok align-middle me-2 text-muted"></i>Alezander Russo<span class="ms-1 text-muted fw-normal d-inline-block">(+7546-12342)</span></li>
                <li class="list-group-item fw-medium"><i class="bi bi-whatsapp align-middle me-2 text-muted"></i>Karem Smith<span class="ms-1 text-muted fw-normal d-inline-block">(+9944-56632)</span></li>
                <li class="list-group-item fw-medium"><i class="bi bi-facebook align-middle me-2 text-muted"></i>Melissa Brien<span class="ms-1 text-muted fw-normal d-inline-block">(+1023-34323)</span></li>
                <li class="list-group-item fw-medium"><i class="bi bi-instagram align-middle me-2 text-muted"></i>Kamala Harris<span class="ms-1 text-muted fw-normal d-inline-block">(+91-63421)</span></li>
            </ul>` },
    links = {
        script: `
    <div class="list-group">
                <a href="javascript:void(0);" :class="list-group-item list-group-item-action {idx.class1}" aria-current="true" v-for="(idx,index) in listData.LinksButtons" :key="index">
                    <div class="d-flex align-items-center">
                        <div>
                            <span :class="avatar avatar-xs bg-{idx.class} text-{idx.color} avatar-rounded">
                                {{idx.text1}}
                            </span>
                        </div>
                        <div class="ms-2">{{idx.text}}</div>
                    </div>
                </a>
            </div>`,

        data: `
         LinksButtons= [
        { id: 1, class: "white", text: "California", class1: "active", text1: "C", color: "default" },
        { id: 2, class: "secondary", text: "New Jersey", class1: "", text1: "N", color: "" },
        { id: 3, class: "info", text: "Los Angeles", class1: "", text1: "L", color: "" },
        { id: 4, class: "warning", text: "Miami Florida", class1: "", text1: "M", color: "" },
        { id: 5, class: "success", text: "Washington D.C", class1: "disabled", text1: "W", color: "" },
    ]
        `},
    buttons = {
        script: `
    <div class="list-group">
                    <button type="button" class="list-group-item list-group-item-action active" aria-current="true">Simply dummy text of the printing<span class="badge float-end bg-primary">243</span></button>
                    <button type="button" class="list-group-item list-group-item-action">There are many variations of passages<span class="badge float-end bg-secondary-transparent">35</span></button>
                    <button type="button" class="list-group-item list-group-item-action">All the Lorem Ipsum generators<span class="badge float-end bg-info-transparent">132</span></button>
                    <button type="button" class="list-group-item list-group-item-action">All the Lorem Ipsum generators<span class="badge float-end bg-success-transparent">2525</span></button>
                    <button type="button" class="list-group-item list-group-item-action" disabled>A disabled item meant to be disabled<span class="badge float-end bg-danger-transparent">21</span></button>
                </div>` },
    ContextualClasses = {
        script: `
   <ul class="list-group">
                <li :class="list-group-item {idx.class}" v-for="(idx,index) in listData.ContextualButtons" :key="index">A simple default list group item</li>
            </ul>`,
        data: `
        ContextualButtons = [
        { id: 1, text: "A simple default list group item", class: "", class1: "" },
        { id: 2, text: "A simple primary list group item", class: "list-group-item-primary", class1: "" },
        { id: 3, text: "A simple secondary list group item", class: "list-group-item-secondary", class1: "" },
        { id: 4, text: "A simple success list group item", class: "list-group-item-success", class1: "" },
        { id: 5, text: "A simple danger list group item", class: "list-group-item-danger", class1: "" },
        { id: 6, text: "A simple warning list group item", class: "list-group-item-warning", class1: "" },
        { id: 7, text: "A simple info list group item", class: "list-group-item-info", class1: "" },
        { id: 8, text: "A simple light list group item", class: "list-group-item-light", class1: "" },
        { id: 9, text: "A simple dark list group item", class: "list-group-item-dark", class1: "text-white" }
    ]
        ` },
    ContextualClassesWithHoverStyles = {
        script: `
    <div class="list-group">
                <a href="javascript:void(0);" :class="list-group-item list-group-item-action list-group-item-{idx.class} " v-for="(idx,index) in listData.ContextualButtons" :key="index">{{idx.text}}</a>
            </div>`,
        data: `
       ContextualButtons = [
        { id: 1, text: "A simple default list group item", class: "", class1: "" },
        { id: 2, text: "A simple primary list group item", class: "list-group-item-primary", class1: "" },
        { id: 3, text: "A simple secondary list group item", class: "list-group-item-secondary", class1: "" },
        { id: 4, text: "A simple success list group item", class: "list-group-item-success", class1: "" },
        { id: 5, text: "A simple danger list group item", class: "list-group-item-danger", class1: "" },
        { id: 6, text: "A simple warning list group item", class: "list-group-item-warning", class1: "" },
        { id: 7, text: "A simple info list group item", class: "list-group-item-info", class1: "" },
        { id: 8, text: "A simple light list group item", class: "list-group-item-light", class1: "" },
        { id: 9, text: "A simple dark list group item", class: "list-group-item-dark", class1: "text-white" }
    ] ` },
    SolidColoredLists = {
        script: `
      <ul class="list-group">
                <li :class="list-group-item list-item-solid-{idx.class} {idx.class1}" v-for="(idx,index) in listData.ContextualButtons" :key="index">{{idx.text}}</li>
            </ul>`,
        data: `
        ContextualButtons = [
        { id: 1, text: "A simple default list group item", class: "", class1: "" },
        { id: 2, text: "A simple primary list group item", class: "list-group-item-primary", class1: "" },
        { id: 3, text: "A simple secondary list group item", class: "list-group-item-secondary", class1: "" },
        { id: 4, text: "A simple success list group item", class: "list-group-item-success", class1: "" },
        { id: 5, text: "A simple danger list group item", class: "list-group-item-danger", class1: "" },
        { id: 6, text: "A simple warning list group item", class: "list-group-item-warning", class1: "" },
        { id: 7, text: "A simple info list group item", class: "list-group-item-info", class1: "" },
        { id: 8, text: "A simple light list group item", class: "list-group-item-light", class1: "" },
        { id: 9, text: "A simple dark list group item", class: "list-group-item-dark", class1: "text-white" }
    ] 
        ` },
    CustomContent = {
        script: `
     <div class="list-group">
                <a href="javascript:void(0);" :class="list-group-item list-group-item-action {idx.class1}" aria-current="true"  v-for="(idx,index) in listData.CustomButtons" :key="index">
                    <div class="d-sm-flex w-100 justify-content-between">
                        <h6 :class="mb-1 fw-medium {idx.color}">{{idx.heading}}</h6>
                        <small :class="idx.class2">{{idx.text1}}</small>
                    </div>
                    <p class="mb-1">{{idx.text2}}</p>
                    <small>{{idx.text3}}.</small>
                </a>
            </div>`,
        data:`
        CustomButtons = [
        { id: 1, heading: "Web page editors now use Lorem Ipsum?", text1: "3 days ago", class1: "active", text2: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.", text3: "24,Nov 2022", class2: "", color: "text-fixed-white" },
        { id: 2, heading: "Richard McClintock, a Latin professor?", text1: "4 hrs ago", class1: "", text2: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.", text3: "30,Nov 2022.", class2: "text-muted", color: "" },
        { id: 3, heading: "It uses a dictionary of over 200 Latin words?", text1: "15 hrs ago", class1: "", text2: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", text3: "4,Nov 2022.", class2: "text-muted", color: "" },
        { id: 4, heading: "The standard Lorem Ipsum used since the 1500s?", text1: "45 mins ago", class1: "", text2: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.", text3: "28,Oct 2022.", class2: "text-muted", color: "" },
    ]
        `
        },
    SubHeadings = {
        script: `
     <ol class="list-group list-group-numbered">
                <li class="list-group-item d-sm-flex justify-content-between align-items-start" v-for="(idx, index) in listData.SubheadingsButtons" :key="index">
                    <div class="ms-2 me-auto text-muted">
                        <div class="fw-medium fs-14 text-default">{{idx.text1}}</div>
                        {{idx.text2}}
                    </div>
                    <span :class="badge bg-{idx.class}">{{idx.text3}}</span>
                </li>
            </ol>`,
        data:`
        SubheadingsButtons = [
        { id: 1, text1: "What Happened?", text2: "Many experts have recently suggested may exist.", text3: "32 Views", class: "primary-transparent" },
        { id: 2, text1: "It Was Amazing!", text2: " His idea involved taking red.", text3: "52 Views", class: "secondary-transparent" },
        { id: 3, text1: "News Is A Great Weapon.", text2: "News can influence in many ways.", text3: "1,204 Views", class: "success-transparent" },
        { id: 4, text1: "majority have suffered.", text2: " If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.", text3: "14 Views", class: "danger-transparent" }
    ]
        `
        },
    NumberedLists = {
        script: `
    <ol class="list-group list-group-numbered">
                    <li class="list-group-item">Simply dummy text of the printing.</li>
                    <li class="list-group-item">There are many variations of passages.</li>
                    <li class="list-group-item">All the Lorem Ipsum generators.</li>
                    <li class="list-group-item">Written in 45 BC. This book is a treatise on the theory.</li>
                    <li class="list-group-item">Randomised words which don't look.</li>
                    <li class="list-group-item">Always free from repetition, injected humour.</li>
                </ol>` },
    ListWithCheckboxes = {
        script: `
     <ul class="list-group">
                    <li class="list-group-item">
                        <input class="form-check-input me-1 fw-medium" type="checkbox" value="" aria-label="..." checked>
                        Accurate information at any given point.
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1 fw-medium" type="checkbox" value="" aria-label="...">
                        Hearing the information and responding.
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1 fw-medium" type="checkbox" value="" aria-label="..." checked>
                        Setting up and customizing your own sales.
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1 fw-medium" type="checkbox" value="" aria-label="..." checked>
                        New Admin Launched.
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1 fw-medium" type="checkbox" value="" aria-label="...">
                        To maximize profits and improve productivity.
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1 fw-medium" type="checkbox" value="" aria-label="...">
                        To have a complete 360° overview of sales information, having.
                    </li>
                </ul>` },
    ListWithRadios = {
        script: `
    <div class="list-group">
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="radio" value="" name="list-radio" checked>
                        Accurate information at any given point.
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="radio" value="" name="list-radio" checked>
                        Hearing the information and responding.
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="radio" value="" name="list-radio" checked>
                        Setting up and customizing your own sales.
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="radio" value="" name="list-radio">
                        New Admin Launched.
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="radio" value="" name="list-radio">
                        To maximize profits and improve productivity.
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="radio" value="" name="list-radio">
                        To have a complete 360° overview of sales information, having.
                    </label>
                </div>` },
    ListWithBadges = {
        script: `
     <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center fw-medium" v-for="(idx, index) in listData.ListbadgesButtons" :key="index">
                    {{idx.text1}}
                    <span :class="badge bg-{idx.class} {idx.color}">{{idx.text2}}</span>
                </li>
            </ul>`,
        data:`
        ListbadgesButtons = [
        { id: 1, text1: "Groceries", text2: "Available", class: "primary", color: "" },
        { id: 2, text1: "Furniture", text2: "Buy", class: "secondary", color: "" },
        { id: 3, text1: "Beauty", text2: "32", class: "danger", color: "rounded-pill" },
        { id: 4, text1: "Books", text2: "New", class: "light", color: "text-default" },
        { id: 5, text1: "Toys", text2: "Hot", class: "info-gradient", color: "" },
        { id: 7, text1: "Mobiles", text2: "Sold Out", class: "warning", color: "" },
    ]
        `
        },
    Horizontal = {
        script: `
    <ul :class="mb-3 list-group list-group-horizontal{idx.class}" v-for="(idx, index) in listData.HorizontalButtons" :key="index">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>`,
        data:`
         HorizontalButtons = [
        { id: 1, class: "" },
        { id: 2, class: "-sm" },
        { id: 3, class: "-md" },
        { id: 4, class: "-lg" },
        { id: 5, class: "-xl" },
        { id: 6, class: "-xxl" },
    ]
        `
        };