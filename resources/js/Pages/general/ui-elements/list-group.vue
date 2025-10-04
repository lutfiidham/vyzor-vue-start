<script setup>
import * as prism from '@/shared/data/prismCode/ui-elements/listgroup'
import * as listData from '@/shared/data/ui-elements/listgroup'
import Pageheader from '@/components/pageheader/pageheader.vue'
import ShowcodeCard from '../../../../UI/showcodeCard.vue'
import BaseImg from '../../../components/Baseimage/BaseImg.vue'
import { Head } from '@inertiajs/vue3'
const dataToPass = {
  title: 'Ui Elements',
  currentpage: 'List Group',
  activepage: 'List Group',
}
</script>

<template>
  <Head title="List-Group | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <ShowcodeCard title="Basic List" :code="prism.BasicList">
        <ul class="list-group">
          <li
            :class="`list-group-item ${idx.liclass}`"
            v-for="(idx, index) in listData.BasicButtons"
            :key="index"
          >
            <div class="d-flex align-items-center">
              <span class="avatar avatar-sm">
                <BaseImg :src="idx.src" alt="img" />
              </span>
              <div class="ms-2 fw-medium">
                {{ idx.text }}
              </div>
            </div>
          </li>
        </ul>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="Active items" :code="prism.ActiveItems">
        <ul class="list-group">
          <li
            :class="`list-group-item ${idx.class1} ${idx.liclass}`"
            v-for="(idx, index) in listData.ActiveButtons"
            :key="index"
          >
            <div class="d-flex align-items-center">
              <div>
                <span class="fs-15">
                  <i :class="idx.class"></i>
                </span>
              </div>
              <div class="ms-2">
                {{ idx.text }}
              </div>
            </div>
          </li>
        </ul>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="Disabled items" :code="prism.DisabledItems">
        <ul class="list-group">
          <li class="list-group-item disabled" aria-disabled="true">
            A disabled item meant to be disabled
          </li>
          <li class="list-group-item">Simply dummy text of the printing</li>
          <li class="list-group-item">There are many variations of passages</li>
          <li class="list-group-item">All the Lorem Ipsum generators</li>
          <li class="list-group-item">Written in 45 BC. This book is a treatise on the theory</li>
        </ul>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="Flush" :code="prism.flush">
        <ul class="list-group list-group-flush">
          <li class="list-group-item fw-medium">
            <i class="bi bi-envelope align-middle me-2 text-muted"></i>Asish Trivedhi<span
              class="ms-1 text-muted fw-normal d-inline-block"
              >(+1023-84534)</span
            >
          </li>
          <li class="list-group-item fw-medium">
            <i class="bi bi-tiktok align-middle me-2 text-muted"></i>Alezander Russo<span
              class="ms-1 text-muted fw-normal d-inline-block"
              >(+7546-12342)</span
            >
          </li>
          <li class="list-group-item fw-medium">
            <i class="bi bi-whatsapp align-middle me-2 text-muted"></i>Karem Smith<span
              class="ms-1 text-muted fw-normal d-inline-block"
              >(+9944-56632)</span
            >
          </li>
          <li class="list-group-item fw-medium">
            <i class="bi bi-facebook align-middle me-2 text-muted"></i>Melissa Brien<span
              class="ms-1 text-muted fw-normal d-inline-block"
              >(+1023-34323)</span
            >
          </li>
          <li class="list-group-item fw-medium">
            <i class="bi bi-instagram align-middle me-2 text-muted"></i>Kamala Harris<span
              class="ms-1 text-muted fw-normal d-inline-block"
              >(+91-63421)</span
            >
          </li>
        </ul>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="Links" :code="prism.links">
        <div class="list-group">
          <a
            href="javascript:void(0);"
            :class="`list-group-item list-group-item-action ${idx.class1} ${idx.liclass}`"
            aria-current="true"
            v-for="(idx, index) in listData.LinksButtons"
            :key="index"
          >
            <div class="d-flex align-items-center">
              <div>
                <span :class="`avatar avatar-xs bg-${idx.class} text-${idx.color} avatar-rounded`">
                  {{ idx.text1 }}
                </span>
              </div>
              <div class="ms-2">{{ idx.text }}</div>
            </div>
          </a>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="buttons" :code="prism.buttons">
        <div class="list-group">
          <button
            type="button"
            class="list-group-item list-group-item-action active"
            aria-current="true"
          >
            Simply dummy text of the printing<span class="badge float-end bg-primary">243</span>
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            There are many variations of passages<span
              class="badge float-end bg-secondary-transparent"
              >35</span
            >
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            All the Lorem Ipsum generators<span class="badge float-end bg-info-transparent"
              >132</span
            >
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            All the Lorem Ipsum generators<span class="badge float-end bg-success-transparent"
              >2525</span
            >
          </button>
          <button type="button" class="list-group-item list-group-item-action" disabled>
            A disabled item meant to be disabled<span class="badge float-end bg-danger-transparent"
              >21</span
            >
          </button>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-6">
      <ShowcodeCard title="Contextual classes" :code="prism.ContextualClasses">
        <ul class="list-group">
          <li
            :class="`list-group-item list-group-item-${idx.class} ${idx.liclass}`"
            v-for="(idx, index) in listData.ContextualButtons"
            :key="index"
          >
            {{ idx.text }}
          </li>
        </ul>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard
        title="Contextual classes with hover styles"
        :code="prism.ContextualClassesWithHoverStyles"
      >
        <div class="list-group">
          <a
            href="javascript:void(0);"
            :class="`list-group-item list-group-item-action list-group-item-${idx.class} ${idx.liclass}`"
            v-for="(idx, index) in listData.ContextualButtons"
            :key="index"
            >{{ idx.text }}</a
          >
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-6">
      <ShowcodeCard title="Solid Colored Lists" :code="prism.SolidColoredLists">
        <ul class="list-group">
          <li
            :class="`list-group-item list-item-solid-${idx.class} ${idx.class1}`"
            v-for="(idx, index) in listData.ContextualButtons"
            :key="index"
          >
            {{ idx.text }}
          </li>
        </ul>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="Custom content" :code="prism.CustomContent">
        <div class="list-group">
          <a
            href="javascript:void(0);"
            :class="`list-group-item list-group-item-action ${idx.class1} ${idx.liclass}`"
            aria-current="true"
            v-for="(idx, index) in listData.CustomButtons"
            :key="index"
          >
            <div class="d-sm-flex w-100 justify-content-between">
              <h6 :class="`mb-1 fw-medium ${idx.color}`">{{ idx.heading }}</h6>
              <small :class="idx.class2">{{ idx.text1 }}</small>
            </div>
            <p class="mb-1">{{ idx.text2 }}</p>
            <small :class="`${idx.id === 1 ? '' : 'text-muted'}`">{{ idx.text3 }}.</small>
          </a>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-3 -->

  <!-- Start:: row-4 -->
  <div class="row">
    <div class="col-xl-6">
      <ShowcodeCard title="Sub headings" :code="prism.SubHeadings">
        <ol class="list-group list-group-numbered">
          <li
            :class="`list-group-item d-sm-flex justify-content-between align-items-start ${idx.liclass}`"
            v-for="(idx, index) in listData.SubheadingsButtons"
            :key="index"
          >
            <div class="ms-2 me-auto text-muted">
              <div class="fw-medium fs-14 text-default">{{ idx.text1 }}</div>
              {{ idx.text2 }}
            </div>
            <span :class="`badge bg-${idx.class}`">{{ idx.text3 }}</span>
          </li>
        </ol>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="Numbered Lists" :code="prism.NumberedLists">
        <ol class="list-group list-group-numbered">
          <li class="list-group-item">Simply dummy text of the printing.</li>
          <li class="list-group-item">There are many variations of passages.</li>
          <li class="list-group-item">All the Lorem Ipsum generators.</li>
          <li class="list-group-item">Written in 45 BC. This book is a treatise on the theory.</li>
          <li class="list-group-item">Randomised words which don't look.</li>
          <li class="list-group-item">Always free from repetition, injected humour.</li>
        </ol>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="List With Checkboxes" :code="prism.ListWithCheckboxes">
        <ul class="list-group">
          <li class="list-group-item">
            <input
              class="form-check-input me-1 fw-medium"
              type="checkbox"
              value=""
              aria-label="..."
              checked
            />
            Accurate information at any given point.
          </li>
          <li class="list-group-item">
            <input
              class="form-check-input me-1 fw-medium"
              type="checkbox"
              value=""
              aria-label="..."
            />
            Hearing the information and responding.
          </li>
          <li class="list-group-item">
            <input
              class="form-check-input me-1 fw-medium"
              type="checkbox"
              value=""
              aria-label="..."
              checked
            />
            Setting up and customizing your own sales.
          </li>
          <li class="list-group-item">
            <input
              class="form-check-input me-1 fw-medium"
              type="checkbox"
              value=""
              aria-label="..."
              checked
            />
            New Admin Launched.
          </li>
          <li class="list-group-item">
            <input
              class="form-check-input me-1 fw-medium"
              type="checkbox"
              value=""
              aria-label="..."
            />
            To maximize profits and improve productivity.
          </li>
          <li class="list-group-item">
            <input
              class="form-check-input me-1 fw-medium"
              type="checkbox"
              value=""
              aria-label="..."
            />
            To have a complete 360° overview of sales information, having.
          </li>
        </ul>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="List With Radios" :code="prism.ListWithRadios">
        <div class="list-group">
          <label class="list-group-item">
            <input class="form-check-input me-1" type="radio" value="" name="list-radio" checked />
            Accurate information at any given point.
          </label>
          <label class="list-group-item">
            <input class="form-check-input me-1" type="radio" value="" name="list-radio" checked />
            Hearing the information and responding.
          </label>
          <label class="list-group-item">
            <input class="form-check-input me-1" type="radio" value="" name="list-radio" checked />
            Setting up and customizing your own sales.
          </label>
          <label class="list-group-item">
            <input class="form-check-input me-1" type="radio" value="" name="list-radio" />
            New Admin Launched.
          </label>
          <label class="list-group-item">
            <input class="form-check-input me-1" type="radio" value="" name="list-radio" />
            To maximize profits and improve productivity.
          </label>
          <label class="list-group-item">
            <input class="form-check-input me-1" type="radio" value="" name="list-radio" />
            To have a complete 360° overview of sales information, having.
          </label>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="List With badges" :code="prism.ListWithBadges">
        <ul class="list-group">
          <li
            :class="`list-group-item d-flex justify-content-between align-items-center fw-medium ${idx.liclass}`"
            v-for="(idx, index) in listData.ListbadgesButtons"
            :key="index"
          >
            {{ idx.text1 }}
            <span :class="`badge bg-${idx.class} ${idx.color}`">{{ idx.text2 }}</span>
          </li>
        </ul>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard title="Horizontal" :code="prism.Horizontal">
        <ul
          :class="`mb-3 list-group list-group-horizontal${idx.class}`"
          v-for="(idx, index) in listData.HorizontalButtons"
          :key="index"
        >
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-4 -->
</template>

<style scoped>
/* Add your styles here */
</style>
