<script setup>
import { tsParticles } from 'tsparticles-engine'
import { onMounted, ref } from 'vue'

const particlesContainer = ref(null)

const particlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 400,
      },
    },
    color: {
      value: '#985ffd',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#ff0000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: '',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 2,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 1.5,
      random: false,
      anim: {
        enable: false,
        speed: 5,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: '#fff',
      opacity: 1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 3000,
        rotateY: 3000,
      },
    },
    array: [],
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onHover: {
        enable: true,
        mode: 'grab',
      },
      onClick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 100,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 200,
        size: 80,
        duration: 0.4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
    mouse: {},
  },
  retina_detect: false,
}

async function particlesLoaded(container) {
  // console.log('Particles container loaded', container)
}

onMounted(async () => {
  if (particlesContainer.value) {
    await tsParticles.load('particles-js', particlesOptions)
    particlesLoaded(tsParticles.domItem(0))
  }
})
</script>

<template>
  <div
    id="particles-js"
    ref="particlesContainer"
    style="
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 0;
      pointer-events: none;
    "
  />
</template>

<style scoped>
/* Ensure the login form appears above the particles */
:deep(.authentication-basic) {
  position: relative;
  z-index: 1;
}
</style>
