<template>
  <section class="section">
    <div class="flex-container w-80">
      <div v-fade-in-left class="flex-wrapper align-self-start fade-left-1">
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

      <div
        v-fade-in-left
        class="flex-wrapper align-self-center margin-top fade-left-2"
      >
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

      <div
        v-fade-in-left
        class="flex-wrapper align-self-end margin-top fade-left-3"
      >
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
  </section>
</template>
<style lang="scss" scoped>
.heading {
  font-size: $font-size-xl;
  line-height: $line-height-xl;
}

.fade-left-1 {
  transition-delay: 0.5s;
}
.fade-left-2 {
  transition-delay: 1s;
}
.fade-left-3 {
  transition-delay: 1.25s;
}

.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.margin-top {
  margin-top: 4rem;
}

.flex-wrapper {
  display: flex;
  gap: 1rem;
}

.w-80 {
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
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
