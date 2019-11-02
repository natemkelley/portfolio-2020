<template>
  <div class="ground-container" ref="ground">
    <!--<svg-icon class="ground" name="Ground" ref="ground" 
/>-->
    <Ground class="ground-item" ref="grass" />
  </div>
</template>

<script>
import anime from "animejs";
import Ground from "~/assets/sprite/svg/Ground_Grass.svg?inline";
import Sea from "~/assets/sprite/svg/Ground_Sea.svg?inline";

export default {
  name: "BackgroundAll",
  components: { Ground, Sea },
  props: [
    "previousScrollPos",
    "groundElevationGround",
    "initialGroundElevationGround"
  ],
  mounted() {
    this.$refs.grass.style.marginBottom = `${this.initialGroundElevationGround}`;
    let viewbox = this.$refs.grass.getAttribute("viewBox").split(/\s+|,/)[2]; //width of grass
    this.$emit("informheight", Number(viewbox) + 1000); //buffer
  },
  methods: {
    handleMovement(value) {
      //this.$refs.ground.style.transform = `translateX(${-value + "px"})`;
      this.$refs.ground.style.marginLeft = `${-value + "px"}`;
    },
    handleMovementY(value) {
      console.log("y value", value);
      anime({
        targets: this.$refs.ground,
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
    }
  },
  watch: {
    previousScrollPos(newVal) {
      this.handleMovement(newVal);
    },
    groundElevationGround(newVal, oldVal) {
      console.log("ground", newVal, oldVal);
      this.handleMovementY(newVal);
    }
  }
};
</script>

<style scoped>
.ground-container{
  position: fixed;
  bottom: 0;
  left: 0;
}

.ground-item {
position: relative;
}
</style>