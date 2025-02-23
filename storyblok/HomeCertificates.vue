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
    <SiteContainer padded class="mb-8 md:mn-24">
      <div class="card bg-white/80 backdrop-blur-md">
        <div class="p-site">
          <h2 class="text-gradient leading-none text-xl w-fit mb-4">
            {{ blok.heading }}
          </h2>
          <UtilsRichText
            :text="blok.text"
            class="text-base text-slate-800 max-w-[100ch] text-balance"
          />
        </div>
        <div class="divider-top flex flex-col md:flex-row divide-slate-400 divide-y-[1.5px] md:divide-y-0 md:divide-x-[1.5px]">
          <article
            v-for="certificate in blok.certificates"
            v-editable="certificate"
            :key="certificate._uid"
            class="basis-[50%] p-site flex flex-col gap-site"
          >
            <div>
              <img
                v-if="certificate.image.filename"
                :src="certificate.image.filename"
                :alt="certificate.image.alt"
                class="h-[4em] w-auto"
              />
            </div>
            <UtilsRichText
              :text="certificate.description"
              class="mt-auto text-base"
            />
          </article>
        </div>
      </div>
    </SiteContainer>
  </section>
</template>
