<template>
  <MainLayout>
    <div class="grid grid-cols-2 gap-6">
      <div class="left-col col">
        <Card title="Bienvenue au BDE Youpssitech">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            perferendis magni dolorem beatae officia quas aperiam rem nisi optio
            exercitationem maxime dicta sunt nulla amet dolores, ex recusandae,
            minima error.
          </p>
          <div class="flex items-center gap-3">
            <a v-for="s in socials.getSocials()" :href="s.link" target="_blank">
              <VueFeather :type="s.name.toLowerCase()" />
            </a>
          </div>
        </Card>

        <Card title="Partenariat Xiaomi" cover="../assets/images/xiaomi.png">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            quisquam officia beatae repellendus, libero nesciunt tempore ut
            eaque, reiciendis aut eius provident veritatis amet, sunt facere?
            Rem similique et accusamus.
          </p>
        </Card>
      </div>
      <div class="right-col col">
        <Card :padding="false">
          <img src="@/assets/images/photo.jpg" alt="" class="w-full" />
        </Card>

        <Card title="Le Yournal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
          officiis esse! Facilis illum impedit reprehenderit iste dicta nihil
          nostrum beatae maiores inventore, velit magni non possimus assumenda
          eligendi minima illo.
          <div>
            <Button @click="goto('/yournal')">Voir les Yournaux</Button>
          </div>
        </Card>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/main-layout.vue";
import Card from "@/components/card.vue";
import Button from "@/components/button.vue";

import { useRouter } from "vue-router";
import { useSocialsStore } from "@/stores";

const router = useRouter();
function goto(route: string) {
  router.push(route);
}

const socials = useSocialsStore();
</script>

<style scoped>
.col {
  @apply flex flex-col gap-6;
}
</style>
