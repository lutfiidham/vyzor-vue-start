<script setup>
import { ref } from 'vue'
import * as dealsData from '@/shared/data/dashboards/crm/dealsdata'
import { defineAsyncComponent, } from 'vue';
import Pageheader from "@/components/pageheader/pageheader.vue";
import SpkDealsCard from "@/shared/@spk/dashboards/crm/spk-deals-card.vue";
import BaseImg from '../../../components/Baseimage/BaseImg.vue';
import { Head } from '@inertiajs/vue3';

const VueDraggableNext = defineAsyncComponent(() =>
    import('vue-draggable-next').then(m => m.VueDraggableNext)
)

let draggable = VueDraggableNext


// reactive references
const picked = ref(null)
const profileImg = ref('/images/faces/9.jpg')

// dataToPass object
const dataToPass = {
    title: 'Dashboards',
    subtitle: 'CRM',
    currentpage: 'Deals',
    activepage: 'Deals',
}

// methods
const avatar = ref('')
const fileinput = ref(null)

const onFileSelected = (event) => {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
            avatar.value = e.target.result
        }
    }
}


const triggerFileInput = () => {
    fileinput.value?.click()
}

</script>


<template>

    <Head title="CRM-Deals | Vyzor - Laravel & Vue " />

    <Pageheader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                        <div class="d-flex align-items-center">
                            <span class="fw-medium fs-16 me-1">Deals</span>
                        </div>
                        <div class="d-flex flex-wrap gap-2">
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#create-contact"><i
                                    class="ri-add-line me-1 fw-medium align-middle"></i>New Deal</button>
                            <button class="btn btn-success">Export As CSV</button>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="btn btn-light btn-wave waves-effect waves-light"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Newest</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Date Added</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">A - Z</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <div v-for="(item, index) in dealsData.dealCards" :key="index" class="col-xxl-2 col-xl-4 col-lg-6 col-md-6">
            <div class="card custom-card">
                <div class="card-body p-3">
                    <div class="d-flex align-items-top flex-wrap justify-content-between gap-1">
                        <div>
                            <div :class="['fw-medium fs-15', item.labelClass]">{{ item.label }}</div>
                            <span class=" badge bg-light text-default">{{ item.badgeText }}</span>
                        </div>
                        <div>
                            <span :class="['fw-medium', item.amountStyle]">{{ item.amount }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!-- End::row-2 -->

    <!-- Start::row-3 -->
    <div class="row">
        <div class="col-xxl-2">
            <draggable group="deals" itemKey="name" id="leads-discovered" v-for="(idx) in dealsData.PrimaryDeal"
                :key="idx.id">
                <SpkDealsCard :card="idx" />
            </draggable>
        </div>
        <div class="col-xxl-2">
            <draggable group="deals" itemKey="name" id="leads-qualified" v-for="(idx) in dealsData.warningDeal"
                :key="idx.id">
                <SpkDealsCard :card="idx" />
            </draggable>
        </div>
        <div class="col-xxl-2">
            <draggable group="deals" itemKey="name" id="contact-initiated" v-for="(idx) in dealsData.successDeal"
                :key="idx.id">
                <SpkDealsCard :card="idx" />
            </draggable>
        </div>
        <div class="col-xxl-2">
            <draggable group="deals" itemKey="name" id="needs-identified" v-for="(idx) in dealsData.infoDeal"
                :key="idx.id">
                <SpkDealsCard :card="idx" />
            </draggable>
        </div>
        <div class="col-xxl-2">
            <draggable group="deals" itemKey="name" id="negotiation" v-for="(idx) in dealsData.dangerDeals"
                :key="idx.id">
                <SpkDealsCard :card="idx" />
            </draggable>
        </div>
        <div class="col-xxl-2">
            <draggable group="deals" itemKey="name" id="deal-finalized" v-for="(idx) in dealsData.pinkDeals"
                :key="idx.id">
                <SpkDealsCard :card="idx" />
            </draggable>
        </div>
    </div>
    <!-- End::row-3 -->

    <!-- Start:: New Deal -->
    <div class="modal fade" id="create-contact" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title">New Deal</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-4">
                    <div class="row gy-3">
                        <div class="col-xl-12">
                            <div class="mb-0 text-center">
                                <span class="avatar avatar-xxl avatar-rounded">
                                    <img v-if="avatar" loading="lazy" class="avatar" :src="avatar" alt="Avatar" />
                                    <BaseImg v-else src="/images/faces/9.jpg" alt="" id="profile-img" />
                                    <a href="#!" class="badge rounded-pill bg-primary avatar-badge"
                                        @click.prevent="triggerFileInput" aria-label="Change profile picture">
                                        <i class="fe fe-camera"></i>
                                    </a>

                                    <input style="display: none" type="file" class="position-absolute w-100 h-100 op-0"
                                        id="profile-change" accept=".jpg, .jpeg, .png" @change="onFileSelected"
                                        ref="fileinput" />
                                </span>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label for="deal-name" class="form-label">Contact Name</label>
                            <input type="text" class="form-control" id="deal-name" placeholder="Contact Name">
                        </div>
                        <div class="col-xl-6">
                            <label for="deal-lead-score" class="form-label">Deal Value</label>
                            <input type="number" class="form-control" id="deal-lead-score" placeholder="Deal Value">
                        </div>
                        <div class="col-xl-12">
                            <label for="company-name" class="form-label">Company Name</label>
                            <input type="text" class="form-control" id="company-name" placeholder="Company Name">
                        </div>
                        <div class="col-xl-12">
                            <label class="form-label">Last Contacted</label>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-text text-muted"><i class="ri-calendar-line"></i> </div>
                                    <Datepicker class="form-control custom-date-picker" autoApply
                                        placeholder="Choose date and time" v-model="picked" time-picker-inline />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Create Deal</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: New Deal -->
</template>

<style scoped>
/* Add your styles here */
</style>
