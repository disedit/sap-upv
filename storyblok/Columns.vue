<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div
    v-editable="blok"
    :style="{
      '--columns': blok.columns || 2,
      '--template': blok.template || 'repeat(var(--columns), 1fr)'
    }"
    class="grid gap-site md:grid-cols-(--template)"
  >
    <StoryblokComponent
      v-for="component in blok.blocks"
      :key="component._uid"
      :blok="component"
    />
  </div>
</template>