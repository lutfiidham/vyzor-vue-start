<script setup>
import { ref, computed } from 'vue'
import Pageheader from "@/components/pageheader/pageheader.vue";
import SimpleCard from "@/shared/@spk/simple-card.vue";
import 'leaflet/dist/leaflet.css'

import {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
} from '@vue-leaflet/vue-leaflet'
import { Head } from '@inertiajs/vue3';


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
const markerUrl =computed(()=>`${__BASE_PATH__}/images/brand-logos/marker-icon.png`)
const iconSize = computed(() => [iconWidth.value, iconHeight.value])
const markerSize = computed(() => [markerWidth.value, markerHeight.value])

// Example log method
const log = (value) => {
    console.log(value)
}
</script>


<template>
    <Head title="Leaftlet Maps | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />
    <div class="row">
        <div class="col-xl-6">
            <SimpleCard title="Leaflet Map">
                <div style="height:296px; width:100%">
                    <l-map :use-global-leaflet="false" ref="map" :zoom="zoom" :center="[47.41322, -1.219482]">
                        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                            name="OpenStreetMap"></l-tile-layer>
                    </l-map>
                </div>
            </SimpleCard>
        </div>
        <div class="col-xl-6">
            <SimpleCard title="Map With Markers,circles and Polygons">
                <div style="height: 296px; width: 100%;">
                    <l-map :use-global-leaflet="false" :zoom="zoom" :center="[47.41322, -1.219482]" @move="log('move')">
                        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
                        <l-marker :lat-lng="[0, 0]" draggable @moveend="log('moveend')">
                            hover-popup
                        </l-marker>

                        <l-marker :lat-lng="[50, 50]" draggable @moveend="log('moveend')">
                            click-popup
                        </l-marker>

                        <l-polyline :lat-lngs="[
                            [47.334852, -1.509485],
                            [47.342596, -1.328731],
                            [47.241487, -1.190568],
                            [47.234787, -1.358337],
                        ]" color="green"></l-polyline>
                        <l-polygon :lat-lngs="[
                            [46.334852, -1.509485],
                            [46.342596, -1.328731],
                            [46.241487, -1.190568],
                            [46.234787, -1.358337],
                        ]" color="#41b782" :fill="true" :fillOpacity="0.5" fillColor="#41b782" />
                        <l-rectangle :lat-lngs="[
                            [46.334852, -1.509485],
                            [46.342596, -1.328731],
                            [46.241487, -1.190568],
                            [46.234787, -1.358337],
                        ]" :fill="true" color="#35495d" />
                        <l-rectangle :bounds="[
                            [46.334852, -1.190568],
                            [46.241487, -1.090357],
                        ]">
                            <l-popup>
                                Rectangle popup
                            </l-popup>
                        </l-rectangle>
                    </l-map>
                </div>
            </SimpleCard>
        </div>
        <div class="col-xl-6">
            <SimpleCard title="Map With Popup">
                <div style="height: 296px; width: 100%;">
                    <l-map :use-global-leaflet="false" :zoom="zoom" :center="[47.41322, -1.219482]" @move="log('move')">
                        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
                        <l-marker :lat-lng="[0, 0]" draggable @moveend="log('moveend')">
                            <l-tooltip>
                                hover-popup
                            </l-tooltip>
                            <l-icon :icon-url="markerUrl" :icon-size="markerSize" />
                        </l-marker>

                        <l-marker :draggable="false" :lat-lng="[50, 50]" @moveend="log('moveend')">
                            <l-icon :icon-url="markerUrl" :icon-size="markerSize" />
                            <l-popup>
                                click-popup
                            </l-popup>
                        </l-marker>
                    </l-map>
                </div>
            </SimpleCard>
        </div>
        <div class="col-xl-6">
            <SimpleCard title="Map With Custom Icon">
                <div style="height: 296px; width: 100%;">
                    <l-map :use-global-leaflet="false" :zoom="zoom" :center="[47.41322, -1.219482]" @move="log('move')">
                        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
                        <l-marker :lat-lng="[47.41322, -1.219482]">
                            <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
                        </l-marker>
                    </l-map>
                </div>
            </SimpleCard>
        </div>
    </div>
</template>

<style scoped>
/* Add your styles here */
</style>
