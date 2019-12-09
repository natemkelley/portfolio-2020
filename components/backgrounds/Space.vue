<template>
  <div
    class="area-container"
    ref="area"
    :style="`transform:translateX(${this.containerOffset}px)`"
  >
    <div class="ground-container click-through" ref="seaContainer">
      <div class="spacebackground click-through" />
      <div class="cavescape click-through" />
      <div class="cavescapetop click-through" />
      <svg-icon
        name="objects/Stars"
        class="stars"
        ref="stars"
        height="5337"
        width="5613"
      />
      <svg-icon
        name="objects/World_Space_Moon"
        class="moon"
        ref="moon"
        height="600"
        width="600"
      />
      <svg-icon
        name="objects/World_Space_Mountain1"
        height="1137"
        width="1772"
        class="mountain1"
      />
      <svg-icon
        name="objects/World_Space_Mountain2"
        height="2638"
        width="1628"
        class="mountain2"
      />
      <svg-icon
        name="objects/World_Space_Mountain0"
        height="1833"
        width="2724"
        class="mountain0"
      />
    </div>
    <div class="objects-container" ref="objects">
      <svg-icon
        v-for="(object, n) in objects"
        class="item"
        :name="'objects/' + object.name"
        :width="object.width"
        :height="object.height"
        :key="object.name + '_spacey' + '_' + n"
        :style="{
          marginLeft: object.posX + 'px',
          marginBottom: object.posY + 'px'
        }"
      />
    </div>
    <div class="interactive-container" ref="interactive"></div>
    <div class="ground-container" ref="groundContainer">
      <Panels class="panels" />
      <svg-icon
        class="spacetop"
        name="objects/World_Space_CaveTopTest"
        width="4615"
        height="1495"
      />
      <svg-icon
        class="cavetopend"
        name="objects/World_Space_CaveTopEnd"
        width="6300"
        height="6300"
      />
      <img class="tower" src="@/assets/World_Space_TowerTiny.png" />
      <svg-icon
        v-show="!outerspace"
        class="rocket"
        name="nate/rocket_nofire_nonate_left"
        width="485"
        height="584"
      />
      <Ground class="yikes" ref="ground" />
    </div>
    <Balloons class="balloons" :cheering="cheering" />
  </div>
</template>

<script>
import Ground from "~/assets/inlinesvg/World_Space_Ground.svg?inline";
import Space_Objects from "~/components/backgrounds/space_objects.js";
import Panels from "~/components/Panels";
import Balloons from "~/components/Balloons";
import anime from "animejs";

export default {
  name: "Sea",
  props: [
    "initialGroundElevationGround",
    "containerOffset",
    "groundSpeed",
    "objectSpeed",
    "natureSpeed",
    "offsetLeft",
    "outerspace",
    "cheering"
  ],
  components: { Ground, Panels, Balloons },
  data() {
    return {
      objects: Space_Objects,
      pixelDiff: 0,
      objDiff: 0,
      marginBottomDiff: -790,
      stop: false
    };
  },
  mounted() {
    this.initLayers();
  },
  methods: {
    initLayers() {
      this.$refs.seaContainer.style.marginBottom =
        this.initialGroundElevationGround + "px";
      this.$refs.groundContainer.style.marginBottom =
        this.initialGroundElevationGround + "px";
      let totalWidth = this.$refs.ground
        .getAttribute("viewBox")
        .split(/\s+|,/)[2];

      this.$emit("informheight", {
        width: totalWidth - 1200, //1745
        container: "space"
      });
    },
    openModal(component) {
      this.$emit("toggleModal", component);
    }
  },
  watch: {
    groundSpeed(pixels) {
      if (!this.outerspace) {
        this.$refs.seaContainer.style.marginLeft = `${pixels + "px"}`;
        this.$refs.groundContainer.style.marginLeft = `${pixels + "px"}`;
        this.pixelDiff = pixels;
        this.$refs.groundContainer.style.marginBottom = `${this
          .marginBottomDiff + "px"}`;
      } else {
        if (!this.cheering) {
          let vertical =
            -(this.pixelDiff - pixels) / 0.3 + this.marginBottomDiff;
          this.$refs.groundContainer.style.marginBottom = `${vertical + "px"}`;
          this.$refs.groundContainer.style.marginLeft = `${pixels + "px"}`;
          this.$refs.seaContainer.style.marginBottom = `${vertical + "px"}`;
          this.$refs.seaContainer.style.marginLeft = `${pixels + "px"}`;
        }
      }
    },
    objectSpeed(pixels) {
      if (!this.outerspace) {
        this.$refs.objects.style.transform = "translateX(" + pixels + "px)";
        this.objDiff = pixels;
      } else {
        if (!this.cheering) {
          let vertical = -(this.objDiff - pixels);
          //console.log('pixels',pixels,'objDiff',this.objDiff,'vert',vertical );
          this.$refs.objects.style.marginBottom = `${vertical * 3.15 + "px"}`;
          this.$refs.objects.style.marginLeft = `${vertical * 1.25 + "px"}`;
        }
      }
    },
    cheering(newVal) {
      //console.log('cheering',newVal)
    }
  }
};
</script>

<style scoped>
.yikes {
  margin-left: -15px; /*10*/
}
.cavescapetop {
  background: #3d3d3f;
  position: absolute;
  bottom: 0;
  width: 2446px;
  height: 250px;
  margin-bottom: 1385px;
  z-index: 1;
}
.cavescape {
  background: #4e4e51;
  position: absolute;
  bottom: 0;
  width: 1800px;
  height: 1400px;
  z-index: -2;
  margin-left: 338px;
}
.spacetop {
  position: absolute;
  bottom: 0;
  margin-bottom: -23px;
  margin-left: 338px;
}

.panels {
  position: absolute;
  bottom: 0;
  z-index: -1;
  margin-bottom: 825px;
  margin-left: 308px;
}

.mountain0 {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 2039px;
  margin-bottom: 724px;
}
.mountain1 {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 3650px;
  margin-bottom: 1280px;
}
.mountain2 {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 1930px;
  margin-bottom: 634px;
}

.spacebackground {
  background: #1e1e36;
  height: 9000px;
  width: 5000px;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 1700px;
  margin-bottom: 1500px;
}

.tower {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 2699px;
  margin-bottom: 858px;
  z-index: -1;
  width: 724px;
}

.cavetopend {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 200px;
  margin-bottom: 200px;
}
.moon {
  position: absolute;
  margin-left: 3140px;
  margin-bottom: 2000px;
  bottom: 0;
  left: 0;
}
.stars {
  position: absolute;
  margin-left: 1700px;
  margin-bottom: 2370px;
  bottom: 0;
  left: 0;
}
.rocket {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 2934px;
  margin-bottom: 726px;
  z-index: -1;
}

.balloons{
    position: fixed;
    /* top: 0; */
    right: 0;
    margin-top: -500px;
    /* margin-bottom: -110000px; */
    margin-right: 25272px;
}
</style>
