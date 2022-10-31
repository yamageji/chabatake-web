<template>
  <div class="">
    <div class="flex gap-[8px] items-center">
      <img
        src="~/assets/image/shigehito_logo_100.svg"
        alt="personal rogo"
        width="48"
        height="48"
        class="rounded-full"
      />
      <h3
        class="font-source font-semibold tracking-wider text-[20px] text-warmGray-800 md:text-[20px] dark:text-warmGray-200"
      >
        koyama shigehito
      </h3>
    </div>
    <p
      class="mt-[12px] md:px-[8px] text-[14px] leading-relaxed font-noto text-warmGray-800 dark:text-warmGray-200"
    >
      桑沢デザイン研究所でデザインを学び、本作りの仕事をしています。現在、Web領域のデザインに興味を持ちUIデザインやフロントエンド開発について学習中です。猫２匹と０歳児の親として日々奮闘しています。
    </p>

    <!-- SNSリンク -->
    <ul class="flex gap-[6px] mt-[16px]">
      <li
        class="flex items-center justify-center w-[32px] h-[32px] text-warmGray-800 opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out fill-current cursor-pointer dark:text-warmGray-100"
      >
        <a
          :href="'https://github.com/K-shigehito'"
          target="_blank"
          rel="noopener"
        >
          <BaseIcon :width="22" height="22" :icon-name="'github'"
            ><IconGithub
          /></BaseIcon>
        </a>
      </li>

      <li
        class="flex items-center justify-center w-[32px] h-[32px] text-warmGray-800 opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out fill-current cursor-pointer dark:text-warmGray-100"
      >
        <a
          :href="'https://zenn.dev/chabatake_i'"
          target="_blank"
          rel="noopener"
        >
          <BaseIcon :icon-name="'zenn'"><IconZenn /></BaseIcon>
        </a>
      </li>

      <li
        class="flex items-center justify-center w-[32px] h-[32px] text-warmGray-800 opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out fill-current cursor-pointer dark:text-warmGray-100"
      >
        <a
          :href="'https://twitter.com/chabatake5'"
          target="_blank"
          rel="noopener"
        >
          <BaseIcon :width="22" height="22" :icon-name="'twitter'"
            ><IconTwitter
          /></BaseIcon>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import IconGithub from './icons/IconGithub.vue';
import IconTwitter from './icons/IconTwitter.vue';
import IconZenn from './icons/IconZenn.vue';

export default defineComponent({
  name: 'LayoutProfile',
  components: {
    IconZenn,
    IconTwitter,
    IconGithub,
  },
});
</script>
