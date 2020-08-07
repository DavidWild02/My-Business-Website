<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about-me">About Me</router-link> |
      <router-link to="/my-projects">My Projects</router-link>
    </div>
    <router-view class="cointainer-lg" />
    <div class="Contact">
      <h3>Contact</h3>
      <div>
        <div class="col-2">
          <p>E-mail: <b>david.wild2002@gmail.com</b></p>
          <p>Mobil: <b>+39 348 581 5686</b></p>
          <p>Adresse: <b>Provinz BZ 39030 Rasen/Antholz Niederrasen Niederrasnerstraße 30A</b></p>
        </div>
        <div class="col-2">
          <p>
            Fiverr:
            <a href="https://www.fiverr.com/davidwild425"
              >https://www.fiverr.com/davidwild425</a
            >
          </p>
          <p>
            GitHub:
            <a href="https://github.com/DavidWild02"
              >https://github.com/DavidWild02</a
            >
          </p>
          <p>
            StackOverflow:
            <a href="https://stackoverflow.com/users/12596264/atr0x"
              >https://stackoverflow.com/users/12596264/atr0x</a
            >
          </p>
        </div>
      </div>
    </div>
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
