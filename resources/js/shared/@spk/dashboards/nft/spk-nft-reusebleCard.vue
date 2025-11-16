<script setup>
import { Link } from '@inertiajs/vue3'
import BaseImg from '../../../../components/Baseimage/BaseImg.vue'

defineProps({
  card: Object,
})
const baseUrl = __BASE_PATH__
</script>

<template>
  <div class="card custom-card">
    <div class="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
      <div class="flex-fill">
        <button class="btn btn-sm btn-icon btn-danger rounded-pill btn-wave">
          <i class="ri-heart-fill" />
        </button>
      </div>
      <div>
        <span class="badge nft-like-badge text-default"><i class="ri-heart-fill me-1 text-danger align-middle d-inline-block" />{{ card.likes }}</span>
      </div>
      <p class="mb-0 nft-auction-time">
        {{ card.time }}
      </p>
    </div>
    <div class="card-body p-2">
      <BaseImg :src="card.image" class="card-img mb-3" alt="..." />
      <div class="p-2">
        <div class="mb-3">
          <Link :href="`${baseUrl}/demo/dashboards/nft/nft-details`">
            <h6 class="fw-semibold mb-1 text-truncate">
              {{ card.title }}
            </h6>
          </Link>
          <a href="javascript:void(0);"><span class="fs-13 text-muted fw-medium">{{ card.author }}</span></a>
        </div>
        <div class="d-flex align-items-end justify-content-between flex-wrap gap-2">
          <div class="flex-fill">
            <span class="text-muted fs-12 d-block mb-1">Current Bid</span>
            <div class="d-flex align-items-center gap-2 fw-semibold">
              <div class="lh-1">
                <span class="avatar avatar-xs avatar-rounded">
                  <BaseImg
                    src="/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg"
                    alt=""
                  />
                </span>
              </div>
              <div>
                {{ card.currentBid }}
              </div>
            </div>
          </div>
          <div>
            <button class="btn btn-primary">
              {{ card.bidAmount }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
