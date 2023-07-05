# stories

A collection of recipes for React components using Storybook.

## Features

- No UI library used for customization
- Component code can be viewed in Storybook
  <kbd><img width="1126" alt="スクリーンショット 2023-01-15 10 45 56" src="https://user-images.githubusercontent.com/58542313/212509595-b82af5df-d48b-4103-a74e-49f309e99fa4.png"></kbd>

  <kbd><img width="1120" alt="image" src="https://user-images.githubusercontent.com/58542313/212509943-0227c5b9-eef4-4f73-ada6-56da6ac526f0.png"></kbd>

## Component code display

1. Run the following shell to copy the `.tsx` files in `/stories` and generate `.code.ts`.
   ```zsh
   zsh makeCodeTs.sh
   ```
2. By setting `code` to `parameters` in `.stories.tsx`, the code file generated in step 1 can be displayed in Storybook.

   ```ts
   import code from "./●●●.code";

   export const Primary = Template.bind({});
   Primary.parameters = {
     docs: {
       source: {
         code,
       },
     },
   };
   ```

## Reference Pages

`Thank you so much to all the creators and developers!`

ESLint and Prettier

- [Vite + React (TypeScript) のプロジェクトに ESLint と Prettier を導入する。](https://chaika.hatenablog.com/entry/2022/05/15/150000)
- [Vite で作成した React（TypeScript）プロジェクトに EsLint と Prettier を導入する（2022/02）](https://zenn.dev/longbridge/articles/ae3aa36cf17d73)

ESlint import sort

- [ESlint で import を自動ソートする](https://zenn.dev/riemonyamada/articles/02e8c172e1eeb1)

Prettier

- [Prettier - What is Prettier?](https://prettier.io/docs/en/index.html)
- [Prettier 2.0 で変更されたオプションについて](https://meetup-jp.toast.com/3602)

husky

- [husky](https://typicode.github.io/husky/#/)
- [husky v6 のインストール方法と使い方。lint-staged も導入して、品質を保とう](https://fwywd.com/tech/husky-setup)
- [husky + lint-staged を動かしたメモ@2021年7月](https://zenn.dev/seya/articles/c908d88df0a587)

sanitize.css

- [sanitize.css - README.md](https://github.com/csstools/sanitize.css#readme)
- [Vite+React+Emotion に、リセット CSS を導入する。](https://zenn.dev/longbridge/articles/e2150329bad160)
- [Emotion - Global Styles](https://emotion.sh/docs/globals)
- [Storybook でプレビューに任意の CSS ファイルを読みこませる 3 つの方法](https://qiita.com/judah/items/ee735a899bf3782d7222)

global style in storybook with emotion

- [Integrate Emotion and Storybook](https://storybook.js.org/recipes/@emotion/styled)
  > In `.storybook/preview.cjs`, I had an error when using jsx, so I used `React.createElement` with the following reference.
- [can not use jsx in decorators in preview.js](https://github.com/storybookjs/storybook/issues/14742)
