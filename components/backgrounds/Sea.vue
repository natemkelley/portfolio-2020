<template>
  <div class="area-container" ref="area" :style="`transform:translateX(${this.containerOffset}px)`">
    <div class="sky-container" ref="sky">
    </div>
    <div class="nature-container" ref="nature"></div>
    <div class="objects-container" ref="objects">
    </div>
    <div class="immediate-container" ref="immediate"></div>
    <div class="ground-container" ref="groundContainer">
      <Ground ref="ground" />
    </div>
  </div>
</template>

<script>
import Ground from "~/assets/inlinesvg/Ground_Sea.svg?inline";

export default {
  name: "Sea",
  props: ["initialGroundElevationGround", "containerOffset", "groundSpeed"],
  components: { Ground },
  mounted() {
    this.initLayers();
  },
  methods: {
    initLayers() {
      this.$refs.groundContainer.style.marginBottom =
        this.initialGroundElevationGround + "px";
      let totalWidth = this.$refs.ground
        .getAttribute("viewBox")
        .split(/\s+|,/)[2];

      this.$emit("informheight", { width: totalWidth, container: "sea" });
    }
  },
  watch: {
    groundSpeed(pixels) {
      this.$refs.groundContainer.style.marginLeft = `${pixels + "px"}`;
    }
  }
};
</script>