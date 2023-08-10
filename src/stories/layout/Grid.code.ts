const code = `
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

      <StoryTag tagName="見出しの装飾">
        {/* styles.heading で :first-child を使っているので <div> で wrap。
          そうしないと <StoryTag> 内の <span> が同階層なので、<span> が :first-child になってしまう。*/}
        <div>
          <h2 css={styles.heading}>見出し</h2>
          <h2 css={styles.heading}>
            どんなに見出しのテキストが長くなろうとも左右の装飾は最低限の幅を確保することができる（今回の場合は30px）
          </h2>
        </div>
      </StoryTag>

      <StoryTag tagName="Complex Grid">
        <div css={styles.complexGrids}>
          <div css={styles.complexGridA}>Alpha</div>
          <div css={styles.complexGridB}>Beta</div>
          <div css={styles.complexGridC}>Gamma</div>
          <div css={styles.complexGridD}>
            このセルの高さは
            <br />
            入るテキストの長さによって
            <br />
            変動する。
          </div>
        </div>
      </StoryTag>

      <StoryTag tagName="重なった四角形">
        <div css={styles.shiftedLayer}>
          <div>ずらした四角を重ねるレイアウト</div>
        </div>
      </StoryTag>

      <StoryTag tagName="ページレイアウト">
        <div css={styles.pageLayout}>
          <header css={styles.pageHeader}>ヘッダー（中身略）</header>
          <h1 css={styles.pageHero}>タイトル</h1>
          <nav css={styles.pageNav}>サイドナビ</nav>
          <main>メインコンテンツ（ヘッダーとタイトルも含んだ全体の高さは 100svh）</main>
        </div>
      </StoryTag>

      {/* <StoryTag tagName="●●●">
      </StoryTag> */}
    </>
  );
};

const styles = {
  // --------------------
  // Header

  header: css\`
    display: grid;
    /* frとは「fraction(分数)」の略 */
    /* 💡💡 auto は要素の幅にフィットする。 */
    /* 💡💡 fr は余った幅を分割する。 */
    grid-template-columns: auto 1fr; // logo は auto、メニュー部分は 1fr を適用。それによって、logo の大きさを変えずに、メニューに残りの幅を割り当てる。
    column-gap: 16px;
    height: 60px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  \`,
  headerList: css\`
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
  \`,

  // --------------------
  // Card

  cardContainer: css\`
    display: grid;
    grid-auto-flow: column;
    column-gap: 24px;
    justify-content: start;
  \`,
  card: css\`
    display: grid;
    row-gap: 16px;
    padding: 16px;
    width: 280px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    span {
      align-self: end;
      justify-self: end;
    }
  \`,

  // --------------------
  // Tiles-1

  tiles1: css\`
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
  \`,

  // --------------------
  // Tiles-2

  tiles2: css\`
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
  \`,

  // --------------------
  // grid-column-start: 要素の開始位置を指定

  steps: css\`
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
  \`,

  // --------------------
  // Link or Button with Icon

  linkWithIcons: css\`
    display: grid;
    gap: 16px;
  \`,
  linkWithIcon: css\`
    display: grid;
    /* before と after に 1fr、メイン要素に auto が適用される。
      結果、content が空の before は、メインの幅が広がると消失する。 */
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
  \`,

  // --------------------
  // 見出しの装飾

  heading: css\`
    display: grid;
    /* Link or Button with Icon と同様に、疑似要素の before と after にそれぞれ 1fr を適用する。 */
    grid-template-columns: 1fr auto 1fr;
    column-gap: 20px;
    align-items: center;

    &::before,
    ::after {
      content: "";
      min-width: 30px; // border の最低幅を確保。
      height: 4px;
      border-top: 1px solid currentColor;
      border-bottom: 1px solid currentColor;
    }
    &:not(:first-child) {
      margin-top: 30px;
    }
  \`,

  // --------------------
  // Complex Grid

  complexGrids: css\`
    display: grid;
    /* grid-template-areas, grid-template-columns, grid-template-rows の一括指定 */
    /* エリア名の文字数が合わないときは、スペースを入れて各列の末尾を揃えると見やすい。 */
    grid-template:
      "Alpha  Beta  Beta" 60px
      "Alpha     . Gamma" 100px // 何も要素が入らないエリアは "." を入れる。
      "Alpha Delta Gamma" auto /
      40% 80px 1fr;
    gap: 4px;

    & div {
      padding: 16px;
    }
  \`,
  complexGridA: css\`
    /* grid-template でつけた名前を指定することで、grid-template の該当箇所にあてがわれる。 */
    /* ❗️❗️ ただし、スクリーンリーダーなどを考慮し、できるだけ HTML の並びから逸脱しないこと。 */
    grid-area: Alpha;
    background-color: lightcyan;
  \`,
  complexGridB: css\`
    grid-area: Beta;
    background-color: lavender;
  \`,
  complexGridC: css\`
    grid-area: Gamma;
    background-color: bisque;
  \`,
  complexGridD: css\`
    grid-area: Delta;
    background-color: mistyrose;
  \`,

  // --------------------
  // 重なった四角形

  shiftedLayer: css\`
    display: grid;
    /* 行列それぞれ指定することで、3 * 3 = 9 のエリアを作成。 */
    grid-template-rows: 10px auto 10px;
    grid-template-columns: 10px auto 10px;
    /* わかりやすさを優先する場合、以下の書き方もできる
      grid-template:
      '. . .' 10px
      '. . .' auto
      '. . .' 10px /
      10px auto 10px;
     */

    & > div {
      /* 数字で指定した場合は grid-row-start, grid-column-start, grid-row-end, grid-column-end の一括指定。 */
      /* 「1行目・1列目から始めて、2行分・2列分使って配置」の意。 */
      /* イメージが湧きにくい場合は下記を参照。 */
      /* https://zenn.dev/kagan/articles/4f96a97aadfcb8#9.-%E8%A6%81%E7%B4%A0%E3%82%92%E9%87%8D%E3%81%AD%E3%82%8B%E3%83%AC%E3%82%A4%E3%82%A2%E3%82%A6%E3%83%88 */
      grid-area: 1 / 1 / span 2 / span 2;
      padding: 16px;
      background-color: #7c7258;
      color: white;
    }
    &::before {
      grid-area: 2 / 2 / span 2 / span 2;
      content: "";
      background-color: #ffc800;
    }
  \`,

  // --------------------
  // ページレイアウト

  pageLayout: css\`
    display: grid;
    // auto は要素の高さにフィット。残りの高さが 1fr で埋まる（min-height が 100vh なので、少なくとも画面分の高さが埋まる）。
    grid-template-rows: auto auto 1fr;
    grid-template-columns: 1fr 15%;
    /* わかりやすさを優先する場合、以下の書き方もできる
      grid-template:
      '. .' auto
      '. .' auto
      '. .' 1fr /
      1fr 15%;
     */
    column-gap: 5%;
    min-height: 100svh;
    background-color: #263131;
    color: white;

    & main {
      padding: 16px;
    }
  \`,
  pageHeader: css\`
    /* grid-row-start, grid-column-start, grid-row-end, grid-column-end の一括指定。*/
    /* 「1行目・1列目から始めて、行（高さ）は要素にあわせて・2列分使って配置」 */
    /* 図でのイメージは下記を参照。 */
    /* https://zenn.dev/kagan/articles/4f96a97aadfcb8#10.-%E3%83%9A%E3%83%BC%E3%82%B8%E5%85%A8%E4%BD%93%E3%81%AE%E3%83%AC%E3%82%A4%E3%82%A2%E3%82%A6%E3%83%88 */
    grid-area: 1 / 1 / auto / span 2;
    background-color: #4d9494;
    padding: 16px;
  \`,
  pageHero: css\`
    grid-area: 2 / 1 / auto / span 2;
    padding: 24px 15% 24px 16px;
    background-color: #2a6969;
    color: white;
  \`,
  pageNav: css\`
    /* pageHeader と要素の一部が重ねる。 */
    grid-area: 2 / 2 / span 2;
    margin-top: 40px;
    padding: 16px;
    background-color: #0f4848;
  \`,
};
`;
export default code;
