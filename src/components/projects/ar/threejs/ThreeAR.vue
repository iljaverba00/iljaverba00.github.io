<template>
  <div
      id="three-js-ar"
  >
    <v-btn
        style="margin: 5px"
        variant="text"
        density="comfortable"
        icon="mdi-circle"
        @click="addCylinder"
    />
    <v-btn
        style="margin: 5px; float: right"
        variant="text"
        density="comfortable"
        icon="mdi-close"
        @click="close"
    />
  </div>

</template>

<script setup lang="ts">
import three_ar from './index.js'
import {onMounted} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
let ar;

onMounted(() => {
  ar = three_ar();
})

const close = (event: Event) => {
  ar.resetArSession();
  router.push('/');
}
const addCylinder = ()=> {
  ar.addCylinder?.();
}

// const leftDriver = ref(true);

</script>

<style scoped>

</style>
