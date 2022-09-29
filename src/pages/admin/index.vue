<template>
  <div class="grid h-full w-full place-items-center bg-neutral-200">
    <main class="flex w-full max-w-sm flex-col gap-3 rounded-lg bg-white p-6 text-center">
      <h1 class="mb-3 text-2xl font-bold">Connectez-vous</h1>

      <p
        v-if="wrong_password"
        class="rounded-lg border border-red-500 bg-red-100 p-3 text-red-500"
      >
        Identifiants incorrects
      </p>

      <input type="text" v-model="email" placeholder="Mail" />
      <input type="password" v-model="password" placeholder="Mot de passe" />

      <button class="submit" @click="log_in">
        <Spinner v-show="loading" />
        <span v-show="!loading">Connection</span>
      </button>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { login, getUser } from "@/api/admin";
import { useRouter } from "vue-router";
import Spinner from "@/components/spinner.vue";

const email = ref("");
const password = ref("");

const loading = ref(false);
const wrong_password = ref(false);

const router = useRouter();
getUser().then((res) => {
  if (res) router.push("/admin/dashboard");
});

const log_in = async () => {
  loading.value = true;

  const res = await login(email.value, password.value);
  loading.value = false;

  if (res) router.push("/admin/dashboard");
  else wrong_password.value = true;
};
</script>

<style scoped></style>
