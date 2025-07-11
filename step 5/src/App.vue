<template>
  <div>
    <h1 class="title">Vue Router </h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  color: #42b983;
}
nav {
  text-align: center;
  margin-bottom: 20px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #35495e;
}
nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
