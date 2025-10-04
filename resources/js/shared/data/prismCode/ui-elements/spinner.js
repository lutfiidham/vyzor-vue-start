export let
    BorderSpinner = {
        script: `
    <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>` },
    Colors = {
        script: `
    <div :class="spinner-border text-{idx.color}" role="status" v-for="(idx, index) in spinnerData.Colorspinner" :key="index">
                <span class="visually-hidden">Loading...</span>
            </div>`,
        data: `
         Colorspinner = [
	{ id: 1, color: "primary" },
	{ id: 5, color: "secondary" },
	{ id: 6, color: "success" },
	{ id: 7, color: "danger" },
	{ id: 8, color: "warning" },
	{ id: 9, color: "info" },
	{ id: 10, color: "light" },
	{ id: 11, color: "dark" }
]`
    },
    GrowingSpinner = {
        script: `
    <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>` },
    GrowingSpinner1 = {
        script: `
     <div :class="spinner-grow text-{idx.color}" role="status" v-for="(idx, index) in spinnerData.Colorspinner" :key="index">
                <span class="visually-hidden">Loading...</span>
            </div>`,
        data: `
            Colorspinner = [
       { id: 1, color: "primary" },
       { id: 5, color: "secondary" },
       { id: 6, color: "success" },
       { id: 7, color: "danger" },
       { id: 8, color: "warning" },
       { id: 9, color: "info" },
       { id: 10, color: "light" },
       { id: 11, color: "dark" }
   ]`
    },
    AlignmentFlex = {
        script: `
    <div class="d-flex justify-content-center mb-4">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>` },
    AlignmentFloat = {
        script: `
    <div class="clearfix mb-4">
                    <div class="spinner-border float-end" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div class="clearfix">
                    <div class="spinner-border float-start" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>` },
    AlignmentTextCenter = {
        script: `
    <div class="text-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>` },
    SpinnerSizes = {
        script: `
   <div class="spinner-border spinner-border-sm me-4" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow spinner-grow-sm me-4" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border me-4" style="width: 3rem; height: 3rem;" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>` },
    AlignmentMargin = {
        script: `
   <div class="spinner-border m-5" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>` },
    Buttons = {
        script: `
     <div class="btn-list">
                <button class="btn btn-primary-light" type="button" disabled>
                    <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"></span>
                    <span class="visually-hidden">Loading...</span>
                </button>
                <button class="btn btn-primary-light" type="button" disabled>
                    <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
                <button class="btn btn-primary-light" type="button" disabled>
                    <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
                    <span class="visually-hidden">Loading...</span>
                </button>
                <button :class="btn btn-{idx.color}" type="button" disabled v-for="(idx, index) in spinnerData.Buttonspinner" :key="index">
                        <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
            </div>`,
        data: `
        Buttonspinner = [
	{ id: 1, color: "primary-light", class: "" },
	{ id: 2, color: "secondary-light", class: "" },
	{ id: 3, color: "success-light", class: "" },
	{ id: 4, color: "info-light", class: "" },
	{ id: 5, color: "warning-light", class: "" },
	{ id: 6, color: "danger-light", class: "" },
	{ id: 7, color: "light", class: "" },
	{ id: 8, color: "dark", class: "text-dark" }
]
        `
    };