<template>
  <div class="h-screen">
    <div
      class="
        grid grid-cols-8 grid-rows-layout
        max-w-5xl
        min-h-[100%]
        mx-auto
        px-[16px]
        pt-[16px]
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
