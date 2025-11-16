<script setup>
import { Head } from '@inertiajs/vue3'
import Swal from 'sweetalert2'
import Pageheader from '@/components/pageheader/pageheader.vue'
import 'sweetalert2/dist/sweetalert2.min.css'
// Page data
const dataToPass = {
  title: 'Applications',
  currentpage: 'Sweet Alerts',
  activepage: 'Sweet Alerts',
}

// SweetAlert methods
function basicSwal() {
  Swal.fire('Hello this is Basic alert message')
}

function TitleAlert() {
  Swal.fire({
    title: 'The Internet?',
    text: 'That thing is still around?',
    icon: 'question',
  })
}

function FooterAlert() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="javascript:void(0);">Why do I have this issue?</a>',
  })
}

function LoginWindow() {
  Swal.fire({
    imageUrl: 'https://placeholder.pics/svg/300x1500',
    imageHeight: 1500,
    imageAlt: 'A tall image',
  })
}

function CustomHTMLAlert() {
  Swal.fire({
    title: '<strong>HTML <u>example</u></strong>',
    icon: 'info',
    html: `
      You can use <b>bold text</b>,
      <a href="http://sweetalert2.github.io/" target='_blank'>links</a>,
      and other HTML tags
    `,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> Great!
    `,
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText: `
      <i class="fe fe-thumbs-down"></i>
    `,
    cancelButtonAriaLabel: 'Thumbs down',
  })
}

function MultipleButtons() {
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
    }
    else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
}

function AlertDialog() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500,
  })
}

function ConfirmAlert() {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
    }
  })
}

function AlertParameters() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger me-2',
    },
    buttonsStyling: false,
  })

  swalWithBootstrapButtons
    .fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success')
      }
      else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error')
      }
    })
}

function ImageAlert() {
  Swal.fire({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: `${__BASE_PATH__}/images/media/media-59.jpg`,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}

function Backgroundimage() {
  Swal.fire({
    title: 'Custom width, padding, color, background.',
    width: 600,
    padding: '3em',
    color: '#716add',
    background: `#fff url(${`${__BASE_PATH__}/images/media/media-16.jpg`})`,
  })
}

function Ajaxalert() {
  Swal.fire({
    title: 'Submit your Github username',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off',
    },
    showCancelButton: true,
    confirmButtonText: 'Look up',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      return fetch(`//api.github.com/users/${login}`)
        .then((response) => {
          if (!response.ok)
            throw new Error(response.statusText)

          return response.json()
        })
        .catch((error) => {
          Swal.showValidationMessage(`Request failed: ${error}`)
        })
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed && result.value) {
      Swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url,
      })
    }
  })
}

function Autoclose() {
  let timerInterval

  Swal.fire({
    title: 'Auto close alert!',
    html: 'I will close in <b></b> milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer()?.querySelector('b')
      if (b) {
        timerInterval = setInterval(() => {
          const timerLeft = Swal.getTimerLeft()?.toString() || '0'
          b.textContent = timerLeft
        }, 100)
      }
    },
    willClose: () => {
      clearInterval(timerInterval)
    },
  })
}

// State alerts
function stateSuccess() {
  Swal.fire('Success Message', 'Great job!!', 'success')
}

function stateDanger() {
  Swal.fire('Danger Message', 'Something went wrong!!', 'error')
}

function stateWarning() {
  Swal.fire('Warning Message', 'Careful now!', 'warning')
}

function stateInfo() {
  Swal.fire('Info Message', 'Heads up!', 'info')
}

function stateQuestion() {
  Swal.fire('Question Message', 'What do you want to do?', 'question')
}
</script>

