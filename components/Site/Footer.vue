<script setup>
const settings = await useSettings()
const footer = settings?.value?.data?.story?.content

const footerCopyright = computed(() => {
  const date = new Date()
  const currentYear = date.getFullYear()
  return footer.footer_copyright.replaceAll('{{year}}', currentYear)
})
</script>

<template>
  <footer class="footer relative bg-slate-100">
    <SiteContainer padded class="flex flex-col gap-site min-h-[450px]">
      <div class="mb-16">
        <h2 class="text-lg max-w-[20ch] leading-[1.1] mb-4">
          Máster de Gestión de Proyectos con
          <LogosSAP aria-label="SAP" class="inline-block h-[1em] w-auto relative -top-[.05em]" />
        </h2>
        <UtilsSocials
          :socials="footer.footer_socials"
          class="text-sap-dark text-md gap-4"
        />
      </div>

      <div class="mt-auto text-[1rem] flex flex-col gap-4">
        <p>
          {{ footerCopyright }}
        </p>

        <div class="legal">
          <UtilsRichText :text="footer.footer_legal" />
        </div>

        <a href="https://upv.es" target="_blank">
          <img src="~assets/images/upv.svg" alt="Universitat Politècnica de València" class="h-[3rem]" />
        </a>
      </div>
    </SiteContainer>
    <div class="mt-6 md:absolute md:bottom-0 md:right-0">
      <LogosUPV class="w-full md:w-auto md:h-[calc(4vw+4vh+5rem)] text-slate-300" />
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  .legal {
    a {
      text-decoration: underline;

      &:hover {
        opacity: .75;
      }
    }

    p {
      display: flex;
      gap: 1rem;
    }
  }
}
</style>