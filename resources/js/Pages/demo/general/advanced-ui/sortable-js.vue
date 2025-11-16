<script setup>
import { Head } from '@inertiajs/vue3'
import { computed, defineAsyncComponent, ref } from 'vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import {
  Drag1,
  Drag2,
  Drag3,
  Drag4,
  Drag5,
  Drag6,
  Drag7,
  Drag8,
  Drag9,
  Drag10,
  Drag11,
  sortlist,
  tasks,
} from '@/shared/data/sortable'

const Sortable = defineAsyncComponent(() => import('sortablejs-vue3').then(m => m.Sortable))

const item = ref(tasks)
const item1 = ref(Drag1)
const item2 = ref(Drag2)
const cloneItem1 = ref(Drag8)
const cloneItem2 = ref(Drag9)
const disableItem1 = ref(Drag10)
const disableItem2 = ref(Drag3)
const sortList = ref(sortlist)
const sortFilter = ref(Drag4)
const GridSort = ref(Drag7)
const NestedSort = ref(Drag11)
const multiDrag = ref(Drag5)
const swapDrag = ref(Drag6)
const sortableOptionGroup = ref({
  group: 'shared', // Both lists share the same group
})
const sortableOptionGroupClone = ref({
  group: {
    name: 'shared',
    pull: 'clone',
  }, // Both lists share the same group
})
const sortableOptionGroupDisable = ref({
  disabled: true,
  group: {
    name: 'shared',
    pull: 'clone',
    put: false,
  }, // Both lists share the same group
})

const sortableOptionhandle = ref({
  handle: '.handle',
  group: {
    name: 'shared',
    pull: 'clone',
  }, // Both lists share the same group
})

const options = ref({
  group: 'shared', // Share sorting between lists
  draggable: '.draggable', // Make elements with class 'draggable' draggable
})
const Netsedsortable = ref(null)
function logEvent(evt, evt2) {
  if (evt2) {
    console.log(evt, evt2)
  }
  else {
    console.log(evt)
  }
}

function logClick(evt) {
  if (Netsedsortable.value?.isDragging)
    return
  logEvent(evt)
}
const nestedOptions = computed(() => {
  return {
    draggable: '.draggable',
    animation: 150,
    ghostClass: 'ghost',
    dragClass: 'drag',
    scroll: true,
    forceFallback: true,
    bubbleScroll: true,
  }
})
const multiuDragOptions = computed(() => {
  return {
    animation: 150,
    ghostClass: 'ghost',
    dragClass: 'drag',
    multiDrag: true,
    fallbackTolerance: 3,
  }
})

const dataToPass = {
  title: 'Advanced Ui',
  currentpage: 'Sortable JS',
  activepage: 'Sortable JS',
}
</script>

