<template>
  <MainLayout>
    <WallVue :width="500" order="reverse">
      <Card title="Bienvenue au BDE Youpssitech">
        <p>
          Retrouvez y toutes les informations sur nos événements, ainsi que les photos,
          les yournaux et pleins d'autres infos super cool sur l'école !
          <br class="mb-2" />
          N'hésite pas à nous suivre sur <a
            href="https://www.instagram.com/bde_youpssitech/"
            class="text-primary hover:underline"
            >Instagram</a
          > pour avoir nos actualités en DIRECT.
        </p>
        <div class="mt-3 flex items-center gap-6">
          <Social v-for="s in socials.get()" :brand="s.name" :url="s.link" />
        </div>
      </Card>

      <Card :padding="false">
        <img src="@/assets/images/photo.jpg" alt="" class="w-full" />
      </Card>

      <Card>
        <img src="@/assets/wei/logo_wei_2023.png" alt="" />
        <h1>Week-end d'intégration</h1>
        <p>
          En restant sur un air de vacances, Prosper vous invite à son week-end d’intégration annuel.
          <br class="mb-2" />
          Rendez-vous du 22 au 24 septembre pour célébrer la rentrée, les rencontres et les retrouvailles tous ensemble comme il se doit !
        </p>
        <div>
          <Button goto="wei">En savoir plus</Button>
        </div>
      </Card>

      <Card title="Le Yournal">
        <p>
          Venez découvrir la ligne éditoriale de l'école rédigée par les étudiants. Elle
          vous tiendra aux courant des actus dans le monde ainsi que des prochains
          évènements organisés par le BDE.
        </p>
        <div>
          <Button goto="/yournal">Voir les Yournaux</Button>
        </div>
      </Card>
      
      <!--
      <Card>
        <img src="@/assets/images/mojjo-logo.png" alt="" />
        <h1>Partenariat x Mojjo</h1>
        <p>
          Le BDE Youpssitech vous propose la carte mojjo toulousaine ! Réductions
          illimitées toute l'année pour les étudiants ! 80€ de cadeaux offerts dans les
          bars et restaurants partenaires tels que Mcdo, Pizza hut, Burger king, Café
          Populaire, The Danu et plein d'autres (<a
            href="https://www.carte-mojjo.fr/toulouse/offres/"
            class="text-primary hover:underline"
            >Voir la liste complète des avantages</a
          >).
        </p>
        <p>
          L'achat d'une carte mojjo permet également de soutenir ton BDE et de l'aider à
          financer de plus gros événements ! Viens récupérer ta carte au bureau pour 15€
          (commande hello asso ou paiement en espèce)
        </p>
        <div class="flex items-center gap-3">
          <Button
            href="https://www.helloasso.com/associations/bde-youpssitech/boutiques/carte-mojjo"
            >Commander la carte</Button
          >
        </div>
      </Card>
      -->

      <Card title="Ils nous font confiance !">
        <p>
          Voici nos partenaires pour l'année 2022-2023, hésitez pas à checker leurs sites
          !
        </p>

        <div class="grid grid-cols-4 gap-3">
          <a
            v-for="[name, cta] in Object.entries(partners)"
            class="grid aspect-square place-items-center border-2 border-black"
            :href="cta"
          >
            <img :src="load(name)" alt="" class="w-full" />
          </a>
        </div>
      </Card>

      
    </WallVue>
  </MainLayout>
</template>

<script setup lang="ts">
import { computed } from "vue";

import MainLayout from "@/layouts/main-layout.vue";
import Card from "@/components/card.vue";
import Button from "@/components/button.vue";

import { socials } from "@/stores";
import WallVue from "@/components/wall.vue";
import Social from "@/components/social.vue";

const partners = {
  "baless.jpg": "https://www.baless.fr/",
  "eclipse.png": "https://linktr.ee/eclipsetoulouse",
  "mojjo.jpg": "https://www.carte-mojjo.fr/toulouse/",
  "paranormal.jpg": "https://paranormalfestival.fr/toulouse/",
};

const load = (name: string) =>
  new URL(`../assets/images/partners/${name}`, import.meta.url).toString();
</script>

<style scoped>
.col {
  @apply flex flex-col gap-6;
}
</style>
