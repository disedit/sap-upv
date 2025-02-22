<script setup>
defineProps({
  status: { type: String, required: true },
  statusColor: { type: String, default: 'green' }
})
</script>

<template>
  <div class="font-mono uppercase text-sm md:text-base flex items-center justify-center md:justify-start gap-2 text-slate-800 leading-tight">
    <UtilsStatusCircle :color="statusColor" />
    {{ status }}
  </div>
</template>