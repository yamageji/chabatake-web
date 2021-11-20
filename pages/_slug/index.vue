<template>
  <div class="grid grid-cols-layout grid-rows-layout">
    <div class="col-span-2 mb-[56px] md:mb-[80px]">
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
            v-for="data in [1, 2, 3]"
            :key="data.index"
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
              :icon-name="'calendar'"
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
              :icon-name="'update'"
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

    <div class="col-span-2 md:col-span-1">
      <main class="post" v-html="body"></main>
    </div>

    <div
      class="
        sticky
        top-0
        col-span-2
        mdlg:col-span-1
        mt-[56px]
        mdlg:mt-[0px] mdlg:ml-[24px]
      "
    >
      <div class="mdlg:sticky mdlg:top-[24px]">
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
  async asyncData({ $microcms, params }) {
    const data = await $microcms.get({
      endpoint: `blog/${params.slug}`,
    });
    // HTMLパーサーで目次とコードのシンタックスハイライト
    const $ = cheerio.load(data.body);
    // 目次用に見出しの抜き出
    const headings = $('h1, h2, h3').toArray();
    const tableOfContent = headings.map((data) => ({
      text: data.children[0].data,
      id: data.attribs.id,
      name: data.name,
    }));
    // 記事内のコードのシンタックスハイライト
    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text());
      $(elm).html(result.value);
      $(elm).addClass('hljs');
    });
    return {
      ...data,
      body: $.html(),
      tableOfContent,
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        { hid: 'og:title', property: 'og:title', content: this.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://www.chabatake-web.com/${this.id}/`,
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
};
</script>

<style lang="scss" scoped>
.post ::v-deep {
  --text-color: #292524;
  --text-sub-color: #78716c;
  --code-bg-color: #e5e5e5;
  --thema-color: #10b981;

  --text-color-dark: #e5e5e5;
  --text-sub-color-dark: #d4d4d4;
  --code-bg-color-dark: #57534e;
  --thema-color-dark: #34d399;

  font-family: 'Noto Sans JP', 'sans-serif';
  color: var(--text-color);
  font-size: 16px;
  line-height: 1.9;
  overflow-wrap: break-word;

  & > h1 {
    position: relative;
    margin: 40px 0 8px;
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

  & > h2 {
    margin: 28px 0 8px;
    padding-bottom: 2px;
    border-bottom: 1px solid var(--text-sub-color);
    font-size: 22px;
    line-height: 1.7;
    font-weight: bold;
    letter-spacing: 0.02em;
  }

  & > h3 {
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

  & p > code,
  li > code {
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
    font-size: 0.85em;
    line-height: 1.7;
    border-radius: 4px;

    overflow-wrap: normal;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  & blockquote {
    margin: 16px 0;
    padding-left: 12px;
    color: var(--text-sub-color);
    border-left: solid 6px var(--code-bg-color);
  }

  &:first-child {
    margin-top: 0;
  }
}

@media screen and(min-width: 768px) {
  .post ::v-deep {
    font-size: 16px;
    line-height: 2.1;
    & > h1 {
      margin: 48px 0 16px;
      padding-left: 20px;
      font-size: 28px;
    }
    & > h2 {
      margin: 32px 0 16px;
      padding-bottom: 4px;
      font-size: 24px;
    }
    & > h3 {
      margin: 24px 0 0;
      font-size: 22px;
      letter-spacing: 0.02em;
    }
  }
}

@media (prefers-color-scheme: dark) {
  .post ::v-deep {
    color: var(--text-color-dark);

    & > h1 {
      &:before {
        background: var(--thema-color-dark);
      }
    }

    & > h2 {
      border-bottom: 1px solid var(--text-sub-color-dark);
    }

    & a {
      text-underline-position: under;
      color: var(--thema-color-dark);
      &:visited {
        color: var(--thema-color-dark);
      }
    }

    & p > code {
      background-color: var(--code-bg-color-dark);
    }

    & blockquote {
      color: var(--text-sub-color-dark);
    }
  }
}
</style>
