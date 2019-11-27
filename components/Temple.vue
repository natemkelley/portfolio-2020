<template>
  <div>
    <div class="temple">
      <svg-icon
        class="top"
        name="objects/World_Beach_TempleTop"
        width="1259"
        height="930"
      />
      <svg-icon
        class="god"
        ref="god"
        name="objects/World_Beach_God"
        width="105"
        height="145"
      />
      <svg-icon
        class="base"
        name="objects/World_Beach_TempleBase"
        width="1241"
        height="205"
      />
            <svg-icon
        class="palm"
        name="objects/World_Beach_Palm1"
        width="550"
        height="550"
      />
    </div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  name: "Temple",
  props: ["introGod"],
  watch:{
    introGod(){
      alert('here')
      anime({
        targets: this.$refs.god,
        marginBottom: 294,
        easing: "easeInOutQuad",
        loop: true,
        duration: 4000,
        direction: "alternate"
      });
    }
  }
};
</script>

<style scoped>
.temple {
  transform: scale(0.67);
  margin-bottom: 23px;
}

.palm {
  position: absolute;
  bottom: 0;
    margin-bottom: 140px;
    margin-left: -77px;
}

.top {
  position: absolute;
  bottom: 0;
  margin-bottom: 130px;
}
.base{
    position: absolute;
    bottom: 0;
    margin-bottom: 128px;
}
.god{
      position: absolute;
    bottom: 0;
    margin-bottom: 0px;
    margin-left: 566px;
}
</style>
