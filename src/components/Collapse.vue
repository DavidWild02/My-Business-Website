<!-- https://jsfiddle.net/rezaxdi/sxgyj1f4/3/ example for toggle with vue -->
<template>
  <div class="collapse">
    {{ title }}
    <button @click="toggle">{{ isCollapsed ? "mehr" : "weniger" }}</button>
    <div
      ref="coll-content"
      id="coll-content"
      :style="isCollapsed ? {} : { height: maxHeight }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import { Vue, Prop, Component } from "vue-property-decorator";
import { setStyle } from "../tools/utilities";

@Component
export default class Collapse extends Vue {
  @Prop({ required: true }) readonly title!: string;
  public isCollapsed = false;
  private maxHeight = "0";

  mounted() {
    this.initHeight();
  }

  public toggle() {
    this.isCollapsed = !this.isCollapsed;
  }

  initHeight() {
    setStyle(
      {
        height: "auto",
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      this.$refs["coll-content"] as HTMLElement
    );

    this.maxHeight = getComputedStyle(
      this.$refs["coll-content"] as HTMLElement
    ).height;

    setStyle(
      {
        height: "0",
        position: "",
        visibility: "",
        display: ""
      },
      this.$refs["coll-content"] as HTMLElement
    );
  }
}
</script>

<style lang="sass">
#coll-content
  height: 0
  overflow: hidden
  transition: 1s
</style>
