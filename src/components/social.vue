<template>
  <a
    :href="url"
    target="_blank"
    class="social"
    v-html="svg"
    :style="colorStyle"
  >
  </a>
</template>

<script lang="ts" setup>
import * as icons from "simple-icons/icons";

const props = defineProps<{ url: string; brand: string }>();

const matches = Object.values(icons).filter(
  (x) => x.title == props.brand || x.slug == props.brand.toLowerCase()
);

const { svg, hex } = matches[0] || { svg: "", hex: "#000" };
const colorStyle = `--color: #${hex}`;
</script>

<style scoped>
.social {
  @apply grid aspect-square w-6 place-content-center transition-all;
}
.social:hover {
  @apply opacity-100;
  fill: var(--color);
  color: var(--color);
}
</style>
