
<!-- https://jsfiddle.net/rezaxdi/sxgyj1f4/3/ example for toggle with vue -->
<template>
  <div class="collapse">
    <style>
      :root {
        --height: {{ height }};
      }
    </style>
    {{ title }} 
    <input type="button" @click="collapse">{{ collapse ? 'mehr' : 'weniger' }}</input>
    <transition name="smooth">
      <div ref="coll-content" v-show="collapsed">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>


<script lang="ts">
import {Vue, Prop, Component} from "vue-property-decorator";

@Component()
export default class Collapse extends Vue {
  @Prop() readonly title: String;
  public collapsed: Boolean = false;
  private height: String = 'auto';

  mounted() {
    this.update_height();
  }

  public collapse() {
    this.collapsed = !this.collapsed;
  }

  update_height() {
    this.$refs['coll-content'].style = { 
      'position': 'absolute', 
      'visibility': 'hidden',
      'display': 'block'
    };

    this.height = getComputedStyle(this.$refs['coll-content']).height;

    this.$refs['coll-content'].style = { 
      'position': null, 
      'visibility': null,
      'display': 'none'
    };
  }
}
</script>


<style lang="sass">
.smooth-enter-to, .smooth-leave
  height: var(--height)

.smooth-enter-active, .smooth-leave-active
  transition: height .5s
  overflow: hidden

.smooth-enter, .smooth-leave-to
  height: 0
</style>