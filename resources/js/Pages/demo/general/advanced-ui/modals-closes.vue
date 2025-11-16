<script setup>
import { Head } from '@inertiajs/vue3'
import * as bootstrap from 'bootstrap'
import { onBeforeUnmount, onMounted } from 'vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import * as prism from '@/shared/data/prismCode/advancedUi/modals'
import ShowcodeCard from '../../../../../UI/showcodeCard.vue'

let popoverInstances = []
let tooltipInstances = []

onMounted(() => {
  // --- Tooltips ---
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  tooltipTriggerList.forEach(el => {
    const existingTooltip = bootstrap.Tooltip.getInstance(el)
    if (existingTooltip)
      existingTooltip.dispose()

    const tooltip = new bootstrap.Tooltip(el, {
      animation: true,
      trigger: 'hover', // You can change this to 'focus', etc.
    })

    tooltipInstances.push(tooltip)
  })

  // --- Popovers ---
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  popoverTriggerList.forEach(el => {
    const existingPopover = bootstrap.Popover.getInstance(el)
    if (existingPopover)
      existingPopover.dispose()

    const popover = new bootstrap.Popover(el, {
      animation: true,
      trigger: 'click', // 'hover', 'focus', or 'manual' also work
      placement: 'top',
      html: true, // Enable if you're using HTML in content/title
    })

    popoverInstances.push(popover)
  })
})

onBeforeUnmount(() => {
  tooltipInstances.forEach(t => t.dispose())
  tooltipInstances = []

  popoverInstances.forEach(p => p.dispose())
  popoverInstances = []
})

const dataToPass = {
  title: 'Advanced UI',
  currentpage: 'Modals & Closes',
  activepage: 'Modals & Closes',
}

