<template>
  <div id="app">
    <nav-bar />
    <main class="main-content"><router-view class="router-content"></router-view></main>
    
    <footer-bar />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
  components: {
    NavBar,
    FooterBar
  }
};
</script>

<style>
 @import './styles/App.css'
</style>
