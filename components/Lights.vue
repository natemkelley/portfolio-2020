<template>
  <div>
    <svg-icon
      class="bulb"
      name="objects/World_Cave_Lightbulb"
      width="220"
      height="500"
    />
        <svg-icon
      class="bulb bulb2"
      name="objects/World_Cave_Lightbulb"
      width="220"
      height="500"
    />
            <svg-icon
      class="bulb bulb3"
      name="objects/World_Cave_Lightbulb"
      width="220"
      height="500"
    />
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Lights",
  props: ["introBulb"],
  methods: {
    swingBulb() {
        console.log(this.$el.querySelectorAll('.bulb'));
      anime({
        targets: this.$el.querySelectorAll('.bulb'),
        rotate: [-2.4, 2.4],
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine",
        duration: function() {
      return anime.random(3200, 3700);
    }
      });
    }
  },
  mounted(){
      this.swingBulb();
  },
  watch: {
    introBulb(newVal) {
      if (newVal) this.swingBulb();
    }
  }
};
</script>

<style scoped>
h1 {
  color: white;
}

.bulb{
    transform-origin: top center;
        position: absolute;
    bottom: 0;
}

.bulb2{
    margin-left: 750px;
}
.bulb3{
    margin-left: 1450px;
}
</style>
