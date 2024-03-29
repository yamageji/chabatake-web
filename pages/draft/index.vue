<template>
  <div class="grid grid-cols-layout grid-rows-layout">
    <div class="col-span-2 mb-[56px] md:mb-[80px]">
      <div
        class="flex flex-col items-center justify-center w-full px-[12px] mt-[8px] md:px-[24px] md:mt-[12px]"
      >
        <BasePictogram
          :pictogram="data.pictogram"
          class="text-warmGray-600 w-[100px] h-[100px] md:w-[120px] md:h-[120px] dark:text-warmGray-300"
        >
        </BasePictogram>
        <h1
          class="max-w-[680px] mt-[8px] font-noto font-bold text-[28px] text-warmGray-700 md:mt-[16px] md:text-[34px] dark:text-warmGray-200"
        >
          {{ data.title }}
        </h1>
      </div>

      <div class="flex flex-col justify-center mt-[36px] md:mt-[44px]">
        <div class="flex gap-[8px] mx-auto">
          <div
            v-for="item in [1, 2, 3]"
            :key="item.index"
            class="w-[8px] h-[8px] bg-warmGray-500 rounded-full md:w-[10px] md:h-[10px] dark:bg-warmGray-300"
          ></div>
        </div>
        <p
          class="mt-[16px] text-[14px] text-center text-warmGray-600 font-noto md:text-[16px] md:mt-[20px] dark:text-warmGray-200"
        >
          <span v-if="data.date" class="mr-[20px] md:mr-[26px]">
            <BaseIcon
              :icon-name="'calendar'"
              width="16"
              height="16"
              class="w-[14px] h-[14px] mr-[2px] md:w-[16px] md:h-[16px] md:mr-[2px]"
              ><IconCalendar
            /></BaseIcon>
            {{ data.date | formatDate }} 公開</span
          >
          <span v-if="data.updatedAt">
            <BaseIcon
              :icon-name="'update'"
              width="16"
              height="16"
              class="w-[14px] h-[14px] mr-[2px] md:w-[16px] md:h-[16px] md:mr-[4px]"
              ><IconUpdate
            /></BaseIcon>
            {{ data.updatedAt | formatDate }} 更新</span
          >
        </p>
      </div>
    </div>

    <div class="col-span-2 md:col-span-1">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <main class="post" v-html="data.body"></main>
      <BasePictogramDescriptionVue
        class="mt-16"
        :pictogram="data.pictogram"
        :pict-link="data.pictLink"
        :pict-name="data.pictName"
        :pict-description="data.pictDescription"
      ></BasePictogramDescriptionVue>

      <div
        class="mt-[40px] text-center text-warmGray-700 mdlg:mt-[52px] dark:text-warmGray-200"
      >
        <BaseSnsShareButton :text="title" />
      </div>
    </div>

    <div
      class="sticky top-0 col-span-2 mdlg:col-span-1 mt-[20px] mdlg:mt-[0px] mdlg:ml-[32px]"
    >
      <div class="mdlg:sticky mdlg:top-[24px]">
        <LayoutTbleOfContent
          :table-of-content="tableOfContent"
          class="hidden mdlg:block"
        />

        <LayoutProfile
          class="mt-[48px] mdlg:w-[280px] mdlg:pl-[4px] mdlg:mt-[40px]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import cheerio from 'cheerio';
import hljs from 'highlight.js';
import BasePictogram from '~/components/BasePictogram.vue';
import BaseSnsShareButton from '~/components/BaseSnsShareButton.vue';
import IconCalendar from '~/components/icons/IconCalendar.vue';
import IconUpdate from '~/components/icons/IconUpdate.vue';
import BasePictogramDescriptionVue from '~/components/BasePictogramDescription.vue';

