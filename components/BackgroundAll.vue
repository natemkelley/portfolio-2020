<template>
  <div>
    <div class="ground-container" ref="ground">
      <!--<svg-icon class="ground" name="Ground" ref="ground" 
      />-->
      <Ground class="ground-item" ref="grass" />
      <Sea class="ground-item" ref="sea" />
    </div>
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
    this.$refs.ground.style.marginBottom =
      this.initialGroundElevationGround + "px";
    let grassWidth = this.$refs.grass.getAttribute("viewBox").split(/\s+|,/)[2]; //width of grass
    this.$refs.sea.style.marginLeft = grassWidth + "px";
    this.calculateAndEmitPageHeight();
  },
  methods: {
    calculateAndEmitPageHeight() {
      var items = this.$el.querySelectorAll('.ground-item');
      var totalHeight = 0;
      items.forEach(element => {
          totalHeight+= Number(element.getAttribute("viewBox").split(/\s+|,/)[2]);
      });
      this.$emit("informheight", totalHeight); //shorten actual emit
    },
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
.ground-container {
  position: fixed;
  bottom: 0;
  left: 0;
}

.ground-item {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>