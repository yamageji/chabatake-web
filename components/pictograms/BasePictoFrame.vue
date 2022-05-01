<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    x="0px"
    y="0px"
    viewBox="0 0 113.39 113.39"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="ja">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'BaseIcon',
  props: {
    iconName: {
      type: String,
      default: '',
    },
    width: {
      type: [Number, String],
      default: 113.39,
    },
    height: {
      type: [Number, String],
      default: 113.39,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
});
</script>

<style scoped></style>
