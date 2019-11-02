<template>
  <div>
    <!--<svg-icon class="ground" name="Ground" ref="ground" />-->
    <Ground class="ground" ref="ground" />
  </div>
</template>

<script>
import Ground from "~/assets/sprite/svg/Ground.svg?inline";

export default {
  name: "BackgroundAll",
  components: { Ground },
  props: ["previousScrollPos"],
  mounted() {
    let viewbox = this.$refs.ground.getAttribute("viewBox").split(/\s+|,/)[2];
    this.$emit("informheight", viewbox);
  },
  methods: {
    handleMovement(value) {
      console.log(value);

      this.$refs.ground.style.marginLeft = -value + "px";
    }
  },
  watch: {
    previousScrollPos(newVal, oldVal) {
      this.handleMovement(newVal);
    }
  }
};
</script>

<style scoped>
.ground {
  width: 5754.43px;
  height: 1531.51px;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 760px;
}
</style>