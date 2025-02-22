<script setup>
defineProps({
  socials: { type: Array, required: true },
  withLabels: { type: Boolean, default: false }
})

const platformIcons = {
  linkedin: 'fa6-brands:linkedin',
  facebook: 'fa6-brands:facebook',
  instagram: 'fa6-brands:instagram',
  x: 'fa6-brands:x-twitter',
  bluesky: 'fa6-brands:bluesky'
}
</script>

<template>
  <ul class="flex gap-2 flex-wrap">
    <li
      v-for="social in socials"
      v-editable="social"
      :key="social._uid"
    >
      <a
        :href="social.url"
        target="_blank"
        rel="noopener noreferer"
        :aria-label="social.label"
        class="flex gap-2 items-center"
      >
        <Icon :name="platformIcons[social.platform]" class="icon" />
        <span v-if="withLabels" class="label">
          {{ social.label }}
        </span>
      </a>
    </li>
  </ul>
</template>
