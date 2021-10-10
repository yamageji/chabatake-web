<template>
  <header class="h-[320px] pt-[16px] px-[16px] md:px-[24px] bg-green-100">
    <h1 class="font-bold text-[24px] text-warmGray-700">茶畑WEB</h1>
    <ul class="flex gap-[24px] mt-[12px]">
      <li>New</li>
      <li>Dev</li>
      <li>Design</li>
      <li>Hobby</li>
    </ul>
  </header>
</template>

<script lnag="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'LayoutHeader',
});
</script>
