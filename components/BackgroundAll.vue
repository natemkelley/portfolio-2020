<template>
  <div>
    <div ref="backgroudContainer" class="backgroundContainer">
      <Grass
        :previousScrollPos="previousScrollPos"
        :initialGroundElevationGround="initialGroundElevationGround"
        :offsetLeft="offsetLeft"
        :objectMovementRatio="objectMovementRatio"
        :skyMovementRatio="skyMovementRatio"
        :natureMovementRation="natureMovementRatio"
        :immediateRatio="immediateRatio"
        @informheight="calculateAndEmitPageHeight"
      />
      <Sea
        :previousScrollPos="previousScrollPos"
        :initialGroundElevationGround="initialGroundElevationGround"
        :offsetLeft="offsetLeft"
        :objectMovementRatio="objectMovementRatio"
        :skyMovementRatio="skyMovementRatio"
        :natureMovementRation="natureMovementRatio"
        :immediateRatio="immediateRatio"
        :containerOffset="seaOffset"
        @informheight="calculateAndEmitPageHeight"
      />
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import Grass from "~/components/backgrounds/Grass.vue";
import Sea from "~/components/backgrounds/Sea.vue";
/*
Sky Svg needs to be 1/6 the size of ground
Nature needs to be 1/4
objects needs to be 1/2
immediateRatio need to be 1/1
*/

export default {
  name: "BackgroundAll",
  components: { Grass, Sea },
  data() {
    return {
      skyMovementRatio: 6,
      objectMovementRatio: 0.5,
      natureMovementRatio: 1.75,
      immediateRatio: 1,
      totalPageHeight: 0,
      containerOffsets:[]
    };
  },
  props: [
    "previousScrollPos",
    "groundElevationGround",
    "initialGroundElevationGround",
    "offsetLeft"
  ],
  mounted() {
    this.initLayers();
    this.calculateAndEmitPageHeight();
  },
  methods: {
    initLayers() {},
    calculateAndEmitPageHeight(newHeight) {
      if (newHeight) {
        this.containerOffsets.push(newHeight);
        this.totalPageHeight += Number(newHeight.width) || 0;
      }
      this.$emit("informheight", this.totalPageHeight);
    },
    handleMovementY(value) {
      console.log("y value", value);
      anime({
        targets: this.$refs.backgroudContainer,
        translateY: -value,
        easing: "cubicBezier(.4,.06,.82,.37)",
        duration: 300,
        delay: 0,
        begin: () => {
          console.log("starting ground");
        },
        complete: anim => {
          console.log("complete ground");
        }
      });
    }
  },
  watch: {
    groundElevationGround(newVal, oldVal) {
      this.handleMovementY(newVal);
    }
  },
  computed:{
    seaOffset(){
      var returnVal = 0;
      this.containerOffsets.forEach((cont)=>{
        if(cont.container =='grass'){
          returnVal += Number(cont.width)
        }
      })
      return returnVal
    }
  }
};
</script>

<style>
.backgroundContainer {
  position: fixed;
  bottom: 0;
  left: 0;
}

.area-container{
      position: absolute;
    top: 0;
    left: 0;
}

.ground-container {
  position: fixed;
  bottom: 0;
  left: 0;
}

.sky-container {
  position: fixed;
  top: 0;
  left: 0;
}

.sky-item {
  position: absolute;
  top: 0;
  left: 0;
}

.objects-container {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>