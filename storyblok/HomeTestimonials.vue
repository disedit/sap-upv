<script setup>
const props = defineProps({ blok: Object })

const { hasRichText } = useUtils()

const rows = computed(() => {
  const { testimonials } = props.blok
  const mid = Math.ceil(testimonials.length / 2)
  const firstHalf = testimonials.slice(0, mid)
  const secondHalf = testimonials.slice(mid)

  return [firstHalf, secondHalf]
})
</script>

<template>
  <section v-editable="blok" :id="blok.anchor" class="my-8 md:mt-24 md:mb-40">
    <SiteContainer padded>
      <h2 class="text-2xl text-gradient w-fit" :id="blok.anchor + 'Heading'">
        {{ blok.heading }}
      </h2>
      <UtilsRichText
        v-if="hasRichText(blok.text)"
        :text="blok.text"
        class="text-md text-slate-600 max-w-[70ch]"
      />
    </SiteContainer>
    <div class="flex flex-col gap-site">
      <div
        v-for="(row, r) in rows"
        :key="r"
        class="flex gap-site"
      >
        <StoryblokComponent
          v-for="component in row"
          :key="component._uid"
          :blok="component"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>