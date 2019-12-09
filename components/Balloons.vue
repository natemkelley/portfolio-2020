<template>
  <div>
    <div v-for="n in 11" :key="n + 'ballons'" class="balloon">
      <svg-icon :name="'objects/Balloons' + n" />
    </div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "Balloons",
  props: ["cheering"],
  mounted() {
    anime({
      targets: this.$el.querySelectorAll(".balloon"),
      translateX: function() {
        return anime.random(-50, document.body.clientWidth + 50);
      },
    translateY: function() {
        return anime.random(-50, 150);
      },
      duration: 1
    });
  },
  watch: {
    cheering(newVal) {
      anime({
        targets: this.$el.querySelectorAll(".balloon"),
        translateY: 1200,
        duration: function() {
          return anime.random(2500, 3000);
        }
      });
    }
  }
};
</script>

<style scoped>
.balloon {
  position: absolute;
}
</style>
