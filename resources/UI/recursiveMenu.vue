<template>
  <a
    href="javascript:;"
    class="side-menu__item"
    :class="`${menuData?.selected ? 'active' : ''}`"
    @click="toggleSubmenu($event, menuData, undefined, level > 1)"
    @mouseover="HoverToggleInnerMenuFn($event, menuData)"
  >
    <span v-if="menuData?.icon" v-html="menuData.icon"> </span>

    <span class="side-menu__label" v-if="level == 1"
      >{{ menuData.title }}
      <span v-if="menuData.badge" :class="`badge ${menuData?.badgeColor} ms-1`">{{
        menuData.badge
      }}</span></span
    >
    <span v-if="level > 1"
      >{{ menuData.title }}
      <span v-if="menuData.badgetxt" v-html="menuData.badgetxt"></span>
    </span>
    <i class="ri-arrow-right-s-line side-menu__angle"></i>
  </a>
  <ul
    class="slide-menu"
    :class="`${menuData.active ? 'double-menu-active' : ''} child${level} ${menuData?.dirchange ? 'force-left' : ''}`"
    :style="menuData.active ? 'display : block' : ''"
  >
    <li v-if="level <= 1" class="slide side-menu__label1">
      <a href="javascript:void(0)">{{ menuData.title }}</a>
    </li>

    <li
      v-for="(firstLevelMenuItem, subIndex) in menuData.children"
      :key="subIndex"
      :class="`
            ${firstLevelMenuItem.menuTitle ? 'slide__category' : ''} ${firstLevelMenuItem?.type == 'empty' ? 'slide' : ''} ${firstLevelMenuItem?.type == 'link' ? 'slide' : ''} ${firstLevelMenuItem?.type == 'sub' ? 'slide has-sub' : ''} ${firstLevelMenuItem?.active ? 'open' : ''} ${firstLevelMenuItem?.selected ? 'active' : ''}`"
    >
      <template v-if="firstLevelMenuItem?.type === 'link'">
        <Link
          :href="firstLevelMenuItem?.path"
          class="side-menu__item"
          :class="`${firstLevelMenuItem?.selected ? 'active' : ''}`"
        >
          <span v-html="firstLevelMenuItem.icon"></span> {{ firstLevelMenuItem.title
          }}<span
            v-if="firstLevelMenuItem.badge"
            :class="`badge ${firstLevelMenuItem.badgeColor} ms-1`"
            >{{ firstLevelMenuItem.badge }}</span
          >
        </Link>
      </template>
      <template v-if="firstLevelMenuItem?.type === 'empty'">
        <a href="javascript:;" class="side-menu__item">
          <span v-html="firstLevelMenuItem.icon"></span>
          {{ firstLevelMenuItem.title
          }}<span
            v-if="firstLevelMenuItem.badge"
            :class="`badge ${firstLevelMenuItem.badgeColor} ms-1`"
            >{{ firstLevelMenuItem.badge }}</span
          >
        </a>
      </template>
      <template v-if="firstLevelMenuItem?.type === 'sub'">
        <RecursiveMenu
          :menuData="firstLevelMenuItem"
          :toggleSubmenu="toggleSubmenu"
          :HoverToggleInnerMenuFn="HoverToggleInnerMenuFn"
          :level="level + 1"
        />
      </template>
    </li>
  </ul>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
  menuData: {
    type: Object,
    required: true,
  },
  toggleSubmenu: {
    type: Function,
    required: true,
  },
  HoverToggleInnerMenuFn: {
    type: Function,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
})
</script>

<style lang=""></style>
