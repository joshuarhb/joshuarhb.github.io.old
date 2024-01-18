<template>
  <div id="app">
      <nav-bar />
      <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
    components: {
        NavBar
    }
};
</script>

<style>

router-view {
  margin-bottom: 50%;
}
nav-bar {
  margin-bottom: 100px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10%;
  

  /* margin-bottom: 50px; */
}
</style>
