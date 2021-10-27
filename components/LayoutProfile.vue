<template>
  <div
    class="
      col-span-2
      mt-[40px]
      md:w-[260px]
      md:pt-[16px]
      md:pl-[32px]
      md:col-span-1
      md:h-full
      md:mt-[88px]
    "
  >
    <div class="p-[12px] md:px-[0px] md:py-[0px]">
      <div class="flex gap-[8px] items-center">
        <img
          src="~/assets/image/shigehito_logo_100.svg"
          alt="personal rogo"
          width="48px"
          height="48px"
          class="rounded-full"
        />
        <h3
          class="
            font-source font-semibold
            tracking-wider
            text-[20px] text-warmGray-800
            md:text-[20px]
            dark:text-warmGray-200
          "
        >
          koyama shigehito
        </h3>
      </div>
      <p
        class="
          mt-[12px]
          md:px-[8px]
          text-[14px]
          leading-relaxed
          font-noto
          text-warmGray-800
          dark:text-warmGray-200
        "
      >
        UIデザイン / WEBフロントエンド周りの技術を中心に学習中です。<br />
      </p>
      <ul class="flex gap-[8px] mt-[16px]">
        <li
          v-for="item in snsLink"
          :key="item.name"
          class="
            flex
            items-center
            justify-center
            w-[32px]
            h-[32px]
            text-warmGray-800
            opacity-50
            hover:opacity-100
            transition-opacity
            duration-200
            ease-in-out
            fill-current
            dark:text-warmGray-100
          "
        >
          <BaseIconLinkButton
            :url="item.url"
            :icon-type="item.iconType"
            :src="item.src"
            :alt="item.alt"
            :font-awsome-icon="item.fontAwsomeIcon"
          >
          </BaseIconLinkButton>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lnag="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'LayoutProfile',
  setup() {
    const snsLink = ref([
      {
        name: 'github',
        url: 'https://github.com/K-shigehito',
        iconType: 'fontAwesone',
        src: '',
        alt: '',
        fontAwsomeIcon: ['fab', 'github'],
      },
      {
        name: 'zenn',
        url: 'https://zenn.dev/chabatake_i',
        iconType: 'svg',
        src: require('@/assets/image/zenn-logo.svg'),
        alt: 'zenn rogo',
        fontAwsomeIcon: [],
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/chabatake5',
        iconType: 'fontAwesone',
        src: '',
        alt: '',
        fontAwsomeIcon: ['fab', 'twitter'],
      },
    ]);

    return {
      snsLink,
    };
  },
});
</script>
