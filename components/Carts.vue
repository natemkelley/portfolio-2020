<template>
  <div>
    <svg-icon
      class="track"
      name="objects/World_Cave_Tracks"
      width="2359"
      height="50"
    />
    <svg-icon
      @click="openModal('Test')"
      class="clickable cart cart1"
      name="objects/World_Cave_Scouting"
      width="363"
      height="295"
    />
    <svg-icon
      @click="openModal('Test')"
      class="clickable cart cart2"
      name="objects/World_Cave_SBO"
      width="312"
      height="264"
    />
    <svg-icon
      @click="openModal('Test')"
      class="clickable cart cart3"
      name="objects/World_Cave_Italia"
      width="360"
      height="304"
    />
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "Carts",
  props: ["introCarts"],
  methods: {
    openModal(comp) {
      this.$emit("openModal", comp);
    }
  },
  watch: {
    introCarts(newVal) {
      if (newVal) {
        anime({
          targets: this.$el.querySelectorAll(".cart2"),
          marginLeft: -1300,
          duration: 3220,
          easing:'easeOutQuad'
        });
        anime({
          targets: this.$el.querySelectorAll(".cart3"),
          marginLeft: -600,
          duration: 4200,
                    easing:'easeOutQuad'
        });
      }
    }
  }
};
</script>

<style scoped>
.track {
  margin-bottom: -6px;
}

.cart {
  position: absolute;
  bottom: 0;
  margin-bottom: 5px;
  margin-left: -2050px;
  transform: scale(1.05);
}

.cart2 {
  margin-left: -1950px;
  margin-bottom: 17px;
}
.cart3 {
  margin-left: -1850px;
  margin-bottom: 0px;
}
</style>
