<script setup>
import { AssetsWindow } from '#components';

defineProps({ blok: Object })
</script>

<template>
  <section class="relative overflow-clip">
    <SiteContainer class="p-site min-h-fill grid lg:grid-cols-2 gap-16 h-full pb-menu-area">
      <div class="flex flex-col gap-6 justify-evenly">
        <h1 class="text-2xl md:text-3xl 2xl:text-4xl max-w-[20ch]">
          <span>{{ blok.headline }}</span>
          {{ ' ' }}
          <span class="bg-gradient-to-r from-sap-dark to-sap-light bg-clip-text text-transparent">{{ blok.headline_highlight }}</span>
        </h1>
        <UtilsRichText
          :text="blok.text"
          class="text-base md:text-md text-slate-600 max-w-[50ch]"
        />
        <div class="text-base md:text-md mt-[3vh]">
          <div class="font-mono uppercase text-sm md:text-base flex items-center justify-center md:justify-start gap-1 text-slate-800">
            <UtilsStatusCircle :color="blok.status_color" />
            {{ blok.status }}
          </div>
          <div class="flex gap-2 md:gap-site flex-wrap mt-6">
            <StoryblokComponent
              v-for="component in blok.ctas"
              :key="component._uid"
              :blok="component"
            />
          </div>
        </div>
      </div>
      <div class="relative hidden lg:block">
        <AssetsWindow class="block absolute left-0 top-4 bottom-4 h-full w-auto" />
      </div>
    </SiteContainer>
    <div class="hidden lg:block absolute top-0 right-0 bottom-0 w-[20rem] bg-linear-to-r from-white/0 to-white/100" />
  </section>
</template>
