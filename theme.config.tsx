import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span className="font-bold text-xl">Nextra Starter</span>,
  project: {
    link: "https://github.com/dokdo2013/nextra-starter",
  },
  docsRepositoryBase: "https://github.com/dokdo2013/nextra-starter/tree/main",
  footer: {
    text: "Generated by Nextra Starter",
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "ko", text: "한국어" },
  ],
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Nextra Starter",
    };
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
};

export default config;
