<template>
  <MainLayout>
    <div class="flex flex-col gap-3">
      <Wall :width="300">
        <!-- <Card :padding="false" v-for="image in loaded_pics">
          <img :src="image" alt="" />
        </Card> -->
        <img v-for="image in pictures.get()" :src="image" alt="" />
      </Wall>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/main-layout.vue";
import Wall from "@/components/wall.vue";

import { pictures } from "@/stores";
</script>
