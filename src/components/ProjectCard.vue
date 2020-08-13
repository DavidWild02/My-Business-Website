<template>
  <div 
    :class="['project-card', size]" 
    :style="{ backgroundImage: 'url('+ require(`../assets/${imgName}`) +')'}"
  >
    <div id="card-mid" :class="[activeTop ? '' : 'active']">
      <h2 class="heading">{{ title }}</h2>
      <div v-if="tags.length > 0" id="tags">
        <SvgIcon
          v-for="(tag, index) in tags"
          :name="toIconName(tag)"
          :title="tag"
          :key="index"
        ></SvgIcon>
      </div>
      <div v-if="!!link" class="link" @click="gotoLink">
        <SvgIcon :name="toIconName(getLinkSiteName())"/>
        <div class="vc-text">{{ getLinkSiteName() }}</div>
      </div>
      <div @click="doSwitch" id="switch-btn" ref="switchButton">
        <div :class="[activeTop ? 'mirror' : '']">
          <svg height="50" width="50">
            <polyline points="0,15 25,30 50,15" style="fill:none;stroke:white;stroke-width:2"/>
            <polyline points="0,25 25,40 50,25" style="fill:none;stroke:white;stroke-width:2"/>
          </svg>      
        </div>
      </div>
    </div>
    <div id="switch" :class="[activeTop ? '' : 'active']">
      <p>
        <slot></slot>
      </p>
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

  toIconName(tag: string): string {
    if (tag == "C++") {
      return "cpp";
    } else if (tag == "C#") {
      return "csharp";
    } 
    return tag.toLowerCase();
  }

  getLinkSiteName(): string {
    const site: string = (new URL(this.link)).hostname;
    switch (site) {
      case 'github.com': return 'GitHub';
      case 'exercism.io': return 'Exercism';
      default: return 'error';
    }
  }

  doSwitch() {
    /*
      If you dont remove the focus from the button before the transition
      The page will be scrolled so that the button doesnt move from its viewport position
    */
    (this.$refs.switchButton as HTMLElement).blur();
    this.activeTop = !this.activeTop;
  }

  gotoLink() {
    location.href = this.link;
  }
}
</script>

<style lang="sass">
$row-height: 350px
$border-radius: 12px
$little-border-radius: $border-radius - 3px
$hcircle-r: 25px

@mixin border-radius($bottom, $top: 0px)
  border-radius: $top $top $bottom $bottom


h2
  margin-top: 0px

.project-card
  display: flex
  flex-direction: column
  justify-content: flex-end
  align-items: stretch
  height: $row-height
  border:
    width: 2px
    style: solid
    color: white
    radius: $border-radius
  background-size: cover

  &.small
    width: 300px

  &.medium
    width: 450px

  &.large
    width: 600px


#card-mid
  position: relative
  height: 30%
  opacity: 0.95
  background-color: black
  @include border-radius($little-border-radius)
  z-index: 1

  &.active
    @include border-radius(0px, $little-border-radius)


.heading
  margin-top: 2%
  font-size: 2.6rem
  text-align: center


#switch-btn
  background-color: grey
  width: 2 * $hcircle-r
  height: $hcircle-r
  border-top:
    left-radius: $hcircle-r
    right-radius: $hcircle-r

  position: absolute
  bottom: 0%
  left: 50%
  transform: translateX(-50%)


.mirror
  transform: scale(1, -1)


#tags
  display: flex
  flex-direction: row

  position: absolute
  left: 0%
  bottom: 0%
  margin:
    left: 2%
    bottom: 1%


.link
  line-height: 1%
  position: absolute
  right: 0%
  bottom: 0%
  margin:
    right: 2%
    bottom: 1%

  background-color: darkgrey
  border-radius: 5px
  padding: 3px

.svg-icon
  display: inline-block

.vc-text
  display: inline-block
  padding: 5px
  transform: translateY(-5px)


#switch
  transition: 1s
  overflow: hidden
  height: 0%
  opacity: 0.85
  background-color: black
  @include border-radius($little-border-radius)

  &.active
    height: 70%
</style>
