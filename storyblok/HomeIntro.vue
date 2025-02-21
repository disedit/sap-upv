<script setup>
defineProps({ blok: Object })
</script>

<template>
  <SiteContainer v-editable="blok" tag="section" padded class="my-8 md:my-24">
    <h2 class="text-xl bg-gradient-to-r from-sap-dark to-sap-light bg-clip-text text-transparent w-fit mb-4">
      {{ blok.heading }}
    </h2>
    <div class="grid md:grid-cols-2 gap-24">
      <div class="text-lg leading-[1.25] text-slate-500 max-w-[45ch]">
        <p
          v-for="fragment in blok.text_fragments"
          v-editable="fragment"
          :key="fragment._uid"
          class="mb-[.75em]"
        >
          {{ fragment.text }}
        </p>
      </div>
      <div>
        <div>
          <div
            v-for="fragment in blok.text_fragments"
            :key="fragment._uid"
          >
            <NuxtPicture
              v-if="fragment.picture.filename"
              format="avif,webp"
              :src="fragment.picture.filename"
              :img-attrs="{ alt: fragment.picture.alt }"
            />
          </div>
        </div>
      </div>
    </div>
  </SiteContainer>
</template>
