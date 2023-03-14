/**
 * 【参考にしたページ】
 * 作成者のみなさんに感謝
 *
 * ESLint と Prettier を導入
 * https://chaika.hatenablog.com/entry/2022/05/15/150000
 * https://zenn.dev/longbridge/articles/ae3aa36cf17d73
 *
 * ESlint で import を自動ソート
 * https://zenn.dev/riemonyamada/articles/02e8c172e1eeb1
 *
 * Prettier
 * https://prettier.io/docs/en/index.html // 公式
 * https://meetup-jp.toast.com/3602
 *
 * husky
 * https://typicode.github.io/husky/#/ // 公式
 * https://fwywd.com/tech/husky-setup
 */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier", // add
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks", // add
    "unused-imports", // add
    "import", // add
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // add
    "@typescript-eslint/no-unused-vars": "off", // add
    "unused-imports/no-unused-imports": "error", // add
    "react/no-unknown-property": ["error", { ignore: ["css"] }], // add - for emotion
    "react/no-unescaped-entities": 0, // add
    // add
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    // add
    "import/order": [
      "error",
      {
        // グループの順番
        groups: [
          "builtin",
          ["external", "internal"],
          ["parent", "sibling"],
          ["object", "type", "index"],
        ],
        // グループの間に空行追加
        "newlines-between": "always",
        // グループの pattern 判定に影響されないグループを設定
        pathGroupsExcludedImportTypes: ["builtin"],
        // ABC 順。大文字小文字を区別しない
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          // react 関連を先頭に
          {
            pattern: "react**",
            group: "external",
            position: "before",
          },
          {
            pattern: "{@/libs/**,@/features/**,@/app/**}",
            group: "internal",
            position: "before",
          },
          {
            pattern: "{@/components/**,@/pages/**}",
            group: "internal",
            position: "before",
          },
          // css modules は一番最後にする
          //   {
          //     pattern: "./**.module.css",
          //     group: "index",
          //     position: "after",
          //   },
        ],
      },
    ],
  },
  // add
  settings: {
    react: {
      version: "detect",
    },
  },
};
