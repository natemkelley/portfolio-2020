<template>
  <div>
    <svg-icon :name="svgNameFinal" ref="nate" />
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "MeMoving",
  props: ["directionX", "groundElevation", "stillMoving"],
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
      oldElevation: 0
    };
  },
  mounted() {
    this.startBlinking();
  },
  methods: {
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
      anime({
        targets: this.$refs.nate,
        translateY: Math.max(-this.newElevation * 3, -this.newElevation - 300),
        easing: "cubicBezier(.14, .19, .24, 1.04)",
        duration: 350,
        begin: () => {
          this.position = "jumping";
        },
        complete: anim => {
          let jumpedHeight = -parseInt(anim.animations[0].currentValue);
          if (-parseInt(anim.animations[0].currentValue) < this.newElevation) {
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
        begin: () => {
          this.position = "falling";
        },
        complete: anim => {
          setTimeout(() => {
            this.elevationChanging = false;
            this.position = "standing";
          }, 150);
        }
      });
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
      this.oldElevation = oldVal;

      if (!this.elevationChanging) {
        if (newVal > oldVal) {
          this.startJump();
        } else {
          this.startFall();
        }
      }
      this.elevationChanging = true;
    }
  }
};
</script>

<style  scoped>
.sprite-nate {
  height: 240px;
  width: 200px;
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -100px;
}
</style>