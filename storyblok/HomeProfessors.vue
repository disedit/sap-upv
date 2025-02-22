<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" :id="blok.anchor" class="my-8 md:my-24">
    <SiteContainer padded>
      <h2 class="text-2xl text-gradient w-fit" :id="blok.anchor + 'Heading'">
        {{ blok.heading }}
      </h2>
      <UtilsRichText :text="blok.text" class="text-md text-slate-600 max-w-[70ch]" />
    </SiteContainer>
    <ul class="flex mt-8" :aria-labelledby="blok.anchor + 'Heading'">
      <div class="spacer" />
      <div class="professor-list">
        <StoryblokComponent
          v-for="component in blok.professors"
          :key="component._uid"
          :blok="component"
        />
      </div>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.professor-list {
  display: grid;
  grid-auto-columns: calc(5vw + 200px);
  grid-auto-rows: repeat(4, auto);
  overflow: auto;
  gap: calc(3vw + 1rem);
  grid-auto-flow: column;
}

.spacer {
  width: calc(((100vw - var(--spacing-container)) / 2) + var(--spacing-site));
  flex-shrink: 0;
  min-width: var(--spacing-site);
}
</style>