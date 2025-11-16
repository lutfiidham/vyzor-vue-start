<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer mt-auto py-3 text-center">
    <div class="container">
      <span class="text-muted">
        Copyright © <span id="year">2025 - {{ currentYear }}</span>
        <a href="javascript:void(0);" class="text-dark fw-medium" />. Compiled with
        <span class="bi bi-cup-hot-fill text-danger" /> by
        <a href="javascript:void(0);">
          <span class="fw-medium text-primary">Idham</span>
        </a>
        All rights reserved
      </span>
    </div>
  </footer>
</template>

<style lang=""></style>
