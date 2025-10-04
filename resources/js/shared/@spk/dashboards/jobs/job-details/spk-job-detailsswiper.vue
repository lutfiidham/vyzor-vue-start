<script setup>
defineProps({
    card: Object
})
</script>
<template>
    <div class="row">
        <div class="col-md-6" v-for="(job, index) in card.badges" :key="index">
            <div class="card custom-card featured-jobs">
                <div class="card-body">
                    <div class="btn-list float-end">
                        <a href="javascript:void(0);" class="avatar avatar-sm avatar-rounded bg-light text-default"
                            data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist"
                            data-bs-original-title="Add to wishlist"><span><i class="bi bi-heart"></i></span></a>
                        <a href="javascript:void(0);" class="avatar avatar-sm avatar-rounded bg-warning-transparent"
                            data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Jobs"
                            data-bs-original-title="Featured Jobs"><span><i class="bi bi-star-fill"></i></span></a>
                    </div>
                    <div class="d-flex mb-3 flex-wrap gap-2">
                        <div>
                            <span class="avatar avatar-lg avatar-rounded bg-primary bg-opacity-10 border"><svg
                                    xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
                                    <path fill="var(--primary-color)"
                                        d="M21.46777,2.3252A1.00007,1.00007,0,0,0,20.73,2H3.27a1.00039,1.00039,0,0,0-.99609,1.08887l1.52,17a.99944.99944,0,0,0,.72851.87451l7.2002,2A.99628.99628,0,0,0,11.99023,23a1.01206,1.01206,0,0,0,.26709-.03613l7.21973-2a1.00055,1.00055,0,0,0,.729-.875l1.52-17A1,1,0,0,0,21.46777,2.3252Zm-3.19238,16.896L11.99072,20.9624,5.72461,19.22168,4.36328,4H19.63672ZM7.81982,13h6.895l-.32714,3.271-2.56788.917L8.65625,16.05811a1.00017,1.00017,0,1,0-.67285,1.88378l3.5,1.25a1.00291,1.00291,0,0,0,.67285,0l3.5-1.25a1.00044,1.00044,0,0,0,.65869-.84228l.5-5A1.00064,1.00064,0,0,0,15.81982,11H8.72461L8.4248,8h7.895a1,1,0,0,0,0-2h-9a1.00064,1.00064,0,0,0-.99511,1.09961l.5,5A1.00012,1.00012,0,0,0,7.81982,13Z">
                                    </path>
                                </svg></span>
                        </div>
                        <div class="ms-2">
                            <h5 class="fw-medium mb-0 d-flex align-items-center"><a href="javascript:void(0);"> {{
                                job.title }}</a></h5>
                            <a href="javascript:void(0);"><i class="bi bi-building"></i> {{ job.company }}</a>
                        </div>
                    </div>
                    <div class="popular-tags mb-3">
                        <a href="javascript:void(0);" class="badge rounded-pill bg-light text-default me-1"><i
                                class="bi bi-geo-alt text-muted "></i> {{ job.location }}</a>
                        <a href="javascript:void(0);" class="badge rounded-pill bg-light text-default me-1"><i
                                class="bi bi-mortarboard text-muted "></i> Graduate</a>
                        <a href="javascript:void(0);" class="badge rounded-pill bg-light text-default me-1"><i
                                class="bi bi-clock text-muted "></i> Min - 2Years</a>
                    </div>
                    <div class="d-flex justify-content-between flex-wrap">
                        <h6 class="fw-medium mb-0">{{ job.salary }}</h6>
                        <a href="javascript:void(0);" class="text-primary fw-medium fs-14">
                            Apply Now <i class="fe fe-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
