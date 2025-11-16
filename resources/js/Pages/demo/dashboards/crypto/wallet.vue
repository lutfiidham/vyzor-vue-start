<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SpkReusableWalletAddressCard from '@/shared/@spk/dashboards/crypto/spk-reusable-walletAddressCard.vue'
import SpkReusableWalletCard from '@/shared/@spk/dashboards/crypto/spk-reusable-walletCard.vue'
import * as walletData from '@/shared/data/dashboards/crypto/wallletdata'

const dataToPass = {
  title: 'Dashboards',
  subtitle: 'Crypto',
  currentpage: 'Wallet',
  activepage: 'Wallet',
}
</script>

<template>
  <Head title="Crypto-Wallet | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div v-for="(item, index) in walletData.wallets" :key="index" class="col-xxl-3 col-xl-6">
      <SpkReusableWalletCard :item="item" />
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start::row-2 -->
  <div class="row">
    <div v-for="(item, index) in walletData.walletAddresses" :key="index" class="col-xxl-4">
      <SpkReusableWalletAddressCard :item="item" />
    </div>
  </div>
  <!-- End::row-2 -->
</template>

<style scoped>
/* Add your styles here */
</style>
