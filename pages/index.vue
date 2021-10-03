<template>
  <main class="hero">
    <div class="content hero-main">
      <nuxt-img class="image" src="eyecatching.svg" width="350" />
      <div class="wrapper">
        <h1 class="heading">
          I Love To Build Eye Catching </br> Websites That Resonate
        </h1>
        <div class="typing-wrapper">
          <h2 class="subheading">Need help with</h2>
          <vue-typed-js :type-speed="50" :show-cursor="false" :loop="true" :strings="strings">
            <h2 class="typing"></h2>
          </vue-typed-js>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import VueTypedJs from 'vue-typed-js'
export default {
  components: [VueTypedJs],
  data() {
    return {
      // strings: ['complexity without confusion', 'cutting edge technologies', 'awesome website designs', 'boost your brand'],
      strings: [
        'Web Development?',
        'Performance Marketing?',
        'Conversion Rate Optimization?',
      ],
    }
  },
}
</script>
<style lang="scss" scoped>

.hero {
  background-color: $color-gold-light;
  color: $color-white;
  width: 100vw;
  height: 100vh;
}

.hero-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  justify-items: center;
  align-items: center;
  padding-top: 12rem;
}

.image {
  justify-self: end;
}

.wrapper {
  justify-self: start;
}

.heading {
  font-size: $font-size-xxl;
  line-height: $line-height-xxl;
}

.typing-wrapper {
  display: flex;
  margin-top: 3rem;
}

.subheading {
  font-size: $font-size-l;
  line-height: $line-height-l;
  margin-right: 0.75rem;
}
</style>