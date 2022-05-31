<template>
  <HeaderVue class="z-10"></HeaderVue>
  <div
    id="router"
    class="relative z-0 grid place-items-center overflow-y-auto bg-gray-100"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import HeaderVue from "@/components/header.vue";
</script>

<style>
#main {
  @apply grid h-full;
  grid-template-columns: auto 1fr;
}

#main > * {
  @apply min-h-full;
}
</style>
