<script setup>
const settings = await useSettings()
</script>

<template>
  <header>
    <pre>{{ settings }}</pre>
  </header>
</template>
