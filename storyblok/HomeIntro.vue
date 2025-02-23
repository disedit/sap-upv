<script setup>
defineProps({ blok: Object })

const { $gsap } = useNuxtApp()
const textContainer = ref()
const picturesContainer = ref()

onMounted(() => {
    const words = document.querySelectorAll('.word')
    const pictures = document.querySelectorAll('.intro-picture')
    const picturesSm = document.querySelectorAll('.intro-picture-sm')
    let tlWords = $gsap.timeline({
      scrollTrigger: {
        trigger: textContainer.value,
        start: "top 50%",
        end: "bottom 70%",
        scrub: .5
      }
    })
    let tlPictures = $gsap.timeline({
      scrollTrigger: {
        trigger: textContainer.value,
        start: "top 150%",
        end: "bottom 70%",
        scrub: .5
      }
    })
    let tlPicturesSm = $gsap.timeline({
      scrollTrigger: {
        trigger: picturesContainer.value,
        start: "top 100%",
        end: "bottom 70%",
        scrub: .5,
      }
    })
    tlWords.from(words, {
      opacity: 0.2,
      duration: 0.4,
      ease: "power1.out",
      stagger: { each: 0.4 }
    })
    tlPictures.from(pictures, {
      opacity: 0,
      rotate: 5,
      x: 100,
      y: 100,
      duration: 0.2,
      ease: "power1.out",
      stagger: { each: 0.4 }
    })
    tlPicturesSm.from(picturesSm, {
      opacity: 0,
      rotate: 5,
      x: 100,
      y: 100,
      duration: 0.2,
      ease: "power1.out",
      stagger: { each: 0.4 }
    })
})
</script>

<template>
  <div class="overflow-x-clip">
    <SiteContainer v-editable="blok" tag="section" :id="blok.anchor" padded class="my-8 md:my-24">
      <h2 class="text-2xl text-gradient w-fit mb-4">
        {{ blok.heading }}
      </h2>
      <div class="grid lg:grid-cols-2 gap-24">
        <div ref="textContainer" class="text-lg leading-tight text-slate-800 lg:max-w-[45ch]">
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
          <div class="lg:hidden sticky bottom-28 pt-6">
            <div class="relative h-[20vh] min-h-[11rem]">
              <div
                v-for="(picture, p) in blok.pictures"
                :key="picture._uid"
                class="absolute inset-0 flex justify-center"
                :style="{
                  rotate: `-${p * 2}deg` 
                }"
              >
                <NuxtPicture
                  v-if="picture.filename"
                  format="avif,webp"
                  :src="picture.filename"
                  :img-attrs="{
                    alt: picture.alt,
                    class: ['rounded-2xl h-full max-w-auto w-auto mx-auto', { 'intro-picture-sm' : p > 0}]
                  }"
                  preload
                  sizes="500px"
                />
              </div>
            </div>
          </div>
        </div>
        <div ref="picturesContainer" class="hidden lg:block">
          <div class="sticky top-[calc(var(--spacing-nav-area)+2rem)]">
            <div class="relative h-[50vh]">
              <div
                v-for="(picture, p) in blok.pictures"
                :key="picture._uid"
                class="absolute top-0 left-0 bottom-0 flex w-[100vw]"
                :style="{
                  rotate: `-${p * 1.1}deg` 
                }"
              >
                <NuxtPicture
                  v-if="picture.filename"
                  format="avif,webp"
                  :src="picture.filename"
                  :img-attrs="{
                    alt: picture.alt,
                    class: ['rounded-3xl h-full img-reset w-auto', { 'intro-picture-sm' : p > 0}],
                  }"
                  preload
                  sizes="500px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteContainer>
  </div>
</template>
