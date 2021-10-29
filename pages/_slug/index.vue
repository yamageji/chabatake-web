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
          pt-[8px]
          pb-[28px]
          md:px-[24px] md:pt-[12px] md:pb-[36px]
        "
      >
        <picture v-if="pictogram">
          <img :src="pictogram.url" width="120px" hight="120px" />
        </picture>
        <h1
          class="
            font-noto font-bold
            text-[28px] text-warmGray-700
            md:mt-[4px] md:text-[34px]
          "
        >
          {{ title }}
        </h1>
      </div>

      <div class="flex flex-col justify-center">
        <div class="flex gap-[8px] mt-[20px]">
          <div class="w-[10px] h-[10px] bg-warmGray-500 rounded-full"></div>
          <div class="w-[10px] h-[10px] bg-warmGray-500 rounded-full"></div>
          <div class="w-[10px] h-[10px] bg-warmGray-500 rounded-full"></div>
        </div>
        <p class="mt-[12px] text-[14px] md:text-[16px] md:mt-[20px]">
          公開：{{ date | formatDate }}
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
export default {
  async asyncData({ $microcms, params }) {
    const data = await $microcms.get({
      endpoint: `blog/${params.slug}`,
    });
    return data;
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

  font-family: 'Noto Sans JP', 'sans-serif';
  color: var(--text-color);
  font-size: 16px;
  line-height: 1.9;

  & > h1 {
    margin: 32px 0 8px;
    padding-left: 8px;
    border-left: solid 6px var(--thema-color);
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 0.02em;
  }

  & > h2 {
    margin: 28px 0 8px;
    padding-bottom: 2px;
    border-bottom: 1px solid var(--text-sub-color);
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 0.02em;
  }

  & > h3 {
    margin: 18px 0 0;
    font-size: 20px;
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
  }

  & pre {
    margin: 8px 0 8px;
    padding: 8px;
    background-color: #292524;
    color: white;
    & > code {
      background-color: #292524;
    }
  }
}

@media screen and(min-width: 768px) {
  .post ::v-deep {
    & > h1 {
      margin: 40px 0 16px;
      padding-left: 12px;
      font-size: 30px;
      border-left: solid 8px var(--thema-color);
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
</style>
