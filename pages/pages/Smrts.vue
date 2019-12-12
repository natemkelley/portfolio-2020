<template>
  <div class="container-small test-component">
    <h1 class="text-center">Social Media Response Training Simulator</h1>
    <h3 class="text-center">Brigham Young University - 2019</h3>
    <div class="bar"></div>
        <VuePureLightbox
      :thumbnail="smrts1"
      :images="[
        smrts1,smrts2
      ]"
    />
    <div class="summary">
      <ul>
        <li>
          Created Twitter simulator to be used by BYU university professors in research projects
        </li>
        <li>
          Developed project using Node.js, Socket.io, and React
        </li>
        <li>
          Managed team of four developers over the course of 6 months
        </li>
        <li>
          Presented results and final product to stakeholders and department faculty
        </li>
      </ul>
    </div>
    
<p>In Fall 2018 I&nbsp;was been working closely with Professor Amanda Hughes on a research project exploring the implications that social media training has on disaster related emergency responders. Amanda Hughes has conducted over 10 years of research on the effects that social media has on disaster preparedness and relief. This most project&nbsp;dealt primarily with how organizations leverage social media and how small scale simulations better prepare them for a disaster.</p>
<p>The work that will be described in this article will detail why we built a social media simulator, what prototyping was done, and how it is being engineered. This next semester (Spring 2019), we open our simulator to public use and we will conduct research of our own on how simulations can be best utilized.<br/><br/></p>
<div>
<h2>Problem</h2>
<p>Social Media has rapidly become the primary means in which people connect with each other and consume news. It then comes at no surprise that emergency responders use Twitter and Facebook as tools to gather information about areas affected by a natural or human caused disasters. In the early stages of a disaster, crowd-sourced information can be hard to find and often unreliable. However, good posts can provide necessary information as to what is going on. Most US cities have dedicated teams whose job it is to gather reliable information from social media accounts. Additionally, these teams reply to posts from the public to limit misinformation from spreading.</p>
<p><em>Unfortunately, many small cities and departments do not have resources to conduct elaborate trainings on the effectiveness of social media.</em></p>
<div>
<div>
<div><img src="https://nates-portfolio.firebaseapp.com/img/gooddata.png"/></div>
</div>
</div>
</div>
<div>
<h2>Process</h2>
<p>We began work on the social media simulator by following the &ldquo;nail it then scale it model&rdquo;. That is, we first conducted research on what products currently exist in the market that match what we were building. It turned out that there were about six legitimate companies that were building products similar to ours. However, these companies often charge thousand of dollars and bring in equipment, actors, and datasets according to the organization's needs.</p>
<h3>Interviews</h3>
<p>We asked social media analysts from neighboring cities and organizations whether or not they use simulators like this. The majority replied that they were aware of these simulations, but did not use them due to their high cost. These same organziations said they conduct simulations regularly but use fake Twitter accounts or print off example posts of &ldquo;good data&rdquo;. All cities said they would use a simulation service such as ours if it were priced appropriately. As we are a non-profit university, we naturally decided that our simulator would be free of charge.</p>
<h3>Prototyping</h3>
<p>As Amanda Hughes had 10 years experience conducting research on social media analysts, she was familiar with what features needed to be in a simulator. We then took a list of about 10 features to a few people familiar with disaster response and who were interested in beta-testing our software. We told them they had $100 to associate price points with certain features. The four highest priced features were:</p>
<p>With a few other students, we whiteboarded possible layouts for the software and validated the design with Amanda Hughes who would be using this simulator for research and who had the most experience with social media simulations. Then, using Adobe XD, I built high fidelity prototypes and validated the flow and usability of our concept with 15 people.</p>
<h3>Engineering</h3>
<p>With the prototypes validated, we decided on 3 core technologies to use: React.js, MongoDB, and Node.js (common JavaScript stack). We chose these technologies because the turnover for people supporting this project would be quite rapid and, as JavaScript is a common language for students to learn, this was an obvious solution.</p>
</div>
<div>
<h2>Solution</h2>
<p>Still unsure as the potential success of our product, we decided to build the software in four stages &ndash; the first being 1) the minimum viable product. If this concept proved successful for both research and beta-tester use, we would 2) integrate authentication and group simulation support, 3) add support for facebook and instagram, 4) create tutorials on simulation best practices.</p>
<p>The core features for the minimum viable product are currently being built and tested. Our most recent prototype looks like this:</p>
<div>
<div>
<div><img src="https://nates-portfolio.firebaseapp.com/img/ToGif-xs.gif"/></div>
</div>
</div>
</div>
<div>
<h2>Future Plans</h2>
<p>Once our beta is ready for testing, we will conduct in depth interviews to determine the success of this product to small cities and organizations. If the concept is not worth pursuing then the product will be used solely for research on social media simulation best practices (which I will be apart of next semester).</p>
</div>



  </div>
</template>

<script>
import VuePureLightbox from "vue-pure-lightbox";
import BarChart from "@/components/modalComponents/BarChart";

export default {
  name: "smrts",
  layout: "indipage",
  components: {
    VuePureLightbox,
    BarChart
  },
  data(){
    return{
      smrts1: require('@/assets/projects/smrts1.gif'),
            smrts2: require('@/assets/projects/smrts2.png')
    }
  },
  mounted() {
    this.$emit("loaded");
  }
};
</script>

<style scoped>
h3{
      font-size: 24px;
    margin-left: 5%;
    margin-top: 12.5px;
}

img{
  width:100%;
}
</style>
