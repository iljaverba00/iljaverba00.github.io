<template>

  <v-app-bar color="primary" density="compact">
    <v-tabs v-model="currentTab" bg-color="primary" fixed-tabs align-tabs="center">
      <v-tab v-for="tab of tabs " :key="tab.id" :value="tab.id" :text="tab.name"/>
    </v-tabs>

    <v-spacer></v-spacer>

    <v-btn icon="mdi-home" color="white" @click="toMain"/>
  </v-app-bar>

  <v-tabs-window v-model="currentTab">
    <v-tabs-window-item
        v-for="tab of tabs"
        :key="tab.id"
        :value="tab.id">
      <component :is="tab.component"/>
    </v-tabs-window-item>
  </v-tabs-window>

</template>

<script setup>

import {ref} from "vue";
import {useRouter} from "vue-router";
import CheckTab from "./CheckTab.vue";
import ThreeJsAr from "./threejs/ThreeAR.vue";

const router = useRouter();

const currentTab = ref('three-ar');

const toMain = () => {
  router.push('/');
}

const tabs = [
  {id: 'three-js-ar', name: 'Example 1', component: ThreeJsAr},
  {id: 'check', name: 'Checking WebXr available', component: CheckTab},
]

</script>
<style scoped>
</style>
