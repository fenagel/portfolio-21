<template>
  <header class="nav-header" :class="menuVisible ? 'show-menu' : ''">
    <div class="header-row">
      <div class="logo-wrapper">
        <Nuxt-Link class="logo-link" to="/">FN</Nuxt-Link>
      </div>

      <div class="quick-menu-wrapper">
        <ul>
          <li><Nuxt-Link to="/">Home</Nuxt-Link></li>
          <li><Nuxt-Link to="/about">About Me</Nuxt-Link></li>
          <li><Nuxt-Link to="/approach">My Approach</Nuxt-Link></li>
          <li><Nuxt-Link to="/contact">Contact</Nuxt-Link></li>
        </ul>
      </div>

      <div class="menu-wrapper">
        <a
          id="js-toggle-menu"
          class="menu-trigger"
          :class="menuVisible ? 'rotate' : ''"
          @click="showMenu"
        >
          <span>toggle menu</span>
          <div class="icon-hamburger"><span></span></div>
        </a>
      </div>
      <div class="overlay-menu">
        <ul>
          <ul>
            <li><Nuxt-Link to="/" class="overlay-link">Home</Nuxt-Link></li>
            <li>
              <Nuxt-Link to="/about" class="overlay-link">About Me</Nuxt-Link>
            </li>
            <li>
              <Nuxt-Link to="/approach" class="overlay-link"
                >My Approach</Nuxt-Link
              >
            </li>
            <li>
              <Nuxt-Link to="/contact" class="overlay-link">Contact</Nuxt-Link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      menuVisible: false,
    }
  },
  methods: {
    showMenu() {
      this.menuVisible = !this.menuVisible
    },
  },
}
</script>
<style lang="scss" scoped>
.nav-header {
  position: fixed;
  width: 100%;
  z-index: 10;
  animation-name: anim-nav-header;
  animation-duration: 0.6s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0s;
  color: $color-red;

  @media screen and (min-width: $bp-l) {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  @media screen and (min-width: $bp-xl) {
    padding-top: 2.25rem;
    padding-bottom: 2.25rem;
  }
}

.header-row {
  max-width: $container-width;
  margin-right: auto;
  margin-left: auto;
  padding: 0 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: $bp-l) {
    padding: 0 2.5rem;
  }

  @media screen and (min-width: $bp-xl) {
    padding: 0 5rem;
  }
}

.logo-wrapper {
  font-family: $font-family-display;
  font-size: $font-size-l;
}

.logo-link {
  &:hover,
  &:visited {
    color: $color-red;
  }
}

.menu-wrapper {
  cursor: pointer;

  @media screen and (min-width: $bp-l) {
    padding: 1.125rem 0;
  }
}

.rotate {
  animation-name: anim-nav-button-rotate;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-direction: normal;
  animation-fill-mode: none;
  backface-visibility: hidden;
  perspective: 1000px;
}

.icon-hamburger {
  position: relative;
  width: 2.5rem;
  height: 1rem;
  color: $color-red;
  transition-property: color, transform;
  transition-duration: 0.4s;
  transition-timing-function: ease-out;

  @media screen and (min-width: $bp-l) {
    width: 3.125rem;
    height: 1.375rem;
  }

  &::before {
    height: 0.125rem;
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    background-color: currentColor;
    top: 0;
    transition-property: transform, top;
    transition-duration: 0.4s;
    transition-timing-function: ease-out;
  }

  span {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    height: 0.125rem;
    background-color: currentColor;
    transform: translateY(-50%);
    transition-property: opacity;
    transition-duration: 0.4s;
    transition-timing-function: ease-out;
  }

  &::after {
    bottom: 0;
    transition-property: transform, bottom;
    transition-duration: 0.4s;
    transition-timing-function: ease-out;
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 0.125rem;
    background-color: currentColor;
  }
}

.overlay-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $color-black;
  opacity: 0;
  z-index: -1;
  transform: translateY(-100%);
  transition-property: transform, opacity;
  transition-delay: 0.3s, 0s;
  transition-duration: 0.3s;
  transition-timing-function: step-start, ease-out;

  ul {
    position: relative;
    color: $color-red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}

.menu-trigger > span {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}

.quick-menu-wrapper {
  ul {
    display: flex;
  }

  li {
    a {
      color: $color-red;

      &:hover {
        opacity: 0.9;
      }

      &:active,
      &:visited {
        color: $color-red;
      }
    }

    @media screen and (min-width: $bp-l) {
      padding-left: 2.5rem;
    }
  }
}

.overlay-link {
  color: $color-white;
  font-family: $font-family-display;
  font-size: $font-size-xxl;
}

.show-menu {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0s, 0;
  transition-duration: 0.6s;
  transition-timing-function: step-start, ease-out;

  .logo-wrapper,
  .quick-menu-wrapper {
    display: none;
  }

  .header-row {
    justify-content: end;
  }

  .overlay-menu {
    opacity: 1;
    transform: translateY(0);

    li {
      margin-top: 2rem;
    }
  }

  .icon-hamburger {
    span {
      opacity: 0;
    }

    &::before {
      top: 50%;
      transform: translateY(-50%) rotateZ(45deg);
    }

    &::after {
      bottom: 50%;
      transform: translateY(50%) rotateZ(-45deg);
    }
  }
}

@keyframes anim-nav-header {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes anim-nav-button-rotate {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
