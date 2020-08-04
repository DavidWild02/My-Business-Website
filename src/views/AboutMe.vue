<template>
  <div class="about-me">
    <div id="header" class="col-2">
      <div>
        <img src="" id="curriculum-img" class="center" />
      </div>
      <div>
        <table id="info-tb" class="center">
          <tr>
            <th>Name</th>
            <th>David Wild</th>
          </tr>
          <tr>
            <th>Geboren am</th>
            <th>31.05.2002 in Bruneck</th>
          </tr>
          <tr>
            <th>Land</th>
            <th>Italien</th>
          </tr>
          <tr>
            <th>Adresse</th>
            <th>Niderrasen, Niederrasnerstraße 30 A</th>
          </tr>
          <tr>
            <th>Mobil</th>
            <th>+39 348 581 5686</th>
          </tr>
          <tr>
            <th>E-Mail</th>
            <th>david.wild2002@gmail.com</th>
          </tr>
          <tr>
            <th>Website</th>
            <th>.....</th>
          </tr>
        </table>
      </div>
    </div>
    <Collapse title="Ausbildung">
      <TimeScala
        :list="[
          { date: new Date(2000, 0) },
          {
            date: new Date(2002, 5, 31),
            description: 'Geburt im Krankenhaus Bruneck'
          },
          { date: new Date(2005, 0) },
          {
            date: new Date(2008, 9),
            description: 'Grundschule Niederrasen'
          },
          { date: new Date(2010, 0) },
          {
            date: new Date(2013, 9),
            description: 'Mittelschule David Kofler in Olang'
          },
          { date: new Date(2015, 0) },
          {
            date: new Date(2015, 7),
            description: 'Jukas Sommerkurs Programmieren für Anfänger C#'
          },
          {
            date: new Date(2016, 7),
            description:
              'Jukas Sommerkurs Programmieren für Fortgeschrittene C#'
          },
          {
            date: new Date(2016, 9),
            description:
              'Realgymnasium Nicolaus Cusanus mit Schwerpunkt Naturwissenschaften'
          },
          {
            date: new Date(2018, 7),
            description: 'Praktikum in der Softwareabteilung bei Zirkonzahn'
          },
          {
            date: new Date(2019, 5),
            description: 'Südtiroler-Chemie-Olympiade 13. Platz Landesweit'
          },
          { date: new Date(2020, 0) }
        ]"
      />
    </Collapse>
    <Collapse title="Kenntnisse und Fähigkeiten">
      <table>
        <tr>
          <th>Programmiersprachen</th>
          <th>
            C++, Rust, C#, Python, Javascript (ES6), Typescript, HTML & CSS
          </th>
        </tr>
        <tr>
          <th>Techs, die ich schon einmal verwendet habe</th>
          <th>
            <table>
              <tr>
                <th>Qt</th>
                <th>WPF</th>
                <th>Tensorflow 2.0</th>
                <th>Django</th>
                <th>Vue</th>
                <th>GraphQL</th>
                <th>Webpack</th>
                <th>Sass</th>
                <th>Git</th>
              </tr>
              <tr>
                <th>GUIs erstellen</th>
                <th>GUIs erstellen</th>
                <th>Machine Learning und Neuronale Netze</th>
                <th>Backend framework</th>
                <th>Frontend framework</th>
                <th>Alternative zur REST API</th>
                <th>Module bundler</th>
                <th>Pre-CSS-Compiler</th>
                <th>Versionskontrollsystem</th>
              </tr>
            </table>
          </th>
        </tr>
        <tr>
          <th>Sprachen</th>
          <th>Deutsch (Muttersprache), Italienisch, Englisch</th>
        </tr>
      </table>
    </Collapse>
    <Collapse title="Hobbies">
      <p>
        Bücher lesen, Serien schauen, Programmieren, Sport, Tanzen,
        Nightclubbing, Zeichnen
      </p>
    </Collapse>
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import { Vue, Prop, Component } from "vue-property-decorator";
import Collapse from "../components/Collapse.vue";
import TimeScala from "../components/TimeScala.vue";

@Component({
  components: {
    Collapse,
    TimeScala
  }
})
export default class AboutMe extends Vue {}
</script>

<style lang="sass">
#curriculum-img
  border:
    radius: 2em

#info-tb th:first-child
  font-weight: bold
  color: white


.center
  margin: 2em
</style>
