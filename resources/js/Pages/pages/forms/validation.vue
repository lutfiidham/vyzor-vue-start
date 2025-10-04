<script setup>
import * as prism from "@/shared/data/prismCode/forms/formvalidation"
import { useField, useForm } from 'vee-validate'
import { ref } from 'vue'
import Pageheader from '@/components/pageheader/pageheader.vue';
import ShowcodeCard from '../../../../UI/showcodeCard.vue';
import { Head } from "@inertiajs/vue3";

const dataToPass = {
    title: "Forms",
    currentpage: "Validation",
    activepage: "Validation"
}

// Validation Schema
const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        name(value) {
            if (value?.length >= 2) return true
            return 'Name needs to be at least 2 characters.'
        },
        phone(value) {
            if (value?.length > 9 && /^[0-9-]+$/.test(value)) return true
            return 'Phone number needs to be at least 9 digits.'
        },
        email(value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
            return 'Must be a valid e-mail.'
        },
        select(value) {
            if (value) return true
            return 'Select an item.'
        },
        checkbox(value) {
            if (value === '1') return true
            return 'Must be checked.'
        },
    },
})


// Form fields
const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const select = useField('select', undefined, { initialValue: '' })
const checkbox = useField('checkbox')


const items = ref([
    { text: 'Please select', value: '' },
    { text: 'Item 1', value: 'Item 1' },
    { text: 'Item 2', value: 'Item 2' },
    { text: 'Item 3', value: 'Item 3' },
    { text: 'Item 4', value: 'Item 4' },
])


// Submit handler
const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
})

// Additional (Manual) Form Validation (if needed)

// Optional additional manual validation
const firstname = ref('')
const lastname = ref('')
const username = ref('')
const city = ref('')
const state = ref('')
const zip = ref('')
const agree = ref(false)
const errors = ref([])

const checkForm = (e) => {
    errors.value = []

    if (!firstname.value) errors.value.push({ firstname: 'First Name required.' })
    if (!lastname.value) errors.value.push({ lastname: 'Last Name required.' })
    if (!username.value) errors.value.push({ username: 'Username required.' })
    if (!city.value) errors.value.push({ city: 'City required.' })
    if (!state.value) errors.value.push({ state: 'State required.' })
    if (!zip.value) errors.value.push({ zip: 'Zip required.' })
    if (!agree.value) errors.value.push({ agree: 'You must agree to terms.' })

    e.preventDefault()
}
</script>


