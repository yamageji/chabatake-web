<template>
  <div
    class="
      col-span-8
      mt-[40px]
      md:pt-[24px] md:pl-[24px] md:col-span-3 md:h-full md:mt-[0px]
    "
  >
    <div class="p-[24px] md:px-[20px] md:py-[14px]">
      <div class="flex gap-[8px] items-center">
        <img
          src="~/assets/image/shigehito_logo_100.svg"
          alt="personal rogo"
          width="52px"
          height="52px"
          class="rounded-full"
        />
        <h3 class="font-bold text-[20px] text-warmGray-800">
          koyama shigehito
        </h3>
      </div>
      <p class="mt-[12px] text-[14px]"></p>
      <ul class="flex gap-[8px] mt-[16px]">
        <li
          class="
            flex
            items-center
            justify-center
            w-[32px]
            h-[32px]
            text-warmGray-800
            opacity-50
            hover:opacity-100
          "
        >
          <a
            href="https://github.com/K-shigehito"
            target="_blank"
            rel="noopener"
          >
            <font-awesome-icon :icon="['fab', 'github']" class="text-[24px]" />
          </a>
        </li>
        <li
          class="
            flex
            items-center
            justify-center
            w-[32px]
            h-[32px]
            opacity-50
            hover:opacity-100
          "
        >
          <a
            href="https://github.com/K-shigehito"
            target="_blank"
            rel="noopener"
          >
            <img
              src="~/assets/image/zenn-logo_warm-gray-800.svg"
              width="22px"
              height="22px"
              alt="zenn rogo"
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
            text-warmGray-800
            opacity-50
            hover:opacity-100
          "
        >
          <a
            href="https://twitter.com/chabatake5"
            target="_blank"
            rel="noopener"
          >
            <font-awesome-icon :icon="['fab', 'twitter']" class="text-[24px]" />
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
