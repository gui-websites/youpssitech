<template>
  <div class="col" v-show="false"></div>
  <div class="wall w-full" ref="wall">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount, onMounted, onUpdated } from "vue";

type Props = {
  order?: "horizontal" | "vertical";
  width: number;
};
const props = withDefaults(defineProps<Props>(), { order: "horizontal" });

const wall = ref<HTMLElement>();
const list = ref<any[]>();

onMounted(() => {
  list.value = Array.from(wall.value?.children ?? []);
  createWall();
});
onUpdated(createWall);
window.addEventListener("resize", createWall);

function createWall() {
  if (!wall.value) return;
  const numCols = Math.ceil((wall.value?.clientWidth ?? 0) / props.width);

  wall.value.innerHTML = "";
  wall.value.style?.setProperty(
    "grid-template-columns",
    `repeat(${numCols}, minmax(0, 1fr))`
  );

  for (let i = 0; i < numCols; i++) {
    const items =
      list.value?.filter((x) => (list.value?.indexOf(x) ?? 0) % numCols == i) ??
      [];

    const col = document.createElement("div");
    col.classList.add("col");
    for (const item of items) col.appendChild(item);

    wall.value.appendChild(col);
  }
}
</script>

<style>
.wall {
  @apply grid gap-6;
}

.col {
  @apply flex flex-col gap-6;
}
</style>
