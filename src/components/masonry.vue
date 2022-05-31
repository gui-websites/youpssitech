<template>
  <div class="masonry grid" :style="gridParams">
    <slot v-for="item in items" :item="item"></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

type Props = {
  items: any[];
  gap?: number;
  columnWidth?: number;
};
const props = withDefaults(defineProps<Props>(), {
  gap: 0,
  columnWidth: 200,
});

const gridParams = computed(
  () =>
    `gap: ${props.gap}px; ` +
    `grid-template-columns: repeat(auto-fit, minmax(${props.columnWidth}px, 1fr));`
);

const itemWidth = computed(() => `width: ${props.columnWidth}px;`);
</script>
