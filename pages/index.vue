<template>
  <div>
    <Preloader
      v-if="renderPreloader || true"
      :loaded="loaded"
      @togglepreloader="togglePreloader"
      @informheight="updateMobileOffset"
    />
    <main :style="{ height: height + 'px' }">
      <MenuCartoon @overrideactive="overrideactive" :offsetLeft="offsetLeft" />
      <BackgroundAll
        v-if="offsetLeft != 0"
        @informheight="updatePageHeight"
        :previousScrollPos="previousScrollPos"
        :groundElevationGround="groundElevationGround"
        :initialGroundElevationGround="initialGroundElevationGround"
        :offsetLeft="offsetLeft"
        :outerspace="outerspace"
        :cheering="cheering"
        :overrideactive="overrideactive2"
        @toggleModal="toggleModal"
      />
      <MeMoving
        @informoffsetleft="updateOffsetLeft"
        :directionX="directionX"
        :groundElevation="groundElevation"
        :initialGroundElevation="initialGroundElevationNate"
        :stillMoving="stillMoving"
        :underwater="underwater"
        :beach="beach"
        :jungle="jungle"
        :cave="cave"
        :outerspace="outerspace"
        :cheering="cheering"
      />
      <ScoreKeeper :previousScrollPos="previousScrollPos" />
      <ModalCartoon
        :modalOpen="modalOpen"
        @toggleModal="toggleModal"
        :component="component"
        color="#f26522"
      />
    </main>
  </div>
</template>

<script>
import Preloader from "~/components/Preloader";
import MenuCartoon from "~/components/MenuCartoon";
import MeMoving from "~/components/MeMoving";
import BackgroundAll from "~/components/BackgroundAll";
import ScoreKeeper from "~/components/ScoreKeeper";
import ModalCartoon from "~/components/ModalCartoon";

import anime from "animejs";

export default {
  components: {
    MenuCartoon,
    MeMoving,
    BackgroundAll,
    ScoreKeeper,
    ModalCartoon,
    Preloader
  },
  data() {
    return {
      loaded: false,
      cheering: false,
      renderPreloader: true,
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
      beach: false,
      jungle: false,
      cave: false,
      outerspace: false,
      elevationChangePositionsNate: [
        { positionX: 0, positionY: 0 },
        { positionX: 1250, positionY: 120 },
        { positionX: 2463, positionY: 0 },
        { positionX: 6830, positionY: -60 },
        { positionX: 8220, positionY: 16 },
        { positionX: 8880, positionY: -60 },
        { positionX: 12897, positionY: 78 },
        { positionX: 13234, positionY: 220 },
        { positionX: 13686, positionY: -70 },
        { positionX: 17151, positionY: -10 },
        { positionX: 34000, positionY: 125 }
      ],
      elevationChangePositionsGround: [
        { positionX: 0, positionY: 0 },
        { positionX: 6830, positionY: 725 },
        { positionX: 13685, positionY: 100 },
        { positionX: 17151, positionY: 29 },
        { positionX: 37955, positionY: 125 }
      ],
      height: 0,
      offsetLeft: 0,
      modalOpen: false,
      component: null,
      overrideactive2: false
    };
  },
  methods: {
    overrideactive(value) {
      //alert('overring '+ value)
      this.overrideactive2 = value;
    },
    togglePreloader() {
      this.renderPreloader = false;
    },
    handleLoader() {
      if (this.height > 20000) {
        setTimeout(() => {
          this.loaded = true;
        }, 450);
      }
    },
    updatePageHeight(val) {
      this.height = Number(val); //is modified by offsetLeft
      console.log("incoming height", Number(val), "total height", this.height);
      this.handleLoader();
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
      //console.log(this.previousScrollPos);

      //handle elevation change function which use previous scroll position
      if (this.checkElevationChange) {
        this.checkElevationChange = false;
        setTimeout(() => {
          this.handleElevationChangeNate();
          this.handleElevationChangeGround();
          this.handleSpecialEnviroments();
          this.checkElevationChange = true;
        }, 40);
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
    handleSpecialEnviroments() {
      //underwater
      this.underwater =
        this.previousScrollPos + this.offsetLeft > 6830 &&
        this.previousScrollPos + this.offsetLeft < 13685
          ? true
          : false;

      //beach
      this.beach =
        this.previousScrollPos + this.offsetLeft > 13686 &&
        this.previousScrollPos + this.offsetLeft < 17291
          ? true
          : false;

      //jungle
      this.jungle =
        this.previousScrollPos + this.offsetLeft > 17292 &&
        this.previousScrollPos + this.offsetLeft < 21868
          ? true
          : false;

      this.cave =
        this.previousScrollPos + this.offsetLeft > 21869 &&
        this.previousScrollPos + this.offsetLeft < 25655
          ? true
          : false;

      //space
      this.outerspace =
        this.previousScrollPos + this.offsetLeft > 28409 ? true : false;

      //cheering
      console.log('scroll pos',this.previousScrollPos,'offsetLeft',this.offsetLeft,'height',this.height)
      this.cheering =
        this.previousScrollPos + this.offsetLeft > 30850 
        //|| this.previousScrollPos + this.offsetLeft > this.height - 1000
          ? true
          : false;

      //console.log('pixels',this.previousScrollPos)
    },
    updateMobileOffset(val) {
      this.height = this.height + Number(val); //is modified by offsetLeft
      console.log("mobile height offset", val, "new height", this.height);
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>
