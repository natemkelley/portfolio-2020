<template>
  <main :style="{height: height+'px'}">
    <!--<Menu />-->
    <BackgroundAll
      @informheight="updatePageHeight"
      :previousScrollPos="previousScrollPos"
      :groundElevationGround="groundElevationGround"
      :initialGroundElevationGround="initialGroundElevationGround"
    />
    <MeMoving
      :directionX="directionX"
      :groundElevation="groundElevation"
      :initialGroundElevation="initialGroundElevation"
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
      initialGroundElevation: 131,
      groundElevation: 0,
      initialGroundElevationGround: -1392,
      groundElevationGround: 0,
      stillMoving: false,
      stillMovingTimeout: 200,
      movingTimeoutVar: undefined,
      checkElevationChange: true,
      elevationChangePositionsNate: [
        { positionX: 0, positionY: 0 },
        { positionX: 450, positionY: 125 },
        { positionX: 650, positionY: 0 },
        { positionX: 5200, positionY: -50 },
        { positionX: 12000, positionY: 125 }
      ],
      elevationChangePositionsGround: [
        { positionX: 0, positionY: 0 },
        { positionX: 5200, positionY: 600 },
        { positionX: 12000, positionY: 125 }
      ],
      height: 0
    };
  },
  methods: {
    updatePageHeight(val) {
      this.height += Number(val);
      console.log("incoming height", Number(val), "total height", this.height);
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
          this.handleElevationChangeGround();
          this.checkElevationChange = true;
        }, 25);
      }

      //handle if still scrolling
      clearTimeout(this.movingTimeoutVar);
      this.movingTimeoutVar = setTimeout(() => {
        this.stillMoving = false;
      }, this.stillMovingTimeout);

      //set moving
      this.stillMoving = true;
      console.log(this.previousScrollPos);
    },
    async handleElevationChangeGround() {
      this.groundElevationGround = await new Promise(resolve => {
        for (var i = 0; i < this.elevationChangePositionsGround.length; i++) {
          if (
            this.elevationChangePositionsGround[i].positionX >
            this.previousScrollPos
          ) {
            resolve(this.elevationChangePositionsGround[i - 1].positionY);
            break;
          }
        }
      });
    },
    async handleElevationChange() {
      this.groundElevation = await new Promise(resolve => {
        for (var i = 0; i < this.elevationChangePositionsNate.length; i++) {
          if (
            this.elevationChangePositionsNate[i].positionX >
            this.previousScrollPos
          ) {
            //console.log('elevation',this.elevationChangePositionsNate[i - 1].positionY, 'at x',this.elevationChangePositionsNate[i - 1].positionX)
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
