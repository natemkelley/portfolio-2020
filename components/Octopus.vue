<template>
  <div class="swag">
    <OctoHead class="head" @click="animateArm" />
    <Arm1X1 class="arm1" />

  </div>
</template>

<script>
import anime from "animejs";
import OctoHead from "@/assets/inlinesvg/Octopus/Octopus_Head.svg?inline";
import Arm1X1 from "@/assets/inlinesvg/Octopus/Octopus_Arm1X1.svg?inline";

export default {
  name: "Octopus",
  components: { OctoHead, Arm1X1 },
  methods: {
    animateArm() {

    }
  }
};
</script>

<style scoped>
.swag {
  position: ;
}

.head {
  position: ;
}

.arm1 {
  position: absolute;
  margin-left: -70px;
}

.demo-content {
  position: absolute;
  bottom: 0;
  margin-bottom: 100px;
}
</style>
