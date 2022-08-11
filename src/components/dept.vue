<template>
  <Card>
    <div class="flex items-center justify-between gap-3">
      <h1>{{ dept.name }}</h1>
      <VueFeather
        :type="icon"
        @click="showDetails = !showDetails"
        class="cursor-pointer"
      />
    </div>
    <p>{{ dept.desc }}</p>
    <div
      class="flex flex-wrap"
      :class="{
        'items-center': !showDetails,
        '-space-x-3': !showDetails,
        'flex-col': showDetails,
        'gap-3': showDetails,
      }"
    >
      <div v-for="m in sorted(dept.members)" class="flex items-center gap-3">
        <img
          :src="m.avatar"
          alt=""
          class="aspect-square w-12 rounded-full border-2 border-black bg-white"
        />
        <p v-show="showDetails">{{ m.name }}</p>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue";
import Card from "@/components/card.vue";
import { Dept, Member } from "@/api";

const props = defineProps<{ dept: Dept }>();

const showDetails = ref(false);
const icon = computed(() =>
  showDetails.value ? "chevron-up" : "chevron-down"
);

const sorted = (list: Member[]) =>
  list.sort((a, b) => {
    return a.leader == b.leader ? 0 : a.leader ? -1 : 1;
  });
</script>

<style scoped></style>
