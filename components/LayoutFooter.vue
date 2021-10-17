<template>
  <footer
    class="
      col-span-2
      h-[60px]
      mt-[24px]
      border-t-[1px] border-warmGray-400
      py-[16px]
    "
  >
    <p class="text-center text-[14px] leading-relaxed whitespace-nowrap">
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
