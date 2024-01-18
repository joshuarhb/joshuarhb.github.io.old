<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/portfolio">Portfolio</router-link>
    </nav>
</template>

<style>
nav {

    position: fixed;
    top: 0;
    width: 100%;

    display: flex;
    justify-content: flex-start;

    background-color: aquamarine;
    font-size: 25px;

    height: 5%;
}

nav a {
    font-style: italic bold;
}


</style>