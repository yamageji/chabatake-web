<template>
  <footer
    class="
      col-span-2
      h-[60px]
      border-t-[1px] border-warmGray-400
      py-[16px]
      dark:border-warmGray-600
    "
  >
    <p
      class="
        text-center text-[14px] text-warmGray-800
        leading-relaxed
        whitespace-nowrap
        dark:text-warmGray-200
      "
    >
      Copyright © 2021 koyama shigehito
    </p>
  </footer>
</template>

<script lnag="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'LayoutFooter',
});
</script>
