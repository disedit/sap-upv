<script setup>
const props = defineProps({ blok: Object })

const { internalLink } = useLinks()

const commonClasses = 'flex gap-16 py-3 px-6 items-center justify-center transition'

const variants = {
  primary: 'relative bg-linear-to-r from-sap-dark to-sap-light font-bold text-white rounded-xl z-1 group-hover:scale-[1.05]',
  link: 'underline decoration-2 underline-offset-2 text-slate-500 hover:text-slate-800'
}

const variantClasses = computed(() => {
  return variants[props.blok.variant]
})
</script>

<template>
  <div class="relative group w-full md:w-auto">
    <NuxtLink
      :to="internalLink(blok.link)"
      :class="[commonClasses, variantClasses]"
    >
      {{ blok.label }}
      <Icon v-if="blok.icon" :name="blok.icon" class="ms-auto" />
    </NuxtLink>
    <div
      v-if="blok.variant === 'primary'"
      class="absolute inset-0 bg-linear-to-r from-sap-dark to-sap-light blur-sm group-hover:blur-md opacity-75 transition group-hover:scale-[1.05]"
    />
  </div>
</template>
