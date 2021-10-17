<template>
  <section class="hero section">
    <div class="hero-main">
      <div v-fade-in-left class="text-wrapper">
        <h1 class="heading underlined">
          I Love To Build Eye Catching </br> Websites That Resonate
        </h1>
      </div>
      <nuxt-img v-fade-in-right class="eye" src="eyecatching.svg" />
    </div>
    <div v-fade-in-up class="scroll-wrapper">
      <h3 class="subheading">modern technologies to transform your designs into a beautiful and fast website</h3>
      <div class="scroll">
        <Lottie
          width="20"
          height="20"
          :options="scrollAnimation"
        />
      </div>
    </div>
    </div>
  </section>
</template>
<script>
import animationScroll from '@/assets/animations/scroll.json'
export default {
  data() {
    return {
      scrollAnimation: {
        animationData: animationScroll,
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
.hero {
  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    position: absolute;
    background: url('~assets/images/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    top: -60px;
    left: 0;
    bottom: 0;
    border-radius: 4rem;
    z-index: -1;
    width: 100%;
    height: 70%;

    @media screen and (min-width: $bp-l) {
      width: 65%;
      height: 70%;
      border-radius: 10rem;
    }
  }
}

.hero-main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: fit-content 1fr;
  align-items: start;
  justify-items: center;
  padding-top: 5rem;
  margin: 0 auto;

  @media screen and (min-width: $bp-l) {
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 10rem;
    gap: 2rem;
  }
}

.scroll-wrapper {
  align-self: center;
  width: fit-content;
  margin-top: 2rem;
}

.scroll {
  width: 60px;
  height: 60px;
  margin: 0 auto;
}

.eye {
  width: 60vw;
  align-self: start;
  margin-top: 2rem;

  @media screen and (min-width: $bp-l) {
    width: 30vw;
    height: 30vh;
  }
}

.text-wrapper {
  @media screen and (min-width: $bp-l) {
    max-width: 50%;
  }
}

.heading {
  font-size: $font-size-l;
  line-height: $line-height-l;

  @media screen and (min-width: $bp-m) {
    font-size: $font-size-xl;
    line-height: $line-height-xl;
  }

  @media screen and (min-width: $bp-l) {
    font-size: 3rem;
    line-height: 3rem;
  }

  @media screen and (min-width: $bp-xl) {
    font-size: $font-size-xxl;
    line-height: $line-height-xxl;
  }
}

.subheading {
  font-size: $font-size-m;
  line-height: $line-height-m;
  margin-top: 5rem;

  @media screen and (min-width: $bp-l) {
    font-size: $font-size-l;
    line-height: $line-height-l;
    margin-top: 10rem;
  }

  @media screen and (min-width: $bp-xl) {
    font-size: $font-size-xl;
    line-height: $line-height-xl;
    margin-top: 10rem;
  }
}

.underlined {
  position: relative;
  display: inline-block;
}

.underlined::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  height: 20px;
  width: 80%;
  border: solid 8px $color-violet;
  border-color: $color-violet transparent transparent transparent;
  border-radius: 50%;
}
</style>