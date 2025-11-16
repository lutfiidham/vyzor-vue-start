<script setup>
import { reactive } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

const apiKey = import.meta.env.googleMapsApiKey
const center = { lat: 42.35805, lng: -71.0636 }
const positions = reactive({
  lists: [{ lat: 42.35805, lng: -71.0636 }],
})
</script>

<template>
  <GoogleMap :api-key="apiKey" :center="center" :zoom="3" style="width: 100%; height: 300px">
    <Marker
      v-for="(location, index) in positions.lists"
      :key="index"
      :options="{ position: { lat: location.lat, lng: location.lng } }"
    />
  </GoogleMap>
</template>

<style scoped></style>
