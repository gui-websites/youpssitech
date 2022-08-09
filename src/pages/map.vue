<template>
  <MainLayout>
    <div class="relative">
      <img
        src="https://images.unsplash.com/photo-1478860409698-8707f313ee8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt=""
        class="w-full"
      />
      <p
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-6 text-4xl font-bold"
      >
        En cours de développement
      </p>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/main-layout.vue";
</script>
