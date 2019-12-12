<template>
  <div class="container-small test-component">
    <h1 class="text-center">Github Projects</h1>
    <h3 class="text-center">College and Personal Projects </h3>
    <div class="bar"></div>

    <p>Link to my Github account: <a href="https://github.com/natemkelley" target="_blank">https://github.com/natemkelley</a>. H ere is a collection of projects that I am proud of ranked in order of preferences:</p>
    
    <a href="https://github.com/natemkelley/portfolio-2020" target="_blank">
    <div class="clickable" >
      <h2>Portfolio 2020</h2>
      <p>Showcases my skills in Vue.js, Nuxt, NPM packages, graphic design, and user experience.</p>
      <img :src="dev1"/>
    </div>
    </a>
    <a href="https://github.com/natemkelley/asu-Automated-Watering-System" target="_blank">
    <div class="clickable" href="https://github.com/natemkelley/portfolio-2020">
      <h2>Automated Watering System</h2>
      <p>This was built for a class on human-automation system and later perfected as a personal project. This project showcases my skills in Vue.js, Nuxt, NPM packages, and user experience.</p>
      <img :src="dev2"/>
    </div>
    </a>
    <a href="https://github.com/natemkelley/Boud-Family-Cabin" target="_blank">
    <div class="clickable" href="https://github.com/natemkelley/portfolio-2020">
      <h2>Family Cabin Website</h2>
      <p>This was my first project built using Vue.js. Although my skills have dramatically improved since then this shows that I love programming and solving problems in my spare time.</p>
      <img :src="dev3"/>
    </div>
    </a>
    <a href="https://github.com/natemkelley/Theme-Park-Wait-Time-Generator" target="_blank">
    <div class="clickable" href="https://github.com/natemkelley/portfolio-2020">
      <h2>Theme Park Time Collector</h2>
      <p>This project is currently under construction (December, 2019). However, this is a application that grabs the wait times at Disneyland and DisneyWorld and store them in a data base. I intend to use this data in meaningful ways to showcase wait time averages and suggestions.</p>
      <img :src="dev4"/>
    </div>
    </a>
        <a href="https://github.com/natemkelley/Drip-Drop-Smart-Shower" target="_blank">
    <div class="clickable" href="https://github.com/natemkelley/portfolio-2020">
      <h2>Drip Drop</h2>
      <p>During my senior year of college I participated in an engineering competition in which we were to create a product which utilized a Raspberry Pi micro computer. We had one week to create a minimal viable product which showcased our ability to solve a real world problem using only this computer and minimal hardware.</p>
      <img :src="dev5"/>
      <img src="@/assets/projects/dripdrop.gif"/>
    </div>
    </a>
  </div>
</template>

<script>

export default {
  name: "github",
  layout: "indipage",
  data() {
    return {
            dev1: require('@/assets/projects/github1.png'),
            dev2: require('@/assets/projects/github5.png'),
                        dev3: require('@/assets/projects/github3.png'),
                        dev4:require('@/assets/projects/github4.png'),
                                                dev5:require('@/assets/projects/github5.jpg')

    };
  },
  mounted() {
    this.$emit("loaded");
  }
};
</script>

<style scoped>
img{
  width:100%;
}
a{
    margin-top: 12px;
    text-decoration: none;
    color: white;
}
</style>
