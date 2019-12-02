<template>
  <div
    class="area-container"
    ref="area"
    :style="`transform:translateX(${this.containerOffset}px)`"
  >
    <div class="ground-container" ref="seaContainer">
      <div class="cavescape" />
      <div class="cavescapetop" />
      <Lights class="lights" />
    </div>
    <div class="nature-container" ref="nature">
      <svg-icon
        v-for="(object, n) in nature"
        class="item"
        :name="'objects/' + object.name"
        :width="object.width"
        :height="object.height"
        :key="object.name + '_cavexx' + '_' + n"
        :style="{
          marginLeft: object.posX + 'px',
          marginBottom: object.posY + 'px'
        }"
      />
    </div>
    <div class="objects-container" ref="objects">
      <svg-icon
        v-for="(object, n) in objects"
        class="item float floatX"
        :name="'objects/' + object.name"
        :width="object.width"
        :height="object.height"
        :key="object.name + '_cavey' + '_' + n"
        :style="{
          marginLeft: object.posX + 'px',
          marginBottom: object.posY + 'px'
        }"
      />
    </div>
    <div class="interactive-container" ref="interactive">
        <Carts class="carts" />
    </div>
    <div class="ground-container click-through" ref="groundContainer">
      <svg-icon
        class="enttop"
        name="objects/World_Cave_EntraceTop"
        width="849"
        height="1458"
      />
      <svg-icon
        class="top"
        name="objects/World_Cave_CaveTop"
        width="6733"
        height="559"
      />
      <svg-icon
        class="bush"
        name="objects/World_Cave_Bush1"
        width="300"
        height="200"
      />
      <svg-icon
        class="palm"
        name="objects/World_Beach_Palm1"
        width="500"
        height="450"
      />
      <Ground class="yikes" ref="ground" />
    </div>
  </div>
</template>

<script>
import Ground from "~/assets/inlinesvg/World_Cave_Ground.svg?inline";
import Cave_Objects from "~/components/backgrounds/sea_objects.js";
import Cave_Nature from "~/components/backgrounds/cave_nature.js";
import Lights from "~/components/Lights.vue";
import Carts from "~/components/Carts.vue";

export default {
  name: "Sea",
  props: [
    "initialGroundElevationGround",
    "containerOffset",
    "groundSpeed",
    "objectSpeed",
    "natureSpeed",
    "skySpeed",
    "offsetLeft"
  ],
  components: { Ground, Lights,Carts },
  data() {
    return {
      objects: Cave_Objects,
      nature: Cave_Nature
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

      this.$emit("informheight", { width: totalWidth, container: "cave" });
    },
    openModal(component) {
      this.$emit("toggleModal", component);
    }
  },
  watch: {
    groundSpeed(pixels) {
      this.$refs.seaContainer.style.marginLeft = `${pixels + "px"}`;
      this.$refs.groundContainer.style.marginLeft = `${pixels + "px"}`;
    },
    objectSpeed(pixels) {
      if (pixels) {
        this.$refs.objects.style.transform = "translateX(" + pixels + "px)";
        this.$refs.interactive.style.transform = "translateX(" + pixels + "px)";
      }
    },
    natureSpeed(pixels) {
      this.$refs.nature.style.transform = "translateX(" + pixels + "px)";
    }
  }
};
</script>

<style scoped>
.yikes {
  margin-left: -5px;
}
.cavescape {
  background: #4e4e51;
  position: absolute;
  bottom: 0;
  width: 4800px;
  height: 2400px;
}
.cavescapetop {
  background: #3d3d3f;
  position: absolute;
  bottom: 0;
  width: 4800px;
  height: 250px;
  margin-bottom: 1385px;
}

.enttop {
  position: absolute;
  bottom: 0;
  margin-bottom: 633px;
  margin-left: -324px;
}

.top {
  position: absolute;
  bottom: 0;
  margin-bottom: 830px;
  margin-left: 374px;
}

.bush {
  position: absolute;
  bottom: 0;
  margin-bottom: 891px;
  z-index: -1;
  margin-left: -94px;
}
.palm {
  position: absolute;
  bottom: 0;
  margin-bottom: 800px;
  z-index: -1;
  margin-left: -227px;
  transform: scaleX(-1);
}

.lights {
  position: absolute;
  bottom: 0;
  margin-bottom: 1050px;
  margin-left: 500px;
}
.carts {
    position: absolute;
    bottom: 0;
    margin-bottom: 250px;
    margin-left: -1000px;
}
</style>
