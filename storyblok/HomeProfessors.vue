<script setup>
defineProps({ blok: Object })
</script>

<template>
  <SiteContainer v-editable="blok" tag="section" :id="blok.anchor" padded class="my-8 md:my-24">
    <pre>{{ blok }}</pre>
  </SiteContainer>
</template>
