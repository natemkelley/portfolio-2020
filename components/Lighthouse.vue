<template>
  <div>
    <svg-icon name="objects/World_Beach_Lighthouse" height="760" width="576" />
    <img src="@/assets/World_Beach_Light.png" class="light" ref="light" />
  </div>
</template>

<script>
export default {
  name: "Lighthouse"
};
</script>

<style scoped>
.light {
  margin-left: -523px;
  margin-top: 22px;
  position: absolute;
  z-index: 9999;
}
</style>