<template>

    <Head title="Validation | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <ShowcodeCard :code="prism.customValidation" title="Custom Validation">
                <form class="row needs-validation" @submit="checkForm">
                    <div class="col-md-4 mb-3">
                        <label for="validationCustom01" class="form-label">First name</label>
                        <input type="text" class="form-control" id="validationDefault01" value="Mark" required>
                        <div v-if="errors?.[0]?.firstname" class="invalid-feedback d-block">
                            {{ errors?.[0]?.firstname }}
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationCustom02" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="validationDefault02" value="Otto" required>
                        <div v-if="errors?.[0]?.lastname" class="invalid-feedback d-block">
                            {{ errors?.[0]?.lastname }}
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationCustomUsername" class="form-label">Username</label>
                        <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" class="form-control" id="validationCustomUsername"
                                aria-describedby="inputGroupPrepend" v-model="username">
                            <div v-if="errors?.[0]?.username" class="invalid-feedback d-block">
                                {{ errors?.[0]?.username }}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="validationCustom03" class="form-label">City</label>
                        <input type="text" class="form-control" id="validationCustom03" v-model="city">
                        <div v-if="errors?.[0]?.city" class="invalid-feedback d-block">
                            {{ errors?.[0]?.city }}
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="validationCustom04" class="form-label">State</label>
                        <select class="form-select" id="validationCustom04" v-model="state">
                            <option selected disabled value="">Choose...</option>
                            <option>...</option>
                        </select>
                        <div v-if="errors?.[0]?.state" class="invalid-feedback d-block">
                            {{ errors?.[0]?.state }}
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom05" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="validationCustom05" v-model="zip">
                        <div v-if="errors?.[0]?.zip" class="invalid-feedback d-block">
                            {{ errors?.[0]?.zip }}
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" v-model="agree">
                            <label class="form-check-label" for="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div v-if="errors?.[0]?.agree" class="invalid-feedback d-block">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary mt-2" type="submit">Submit form</button>
                    </div>
                </form>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard :code="prism.browserDefaultValidation" title="Browser Default Validation">
                <form class="row g-3">
                    <div class="col-md-4">
                        <label for="validationDefault01" class="form-label">First name</label>
                        <input type="text" class="form-control" id="validationDefault01" value="Mark" required>
                    </div>
                    <div class="col-md-4">
                        <label for="validationDefault02" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="validationDefault02" value="Otto" required>
                    </div>
                    <div class="col-md-4">
                        <label for="validationDefaultUsername" class="form-label">Username</label>
                        <div class="input-group">
                            <span class="input-group-text" id="inputGroupPrepend2">@</span>
                            <input type="text" class="form-control" id="validationDefaultUsername"
                                aria-describedby="inputGroupPrepend2" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault03" class="form-label">City</label>
                        <input type="text" class="form-control" id="validationDefault03" required>
                    </div>
                    <div class="col-md-3">
                        <label for="validationDefault04" class="form-label">State</label>
                        <select class="form-select" id="validationDefault04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="validationDefault05" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="validationDefault05" required>
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
                            <label class="form-check-label" for="invalidCheck2">
                                Agree to terms and conditions
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="row">
                <div class="col-xl-12">
                    <ShowcodeCard :code="prism.serversideValidation" title="Server side Validation">
                        <form class="row g-3">
                            <div class="col-md-4">
                                <label for="validationServer01" class="form-label">First
                                    name</label>
                                <input type="text" class="form-control is-valid" id="validationServer01" value="Mark"
                                    required>
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationServer02" class="form-label">Last
                                    name</label>
                                <input type="text" class="form-control is-valid" id="validationServer02" value="Otto"
                                    required>
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationServerUsername" class="form-label">Username</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputGroupPrepend3">@</span>
                                    <input type="text" class="form-control is-invalid" id="validationServerUsername"
                                        aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
                                    <div id="validationServerUsernameFeedback" class="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="validationServer03" class="form-label">City</label>
                                <input type="text" class="form-control is-invalid" id="validationServer03"
                                    aria-describedby="validationServer03Feedback" required>
                                <div id="validationServer03Feedback" class="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationServer04" class="form-label">State</label>
                                <select class="form-select is-invalid" id="validationServer04"
                                    aria-describedby="validationServer04Feedback" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>...</option>
                                </select>
                                <div id="validationServer04Feedback" class="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationServer05" class="form-label">Zip</label>
                                <input type="text" class="form-control is-invalid" id="validationServer05"
                                    aria-describedby="validationServer05Feedback" required>
                                <div id="validationServer05Feedback" class="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input is-invalid" type="checkbox" value=""
                                        id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>
                                    <label class="form-check-label" for="invalidCheck3">
                                        Agree to terms and conditions
                                    </label>
                                    <div id="invalidCheck3Feedback" class="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Submit
                                    form</button>
                            </div>
                        </form>
                    </ShowcodeCard>
                </div>
                <div class="col-xl-12 custom-valid">
                    <ShowcodeCard :code="prism.vutifyValidation" title="Vutify Validation">
                        <form @submit.prevent="submit">
                            <v-text-field v-model="name.value.value" :counter="10"
                                :error-messages="name.errorMessage.value" label="Name"></v-text-field>

                            <v-text-field v-model="phone.value.value" :counter="7"
                                :error-messages="phone.errorMessage.value" type="number"
                                label="Phone Number"></v-text-field>

                            <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
                                label="E-mail"></v-text-field>

                            <v-select v-model="select.value.value" :items="items" item-title="text" item-value="value"
                                :error-messages="select.errorMessage.value" label="Select" />

                            <v-checkbox v-model="checkbox.value.value" :error-messages="checkbox.errorMessage.value"
                                value="1" label="Option" type="checkbox"></v-checkbox>

                            <v-btn class="me-4 " color="primary" type="submit">
                                submit
                            </v-btn>

                            <v-btn @click="handleReset" color="error">
                                clear
                            </v-btn>
                        </form>
                    </ShowcodeCard>
                    <div class="card custom-card">
                        <div class="card-header justify-content-between">
                            <div class="card-title">
                                Tooltips
                            </div>
                            <div class="prism-toggle">
                                <button class="btn btn-sm btn-primary-light">Show Code<i
                                        class="ri-code-line ms-2 d-inline-block align-middle"></i></button>
                            </div>
                        </div>
                        <div class="card-body">
                            <form class="row g-3 needs-validation" novalidate>
                                <div class="col-md-4 position-relative">
                                    <label for="validationTooltip01" class="form-label">First
                                        name</label>
                                    <input type="text" class="form-control" id="validationTooltip01" value="Mark"
                                        required>
                                    <div class="valid-tooltip">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="col-md-4 position-relative">
                                    <label for="validationTooltip02" class="form-label">Last
                                        name</label>
                                    <input type="text" class="form-control" id="validationTooltip02" value="Otto"
                                        required>
                                    <div class="valid-tooltip">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="col-md-4 position-relative">
                                    <label for="validationTooltipUsername" class="form-label">Username</label>
                                    <div class="input-group has-validation">
                                        <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                        <input type="text" class="form-control" id="validationTooltipUsername"
                                            aria-describedby="validationTooltipUsernamePrepend" required>
                                        <div class="invalid-tooltip">
                                            Please choose a unique and valid username.
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 position-relative">
                                    <label for="validationTooltip03" class="form-label">City</label>
                                    <input type="text" class="form-control" id="validationTooltip03" required>
                                    <div class="invalid-tooltip">
                                        Please provide a valid city.
                                    </div>
                                </div>
                                <div class="col-md-3 position-relative">
                                    <label for="validationTooltip04" class="form-label">State</label>
                                    <select class="form-select" id="validationTooltip04" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                    <div class="invalid-tooltip">
                                        Please select a valid state.
                                    </div>
                                </div>
                                <div class="col-md-3 position-relative">
                                    <label for="validationTooltip05" class="form-label">Zip</label>
                                    <input type="text" class="form-control" id="validationTooltip05" required>
                                    <div class="invalid-tooltip">
                                        Please provide a valid zip.
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary" type="submit">Submit
                                        form</button>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer d-none border-top-0">
                            <!-- Prism Code -->
                            <pre class="language-html"><code class="language-html">&lt;form class="row g-3 needs-validation" novalidate&gt;
    &lt;div class="col-md-4 position-relative"&gt;
        &lt;label for="validationTooltip01" class="form-label"&gt;First
            name&lt;/label&gt;
        &lt;input type="text" class="form-control" id="validationTooltip01"
            value="Mark" required&gt;
        &lt;div class="valid-tooltip"&gt;
            Looks good!
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-md-4 position-relative"&gt;
        &lt;label for="validationTooltip02" class="form-label"&gt;Last
            name&lt;/label&gt;
        &lt;input type="text" class="form-control" id="validationTooltip02"
            value="Otto" required&gt;
        &lt;div class="valid-tooltip"&gt;
            Looks good!
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-md-4 position-relative"&gt;
        &lt;label for="validationTooltipUsername"
            class="form-label"&gt;Username&lt;/label&gt;
        &lt;div class="input-group has-validation"&gt;
            &lt;span class="input-group-text"
                id="validationTooltipUsernamePrepend"&gt;@&lt;/span&gt;
            &lt;input type="text" class="form-control"
                id="validationTooltipUsername"
                aria-describedby="validationTooltipUsernamePrepend"
                required&gt;
            &lt;div class="invalid-tooltip"&gt;
                Please choose a unique and valid username.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-md-6 position-relative"&gt;
        &lt;label for="validationTooltip03" class="form-label"&gt;City&lt;/label&gt;
        &lt;input type="text" class="form-control" id="validationTooltip03"
            required&gt;
        &lt;div class="invalid-tooltip"&gt;
            Please provide a valid city.
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-md-3 position-relative"&gt;
        &lt;label for="validationTooltip04" class="form-label"&gt;State&lt;/label&gt;
        &lt;select class="form-select" id="validationTooltip04" required&gt;
            &lt;option selected disabled value=""&gt;Choose...&lt;/option&gt;
            &lt;option&gt;...&lt;/option&gt;
        &lt;/select&gt;
        &lt;div class="invalid-tooltip"&gt;
            Please select a valid state.
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-md-3 position-relative"&gt;
        &lt;label for="validationTooltip05" class="form-label"&gt;Zip&lt;/label&gt;
        &lt;input type="text" class="form-control" id="validationTooltip05"
            required&gt;
        &lt;div class="invalid-tooltip"&gt;
            Please provide a valid zip.
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-12"&gt;
        &lt;button class="btn btn-primary" type="submit"&gt;Submit
            form&lt;/button&gt;
    &lt;/div&gt;
