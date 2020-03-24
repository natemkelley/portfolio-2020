<template>
  <div>
    <div class="MeMoving">
      <svg-icon
        :name="svgNameFinal"
        class="bignate"
        v-bind:class="{ rocketo: outerspace, cheering: cheering }"
        ref="nate"
      />
      <Balloons class="balloons" :cheering="cheering" />
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import Balloons from "~/components/Balloons";

export default {
  name: "MeMoving",
  components: { Balloons },
  props: [
    "directionX",
    "groundElevation",
    "initialGroundElevation",
    "stillMoving",
    "underwater",
    "beach",
    "jungle","cave",
    "outerspace",
    "cheering"
  ],
  data() {
    return {
      blink: "",
      blinkDuration: 330,
      position: "standing",
      moveDuration: 220,
      jumpDuration: 300,
      fallDuration: 300,
      lockMovement: false,
      movingTimeoutVar: null,
      elevationChanging: false,
      newElevation: 0,
      oldElevation: 0,
      offsetLeftPosition: 0,
      jumpDur: "right"
    };
  },
  created() {
    window.addEventListener("resize", this.emitOffsetPos);
  },
  destroyed() {
    window.removeEventListener("resize", this.emitOffsetPos);
  },
  mounted() {
    this.emitOffsetPos();
    this.$refs.nate.style.marginBottom = `${this.initialGroundElevation}px`;
    this.startBlinking();
  },
  methods: {
    emitOffsetPos() {
      this.offsetLeftPosition = this.$refs.nate.getBoundingClientRect().left;
      this.$emit("informoffsetleft", this.offsetLeftPosition);
    },
    startBlinking() {
      let randomTime = Math.floor(Math.random() * 3650) + 2100;
      setTimeout(() => {
        this.blink = "_blink";
        setTimeout(() => {
          this.blink = "";
          this.startBlinking();
        }, this.blinkDuration);
      }, randomTime);
    },
    async moving() {
      if (this.stillMoving) {
        await this.startWalking();
      } else {
        await this.stopWalking();
      }
    },
    startWalking() {
      return new Promise((resolve, reject) => {
        //check if elevation is correct
        let transformObject = this.$refs.nate.style.transform
          ? this.$refs.nate.style.transform
          : "translateX(0px)";
        let currentElevation = -parseInt(
          transformObject.substring(11, transformObject.length - 3)
        );

        if (currentElevation != this.newElevation) {
          this.handleElevationChange(this.newElevation, currentElevation);
        }

        //check if moving > walk > check if moving > stand > repeat
        if (this.stillMoving) {
          this.position = "walking";
          this.movingTimeoutVar = setTimeout(() => {
            if (this.stillMoving === true) {
              this.position = "standing";
              this.movingTimeoutVar = setTimeout(() => {
                this.startWalking();
              }, this.moveDuration);
            }
            resolve(true);
          }, this.moveDuration);
        }
      });
    },
    stopWalking() {
      return new Promise((resolve, reject) => {
        this.position = "facing";
        this.movingTimeoutVar = setTimeout(() => {
          this.position = "standing";
          resolve(true);
        }, this.moveDuration);
      });
    },
    startJump() {
      clearTimeout(this.movingTimeoutVar);
      var backup = this.newElevation;
      var jumpHeight = -Math.max(Math.abs(this.newElevation * 2), 330);
      anime({
        targets: this.$refs.nate,
        translateY: jumpHeight,
        easing: "cubicBezier(.14, .19, .24, 1.04)",
        duration: 350,
        begin: anim => {
          this.position = "jumping";
          //console.log("start jump", -parseInt(anim.animations[0].currentValue));
        },
        complete: anim => {
          //console.log('end jump',-parseInt(anim.animations[0].currentValue),backup);
          if (
            Math.abs(-parseInt(anim.animations[0].currentValue)) <
            Math.abs(backup)
          ) {
            this.startJump();
          } else {
            this.startFall();
          }
        }
      });
    },
    startFall() {
      clearTimeout(this.movingTimeoutVar);
      anime({
        targets: this.$refs.nate,
        translateY: -this.newElevation,
        easing: "cubicBezier(.4,.06,.82,.37)",
        duration: 300,
        delay: 50,
        begin: anim => {
          this.position = "falling";
          //console.log("start fall", -parseInt(anim.animations[0].currentValue));
        },
        complete: anim => {
          this.elevationChanging = false;
          //console.log( "complete fall",-parseInt(anim.animations[0].currentValue));
          setTimeout(() => {
            this.moving();
          }, 150);
        }
      });
    },
    handleElevationChange(newElevation, oldElevation) {
      //console.log("newel", newElevation, "oldel", oldElevation);
      if (!this.elevationChanging) {
        if (newElevation < 0 && oldElevation < 0) {
          console.log("herexxx " + this.directionX);
          if (this.directionX == "right") {
            this.startJump();
          } else {
            this.startFall();
          }
        } else {
          if (newElevation > oldElevation) {
            this.startJump();
          } else {
            this.startFall();
          }
        }
      }
      this.elevationChanging = true;
    },
    startCheering() {
      if (this.cheering) {
        setTimeout(() => {
          this.startCheering();
          if (this.jumpDur === "left") {
            this.jumpDur = "right";
          } else {
            this.jumpDur = "left";
          }
        }, 1350);
      }
    }
  },
  computed: {
    svgNameFinal() {
      if (this.cheering) {
        return "nate/normal_cheering_" + this.jumpDur;
      }else if (this.underwater) {
        return "nate/scuba_" + this.position+ "_"+this.directionX + this.blink;
      } else if (this.beach) {
        return "nate/shirtless_" + this.position+ "_"+this.directionX + this.blink;
      } else if (this.jungle) {
        return "nate/jungle_" + this.position+ "_"+this.directionX + this.blink;
      } else if (this.cave) {
        return "nate/cave_" + this.position+ "_"+this.directionX + this.blink;
      }else if (this.outerspace) {
        return "nate/space_fire_" + this.directionX;
      } else {
        return (
          "nate/normal_" + this.position + "_" + this.directionX + this.blink
        );
      }
    }
  },
  watch: {
    stillMoving(newVal, oldVal) {
      if (!this.elevationChanging) {
        this.moving();
      }
    },
    groundElevation(newVal, oldVal) {
      this.newElevation = newVal;
      //console.log("this.newElevation", this.newElevation);
      this.handleElevationChange(newVal, oldVal);
    },
    cheering(newVal) {
      if (newVal) {
        this.startCheering();
      }
    }
  }
};
</script>

<style scoped>
.sprite-nate {
  height: 200px;
  width: 200px;
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -100px;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  opacity: 1;
}

.rocketo {
  height: 570px;
  width: 470px;
  margin-left: -287.5px;
  margin-bottom: 0px !important;
}
.cheering {
  height: 200px;
  width: 200px;
  position: fixed;
  bottom: 41%;
  left: 50%;
  margin-left: -100px;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  opacity: 1;
  text-align: center;
}

.cheering {
  text-align: center;
  animation: cheering 0.5s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
  animation-iteration-count: infinite;
}

@keyframes cheering {
  0% {
    transform: translate3d(0, 0px, 0);
  }
  100% {
    transform: translate3d(0, 20px, 0);
  }
}

.balloons {
  position: fixed;
  bottom: -10px;
}
</style>
