<template>
  <MainLayout>
    <Wall :width="500" ref="wall">
      <Card v-for="pole in poles" :title="pole">
        <div class="flex flex-wrap items-center gap-3">
          <img
            v-for="m in people(pole)"
            :src="m.avatar"
            alt=""
            class="aspect-square w-16 rounded-full"
          />
        </div>
      </Card>
    </Wall>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/main-layout.vue";
import Card from "@/components/card.vue";
import Wall from "@/components/wall.vue";

import { members } from "@/stores";
import { ref, computed, watch } from "vue";

const wall = ref<InstanceType<typeof Wall>>();

const poles = computed(() => members.get().keySet());
const people = (pole: string) =>
  members
    .get()
    .get(pole)
    .sort((a, b) => {
      return a.leader == b.leader ? 0 : a.leader ? -1 : 1;
    });
</script>
