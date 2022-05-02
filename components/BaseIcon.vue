<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    x="0px"
    y="0px"
    viewBox="0 0 20 20"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="computedIconId" lang="ja">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'BaseIcon',
  props: {
    iconName: {
      type: String,
      default: '',
    },
    iconId: Number,
    width: {
      type: [Number, String],
      default: 20,
    },
    height: {
      type: [Number, String],
      default: 20,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
  setup(props) {
    const computedIconId = computed((): string => {
      return props.iconId
        ? `${props.iconName}_${props.iconId}`
        : `${props.iconName}`;
    });
    return {
      computedIconId,
    };
  },
});
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>
