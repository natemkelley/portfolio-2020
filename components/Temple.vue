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
import anime from "animejs";

export default {
  name: "Temple",
  props: ["introGod"],
  watch: {
    introGod() {
      var tl = anime.timeline({
        easing: "easeOutExpo",
        loop: true,
        direction: "alternate"
      });

      tl.add({
        targets: this.$refs.god,
        marginBottom: 294,
        easing: "easeInOutQuad",
        duration: 2200
      });
      for (let index = 0; index < 4; index++) {
        let rotate = index % 2 ? "10deg" : "-10deg";
        tl.add({
          targets: this.$refs.god,
          easing: "easeInOutQuad",
          rotate: rotate,
          duration: 220
        });
      }
      tl.add({
        targets: this.$refs.god,
                rotate: '0deg',
        marginBottom: 140,
        easing: "easeInOutQuad",
        duration: 1000
      });
            tl.add({
        targets: this.$refs.god,
        marginBottom: 255,
        easing: "easeInOutQuad",
        duration: 3500
      });
      tl.add({
        targets: this.$refs.god,
        marginBottom: 295,
        rotate: '0deg',
        easing: "easeInOutQuad",
        duration: 800
      });
            tl.add({
        targets: this.$refs.god,
        marginBottom: 295,
        rotate: '-1deg',
        easing: "easeInOutQuad",
        duration: 2100
      });
    }
  }
};
</script>

<style scoped>
.temple {
  transform: scale(0.685);
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
.base {
  position: absolute;
  bottom: 0;
  margin-bottom: 128px;
}
.god {
  position: absolute;
  bottom: 0;
  margin-bottom: 0px;
  margin-left: 566px;
}
</style>
