<script setup>
defineProps({
  color: {
    type: String,
    default: 'green'
  },
  pulse: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div
    :class="['h-[1em] w-[1em] rounded-full', {
      'bg-green-500 color-green': color === 'green',
      'bg-red-500 color-red': color === 'red',
      'bg-amber-500 color-orange': color === 'orange',
      'bg-blue-500 color-blue': color === 'blue',
      'bg-slate-500 color-gray': color === 'gray',
      'pulse': pulse
    }]"
  />
</template>

<style>
.pulse {
  box-shadow: 0 0 0 0 var(--color);
  transform: scale(1);
  animation: pulse 2s infinite;
}

.color-green {
  --color: var(--color-green-500);
}

.color-red {
  --color: var(--color-red-500);
}

.color-orange {
  --color: var(--color-amber-500);
}

.color-blue {
  --color: var(--color-blue-500);
}

.color-gray {
  --color: var(--color-slate-500);
}

@keyframes pulse {
  0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 oklch(from var(--color) l c h / 0.7);
  }

  70% {
      transform: scale(1);
      box-shadow: 0 0 0 .4em oklch(from var(--color) l c h / 0);
  }

  100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 oklch(from var(--color) l c h / 0);
  }
}
</style>