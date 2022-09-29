<template>
  <div class="flex h-full bg-neutral-200">
    <nav class="col h-full justify-between bg-white p-6">
      <div class="col">
        <vue-feather
          v-for="[icon, route] in Object.entries(routes)"
          :type="icon"
          class="cursor-pointer"
          @click="goto(route)"
        />
      </div>
      <div class="col">
        <vue-feather type="settings" class="cursor-pointer" @click="goto('settings')" />
        <vue-feather type="log-out" class="cursor-pointer" @click="log_out" />
      </div>
    </nav>
    <main class="grid h-full flex-grow place-items-center">
      <slot :user="user"></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getUser, logout, User } from "@/api/admin";
import { useRouter } from "vue-router";

const router = useRouter();

// USER MANAGEMENT

const user = ref<User | null>(null);
getUser().then((u) => {
  if (!u) router.push("/admin");
  user.value = u;
});

const log_out = async () => {
  await logout();
  router.push("/admin");
};

const goto = (route: string) => router.push(`/admin/${route}`);

const routes = {
  "bar-chart": "dashboard",
  user: "members",
  calendar: "events",
  image: "gallery",
};
</script>

<style scoped>
.col {
  @apply flex flex-col items-center gap-6;
}
</style>
