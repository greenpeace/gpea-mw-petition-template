// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const styledJsx = require('styled-jsx/webpack');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  env: {
    project: process.env.PROJECT,
    form: process.env.FORM,
    projectName: process.env.PROJECT_NAME,
    projectMarket: process.env.MARKET,
    themeEndpoint: process.env.THEME_ENDPOINT,
    signupNumbersHK: process.env.SIGN_UP_NUMBERS_HK,
    signupNumbersTW: process.env.SIGN_UP_NUMBERS_TW,
    signupNumbersKR: process.env.SIGN_UP_NUMBERS_KR,
    donateModule: process.env.DONATE_MODULE,
    timeStamp: String(Date.now()),
    dummyEndpoint: `https://fakestoreapi.com/users`,
    //dummyEndpoint: `//localhost:3000/api/${process.env.MARKET.toLowerCase()}/petition/websign-proxy`,
    convExp: process.env.MARKET == 'tw' ? process.env.TW_CONV_EXP : (process.env.MARKET == 'hk' ? process.env.HK_CONV_EXP : process.env.KR_CONV_EXP),
    webEventHistoryEndpoint: process.env.MARKET == 'tw' ? process.env.TW_WEB_EVENT_ENDPOINT : process.env.HK_WEB_EVENT_ENDPOINT,
  },
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? process.env.ASSETPREFIX : '',
  trailingSlash: true,
  generateBuildId: async () => {
    // 使用當前的時間戳作為 build ID
    return String(new Date().getTime());
  },
  exportPathMap: async () => ({
    '/': { page: '/' },
  }),
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return `${process.env.BUILD_ID}_${new Date().getTime()}`;
    } else {
      return `next_${new Date().getTime()}`;
    }
  },
  images: {
    domains: [
      'greenpeace.org',
      'api.greenpeace.org.hk',
      'change.greenpeace.org.hk',
      'change.greenpeace.org.tw',
    ],
    disableStaticImages: true,
  },
};

module.exports = withPlugins(
  [ [styledJsx, {vendorPrefixes: false}],
    [optimizedImages,
    {
      // these are the default values so you don't have to provide them if they are good enough for your use-case.
      // but you can overwrite them here with any valid value you want.
      inlineImageLimit: 8192,
      imagesFolder: 'images',
      imagesName: '[name]-[hash].[ext]',
      handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
      removeOriginalExtension: false,
      optimizeImages: true,
      optimizeImagesInDev: false,
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 3,
      },
      pngquant: false,
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3,
      },
      svgo: {
        // enable/disable svgo plugins here
      },
      webp: {
        preset: 'default',
        quality: 75,
      },
    }],
  ],
  nextConfig,
);
