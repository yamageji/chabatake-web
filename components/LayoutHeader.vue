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
      <!-- ダークモードボタンを後で実装 -->
      <!-- <BaseDarkmodeButton /> -->
    </div>
  </header>
</template>

<script lnag="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'LayoutHeader',
});
</script>