export default {
  components: {
    IconCalendar,
    IconUpdate,
    BaseSnsShareButton,
    BasePictogram,
    BasePictogramDescriptionVue,
  },

  data() {
    return {
      data: {
        id: '',
        title: '',
        body: '',
        category: '',
        pictogram: '',
        publishedAt: '',
        updatedAt: '',
      },
      tableOfContent: [],
    };
  },

  head() {
    return {
      title: `${this.data.title} | chabatake WEB`,
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
          content: `https://www.chabatake-web.com${this.data && this.data.id}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.chabatake-web.com/images/chabatake-web_OGP.png',
        },
        { name: 'twitter:card', content: 'summary' },
        { hid: 'og:type', property: 'og:type', content: 'article' },
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
    const $ = cheerio.load(data.body, null, false);
    const headings = $('h2, h3').toArray();
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

<style lang="scss" scoped>
.post ::v-deep {
  --text-color: #292524;
  --text-sub-color: #78716c;
  --code-bg-color: #e7e5e4;
  --pre-bg-color: #292524;
  --thema-color: #10b981;

  --text-color-dark: #e7e5e4;
  --text-sub-color-dark: #d4d4d4;
  --code-bg-color-dark: #44403c;
  --pre-bg-color-dark: #1c1917;
  --thema-color-dark: #6ee7b7;

  font-family: 'Noto Sans JP', 'sans-serif';
  color: var(--text-color);
  font-size: 16px;
  line-height: 1.9;
  overflow-wrap: break-word;

  & > h2 {
    position: relative;
    margin: 60px 0 8px;
    padding-left: 16px;
    font-size: 26px;
    line-height: 1.7;
    font-weight: bold;
    letter-spacing: 0.02em;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
      width: 6px;
      height: 100%;
      background: var(--thema-color);
    }
  }

  & > h3 {
    margin: 28px 0 8px;
    padding-bottom: 2px;
    border-bottom: 1px solid var(--text-sub-color);
    font-size: 22px;
    line-height: 1.7;
    font-weight: bold;
    letter-spacing: 0.02em;
  }

  & > h4 {
    margin: 18px 0 0;
    font-size: 20px;
    line-height: 1.7;
    font-weight: bold;
    letter-spacing: 0.02em;
  }

  & > p {
    letter-spacing: 0.01em;

    & > strong {
      font-weight: bold;
    }
  }

  & > ul {
    list-style-type: disc;
    list-style-position: inside;
    padding-left: 16px;
  }

  & > ol {
    list-style-type: decimal;
    list-style-position: inside;
    padding-left: 16px;
  }

  & a {
    text-decoration: underline;
    text-underline-position: under;
    color: var(--thema-color);
    &:visited {
      color: var(--thema-color);
    }
  }

  & code {
    padding: 0.2em 0.4em;
    margin-left: 0.1em;
    margin-right: 0.1em;
    background-color: var(--code-bg-color);
    font-size: 0.85em;
    border-radius: 4px;
    vertical-align: 0.08em;
  }

  & pre {
    margin: 12px 0;
    line-height: 1.8;
    border-radius: 4px;

    overflow-wrap: normal;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  & pre > code {
    padding: 12px;
    background-color: var(--pre-bg-color);
  }

  & blockquote {
    margin: 16px 0;
    padding-left: 12px;
    color: var(--text-sub-color);
    border-left: solid 5px var(--text-sub-color);
  }

  &:first-child {
    margin-top: 0;
  }
}

@media screen and(min-width: 768px) {
  .post ::v-deep {
    font-size: 16px;
    line-height: 2.1;
    & > h2 {
      margin: 48px 0 16px;
      padding-left: 20px;
      font-size: 28px;
    }
    & > h3 {
      margin: 32px 0 16px;
      padding-bottom: 4px;
      font-size: 24px;
    }
    & > h4 {
      margin: 24px 0 0;
      font-size: 22px;
      letter-spacing: 0.02em;
    }
  }
}

@media (prefers-color-scheme: dark) {
  .post ::v-deep {
    color: var(--text-color-dark);

    & > h2 {
      &:before {
        background: var(--thema-color-dark);
      }
    }

    & > h3 {
      border-bottom: 1px solid var(--text-sub-color-dark);
    }

    & a {
      text-underline-position: under;
      color: var(--thema-color-dark);
      &:visited {
        color: var(--thema-color-dark);
      }
    }

    & code {
      background-color: var(--code-bg-color-dark);
    }

    & pre > code {
      background-color: var(--pre-bg-color-dark);
    }

    & blockquote {
      color: var(--text-sub-color-dark);
      border-left: solid 5px var(--text-sub-color-dark);
    }
  }
}
</style>
