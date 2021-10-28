<template>
  <div class="grid grid-cols-layout grid-rows-layout">
    <div
      class="
        col-span-2
        w-full
        border-[1px] border-warmGray-500
        h-[160px]
        sm:h-[200px]
        md:h-[280px]
        rounded-[4px]
        sm:rounded-[8px]
        md:rounded-[12px]
      "
    >
      <h1 class="mb-[20px]">{{ title }}</h1>
      <p class="mb-[40px]">{{ date | formatDate }}</p>
    </div>

    <div class="col-span-2 md:col-span-1 mt-[16px]">
      <LayoutNavigation />
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

.post ::v-deep {
  font-family: 'Noto Sans JP', 'sans-serif';
  color: #292524;
  font-size: 16px;
  line-height: 1.8;

  & > h1 {
    margin: 44px 0 16px;
    padding-left: 12px;
    border-left: solid #10b981 8px;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.05em;
  }

  & > h2 {
    margin: 32px 0 16px;
    padding-bottom: 4px;
    border-bottom: 1px solid #44403c;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.05em;
  }

  & > p {
    letter-spacing: 0.01em;

    & > strong {
      font-weight: bold;
    }
  }

  & > ol {
    list-style-type: decimal;
    list-style-position: inside;
  }
}

@media screen and(min-width: 768px) {
  .post ::v-deep {
    & > h1 {
      font-size: 30px;
    }
  }
}
</style>
