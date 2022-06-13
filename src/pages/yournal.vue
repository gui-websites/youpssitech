<template>
  <MainLayout>
    <h2 class="mb-6 text-lg font-bold">Parutions 2022</h2>
    <div class="flex items-center gap-6">
      <Card v-for="y in yournaux.getYournaux()" :padding="false">
        <img :src="y.cover" alt="" class="w-64" />
        <div
          class="absolute bottom-0 flex w-full items-center justify-between bg-black p-3 text-white"
        >
          <p>{{ y.name }}</p>
          <a :href="y.download" target="_blank">
            <VueFeather type="download" />
          </a>
        </div>
      </Card>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/main-layout.vue";
import Card from "@/components/card.vue";
import { useYournalStore } from "@/stores";

function getName(name: string) {
  return `Yournal ${name}.pdf`;
}

function getDownload(blob: Blob | null) {
  return blob ? URL.createObjectURL(blob) : "";
}

const yournaux = useYournalStore();
</script>
