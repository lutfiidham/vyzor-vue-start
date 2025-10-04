export let
defaultRange = { script : `  <input type="range" class="form-range" id="customRange1">` },
disabledRange = { script : ` <input type="range" class="form-range" id="disabledRange" disabled>` },
rangeWithMinAndMaxValues = { script : `<input type="range" class="form-range" min="0" max="5" id="customRange2">` },
rangeWithSteps = { script : ` <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">` },
defaultStyling = { script : ` <vue-slider :tooltip="'none'" />` },
limitDistanceBetweenSliders = { script : `<vue-slider v-model="limitRange" :min-range="20" :max-range="50"></vue-slider>` },
slideWithCustomTooltip = { script : ` <vue-slider v-model="customTooltip" :tooltip-formatter="customformatter"></vue-slider>` },
squareStyling = { script : ` <vue-slider v-model="square" :tooltip="'none'" :process-style="{ backgroundColor: 'pink' }"
                        :tooltip-style="{ backgroundColor: 'pink', borderColor: 'pink' }">
                        <template v-slot:dot="{ value, focus }">
                            <div :class="['custom-dot', { focus }]"></div>
                        </template>
                    </vue-slider>` },
syncMultiComponentSliders = { script : `<vue-slider class="mb-3" v-for="n in 2" :key="n" v-model="syncMultivalue" :duration="syncMultiinDragging ? 0 : 0.5" @drag-start="() => syncMultiinDragging = true" @drag-end="() => syncMultiinDragging = false"></vue-slider>` },
labelSlot = { script : `<vue-slider v-model="labelSlotValue" :marks="labelSlotmarks" class="mb-3">
                            <template v-slot:label="{ label, active }">
                                <div :class="['vue-slider-mark-label', 'custom-label', { active }]">{{ label }}</div>
                            </template>
                        </vue-slider>` },
tooltipsSlider = { script : `  <vue-slider class="mb-3" v-model="dotTooltips" :dot-options="dotOptions"></vue-slider>
                        <vue-slider class="mb-3" v-model="diffTolltips" :tooltip="'always'"
                            :tooltip-placement="['top', 'bottom']"></vue-slider>` },
stepSlot = { script : ` <vue-slider v-model="stepSlotValue" :marks="stepSlotMarks" class="mb-3">
                            <template v-slot:step="{ label, active }">
                                <div :class="['custom-step', { active }]"></div>
                            </template>
                        </vue-slider>` },
coloredConnectElements = { script : ` <vue-slider v-model="colored" :process="coloredprocess"></vue-slider>` },
customLabels = { script : `<vue-slider v-model="customLabel" :data="customLabeldata" :marks="true" class="mb-3"></vue-slider>` },
independentSlider = { script : `<vue-slider v-model="independentValue" :order="false" :tooltip="'always'" :process="false" :marks="marks" class="my-3">
                    <template #tooltip="{ index }">
                        <div v-if="index === 1">🐰</div>
                        <div v-else>🐢</div>
                    </template>
                </vue-slider>` },
primary = { script : `<vue-slider v-model="customvalue" id="primary-colored-slider"></vue-slider>` },
secondary = { script : ` <vue-slider v-model="customvalue1" id="secondary-colored-slider"></vue-slider>` },
warning = { script : ` <vue-slider v-model="customvalue2" id="warning-colored-slider"></vue-slider>` },
info = { script : ` <vue-slider v-model="customvalue3" id="info-colored-slider"></vue-slider>` },
success = { script : `<vue-slider v-model="customvalue4" id="success-colored-slider"></vue-slider>` },
danger = { script : ` <vue-slider v-model="customvalue5" id="danger-colored-slider"></vue-slider>` };