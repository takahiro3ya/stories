const viteTsconfig = require("vite-tsconfig-paths"); // add
const tsconfigPaths = viteTsconfig.default; // add

const { mergeConfig } = require("vite"); // add

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },

  /**
   * tsconfig absolute paths setting
   * https://github.com/storybookjs/storybook/issues/18891
   */
  // add
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    });
  },
};
