<template>
  <MainLayout>
    <Wall :width="500" class="w-full">
      <Card v-for="e in events.get()" :cover="e.cover" :title="e.title">
        <p>{{ e.description }}</p>
      </Card>
    </Wall>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/main-layout.vue";
import Card from "@/components/card.vue";
import Wall from "@/components/wall.vue";

import { events } from "@/stores";
</script>
