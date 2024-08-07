<template>
    <nav>
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link> 
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/blog">Blog</router-link>
    </nav>
</template>

<style>
nav {

    position: fixed;
    top: 0;
    width: 100%;

    display: flex;
    justify-content: space-around;

    background-color: yellowgreen;
    font-size: 25px;

    height: 5%;
    padding: 0;
}

router-link {
    margin: 10%;
    text-decoration: none;
    color: black;
}
nav a {
    font-style: italic;
    font-weight: bold;
    color: black;
    text-decoration: none;
    padding-top: 10px;
}


</style>