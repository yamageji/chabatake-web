<template>
  <section
    class="leading-7 pb-6 border border-warmGray-500 rounded-r-md rounded-b-md font-noto"
  >
    <div class="border-l-4 border-warmGray-500 pl-3 py-2 font-bold">
      今回のピクトグラム
    </div>
    <div class="mt-4 sm:mt-2 px-6 flex sm:flex-row flex-col gap-8 sm:gap-8">
      <div class="shrink-0 flex items-center justify-center sm:justify-start">
        <BasePictogram
          :height="96"
          :width="96"
          :pictogram="pictogram"
          class="text-warmGray-600 w-[96px] h-[96px] sm:w-[80px] sm:h-[80px] dark:text-warmGray-300"
        >
        </BasePictogram>
      </div>
      <div class="sm:pt-2">
        <h2 class="text-xl font-bold">{{ pictName }}</h2>
        <p class="mt-2">{{ pictDescription }}</p>
      </div>
    </div>
    <p class="text-xs mt-4 px-6">
      素材提供：
      <a :href="pictLink" class="underline"
        >日本デザインセンター／EXPERIENCE JAPAN PICTOGRAMS</a
      >
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import BasePictogram from '~/components/BasePictogram.vue';

export default defineComponent({
  name: 'BasePictogramDescription',
  components: {
    BasePictogram,
  },
  props: {
    pictogram: {
      type: String,
      default: '',
    },
    pictLink: {
      type: String,
      default: '',
    },
    pictName: {
      type: String,
      default: '',
    },
    pictDescription: {
      type: String,
      default: '',
    },
  },
});
</script>
