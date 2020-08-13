<template>
  <div class="svg-icon">
    <svg class="svg" :class="className" xmlns="http://www.w3.org/2000/svg">
      <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
    </svg>
    <div v-if="!!title" class="tooltip">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component<SvgIcon>({
  name: "svg-icon",
  data() {
    return {
      iconPath: ""
    };
  }
})
export default class SvgIcon extends Vue {
  @Prop({ required: true }) name!: string;
  @Prop({ default: null }) title!: string | null;
  iconPath!: string;

  async created() {
    let { default: icon } = await import(`@/assets/icons/${this.name}.svg`);
    if (Object.prototype.hasOwnProperty.call(icon, "default")) {
      icon = icon.default;
    }
    this.iconPath = icon.url;
  }

  get className() {
    return "svg-icon svg-icon--" + this.name;
  }
}
</script>

<style lang="sass">
.svg-icon
  position: relative
  height: 24px
  width: 24px

.svg
  & + .tooltip
    pointer-events: none
    opacity: 0
    transition: opacity 0.3s

    background-color: grey
    border-radius: 3px
    padding: 5px
    box-shadow: 2px 3px 2px white

    position: absolute
    z-index: 1
    top: -150%
    left: 50%
    transform: translateX(-50%)

  &:hover + .tooltip
    opacity: 1
</style>
