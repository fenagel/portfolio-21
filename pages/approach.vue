<template>
  <main class="content approach">
    <div class="flex-container">
      <nuxt-img class="" src="projects.svg" width="250" />
      <div class="">
        <h2 class="font-patrick text-3xl">How I Approach New Projects</h2>
        <p>CARDS</p>
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
.flex-container {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
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
