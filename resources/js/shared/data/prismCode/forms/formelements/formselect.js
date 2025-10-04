
export let
    DefaultSelect = {
        script: `
     <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>`
    },
    DisabledSelect = {
        script: `
    <select class="form-select" aria-label="Disabled select example" disabled>
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>`
    },
    RoundedSelect = {
        script: `
    <select class="form-select rounded-pill" aria-label="Default select example">
                <option selected>Open this select menu
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>`
    },
    MultipleAttributeSelect = {
        script: `
    <select class="form-select" multiple aria-label="multiple select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>`
    },
    UsingSizeAttribute = {
        script: `
    <select class="form-select" size="4" aria-label="size 3 select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
            </select>`
    },
    SelectSizes = {
        script: `
    <select class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select><select class="form-select mb-3" aria-label="Default select">
                <option selected>Open this select menu
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>`
    }