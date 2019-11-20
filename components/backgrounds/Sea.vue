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
      <div class="submarine clickable float" @click="openModal('Test')">
        <Submarine :introSub="introSub" />
      </div>
      <div class="octopus clickable" @click="openModal('Test')">
        <Octopus :introOcto="introOcto" />
      </div>
      <div class="shipwreck clickable" @click="openModal('Test')">
        <ShipWreck :introShip="introShip" />
      </div>
    </div>
    <div class="ground-container click-through" ref="groundContainer">
      <svg-icon
        class="item dune"
        :name="'objects/World_Beach_Dune'"
        width="889"
        height="1016"
      />
      <svg-icon
        class="item boardwalk"
        :name="'objects/World_Beach_Boardwalk'"
        width="889"
        height="1016"
      />
      <Ground ref="ground" />
      <svg-icon
        class="item platform"
        name="objects/World_Sea_Platform"
        width="820px"
        height="333px"
      />
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
import Octopus from "~/components/Octopus.vue";
import ShipWreck from "~/components/Shipwreck.vue";

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
  components: { Ground, OceanScape, Submarine, Octopus, ShipWreck },
  data() {
    return {
      objects: Sea_Objects,
      sky: Sea_Sky,
      nature: Sea_Nature,
      introSub: false,
      introShip: false,
      introOcto: false
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
      if (Math.abs(pixels) > 6701) this.introduceBottle();
      if (Math.abs(pixels) > 8455) this.introSub = true;
      if (Math.abs(pixels) > 9755) this.introOcto = true;
      if (Math.abs(pixels) > 11055) this.introShip = true;
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
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: -350px;
}

.octopus {
  margin-left: 3001px;
  position: absolute;
  bottom: 0;
  margin-bottom: -680px;
}

.shipwreck {
  margin-left: 4121px;
  position: absolute;
  bottom: 0;
  margin-bottom: -680px;
}

.platform {
  position: absolute;
  margin-bottom: 138px;
  margin-left: 6104px;
}

.dune {
  position: absolute;
  margin-bottom: -79px;
  margin-left: 6213px;
}

.boardwalk {
  position: absolute;
  margin-bottom: 20px;
  margin-left: 6253px;
}
</style>
