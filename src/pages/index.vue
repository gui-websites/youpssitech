<template>
  <MainLayout>
    <WallVue :width="500" order="reverse">
      <Card title="Bienvenue au BDE Youpssitech">
        <p>
          Retrouvez y toutes les informations sur nos événements, ainsi que les
          photos, les yournaux et pleins d'autres infos super cool sur l'école !
          <br class="mb-2" />
          N'hésite pas à nous suivre sur instagram pour avoir nos actualités en
          DIRECT.
        </p>
        <div class="mt-3 flex items-center gap-6">
          <Social v-for="s in socials.get()" :brand="s.name" :url="s.link" />
        </div>
      </Card>

      <Card :padding="false">
        <img src="@/assets/images/photo.jpg" alt="" class="w-full" />
      </Card>

      <Card>
        <img src="@/assets/wei/logo_wei_2022.png" alt="" />
        <h1>Week-end d'intégration</h1>
        <p>
          Prospère vous invite à sa fête dans sa nouvelle maison de vacances !
          Vous n'allez quand même pas passer à côté !!??
          <br class="mb-2" />
          Le week-end d'intégration est l'événement à NE PAS RATER ! Venez à la
          rencontre d'autres étudiants de l'école et profitez une dernière fois
          de vos vacances !
        </p>
        <div>
          <Button goto="wei">En savoir plus</Button>
        </div>
      </Card>

      <div class="flex flex-col gap-6">
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
            étudiants. Elle vous tiendra aux courant des actus dans le monde
            ainsi que des prochains évènements organisés par le BDE.
          </p>
          <div>
            <Button goto="/yournal">Voir les Yournaux</Button>
          </div>
        </Card>
      </div>
    </WallVue>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/main-layout.vue";
import Card from "@/components/card.vue";
import Button from "@/components/button.vue";

import { useRouter } from "vue-router";
import { socials } from "@/stores";
import WallVue from "@/components/wall.vue";
import Social from "@/components/social.vue";

import weiImg from "@/assets/wei/logo_wei_2022.png";
</script>

<style scoped>
.col {
  @apply flex flex-col gap-6;
}
</style>
