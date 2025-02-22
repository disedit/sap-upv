<script setup>
defineProps({
  blok: { type: Object, required: true }
})
</script>

<template>
  <article
    v-editable="blok"
    :class="['flex flex-col', {
      'md:pt-24': blok.align === 'middle'
    }]"
  >
    <Icon v-if="blok.icon" :name="blok.icon" class="text-2xl text-sap-dark mb-3" />
    <h2 v-if="blok.heading" class="font-semibold text-md my-2 text-gradient leading-tight">
      {{ blok.heading }}
    </h2>
    <UtilsRichText
      :text="blok.text"
      class="text-base text-slate-800 md:mb-6"
    />
  </article>
</template>