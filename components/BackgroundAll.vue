<template>
  <div>
    <div ref="backgroudContainer" class="backgroundContainer">
      <Grass
        v-if="activeLayers.grass"
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
        v-if="activeLayers.sea"
        :initialGroundElevationGround="initialGroundElevationGround"
        :containerOffset="seaOffset"
        :groundSpeed="groundSpeed"
        :objectSpeed="objectSpeed"
        :skySpeed="skySpeed"
        @informheight="calculateAndEmitPageHeight"
        @toggleModal="toggleModal"
      />
      <Beach
        v-if="activeLayers.beach"
        :initialGroundElevationGround="initialGroundElevationGround"
        :containerOffset="beachOffset"
        :groundSpeed="groundSpeed"
        :natureSpeed="natureSpeed"
        :objectSpeed="objectSpeed"
        :skySpeed="skySpeed"
        @informheight="calculateAndEmitPageHeight"
        @toggleModal="toggleModal"
      />
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import Grass from "~/components/backgrounds/Grass.vue";
import Sea from "~/components/backgrounds/Sea.vue";
import Beach from "~/components/backgrounds/Beach.vue";

/*
Sky Svg needs to be 1/6 the size of ground
Nature needs to be 1/4
objects needs to be 1/2
immediateRatio need to be 1/1
*/

export default {
  name: "BackgroundAll",
  components: { Grass, Sea, Beach },
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
      HorizonDistance: 3,
      checkingActiveLayers: false,
      activeLayers: {
        grass: true,
        sea: true,
        beach: true
      }
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
    calculateAndEmitPageHeight(newHeightObj) {
      if (!checkIfObjExist(newHeightObj, this.containerOffsets)) {
        this.containerOffsets.push(newHeightObj);
        this.totalPageHeight += Number(newHeightObj.width) || 0;
        this.$emit("informheight", this.totalPageHeight);
      }

      function checkIfObjExist(newObj, containerOffsets) {
        var returnVal = false;
        containerOffsets.forEach(obj => {
          if (obj.container === newObj.container) {
            returnVal = true;
          }
        });
        return returnVal;
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
    checkAndToggleActiveLayer(override) {
      if (!this.checkingActiveLayers) {
        this.checkingActiveLayers = true;
        setTimeout(() => {
          var clientWidthTimes2 = document.body.clientWidth * 2;
          var runningWidth = 0;
          for (let index = 0; index < this.containerOffsets.length; index++) {
            var active = false;
            //check initial frame
            if (index === 0) {
              if (
                this.previousScrollPos >= 0 &&
                this.previousScrollPos <=
                  Number(this.containerOffsets[index].width) + clientWidthTimes2
              ) {
                active = true;
              }
            } else {
              //console.log(this.containerOffsets[index].container,this.previousScrollPos,runningWidth - clientWidthTimes2,Number(runningWidth + Number(this.containerOffsets[index].width) + clientWidthTimes2))
              if (
                this.previousScrollPos >=
                  (runningWidth - clientWidthTimes2 || 0) &&
                this.previousScrollPos <=
                  Number(runningWidth + Number(this.containerOffsets[index].width) + clientWidthTimes2)
              ) {
                active = true;
              }
            }

            if (index > 0 && active != true) {
              if (
                this.previousScrollPos > runningWidth &&
                this.previousScrollPos <
                  Number(runningWidth + Number(this.containerOffsets[index].width))
              ) {
                active = true;
              }
            }

            runningWidth += Number(this.containerOffsets[index].width);
            this.activeLayers[this.containerOffsets[index].container] = active;
          }
          //console.log(this.activeLayers);
          this.checkingActiveLayers = false;
        }, 500);
      }
    }
  },
  watch: {
    groundElevationGround(newVal, oldVal) {
      this.handleMovementY(newVal);
    },
    previousScrollPos(pixels) {
      this.handleLayerMovement(pixels);
      this.checkAndToggleActiveLayer(pixels);
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
    },
    beachOffset() {
      var returnVal = 0;
      this.containerOffsets.forEach(cont => {
        if (cont.container == "sea") {
          returnVal += Number(cont.width);
        }
      });
      return returnVal + this.seaOffset;
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
