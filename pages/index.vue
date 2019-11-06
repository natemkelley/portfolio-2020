<template>
  <main :style="{height: height+'px'}">
    <MenuCartoon />
    <BackgroundAll
      v-if="offsetLeft != 0"
      @informheight="updatePageHeight"
      :previousScrollPos="previousScrollPos"
      :groundElevationGround="groundElevationGround"
      :initialGroundElevationGround="initialGroundElevationGround"
      :offsetLeft="offsetLeft"
    />
    <MeMoving
      @informoffsetleft="updateOffsetLeft"
      :directionX="directionX"
      :groundElevation="groundElevation"
      :initialGroundElevation="initialGroundElevationNate"
      :stillMoving="stillMoving"
    />
  </main>
</template>

<script>
import MenuCartoon from "~/components/MenuCartoon";
import MeMoving from "~/components/MeMoving";
import BackgroundAll from "~/components/BackgroundAll";

export default {
  components: {
    MenuCartoon,
    MeMoving,
    BackgroundAll
  },
  data() {
    return {
      previousScrollPos: 0,
      directionX: "right",
      initialGroundElevationNate: 130,
      groundElevation: 0,
      initialGroundElevationGround: -790,
      groundElevationGround: 0,
      stillMoving: false,
      stillScrolling: 200,
      movingTimeoutVar: undefined,
      checkElevationChange: true,
      elevationChangePositionsNate: [
        { positionX: 0, positionY: 0 },
        { positionX: 1250, positionY: 120 },
        { positionX: 2463, positionY: 0 },
        { positionX: 6830, positionY: -45 },
        { positionX: 14000, positionY: 125 }
      ],
      elevationChangePositionsGround: [
        { positionX: 0, positionY: 0 },
        { positionX: 6830, positionY: 739 },
        { positionX: 14000, positionY: 125 }
      ],
      height: 0,
      offsetLeft: 0
    };
  },
  methods: {
    updatePageHeight(val) {
      this.height = Number(val); //is modified by offsetLeft
      console.log("incoming height", Number(val), "total height", this.height);
    },
    updateOffsetLeft(val) {
      console.log("offsetSetLeft", val);
      this.offsetLeft = val;
      this.height -= val;
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
          this.handleElevationChangeNate();
          this.handleElevationChangeGround();
          this.checkElevationChange = true;
        }, 25);
      }

      //handle if still scrolling
      clearTimeout(this.movingTimeoutVar);
      this.movingTimeoutVar = setTimeout(() => {
        this.stillMoving = false;
      }, this.stillScrolling);
      this.stillMoving = true;

      //set moving
      console.log(this.previousScrollPos);
    },
    async handleElevationChangeGround() {
      this.groundElevationGround = await new Promise(resolve => {
        for (var i = 0; i < this.elevationChangePositionsGround.length; i++) {
          if (
            this.elevationChangePositionsGround[i].positionX >
            Math.max(0, this.previousScrollPos + this.offsetLeft)
          ) {
            //console.log('positionX',this.elevationChangePositionsGround[i].positionX,'scrollpos', this.previousScrollPos,'offset',this.offsetLeft,'diff',Math.max(0,this.previousScrollPos+this.offsetLeft))
            resolve(this.elevationChangePositionsGround[i - 1].positionY);
            break;
          }
        }
      });
    },
    async handleElevationChangeNate() {
      this.groundElevation = await new Promise(resolve => {
        for (var i = 0; i < this.elevationChangePositionsNate.length; i++) {
          if (
            this.elevationChangePositionsNate[i].positionX >
            Math.max(0, this.previousScrollPos + this.offsetLeft)
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
