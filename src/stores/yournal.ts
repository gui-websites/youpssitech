import { defineStore } from "pinia";
import { ref } from "vue";

import { getYournaux as apiGetYournaux, Yournal } from "@/api";

export const useYournalStore = defineStore("yournal", () => {
  const yournaux = ref<Yournal[]>();

  function getYournaux() {
    if (yournaux.value == undefined)
      apiGetYournaux().then((res) => (yournaux.value = res));

    return yournaux.value ?? [];
  }

  return { getYournaux };
});
