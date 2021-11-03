<template>
  <ul class="">
    <li
      v-for="item in tableOfContent"
      :key="item.id"
      :class="`list ${item.name}`"
    >
      <n-link v-scroll-to="`#${item.id}`" to>
        {{ item.text }}
      </n-link>
    </li>
  </ul>
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
});
</script>
