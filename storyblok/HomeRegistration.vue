<script setup>
defineProps({ blok: Object })
</script>

<template>
  <SiteContainer v-editable="blok" :id="blok.anchor" tag="section" padded class="my-8 md:my-24">
    <div class="relative">
      <div class="card border-sap-dark relative bg-white z-10">
        <div class="grid grid-cols-[1fr_3fr]">
          <div class="divider-right p-site">
            <UtilsStatus :status="blok.status" :status-color="blok.status_color" />
            <h2 class="text-xl text-gradient w-fit mt-2">
              {{ blok.heading }}
            </h2>
          </div>
          <div>
            <div class="p-site text-base text-slate-800">
              {{ blok.features_text }}
            </div>
            <div class="divider-top flex divide-slate-400 divide-y-[1.5px] md:divide-y-0 md:divide-x-[1.5px]">
              <StoryblokComponent
                v-for="feature in blok.features"
                :key="feature._uid"
                :blok="feature"
                class="p-site basis-[50%]"
              />
            </div>
          </div>
        </div>
        <div class="divider-top p-site">
          Financiación
        </div>
      </div>
      <div class="absolute inset-0 bg-linear-to-br from-sap-dark to-sap-light blur-xl opacity-60 z-0" />
    </div>
  </SiteContainer>
</template>
