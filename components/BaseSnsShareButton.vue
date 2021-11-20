<template>
  <!-- Twitter share button -->
  <div>
    <div
      class="
        flex
        gap-[16px]
        items-center
        justify-center
        w-[112px]
        mx-auto
        py-[8px]
        font-bold
        text-[17px] text-center
        border-b-[1px] border-warmGray-400
        dark:border-warmGray-200
      "
    >
      share
      <button type="button" class="">
        <a :href="twitterURL" target="_blank" rel="noopener">
          <span
            class="
              flex
              items-center
              justify-center
              w-[28px]
              h-[28px]
              text-warmGray-100
              bg-warmGray-700
              rounded-full
              hover:opacity-80
              dark:text-warmGray-700 dark:bg-warmGray-200
            "
          >
            <BaseIcon width="16" height="16" :icon-name="'twitter'">
              <IconTwitter />
            </BaseIcon>
          </span>
        </a>
      </button>
    </div>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
import IconTwitter from './icons/IconTwitter.vue';
export default {
  name: 'BaseSnsShareButton',
  components: { BaseIcon, IconTwitter },
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  computed: {
    url() {
      return `https://chabatake-web.com${this.$route.path}`;
    },
    textAndHashTag() {
      return encodeURIComponent(`${this.text}`);
    },
    twitterURL() {
      return `https://twitter.com/intent/tweet?url=${this.url}&text=${this.textAndHashTag}`;
    },
  },
};
</script>
