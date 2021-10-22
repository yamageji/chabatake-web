<template>
  <header class="grid col-span-2 grid-cols-layout">
    <div
      class="
        flex
        items-center
        justify-between
        col-span-2
        h-[32px]
        mb-[14px]
        md:h-[40px] md:mb-[18px]
      "
    >
      <h1 class="w-[200px] md:w-[240px]">
        <a href="/page/1">
          <img
            src="@/assets/image/chabatake-web_rogo.svg"
            alt="chabatake WEB"
          />
        </a>
      </h1>
      <div>
        <div class="w-[48px] h-[24px] bg-gray-600 rounded-[12px]"></div>
      </div>
    </div>
    <div
      class="
        w-full
        bg-hero-pattern bg-cover bg-center
        border-[1px] border-warmGray-500
        h-[160px]
        sm:h-[200px]
        md:h-[280px]
        rounded-[4px]
        sm:rounded-[8px]
        md:rounded-[12px]
      "
    ></div>

    <nav
      class="
        col-span-2
        mt-[28px]
        mb-[12px]
        ml-[8px]
        md:mt-[36px] md:mb-[16px] md:ml-[12px]
      "
    >
      <ul class="flex gap-[20px] md:gap-[28px] text-warmGray-400">
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
                font-source font-semibold
                text-[16px]
                tracking-wider
                before:inline-block
                before:h-[12px]
                before:w-[12px]
                before:rounded-[2px]
                md:before:mr-[1px]
                before:mr-[0.5px] before:bg-warmGray-300
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
