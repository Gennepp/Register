const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');

if (typeof require !== 'undefined') {
  require.extensions ['.less'] = (file) => {};
}

module.exports = withCss(
  withLess(
    withSass({
      trailingSlash: true,
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
      devIndicators: {
        autoPrerender: false,
      },
    }),
  ),
);