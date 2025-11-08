<script setup>
import { ref } from 'vue'
import { headers, items } from '@/shared/data/datatables.js'
import Pageheader from '@/components/pageheader/pageheader.vue'
import SimpleCard from '@/shared/@spk/simple-card.vue'
import { Head } from '@inertiajs/vue3'
const dataToPass = {
  title: 'Tables',
  currentpage: 'Data tables',
  activepage: 'Data Tables',
}
let searchValue = ref('')
let searchValue1 = ref('')
let searchValue2 = ref('')
let searchValue3 = ref('')
</script>

<template>
  <Head title="Data-Tables | Vyzor - Laravel & Vue " />
  <Pageheader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <SimpleCard title="Basic Datatable">
        <label class="mb-3">
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="searchValue"
            placeholder="Search value"
          />
        </label>
        <EasyDataTable
          class="table text-nowrap"
          :headers="headers"
          :items="items"
          :search-value="searchValue"
          border-cell
          :rowsPerPage="5"
          :rowsItems="[5, 10, 25, 50, 100]"
        />
      </SimpleCard>
    </div>
  </div>
  <!--End::row-1 -->

  <!-- Start:: row-2 -->
  <div class="row custom-button-table">
    <div class="col-xl-12">
      <SimpleCard title="Buttons pagination">
        <label class="mb-3">
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="searchValue1"
            placeholder="Search value"
          />
        </label>
        <EasyDataTable
          class="table text-nowrap"
          :search-value="searchValue1"
          :headers="headers"
          :items="items"
          border-cell
          buttons-pagination
          :rowsPerPage="5"
          :rowsItems="[5, 10, 25, 50, 100]"
        />
      </SimpleCard>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-12">
      <SimpleCard title=" Show Index">
        <label class="mb-3">
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="searchValue2"
            placeholder="Search value"
          />
        </label>
        <EasyDataTable
          class="table text-nowrap"
          :headers="headers"
          :items="items"
          border-cell
          show-index
          :search-value="searchValue2"
          :rowsPerPage="10"
          :rowsItems="[5, 10, 25, 50, 100]"
        />
      </SimpleCard>
    </div>
  </div>
  <!-- End:: row-3 -->

  <!-- Start:: row-4 -->
  <div class="row">
    <div class="col-xl-12">
      <SimpleCard title="Expandable row">
        <label class="mb-3">
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="searchValue3"
            placeholder="Search value"
          />
        </label>
        <EasyDataTable
          class="table text-nowrap"
          :search-value="searchValue3"
          :headers="headers"
          :items="items"
          border-cell
          :rowsPerPage="5"
          :rowsItems="[5, 10, 25, 50, 100]"
        >
          <template #expand="item">
            <div style="padding: 15px">Additional Details of {{ item.name }}</div>
          </template>
        </EasyDataTable>
      </SimpleCard>
    </div>
  </div>
  <!-- End:: row-4 -->

  <!-- Start:: row-5 -->
  <div class="row">
    <div class="col-xl-12">
      <SimpleCard title="Custom Empty message">
        <div class="deleted-table table-responsive">
          <EasyDataTable
            class="table text-nowrap"
            :headers="headers"
            :items="[]"
            border-cell
            :rowsPerPage="5"
            :rowsItems="[5, 10, 25, 50, 100]"
          >
            <template #empty-message>
              <a href="#!">There was nothing to Show.</a>
            </template>
          </EasyDataTable>
        </div>
      </SimpleCard>
    </div>
  </div>
  <!-- End:: row-5 -->
</template>

<style scoped>
/* Add your styles here */
</style>
