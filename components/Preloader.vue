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
          <div class="row btn-row">
            <a class="cont-anyways-btn" @click="togglePreloader"
              >Continue Anyways</a
            >
          </div>
          <div class="row btn-row">
            <a class="cont-anyways-btn make-it-green" href="/accessible"
              >Go To Accessible Site</a
            >
          </div>
          <div class="spacer">
            </div>
        </div>
        <!--<svg-icon
          @click="togglePreloader"
          class="clickable anyways"
          name="objects/ContinueAnyways"
          width="555"
          height="345"
        />-->
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
  destroyed() {
    window.removeEventListener("resize", this.checkWidth);
  },
  watch: {
    loaded() {
      this.showClouds();
      this.animateClouds();
    }
  },
  created() {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  },
  mounted() {
    this.checkBrowser();
    this.checkWidth();
            window.addEventListener("resize", this.checkWidth);
  },
  methods: {
    togglePreloader() {
      if (this.problemSize) {
        document
          .querySelector("meta[name=viewport]")
          .setAttribute(
            "content",
            "width=device-width, initial-scale=0.58, maximum-scale=1.0, user-scalable=0"
          );
        //offset for mobile?
        this.$emit("informheight", 400);
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
      if (
        this.browser === "CHROME" &&
        this.height > 668 &&
        this.width > 749 &&
        this.loaded
      ) {
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
.loading-outer {
  padding: 12vh 10vw;
}

.box {
    border: 7px solid white;
    /* padding: 30% 2%; */
    /* padding: 25% 10%; */
    height: 80vh;
    overflow: hidden;
    overflow-y: scroll;
    /* min-height: 485px;*/
}

.spacer{
  height: 30px;
}

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
  margin-top: 17vh;
  transition: all 200ms;
}
.imgcenter:hover {
  transform: scale(1.12);
}

.problem {
  padding: 10vh 10vw;
      overflow-y: scroll;
    height: 100%;
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
  margin: 20px 5%;
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
  margin-top: -180px;
  width: 240px;
}

.eightypercent {
  width: 99%;
}

.cont-anyways-btn {
  font-family: "Press Start 2P";
  background: orange;
  box-shadow: 5px 7px rgb(209, 136, 1);
  color: white;
  padding: 18px;
  width: auto;
  border-radius: 7px;
  margin-top: 10px;
  display: block;
  line-height: 23.5px;
  text-decoration: none;
}

.make-it-green {
  background: rgb(1, 167, 1);
  box-shadow: 5px 7px green;
  margin-top: 17px;
}

.btn-row{
      margin-top: 0px;
    margin-bottom: 10px;
}

@media screen and (max-width: 1005px) {
  p {
    font-size: 1em;
  }
}
@media screen and (max-width: 805px) {
  .row {
    margin: 5px 5%;
  }
  p {
    font-size: 1em;
  }
  .box {
    height: 79vh;
  }
}

@media screen and (max-width: 600px) {

  .column {
    width: 50%;
    margin-top: 10px;
  }
  p {
    font-size: 14.5px;
  }
  .box {
    height: 81vh;
  }
}
@media screen and (max-width: 490px) {
  p {
    font-size: 14.5px;
  }
  .problem {
    padding: 35px 30px;
  }
  .box {
    height: 85vh;
  }
  .anyways {
    margin-top: -269px;
    width: 65%;
    margin-right: 17.5%;
  }
}
@media screen and (max-width: 390px) {
  p {
    font-size: 16.5px;
  }
}
@media screen and (max-width: 340px) {
  p {
    font-size: 12px;
  }
  .anyways {
    margin-bottom: 1.3vh;
    margin-top: -255px;
  }
}
</style>
