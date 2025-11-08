<script setup>
import CustomControl from '@/components/google-maps/customControl.vue'
import Custommarker from '@/components/google-maps/custommarker.vue'
import GoogleCircle from '@/components/google-maps/googleCircle.vue'
import GoogleMarker from '@/components/google-maps/googleMarker.vue'
import GooglePolygon from '@/components/google-maps/googlePolygon.vue'
import GooglePolyline from '@/components/google-maps/googlePolyline.vue'
import GoogleRectangle from '@/components/google-maps/googleRectangle.vue'
import MarkerCluster from '@/components/google-maps/markerCluster.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import { Head } from '@inertiajs/vue3'
const dataToPass = {
  title: 'Maps',
  currentpage: 'Google Maps',
  activepage: 'Google Maps',
}
</script>

<template>
  <Head title="Google Maps | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />

  <div class="row">
    <!-- Map With Marker -->
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Map With Marker</div>
        </div>
        <div class="card-body">
          <GoogleMarker />
        </div>
      </div>
    </div>

    <!-- Map With Rectangle -->
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Map with Rectangle</div>
        </div>
        <div class="card-body">
          <GoogleRectangle />
        </div>
      </div>
    </div>

    <!-- Map with Polygon -->
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Map with Polygon</div>
        </div>
        <div class="card-body">
          <GooglePolygon />
        </div>
      </div>
    </div>

    <!-- Map With Polyline -->
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Map With Polyline</div>
        </div>
        <div class="card-body">
          <GooglePolyline />
        </div>
      </div>
    </div>

    <!-- Map With MarkerCluster -->
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Map With MarkerCluster</div>
        </div>
        <div class="card-body">
          <MarkerCluster />
        </div>
      </div>
    </div>

    <!-- Map With Custom Marker -->
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Map With Custom Marker</div>
        </div>
        <div class="card-body">
          <Custommarker />
        </div>
      </div>
    </div>

    <!-- Map With Circle -->
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Map With Circle</div>
        </div>
        <div class="card-body">
          <GoogleCircle />
        </div>
      </div>
    </div>

    <!-- Map With Custom Control -->
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Map With Custom Control</div>
        </div>
        <div class="card-body">
          <CustomControl />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
