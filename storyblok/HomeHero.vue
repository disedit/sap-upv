<script setup>
import { AssetsWindow } from '#components';

defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="relative overflow-clip">
    <SiteContainer padded class="min-h-fill grid lg:grid-cols-2 gap-16 h-full pb-menu-area">
      <div class="flex flex-col gap-6 justify-evenly">
        <div>
          <h1 class="text-2xl lg:text-3xl 2xl:text-4xl max-w-[20ch] leading-tight lg:leading-[1] text-balance">
            <span>{{ blok.headline }}</span>
            {{ ' ' }}
            <span class="text-gradient">{{ blok.headline_highlight }}</span>
          </h1>
          <UtilsRichText
            :text="blok.text"
            class="text-base md:text-md text-slate-600 max-w-[50ch] leading-tight mt-4 lg:mt-6"
          />
        </div>
        <div class="text-base md:text-md mt-[3vh]">
          <UtilsStatus :status="blok.status" :status-color="blok.status_color" :status-pulse="blok.status_pulse" />
          <div class="flex gap-2 md:gap-site flex-wrap mt-6">
            <StoryblokComponent
              v-for="component in blok.ctas"
              :key="component._uid"
              :blok="component"
            />
          </div>
        </div>
      </div>
      <div class="window-container relative hidden lg:block">
        <AssetsWindow class="block absolute left-0 top-4 bottom-4 h-full w-auto" />
      </div>
    </SiteContainer>
    <div class="hidden lg:block absolute top-0 right-0 bottom-0 w-[20rem] bg-linear-to-r from-white/0 to-white/100" />
  </section>
</template>
