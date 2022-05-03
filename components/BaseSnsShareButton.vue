<template>
  <!-- Twitter share button -->
  <div>
    <div
      class="flex gap-[12px] items-center justify-center py-[8px] font-bold text-[17px] text-center"
    >
      <span
        class="pr-[12px] border-r-[1px] border-warmGray-400 dark:border-warmGray-200"
        >share</span
      >
      <a :href="twitterURL" target="_blank" rel="noopener">
        <span
          class="flex items-center justify-center w-[28px] h-[28px] text-warmGray-100 bg-warmGray-700 rounded-full hover:opacity-80 dark:text-warmGray-700 dark:bg-warmGray-200"
        >
          <BaseIcon width="16" height="16" :icon-name="'twitter'" :icon-id="10">
            <IconTwitter />
          </BaseIcon>
        </span>
      </a>
    </div>
  </div>
</template>

<script lnag="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api';
import BaseIcon from './BaseIcon.vue';
import IconTwitter from './icons/IconTwitter.vue';

export default defineComponent({
  name: 'BaseSnsShareButton',
  components: { BaseIcon, IconTwitter },
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const { route } = useContext();
    const path = route.value.path;

    const url = `https://chabatake-web.com${path}`;
    const textAndHashTag = encodeURIComponent(`${props.text}`);
    const twitterURL = computed(
      () => `https://twitter.com/intent/tweet?url=${url}&text=${textAndHashTag}`
    );

    return {
      twitterURL,
    };
  },
});
</script>
