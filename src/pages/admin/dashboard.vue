<template>
  <AdminLayout v-slot="{ user }">
    <!-- <div id="chart"></div> -->

    <section
      id="socials"
      class="flex w-full max-w-md flex-col gap-3 rounded-lg bg-white p-6"
    >
      <div class="mb-3 flex items-center justify-between">
        <h3>Socials</h3>
        <vue-feather type="plus" />
      </div>

      <div
        v-for="s in socialsList"
        class="flex items-center justify-between border-b border-neutral-700 pb-3 last:border-b-0 last:p-0"
      >
        <div class="flex items-center gap-3">
          <Social :brand="s" />
          <span>{{ s }}</span>
        </div>
        <span class="text-blue-400">https://hello.world</span>
      </div>
    </section>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getUser, logout, User } from "@/api/admin";
import { useRouter } from "vue-router";

import * as echarts from "echarts";
import AdminLayout from "@/layouts/admin-layout.vue";
import { socialsList } from "@/api";
import Social from "@/components/social.vue";

const router = useRouter();

// USER MANAGEMENT

const user = ref<User | null>(null);

// CHARTS
const chartEl = document.getElementById("chart");
if (chartEl) {
  const chart = echarts.init(chartEl);
  chart.setOption({});
}
</script>

<style scoped>
h3 {
  @apply text-2xl font-bold;
}
</style>
