<template>
  <header class="hidden items-center justify-center gap-10 p-10 lg:flex">
    <router-link to="/about">Qui sommes nous</router-link>
    <router-link to="/events">Evenements</router-link>
    <router-link to="/" class="flex items-center gap-3">
      <VueFeather type="gitlab" size="48" />
      <h1 class="text-3xl font-bold">Youpssitech</h1>
    </router-link>
    <router-link to="/pictures">Photos</router-link>
    <router-link to="/map">Map Monde</router-link>
  </header>

  <header class="lg:hidden">
    <div class="-mb-6 flex items-center justify-between p-6">
      <div class="flex items-center gap-3">
        <VueFeather type="gitlab" />
        <h1 class="text-lg font-bold">Youpssitech</h1>
      </div>
      <VueFeather
        :type="icon"
        class="cursor-pointer"
        @click="hideMenu = !hideMenu"
      />
    </div>
    <div :class="{ hidden: hideMenu, menu: !hideMenu }">
      <router-link to="/">Accueil</router-link>
      <router-link to="/about">Qui sommes nous</router-link>
      <router-link to="/events">Evenements</router-link>
      <router-link to="/pictures">Photos</router-link>
      <router-link to="/map">Map Monde</router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const hideMenu = ref(true);
const icon = computed(() => (hideMenu.value ? "menu" : "x"));
</script>

<style scoped>
.router-link-exact-active {
  @apply text-primary;
}

.menu {
  @apply absolute z-50 mt-6 flex w-full flex-col bg-white shadow-lg;
}

.menu > * {
  @apply w-full bg-white p-6 text-center text-black;
}

.menu > *.router-link-exact-active {
  @apply bg-black text-white;
}
</style>
