<template>
  <SidebarLayout>
    <div class="background grid h-full w-full place-items-center">
      <div class="card flex w-full max-w-xl flex-col gap-6">
        <h1 class="title">Nous contacter</h1>

        <div>
          <p class="mb-3">Via nos réseaux</p>
          <div class="grid grid-cols-2 gap-3">
            <a
              v-for="link in socials"
              :href="link.url"
              target="_blank"
              class="button flex items-center gap-2"
            >
              <VueFeather :type="link.icon" />
              <span>{{ link.name }}</span>
            </a>
          </div>
        </div>

        <form action="" class="flex flex-col gap-3">
          <p>Envoyez-nous un message :</p>
          <div class="input flex items-center overflow-hidden">
            <input
              ref="emailRef"
              type="email"
              class="flex-grow border-0 focus:ring-0"
              placeholder="Addresse mail ..."
              @keyup="validateEmail()"
              v-model="email"
            />
            <VueFeather
              v-if="showEmailIcon"
              :type="emailIcon"
              class="mx-3"
              :class="{
                'text-green-500': emailValid,
                'text-red-500': !emailValid,
              }"
            />
          </div>
          <textarea
            ref="messageRef"
            rows="5"
            class="input resize-none"
            placeholder="Votre message ..."
            v-model="message"
          ></textarea>
          <div class="flex justify-end">
            <button
              class="button flex items-center gap-3"
              @click="send($event)"
            >
              <VueFeather type="send" />
              <span>Envoyer</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </SidebarLayout>
</template>

<script lang="ts" setup>
import { getSocials, sendMessage, Social } from "@/api";
import { computed, ref, onBeforeMount, TextareaHTMLAttributes } from "vue";
import SidebarLayout from "@/layouts/sidebar.vue";

const socials = ref<Social[]>();
onBeforeMount(async () => {
  socials.value = await getSocials();
});

// Email validation
const email = ref("");
const emailValid = ref(false);

const emailRegex = /^[\w\.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const showEmailIcon = computed(() => email.value != "");
const emailIcon = computed(() => (emailValid.value ? "check" : "x"));

function validateEmail() {
  emailValid.value = email.value.match(emailRegex) != null;
}

// Message sending
const message = ref("");
const emailRef = ref();
const messageRef = ref();

function send(e: MouseEvent) {
  e.preventDefault();

  if (!emailValid.value) return emailRef.value?.focus();
  if (message.value == "") return messageRef.value?.focus();

  sendMessage(email.value, message.value);
  email.value = "";
  message.value = "";
  emailValid.value = false;
}
</script>

<style scoped>
.input {
  @apply rounded-md border-2 border-gray-200 ring-0 transition-colors focus-within:border-primary focus:border-primary;
}

.button {
  @apply rounded-md border-2 border-gray-200 p-3 transition-colors hover:border-primary hover:bg-primary;
}

.background::before {
  background-image: url("https://cas.univ-tlse3.fr/cas/themes/ut3-theme/images/bg1.jpg");
}
</style>
