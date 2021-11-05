<template>
  <nav
    class="
      col-span-2
      mt-[20px]
      mb-[12px]
      ml-[8px]
      md:mt-[24px] md:mb-[16px] md:ml-[12px]
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
          hover:text-warmGray-500
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
              before:h-[10px]
              before:w-[10px]
              before:rounded-[1.5px]
              before:mr-[0.5px]
              before:bg-warmGray-300
              dark:before:bg-warmGray-500
              md:before:h-[12px]
              md:before:w-[12px]
              md:before:rounded-[2px]
              md:before:mr-[1px]
              md:text-[20px]
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
</template>

<script lnag="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'LayoutNavigation',

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
