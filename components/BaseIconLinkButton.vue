<template>
  <a :disabled="disabled" :href="url" target="_blank" rel="noopener">
    <BaseIcon v-if="iconType === 'svg'"><IconZenn /></BaseIcon>

    <font-awesome-icon
      v-else-if="iconType === 'fontAwesone'"
      :icon="fontAwsomeIcon"
      class="text-[24px]"
    />
  </a>
</template>

<script lnag="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import IconZenn from './icons/IconZenn.vue';

export default defineComponent({
  name: 'BaseIconLinkButton',
  components: {
    IconZenn,
  },

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
      default: 'svg',
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
