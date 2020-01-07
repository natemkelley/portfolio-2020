<template>
  <div>
    <div class="clouds">
      <svg-icon class="c c1" name="objects/World_Grass_Cloud" />
      <svg-icon class="c c2" name="objects/World_Grass_Cloud" />
      <svg-icon class="c c3" name="objects/World_Grass_Cloud" />
      <svg-icon class="c c4" name="objects/World_Grass_Cloud" />
      <svg-icon class="c c5" name="objects/World_Grass_Cloud" />
      <svg-icon class="c c6" name="objects/World_Grass_Cloud" />
    </div>
    <div class="box">
      <div class="box-header">
        <div class="box-header-div">Portfolio of Nate Kelley</div>
      </div>
    </div>
    <div class="accordion">
      <!-- Looping of the props. -->
      <div
        class="accordion-item"
        v-for="(content, i) in contents"
        :key="i"
        v-bind:class="{ 'accordion-active': content.active }"
      >
        <div class="accordion-header">
          <!-- The click event of each accordion menu -->
          <a href="#" v-on:click="expand(content, i, $event)">
            <div class="accordion-header-div">{{ content.title }}</div>
            <div class="accordion-header-div">
              <div class="accordion-caret"></div>
            </div>
          </a>
        </div>
        <!-- We need the ref to get the DOM of the body. -->
        <div class="accordion-body" v-bind:ref="'accordion-body-' + i">
          <img :src="content.img" :alt="'cover image for' + content.title" />
          <div class="accordion-content">
            {{ content.description }}

            <a :href="content.link" class="btn-go"> More Info</a>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="accordion-header">
        <div class="">
          <p>
            Check out my portfolio on a desktop computer for some more great
            content!
          </p>
          <a href="/"
            ><img
              alt="image of my portfolio"
              src="https://natemkelley.github.io/_nuxt/img/98b4a42.png"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "accessible",
  data() {
    return {
      contents: [
        {
          title: "Coca-Cola Scholar",
          description:
            "In 2013 I was select as one of 200 candidates from a pool of 260,000 to be a Coca-Cola Scholar.",
          active: false,
          link: "https://natemkelley.github.io/pages/cocacola/",
          img:
            "https://res.cloudinary.com/real-times-media/image/upload/v1552241789/images_cocacola-scholar-foundation-which-focus-themselve-on-scholarship-for-students_aoxhtz.jpg"
        },
        {
          title: "B.S. Information Technology",
          description:
            "In 2019 I received my Bachelor's of Science in Information Technology from Brigham Young University.",
          active: false,
          link: "https://natemkelley.github.io/pages/byu/",

          img:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Brigham_Young_University_medallion.svg/768px-Brigham_Young_University_medallion.svg.png"
        },
        {
          title: "M.S. User Experience",
          description:
            "In 2020 I will receive my Master's in User Experience from Arizona State University.",
          active: false,
          link: "https://natemkelley.github.io/pages/asu/",

          img:
            "https://www.entertainmentsolutionsinc.com/wp-content/uploads/2017/11/logo-asu-white-bg.jpg"
        },
        {
          title: "Graduate Research",
          description:
            "In 2019 and 2020 I while I was a graduate student I worked with United States Airforce to develop models for human robot teaming.",
          active: false,
          link: "https://natemkelley.github.io/pages/graduateresearch/",

          img: "https://natemkelley.github.io/_nuxt/img/8b8dd20.png"
        },
        {
          title: "Khione Outdoor Gear",
          description:
            "In 2017 I worked for a student startup creating hammock tents. This company went on to compete in the top 20 companies for the Utah Entreupreur of the Year award.",
          active: false,
          link: "https://natemkelley.github.io/pages/khione/",

          img: "https://natemkelley.github.io/_nuxt/img/40dfc71.jpg"
        },
        {
          title: "SMRTS",
          description:
            "In 2018 and 2019 I worked closely with Professor Amanda Hughes to build a social media simulator for her research.",
          active: false,
          link: "https://natemkelley.github.io/pages/smrts/",

          img: "https://natemkelley.github.io/_nuxt/img/d32ddc7.gif"
        },
        {
          title: "College of Engineering",
          description: "",
          active: false,
          link: "https://natemkelley.github.io/pages/collegewebdev/",

          img:
            "https://knowpathology.com.au/app/uploads/2018/07/Happy-Test-Screen-01-825x510.png"
        },
        {
          title: "Studio UX",
          description:
            "As a senior in college I worked for Studio UX. This was a community outreach team that helped businesses solve user experience related problems.",
          active: false,
          link: "https://natemkelley.github.io/pages/studioux/",

          img: "https://natemkelley.github.io/_nuxt/img/09a6f1f.png"
        },
        {
          title: "Github Projects",
          description:
            "Follow the link below to see a highlight of some of my favorite projects.",
          active: false,
          link: "https://natemkelley.github.io/pages/github/",

          img: "https://natemkelley.github.io/_nuxt/img/98b4a42.png"
        },
        {
          title: "Leadership",
          description:
            "Follow the link below to see some of my leadership experience.",
          active: false,
          link: "https://natemkelley.github.io/pages/leadership/",

          img:
            "https://i0.wp.com/blog.scoutingmagazine.org/wp-content/uploads/sites/2/2019/05/Trail-to-Eagle.jpg?resize=678%2C381&ssl=1"
        }
      ]
    };
  },
  methods: {
    expand: function(e, i, event) {
      if (event) {
        event.preventDefault();
      }
      this.contents[i].active = !this.contents[i].active;

      let start = this.contents[i].active ? "0px" : "100px";
      let stop = this.contents[i].active ? "100px" : "0px";
      if (this.contents[i].active) {
        this.$refs["accordion-body-" + i][0].classList.add("active");
      } else {
        this.$refs["accordion-body-" + i][0].classList.remove("active");
      }

      /*anime({
        targets: this.$refs["accordion-body-" + i][0],
        height: [start, stop],
        transition: "easeOutBounce",
        duration: 500
      });*/
    }
  },
  mounted() {
    anime({
      targets: ".c",
      opacity: 1,
      easing: "linear",
      duration: 1000
    });
    anime({
      targets: ".c",
      translateX: 500,
      easing: "linear",
      duration: 50 * 1000,
      loop: true,
      direction: "alternate"
    });
  }
};
</script>

