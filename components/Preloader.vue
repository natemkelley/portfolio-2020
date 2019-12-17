<template>
  <div>
    <div class="preloader">
      <div v-if="problemBrowser || problemSize" class="problem">
        <div class="box">
          <div class="row">
            <div class="column"><p>Current screen size:</p></div>
            <div class="column">
              <p class="right">
                <span :class="{ problemX: colorW }">{{ width }}</span> x
                <span :class="{ problemX: colorH }">{{ height }}</span>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="column"><p>Minimum screen size:</p></div>
            <div class="column">
              <p class="right">750 x 680</p>
            </div>
          </div>
          <div class="row">
            <p class="eightypercent">
              You are currently using
              <span :class="{ problemX: colorBrowser }">{{ browser }}</span
              >. Safari and IE have been know to cause problems with this
              website.
            </p>
          </div>
        </div>
                  <svg-icon
            @click="togglePreloader"
            class="clickable anyways"
            name="objects/ContinueAnyways"
          />
      </div>
      <div v-else>
        <div class="loading-outer">
        <div v-show="!loaded" class="box">
          <h1 class="text-center">LOADING...</h1>
        </div>
        </div>
        <svg-icon
          @click="togglePreloader"
          v-show="loaded"
          class="clickable imgcenter"
          name="objects/Continue"
        />
        <div class="clouds">
          <svg-icon class="c c1" name="objects/World_Grass_Cloud" />
          <svg-icon class="c c2" name="objects/World_Grass_Cloud" />
          <svg-icon class="c c3" name="objects/World_Grass_Cloud" />
          <svg-icon class="c c4" name="objects/World_Grass_Cloud" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
const { detect } = require("detect-browser");

export default {
  name: "Preloader",
  props: ["loaded"],
  data() {
    return {
      width: null,
      height: null,
      browser: "UNKNOWN",
      version: "0.0",
      problemSize: false,
      problemBrowser: false,
      colorW: null,
      colorH: null,
      colorBrowser: null
    };
  },
  created() {
    window.addEventListener("resize", this.checkWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.checkWidth);
  },
  watch: {
    loaded() {
      this.showClouds();
      this.animateClouds();
    }
  },
  created(){    document.getElementsByTagName("body")[0].style.overflow = "hidden";
},
  mounted() {
    this.checkBrowser();
    this.checkWidth();
  },
  methods: {
    togglePreloader() {
      if (this.problemSize) {
        document
          .querySelector("meta[name=viewport]")
          .setAttribute(
            "content",
            "width=device-width, initial-scale=0.41, maximum-scale=1.0, user-scalable=0"
          );
      }

      document.getElementsByTagName("body")[0].style.overflow = "auto";

      var animation = anime.timeline({
        targets: this.$el.querySelector(".preloader"),
        duration: 1450,
        easing: "easeOutBounce"
      });
      animation.add({
        marginTop: "100vh"
      });

      animation.finished.then(() => {
        this.$emit("togglepreloader", false);
      });
    },
    showClouds() {
      anime({
        targets: ".c",
        opacity: 1,
        easing: "linear",
        duration: 1000
      });
    },
    checkWidth() {
      this.width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      this.height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

      if (this.height < 664) {
        this.problemSize = true;
        this.colorH = "#ff4d4d";
      } else {
        this.colorH = null;
      }

      if (this.width < 749) {
        this.problemSize = true;
        this.colorW = "#ff4d4d";
      } else {
        this.colorW = null;
      }

      //fallback if they resize the window
      if (this.browser === "CHROME" && this.height > 668 && this.width > 749 && this.loaded) {
        //console.log("fallback browser", this.browser);
        this.problemSize = false;
        this.problemBrowser = false;
        this.showClouds();
        this.animateClouds();
      }
    },
    checkBrowser() {
      const browser = detect();
      if (browser) {
        this.browser = browser.name.toUpperCase();
        this.version = String(browser.version);
        console.log("browser", this.browser, !this.browser != "CHROME");

        if (this.browser != "CHROME") {
          console.log("problem browser", this.browser);
          this.problemBrowser = true;
          this.colorBrowser = true;
        }

      }
    },
    animateClouds() {
      anime({
        targets: ".c",
        translateX: 500,
        easing: "linear",
        duration: 37 * 1000,
        loop: true,
        direction: "alternate"
      });
    }
  }
};
</script>

<style scoped>
.right {
  float: right;
}

.problemX {
  color: rgb(255, 77, 77);
  border: 2.3px solid red;
  padding: 3.4px;
}

.c {
  position: absolute;
  bottom: 0;
  transform: translateX(-300);
  opacity: 0;
}

.c1 {
  margin-left: 70vw;
  margin-bottom: 57vh;
}
.c4 {
  margin-left: -32vw;
  margin-bottom: 37vh;
}

.c2 {
  margin-bottom: 8vh;
  margin-left: 18vw;
}

.c3 {
  margin-bottom: 80vh;
}

.preloader {
  width: 100vw;
  height: 100vh;
  background: #2fbdfc;
  z-index: 9999;
  position: fixed;
  opacity: 1;
      left: 0;
    top: 0;
}
.loading-outer{
        padding: 12vh 10vw;

}

.box {
  border: 7px solid white;
  /* padding: 30% 2%; */
  /* padding: 25% 10%; */
  height: 60vh;
    min-height: 485px;}

h1 {
  font-family: "Press Start 2P";
  color: white;
  font-size: 5vw;
  margin-top: 30vh;
}
.imgcenter {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
    margin-top: 17vh;  transition: all 200ms;
}
.imgcenter:hover {
  transform: scale(1.12);
}

.problem{
      padding: 12vh 10vw;
}

.problem .box {
  padding: 0px 0px;
}

p {
  font-family: "Press Start 2P";
  color: white;
  font-size: 1.66em;
  line-height: 135%;
}

.column {
  float: left;
  width: 47%;
  padding: 0px 0px;
}
.row {
  margin: 35px 5%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.anyways {
position: absolute;
    right: 0;
        margin-top: -55px;
}

.eightypercent {
  width: 99%;
}
@media screen and (max-width: 1005px) {
  p {
    font-size: 1.4em;
  }
}
@media screen and (max-width: 805px) {
  .row{
      margin: 5px 5%;
}
  p {
    font-size: 1.3em;
  }
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    margin-top: 10px;
  }
  p {
    font-size: 18.5px;
  }
    .box {
    height: 75vh;
  }
}
@media screen and (max-width: 490px) {
  p {
    font-size: 16.5px;
  }
.problem{
  padding: 35px 30px;
}
.box{
      height: 78vh;
}
}
@media screen and (max-width: 390px) {
  p {
    font-size: 14.5px;
  }
}
@media screen and (max-width: 340px) {
  p {
    font-size: 12px;
  }
  .anyways {
    margin-bottom: 1.3vh;
    margin-right: 1vw;
    margin-top: -115px;
  }
}
</style>
