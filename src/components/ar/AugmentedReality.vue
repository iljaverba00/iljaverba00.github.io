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
import CheckSupport from "@/components/ar/tabs/CheckSupport.vue";

const tabIndex = ref(0);

</script>
