<template>
  <header class="grid col-span-2 grid-cols-layout">
    <div
      class="
        col-span-2
        h-[320px]
        pt-[16px]
        px-[16px]
        md:px-[24px]
        rounded-[8px]
        bg-hero-pattern
      "
    >
      <h1 class="font-bold text-[24px] text-warmGray-800">
        <a href="/page/1"> chabatake WEB </a>
      </h1>
    </div>
    <nav class="col-span-2 mt-[36px] mb-[24px] ml-[16px]">
      <ul class="flex gap-[24px] md:gap-[32px] text-warmGray-500">
        <li
          v-for="item in navigationData"
          :key="item.name"
          :class="[
            item.name.toLowerCase() === categoryId
              ? 'text-warmGray-800 border-b-[1px] border-b-warmGray-400'
              : '',
          ]"
          class="
            box-border
            h-[30px]
            hover:border-b-[1px]
            hover:border-b-warmGray-400
            hover:text-warmGray-800
            transition-border
            duration-300
            ease-in-out
          "
        >
          <a :href="item.href">
            <div class="font-bold text-[18px] md:text-[20px]">
              {{ item.name }}
            </div>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lnag="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'LayoutHeader',

  setup() {
    const { route } = useContext();
    const categoryId = route.value.params.categoryId;

    const navigationData = [
      {
        name: 'New',
        href: '/category/new/page/1',
      },
      {
        name: 'Dev',
        href: '/category/dev/page/1',
      },
      {
        name: 'Design',
        href: '/category/design/page/1',
      },
      {
        name: 'Hobby',
        href: '/category/hobby/page/1',
      },
    ];

    return {
      categoryId,
      navigationData,
    };
  },
});
</script>
