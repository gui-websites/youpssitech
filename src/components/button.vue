<template>
  <button
    @click="onClick"
    class="button cursor-pointer border border-white bg-black px-6 py-4 font-bold text-white hover:ring-2 hover:ring-black"
  >
    <slot />
  </button>
</template>

<style scoped>
.button {
  min-width: 150px;
}
</style>

<script setup lang="ts">
import { useRouter } from "vue-router";

const props = defineProps<{ goto?: string }>();
const emit = defineEmits(["click"]);
const router = useRouter();

function onClick() {
  if (props.goto) router.push(props.goto);
  else emit("click", null);
}
</script>
