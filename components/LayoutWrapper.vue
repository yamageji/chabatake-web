<template>
  <div class="h-full bg-warmGray-100">
    <div
      class="
        grid grid-cols-layout grid-rows-layout
        max-w-screen-lg
        min-h-screen
        mx-auto
        px-[16px]
        pt-[16px]
        md:px-[24px] md:pt-[24px]
        bg-warmGray-100
      "
    >
      <slot />
    </div>
  </div>
</template>

<script lnag="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'LayoutWrapper',
});
</script>
