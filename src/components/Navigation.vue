<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
      <a class="uk-navbar-item uk-logo" href="#">Custom Advisor</a>
      <ul class="uk-navbar-nav">
        <li class="nav-item active">
          <RouterLink class="nav-item" to="/"><i class="fa fa-home"></i> Home</RouterLink>
        </li>
        <li class="nav-item active">
          <RouterLink class="nav-item" to="/user"><i class="fa fa-list"></i> User List</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-item" to="/state"><i class="fa fa-list"></i> State Management</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-item" to="/todo"><i class="fa fa-list"></i> Todo</RouterLink>
        </li>
        <li class="nav-item active">
          <RouterLink class="nav-item" to="/about"><i class="fa fa-person"></i> About</RouterLink>
        </li>
        </ul>
    </div>
  </nav>
</template>

<style scoped></style>
