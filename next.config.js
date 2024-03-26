const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  reactStrictMode: true,

  // Specify the locales for i18n
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "en",
    localeDetection: false,
  },
});
