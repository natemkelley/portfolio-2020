<template>
  <div
    class="area-container"
    ref="area"
    :style="`transform:translateX(${this.containerOffset}px)`"
  >
    <div class="ground-container" ref="seaContainer">
        <div class="cavescape" />
    </div>
    <div class="sky-container" ref="sky">
      <svg-icon
        v-for="(object, n) in sky"
        class="item"
        :name="'objects/' + object.name"
        :width="object.width"
        :height="object.height"
        :key="object.name + '_cavex' + '_' + n"
        :style="{
          marginLeft: object.posX + 'px',
          marginBottom: object.posY + 'px'
        }"
      />
    </div>
    <div class="nature-container" ref="nature"></div>
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

    </div>
    <div class="ground-container click-through" ref="groundContainer">
        <svg-icon class="top" name="objects/World_Cave_EntraceTop" width="849" height="1458"/>
      <Ground class="yikes" ref="ground" />
    </div>
  </div>
</template>

<script>
import Ground from "~/assets/inlinesvg/World_Cave_Ground.svg?inline";
import CaveScape from "~/assets/inlinesvg/World_Sea_Sea.svg?inline";
import Cave_Objects from "~/components/backgrounds/sea_objects.js";
import Cave_Nature from "~/components/backgrounds/sea_nature.js";
import Cave_Sky from "~/components/backgrounds/sea_sky.js";

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
  components: { Ground, CaveScape },
  data() {
    return {
      objects: Cave_Objects,
      sky: Cave_Sky,
      nature: Cave_Nature,
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
    },
    skySpeed(pixels) {
      this.$refs.sky.style.transform = "translateX(" + pixels + "px)";
    }
  }
};
</script>

<style scoped>
.yikes{
    margin-left: -5px;
}
.cavescape{
    background: #4e4e51;
    position: absolute;
    bottom: 0;
    width: 1000px;
    height: 2400px;
}
.top{
    position: absolute;
    bottom: 0;
    margin-bottom: 590px;
    margin-left: -324px;
}
</style>
