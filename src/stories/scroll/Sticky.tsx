/** @jsxImportSource @emotion/react */
import { useEffect, useCallback } from "react";

import { css } from "@emotion/react";

import { StoryTag, WarningMsg } from "@/auxiliary-components";

export const Sticky = () => {
  const targetIds = ["scrollWrapperId", "stickyScrollbarId"];

  const listener = useCallback((e: Event) => {
    const { id: targetId, scrollLeft } = e.target as HTMLDivElement;
    const anotherEl = document.getElementById(targetIds.find((id) => id !== targetId) ?? "");

    if (anotherEl) {
      anotherEl.scrollTo(scrollLeft, 0);
    }

    // 同期がずれていないかのチェック用。
    // const anotherLeft = anotherEl?.scrollLeft;
    // console.log(scrollLeft, anotherLeft);
  }, []);

  // scrollbar with sticky
  useEffect(() => {
    const contentDoc = document.getElementById(targetIds[0]);
    const barDoc = document.getElementById(targetIds[1]);

    if (contentDoc && barDoc) {
      // コンテンツがタッチパッドやフリックによってスクロールしたら、分離したスクロールバーの方も同期してスクロールさせる。
      contentDoc.addEventListener("scroll", listener);
      // 分離したスクロールバーがスクロールしたら、コンテンツの方も同期してスクロールさせる。
      barDoc.addEventListener("scroll", listener);
    }

    return () => {
      if (contentDoc && barDoc) {
        contentDoc.removeEventListener("scroll", listener);
        barDoc.removeEventListener("scroll", listener);
      }
    };
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
          <div css={styles.scrollWrapper} id={targetIds[0]}>
            <p css={styles.scrollContent}>
              ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
              <br />
              <br />
              ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
            </p>
          </div>

          {/* 複製する横スクロールバー */}
          <div css={styles.stickyScrollbar} id={targetIds[1]}>
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
