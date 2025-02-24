<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" :id="blok.anchor">
    <UtilsBlockHeader
      v-if="blok.picture?.filename"
      :picture="blok.picture"
      :position="blok.picture_position"
    />
    <SiteContainer padded>
      <div class="bg-white/80 backdrop-blur-md border-[1.5px] border-slate-400 rounded-2xl text-slate-800 overflow-clip">
        <div class="flex flex-col md:flex-row divider-cols divide-slate-400">
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
  </section>
</template>
