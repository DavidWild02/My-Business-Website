<template>
  <div class="project-card">
    <div :class="['switch', activeTop ? 'active' : '']">
      <img :src="require(`../assets/${project.imageName}`)" />
    </div>
    <div id="card-mid">
      <i :class="project.iconName"></i>
      <h2>{{ project.title }}</h2>
      <a :src="project.link">Visit</a>
      <button @click="doSwitch"><i>asdf</i></button>
    </div>
    <div :class="['switch', activeTop ? '' : 'active']">
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Project } from "../tools/myTypes";

@Component
export default class ProjectCard extends Vue {
  @Prop({ required: true }) readonly project!: Project;
  /*@Prop({ 
      validator(value) {
        return ['large', 'medium', 'small'].indexOf(value) !== -1
      },
      default: 'small'
    }) readonly size: string;*/
  public activeTop = true;

  public doSwitch() {
    this.activeTop = !this.activeTop;
  }
}
</script>

<style lang="sass">
.switch
  transition: 1s
  overflow: hidden
  height: 0%

  &.active
    height: 80%
</style>
