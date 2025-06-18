<script setup lang="ts">

import {onMounted} from "vue";

onMounted(()=>{
  const videoElement = document.getElementById('camera');

  navigator.mediaDevices.getUserMedia({
    video: { facingMode: 'environment' }, // задняя камера
    audio: false
  }).then((stream) => {
    videoElement.srcObject = stream;
  }).catch((error) => {
    console.error('Ошибка доступа к камере:', error);
  });
})
</script>

<template>
  <h3>Tracker</h3>
  <video id="camera" autoplay playsinline></video>
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