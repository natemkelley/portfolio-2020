<template>
  <div class="lighthouse">
    <Lighthousex class="house" ref="lighthouse" />
    <img src="@/assets/World_Beach_Light.png" class="light" ref="light" />
  </div>
</template>

<script>
import anime from "animejs";
import Lighthousex from "~/assets/inlinesvg/World_Beach_Lighthouse.svg?inline";
export default {
  name: "Lighthouse",
  components: { Lighthousex },
  props: ["introLighthouse"],
  data(){
    return{
      toggleLightVal: true
    }
  },
  mounted(){
    this.$refs.lighthouse.querySelector(".lighthole").style.opacity = 1;
    this.$refs.lighthouse.querySelector(".lighthole").style.transition="opacity 0.35s";
  },
  methods: {
    toggleLight() {
      //console.log("toggling",this.$refs.lighthouse.querySelector(".lighthole").style.opacity);
      if (
        this.toggleLightVal
      ) {

        this.$refs.lighthouse.querySelector(".lighthole").style.opacity = 0.01;
      } else {
        this.$refs.lighthouse.querySelector(".lighthole").style.opacity = 1;
      }
      this.toggleLightVal = !this.toggleLightVal;
    }
  },
  watch: {
    introLighthouse(newVal) {
      anime({
        targets: this.$refs.light,
        scaleX: [-1, 1],
        marginLeft: [475, 54],
        zIndex: [2, -1],
        easing: "easeInOutQuad",
        loop: true,
        duration: 4000,
        direction: "alternate"
      });

      anime({
        targets: this.$refs.lighthouse.querySelector(".lighthole"),
        translateX: [108, -8],
        easing: "easeInOutQuad",
        loop: true,
        duration: 4000,
        direction: "alternate",
        loopComplete: anim => {
          this.toggleLight();
        }
      });
    }
  }
};
</script>

<style scoped>
.lighthouse {
  transform: scale(0.865);
}

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
