import { defineStore } from "pinia";
import { ref } from "vue";

import { getSocials as apiGetSocials, Social } from "@/api";

export const useSocialsStore = defineStore("socials", () => {
  const socials = ref<Social[]>();

  function getSocials() {
    if (socials.value == undefined)
      apiGetSocials().then((res) => (socials.value = res));

    return socials.value ?? [];
  }

  return { getSocials };
});
