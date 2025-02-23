<script lang="ts" setup>
defineProps({
  picture: { type: Object, required: true },
  snug: { type: Boolean, default: false },
  position: { type: String, default: 'center' }
})
</script>

<template>
  <div :class="['relative', { '-mb-[calc(10rem+17vh)]': snug, '-mb-[calc(5rem+17vh)]': !snug }]">
    <NuxtPicture
      format="avif,webp"
      :src="picture.filename"
      :img-attrs="{
        alt: picture.alt,
        class: ['w-full h-[calc(28rem+13vh)] rounded-tl-4xl rounded-tr-4xl object-cover', {
          'object-top': position === 'top',
          'object-center': position === 'center',
          'object-bottom': position === 'bottom'
        }],
      }"
      preload
      sizes="100vw lg:1250px"
    />
    <div class="h-[15rem] bg-linear-to-b from-white/0 to-white/100 absolute bottom-0 left-0 right-0" />
  </div>
</template>
