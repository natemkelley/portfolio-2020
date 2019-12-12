<template>
  <div class="container-small test-component">
    <h1 class="text-center">Graduate Research</h1>
    <h3 class="text-center">Arizona State University - 2019</h3>
    <div class="bar"></div>
    <div class="summary">
 <ul>
<li>Worked with United States Airforce to develop models for human robot teaming</li>
<li>Research project grant valued at over $2,500,000</li>
<li>Created Minecraft environment to simulate a first responder emergency situation (burning building, bombed airfield, etc.)</li>
<li>Tested four human-robot teaming strategies (explain all behavior, explain no behavior, explain when asked, pull-prime)</li>
<li>Co-wrote research paper</li>
<li>Presented key findings to stakeholders and others researchers</li>
</ul>
    </div>
    <VuePureLightbox
      :thumbnail="gra1"
      :images="[
        gra1,gra2,gra3,gra4
      ]"
    />
    <h2>Project Proposal</h2>
    <p><em>What are the essential cognitive characteristics of robots required for team situation awareness and effective teaming in distributed human-robot teams? What representations and algorithms are needed to enable robots to realize such behaviors?</em></p>
<p>An increasing number of applications demand that humans and robots work together. Although a few of these applications can be handled through ‘teleoperation’, the USAF envisions technology with increasing levels of autonomy that act in concert with the humans in a teaming relationship (USAF, 2015). For instance, the USAF envisions conducting missions with humans teamed with decision aids and air and ground vehicles of varying levels of autonomy. In these types of situations, the teaming is primarily cognitive, rather than physical. Often this cognitive teaming arrangement is not seamless and can compromise the human team member’s workload and situational awareness, leading to slower decision-making and poorly calibrated trust between the human and the autonomy (USAF, 2015).</p>
    <iframe class="iframe" src="/AFOSR_Proposal.pdf"></iframe>
  </div>
</template>

<script>
import VuePureLightbox from "vue-pure-lightbox";
import gra1 from '@/assets/projects/gra1.png'
import gra2 from '@/assets/projects/gra2.png'
import gra3 from '@/assets/projects/gra3.png'
import gra4 from '@/assets/projects/gra4.png'

export default {
  name: "graduateresearch",
  layout: "indipage",
  components: {
    VuePureLightbox,
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
      },
      gra1:gra1,
            gra2:gra2,
      gra3:gra3,
      gra4:gra4
    };
  },
  mounted() {
    this.$emit("loaded");
  }
};
</script>

<style scoped>
.iframe{
  min-height: 60vh;
  min-height: 390px;
}
</style>