<style scoped>
.accordion,
.box {
  background-color: #ffffff;
  width: 100%;
  max-height: 100%;
  max-width: 85%;
  padding: 1.6rem 1rem;
  margin: auto;
  box-sizing: content-box;
  overflow: auto;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  max-width: 450px;
}

.box {
  margin-top: 20px;
  margin-bottom: 15px;
}

.accordion-item.accordion-active .accordion-caret {
  animation: accordion-is-active 200ms linear forwards;
}

.box-header {
  font-family: "Press Start 2P";
  line-height: 35px;
}

.accordion-header,
.box-header {
  color: inherit;
  font-size: 1.9rem;
  font-weight: bold;
  position: relative;
}
.accordion-header a,
.box-header a {
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 0.6rem;
  transition: background-color 200ms ease-in-out;
}
.accordion-header a:not(.accordion-active):hover {
  background-color: #efefef;
}

.accordion-header-div,
.box-header-div {
  padding: 1rem 1rem 1rem 1rem;
      text-align: center;
}
.accordion-header-div:last-child {
  padding-left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.accordion-caret {
  background-image: linear-gradient(to top right, transparent 50%, #727272 50%);
  width: 0.5rem;
  height: 0.5rem;
  transform: rotate(-45deg);
  animation: accordion-is-inactive 200ms linear forwards;
}

.accordion-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease-in-out;
}

.accordion-content {
  padding: 1rem;
}

@keyframes accordion-is-inactive {
  0% {
    transform: rotate(-45deg);
  }
  50% {
    transform: scale(1.5) rotate(45deg);
  }
  100% {
    transform: rotate(135deg);
  }
}
@keyframes accordion-is-active {
  0% {
    transform: rotate(135deg);
  }
  50% {
    transform: scale(1.5) rotate(45deg);
  }
  100% {
    transform: rotate(-45deg);
  }
}
@media screen and (min-width: 320px) {
  #app {
    padding: 2rem;
    overflow: auto;
  }

  .accordion {
    max-height: none;
    border-radius: 0.5rem;
  }
}

.active {
  max-height: 800px;
  transition: max-height 0.35s ease-in-out;
}

img {
  width: 100%;
  max-height: 240px;
  object-fit: contain;
}

.btn-go {
  width: 100%;
  background: white;
  border: 2px solid rgba(128, 128, 128, 0.219);
  text-decoration: none;
  color: black;
  border-radius: 2px;
  box-shadow: 1px 1px 1px solid black;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 18px;
  border-radius: 10px;
}

.c {
  position: absolute;
  bottom: 0;
  transform: translateX(-300);
  opacity: 0;
  z-index: -1;
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

.c5 {
  margin-left: 56vw;
  margin-bottom: -23vh;
}
.c6 {
  margin-left: -16vw;
  margin-bottom: -55vh;
}

@media screen and (max-width: 705px) {
.clouds{
    display:none
}
.box,.accordion{
    width: 85%;
}
}
</style>
