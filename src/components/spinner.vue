<template>
  <div
    class="spin aspect-square rounded-full border-white border-t-transparent"
    :style="widthStyle"
  ></div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue";

const props = withDefaults(defineProps<{ width?: number }>(), {
  width: 24,
});

const widthStyle = computed(
  () => `width: ${props.width}px; border-width: ${props.width / 8}px`
);
</script>

<style scoped>
.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
