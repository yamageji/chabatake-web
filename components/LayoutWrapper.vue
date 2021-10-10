<template>
  <div class="h-screen bg-warmGray-100">
    <div class="max-w-5xl mx-auto px-[16px] pt-[16px]">
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
