// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

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
    dummyEndpoint: `https://cors-anywhere.small-service.gpeastasia.org/https://cloud.green${process.env.MARKET}.greenpeace.org/websign-dummy`,
  },
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? process.env.ASSETPREFIX : '',
  trailingSlash: true,
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
      'api.greenpeace.org.hk',
      'change.greenpeace.org.hk',
      'change.greenpeace.org.tw',
    ],
    disableStaticImages: true,
  },
};

module.exports = withPlugins(
  [
    optimizedImages,
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
    },
  ],
  nextConfig,
);
