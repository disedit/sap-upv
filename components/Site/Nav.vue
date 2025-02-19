<script setup>
const settings = await useSettings()
</script>

<template>
  <header class="fixed top-0 left-0 right-0 px-site text-base z-[1000]">
    <div class="flex bg-slate-200/80 max-w-container rounded-bl-lg rounded-br-lg overflow-clip mx-auto backdrop-blur-md">
      <div class="flex items-center gap-[.3em] py-3 px-site text-nowrap">
        Máster de Gestión de Proyectos con
        <LogosSAP aria-label="SAP" class="h-[1.5em] w-auto" />
      </div>
      <div class="self-end ms-auto">
        <a href="https://upv.es" target="_blank" aria-label="UPV" class="text-slate-400 hover:text-slate-600">
          <LogosUPV class="h-[1.75em]" />
        </a>
      </div>
    </div>
  </header>
  <div class="h-nav-area" />
</template>
