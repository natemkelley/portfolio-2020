<template>
  <div>
    <h1>Me</h1>
    <svg-icon :name="svgNameFinal" ref="nate" />
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
      blinkDuration: 330
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
    startMove() {

    }
  },
  computed: {
    svgNameFinal() {
      return "nate/standing_" + this.directionX + this.blink;
    }
  },
  watch: {
    stillMoving(newVal, oldVal){
      console.log(newVal)
    }
  },
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