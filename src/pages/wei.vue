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
          <VueFeather type="play" class="w-16 text-white" />
        </div>
      </div>
    </header>

    <div class="section two-piece">
      <p class="paragraph">
        Prospère vous invite à sa fête dans sa nouvelle maison de vacances !
        Vous n'allez quand même pas passer à côté !!?? Cette année, prospère le
        renard nous ouvre les portes de sa demeure 3 étoiles : Salle de
        restauration, piscine, salle de soirée. Il a installé des bungalows rien
        que pour vous, dans son immense jardin boisé. Evidemment, sa demeure
        nous est entièrement privatisée. Venez rencontrer des étudiants de votre
        école, de votre filière ! Vous pourrez discuter avec les plus anciens ou
        découvrir de nouvelles têtes ! Et surtout, vous éclater grâce aux
        soirées prévues et nombreuses activités en journée.
        <b>On n'attends plus que vous !</b>
      </p>
      <img :src="img('group')" alt="" />
    </div>

    <div class="bg-neutral-100">
      <div class="section flex flex-col gap-6">
        <p class="paragraph">
          Prospère vous a bichonné cette année. Au programme : Pool party, Holy
          color, Rodéo mécanique, Bubble foot, Ventriglisse et j'en passe.
          Faites la fête le vendredi et samedi soir jusqu'au petit matin ! Et
          savourez le délicieux repas que notre renard vous aura concocté le
          lendemain midi.
        </p>

        <Wall :width="300" class="mx-auto w-full max-w-3xl">
          <img v-for="i in ['bubbles', 'bus', 'splash']" :src="img(i)" alt="" />
        </Wall>
      </div>
    </div>

    <div class="section two-piece">
      <div>
        <p class="paragraph">
          Toute l'équipe du BDE vous attends avec impatience ! C'est l'occasion
          parfaite de s'intégrer à l'école et à sa promotion. Faites Vite ! Il
          n'y a que <b>120 places</b> de disponible cette année.
        </p>

        <div class="mt-3 grid w-full place-items-center lg:mt-6">
          <Button class="w-full lg:w-3/4"> Accéder à la billeterie </Button>
        </div>
      </div>

      <Card title="Informations importantes">
        <p>
          Voici les différents documents importants à lire avant le départ !
          Lors de l'achat de votre billet vous devrez déposer l'exonération de
          responsabilité complétée et signée + l'autorisation parentale (si vous
          êtes mineur·e). La charte d'adhésion est un document général qui
          couvre l'ensemble des événements réalisés par le BDE. Lors de l'achat
          de votre billet il vous ai demandé d'en prendre connaissance avant le
          paiement. Ce sont des règles de sécurité et elles s'appliqueront
          toutes à ce WEI.
        </p>

        <ul class="list-disc pl-4">
          <li>
            <a
              download
              href="../assets/wei/documents/Exoneration_de_responsabilitee.pdf"
              >Fiche d'exonération de responsabilité</a
            >
          </li>
          <li>
            <a
              download
              href="../assets/wei/documents/Charte_Adhesion_Evenement_BDE.pdf"
              >Charte d'adhésion à l'évènement</a
            >
          </li>
          <li>
            <a
              download
              href="../assets/wei/documents/Autorisation_parentale.pdf"
              >Autorisation parentale</a
            >
            (Si mineur·e)
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

const img = (name: string) => loadImage(`../assets/wei/promo/${name}.jpg`);
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
