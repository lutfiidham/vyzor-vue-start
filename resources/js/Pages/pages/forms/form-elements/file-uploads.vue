<script setup>
import * as prism from '@/shared/data/prismCode/forms/formelements/fileupload';
import Pageheader from '@/components/pageheader/pageheader.vue';
import ShowcodeCard from '../../../../../UI/showcodeCard.vue';
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import { Head } from '@inertiajs/vue3';

// Create component
const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
)

const dataToPass = {
    title: "Forms",
    subtitle: "Form Elements",
    currentpage: "File Uploads",
    activepage: "File Uploads"
};
var myFiles = []

</script>

<template>
    <Head title="File-Upload | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <ShowcodeCard :code="prism.bootstrapFileInput" title="Bootstrap File Input">
                <div class="mb-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input class="form-control py-1" type="file" id="formFile">
                </div>
                <div class="mb-3">
                    <label for="formFileMultiple" class="form-label">Multiple files input
                        example</label>
                    <input class="form-control py-1" type="file" id="formFileMultiple" multiple>
                </div>
                <div class="mb-3">
                    <label for="formFileDisabled" class="form-label">Disabled file input
                        example</label>
                    <input class="form-control py-1" type="file" id="formFileDisabled" disabled>
                </div>
                <div class="mb-3">
                    <label for="formFileSm" class="form-label">Small file input example</label>
                    <input class="form-control form-control-sm ps-2 py-0" id="formFileSm" type="file">
                </div>
                <div>
                    <label for="formFileLg" class="form-label">Large file input example</label>
                    <input class="form-control form-control-lg" id="formFileLg" type="file">
                </div>
            </ShowcodeCard>
        </div>
        <div class="col-xl-12">
            <h6 class="mb-3">Filepond:</h6>
            <div class="row custom-product ">
                <div class="col-xl-12">
                    <ShowcodeCard :code="prism.multipleUpload" title="Multiple Upload">
                        <file-pond name="test" ref="pond"
                            label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
                            allow-multiple="true" max-files="3" accepted-file-types="image/jpeg, image/png"
                            v-bind:files="myFiles" />
                    </ShowcodeCard>
                </div>
                <div class="col-xl-12">
                    <ShowcodeCard :code="prism.singleUpload" title="Single Upload">
                        <file-pond name="test" ref="pond"
                            label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
                            allow-multiple="false" max-files="1" accepted-file-types="image/jpeg, image/png"
                            v-bind:files="myFiles" v-bind:data-style-panel-layout="'circle'" />
                    </ShowcodeCard>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <ShowcodeCard :code="prism.dropzone" title="Dropzone" class="custom-upload">
                <DropZone :maxFiles="4" :uploadOnDrop="true" :multipleUpload="true" :parallelUpload="3" />
            </ShowcodeCard>
        </div>
    </div>
    <!-- End:: row-2 -->

</template>

<style scoped>
/* Add your styles here */
</style>
