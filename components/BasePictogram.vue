<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import BasePictoFrame from './pictograms/BasePictoFrame.vue';
import PictoHinode from './pictograms/PictoHinode.vue';
import PictoKombu from './pictograms/PictoKombu.vue';
import PictoShimantoGawa from './pictograms/PictoShimantoGawa.vue';
import PictoTaiyaki from './pictograms/PictoTaiyaki.vue';
import PictoYakitori from './pictograms/PictoYakitori.vue';

export default defineComponent({
  name: 'BasePictogram',
  components: {
    BasePictoFrame,
    PictoShimantoGawa,
    PictoTaiyaki,
    PictoHinode,
    PictoKombu,
    PictoYakitori,
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
  computed: {
    iconName(): string {
      return this.pictogram;
    },
  },
});
</script>

<template>
  <BasePictoFrame :width="width" :height="height" :icon-name="iconName">
    <PictoShimantoGawa v-if="pictogram === 'shimanto-gawa'" />
    <PictoTaiyaki v-else-if="pictogram === 'taiyaki'" />
    <PictoHinode v-else-if="pictogram === 'hinode'" />
    <PictoKombu v-else-if="pictogram === 'kombu'" />
    <PictoYakitori v-else-if="pictogram === 'yakitori'" />
  </BasePictoFrame>
</template>
