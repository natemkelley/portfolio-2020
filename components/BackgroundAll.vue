<template>
  <div>
    <div ref="backgroudContainer" class="backgroundContainer">
      <Grass
        :initialGroundElevationGround="initialGroundElevationGround"
        :groundSpeed="groundSpeed"
        :objectSpeed="objectSpeed"
        :natureSpeed="natureSpeed"
        :skySpeed="skySpeed"
        :offsetLeft="offsetLeft"
        @informheight="calculateAndEmitPageHeight"
        @toggleModal="toggleModal"
      />
      <Sea
        v-if="true"
        :initialGroundElevationGround="initialGroundElevationGround"
        :containerOffset="seaOffset"
        :groundSpeed="groundSpeed"
        :objectSpeed="objectSpeed"
        :skySpeed="skySpeed"
        @informheight="calculateAndEmitPageHeight"
      />
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import Grass from "~/components/backgrounds/Grass.vue";
import Sea from "~/components/backgrounds/Sea.vue";
/*
Sky Svg needs to be 1/6 the size of ground
Nature needs to be 1/4
objects needs to be 1/2
immediateRatio need to be 1/1
*/

export default {
  name: "BackgroundAll",
  components: { Grass, Sea },
  data() {
    return {
      totalPageHeight: 0,
      containerOffsets: [],
      distanceOfLayers: 0.25,
      groundSpeed: 0,
      objectSpeed: 0,
      natureSpeed: 0,
      skySpeed: 0,
      immediateSpeed: 0,
      HorizonDistance: 3
    };
  },
  props: [
    "previousScrollPos",
    "groundElevationGround",
    "initialGroundElevationGround",
    "offsetLeft"
  ],
  methods: {
    toggleModal(component) {
      this.$emit("toggleModal", component);
    },
    calculateAndEmitPageHeight(newHeight) {
      if (newHeight) {
        this.containerOffsets.push(newHeight);
        this.totalPageHeight += Number(newHeight.width) || 0;
        this.$emit("informheight", this.totalPageHeight);
      }
    },
    handleMovementY(value) {
      anime({
        targets: this.$refs.backgroudContainer,
        translateY: -value,
        easing: "cubicBezier(.4,.06,.82,.37)",
        duration: 300,
        delay: 0,
        begin: () => {
          console.log("starting ground");
        },
        complete: anim => {
          console.log("complete ground");
        }
      });
    },
    handleLayerMovement(pixelsMoved) {
      //HorizonDistance to the Horizon (must be larger then the number of layers times x. Change this to tune the parallax effect)
      //The layer we are calculating the speed for
      //The distance each layer is into the screen from the last

      this.groundSpeed = -pixelsMoved;
      this.objectSpeed =
        -((this.HorizonDistance - 1 * this.distanceOfLayers) * pixelsMoved) /
        this.HorizonDistance;
      this.natureSpeed =
        -((this.HorizonDistance - 1.5 * this.distanceOfLayers) * pixelsMoved) /
        this.HorizonDistance;
      this.skySpeed =
        -((this.HorizonDistance - 3 * this.distanceOfLayers) * pixelsMoved) /
        this.HorizonDistance;

      //this.$refs.sky.style.transform = "translateX(" + -speed + "px)";
    },
    checkAndToggleActiveLayer() {}
  },
  watch: {
    groundElevationGround(newVal, oldVal) {
      this.handleMovementY(newVal);
    },
    previousScrollPos(pixels) {
      this.handleLayerMovement(pixels);
    }
  },
  computed: {
    seaOffset() {
      var returnVal = 0;
      this.containerOffsets.forEach(cont => {
        if (cont.container == "grass") {
          returnVal += Number(cont.width);
        }
      });
      return returnVal;
    }
  }
};
</script>

<style>
.backgroundContainer {
  position: fixed;
  bottom: 0;
  left: 0;
}

.area-container {
  position: absolute;
  top: 0;
  left: 0;
}

.ground-container {
  position: fixed;
  bottom: 0;
  left: 0;
}

.sky-container {
  position: fixed;
  bottom: 0;
  left: 0;
}
.objects-container {
  position: fixed;
  bottom: 0;
  left: 0;
}
.interactive-container {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>