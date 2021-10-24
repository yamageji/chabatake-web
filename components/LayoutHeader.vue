<template>
  <header class="grid col-span-2 grid-cols-layout">
    <div
      class="
        flex
        items-center
        justify-between
        col-span-2
        h-[32px]
        mb-[16px]
        md:h-[40px] md:mb-[20px]
      "
    >
      <h1>
        <a href="/page/1">
          <svg
            class="
              w-[200px]
              md:w-[240px]
              fill-current
              text-warmGray-800
              transition-text
              duration-200
              ease-in-out
              hover:text-warmGray-600
              dark:text-warmGray-200 dark:hover:text-warmGray-400
            "
          >
            <use
              xlink:href="@/assets/image/chabatake-web_rogo.svg#chabatake-web_rogo"
            ></use>
          </svg>
        </a>
      </h1>
      <BaseDarkmodeButton />
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
      <ul
        class="
          flex
          gap-[20px]
          md:gap-[28px]
          text-warmGray-400
          dark:text-warmGray-600
        "
      >
        <li
          v-for="item in navigationData"
          :key="item.name"
          class="
            box-border
            hover:text-warmGray-600
            transition-text
            duration-200
            ease-in-out
            md:h-[34px]
            dark:hover:text-warmGray-400
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
                before:mr-[0.5px]
                before:bg-warmGray-300
                dark:before:bg-warmGray-500
                md:before:mr-[1px] md:text-[20px]
              "
              :class="[
                item.name.toLowerCase() === categoryId
                  ? 'text-warmGray-800 dark:text-warmGray-200 before:bg-emerald-400 dark:before:bg-emerald-400 '
                  : '',
                categoryId === undefined && item.name.toLowerCase() === 'new'
                  ? 'text-warmGray-800 dark:text-warmGray-200 before:bg-emerald-400 dark:before:bg-emerald-400'
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
