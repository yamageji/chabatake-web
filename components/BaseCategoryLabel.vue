<template>
  <ul class="">
    <li
      :class="labelColor"
      class="
        inline
        px-[6px]
        py-[3px]
        rounded-[2px]
        font-source
        text-[12px]
        tracking-wide
        opacity-90
        md:text-[14px]
      "
    >
      {{ category.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'CategoryLabel',
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const labelColor = computed(() => {
      if (props.category.name === 'new') {
        return 'bg-green-500 text-green-100';
      } else if (props.category.name === 'dev') {
        return 'bg-green-500 text-green-100';
      } else if (props.category.name === 'design') {
        return 'bg-green-500 text-green-100';
      } else if (props.category.name === 'self') {
        return 'bg-green-500 text-green-100';
      }
    });

    return { labelColor };
  },
});
</script>
