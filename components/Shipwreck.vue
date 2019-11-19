<template>
  <div class="swag">
         <svg-icon
      class="octo ice"
      name="objects/World_Sea_Iceberg"
      height="532"
      width="397"
    /> 
    <div class="float">
    <svg-icon
      class="octo ship"
      name="objects/World_Sea_Ship"
      height="560"
      width="697"
    />
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Octopus",
  components: {},
  methods: {
    animateArm() {}
  }
};
</script>

<style scoped>
.ship{
  position: absolute;
  bottom: 0;
  margin-bottom: -70px;
}
.ice{
  position: absolute;
  bottom: 0;
  margin-bottom: 262px;
  margin-left: 555px;
}

</style>
