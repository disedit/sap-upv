<script setup>
import { UtilsRichText } from '#components';

defineProps({ blok: Object })

const showContents = ref(true)
const showMethodology = ref(false)
</script>

<template>
  <SiteContainer tag="section" v-editable="blok" :id="blok.anchor" padded class="my-8 md:my-24">
    <h2 id="ProgramaHeading" class="text-2xl text-gradient w-fit mb-2">
      {{ blok.heading }}
    </h2>
    <UtilsRichText
      :text="blok.text"
      class="text-md text-slate-600"
    />
    <div class="card mt-8">
      <UtilsTabs
        :tabs="blok.phases"
        labelled-by="ProgramaHeading"
      />
      <div class="grid md:grid-cols-2 bg-slate-100 divider-top">
        <div>
          <div class="p-site md:sticky top-nav-area">
            <button
              @click="showContents = !showContents"
              :aria-expanded="showContents ? 'true' : 'false'"
              aria-controls="contentContents"
              class="group cursor-pointer flex items-center gap-2 w-full text-left"
            >
              <h3 class="text-lg text-gradient w-fit leading-tight">
                {{ blok.contents_heading }}
              </h3>
              <Icon name="humbleicons:chevron-right" class="group-aria-[expanded=true]:rotate-90 transition text-md" />
            </button>
            <Transition name="slide">
              <UtilsRichText
                v-if="showContents"
                :text="blok.contents_text"
                class="text-base text-slate-800 max-w-[60ch] pt-4"
              />
            </Transition>
          </div>
        </div>
        <Transition name="slide">
          <div
            v-if="showContents"
            id="contentContents"
            class="p-site programme-contents"
          >
              <UtilsRichText
                :text="blok.contents"
                class="text-base"
              />
          </div>
        </Transition>
      </div>
      <div class="grid md:grid-cols-2 bg-slate-100 divider-top">
        <div>
          <div class="p-site md:sticky top-nav-area">
            <button
              @click="showMethodology = !showMethodology"
              :aria-expanded="showMethodology ? 'true' : 'false'"
              aria-controls="methodologyContents"
              class="group cursor-pointer flex items-center gap-2 w-full text-left"
            >
              <h3 class="text-lg text-gradient w-fit leading-tight">
                {{ blok.methodology_heading }}
              </h3>
              <Icon name="humbleicons:chevron-right" class="group-aria-[expanded=true]:rotate-90 transition text-md" />
            </button>
            <Transition name="slide">
              <UtilsRichText
                v-if="showMethodology"
                :text="blok.methodology_text"
                class="text-base text-slate-800 max-w-[60ch] pt-4"
              />
            </Transition>
          </div>
        </div>
        <Transition name="slide">
          <div
            v-if="showMethodology"
            id="methodologyContents"
            class="p-site flex flex-col gap-site text-base"
          >
            <div
              v-for="feature in blok.methodology_features"
              :key="feature._uid"
              v-editable="feature"
              class="flex gap-4"
            >
              <Icon
                v-if="feature.icon"
                :name="feature.icon"
                class="text-sap-dark text-xl shrink-0"
              />
              <div>
                <h4
                  v-if="feature.heading"
                  class="text-gradient font-semibold text-md w-fit"
                >
                  {{ feature.heading }}
                </h4>
                <UtilsRichText :text="feature.text" />
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </SiteContainer>
</template>

<style lang="scss">
.programme-contents {
  h4,
  h5 {
    background: var(--color-white);
    font-weight: 600;
    padding: .25em .75em;
    border-radius: .5rem;
    margin: .75rem 0;
  }

  :is(h4, h5):first-child {
    margin-top: 0;
  }

  ul, ol {
    margin-bottom: 1.25em;
    margin-left: .75em;

    li {
      display: flex;
      align-items: center;
      gap: .5em;
      line-height: 1.1;
      margin: .75em 0;

      &::before {
        content: '';
        display: block;
        width: 1em;
        height: 1em;
        border: 1.5px var(--color-slate-400) solid;
        border-radius: 100%;
        flex-shrink: 0;
      }
    }
  }

  h5 {
    margin-left: 1.5em;

    & + ul {
      margin-left: 2.25em;
    }
  }
}
</style>