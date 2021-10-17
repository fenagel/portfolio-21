import Vue from 'vue'

const fadeInObserver = new IntersectionObserver((entries, fadeInObserver) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('fade-in')
      fadeInObserver.unobserve(entry.target)
    }
  })
})

Vue.directive('fade-in-left', {
  bind: (el) => {
    el.classList.add('fade-in-left')
    fadeInObserver.observe(el)
  },
})

Vue.directive('fade-in-down', {
  bind: (el) => {
    el.classList.add('fade-in-down')
    fadeInObserver.observe(el)
  },
})

Vue.directive('fade-in-right', {
  bind: (el) => {
    el.classList.add('fade-in-right')
    fadeInObserver.observe(el)
  },
})

Vue.directive('fade-in-up', {
  bind: (el) => {
    el.classList.add('fade-in-up')
    fadeInObserver.observe(el)
  },
})
