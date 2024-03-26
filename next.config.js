const starter = require("./starter.config");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  reactStrictMode: true,

  // Specify the locales for i18n
  i18n: {
    locales: starter.i18n.locales.map((locale) => locale.locale),
    defaultLocale: starter.i18n.defaultLocale,
    localeDetection: false,
  },
});
