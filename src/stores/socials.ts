import { defineStore } from "pinia";
import { ref } from "vue";

import { getSocials as apiGetSocials, Social } from "@/api";

export const useSocialsStore = defineStore("socials", () => {
  const socials = ref<Social[]>();

  function genSocials() {
    if (socials.value == undefined)
      apiGetSocials().then((res) => (socials.value = res));
  }

  function getSocials() {
    genSocials();
    return socials.value ?? [];
  }

  function getLink(name: string) {
    genSocials();
    const matches =
      socials.value?.filter(
        (s) => s.name.toLowerCase() == name.toLowerCase()
      ) ?? [];
    return matches.length != 0 ? matches[0].link : "";
  }

  return { getSocials, getLink };
});
