<script setup>
const settings = await useSettings()
</script>

<template>
  <header class="fixed top-0 left-0 right-0 px-3 text-sm md:text-base z-[1000]">
    <div class="flex bg-slate-200/80 max-w-container rounded-bl-lg rounded-br-lg overflow-clip mx-auto backdrop-blur-md">
      <NuxtLink to="/" class="flex items-center gap-[.3em] py-3 px-4 xl:px-site text-nowrap hover:opacity-75 transition">
        Máster de Gestión de Proyectos con
        <LogosSAP aria-label="SAP" class="h-[1.5em] w-auto" />
      </NuxtLink>
      <div class="self-end ms-auto">
        <a href="https://upv.es" target="_blank" aria-label="UPV" class="text-slate-400 hover:text-slate-500">
          <LogosUPV class="h-[1.75em]" />
        </a>
      </div>
    </div>
  </header>
  <div class="h-nav-area" />
</template>
