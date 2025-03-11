<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="orchestrator">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">
            <span>Home</span>
          </RouterLink>
          <RouterLink to="/project-1">
            <span>Projeto 1</span>
          </RouterLink>
          <RouterLink to="/project-2">
            <span>Projeto 2</span>
          </RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style lang="css">
.orchestrator {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

header {
  top: 0;
  left: 0;
  background: #f8f8f8;
  width: 100%;
  padding: 16px 32px;
  position: fixed;
}

nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

nav span {
  color: rebeccapurple;
}
</style>
