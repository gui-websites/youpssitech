<template>
  <button
    @click="onClick"
    class="button grid cursor-pointer place-items-center border border-white bg-black px-6 py-4 font-bold text-white hover:ring-2 hover:ring-black"
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

type Props = {
  goto?: string;
  href?: string;
  hollow?: boolean;
};
const props = withDefaults(defineProps<Props>(), {
  hollow: false,
});

const emit = defineEmits(["click"]);
const router = useRouter();

function onClick() {
  if (props.goto) router.push(props.goto);
  else if (props.href) window.location.href = props.href;
  else emit("click", null);
}
</script>
