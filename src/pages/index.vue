<template>
  <MainLayout>
    <WallVue :width="500">
      <Card title="Bienvenue au BDE Youpssitech">
        <p>
          Retrouvez y toutes les informations sur nos événements, ainsi que les
          photos, les yournaux et pleins d'autres infos super cool sur l'école !
          <br class="mb-2" />
          N'hésite pas à nous suivre sur instagram pour avoir nos actualités en
          DIRECT.
        </p>
        <div class="flex items-center gap-3">
          <a v-for="s in socials.get()" :href="s.link" target="_blank">
            <VueFeather :type="s.name.toLowerCase()" />
          </a>
        </div>
      </Card>

      <Card :padding="false">
        <img src="@/assets/images/photo.jpg" alt="" class="w-full" />
      </Card>

      <Card title="Partenariat Xiaomi">
        <img src="@/assets/images/xiaomi.png" alt="" />
        <p>
          Nous avons fait équipe avec Xiaomi pour vous donner la chance de
          remporter des lots à l'occasions de tirages aux sorts sur instagram.
          Suivez-nous pour ne pas rater le suivant !
        </p>
      </Card>

      <Card title="Le Yournal">
        <p>
          Venez découvrir la ligne éditoriale de l'école rédigée par les
          étudiants. Elle vous tiendra aux courant des actus dans le monde ainsi
          que des prochains évènements organisés par le BDE.
        </p>
        <div>
          <Button @click="goto('/yournal')">Voir les Yournaux</Button>
        </div>
      </Card>
    </WallVue>

    <!-- <hr>

    <div>
      <h1>Nos</h1>
    </div> -->
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/main-layout.vue";
import Card from "@/components/card.vue";
import Button from "@/components/button.vue";

import { useRouter } from "vue-router";
import { socials } from "@/stores";
import WallVue from "@/components/wall.vue";

const router = useRouter();
function goto(route: string) {
  router.push(route);
}
</script>

<style scoped>
.col {
  @apply flex flex-col gap-6;
}
</style>
