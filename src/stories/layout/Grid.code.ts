const code = `
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { StoryTag } from "@/auxiliary-components/StoryTag";

export const Grid = () => {
  return (
    <>
      <StoryTag tagName="header">
        <header css={styles.header}>
          <a href="">
            <img src="https://placehold.jp/180x60.png?text=ロゴ" alt="" />
          </a>
          <ul css={styles.headerList}>
            <li>
              <a href="">横並びヘッダー</a>
            </li>
            <li>
              <a href="">商品一覧</a>
            </li>
            <li>
              <a href="">お知らせ</a>
            </li>
          </ul>
        </header>
      </StoryTag>
    </>
  );
};

const styles = {
  header: css\`
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 20px;
  \`,
  headerList: css\`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    column-gap: 2px;
    justify-self: end;
    width: 100%;
    max-width: 800px;
    height: 100%;

    a {
      display: grid;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  \`,
};
`;
export default code;
