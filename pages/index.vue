<template>
  <div class="grid grid-cols-layout grid-rows-layout">
    <div
      class="col-span-2 w-full bg-hero-pattern bg-cover bg-center border-[1px] border-warmGray-500 h-[160px] sm:h-[200px] md:h-[280px] rounded-[4px] sm:rounded-[8px] md:rounded-[12px] dark:bg-hero-pattern-dark dark:border-warmGray-100"
    ></div>

    <div class="col-span-2 md:col-span-1 mt-[16px]">
      <LayoutNavigation />
      <ul
        v-for="content in data"
        :key="content.id"
        class="border-t-[1px] border-warmGray-400 dark:border-warmGray-600"
      >
        <nuxt-link :to="`/${content.id}`">
          <div class="py-[6px] md:py-[8px]">
            <li
              class="flex items-center gap-[12px] p-[6px] hover:bg-warmGray-200 rounded-[4px] transition-bg duration-200 ease-in-out md:gap-[14px] md:p-[10px] dark:hover:bg-warmGray-700"
            >
              <div
                class="flex-none flex items-center justify-center h-[80px] w-[80px] bg-warmGray-200 rounded-[8px] md:h-[100px] md:w-[100px] dark:bg-warmGray-300"
              >
                <picture
                  v-if="content.pictogram"
                  class="w-[80%] h-[80%]"
                  aria-hidden="true"
                >
                  <img :src="content.pictogram.url" />
                </picture>
              </div>

              <div claa="flex-grow">
                <h2
                  class="text-[18px] font-noto font-bold text-warmGray-700 md:text-[22px] dark:text-warmGray-200"
                >
                  {{ content.title }}
                </h2>
                <div
                  class="text-[13px] font-noto text-warmGray-700 md:text-[15px] md:mt-[2px] dark:text-warmGray-200"
                >
                  <time>
                    <BaseIcon
                      :icon-name="'clock'"
                      withd="16"
                      height="16"
                      class="w-[13px] h-[13px] md:w-[16px] md:h-[16px]"
                      ><IconClock
                    /></BaseIcon>
                    {{ content.date | formatDate }}
                  </time>
                </div>
                <CategoryLabel
                  v-if="content.category"
                  :category="content.category"
                  class="mt-[6px] md:mt-[10px]"
                />
              </div>
            </li>
          </div>
        </nuxt-link>
      </ul>

      <!-- ページネーション -->
      <div>
        <BasePagination
          :pager="pager"
          :current="Number(page)"
          :category="selectedCategory"
        />
      </div>
    </div>

    <LayoutProfile
      class="col-span-2 mt-[40px] md:w-[260px] md:pt-[16px] md:pl-[32px] md:col-span-1 md:h-full md:mt-[80px]"
    />
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  ref,
  useContext,
  useFetch,
  useMeta,
} from '@nuxtjs/composition-api';
// import { computed } from 'vue';
import IconClock from '~/components/icons/IconClock.vue';

export default defineComponent({
  components: { IconClock },
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

    const pageTitle = computed(() => {
      if (categoryId) {
        let categoryName = categoryId;
        categoryName =
          categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
        return `${categoryName} | chabatake WEB`;
      } else {
        return 'chabatake WEB';
      }
    });
    useMeta({ title: pageTitle });
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
  head: {},
});
</script>
