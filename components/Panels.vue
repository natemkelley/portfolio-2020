<template>
  <div>
    <svg-icon
      class=""
      name="objects/World_Space_Panels"
      width="2353"
      height="600"
    />
    <img src="@/assets/World_Space_GlowTiny.png" class="glow" />
    <img src="@/assets/World_Space_GlowTiny.png" class="glow glow2" />
    <img src="@/assets/World_Space_GlowTiny.png" class="glow glow3" />
    <img src="@/assets/World_Space_GlowTiny.png" class="glow glow4" />
    <img src="@/assets/World_Space_GlowTiny.png" class="glow glow5" />
    <img src="@/assets/World_Space_GlowTiny.png" class="glow glow6" />
  </div>
</template>

<script>
import anime from "animejs"
export default {
  name: "Panels",
  props: ["introPanels"],
  watch: {
    introPanels(newVal) {
      if (newVal) {
        anime({
          targets: this.$el.querySelectorAll(".glow"),
          opacity: [1, 0.25],
          duration: 1050,
          delay:150,
          loop: true,
          easing:'linear',
          direction:'alternate'
        });
      }
    }
  }
};
</script>

<style scoped>
.glow {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 234px;
  margin-left: 105px;
}
.glow2 {
  margin-left: 431px;
}
.glow3 {
  margin-left: 755px;
}
.glow4 {
  margin-left: 1079px;
}
.glow5 {
  margin-left: 1394px;
}
.glow6 {
  margin-left: 1713px;
}
</style>
