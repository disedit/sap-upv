<script setup>
const props = defineProps({ blok: Object })
const { hasRichText } = useUtils()

const clean = (text) => {
  return text.replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll(' ', '')
}
</script>

<template>
  <SiteContainer
    tag="section"
    v-editable="blok"
    :id="blok.anchor"
    class="contact grid md:grid-cols-2 gap-site md:gap-20 my-8 md:my-24"
    padded
  >
    <div class="max-w-[70ch]">
      <h2 class="text-2xl text-gradient w-fit mb-4 text-balance leading-[1.1]" :id="blok.anchor + 'Heading'">
        {{ blok.heading }}
      </h2>
      <UtilsRichText
        v-if="hasRichText(blok.text)"
        :text="blok.text"
        class="text-md text-slate-600"
      />
    </div>
    <div class="contact-links text-xl self-center">
      <a :href="`mailto:${blok.email}`">
        <Icon name="hugeicons:mail-02" class="icon" />
        <span class="label">{{ blok.email }}</span>
      </a>
      <a :href="`tel:${clean(blok.phone)}`">
        <Icon name="heroicons:phone" class="icon" />
        <span class="label">{{ blok.phone }}</span>
      </a>
      <a :href="`https://wa.me/${clean(blok.whatsapp)}`">
        <Icon name="fa6-brands:whatsapp" class="icon" />
        <span class="label">{{ blok.whatsapp }}</span>
      </a>
      <UtilsSocials
        :socials="blok.socials"
        with-labels
        class="socials text-md mt-8"
      />
    </div>
  </SiteContainer>
</template>

<style lang="scss">
.contact {
  max-width: 1400px !important;

  &-links {
    a {
      display: flex;
      align-items: center;
      gap: .25em;

      &:hover {
        .label {
          text-decoration: underline;
          text-decoration-thickness: .05em;
          text-underline-offset: .25em;
        }
      }
    }

    .icon {
      color: var(--color-sap-dark);
      width: 1.1em;
      flex-shrink: 0;
    }
  }

  .socials {
    gap: 1.5rem;
  }
}
</style>