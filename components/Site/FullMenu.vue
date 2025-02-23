<script setup>
defineProps({
  items: { type: Array, required: true },
  socials: { type: Array, required: true }
})

const emit = defineEmits(['close'])

const { internalLink } = useLinks()
</script>

<template>
  <div class="full-menu fixed bottom-0 left-0 right-0 bg-slate-200/80 backdrop-blur-md rounded-tl-3xl rounded-tr-3xl z-[1100] max-h-[80vh] overflow-auto">
    <SiteContainer padded>
      <div class="flex gap-site">
        <h2 class="text-lg max-w-[20ch] leading-[1.1] mb-4">
          Máster de Gestión de Proyectos con
          <LogosSAP aria-label="SAP" class="inline-block h-[1em] w-auto relative -top-[.05em]" />
        </h2>
        <div class="ms-auto">
          <button @click="emit('close')" aria-label="Cerrar" class="text-lg cursor-pointer text-slate-600 hover:text-slate-800">
            <Icon name="humbleicons:times" />
          </button>
        </div>
      </div>
      <ul class="grid md:grid-cols-4 gap-x-site gap-y-2 text-xl mt-6 mb-12 md:mb-36 relative z-10">
        <li v-for="item in items" :key="item._uid">
          <NuxtLink
            :to="internalLink(item.link)"
            class="block overflow-hidden hover:underline underline-offset-[.1em] decoration-2 leading-tight"
            @click="emit('close')"
          >
            <span :class="['block animate', { 'font-semibold text-gradient': item.highlight }]">
              {{ item.label }}
            </span>
          </NuxtLink>
        </li>
      </ul>
      <UtilsSocials
        :socials="socials"
        class="text-sap-dark text-md gap-4"
      />
    </SiteContainer>
    <div class="absolute bottom-0 right-0 z-1 opacity-25">
      <LogosUPV class="w-full md:w-auto md:h-[calc(4vw+4vh+5rem)] text-slate-400" />
    </div>
  </div>
</template>

<style>

</style>