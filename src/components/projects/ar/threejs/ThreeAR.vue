<template>
  <div id="three-js-ar">

    <div style="position: absolute; right: 0; bottom: 0">
      <v-btn
          style="margin: 5px"
          variant="text"
          density="comfortable"
          icon="mdi-circle"
          @click="addCylinder"
      />
      <v-btn
          style="margin: 5px 5px 5px 10px"
          variant="text"
          density="comfortable"
          icon="mdi-delete"
          @click="clearCylinders"
      />
    </div>
    <v-btn
        style="margin: 5px"
        variant="text"
        icon="mdi-console"
        density="comfortable"
        @click="showConsole"
    />
    <v-btn
        style="margin: 5px; float: right"
        variant="text"
        density="comfortable"
        icon="mdi-close"
        @click="close"
    />

    <div id="screensaver" class="center">
      Move your device for detect surface
    </div>

  </div>

</template>

<script setup lang="ts">
import three_ar from './index.js'
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import {debugDiv} from "./debug.js"

const router = useRouter();
let ar;
let dd;

onMounted(() => {
  ar = three_ar();
  dd = debugDiv();
})

const close = (event: Event) => {
  ar.resetArSession();
  router.push('/');
}
const addCylinder = () => {
  ar.addCylinder?.();
}
const clearCylinders = () => {
  ar?.clearCylinders?.();
}

const showConsole = () => {
  dd?.switchVisibility();
}

// const leftDriver = ref(true);

</script>

<style scoped>
@keyframes blink {
  50% {
    opacity: 0;
  }
}

.center {
  border: 8px solid;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 16px;
  animation: blink 2s linear infinite;
}
</style>
