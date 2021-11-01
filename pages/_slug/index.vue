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
          <span v-if="date"> 公開：{{ date | formatDate }}</span>
          <span v-if="updatedAt">　　更新：{{ updatedAt | formatDate }}</span>
        </p>
      </div>
    </div>

    <div class="col-span-2 md:col-span-1 mt-[16px]">
      <main class="col-span-2 md:col-span-1 mt-[16px]">
        <div class="post" v-html="body"></div>
      </main>
    </div>

    <LayoutProfile />
  </div>
</template>

<script>
import cheerio from 'cheerio';
import hljs from 'highlight.js';

export default {
  async asyncData({ $microcms, params }) {
    const data = await $microcms.get({
      endpoint: `blog/${params.slug}`,
    });

    // 記事内のコードのシンタックスハイライト用
    const $ = cheerio.load(data.body);
    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text());
      $(elm).html(result.value);
      $(elm).addClass('hljs');
    });

    return {
      ...data,
      body: $.html(),
    };
  },
};
</script>

<style lang="scss" scoped>
// wamgray-50：#FAFAFA
// wamgray-100：#F5F5F5
// wamgray-200：#E5E5E5
// wamgray-300：#D4D4D4
// wamgray-400：#A3A3A3
// wamgray-500：#78716C
// wamgray-600：#57534E
// wamgray-700：#44403C
// wamgray-800：#292524
// wamgray-900：#1C1917

// emerald-50: #ECFDF5
// emerald-100: #D1FAE5
// emerald-200: #A7F3D0
// emerald-300: #6EE7B7
// emerald-400: #34D399
// emerald-500: #10B981
// emerald-600: #059669
// emerald-700: #047857
// emerald-800: #166534
// emerald-900: #14532D

.post ::v-deep {
  --text-color: #292524;
  --text-sub-color: #78716c;
  --code-bg-color: #e5e5e5;
  --thema-color: #34d399;

  --text-color-dark: #e5e5e5;
  --text-sub-color-dark: #d4d4d4;
  --code-bg-color-dark: #78716c;

  font-family: 'Noto Sans JP', 'sans-serif';
  color: var(--text-color);
  font-size: 16px;
  line-height: 1.9;

  & > h1 {
    position: relative;
    margin: 32px 0 8px;
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
      background: var(--text-sub-color);
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
    &:hover {
      color: var(--thema-color);
    }
    &:visited {
      color: var(--text-sub-color);
    }
  }

  & code {
    padding: 0.2em 0.4em;
    background-color: var(--code-bg-color);
    font-size: 0.85em;
    border-radius: 4px;
    vertical-align: 0.08em;
    &.hljs {
      margin: 8px 0 8px;
      padding: 8px 12px;
    }
  }
}

@media screen and(min-width: 768px) {
  .post ::v-deep {
    & > h1 {
      margin: 40px 0 16px;
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
        background: var(--text-sub-color-dark);
      }
    }

    & > h2 {
      border-bottom: 1px solid var(--text-sub-color-dark);
    }

    & code {
      background-color: var(--code-bg-color-dark);
    }
  }
}
</style>
