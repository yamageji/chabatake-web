<template>
  <div class="col-span-8 md:col-span-5 mt-[16px]">
    <ul
      v-for="content in data"
      :key="content.id"
      class="border-b-[1px] border-warmGray-400"
    >
      <nuxt-link :to="`/${content.id}`">
        <div class="py-[8px]">
          <li class="p-[8px] hover:bg-gray-200 rounded-[4px]">
            <h1 class="text-[16px] font-bold">
              {{ content.title }}
            </h1>
            <time class="text-[14px]">{{ content.date | formatDate }}</time>
            <CategoryLabel
              v-if="content.category"
              :category="content.category"
              class="mt-[8px]"
            />
          </li>
        </div>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const data = ref('');

    useFetch(async ({ $microcms }) => {
      const result = await $microcms.get({ endpoint: 'blog' });
      data.value = result.contents;
    });

    return { data };
  },
});
</script>
