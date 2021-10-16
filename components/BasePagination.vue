<template>
  <div class="wrapper">
    <ul class="pager">
      <li v-if="current > 1" class="page arrow">
        <nuxt-link :to="getPath(current - 1)">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </nuxt-link>
      </li>
      <li v-if="3 < current" class="page">
        <nuxt-link :to="getPath(1)"> 1 </nuxt-link>
      </li>
      <li v-if="4 < current" class="omission">...</li>
      <li
        v-for="(p, index) in pager"
        v-show="current - 3 <= p && p <= current + 1"
        :key="index"
        class="page"
        :class="{ active: current === p + 1 }"
      >
        <nuxt-link :to="getPath(p + 1)">
          {{ p + 1 }}
        </nuxt-link>
      </li>
      <li v-if="current + 3 < pager.length" class="omission">...</li>
      <li v-if="current + 2 < pager.length" class="page">
        <nuxt-link :to="getPath(pager.length)">
          {{ pager.length }}
        </nuxt-link>
      </li>
      <li v-if="current < pager.length" class="page arrow">
        <nuxt-link :to="getPath(current + 1)">
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
    const getPath = (p) =>
      `/${
        props.category !== undefined ? `category/${props.category.id}/` : ''
      }page/${p}`;

    return { getPath };
  },
});
</script>
