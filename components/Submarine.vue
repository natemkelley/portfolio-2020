<template>
  <div>
    <div ref="arms" :style="{ transform: 'rotate(-65deg)' }">
      <svg-icon
        class="subarms arm1"
        name="objects/World_Sea_Arm1"
        height="128"
        width="65"
        ref="arm1"
      />
      <div
        class="arm2"
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
          class="subarms arm2"
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
            class="subarms arm3"
            name="objects/World_Sea_Arm3"
            height="118"
            width="55"
          />
        </div>
      </div>
    </div>
    <div class="subsign">
      <!--<svg-icon
        class="item sign"
        name="objects/World_Sea_SubSign"
        :style="{ marginLeft: '160px', marginBottom: '-364px' }"
        height="293"
        width="422"
        ref="subsign"
      />-->
      <img
        ref="subsign"
        :style="{ marginLeft: '160px', marginBottom: '-364px' }"
        class="item sign"
        src="@/assets/World_Sea_SubSign.png"
      />
    </div>
    <svg-icon
      class="item subitself"
      name="objects/World_Sea_Submarine"
      height="297"
      width="391"
      ref="sub"
      :style="{ marginLeft: '-158px', marginBottom: '-56px' }"
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
        delay: 660,
        loop: true,
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
          marginLeft: "5.5px",
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
          marginTop: "-80px"
        },
        1850
      );
      tl.add(
        {
          targets: this.$refs.subsign,
          marginBottom: "-330px",
          rotate: "10deg"
        },
        1850
      );
      tl.play();
    },
    liftSign() {
      anime({
        targets: this.$refs.arms,
        marginTop: "-80px"
      });
      anime({
        targets: this.$refs.subsign,
        marginBottom: "-680px",
        rotate: "10deg"
      });
    }
  }
};
</script>

<style scoped>
.subarms {
  position: absolute;
}
.arm1 {
  position: absolute;
  z-index: 996;
}

.arm2 {
  position: absolute;
  z-index: 997;
}

.sign {
  position: absolute;
  z-index: 998;
}
.arm3 {
  position: absolute;
  z-index: 999;
}

.subitself {
  position: absolute;
}
</style>
