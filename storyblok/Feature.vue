<script setup>
defineProps({
  blok: { type: Object, required: true }
})
</script>

<template>
  <article v-editable="blok">
    <Icon v-if="blok.icon" :name="blok.icon" class="text-2xl text-sap-dark" />
    <h2 class="font-semibold text-md my-2 text-gradient leading-snug">
      {{ blok.heading }}
    </h2>
    <UtilsRichText
      :text="blok.text"
      class="text-base text-slate-800 md:mb-6"
    />
  </article>
</template>