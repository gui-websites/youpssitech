<template>
  <div class="col hidden"></div>
  <div class="w-full">
    <div class="hidden" ref="buffer">
      <slot />
    </div>
    <div class="wall" ref="content"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, onMounted } from "vue";

type Props = {
  order?: "horizontal" | "vertical";
  width: number;
};
const props = withDefaults(defineProps<Props>(), { order: "horizontal" });

const buffer = ref<HTMLElement>();
const content = ref<HTMLElement>();

const list = ref<Node[]>([]);

// Watch for change number of elements to display

const observer = new MutationObserver((mutations: MutationRecord[]) => {
  for (const mutation of mutations) {
    if (mutation.type != "childList" || mutation.target != buffer.value)
      continue;

    const removeText = (list: NodeList) =>
      Array.from(list).filter((x) => x.nodeName != "#text");

    const add = removeText(mutation.addedNodes);
    const rem = removeText(mutation.removedNodes);

    list.value = list.value.concat(add).filter((x) => !rem.includes(x));
  }
  createWall();
});

onMounted(() => {
  if (buffer.value) {
    observer.observe(buffer.value, { childList: true });
    list.value = Array.from(buffer.value.children);
  }
  createWall();
});

onBeforeUnmount(() => observer.disconnect());

// End

window.addEventListener("resize", createWall);

function createWall() {
  if (!content.value || list.value.length == 0) return;
  const numCols = Math.ceil((content.value?.clientWidth ?? 0) / props.width);

  content.value.innerHTML = "";
  content.value.style?.setProperty(
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

    content.value.appendChild(col);
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
