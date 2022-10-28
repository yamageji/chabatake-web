<template>
  <div
    class="
      flex flex-col
      items-center
      justify-center
      p-16
      border border-warmGray-500
    "
  >
    <h3>今回のピクトグラム</h3>
    <p>pict説明</p>
    <a href="https://experience-japan.info/pict/t_shinkansen700n">view more</a>
  </div>
</template>

<script lnag="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'BasePictogramDescription',
});
</script>
