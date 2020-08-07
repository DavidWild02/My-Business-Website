<template>
  <div class="my-projects">
    <div class="flex-container">
      <ProjectCard
        title="Mandelbrot-Set"
        link="https://github.com/DavidWild02/Mandelbrot-Set"
        img-name="logo.png"
        :tags="['C++', 'Qt']"
        size="small"
      >
        Die Mandelbrot-Menge ist eine mathematische Menge der komplexen Zahlen,
        die mit verschiedenen Methoden visualisiert werden kann. Dabei
        werden die wunderschönen Fraktale, Muster die sich ins unendliche
        wiederholen, der Mandelbrot-Menge sichtbar.
      </ProjectCard>
      <ProjectCard
        title="Mandelbrot-Set2"
        link="https://github.com/DavidWild02/Mandelbrot-Set"
        img-name="logo.png"
        :tags="['C++', 'Qt']"
        size="large"
      >
        Die Mandelbrot-Menge ist eine mathematische Menge der komplexen Zahlen,
        die mit verschiedenen Methoden visualisiert werden kann. Dabei
        werden die wunderschönen Fraktale, Muster die sich ins unendliche
        wiederholen, der Mandelbrot-Menge sichtbar.
      </ProjectCard>
      <ProjectCard
        title="Mandelbrot-Set3"
        link="https://github.com/DavidWild02/Mandelbrot-Set"
        img-name="logo.png"
        :tags="['C++', 'Qt']"
        size="medium"
      >
        Die Mandelbrot-Menge ist eine mathematische Menge der komplexen Zahlen,
        die mit verschiedenen Methoden visualisiert werden kann. Dabei
        werden die wunderschönen Fraktale, Muster die sich ins unendliche
        wiederholen, der Mandelbrot-Menge sichtbar.
      </ProjectCard>
      <ProjectCard
        title="Mandelbrot-Set4"
        link="https://github.com/DavidWild02/Mandelbrot-Set"
        img-name="logo.png"
        :tags="['C++', 'Qt']"
        size="medium"
      >
        Die Mandelbrot-Menge ist eine mathematische Menge der komplexen Zahlen,
        die mit verschiedenen Methoden visualisiert werden kann. Dabei
        werden die wunderschönen Fraktale, Muster die sich ins unendliche
        wiederholen, der Mandelbrot-Menge sichtbar.
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
  display: flex
</style>
