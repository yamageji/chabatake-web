<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import BasePictoFrame from './pictograms/BasePictoFrame.vue';
import PictoShimantoGawa from './pictograms/PictoShimantoGawa.vue';
import PictoTaiyaki from './pictograms/PictoTaiyaki.vue';

export default defineComponent({
  name: 'BasePictogram',
  components: {
    BasePictoFrame,
    PictoShimantoGawa,
    PictoTaiyaki,
  },
  props: {
    pictogram: {
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
  },
});
</script>

<template>
  <BasePictoFrame :width="width" :height="height">
    <PictoShimantoGawa v-if="pictogram === 'shimanto-gawa'" />
    <PictoTaiyaki v-else-if="pictogram === 'taiyaki'" />
  </BasePictoFrame>
</template>
