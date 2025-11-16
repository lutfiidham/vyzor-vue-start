export const defaultEditor = {
  script: `
    <vue-editor v-model="content"></vue-editor>`,
}
export const customToolbar = {
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
    <vue-editor v-model="content1" :editorToolbar="customToolbar"></vue-editor>`,
}
