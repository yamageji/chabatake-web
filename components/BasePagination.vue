<template>
  <div
    class="
      pt-[32px]
      border-t-[1px] border-warmGray-400
      dark:border-warmGray-600
      font-source
      md:pt-[44px]
    "
  >
    <ul class="flex flex-wrap items-center justify-center">
      <li
        v-if="current > 1"
        class="w-[32px] h-[32px] rounded-[100%] m-[4px] mx-[8px]"
      >
        <nuxt-link
          :to="getPath(current - 1)"
          class="flex items-center justify-center h-full  text-warmGray-700 hover:text-warmGray-500 dark:hover:text-warmGray-400 dark:text-warmGray-200"
        >
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </nuxt-link>
      </li>
      <li v-if="3 < current" class="w-[32px] h-[32px] rounded-[100%] m-[4px]">
        <nuxt-link
          :to="getPath(1)"
          class="flex items-center justify-center h-full  text-warmGray-700 hover:text-warmGray-500 dark:hover:text-warmGray-400 dark:text-warmGray-200"
        >
          1
        </nuxt-link>
      </li>
      <li
        v-if="4 < current"
        class="text-warmGray-700 my-[4px] mx-[12px] dark:text-warmGray-200"
      >
        ...
      </li>
      <li
        v-for="(p, index) in pager"
        v-show="current - 3 <= p && p <= current + 1"
        :key="index"
        class="w-[32px] h-[32px] rounded-[100%] m-[4px]"
        :class="[activeOuterClass(p)]"
      >
        <nuxt-link
          :to="getPath(p + 1)"
          class="flex items-center justify-center h-full  text-warmGray-700 hover:text-warmGray-500 dark:hover:text-warmGray-400 dark:text-warmGray-200"
          :class="[activeinnerClass(p)]"
        >
          {{ p + 1 }}
        </nuxt-link>
      </li>
      <li
        v-if="current + 3 < pager.length"
        class="text-warmGray-700 my-[4px] mx-[12px] dark:text-warmGray-200"
      >
        ...
      </li>
      <li
        v-if="current + 2 < pager.length"
        class="w-[32px] h-[32px] rounded-[100%] m-[4px]"
      >
        <nuxt-link
          :to="getPath(pager.length)"
          class="flex items-center justify-center h-full  text-warmGray-700 hover:text-warmGray-500 dark:hover:text-warmGray-400 dark:text-warmGray-200"
        >
          {{ pager.length }}
        </nuxt-link>
      </li>
      <li
        v-if="current < pager.length"
        class="w-[32px] h-[32px] rounded-[100%] m-[4px] mx-[8px]"
      >
        <nuxt-link
          :to="getPath(current + 1)"
          class="flex items-center justify-center h-full  text-warmGray-700 hover:text-warmGray-500 dark:hover:text-warmGray-400 dark:text-warmGray-200"
        >
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'BasePagination',
  props: {
    pager: {
      type: [Array, String],
      required: false,
      default: () => [],
    },
    current: {
      type: Number,
      required: true,
    },
    category: {
      type: [Object, String],
      required: false,
      default: undefined,
    },
  },

  setup(props) {
    const getPath = (p) => {
      if (props.category) {
        return `/category/${props.category.id}/page/${p}`;
      } else {
        return `/page/${p}`;
      }
    };

    const activeOuterClass = (p) => {
      return props.current === p + 1
        ? 'bg-warmGray-600 dark:bg-warmGray-200 '
        : '';
    };
    const activeinnerClass = (p) => {
      return props.current === p + 1
        ? 'text-warmGray-200 hover:text-warmGray-200 dark:text-warmGray-700 dark:hover:text-warmGray-600'
        : '';
    };

    return {
      getPath,
      activeOuterClass,
      activeinnerClass,
    };
  },
});
</script>
