<template>
  <v-card class="mx-auto bg-white" max-width="300" min-width="300">
    <v-img
        color="surface-variant"
        height="150"
        :src="image"
        cover
    />
    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-text>
      <div>
        {{ subtitle }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
          color="orange-lighten-2"
          text="Start"
          @click="toLayout"
      ></v-btn>

      <v-spacer></v-spacer>

      <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          {{ desc }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

  <v-alert
      v-model="alertModel"
      density="compact"
      text="Your browser or device not supported Augmented Reality Engine 'WebXR'"
      title="Not supported AR"
      type="warning"
  ></v-alert>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {routes} from "../../router/routes";
import {isARSupported, isIOS} from "../projects/ar/utils";

const props = defineProps(['title', 'subtitle', 'image', 'desc', 'route']);

const router = useRouter();

const show = ref(false);

const alertModel = ref(false);

const toLayout = () => {
  if (props.route === routes[1].path) {
    isARSupported(() => {
          router.push(props.route)
        }, () => {
          if (isIOS()) {
            router.push(routes[2].path)
          } else {
            alertModel.value = true
            setTimeout(() => {
              alertModel.value = false
            }, 10000)
          }
        }
    )
  } else {
    router.push(props.route)
  }
}
</script>

<style scoped>


</style>
