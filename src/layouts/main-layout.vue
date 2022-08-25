<template>
  <div class="min-h-full">
    <HeaderVue></HeaderVue>
    <div id="main" class="my-10 mx-auto w-full max-w-5xl px-6">
      <slot />
    </div>
  </div>
  <FooterVue></FooterVue>
</template>

<script setup lang="ts">
import HeaderVue from "@/components/header.vue";
import FooterVue from "@/components/footer.vue";
import useAnalytics from "@/api/visits";

useAnalytics();
</script>
