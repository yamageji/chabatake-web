<template>
  <div
    class="
      col-span-8
      mt-[40px]
      md:pt-[24px] md:pl-[24px] md:col-span-3 md:h-full md:mt-[0px]
    "
  >
    <div class="p-[24px] md:px-[20px] md:py-[14px]">
      <h3 class="font-bold text-[20px]">koyama shigehito</h3>
      <p class="mt-[12px] text-[14px]">
        こんにちは、ありがとう、おやすみ、さようなら。こんにちは、ありがとう、おやすみ、さようなら。
      </p>
      <ul class="flex gap-[12px] mt-[20px]">
        <li><a href="" class="p-[8px] bg-red-200">twi</a></li>
        <li><a href="" class="p-[8px] bg-red-200">zen</a></li>
      </ul>
    </div>
  </div>
</template>

<script lnag="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'LayoutProfile',
});
</script>
