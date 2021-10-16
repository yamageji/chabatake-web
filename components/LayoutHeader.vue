<template>
  <header class="col-span-8">
    <div class="h-[320px] pt-[16px] px-[16px] md:px-[24px] bg-green-100">
      <h1 class="font-bold text-[24px] text-warmGray-700">
        <a href="/page/1"> 茶畑WEB </a>
      </h1>
    </div>
    <nav class="mt-[36px] my-[12px]">
      <ul class="flex gap-[28px] text-warmGray-800">
        <li
          class="
            h-[28px]
            box-border
            hover:border-b-[2px] hover:border-b-warmGray-400
          "
        >
          <a href="/category/new/page/1">
            <div class="font-bold text-[18px]">New</div>
          </a>
        </li>

        <li
          class="
            h-[28px]
            box-border
            hover:border-b-[2px] hover:border-b-warmGray-400
          "
        >
          <a href="/category/dev/page/1">
            <div class="font-bold text-[18px]">Dev</div>
          </a>
        </li>

        <li
          class="
            h-[28px]
            box-border
            hover:border-b-[2px] hover:border-b-warmGray-400
          "
        >
          <a href="/category/design/page/1">
            <div class="font-bold text-[18px]">Design</div>
          </a>
        </li>

        <li
          class="
            h-[28px]
            box-border
            hover:border-b-[2px] hover:border-b-warmGray-400
          "
        >
          <a href="/category/hobby/page/1">
            <div class="font-bold text-[18px]">Hobby</div>
          </a>
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
