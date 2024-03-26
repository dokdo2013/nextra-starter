# Nextra Starter

Nextra Starter is a boilerplate template repository that makes it easier to kickstart projects using [Nextra](https://nextra.site), a Static Site Generator built with Next.js. This template includes pre-configurations for Tailwind CSS, next/font, Google Analytics, and i18n support, enabling you to quickly set up the foundation of your Nextra project.

## Getting Started

This project uses `pnpm` as its package manager.

```bash
# If you do not have pnpm installed, you need to install it first.
npm install -g pnpm

# Clone the repository
git clone https://github.com/dokdo2013/nextra-starter.git my-project

# Change the directory to the project folder
cd my-project

# Remove and reinitialize the git repository
rm -rf .git && git init

# Install the dependencies
pnpm install

# Start the development server
pnpm dev
```

Since i18n is integrated by default, it's not possible to deploy as a Next.js Static Site. You must use platforms that support SSR, such as Vercel, for deployment.

## How to Use

You can easily complete your project setup by modifying the `starter.config.js` file. Below is an example of the `starter.config.js` file.

```javascript
const config = {
  title: "Nextra Starter",
  repository: "https://github.com/dokdo2013/nextra-starter",
  i18n: {
    locales: [
      { locale: "en", displayName: "English" },
      { locale: "ko", displayName: "Korean" },
    ],
    defaultLocale: "en",
  },
  googleAnalytics: {
    gaId: "G-XXXXXXXX",
  },
};

export default config;
```

For detailed setup instructions, please refer to the JSDoc comments in the file.

## Features & Technology Stack

- Incorporates Tailwind CSS for styling.
- Utilizes next/font for optimized font loading.
- Integrated Google Analytics for website analytics using @next/third-parties.
- Supports internationalization (i18n).
- Built on the latest version of Next.js (v14), incorporating the latest features.

## How to Contribute

If you're interested in contributing to this project, please see the [CONTRIBUTING.md](./CONTRIBUTING.md) file for more information.

## License

This project is provided under the MIT License.

## Contributors

- [Hyeonwoo Jo (@dokdo2013)](https://github.com/dokdo2013)
