<template>

  <tab-view
      v-model:active-index="tabIndex"
  >
    <tab-panel
        header="Checking AR"
        :disabled="false"
    >
      <CheckSupport/>
    </tab-panel>
    <tab-panel
        header="Example AR - 1"
    >

    </tab-panel>
  </tab-view>
</template>

<script setup>
import {ref} from "vue";
import CheckSupport from "@/components/tabs/CheckSupport.vue";

const tabIndex = ref(0);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*.p-tabview-nav-container {
  display: inline-flex;
}*/
</style>
