<template>
  <div class="">
    <div class="text-3xl font-bold text-center">
      {{ id }}
      {{ note.title }}
    </div>
  </div>
  <hr />
  <div>
    <div class="text-2xl font-serif text-center text-red-500">
      {{ note.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from "../../stores";
const { id } = useRoute().params;

const store = useCounterStore();

const note = store.getNoteByindex(id);
</script>

<style scoped>
</style>