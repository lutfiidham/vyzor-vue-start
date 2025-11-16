<script setup>
import { Head } from '@inertiajs/vue3'
import Tagify from '@yaireo/tagify'
import { onMounted, ref } from 'vue'

import Pageheader from '@/components/pageheader/pageheader.vue'
import '@yaireo/tagify/dist/tagify.css'

const tagifyRef = ref(null)
const tagifyWishListRef = ref(null)
const dragSortRef = ref(null)
const dualListboxContainer = ref(null)

onMounted(() => {
  const input = document.querySelector('[name="basic"]')
  tagifyRef.value = new Tagify(input, {
    maxTags: 10,
    placeholder: 'Add tags here...',
  })
  const wishListInput = document.querySelector('[name="input-custom-dropdown"]')
  tagifyWishListRef.value = new Tagify(wishListInput, {
    maxTags: 10,
    whitelist: [
      'A# .NET',
      'A# (Axiom)',
      'A+',
      'A++',
      'ABAP',
      'ABC',
      'ABC ALGOL',
      'ABSET',
      'ABSYS',
      'ACC',
      'Accent',
      'Ace DASL',
      'ACL2',
      'Avicsoft',
      'ACT-III',
      'Action!',
      'ActionScript',
      'Ada',
      'Adenine',
      'Agda',
    ],
    placeholder: 'write some tags',
    dropdown: {
      enabled: 0,
    },
  })
  const dragSort = document.querySelector('[name="drag-sort"]')
  dragSortRef.value = new Tagify(dragSort, {
    maxTags: 10,
    placeholder: 'Add more tags...',
    dropdown: {
      enabled: 0,
    },
  })
})

const leftList = ref(['Item 1', 'Item 2', 'Item 3'])
const rightList = ref(['Item 4', 'Item 5'])

const dataToPass = {
  title: 'Forms',
  currentpage: 'Form Advanced',
  activepage: 'Form Advanced',
}
</script>

<template>
  <Head title="Form-Advance | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Tagify Js
          </div>
        </div>
        <div class="card-body">
          <div class="row gy-3">
            <div class="col-xl-6 custom-tag1">
              <label class="form-label d-block">Basic Tagify</label>
              <input name="basic" value="tag1, tag2" autofocus class="form-control">
            </div>
            <div class="col-xl-6 custom-tag">
              <label class="form-label d-block">Tagify With Custom Suggestions</label>
              <input
                name="input-custom-dropdown"
                class="form-control some_class_name"
                placeholder="write some tags"
                value="css, html, javascript"
              >
            </div>
            <div class="col-xl-6">
              <label class="form-label d-block">Diasbled User Input</label>
              <input
                name="tags-disabled-user-input"
                placeholder="Select tags from the list"
                class="form-control"
                disabled
              >
            </div>
            <div class="col-xl-6 custom-tag">
              <label class="form-label d-block">Drag & Sort</label>
              <input
                name="drag-sort"
                class="form-control"
                value="tag 1, tag 2, tag 3, tag 4, tag 5, tag 6"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
