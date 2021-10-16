<template>
  <div class="col-span-8 md:col-span-5 mt-[16px]">
    <ul
      v-for="content in data"
      :key="content.id"
      class="border-b-[1px] border-warmGray-400"
    >
      <nuxt-link :to="`/${content.id}`">
        <div class="py-[8px]">
          <li
            class="
              flex
              items-center
              gap-[12px]
              p-[8px]
              hover:bg-warmGray-200
              rounded-[4px]
            "
          >
            <div
              class="
                flex
                items-center
                justify-center
                h-[80px]
                w-[80px]
                bg-warmGray-300
                rounded-[8px]
                text-[30px]
              "
            ></div>
            <div>
              <h1 class="text-[16px] font-bold">
                {{ content.title }}
              </h1>

              <time class="text-[13px] font-semibold text-warmGray-700"
                ><font-awesome-icon :icon="['far', 'clock']" />
                {{ content.date | formatDate }}</time
              >
              <CategoryLabel
                v-if="content.category"
                :category="content.category"
                class="mt-[8px]"
              />
            </div>
          </li>
        </div>
      </nuxt-link>
    </ul>

    <!-- ページェネレーション -->
    <div>
      <BasePagination
        :pager="pager"
        :current="Number(page)"
        :category="selectedCategory"
      />
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  useFetch,
  useContext,
  computed,
} from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const data = ref('');
    const selectedCategory = ref('');
    const pager = ref('');

    const { route } = useContext();
    const page = route.value.params.p || '1';
    const categoryId = route.value.params.categoryId;
    const limit = 5;
    const articleFilter =
      categoryId !== undefined ? `category[equals]${categoryId}` : undefined;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useFetch(async ({ $microcms }) => {
      const result = await $microcms.get({
        endpoint: 'blog',
        queries: {
          limit,
          offset: (page - 1) * limit,
          filters: articleFilter,
        },
      });
      data.value = result.contents;
      pager.value = computed(() => [
        ...Array(Math.ceil(result.totalCount / limit)).keys(),
      ]).value;

      const categories = await $microcms.get({
        endpoint: 'categories',
        queries: {
          fields: 'id',
        },
      });

      const myCategory =
        categoryId !== undefined
          ? categories.contents.find((content) => content.id === categoryId)
          : undefined;

      selectedCategory.value = myCategory;
    });

    return {
      data,
      selectedCategory,
      page,
      pager,
    };
  },
});
</script>
