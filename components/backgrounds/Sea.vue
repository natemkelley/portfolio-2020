<template>
  <div
    class="area-container"
    ref="area"
    :style="`transform:translateX(${this.containerOffset}px)`"
  >
    <div class="ground-container" ref="seaContainer">
      <OceanScape />
    </div>
    <div class="sky-container" ref="sky">
      <svg-icon
        v-for="(object, n) in sky"
        class="item"
        :name="'objects/' + object.name"
        :width="object.width"
        :height="object.height"
        :key="object.name + '_sky' + '_' + n"
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
        :key="object.name + '_sea' + '_' + n"
        :style="{
          marginLeft: object.posX + 'px',
          marginBottom: object.posY + 'px'
        }"
      />
    </div>
    <div class="interactive-container" ref="interactive">
      <svg-icon
        class="item float bottle hidden clickable"
        name="objects/World_Sea_CokeBottle"
        :style="{ marginLeft: '-18px', marginBottom: '-709px' }"
        height="570"
        width="266"
        ref="bottle"
        @click="openModal('CocaCola')"
      />
      <div class="submarine clickable" @click="openModal('Test')">
        <Submarine :introSub="introSub" />
      </div>
    </div>
    <div class="ground-container click-through" ref="groundContainer">
      <Ground ref="ground" />
    </div>
  </div>
</template>

<script>
import Ground from "~/assets/inlinesvg/World_Sea_Ground.svg?inline";
import OceanScape from "~/assets/inlinesvg/World_Sea_Sea.svg?inline";
import Sea_Objects from "~/components/backgrounds/sea_objects.js";
import Sea_Nature from "~/components/backgrounds/sea_nature.js";
import Sea_Sky from "~/components/backgrounds/sea_sky.js";
import Submarine from "~/components/Submarine.vue";
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
  components: { Ground, OceanScape, Submarine },
  data() {
    return {
      objects: Sea_Objects,
      sky: Sea_Sky,
      nature: Sea_Nature,
      introSub: false
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

      this.$emit("informheight", { width: totalWidth, container: "sea" });
    },
    introduceBottle() {
      this.$refs.bottle.classList.remove("hidden");
    },
    openModal(component) {
      this.$emit("toggleModal", component);
    }
  },
  watch: {
    groundSpeed(pixels) {
      this.$refs.seaContainer.style.marginLeft = `${pixels + "px"}`;
      this.$refs.groundContainer.style.marginLeft = `${pixels + "px"}`;
      if (Math.abs(pixels) > 6741) this.introduceBottle();
      if (Math.abs(pixels) > 8810) this.introSub = true;
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
.bottle {
  transition: all 895ms ease-out;
}

.bottle.hidden {
  margin-bottom: -1100px !important;
}

.submarine {
  margin-left: 1711px;
  position: fixed;
  bottom: 0;
  left: 0;
  margin-bottom: -350px;
}
</style>
