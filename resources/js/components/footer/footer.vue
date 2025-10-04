<template>
    <footer class="footer mt-auto py-3 text-center">
        <div class="container">
            <span class="text-muted"> Copyright © <span id="year">{{ currentYear }}</span> <a href="javascript:void(0);"
                    class="text-dark fw-medium">Vyzor</a>.
                Designed with <span class="bi bi-heart-fill text-danger"></span> by <a href="javascript:void(0);">
                    <span class="fw-medium text-primary">Spruko</span>
                </a> All
                rights
                reserved
            </span>
        </div>
    </footer>
</template>

<script setup>
let currentYear = new Date().getFullYear()
</script>

<style lang="">

</style>
