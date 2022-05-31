<template>
  <teleport to="#app">
    <div
      v-if="shouldShowModal"
      @click="shouldShowModal = false"
      class="absolute inset-0 z-40 bg-black bg-opacity-70"
    >
      <div
        class="pointer-events-none fixed inset-0 z-50 grid place-items-center p-3"
      >
        <div
          class="pointer-events-auto rounded-lg bg-white p-3 text-center"
          :style="widthStyle"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Props

interface Props {
  width?: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: "auto",
});

const widthStyle = computed(() => `width: ${props.width};`);

// Modal logic

const shouldShowModal = ref(false);

const showModal = () => {
  shouldShowModal.value = true;
};

const hideModal = () => {
  shouldShowModal.value = false;
};

defineExpose({ showModal, hideModal });
</script>
