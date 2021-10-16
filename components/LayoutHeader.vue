<template>
  <header class="col-span-8">
    <div class="h-[320px] pt-[16px] px-[16px] md:px-[24px] bg-green-100">
      <h1 class="font-bold text-[24px] text-warmGray-700">
        <a href="/page/1"> 茶畑WEB </a>
      </h1>
    </div>
    <nav class="w-[350px] mx-auto mt-[36px] my-[12px]">
      <ul class="flex gap-[24px] text-warmGray-800">
        <li class="flex gap-[8px] items-center">
          <font-awesome-icon :icon="['far', 'newspaper']" class="text-[16px]" />
          <div class="font-bold text-[18px]">New</div>
        </li>

        <li class="flex gap-[8px] items-center">
          <font-awesome-icon
            :icon="['fas', 'laptop-code']"
            class="text-[16px]"
          />
          <div class="font-bold text-[18px]">Dev</div>
        </li>

        <li class="flex gap-[8px] items-center">
          <font-awesome-icon
            :icon="['fa', 'pencil-ruler']"
            class="text-[16px]"
          />
          <div class="font-bold text-[18px]">Design</div>
        </li>

        <li class="flex gap-[8px] items-center">
          <font-awesome-icon :icon="['fas', 'ghost']" class="text-[16px]" />
          <div class="font-bold text-[18px]">Hobby</div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lnag="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'LayoutHeader',
});
</script>
