<template>
  <button
    @click="$emit('click')"
    class="button cursor-pointer border border-white bg-black px-6 py-4 font-bold text-white hover:ring-2 hover:ring-black"
  >
    <slot />
  </button>
</template>

<style scoped>
.button {
  min-width: 150px;
}
</style>
