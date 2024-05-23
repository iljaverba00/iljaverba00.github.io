<template>

<!--  <v-layout class="rounded rounded-md">-->
<!--    <v-app-bar-->
<!--        name="Tools"-->
<!--        class="bg-white"-->
<!--        density="compact"-->
<!--    >-->
<!--      <v-btn-->
<!--          icon="mdi-home"-->
<!--          @click="leftDriver = !leftDriver"-->
<!--      />-->

<!--    </v-app-bar>-->
<!--    <v-navigation-drawer-->
<!--        v-model="leftDriver"-->
<!--        temporary-->
<!--    >-->
<!--      <v-btn></v-btn>-->
<!--    </v-navigation-drawer>-->
<!--    <v-main class="d-flex align-center justify-center" style="min-height: calc(100vh - 48px)">-->
<!--    </v-main>-->

<!--  </v-layout>-->
  <div id="three-js-ar" style="width: 100%; height: 100%"/>

</template>

<script setup lang="ts">
import three_ar from './index.js'
import {onMounted, ref} from "vue";

onMounted(()=>{
  setTimeout(()=>{
    three_ar();
  },2000)
  //three_ar();

})

const leftDriver = ref(true);

</script>

<style scoped>

</style>
