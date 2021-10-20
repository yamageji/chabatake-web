<template>
  <header class="grid col-span-2 grid-cols-layout">
    <div
      class="
        col-span-2
        h-[320px]
        pt-[16px]
        px-[16px]
        rounded-[8px]
        bg-hero-pattern
      "
    >
      <h1 class="font-bold text-[24px] text-warmGray-800">
        <a href="/page/1"> chabatake WEB </a>
      </h1>
    </div>
    <nav
      class="
        col-span-2
        mt-[36px]
        mb-[12px]
        ml-[8px]
        md:mt-[44px] md:mb-[16px] md:ml-[12px]
      "
    >
      <ul class="flex gap-[22px] md:gap-[28px] text-warmGray-400">
        <li
          v-for="item in navigationData"
          :key="item.name"
          class="
            box-border
            hover:text-warmGray-800
            transition-border
            duration-300
            ease-in-out
            md:h-[34px]
          "
        >
          <a :href="item.href">
            <div
              :class="[
                item.name.toLowerCase() === categoryId
                  ? 'text-warmGray-800 before:bg-green-500'
                  : '',
                categoryId === undefined && item.name.toLowerCase() === 'new'
                  ? 'text-warmGray-800 before:bg-green-500'
                  : '',
              ]"
              class="
                font-bold
                text-[18px]
                before:inline-block
                before:h-[12px]
                before:w-[12px]
                before:rounded-[2px]
                before:mr-[1px]
                before:bg-warmGray-300
                md:text-[20px]
              "
            >
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
        href: '/page/1',
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
        name: 'Self',
        href: '/category/self/page/1',
      },
    ];

    return {
      categoryId,
      navigationData,
    };
  },
});
</script>
