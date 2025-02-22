<script setup>
const props = defineProps({
  text: {
    type: Object,
    required: true
  }
})

const renderedContent = computed(() => {
  return renderRichText(props.text)
})
</script>

<template>
  <div v-html="renderedContent" class="rich-text-rendered prose" />
</template>
