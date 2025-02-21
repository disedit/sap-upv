<script setup>
import { UtilsRichText } from '#components';

defineProps({ blok: Object })
</script>

<template>
  <SiteContainer tag="section" v-editable="blok" :id="blok.anchor" padded class="my-8 md:my-24">
    <h2 id="ProgramaHeading" class="text-xl text-gradient w-fit mb-2">
      {{ blok.heading }}
    </h2>
    <UtilsRichText
      :text="blok.text"
      class="text-md text-slate-800"
    />
    <div class="card mt-8">
      <UtilsTabs
        :tabs="blok.phases"
        labelled-by="ProgramaHeading"
      />
      <div class="grid md:grid-cols-2 bg-slate-100 divider-top">
        <div class="p-site md:sticky top-nav-area">
          <h3 class="text-lg text-gradient w-fit mb-2 leading-tight">
            {{ blok.contents_heading }}
          </h3>
          <UtilsRichText
            :text="blok.contents_text"
            class="text-base text-slate-800 max-w-[75ch]"
          />
        </div>
        <div class="p-site programme-contents">
          <UtilsRichText
            :text="blok.contents"
            class="text-base"
          />
        </div>
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