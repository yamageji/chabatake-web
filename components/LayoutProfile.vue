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
      <ul class="flex gap-[12px] mt-[16px]">
        <li class="flex items-center justify-center w-[32px] h-[32px]">
          <a href="https://zenn.dev/chabatake_i">
            <img
              src="~/assets/image/zenn-logo.svg"
              width="24px"
              height="24px"
            />
          </a>
        </li>
        <li
          class="
            flex
            items-center
            justify-center
            w-[32px]
            h-[32px]
            text-warmGray-500
            hover:text-[#55acee]
          "
        >
          <a href="https://zenn.dev/chabatake_i">
            <font-awesome-icon :icon="['fab', 'twitter']" class="text-[24px]" />
          </a>
        </li>
        <li
          class="
            flex
            items-center
            justify-center
            w-[32px]
            h-[32px]
            text-warmGray-500
            hover:text-[#4183c4]
          "
        >
          <a href="https://zenn.dev/chabatake_i">
            <font-awesome-icon :icon="['fab', 'github']" class="text-[24px]" />
          </a>
        </li>
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
