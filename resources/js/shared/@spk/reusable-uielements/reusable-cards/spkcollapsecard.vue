<script lang="ts" setup>
import { ref, defineProps, onMounted } from 'vue'

// Extend the Document interface for fullscreen vendor prefixes
interface ExtendedDocument extends Document {
    mozCancelFullScreen?: () => void
    webkitExitFullscreen?: () => void
    msExitFullscreen?: () => void
}

interface Props {
    collapseToggle?: boolean
    hideToggle?: boolean
    fullScreen?: boolean
    Customheaderclass?: string
    Text?: string
}

// Define props with types
const props = defineProps<Props>()

// Local state
const isVisible = ref(true)
const isFullscreen = ref(false)
const termsCard = ref<HTMLElement | null>(null)

function removeCard() {
    isVisible.value = false
}

function toggleFullscreen() {
    const cardEl = termsCard.value

    if (!cardEl) return

    if (!isFullscreen.value) {
        if (cardEl.requestFullscreen) {
            cardEl.requestFullscreen()
        } else if ((cardEl as any).mozRequestFullScreen) {
            (cardEl as any).mozRequestFullScreen()
        } else if ((cardEl as any).webkitRequestFullscreen) {
            (cardEl as any).webkitRequestFullscreen()
        } else if ((cardEl as any).msRequestFullscreen) {
            (cardEl as any).msRequestFullscreen()
        }
    } else {
        const doc = document as ExtendedDocument
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (doc.mozCancelFullScreen) {
            doc.mozCancelFullScreen()
        } else if (doc.webkitExitFullscreen) {
            doc.webkitExitFullscreen()
        } else if (doc.msExitFullscreen) {
            doc.msExitFullscreen()
        }
    }

    isFullscreen.value = !isFullscreen.value
}
</script>

<template>
    <div :class="['card', 'custom-card', { 'fullscreen': isFullscreen }]" v-if="isVisible" ref="termsCard">
        <div :class="`card-header justify-content-between ${Customheaderclass}`">
            <div class="card-title">
                {{ Text }}
            </div>
            <template v-if="collapseToggle">
                <slot name="collapseToggle" />
            </template>
            <template v-if="hideToggle">
                <a href="javascript:void(0);" data-bs-toggle="card-remove" @click="removeCard">
                    <i class="ri-close-line fs-18"></i>
                </a>
            </template>
            <template v-if="fullScreen">
                <a href="javascript:void(0);" data-bs-toggle="card-fullscreen" @click="toggleFullscreen">
                    <i class="ri-fullscreen-line"></i>
                </a>
            </template>
        </div>
        <template v-if="collapseToggle">
            <div class="collapse show border-top" id="collapseExample">
                <slot name="collapseContent" />
            </div>
        </template>
        <template v-if="hideToggle">
            <slot name="hideContent" />
        </template>
        <template v-if="fullScreen">
            <slot name="FullContent" />
        </template>
    </div>
</template>
