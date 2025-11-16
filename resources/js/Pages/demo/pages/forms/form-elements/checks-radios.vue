<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as prism from '@/shared/data/prismCode/forms/formelements/check-radio'
import ShowcodeCard from '../../../../../../UI/showcodeCard.vue'
import ToggleSwitch from '../../../../../../UI/toggleSwitch.vue'

const dataToPass = {
  title: 'Forms',
  subtitle: 'Form Elements',
  currentpage: 'Checks & Radios',
  activepage: 'Checks & Radios',
}
const Checkdata1 = [
  {
    id: '1',
    class1: 'mb-2',
    class2: 'primary',
    text: 'Primary',
  },
  {
    id: '2',
    class1: 'mb-2',
    class2: 'secondary',
    text: 'Secondary',
  },
  {
    id: '3',
    class1: 'mb-2',
    class2: 'warning',
    text: 'Warning',
  },
  {
    id: '4',
    class1: 'mb-2',
    class2: 'info',
    text: 'Info',
  },
  {
    id: '5',
    class1: 'mb-2',
    class2: 'success',
    text: 'Success',
  },
  {
    id: '6',
    class1: 'mb-2',
    class2: 'danger',
    text: 'Danger',
  },
  {
    id: '7',
    class1: 'mb-0',
    class2: 'dark',
    text: 'Dark',
  },
]
</script>

