<template>
<!--  <AugmentedReality />-->
    <Card style="width: 300px">
      <template #header>
<!--        <img alt="user header"  />-->
      </template>
      <template #title> AR </template>
      <template #subtitle> none </template>
      <template #content>
        <p class="m-0">
          Augmented reality engine
        </p>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-1">
<!--          <Button label="Cancel" severity="secondary" outlined class="w-full" />-->
          <Button label="Go to" class="w-full" @click="toRoute('/ar')" />
        </div>
      </template>
    </Card>
</template>
<script setup>
// import AugmentedReality from "@/components/ar/AugmentedReality.vue";

import {useRouter} from "vue-router";

const router = useRouter();
const toRoute = (route) =>{
  router.push(route)
}
</script>
