export let

    bootstrapFileInput = {
        script: `
<div class="mb-3">
                <label for="formFile" class="form-label">Default file input example</label>
                <input class="form-control" type="file" id="formFile">
            </div>
            <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Multiple files input
                    example</label>
                <input class="form-control" type="file" id="formFileMultiple" multiple>
            </div>
            <div class="mb-3">
                <label for="formFileDisabled" class="form-label">Disabled file input
                    example</label>
                <input class="form-control" type="file" id="formFileDisabled" disabled>
            </div>
            <div class="mb-3">
                <label for="formFileSm" class="form-label">Small file input example</label>
                <input class="form-control form-control-sm" id="formFileSm" type="file">
            </div>
            <div>
                <label for="formFileLg" class="form-label">Large file input example</label>
                <input class="form-control form-control-lg" id="formFileLg" type="file">
            </div>` },
    multipleUpload = {
        script: `
    <file-pond name="test" ref="pond" label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>" allow-multiple="true" max-files="3" accepted-file-types="image/jpeg, image/png" v-bind:files="myFiles" />` },
    singleUpload = {
        script: `
     <file-pond name="test" ref="pond" label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>" allow-multiple="false" max-files="1" accepted-file-types="image/jpeg, image/png" v-bind:files="myFiles" v-bind:data-style-panel-layout="'circle'" />` },
    dropzone = { script: ` <DropZone :maxFiles="4" :uploadOnDrop="true" :multipleUpload="true" :parallelUpload="3" />` };