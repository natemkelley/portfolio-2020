<template>
  <div class="swag">
    <div class="float">
    <svg-icon
      class="octo head"
      name="octopus/Octopus_Head"
      height="441"
      width="403"
    />
    <svg-icon
      class="octo arm1"
      name="octopus/Octopus_Arm1"
      height="427"
      width="363"
    />
    <svg-icon
      class="octo arm2"
      name="octopus/Octopus_Arm2"
      height="291"
      width="582"
    />
        <svg-icon
      class="octo arm3"
      name="octopus/Octopus_Arm3"
      height="498"
      width="353"
    />
        <svg-icon
      class="octo arm4"
      name="octopus/Octopus_Arm4"
      height="345"
      width="593"
    />
            <svg-icon
      class="octo arm5"
      name="octopus/Octopus_Arm5"
      height="513"
      width="346"
    />
            <svg-icon
      class="octo arm6"
      name="octopus/Octopus_Arm6"
      height="307"
      width="552"
    />
                <svg-icon
      class="octo arm7"
      name="octopus/Octopus_Arm7"
      height="345"
      width="576"
    />
                <svg-icon
      class="octo arm8"
      name="octopus/Octopus_Arm8"
      height="417"
      width="660"
    />
    </div>
                    <svg-icon
      class="octo chest"
      name="octopus/Octopus_Chest"
      height="199"
      width="259"
    />
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
.octo{
  position: absolute;
  bottom: 0;
}

.head {
  margin-bottom: -35px;
}

.arm1 {
  margin-left: 280px;
  margin-bottom: 48px;
}

.arm2{
      margin-left: -405px;
    margin-bottom: -5px;
}

.arm3{
    margin-left: -270px;
    margin-bottom: -50px;
    z-index: -1;
}

.arm4{
    margin-left: -499px;
    margin-bottom: 11px;
    z-index: -2;
}

.arm5{
    margin-left: -150px;
    margin-bottom: 50px;
}

.arm6{
  margin-left: 300px;
    margin-bottom: -30px;
}
.arm7{
    margin-left: 345px;
    margin-bottom: -30px;
    z-index: -2;
}
.arm8{
    margin-left: 280px;
    margin-bottom: 30px;
    z-index: -1;
}

.chest{
      margin-left: 499px;
}
</style>
