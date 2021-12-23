// next.config.js
const isProd = process.env.NODE_ENV === 'production';
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  env: {
    project: process.env.PROJECT,
    form: process.env.FORM,
    projectName: process.env.PROJECT_NAME,
    themeEndpoint: process.env.THEME_ENDPOINT,
    signupNumbersHK: process.env.SIGN_UP_NUMBERS_HK,
    signupNumbersTW: process.env.SIGN_UP_NUMBERS_TW,
    dummyEndpoint: `https://cors-anywhere.small-service.gpeastasia.org/https://cloud.green${process.env.MARKET}.greenpeace.org/websign-dummy`,
  },
  basePath: isProd ? process.env.BASEPATH : '',
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
    domains: ['api.greenpeace.org.hk', 'change.greenpeace.org.hk'],
    disableStaticImages: true,
  },
};

module.exports = withPlugins(
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        speed: 3,
        strip: true,
        verbose: true,
      },
    },
  ],
  nextConfig,
);
