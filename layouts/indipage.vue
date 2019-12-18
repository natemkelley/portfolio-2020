<template>
  <div class="indi-background">
    <nuxt />
    <div class="append-btn">
      <div class="close-btn link-btn">
        <a class="btn-floating" href="/">
          <svg-icon name="icons/nklogo" class="close-icon" />
        </a>
      </div>
      <div class="close-btn left-btn">
        <a class="btn-floating" :href="left">
          <svg-icon name="icons/left-arrow" class="close-icon" />
        </a>
      </div>
      <div class="close-btn right-btn">
        <a class="btn-floating" :href="right">
          <svg-icon name="icons/right-arrow" class="close-icon" />
        </a>
      </div>
            <div class="close-btn resume-btn">
        <a class="btn-floating" href="/Resume_December_2019.pdf">
          <svg-icon name="icons/document" class="close-icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import styles from "vue-pure-lightbox/dist/VuePureLightbox.css";

export default {
  data() {
    return {
      backgrounds: [
        "#EC8D1D", //orange
        "#39B449", //green
        "#0072BB", //blue
        "#9E0039", //maroon
        "#C73529", //red
        "#6C249C" //purple
      ],
      left: "/",
      right: "/",
      current: "/"
    };
  },
  created() {
    document.body.style.color = "white";
    document.body.style.backgroundColor = this.backgrounds[
      Math.floor(Math.random() * this.backgrounds.length)
    ];
  },
  mounted() {
    this.current = this.$router.history.current.path || "/";

    if(this.current[this.current.length - 1]=='/'){
      this.current = this.current.substring(0, this.current.length - 1)
    }

    let arr = this.eliminateIndexAndReturn(this.$router.options.routes);
    this.setRight(arr);
    this.setLeft(arr);
  },
  methods: {
    eliminateIndexAndReturn(routes) {
      var returnArr = [];
      routes.forEach(element => {
        if (element.path[element.path.length - 1] == "/") {
          element.path.substring(0, element.path.length - 1);
        } else {
          element.path;
        }

        if (
          element.path != "/" &&
          element.path != "/pages/Test" &&
          element.path != "/pages/Intro"
        ) {
          returnArr.push(element);
        }
      });
      return returnArr;
    },
    setLeft(routes) {
      //console.log(routes)
      routes.forEach((element, n) => {
        let cur = this.current.toLowerCase();
        let el = element.path.toLowerCase();
        //console.log(cur,el)
        if (el === cur) {
          if (n === 0) {
            this.left = routes[routes.length - 1].path;
          } else {
            this.left = routes[n - 1].path;
          }
          console.warn(
            "success",
            element.path.toLowerCase(),
            this.current.toLowerCase()
          );
        } else {
          console.log(
            "failed",
            element.path.toLowerCase(),
            this.current.toLowerCase()
          );
        }
      });
    },
    setRight(routes) {
      routes.forEach((element, n) => {
        if (element.path.toLowerCase() === this.current.toLowerCase()) {
          if (n + 1 === routes.length) {
            this.right = routes[0].path;
          } else {
            this.right = routes[n + 1].path;
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.close-btn {
  position: fixed;
  top: 0;
  right: 0;
  margin: 25px;
}

.hidden .close-btn {
  display: none;
}

.close-icon {
  height: inherit;
  display: inline-block;
  text-align: center;
  width: 60%;
  margin-left: 20%;
}
.left-btn {
  position: fixed;
  top: 0;
  right: 0;
  margin: 25px;
  margin-top: 120px;
}
.right-btn {
  position: fixed;
  top: 0;
  right: 0;
  margin: 25px;
  margin-top: 215px;
}
.resume-btn {
  position: fixed;
  top: 0;
  right: 0;
  margin: 25px;
  margin-top: 310px;
}
@media only screen and (max-width: 780px) {
  .left-btn {
    margin-top: 25px;
    margin-right: 215px;
  }
  .right-btn {
    margin-top: 25px;
    margin-right: 120px;
  }
  .resume-btn{
        margin-top: 25px;
    margin-right: 310px;
  }
}
</style>
