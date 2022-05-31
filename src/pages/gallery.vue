<template>
  <SidebarLayout>
    <div class="w-full max-w-6xl p-6">
      <h1 class="title mt-10 mb-6 text-left">Gallerie</h1>
      <!-- <VueMasonry :items="images" :column-width="200" :gap="12">
        <template v-slot="{ item }">
          <img
            :src="`${item}`"
            class="rounded-md"
            @click="previewImage(`${item}`)"
          />
        </template>
      </VueMasonry> -->

      <ModalVue ref="previewBox">
        <img :src="previewImg" alt="" class="preview-image" />
      </ModalVue>
    </div>
  </SidebarLayout>
</template>

<script lang="ts" setup>
import { getImages } from "@/api";
import { ref, onBeforeMount } from "vue";

import ModalVue from "@/components/modal.vue";
import SidebarLayout from "@/layouts/sidebar.vue";

// Image loading

const images = ref<string[]>([]);
onBeforeMount(async () => {
  images.value = await getImages();
});

// Image preview
const previewBox = ref<typeof ModalVue>();
const previewImg = ref("");
function previewImage(item: string) {
  previewImg.value = item;
  previewBox.value?.showModal();
}
</script>

<style scoped>
.preview-image {
  @apply max-w-2xl;
  max-height: 512px;
}
</style>
