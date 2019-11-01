<template>
  <main>
    <!--<Menu />-->
    <MeMoving :directionX="directionX" :groundElevation="groundElevation" :stillMoving='stillMoving' />
    <p v-for="n in 175" :key="n">This is an exmaple page</p>
  </main>
</template>

<script>
import Menu from "~/components/Menu.vue";
import MeMoving from "~/components/MeMoving";

export default {
  components: {
    Menu,
    MeMoving
  },
  data() {
    return {
      previousScrollPos: 0,
      directionX: "right",
      groundElevation: 0,
      stillMoving: false,
      stillMovingTimeout: 200,
      movingTimeoutVar: undefined
    };
  },
  methods: {
    handleScroll() {
      //console.log("here", window.scrollY);
      this.directionX =
        this.previousScrollPos > window.scrollY ? "right" : "left";

      clearTimeout(this.movingTimeoutVar);
      this.movingTimeoutVar = setTimeout(() => {
        this.stillMoving = false;
      }, this.stillMovingTimeout);

      this.stillMoving = true;
      this.previousScrollPos = window.scrollY;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
</style>
