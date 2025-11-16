<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'

const dataToPass = {
  title: 'Pages',
  currentpage: 'Empty',
  activepage: 'Empty',
}
</script>

<template>
  <Head title="Empty | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-body">
          <h6 class="mb-0">
            Empty Card
          </h6>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
