<script setup>
import { Head } from '@inertiajs/vue3'
import {
  LIcon,
  LMap,
  LMarker,
  LPolygon,
  LPolyline,
  LPopup,
  LRectangle,
  LTileLayer,
  LTooltip,
} from '@vue-leaflet/vue-leaflet'
import { computed, ref } from 'vue'
import Pageheader from '@/components/pageheader/pageheader.vue'

import SimpleCard from '@/shared/@spk/simple-card.vue'
import 'leaflet/dist/leaflet.css'

// Data for page layout
const dataToPass = {
  title: 'Maps',
  currentpage: 'Leaflet Maps',
  activepage: 'Leaflet Maps',
}

// Map zoom level
const zoom = ref(2)

// Custom icon dimensions
const iconWidth = ref(120)
const iconHeight = ref(30)
const markerWidth = ref(28)
const markerHeight = ref(45)

// Computed icon data
const iconUrl = computed(() => `${__BASE_PATH__}/images/brand-logos/desktop-logo.png`)
const markerUrl = computed(() => `${__BASE_PATH__}/images/brand-logos/marker-icon.png`)
const iconSize = computed(() => [iconWidth.value, iconHeight.value])
const markerSize = computed(() => [markerWidth.value, markerHeight.value])

// Example log method
function log(value) {
  console.log(value)
}
</script>

<template>
  <Head title="Leaftlet Maps | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <div class="row">
    <div class="col-xl-6">
      <SimpleCard title="Leaflet Map">
        <div style="height: 296px; width: 100%">
          <LMap ref="map" :use-global-leaflet="false" :zoom="zoom" :center="[47.41322, -1.219482]">
            <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              layer-type="base"
              name="OpenStreetMap"
            />
          </LMap>
        </div>
      </SimpleCard>
    </div>
    <div class="col-xl-6">
      <SimpleCard title="Map With Markers,circles and Polygons">
        <div style="height: 296px; width: 100%">
          <LMap
            :use-global-leaflet="false"
            :zoom="zoom"
            :center="[47.41322, -1.219482]"
            @move="log('move')"
          >
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LMarker :lat-lng="[0, 0]" draggable @moveend="log('moveend')">
              hover-popup
            </LMarker>

            <LMarker :lat-lng="[50, 50]" draggable @moveend="log('moveend')">
              click-popup
            </LMarker>

            <LPolyline
              :lat-lngs="[
                [47.334852, -1.509485],
                [47.342596, -1.328731],
                [47.241487, -1.190568],
                [47.234787, -1.358337],
              ]"
              color="green"
            />
            <LPolygon
              :lat-lngs="[
                [46.334852, -1.509485],
                [46.342596, -1.328731],
                [46.241487, -1.190568],
                [46.234787, -1.358337],
              ]"
              color="#41b782"
              :fill="true"
              :fill-opacity="0.5"
              fill-color="#41b782"
            />
            <LRectangle
              :lat-lngs="[
                [46.334852, -1.509485],
                [46.342596, -1.328731],
                [46.241487, -1.190568],
                [46.234787, -1.358337],
              ]"
              :fill="true"
              color="#35495d"
            />
            <LRectangle
              :bounds="[
                [46.334852, -1.190568],
                [46.241487, -1.090357],
              ]"
            >
              <LPopup> Rectangle popup </LPopup>
            </LRectangle>
          </LMap>
        </div>
      </SimpleCard>
    </div>
    <div class="col-xl-6">
      <SimpleCard title="Map With Popup">
        <div style="height: 296px; width: 100%">
          <LMap
            :use-global-leaflet="false"
            :zoom="zoom"
            :center="[47.41322, -1.219482]"
            @move="log('move')"
          >
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LMarker :lat-lng="[0, 0]" draggable @moveend="log('moveend')">
              <LTooltip> hover-popup </LTooltip>
              <LIcon :icon-url="markerUrl" :icon-size="markerSize" />
            </LMarker>

            <LMarker :draggable="false" :lat-lng="[50, 50]" @moveend="log('moveend')">
              <LIcon :icon-url="markerUrl" :icon-size="markerSize" />
              <LPopup> click-popup </LPopup>
            </LMarker>
          </LMap>
        </div>
      </SimpleCard>
    </div>
    <div class="col-xl-6">
      <SimpleCard title="Map With Custom Icon">
        <div style="height: 296px; width: 100%">
          <LMap
            :use-global-leaflet="false"
            :zoom="zoom"
            :center="[47.41322, -1.219482]"
            @move="log('move')"
          >
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LMarker :lat-lng="[47.41322, -1.219482]">
              <LIcon :icon-url="iconUrl" :icon-size="iconSize" />
            </LMarker>
          </LMap>
        </div>
      </SimpleCard>
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
