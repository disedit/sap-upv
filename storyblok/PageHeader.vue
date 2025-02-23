<script setup>
defineProps({ blok: Object })
</script>

<template>
  <header v-editable="blok" class="-mt-nav-area">
    <NuxtPicture
      v-if="blok.picture.filename"
      format="avif,webp"
      :src="blok.picture.filename"
      :img-attrs="{ alt: blok.picture.alt, class: 'w-full h-[30vh] object-cover' }"
      preload
      sizes="100vw lg:2000px"
    />
    <SiteContainer padded>
      <h1 class="text-3xl">{{ blok.heading }}</h1>
    </SiteContainer>
  </header>
</template>