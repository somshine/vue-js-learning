<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <Navigation />
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="less">
  @import "../node_modules/uikit/src/less/uikit.less";
</style>
<style scoped></style>
