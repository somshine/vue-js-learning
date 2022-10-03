<script setup>
import { RouterLink, RouterView } from "vue-router";
import { mapGetters } from "vuex";
import HelloWorld from "./components/HelloWorld.vue";
import Navigation from "./components/Navigation.vue";
</script>

<script>
export default {
  computed: mapGetters(["isAuthenticated"]),
  mounted() {
    console.log("[mounted] Called this with ", this.isAuthenticated);
    if (!this.isAuthenticated || this.isAuthenticated == false) {
      this.$router.push({name: 'login'});
    }
  },
  created() {
    console.log("[created] Called this with ", this.isAuthenticated);
    if (!this.isAuthenticated || this.isAuthenticated == false) {
      this.$router.push({name: 'login'});
    }
  },
};
</script>

<template>
  <Navigation v-bind:isLognedIn="isAuthenticated" />
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
</style>
<style scoped></style>
