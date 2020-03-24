<template>
  <div class="container-small test-component">
    <h1 class="text-center">Khione Outdoor Gear</h1>
    <h3 class="text-center">UX Engineer - 2017 - 2018</h3>
    <div class="bar"></div>

        <VuePureLightbox
      :thumbnail="khione1"
      :images="[
        khione1,khione2,khione3
      ]"
    />
    <div class="summary">
<ul>
<li>Played crucial role in launch of startup as UX designer and developer</li>
<li>Executed iterative user tests of gear to ensure quality and usability using surveys, interviews, and observations</li>
<li>Raised $120,000+ from sales, competitions, and Kickstarter in 6 months</li>
<li>Successfully launched web store to take in pre-orders following Kick Starter campaign</li>
<li>Competed as one of the top 20 teams in Utah Entrepreneur of the Year</li>
</ul>
    </div>
    <p>In 2018 I worked in a team of five to kickstart a product which would eventually go on to compete in the Utah Entrepreneur of Year Competition. Although we all shared roles during the initial development of the product, I was primarily the UX designer and web developer.</p>
    <h2>Problem</h2>
<p>Khione was founded as a company to change the way people go camping. In order to to do that, we explored the pains that people experienced while backpacking. Although we were already familiar with this area, we spent approximately three weeks observing backpackers and interviewing them about their most recent backpacking trip. After summarizing our notes, we found that almost all interviewees experienced pains in these areas:</p>
<BarChart :chartData="chartData"/>

<h2>Process</h2>
<p>We then spent the next few months iterating through different concepts that would address this problem. Our ideas ranged from carbon fiber tents, smaller backpacks, and even "tent-coats". After every iteration we would present low to medium fidelity prototypes to potential customers to get their feedback. Unfortunately, our first 12 ideas failed to gain the interest of backpackers on the grounds that our solutions were either too complicated or not unique enough. However, one idea seemed to have potential: hammock tents.</p>
<p>Some preliminary market research led us to a variety of companies that were manufacturing hammock tents. However, none of their solutions seemed to address ALL the problems that we had initially identified during our backpacker interviews.</p>
<img src="@/assets/projects/khionecomp.png"/>

<h2>Solution</h2>
<p>Our solution was The Shel Hammock Tent. A simple setup hammock that would keep you warm down to 32 degrees, dry in light rain, bug-free, and weighed just 2.2 pounds. What made our potential customers especially interested was the fact that it would eliminate the need for a tent, rainfly, and sleeping bag while they were on the trail.</p>
    <VuePureLightbox
      :thumbnail="khione1"
      :images="[
        khione1,khione2,khione3
      ]"
    />

<h2>Additional Duties</h2>
<p>As the UX designer I lead out on conducting user interviews, testing prototypes, and suggesting changes for future iterations. I was also solely responsible for creating the look and feel of the brand through marketing materials. As the company began to grow and more people began designing marketing materials, it became necessary to create a style guide. This guide was also the primary style of the company website which I designed and coded to drive online sales.</p>
    <VuePureLightbox
      :thumbnail="khione4"
      :images="[
        khione4,khione5
      ]"
    />
        <VuePureLightbox
      :thumbnail="khione5"
      :images="[
        khione5,khione4
      ]"
    />
  </div>
</template>

<script>
import VuePureLightbox from "vue-pure-lightbox";
import BarChart from "@/components/modalComponents/BarChart";
import khione1 from '@/assets/projects/khione1.jpg'
import khione2 from '@/assets/projects/khione2.jpg'
import khione3 from '@/assets/projects/khione3.jpg'
import khione4 from '@/assets/projects/khione4.jpg'
import khione5 from '@/assets/projects/khione5.jpg'


export default {
  name: "khione",
  layout: "indipage",
  components: {
    VuePureLightbox,
    BarChart
  },
  data() {
    return {
      khione1:khione1,
            khione2:khione2,
      khione3:khione3,
      khione4:khione4,
      khione5:khione5,

            chartData: {
                labels: ["Warm", "Bugs", "Dry", "Simple", "Light-weight", "Food", 'Bigger Tent', 'Lights'],
                datasets: [{
                    label: 'Backingpacking Pains by % of People',
                    data: [75, 65, 50, 50, 97, 35, 15, 10],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(71, 170, 48, 0.2)',
                        'rgba(88, 68, 80, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1.2)',
                        'rgba(54, 162, 235, 1.2)',
                        'rgba(255, 206, 86, 1.2)',
                        'rgba(75, 192, 192, 1.2)',
                        'rgba(153, 102, 255, 1.2)',
                        'rgba(255, 159, 64, 1.2)',
                        'rgba(71, 170, 48, 1.2)',
                        'rgba(88, 68, 80, 1.2)'
                    ],
                    borderWidth: 1
                }]
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
</style>
