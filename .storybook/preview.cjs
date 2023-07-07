import React from "react";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { Global } from "@emotion/react";
import { create } from "@storybook/theming";

import { globalStyles } from "../src/App";
// import vite from "../public/vite.svg";

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

  options: {
    // 参照
    // https://storybook.js.org/docs/react/configure/theming
    theme: create({
      base: "light", // @storybook/themingのデフォルトテーマとマージするカスタムベーステーマオブジェクト。これにより、カスタムスタイルを追加できます。
      brandTitle: "MY STORIES",
      // brandImage: vite, // brandTitle をロゴに置き換える
      brandUrl: "https://github.com/takahiro38k/stories",
      // brandTarget: "_self", // 同じタブでリンクページを開く。

      colorPrimary: "#0d2d72", // プライマリーカラーを定義する文字列。
      colorSecondary: "#8b500f", // セカンダリーカラーを定義する文字列。

      appBg: "#c0e8dd", // Storybookアプリケーションの背景色を定義する文字列。
      barBg: "#E3D3B6", // ヘッダーバーの背景色を定義する文字列。
      // appContentBg: "tomato", // Storybookアプリケーションのコンテンツ領域の背景色を定義する文字列。

      // textColor: "#473f3f", // テキストのカラーを定義する文字列。
      // barTextColor: "#808080", // ヘッダーバーのテキストカラーを定義する文字列。

      // appBorderColor: "tomato", // Storybookアプリケーションの境界線の色を定義する文字列。

      // fontBase: '"Open Sans", sans-serif',
      // fontCode: 'monospace',
    }),
  },
};
