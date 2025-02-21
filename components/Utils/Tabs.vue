<script lang="ts" setup>
const props = defineProps({
  tabs: {
    type: Array,
    required: true
  },
  labelledBy: {
    type: String,
    required: true
  }
})

const selectedTab = ref(props.tabs[0]._uid)

function setSelectedTab (tab) {
  selectedTab.value = tab
  const button = document.getElementById(`tab-${tab}`)
  button.focus()
}

function handleTabKeydown (e) {
  let flag = false
  const currentIndex = props.tabs.findIndex((tab) => tab._uid === selectedTab.value)

  switch (e.key) {
    case 'ArrowLeft':
      setSelectedTab(currentIndex > 0 ? props.tabs[currentIndex - 1]._uid : props.tabs[props.tabs.length - 1]._uid)      
      flag = true
      break

    case 'ArrowRight':
      setSelectedTab(currentIndex == props.tabs.length - 1 ? props.tabs[0]._uid : props.tabs[currentIndex + 1]._uid)
      flag = true
      break

    case 'Home':
      setSelectedTab(selectedTab.value = props.tabs[0]._uid)
      flag = true
      break

    case 'End':
      setSelectedTab(selectedTab.value = props.tabs[props.tabs.length - 1]._uid)
      flag = true
      break

    default:
      break
  }

  if (flag) {
    e.stopPropagation()
    e.preventDefault()
  }
}
</script>

<template>
  <div class="tabs">
    <div role="tablist" :aria-labelledby="labelledBy" class="tab-buttons bg-slate-100 flex overflow-auto">
      <button
        v-for="(tab, i) in tabs"
        :key="tab._uid"
        :id="`tab-${tab._uid}`"
        type="button"
        role="tab"
        class="
          tab-button flex gap-3 items-center
          py-4 md:py-5 px-4 md:px-site text-base text-slate-800 font-semibold basis-[50%] text-left
          cursor-pointer leading-[1]
          aria-selected:bg-linear-to-r from-sap-dark to-sap-light aria-selected:text-white
        "
        :aria-selected="selectedTab === tab._uid ? 'true' : 'false'"
        :aria-controls="`tab-panel-${tab._uid}`"
        :tabindex="selectedTab === tab._uid ? null : '-1'"
        @click="selectedTab = tab._uid"
        @keydown="handleTabKeydown"
      >
        <span>{{ i + 1 }}</span>
        <span>{{ tab.name }}</span>
      </button>
    </div>
    <div class="tab-content p-site max-w-[130ch] mx-auto md:my-10">
      <div
        v-for="tab in tabs"
        :key="tab._uid"
        :id="`tab-panel-${tab._uid}`"
        role="tabpanel"
        tabindex="0"
        :aria-labelledby="`tab-${tab._uid}`"
        class="tab-panel"
        v-show="selectedTab === tab._uid"
      >
        <UtilsRichText :text="tab.text" class="text-md" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  .tab-button {
    &:not(:first-child) {
      border-left: 1.5px var(--color-slate-300) solid;
    }

    &:not([aria-selected='true']):hover {
      background: var(--color-slate-200);
    }

    &[aria-selected='true'] + .tab-button {
      border-left-color: var(--color-slate-100);
      border-radius: .75rem 0 0 .75rem;
    }

    &[aria-selected='true']:first-child {
      border-radius: 0 2rem 2rem 0;
    }
  
    &[aria-selected='true']:not(:first-child):not(:last-child) {
      border-radius: .5rem 2rem 2rem .5rem;
    }

    &[aria-selected='true']:last-child {
      border-radius: .5rem 0 0 .5rem;
    }
  }
}
</style>