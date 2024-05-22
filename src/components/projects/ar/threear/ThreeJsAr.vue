<template>
  <div id="three-js-ar" style="width: 100px; height: 100px">

  </div>
</template>

<script setup lang="ts">
import three_ar from './three-ar.js'
import {onMounted} from "vue";

onMounted(()=>{
  three_ar();
})

</script>

<style scoped>

</style>
