<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about-me">About Me</router-link> |
      <router-link to="/my-projects">My Projects</router-link> |
      <router-link to="/contact">Contact info</router-link>
    </div>
    <router-view class="cointainer-lg" />
  </div>
</template>

<style lang="sass">
$max-width: 1012px

body
  padding-top: 6em
  box-sizing: border-box
  color: whitesmoke
  backround-color: rgb(24, 26, 27)

#nav
  background-color: grey

.container-lg
  max-width: $max-width
  padding: 0px
  margin:
    right: auto
    left: auto

.col-2
  column-count: 2
</style>
