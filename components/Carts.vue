<template>
  <div>
    <svg-icon
      class="track"
      name="objects/World_Cave_Tracks"
      width="2359"
      height="50"
    />
    <svg-icon
      @click="openModal('Test')"
      class="clickable cart cart1"
      name="objects/World_Cave_Scouting"
      width="363"
      height="295"
    />
    <svg-icon
      @click="openModal('Test')"
      class="clickable cart cart2"
      name="objects/World_Cave_SBO"
      width="312"
      height="264"
    />
    <svg-icon
      @click="openModal('Test')"
      class="clickable cart cart3"
      name="objects/World_Cave_Italia"
      width="360"
      height="304"
    />
  </div>
</template>

<script>
export default {
  name: "Carts",
  methods: {
    openModal(comp) {
      this.$emit("openModal", comp);
    }
  }
};
</script>

<style scoped>
.track {
  margin-bottom: -6px;
}

.cart {
  position: absolute;
  bottom: 0;
  margin-bottom: 5px;
  margin-left: -2000px;
  transform:scale(1.05)
}

.cart2 {
  margin-left: -1300px;
  margin-bottom: 17px;
}
.cart3 {
  margin-left: -600px;
  margin-bottom: 0px;
}
</style>
