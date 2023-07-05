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
  globals: {
    module: false, // module に対する not defined の警告を抑止
  },
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
    "react/display-name": "off", // add
    // https://github.com/sweepline/eslint-plugin-unused-imports
    // eslint-plugin-unused-imports の使用にともない off に設定
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
      // "error",
      "warn",
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
