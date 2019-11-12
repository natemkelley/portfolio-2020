<template>
  <div>
    <div ref="arms" :style="{ transform: 'rotate(-65deg)' }">
      <svg-icon
        class="subarms"
        name="objects/World_Sea_Arm1"
        height="128"
        width="65"
        ref="arm1"
      />
      <div
        class="arms2"
        ref="arm2"
        :style="{
          marginLeft: '35px',
          marginTop: '148px',
          transform: 'rotate(-125deg)',
          transformOrigin: 'top left',
          position: 'absolute'
        }"
      >
        <svg-icon
          class="subarms"
          name="objects/World_Sea_Arm2"
          height="100"
          width="174"
        />
        <div
          class="arm3"
          ref="arm3"
          :style="{
            marginTop: '30px',
            marginLeft: '107px',
            transform: 'rotate(5deg)'
          }"
        >
          <svg-icon
            class="subarms"
            name="objects/World_Sea_Arm3"
            height="118"
            width="55"
          />
        </div>
      </div>
    </div>

    <svg-icon
      class="item"
      name="objects/World_Sea_Submarine"
      :style="{ marginLeft: '1568px', marginBottom: '-389px' }"
      height="237"
      width="341"
      ref="sub"
    />
    <svg-icon
      class="item"
      name="objects/World_Sea_SubSign"
      :style="{ marginLeft: '1885px', marginBottom: '-710px' }"
      height="293"
      width="422"
      ref="sub"
    />
  </div>
</template>

<script>
import anime from "animejs";

export default {
  props: ["introSub"],
  watch: {
    introSub(val) {
      if (val) this.introduceSub();
    }
  },
  methods: {
    introduceSub() {
      var tl = anime.timeline({
        easing: "easeOutExpo",
        duration: 1650,
        loop: false,
        direction: "alternate"
      });
      tl.add({
        targets: this.$refs.arms,
        rotate: "0deg"
      });
      tl.add(
        {
          targets: this.$refs.arm2,
          rotate: "-12deg",
          marginLeft: "8px",
          marginTop: "105px"
        },
        230
      );
      tl.add(
        {
          targets: this.$refs.arm3,
          rotate: "-5deg"
        },
        1200
      );
        tl.add(
        {
          targets: this.$refs.arms,
          marginTop: "-45px"
        },
        1800
      );

      tl.play();
    }
  }
};
</script>

<style scoped>
.subarms {
  position: absolute;
}
</style>
