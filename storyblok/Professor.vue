<script setup>
defineProps({ blok: Object })
</script>

<template>
  <li v-editable="blok" class="grid grid-rows-subgrid row-span-4 gap-4 text-base">
    <div class="pointer-events-none">
      <NuxtImg
        v-if="blok.picture.filename"
        :src="blok.picture.filename"
        :alt="blok.picture.alt"
        class="w-full rounded-full"
        sizes="400px"
      />
    </div>
    <div>
      <h3 class="font-semibold text-md leading-[1.1]">
        {{ blok.name }}
      </h3>
      <p class="text-base text-slate-500">
        {{ blok.position }}
      </p>
    </div>
    <UtilsRichText :text="blok.description" class="text-base text-slate-500" />
    <UtilsSocials :socials="blok.socials" class="text-md" />
  </li>
</template>