<template>
  <Head title="Checks-Radios | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard :code="prism.checks" title="Checks">
        <div class="form-check">
          <input id="flexCheckDefault" class="form-check-input" type="checkbox" value="">
          <label class="form-check-label" for="flexCheckDefault"> Default checkbox </label>
        </div>
        <div class="form-check">
          <input id="flexCheckChecked" class="form-check-input" type="checkbox" value="" checked>
          <label class="form-check-label" for="flexCheckChecked"> Checked checkbox </label>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard :code="prism.disabledChecks" title="Disabled">
        <div class="form-check">
          <input
            id="flexCheckDisabled"
            class="form-check-input"
            type="checkbox"
            value=""
            disabled
          >
          <label class="form-check-label" for="flexCheckDisabled"> Disabled checkbox </label>
        </div>
        <div class="form-check">
          <input
            id="flexCheckCheckedDisabled"
            class="form-check-input"
            type="checkbox"
            value=""
            checked
            disabled
          >
          <label class="form-check-label" for="flexCheckCheckedDisabled">
            Disabled checked checkbox
          </label>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard :code="prism.radios" title="Radios">
        <div class="form-check">
          <input
            id="flexRadioDefault1"
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
          >
          <label class="form-check-label" for="flexRadioDefault1"> Default radio </label>
        </div>
        <div class="form-check">
          <input
            id="flexRadioDefault2"
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            checked
          >
          <label class="form-check-label" for="flexRadioDefault2"> Default checked radio </label>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <ShowcodeCard :code="prism.disabledRadios" title="Disabled">
        <div class="form-check">
          <input
            id="flexRadioDisabled"
            class="form-check-input"
            type="radio"
            name="flexRadioDisabled"
            disabled
          >
          <label class="form-check-label" for="flexRadioDisabled"> Disabled radio </label>
        </div>
        <div class="form-check">
          <input
            id="flexRadioCheckedDisabled"
            class="form-check-input"
            type="radio"
            name="flexRadioDisabled"
            checked
            disabled
          >
          <label class="form-check-label" for="flexRadioCheckedDisabled">
            Disabled checked radio
          </label>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
      <ShowcodeCard :code="prism.stacjedDefault" title="Default (stacked)">
        <div class="form-check">
          <input id="defaultCheck1" class="form-check-input" type="checkbox" value="">
          <label class="form-check-label" for="defaultCheck1"> Default checkbox </label>
        </div>
        <div class="form-check">
          <input id="defaultCheck2" class="form-check-input" type="checkbox" value="" disabled>
          <label class="form-check-label" for="defaultCheck2"> Disabled checkbox </label>
        </div>
        <div class="form-check">
          <input
            id="exampleRadios1"
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            value="option1"
            checked
          >
          <label class="form-check-label" for="exampleRadios1"> Default radio </label>
        </div>
        <div class="form-check mb-0">
          <input
            id="exampleRadios3"
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            value="option3"
            disabled
          >
          <label class="form-check-label" for="exampleRadios3"> Disabled radio </label>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
      <ShowcodeCard :code="prism.switchers" title="Switches">
        <div class="form-check form-switch">
          <input
            id="flexSwitchCheckDefault"
            class="form-check-input"
            type="checkbox"
            role="switch"
          >
          <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
        </div>
        <div class="form-check form-switch">
          <input
            id="flexSwitchCheckChecked"
            class="form-check-input"
            type="checkbox"
            role="switch"
            checked
          >
          <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
        </div>
        <div class="form-check form-switch">
          <input
            id="flexSwitchCheckDisabled"
            class="form-check-input"
            type="checkbox"
            role="switch"
            disabled
          >
          <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
        </div>
        <div class="form-check form-switch mb-0">
          <input
            id="flexSwitchCheckCheckedDisabled"
            class="form-check-input"
            type="checkbox"
            role="switch"
            checked
            disabled
          >
          <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <ShowcodeCard
        :code="prism.checkboxSize"
        title="Checkbox Sizes"
        custom-card-body-class="d-sm-flex align-items-center justify-content-between"
      >
        <div class="form-check">
          <input id="checkebox-sm" class="form-check-input" type="checkbox" value="" checked>
          <label class="form-check-label" for="checkebox-sm"> Default </label>
        </div>
        <div class="form-check form-check-md d-flex align-items-center">
          <input id="checkebox-md" class="form-check-input" type="checkbox" value="" checked>
          <label class="form-check-label" for="checkebox-md"> Medium </label>
        </div>
        <div class="form-check form-check-lg d-flex align-items-center">
          <input id="checkebox-lg" class="form-check-input" type="checkbox" value="" checked>
          <label class="form-check-label" for="checkebox-lg"> Large </label>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <ShowcodeCard
        :code="prism.radioSizes"
        title="Radio Sizes"
        custom-card-body-class=" d-sm-flex align-items-center justify-content-between"
      >
        <div class="form-check">
          <input id="Radio-sm" class="form-check-input" type="radio" name="Radio">
          <label class="form-check-label" for="Radio-sm"> default </label>
        </div>
        <div class="form-check form-check-md">
          <input id="Radio-md" class="form-check-input" type="radio" name="Radio">
          <label class="form-check-label" for="Radio-md"> Medium </label>
        </div>
        <div class="form-check form-check-lg">
          <input id="Radio-lg" class="form-check-input" type="radio" name="Radio" checked>
          <label class="form-check-label" for="Radio-lg"> Large </label>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <ShowcodeCard
        :code="prism.switchSizes"
        title="Switch Sizes"
        custom-card-body-class="d-sm-flex align-item-center justify-content-between"
      >
        <div class="form-check form-switch">
          <input id="switch-sm" class="form-check-input" type="checkbox" role="switch">
          <label class="form-check-label" for="switch-sm">Default</label>
        </div>
        <div class="form-check form-check-md form-switch">
          <input id="switch-md" class="form-check-input" type="checkbox" role="switch">
          <label class="form-check-label" for="switch-md">Medium</label>
        </div>
        <div class="form-check form-check-lg form-switch">
          <input id="switch-lg" class="form-check-input" type="checkbox" role="switch">
          <label class="form-check-label" for="switch-lg">Large</label>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-3 -->

  <!-- Start:: row-4 -->
  <div class="row">
    <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
      <ShowcodeCard :code="prism.inilne" title="Inline">
        <div class="form-check form-check-inline">
          <input id="inlineCheckbox1" class="form-check-input" type="checkbox" value="option1">
          <label class="form-check-label" for="inlineCheckbox1">1</label>
        </div>
        <div class="form-check form-check-inline">
          <input id="inlineCheckbox2" class="form-check-input" type="checkbox" value="option2">
          <label class="form-check-label" for="inlineCheckbox2">2</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            id="inlineCheckbox3"
            class="form-check-input"
            type="checkbox"
            value="option3"
            disabled
          >
          <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            id="inlineRadio1"
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            value="option1"
          >
          <label class="form-check-label" for="inlineRadio1">1</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            id="inlineRadio2"
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            value="option2"
          >
          <label class="form-check-label" for="inlineRadio2">2</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            id="inlineRadio3"
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            value="option3"
            disabled
          >
          <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
        </div>
      </ShowcodeCard>
      <ShowcodeCard :code="prism.withoutlabels" title="Without labels">
        <span class="me-3">
          <input
            id="checkboxNoLabel"
            class="form-check-input"
            type="checkbox"
            value=""
            aria-label="..."
          >
        </span>
        <span>
          <input
            id="radioNoLabel1"
            class="form-check-input"
            type="radio"
            name="radioNoLabel"
            value=""
            aria-label="..."
          >
        </span>
      </ShowcodeCard>
    </div>
    <div class="col-xl-3 col-lg-12 col-md-12 col-sm-12">
      <ShowcodeCard :code="prism.reverse" title="Reverse">
        <div class="form-check form-check-reverse mb-3">
          <input id="reverseCheck1" class="form-check-input" type="checkbox" value="">
          <label class="form-check-label" for="reverseCheck1"> Reverse checkbox </label>
        </div>
        <div class="form-check form-check-reverse mb-3">
          <input id="reverseCheck2" class="form-check-input" type="checkbox" value="" disabled>
          <label class="form-check-label" for="reverseCheck2"> Disabled reverse checkbox </label>
        </div>

        <div class="form-check form-switch form-check-reverse">
          <input id="flexSwitchCheckReverse" class="form-check-input" type="checkbox">
          <label class="form-check-label" for="flexSwitchCheckReverse">Reverse switch checkbox input</label>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-3 col-lg-12 col-md-12 col-sm-12">
      <ShowcodeCard :code="prism.outlinedStyles" title="Outlined styles">
        <input id="btn-check-outlined" type="checkbox" class="btn-check">
        <label class="btn btn-outline-primary mb-3" for="btn-check-outlined">Single toggle</label><br>

        <input id="btn-check-2-outlined" type="checkbox" class="btn-check" checked>
        <label class="btn btn-outline-secondary mb-3" for="btn-check-2-outlined">Checked</label><br>

        <input
          id="success-outlined"
          type="radio"
          class="btn-check"
          name="options-outlined"
          checked
        >
        <label class="btn btn-outline-success m-1" for="success-outlined">Checked success radio</label>

        <input id="danger-outlined" type="radio" class="btn-check" name="options-outlined">
        <label class="btn btn-outline-danger m-1" for="danger-outlined">Danger radio</label>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-4 -->

  <!-- Start:: row-5 -->
  <div class="row">
    <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
      <ShowcodeCard :code="prism.radioToggleButtons" title="Radio toggle buttons">
        <input id="option1" type="radio" class="btn-check" name="options" checked>
        <label class="btn btn-primary m-1" for="option1">Checked</label>

        <input id="option2" type="radio" class="btn-check" name="options">
        <label class="btn btn-primary m-1" for="option2">Radio</label>

        <input id="option3" type="radio" class="btn-check" name="options" disabled>
        <label class="btn btn-primary m-1" for="option3">Disabled</label>

        <input id="option4" type="radio" class="btn-check" name="options">
        <label class="btn btn-primary m-1" for="option4">Radio</label>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
      <ShowcodeCard :code="prism.checkboxToggleButtons" title="Checkbox toggle buttons">
        <input id="btn-check" type="checkbox" class="btn-check">
        <label class="btn btn-primary m-1" for="btn-check">Single toggle</label>
        <input id="btn-check-2" type="checkbox" class="btn-check" checked>
        <label class="btn btn-primary m-1" for="btn-check-2">Checked</label>
        <input id="btn-check-3" type="checkbox" class="btn-check" disabled>
        <label class="btn btn-primary m-1" for="btn-check-3">Disabled</label>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-5 -->

  <!-- Start:: row-6 -->
  <div class="row row-cols-12">
    <div class="col col-md-6 col-lg-6 col-xl">
      <ShowcodeCard :code="prism.coloredCheckboxes" title="Colored Checkboxes">
        <div v-for="(idx, index) in Checkdata1" :key="index" :class="`form-check ${idx.class1}`">
          <input
            :id="`${idx.class2}Checked`"
            :class="`form-check-input form-checked-${idx.class2}`"
            type="checkbox"
            value=""
            checked
          >
          <label class="form-check-label" :for="`${idx.class2}Checked`">
            {{ idx.text }}
          </label>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col col-md-6 col-lg-6 col-xl">
      <ShowcodeCard :code="prism.outlineCheckboxes" title="Outline Checkboxes">
        <div v-for="(idx, index) in Checkdata1" :key="index" :class="`form-check ${idx.class1}`">
          <input
            :id="`${idx.class2}outlineChecked`"
            :class="`form-check-input form-checked-outline form-checked-${idx.class2}`"
            type="checkbox"
            value=""
            checked
          >
          <label class="form-check-label" :for="`${idx.class2}outlineChecked`">
            {{ idx.text }}
          </label>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col col-md-12 col-lg col-xl">
      <ShowcodeCard :code="prism.coloredRadios" title="Colored Radios">
        <div class="form-check mb-2">
          <input
            id="primaryRadio"
            class="form-check-input"
            type="radio"
            name="primaryRadio"
            checked
          >
          <label class="form-check-label" for="primaryRadio"> Primary </label>
        </div>
        <div class="form-check mb-2">
          <input
            id="secondaryRadio"
            class="form-check-input form-checked-secondary"
            type="radio"
            name="secondaryRadio"
            checked
          >
          <label class="form-check-label" for="secondaryRadio"> Secondary </label>
        </div>
        <div class="form-check mb-2">
          <input
            id="warningRadio"
            class="form-check-input form-checked-warning"
            type="radio"
            name="warningRadio"
            checked
          >
          <label class="form-check-label" for="warningRadio"> Warning </label>
        </div>
        <div class="form-check mb-2">
          <input
            id="InfoRadio"
            class="form-check-input form-checked-info"
            type="radio"
            name="InfoRadio"
            checked
          >
          <label class="form-check-label" for="InfoRadio"> Info </label>
        </div>
        <div class="form-check mb-2">
          <input
            id="successRadio"
            class="form-check-input form-checked-success"
            type="radio"
            name="successRadio"
            checked
          >
          <label class="form-check-label" for="successRadio"> Success </label>
        </div>
        <div class="form-check mb-2">
          <input
            id="dangerRadio"
            class="form-check-input form-checked-danger"
            type="radio"
            name="dangerRadio"
            checked
          >
          <label class="form-check-label" for="dangerRadio"> Danger </label>
        </div>
        <div class="form-check mb-0">
          <input
            id="darkRadio"
            class="form-check-input form-checked-dark"
            type="radio"
            name="darkRadio"
            checked
          >
          <label class="form-check-label" for="darkRadio"> Dark </label>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col col-sm-6 col-lg">
      <ShowcodeCard :code="prism.outlineRadios" title="Outline Radios">
        <div class="form-check mb-2">
          <input
            id="primaryoutlineRadio"
            class="form-check-input form-checked-outline"
            type="radio"
            name="primaryoutlineRadio"
            checked
          >
          <label class="form-check-label" for="primaryoutlineRadio"> Primary </label>
        </div>
        <div class="form-check mb-2">
          <input
            id="secondaryoutlineRadio"
            class="form-check-input form-checked-outline form-checked-secondary"
            type="radio"
            name="secondaryoutlineRadio"
            checked
          >
          <label class="form-check-label" for="secondaryoutlineRadio"> Secondary </label>
        </div>
        <div class="form-check mb-2">
          <input
            id="warningoutlineRadio"
            class="form-check-input form-checked-outline form-checked-warning"
            type="radio"
            name="warningoutlineRadio"
            checked
          >
          <label class="form-check-label" for="warningoutlineRadio"> Warning </label>
        </div>
        <div class="form-check mb-2">
          <input
            id="InfooutlineRadio"
            class="form-check-input form-checked-outline form-checked-info"
            type="radio"
            name="InfooutlineRadio"
            checked
          >
          <label class="form-check-label" for="InfooutlineRadio"> Info </label>
        </div>
        <div class="form-check mb-2">
          <input
            id="successoutlineRadio"
            class="form-check-input form-checked-outline form-checked-success"
            type="radio"
            name="successoutlineRadio"
            checked
          >
          <label class="form-check-label" for="successoutlineRadio"> Success </label>
        </div>
        <div class="form-check mb-2">
          <input
            id="dangeroutlineRadio"
            class="form-check-input form-checked-outline form-checked-danger"
            type="radio"
            name="dangeroutlineRadio"
            checked
          >
          <label class="form-check-label" for="dangeroutlineRadio"> Danger </label>
        </div>
        <div class="form-check mb-0">
          <input
            id="darkoutlineRadio"
            class="form-check-input form-checked-outline form-checked-dark"
            type="radio"
            name="darkoutlineRadio"
            checked
          >
          <label class="form-check-label" for="darkoutlineRadio"> Dark </label>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col col-sm-6 col-lg">
      <ShowcodeCard :code="prism.switchesColors" title="Switches Colors">
        <div class="form-check form-switch mb-2">
          <input
            id="switch-primary"
            class="form-check-input"
            type="checkbox"
            role="switch"
            checked
          >
          <label class="form-check-label" for="switch-primary">Primary</label>
        </div>
        <div class="form-check form-switch mb-2">
          <input
            id="switch-secondary"
            class="form-check-input form-checked-secondary"
            type="checkbox"
            role="switch"
            checked
          >
          <label class="form-check-label" for="switch-secondary">Secondary</label>
        </div>
        <div class="form-check form-switch mb-2">
          <input
            id="switch-warning"
            class="form-check-input form-checked-warning"
            type="checkbox"
            role="switch"
            checked
          >
          <label class="form-check-label" for="switch-warning">Warning</label>
        </div>
        <div class="form-check form-switch mb-2">
          <input
            id="switch-info"
            class="form-check-input form-checked-info"
            type="checkbox"
            role="switch"
            checked
          >
          <label class="form-check-label" for="switch-info">Info</label>
        </div>
        <div class="form-check form-switch mb-2">
          <input
            id="switch-success"
            class="form-check-input form-checked-success"
            type="checkbox"
            role="switch"
            checked
          >
          <label class="form-check-label" for="switch-success">Success</label>
        </div>
        <div class="form-check form-switch mb-2">
          <input
            id="switch-danger"
            class="form-check-input form-checked-danger"
            type="checkbox"
            role="switch"
            checked
          >
          <label class="form-check-label" for="switch-danger">Danger</label>
        </div>
        <div class="form-check form-switch mb-0">
          <input
            id="switch-dark"
            class="form-check-input form-checked-dark"
            type="checkbox"
            role="switch"
            checked
          >
          <label class="form-check-label" for="switch-dark">Dark</label>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-6 -->

  <!-- Start:: row-7 -->
  <div class="row">
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <ShowcodeCard :code="prism.toggleSwitchesStyle1" title="Toggle Switches Style-1">
        <div class="row gy-1">
          <div class="col-xl-4">
            <div class="d-flex gap-2">
              <ToggleSwitch
                custom-class="mb-3"
                main-class="d-flex gap-2"
                :is-on="true"
                title="primary"
              />
            </div>
          </div>
          <div class="col-xl-4">
            <ToggleSwitch
              custom-class="toggle-secondary mb-3"
              main-class="d-flex gap-2"
              :is-on="true"
              title="Secondary"
            />
          </div>
          <div class="col-xl-4">
            <ToggleSwitch
              custom-class="toggle-warning mb-3"
              main-class="d-flex gap-2"
              :is-on="true"
              title="Warning"
            />
          </div>
          <div class="col-xl-4">
            <ToggleSwitch
              custom-class="toggle-info mb-3"
              main-class="d-flex gap-2"
              :is-on="true"
              title="Info"
            />
          </div>
          <div class="col-xl-4">
            <ToggleSwitch
              custom-class="toggle-success mb-3"
              main-class="d-flex gap-2"
              :is-on="true"
              title="Info"
            />
          </div>
          <div class="col-xl-4">
            <ToggleSwitch
              custom-class="toggle-danger mb-3"
              main-class="d-flex gap-2"
              :is-on="true"
              title="Danger"
            />
          </div>
          <div class="col-xl-4">
            <ToggleSwitch
              custom-class="toggle-dark mb-3"
              main-class="d-flex gap-2"
              :is-on="true"
              title="Dark"
            />
          </div>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <ShowcodeCard :code="prism.toggleSwitchesStyle2" title="Toggle Switches Style-2">
        <div class="row gy-1">
          <div class="col-xl-4">
            <div class="custom-toggle-switch d-flex align-items-center mb-4">
              <input id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" checked>
              <label for="toggleswitchPrimary" class="label-primary" /><span class="ms-3">Primary</span>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="custom-toggle-switch d-flex align-items-center mb-4">
              <input id="toggleswitchSecondary" name="toggleswitch001" type="checkbox" checked>
              <label for="toggleswitchSecondary" class="label-secondary" /><span class="ms-3">Secondary</span>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="custom-toggle-switch d-flex align-items-center mb-4">
              <input id="toggleswitchWarning" name="toggleswitch001" type="checkbox" checked>
              <label for="toggleswitchWarning" class="label-warning" /><span class="ms-3">Warning</span>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="custom-toggle-switch d-flex align-items-center mb-4">
              <input id="toggleswitchInfo" name="toggleswitch001" type="checkbox" checked>
              <label for="toggleswitchInfo" class="label-info" /><span class="ms-3">Info</span>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="custom-toggle-switch d-flex align-items-center mb-4">
              <input id="toggleswitchSuccess" name="toggleswitch001" type="checkbox" checked>
              <label for="toggleswitchSuccess" class="label-success" /><span class="ms-3">Success</span>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="custom-toggle-switch d-flex align-items-center mb-4">
              <input id="toggleswitchDanger" name="toggleswitch001" type="checkbox" checked>
              <label for="toggleswitchDanger" class="label-danger" /><span class="ms-3">Danger</span>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="custom-toggle-switch d-flex align-items-center mb-4">
              <input id="toggleswitchLight" name="toggleswitch001" type="checkbox" checked>
              <label for="toggleswitchLight" class="label-light" /><span class="ms-3">Light</span>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="custom-toggle-switch d-flex align-items-center mb-4">
              <input id="toggleswitchDark" name="toggleswitch001" type="checkbox" checked>
              <label for="toggleswitchDark" class="label-dark" /><span class="ms-3">Dark</span>
            </div>
          </div>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-7 -->

  <!-- Start:: row-8 -->
  <div class="row">
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <ShowcodeCard :code="prism.ToggleSwitch1Sizes" title="Toggle Switch-1 Sizes">
        <div class="d-flex align-items-center flex-wrap mb-3">
          <div class="">
            <p class="text-muted m-0">
              Small size toggle switch <code>toggle-sm</code>
            </p>
          </div>
          <ToggleSwitch custom-class="toggle-sm mb-0" :is-on="true" />
        </div>
        <div class="d-flex align-items-center flex-wrap mb-3">
          <div class="">
            <p class="text-muted m-0">
              Default toggle switch <code />
            </p>
          </div>
          <ToggleSwitch custom-class="toggle-secondary mb-0" :is-on="true" />
        </div>
        <div class="d-flex align-items-center flex-wrap">
          <div class="">
            <p class="text-muted m-0">
              Large size toggle switch <code>toggle-lg</code>
            </p>
          </div>
          <ToggleSwitch custom-class="toggle-lg toggle-success mb-0" :is-on="true" />
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <ShowcodeCard :code="prism.ToggleSwitch2Sizes" title="Toggle Switch-2 Sizes">
        <div class="d-flex align-items-center flex-wrap mb-4">
          <div class="">
            <p class="text-muted m-0">
              Small size toggle switch <code>toggle-sm</code>
            </p>
          </div>
          <div class="custom-toggle-switch toggle-sm ms-2">
            <input id="size-sm" name="toggleswitchsize" type="checkbox" checked>
            <label for="size-sm" class="label-primary" />
          </div>
        </div>
        <div class="d-flex align-items-center flex-wrap mb-4">
          <div class="">
            <p class="text-muted m-0">
              Default toggle switch
            </p>
          </div>
          <div class="custom-toggle-switch ms-2">
            <input id="size-default" name="toggleswitchsize" type="checkbox" checked>
            <label for="size-default" class="label-secondary mb-1" />
          </div>
        </div>
        <div class="d-sm-flex d-block align-items-center flex-wrap">
          <div class="mb-sm-0 mb-2">
            <p class="text-muted m-0">
              Large size toggle switch <code>toggle-lg</code>
            </p>
          </div>
          <div class="custom-toggle-switch toggle-lg ms-sm-2 ms-0">
            <input id="size-lg" name="toggleswitchsize" type="checkbox" checked>
            <label for="size-lg" class="label-success mb-2" />
          </div>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-8 -->
</template>

<style scoped>
/* Add your styles here */
</style>
