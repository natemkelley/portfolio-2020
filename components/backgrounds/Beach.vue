<template>
  <div
    class="area-container"
    ref="area"
    :style="`transform:translateX(${this.containerOffset}px)`"
  >
    <div class="ground-container" ref="beachContainer"></div>
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
        class="item"
        :name="'objects/' + object.name"
        :width="object.width"
        :height="object.height"
        :key="object.name + '_beach' + '_' + n"
        :style="{
          marginLeft: object.posX + 'px',
          marginBottom: object.posY + 'px'
        }"
      />
    </div>
    <div class="interactive-container" ref="interactive">
      <div @click="openModal('Test')">
        <Lighthouse
          class="item clickable"
          :style="{ marginLeft: '-1099px', marginBottom: '-55px' }"
        />
      </div>
      <div class="item clickable" @click="openModal('Test')">
        <Scoreboard
          class="item clickable"
          :style="{ marginLeft: '-166px', marginBottom: '-97px' }"
          :introScoreboard="introScoreboard"
        />
      </div>
      <div class="item clickable" @click="openModal('Test')">
        <House
          class="item clickable"
          :style="{ marginLeft: '735px', marginBottom: '-141px' }"
        />
      </div>
    </div>
    <div class="ground-container click-through" ref="groundContainer">
      <img src="@/assets/inlinesvg/World_Beach_Ground.png" ref="ground" />
    </div>
  </div>
</template>

<script>
//import Ground from "~/assets/inlinesvg/World_Beach_Ground.png";
import Sea_Objects from "~/components/backgrounds/beach_objects.js";
import Sea_Nature from "~/components/backgrounds/beach_nature.js";
import Sea_Sky from "~/components/backgrounds/beach_sky.js";
import Lighthouse from "~/components/Lighthouse.vue";
import Scoreboard from "~/components/Scoreboard.vue";
import House from "~/components/House.vue";

export default {
  name: "Beach",
  props: [
    "initialGroundElevationGround",
    "containerOffset",
    "groundSpeed",
    "objectSpeed",
    "natureSpeed",
    "skySpeed",
    "offsetLeft"
  ],
  components: { Lighthouse, Scoreboard, House },
  data() {
    return {
      objects: Sea_Objects,
      sky: Sea_Sky,
      nature: Sea_Nature,
      introScoreboard: false
    };
  },
  mounted() {
    this.initLayers();
  },
  methods: {
    initLayers() {
      this.$refs.beachContainer.style.marginBottom =
        this.initialGroundElevationGround + "px";
      this.$refs.groundContainer.style.marginBottom =
        this.initialGroundElevationGround + "px";

      var src = this.$refs.ground.src;
      var img = new Image();
      img.onload = () => {
        var height = img.height;
        var width = img.width;
        console.log("xxxx", height, width);
        this.$emit("informheight", { width: width, container: "beach" });
      };
      img.src = src;
    },
    openModal(component) {
      this.$emit("toggleModal", component);
    }
  },
  watch: {
    groundSpeed(pixels) {
      this.$refs.beachContainer.style.marginLeft = `${pixels + "px"}`;
      this.$refs.groundContainer.style.marginLeft = `${pixels + "px"}`;
      console.log('pixels',pixels)
      if(Math.abs(pixels)>14200){
        this.introScoreboard = true;
      }
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

<style scoped></style>
