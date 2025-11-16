<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkReusableTeamCard from '@/shared/@spk/pages/spk-reusable-teamCard.vue'
import { TeamMembers } from '@/shared/data/pages/teamdata'

const dataToPass = {
  title: 'Pages',
  currentpage: 'Team',
  activepage: 'Team',
}
</script>

<template>
  <Head title="Team | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start:: row-1 -->
  <div
    class="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1"
  >
    <div v-for="idx in TeamMembers" :key="idx.id" class="col">
      <SpkReusableTeamCard :card="idx" />
    </div>
  </div>
  <!-- End:: row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
