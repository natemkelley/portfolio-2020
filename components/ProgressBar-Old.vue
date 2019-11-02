<template>
  <div id="container" ref="container">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
      <path
        id="heart-path"
        fill-opacity="0"
        stroke-width="3"
        d="M 0,2 L 98,2 L 98,98 L 2,98 L 2,4"
      />
    </svg>
  </div>
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
        return "#78d434";
      } else {
        this.color1;
      }
    },
    to() {
      if (!this.color2) {
        return "#318b63";
      } else {
        this.color2;
      }
    }
  },
  mounted() {
    // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
    this.bar = new ProgressBar.Path("#heart-path", {
      color: "#FFEA82",
      trailColor: "#eee",
      trailWidth: 1,
      duration: 1000,
      easing: "bounce",
      strokeWidth: 1,
      from: { color: this.from, a: 0 },
      to: { color: this.to, a: 1, fill: "#000" },
      step: (state, circle) => {
        circle.path.setAttribute("stroke", state.color);
      }
    });

    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrolled = Math.round((winScroll / height) * 100) / 100;
      this.bar.animate(scrolled, () => {
        if (scrolled > 0.94){ 
          this.handleComplete();
        };
      });
    },
    handleComplete() {
      setTimeout(() => {
        this.$refs.container.className = null;
        this.bar.path.setAttribute("stroke-width", 3);
      }, 1500);
      this.$refs.container.className = "green pulse";
      this.bar.path.setAttribute("stroke-width", 0);
    }
  }
};
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
  transition: all 500ms ease;
}

.pulse {
  border-radius: 10%;
  margin-top: -1px;
}
</style>