<template>
  <Head title="Sweet Alerts | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />
  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Basic Alert
          </div>
        </div>
        <div class="card-body text-center">
          <button id="basic-alert" class="btn btn-primary btn-w-md" @click="basicSwal">
            Basic Alert
          </button>
        </div>
      </div>
    </div>
    <div class="col-xl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Title With Text Under
          </div>
        </div>
        <div class="card-body text-center">
          <button id="alert-text" class="btn btn-primary btn-w-md" @click="TitleAlert">
            Title With Text
          </button>
        </div>
      </div>
    </div>
    <div class="col-xl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            With Text,Error Icon & Footer
          </div>
        </div>
        <div class="card-body text-center">
          <button id="alert-footer" class="btn btn-primary btn-w-md" @click="FooterAlert">
            Alert Footer
          </button>
        </div>
      </div>
    </div>
    <div class="col-xl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Alert With Long Window
          </div>
        </div>
        <div class="card-body text-center">
          <button id="long-window" class="btn btn-primary btn-w-md" @click="LoginWindow">
            Long Window Here
          </button>
        </div>
      </div>
    </div>
    <div class="col-xl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Custom HTML Description
          </div>
        </div>
        <div class="card-body text-center">
          <button id="alert-description" class="btn btn-primary btn-w-md" @click="CustomHTMLAlert">
            Custom HTML Alert
          </button>
        </div>
      </div>
    </div>
    <div class="col-xl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Alert With Multiple Buttons
          </div>
        </div>
        <div class="card-body text-center">
          <button id="three-buttons" class="btn btn-primary btn-w-md" @click="MultipleButtons">
            Multiple Buttons
          </button>
        </div>
      </div>
    </div>
    <div class="col-xl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Custom Positioned Dialog Alert
          </div>
        </div>
        <div class="card-body text-center">
          <button id="alert-dialog" class="btn btn-primary btn-w-md" @click="AlertDialog">
            Alert Dialog
          </button>
        </div>
      </div>
    </div>
    <div class="col-xl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Confirm Alert
          </div>
        </div>
        <div class="card-body text-center">
          <button id="alert-confirm" class="btn btn-primary btn-w-md" @click="ConfirmAlert">
            Confirm Alert
          </button>
        </div>
      </div>
    </div>
    <div class="col-xl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Alert With Parameters
          </div>
        </div>
        <div class="card-body text-center">
          <button id="alert-parameter" class="btn btn-primary btn-w-md" @click="AlertParameters">
            Alert Parameters
          </button>
        </div>
      </div>
    </div>
    <div class="col-xl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Alert With Image
          </div>
        </div>
        <div class="card-body text-center">
          <button id="alert-image" class="btn btn-primary btn-w-md" @click="ImageAlert">
            Image Alert
          </button>
        </div>
      </div>
    </div>
    <div class="col-xl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Alert With Image
          </div>
        </div>
        <div class="card-body text-center">
          <button id="alert-custom-bg" class="btn btn-primary btn-w-md" @click="Backgroundimage">
            Custom Alert
          </button>
        </div>
      </div>
    </div>
    <div class="col-xl-3">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Auto Close Alert
          </div>
        </div>
        <div class="card-body text-center">
          <button id="alert-auto-close" class="btn btn-primary btn-w-md" @click="Autoclose">
            Auto Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-1 -->
  <div class="row">
    <div class="col-xl-5">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Ajax Request Alert
          </div>
        </div>
        <div class="card-body text-center">
          <button id="alert-ajax" class="btn btn-primary btn-w-md" @click="Ajaxalert">
            Ajax Request
          </button>
        </div>
      </div>
    </div>
    <div class="col-xl-7">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            State Icons
          </div>
        </div>
        <div
          class="card-body text-center d-flex gap-1 flex-wrap align-items-center justify-content-center"
        >
          <button id="alert-custom-success" class="btn btn-success btn-w-md" @click="stateSuccess">
            Success
          </button>
          <button id="alert-custom-danger" class="btn btn-danger btn-w-md" @click="stateDanger">
            Danger
          </button>
          <button id="alert-custom-warning" class="btn btn-warning btn-w-md" @click="stateWarning">
            Warning
          </button>
          <button id="alert-custom-info" class="btn btn-info btn-w-md" @click="stateInfo">
            Info
          </button>
          <button
            id="alert-custom-question"
            class="btn btn-primary btn-w-md"
            @click="stateQuestion"
          >
            Question
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-3 -->
</template>

<style scoped>
/* Add your styles here */
</style>
