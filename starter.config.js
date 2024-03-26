const config = {
  /**
   * The title of the project
   * Displayed in the header and the footer, SEO title template
   *
   * @default "Nextra Starter"
   */
  title: "Nextra Starter",

  /**
   * The GitHub repository link of the project
   * If the git provider is not GitHub, you have to modify theme.config.tsx `docsRepositoryBase` manually
   *
   * @default "https://github.com/dokdo2013/nextra-starter"
   */
  repository: "https://github.com/dokdo2013/nextra-starter",

  /**
   * Internationalization settings
   */
  i18n: {
    /**
     * The locale list of the project
     *
     * @see https://www.w3.org/International/articles/language-tags/
     * @example [{ locale: "en", displayName: "English" }, { locale: "ko", displayName: "한국어" }]
     */
    locales: [
      { locale: "en", displayName: "English" },
      { locale: "ko", displayName: "한국어" },
    ],

    /**
     * The default locale of the project
     * The default locale must be one of the locales
     *
     * @example "en"
     */
    defaultLocale: "en",
  },

  /**
   * Google Analytics settings
   * If you don't want to use Google Analytics, remove this field
   */
  googleAnalytics: {
    /**
     * The Google Analytics ID
     * You can find the ID in the Google Analytics dashboard
     * Only Google Analytics 4 is supported
     *
     * @example "G-XXXXXXXXXX"
     */
    gaId: "G-XXXXXXXX",
  },
};

export default config;
