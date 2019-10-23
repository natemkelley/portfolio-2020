<template>
  <div id="container"></div>
</template>
<script>
import ProgressBar from "progressbar.js";

export default {
  name: "ProgressBar",
  props: ["color1", "color2"],
  data() {
    return {
      bar: null
    };
  },
  computed: {
    from() {
      if (!this.color1) {
        return "#c2c2c2";
      } else {
        this.color1;
      }
    },
    to() {
      if (!this.color2) {
        return "#505050";
      } else {
        this.color2;
      }
    }
  },
  mounted() {
    // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
    this.bar = new ProgressBar.Circle(container, {
      color: "#FFEA82",
      trailColor: "#eee",
      trailWidth: 1,
      duration: 1000,
      easing: "bounce",
      strokeWidth: 50,
      from: { color: this.from, a: 0 },
      to: { color: this.to, a: 1 },
      step: function(state, circle) {
        circle.path.setAttribute("stroke", state.color);
      }
    });

    window.addEventListener("scroll", this.handleScroll);
    // Number from 0.0 to 1.0
  },
  methods: {
    handleScroll() {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrolled = Math.round((winScroll / height) * 100) / 100;
      this.bar.animate(scrolled);
    }
  }
};
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>