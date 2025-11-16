<script setup>
import { Head } from '@inertiajs/vue3'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as prism from '@/shared/data/prismCode/ui-elements/pagination'
import ShowcodeCard from '../../../../../UI/showcodeCard.vue'

const dataToPass = {
  title: 'Ui Elements',
  currentpage: 'Pagination',
  activepage: 'Pagination',
}
</script>

<template>
  <Head title="Pagination | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xxl-6 col-xl-6">
      <ShowcodeCard title="Basic Pagination" :code="prism.BasicPagination">
        <nav aria-label="Page navigation">
          <ul class="pagination mb-0">
            <li class="page-item disabled">
              <a class="page-link" href="javascript:void(0);">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">Next</a>
            </li>
          </ul>
        </nav>
      </ShowcodeCard>
    </div>
    <div class="col-xxl-6 col-xl-6">
      <ShowcodeCard title="Pagination With Icons" :code="prism.PaginationWithIcons">
        <nav aria-label="Page navigation">
          <ul class="pagination mb-0">
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);" aria-label="Previous">
                <span aria-hidden="true"><i class="bx bx-chevron-left align-middle" /></span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);" aria-label="Next">
                <span aria-hidden="true"><i class="bx bx-chevron-right align-middle" /></span>
              </a>
            </li>
          </ul>
        </nav>
      </ShowcodeCard>
    </div>
    <div class="col-xxl-12 col-xl-12">
      <ShowcodeCard
        title="Pagination Sizing"
        custom-card-body-class="d-flex flex-wrap justify-content-between gap-2"
        :code="prism.PaginationSizing"
      >
        <nav aria-label="...">
          <ul class="pagination pagination-sm mb-0">
            <li class="page-item active" aria-current="page">
              <span class="page-link">1</span>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">3</a>
            </li>
          </ul>
        </nav>
        <nav aria-label="...">
          <ul class="pagination mb-0">
            <li class="page-item active" aria-current="page">
              <span class="page-link">1</span>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">3</a>
            </li>
          </ul>
        </nav>
        <nav aria-label="...">
          <ul class="pagination pagination-lg mb-0">
            <li class="page-item active" aria-current="page">
              <span class="page-link">1</span>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">3</a>
            </li>
          </ul>
        </nav>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2  -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard
        custom-card-body-class="overflow-x-scroll"
        title=" Center & Right Aligned Pagination"
        :code="prism.CenterRightAlignedPagination"
      >
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">Next</a>
            </li>
          </ul>
        </nav>
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-end mb-0">
            <li class="page-item disabled">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">Next</a>
            </li>
          </ul>
        </nav>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12">
      <ShowcodeCard
        title="Active and disabled states"
        custom-card-body-class="d-flex flex-wrap"
        :code="prism.ActiveAndDisabledStates"
      >
        <nav aria-label="..." class="me-3">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">1</a>
            </li>
            <li class="page-item active" aria-current="page">
              <a class="page-link" href="javascript:void(0);">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">Next</a>
            </li>
          </ul>
        </nav>
        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
              <span class="page-link">Previous</span>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">1</a>
            </li>
            <li class="page-item active" aria-current="page">
              <span class="page-link">2</span>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">Next</a>
            </li>
          </ul>
        </nav>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-2  -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard title="Pagination Style-1" :code="prism.PaginationStyle1">
        <nav aria-label="Page navigation" class="pagination-style-1">
          <ul class="pagination mb-0 flex-wrap">
            <li class="page-item disabled">
              <a class="page-link" href="javascript:void(0);">
                <i class="ri-arrow-left-s-line align-middle" />
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">1</a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="javascript:void(0);">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">
                <i class="bi bi-three-dots" />
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">21</a>
            </li>
            <li class="page-item">
              <a class="page-link custom-page" href="javascript:void(0);">
                <i class="ri-arrow-right-s-line align-middle" />
              </a>
            </li>
          </ul>
        </nav>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12">
      <ShowcodeCard title="Pagination Style-2" :code="prism.PaginationStyle2">
        <nav aria-label="Page navigation" class="pagination-style-2">
          <ul class="pagination mb-0 flex-wrap">
            <li class="page-item disabled">
              <a class="page-link" href="javascript:void(0);"> Prev </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="javascript:void(0);">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">
                <i class="bi bi-three-dots" />
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">17</a>
            </li>
            <li class="page-item">
              <a class="page-link text-primary" href="javascript:void(0);"> next </a>
            </li>
          </ul>
        </nav>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12">
      <ShowcodeCard title="Pagination Style-3" :code="prism.PaginationStyle3">
        <nav aria-label="Page navigation" class="pagination-style-3">
          <ul class="pagination mb-0 flex-wrap">
            <li class="page-item disabled">
              <a class="page-link" href="javascript:void(0);"> Prev </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="javascript:void(0);">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">
                <i class="bi bi-three-dots" />
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">16</a>
            </li>
            <li class="page-item">
              <a class="page-link text-primary" href="javascript:void(0);"> next </a>
            </li>
          </ul>
        </nav>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12">
      <ShowcodeCard title="Pagination Style-4" :code="prism.PaginationStyle4">
        <nav aria-label="Page navigation" class="pagination-style-4">
          <ul class="pagination mb-0 flex-wrap">
            <li class="page-item disabled">
              <a class="page-link" href="javascript:void(0);"> Prev </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="javascript:void(0);">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">
                <i class="bi bi-three-dots" />
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">16</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">17</a>
            </li>
            <li class="page-item">
              <a class="page-link text-primary" href="javascript:void(0);"> next </a>
            </li>
          </ul>
        </nav>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-3 -->
</template>

<style scoped>
/* Add your styles here */
</style>
