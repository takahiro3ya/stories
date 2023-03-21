import React from "react";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { Global } from "@emotion/react";

import { globalStyles } from "../src/App";

const GlobalStyles = () => {
  return React.createElement(Global, {
    styles: globalStyles,
  });
};

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyles component to all stories
  }),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen", // コンポーネントを空白なしで表示
  // https://github.com/storybookjs/storybook/issues/12111
  viewMode: "docs", // Docs タブを優先して表示
  // タブのコントロール
  // https://stackoverflow.com/questions/59933162/how-to-disable-docs-tab-in-storybook
  // previewTabs: {
  //   canvas: {
  //     hidden: true, // Canvas タブを隠す
  //   },
  //   'storybook/docs/panel': {
  //     hidden: true, // Docs タブを隠す
  //   },
  // },
};
