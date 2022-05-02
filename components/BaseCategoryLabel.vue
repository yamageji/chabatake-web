<template>
  <ul class="">
    <li
      :class="labelColor"
      class="inline px-[6px] py-[3px] rounded-[2px] font-source text-[12px] tracking-wide opacity-90 md:text-[14px]"
    >
      {{ category.name }}
    </li>
  </ul>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api';

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
        return 'bg-emerald-500 text-white';
      } else if (props.category.name === 'dev') {
        return 'bg-emerald-500 text-white';
      } else if (props.category.name === 'design') {
        return 'bg-emerald-500 text-white';
      } else if (props.category.name === 'self') {
        return 'bg-emerald-500 text-white';
      }
    });

    return { labelColor };
  },
});
</script>
