<template>
  <div id="app">
    <the-header />
    <div class="body">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/header/TheHeader";
export default {
  components: {TheHeader}
}
</script>

<style lang="scss">
#app {
  font-family: Mulish, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}

body {
  background: var(--body-background);
}
</style>