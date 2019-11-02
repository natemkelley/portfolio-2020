<template>
  <div>
    <!--<svg-icon class="ground" name="Ground" ref="ground" />-->
    <Ground class="ground" ref="ground" />
  </div>
</template>

<script>
import anime from "animejs";
import Ground from "~/assets/sprite/svg/Ground.svg?inline";

export default {
  name: "BackgroundAll",
  components: { Ground },
  props: [
    "previousScrollPos",
    "groundElevationGround",
    "initialGroundElevationGround"
  ],
  mounted() {
    this.$refs.ground.style.marginBottom = `${this.initialGroundElevationGround}`;
    let viewbox = this.$refs.ground.getAttribute("viewBox").split(/\s+|,/)[2];
    this.$emit("informheight", Number(viewbox)+1000); //buffer
  },
  methods: {
    handleMovement(value) {
      //this.$refs.ground.style.transform = `translateX(${-value + "px"})`;
      this.$refs.ground.style.marginLeft = `${-value + "px"}`;
    },
    handleMovementY(value) {
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
.ground {
  width: 5754.43px;
  height: 1531.51px;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>