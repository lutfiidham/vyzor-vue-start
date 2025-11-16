<script setup>
import { Head } from '@inertiajs/vue3'

import Pageheader from '@/components/pageheader/pageheader.vue'
import { bgcolor, opacityValues, Othercolors, textColors } from '@/shared/data/utilities/colors'

const dataToPass = {
  title: 'Utilities',
  currentpage: 'Colors',
  activepage: 'Colors',
}
</script>

<template>
  <Head title="Colors | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-lg-12 col-sm-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Background Colors
          </div>
        </div>
        <div class="card-body">
          <div class="row row-cols-12 d-flex align-items-center">
            <div v-for="idx in bgcolor" :key="idx.id" class="p-3 col">
              <div :class="`m-2 bg-${idx.color} mx-auto color-container`" />
              <p class="pb-0 mb-0 fw-medium text-center">
                <code>.bg-{{ idx.color }}</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12 col-sm-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Background gradients
          </div>
        </div>
        <div class="card-body">
          <div class="row row-cols-12 d-flex align-items-center">
            <div v-for="idx in bgcolor" :key="idx.id" class="p-2 col">
              <div :class="`m-2 bg-${idx.color}-gradient mx-auto color-container`" />
              <p class="pb-0 mb-0 fw-medium text-center">
                <code>.bg-{{ idx.color }}-gradient</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12 col-sm-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Background transparent colors
          </div>
        </div>
        <div class="card-body">
          <div class="row row-cols-12 d-flex align-items-center">
            <div v-for="idx in bgcolor" :key="idx.id" class="p-3 col">
              <div
                :class="`m-2 bg-${idx.color}-transparent mx-auto color-container ${idx.id === 7 ? '' : 'shadow-none'} `"
              />
              <p class="pb-0 mb-0 fw-medium text-center">
                <code>.bg-{{ idx.color }}-transparent</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12 col-sm-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Background outline colors
          </div>
        </div>
        <div class="card-body">
          <div class="row row-cols-12 d-flex align-items-center">
            <div v-for="idx in bgcolor" :key="idx.id" class="p-3 col">
              <div :class="`m-2 bg-outline-${idx.color} mx-auto color-container`">
                <i class="bi bi-emoji-smile fs-18" />
              </div>
              <p class="pb-0 mb-0 fw-medium text-center">
                <code>.bg-outline-{{ idx.color }}</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12 col-sm-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Border Colors
          </div>
        </div>
        <div class="card-body">
          <div class="row row-cols-12 d-flex align-items-center">
            <div v-for="idx in bgcolor" :key="idx.id" class="p-3 col">
              <div :class="`m-2 border border-${idx.color} mx-auto color-container`" />
              <p class="pb-0 mb-0 fw-medium text-center">
                <code>.border-${{ idx.color }}</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12 col-sm-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Background Opacity
          </div>
        </div>
        <div class="card-body">
          <div class="row row-cols-12 d-flex align-items-center">
            <div v-for="idx in opacityValues" :key="idx.id" class="p-3 col">
              <div
                :class="`m-2 bg-success bg-opacity-${idx.value} text-fixed-${idx.color} mx-auto color-container`"
              >
                {{ idx.value }}%
              </div>
              <p class="pb-0 mb-0 fw-medium text-center">
                <code>.bg-opacity-{{ idx.value }}</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Text Colors
          </div>
        </div>
        <div class="card-body">
          <div class="row row-cols-12 d-flex align-items-center">
            <div v-for="idx in textColors" :key="idx.id" class="p-3 col">
              <div :class="`m-2 text-${idx.className} fw-medium fs-14 text-center`">
                {{ idx.label }}
              </div>
              <p class="pb-0 mb-0 fw-medium text-center">
                <code>.text-{{ idx.label }}</code>
              </p>
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
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">
                Text Opacity
              </div>
            </div>
            <div class="card-body">
              <div class="row row-cols-12 d-flex align-items-center">
                <div v-for="idx in opacityValues.slice(0, 4)" :key="idx.id" class="p-3 col">
                  <div
                    :class="`m-2 text-primary fw-medium text-opacity-${idx.value} fs-14 text-center bg-opacity-${idx.value}`"
                  >
                    Opacity-{{ idx.value }}
                  </div>
                  <p class="pb-0 mb-0 fw-medium text-center">
                    <code>{{ idx.value }}% opacity</code>
                  </p>
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
            Callout
          </div>
        </div>
        <div class="card-body">
          <div class="callout">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div class="callout callout-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div class="callout callout-warning">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div class="callout callout-danger">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-4 -->

  <!-- Start:: row-5 -->
  <h6 class="mb-3">
    Other Colors:
  </h6>
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-body d-xl-flex flex-wrap">
          <div
            v-for="idx in Othercolors"
            :key="idx.id"
            :class="`flex-fill p-3 bd-blue-${idx.data}`"
          >
            $blue-{{ idx.data }}
          </div>

          <div class="flex-fill p-3 bd-blue">
            $blue
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-body d-xl-flex flex-wrap">
          <div
            v-for="idx in Othercolors"
            :key="idx.id"
            :class="`flex-fill p-3 bd-indigo-${idx.data}`"
          >
            $indigo-{{ idx.data }}
          </div>

          <div class="flex-fill p-3 bd-indigo">
            $indigo
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-body d-xl-flex flex-wrap">
          <div
            v-for="idx in Othercolors"
            :key="idx.id"
            :class="`flex-fill p-3 bd-purple-${idx.data}`"
          >
            $purple-{{ idx.data }}
          </div>

          <div class="flex-fill p-3 bd-purple">
            $purple
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-body d-xl-flex flex-wrap">
          <div
            v-for="idx in Othercolors"
            :key="idx.id"
            :class="`flex-fill p-3 bd-pink-${idx.data}`"
          >
            $pink-{{ idx.data }}
          </div>

          <div class="flex-fill p-3 bd-pink">
            $pink
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-body d-xl-flex flex-wrap">
          <div v-for="idx in Othercolors" :key="idx.id" :class="`flex-fill p-3 bd-red-${idx.data}`">
            $red-{{ idx.data }}
          </div>

          <div class="flex-fill p-3 bd-red">
            $red
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-body d-xl-flex flex-wrap">
          <div
            v-for="idx in Othercolors"
            :key="idx.id"
            :class="`flex-fill p-3 bd-orange-${idx.data}`"
          >
            $orange-{{ idx.data }}
          </div>

          <div class="flex-fill p-3 bd-orange">
            $orange
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-body d-xl-flex flex-wrap">
          <div
            v-for="idx in Othercolors"
            :key="idx.id"
            :class="`flex-fill p-3 bd-yellow-${idx.data} ${idx.textClass}`"
          >
            $yellow-{{ idx.data }}
          </div>

          <div class="flex-fill p-3 bd-yellow text-dark">
            $yellow
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-body d-xl-flex flex-wrap">
          <div
            v-for="idx in Othercolors"
            :key="idx.id"
            :class="`flex-fill p-3 bd-green-${idx.data}`"
          >
            $green-{{ idx.data }}
          </div>

          <div class="flex-fill p-3 bd-green">
            $green
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-body d-xl-flex flex-wrap">
          <div
            v-for="idx in Othercolors"
            :key="idx.id"
            :class="`flex-fill p-3 bd-teal-${idx.data}`"
          >
            $teal-{{ idx.data }}
          </div>

          <div class="flex-fill p-3 bd-teal">
            $teal
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-body d-xl-flex flex-wrap">
          <div
            v-for="idx in Othercolors"
            :key="idx.id"
            :class="`flex-fill p-3 bd-cyan-${idx.data}`"
          >
            $cyan-{{ idx.data }}
          </div>

          <div class="flex-fill p-3 bd-cyan">
            $cyan
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-body d-xl-flex flex-wrap">
          <div
            v-for="idx in Othercolors"
            :key="idx.id"
            :class="`flex-fill p-3 bd-gray-${idx.data}`"
          >
            $gray-{{ idx.data }}
          </div>

          <div class="flex-fill p-3 bd-gray">
            $gray
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-5 -->
</template>

<style scoped>
/* Add your styles here */
</style>
