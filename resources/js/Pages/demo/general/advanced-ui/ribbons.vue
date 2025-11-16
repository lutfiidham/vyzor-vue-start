<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as ribbonData from '@/shared/data/ribbon'

const dataToPass = {
  title: 'Advanced Ui',
  currentpage: 'Ribbons',
  activepage: 'Ribbons',
}
</script>

<template>
  <Head title="Ribbons | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            RIBBON STYLE 1
          </div>
        </div>
        <div class="card-body">
          <div class="row gy-3">
            <div class="col-xl-6">
              <div class="card custom-card shadow-none mb-0 ribbon-card">
                <div class="card-body p-4">
                  <div class="ribbon ribbon-primary ribbon-top-left">
                    <span>ribbon</span>
                  </div>
                  <div class="card-subtitle fw-semibold mb-2 text-end">
                    Top Left
                  </div>
                  <span class="d-block">Join us in congratulating [Employee Name] for their outstanding contributions
                    and dedication. Their hard work and commitment have truly set a standard for
                    excellence. Let's celebrate their achievements together!</span>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="card custom-card shadow-none mb-0 ribbon-card">
                <div class="card-body p-4">
                  <div class="ribbon ribbon-secondary ribbon-top-right">
                    <span>ribbon</span>
                  </div>
                  <div class="card-subtitle fw-semibold mb-2 text-start">
                    Top Right
                  </div>
                  <span class="d-block">Join us in congratulating [Employee Name] for their outstanding contributions
                    and dedication. Their hard work and commitment have truly set a standard for
                    excellence. Let's celebrate their achievements together!</span>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="card custom-card shadow-none mb-0 ribbon-card">
                <div class="card-body p-4">
                  <div class="ribbon ribbon-success ribbon-bottom-left">
                    <span>ribbon</span>
                  </div>
                  <span class="d-block">Join us in congratulating [Employee Name] for their outstanding contributions
                    and dedication. Their hard work and commitment have truly set a standard for
                    excellence. Let's celebrate their achievements together!</span>
                  <div class="card-subtitle fw-semibold mt-2 text-end">
                    Bottom Left
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="card custom-card shadow-none mb-0 ribbon-card">
                <div class="card-body p-4">
                  <div class="ribbon ribbon-orange ribbon-bottom-right">
                    <span>ribbon</span>
                  </div>
                  <span class="d-block">Join us in congratulating [Employee Name] for their outstanding contributions
                    and dedication. Their hard work and commitment have truly set a standard for
                    excellence. Let's celebrate their achievements together!</span>
                  <div class="card-subtitle fw-semibold mt-2 text-start">
                    Bottom Right
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            RIBBON STYLE 2
          </div>
        </div>
        <div class="card-body p-4">
          <div class="row gy-3">
            <div v-for="(idx, index) in ribbonData.Ribbons2" :key="index" class="col-xl-6">
              <div class="card custom-card shadow-none mb-0">
                <div class="card-body p-4">
                  <div :class="`ribbon-2 ribbon-${idx.color} ribbon-${idx.position}`">
                    Congratulations
                  </div>
                  <span class="d-block pt-4">Join us in congratulating [Employee Name] for their outstanding contributions
                    and dedication. Their hard work and commitment have truly set a standard for
                    excellence. Let's celebrate their achievements together!</span>
                  <div :class="`card-subtitle fw-semibold mt-2 text-${idx.class}`">
                    {{ idx.title }} Ribbon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            RIBBON STYLE 3
          </div>
        </div>
        <div class="card-body p-4">
          <div class="row gy-3">
            <div v-for="(idx, index) in ribbonData.Ribbons3" :key="index" class="col-xl-3">
              <div class="card custom-card mb-0">
                <div class="card-body p-4">
                  <span :class="`ribbon-3 ${idx.position} ribbon-${idx.color}`">
                    <span><i class="fe fe-zap" /></span>
                  </span>
                  <div :class="`card-subtitle fw-semibold mb-2 text-${idx.class}`">
                    {{ idx.title }} Ribbon
                  </div>
                  <span class="d-block">Join us in congratulating [Employee Name] for their outstanding contributions
                    and dedication. Their hard work and commitment have truly set a standard for
                    excellence. Let's celebrate their achievements together!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-3 -->

  <!-- Start:: row-4 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            RIBBON STYLE 4
          </div>
        </div>
        <div class="card-body">
          <div class="row gy-3">
            <div v-for="(idx, index) in ribbonData.Ribbon4" :key="index" class="col-xl-6">
              <div class="card custom-card mb-0">
                <div class="card-body p-4">
                  <span :class="`ribbon-4 ribbon-${idx.color} ${idx.position}`">
                    <span>May</span>
                  </span>
                  <div :class="`card-subtitle fw-semibold mb-2 text-${idx.class}`">
                    {{ idx.title }} Ribbon
                  </div>
                  <span class="d-block">Join us in congratulating [Employee Name] for their outstanding contributions
                    and dedication. Their hard work and commitment have truly set a standard for
                    excellence. Let's celebrate their achievements together!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-4 -->

  <!-- Start:: row-5 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            RIBBON STYLE 5
          </div>
        </div>
        <div class="card-body">
          <div class="row gy-3">
            <div class="col-xl-3">
              <div class="card custom-card mb-0 overflow-hidden">
                <div class="card-body p-4">
                  <div class="ribbon-5 ribbon-primary top-left">
                    OFFER
                  </div>
                  <div class="card-subtitle fw-semibold mb-2 text-end">
                    Top Left Ribbon
                  </div>
                  <span class="d-block">Join us in congratulating [Employee Name] for their outstanding contributions
                    and dedication. Their hard work and commitment have truly set a standard for
                    excellence. Let's celebrate their achievements together!</span>
                </div>
              </div>
            </div>
            <div class="col-xl-3">
              <div class="card custom-card mb-0 overflow-hidden">
                <div class="card-body p-4">
                  <div class="ribbon-5 ribbon-secondary top-right">
                    OPEN
                  </div>
                  <div class="card-subtitle fw-semibold mb-2 text-start">
                    Top Right Ribbon
                  </div>
                  <span class="d-block">Join us in congratulating [Employee Name] for their outstanding contributions
                    and dedication. Their hard work and commitment have truly set a standard for
                    excellence. Let's celebrate their achievements together!</span>
                </div>
              </div>
            </div>
            <div class="col-xl-3">
              <div class="card custom-card mb-0 overflow-hidden">
                <div class="card-body p-4">
                  <div class="ribbon-5 ribbon-success bottom-left">
                    CLOSE
                  </div>
                  <span class="d-block mb-2">Join us in congratulating [Employee Name] for their outstanding contributions
                    and dedication. Their hard work and commitment have truly set a standard for
                    excellence. Let's celebrate their achievements together!</span>
                  <div class="card-subtitle fw-semibold text-end">
                    Bottom Left Ribbon
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3">
              <div class="card custom-card mb-0 overflow-hidden">
                <div class="card-body p-4">
                  <div class="ribbon-5 ribbon-orange bottom-right">
                    SALE
                  </div>
                  <span class="d-block mb-2">Join us in congratulating [Employee Name] for their outstanding contributions
                    and dedication. Their hard work and commitment have truly set a standard for
                    excellence. Let's celebrate their achievements together!</span>
                  <div class="card-subtitle fw-semibold text-start">
                    Bottom Right Ribbon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-5 -->

  <!-- Start:: row-6 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            RIBBON STYLE 6
          </div>
        </div>
        <div class="card-body">
          <div class="row gy-3">
            <div class="col-xl-6">
              <div class="card custom-card mb-0">
                <div class="card-body p-4">
                  <div class="ribbon-6 ribbon-left ribbon-primary">
                    Service
                  </div>
                  <div class="card-subtitle fw-semibold mb-2 text-end">
                    Top Left Ribbon
                  </div>
                  <span class="d-block">Join us in congratulating [Employee Name] for their outstanding contributions
                    and dedication. Their hard work and commitment have truly set a standard for
                    excellence. Let's celebrate their achievements together!</span>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="card custom-card mb-0">
                <div class="card-body p-4">
                  <div class="ribbon-6 ribbon-right ribbon-secondary">
                    Offer
                  </div>
                  <div class="card-subtitle fw-semibold mb-2 text-start">
                    Top Right Ribbon
                  </div>
                  <span class="d-block">Join us in congratulating [Employee Name] for their outstanding contributions
                    and dedication. Their hard work and commitment have truly set a standard for
                    excellence. Let's celebrate their achievements together!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-6 -->
</template>

<style scoped>
/* Add your styles here */
</style>
