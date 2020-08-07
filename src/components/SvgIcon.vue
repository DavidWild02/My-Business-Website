<template>
  <svg :class="className" xmlns="http://www.w3.org/2000/svg">
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>


<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component({
  name: 'svg-icon'
})
export default class SvgIcon extends Vue {
  @Prop({ required: true }) name!: string;
  @Prop({ default: null }) title!: string | null;

  get iconPath() {
    return (async () => {
      let { defautl: icon } = await import(`@/assets/icons/${this.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, "default")) {
        icon = icon.default;
      }
      console.log(icon);

      return icon.url;
    })();
  }

  get className() {
      return "svg-icon svg-icon--" + this.name;
  }
}
</script>


<style lang="sass">
.svg-icon 
  fill: currentColor
  height: 24px
  width: 24px
</style>
