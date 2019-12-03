<template>
  <div>
    <div class="scoreboard">
      <svg-icon name="objects/World_Beach_Board" height="760" width="576" />
      <img class="text" ref="text" :src="textsrc" />
    </div>
    <svg-icon
      class="net"
      name="objects/World_Beach_Net"
      height="458"
      width="180"
    />
    <svg-icon
      class="ball"
      ref="ball"
      name="objects/World_Beach_Ball"
      height="100"
      width="89"
    />
  </div>
</template>

<script>
import BYU from "@/assets/World_Beach_BYU.png";
import College from "@/assets/World_Beach_College.png";
import anime from "animejs";

export default {
  name: "Scoreboard",
  props: ["introScoreboard"],
  data() {
    return {
      textsrc: BYU,
      alt: false
    };
  },
  mounted() {},
  methods: {
    toggleSign() {
      setTimeout(() => {
        var src = this.alt ? BYU : College;
        if (src != undefined) {
          this.$refs.text.src = src;
          this.alt = !this.alt;
          this.toggleSign();
        }
      }, 2650);
    },
    introduceBall() {
      var x = this.$refs.ball;
      anime({
        targets: this.$refs.ball,
        marginLeft: [675, 45],
        rotate: ["790deg", "2deg"],
        easing: "easeInOutQuad",
        loop: false,
        duration: 4100,
        direction: "alternate"
      });
    }
  },
  watch: {
    introScoreboard(newVal) {
      this.introduceBall();
            this.toggleSign();
    }
  }
};
</script>

<style scoped>
.scoreboard {
  transform: scale(0.91);
  margin-bottom: -23px;
}
.text {
  position: absolute;
  margin-left: -540px;
  margin-top: 130px;
  opacity: 0.95;
}

.ball {
  position: absolute;
  bottom: 0;
  margin-bottom: 46.5px;
  margin-left: 675px;
}

.net {
  position: absolute;
  bottom: 0;
  margin-bottom: -65px;
  margin-left: 399px;
}
</style>
