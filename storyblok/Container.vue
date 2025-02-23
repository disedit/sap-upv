<script setup>
defineProps({ blok: Object })
</script>

<template>
  <SiteContainer v-editable="blok" :tag="blok.tag" :padded="blok.padded">
    <StoryblokComponent
      v-for="component in blok.blocks"
      :key="component._uid"
      :blok="component"
    />
  </SiteContainer>
</template>