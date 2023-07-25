/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { StoryTag, ANone, UlNone } from "@/auxiliary-components";

// 参考
// https://zenn.dev/kagan/articles/4f96a97aadfcb8

export const Grid = () => {
  return (
    <>
      <StoryTag tagName="Header">
        <header css={styles.header}>
          <ANone href="">
            {/* https://placehold.jp/#usage */}
            <img src="https://placehold.jp/20/31589e/ffffff/180x60.png?text=Logo+Image" alt="" />
          </ANone>
          <UlNone css={styles.headerList}>
            <li>
              <ANone href="">Products</ANone>
            </li>
            <li>
              <ANone href="">News</ANone>
            </li>
            <li>
              <ANone href="">Contact us</ANone>
            </li>
          </UlNone>
        </header>
      </StoryTag>

      <StoryTag tagName="Card">
        <div css={styles.cardContainer}>
          <div css={styles.card}>
            <p>ここにテキストが入ります。</p>
            <span>User name</span>
          </div>
          <div css={styles.card}>
            <p>ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。</p>
            <span>User name</span>
          </div>
        </div>
      </StoryTag>

      <StoryTag tagName="Tiles-1">
        <UlNone css={styles.tiles1}>
          <li>画面幅に応じて列数が可変します。</li>
          <li>
            画面幅に応じて列数が可変。{"\n"}画面幅に応じて列数が可変。{"\n"}
            画面幅に応じて列数が可変。
          </li>
          <li>テキスト</li>
          <li>テキスト</li>
          <li>テキスト</li>
        </UlNone>
      </StoryTag>

      <StoryTag tagName="Tiles-2">
        <UlNone css={styles.tiles2}>
          <li>テキスト</li>
          <li>1行の最大要素数（今回は4つ）に満たないときは中央寄せ</li>
          <li>テキスト</li>
        </UlNone>
        <UlNone css={styles.tiles2}>
          <li>2行以上のときは左寄せ</li>
          <li>テキスト</li>
          <li>テキスト</li>
          <li>テキスト</li>
          <li>テキスト</li>
        </UlNone>
      </StoryTag>

      <StoryTag tagName="grid-column-start: 要素の開始位置を指定">
        <UlNone css={styles.steps}>
          <li>Step1</li>
          <li>Step2</li>
          <li>Step3</li>
          <li>Step4</li>
          <li>Step5</li>
        </UlNone>
      </StoryTag>

      <StoryTag tagName="Link or Button with Icon">
        <div css={styles.linkWithIcons}>
          <ANone css={styles.linkWithIcon} href="">
            短い文は中央
          </ANone>
          <ANone css={styles.linkWithIcon} href="">
            長い文は before を埋めて、アイコン部分を残して左寄せで表示します。
          </ANone>
        </div>
      </StoryTag>

      {/* <StoryTag tagName="●●●">
        <UlNone css={styles.xxxxx}>
        </UlNone>
      </StoryTag> */}
    </>
  );
};

const styles = {
  // --------------------
  // Header

  header: css`
    display: grid;
    /* frとは「fraction(分数)」の略 */
    /* 💡💡 auto は要素の幅にフィットする。 */
    /* 💡💡 fr は余った幅を分割する。 */
    grid-template-columns: auto 1fr; // logo は auto、メニュー部分は 1fr を適用。それによって、logo の大きさを変えずに、メニューに残りの幅を割り当てる。
    column-gap: 16px;
    height: 60px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  `,
  headerList: css`
    display: grid;
    grid-auto-columns: 1fr; // 要素に対して自動的に適用する幅を指定。1fr だと均等に割り当てる（全要素の幅が同じになる）。
    grid-auto-flow: column; // grid レイアウトを横並びにする。
    justify-self: end; // grid レイアウトの子要素の配置を指定（flexbox と同じ）。
    column-gap: 2px;
    width: 100%;
    max-width: 400px;
    height: 100%;

    li {
      background-color: #eafbff;
    }
    a {
      display: grid;
      align-items: center; // flexbox と同じ使い方
      justify-content: center; // flexbox と同じ使い方
      height: 100%;
    }
  `,

  // --------------------
  // Card

  cardContainer: css`
    display: grid;
    grid-auto-flow: column;
    column-gap: 24px;
    justify-content: start;
  `,
  card: css`
    display: grid;
    row-gap: 16px;
    padding: 16px;
    width: 280px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    span {
      align-self: end;
      justify-self: end;
    }
  `,

  // --------------------
  // Tiles-1

  tiles1: css`
    display: grid;
    /* repeat 関数
      grid-template-rows, grid-template-columns の中で使用可能。
      例: repeat(3, 1fr) = 1fr 1fr 1fr */
    /* auto-fit, auto-fill
      どちらも、repeat関数に設定して、要素が入るだけ入れる。
      ちがいは下記参照。
      https://ascii.jp/elem/000/001/659/1659899/ */
    /* minmax 関数
      minmax(240px, 1fr) は、240px 以上 1fr 以下を表す。
      min が優位なので、240px 以上になることが担保される。 */
    /* 以上から、各要素が 240px 以上になることを担保しつつ、要素が入るだけ横並びにする、という設定。 */
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px 4%;

    li {
      background-color: #f8ecb1;
      padding: 16px;
    }
  `,

  // --------------------
  // Tiles-2

  tiles2: css`
    display: grid;
    /* template-columns と column-gap を合計して100%になるようにする。
      今回の場合要素が4つなので 22% 4% 22% 4% 22% 4% 22% = 100% */
    grid-template-columns: repeat(auto-fit, 22%);
    column-gap: 4%;
    row-gap: 24px;
    justify-content: center;

    li {
      background-color: #e7f8c7;
      padding: 16px;
    }

    &:last-of-type {
      margin-top: 32px;
      li {
        background-color: #b8e5eb;
      }
    }
  `,

  // --------------------
  // grid-column-start: 要素の開始位置を指定

  steps: css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px 40px;

    li {
      position: relative;
      background-color: #e5c7f8;
      padding: 16px;

      /* 最後の要素以外に疑似要素を作成。 */
      &:not(:last-child)::after {
        position: absolute;
        top: 50%;
        right: -29px;
        transform: translateY(-50%);
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 0 10px 18px;
        border-color: transparent transparent transparent #a768ce;
      }
    }

    /* > li */
    /* 直下の li 要素、の意。孫要素以降は含まない。 */
    & > li:nth-child(4n) {
      grid-column-start: 1; // 開始位置を1列目に指定。
    }
  `,

  // --------------------
  // Link or Button with Icon

  linkWithIcons: css`
    display: grid;
    gap: 16px;
  `,
  linkWithIcon: css`
    display: grid;
    /* before と after に 1fr、メイン要素に auto が適用される。
      結果、●●● */
    grid-template-columns: 1fr auto 1fr;
    column-gap: 8px;
    align-items: center;
    width: 300px;
    padding: 8px 16px;
    background-color: #b07052;
    color: white;
    border-radius: 1000px;

    &::before {
      content: "";
    }
    &::after {
      justify-self: end;
      content: "→";
    }
  `,
};
