<template>
  <main class="content approach">
    <div class="wrapper">
      <h2 class="font-patrick text-3xl">How I Approach New Projects</h2>
      <nuxt-img src="projects.svg" width="250" />
      <div class="cards">
        <div v-animate-on-scroll class="card card-1">
          <h4>Kick-Off-Call</h4>
          <p>
            Your specifications will help us understand the scope of the project
            and if we’re the right fit. Let’s determine the expectations, goals
            and next steps
          </p>
        </div>
        <div v-animate-on-scroll class="card card-2">
          <h4>Proposal</h4>
          <p>
            At this point I should have a good understanding of your business
            and the project requirements. I create an individual proposal. I
            don’t charge hourly but on a per project basis so everyone has
            complete overview over the cost.
          </p>
        </div>
        <div v-animate-on-scroll class="card card-3">
          <h4>Development Phase</h4>
          <p>
            As soon as I have the required materials I can start with the
            development process. I value concise communication and transparency
            through regular updates.
          </p>
        </div>
        <div v-animate-on-scroll class="card card-4">
          <h4>Launch Phase</h4>
          <p>
            Before the web app goes live it is important to do a final review
            for quality assurance. After the website goes live or the code is
            integrated into an existing production environment.
          </p>
        </div>
      </div>
    </div>

    <div class="grid-container">
      <div class="strategy">
        <h3>Strategy</h3>
        <ul>
          <li>Digital strategy</li>
          <li>Analytics & research</li>
          <li>Search Engine Marketing (SEM)</li>
          <li>Search Engine Optimization (SEO)</li>
        </ul>
      </div>

      <div class="creative">
        <h3>Creative</h3>
        <ul>
          <li>Brand Design Systems</li>
          <li>Wireframes</li>
          <li>UX Prototyping</li>
          <li>UI Design</li>
        </ul>
      </div>

      <Lottie
        width="200"
        height="200"
        :options="rocketAnimation"
        class="animation"
      />

      <div class="engineering">
        <h3>Engineering</h3>
        <ul>
          <li>Full-Stack Development</li>
          <li>CMS integrations</li>
          <li>Ecommerce</li>
          <li>API-based Jamstack Dev</li>
        </ul>
      </div>

      <div class="support">
        <h3>Support</h3>
        <ul>
          <li>Training</li>
          <li>Analytics & Insights</li>
          <li>Hosting & Monitoring</li>
          <li>Ongoing SEO and SEM</li>
        </ul>
      </div>
    </div>
  </main>
</template>
<script>
import animationRocket from '@/assets/animations/rocket.json'
export default {
  data() {
    return {
      rocketAnimation: {
        animationData: animationRocket,
      },
    }
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim
    },
  },
}
</script>
<style lang="scss" scoped>
.cards {
  margin-top: 10rem;
  position: relative;
  overflow: hidden;
  height: 25vh;
  width: 70%;
}

.card {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $color-gray;
  border-radius: 4px;
  height: 15rem;
  width: 60%;
  transform: translate3d(0, 120%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
    rotateZ(0) skew(0, 0);
  transform-style: preserve-3d;
  transform-origin: 50% 0;
}

.grid-container {
  width: fit-content;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 16rem);
  grid-template-rows: repeat(2, min-content);
  grid-row-gap: 3rem;
  margin-top: 6rem;
}

.strategy {
  grid-column: 1/2;
  grid-row: 1/2;
}

.creative {
  grid-column: 3/-1;
  grid-row: 1/2;
  justify-self: center;
}

.animation {
  grid-column: 2/3;
  grid-row: 1/3;
}

.engineering {
  grid-column: 1/2;
  grid-row: 2/3;
}

.support {
  grid-column: 3/-1;
  grid-row: 2/3;
  justify-self: center;
}
</style>
