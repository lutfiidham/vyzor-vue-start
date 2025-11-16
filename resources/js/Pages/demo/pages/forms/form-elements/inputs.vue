<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as prism from '@/shared/data/prismCode/forms/formelements/inputs'
import ShowcodeCard from '../../../../../../UI/showcodeCard.vue'

const dataToPass = {
  title: 'Forms',
  subtitle: 'Form Elements',
  currentpage: 'Inputs',
  activepage: 'Inputs',
}
</script>

<template>
  <Head title="Inputs | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.inputTypes" title="Input Types">
        <div class="row gy-4">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-label" class="form-label">Basic Input:</label>
            <input id="input" type="text" class="form-control">
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-label" class="form-label">Form Input With Label</label>
            <input id="input-label" type="text" class="form-control">
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-placeholder" class="form-label">Form Input With Placeholder</label>
            <input
              id="input-placeholder"
              type="text"
              class="form-control"
              placeholder="Placeholder"
            >
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-text" class="form-label">Type Text</label>
            <input id="input-text" type="text" class="form-control" placeholder="Text">
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-number" class="form-label">Type Number</label>
            <input id="input-number" type="number" class="form-control" placeholder="Number">
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-password" class="form-label">Type Password</label>
            <input
              id="input-password"
              type="password"
              class="form-control"
              placeholder="Password"
            >
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-email" class="form-label">Type Email</label>
            <input id="input-email" type="email" class="form-control" placeholder="Email@xyz.com">
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-tel" class="form-label">Type Tel</label>
            <input id="input-tel" type="tel" class="form-control" placeholder="+1100-2031-1233">
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-date" class="form-label">Type Date</label>
            <input id="input-date" type="date" class="form-control">
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-week" class="form-label">Type Week</label>
            <input id="input-week" type="week" class="form-control">
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-month" class="form-label">Type Month</label>
            <input id="input-month" type="month" class="form-control">
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-time" class="form-label">Type Time</label>
            <input id="input-time" type="time" class="form-control">
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-datetime-local" class="form-label">Type datetime-local</label>
            <input id="input-datetime-local" type="datetime-local" class="form-control">
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-search" class="form-label">Type Search</label>
            <input id="input-search" type="search" class="form-control" placeholder="Search">
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-submit" class="form-label">Type Submit</label>
            <input id="input-submit" type="submit" class="form-control" value="Submit">
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-reset" class="form-label">Type Reset</label>
            <input id="input-reset" type="reset" class="form-control">
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-button" class="form-label">Type Button</label>
            <input
              id="input-button"
              type="button"
              class="form-control btn btn-primary"
              value="Button"
            >
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="row gap-2 gap-xl-0">
              <div class="col-xl-3">
                <label class="form-label">Type Color</label>
                <input class="form-control form-input-color" type="color" value="#136bd0">
              </div>
              <div class="col-xl-5">
                <div class="form-check ps-xl-3 ps-0">
                  <p class="mb-3 px-0 text-muted">
                    Type Checkbox
                  </p>
                  <input class="form-check-input ms-2" type="checkbox" value="" checked="">
                </div>
              </div>
              <div class="col-xl-4">
                <div class="form-check ps-xl-3 ps-0">
                  <p class="mb-3 px-0 text-muted">
                    Type Radio
                  </p>
                  <input class="form-check-input ms-2" type="radio" checked="">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-file" class="form-label">Type File</label>
            <input id="input-file" class="form-control" type="file">
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label class="form-label">Type Url</label>
            <input
              class="form-control"
              type="url"
              name="website"
              placeholder="http://example.com"
            >
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-disabled" class="form-label">Type Disabled</label>
            <input
              id="input-disabled"
              type="text"
              class="form-control"
              placeholder="Disabled input"
              disabled=""
            >
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-readonlytext" class="form-label">Input Readonly Text</label>
            <input
              id="input-readonlytext"
              type="text"
              readonly=""
              class="form-control-plaintext"
              value="email@example.com"
            >
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="disabled-readonlytext" class="form-label">Disabled Readonly Input</label>
            <input
              id="disabled-readonlytext"
              class="form-control"
              type="text"
              value="Disabled readonly input"
              aria-label="Disabled input example"
              disabled=""
              readonly=""
            >
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label class="form-label">Type Readonly Input</label>
            <input
              class="form-control"
              type="text"
              value="Readonly input here..."
              aria-label="readonly input example"
              readonly=""
            >
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="text-area" class="form-label">Textarea</label>
            <textarea id="text-area" class="form-control" rows="1" />
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <label for="input-DataList" class="form-label">Datalist example</label>
            <input
              id="input-DataList"
              class="form-control"
              list="datalistOptions"
              placeholder="Type to search..."
            >
            <datalist id="datalistOptions">
              <option value="San Francisco" />
              <option value="New York" />
              <option value="Seattle" />
              <option value="Los Angeles" />
              <option value="Chicago" />
            </datalist>
          </div>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.inputShapes" title="Input shapes">
        <div class="row gy-3">
          <div class="col-xl-12">
            <label for="input-noradius" class="form-label">Input With No Radius</label>
            <input
              id="input-noradius"
              type="text"
              class="form-control rounded-0"
              placeholder="No Radius"
            >
          </div>
          <div class="col-xl-12">
            <label for="input-rounded" class="form-label">Input With Radius</label>
            <input
              id="input-rounded"
              type="text"
              class="form-control"
              placeholder="Default Radius"
            >
          </div>
          <div class="col-xl-12">
            <label for="input-rounded-pill" class="form-label">Rounded Input</label>
            <input
              id="input-rounded-pill"
              type="text"
              class="form-control rounded-pill"
              placeholder="Rounded"
            >
          </div>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.inputBorderStyles" title="Input border Styles">
        <div class="row gy-3">
          <div class="col-xl-12">
            <label for="input-rounded1" class="form-label">Default</label>
            <input id="input-rounded1" type="text" class="form-control" placeholder="Default">
          </div>
          <div class="col-xl-12">
            <label for="input-rounded2" class="form-label">Dotted Input</label>
            <input
              id="input-rounded2"
              type="text"
              class="form-control border-dotted"
              placeholder="Dotted"
            >
          </div>
          <div class="col-xl-12">
            <label for="input-rounded3" class="form-label">Dashed Input</label>
            <input
              id="input-rounded3"
              type="text"
              class="form-control border-dashed"
              placeholder="Dashed"
            >
          </div>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.inputSizing" title="Input Sizing">
        <input
          class="form-control form-control-sm mb-3"
          type="text"
          placeholder=".form-control-sm"
          aria-label=".form-control-sm example"
        >
        <input
          class="form-control mb-3"
          type="text"
          placeholder="Default input"
          aria-label="default input example"
        >
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder=".form-control-lg"
          aria-label=".form-control-lg example"
        >
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-3 -->

  <!-- ROW-START -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.overview" title="Overview">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input
              id="exampleInputEmail1"
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
            >
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input id="exampleInputPassword1" type="password" class="form-control">
          </div>
          <div class="mb-3 form-check">
            <input id="exampleCheck1" type="checkbox" class="form-check-input">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12">
      <div class="row">
        <div class="col-xl-12">
          <ShowcodeCard :code="prism.formtext" title="Form text">
            <label for="inputPassword5" class="form-label">Password</label>
            <input
              id="inputPassword5"
              type="password"
              class="form-control"
              aria-describedby="passwordHelpBlock"
            >
            <div id="passwordHelpBlock" class="form-text">
              Your password must be 8-20 characters long, contain letters and numbers, and must not
              contain spaces, special characters, or emoji.
            </div>
          </ShowcodeCard>
        </div>
        <div class="col-xl-12">
          <ShowcodeCard
            :code="prism.inlineText"
            title="Inline text can use any typical inline HTML element with nothing more
                                    than
                                    the <span class='text-danger'>.form-text</span> class."
          >
            <div class="row g-3 align-items-center">
              <div class="col-auto">
                <label for="inputPassword6" class="col-form-label">Password</label>
              </div>
              <div class="col-auto">
                <input
                  id="inputPassword6"
                  type="password"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                >
              </div>
              <div class="col-auto">
                <span id="passwordHelpInline" class="form-text">
                  Must be 8-20 characters long.
                </span>
              </div>
            </div>
          </ShowcodeCard>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.disabledForms" title="Disabled forms">
        <form>
          <fieldset disabled="">
            <legend>Disabled fieldset example</legend>
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">Disabled input</label>
              <input
                id="disabledTextInput"
                type="text"
                class="form-control"
                placeholder="Disabled input"
              >
            </div>
            <div class="mb-3">
              <label for="disabledSelect" class="form-label">Disabled select menu</label>
              <select id="disabledSelect" class="form-select">
                <option>Disabled select</option>
              </select>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input
                  id="disabledFieldsetCheck"
                  class="form-check-input"
                  type="checkbox"
                  disabled=""
                >
                <label class="form-check-label" for="disabledFieldsetCheck">
                  Can't check this
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>
      </ShowcodeCard>
    </div>
  </div>
  <!-- ROW-END -->
</template>

<style scoped>
/* Add your styles here */
</style>
