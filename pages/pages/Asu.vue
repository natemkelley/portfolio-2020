<template>
  <div class="container-small test-component">
    <h1 class="text-center">M.S. USER EXPERIENCE</h1>
    <h3 class="text-center">Arizona State University - 2019 - 2020</h3>
    <div class="bar"></div>
    <div class="summary">
      <ul>
        <li>4.0 GPA as of January, 2019</li>
        <li>
          Developed expertise in agile product design and development
          techniques.
        </li>
        <li>
          Individual and Team UX research projects including heuristic
          evaluations, market research, individual and group user tests, and
          task analysis diagramming.
        </li>
        <li>
          Practiced user centered design thinking strategies including UX-Agile
          best practices.
        </li>
        <li>
          Created 14+ projects related to graphic and experience design
          including experience with user testing
        </li>
      </ul>
    </div>

    <h1 class="text-center exp">My ASU Experience</h1>
    <div class="sectiono data-viz">
      <p>
        While attending ASU I completed multiple courses related to product
        design and development as well as courses on analyzing and visualizing
        data. Because the field of user experience is so broad, I will briefly
        describe three of my favorite projects that I worked on related to data
        visualization, graphic design, and user research.
      </p>
      <h2>Data Visualization</h2>
      <p>
        I had a course midway through my program that was entirely focused on
        data visualization. While we did learn many things from the importance
        of visualizing large data sets, to formatting data in such a way to make
        it meaningful (or manipulative), to how to overlay different charts to
        draw meaning, the most important thing that I learned about data
        visualization is its ability to tell a story. It is easy to create a pie
        chart or line chart from a data set. However, these charts often explain
        what happened, but not necessarily why it happened or under what
        circumstances they happened. Additionally, a well made infographic can
        help a viewer draw more information out of data by creating an engaging
        and fun experience.
      </p>
      <p>
        During the duration of my data visualization course we were tasked to
        collect data about our personal lives. Near the end of the course, we
        were then told to create an immersive graphic about our data. For this
        reason, I created a &ldquo;Okay, Google&rdquo; infographic explaining
        some of my interactions with the tech giant.
      </p>
      <p>
        To further engage my viewer, all of the charts used Google&rsquo;s fonts
        and colors. Additionally, I have used the logos for the Google
        Assistant, Chrome Browser, and YouTube. The ability this graphic has to
        tell a story, in my opinion, comes from my use of a Google Home Mini
        which gives explanation to each of my charts. All of my chart titles are
        phrased in the form of a question as if it were being asked to the
        Google Assistant. Each of these graphics could have easily been created
        from a spreadsheet, however, by piecing them together and providing some
        beautiful graphic design, I was able to tell a compelling story.
      </p>
      <img class="responsive" src="@/assets/Google_Assistant.png" />
    </div>
    <div class=" sectiono graphic-design">
      <h2>Graphic Design</h2>
      <p>
        While I personally believe that information architecture has the most
        profound impact on user experience, graphic design probably comes in a
        close second. It is amazing to me that users' perceptions on the quality
        of an app largely depend on the graphical interface in which it is
        housed. In fact, some users will even choose the application that looks
        prettier over the one that they know can be more effective at
        accomplishing the job.
      </p>
      <p>
        Graphic design is not one of my strongest skills, however, I feel very
        confident in my ability to recognize good graphic design and manipulate
        what currently exists. This is evident in the following projects that I
        worked on during my master&rsquo;s degree.
      </p>
      <div class="project-img">
        <h3>Fictional Fashion Magazine Design</h3>
        <img class="responsive" src="@/assets/projects/asuprojects2.png" />
      </div>
      <div class="project-img">
        <h3>3D Product Rendering</h3>
        <img class="responsive" src="@/assets/projects/asuprojects3.png" />
      </div>
      <div class="project-img">
        <h3>SpaceJam Website Redesign</h3>
        <img class="responsive" src="@/assets/projects/asuprojects4.png" />
      </div>
      <div class="project-img">
        <h3>National Park Brochure Design</h3>
        <img class="responsive" src="@/assets/projects/asuprojects5.png" />
      </div>
    </div>
    <div class="sectiono user-research" style="margin-top:50px">
      <h2>User Research</h2>

      <div class="">
        <p>
          Successful products are always those that can accurately address a
          problem or pain that a person has. It is for this reason that user
          research is critical during all stages of a design cycle. When a user
          is involved in a product's creation or redesign, it&rsquo;s likelihood
          to succeed increases dramatically. During my time at ASU I had the
          opportunity to perform multiple usability tests as well as basic user
          research. One project was particularly fun for me as we were able to
          work with the Community Garden at ASU&rsquo;s Polytechnic campus.
        </p>
        <p>
          During this assignment my classmates and I were tasked with
          understanding the needs of the users of the community garden. We
          identified, and validated with the garden&rsquo;s caretaken, multiple
          user groups. These users groups, which consisted of students, faculty,
          club representatives, etc., were then assigned to teams in the class.
          My team was tasked with understanding the needs of Event Planners at
          ASU.
        </p>
        <p>
          Over the next three months we conducted in person interview and online
          surveys, analyzed resulting data, aggregate potential pain points, and
          developed solutions to those pains which eventually culminated in a
          prototype for a website to help event planners do their job better
          while at the same time creating a product that raised awareness of the
          Community Garden as an event space.&nbsp;
        </p>
        <p>
          While it may be superfluous to explain all of our research, analysis,
          and prototyping in detail, below are some of the most captivating
          artifacts from this project
        </p>
      </div>
      <div class="project-img">
        <h3>Personas</h3>
        <iframe class="responsive-s" height="500px" src="/Proto_Persona.pdf" />
      </div>
      <div class="project-img">
        <h3>User Work Flows</h3>
        <img
          class="responsive"
          height=""
          src="@/assets/projects/user_research.png"
        />
      </div>
      <div class="project-img">
        <h3>Initial User Group Research Report</h3>
        <iframe
          class="responsive-s"
          height="500px"
          src="/Research_Report.pdf"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VuePureLightbox from "vue-pure-lightbox";
import BarChart from "@/components/modalComponents/BarChart";

export default {
  name: "asu",
  layout: "indipage",
  components: {
    VuePureLightbox,
    BarChart,
  },
  data() {
    return {
      protopersona: null,
    };
  },
  mounted() {
    this.$emit("loaded");
  },
};
</script>

<style scoped>
.exp {
  font-size: 50px;
  margin-top: 60px;
}

.project-img {
  margin-top: 40px;
  text-align: center;
}

.sectiono{
  margin-top: 100px;
}
</style>
