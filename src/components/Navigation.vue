<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Custom Advisor</a>

    <li class="nav-item active">
        <RouterLink class="nav-item" to="/">Home</RouterLink>
    </li>
    <li class="nav-item active">
        <RouterLink class="nav-item" to="/user">User List</RouterLink>
    </li>
    <li class="nav-item active">
        <RouterLink class="nav-item" to="/about">About</RouterLink>
    </li>

    <div class="collapse navbar-collapse" id="navbarSupportedContent" style="padding-left: 20px;">
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
</template>

<style scoped></style>
