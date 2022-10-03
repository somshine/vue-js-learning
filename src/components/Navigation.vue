<script setup>
import { mapActions, mapGetters } from 'vuex';

defineProps({
  msg: {
    type: String,
    required: true,
  },
  isLognedIn: {
    type: Boolean,
    required: true,
  }
});
</script>

<script>
export default {
  name: "navigation-component",
  computed: mapGetters(["isAuthenticated"]),
  methods: {
    ...mapActions(['logoutUser']),
    logout() {
      this.logoutUser();
      if (!this.isAuthenticated || this.isAuthenticated === false) {
        this.$router.push({name: 'login'});
      }
    }
  }
}
</script>

<template>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
      <a class="uk-navbar-item uk-logo" href="#">Custom Advisor</a>
      
      <ul class="uk-navbar-nav">
        <li class="nav-item active">
          <RouterLink class="nav-item" to="/"
            ><i class="fa fa-home"></i> Home</RouterLink
          >
        </li>
        <li class="nav-item active">
          <RouterLink class="nav-item" to="/user"
            ><i class="fa fa-list"></i> User List</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink class="nav-item" to="/state"
            ><i class="fa fa-list"></i> State Management</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink class="nav-item" to="/todo"
            ><i class="fa fa-list"></i> Todo</RouterLink
          >
        </li>
        <li class="nav-item active">
          <RouterLink class="nav-item" to="/about"
            ><i class="fa fa-person"></i> About</RouterLink
          >
        </li>
      </ul>

      <div>
        <RouterLink v-if="!isLognedIn" to="/login" class="uk-align-right"><i class="fa fa-2x fa-sign-in"></i></RouterLink>
        <button v-if="isLognedIn" v-on:click="logout" class=""><i class="fa fa-2x fa-sign-out uk-button-danger" aria-hidden="true"></i></button>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
