<template>
  <div class="h-full bg-warmGray-50 dark:bg-warmGray-800">
    <div
      class="grid grid-cols-layout grid-rows-layout max-w-screen-lg min-h-screen mx-auto px-[16px] pt-[16px] md:px-[32px] bg-warmGray-50 dark:bg-warmGray-800"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'LayoutWrapper',
});
</script>
