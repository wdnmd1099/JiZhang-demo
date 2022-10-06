
<template>
  <div>
    {{count}}
  </div>
  <div>
    <button @click="count++">+1</button>
  </div>
</template>

<script setup lang = "ts">
import { ref } from "vue";
const count = ref(0)

</script>

<style>

</style>