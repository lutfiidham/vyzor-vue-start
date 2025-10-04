<template>
    <div class="card custom-card" :class="customCardClass">
        <div class="card-header justify-content-between" :class="customCardHeaderClass">
            <div class="card-title" v-html="title"></div>
            <div class="prism-toggle">
                <button class="btn btn-sm btn-primary-light" @click="toggleCode">
                    Show Code
                    <i :class="`${showCode ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 align-middle`"></i>
                </button>
            </div>
        </div>

        <div class="card-body" :class="customCardBodyClass" v-if="!showCode">
            <slot />
        </div>

        <div class="card-footer border-top-0" v-if="showCode" :class="customCardFooterClass">
            <div class="tabs custom-code-tab">
                <button :class="`btn tab-button text-default me-2 ${activeTab === 'vue' ? 'active' : ''}`"
                    @click="handleTabChange('vue')">
                    Vue
                </button>
                <template v-if="code?.data">
                    <button :class="`btn tab-button text-default ${activeTab === 'data' ? 'active' : ''}`"
                        @click="handleTabChange('data')">
                        Data
                    </button>
                </template>
            </div>

            <pre class="language-html">
    <code class="language-html">
        {{ activeCode }}
    </code>
</pre>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

// Define props with proper types
interface Props {
    title?: string;
    code?: {
        script?: string;
        data?: string;
    };
    customCardClass?: string;
    customCardHeaderClass?: string;
    customCardBodyClass?: string;
    customCardFooterClass?: string;
}

const props = defineProps<Props>();

// State variables
const showCode = ref(false);
const activeTab = ref<'vue' | 'data'>('vue');

// Computed property to return the active code snippet
const activeCode = computed(() => {
    if (activeTab.value === 'vue') return props.code?.script ?? '';
    if (activeTab.value === 'data') return props.code?.data ?? '';
    return '';
});

// Toggle function
function toggleCode() {
    showCode.value = !showCode.value;
}

// Tab change handler
function handleTabChange(tab: 'vue' | 'data') {
    activeTab.value = tab;
}
</script>

<style scoped>
.my-editor {
    background: #2d2d2d;
    color: #ccc;
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
}

.prism-editor__textarea:focus {
    outline: none;
}
</style>
