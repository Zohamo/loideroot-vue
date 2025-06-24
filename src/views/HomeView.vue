<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <img
      alt="Loi de Root logo"
      src="@/assets/img/Root-Paper-Logo-2.png"
      style="max-width: 100%; margin: 0 auto"
    />
  </header>

  <nav>
    <RouterLink to="/loi-de-root">La Loi de Root</RouterLink>
  </nav>
</template>
