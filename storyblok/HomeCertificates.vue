<script setup>
defineProps({ blok: Object })

const certificates = ref(null)
const { $gsap } = useNuxtApp()

onMounted(() => {
  $gsap.from(certificates.value, {
    opacity: 0,
    y: '15%',
    duration: .5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: certificates.value,
        start: "top 70%"
    }
  })
})
</script>

<template>
  <section v-editable="blok" :id="blok.anchor">
    <UtilsBlockHeader
      v-if="blok.picture?.filename"
      :picture="blok.picture"
      :position="blok.picture_position"
    />
    <SiteContainer padded class="mb-8 md:mn-24">
      <div class="card bg-white/80 backdrop-blur-md grid md:grid-cols-2">
        <div class="p-site lg:ps-12 self-center">
          <h2 class="text-gradient leading-none text-xl w-fit mb-4">
            {{ blok.heading }}
          </h2>
          <UtilsRichText
            :text="blok.text"
            class="text-base text-slate-800 max-w-[100ch] text-balance"
          />
        </div>
        <div ref="certificates" class="flex flex-col md:flex-row p-site">
          <article
            v-for="certificate in blok.certificates"
            v-editable="certificate"
            :key="certificate._uid"
            class="p-site flex flex-col gap-site bg-white md:my-site max-w-[500px] mx-auto rounded-xl shadow-lg"
          >
            <div>
              <img
                v-if="certificate.image.filename"
                :src="certificate.image.filename"
                :alt="certificate.image.alt"
                class="h-[4em] w-auto mix-blend-multiply"
              />
            </div>
            <UtilsRichText
              :text="certificate.description"
              class="text-[1.25rem]"
            />
          </article>
        </div>
      </div>
    </SiteContainer>
  </section>
</template>
