<template>
  <div class="area-container">
    <div class="sky-container" ref="sky"></div>
    <div class="nature-container" ref="nature"></div>
    <div class="objects-container" ref="objects">
      <svg-icon
        v-for="object in objects"
        class="item"
        :name="'objects/'+object.name"
        :width="object.width"
        :height="object.height"
        :key="object.name"
        :style="{marginLeft:object.posX,marginBottom:object.posY}"
      />
    </div>
    <div class="immediateRatio-container" ref="immediateRatio"></div>
    <div class="ground-container" ref="groundContainer">
      <Ground ref="ground" />
    </div>
  </div>
</template>
 

<script>
import Ground from "~/assets/inlinesvg/Ground_Grass.svg?inline";
import Grass_Objects from "~/components/backgrounds/grass_objects.js";

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
    console.log(this.$refs.objects.shadowRoot);
  },
  data() {
    return {
      objects: Grass_Objects
    };
  },
  methods: {
    initLayers() {
      //ground
      this.$refs.groundContainer.style.marginBottom =
        this.initialGroundElevationGround + "px";
      let totalWidth = this.$refs.ground
        .getAttribute("viewBox")
        .split(/\s+|,/)[2];
      this.$emit("informheight", { width: totalWidth, container: "grass" });
      this.handleLayerMovement(0);

      //this.$refs.testobj.style.marginLeft = 1000 + "px";
      //this.$refs.testobj.style.marginBottom = 140 + "px";
    },
    handleLayerMovement(pixelsMoved) {
      let H = 2; //Distance to the Horizon (must be larger then the number of layers times x. Change this to tune the parallax effect)
      let i = 1; //The layer we are calculating the speed for
      let x = this.objectMovementRatio; //The distance each layer is into the screen from the last
      let a = pixelsMoved; //Speed of the foreground (screen) layer
      let speed = ((H - i * x) * a) / H;

      //max abs for obj pos - scroll pos

      this.$refs.objects.style.transform = "translateX(" + -speed + "px)";

      console.log("spped", speed, pixelsMoved);
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

<style>
.item {
  position: fixed;
  bottom: 0;
  left: 0;
}

/*

      <svg-icon
        v-for="object in objects"
        class="item"
        :name="'objects/'+object.name"
        :width="object.width"
        :height="object.height"
        :key="object.name"
        :style="{marginLeft:object.posX,marginBottom:object.posY, transform: object.transform}"
      />
      
         let objmarginpos = object.posX;
        let objwidth = object.width;
        let multiplier = 1 / 1.25 - 1; //0
        let offset = objmarginpos - objwidth - this.offsetLeft - pixelsMoved;
        let moveval = multiplier * offset;
        let final = moveval - pixelsMoved + objmarginpos;
        this.objects[n].transform = "translateX(" + final + "px)";     


              var H = 2; //Distance to the Horizon (must be larger then the number of layers times x. Change this to tune the parallax effect)
      var i = 1; //The layer we are calculating the speed for
      var x = 0.15; //The distance each layer is into the screen from the last
      var a = pixelsMoved; //Speed of the foreground (screen) layer
      var speed = ((H - i * x) * a) / H;
      
      */
</style>

