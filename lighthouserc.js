/**
 * @file - Conifiguration for LightHouse CI. Vist the link below
 * for more details ->
 * https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md
 */

module.exports = {
  ci: {
    collect: {
      staticDistDir: './',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
