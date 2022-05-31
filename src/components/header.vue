<template>
  <div class="header grid gap-10 shadow-lg">
    <div class="flex items-center gap-3 py-6 px-8">
      <img src="@/assets/images/logo.png" alt="logo_youpssitech" class="w-16" />
      <h1 class="font-cursive text-4xl">Youpssitech</h1>
    </div>

    <div class="flex flex-col">
      <router-link
        v-for="route in routes"
        :to="route.path"
        class="px-8 py-5 hover:bg-gray-200"
      >
        {{ route.name }}
      </router-link>
    </div>

    <div class="flex items-center justify-between gap-3 py-6 px-8">
      <p class="text-sm">BDE Youpssitech - 2022/2023</p>
      <div class="flex items-center gap-3">
        <a
          v-for="link in socials"
          :href="link.url"
          target="_blank"
          class="grid place-items-center"
        >
          <VueFeather :type="link.icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import routes from "@/router/routes";
import { getSocials, Social } from "@/api";
import { onBeforeMount, ref } from "vue";

const socials = ref<Social[]>();
onBeforeMount(async () => {
  socials.value = await getSocials();
});
</script>

<style scoped>
.router-link-active,
.router-link-exact-active {
  @apply bg-gray-300;
}

.header {
  grid-template-rows: auto 1fr auto;
}
</style>
