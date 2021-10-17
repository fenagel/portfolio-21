<template>
  <section class="section">
    <div class="wrapper">
      <h2>How I Approach New Projects</h2>
      <nuxt-img src="projects.svg" width="250" />
      <div class="cards">
        <div class="card card-1">
          <h4>Kick-Off-Call</h4>
          <p>
            Your specifications will help us understand the scope of the project
            and if we’re the right fit. Let’s determine the expectations, goals
            and next steps
          </p>
        </div>
        <div class="card card-2">
          <h4>Proposal</h4>
          <p>
            At this point I should have a good understanding of your business
            and the project requirements. I create an individual proposal. I
            don’t charge hourly but on a per project basis so everyone has
            complete overview over the cost.
          </p>
        </div>
        <div class="card card-3">
          <h4>Development Phase</h4>
          <p>
            As soon as I have the required materials I can start with the
            development process. I value concise communication and transparency
            through regular updates.
          </p>
        </div>
        <div class="card card-4">
          <h4>Launch Phase</h4>
          <p>
            Before the web app goes live it is important to do a final review
            for quality assurance. After the website goes live or the code is
            integrated into an existing production environment.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cards {
  margin-top: 10rem;
  position: relative;
  overflow: hidden;
  height: 25vh;
  width: 70%;
}

.card {
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
</style>
