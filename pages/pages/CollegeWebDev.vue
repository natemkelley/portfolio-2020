<template>
  <div class="container-small test-component">
    <h1 class="text-center">University Web Developer</h1>
    <h3 class="text-center">Brigham Young University - 2019</h3>
    <div class="bar"></div>
        <!--<VuePureLightbox
      :thumbnail="dev1"
      :images="[
        dev1,dev2,dev3
      ]"
    />-->
    <div class="summary">
      <ul>
      <li>Developed modules in Vue, JavaScript, PHP, MongoDB, and SQL to be used by professors and staff in internal projects</li>
      <li>Upgraded antiquated college website to new theme using Google Analytics, user interviews, and iterative tests with faculty and students</li>
      <li>Created Vue.js university graduate seating chart software</li>
      <li>Collaborated with UX teams to create user journey maps and interfaces</li>
      </ul>
    </div>
    
<div>
<p>As a developer for the College of Engineering and Technology at Brigham Young University, I was given the lead to upgrade the Civil and Environmental Engineering (CEEn) website from it's old theme. Being the primary programmer and designer, I was in charge of journey mapping, designing, prototyping, and eventually programming the site. My designs and code eventually become the standard for other department websites within the college.</p>
</div>
<div>
<h2>Problem</h2>
<p>The Department of Civil Engineering has been through many student developers in the past 7 years. Each student organized the site in their own way. This led to a monstrous 400+ page website with important information scattered on random pages. A Google Analytics journey map found that the majority of users were navigating roughly 10 different menus before they eventually got to what they were looking for. Additionally, 70% of those users were on a mobile device. This created problems as the website was not mobile friendly. Finally, there was no consistency in the site theme or design.</p>
<img :src="dev1" />

</div>
<div>
<h2>Process</h2>
<p>As I was not familiar with the CEEn website, I started by creating a site map of all the pages and menus. I then conducted multiple tests with the primary stakeholders: CEEn faculty and staff. These tests consisted of me putting out the site map onto a table and then asking them to go to certain pages. The reason for using the site map instead of the actual website was due to the fact that these people were familiar with how the site was laid out and would get to certain pages by memory. This study helped me sympathize with the users and to better understand where certain pages should be organized.</p>
<p>Sitting down with the secretaries from the CEEn department, we began drawing out a new site map with a simplified menu system. Over the next two months we printed off all the pages that were on the site and placed them into logical menus. Then, working with the whole CEEn faculty and staff, we validated the placement of certain pages. This exercise also helped update old information as well as eliminate outdated pages.</p>
<div>
<div>
<div><img :src="dev2"/></div>
</div>
</div>
<p>While mapping out the new site, I created multiple low-fidelity mobile-friendly wireframes to visualize our new menu system. After a few iteration with CEEn secretaries, I presented a medium fidelity mockup of our new theme to the professors. After some justification to the professors as to why the site needed to be mobile friendly, and few additional changes as per their request, the site was ready to be tested by prospective CEEn students.</p>
<p>Similar to the tests with the faculty, I presented 30 students with a site map and had them try and go to certain pages. The new site map proved intuitive.</p>
</div>
<div>
<h2>Solution</h2>
<p>The new website brought the average user&rsquo;s click rate from 10 down to 3. Additionally, we were able to consolidate the site from 400+ pages down to 42. Lastly, the site theme was well documented and organized as to prevent future student web developers from creating poorly designed and off-topic pages under certain menus.</p>
</div>
<div><img :src="dev3"/></div>



  </div>
</template>

<script>
import VuePureLightbox from "vue-pure-lightbox";

export default {
  name: "collegewebdev",
  layout: "indipage",
  components: {
    VuePureLightbox
  },
  data(){
    return{
      dev1: require('@/assets/projects/collegewebdev1.jpg'),
            dev2: require('@/assets/projects/collegewebdev2.jpg'),
                        dev3: require('@/assets/projects/collegewebdev3.jpg')
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