<template>
  <Head title="Sortable | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-4">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            SIMPLE LIST
          </div>
        </div>
        <div class="card-body">
          <ol id="simple-list" class="list-group sortable-list list-group-numbered">
            <Sortable :list="item" item-key="id">
              <template #item="{ element }">
                <li class="list-group-item">
                  {{ element.name }}
                </li>
              </template>
            </Sortable>
          </ol>
        </div>
      </div>
    </div>
    <div class="col-xl-8">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            SHARED LISTS
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-xl-6">
              <ol id="shared-left" class="list-group sortable-list list-group-numbered">
                <Sortable :list="item1" item-key="id" :options="sortableOptionGroup">
                  <template #item="{ element }">
                    <li class="list-group-item">
                      {{ element.name }}
                    </li>
                  </template>
                </Sortable>
              </ol>
            </div>
            <div class="col-xl-6">
              <ol id="shared-right" class="list-group sortable-list list-group-numbered">
                <Sortable :list="item2" item-key="id" :options="sortableOptionGroup">
                  <template #item="{ element }">
                    <li class="list-group-item">
                      {{ element.name }}
                    </li>
                  </template>
                </Sortable>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            CLONING
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-xl-6">
              <ul id="cloning-left" class="list-group sortable-list">
                <Sortable :list="cloneItem1" item-key="id" :options="sortableOptionGroupClone">
                  <template #item="{ element }">
                    <li class="list-group-item">
                      {{ element.name }}
                    </li>
                  </template>
                </Sortable>
              </ul>
            </div>
            <div class="col-xl-6">
              <ul id="cloning-right" class="list-group sortable-list">
                <Sortable :list="cloneItem2" item-key="id" :options="sortableOptionGroupClone">
                  <template #item="{ element }">
                    <li class="list-group-item">
                      {{ element.name }}
                    </li>
                  </template>
                </Sortable>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            DISABLING SORTING
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-xl-6">
              <ul id="disabling-sorting-left" class="list-group sortable-list">
                <Sortable :list="disableItem1" item-key="id" :options="sortableOptionGroupDisable">
                  <template #item="{ element }">
                    <li class="list-group-item">
                      {{ element.name }}
                    </li>
                  </template>
                </Sortable>
              </ul>
            </div>
            <div class="col-xl-6">
              <ul id="disabling-sorting-right" class="list-group sortable-list">
                <Sortable :list="disableItem2" item-key="id" :options="sortableOptionGroupDisable">
                  <template #item="{ element }">
                    <li class="list-group-item">
                      {{ element.name }}
                    </li>
                  </template>
                </Sortable>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            SORTING WITH HANDLE
          </div>
        </div>
        <div class="card-body">
          <ol id="sorting-with-handle" class="list-group sortable-list list-item-numbered">
            <Sortable
              :list="sortList"
              item-key="id"
              handle=".handle"
              :options="sortableOptionhandle"
            >
              <template #item="{ element }">
                <li class="list-group-item">
                  <!-- The handle will be used to drag the item -->
                  <i class="ri-drag-move-2-fill me-2 text-dark fs-16 handle lh-1" />
                  {{ element.text }}
                </li>
              </template>
            </Sortable>
          </ol>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            SORTING WITH FILTER
          </div>
        </div>
        <div class="card-body">
          <ul id="sorting-with-filter" class="list-group sortable-list">
            <Sortable :list="sortFilter" item-key="id" filter=".addImageButtonContainer">
              <template #item="{ element }">
                <li :class="`list-group-item ${element.filter}`">
                  {{ element.name }}
                </li>
              </template>
            </Sortable>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-3 -->

  <!-- Start:: row-4 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            SORTABLE GRID
          </div>
        </div>
        <div id="sortable-grid" class="card-body">
          <Sortable :list="GridSort" item-key="id" filter=".addImageButtonContainer">
            <template #item="{ element }">
              <div class="grid-square">
                <span class="fw-medium">{{ element.name }}</span>
              </div>
            </template>
          </Sortable>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-4 -->

  <!-- Start:: row-5 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            NESTED SORTABLE
          </div>
        </div>
        <div class="card-body">
          <div id="nestedSortables" class="list-group col nested-sortable">
            <Sortable
              :list="NestedSort"
              item-key="id"
              :options="nestedOptions"
              @change="logEvent"
              @choose="logEvent"
              ref="sortable"
              @unchoose="logEvent"
              @start="logEvent"
              @end="logEvent"
              @add="logEvent"
              @update="logEvent"
              @sort="logEvent"
              @remove="logEvent"
              @filter="logEvent"
              @move="logEvent"
              @clone="logEvent"
            >
              <template #item="{ element, index }">
                <div
                  :key="element.id"
                  :class="`draggable list-group-item ${element ? 'nested-1' : ''}`"
                  @click="logClick"
                >
                  {{ element.text }}
                  <div class="list-group nested-sortable">
                    <Sortable
                      v-if="element.children"
                      :list="element.children"
                      :item-key="(item) => item.id"
                      :options="nestedOptions"
                      @change="logEvent"
                      @choose="logEvent"
                      @unchoose="logEvent"
                      @start="logEvent"
                      @end="logEvent"
                      @add="logEvent"
                      @update="logEvent"
                      @sort="logEvent"
                      @remove="logEvent"
                      @filter="logEvent"
                      @move="logEvent"
                      @clone="logEvent"
                    >
                      <template #item="{ element, index }">
                        <div
                          :key="element.id"
                          :class="`draggable list-group-item ${element.children ? 'nested-2' : ''} nested-2`"
                        >
                          {{ element.text }}
                          <div class="list-group nested-sortable">
                            <Sortable
                              v-if="element.children"
                              :list="element.children"
                              :item-key="(item) => item.id"
                              :options="nestedOptions"
                              @change="logEvent"
                              @choose="logEvent"
                              @unchoose="logEvent"
                              @start="logEvent"
                              @end="logEvent"
                              @add="logEvent"
                              @update="logEvent"
                              @sort="logEvent"
                              @remove="logEvent"
                              @filter="logEvent"
                              @move="logEvent"
                              @clone="logEvent"
                            >
                              <template #item="{ element, index }">
                                <div
                                  :key="element.id"
                                  :class="`draggable list-group-item ${element.children ? 'nested-3' : ''} nested-3`"
                                >
                                  {{ element.text }}
                                </div>
                              </template>
                            </Sortable>
                          </div>
                        </div>
                      </template>
                    </Sortable>
                  </div>
                </div>
              </template>
            </Sortable>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">
                MULTIPLE DRAG
              </div>
            </div>
            <div class="card-body">
              <ul id="multiple-drag" class="list-group sortable-list">
                <Sortable
                  :list="multiDrag"
                  item-key="id"
                  filter=".addImageButtonContainer"
                  :options="multiuDragOptions"
                >
                  <template #item="{ element }">
                    <li class="list-group-item">
                      {{ element.name }}
                    </li>
                  </template>
                </Sortable>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div class="card-title">
                SWAP
              </div>
            </div>
            <div class="card-body">
              <ul id="sortable-swap" class="list-group sortable-list">
                <Sortable
                  :list="swapDrag"
                  item-key="id"
                  filter=".addImageButtonContainer"
                  drag-class="darg"
                  :swap="true"
                >
                  <template #item="{ element }">
                    <li class="list-group-item">
                      {{ element.name }}
                    </li>
                  </template>
                </Sortable>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-5 -->
</template>

<style scoped>
/* Add your styles here */
</style>
