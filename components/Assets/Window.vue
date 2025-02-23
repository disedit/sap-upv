<script setup>
const { $gsap } = useNuxtApp()

onMounted(() => {
  document.addEventListener("DOMContentLoaded", function() {
    const animatedLines = document.querySelectorAll('.animated-line')

    animatedLines.forEach(line => {
      const length = line.getTotalLength() + 1
      $gsap.set(line, { strokeDasharray: length, strokeDashoffset: length })
    })

    $gsap.to('.animated-line', {
      strokeDashoffset: 0,
      duration: .5,
      ease: 'Power4.out',
      stagger: {
          each: .1
      }
    })
  })
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1008.42 669.42">
    <rect class="animated-line" x="1.21" y="1.21" width="1006" height="667" rx="23.01" ry="23.01"/>
    <circle class="animated-line" cx="35.71" cy="33.71" r="10.5"/>
    <circle class="animated-line" cx="65.71" cy="33.71" r="10.5"/>
    <circle class="animated-line" cx="95.71" cy="33.71" r="10.5"/>
    <rect class="animated-line" x="23.21" y="150.21" width="226" height="44" rx="10" ry="10"/>
    <rect class="animated-line" x="23.21" y="216.21" width="226" height="44" rx="10" ry="10"/>
    <rect class="animated-line" x="23.21" y="278.21" width="226" height="44" rx="10" ry="10"/>
    <rect class="animated-line" x="273.21" y="150.21" width="706.5" height="495" rx="10" ry="10"/>
    <line class="animated-line" x1="1.21" y1="63.21" x2="1007.21" y2="63.21"/>
    <rect class="animated-line" x="23.21" y="86.21" width="956.5" height="44" rx="10.27" ry="10.27"/>
    <rect class="animated-line" x="23.21" y="602.34" width="226" height="44" rx="10" ry="10"/>
    <polyline class="animated-line" points="314.66 569.73 402.71 481.67 445.39 524.35 636.86 332.87 738.15 434.16 948.04 224.27"/>
  </svg>
</template>

<style scoped>
.animated-line {
  stroke: var(--color-slate-400);
  fill: none;
  stroke-width: 1.5px;
}
</style>