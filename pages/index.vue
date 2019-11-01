<template>
  <main>
    <!--<Menu />-->
    <MeMoving
      :directionX="directionX"
      :groundElevation="groundElevation"
      :stillMoving="stillMoving"
    />
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
      groundElevation: 100,
      stillMoving: false,
      stillMovingTimeout: 200,
      movingTimeoutVar: undefined,
      checkElevationChange: true,
      elevationChangePositions: [
        { positionX: 0, positionY: 100 },
        { positionX: 300, positionY: 200 },
        { positionX: 700, positionY: 100 },
        { positionX: 1700, positionY: 400 },
        { positionX: 1900, positionY: 100 },
        { positionX: 44700, positionY: 200 }
      ]
    };
  },
  methods: {
    handleScroll() {
      //console.log("here", window.scrollY);

      //handle direction
      this.directionX =
        this.previousScrollPos > window.scrollY ? "right" : "left";
      this.previousScrollPos = window.scrollY;

      //handle elevation change function which use previous scroll position
      if (this.checkElevationChange) {
        this.checkElevationChange = false;
        setTimeout(() => {
          this.handleElevationChange();
          this.checkElevationChange = true;
        }, 100);
      }

      //handle if still scrolling
      clearTimeout(this.movingTimeoutVar);
      this.movingTimeoutVar = setTimeout(() => {
        this.stillMoving = false;
      }, this.stillMovingTimeout);
      this.stillMoving = true;
    },
    handleElevationChange() {
      var currentLeg = null;
      for (var i = 0; i < this.elevationChangePositions.length; i++) {
        if (
          this.elevationChangePositions[i].positionX > this.previousScrollPos
        ) {
          currentLeg = this.elevationChangePositions[i];
          break;
        }
      }
      this.groundElevation = currentLeg.positionY;
      console.log(this.previousScrollPos, currentLeg.positionX);
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
</style>
