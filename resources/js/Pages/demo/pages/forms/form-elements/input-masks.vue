<script setup>
import { Head } from '@inertiajs/vue3'
import { ref } from 'vue'
import Pageheader from '@/components/pageheader/pageheader.vue'

// Page meta info
const dataToPass = {
  title: 'Forms',
  subtitle: 'Form Elements',
  currentpage: 'Input Masks',
  activepage: 'Input Masks',
}

// Form input values
const value = ref('')
const delimiters = ref('')
const delimiters1 = ref('')
const formatting = ref('')
const formatting1 = ref('')
const formatting2 = ref('')
const formatting3 = ref('')
const formatting4 = ref('')
const formatting5 = ref('')

// Currency formatting options
const options = {
  preProcess: val => val.replace(/[$,]/g, ''),
  postProcess: val => {
    if (!val)
      return ''

    const sub = 3 - (val.includes('.') ? val.length - val.indexOf('.') : 0)

    return Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    })
      .format(Number(val))
      .slice(0, sub ? -sub : undefined)
  },
}
</script>

<template>
  <Head title="Input-Masks | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Date Format-1
          </div>
        </div>
        <div class="card-body">
          <input
            v-model="formatting"
            v-maska
            class="form-control date-format"
            placeholder="DD-MM-YYYY"
            data-maska="##-##-####"
          >
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Date Format-2
          </div>
        </div>
        <div class="card-body">
          <input
            v-model="formatting1"
            v-maska
            class="form-control date-format-1"
            placeholder="MM-DD-YYYY"
            data-maska="##-##-####"
          >
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Date Format-3
          </div>
        </div>
        <div class="card-body">
          <input
            v-model="formatting2"
            v-maska
            class="form-control date-format-2"
            placeholder="MM-YY"
            data-maska="##-##"
          >
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Number Formatting
          </div>
        </div>
        <div class="card-body">
          <input
            v-maska:[options]
            class="form-control number-format"
            data-maska="0.99"
            data-maska-number
            data-maska-tokens="0:\d:multiple|9:\d:optional"
            placeholder="Number Here"
          >
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Time Format-1
          </div>
        </div>
        <div class="card-body">
          <input
            v-model="formatting3"
            v-maska
            class="form-control time-format-1"
            placeholder="hh:mm:ss"
            data-maska="##:##:##"
          >
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Time Format-2
          </div>
        </div>
        <div class="card-body">
          <input
            v-model="formatting4"
            v-maska
            class="form-control time-format-2"
            placeholder="hh:mm"
            data-maska="##:##"
          >
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Formatting Into Blocks
          </div>
        </div>
        <div class="card-body">
          <input
            v-model="formatting5"
            v-maska
            class="form-control formatting-blocks"
            placeholder="ABCD EFG HIJ KLMN"
            data-maska="@@@ @@@ @@@ @@@@"
          >
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Delimiter
          </div>
        </div>
        <div class="card-body">
          <input
            v-model="delimiters"
            v-maska
            class="form-control delimiters"
            placeholder="ABC.DEF.GHi"
            data-maska="@@@.@@@.@@@"
          >
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Delimiters
          </div>
        </div>
        <div class="card-body">
          <input
            v-model="delimiters1"
            v-maska
            class="form-control delimiters"
            placeholder="ABC/DEF/GHi-JK"
            data-maska="@@@/@@@/@@@-@@"
          >
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Prefix
          </div>
        </div>
        <div class="card-body">
          <input
            v-maska
            placeholder="With default prefix"
            class="form-control prefix-element"
            data-maska="!Prefix-HHHHHH-HHHH-HHHH"
            data-maska-tokens="H:[0-9a-fA-F]"
          >
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Phone Number Formatting
          </div>
        </div>
        <div class="card-body">
          <input
            v-model="value"
            v-maska
            class="form-control phone-number"
            placeholder="US(+1)"
            data-maska="+1 ### ###-##-##"
          >
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-1 -->
</template>

<style scoped>
/* Add your styles here */
</style>
