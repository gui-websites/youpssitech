<template>
  <header class="flex items-center justify-center gap-10 p-10">
    <router-link to="/about">Qui sommes nous</router-link>
    <router-link to="/events">Evenements</router-link>
    <router-link to="/" class="flex items-center gap-3">
      <VueFeather type="gitlab" size="48" />
      <h1 class="text-3xl font-bold">Youpssitech</h1>
    </router-link>
    <router-link to="/pictures">Photos</router-link>
    <router-link to="/map">Map Monde</router-link>
  </header>
</template>

<style scoped>
.router-link-exact-active {
  @apply text-orange-400;
}
</style>
