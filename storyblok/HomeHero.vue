<script setup>
import { AssetsWindow } from '#components';

defineProps({ blok: Object })
</script>

<template>
  <section class="overflow-clip">
    <SiteContainer class="p-site min-h-fill grid grid-cols-2 gap-16 pt-[3vh] h-full pb-menu-area">
      <div class="flex flex-col gap-6 justify-evenly">
        <h1 class="text-3xl 2xl:text-4xl max-w-[20ch] hyphens-auto md:hyphens-none">
          <span>{{ blok.headline }}</span>
          {{ ' ' }}
          <span class="bg-gradient-to-r from-sap-dark to-sap-light bg-clip-text text-transparent">{{ blok.headline_highlight }}</span>
        </h1>
        <UtilsRichText
          :text="blok.text"
          class="text-md text-slate-600"
        />
        <div class="pt-[5vh]">
          <div class="font-mono uppercase flex items-center gap-1 text-slate-800">
            <UtilsStatusCircle :color="blok.status_color" />
            {{ blok.status }}
          </div>
          <div class="flex gap-site flex-wrap mt-6">
            <StoryblokComponent
              v-for="component in blok.ctas"
              :key="component._uid"
              :blok="component"
            />
          </div>
        </div>
      </div>
      <div class="relative">
        <AssetsWindow class="block absolute left-0 top-4 bottom-4 h-full w-auto" />
      </div>
    </SiteContainer>
  </section>
</template>
