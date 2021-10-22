<template>
  <div
    class="
      col-span-2
      mt-[40px]
      md:w-[260px] md:pt-[40px] md:pl-[32px] md:col-span-1 md:h-full md:mt-[0px]
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
        <h3 class="font-bold text-[20px] text-warmGray-800 md:text-[20px]">
          koyama shigehito
        </h3>
      </div>
      <p class="mt-[12px] text-[14px]">
        <!-- ここにプロフィール -->
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
        iconType: 'img',
        src: require('@/assets/image/zenn-logo_warm-gray-800.svg'),
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
