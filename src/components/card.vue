<template>
  <div class="card bg-white" :class="{ 'p-6': padding }">
    <img v-if="cover" :src="loadImage(cover)" alt="" class="mb-3" />
    <h1 v-if="title" class="mb-3">
      {{ title }}
    </h1>
    <div class="relative flex flex-col gap-3">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { loadImage } from "@/api/tools";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{ title?: string; cover?: string; padding?: boolean }>(),
  {
    padding: true,
  }
);
</script>

<style>
.card p {
  @apply text-justify;
}

.card h1 {
  @apply text-xl font-bold;
}
</style>
