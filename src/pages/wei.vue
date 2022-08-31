<template>
  <div class="h-full min-h-full w-full">
    <header class="bg-black text-white">
      <div class="section flex flex-col items-center gap-6 lg:gap-12">
        <div
          class="flex flex-col items-center justify-center gap-6 lg:flex-row"
        >
          <img
            src="@/assets/wei/logo_wei_2022.png"
            alt=""
            class="mx-auto w-40"
          />
          <h1 class="text-4xl font-bold">WEI UPSSITECH 2022</h1>
        </div>

        <div
          class="grid aspect-video w-full max-w-lg place-items-center bg-neutral-500"
        >
          <!-- <VueFeather type="play" class="w-16 text-white" /> -->
          <video
            src="@/assets/wei/wei.mp4"
            poster="@/assets/wei/first-frame.png"
            class="w-full"
            controls
          ></video>
        </div>
      </div>
    </header>

    <div class="section two-piece">
      <p class="paragraph">
        Prosper vous invite à sa fête dans sa nouvelle maison de vacances ! Vous
        n'allez quand même pas passer à côté !!?? Cette année, notre renard vous
        ouvre les portes de sa demeure 3 étoiles : Salle de restauration,
        piscine, toboggan, salle de soirée, terrain de sport. Il a installé,
        dans son immense jardin boisé, des bungalows rien que pour vous.
        Evidemment, sa demeure nous est entièrement privatisée. Venez rencontrer
        des étudiants de votre école, de votre filière ! Vous pourrez discuter
        avec les plus anciens ou découvrir des étudiants de votre PROMO ! Et
        surtout, vous éclater grâce aux soirées prévues et nombreuses activités
        en journée.
        <b>On n'attend plus que vous !</b>
      </p>
      <img src="../assets/wei/promo/group.jpg" alt="" />
    </div>

    <div class="bg-neutral-100">
      <div class="section flex flex-col gap-6">
        <p class="paragraph">
          Prosper vous a bichonné cette année. Au programme : Pool party, Holy
          color, Rodéo mécanique, Bubble foot, Ventriglisse et j'en passe.
          Faites la fête le vendredi et samedi soir jusqu'au petit matin ! Et
          savourez le délicieux repas que notre renard vous aura concocté le
          lendemain midi.
        </p>

        <Wall :width="300" class="mx-auto w-full max-w-3xl">
          <img src="@/assets/wei/promo/bubbles.jpg" alt="" />
          <img src="@/assets/wei/promo/bus.jpg" alt="" />
          <img src="@/assets/wei/promo/splash.jpg" alt="" />
        </Wall>
      </div>
    </div>

    <div class="section two-piece">
      <div>
        <p class="paragraph">
          Toute l'équipe du BDE vous attend avec impatience ! C'est l'occasion
          parfaite de s'intégrer à l'école et à sa promotion. Faites Vite ! Il
          n'y a que <b>120 places</b> de disponible cette année.
        </p>

        <h1 class="my-3 text-xl font-bold">Réservez votre billet</h1>

        <p class="mb-3">
          Vous pouvez réserver votre billet en passant par la billeterie mais
          aussi en payer en espèces au bureau en amenant les documents
          nécessaires imprimés pour l'inscription (des exemplaires déjà imprimés
          sont disponible au bureau)
        </p>

        <p class="border-2 border-red-500 p-3 font-bold text-red-500">
          Vous devez OBLIGATOIREMENT déposer au bureau une caution de 100€ avant
          le 20 septembre. (pas de caution = pas de départ).
        </p>

        <div class="my-3 grid w-full place-items-center lg:my-6">
          <Button class="w-full lg:w-3/4" @click="sendToStore">
            Accéder à la billeterie
          </Button>
        </div>
      </div>

      <Card title="Documents importants">
        <p>
          Voici les différents documents importants à lire avant le départ !
          Lors de l'achat de votre billet, vous devrez déposer l'exonération de
          responsabilité complétée et signée, la fiche de droit à l'image
          signée, ainsi que l'autorisation parentale (si vous êtes mineur·e). La
          charte d'adhésion est un document général qui couvre l'ensemble des
          événements réalisés par le BDE. Au moment du paiement, il vous est
          demandé d'en prendre connaissance. Ce sont des règles de sécurité et
          elles s'appliqueront toutes lors de ce WEI.
        </p>

        <ul class="list-disc pl-4">
          <li v-for="[name, link] in Object.entries(files)">
            <a download :href="link">{{ name }}</a>
          </li>
        </ul>
      </Card>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { loadImage } from "@/api/tools";
import Button from "@/components/button.vue";
import Wall from "@/components/wall.vue";
import Card from "@/components/card.vue";
import Footer from "@/components/footer.vue";
import useAnalytics from "@/api/visits";

useAnalytics();

import attParentale from "../assets/wei/documents/Autorisation_parentale.pdf";
import exoneration from "../assets/wei/documents/Exoneration_de_responsabilitee.pdf";
import charte from "../assets/wei/documents/Charte_Adhesion_Evenement_BDE.pdf";
import droitImage from "../assets/wei/documents/Autorisation_Image.pdf";

const files = {
  "Fiche d'exonération de responsabilité": exoneration,
  "Charte d'adhésion à l'évènement": charte,
  "Fiche droit à l'image": droitImage,
  "Autorisation parentale": attParentale,
};

const sendToStore = () => {
  window.location.href =
    "https://www.helloasso.com/associations/bde-youpssitech/evenements/inscription-wei-2022-upssitech-1";
};
</script>

<style scoped>
a {
  @apply text-primary;
}

.section {
  @apply mx-auto flex w-full max-w-6xl p-6 lg:p-12;
}

.two-piece {
  @apply flex-col items-center gap-6 lg:flex-row lg:gap-12;
}

.two-piece > * {
  @apply w-full lg:w-1/2;
}

.paragraph {
  @apply text-justify leading-6 lg:text-lg;
}
</style>
