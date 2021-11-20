import { client } from './utils/microcms';
const { API_KEY, SERVICE_DOMAIN } = process.env;

export default {
  target: 'static',

  head: {
    title: 'chabatake WEB',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content:
          '主にWEBのフロントエンド周りの技術やデザインについての学習内容、個人的な関心事についてまとめているブログです。',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'chabatake WEB',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.chabatake-web.com',
      },
      { hid: 'og:title', property: 'og:title', content: 'chabatake WEB' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '主にWEBのフロントエンド周りの技術やデザインについての学習内容、個人的な関心事についてまとめているブログです。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.chabatake-web.com/images/chabatake-web_OGP.png',
      },
      { name: 'twitter:card', content: 'summary' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    {
      src: '~/node_modules/highlight.js/styles/hybrid.css',
      lang: 'css',
    },
  ],

  plugins: ['~/plugins/filter.js', '~plugins/vue-scrollto'],

  components: true,

  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    'nuxt-microcms-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-212298003-1',
      },
    ],
  ],

  modules: ['@nuxtjs/axios', 'nuxt-webfontloader', '@nuxtjs/proxy'],

  // 開発時のプレビュー用
  proxy: {
    '/.netlify': 'http://localhost:9000',
  },

  // google font
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:400,700', 'Source+Sans+Pro:400;600'],
    },
  },

  axios: {},

  build: {},

  // microcmsの設定
  microcms: {
    options: {
      serviceDomain: SERVICE_DOMAIN,
      apiKey: API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  // ページ用のルーティング
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/page/:p',
        component: resolve(__dirname, 'pages/index.vue'),
        name: 'page',
      });
      routes.push({
        path: '/category/:categoryId/page/:p',
        component: resolve(__dirname, 'pages/index.vue'),
        name: 'category',
      });
    },
  },

  generate: {
    // choose to suit your project
    interval: 100,

    async routes() {
      const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i);
      const limit = 50;

      // 詳細ページ
      const getArticles = (offset = 0) => {
        return client
          .get({
            endpoint: 'blog',
            queries: {
              offset,
              limit,
              depth: 2,
            },
          })
          .then(async (res) => {
            let articles = [];
            if (res.totalCount > offset + limit) {
              articles = await getArticles(offset + limit);
            }
            return [
              ...res.contents.map((content) => ({
                route: `/${content.id}`,
                payload: { content },
              })),
              ...articles,
            ];
          });
      };
      const articles = await getArticles();

      // 一覧ページ
      const index = {
        route: '/',
      };

      // 一覧のページング
      const pages = await client
        .get({
          endpoint: 'blog',
          queries: {
            limit: 0,
          },
        })
        .then((res) =>
          range(1, Math.ceil(res.totalCount / 5)).map((p) => ({
            route: `/page/${p}`,
          }))
        );

      const categories = await client
        .get({
          endpoint: 'categories',
          queries: {
            fields: 'id',
          },
        })
        .then(({ contents }) => {
          return contents.map((content) => content.id);
        });

      // カテゴリーページのページング
      const categoryPages = await Promise.all(
        categories.map((category) =>
          client
            .get({
              endpoint: 'blog',
              queries: {
                limit: 0,
                filters: `category[equals]${category}`,
              },
            })
            .then((res) =>
              range(1, Math.ceil(res.totalCount / 5)).map((p) => ({
                route: `/category/${category}/page/${p}`,
              }))
            )
        )
      );

      // 2次元配列になってるのでフラットにする
      const flattenCategoryPages = [].concat.apply([], categoryPages);

      return [index, ...articles, ...pages, ...flattenCategoryPages];
    },
  },
};
