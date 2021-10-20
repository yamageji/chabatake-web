<template>
  <header class="grid col-span-2 grid-cols-layout">
    <h1 class="w-[220px] ml-[4px] md:w-[260px] mb-[24px]">
      <a href="/page/1">
        <img src="@/assets/image/chabatake-web_rogo.svg" alt="chabatake WEB" />
      </a>
    </h1>

    <nav
      class="
        col-span-2
        mt-[28px]
        mb-[12px]
        ml-[8px]
        md:mt-[36px] md:mb-[16px] md:ml-[12px]
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
              :class="[
                item.name.toLowerCase() === categoryId
                  ? 'text-warmGray-800 before:bg-emerald-400'
                  : '',
                categoryId === undefined && item.name.toLowerCase() === 'new'
                  ? 'text-warmGray-800 before:bg-emerald-400'
                  : '',
              ]"
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
