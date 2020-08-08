<template>
  <div :class="['project-card', size]">
    <div :class="['switch', activeTop ? 'active' : '']">
      <img :src="require(`../assets/${imgName}`)" />
    </div>
    <div id="card-mid">
      <h2>{{ title }}</h2>
      <div v-if="tags.length > 0">
        <div v-if="tooMuchTags" class="tooltip-trigger">
          <SvgIcon
            v-for="(tag, index) in firstTags"
            :name="toIconName(tag)"
            :title="tag"
            :key="index"
          ></SvgIcon>
          <div class="circle">+{{ this.tags.length }}</div>
        </div>
        <div class="flex-containter" :class="[ tooMuchTags ? 'tooltip' : '' ]">
          <SvgIcon
            v-for="(tag, index) in tags"
            :name="toIconName(tag)"
            :title="tag"
            :key="index"
          ></SvgIcon>
        </div>
      </div>
      <a v-if="!!link" :href="link">Visit</a>
      <button @click="doSwitch"><i>asdf</i></button>
    </div>
    <div :class="['switch', activeTop ? '' : 'active']">
      <p>
        <slot></slot>
      </p>

      <p></p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import SvgIcon from "./SvgIcon.vue";

@Component({
  components: {
    SvgIcon
  }
})
export default class ProjectCard extends Vue {
  @Prop({ required: true }) readonly title!: string;
  @Prop() readonly link!: string;
  @Prop({ required: true }) readonly imgName!: string;
  @Prop() readonly tags!: string[];
  @Prop({
    validator(value) {
      return ["large", "medium", "small"].indexOf(value) !== -1;
    },
    default: "small"
  })
  readonly size!: string;
  activeTop = true;

  get firstTags(): string[] {
    if (this.size == "small") {
      return this.tags.splice(0, 3);
    } else if (this.size == "medium") {
      return this.tags.splice(0, 5);
    } else return this.tags.splice(0, 7);
  }

  toIconName(tag: string): string {
    if (tag == "C++") {
      return "cpp";
    } else if (tag == "C#") {
      return "csharp";
    }
    return tag.toLowerCase();
  }

  doSwitch() {
    this.activeTop = !this.activeTop;
  }

  get tooMuchTags(): boolean {
    return (
      (this.tags.length > 4 && this.size == "small") ||
      (this.tags.length > 6 && this.size == "medium") ||
      (this.tags.length > 8 && this.size == 'large')
    );
  }
}
</script>

<style lang="sass">
.project-card
  & .small
    flex-grow: 1

  & .medium
    flex-grow: 1/2

  &.large
    flex-grow: 2


.switch
  transition: 1s
  overflow: hidden
  height: 0%

  &.active
    height: 80%


.tooltip-trigger

  & ~ .tooltip
    visibility: hidden
    posistion: absolute
    z-index: 1
    opacity: 0
    transition: opacity 0.3s

  &:hover ~ .tooltip
    visibility: visible
    opacity: 1
</style>
