<script setup>
const settings = await useSettings()
const menu = settings?.value?.data?.story?.content?.menu
const { internalLink } = useLinks()

const elements = reactive({})

const firstThreeItems = computed(() => menu.slice(0, 3))
const lastItem = computed(() => menu[menu.length - 1])

onMounted(() => {
  menu.forEach(item => {
    if (!item.link.anchor) return
    elements[item.link.anchor] = {
      visible: false,
      observer: new IntersectionObserver(observe)
    }
    const target = document.querySelector(`#${item.link.anchor}`)
    elements[item.link.anchor].observer.observe(target)
  })
})

function observe(entires) {
  return entires.forEach((entry) => {
    if (entry.isIntersecting) {
      elements[entry.target.id].visible = true
    } else {
      elements[entry.target.id].visible = false
    }
  })
}

const visibleElement = computed(() => {
  let firstVisible = null
  Object.entries(elements).forEach(([key, value]) => {
    if (value.visible && !firstVisible) {
      firstVisible = key
    }
  })
  return firstVisible
})
</script>

<template>
  <nav class="sticky bottom-12 z-[1000]">
    <ul class="
      bg-white/80 max-w-[900px] mx-auto shadow-xl shadow-slate-800/10 rounded-xl backdrop-blur-md border border-slate-200
      flex text-base overflow-clip
    ">
      <li
        v-for="item in firstThreeItems"
        :key="item._uid"
        class="basis-[50%]"
      >
        <NuxtLink
          :to="internalLink(item.link)"
          :class="[
            'menu-item hover:bg-slate-800/5',
            { 'font-bold': item.link.anchor && visibleElement === item.link.anchor }
          ]"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
      <li v-if="menu.length > 4" class="basis-[50%]">
        <button class="menu-item w-full hover:bg-slate-800/5 cursor-pointer items-center gap-2">
          Más
          <Icon name="humbleicons:chevron-up" />
        </button>
      </li>
      <li
        v-if="menu.length > 3"
        class="basis-[50%]"
      >
        <NuxtLink
          :to="internalLink(lastItem.link)"
          :class="[
            `
            block font-mono uppercase text-slate-800 p-4 text-center transition
            font-bold text-gradient border-l border-slate-800/10 hover:bg-sap-dark
            `
          ]"
        >
          {{ lastItem.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
