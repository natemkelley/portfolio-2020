<template>
  <div>
    <div>
      <div class="smoke">
        <span class="s0"></span>
        <span class="s1"></span>
        <span class="s2"></span>
        <span class="s3"></span>
        <span class="s4"></span>
        <span class="s5"></span>
        <span class="s6"></span>
        <span class="s7"></span>
        <span class="s8"></span>
        <span class="s9"></span>
        <span class="s10"></span>
        <span class="s11"></span>
        <span class="s12"></span>
        <span class="s13"></span>
        <span class="s14"></span>
        <span class="s15"></span>
        <span class="s16"></span>
        <span class="s17"></span>
        <span class="s18"></span>
        <span class="s19"></span>
      </div>
    </div>
    <svg-icon name="objects/World_Grass_House" height="441" width="602" />
  </div>
</template>

<script>
export default {
  name: "House"
};
</script>

<style scoped>
.smoke {
    position: absolute;
    bottom: 435px;
    margin-left: 243px;
    transform: scale(1.85);
    z-index: -1;
}

/* smoke balls */
.smoke span {
  display: block;
  position: absolute;
  bottom: -35px;
  left: 50%;
  margin-left: -20px;
  height: 0px;
  width: 0px;
  border: 35px solid #ffffff;
  border-radius: 35px;
  left: -14px;
  opacity: 0;
  transform: scale(0.2);
}

/* Smoke animation */
@keyframes smokeL1 {
  0% {
    transform: scale(0.2) translate(0, 0);
  }
  10% {
    opacity: 1;
    transform: scale(0.2) translate(0, -5px);
  }
  100% {
    opacity: 0;
    transform: scale(1) translate(-20px, -130px);
  }
}
@keyframes smokeR1 {
  0% {
    transform: scale(0.2) translate(0, 0);
  }
  10% {
    opacity: 1;
    transform: scale(0.2) translate(0, -5px);
  }
  100% {
    opacity: 0;
    transform: scale(1) translate(20px, -130px);
  }
}
@keyframes smokeL2 {
  0% {
    transform: scale(0.2) translate(0, 0);
  }
  10% {
    opacity: 1;
    transform: scale(0.2) translate(0, -5px);
  }
  100% {
    opacity: 0;
    transform: scale(1) translate(-40px, -100px);
  }
}
@keyframes smokeR2 {
  0% {
    transform: scale(0.2) translate(0, 0);
  }
  10% {
    opacity: 1;
    transform: scale(0.2) translate(0, -5px);
  }
  100% {
    opacity: 0;
    transform: scale(1) translate(40px, -100px);
  }
}
.smoke .s0 {
  animation: smokeL1 10s 0s infinite;
}

.smoke .s1 {
  animation: smokeR1 10s 0.5s infinite;
}

.smoke .s2 {
  animation: smokeL2 10s 1s infinite;
}

.smoke .s3 {
  animation: smokeR2 10s 1.5s infinite;
}

.smoke .s4 {
  animation: smokeL1 10s 2s infinite;
}

.smoke .s5 {
  animation: smokeR1 10s 2.5s infinite;
}

.smoke .s6 {
  animation: smokeL2 10s 3s infinite;
}

.smoke .s7 {
  animation: smokeR2 10s 3.5s infinite;
}

.smoke .s8 {
  animation: smokeL1 10s 4s infinite;
}

.smoke .s9 {
  animation: smokeR1 10s 4.5s infinite;
}

.smoke .s10 {
  animation: smokeL2 10s 5s infinite;
}

.smoke .s11 {
  animation: smokeR2 10s 5.5s infinite;
}

.smoke .s12 {
  animation: smokeL1 10s 6s infinite;
}

.smoke .s13 {
  animation: smokeR1 10s 6.5s infinite;
}

.smoke .s14 {
  animation: smokeL2 10s 7s infinite;
}

.smoke .s15 {
  animation: smokeR2 10s 7.5s infinite;
}

.smoke .s16 {
  animation: smokeL1 10s 8s infinite;
}

.smoke .s17 {
  animation: smokeR1 10s 8.5s infinite;
}

#smoke .s18 {
  animation: smokeL2 10s 9s infinite;
}

#smoke .s19 {
  animation: smokeR2 10s 9.5s infinite;
}
</style>
