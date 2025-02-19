<script setup>
defineProps({
  color: {
    type: String,
    default: 'green'
  }
})
</script>

<template>
  <div
    :class="['h-[1em] w-[1em] rounded-full', {
      'bg-green-500': color === 'green',
      'bg-red-500': color === 'red',
      'bg-yellow-500': color === 'yellow',
      'bg-blue-500': color === 'blue'
    }]"
  />
</template>