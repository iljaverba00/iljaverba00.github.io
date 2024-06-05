<script setup>
import {useRouter} from "vue-router";
import {routes} from "../../../../router/routes";

let router = useRouter();
const downloadApp = () => {
  window.location.href = 'https://apps.apple.com/us/app/webxr-viewer/id1295998056'
}
const toMain = () => {
  router.push(routes[0].path)
}
// const copy = () => {
//   navigator.clipboard.writeText(document.location.origin)
// }
const origin = location.origin;
</script>

<template>
  <v-sheet
      color="white"
      class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
      elevation="4"
      height="400"
      max-width="800"
      width="100%"
      rounded
  >
    <div>
      <h2 class="text-h4 font-weight-black text-orange">WARNING</h2>

      <div class="text-h5 font-weight-medium mb-2">
        You using IOS device
      </div>


      <p class="text-body-2 mb-4">
        WebView Safari does not currently support augmented reality technologies
      </p>

      <p class="text-body-2 mb-4">
        To enjoy the augmented reality experience on your iOS device, you can download the special browser app from the
        link below
      </p>

      <p class="text-body-2 mb-4">
        Don't forget copy link to this site
      </p>
      <p class="text-body-2 mb-4">
        {{ origin }}
      </p>


      <!--      <v-btn color="orange" variant="text" @click="copy">(1) COPY THIS SITE LINK</v-btn>-->

      <v-btn color="orange" variant="text" @click="downloadApp">DOWNLOAD</v-btn>

      <v-btn color="blue" variant="text" @click="toMain">GOTO MAIN</v-btn>


    </div>
  </v-sheet>
</template>

<style scoped>
</style>
