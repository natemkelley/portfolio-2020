<template>
  <div>
    <svg-icon
      name="objects/World_Beach_Lighthouse"
      height="760"
      width="576"
      class="house"
    />
    <img src="@/assets/World_Beach_Light.png" class="light" ref="light" />
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Lighthouse",
  mounted() {
    anime({
      targets: this.$refs.light,
      scaleX: [-1,1],
      marginLeft: [475,54],
      zIndex:[2,-1],
      easing: "easeInOutQuad",
      loop: true,
      duration: 4000,
      direction: "alternate"
    });
  }
};
</script>

<style scoped>
.house {
  position: absolute;
  bottom: 0;
  z-index: 1;
}

.light {
  margin-left: 54px;
  margin-bottom: 553px;
  bottom: 0;
  position: absolute;
  z-index: 0;
}
</style>
