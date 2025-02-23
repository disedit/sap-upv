<script setup>
defineProps({ blok: Object })
</script>

<template>
  <UtilsRichText
    :text="blok.text"
    :class="{
      'text-base': blok.text_size === 'base',
      'text-md': blok.text_size === 'md',
      'text-lg': blok.text_size === 'lg'
    }"
  />
</template>
