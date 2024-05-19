<template>
  <v-tabs
    bg-color="indigo-darken-2"
    fixed-tabs
    align-tabs="center"
    v-model="currentTab"
  >
    <v-tab value="check" text="Checking AR">

    </v-tab>

    <v-tab value="ar1" text="Example AR - 1"></v-tab>
  </v-tabs>


  <v-tabs-window v-model="currentTab" >
    <v-tabs-window-item
      value="check"
      style="justify-content: center"
    >
        <table style="display: inline">
          <tbody>
          <tr
            v-for="module of modules"
            :key="module.name">
            <td style="text-align: left"><a :href="module.url">{{module.name}}</a></td>
            <td :style="module.supported?'background:#10b981':'background:var(--red-400)'"><span>{{module.supported}}</span> <!----></td>
          </tr>
          </tbody>
        </table>

    </v-tabs-window-item>
  </v-tabs-window>

</template>

<script setup>

import {ref} from "vue";

const currentTab = ref('check');

const modules = [
  {
    name: 'WebXR Device API (core)',
    url: 'https://immersive-web.github.io/webxr/',
    supported: 'xr' in window.navigator,
  },
  {
    name: 'WebXR Gamepads',
    url: 'https://immersive-web.github.io/webxr-gamepads-module/',
    supported: 'gamepad' in (window.XRInputSource?.prototype || {})
  },
  {
    name: 'WebXR Augmented Reality',
    url: 'https://immersive-web.github.io/webxr-ar-module/',
    supported: 'environmentBlendMode' in (window.XRSession?.prototype || {})
  },
  {
    name: 'WebXR Hit Test',
    url: 'https://immersive-web.github.io/hit-test/',
    supported: 'requestHitTestSource' in (window.XRSession?.prototype || {})
  },
  {
    name: 'WebXR DOM Overlays',
    url: 'https://immersive-web.github.io/dom-overlays/',
    supported: 'domOverlayState' in (window.XRSession?.prototype || {})
  },
  {
    name: 'WebXR Layers',
    url: 'https://immersive-web.github.io/layers/',
    supported: 'XRProjectionLayer' in window
  },
  {
    name: 'WebXR Anchors',
    url: 'https://immersive-web.github.io/anchors/',
    supported: 'createAnchor' in (window.XRFrame?.prototype || {})
  },
  {
    name: 'WebXR Lighting Estimation',
    url: 'https://immersive-web.github.io/lighting-estimation/',
    supported: 'requestLightProbe' in (window.XRSession?.prototype || {})
  },
  {
    name: 'WebXR Hand Input',
    url: 'https://www.w3.org/TR/webxr-hand-input/',
    supported: 'hand' in (window.XRInputSource?.prototype || {})
  }
];
</script>
<style scoped>
</style>
