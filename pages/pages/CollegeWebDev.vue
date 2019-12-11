<template>
  <div class="container-small test-component">
    <h1 class="text-center">Studio UX</h1>
    <h3 class="text-center">UX Designer - 2018 - 2019</h3>
    <div class="bar"></div>
    <div class="summary">
    </div>
    <VuePureLightbox
      thumbnail="https://miro.medium.com/max/5780/1*yktz1koGsQ1kV02GnF5K1A.png"
      :images="[
        'https://miro.medium.com/max/5780/1*yktz1koGsQ1kV02GnF5K1A.png'
      ]"
    />
    

<h2>Introduction</h2>
<p>This year I joined a flagship university-community involvement team called &ldquo;Studio UX&rdquo;. Similar to the Engagement Lab at the Corcoran, we act as a student consulting firm that entities approach with problems that need solutions. Roughly every four weeks we work with a different organization tackling a myriad of different issues from UI design, feature validation, and user testing.</p>
<p>Although I have worked with many different organizations this year, I would like to showcase one project that I found particularly interesting.<br /><br /></p>

<h2>PluralSight's Problem</h2>
<p>PluralSight is a multimillion dollar startup that has seen rapid growth in the past few years. However, this rapid growth has created a problem in that many of the new hires and teams do not know PluralSight&rsquo;s design thinking process called "directed discovery". Additionally, rapid growth has lead to a lack of leadership and duplicate features are being developed by different teams.</p>
<p>This is the problem statement provided to us by PluralSight&rsquo;s CXO (Chief Experience Officer):</p>
<blockquote>Our current design thinking process that supports our ability to deliver user-centered experiences, called Directed Discovery, is manual and siloed. We need a proposed prototype for a web-based tool to centralize, automate and support cross-functional collaboration of experience design and validation testing.</blockquote>

<h2>Modified GV Sprint</h2>
<p>In order to produce a reliable product that would solve Pluralsight's problem, we followed a modified version of the&nbsp;<strong>Google Venture (GV) Sprint</strong>&nbsp;methodology which we adapted to this specific project. This "modified version", which is bulleted below, was used solely because we lacked the time to do a full sprint.</p>
<ol>
<li>Identify the pain points described by the CXO.</li>
<li>Explore UX best practices (validate Directed Discovery) and explore existing solutions (notion.so, leankit, milanote)</li>
<li>Map out PluralSight&rsquo;s directed discovery process and compare it with best design thinkings practices&nbsp;*</li>
<li>Create individual paper prototypes</li>
<li>Cluster analysis: Vote which features would be useful from individual prototypes*</li>
<li>Iterate on group low-fidelity mockup (based on group discussions)</li>
<li>Create high fidelity iterations: based on feedback from actual users</li>
</ol>
<p>(*) signifies a meeting with PluralSight</p>

<img src="@/assets/projects/studioux1.jpg" />

<h2>Solution</h2>
<p>This project turned out to be a much bigger problem than could be solved in the 3 weeks we had to work on it. PluralSight recognized this and created a team of UX researchers at their own organization to take our prototype and expand on it. Although we created a product with many features, I will address the features that we implemented that directly relate to the pains expressed by the CXO.</p>
<h3>Inconsistent Application of Directed Discovery</h3>
<p>The CXO was insistent that teams should follow the design thinking (directed discover) process for all new features. Although we initially thought to have trainings on the process would solve the problem, it turned out that team leads were trained, but lacked the motivation or understanding to follow the process. Our solution to this problem, which was later confirmed by the CEO and various team leads, was a web application which would guide teams through the process and would provided searchable data from past and ongoing projects. This included templated design thinking strategies and tutorials on how to conduct research built into the application.&nbsp;<em>The irony behind this solution was that this company makes its money by creating online tutorials for IT professionals.</em></p>
<h3>Siloed Data and Repeated Research</h3>
<p>To eliminate siloed data and repeated research, we concluded that findings would need to be made available to the whole organization. Therefore a research tool was integrated into our prototype. Teams will conclude their findings at the end of each each section of the design thinking process and the project. These findings would then be cataloged into a database and made searchable across the whole organization.</p>
<h3>Lack of Experience</h3>
<p>To help teams stay aligned with the design thinking process, we implemented the idea of &lsquo;templates&rsquo;. Templates can be created by team leaders for any part of the process and can be edited at any time. Like the product "Notion", the user can pick a template to use and follow the instruction provided. This would guide the user into following the directed discovery process which could easily be adapated to different projects depending on the template used.</p>

  </div>
</template>

<script>
import VuePureLightbox from "vue-pure-lightbox";
import BarChart from "@/components/modalComponents/BarChart";

export default {
  name: "Test",
  layout: "indipage",
  components: {
    VuePureLightbox,
    BarChart
  },
  data() {
    return {
      chartData: {
        labels: ["January", "February"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 20]
          }
        ]
      }
    };
  },
  mounted() {
    this.$emit("loaded");
  }
};
</script>

<style scoped>
img{
  width: 100%;
}
h3{
      font-size: 24px;
    margin-left: 5%;
    margin-top: 12.5px;
}
</style>
