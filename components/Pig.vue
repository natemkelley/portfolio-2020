<template>
  <div>
    <svg-icon
      :style="{ marginBottom: 168, marginLeft: 813 }"
      class="sceneobj"
      name="objects/World_Beach_Mask1"
      width="128"
      height="370"
    />
    <svg-icon
      :style="{ marginBottom: 158, marginLeft: 278 }"
      class="sceneobj"
      name="objects/World_Beach_Mask2"
      width="183"
      height="369"
    />
    <svg-icon
      :style="{ marginBottom: 157, marginLeft: 1426 }"
      class="sceneobj"
      name="objects/World_Beach_Tiki"
      width="170"
      height="280"
    />
    <svg-icon
      :style="{
        marginBottom: 167,
        marginLeft: 1178,
        transform: 'rotate(3deg)'
      }"
      class="sceneobj"
      name="objects/World_Beach_Github"
      width="230"
      height="441"
    />
    <svg-icon
      :style="{ marginBottom: 167, marginLeft: 898 }"
      class="sceneobj"
      name="objects/World_Beach_Pig"
      width="409"
      height="303"
    />
    <svg-icon
      :style="{ marginBottom: 91, marginLeft: 1291 }"
      class="sceneobj"
      name="objects/World_Beach_GithubSign"
      width="185"
      height="324"
    />
    <svg-icon
      class="base"
      name="objects/World_Beach_Tipi"
      width="1900"
      height="630"
    />
    <div class="fire">
      <Fire />
      <svg-icon name="objects/World_Beach_Wood" class="wood" width="200" height="100" />
    </div>
  </div>
</template>

<script>
import Fire from "@/components/Fire.vue";

export default {
  name: "Pig",
  components: { Fire }
};
</script>

<style scoped>
.base {
  position: absolute;
  bottom: 0;
}
.fire {
  position: absolute;
  bottom: 0;
  margin-bottom: 356px;
  margin-left: 965px;
}

.sceneobj {
  position: absolute;
  bottom: 0;
  margin-bottom: 50px;
}

.wood{
position: absolute;
    margin-bottom: -200px;
    margin-left: 36px;
    bottom: 0;
}
</style>
