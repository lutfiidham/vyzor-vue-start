<script setup lang="ts">
import { computed, ref } from 'vue'

// Define Props
interface Header {
  text: string
  thClass?: string
}

interface Row {
  id: string | number
  trClass?: string
  tdClass?: string
  checked?: boolean
}

const props = defineProps<{
  headers: Header[]
  rows: Row[]
  tableClass?: string
  theadClass?: string
  thClass?: string
  tbodyClass?: string
  trClass?: string | Record<string, boolean>
  tableReponsiveClass?: string
  showCheckbox?: boolean
  Customcheckclass?: string
  TdClass?: string
}>()

// State
const checkedItems = ref<Array<string | number>>(
  props.rows.filter(r => r.checked).map(r => r.id),
)

const isAllChecked = computed(() => {
  return props.rows.length > 0 && checkedItems.value.length === props.rows.length
})

function selectAllProducts(event: Event) {
  const isChecked = (event.target as HTMLInputElement).checked
  checkedItems.value = isChecked ? props.rows.map(r => r.id) : []
}
</script>

<template>
  <div class="table-responsive" :class="[tableReponsiveClass]">
    <table :class="tableClass">
      <thead :class="theadClass">
        <tr>
          <th v-if="showCheckbox" :class="Customcheckclass">
            <input
              id="checkboxNoLabel02"
              ref="checkall"
              class="form-check-input"
              type="checkbox"
              :checked="isAllChecked"
              @change="selectAllProducts"
            >
          </th>
          <th
            v-for="(header, index) in headers"
            :key="index"
            :class="header.thClass"
            v-html="header.text"
          />
        </tr>
      </thead>
      <tbody :class="tbodyClass">
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex" :class="row.trClass">
          <td v-if="showCheckbox" :class="`${row.tdClass} ${TdClass}`">
            <input
              v-model="checkedItems"
              class="form-check-input"
              type="checkbox"
              :value="row.id"
            >

            <!-- <input class="form-check-input" type="checkbox" ref="checkOption" :value="row.id" v-model="checkedItems" @change="checkFn" /> -->
          </td>
          <slot name="cell" :row="row" :index="rowIndex" />
        </tr>
      </tbody>
    </table>
  </div>
</template>
