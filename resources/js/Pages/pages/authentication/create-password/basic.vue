<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import Baseimg from "../../../../components/Baseimage/BaseImg.vue"
import { Head, Link, router } from '@inertiajs/vue3';
import authlayout from "@/layouts/authlayout.vue"

const baseUrl = __BASE_PATH__

defineOptions({
    layout: authlayout,
})

const formData = reactive({
    password: '',
    confirmPassword: '',
})

const formErrors = reactive({})

const passwordVisibility = reactive({
    password: false,
    confirmPassword: false,
})

const matched = ref('')

// Handle input change
const handleChange = (field, value) => {
    formData[field] = value
    formErrors[field] = ''
}

// Toggle visibility for password fields
const togglePasswordVisibility = (field) => {
    passwordVisibility[field] = !passwordVisibility[field]
}

// Validate form inputs
const validate = () => {
    const errors = {}

    if (!formData.password || formData.password.length < 6) {
        errors.password = 'Password must be at least 6 characters'
    }

    if (formData.confirmPassword !== formData.password) {
        errors.confirmPassword = 'Passwords do not match'
    }

    Object.assign(formErrors, errors)

    return Object.keys(errors).length === 0
}

// Handle form submission
const handleSubmit = (e) => {
    e.preventDefault()

    // Clear previous success message
    matched.value = ''

    if (validate()) {
        matched.value = 'Create Password Successfully'
        // Navigate using Vue Router
        router.visit(`${baseUrl}/dashboards/sales`)
    }
}

const setBodyClass = (action) => {
    if (action === "add") {
        document.body.classList.add("authentication-background");
        document.body.style.display = 'block';
    } else {
        document.body.classList.remove("authentication-background");
        document.body.style.display = 'none';
    }
};

onMounted(() => {

    // Check if the user has visited before
    if (localStorage.getItem("visited") === "true") {
        setBodyClass("add");
    } else {
        setBodyClass("add");
        localStorage.setItem("visited", "true");
    }



    const handleBeforeUnload = () => {
        setBodyClass("remove");
        localStorage.removeItem("visited");
    };

    window.addEventListener("beforeunload", handleBeforeUnload, {
        passive: true
    });

    onBeforeUnmount(() => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        setBodyClass('remove');
        document.body.removeAttribute('style');
    });
});

</script>

<template>

    <Head title="Basic Create-Password | Vyzor - Laravel & Vue " />
    <div class="authentication-basic-background">
        <Baseimg src="/images/media/backgrounds/9.png" alt="" />
    </div>
    <div class="container">
        <div class="row justify-content-center align-items-center authentication authentication-basic h-100">
            <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-sm-8 col-12">
                <div class="card custom-card border-0 my-4">
                    <div class="card-body p-5">
                        <div class="mb-4">
                            <Link :href="`${baseUrl}/dashboards/sales`">
                            <Baseimg src="/images/brand-logos/toggle-logo.png" alt="logo" class="desktop-dark" />
                            </Link>
                        </div>
                        <div>
                            <h4 class="mb-1 fw-semibold">Create Password</h4>
                            <p class="mb-4 text-muted fw-normal">Set your new password</p>
                        </div>
                        <form @submit="handleSubmit">
                            <div class="row gy-3">
                                <!-- Password Field -->
                                <div class="col-xl-12">
                                    <label for="password1" class="text-default custom-form-label">Password</label>
                                    <div class="position-relative">
                                        <input :type="passwordVisibility.password ? 'text' : 'password'"
                                            class="form-control form-control-lg" id="password1" placeholder="password"
                                            v-model="formData.password" />
                                        <a href="#!" @click.prevent="togglePasswordVisibility('password')"
                                            class="show-password-button text-muted">
                                            <i :class="`align-middle ${passwordVisibility.password ? 'ri-eye-line' : 'ri-eye-off-line'
                                                }`"></i>
                                        </a>
                                    </div>
                                    <p v-if="formErrors.password" class="text-danger text-xs mt-1 mb-0">
                                        {{ formErrors.password }}
                                    </p>
                                </div>

                                <!-- Confirm Password Field -->
                                <div class="col-xl-12">
                                    <label for="confirmPassword" class="text-default custom-form-label">Confirm
                                        Password</label>
                                    <div class="position-relative">
                                        <input :type="passwordVisibility.passwords ? 'text' : 'password'"
                                            class="form-control form-control-lg" id="confirmPassword"
                                            placeholder="confirm password" v-model="formData.confirmPassword" />
                                        <a href="#!" @click.prevent="togglePasswordVisibility('passwords')"
                                            class="show-password-button text-muted">
                                            <i :class="`align-middle ${passwordVisibility.passwords ? 'ri-eye-line' : 'ri-eye-off-line'
                                                }`"></i>
                                        </a>
                                    </div>
                                    <p v-if="formErrors.confirmPassword" class="text-danger text-xs mt-1 ">
                                        {{ formErrors.confirmPassword }}
                                    </p>
                                    <p v-if="matched" class="text-success text-xs mt-1">
                                        {{ matched }}
                                    </p>

                                    <div class="mt-2">
                                        <div class="form-check mb-0">
                                            <input class="form-check-input" type="checkbox" id="defaultCheck1"
                                                v-model="rememberPassword" checked />
                                            <label class="form-check-label" for="defaultCheck1">
                                                Remember password?
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="d-grid mt-3">
                                <button type="submit" class="btn btn-primary">Create Password</button>
                            </div>
                        </form>
                        <div class="text-center my-3 authentication-barrier">
                            <span class="op-4 fs-13">OR</span>
                        </div>
                        <div class="d-grid mb-3">
                            <button
                                class="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill mb-3">
                                <span class="avatar avatar-xs">
                                    <Baseimg src="/images/media/apps/google.png" alt="" />
                                </span>
                                <span class="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Google</span>
                            </button>
                            <button
                                class="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
                                <span class="avatar avatar-xs">
                                    <Baseimg src="/images/media/apps/facebook.png" alt="" />
                                </span>
                                <span class="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Facebook</span>
                            </button>
                        </div>
                        <div class="text-center mt-3 fw-medium">
                            Dont have an account?
                            <Link :href="`${baseUrl}/pages/authentication/sign-up/basic`" class="text-primary">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Add your styles here */
</style>
