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
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const props = defineProps(['title', 'subtitle', 'image', 'desc', 'route']);

const router = useRouter();

const show = ref(false);

const toLayout = () => {
  router.push(props.route)
}
</script>

<style scoped>


</style>
