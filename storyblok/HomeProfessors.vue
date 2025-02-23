<script setup>
defineProps({ blok: Object })

const showGrid = ref(false)

const { $gsap } = useNuxtApp()
const professors = ref()
onMounted(() => {
  $gsap.from('.professor', {
    opacity: 0,
    x: 50,
    stagger: {
        each: .1,
        ease: 'power1.out',
    },
    duration: .25,
    ease: "power4.out",
    scrollTrigger: {
      trigger: professors.value,
      start: 'top center'
    }
  })
})

const slider = ref(null)
const isDown = ref(false)
const startX = ref(null)
const scrollLeft = ref(null)
const velX = ref(0)
const momentumId = ref(null)

function onMouseDown (e) {
  isDown.value = true
  startX.value = e.pageX - slider.value.offsetLeft
  scrollLeft.value = slider.value.scrollLeft
  cancelMomentumTracking()
}

function onMouseLeave () {
  isDown.value = false
}

function onMouseUp () {
  isDown.value = false
  beginMomentumTracking()
}

function onMouseMove (e) {
  if (!isDown.value) return
  const x = e.pageX - slider.value.offsetLeft
  const walk = (x - startX.value)
  const prevScrollLeft = slider.value.scrollLeft
  slider.value.scrollLeft = scrollLeft.value - walk
  velX.value = slider.value.scrollLeft - prevScrollLeft
}

// Momentum
function onWheel () {
  cancelMomentumTracking()
}

function beginMomentumTracking () {
  cancelMomentumTracking()
  momentumId.value = requestAnimationFrame(momentumLoop)
}

function cancelMomentumTracking () {
  cancelAnimationFrame(momentumId.value)
}

function momentumLoop () {
  slider.value.scrollLeft += velX.value
  velX.value *= 0.95
  if (Math.abs(velX.value) > 0.5) {
    momentumId.value = requestAnimationFrame(momentumLoop)
  }
}
</script>

<template>
  <section v-editable="blok" ref="professors" :id="blok.anchor" class="my-8 md:my-24">
    <SiteContainer padded class="flex">
      <div>
        <h2 class="text-2xl text-gradient w-fit" :id="blok.anchor + 'Heading'">
          {{ blok.heading }}
        </h2>
        <UtilsRichText :text="blok.text" class="text-md text-slate-600 max-w-[70ch]" />
      </div>
      <div class="hidden lg:flex items-end ms-auto text-base">
        <button
          @click="showGrid = !showGrid"
          class="text-slate-500 underline hover:text-slate-800 cursor-pointer text-nowrap"
        >
          {{ showGrid ? 'Mostrar menos' : 'Ver todo' }}
        </button>
      </div>
    </SiteContainer>
    <div :class="{ 'layout-grid': showGrid, 'layout-scroll': !showGrid }">
      <ul
        ref="slider"
        class="professor-list"
        :aria-labelledby="blok.anchor + 'Heading'"
        @mousedown="onMouseDown"
        @mouseleave="onMouseLeave"
        @mouseup="onMouseUp"
        @mousemove.prevent="onMouseMove"
        @wheel="onWheel"
      >
        <div class="spacer" />
        <div class="professor-list-items pe-site">
          <StoryblokComponent
            v-for="component in blok.professors"
            :key="component._uid"
            :blok="component"
            class="professor"
          />
        </div>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.professor-list {
  user-select: none;

  &-items {
    display: grid;
    grid-auto-rows: repeat(4, auto);
    column-gap: calc(3vw + 1rem);
  }
}

.layout-scroll {
  .professor-list {
    overflow: auto;
    display: flex;
    margin-top: 2rem;
    cursor: grabbing;
    padding-bottom: 2rem;

    &-items {
      grid-auto-columns: calc(5vw + 200px);
      grid-auto-flow: column;
    }

    &::-webkit-scrollbar {
      width: 1.5rem;
    }

    &::-webkit-scrollbar-track {
      background: var(--color-white);
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: var(--color-white);
      border-radius: 2rem;
      border: .25rem var(--color-white) solid;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: var(--color-white);
    }
  }

  .spacer {
    width: calc(((100vw - var(--spacing-container)) / 2) + var(--spacing-site));
    flex-shrink: 0;
    min-width: var(--spacing-site);
  }
}

.layout-grid {
  .professor-list {
    max-width: var(--spacing-container);
    margin-inline: auto;
    padding: var(--spacing-site);

    &-items {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .spacer {
    display: none;
  }
}

</style>