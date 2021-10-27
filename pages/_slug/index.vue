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
.post ::v-deep {
  & > h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 40px 0 20px;
    background-color: #eee;
    padding: 10px 20px;
    border-radius: 5px;
  }

  & > h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 40px 0 16px;
    border-bottom: 1px solid #ddd;
  }

  & > p {
    line-height: 1.8;
    letter-spacing: 0.2px;
  }

  & > ol {
    list-style-type: decimal;
    list-style-position: inside;
  }
}
</style>
