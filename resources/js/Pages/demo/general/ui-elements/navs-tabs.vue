<script setup>
import { Head } from '@inertiajs/vue3'
import BaseImg from '@/components/Baseimage/BaseImg.vue'
import Pageheader from '@/components/pageheader/pageheader.vue'
import TableComponent from '@/shared/@spk/table-reuseble/table-component.vue'

const dataToPass = {
  title: 'Ui Elements',
  currentpage: 'Navs & Tabs',
  activepage: 'Navs & Tabs',
}
const tanStyle = [
  {
    image: '/images/ecommerce/jpg/3.jpg',
    name: 'Shoes',
    category: 'Footwear',
    price: '$1,299.00',
  },
  {
    image: '/images/ecommerce/jpg/4.jpg',
    name: 'Casual Shoes',
    category: 'Casual Wear',
    price: '$7,249.29',
  },
  {
    image: '/images/ecommerce/jpg/6.jpg',
    name: 'Sport Shoes',
    category: 'Footwear',
    price: '$799.00',
  },
]
</script>

<template>
  <Head title="Navs-Tabs | Vyzor - Laravel & Vue " />
  <Pageheader :prop-data="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Static Tabs
          </div>
        </div>
        <div class="card-body">
          <ul class="nav nav-tabs gap-1 border-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="javascript:void(0);">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Static Pills
          </div>
        </div>
        <div class="card-body">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="javascript:void(0);">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Default Nav Tabs
          </div>
        </div>
        <div class="card-body">
          <ul class="nav nav-tabs mb-3 border-0" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                role="tab"
                href="#home1"
                aria-selected="true"
              >Home</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                href="#about1"
                aria-selected="false"
              >About</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                href="#service1"
                aria-selected="false"
              >Services</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                href="#license1"
                aria-selected="false"
              >License</a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="home1" class="tab-pane show active text-muted" role="tabpanel">
              <b>Lorem Ipsum is simply dummy</b> text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries.
            </div>
            <div id="about1" class="tab-pane text-muted" role="tabpanel">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, <b>Making it over 2000 years old</b>.
              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur.
            </div>
            <div id="service1" class="tab-pane text-muted" role="tabpanel">
              There are many variations of passages of <b>Lorem Ipsum available</b>, but the
              majority have suffered alteration in some form, by injected humour, or randomised
              words which don't look even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to be sure there isn't anything.
            </div>
            <div id="license1" class="tab-pane text-muted" role="tabpanel">
              It is a long established fact that a reader will be distracted by the
              <b><i>Readable content</i></b> of a page when looking at its layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like readable English.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Justified Nav Tabs
          </div>
        </div>
        <div class="card-body">
          <ul class="nav nav-tabs mb-3 nav-justified nav-style-1 d-sm-flex d-block" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                href="#home1-justified"
                aria-selected="false"
              >Home</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                href="#about1-justified"
                aria-selected="false"
              >About</a>
            </li>
            <li class="nav-item active">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                role="tab"
                href="#service1-justified"
                aria-selected="true"
              >Services</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                href="#license1-justified"
                aria-selected="false"
              >License</a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="home1-justified" class="tab-pane text-muted" role="tabpanel">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, <b>Making it over 2000 years old</b>.
              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur.
            </div>
            <div id="about1-justified" class="tab-pane text-muted" role="tabpanel">
              <b>Lorem Ipsum is simply dummy</b> text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries.
            </div>
            <div id="service1-justified" class="tab-pane show active text-muted" role="tabpanel">
              There are many variations of passages of <b>Lorem Ipsum available</b>, but the
              majority have suffered alteration in some form, by injected humour, or randomised
              words which don't look even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to be sure there isn't anything.
            </div>
            <div id="license1-justified" class="tab-pane text-muted" role="tabpanel">
              It is a long established fact that a reader will be distracted by the
              <b><i>Readable content</i></b> of a page when looking at its layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like readable English.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Basic Pill Tabs With Links
          </div>
        </div>
        <div class="card-body">
          <nav class="nav nav-style-1 nav-pills mb-3" role="tablist">
            <a
              class="nav-link"
              data-bs-toggle="tab"
              role="tab"
              aria-current="page"
              href="#nav-products"
              aria-selected="false"
            >Products</a>
            <a
              class="nav-link active"
              data-bs-toggle="tab"
              role="tab"
              href="#nav-cart"
              aria-selected="true"
            >Cart <span class="badge bg-secondary ms-1 rounded-pill">32</span></a>
            <a
              class="nav-link"
              data-bs-toggle="tab"
              role="tab"
              href="#nav-orders"
              aria-selected="false"
            >Orders <span class="badge bg-success ms-1 rounded-pill">4</span></a>
            <a
              class="nav-link"
              data-bs-toggle="tab"
              role="tab"
              href="#nav-offers"
              aria-selected="false"
            >Offers</a>
          </nav>
          <div class="tab-content">
            <div id="nav-products" class="tab-pane text-muted" role="tabpanel">
              How travel coupons make you a better lover. Why cultural solutions are the new black.
              Why mom was right about travel insurances. How family trip ideas can help you predict
              the future. <b>How carnival cruises make you a better lover</b>. Why you'll never
              succeed at daily deals. 11 ways cheapest flights can find you the love of your life.
              The complete beginner's guide to mission trips. If you read one article about cultural
              notes read this one. Why you shouldn't eat vacation package in bed.
            </div>
            <div id="nav-cart" class="tab-pane show active text-muted" role="tabpanel">
              How hotel deals can help you live a better life. <b>How celebrity cruises</b>
              aren't as bad as you think. How cultural solutions can help you predict the future.
              How to cheat at dog friendly hotels and get away with it. 17 problems with summer
              activities. How to cheat at travel agents and get away with it. How not knowing family
              trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter
              can teach you about carnival cruises. How to start using cultural solutions.
            </div>
            <div id="nav-orders" class="tab-pane text-muted" role="tabpanel">
              Unbelievable healthy snack success stories. 12 facts about safe food handling tips
              that will impress your friends. Restaurant weeks by the numbers. Will mexican food
              ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks
              can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable
              food stamp success stories. How whole foods markets are making the world a better
              place. 16 things that won't happen in dish reviews.
            </div>
            <div id="nav-offers" class="tab-pane text-muted" role="tabpanel">
              Why delicious magazines are killing you. Why our world would end if restaurants
              disappeared. Why restaurants are on crack about restaurants. How restaurants are
              making the world a better place. 8 great articles about minute meals. Why our world
              would end if healthy snacks disappeared. Why the world would end without mexican food.
              The evolution of chef uniforms. How not knowing food processors makes you a rookie.
              Why whole foods markets beat peanut butter on pancakes.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Justified Pill Tabs With Links
          </div>
        </div>
        <div class="card-body">
          <nav
            class="nav nav-style-6 nav-pills mb-3 nav-justified d-sm-flex d-block"
            role="tablist"
          >
            <a
              class="nav-link"
              data-bs-toggle="tab"
              role="tab"
              aria-current="page"
              href="#nav-products-justified"
              aria-selected="false"
            >Products</a>
            <a
              class="nav-link active"
              data-bs-toggle="tab"
              role="tab"
              href="#nav-cart-justified"
              aria-selected="true"
            >Cart <span class="badge bg-info-transparent ms-1">Full</span></a>
            <a
              class="nav-link"
              data-bs-toggle="tab"
              role="tab"
              href="#nav-orders-justified"
              aria-selected="false"
            >Orders
            </a>
            <a
              class="nav-link"
              data-bs-toggle="tab"
              role="tab"
              href="#nav-offers-justified"
              aria-selected="false"
            >Offers <span class="badge bg-warning-transparent ms-1">7</span></a>
          </nav>
          <div class="tab-content">
            <div id="nav-products-justified" class="tab-pane text-muted" role="tabpanel">
              How hotel deals can help you live a better life. <b>How celebrity cruises</b>
              aren't as bad as you think. How cultural solutions can help you predict the future.
              How to cheat at dog friendly hotels and get away with it. 17 problems with summer
              activities. How to cheat at travel agents and get away with it. How not knowing family
              trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter
              can teach you about carnival cruises. How to start using cultural solutions.
            </div>
            <div id="nav-cart-justified" class="tab-pane show active text-muted" role="tabpanel">
              How travel coupons make you a better lover. Why cultural solutions are the new black.
              Why mom was right about travel insurances. How family trip ideas can help you predict
              the future. <b>How carnival cruises make you a better lover</b>. Why you'll never
              succeed at daily deals. 11 ways cheapest flights can find you the love of your life.
              The complete beginner's guide to mission trips. If you read one article about cultural
              notes read this one. Why you shouldn't eat vacation package in bed.
            </div>
            <div id="nav-orders-justified" class="tab-pane text-muted" role="tabpanel">
              Unbelievable healthy snack success stories. 12 facts about safe food handling tips
              that will impress your friends. Restaurant weeks by the numbers. Will mexican food
              ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks
              can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable
              food stamp success stories. How whole foods markets are making the world a better
              place. 16 things that won't happen in dish reviews.
            </div>
            <div id="nav-offers-justified" class="tab-pane text-muted" role="tabpanel">
              Why delicious magazines are killing you. Why our world would end if restaurants
              disappeared. Why restaurants are on crack about restaurants. How restaurants are
              making the world a better place. 8 great articles about minute meals. Why our world
              would end if healthy snacks disappeared. Why the world would end without mexican food.
              The evolution of chef uniforms. How not knowing food processors makes you a rookie.
              Why whole foods markets beat peanut butter on pancakes.
            </div>
          </div>
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
            Vertical alignment with lists
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-xl-3">
              <ul class="nav nav-tabs flex-column nav-style-4" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#home-vertical"
                    aria-selected="true"
                  >Home</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#about-vertical"
                    aria-selected="true"
                  >About</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#services-vertical"
                    aria-selected="true"
                  >Services</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#contacts-vertical"
                    aria-selected="true"
                  >Contacts</a>
                </li>
              </ul>
            </div>
            <div class="col-xl-9">
              <div class="tab-content mt-2 mt-xl-0">
                <div id="home-vertical" class="tab-pane show active text-muted" role="tabpanel">
                  How hotel deals can help you live a better life.
                  <b>How celebrity cruises</b> aren't as bad as you think. How cultural solutions
                  can help you predict the future. How to cheat at dog friendly hotels and get away
                  with it. 17 problems with summer activities. How to cheat at travel agents and get
                  away with it. How not knowing family trip ideas makes you a rookie. What everyone
                  is saying about daily deals.
                </div>
                <div id="about-vertical" class="tab-pane text-muted" role="tabpanel">
                  How travel coupons make you a better lover. Why cultural solutions are the new
                  black. Why mom was right about travel insurances. How family trip ideas can help
                  you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                  you'll never succeed at daily deals. 11 ways cheapest flights can find you the
                  love of your life. The complete beginner's guide to mission trips.
                </div>
                <div id="services-vertical" class="tab-pane text-muted" role="tabpanel">
                  Unbelievable healthy snack success stories. 12 facts about safe food handling tips
                  that will impress your friends. Restaurant weeks by the numbers. Will mexican food
                  ever rule the world? The 10 best thai restaurant youtube videos. How restaurant
                  weeks can make you sick. The complete beginner's guide to cooking healthy food.
                  Unbelievable food stamp success stories.
                </div>
                <div id="contacts-vertical" class="tab-pane text-muted" role="tabpanel">
                  Why delicious magazines are killing you. Why our world would end if restaurants
                  disappeared. Why restaurants are on crack about restaurants. How restaurants are
                  making the world a better place. 8 great articles about minute meals. Why our
                  world would end if healthy snacks disappeared. Why the world would end without
                  mexican food. The evolution of chef uniforms.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Vertical alignment with links
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-xl-3">
              <nav class="nav nav-tabs flex-column nav-style-5" role="tablist">
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-current="page"
                  href="#home-vertical-link"
                  aria-selected="false"
                ><i class="ri-home-smile-line me-2 align-middle d-inline-block" />Home</a>
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-current="page"
                  href="#about-vertical-link"
                  aria-selected="false"
                ><i class="ri-archive-drawer-line me-2 align-middle d-inline-block" />About</a>
                <a
                  class="nav-link active"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-current="page"
                  href="#services-vertical-link"
                  aria-selected="true"
                ><i class="ri-bank-line me-2 align-middle d-inline-block" />Services</a>
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-current="page"
                  href="#contacts-vertical-link"
                  aria-selected="false"
                ><i class="ri-contacts-book-2-line me-2 align-middle d-inline-block" />Contacts</a>
              </nav>
            </div>
            <div class="col-xl-9">
              <div class="tab-content mt-2 mt-xl-0">
                <div id="home-vertical-link" class="tab-pane text-muted" role="tabpanel">
                  How hotel deals can help you live a better life.
                  <b>How celebrity cruises</b> aren't as bad as you think. How cultural solutions
                  can help you predict the future. How to cheat at dog friendly hotels and get away
                  with it. 17 problems with summer activities. How to cheat at travel agents and get
                  away with it. How not knowing family trip ideas makes you a rookie. What everyone
                  is saying about daily deals.
                </div>
                <div id="about-vertical-link" class="tab-pane text-muted" role="tabpanel">
                  How travel coupons make you a better lover. Why cultural solutions are the new
                  black. Why mom was right about travel insurances. How family trip ideas can help
                  you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                  you'll never succeed at daily deals. 11 ways cheapest flights can find you the
                  love of your life. The complete beginner's guide to mission trips.
                </div>
                <div
                  id="services-vertical-link"
                  class="tab-pane show active text-muted"
                  role="tabpanel"
                >
                  Unbelievable healthy snack success stories. 12 facts about safe food handling tips
                  that will impress your friends. Restaurant weeks by the numbers.
                  <b><i>Will mexican food ever rule the world? The 10 best thai restaurant youtube
                    videos</i></b>. How restaurant weeks can make you sick. The complete beginner's guide to
                  cooking healthy food. Unbelievable food stamp success stories.
                </div>
                <div id="contacts-vertical-link" class="tab-pane text-muted" role="tabpanel">
                  Why delicious magazines are killing you. Why our world would end if restaurants
                  disappeared. Why restaurants are on crack about restaurants. How restaurants are
                  making the world a better place. 8 great articles about minute meals. Why our
                  world would end if healthy snacks disappeared. Why the world would end without
                  mexican food. The evolution of chef uniforms.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-4 -->

  <!-- Start:: row-5 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Center Aligned Nav
          </div>
        </div>
        <div class="card-body">
          <ul class="nav nav-pills justify-content-center nav-style-2 mb-3" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#home-center"
                aria-selected="true"
              >Home</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#about-center"
                aria-selected="false"
              >About</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#services-center"
                aria-selected="false"
              >Services</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#contacts-center"
                aria-selected="false"
              >Contacts</a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="home-center" class="tab-pane show active text-muted" role="tabpanel">
              How travel coupons make you a better lover. Why cultural solutions are the new black.
              Why mom was right about travel insurances. How family trip ideas can help you predict
              the future. <b>How carnival cruises make you a better lover</b>. Why you'll never
              succeed at daily deals. 11 ways cheapest flights can find you the love of your life.
              The complete beginner's guide to mission trips. If you read one article about cultural
              notes read this one. Why you shouldn't eat vacation package in bed.
            </div>
            <div id="about-center" class="tab-pane text-muted" role="tabpanel">
              How hotel deals can help you live a better life. <b>How celebrity cruises</b>
              aren't as bad as you think. How cultural solutions can help you predict the future.
              How to cheat at dog friendly hotels and get away with it. 17 problems with summer
              activities. How to cheat at travel agents and get away with it. How not knowing family
              trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter
              can teach you about carnival cruises. How to start using cultural solutions.
            </div>
            <div id="services-center" class="tab-pane text-muted" role="tabpanel">
              Unbelievable healthy snack success stories. 12 facts about safe food handling tips
              that will impress your friends. Restaurant weeks by the numbers. Will mexican food
              ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks
              can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable
              food stamp success stories. How whole foods markets are making the world a better
              place. 16 things that won't happen in dish reviews.
            </div>
            <div id="contacts-center" class="tab-pane text-muted" role="tabpanel">
              Why delicious magazines are killing you. Why our world would end if restaurants
              disappeared. Why restaurants are on crack about restaurants. How restaurants are
              making the world a better place. 8 great articles about minute meals. Why our world
              would end if healthy snacks disappeared. Why the world would end without mexican food.
              The evolution of chef uniforms. How not knowing food processors makes you a rookie.
              Why whole foods markets beat peanut butter on pancakes.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Right Aligned Nav
          </div>
        </div>
        <div class="card-body">
          <ul class="nav nav-pills justify-content-end nav-style-3 mb-3" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#home-right"
                aria-selected="true"
              >Home</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#about-right"
                aria-selected="true"
              >About</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#services-right"
                aria-selected="true"
              >Services</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#contacts-right"
                aria-selected="true"
              >Contacts</a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="home-right" class="tab-pane text-muted" role="tabpanel">
              How travel coupons make you a better lover. Why cultural solutions are the new black.
              Why mom was right about travel insurances. How family trip ideas can help you predict
              the future. <b>How carnival cruises make you a better lover</b>. Why you'll never
              succeed at daily deals. 11 ways cheapest flights can find you the love of your life.
              The complete beginner's guide to mission trips. If you read one article about cultural
              notes read this one. Why you shouldn't eat vacation package in bed.
            </div>
            <div id="about-right" class="tab-pane show active text-muted" role="tabpanel">
              How hotel deals can help you live a better life. <b>How celebrity cruises</b>
              aren't as bad as you think. How cultural solutions can help you predict the future.
              How to cheat at dog friendly hotels and get away with it. 17 problems with summer
              activities. How to cheat at travel agents and get away with it. How not knowing family
              trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter
              can teach you about carnival cruises. How to start using cultural solutions.
            </div>
            <div id="services-right" class="tab-pane text-muted" role="tabpanel">
              Unbelievable healthy snack success stories. 12 facts about safe food handling tips
              that will impress your friends. Restaurant weeks by the numbers. Will mexican food
              ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks
              can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable
              food stamp success stories. How whole foods markets are making the world a better
              place. 16 things that won't happen in dish reviews.
            </div>
            <div id="contacts-right" class="tab-pane text-muted" role="tabpanel">
              Why delicious magazines are killing you. Why our world would end if restaurants
              disappeared. Why restaurants are on crack about restaurants. How restaurants are
              making the world a better place. 8 great articles about minute meals. Why our world
              would end if healthy snacks disappeared. Why the world would end without mexican food.
              The evolution of chef uniforms. How not knowing food processors makes you a rookie.
              Why whole foods markets beat peanut butter on pancakes.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-5 -->

  <!-- Start:: row-6 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Header Tabs
          </div>
          <div>
            <ul class="nav nav-tabs justify-content-end nav-tabs-header mb-0" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-current="page"
                  href="#home-header"
                  aria-selected="true"
                >Home</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-current="page"
                  href="#about-header"
                  aria-selected="true"
                >About</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-current="page"
                  href="#services-header"
                  aria-selected="true"
                >Services</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <div class="tab-content">
            <div id="home-header" class="tab-pane show active text-muted" role="tabpanel">
              <ul class="mb-0">
                <li class="mb-2">
                  How hotel deals can help you live a better life.
                  <b>How celebrity cruises</b> aren't as bad as you think. How cultural solutions
                  can help you predict the future. How to cheat at dog friendly hotels and get away
                  with it. 17 problems with summer activities. How to cheat at travel agents and get
                  away with it. How not knowing family trip ideas makes you a rookie. What everyone
                  is saying about daily deals.
                </li>
                <li>
                  How travel coupons make you a better lover. Why cultural solutions are the new
                  black. Why mom was header about travel insurances. How family trip ideas can help
                  you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                  you'll never succeed at daily deals. 11 ways cheapest flights can find you the
                  love of your life. The complete beginner's guide to mission trips.
                </li>
              </ul>
            </div>
            <div id="about-header" class="tab-pane text-muted" role="tabpanel">
              <ul class="mb-0">
                <li class="mb-2">
                  How travel coupons make you a better lover. Why cultural solutions are the new
                  black. Why mom was header about travel insurances. How family trip ideas can help
                  you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                  you'll never succeed at daily deals. 11 ways cheapest flights can find you the
                  love of your life. The complete beginner's guide to mission trips.
                </li>
                <li>
                  How hotel deals can help you live a better life.
                  <b>How celebrity cruises</b> aren't as bad as you think. How cultural solutions
                  can help you predict the future. How to cheat at dog friendly hotels and get away
                  with it. 17 problems with summer activities. How to cheat at travel agents and get
                  away with it. How not knowing family trip ideas makes you a rookie. What everyone
                  is saying about daily deals.
                </li>
              </ul>
            </div>
            <div id="services-header" class="tab-pane text-muted" role="tabpanel">
              <ul class="mb-0">
                <li class="mb-2">
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as opposed to using
                  'Content here, content here', making it look like readable English. Many desktop
                  publishing packages and web page editors now use Lorem Ipsum as their default
                  model text.
                </li>
                <li>
                  How travel coupons make you a better lover. Why cultural solutions are the new
                  black. Why mom was header about travel insurances. How family trip ideas can help
                  you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                  you'll never succeed at daily deals. 11 ways cheapest flights can find you the
                  love of your life. The complete beginner's guide to mission trips.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Footer Tabs
          </div>
        </div>
        <div class="card-body">
          <div class="tab-content">
            <div id="home-footer" class="tab-pane show active text-muted" role="tabpanel">
              How travel coupons make you a better lover. Why cultural solutions are the new black.
              Why mom was right about travel insurances. How family trip ideas can help you predict
              the future. <b>How carnival cruises make you a better lover</b>. Why you'll never
              succeed at daily deals. 11 ways cheapest flights can find you the love of your life.
              The complete beginner's guide to mission trips. If you read one article about cultural
              notes read this one. Why you shouldn't eat vacation package in bed.
            </div>
            <div id="about-footer" class="tab-pane text-muted" role="tabpanel">
              How hotel deals can help you live a better life. <b>How celebrity cruises</b>
              aren't as bad as you think. How cultural solutions can help you predict the future.
              How to cheat at dog friendly hotels and get away with it. 17 problems with summer
              activities. How to cheat at travel agents and get away with it. How not knowing family
              trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter
              can teach you about carnival cruises. How to start using cultural solutions.
            </div>
            <div id="services-footer" class="tab-pane text-muted" role="tabpanel">
              Unbelievable healthy snack success stories. 12 facts about safe food handling tips
              that will impress your friends. Restaurant weeks by the numbers. Will mexican food
              ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks
              can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable
              food stamp success stories. How whole foods markets are making the world a better
              place. 16 things that won't happen in dish reviews.
            </div>
          </div>
        </div>
        <div class="card-footer">
          <ul class="nav nav-tabs justify-content-end nav-tabs-footer mb-0" role="tablist">
            <li class="nav-item m-1">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#home-footer"
                aria-selected="true"
              >Home</a>
            </li>
            <li class="nav-item m-1">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#about-footer"
                aria-selected="true"
              >About</a>
            </li>
            <li class="nav-item m-1">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#services-footer"
                aria-selected="true"
              >Services</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-6 -->

  <!-- Start:: row-7 -->
  <div class="row">
    <div class="col-xxl-12 col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Tab Style-1
          </div>
        </div>
        <div class="card-body">
          <ul class="nav nav-tabs tab-style-1 d-sm-flex d-block" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#orders"
                aria-current="page"
                href="#orders"
              >Orders</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#accepted" href="#accepted">Accepted</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#declined" href="#declined">Declined</a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="orders" class="tab-pane active" role="tabpanel">
              <div class="text-muted">
                <b>Lorem Ipsum is simply dummy text of the printing</b> and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled.
              </div>
            </div>
            <div id="accepted" class="tab-pane" role="tabpanel">
              <div class="text-muted">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for <b>'lorem ipsum'</b> will uncover many web
                sites still in their infancy. Various versions have evolved over the years.
              </div>
            </div>
            <div id="declined" class="tab-pane" role="tabpanel">
              <div class="text-muted">
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, <b>by injected humour</b>, or randomised
                words which don't look even slightly believable
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-12 col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Tab Style-2
          </div>
        </div>
        <div class="card-body">
          <ul
            id="myTab1"
            class="nav nav-tabs tab-style-2 nav-justified mb-3 d-sm-flex d-block"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                id="order-tab"
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#order-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                <i class="ri-gift-line me-1 align-middle" />Ordered
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="confirmed-tab"
                class="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#confirm-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                <i class="ri-check-double-line me-1 align-middle" />Confirmed
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="shipped-tab"
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#shipped-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                <i class="ri-shopping-bag-3-line me-1 align-middle" />Shipped
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="delivered-tab"
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#delivered-tab-pane"
                type="button"
                role="tab"
                aria-selected="false"
              >
                <i class="ri-truck-line me-1 align-middle" />Delivery
              </button>
            </li>
          </ul>
          <div id="myTabContent" class="tab-content">
            <div
              id="order-tab-pane"
              class="tab-pane fade text-muted"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <ul class="ps-3 mb-0">
                <li>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                  a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                  Richard McClintock.
                </li>
              </ul>
            </div>
            <div
              id="confirm-tab-pane"
              class="tab-pane fade show active text-muted"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              <ul class="ps-3 mb-0">
                <li>
                  As opposed to using 'Content here, content here', making it look like readable
                  English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                  as their default model text, and a search.
                </li>
              </ul>
            </div>
            <div
              id="shipped-tab-pane"
              class="tab-pane fade text-muted"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabindex="0"
            >
              <ul class="ps-3 mb-0">
                <li>
                  but also the leap into electronic typesetting, remaining essentially unchanged. It
                  was popularised in the 1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently.
                </li>
              </ul>
            </div>
            <div
              id="delivered-tab-pane"
              class="tab-pane fade text-muted"
              role="tabpanel"
              tabindex="0"
            >
              <ul class="list-unstyled mb-0">
                <li>
                  A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                  the cites of the word in classical literature.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-12 col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Tab-Style-3
          </div>
        </div>
        <div class="card-body p-0 pt-3">
          <ul
            id="myTab2"
            class="nav nav-tabs justify-content-center mb-5 tab-style-3"
            role="tablist"
          >
            <li class="nav-item me-0" role="presentation">
              <button
                id="home-tab"
                class="nav-link active home py-1"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Home
              </button>
            </li>
            <li class="nav-item me-0" role="presentation">
              <button
                id="profile-tab"
                class="nav-link about py-1"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                About
              </button>
            </li>
            <li class="nav-item me-0" role="presentation">
              <button
                id="contact-tab"
                class="nav-link services py-1"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                Services
              </button>
            </li>
          </ul>
          <div id="myTabContent1" class="tab-content p-3">
            <div
              id="home-tab-pane"
              class="tab-pane fade show active text-muted"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <b>Lorem Ipsum is simply dummy text of the printing</b> and typesetting industry.
              Lorem Ipsum has been the industry's.
            </div>
            <div
              id="profile-tab-pane"
              class="tab-pane fade text-muted"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              Many desktop publishing packages as their default model text, and a search for
              <b>'lorem ipsum'</b> will over the years.
            </div>
            <div
              id="contact-tab-pane"
              class="tab-pane fade text-muted"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabindex="0"
            >
              There, <b>by injected humour</b>, or randomised words which don't look even slightly
              believable.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-7 -->

  <!-- Start:: row-8 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Tab Style-4
          </div>
        </div>
        <div class="card-body px-sm-3 px-2">
          <nav>
            <div id="nav-tab" class="nav nav-tabs nav-justified tab-style-4 d-flex" role="tablist">
              <button
                id="nav-home-tab"
                class="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#nav-home1"
                type="button"
                role="tab"
                aria-selected="true"
              >
                Home
              </button>
              <button
                id="nav-profile-tab"
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile1"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Profile
              </button>
              <button
                id="nav-contact-tab"
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact1"
                type="button"
                role="tab"
                aria-selected="false"
              >
                About
              </button>
            </div>
          </nav>
          <div id="tab-style-4" class="tab-content">
            <div
              id="nav-home1"
              class="tab-pane show active"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabindex="0"
            >
              <b>Lorem Ipsum is simply dummy</b> text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div
              id="nav-profile1"
              class="tab-pane"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabindex="0"
            >
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
              <b>Many desktop publishing</b> packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the years, sometimes by
              accident, sometimes on purpos, remaining essentially unchanged.
            </div>
            <div
              id="nav-contact1"
              class="tab-pane"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
              tabindex="0"
            >
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words which don't
              look even slightly believable. <b>If you are going</b> to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
              as necessary, making this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of model sentence
              structures.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Tab Style-5
          </div>
        </div>
        <div class="card-body">
          <ul
            id="pills-tab"
            class="nav nav-pills mb-3 nav-justified tab-style-5 d-sm-flex d-block"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                id="pills-home-tab"
                class="nav-link active"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Home
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="pills-profile-tab"
                class="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                About
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="pills-contact-tab"
                class="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Services
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="pills-disabled-tab"
                class="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#pills-disabled"
                type="button"
                role="tab"
                aria-controls="pills-disabled"
                aria-selected="false"
              >
                Contacts
              </button>
            </li>
          </ul>
          <div id="pills-tabContent" class="tab-content">
            <div
              id="pills-home"
              class="tab-pane show active text-muted"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabindex="0"
            >
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
              <b>Many desktop publishing</b> packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy.
            </div>
            <div
              id="pills-profile"
              class="tab-pane text-muted"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabindex="0"
            >
              <b>Lorem Ipsum is simply dummy</b> text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages.
            </div>
            <div
              id="pills-contact"
              class="tab-pane text-muted"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              tabindex="0"
            >
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words which don't
              look even slightly believable. <b>If you are going</b> to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
              as necessary, making this the first true generator on the Internet.
            </div>
            <div
              id="pills-disabled"
              class="tab-pane text-muted"
              role="tabpanel"
              aria-labelledby="pills-disabled-tab"
              tabindex="0"
            >
              <b>Contrary to popular belief</b>, Contrary to popular belief, Lorem Ipsum is not
              simply random text. It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin words, consectetur, from
              a Lorem Ipsum passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes from sections.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-8 -->

  <!-- Start:: row-9 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Tab Style-6
          </div>
        </div>
        <div class="card-body">
          <ul id="myTab3" class="nav nav-tabs mb-3 tab-style-6" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                id="products-tab"
                class="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#products-tab-pane"
                type="button"
                role="tab"
                aria-controls="products-tab-pane"
                aria-selected="true"
              >
                <i class="ri-gift-line me-1 align-middle d-inline-block" />Products
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="sales-tab"
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#sales-tab-pane"
                type="button"
                role="tab"
                aria-controls="sales-tab-pane"
                aria-selected="false"
              >
                <i class="ri-bill-line me-1 align-middle d-inline-block" />Sales
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="profit-tab"
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#profit-tab-pane"
                type="button"
                role="tab"
                aria-controls="profit-tab-pane"
                aria-selected="false"
              >
                <i class="ri-money-dollar-box-line me-1 align-middle d-inline-block" />Profit
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="expenses-tab"
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#expenses-tab-pane"
                type="button"
                role="tab"
                aria-controls="expenses-tab-pane"
                aria-selected="false"
              >
                <i class="ri-exchange-box-line me-1 align-middle d-inline-block" />Expenses
              </button>
            </li>
          </ul>
          <div id="myTabContent2" class="tab-content">
            <div
              id="products-tab-pane"
              class="tab-pane fade show active p-0 border-bottom-0 overflow-hidden"
              role="tabpanel"
              aria-labelledby="products-tab"
              tabindex="0"
            >
              <div class="table-responsive">
                <TableComponent
                  #cell="{ row }"
                  :headers="[
                    { text: 'Product' },
                    { text: 'Name' },
                    { text: 'Category' },
                    { text: 'Price' },
                  ]"
                  :rows="tanStyle"
                  table-class="table mb-0"
                >
                  <td>
                    <span class="avatar avatar-sm">
                      <BaseImg :src="row.image" alt="" />
                    </span>
                  </td>
                  <td>{{ row.name }}</td>
                  <td>{{ row.category }}</td>
                  <td>{{ row.price }}</td>
                </TableComponent>
              </div>
            </div>
            <div
              id="sales-tab-pane"
              class="tab-pane fade overflow-hidden"
              role="tabpanel"
              aria-labelledby="sales-tab"
              tabindex="0"
            >
              <ul class="list-unstyled mb-1">
                <li class="mb-3">
                  <div class="d-flex justify-content-between">
                    <div>Clothing</div>
                    <div class="fs-14 fw-medium">
                      32,138
                    </div>
                  </div>
                </li>
                <li class="mb-3">
                  <div class="d-flex justify-content-between">
                    <div>Furniture</div>
                    <div class="fs-14 fw-medium">
                      12,123
                    </div>
                  </div>
                </li>
                <li class="mb-3">
                  <div class="d-flex justify-content-between">
                    <div>electronics</div>
                    <div class="fs-14 fw-medium">
                      9,238
                    </div>
                  </div>
                </li>
                <li class="mb-3">
                  <div class="d-flex justify-content-between">
                    <div>food Products</div>
                    <div class="fs-14 fw-medium">
                      14,234
                    </div>
                  </div>
                </li>
                <li class="mb-0">
                  <div class="d-flex justify-content-between">
                    <div>Home Appliances</div>
                    <div class="fs-14 fw-medium">
                      10,249
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              id="profit-tab-pane"
              class="tab-pane fade overflow-hidden"
              role="tabpanel"
              aria-labelledby="profit-tab"
              tabindex="0"
            >
              <ul class="list-unstyled mb-0">
                <li class="mb-3">
                  <div class="d-flex justify-content-between">
                    <div>Clothing</div>
                    <div class="fs-14 fw-medium text-success">
                      <i class="ri-arrow-up-s-fill me-1 align-middle" />22.75%
                    </div>
                  </div>
                </li>
                <li class="mb-3">
                  <div class="d-flex justify-content-between">
                    <div>electronics</div>
                    <div class="fs-14 fw-medium text-success">
                      <i class="ri-arrow-up-s-fill me-1 align-middle" />42.24%
                    </div>
                  </div>
                </li>
                <li class="mb-3">
                  <div class="d-flex justify-content-between">
                    <div>Furniture</div>
                    <div class="fs-14 fw-medium text-success">
                      <i class="ri-arrow-up-s-fill me-1 align-middle" />15.23%
                    </div>
                  </div>
                </li>
                <li class="mb-3">
                  <div class="d-flex justify-content-between">
                    <div>Home Appliances</div>
                    <div class="fs-14 fw-medium text-success">
                      <i class="ri-arrow-up-s-fill me-1 align-middle" />15.14%
                    </div>
                  </div>
                </li>
                <li class="mb-0">
                  <div class="d-flex justify-content-between">
                    <div>food Products</div>
                    <div class="fs-14 fw-medium text-success">
                      <i class="ri-arrow-up-s-fill me-1 align-middle" />31.64%
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              id="expenses-tab-pane"
              class="tab-pane fade overflow-hidden"
              role="tabpanel"
              aria-labelledby="expenses-tab"
              tabindex="0"
            >
              <ul class="list-unstyled mb-0">
                <li class="mb-3">
                  <div class="d-flex justify-content-between">
                    <div>Clothing</div>
                    <div class="fs-14 fw-medium text-danger">
                      -$31,134
                    </div>
                  </div>
                </li>
                <li class="mb-3">
                  <div class="d-flex justify-content-between">
                    <div>electronics</div>
                    <div class="fs-14 fw-medium text-danger">
                      -$15,256
                    </div>
                  </div>
                </li>
                <li class="mb-3">
                  <div class="d-flex justify-content-between">
                    <div>Furniture</div>
                    <div class="fs-14 fw-medium text-danger">
                      -$24,156
                    </div>
                  </div>
                </li>
                <li class="mb-3">
                  <div class="d-flex justify-content-between">
                    <div>Home Appliances</div>
                    <div class="fs-14 fw-medium text-danger">
                      -$18,245
                    </div>
                  </div>
                </li>
                <li class="mb-0">
                  <div class="d-flex justify-content-between">
                    <div>food Products</div>
                    <div class="fs-14 fw-medium text-danger">
                      -$18,478
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Tab Style-8
          </div>
        </div>
        <div class="card-body">
          <ul id="myTab4" class="nav nav-tabs mb-3 tab-style-8 scaleX" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                id="home-style8-tab"
                class="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#home-style8-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-style8-tab-pane"
                aria-selected="true"
              >
                Home
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="about-style8-tab"
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#about-style8-tab-pane"
                type="button"
                role="tab"
                aria-controls="about-style8-tab-pane"
                aria-selected="false"
              >
                About
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="services-style8-tab"
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#services-style8-tab-pane"
                type="button"
                role="tab"
                aria-controls="services-style8-tab-pane"
                aria-selected="false"
              >
                Services
              </button>
            </li>
          </ul>
          <div id="myTabContent3" class="tab-content">
            <div
              id="home-style8-tab-pane"
              class="tab-pane show active overflow-hidden"
              role="tabpanel"
              aria-labelledby="home-style8-tab"
              tabindex="0"
            >
              when an unknown printer took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div
              id="about-style8-tab-pane"
              class="tab-pane overflow-hidden"
              role="tabpanel"
              aria-labelledby="about-style8-tab"
              tabindex="0"
            >
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page editors now use Lorem
              Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many
              web sites still in their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and the like).
            </div>
            <div
              id="services-style8-tab-pane"
              class="tab-pane overflow-hidden"
              role="tabpanel"
              aria-labelledby="services-style8-tab"
              tabindex="0"
            >
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words which don't
              look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the middle of text. All
              the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the Internet.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Vertical Tab Style-1
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-2">
              <div
                id="v-pills-tab"
                class="nav flex-column nav-pills me-3 tab-style-7"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  id="main-profile-tab"
                  class="nav-link text-start active"
                  data-bs-toggle="pill"
                  data-bs-target="#main-profile"
                  type="button"
                  role="tab"
                  aria-controls="main-profile"
                  aria-selected="true"
                >
                  <i class="ri-shield-user-line me-1 align-middle d-inline-block" />Profile
                </button>
                <button
                  id="man-password-tab"
                  class="nav-link text-start"
                  data-bs-toggle="pill"
                  data-bs-target="#man-password"
                  type="button"
                  role="tab"
                  aria-controls="man-password"
                  aria-selected="false"
                >
                  <i class="ri-u-disk-line me-1 align-middle d-inline-block" />Password
                </button>
                <button
                  id="main-team-tab"
                  class="nav-link text-start"
                  data-bs-toggle="pill"
                  data-bs-target="#main-team"
                  type="button"
                  role="tab"
                  aria-controls="main-team"
                  aria-selected="false"
                >
                  <i class="ri-group-line me-1 align-middle d-inline-block" />Team
                </button>
                <button
                  id="main-billing-tab"
                  class="nav-link text-start"
                  data-bs-toggle="pill"
                  data-bs-target="#main-billing"
                  type="button"
                  role="tab"
                  aria-controls="main-billing"
                  aria-selected="false"
                >
                  <i class="ri-bill-line me-1 align-middle d-inline-block" />Billing
                </button>
                <button
                  id="main-email-tab"
                  class="nav-link text-start mb-1"
                  data-bs-toggle="pill"
                  data-bs-target="#main-email"
                  type="button"
                  role="tab"
                  aria-controls="main-email"
                  aria-selected="false"
                >
                  <i class="ri-mail-line me-1 align-middle d-inline-block" />Email
                </button>
              </div>
            </div>
            <div class="col-md-8">
              <div id="v-pills-tabContent" class="tab-content">
                <div id="main-profile" class="tab-pane show active" role="tabpanel" tabindex="0">
                  <div class="d-sm-flex">
                    <div class="me-3">
                      <span class="avatar avatar-xxl">
                        <BaseImg src="/images/faces/9.jpg" alt="img" />
                      </span>
                    </div>
                    <div>
                      <div class="my-md-auto mt-4 ms-md-3">
                        <h5 class="font-weight-semibold ms-2 mb-1 pb-0">
                          Adam Smith
                        </h5>
                        <p class="text-muted ms-0 mb-2 pb-2">
                          <span class="me-3">Ui/Ux Developer</span>
                          <span class="me-3">West fransisco,Alabama</span> <span>New Jersey</span>
                        </p>
                        <p class="text-muted ms-0 mb-2">
                          <span><i class="fe fe-phone me-2" /></span><span class="font-weight-semibold me-2">Phone:</span><span>+94 12345 6789</span>
                        </p>
                        <p class="text-muted ms-0 mb-2">
                          <span><i class="fe fe-mail me-2" /></span><span class="font-weight-semibold me-2">Email:</span><span>spruko.space@gmail.com</span>
                        </p>
                        <p class="text-muted ms-0 mb-2">
                          <span><i class="fe fe-globe me-2" /></span><span class="font-weight-semibold me-2">Website:</span><span>sprukotechnologies</span>
                        </p>
                        <p class="text-muted mb-0 ms-2">
                          <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been standard.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="man-password" class="tab-pane" role="tabpanel" tabindex="0">
                  <ul class="list-unstyled text-muted mb-0">
                    <li class="mb-2">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's
                      <b>standard dummy text ever since the 1500s</b>, when an unknown printer took
                      a galley of type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus PageMaker including
                      versions of Lorem Ipsum.
                    </li>
                    <li class="mb-2">
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                      roots in a piece of classical Latin literature from 45 BC, making it over 2000
                      years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                      Virginia,
                    </li>
                    <li class="mb-0">
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form.
                    </li>
                  </ul>
                </div>
                <div
                  id="main-team"
                  class="tab-pane"
                  role="tabpanel"
                  aria-labelledby="main-team-tab"
                  tabindex="0"
                >
                  <ul class="list-unstyled text-muted mb-0">
                    <li class="mb-2">
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                      roots in a piece of classical Latin literature from 45 BC, making it over 2000
                      years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                      Virginia,
                    </li>
                    <li class="mb-2">
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form.
                    </li>
                    <li class="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's
                      <b>standard dummy text ever since the 1500s</b>, when an unknown printer took
                      a galley of type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus PageMaker including
                      versions of Lorem Ipsum.
                    </li>
                  </ul>
                </div>
                <div
                  id="main-billing"
                  class="tab-pane"
                  role="tabpanel"
                  aria-labelledby="main-billing-tab"
                  tabindex="0"
                >
                  <ul class="list-unstyled text-muted mb-0">
                    <li class="mb-2">
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                      roots in a piece of classical Latin literature from 45 BC, making it over 2000
                      years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                      Virginia,
                    </li>
                    <li class="mb-2">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's
                      <b>standard dummy text ever since the 1500s</b>, when an unknown printer took
                      a galley of type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus PageMaker including
                      versions of Lorem Ipsum.
                    </li>
                    <li class="mb-0">
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form.
                    </li>
                  </ul>
                </div>
                <div
                  id="main-email"
                  class="tab-pane"
                  role="tabpanel"
                  aria-labelledby="main-email-tab"
                  tabindex="0"
                >
                  <ul class="list-unstyled text-muted mb-0">
                    <li class="mb-2">
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                      roots in a piece of classical Latin literature from 45 BC, making it over 2000
                      years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                      Virginia,
                    </li>
                    <li class="mb-2">
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form.
                    </li>
                    <li class="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's
                      <b>standard dummy text ever since the 1500s</b>, when an unknown printer took
                      a galley of type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus PageMaker including
                      versions of Lorem Ipsum.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-9 -->

  <!-- Start:: row-10 -->
  <div class="row">
    <div class="col-xxl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Vertical Tab Style-2
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-3">
              <ul class="nav nav-tabs flex-column vertical-tabs-2" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#home-vertical-custom"
                    aria-selected="true"
                  >
                    <p class="mb-1"><i class="ri-home-4-line" /></p>
                    <p class="mb-0 text-break">Home</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#about-vertical-custom"
                    aria-selected="true"
                  >
                    <p class="mb-1"><i class="ri-phone-line" /></p>
                    <p class="mb-0 text-break">About</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link mb-0"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#services-vertical-custom"
                    aria-selected="true"
                  >
                    <p class="mb-1"><i class="ri-customer-service-line" /></p>
                    <p class="mb-0 text-break">Services</p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-9">
              <div class="tab-content">
                <div
                  id="home-vertical-custom"
                  class="tab-pane show active text-muted"
                  role="tabpanel"
                >
                  <ul class="mb-0">
                    <li class="mb-2">
                      How hotel deals can help you live a better life.
                      <b>How celebrity cruises</b> aren't as bad as you think. How cultural
                      solutions can help you predict the future. How to cheat at dog friendly hotels
                      and get away with it. 17 problems with summer activities. How to cheat at
                      travel agents and get away with it. How not knowing family trip ideas makes
                      you a rookie. What everyone is saying about daily deals.
                    </li>
                    <li>
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by injected humour, or
                      randomised words which don't look even slightly believable. If you are going
                      to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                      embarrassing hidden.
                    </li>
                  </ul>
                </div>
                <div id="about-vertical-custom" class="tab-pane text-muted" role="tabpanel">
                  <ul class="mb-0">
                    <li class="mb-2">
                      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
                      those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
                      Malorum" by Cicero are also reproduced in their exact original form,
                      accompanied by English versions from the 1914 translation by H. Rackham,How
                      hotel deals can help you live a better life. <b>How celebrity cruises</b>
                    </li>
                    <li>
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                      roots in a piece of classical Latin literature from 45 BC, making it over 2000
                      years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                      Virginia, looked up one of the more obscure Latin words, consectetur.
                    </li>
                  </ul>
                </div>
                <div id="services-vertical-custom" class="tab-pane text-muted" role="tabpanel">
                  <ul class="mb-0">
                    <li class="mb-2">
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by injected humour, or
                      randomised words which don't look even slightly believable. If you are going
                      to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                      embarrassing hidden.
                    </li>
                    <li>
                      How hotel deals can help you live a better life.
                      <b>How celebrity cruises</b> aren't as bad as you think. How cultural
                      solutions can help you predict the future. How to cheat at dog friendly hotels
                      and get away with it. 17 problems with summer activities. How to cheat at
                      travel agents and get away with it. How not knowing family trip ideas makes
                      you a rookie. What everyone is saying about daily deals.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Vertical Tabs Style-3
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-4">
              <ul class="nav nav-tabs flex-column vertical-tabs-3" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active text-break"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#employee-vertical"
                    aria-selected="true"
                  >
                    <i class="ri-map-pin-user-line me-2 align-middle d-inline-block" />Employees
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link text-break"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#customers-vertical"
                    aria-selected="true"
                  >
                    <i class="ri-group-line me-2 align-middle d-inline-block" />Customers
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link text-break mb-2"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#products-vertical"
                    aria-selected="true"
                  >
                    <i class="ri-gift-line me-2 align-middle d-inline-block" />Products
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-8">
              <div class="tab-content">
                <div id="employee-vertical" class="tab-pane show active text-muted" role="tabpanel">
                  <ul class="mb-0">
                    <li class="mb-2">
                      How hotel deals can help you live a better life.
                      <b>How celebrity cruises</b> aren't as bad as you think. How cultural
                      solutions can help you predict the future. How to cheat at dog friendly hotels
                      and get away with it. 17 problems with summer activities. How to cheat at
                      travel agents and get away with it. How not knowing family trip ideas makes
                      you a rookie. What everyone is saying about daily deals.
                    </li>
                    <li>
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by injected humour, or
                      randomised words which don't look even slightly believable.
                    </li>
                  </ul>
                </div>
                <div id="customers-vertical" class="tab-pane text-muted" role="tabpanel">
                  <ul class="mb-0">
                    <li class="mb-2">
                      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
                      those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
                      Malorum" by Cicero are also reproduced in their exact original form,
                      accompanied by English versions from the 1914 translation by H. Rackham,How
                      hotel deals can help you live a better life. <b>How celebrity cruises</b>
                    </li>
                    <li>
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                      roots in a piece of classical Latin literature from 45 BC, making it over 2000
                      years old. Richard McClintock, a Latin professor at Hampden-Sydney.
                    </li>
                  </ul>
                </div>
                <div id="products-vertical" class="tab-pane text-muted" role="tabpanel">
                  <ul class="mb-0">
                    <li class="mb-2">
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by injected humour, or
                      randomised words which don't look even slightly believable. If you are going
                      to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                      embarrassing hidden.
                    </li>
                    <li>
                      How hotel deals can help you live a better life.
                      <b>How celebrity cruises</b> aren't as bad as you think. How cultural
                      solutions can help you predict the future. How to cheat at dog friendly hotels
                      and get away with it. 17 problems with summer activities. How to cheat at
                      travel agents.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-10 -->

  <!-- Start:: row-11 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Tabs with dropdowns
          </div>
        </div>
        <div class="card-body">
          <ul class="nav nav-tabs mb-3 border-0" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                role="tab"
                href="#hometab-dropdown"
                aria-selected="true"
              >Home</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="javascript:void(0);"
                role="button"
                aria-expanded="false"
              >Company</a>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item"
                    data-bs-toggle="tab"
                    role="tab"
                    href="#homeabout-dropdown"
                    aria-selected="false"
                  >About</a>
                </li>
                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                href="#homeproducts-dropdown"
                aria-selected="false"
              >Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Services</a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="hometab-dropdown" class="tab-pane show active text-muted" role="tabpanel">
              <b>Lorem Ipsum is simply dummy</b> text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries.
            </div>
            <div id="homeabout-dropdown" class="tab-pane text-muted" role="tabpanel">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, <b>Making it over 2000 years old</b>.
              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur.
            </div>
            <div id="homeproducts-dropdown" class="tab-pane text-muted" role="tabpanel">
              There are many variations of passages of <b>Lorem Ipsum available</b>, but the
              majority have suffered alteration in some form, by injected humour, or randomised
              words which don't look even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to be sure there isn't anything.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Pills with dropdowns
          </div>
        </div>
        <div class="card-body">
          <ul class="nav nav-pills mb-3" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#pill-products"
                aria-selected="true"
              >Products</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="javascript:void(0);"
                role="button"
                aria-expanded="false"
              >Cart</a>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-current="page"
                    href="#pill-wishlist"
                    aria-selected="false"
                  >Wishlist</a>
                </li>
                <li><a class="dropdown-item" href="javascript:void(0);">Liked</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Save For Later</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="javascript:void(0);">Recently Viewed</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#pill-orders"
                aria-selected="false"
              >Orders</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Offers</a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="pill-products" class="tab-pane show active text-muted" role="tabpanel">
              How travel coupons make you a better lover. Why cultural solutions are the new black.
              Why mom was right about travel insurances. How family trip ideas can help you predict
              the future. <b>How carnival cruises make you a better lover</b>. Why you'll never
              succeed at daily deals.
            </div>
            <div id="pill-wishlist" class="tab-pane text-muted" role="tabpanel">
              How hotel deals can help you live a better life. <b>How celebrity cruises</b>
              aren't as bad as you think. How cultural solutions can help you predict the future.
              How to cheat at dog friendly hotels and get away with it. 17 problems with summer
              activities. How to cheat at travel agents and get away with it.
            </div>
            <div id="pill-orders" class="tab-pane text-muted" role="tabpanel">
              Unbelievable healthy snack success stories. 12 facts about safe food handling tips
              that will impress your friends. Restaurant weeks by the numbers. Will mexican food
              ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks
              can make you sick.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-11 -->

  <!-- Start:: row-12 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            FIll Pills
          </div>
        </div>
        <div class="card-body">
          <ul class="nav nav-pills nav-fill mb-3" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#fill-pill-home"
                aria-selected="true"
              >Home</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#fill-pill-about"
                aria-selected="false"
              >Customer-ratings</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#fill-pill-services"
                aria-selected="false"
              >Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="fill-pill-home" class="tab-pane show active text-muted" role="tabpanel">
              How travel coupons make you a better lover. Why cultural solutions are the new black.
              Why mom was right about travel insurances. How family trip ideas can help you predict
              the future. <b>How carnival cruises make you a better lover</b>. Why you'll never
              succeed at daily deals.
            </div>
            <div id="fill-pill-about" class="tab-pane text-muted" role="tabpanel">
              How hotel deals can help you live a better life. <b>How celebrity cruises</b>
              aren't as bad as you think. How cultural solutions can help you predict the future.
              How to cheat at dog friendly hotels and get away with it. 17 problems with summer
              activities. How to cheat at travel agents and get away with it.
            </div>
            <div id="fill-pill-services" class="tab-pane text-muted" role="tabpanel">
              Unbelievable healthy snack success stories. 12 facts about safe food handling tips
              that will impress your friends. Restaurant weeks by the numbers. Will mexican food
              ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks
              can make you sick.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            justified Pills
          </div>
        </div>
        <div class="card-body">
          <ul class="nav nav-pills nav-justified mb-3 d-sm-flex d-block" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#justified-pill-home"
                aria-selected="true"
              >Home</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#justified-pill-details"
                aria-selected="true"
              >Company Details</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                href="#justified-pill-products"
                aria-selected="true"
              >Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="justified-pill-home" class="tab-pane show active text-muted" role="tabpanel">
              How travel coupons make you a better lover. Why cultural solutions are the new black.
              Why mom was right about travel insurances. How family trip ideas can help you predict
              the future. <b>How carnival cruises make you a better lover</b>. Why you'll never
              succeed at daily deals.
            </div>
            <div id="justified-pill-details" class="tab-pane text-muted" role="tabpanel">
              How hotel deals can help you live a better life. <b>How celebrity cruises</b>
              aren't as bad as you think. How cultural solutions can help you predict the future.
              How to cheat at dog friendly hotels and get away with it. 17 problems with summer
              activities. How to cheat at travel agents and get away with it.
            </div>
            <div id="justified-pill-products" class="tab-pane text-muted" role="tabpanel">
              Unbelievable healthy snack success stories. 12 facts about safe food handling tips
              that will impress your friends. Restaurant weeks by the numbers. Will mexican food
              ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks
              can make you sick.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-12 -->

  <!-- Start:: row-13 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">
            Working with flex utilities
          </div>
        </div>
        <div class="card-body">
          <nav class="nav nav-pills flex-column flex-sm-row mb-3" role="tablist">
            <a
              class="flex-sm-fill text-sm-center nav-link active"
              data-bs-toggle="tab"
              role="tab"
              aria-current="page"
              href="#pill-flex-home"
              aria-selected="true"
            >Home</a>
            <a
              class="flex-sm-fill text-sm-center nav-link"
              data-bs-toggle="tab"
              role="tab"
              aria-current="page"
              href="#pill-flex-big"
              aria-selected="false"
            >More Data More The Tab Size</a>
            <a
              class="flex-sm-fill text-sm-center nav-link"
              data-bs-toggle="tab"
              role="tab"
              aria-current="page"
              href="#pill-flex-about"
              aria-selected="false"
            >About</a>
            <a class="flex-sm-fill text-sm-center nav-link disabled">Services</a>
          </nav>
          <div class="tab-content">
            <div id="pill-flex-home" class="tab-pane show active text-muted" role="tabpanel">
              How travel coupons make you a better lover. Why cultural solutions are the new black.
              Why mom was right about travel insurances. How family trip ideas can help you predict
              the future. <b>How carnival cruises make you a better lover</b>. Why you'll never
              succeed at daily deals. 11 ways cheapest flights can find you the love of your life.
              The complete beginner's guide to mission trips. If you read one article about cultural
              notes read this one. Why you shouldn't eat vacation package in bed.
            </div>
            <div id="pill-flex-big" class="tab-pane text-muted" role="tabpanel">
              How hotel deals can help you live a better life. <b>How celebrity cruises</b>
              aren't as bad as you think. How cultural solutions can help you predict the future.
              How to cheat at dog friendly hotels and get away with it. 17 problems with summer
              activities. How to cheat at travel agents and get away with it. How not knowing family
              trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter
              can teach you about carnival cruises. How to start using cultural solutions.
            </div>
            <div id="pill-flex-about" class="tab-pane text-muted" role="tabpanel">
              Unbelievable healthy snack success stories. 12 facts about safe food handling tips
              that will impress your friends. Restaurant weeks by the numbers. Will mexican food
              ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks
              can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable
              food stamp success stories. How whole foods markets are making the world a better
              place. 16 things that won't happen in dish reviews.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-13 -->
</template>

<style scoped>
/* Add your styles here */
</style>
