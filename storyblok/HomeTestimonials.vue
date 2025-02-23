<script setup>
import { Vue3Marquee } from 'vue3-marquee'

const props = defineProps({ blok: Object })

const { hasRichText } = useUtils()

const rows = computed(() => {
  const { testimonials } = props.blok
  const mid = Math.ceil(testimonials.length / 2)
  const firstHalf = testimonials.slice(0, mid)
  const secondHalf = testimonials.slice(mid)

  return [firstHalf, secondHalf]
})

const { $gsap } = useNuxtApp()
const wrapper = ref()
onMounted(() => {
  setTimeout(() => {
    $gsap.from('.testiline', {
      opacity: 0,
      x: '2%',
      stagger: {
          each: .1,
          ease: 'power1.out',
      },
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: wrapper.value,
        start: 'top 70%',
      }
    })
  }, 1000)
})
</script>

<template>
  <section v-editable="blok" ref="wrapper" :id="blok.anchor" class="my-8 md:mt-24 md:mb-40">
    <SiteContainer padded>
      <h2 class="text-2xl text-gradient w-fit hyphens-auto mb-4" :id="blok.anchor + 'Heading'">
        {{ blok.heading }}
      </h2>
      <UtilsRichText
        v-if="hasRichText(blok.text)"
        :text="blok.text"
        class="text-md text-slate-600 max-w-[70ch]"
      />
    </SiteContainer>
    <div class="flex flex-col gap-site">
      <Vue3Marquee
        v-for="(row, r) in rows"
        :key="r"
        :direction="r === 0 ? 'normal' : 'reverse'"
        :duration="parseInt(blok.marquee_duration) || 100"
        class="min-h-250px md:min-h-[12vw]"
        :style="{
          overflow: 'auto !important'
        }"
      >
        <div class="testiline flex gap-site me-site">
          <StoryblokComponent
            v-for="component in row"
            :key="component._uid"
            :blok="component"
            class="w-[90vw] md:w-[30vw] min-h-250px md:min-h-[12vw] shrink-0"
          />
          <StoryblokComponent
            v-for="component in row"
            :key="component._uid"
            :blok="component"
            class="w-[90vw] md:w-[30vw] min-h-250px md:min-h-[12vw] shrink-0"
          />
        </div>
      </Vue3Marquee>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>