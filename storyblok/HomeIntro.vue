<script setup>
defineProps({ blok: Object })

const { $gsap } = useNuxtApp()
const textContainer = ref()

onMounted(() => {
    const words = document.querySelectorAll('.word')
    let tl = $gsap.timeline({
      scrollTrigger: {
        trigger: textContainer.value,
        start: "top 70%",
        end: "bottom 70%",
        scrub: .5
      }
    })
    tl.from(words, { opacity: 0.2, duration: 0.4, ease: "power1.out", stagger: { each: 0.4 } })
})
</script>

<template>
  <SiteContainer v-editable="blok" tag="section" :id="blok.anchor" padded class="my-8 md:my-24">
    <h2 class="text-2xl text-gradient w-fit mb-4">
      {{ blok.heading }}
    </h2>
    <div class="grid md:grid-cols-2 gap-24">
      <div ref="textContainer" class="text-lg leading-[1.25] text-slate-800 max-w-[45ch]">
        <p
          v-for="fragment in blok.text_fragments"
          v-editable="fragment"
          :key="fragment._uid"
          class="mb-[.75em]"
        >
          <span v-for="(word, w) in fragment.text.split(' ')" :key="w" class="word">
            {{ word }} {{ ' ' }}
          </span>
        </p>
      </div>
      <div>
        <div class="sticky top-nav-area">
          <div
            v-for="fragment in blok.text_fragments"
            :key="fragment._uid"
          >
            <NuxtPicture
              v-if="fragment.picture.filename"
              format="avif,webp"
              :src="fragment.picture.filename"
              :img-attrs="{ alt: fragment.picture.alt }"
            />
          </div>
        </div>
      </div>
    </div>
  </SiteContainer>
</template>
