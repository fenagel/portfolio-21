<template>
  <main class="content">
    <div class="stack">
      <div class="stack__card">🐶</div>
      <div class="stack__card">🐱</div>
      <div class="stack__card">😂</div>
      <div class="stack__card">👽</div>
      <div class="stack__card">👌</div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
/* .modern {
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
} */

/*
.workflow-scroll-wrap {
  height: 300vh;
  background-color: $color-gray;
}

.sticky-wrap {
  position: sticky;
  top: 0;
  z-index: 1;
}

.section-workflow {
  overflow: hidden;
  height: 100vh;
}

.container-workflow {
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
}

.cards-workflow {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  position: absolute;
  width: 100%;
  height: 380px;
  padding: 65px 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px hsl(0deg 0% 59% / 20%);
  transform-origin: 50% 0%;
} */

.stack__card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  position: sticky;
  top: 0;
  box-shadow: 0 -1px 3px rgba($color-black, 0.1),
    0 -1px 2px rgba($color-black, 0.25);

  &:nth-child(n + 1) {
    background-color: $color-gold;
  }
  &:nth-child(2n + 1) {
    background-color: $color-red;
  }
}
</style>
