<script setup lang="ts">

import {onMounted, ref} from "vue";
import {addCameraStream, GeoRecorder} from "./utils";

const recording = ref(false);
let geoRecorder

const resolution = ref("1920x1080");
const resolutions = {
  '3840x2160': [3840, 2160],
  '2560x1440': [2560, 1440],
  '1920x1080': [1920, 1080],
  '1280x720': [1280, 720],
  '640x480': [640, 480],
};


onMounted(async () => {
  const videoElement = document.getElementById('camera') as HTMLVideoElement;
  const stream = await addCameraStream(videoElement, resolutions[resolution.value]);
  geoRecorder = new GeoRecorder(videoElement, stream)
});


function doRecord() {
  recording.value = !recording.value;
  if (recording.value) {
    geoRecorder.startRecording();
  } else {
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

  <v-select
      v-model="resolution"
      style="position: absolute; z-index: 1000; margin: 10px; right: 0; width: 200px"
      :items="Object.keys(resolutions)"
      label="Разрешение записи"
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