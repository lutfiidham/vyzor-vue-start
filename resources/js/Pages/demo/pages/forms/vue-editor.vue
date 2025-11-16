<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as prism from '@/shared/data/prismCode/forms/formeditor'
import ShowcodeCard from '../../../../../UI/showcodeCard.vue'

const dataToPass = {
  title: 'Forms',
  currentpage: 'Vue Editor',
  activepage: 'Vue Editor',
}
const customToolbar = [
  ['bold', 'italic', 'underline'],
  [
    {
      list: 'ordered',
    },
    {
      list: 'bullet',
    },
  ],
  ['image', 'code-block'],
]
const content
  = '<h4><strong>vue3-editor</strong> is a free, open source <a href="https://www.npmjs.com/package/vue3-editor" rel="noopener noreferrer" target="_blank">vue3-editor</a> built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</h4><p><br></p><ol><li>Write text select and edit with multiple options.</li><li>This is quill snow editor.</li><li>Easy to customize and flexible.</li></ol><p><br></p><h4>Vue3 officially supports a standard toolbar theme and a depends on quill.</h4><p><br></p>'
const content1
  = '<h4><strong>vue3-editor</strong> is a free, open source <a href="https://www.npmjs.com/package/vue3-editor" rel="noopener noreferrer" target="_blank">vue3-editor</a> built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</h4><p><br></p><ol><li>Write text select and edit with multiple options.</li><li>This is quill snow editor.</li><li>Easy to customize and flexible.</li></ol><p><br></p><h4>Vue3 officially supports a standard toolbar theme and a depends on quill.</h4><p><br></p>'
</script>

<template>
  <Head title="Editors | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.defaultEditor" title="Default Editor">
        <VueEditor v-model="content" />
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.customToolbar" title="Custom Toolbar">
        <VueEditor v-model="content1" :editor-toolbar="customToolbar" />
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-2 -->
</template>

<style scoped>
/* Add your styles here */
</style>
