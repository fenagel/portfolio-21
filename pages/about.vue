<template>
  <main class="about flex-container content">
    <div class="grid-wrapper">
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

    <div class="grid-wrapper margin-top">
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

    <div class="flex-container w-100">
      <div class="flex-wrapper container align-self-start margin-top-big">
        <nuxt-img class="" src="lightning.svg" width="200" />
        <div class="text-wrapper">
          <h2 class="heading">Modern Websites should be lightning fast</h2>
          <p class="text">
            With Jamstack sites for example you get pre-built files served over
            a CDN
          </p>
          <p class="text">
            That helps minimizing the time to first byte for end users
          </p>
        </div>
      </div>

      <div class="flex-wrapper container align-self-center margin-top">
        <nuxt-img class="" src="ux-ui.svg" width="200" />
        <div class="text-wrapper">
          <h2 class="heading">With a focus on good UX & UI</h2>
          <p class="text">
            Users should have no issue navigating your website.
          </p>
          <p class="text">
            Deliver your message with a clear and coherent design
          </p>
        </div>
      </div>

      <div class="flex-wrapper container align-self-end margin-top">
        <nuxt-img class="" src="devices.svg" width="200" />
        <div class="text-wrapper">
          <h2 class="heading">Responsive for all devices</h2>
          <p class="text">
            No matter how the end user decides to consume your content, <br />
            make sure everything is optimized for varying screen sizes.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.grid-wrapper {
  display: grid;
  grid-template-columns: 300px 300px;
  justify-items: center;
  gap: 3rem;
}

/* .img {
  justify-self: end;

  &:last-child {
    justify-self: start;
  }
} */

.heading {
  font-size: $font-size-xl;
  line-height: $line-height-xl;
}

.margin-top {
  margin-top: 6rem;
}

.margin-top-big {
  margin-top: 9rem;
}

.flex-wrapper {
  display: flex;
  gap: 1rem;
}

.container {
  max-width: 100%;
}

.w-100 {
  width: 100%;
}

.align-self-start {
  align-self: start;
}

.align-self-center {
  align-self: center;
}

.align-self-end {
  align-self: end;
}
</style>
