<template>
  <SidebarLayout>
    <div class="background grid h-full w-full place-items-center">
      <div class="card flex w-full max-w-xl flex-col gap-3">
        <h1 class="title">La Map Monde</h1>
        <p>
          La map monde est une carte intéractive qui permet de voir les
          entreprises où sont allés les anciens diplômés UPSSITECH.
        </p>
        <div class="alert-box">
          <div class="flex items-center bg-gray-200 px-3">
            <VueFeather type="info" />
          </div>
          <p class="p-2">
            Cette page est en cours de développement. Vous serez prévenus via
            notre instagram lorsqu'elle sera prête.
          </p>
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>

<script lang="ts" setup>
import SidebarLayout from "@/layouts/sidebar.vue";
</script>

<style scoped>
.background::before {
  background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages6.alphacoders.com%2F330%2F330366.jpg&f=1&nofb=1");
}

.alert-box {
  @apply grid gap-2 rounded-md border-2 border-gray-200;
  grid-template-columns: auto 1fr;
}
</style>
