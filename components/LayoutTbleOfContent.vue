<template>
  <div
    class="mdlg:w-[280px] font-noto text-warmGray-700 dark:text-warmGray-200"
  >
    <div
      class="
        px-[16px]
        py-[12px]
        bg-warmGray-100
        rounded-[12px]
        shadow-sm
        dark:bg-warmGray-700
      "
    >
      <h2
        class="
          mb-[12px]
          pb-[4px]
          font-bold
          text-[18px] text-emerald-500
          border-b-[1px] border-emerald-500
          dark:text-emerald-400 dark:border-emerald-400
        "
      >
        目次
      </h2>
      <ul class="text-[14px]">
        <li
          v-for="item in tableOfContent"
          :key="item.id"
          class="mb-[8px] hover:opacity-70"
          :class="tableOfContentClass(item.name)"
        >
          <n-link v-scroll-to="`#${item.id}`" to>
            {{ item.text }}
          </n-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lnag="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'LayoutTableOfContent',
  props: {
    tableOfContent: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const tableOfContentClass = (paragraph) => {
      if (paragraph === 'h1') {
        return 'text-[16px] font-bold';
      } else if (paragraph === 'h2') {
        return 'text-[16px] ml-[16px]';
      } else if (paragraph === 'h3') {
        return '';
      }
    };

    return {
      tableOfContentClass,
    };
  },
});
</script>
