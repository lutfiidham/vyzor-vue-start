<script setup>
import * as buttonData from "@/shared/data/ui-elements/buttons"
import * as prism from "@/shared/data/prismCode/ui-elements/buttons"
import Pageheader from "@/components/pageheader/pageheader.vue";
import ShowcodeCard from "../../../../UI/showcodeCard.vue";
import { Head } from "@inertiajs/vue3";


const dataToPass = {
    title: "Ui Elements",
    currentpage: "Buttons",
    activepage: "Buttons"
}
</script>

<template>
    <Head title="Buttons | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />

    <!--ROW-START-->
    <div class="row">
        <div class="col-xl-12">
            <ShowcodeCard title="Default Buttons" :code="prism.defaultButtons">
                <div className="btn-list">
                    <button type="button" :class="`btn btn-${idx.class} btn-wave`"
                        v-for="(idx, index) in buttonData.DefaultButtons" :key="index">{{ idx.text }}</button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Rounded Buttons" :code="prism.roundedButtons">
                <div class="btn-list">
                    <button type="button" :class="`btn btn-${idx.class} rounded-pill btn-wave`"
                        v-for="(idx, index) in buttonData.DefaultButtons">{{ idx.text }}</button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Light Buttons" :code="prism.lightButtons">
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
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Light Rounded Buttons" :code="prism.lightRoundedButtons">
                <div class="btn-list">
                    <button type="button" :class="`btn btn-${idx.class} rounded-pill btn-wave`"
                        v-for="(idx, index) in buttonData.LightButtons" :key="index">{{ idx.text }}</button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Outline Buttons" :code="prism.outlineButtons">
                <div class="btn-list">
                    <button type="button" :class="`btn btn-${idx.class} btn-wave`"
                        v-for="(idx, index) in buttonData.OutlineButtons" :key="index">{{ idx.text }}</button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Rounded Outline Buttons" :code="prism.roundedOutlineButtons">
                <div class="btn-list">
                    <button type="button" :class="`btn btn-${idx.class} rounded-pill btn-wave`"
                        v-for="(idx, index) in buttonData.OutlineButtons" :key="index">{{ idx.text }}</button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Gradient Buttons" :code="prism.gradientButtons">
                <div class="btn-list">
                    <button type="button" :class="`btn btn-${idx.class} btn-wave`"
                        v-for="(idx, index) in buttonData.GradientButtons" :key="index">{{ idx.text }}</button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Rounded Gradient Buttons" :code="prism.roundedGradientButtons">
                <div class="btn-list">
                    <button type="button" :class="`btn btn-${idx.class} rounded-pill btn-wave`"
                        v-for="(idx, index) in buttonData.GradientButtons" :key="index">{{ idx.text }}</button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Ghost Buttons" :code="prism.ghostButtons">
                <div class="btn-list">
                    <button type="button" :class="`btn btn-${idx.class} btn-wave`"
                        v-for="(idx, index) in buttonData.GhostButtons" :key="index">{{ idx.text }}</button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Button tags" :code="prism.buttonTags">
                <div class="btn-list">
                    <a class="btn btn-primary btn-wave" href="javascript:void(0);" role="button">Link</a>
                    <button class="btn btn-secondary btn-wave" type="submit">Button</button>
                    <input class="btn btn-info" type="button" value="Input">
                    <input class="btn btn-warning" type="submit" value="Submit">
                    <input class="btn btn-success" type="reset" value="Reset">
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Disabled state with anchor tags" :code="prism.disabledStateWithAnchorTags">
                <div class="btn-list">
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
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Button plugin toggle states" :code="prism.buttonPluginToggleStates">
                <div class="btn-list">
                    <div class="mb-4">
                        <button type="button" class="btn btn-primary btn-wave" data-bs-toggle="button">Toggle
                            button</button>
                        <button type="button" class="btn btn-secondary active btn-wave" data-bs-toggle="button"
                            aria-pressed="true">Active toggle button</button>
                        <button type="button" class="btn btn-teal btn-wave" disabled data-bs-toggle="button">Disabled
                            toggle
                            button</button>
                    </div>
                    <div>
                        <a href="javascript:void(0);" class="btn btn-primary btn-wave" role="button"
                            data-bs-toggle="button">Toggle
                            link</a>
                        <a href="javascript:void(0);" class="btn btn-secondary active btn-wave" role="button"
                            data-bs-toggle="button" aria-pressed="true">Active toggle link</a>
                        <a class="btn btn-teal disabled btn-wave" aria-disabled="true" role="button"
                            data-bs-toggle="button">Disabled toggle link</a>
                    </div>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Link functionally caveat" :code="prism.linkFunctionallyCaveat">
                <div class="btn-list">
                    <a class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Primary
                        link</a>
                    <a class="btn btn-secondary disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Loading Buttons" :code="prism.loadingButtons">
                <div class="btn-list d-md-flex flex-wrap">
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
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Icon Buttons" :code="prism.iconButtons">
                <div class="btn-list d-md-flex d-block">
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
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Icon Button Sizes" :code="prism.iconButtonsSizes">
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
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Social Buttons" :code="prism.socialButtons">
                <div class="btn-list">
                    <button :class="`btn btn-icon btn-${idx.class1} btn-wave`"
                        v-for="(idx, index) in buttonData.SocialIconButtons" :key="index">
                        <i :class="`ri-${idx.class}-line`"></i>
                    </button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <div class="row">
                <div class="col-xl-12">
                    <ShowcodeCard title="Sizes" :code="prism.sizes">
                        <div class="btn-list">
                            <button type="button" class="btn btn-primary btn-sm btn-wave">Small
                                button</button>
                            <button type="button" class="btn btn-secondary btn-wave">Default
                                button</button>
                            <button type="button" class="btn btn-success btn-lg btn-wave">Large
                                button</button>
                        </div>
                    </ShowcodeCard>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="row">
                <div class="col-xl-12">
                    <ShowcodeCard title="Button Widths" :code="prism.buttonWidths">
                        <div class="btn-list">
                            <button type="button" class="btn btn-primary btn-w-xs btn-wave">XS</button>
                            <button type="button" class="btn btn-secondary btn-w-sm btn-wave">SM</button>
                            <button type="button" class="btn btn-warning btn-w-md btn-wave">MD</button>
                            <button type="button" class="btn btn-info btn-w-lg btn-wave">LG</button>
                        </div>
                    </ShowcodeCard>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Buttons With Different Shadows" :code="prism.buttonsWithDifferentShadows">
                <div class="btn-list d-flex">
                    <div class="me-3 me-sm-5">
                        <button class="btn btn-primary shadow-sm btn-wave">Button</button>
                        <button class="btn btn-primary shadow btn-wave">Button</button>
                        <button class="btn btn-primary shadow-lg btn-wave">Button</button>
                    </div>
                    <div>
                        <button class="btn btn-secondary btn-sm shadow-sm btn-wave">Button</button>
                        <button class="btn btn-info shadow btn-wave">Button</button>
                        <button class="btn btn-lg btn-success shadow-lg btn-wave">Button</button>
                    </div>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Different Colored Buttons With Shadows"
                :code="prism.differentColoredButtonsWithShadows">
                <div class="btn-list">
                    <button :class="`btn btn-${idx.class} shadow-${idx.class} btn-wave`"
                        v-for="(idx, index) in buttonData.ColoredButtons" :key="index">Button</button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Raised Buttons" :code="prism.raisedButtons">
                <div class="btn-list">
                    <button :class="`btn btn-${idx.class} btn-raised-shadow btn-wave`"
                        v-for="(idx, index) in buttonData.ColoredButtons" :key="index">Button</button>
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Label Buttons" :code="prism.labelButtons">
                <div class="btn-list">
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
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Custom Buttons" :code="prism.customButtons">
                <div class="btn-list">
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
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <ShowcodeCard title="Block buttons" :code="prism.blockButtons">
                <div class="btn-list">
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
                </div>
            </ShowcodeCard>
        </div>
    </div>
    <!--ROW-END-->
</template>

<style scoped>
/* Add your styles here */
</style>
