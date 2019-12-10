<template>
  <div>
    <div v-for="n in 11" :key="n + 'ballons'">
      <svg-icon class="balloon" :name="'objects/Balloons' + n" />
      <svg-icon class="balloon" :name="'objects/Balloons' + n" />
      <svg-icon class="balloon" :name="'objects/Balloons' + n" />
      <svg-icon class="balloon" :name="'objects/Balloons' + n" />
      <svg-icon class="balloon" :name="'objects/Balloons' + n" />
      <svg-icon class="balloon" :name="'objects/Balloons' + n" />
      <svg-icon class="balloon" :name="'objects/Balloons' + n" />
    </div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "Balloons",
  props: ["cheering"],
  data() {
    return {
      lifting: false
    };
  },
  mounted() {
    setTimeout(() => {
      //console.log(document.querySelectorAll(".balloon"));
      anime({
        targets: document.querySelectorAll(".balloon"),
        translateX: function() {
          return anime.random(-160, document.body.clientWidth - 130);
        },
        duration: 100
      });
    }, 500);
  },
  methods: {
    liftBalloons() {
      if (!this.lifting) {
        this.lifting = true;
        let height = window.innerHeight + 300;
        anime({
          targets: this.$el.querySelectorAll(".balloon"),
          easing: "linear",
          translateY: [0, -height],
          delay: function() {
            return anime.random(0, 3900);
          },
          duration: function() {
            return anime.random(3500, 4500);
          },
          begin: function(anim) {
            //console.log("beggin loop");
          },
          complete: anim => {
            this.lifting = false;
            // alert(this.lifting);
          }
        });
      }
    }
  },
  watch: {
    cheering(newVal) {
      if (newVal) {
        setTimeout(() => {
          //console.log("watching cheering", newVal);
          this.liftBalloons();
        }, 450);
      }
    }
  }
};
</script>

<style>
.balloon {
  position: absolute;
}
</style>
