<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue'

defineProps({
  item: Object,
})
</script>

<template>
  <div class="card custom-card">
    <div class="card-header justify-content-between">
      <div class="card-title">
        {{ item.title }}
      </div>
      <div>
        <button class="btn btn-primary-ghost btn-wave">
          Connect
        </button>
      </div>
    </div>
    <div class="card-body">
      <div class="d-flex align-items-center flex-wrap justify-content-between gap-4 mb-3">
        <div class="flex-fill">
          <label for="btc-wallet-address1" class="form-label">Wallet Address</label>
          <div class="input-group">
            <input
              :id="item.id"
              type="text"
              class="form-control"
              :value="item.walletAddress"
              placeholder="Placeholder"
            >
            <button class="btn btn-primary">
              Copy
            </button>
          </div>
        </div>
        <div>
          <span class="avatar avatar-xxl border">
            <BaseImg :src="item.imageSrc" class="p-1 qr-image" alt="" />
          </span>
        </div>
      </div>
      <div class="row gy-3">
        <div class="col-xl-6">
          <div class="rounded p-3 border border-dashed">
            <div class="d-flex align-items-center gap-3 flex-wrap">
              <div class="lh-1">
                <span class="avatar bg-success">
                  <i class="ti ti-arrow-narrow-down fs-20" />
                </span>
              </div>
              <div>
                <span class="d-block text-muted">Received</span>
                <span class="d-block fw-medium">{{ item.received
                }}<span class="fs-12 text-muted fw-normal mx-1">{{ item.currency }}</span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="rounded p-3 border border-dashed">
            <div class="d-flex align-items-center gap-3 flex-wrap">
              <div class="lh-1">
                <span class="avatar bg-danger">
                  <i class="ti ti-caret-up fs-20" />
                </span>
              </div>
              <div>
                <span class="d-block text-muted">Sent</span>
                <span class="d-block fw-medium">{{ item.sent
                }}<span class="fs-12 text-muted fw-normal mx-1">{{ item.currency }}</span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="rounded p-3 border border-dashed">
            <div class="d-flex align-items-center gap-3 flex-wrap">
              <div class="lh-1">
                <span class="avatar bg-warning">
                  <i class="ti ti-wallet fs-20" />
                </span>
              </div>
              <div>
                <span class="d-block text-muted">Wallet Balance</span>
                <span class="d-block fw-medium">{{ item.balance
                }}<span class="fs-12 text-muted fw-normal mx-1">{{ item.currency }}</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
