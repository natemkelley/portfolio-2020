<template>
<div>
  <div class="swag">
    <div class="float">
      <svg-icon
        class="octo head"
        name="octopus/Octopus_Head"
        height="441"
        width="403"
      />
      <svg-icon
        class="octo arm1 arm"
        name="octopus/Octopus_Arm1"
        height="427"
        width="363"
      />
      <svg-icon
        class="octo arm2 arm"
        name="octopus/Octopus_Arm2"
        height="291"
        width="582"
      />
      <svg-icon
        class="octo arm3 arm"
        name="octopus/Octopus_Arm3"
        height="498"
        width="353"
      />
      <svg-icon
        class="octo arm4 arm"
        name="octopus/Octopus_Arm4"
        height="345"
        width="593"
      />
      <svg-icon
        class="octo arm5 arm"
        name="octopus/Octopus_Arm5"
        height="513"
        width="346"
      />
      <!--<svg-icon
        class="octo arm6 arm"
        name="octopus/Octopus_Arm6"
        height="307"
        width="552"
      />-->
      <svg-icon
        class="octo arm7 arm"
        name="octopus/Octopus_Arm7"
        height="345"
        width="576"
      />
                <svg-icon
      class="octo chest arm"
      name="octopus/Octopus_ArmChest"
      height="299"
      width="536"
    />
      <svg-icon
        class="octo arm8"
        name="octopus/Octopus_Arm8"
        height="417"
        width="660"
      />

      <Eyes class="eyesframe" ref="eyes" />
    </div>

  </div>
</div>
</template>

<script>
import anime from "animejs";
import Eyes from "~/assets/inlinesvg/Octopus/eyes.svg?inline";
export default {
  name: "Octopus",
  props:['introOcto'],
  components: { Eyes },
  methods: {
    movesArms() {
      anime({
        targets: this.$el.querySelectorAll(".arm"),
        rotate: () => {
          return anime.random(-1, 5.4) + "deg";
        },
        easing: "linear",
        duration: 1950,
        complete: ani => {
          this.movesArms();
        }
      });
    }
  },
  mounted() {
    anime({
      targets: this.$refs.eyes.querySelectorAll(".eyes"),
      keyframes: [
        { translateX: "7.75px", delay: 1100, duration: 1650 },
        { translateX: "15px", delay: 500, duration: 1150 },
        { translateX: "0px", delay: 1100, duration: 1350 },
        { translateX: "15px", delay: 800, duration: 1050 },
        { translateX: "-1px", delay: 1100, duration: 1850 },
        { translateX: "16px", delay: 1100, duration: 850 }
      ],
      easing: "linear",
      loop: true,
      direction: "alternate"
    });
    this.movesArms();
  },
  watch: {
    introOcto(newVal) {
      if (newVal) {
        anime({
          targets: this.$el.querySelectorAll(".swag"),
          easing: 'easeOutQuad',
          duration:5000,
          translateY:'0px'
        });
      }
    }
  }
};
</script>

<style scoped>
.swag{
  transition: all 2s ease;
  transform: translateY(490px);
}

.uppity{
    transform: translateY(0px);
}

.octo {
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

.arm2 {
  margin-left: -405px;
  margin-bottom: -5px;
}

.arm3 {
  margin-left: -270px;
  margin-bottom: -50px;
  z-index: -1;
}

.arm4 {
  margin-left: -499px;
  margin-bottom: 11px;
  z-index: -2;
}

.arm5 {
  margin-left: -150px;
  margin-bottom: 50px;
}

.arm6 {
  margin-left: 300px;
  margin-bottom: -30px;
}
.arm7 {
  margin-left: 345px;
  margin-bottom: -30px;
  z-index: -2;
}
.arm8 {
  margin-left: 280px;
  margin-bottom: 30px;
  z-index: -1;
}

.chest {
  margin-left: 249px;
}
.eyesframe {
  position: absolute;
  bottom: 0;
  margin-bottom: 148px;
  margin-left: 119.5px;
  z-index: 1111;
}
</style>
