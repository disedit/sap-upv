<script lang="ts" setup>
defineProps({
  picture: { type: Object, required: true }
})
</script>

<template>
  <div class="relative">
    <NuxtPicture
      format="avif,webp"
      :src="picture.filename"
      :img-attrs="{
        alt: picture.alt,
        class: 'w-full h-[calc(28rem+13vh)] -mb-[calc(3rem+17vh)] rounded-tl-4xl rounded-tr-4xl object-cover'
      }"
      preload
      sizes="100vw lg:1250px"
    />
    <div class="h-[15rem] bg-linear-to-b from-white/0 to-white/100 absolute bottom-0 left-0 right-0" />
  </div>
</template>
