<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue';


defineProps({
    card: Object
})
</script>

<template>
    <div class="card custom-card">
        <div class="card-body p-0">
            <div class="p-3 kanban-board-head">
                <div class="d-flex text-muted justify-content-between mb-1 fs-12 fw-medium">
                    <div><i class="ri-time-line me-1 align-middle d-inline-block"></i>Created - {{ card.createdDate }}
                    </div>
                    <div v-if="card.daysLeft">{{ card.daysLeft }}</div>
                    <div v-if="card.down" class="text-success"><i
                            class="ri-check-fill me-1 align-middle d-inline-block"></i>Done</div>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                    <div class="task-badges">
                        <span class="badge me-1" v-for="(badge, index) in card.tags" :key="index">{{ badge }}</span>
                    </div>
                    <div class="dropdown">
                        <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-white border"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ri-more-2-fill"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-eye-line me-1 align-middle d-inline-block"></i>View</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);"><i
                                        class="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</a></li>
                        </ul>
                    </div>
                </div>
                <div class="kanban-content mt-2" v-if="card.Content">
                    <h6 class="fw-medium mb-1 fs-15">{{ card.title }}</h6>
                    <div class="kanban-task-description">{{ card.description }}</div>
                </div>

                <div className="kanban-content mt-2" v-if="card.imgSrc">
                    <div className="task-image mt-2">
                        <BaseImg :src="card.src" className="img-fluid rounded kanban-image" alt="" />
                    </div>
                    <h6 className="fw-medium mb-1 fs-15 mt-2">{{ card.title }}</h6>
                </div>
            </div>
            <div class="p-3 border-top border-block-start-dashed">
                <div class="d-flex align-items-center justify-content-between">
                    <div>
                        <a href="javascript:void(0);" class="me-2 text-primary">
                            <span class="me-1"><i class="ri-thumb-up-fill align-middle fw-normal"></i></span><span
                                class="fw-medium fs-12">{{ card.likes }}</span>
                        </a>
                        <a href="javascript:void(0);" class="text-muted">
                            <span class="me-1"><i class="ri-message-2-line align-middle fw-normal"></i></span><span
                                class="fw-medium fs-12">{{ card.comments }}</span>
                        </a>
                    </div>
                    <div class="avatar-list-stacked">
                        <span class="avatar avatar-sm avatar-rounded" v-for="(img, index) in card.avatars" :key="index">
                            <BaseImg :src="img" alt="img"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
