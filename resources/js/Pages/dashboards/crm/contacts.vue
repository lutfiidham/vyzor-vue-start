<script setup>
import { ref } from 'vue'
import TableComponent from "@/shared/@spk/table-reuseble/table-component.vue";
import * as contactsData from "@/shared/data/dashboards/crm/contactsdata.js";
import Pageheader from "@/components/pageheader/pageheader.vue";
import BaseImg from '../../../components/Baseimage/BaseImg.vue';
import { Head } from '@inertiajs/vue3';

// Reactive refs and variables
const picked = ref(new Date())
const picked2 = ref(new Date())

const lowerpicked = ref(new Date(picked2.value))
const currentDay = picked.value.getDate()

const picked1 = ref(new Date(picked.value))
picked1.value.setDate(currentDay + 5)

lowerpicked.value.setDate(currentDay - 5)

const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate() + 7)

const date = ref([])

const dataToPass = {
    title: 'Dashboards',
    subtitle: 'CRM',
    currentpage: 'Contacts',
    activepage: 'Contacts',
}

// Properly type Contacts as an array of ContactType
const Contacts = ref([...contactsData.contactstable])
const sourceValue = ref('Social Media')
const leadValue = ref(null)

// Methods
function removeCompany(id) {
    Contacts.value = Contacts.value.filter(item => item.id !== id)
}

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

    <Head title="CRM-Contacts | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div class="card-title">
                        Contacts
                    </div>
                    <div class="d-flex flex-wrap gap-2">
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#create-contact"><i
                                class="ri-add-line me-1 fw-medium align-middle"></i>Create Contact</button>
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
                <div class="card-body p-0">
                    <TableComponent tableClass="table text-nowrap" :showCheckbox="true"
                        :headers="[{ text: 'Contact Name' }, { text: 'Lead Score' }, { text: 'Email' }, { text: 'Company' }, { text: 'Phone' }, { text: '	Lead Source' }, { text: '	Tags' }, { text: 'Actions' },]"
                        :rows="Contacts" v-slot:cell="{ row }">
                        <td>
                            <div class="d-flex align-items-center gap-2">
                                <div class="lh-1">
                                    <span class="avatar avatar-rounded avatar-sm">
                                        <BaseImg :src="row.image" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                        aria-controls="offcanvasExample"><span class="d-block fw-medium">{{ row.name
                                        }}</span></a>
                                    <span class="d-block text-muted fs-11" data-bs-toggle="tooltip"
                                        data-bs-custom-class="tooltip-primary" title="Last Contacted"><i
                                            class="ri-account-circle-line me-1 fs-13 align-middle"></i>{{
                                                row.lastContacted }}</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            {{ row.score }}
                        </td>
                        <td>
                            <div>
                                <span class="d-block mb-1"><i
                                        class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>{{ row.email
                                        }}</span>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex align-items-center gap-2">
                                <div class="lh-1">
                                    <span class="avatar avatar-sm avatar-rounded">
                                        <BaseImg :src="row.companyLogo" alt="" />
                                    </span>
                                </div>
                                <div>{{ row.company }}</div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span class="d-block"><i class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>{{
                                    row.phone }}</span>
                            </div>
                        </td>
                        <td>
                            {{ row.source }}
                        </td>
                        <td>
                            <div class="d-flex align-items-center flex-wrap gap-1">
                                <span v-for="(item, index) in row.tags" :key="index" :class="`badge ${item.color}`">{{
                                    item.label }}</span>
                            </div>
                        </td>
                        <td>
                            <div class="btn-list">
                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                    aria-controls="offcanvasExample" class="btn btn-sm btn-warning-light btn-icon"><i
                                        class="ri-eye-line"></i></a>
                                <button class="btn btn-sm btn-info-light btn-icon"><i
                                        class="ri-pencil-line"></i></button>
                                <button class="btn btn-sm btn-danger-light btn-icon contact-delete"
                                    @click="removeCompany(row.id)"><i class="ri-delete-bin-line"></i></button>
                            </div>
                        </td>
                    </TableComponent>

                </div>
                <div class="card-footer border-top-0">
                    <div class="d-flex align-items-center">
                        <div>
                            Showing 10 Entries <i class="bi bi-arrow-right ms-2 fw-medium"></i>
                        </div>
                        <div class="ms-auto">
                            <nav aria-label="Page navigation" class="pagination-style-4">
                                <ul class="pagination mb-0">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="javascript:void(0);">
                                            Prev
                                        </a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                                    <li class="page-item">
                                        <a class="page-link text-primary" href="javascript:void(0);">
                                            next
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start:: Contact Details Offcanvas -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExample">
        <div class="offcanvas-body p-0">
            <div class="d-sm-flex align-items-top p-4 border-bottom border-block-end-dashed main-profile-cover">
                <div>
                    <span class="avatar avatar-xxl avatar-rounded online me-3">
                        <BaseImg src="/images/faces/4.jpg" alt="" />

                    </span>
                </div>
                <div class="flex-fill main-profile-info">
                    <div class="d-flex align-items-center justify-content-between">
                        <h6 class="fw-medium mb-1">Jane Smith</h6>
                        <button type="button" class="btn-close crm-contact-close-btn p-4" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <p class="mb-1 text-muted op-7">Chief Executive Officer (C.E.O)</p>
                    <p class="fs-12 mb-4 op-5">
                        <span class="me-3"><i class="ri-building-line me-1 align-middle"></i>Georgia</span>
                        <span class="d-inline-flex align-items-center"><i
                                class="ri-map-pin-line me-1 align-middle"></i>Washington D.C</span>
                    </p>
                    <div class="d-flex mb-0">
                        <div class="me-4">
                            <p class="fw-bold fs-20 text-shadow mb-0">113</p>
                            <p class="mb-0 fs-11 op-5">Deals</p>
                        </div>
                        <div class="me-4">
                            <p class="fw-bold fs-20 text-shadow mb-0">$12.2k</p>
                            <p class="mb-0 fs-11 op-5">Contributions</p>
                        </div>
                        <div class="me-4">
                            <p class="fw-bold fs-20 text-shadow mb-0">$10.67k</p>
                            <p class="mb-0 fs-11 op-5">Comitted</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-4 border-bottom border-block-end-dashed">
                <div class="mb-0">
                    <p class="fs-15 mb-2 fw-medium">Professional Bio :</p>
                    <p class="text-muted op-8 mb-0">
                        I am <b class="text-default">Jane Smith,</b> here by conclude that,i am the founder and managing
                        director of the prestigeous company name laugh at all and acts as the cheif executieve officer
                        of the company.
                    </p>
                </div>
            </div>
            <div class="p-4 border-bottom border-block-end-dashed">
                <p class="fs-14 mb-2 me-4 fw-medium">Contact Information :</p>
                <div class="">
                    <div class="d-flex align-items-center mb-2">
                        <div class="me-2">
                            <span class="avatar avatar-sm avatar-rounded bg-light text-muted">
                                <i class="ri-mail-line align-middle fs-14"></i>
                            </span>
                        </div>
                        <div>
                            sonyataylor2531@gmail.com
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                        <div class="me-2">
                            <span class="avatar avatar-sm avatar-rounded bg-light text-muted">
                                <i class="ri-phone-line align-middle fs-14"></i>
                            </span>
                        </div>
                        <div>
                            +(555) 555-1234
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-0">
                        <div class="me-2">
                            <span class="avatar avatar-sm avatar-rounded bg-light text-muted">
                                <i class="ri-map-pin-line align-middle fs-14"></i>
                            </span>
                        </div>
                        <div>
                            MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA,20071
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-4 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                <p class="fs-14 mb-0 fw-medium">Social Networks :</p>
                <div class="btn-list mb-0">
                    <button class="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-facebook-line fw-medium"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-twitter-x-line fw-medium"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-instagram-line fw-medium"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-github-line fw-medium"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-youtube-line fw-medium"></i>
                    </button>
                </div>
            </div>
            <div class="p-4 border-bottom border-block-end-dashed">
                <p class="fs-14 mb-2 me-4 fw-medium">Tags :</p>
                <div>
                    <span class="badge bg-light text-muted m-1">New Lead</span>
                    <span class="badge bg-light text-muted m-1">Others</span>
                </div>
            </div>
            <div class="p-4">
                <p class="fs-14 mb-2 fw-medium">Relationship Manager :
                    <a class="fs-14 text-primary mb-0 float-end" href="javascript:void(0);"><i
                            class="ri-add-line me-1 align-middle"></i>Add Manager</a>
                </p>
                <div class="avatar-list-stacked">
                    <span class="avatar avatar-rounded">
                        <BaseImg src="/images/faces/2.jpg" alt="img" />

                    </span>
                    <span class="avatar avatar-rounded">
                        <BaseImg src="/images/faces/8.jpg" alt="img" />
                    </span>
                    <span class="avatar avatar-rounded">
                        <BaseImg src="/images/faces/2.jpg" alt="img" />
                    </span>
                    <span class="avatar avatar-rounded">
                        <BaseImg src="/images/faces/10.jpg" alt="img" />
                    </span>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: Contact Details Offcanvas -->

    <!-- Start:: Create Contact -->
    <div class="modal fade" id="create-contact" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title">Create Contact</h6>
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
                            <label for="deal-title" class="form-label">Deal Title</label>
                            <input type="text" class="form-control" id="deal-title" placeholder="Deal Title">
                        </div>
                        <div class="col-xl-6">
                            <label for="contact-lead-score" class="form-label">Lead Score</label>
                            <input type="number" class="form-control" id="contact-lead-score" placeholder="Lead Score">
                        </div>
                        <div class="col-xl-12">
                            <label for="contact-mail" class="form-label">Email</label>
                            <input type="email" class="form-control" id="contact-mail" placeholder="Enter Email">
                        </div>
                        <div class="col-xl-12">
                            <label for="contact-phone" class="form-label">Phone No</label>
                            <input type="tel" class="form-control" id="contact-phone" placeholder="Enter Phone Number">
                        </div>
                        <div class="col-xl-12">
                            <label for="company-name" class="form-label">Company Name</label>
                            <input type="text" class="form-control" id="company-name" placeholder="Company Name">
                        </div>
                        <div class="col-xl-12">
                            <label class="form-label">Lead Source</label>
                            <VueMultiselect :searchable="true" name="choices-multiple-remove-button1"
                                id="choices-multiple-remove-button1" :show-labels="false" :multiple="false"
                                v-model="sourceValue" :options="contactsData.sourceData" :taggable="false"
                                placeholder="Select">
                            </VueMultiselect>

                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Last Contacted</label>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-text text-muted"><i class="ri-calendar-line"></i> </div>
                                    <Datepicker class="form-control custom-date-picker" autoApply
                                        placeholder="Search By Date Range" v-model="date" range :enable-time-picker="false" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Tags</label>
                            <VueMultiselect :multiple="true" :searchable="true" name="choices-multiple-remove-button2"
                                id="choices-multiple-remove-button2" :show-labels="false" v-model="leadValue"
                                :options="contactsData.leadData" :taggable="false" placeholder="Select" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Create Contact</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: Create Contact -->
</template>

<style scoped>
/* Add your styles here */
</style>
