<template>
  <SidebarLayout>
    <div class="h-full w-full">
      <div class="banner h-72 w-full" :style="bannerStyle"></div>

      <!-- Current list -->
      <div class="card mx-auto my-6 w-full max-w-4xl">
        <h1 class="title mb-6">Le Bureau</h1>

        <div class="mx-auto mb-6 grid w-auto grid-cols-2 gap-6">
          <div v-for="dept in list">
            <h2 class="mb-3">{{ dept.name }}</h2>
            <div class="grid grid-cols-5 gap-3">
              <div v-for="member in dept.members" class="member">
                <div class="none absolute rounded-md bg-black p-3 text-white">
                  {{ member.name }}
                </div>
                <img
                  :src="member.img"
                  alt=""
                  class="aspect-square w-14 rounded-full shadow-md shadow-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Anciennes listes -->
      <div class="card mx-auto my-6 w-full max-w-4xl">
        <h1 class="title mb-6">Listes précédentes</h1>
        <div class="flex items-center gap-3">
          <div
            v-for="list in old_lists"
            class="flex flex-col justify-center gap-2"
          >
            <img :src="loadImage(list.icon)" alt="" class="w-32 rounded-md" />
            <p class="text-center">{{ list.dates }}</p>
          </div>
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>

<script lang="ts" setup>
import { getList, getOldLists, Dept, List } from "@/api";
import { onBeforeMount, ref } from "vue";

import { loadImage } from "@/api/tools";
import SidebarLayout from "@/layouts/sidebar.vue";

// Banner

const bannerStyle = `background-image: url('${loadImage(
  "../assets/images/banner.png"
)}');`;

// List retrieval

const list = ref<Dept[]>();
const old_lists = ref<List[]>();
onBeforeMount(async () => {
  list.value = await getList();
  old_lists.value = await getOldLists();
});
</script>

<style scoped>
.banner {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.member > div {
  display: none;
}
.member:hover > div {
  @apply block;
}
</style>
