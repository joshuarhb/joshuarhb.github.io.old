<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/cv">CV</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/about">About</router-link> 
    </nav>
</template>

<style>
nav {

    position: fixed;
    top: 0;
    width: 100%;

    display: flex;
    justify-content: flex-start;

    background-color: #C9AECF;
    font-size: 25px;

    height: 5%;
    padding: 0;
}


nav a {
    font-style: italic;
    font-weight: bold;
    color: black;
    text-decoration: none;
    padding-top: 10px;
    padding-right: 2vh;

}
</style>