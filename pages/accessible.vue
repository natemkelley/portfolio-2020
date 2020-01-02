<template>
  <div>
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

            <a href="#" class="btn-go"> More Info</a>
          </div>
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
          title: "Lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          active: false,
          img:
            "https://knowpathology.com.au/app/uploads/2018/07/Happy-Test-Screen-01-825x510.png"
        },
        {
          title: "Ut enim ad minim veniam",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          active: false,
          img:
            "https://knowpathology.com.au/app/uploads/2018/07/Happy-Test-Screen-01-825x510.png"
        },
        {
          title: "Duis aute irure dolor in reprehenderit",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
          active: false,
          img:
            "https://knowpathology.com.au/app/uploads/2018/07/Happy-Test-Screen-01-825x510.png"
        },
        {
          title: "Excepteur sint occaecat cupidatat non proident",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          active: false,
          img:
            "https://knowpathology.com.au/app/uploads/2018/07/Happy-Test-Screen-01-825x510.png"
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
      console.log(this.$refs["accordion-body-" + i]);
      console.log(this.contents[i].active, start, stop);
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
</style>
