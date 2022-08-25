<template>
  <MainLayout>
    <h1>Evenements à venir</h1>
    <Wall :width="500" class="w-full">
      <Card v-for="e in next_events" :cover="e.cover" :title="e.title">
        <p>{{ e.description }}</p>
      </Card>
    </Wall>

    <h1 class="mt-9">Evenements passés</h1>
    <Wall :width="500" class="w-full">
      <Card v-for="e in passed_events" :cover="e.cover" :title="e.title">
        <p>{{ e.description }}</p>
      </Card>
    </Wall>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/main-layout.vue";
import Card from "@/components/card.vue";
import Wall from "@/components/wall.vue";

import { computed } from "vue";
import { events } from "@/stores";

const passed_events = computed(() => events.get().filter((x) => x.has_passed));
const next_events = computed(() => events.get().filter((x) => !x.has_passed));
</script>

<style scoped>
h1 {
  @apply mb-3 text-lg font-bold;
}
</style>
