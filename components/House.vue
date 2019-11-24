<template>
  <div>
    <svg-icon name="objects/World_Beach_BeachHouse" height="760" width="576" />
    <svg-icon
      class="board"
      name="objects/World_Beach_Surfboard"
      height="297"
      width="142"
    />
  </div>
</template>

<script>
export default {
  name: "House"
};
</script>

<style scoped>
.board {
  position: absolute;
  bottom: 0;
  margin-left: -599px;
  margin-bottom: 87px;
}
</style>
