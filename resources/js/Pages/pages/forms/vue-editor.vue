<script setup>
import * as prism from '@/shared/data/prismCode/forms/formeditor'
import Pageheader from '@/components/pageheader/pageheader.vue'
import ShowcodeCard from '../../../../UI/showcodeCard.vue'
import { Head } from '@inertiajs/vue3'
const dataToPass = {
  title: 'Forms',
  currentpage: 'Vue Editor',
  activepage: 'Vue Editor',
}
let customToolbar = [
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
let content =
  '<h4><strong>vue3-editor</strong> is a free, open source <a href="https://www.npmjs.com/package/vue3-editor" rel="noopener noreferrer" target="_blank">vue3-editor</a> built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</h4><p><br></p><ol><li>Write text select and edit with multiple options.</li><li>This is quill snow editor.</li><li>Easy to customize and flexible.</li></ol><p><br></p><h4>Vue3 officially supports a standard toolbar theme and a depends on quill.</h4><p><br></p>'
let content1 =
  '<h4><strong>vue3-editor</strong> is a free, open source <a href="https://www.npmjs.com/package/vue3-editor" rel="noopener noreferrer" target="_blank">vue3-editor</a> built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</h4><p><br></p><ol><li>Write text select and edit with multiple options.</li><li>This is quill snow editor.</li><li>Easy to customize and flexible.</li></ol><p><br></p><h4>Vue3 officially supports a standard toolbar theme and a depends on quill.</h4><p><br></p>'
</script>

<template>
  <Head title="Editors | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.defaultEditor" title="Default Editor">
        <vue-editor v-model="content"></vue-editor>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.customToolbar" title="Custom Toolbar">
        <vue-editor v-model="content1" :editorToolbar="customToolbar"></vue-editor>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-2 -->
</template>

<style scoped>
/* Add your styles here */
</style>
