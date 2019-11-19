<template>
  <div class="swag">
    <svg-icon
      class="octo ice"
      name="objects/World_Sea_Iceberg"
      height="532"
      width="397"
    />
    <div class="">
      <svg-icon
        class="octo ship"
        name="objects/World_Sea_Ship"
        height="560"
        width="697"
        ref="ship"
      />
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Octopus",
  props: ["introShip"],
  watch: {
    introShip(newVal) {
      anime({
        targets: this.$refs.ship,
        keyframes: [
          { marginBottom: "270px", marginLeft: "0px ", rotate: "15deg" },
          { marginBottom: "170px", marginLeft: "0px ", rotate: "5deg" },
          { marginBottom: "70px", marginLeft: "0px ", rotate: "15deg" },
          { marginBottom: "10px", marginLeft: "0px ", rotate: "7deg" },
          { marginBottom: "-40px", marginLeft: "0px ", rotate: "4.5deg" }
        ],
        duration: 4550,
        easing: 'linear',
      });
    }
  }
};
</script>

<style scoped>
.ship {
  position: absolute;
  bottom: 0;
  margin-bottom: 370px;
  margin-left: -37px;
}
.ice {
  position: absolute;
  bottom: 0;
  margin-bottom: 262px;
  margin-left: 555px;
}
</style>
