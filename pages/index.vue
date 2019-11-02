<template>
  <main :style="{height: height+'px'}">
    <!--<Menu />-->
    <BackgroundAll @informheight="updateHeight" :directionX="directionX" :previousScrollPos="previousScrollPos" />
    <MeMoving
      :directionX="directionX"
      :groundElevation="groundElevation"
      :stillMoving="stillMoving"
    />
  </main>
</template>

<script>
import Menu from "~/components/Menu.vue";
import MeMoving from "~/components/MeMoving";
import BackgroundAll from "~/components/BackgroundAll";

export default {
  components: {
    Menu,
    MeMoving,
    BackgroundAll
  },
  data() {
    return {
      previousScrollPos: 0,
      directionX: "right",
      groundElevation: 125,
      stillMoving: false,
      stillMovingTimeout: 200,
      movingTimeoutVar: undefined,
      checkElevationChange: true,
      elevationChangePositionsNate: [
        { positionX: 0, positionY: 125 },
        { positionX: 350, positionY: 250 },
        { positionX: 450, positionY: 125 },
        { positionX: 1000, positionY: 125 },
        { positionX: 1300, positionY: 125 },
        { positionX: 2000, positionY: 125 }
      ],
      height: 0
    };
  },
  methods: {
    updateHeight(val) {
      this.height += Number(val);
      console.log(val, this.height);
    },
    handleScroll() {
      //handle direction of man
      this.directionX =
        this.previousScrollPos > window.scrollY ? "left" : "right";
      this.previousScrollPos = window.scrollY;

      //handle elevation change function which use previous scroll position
      if (this.checkElevationChange) {
        this.checkElevationChange = false;
        setTimeout(() => {
          this.handleElevationChange();
          this.checkElevationChange = true;
        }, 10);
      }

      //handle if still scrolling
      clearTimeout(this.movingTimeoutVar);
      this.movingTimeoutVar = setTimeout(() => {
        this.stillMoving = false;
      }, this.stillMovingTimeout);

      //set moving
      this.stillMoving = true;
    },
    async handleElevationChange() {
      this.groundElevation = await new Promise(resolve => {
        for (var i = 0; i < this.elevationChangePositionsNate.length; i++) {
          if (
            this.elevationChangePositionsNate[i].positionX >
            this.previousScrollPos
          ) {
            resolve(this.elevationChangePositionsNate[i - 1].positionY);
            break;
          }
        }
      });
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
</style>
