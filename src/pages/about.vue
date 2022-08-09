<template>
  <MainLayout>
    <h1 class="mb-3 text-lg font-bold">Liste Upssitopia</h1>

    <p class="mb-6 text-justify">
      Nous sommes la liste UPSSITOPIA représentant le BDE YOUPSSITECH de
      l'upssitech (lien du site) sur l'année 2022-2023 ! Notre objectif premier
      est d'amener une cohésion entre tous les élèves de l'école quelque soit
      leur filière. Pour ce faire nous organisons toutes sortes d'événements :
      Tournoi de sport, tournoi de jeux, soirées, distribution, partenariat,
      loto... Nous tenons également un Journal d'école disponible ici (lien).
      Vous pouvez nous contacter via instagram (lien) mais aussi via discord
      (lien) ou même par mail (bde.youpssitech@gmail.com) Nous vous souhaitons
      une superbe année à l'UPSSITECH !
    </p>

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

import { list, councils } from "@/stores";
import Card from "@/components/card.vue";

const years = (year: number) => `${year}/${year + 1}`;
</script>
