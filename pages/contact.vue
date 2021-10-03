<template>
  <main class="page modern">
    <div class="flex-wrapper">
      <nuxt-img class="" src="lightning.svg" width="250" />
      <div class="text-wrapper">
        <h2 class="heading">Modern Websites should be lightning fast</h2>
        <p class="text">
          With Jamstack sites for example you get pre-built files served over a
          CDN
        </p>
        <p class="text">
          That helps minimizing the time to first byte for end users
        </p>
      </div>
    </div>

    <div class="flex-wrapper">
      <nuxt-img class="" src="ux-ui.svg" width="250" />
      <div class="text-wrapper">
        <h2 class="heading">
          With a focus on good user experience & user interface
        </h2>
        <p class="text">Users should have no issue navigating your website.</p>
        <p class="text">
          Deliver your message with a clear and coherent design
        </p>
      </div>
    </div>

    <div class="flex-wrapper">
      <nuxt-img class="" src="devices.svg" width="250" />
      <div class="text-wrapper">
        <h2 class="heading">Responsive for all devices</h2>
        <p class="text">
          No matter how the end user decides to consume your content, make sure
          everything is optimized for varying screen sizes.
        </p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.modern {
  width: 66vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.flex-wrapper {
  display: flex;
  gap: 1rem;
}

.heading {
  font-size: $font-size-xl;
  line-height: $line-height-xl;
}
</style>
