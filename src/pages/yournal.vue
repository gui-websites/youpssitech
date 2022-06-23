<template>
  <MainLayout>
    <h2>Présentation</h2>

    <p class="text-justify">
      C'est un projet qui a été lancé en 2015 par le BDE de l'Upssitech, le
      journal de l'école. D'abord imprimé en version papier, il à évolué en 2022
      et c'est convertit au format numérique. Il est envoyé à tous les étudiants
      et les anciens de l'écoles une fois par mois par mail. Le Yournal contient
      des actus marquantes, les actus de l'école, des annonces d'évènements à
      venir organiser par le BDE, des jeux et encore pleins d'autres choses. A
      l'heure actuelle, il est entièrement rédigé par l'équipe du BDE mais toute
      personne motivé et investit est la bienvenue dans l'équipe de rédaction.
      D'ailleurs si ça t'intéresse, n'hésites pas à nous contacter en mp sur le
      compte Instagram du BDE,
      <a
        :href="getLink('instagram')"
        target="_blank"
        class="font-bold text-orange-400"
        >@youpssitech</a
      >
      !!
    </p>

    <h2 class="mt-6">Parutions 2022</h2>
    <div class="flex items-center gap-6">
      <Card v-for="y in yournaux.get()" :padding="false">
        <img :src="y.cover" alt="" class="w-64" />
        <div
          class="absolute bottom-0 flex w-full items-center justify-between border-2 border-white bg-black p-3 text-white"
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
import { socials, yournaux } from "@/stores";

function getLink(name: string) {
  const matches = socials
    .get()
    .filter((s) => s.name.toLowerCase() == name.toLowerCase());
  return matches.length != 0 ? matches[0].link : "";
}
</script>

<style scoped>
h2 {
  @apply mb-3 text-lg font-bold;
}
</style>
