<template>
  <SidebarLayout>
    <div class="flex w-full max-w-3xl flex-col gap-3 p-6">
      <h1 class="mt-10 text-lg font-bold">Evenements</h1>

      <div class="grid w-full grid-cols-3 gap-3">
        <div v-for="i in 6" class="card-sm aspect-custom">
          {{ i }}
        </div>
      </div>

      <!--<h2 class="mt-6">Evenements passés</h2>
    <MasonryWall
      :items="Array.from({ length: 12 }, (_, i) => i + 1)"
      :column-width="200"
      :gap="12"
    >
      <template #default="{ item }">
        <div class="card-sm" :style="getHeight(item)">
          {{ item }}
        </div>
      </template>
    </MasonryWall>-->
    </div>
  </SidebarLayout>
</template>

<script lang="ts" setup>
import SidebarLayout from "@/layouts/sidebar.vue";
//import MasonryWall from "@yeger/vue-masonry-wall";

function getHeight(i: number) {
  return `height: ${64 * ((i % 4) + 2)}px;`;
}
</script>

<style scoped>
.card-sm {
  @apply grid place-items-center rounded-md bg-slate-300;
}

.aspect-custom {
  aspect-ratio: 3/2;
}
</style>