onMounted(() => {
  const exampleModal = document.getElementById('formmodal')
  exampleModal.addEventListener('show.bs.modal', (event) => {
    const button = event.relatedTarget
    const recipient = button.getAttribute('data-bs-whatever') || ''
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')
    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
})
</script>

<template>
  <Head title="Modals-Closes | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <ShowcodeCard :code="prism.basicModal" title="Basic Modal">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
        <div id="exampleModal" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="exampleModalLabel1" class="modal-title">
                  Modal title
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                ....
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard :code="prism.staticBackdrop" title="Static backdrop">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Launch static backdrop modal
        </button>
        <div
          id="staticBackdrop"
          class="modal fade"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="staticBackdropLabel" class="modal-title">
                  Modal title
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                <p>I will not close if you click outside me. Don't even try to press escape key.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard :code="prism.scrollingLongContent" title="Scrolling long content">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalScrollable"
        >
          Scrolling long content
        </button>
        <div
          id="exampleModalScrollable"
          class="modal fade"
          tabindex="-1"
          aria-labelledby="exampleModalScrollable"
          data-bs-keyboard="false"
        >
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="staticBackdropLabel1" class="modal-title">
                  Modal title
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsum quasi,
                  error quibusdam debitis maiores hic eum? Vitae nisi ipsa maiores fugiat deleniti
                  quis reiciendis veritatis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptatibus, ipsam
                  quo est rerum modi quos expedita facere, ex tempore fuga similique ipsa blanditiis
                  et accusamus temporibus commodi voluptas! Nobis veniam illo architecto expedita
                  quam ratione quaerat omnis. In, recusandae eos! Pariatur, deleniti quis ad nemo
                  ipsam officia temporibus, doloribus fuga asperiores ratione distinctio velit alias
                  hic modi praesentium aperiam officiis eaque, accusamus aut. Accusantium assumenda,
                  commodi nulla provident asperiores fugit inventore iste amet aut placeat
                  consequatur reprehenderit. Ratione tenetur eligendi, quis aperiam dolores magni
                  iusto distinctio voluptatibus minus a unde at! Consequatur voluptatum in eaque
                  obcaecati, impedit accusantium ea soluta, excepturi, quasi quia commodi
                  blanditiis? Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                  consequuntur quod quo veniam? Labore dignissimos reiciendis accusamus recusandae
                  est consequuntur iure.
                </p>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard :code="prism.tooltipsAndPopovers" title="Tooltips and popovers">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalScrollable4"
        >
          Launch demo modal
        </button>
        <div
          id="exampleModalScrollable4"
          class="modal fade"
          tabindex="-1"
          aria-labelledby="exampleModalScrollable4"
          data-bs-keyboard="false"
        >
          <!-- Scrollable modal -->
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="staticBackdropLabel4" class="modal-title">
                  Modal title
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                <h5>Popover in a modal</h5>
                <p>
                  This
                  <a
                    href="javascript:void(0);"
                    role="button"
                    class="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Popover title"
                    data-bs-content="Popover body content is set in this attribute."
                  >button</a>
                  triggers a popover on click.
                </p>
                <hr>
                <h5>Tooltips in a modal</h5>
                <p>
                  <span
                    href="javascript:void(0);"
                    class="text-primary"
                    data-bs-toggle="tooltip"
                    title="Tooltip"
                  >This link</span>
                  and
                  <a
                    href="javascript:void(0);"
                    class="text-primary"
                    data-bs-toggle="tooltip"
                    title="Tooltip"
                  >that link</a>
                  have tooltips on hover.
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard :code="prism.verticalCenteredScrollable" title="Vertical Centered Scrollable">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalScrollable3"
        >
          Vertically centered scrollable modal
        </button>
        <div
          id="exampleModalScrollable3"
          class="modal fade"
          tabindex="-1"
          aria-labelledby="exampleModalScrollable3"
          data-bs-keyboard="false"
        >
          <!-- Scrollable modal -->
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="staticBackdropLabel3" class="modal-title">
                  Modal title
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptatibus, ipsam
                  quo est rerum modi quos expedita facere, ex tempore fuga similique ipsa blanditiis
                  et accusamus temporibus commodi voluptas! Nobis veniam illo architecto expedita
                  quam ratione quaerat omnis. In, recusandae eos! Pariatur, deleniti quis ad nemo
                  ipsam officia temporibus, doloribus fuga asperiores ratione distinctio velit alias
                  hic modi praesentium aperiam officiis eaque, accusamus aut. Accusantium assumenda,
                  commodi nulla provident asperiores fugit inventore iste amet aut placeat
                  consequatur reprehenderit. Ratione tenetur eligendi, quis aperiam dolores magni
                  iusto distinctio voluptatibus minus a unde at! Consequatur voluptatum in eaque
                  obcaecati, impedit accusantium ea soluta, excepturi, quasi quia commodi
                  blanditiis? Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                  consequuntur quod quo veniam? Labore dignissimos reiciendis accusamus recusandae
                  est consequuntur iure.
                </p>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard :code="prism.toggleBetweenModals" title="Toggle between modals">
        <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal
        </a>
        <div
          id="exampleModalToggle"
          class="modal fade"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
          style="display: none"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="exampleModalToggleLabel" class="modal-title">
                  Modal 1
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                Show a second modal and hide this one with the button below.
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-primary"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  Open second modal
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="exampleModalToggle2"
          class="modal fade"
          aria-labelledby="exampleModalToggleLabel2"
          tabindex="-1"
          style="display: none"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="exampleModalToggleLabel2" class="modal-title">
                  Modal 2
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                Hide this modal and show the first with the button below.
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-primary"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                  Back to first
                </button>
              </div>
            </div>
          </div>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard :code="prism.usingTheGrid" title="Using the grid">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalScrollable5"
        >
          Launch demo modal
        </button>
        <div
          id="exampleModalScrollable5"
          class="modal fade"
          tabindex="-1"
          aria-labelledby="exampleModalScrollable5"
          data-bs-keyboard="false"
        >
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="staticBackdropLabel5" class="modal-title">
                  Modal title
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-4 bg-light border">
                      .col-md-4
                    </div>
                    <div class="col-md-4 ms-auto bg-light border">
                      .col-md-4 .ms-auto
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-3 ms-auto bg-light border">
                      .col-md-3 .ms-auto
                    </div>
                    <div class="col-md-2 ms-auto bg-light border">
                      .col-md-2 .ms-auto
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-6 ms-auto bg-light border">
                      .col-md-6 .ms-auto
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-sm-9 bg-light border">
                      Level 1: .col-sm-9
                      <div class="row">
                        <div class="col-8 col-sm-6 bg-light border">
                          Level 2: .col-8 .col-sm-6
                        </div>
                        <div class="col-4 col-sm-6 bg-light border">
                          Level 2: .col-4 .col-sm-6
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-6">
      <ShowcodeCard :code="prism.verticallyCenteredModal" title="Vertically centered modal">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalScrollable2"
        >
          Vertically centered modal
        </button>
        <div
          id="exampleModalScrollable2"
          class="modal fade"
          tabindex="-1"
          aria-labelledby="exampleModalScrollable2"
          data-bs-keyboard="false"
        >
          <!-- Scrollable modal -->
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="staticBackdropLabel2" class="modal-title">
                  Modal title
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsum quasi,
                  error quibusdam debitis maiores hic eum? Vitae nisi ipsa maiores fugiat deleniti
                  quis reiciendis veritatis.
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.fullscreenModal" title="Fullscreen modal">
        <div class="bd-example">
          <button
            type="button"
            class="btn btn-primary mb-1 me-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalFullscreen"
          >
            Full screen
          </button>
          <button
            type="button"
            class="btn btn-secondary mb-1 me-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalFullscreenSm"
          >
            Full screen below sm
          </button>
          <button
            type="button"
            class="btn btn-warning mb-1 me-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalFullscreenMd"
          >
            Full screen below md
          </button>
          <button
            type="button"
            class="btn btn-info mb-1 me-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalFullscreenLg"
          >
            Full screen below lg
          </button>
          <button
            type="button"
            class="btn btn-success mb-1 me-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalFullscreenXl"
          >
            Full screen below xl
          </button>
          <button
            type="button"
            class="btn btn-danger mb-1 me-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalFullscreenXxl"
          >
            Full screen below xxl
          </button>
        </div>
        <div
          id="exampleModalFullscreen"
          class="modal fade"
          tabindex="-1"
          aria-labelledby="exampleModalFullscreenLabel"
          style="display: none"
        >
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="exampleModalFullscreenLabel" class="modal-title">
                  Full screen modal
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="exampleModalFullscreenSm"
          class="modal fade"
          tabindex="-1"
          aria-labelledby="exampleModalFullscreenSmLabel"
          style="display: none"
        >
          <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="exampleModalFullscreenSmLabel" class="modal-title">
                  Full screen below sm
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="exampleModalFullscreenMd"
          class="modal fade"
          tabindex="-1"
          aria-labelledby="exampleModalFullscreenMdLabel"
          style="display: none"
        >
          <div class="modal-dialog modal-fullscreen-md-down">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="exampleModalFullscreenMdLabel" class="modal-title">
                  Full screen below md
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="exampleModalFullscreenLg"
          class="modal fade"
          tabindex="-1"
          aria-labelledby="exampleModalFullscreenLgLabel"
          style="display: none"
        >
          <div class="modal-dialog modal-fullscreen-lg-down">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="exampleModalFullscreenLgLabel" class="modal-title">
                  Full screen below lg
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="exampleModalFullscreenXl"
          class="modal fade"
          tabindex="-1"
          aria-labelledby="exampleModalFullscreenXlLabel"
          style="display: none"
        >
          <div class="modal-dialog modal-fullscreen-xl-down">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="exampleModalFullscreenXlLabel" class="modal-title">
                  Full screen below xl
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="exampleModalFullscreenXxl"
          class="modal fade"
          tabindex="-1"
          aria-labelledby="exampleModalFullscreenXxlLabel"
          style="display: none"
        >
          <div class="modal-dialog modal-fullscreen-xxl-down">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="exampleModalFullscreenXxlLabel" class="modal-title">
                  Full screen below xxl
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </ShowcodeCard>
    </div>
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.optionalSizes" title="Optional sizes">
        <button
          type="button"
          class="btn btn-primary m-1"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalXl"
        >
          Extra large modal
        </button>
        <button
          type="button"
          class="btn btn-secondary m-1"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalLg"
        >
          Large modal
        </button>
        <button
          type="button"
          class="btn btn-warning m-1"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalSm"
        >
          Small modal
        </button>
        <div
          id="exampleModalXl"
          class="modal fade"
          tabindex="-1"
          aria-labelledby="exampleModalXlLabel"
          style="display: none"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="exampleModalXlLabel" class="modal-title">
                  Extra large modal
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                ...
              </div>
            </div>
          </div>
        </div>
        <div
          id="exampleModalLg"
          class="modal fade"
          tabindex="-1"
          aria-labelledby="exampleModalLgLabel"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="exampleModalLgLabel" class="modal-title">
                  Large modal
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                ...
              </div>
            </div>
          </div>
        </div>
        <div
          id="exampleModalSm"
          class="modal fade"
          tabindex="-1"
          aria-labelledby="exampleModalSmLabel"
        >
          <div class="modal-dialog modal-sm">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="exampleModalSmLabel" class="modal-title">
                  Small modal
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                ...
              </div>
            </div>
          </div>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <h6 class="mb-3">
    Close Buttons:
  </h6>
  <div class="row">
    <div class="col-xl-4">
      <ShowcodeCard :code="prism.basicClose" title="Basic Close">
        <button type="button" class="btn-close" aria-label="Close" />
      </ShowcodeCard>
    </div>
    <div class="col-xl-4">
      <ShowcodeCard :code="prism.disabelState" title="Disabel state">
        <button type="button" class="btn-close" disabled aria-label="Close" />
      </ShowcodeCard>
    </div>
    <div class="col-xl-4">
      <ShowcodeCard
        :code="prism.whiteVariant"
        title="White variant"
        custom-card-body-class="bg-black rounded-b"
      >
        <button type="button" class="btn-close btn-close-white" aria-label="Close" />
        <button
          type="button"
          class="btn-close btn-close-white"
          disabled
          aria-label="Close"
        />
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-3 -->

  <!-- Start:: row-4 -->
  <div class="row">
    <div class="col-xl-12">
      <ShowcodeCard :code="prism.varyingModalContent" title="Varying modal content">
        <div class="d-flex gap-2 align-items-center flex-wrap">
          <button
            type="button"
            class="btn btn-primary mb-1"
            data-bs-toggle="modal"
            data-bs-target="#formmodal"
            data-bs-whatever="@mdo"
          >
            Open modal for @mdo
          </button>
          <button
            type="button"
            class="btn btn-secondary mb-1"
            data-bs-toggle="modal"
            data-bs-target="#formmodal"
            data-bs-whatever="@fat"
          >
            Open modal for @fat
          </button>
          <button
            type="button"
            class="btn btn-light mb-1"
            data-bs-toggle="modal"
            data-bs-target="#formmodal"
            data-bs-whatever="@getbootstrap"
          >
            Open modal for @getbootstrap
          </button>
        </div>
        <div id="formmodal" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h6 id="exampleModalLabel" class="modal-title">
                  New message
                </h6>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                    <input id="recipient-name" type="text" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">Message:</label>
                    <textarea id="message-text" class="form-control" />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </ShowcodeCard>
    </div>
  </div>
  <!-- End:: row-4 -->
</template>

<style scoped>
/* Add your styles here */
</style>
