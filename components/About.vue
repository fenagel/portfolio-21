<template>
  <section class="section flex-container">
    <div v-fade-in-left class="grid-wrapper">
      <nuxt-img class="img" src="coding.svg" width="300" />
      <div class="text-wrapper">
        <h2 class="heading">About Me</h2>
        <p class="text">
          I’m a full-stack web developer and performance marketer currently
          based in Berlin.
        </p>
        <p class="text">
          My skills in coding, Online Marketing and Conversion Rate Optimization
          enable me to create great digital experiences.
        </p>
      </div>
    </div>
    <div v-fade-in-up class="grid-wrapper margin-top">
      <div class="text-wrapper">
        <h2 class="heading">From Idea to Website</h2>
        <p class="text">
          Going from the initial concepts to the final product with a structured
          process.
        </p>
        <p class="text">
          Adapting the digital strategy in wireframes with a clear focus on the
          end user to ensure you’re building the right website.
        </p>
      </div>
      <nuxt-img class="img" src="idea.svg" width="300" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.grid-wrapper {
  display: grid;
  max-width: 70%;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 3rem;
}

.heading {
  font-size: $font-size-xl;
  line-height: $line-height-xl;
}

.margin-top {
  margin-top: 6rem;
}
</style>
