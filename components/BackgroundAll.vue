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
      <Cave
        v-if="activeLayers.cave"
        :initialGroundElevationGround="initialGroundElevationGround"
        :containerOffset="caveOffset"
        :groundSpeed="groundSpeed"
        :natureSpeed="natureSpeed"
        :objectSpeed="objectSpeed"
        @informheight="calculateAndEmitPageHeight"
        @toggleModal="toggleModal"
      />
      <Space
        v-if="activeLayers.space"
        :initialGroundElevationGround="initialGroundElevationGround"
        :containerOffset="spaceOffset"
        :groundSpeed="groundSpeed"
        :natureSpeed="natureSpeed"
        :objectSpeed="objectSpeed"
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
import Cave from "~/components/backgrounds/Cave.vue";
import Space from "~/components/backgrounds/Space.vue";

export default {
  name: "BackgroundAll",
  components: { Grass, Sea, Beach, Cave, Space },
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
        beach: true,
        cave: true,
        space: true
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
        //console.log(newHeightObj.width, newHeightObj.container);
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

          for (let index = 0; index < this.containerOffsets.length; index++) {
            var name = this.containerOffsets[index].container;
            var contwidth = Number(this.containerOffsets[index].width);
            console.log(name);
            switch (name) {
              case "grass":
                this.activeLayers.grass =
                  this.previousScrollPos < contwidth + clientWidthTimes2
                    ? true
                    : false;
                break;
              case "sea":
                this.activeLayers.sea =
                  this.previousScrollPos > this.seaOffset - clientWidthTimes2 &&
                  this.previousScrollPos < this.beachOffset + clientWidthTimes2
                    ? true
                    : false;
                break;
              case "beach":
                this.activeLayers.beach =
                  this.previousScrollPos >
                    this.beachOffset - clientWidthTimes2 &&
                  this.previousScrollPos < this.caveOffset + 1600
                    ? true
                    : false;
                break;
              case "cave":
                this.activeLayers.cave =
                  this.previousScrollPos >
                    this.caveOffset - clientWidthTimes2 &&
                  this.previousScrollPos < this.spaceOffset + clientWidthTimes2
                    ? true
                    : false;
                break;
              case "space":
                this.activeLayers.space =
                  this.previousScrollPos > this.spaceOffset - 2500
                    ? true
                    : false;
                console.log(
                  "space",
                  this.previousScrollPos,
                  this.spaceOffset - clientWidthTimes2
                );
                break;
            }
          }

          console.log(this.activeLayers);
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
      //console.log("beach offset", returnVal + this.seaOffset);
      return returnVal + this.seaOffset;
    },
    caveOffset() {
      var returnVal = 0;
      this.containerOffsets.forEach(cont => {
        if (cont.container == "beach") {
          returnVal += Number(cont.width);
        }
      });
      return returnVal + this.beachOffset - 74;
    },
    spaceOffset() {
      var returnVal = 0;
      this.containerOffsets.forEach(cont => {
        if (cont.container == "cave") {
          returnVal += Number(cont.width);
        }
      });
      return returnVal + this.caveOffset - 0;
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
  /*position: absolute;
  top: 0;
  left: 0;*/
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
