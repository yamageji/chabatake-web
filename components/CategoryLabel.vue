<template>
  <ul class="">
    <li
      :class="labelColor"
      class="
        inline
        px-[6px]
        py-[3px]
        rounded-[2px]
        text-[12px]
        font-bold
        opacity-90
        md:text-[14px]
      "
    >
      {{ category.name }}
    </li>
  </ul>
</template>

<script>
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
        return 'bg-red-400 text-red-100';
      } else if (props.category.name === 'dev') {
        return 'bg-green-400 text-green-100';
      } else if (props.category.name === 'design') {
        return 'bg-blue-400 text-blue-100';
      } else if (props.category.name === 'self') {
        return 'bg-purple-400 text-purple-100';
      }
    });

    return { labelColor };
  },
});
</script>
