/** @jsxImportSource @emotion/react */
import { useEffect } from "react";

import { css } from "@emotion/react";

import { StoryTag, WarningMsg } from "@/auxiliary-components";

export const Sticky = () => {
  const targetClasses = ["scrollWrapper", "stickyScrollbar"];

  // scrollbar with sticky
  useEffect(() => {
    const contentDoc = document.querySelector(`.${targetClasses[0]}`);
    const barDoc = document.querySelector(`.${targetClasses[1]}`);

    if (contentDoc && barDoc) {
      // コンテンツがタッチパッドやフリックによってスクロールしたら、分離したスクロールバーの方も同期してスクロールさせる。
      contentDoc.addEventListener("scroll", function () {
        const contentLeft = contentDoc.scrollLeft;
        barDoc.scrollTo(contentLeft, 0);

        // const barLeft = barDoc.scrollLeft;
        // console.log(contentLeft, barLeft); // 同期がずれていないかのチェック用。
      });

      // 分離したスクロールバーがスクロールしたら、コンテンツの方も同期してスクロールさせる。
      barDoc.addEventListener("scroll", function () {
        const barLeft = barDoc.scrollLeft;
        contentDoc.scrollTo(barLeft, 0);

        // const contentLeft = contentDoc.scrollLeft;
        // console.log(barLeft, contentLeft); // 同期がずれていないかのチェック用。
      });
    }
  }, []);

  return (
    <>
      <WarningMsg>挙動は Canvas で確認。Docs だと position: sticky が効かない模様。</WarningMsg>

      <StoryTag tagName="header with sticky">
        <main css={styles.container}>
          <header css={styles.header}>HEADER</header>
          <div css={styles.content}>MAIN CONTENT</div>
          <footer>FOOTER</footer>
        </main>
      </StoryTag>

      {/* 参照: スクロールバーの複製 */}
      {/* https://dev.classmethod.jp/articles/css_scrollbar_adjustment/ */}
      <StoryTag tagName="scrollbar with sticky">
        <div>
          <div css={styles.scrollWrapper} className={targetClasses[0]}>
            <p css={styles.scrollContent}>
              ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
              <br />
              <br />
              ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
            </p>
          </div>

          {/* 複製する横スクロールバー */}
          <div css={styles.stickyScrollbar} className={targetClasses[1]}>
            <div css={styles.scrollInner}></div>
          </div>
        </div>
      </StoryTag>
    </>
  );
};

const styles = {
  // --------------------
  // header with sticky

  container: css`
    max-width: 600px;
    border: solid 3px green;
    padding: 10px;

    & * {
      padding: 10px;
      background: #d6d6d6;
      border: dashed 3px #000;
    }
    /* "+ *" の意味 → 隣接している弟要素（ひとつ下の要素）、を表す。
      弟要素なので、一番上の <header> には適用されない */
    & * + * {
      margin-top: 24px;
    }
  `,
  header: css`
    height: 50px;
    border-color: red;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  `,
  content: css`
    min-height: 800px;
    border-color: blue;
  `,

  // --------------------
  // scrollbar with sticky

  scrollWrapper: css`
    width: 300px;
    height: 400px;
    background-color: #ceeff3;
    overflow-x: auto;

    /* スクロール機能は残しつつスクロールバーを隠す。*/
    /* for IE, Edge */
    -ms-overflow-style: none;
    /* for Firefox */
    scrollbar-width: none;
    /* for Chrome, Safari */
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  scrollContent: css`
    width: 600px;
    padding: 16px;
  `,
  stickyScrollbar: css`
    width: 300px; // scrollWrapper とそろえる。
    height: 15px; // scrollbar の高さ
    background-color: #ceeff3;
    overflow-x: auto;
    overflow-y: hidden;
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
  `,
  scrollInner: css`
    height: 1px;
    width: 600px; // scrollContent とそろえる。
  `,
};
