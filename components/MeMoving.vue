<template>
  <div>
    <h1>Me</h1>
    <svg-icon :name="svgNameFinal" ref="nate" :style="{ marginBottom: groundElevation }" />
  </div>
</template>

<script>
//check if still moving

export default {
  name: "MeMoving",
  props: ["directionX", "groundElevation", "stillMoving"],
  data() {
    return {
      blink: "",
      blinkDuration: 330,
      position: "standing",
      moveDuration: 220,
      lockMovement: false,
      movingTimeoutVar: null
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
    }
  },
  computed: {
    svgNameFinal() {
      return "nate/" + this.position + "_" + this.directionX + this.blink;
    }
  },
  watch: {
    stillMoving(newVal, oldVal) {
      this.moving();
    },
    groundElevation(newVal, oldVal){

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