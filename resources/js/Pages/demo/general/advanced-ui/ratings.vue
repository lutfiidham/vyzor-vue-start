<script setup>
import { Head } from '@inertiajs/vue3'
import { defineAsyncComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import Pageheader from '@/components/pageheader/pageheader.vue'

const vue3starRatings = defineAsyncComponent(() =>
  import('vue3-star-ratings').then(m => m.default),
)

const myRating = ref(4.5)
const numberOfStars = ref(5)
const starSize = ref(32)
const starColor = ref('#ff9800')
const inactiveColor = ref('#d3d3d3')

// Clamp the number of stars between 1 and 10
function clampStars() {
  if (numberOfStars.value < 1) {
    numberOfStars.value = 1
  }
  else if (numberOfStars.value > 10) {
    numberOfStars.value = 10
  }
}

// Clamp the star size between 1 and 50
function clampSize() {
  if (starSize.value < 1) {
    starSize.value = 1
  }
  else if (starSize.value > 50) {
    starSize.value = 50
  }
}

// Responsive star size
function updateStarSizeForMobile() {
  const screenWidth = window.innerWidth
  if (screenWidth < 576) {
    // Auto-reduce star size on small screens
    if (starSize.value > 24) {
      starSize.value = 24
    }
  }
}

onMounted(() => {
  updateStarSizeForMobile()
  window.addEventListener('resize', updateStarSizeForMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateStarSizeForMobile)
})

const dataToPass = {
  title: 'Advanced Ui',
  currentpage: 'Ratings',
  activepage: 'Ratings',
}
</script>

<template>
  <Head title="Ratings | Vyzor - Laravel & Vue" />
  <Pageheader :prop-data="dataToPass" />

  <div class="row d-flex justify-content-center">
    <div class="col-xxl-6 col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Vue3 Star Ratings
          </div>
        </div>
        <div class="card-body">
          <div class="mb-4 row gy-3">
            <div class="col-12 col-md-6">
              <label for="input-label" class="form-label">Number of Stars:</label>
              <input
                v-model.number="numberOfStars"
                type="number"
                class="form-control"
                placeholder="Number"
                min="1"
                max="10"
                @input="clampStars"
              >
            </div>
            <div class="col-12 col-md-6">
              <label for="input-label" class="form-label">Star Size (px):</label>
              <input
                v-model.number="starSize"
                type="number"
                class="form-control"
                placeholder="Size"
                min="1"
                max="50"
                @input="clampSize"
              >
            </div>
            <div class="col-12 col-md-6">
              <label for="input-label" class="form-label">Active Star Color:</label>
              <input v-model="starColor" class="form-control form-input-color" type="color">
            </div>
            <div class="col-12 col-md-6">
              <label for="input-label" class="form-label">Inactive Star Color:</label>
              <input v-model="inactiveColor" class="form-control form-input-color" type="color">
            </div>
          </div>

          <div class="d-flex flex-wrap align-items-center gap-3">
            <p class="fs-14 mb-0 fw-medium">
              Show Some <span class="text-danger">&#10084;</span> with rating:
            </p>
            <div id="rater-basic" class="star-scroll-wrapper">
              <Vue3starRatings
                v-model="myRating"
                :number-of-stars="numberOfStars"
                :star-size="starSize"
                :star-color="starColor"
                :inactive-color="inactiveColor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Makes the star rating responsive and scrollable on small screens */
.star-scroll-wrapper {
  overflow-x: auto;
  max-width: 100%;
  white-space: nowrap;
  padding-bottom: 5px;
  /* Optional spacing */
}
</style>
