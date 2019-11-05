<template>
  <div class="area-container">
    <div class="sky-container" ref="sky"></div>
    <div class="nature-container" ref="nature"></div>
    <div class="objects-container" ref="objects">
      <img src="@/assets/nba-ball.png" ref="testobj" />
    </div>
    <div class="immediateRatio-container" ref="immediateRatio"></div>
    <div class="ground-container" ref="groundContainer">
      <Ground class="ground-item" ref="ground" />
    </div>
  </div>
</template>

<script>
import Ground from "~/assets/inlinesvg/Ground_Grass.svg?inline";
export default {
  name: "Grass",
  props: [
    "initialGroundElevationGround",
    "previousScrollPos",
    "offsetLeft",
    "objectMovementRatio",
    "skyMovementRatio",
    "natureMovementRation",
    "immediateRatio",
    "containerOffset"
  ],
  components: { Ground },
  mounted() {
      this.initLayers();
    this.handleLayerMovement(0);
  },
  methods: {
    initLayers() {
      this.$refs.groundContainer.style.marginBottom =
        this.initialGroundElevationGround + "px";
      let totalWidth = this.$refs.ground
        .getAttribute("viewBox")
        .split(/\s+|,/)[2];

      this.$emit("informheight", {width:totalWidth,container:'grass'});
    },
    handleLayerMovement(pixelsMoved) {
      //objects
      let objmarginpos = 1000;
      let objwidth = 70
      let multiplier = 1 / this.objectMovementRatio - 1; //0
      let offset = objmarginpos - objwidth - this.offsetLeft - pixelsMoved;
      let moveval = multiplier * offset;
      this.$refs.testobj.style.marginLeft = moveval - pixelsMoved + objmarginpos + "px";
    }
  },
  watch: {
    previousScrollPos(pixels) {
      this.$refs.groundContainer.style.marginLeft = `${-pixels + "px"}`;
      this.handleLayerMovement(pixels);
    }
  }
};
</script>