<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue'

defineProps({
  card: Object,
})
</script>

<template>
  <div class="card custom-card">
    <div class="card-body p-0">
      <div class="p-3 kanban-board-head">
        <div class="d-flex text-muted justify-content-between mb-1 fs-12 fw-medium">
          <div>
            <i class="ri-time-line me-1 align-middle d-inline-block" />Created -
            {{ card.createdDate }}
          </div>
          <div v-if="card.daysLeft">
            {{ card.daysLeft }}
          </div>
          <div v-if="card.down" class="text-success">
            <i class="ri-check-fill me-1 align-middle d-inline-block" />Done
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <div class="task-badges">
            <span v-for="(badge, index) in card.tags" :key="index" class="badge me-1">{{
              badge
            }}</span>
          </div>
          <div class="dropdown">
            <a
              aria-label="anchor"
              href="javascript:void(0);"
              class="btn btn-icon btn-sm btn-white border"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="ri-more-2-fill" />
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item" href="javascript:void(0);"><i class="ri-eye-line me-1 align-middle d-inline-block" />View</a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:void(0);"><i class="ri-delete-bin-line me-1 align-middle d-inline-block" />Delete</a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:void(0);"><i class="ri-edit-line me-1 align-middle d-inline-block" />Edit</a>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="card.Content" class="kanban-content mt-2">
          <h6 class="fw-medium mb-1 fs-15">
            {{ card.title }}
          </h6>
          <div class="kanban-task-description">
            {{ card.description }}
          </div>
        </div>

        <div v-if="card.imgSrc" className="kanban-content mt-2">
          <div className="task-image mt-2">
            <BaseImg :src="card.src" class-name="img-fluid rounded kanban-image" alt="" />
          </div>
          <h6 className="fw-medium mb-1 fs-15 mt-2">
            {{ card.title }}
          </h6>
        </div>
      </div>
      <div class="p-3 border-top border-block-start-dashed">
        <div class="d-flex align-items-center justify-content-between">
          <div>
            <a href="javascript:void(0);" class="me-2 text-primary">
              <span class="me-1"><i class="ri-thumb-up-fill align-middle fw-normal" /></span><span class="fw-medium fs-12">{{ card.likes }}</span>
            </a>
            <a href="javascript:void(0);" class="text-muted">
              <span class="me-1"><i class="ri-message-2-line align-middle fw-normal" /></span><span class="fw-medium fs-12">{{ card.comments }}</span>
            </a>
          </div>
          <div class="avatar-list-stacked">
            <span
              v-for="(img, index) in card.avatars"
              :key="index"
              class="avatar avatar-sm avatar-rounded"
            >
              <BaseImg :src="img" alt="img" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
