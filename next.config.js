const isProd = process.env.NODE_ENV === 'production';
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const imagesConfig = isProd
  ? {
      loader: 'custom',
      path: '',
    }
  : {};

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
    NEXT_PUBLIC_BASE_PATH: isProd ? process.env.BASEPATH : '',
  },
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? process.env.ASSETPREFIX : '',
  trailingSlash: true,
  basePath: isProd ? process.env.BASEPATH : '',
  exportPathMap: async () => ({
    '/': { page: '/' },
    '/faq': { page: '/faq' },
    '/registration': { page: '/registration' },
    '/tutorial': { page: '/tutorial' },
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
    ...imagesConfig,
  },
  // https://nextjs.org/docs/api-reference/next/image#built-in-loaders
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
