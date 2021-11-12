<template>
  <div class="grid grid-cols-layout grid-rows-layout">
    <div class="col-span-2">
      <div
        class="
          flex flex-col
          items-center
          justify-center
          w-full
          px-[12px]
          mt-[8px]
          md:px-[24px] md:mt-[12px]
        "
      >
        <picture v-if="pictogram">
          <img :src="pictogram.url" width="120px" hight="120px" />
        </picture>
        <h1
          class="
            max-w-[680px]
            mt-[8px]
            font-noto font-bold
            text-[28px] text-warmGray-700
            md:mt-[16px] md:text-[34px]
            dark:text-warmGray-200
          "
        >
          {{ title }}
        </h1>
      </div>

      <div class="flex flex-col justify-center mt-[36px] md:mt-[44px]">
        <div class="flex gap-[8px] mx-auto">
          <div
            v-for="item in [1, 2, 3]"
            :key="item.index"
            class="
              w-[8px]
              h-[8px]
              bg-warmGray-500
              rounded-full
              md:w-[10px] md:h-[10px]
              dark:bg-warmGray-300
            "
          ></div>
        </div>
        <p
          class="
            mt-[16px]
            text-[14px] text-center text-warmGray-600
            font-noto
            md:text-[16px] md:mt-[20px]
            dark:text-warmGray-200
          "
        >
          <span v-if="date" class="mr-[20px] md:mr-[26px]">
            <BaseIcon
              :icon-name="calendar"
              width="16"
              height="16"
              class="
                w-[14px]
                h-[14px]
                mr-[2px]
                md:w-[16px] md:h-[16px] md:mr-[2px]
              "
              ><IconCalendar
            /></BaseIcon>
            {{ date | formatDate }} 公開</span
          >
          <span v-if="updatedAt">
            <BaseIcon
              :icon-name="calendar"
              width="16"
              height="16"
              class="
                w-[14px]
                h-[14px]
                mr-[2px]
                md:w-[16px] md:h-[16px] md:mr-[4px]
              "
              ><IconUpdate
            /></BaseIcon>
            {{ updatedAt | formatDate }} 更新</span
          >
        </p>
      </div>
    </div>

    <div class="col-span-2 md:col-span-1 mt-[16px]">
      <main class="col-span-2 md:col-span-1 mt-[16px]">
        <div class="post" v-html="body"></div>
      </main>
    </div>

    <div
      class="sticky top-0 col-span-2 mdlg:col-span-1 mt-[64px] mdlg:ml-[24px]"
    >
      <div class="mdlg:sticky mdlg:top-[40px]">
        <LayoutTbleOfContent
          :table-of-content="tableOfContent"
          class="hidden mdlg:block"
        />

        <LayoutProfile class="mt-[40px] mdlg:w-[280px] mdlg:pl-[4px]" />
      </div>
    </div>
  </div>
</template>

<script>
import cheerio from 'cheerio';
import hljs from 'highlight.js';
import IconCalendar from '~/components/icons/IconCalendar.vue';
import IconUpdate from '~/components/icons/IconUpdate.vue';

export default {
  components: {
    IconCalendar,
    IconUpdate,
  },

  data() {
    return {
      data: {
        id: '',
        ogimage: {
          url: '',
        },
        body: '',
        title: '',
        createdAt: '',
        publishedAt: '',
        tableOfContent_visible: false,
        writer: {
          id: '',
          name: '',
          image: {
            url: '',
          },
          text: '',
        },
        partner: {
          id: '',
          company: '',
          url: '',
          description: '',
          logo: {
            url: '',
          },
        },
        category: {
          name: '',
          color: '',
        },
        related_blogs: [],
      },
      tableOfContent: [],
      contents: [],
      categories: [],
    };
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.data && this.data.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.data && this.data.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.data && this.data.description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://blog.microcms.io/${this.data && this.data.id}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.data && this.data.ogimage && this.data.ogimage.url,
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/monokai-sublime.min.css',
        },
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js',
          async: true,
        },
      ],
    };
  },

  async created() {
    const query = this.$route.query;
    if (query.id === undefined || query.draftKey === undefined) {
      return;
    }
    const { data, error } = await axios
      .get(
        `/.netlify/functions/draft?id=${query.id}&draftKey=${query.draftKey}`
      )
      .catch((error) => ({ error }));
    if (error) {
      return;
    }
    this.data = data;

    // 目次作成
    const $ = cheerio.load(data.body);
    const headings = $('h1, h2, h3').toArray();
    const tableOfContent = headings.map((d) => {
      return {
        text: d.children[0].data,
        id: d.attribs.id,
        name: d.name,
      };
    });
    this.tableOfContent = tableOfContent;

    $('pre code').each((_, elm) => {
      const res = hljs.highlightAuto($(elm).text());
      $(elm).html(res.value);
      $(elm).addClass('hljs');
    });

    this.data.body = $.html();
  },
};
</script>
