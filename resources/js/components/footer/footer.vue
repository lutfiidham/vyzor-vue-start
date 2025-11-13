<template>
  <footer class="footer mt-auto py-3 text-center">
    <div class="container">
      <span class="text-muted">
        Copyright © <span id="year">2025 - {{ currentYear }}</span>
        <a href="javascript:void(0);" class="text-dark fw-medium"></a>. Compiled with
        <span class="bi bi-cup-hot-fill text-danger"></span> by
        <a href="javascript:void(0);">
          <span class="fw-medium text-primary">Idham</span>
        </a>
        All rights reserved
      </span>
    </div>
  </footer>
</template>

<script setup>
let currentYear = new Date().getFullYear()
</script>

<style lang=""></style>
