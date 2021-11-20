<template>
  <!-- Twitter share button -->
  <a :href="twitterURL" target="_blank" rel="noopener">
    <span>
      <BaseIcon>
        <IconTwitter />
      </BaseIcon>
    </span>
    <span>ツイート</span>
  </a>
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
