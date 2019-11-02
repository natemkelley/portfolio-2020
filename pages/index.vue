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
      @informoffsetleft="updateOffsetLeft"
      :directionX="directionX"
      :groundElevation="groundElevation"
      :initialGroundElevation="initialGroundElevation"
      :stillMoving="stillMoving"
    />
  </main>
</template>

<script>
import MeMoving from "~/components/MeMoving";
import BackgroundAll from "~/components/BackgroundAll";

export default {
  components: {
    MeMoving,
    BackgroundAll
  },
  data() {
    return {
      previousScrollPos: 0,
      directionX: "right",
      initialGroundElevation: 130,
      groundElevation: 0,
      initialGroundElevationGround: -930,
      groundElevationGround: 0,
      stillMoving: false,
      stillMovingTimeout: 200,
      movingTimeoutVar: undefined,
      checkElevationChange: true,
      elevationChangePositionsNate: [
        { positionX: 0, positionY: 0 },
        { positionX: 1016, positionY: 142 },
        { positionX: 2240, positionY: 0 },
        { positionX: 4740, positionY: -10 },
        { positionX: 12000, positionY: 125 }
      ],
      elevationChangePositionsGround: [
        { positionX: 0, positionY: 0 },
        { positionX: 4735, positionY: 765 },
        { positionX: 12000, positionY: 125 }
      ],
      height: 0,
      offsetLeft: 0
    };
  },
  methods: {
    updatePageHeight(val) {
      this.height += Number(val);
      console.log("incoming height", Number(val), "total height", this.height);
    },
    updateOffsetLeft(val) {
      console.log("offsetSetLeft", val);
      this.offsetLeft = val;
    },
    handleScroll() {
      //handle direction of man
      this.directionX =
        this.previousScrollPos > (window.scrollY) ? "left" : "right";
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
            Math.max(0,this.previousScrollPos+this.offsetLeft)
          ) {
            //console.log('positionX',this.elevationChangePositionsGround[i].positionX,'scrollpos', this.previousScrollPos,'offset',this.offsetLeft,'diff',Math.max(0,this.previousScrollPos+this.offsetLeft))
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
            (this.elevationChangePositionsNate[i].positionX) >
            (Math.max(0,this.previousScrollPos+this.offsetLeft))
          ) {
            console.log('positionX',this.elevationChangePositionsNate[i].positionX,'scrollpos', this.previousScrollPos,'offset',this.offsetLeft,'diff',Math.max(0,this.previousScrollPos+this.offsetLeft))
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
