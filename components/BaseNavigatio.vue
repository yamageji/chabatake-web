<template>
  <nav class="col-span-2 md:col-span-1 mt-[36px] mb-[24px] ml-[16px]">
    <ul class="flex gap-[32px] text-warmGray-800">
      <li
        v-for="item in navigationData"
        :key="item.name"
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
</template>

<script lnag="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'LayoutHeader',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const navigationData = props.categories;

    return {
      navigationData,
    };
  },
});
</script>
