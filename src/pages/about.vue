<template>
  <MainLayout>
    <h1 class="mb-3 text-lg font-bold">Liste Upssitopia</h1>

    <div class="mb-6 text-justify">
      <p class="mb-2">
        Nous sommes la liste UPSSITOPIA représentant le BDE Youpssitech de
        <a href="https://www.upssitech.eu/" target="_blank">l'UPSSITECH</a> sur
        l'année 2022-2023 ! Notre objectif premier est d'amener une cohésion
        entre tous les élèves de l'école quelque soit leur filière. Pour ce
        faire nous organisons toutes sortes d'événements : Tournoi de sport,
        tournoi de jeux, soirées, distribution, partenariat, loto... Nous tenons
        également un <router-link to="/yournal">Journal d'école</router-link>.
      </p>
      <p>
        Vous pouvez nous contacter via
        <a :href="getLink('instagram')" target="_blank">Instagram</a> ou par
        mail (<a href="mailto:bde.youpssitech@gmail.com" target="_blank"
          >bde.youpssitech@gmail.com</a
        >) Nous vous souhaitons une superbe année à l'UPSSITECH !
      </p>
    </div>

    <Wall :width="500" class="mb-6">
      <Dept v-for="dept in list.get()" :dept="dept" />
    </Wall>

    <h1 class="mb-3 text-lg font-bold">Le BDE à travers les âges</h1>

    <div class="flex items-center gap-6">
      <Card v-for="c in councils.get()" class="w-auto">
        <img :src="c.logo" alt="" class="w-32" />
        <div>
          <p>{{ c.name }}</p>
          <p class="mt-1 text-sm opacity-70">{{ years(c.year) }}</p>
        </div>
      </Card>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/main-layout.vue";
import Wall from "@/components/wall.vue";
import Dept from "@/components/dept.vue";

import { list, councils, getLink } from "@/stores";
import Card from "@/components/card.vue";

const years = (year: number) => `${year}/${year + 1}`;
</script>

<style scoped>
a,
router-link {
  @apply text-primary;
}
</style>
