<script setup>
defineProps({ blok: Object })
</script>

<template>
  <SiteContainer v-editable="blok" tag="section" class="p-site">
    <div class="border-[1.5px] border-slate-400 rounded-2xl text-slate-800 overflow-clip">
      <div class="flex flex-col md:flex-row divide-y-[1.5px] md:divide-y-0 md:divide-x-[1.5px] divide-slate-400">
        <div
          v-for="feature in blok.features"
          :key="feature._uid"
          class="p-site basis-[50%]"
          v-editable="feature"
        >
          <Icon v-if="feature.icon" :name="feature.icon" class="text-2xl text-sap-dark" />
          <h2 class="font-semibold text-md my-2 bg-gradient-to-r from-sap-dark to-sap-light bg-clip-text text-transparent leading-snug">
            {{ feature.heading }}
          </h2>
          <UtilsRichText
            :text="feature.text"
            class="text-base text-slate-800 md:mb-6"
          />
        </div>
      </div>
      <div class="border-t-[1.5px] border-slate-400 p-site">
        <div class="text-center font-bold text-md md:text-base text-balance mb-site">
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
