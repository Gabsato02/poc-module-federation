<script setup>
import { defineAsyncComponent } from 'vue';

const SharedComponent1 = defineAsyncComponent(() => import('sharedComponents/SharedComponent1'));
</script>

<template>
  <div class="orchestrator">
    <h1>Orquestrator/Root</h1>
    <SharedComponent1 />
  </div>
</template>

<style lang="css" scoped>
.orchestrator {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

h1 {
  font-size: 72px;
  color: darkgreen;
}
</style>
