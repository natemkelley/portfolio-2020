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
        name="objects/World_Space_Mountain0"
        height="1833"
        width="2724"
        class="mountain0"
      />
    </div>
    <div class="nature-container" ref="nature">
      <svg-icon
        v-for="(object, n) in nature"
        class="item"
        :name="'objects/' + object.name"
        :width="object.width"
        :height="object.height"
        :key="object.name + '_spacexx' + '_' + n"
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
        :key="object.name + '_spacey' + '_' + n"
        :style="{
          marginLeft: object.posX + 'px',
          marginBottom: object.posY + 'px'
        }"
      />
    </div>
    <div class="interactive-container" ref="interactive"></div>
    <div class="ground-container" ref="groundContainer">
      <svg-icon
        class="panels"
        name="objects/World_Space_Panels"
        width="2353"
        height="600"
      />
      <svg-icon
        class="spacetop"
        name="objects/World_Space_CaveTopTest"
        width="4615"
        height="1495"
      />
      <svg-icon
        name="objects/World_Space_TowerWithSign"
        height="833"
        width="724"
        class="tower"
      />
      <Ground class="yikes" ref="ground" />
    </div>
  </div>
</template>

<script>
import Ground from "~/assets/inlinesvg/World_Space_Ground.svg?inline";
import Space_Objects from "~/components/backgrounds/space_objects.js";
import Space_Nature from "~/components/backgrounds/space_nature.js";
import Panels from "~/components/Panels";

export default {
  name: "Sea",
  props: [
    "initialGroundElevationGround",
    "containerOffset",
    "groundSpeed",
    "objectSpeed",
    "natureSpeed",
    "offsetLeft"
  ],
  components: { Ground, Panels },
  data() {
    return {
      objects: Space_Objects,
      nature: Space_Nature
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
        width: totalWidth - 50,
        container: "space"
      });
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
      this.$refs.objects.style.transform = "translateX(" + pixels + "px)";
      this.$refs.interactive.style.transform = "translateX(" + pixels + "px)";
    },
    natureSpeed(pixels) {
      this.$refs.nature.style.transform = "translateX(" + pixels + "px)";
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
  margin-left: 1902px;
  margin-bottom: 824px;
}

.spacebackground {
  background: #001e36;
  height: 3000px;
  width: 4000px;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 1700px;
  margin-bottom: 1500px;
}

.tower{
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 3000px;
    margin-bottom: 650px;
    z-index: -1;
}
</style>
