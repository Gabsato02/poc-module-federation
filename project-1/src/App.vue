<script setup>
import { defineAsyncComponent } from 'vue';

const SharedComponent1 = defineAsyncComponent(() => import('sharedComponents/SharedComponent1'));
const SharedComponent2 = defineAsyncComponent(() => import('sharedComponents/SharedComponent2'));
</script>

<template>
  <div class="project-1">
    <h1>Hello World! Projeto 1</h1>
    <SharedComponent1 />
    <SharedComponent2 />
  </div>
</template>

<style lang="css" scoped>
.project-1 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  gap: 16px;
}

h1 {
  font-size: 72px;
  color: red;
}
</style>
