<script setup lang="ts">

import {onMounted, ref} from "vue";
import {addCameraStream, GeoRecorder, startDownloadFrames} from "./utils";

const recording = ref(false);
let geoRecorder


onMounted(async () => {
  const videoElement = document.getElementById('camera') as HTMLVideoElement;
  const stream = await addCameraStream(videoElement);
  geoRecorder = new GeoRecorder(stream)
});



function doRecord() {
  recording.value = !recording.value;
  if (recording.value) {
    geoRecorder.startRecording();
  }else {
    geoRecorder.stopRecording();
  }
}

</script>

<template>
  <v-btn
      style="position: absolute; z-index: 1000; margin: 10px"
      icon="mdi-record-circle-outline"
      size="large"
      :color="recording ? 'red': ''"
      @click="doRecord"
  />
  <video id="camera" autoplay playsinline></video>

  <v-snackbar
      v-model="recording"
      :timeout="-1"
  >
    <div class="text-subtitle-1 pb-2 text-center">Выполняется запись</div>
  </v-snackbar>
</template>

<style scoped>
video#camera {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
</style>