<script setup>
defineProps({ blok: Object })
</script>

<template>
  <SiteContainer v-editable="blok" tag="section" class="p-site">
    <div class="border-[1.5px] border-slate-400 rounded-2xl text-slate-800 overflow-clip">
      <div class="flex flex-col md:flex-row divide-y-[1.5px] md:divide-y-0 md:divide-x-[1.5px] divide-slate-400">
        <StoryblokComponent
          v-for="feature in blok.features"
          :key="feature._uid"
          :blok="feature"
          class="p-site basis-[50%]"
        />
      </div>
      <div class="divider-top p-site">
        <div class="text-center font-bold text-base text-balance mb-site leading-tight">
          {{ blok.logos_text }}
        </div>
        <div class="flex flex-wrap justify-evenly">
          <img
            v-for="logo in blok.logos"
            :src="logo.filename"
            :alt="logo.alt"
            :key="logo.id"
            class="h-[3rem]"
          />
        </div>
      </div>
    </div>
  </SiteContainer>
</template>
