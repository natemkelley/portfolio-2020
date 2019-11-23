<template>
  <main :style="{ height: height + 'px' }">
    <MenuCartoon />
    <BackgroundAll
      v-if="offsetLeft != 0"
      @informheight="updatePageHeight"
      :previousScrollPos="previousScrollPos"
      :groundElevationGround="groundElevationGround"
      :initialGroundElevationGround="initialGroundElevationGround"
      :offsetLeft="offsetLeft"
      @toggleModal="toggleModal"
    />
    <MeMoving
      @informoffsetleft="updateOffsetLeft"
      :directionX="directionX"
      :groundElevation="groundElevation"
      :initialGroundElevation="initialGroundElevationNate"
      :stillMoving="stillMoving"
      :underwater="underwater"
    />
    <ScoreKeeper :previousScrollPos="previousScrollPos" />
    <ModalCartoon
      :modalOpen="modalOpen"
      @toggleModal="toggleModal"
      :component="component"
      color="#f26522"
    />
  </main>
</template>

<script>
import MenuCartoon from "~/components/MenuCartoon";
import MeMoving from "~/components/MeMoving";
import BackgroundAll from "~/components/BackgroundAll";
import ScoreKeeper from "~/components/ScoreKeeper";
import ModalCartoon from "~/components/ModalCartoon";

export default {
  components: {
    MenuCartoon,
    MeMoving,
    BackgroundAll,
    ScoreKeeper,
    ModalCartoon
  },
  data() {
    return {
      previousScrollPos: 0,
      directionX: "right",
      initialGroundElevationNate: 133,
      groundElevation: 0,
      initialGroundElevationGround: -790,
      groundElevationGround: 0,
      stillMoving: false,
      stillScrolling: 200,
      movingTimeoutVar: undefined,
      checkElevationChange: true,
      underwater: false,
      elevationChangePositionsNate: [
        { positionX: 0, positionY: 0 },
        { positionX: 1250, positionY: 120 },
        { positionX: 2463, positionY: 0 },
        { positionX: 6830, positionY: -60 },
        { positionX: 8220, positionY: 16 },
        { positionX: 8880, positionY: -60 },
        { positionX: 12897, positionY: 78 },
        { positionX: 13234, positionY: 220 },
        { positionX: 13685, positionY: 221 },
        { positionX: 13686, positionY: -70 },
        { positionX: 16000, positionY: 30 },
        { positionX: 16001, positionY: -10 },
        { positionX: 24000, positionY: 125 }
      ],
      elevationChangePositionsGround: [
        { positionX: 0, positionY: 0 },
        { positionX: 6830, positionY: 725 },
        { positionX: 13685, positionY: 100 },
        { positionX: 16001, positionY: 29 },
        { positionX: 17955, positionY: 125 }
      ],
      height: 0,
      offsetLeft: 0,
      modalOpen: false,
      component: null
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
      console.log(this.previousScrollPos);

      //handle elevation change function which use previous scroll position
      if (this.checkElevationChange) {
        this.checkElevationChange = false;
        setTimeout(() => {
          this.handleElevationChangeNate();
          this.handleElevationChangeGround();
          this.handleUnderwater();
          this.checkElevationChange = true;
        }, 25);
      }

      //handle if still scrolling
      clearTimeout(this.movingTimeoutVar);
      this.movingTimeoutVar = setTimeout(() => {
        this.stillMoving = false;
      }, this.stillScrolling);
      this.stillMoving = true;
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
    },
    toggleModal(component) {
      this.component = component;
      this.modalOpen = !this.modalOpen;
    },
    handleUnderwater() {
      let returnVal = false;
      if (this.previousScrollPos + this.offsetLeft > 6830) {
        returnVal = true;
      }
      if (this.previousScrollPos + this.offsetLeft > 12897 && this.previousScrollPos + this.offsetLeft < 15998) {
        returnVal = false;
      }
      if (this.previousScrollPos + this.offsetLeft > 15998) {
        returnVal = true;
      }

      //console.log('underwater',returnVal)
      this.underwater = returnVal;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style></style>
