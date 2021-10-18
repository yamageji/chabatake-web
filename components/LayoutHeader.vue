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
      <h1 class="font-bold text-[24px] text-warmGray-700">
        <a href="/page/1"> chabatake WEB </a>
      </h1>
    </div>
    <nav class="col-span-2 md:col-span-1 mt-[36px] mb-[24px] ml-[16px]">
      <ul class="flex gap-[32px] text-warmGray-800">
        <li
          v-for="item in navigationData"
          :key="item.name"
          :class="[
            item.name === categoryId ? 'border-b-[2px] border-b-green-400' : '',
          ]"
          class="
            h-[28px]
            box-border
            hover:border-b-[2px] hover:border-b-green-400
          "
        >
          <a :href="item.href">
            <div class="font-bold text-[18px]">{{ item.name }}</div>
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
        name: 'new',
        href: '/category/new/page/1',
      },
      {
        name: 'dev',
        href: '/category/dev/page/1',
      },
      {
        name: 'design',
        href: '/category/design/page/1',
      },
      {
        name: 'hobby',
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
