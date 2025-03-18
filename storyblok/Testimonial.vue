<script setup>
defineProps({ blok: Object })
</script>

<template>
   <article v-editable="blok" class="testimonial bg-slate-100 rounded-xl p-site">
      <div class="picture">
         <NuxtImg
            v-if="blok.picture.filename"
            :src="blok.picture.filename"
            sizes="100px"
            :alt="blok.picture.alt"
            class="rounded-full w-full"
         />
      </div>
      <div class="name">
         <h3 class="text-base font-semibold">
            {{ blok.name }}
         </h3>
         <p class="text-sm text-slate-600 leading-tight text-balance">
            {{ blok.description }}
         </p>
      </div>
      <div class="content text-md leading-tight">
         <UtilsRichText :text="blok.text" />
      </div>
   </article>
</template>

<style lang="scss">
.testimonial {
   display: grid;
   grid-template-columns: 70px 1fr;
   grid-template-areas: "picture name" "content content";
   gap: 1rem;

   .picture {
      grid-area: picture;
   }

   .name {
      grid-area: name;
   }

   .content {
      grid-area: content;

      strong, b {
         background-image: linear-gradient(to right, var(--color-sap-dark), var(--color-sap-light));
         -webkit-background-clip: text;
         background-clip: text;
         color: transparent;

         span {
            color: unset !important;
         }
      }
   }
}
</style>