export let
    defaultEditor = {
        script: `
    <vue-editor v-model="content"></vue-editor>` },
    customToolbar = {
        script: `

        data(){ 
            return {
                ...
            customToolbar: [
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["image", "code-block"]
            ],
        }}
    <vue-editor v-model="content1" :editorToolbar="customToolbar"></vue-editor>` };