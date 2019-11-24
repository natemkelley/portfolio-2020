<template>
  <div>
    <svg-icon name="objects/World_Beach_Board" height="760" width="576" />
    <img class="text" ref="text" :src="textsrc" />
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
import anime from 'animejs';

export default {
  name: "Scoreboard",
  props: ["introScoreboard"],
  data() {
    return {
      textsrc: BYU
    };
  },
  mounted() {
    var alt = false;
    setInterval(() => {
      this.$refs.text.src = alt ? BYU : College;
      alt = !alt;
    }, 2650);
  },
  methods: {
    introduceBall() {
      var x = this.$refs.ball;
            console.log(x);
    anime({
      targets: this.$refs.ball,
      marginLeft: [0,-600],
      rotate:['790deg','0deg'],
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
    }
  }
};
</script>

<style scoped>
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
}

.net {
  position: absolute;
  bottom: 0;
  margin-bottom: -45px;
  margin-left: -165px;
}
</style>
