<template>
  <div class="my-projects">
    <div class="flex-container">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      ></ProjectCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ProjectCard from "../components/ProjectCard.vue";
import { Project } from "../tools/myTypes";

@Component({
  components: {
    ProjectCard
  }
})
export default class MyProjects extends Vue {
  public projects = [
    new Project(
      "Mandelbrot-Set",
      "https://github.com",
      "logo.png",
      "c3.svg",
      "ericalfasdnwglwjflsalsfl"
    ),
    new Project(
      "Mandelbrot-Set",
      "https://github.com",
      "logo.png",
      "c3.svg",
      "ericalfasdnwglwjflsalsfl"
    ),
    new Project(
      "Mandelbrot-Set",
      "https://github.com",
      "logo.png",
      "c3.svg",
      "ericalfasdnwglwjflsalsfl"
    ),
    new Project(
      "Mandelbrot-Set",
      "https://github.com",
      "logo.png",
      "c3.svg",
      "ericalfasdnwglwjflsalsfl"
    ),
    new Project(
      "Mandelbrot-Set",
      "https://github.com",
      "logo.png",
      "c3.svg",
      "ericalfasdnwglwjflsalsfl"
    ),
    new Project(
      "Mandelbrot-Set",
      "https://github.com",
      "logo.png",
      "c3.svg",
      "ericalfasdnwglwjflsalsfl"
    )
  ];
}
</script>

<style lang="sass">
.flex-container
  display: flex
</style>
