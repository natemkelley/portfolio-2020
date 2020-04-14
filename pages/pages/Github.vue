<template>
  <div class="container-small test-component">
    <h1 class="text-center">Github Projects</h1>
    <h3 class="text-center">College and Personal Projects </h3>
    <div class="bar"></div>

    <p>Link to my Github account: <a class="blahr" href="https://github.com/natemkelley" target="_blank">https://github.com/natemkelley</a>. Here is a collection of projects that I am proud of ranked in order of preferences:</p>
    
    <a href="https://github.com/natemkelley/kelley-family-bank" target="_blank">
    <div class="clickable" >
      <h2>Family Banking</h2>
      <h4>Technologies Used: Vue.js, Firebase, Express</h4>
      <p>This is a personal project that I am currently working on as of March 24, 2020. This application will assist families in teaching their children the importance of hard work and saving money through family style 401ks, loans, and chores. The application's basis being that "allowances" don't teach good principles and that money should be earned. The site will hopefully launch in the summer of 2020.</p>
      <img :src="dev0"/>
    </div>
    </a>

    <a href="https://github.com/natemkelley/portfolio-2020" target="_blank">
    <div class="clickable" >
      <h2>Portfolio 2020</h2>
      <h4>Vue.js, Animejs, Github Hosting</h4>
      <p>This showcases my skills in Vue.js, Nuxt, NPM packages, graphic design, and user experience. This portfolio is largely based on the ideas from one of my favorite designers Rob Leonardi.</p>
      <img :src="dev1"/>
    </div>
    </a>
    <a href="https://github.com/natemkelley/asu-Automated-Watering-System" target="_blank">
    <div class="clickable" href="https://github.com/natemkelley/portfolio-2020">
      <h2>Automated Watering System</h2>
      <h4>Vuetify, Raspberry Pi, and a big 'ol breadboard</h4>
      <p>This was built for a class on human-automation system and later perfected as a personal project. This project showcases my skills in Vue.js, Nuxt, NPM packages, and user experience.</p>
      <img :src="dev2"/>
    </div>
    </a>
    <a href="https://github.com/natemkelley/Boud-Family-Cabin" target="_blank">
    <div class="clickable" href="https://github.com/natemkelley/portfolio-2020">
      <h2>Family Cabin Website</h2>
      <h4>Vue CLI, Materialize, Firebase</h4>
      <p>This was my first project built using Vue.js and looking back at my code, is quite poor. However, I have included this proejct because this shows that I love programming and solving problems in my spare time using new technologies.</p>
      <img :src="dev3"/>
    </div>
    </a>
    <a href="https://github.com/natemkelley/Theme-Park-Wait-Time-Generator" target="_blank">
    <div class="clickable" href="https://github.com/natemkelley/portfolio-2020">
      <h2>Theme Park Time Collector</h2>
      <h4>Python, Node, MongoDB</h4>
      <p>This project is currently under construction (December, 2019). This is an application that grabs the wait times at Disneyland and DisneyWorld and stores them in a database. I intend to use this data in meaningful ways to showcase wait time averages and itinerary suggestions.</p>
      <img :src="dev4"/>
    </div>
    </a>
        <a href="https://github.com/natemkelley/Drip-Drop-Smart-Shower" target="_blank">
    <div class="clickable" href="https://github.com/natemkelley/portfolio-2020">
      <h2>Drip Drop</h2>
      <h4>Raspberry Pi, JQuery, and Firebase Realtime Databases</h4>
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
                  dev0: require('@/assets/projects/family_bank.png'),
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

.blahr{
    margin-top: 12px;
    text-decoration: underline;
    color: white;
}

</style>
