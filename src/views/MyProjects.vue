<template>
  <div class="my-projects">
    <div class="flex-container">
      <ProjectCard
        title="Mandelbrot- &amp; Julia-Menge"
        link="https://github.com/DavidWild02/Mandelbrot-Set"
        img-name="mandelbrot.jpg"
        :tags="['C++', 'Qt']"
        size="large"
      >
        Die Mandelbrot-Menge ist eine mathematische Menge der komplexen Zahlen,
        die mit verschiedenen Methoden visualisiert werden kann. Dabei werden
        die wunderschönen Fraktale, Muster die sich ins unendliche wiederholen,
        der Mandelbrot-Menge sichtbar.
      </ProjectCard>
      <ProjectCard
        title="Rust Exercises"
        link="https://exercism.io/profiles/DavidWild02"
        img-name="rust-exercism.png"
        :tags="['Rust']"
        size="small"
      >
        Im April lernte ich die funktionale, low-level Programmiersprache Rust
        und zusätzlich erledigte ich einige Aufgaben auf Exercism, um meine
        grauen Zellen anzustrengen.
      </ProjectCard>
      <ProjectCard
        title="Cardioid"
        link="https://github.com/DavidWild02/Cardioid"
        img-name="cardioid.png"
        :tags="['C++', 'Qt']"
        size="small"
      >
        Das Cardioid ist ein mathematisches Muster, das schnell und einfach
        generiert werden kann. Zu diesem Programm inspirierte mich ein
        YouTube-Video von Mathologer:
        https://www.youtube.com/watch?v=qhbuKbxJsk8
      </ProjectCard>
      <ProjectCard
        title="SimpleEditor"
        link="https://github.com/DavidWild02/SimpleEditor"
        img-name="simple-editor.png"
        :tags="['C#']"
        size="small"
      >
        Ein kleiner, simpler Texteditor zum öffnen, speichern und schließen von
        Dateien.
      </ProjectCard>
      <ProjectCard
        title="Online Poker"
        link="https://github.com/DavidWild02/Online-Poker"
        img-name="online-poker.png"
        :tags="['JavaScript', 'HTML', 'Css', 'Node', 'Webpack']"
        size="small"
      >
        Ein simples Pokerspiel. Es ist unvollendet, es fehlt die GUI beim
        Frontend und es gibt noch einige Edge-cases, wenn Spieler der Lobby
        beitreten und sie wieder verlassen. Jene Edge-cases wurden noch nicht
        alle behandelt.
      </ProjectCard>
      <ProjectCard
        title="My Business Website"
        link="https://github.com/DavidWild02/My-Business-Website"
        img-name="logo.png"
        :tags="['Vue', 'JavaScript', 'TypeScript', 'Sass', 'HTML', 'Webpack']"
        size="medium"
      >
        Diese Website...
      </ProjectCard>
      <ProjectCard
        title="Chemie-Olympiade"
        img-name="chemie-olympiade.png"
        :tags="[]"
        size="medium"
      >
        In der 3. Klasse am Gymnasium nahm ich an der österreichischen
        Chemie-Olympiade teilgenommen und wurde anschließend 13. von Südtirol.
      </ProjectCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ProjectCard from "../components/ProjectCard.vue";

@Component({
  components: {
    ProjectCard
  }
})
export default class MyProjects extends Vue {}
</script>

<style lang="sass">
.flex-container
  width: 100%
  display: flex
  justify-content: space-around
  flex-direction: row
  flex-wrap: wrap

  & > .project-card
    margin-bottom: 4%
    flex-shrink: 0
</style>
