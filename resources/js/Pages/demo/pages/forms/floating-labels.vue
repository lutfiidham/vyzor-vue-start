<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as prism from '@/shared/data/prismCode/forms/float-labels'
import ShowcodeCard from '../../../../../UI/showcodeCard.vue'

const dataToPass = {
  title: 'Forms',
  currentpage: 'Floating labels',
  activepage: 'Floating labels',
}
</script>

<template>
  <Head title="Floating-Labels | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.basicExamples" title="Basic Examples">
        <div class="form-floating mb-3">
          <input
            id="floatingInput"
            type="email"
            class="form-control"
            placeholder="name@example.com"
          >
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            id="floatingPassword"
            type="password"
            class="form-control"
            placeholder="Password"
          >
          <label for="floatingPassword">Password</label>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.readonlyplaintext" title="Readonly plain text">
        <div class="readonly-float-text">
          <div class="form-floating mb-3">
            <input
              id="floatingEmptyPlaintextInput"
              type="email"
              readonly
              class="form-control-plaintext"
              placeholder="name@example.com"
            >
            <label for="floatingEmptyPlaintextInput">Empty input</label>
          </div>
          <div class="form-floating">
            <input
              id="floatingPlaintextInput"
              type="email"
              readonly
              class="form-control-plaintext"
              placeholder="name@example.com"
              value="name@example.com"
            >
            <label for="floatingPlaintextInput">Input with value</label>
          </div>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard
        :code="prism.floatingLabelsWithPreDefinedValues"
        title="Floating Labels With Pre Defined Values"
      >
        <form class="form-floating my-3">
          <input
            id="floatingInputValue"
            type="email"
            class="form-control"
            placeholder="name@example.com"
            value="test@example.com"
          >
          <label for="floatingInputValue">Input with value</label>
        </form>
        <form class="form-floatin">
          <input
            id="floatingInputInvalid"
            type="email"
            class="form-control is-invalid"
            placeholder="name@example.com"
            value="test@example.com"
          >
          <label for="floatingInputInvalid">Invalid input</label>
        </form>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.textareas" title="Textareas">
        <div class="form-floating mb-4">
          <textarea
            id="floatingTextarea"
            class="form-control"
            placeholder="Leave a comment here"
          />
          <label for="floatingTextarea">Description</label>
        </div>
        <div class="form-floating">
          <textarea
            id="floatingTextarea2"
            class="form-control"
            placeholder="Leave a comment here"
            rows="1"
            disabled
          />
          <label for="floatingTextarea2">Disabled</label>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.floatingLabelsInSelect" title="Floating Labels In Select">
        <div class="form-floating">
          <select
            id="floatingSelect"
            class="form-select"
            aria-label="Floating label select example"
          >
            <option selected>
              Open this select menu
            </option>
            <option value="1">
              One
            </option>
            <option value="2">
              Two
            </option>
            <option value="3">
              Three
            </option>
          </select>
          <label for="floatingSelect">Works with selects</label>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.floatingLabelsWithLayouts" title="Floating Labels With Layouts">
        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating">
              <input
                id="floatingInputGrid"
                type="email"
                class="form-control"
                placeholder="name@example.com"
                value="mdo@example.com"
              >
              <label for="floatingInputGrid">Email address</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating">
              <select id="floatingSelectGrid" class="form-select">
                <option selected>
                  Open this select menu
                </option>
                <option value="1">
                  One
                </option>
                <option value="2">
                  Two
                </option>
                <option value="3">
                  Three
                </option>
              </select>
              <label for="floatingSelectGrid">Works with selects</label>
            </div>
          </div>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-3 -->

  <!-- Start:: row-4 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.floatingLabelColors" title="Floating Label Colors">
        <div class="row gy-4">
          <div class="col-xl-4">
            <div class="form-floating mb-4 floating-primary">
              <input
                id="floatingInputprimary"
                type="email"
                class="form-control"
                placeholder="name@example.com"
              >
              <label for="floatingInputprimary">primary</label>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="form-floating mb-4 floating-secondary">
              <input
                id="floatingInputsecondary"
                type="email"
                class="form-control"
                placeholder="name@example.com"
              >
              <label for="floatingInputsecondary">secondary</label>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="form-floating mb-4 floating-warning">
              <input
                id="floatingInputwarning"
                type="email"
                class="form-control"
                placeholder="name@example.com"
              >
              <label for="floatingInputwarning">warning</label>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="form-floating mb-4 floating-info">
              <input
                id="floatingInputinfo"
                type="email"
                class="form-control"
                placeholder="name@example.com"
              >
              <label for="floatingInputinfo">info</label>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="form-floating mb-4 floating-success">
              <input
                id="floatingInputsuccess"
                type="email"
                class="form-control"
                placeholder="name@example.com"
              >
              <label for="floatingInputsuccess">success</label>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="form-floating mb-4 floating-danger">
              <input
                id="floatingInputdanger"
                type="email"
                class="form-control"
                placeholder="name@example.com"
              >
              <label for="floatingInputdanger">danger</label>
            </div>
          </div>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- Start:: row-4 -->
</template>

<style scoped>
/* Add your styles here */
</style>