&lt;/form&gt;</code></pre>
                            <!-- Prism Code -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard :code="prism.supportedElements" title="Supported elements">
                <form class="was-validated">
                    <div class="mb-3">
                        <label for="validationTextarea" class="form-label">Textarea</label>
                        <textarea class="form-control is-invalid" id="validationTextarea"
                            placeholder="Required example textarea" required></textarea>
                        <div class="invalid-feedback">
                            Please enter a message in the textarea.
                        </div>
                    </div>

                    <div class="form-check mb-3">
                        <input type="checkbox" class="form-check-input" id="validationFormCheck1" required>
                        <label class="form-check-label" for="validationFormCheck1">Check this
                            checkbox</label>
                        <div class="invalid-feedback">Example invalid feedback text</div>
                    </div>

                    <div class="form-check">
                        <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked"
                            required>
                        <label class="form-check-label" for="validationFormCheck2">Toggle this
                            radio</label>
                    </div>
                    <div class="form-check mb-3">
                        <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked"
                            required>
                        <label class="form-check-label" for="validationFormCheck3">Or toggle
                            this
                            other radio</label>
                        <div class="invalid-feedback">More example invalid feedback text</div>
                    </div>

                    <div class="mb-3">
                        <select class="form-select" required aria-label="select example">
                            <option value="">Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div class="invalid-feedback">Example invalid select feedback</div>
                    </div>

                    <div class="mb-3">
                        <input type="file" class="form-control" aria-label="file example" required>
                        <div class="invalid-feedback">Example invalid form file feedback</div>
                    </div>

                    <div class="mb-3">
                        <button class="btn btn-primary" type="submit" disabled>Submit
                            form</button>
                    </div>
                </form>
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-2 -->
</template>

<style scoped>
/* Add your styles here */
</style>
