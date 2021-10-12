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
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 88.3 88.3"
            style="enable-background: new 0 0 88.3 88.3"
            xml:space="preserve"
            class="w-[24px] h-[24px]"
          >
            <a xlink:href="https://zenn.dev/chabatake_i" class="block">
              <g class="fill-current text-warmGray-400 hover:text-warmGray-800">
                <path
                  class="st0"
                  d="M3.9,83.3h17c0.9,0,1.7-0.5,2.2-1.2L69.9,5.2c0.6-1-0.1-2.2-1.3-2.2H52.5c-0.8,0-1.5,0.4-1.9,1.1L3.1,81.9
		C2.8,82.5,3.2,83.3,3.9,83.3z"
                />
                <path
                  class="st0"
                  d="M62.5,82.1l22.1-35.5c0.7-1.1-0.1-2.5-1.4-2.5h-16c-0.6,0-1.2,0.3-1.5,0.8L43,81.2c-0.6,0.9,0.1,2.1,1.2,2.1
		h16.3C61.3,83.3,62.1,82.9,62.5,82.1z"
                />
              </g>
            </a>
          </svg>
        </li>
        <li
          class="
            flex
            items-center
            justify-center
            w-[32px]
            h-[32px]
            text-warmGray-400
            hover:text-warmGray-800
          "
        >
          <a href="https://twitter.com/chabatake5">
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
            text-warmGray-400
            hover:text-warmGray-800
          "
        >
          <a href="https://github.com/K-shigehito">
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
