<script setup>
import * as focusTrap from 'focus-trap'

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
    if (target) elements[item.link.anchor].observer.observe(target)
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

/* Full menu */
let trap
const fullMenu = ref()
const fullMenuCard = ref()
const showFullMenu = ref(false)

const showMenu = () => {
  showFullMenu.value = true
  // document.documentElement.classList.add('overflow-hidden')
}

const hideMenu = () => {
  showFullMenu.value = false
  // document.documentElement.classList.remove('overflow-hidden')
  trap && trap.deactivate()
}

const toggleMenu = () => {
  const action = showFullMenu.value ? hideMenu : showMenu
  action()
}

const activateTrap = () => {
  trap = focusTrap.createFocusTrap(fullMenu.value)
  trap.activate()
}

/* Menu animations */
const { $gsap } = useNuxtApp()
let timeline

function beforeEnter(el) {
  $gsap.set(el, { y: '100%' })
}

function onEnter(el, done) {
  $gsap.set('.full-menu .animate', { y: '105%' })
  timeline = $gsap.timeline()

  timeline.to(el, {
    y: 0,
    duration: .5,
    ease: 'power4.out',
  }).to('.full-menu .animate', {
    y: 0,
    duration: .25,
    ease: 'power4.out',
    stagger: .1,
    onComplete: () => {
      done()
      activateTrap()
    }
  }, "-=.5s")
}

function onLeave (el, done) {
  timeline = $gsap.timeline()
  timeline.to('.full-menu .animate', {
    y: '105%',
    duration: .25,
    stagger: {
      amount: .25,
      from: 'end'
    },
  }).to(el, {
    y: '100%',
    duration: .5,
    ease: 'power4.in',
    onComplete: done
  }, "-=.25s")
}

function onEnterCancelled() {
  timeline && timeline.kill()
}

function onLeaveCancelled() {
  timeline && timeline.kill()
}
</script>

<template>
  <nav class="sticky bottom-3 md:bottom-6 2xl:bottom-12 z-[1000] px-3">
    <ul class="
      bg-white/80 md:max-w-[900px] mx-auto shadow-xl shadow-slate-800/10 rounded-xl backdrop-blur-md
      border border-slate-200 flex text-base overflow-clip
    ">
      <li
        v-for="item in firstThreeItems"
        :key="item._uid"
        class="basis-[50%] hidden md:block"
      >
        <NuxtLink
          :to="internalLink(item.link)"
          :class="[
            'menu-item hover:bg-sap-dark/5',
            { 'font-bold': item.link.anchor && visibleElement === item.link.anchor }
          ]"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
      <li v-if="menu.length > 4" class="basis-[50%]">
        <button
          class="menu-item w-full hover:bg-sap-dark/5 cursor-pointer"
          @click="toggleMenu"
        >
          <span class="hidden md:flex items-center justify-center w-full gap-2">
            Más
            <Icon name="humbleicons:chevron-up" />
          </span>
          <span class="flex md:hidden items-center justify-center w-full gap-2">
            <Icon name="humbleicons:bars" />
            Menú
          </span>
        </button>
      </li>
      <li
        v-if="menu.length > 3"
        class="basis-[50%] hover:bg-sap-dark/5"
      >
        <NuxtLink
          :to="internalLink(lastItem.link)"
          class="
            block font-mono uppercase text-slate-800 p-4 text-center transition
            font-bold text-gradient border-l border-slate-800/10
           "
        >
          {{ lastItem.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
    <div ref="fullMenu">
      <Transition
        @before-enter="beforeEnter"
        @enter="onEnter"
        @enter-cancelled="onEnterCancelled"
        @leave="onLeave"
        @leave-cancelled="onLeaveCancelled"
      >
        <SiteFullMenu
          v-if="showFullMenu"
          ref="fullMenuCard"
          :items="settings?.data?.story?.content?.full_menu"
          :socials="settings?.data?.story?.content?.footer_socials"
          @close="hideMenu"
        />
      </Transition>
      <button
        v-if="showFullMenu"
        @click="hideMenu"
        class="fixed inset-0 z-[1000]"
        aria-label="Cerrar menú"
      />
    </div>
</template>