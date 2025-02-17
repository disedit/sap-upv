<script setup>
useHead({
  htmlAttrs: { lang: 'es-ES' },
  meta: [
    { name: 'theme-color', content: '#015AAE' },
    { name: 'msapplication-TileColor', content: '#015AAE' },
    { name: 'apple-mobile-web-app-title', content: 'SAP UPV' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicons/favicon-96x96.png', sizes: '96x96' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicons/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
    { rel: 'manifest', href: '/favicons/site.webmanifest' }
  ],
  script: [
    { src: 'https://cloud.umami.is/script.js', 'data-website-id': '351653f7-f526-43d5-9a20-8d637f21238a', defer: true }
  ]
})
</script>

<template>
  <div class="font-sans">
    <NuxtLoadingIndicator color="#015AAE" />
    <SiteNav />
    <main>
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
