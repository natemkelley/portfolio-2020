<template>
  <div @mouseover="animate">
    <Logo ref="logo" />
  </div>
</template>

<script>
import anime from "animejs";
import Logo from "@/assets/nklogosvg.svg";

export default {
  name: "MenuLogo",
  components: { Logo },
  props: ["opened"],
  data() {
    return {
      timeline: null,
      animating: false
    };
  },
  mounted() {
    this.timeline = anime.timeline({
      easing: "easeInOutSine",
      duration: 1200,
      autoplay: false,
      delay: 300,
      complete: () => {
        this.animating = false;
      }
    });
    this.timeline.add({
      targets: this.$refs.logo.querySelectorAll(".lines path"),
      strokeDashoffset: [anime.setDashoffset, 0],
      stroke: ["#fff", "#fff"],
      delay: function(el, i) {
        return i * 250;
      }
    });
    this.timeline.add({
      targets: this.$refs.logo.querySelectorAll(".lines path"),
      fill: ["#fff0", "#41b883"],
      stroke: ["#fff", "#41b883"]
    });
  },
  methods: {
    animate() {
      if (!this.animating) {
        this.animating = true;
        this.timeline.play();
      }
    }
  },
  watch: {
    opened(x, y) {
      this.animate();
    }
  }
};
</script>
