<template>
  <a :disabled="disabled" :href="url" target="_blank" rel="noopener">
    <img
      v-if="iconType === 'img'"
      :src="src"
      :alt="alt"
      width="22px"
      height="22px"
    />
    <font-awesome-icon
      v-else-if="iconType === 'fontAwesone'"
      :icon="fontAwsomeIcon"
      class="text-[24px]"
    />
  </a>
</template>

<script lnag="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'BaseIconLinkButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      required: true,
    },
    iconType: {
      type: String,
      default: 'img',
    },
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    fontAwsomeIcon: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
});
</script>
