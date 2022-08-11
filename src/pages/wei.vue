<template>
  <div class="mx-auto flex w-full max-w-4xl flex-col gap-6 px-3 pb-3">
    <header class="text-center">
      <img
        src="@/assets/images/wei/logo_wei_2022.png"
        alt=""
        class="mx-auto w-48"
      />
      <h1 class="text-2xl font-bold">WEI UPSSITECH 2022</h1>
    </header>

    <div class="cols flex-col">
      <p class="max-w-lg text-justify">
        Prospère vous invite à sa fête dans sa nouvelle maison de vacances !
        Vous n'allez quand même pas passer à côté !!?? Cette année, prospère le
        renard nous ouvre les portes de sa demeure 3 étoiles : Salle de
        restauration, piscine, salle de soirée. Il a installé des bungalows rien
        que pour vous, dans son immense jardin boisé. Evidemment, sa demeure
        nous ai entièrement privatisé. Venez rencontrer des étudiants de votre
        école, de votre filière ! Vous pourrez discuter avec les plus anciens ou
        découvrir de nouvelles têtes ! Et surtout, vous éclater grâce aux
        soirées prévus et nombreuses activités en journée. On n'attends plus que
        vous !
      </p>

      <div
        class="grid aspect-video w-full max-w-lg place-items-center rounded-2xl bg-neutral-500"
      >
        <VueFeather type="play" class="w-16 text-white" />
      </div>
    </div>

    <div class="cols flex-col-reverse">
      <div
        class="aspect-square w-full max-w-lg rounded-2xl bg-neutral-500"
      ></div>

      <p class="max-w-lg">
        Prospère vous a bichonné cette année. Au programme : Pool party, Holy
        color, Rodéo mécanique, Bubble foot, Ventriglisse et j'en passe. Faites
        la fête le vendredi et samedi soir jusqu'au petit matin ! Et savourez le
        délicieux repas que notre renard vous aura concocté le lendemain midi.
      </p>
    </div>

    <p>
      Toute l'équipe du BDE vous attends avec impatience ! C'est l'occasion
      parfaite de s'intégrer à l'école et à sa promotion. Faites Vite ! Il n'y a
      que 120 places de disponible cette année.
    </p>

    <Button>Accéder à la billeterie</Button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue";
import Button from "@/components/button.vue";
</script>

<style scoped>
.cols {
  @apply flex items-start gap-6 lg:flex-row;
}
</style>
