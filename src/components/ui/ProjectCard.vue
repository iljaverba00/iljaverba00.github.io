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
      <div class="">
        {{ subtitle }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        text="Start"
        @click="toLayout('/ar')"
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
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

defineProps(['title', 'subtitle', 'image', 'desc']);

const router = useRouter();

const show = ref(false);

const toLayout = (name: string) => {
  router.push(name)
}
</script>

<style scoped>


</style>
