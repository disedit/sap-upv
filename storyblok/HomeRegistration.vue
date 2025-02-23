<script setup>
defineProps({ blok: Object })

const showFinancing = ref(false)
</script>

<template>
  <SiteContainer v-editable="blok" :id="blok.anchor" tag="section" padded class="my-8 md:my-24">
    <div class="relative">
      <div class="card border-sap-dark relative bg-white z-10">
        <div class="grid md:grid-cols-[1fr_3fr]">
          <div class="md:border-r-[1.5px] border-slate-400 p-site">
            <UtilsStatus
              :status="blok.status"
              :status-color="blok.status_color"
              class="justify-start"
            />
            <h2 class="text-xl text-gradient w-fit my-2">
              {{ blok.heading }}
            </h2>

            <p class="text-base text-slate-700 leading-tight">
              {{ blok.text }}
            </p>
            <p class="text-lg mb-4">
              {{ blok.price }}
            </p>
            <p class="text-base text-slate-700 leading-tight">
              {{ blok.financed_text }}
            </p>
            <p class="text-lg">
              {{ blok.financed_price }}
            </p>
            <a
              href="#financiacion"
              class="text-slate-600 text-sm underline hover:text-slate-900"
              @click="showFinancing = true"
            >
              Opciones de financiación
            </a>

            <div class="mt-16 text-md">
              <StoryblokComponent
                v-for="component in blok.cta"
                :key="component._uid"
                :blok="component"
                class="w-full"
              />
            </div>
          </div>
          <div class="flex flex-col">
            <div class="p-site text-base text-slate-800">
              {{ blok.features_text }}
            </div>
            <div class="divider-top flex flex-col md:flex-row divide-slate-400 divide-y-[1.5px] md:divide-y-0 md:divide-x-[1.5px] grow">
              <StoryblokComponent
                v-for="feature in blok.features"
                :key="feature._uid"
                :blok="feature"
                class="p-site basis-[50%]"
              />
            </div>
          </div>
        </div>
        <div id="financiacion" :class="['divider-top hover:bg-slate-100', { 'bg-slate-100': showFinancing }]">
          <button
            class="group px-site py-4 text-md flex items-center gap-1 hover:bg-slate-100 cursor-pointer w-full text-left"
            @click="showFinancing = !showFinancing"
            :aria-expanded="showFinancing ? 'true' : 'false'"
            aria-controls="financingContents"
          >
            {{ blok.financing_heading }}
            <Icon name="humbleicons:chevron-right" class="group-aria-[expanded=true]:rotate-90 transition" />
          </button>
          <Transition name="slide">
            <div v-if="showFinancing" id="financingContents" class="p-site pt-0 text-base">
              <UtilsRichText :text="blok.financing_text" />

              <div class="grid grid-cols-12 bg-white rounded-xl overflow-clip mt-4 leading-tight">
                <div class="flex flex-col md:flex-row gap-2 bg-linear-to-r from-sap-dark to-sap-light text-white p-4 col-span-6 md:col-span-5 xl:col-span-4 font-semibold rounded-xl">
                  <span>{{ blok.financing_part1_title }}</span>
                  <span class="mt-auto md:ms-auto">{{ blok.financing_part1_price }}</span>
                </div>
                <div class="flex flex-col md:flex-row gap-4 p-4 col-span-6 md:col-span-7 xl:col-span-8">
                  <span>{{ blok.financing_part2_title }}</span>
                  <span class="mt-auto md:ms-auto">{{ blok.financing_part2_price }}</span>
                </div>
              </div>
              <div class="grid grid-cols-12 text-slate-600 text-sm">
                <div class="p-4 col-span-6 md:col-span-5 xl:col-span-4">
                  {{ blok.financing_part1_text }}
                </div>
                <div class="p-4 col-span-6 md:col-span-7 xl:col-span-8">
                  {{ blok.financing_part2_text }}
                </div>
              </div>
              <div class="mt-4 prose">
                <UtilsRichText :text="blok.financing_note" />
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <div class="absolute inset-0 bg-linear-to-br from-sap-dark to-sap-light blur-xl opacity-60 z-0" />
    </div>
  </SiteContainer>
</template>
