// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const isFull = process.env.NODE_ENV === 'development';
console.info('=======================> next.config');
console.info('process.env.NODE_ENV',process.env.NODE_ENV);
console.info('assetPrefix',path.join(process.env.ASSETPREFIX, process.env.CAMPAIGN, process.env.ENV_PARAM));
console.info('=======================> next.config');

const nextConfig = {
  env: {
    project: process.env.PROJECT,
    campaign: process.env.CAMPAIGN,
    envParam: process.env.ENV_PARAM,
    projectName: process.env.PROJECT_NAME,
    projectMarket: process.env.MARKET,
    themeEndpoint: process.env.THEME_ENDPOINT,
    signupNumbersKR: process.env.SIGN_UP_NUMBERS_KR,
    donateModule: process.env.DONATE_MODULE,
    dummyEndpoint: `https://cors-anywhere.small-service.gpeastasia.org/https://cloud.greenhk.greenpeace.org/websign-dummy`,
  },
  // FIXME: Use the CDN in production and localhost for development.
  assetPrefix: (isProd || isFull) ? path.join(process.env.ASSETPREFIX, process.env.CAMPAIGN, process.env.ENV_PARAM) : '',
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
    domains: ['gpseoulwebserver.co.kr', 'greenpeace.org'],
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
