<script setup>
import { SiteContainer } from '#components';

const settings = await useSettings()
</script>

<template>
  <footer class="bg-slate-100">
    <SiteContainer padded>
      Footer
    </SiteContainer>    
  </footer>
</template>
