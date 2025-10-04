export let vue3CircleWithDisabledAlphaColorPicker = {
    script: `<color-picker v-model:pureColor="pureColor" shape="circle" format="rgb" pickerType="chrome"
                    useType="pure" :disableAlpha="true" />`,
  },
  vue3GradientColorPicker = {
    script: ` <color-picker v-model:gradientColor="gradientColor" useType="both" lang="en" />`,
  },
  vuetifyColorPicker = {
    script: `<div class="row g-3">
                <div class="col">
                    <v-color-picker></v-color-picker>
                </div>
                <div class="col">
                    <v-color-picker hide-canvas show-swatches></v-color-picker>
                </div>
            </div>`,
  }
