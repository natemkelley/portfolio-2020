<template>
  <div>
    <svg-icon :name="svgNameFinal" ref="nate" />
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "MeMoving",
  props: [
    "directionX",
    "groundElevation",
    "initialGroundElevation",
    "stillMoving",
    "underwater"
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
      offsetLeftPosition: 0
    };
  },
  mounted() {
    this.emitOffsetPos();
    /*window.addEventListener("resize", () => {
      this.emitOffsetPos();
    });*/
    this.$refs.nate.style.marginBottom = `${this.initialGroundElevation}px`;
    this.startBlinking();
  },
  methods: {
    emitOffsetPos() {
      this.offsetLeftPosition = this.$refs.nate.getBoundingClientRect().left;
      this.$emit("informoffsetleft", this.offsetLeftPosition);
    },
    startBlinking() {
      let randomTime = Math.floor(Math.random() * 5800) + 2800;
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
      anime({
        targets: this.$refs.nate,
        translateY: Math.max(-this.newElevation * 3, -this.newElevation - 300),
        easing: "cubicBezier(.14, .19, .24, 1.04)",
        duration: 350,
        begin: anim => {
          this.position = "jumping";
          console.log("start jump", -parseInt(anim.animations[0].currentValue));
        },
        complete: anim => {
          let jumpedHeight = -parseInt(anim.animations[0].currentValue);
          console.log(
            "complete jump",
            -parseInt(anim.animations[0].currentValue)
          );
          console.log(backup + " <----> " + this.newElevation);
          if (-parseInt(anim.animations[0].currentValue) <= backup) {
            if (
              backup === NaN ||
              backup === -parseInt(anim.animations[0].currentValue)
            ) {
              alert('nan')
            } else {
              this.startJump();
            }
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
          console.log("start fall", -parseInt(anim.animations[0].currentValue));
        },
        complete: anim => {
          this.elevationChanging = false;
          console.log(
            "complete fall",
            -parseInt(anim.animations[0].currentValue)
          );
          setTimeout(() => {
            this.moving();
          }, 150);
        }
      });
    },
    handleElevationChange(newElevation, oldElevation) {
      console.log("newel", newElevation, "oldel", oldElevation);
      if (!this.elevationChanging) {
        if (newElevation < 0 && oldElevation < 0) {
          if (newElevation < oldElevation) {
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
    }
  },
  computed: {
    svgNameFinal() {
      return "nate/" + this.position + "_" + this.directionX + this.blink;
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
      console.log("this.newElevation", this.newElevation);
      this.handleElevationChange(newVal, oldVal);
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
}
</style>
